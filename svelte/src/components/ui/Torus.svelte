<script lang="ts">
    import { onMount } from "svelte";
    import {
        DoubleSide,
        Group,
        LinearFilter,
        Mesh,
        NoToneMapping,
        PerspectiveCamera,
        PlaneGeometry,
        SRGBColorSpace,
        Scene,
        ShaderMaterial,
        TextureLoader,
        Vector2,
        Vector3,
        WebGLRenderer,
    } from "three";
    import type { Texture } from "three";

    let {
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    const TWO_PI = 2 * Math.PI;

    // Config
    const CARD_WIDTH = 4.0;
    const CARD_HEIGHT = 1.4;
    const MAJOR_RADIUS = 2.4; // donut center -> tube center
    const MINOR_RADIUS = 0.95; // tube radius
    const CAMERA_Z = 11;
    const ROTATION_SPEED = 0.006;
    const LIGHT_DIRECTION = [0.7, 0.95, 1.2] as const;

    // Vertex shader — wraps each card onto the outer face of a torus
    const vertexShader = `
        uniform float uMajorRadius;
        uniform float uMinorRadius;
        uniform float uBaseAngle;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        void main() {
            // UVs stay at full scale — image doesn't distort
            vUv = uv;

            // u = angle around the major axis (around Y); plane X → arc length
            // Arc length on the outer ring uses (R + r)
            float u = uBaseAngle + position.x / (uMajorRadius + uMinorRadius);

            // v = angle around the minor axis (tube cross-section), centered at outer face (v=0)
            // Plane Y → arc length on the tube; uScaleY shrinks height around center
            float v = (position.y * uScaleY) / uMinorRadius;

            float cv = cos(v);
            float sv = sin(v);
            float ringR = uMajorRadius + uMinorRadius * cv;

            vec3 pos;
            pos.x = sin(u) * ringR;
            pos.y = uMinorRadius * sv;
            pos.z = cos(u) * ringR;

            vDepth = pos.z;
            vHeight = pos.y;
            // Surface normal of the torus tube at (u, v)
            vCurveNormal = normalize(vec3(sin(u) * cv, sv, cos(u) * cv));

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    // Fragment shader — texture mapping (identical to Drum: V remap for mask reveal)
    const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;
        varying float vHeight;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            // Remap V so the image stays full-size, centered — mask reveal effect
            float remappedV = mix(0.5 - 0.5 * uScaleY, 0.5 + 0.5 * uScaleY, vUv.y);
            vec2 maskedUv = vec2(vUv.x, remappedV);

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            vec3 normal = normalize(vCurveNormal);
            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uPlaneSize.x * 0.85, 0.0, vDepth);
            float verticalShade = smoothstep(-uPlaneSize.y * 0.9, uPlaneSize.y * 0.4, vHeight);

            float lighting = uAmbientStrength
                + wrappedDiffuse * uDiffuseStrength
                + verticalShade * 0.08;

            vec3 litColor = tex.rgb * lighting;
            litColor += vec3(1.0) * specular * uSpecularStrength;
            litColor += vec3(1.0) * rim * uRimStrength;

            float fade = mix(0.26, 1.0, horizonFade);
            gl_FragColor = vec4(litColor * fade, tex.a);
        }
    `;

    let container: HTMLDivElement;

    onMount(() => {
        if (!images.length || !container) return;

        let renderer: WebGLRenderer;
        let animationId = 0;
        let isAnimating = false;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            return;
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            stopLoop();
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            if (!disposed && isVisible) startLoop();
        });

        // Tilt the torus so the donut shape reads as 3D (inverted on both axes)
        const drum = new Group();
        drum.position.y = 0.0;
        drum.rotation.z = 4 * (Math.PI / 180);
        drum.rotation.x = 4 * (Math.PI / 180);
        // Uniform scale 0.84, then ×2.01 stretch on Y for "torus-as-cylinder" height
        drum.scale.set(0.84, 0.84 * 2.01, 0.84);
        scene.add(drum);

        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];

        // 24 X-segments (major wrap), 14 Y-segments (minor wrap)
        const geometry = new PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 24, 14);

        // Fill torus with meshes around full 360° of major axis
        const cardCount = images.length;
        const MESH_COUNT = 5;
        const angleStep = TWO_PI / MESH_COUNT;

        // Cache textures by image index
        const textureCache = new Map<number, Texture>();
        function getTexture(imageIndex: number): Texture {
            if (textureCache.has(imageIndex))
                return textureCache.get(imageIndex)!;
            const tex = textureLoader.load(images[imageIndex].url, (loaded) => {
                if (loaded.image) {
                    const w = loaded.image.width || 1;
                    const h = loaded.image.height || 1;
                    for (const mat of (loaded.userData.materials ||
                        []) as ShaderMaterial[]) {
                        mat.uniforms.uImageRes.value.set(w, h);
                    }
                }
            });
            tex.minFilter = LinearFilter;
            tex.magFilter = LinearFilter;
            textureCache.set(imageIndex, tex);
            return tex;
        }

        for (let i = 0; i < MESH_COUNT; i++) {
            const imageIndex = i % cardCount;
            const baseSeatAngle = -i * angleStep;
            const texture = getTexture(imageIndex);

            const material = new ShaderMaterial({
                uniforms: {
                    uMajorRadius: { value: MAJOR_RADIUS },
                    uMinorRadius: { value: MINOR_RADIUS },
                    uBaseAngle: { value: baseSeatAngle },
                    uScaleY: { value: 0.0 },
                    uTexture: { value: texture },
                    uPlaneSize: {
                        value: new Vector2(CARD_WIDTH, CARD_HEIGHT),
                    },
                    uImageRes: { value: new Vector2(1, 1) },
                    uLightDir: {
                        value: new Vector3(
                            LIGHT_DIRECTION[0],
                            LIGHT_DIRECTION[1],
                            LIGHT_DIRECTION[2],
                        ),
                    },
                    uAmbientStrength: { value: 0.6 },
                    uDiffuseStrength: { value: 0.55 },
                    uSpecularStrength: { value: 0.12 },
                    uRimStrength: { value: 0.08 },
                },
                vertexShader,
                fragmentShader,
                side: DoubleSide,
            });

            if (!texture.userData.materials) {
                texture.userData.materials = [];
            }
            texture.userData.materials.push(material);

            const mesh = new Mesh(geometry, material);
            drum.add(mesh);
            materials.push(material);
        }

        // --- Sizing ---
        let resizeTimer: ReturnType<typeof setTimeout>;
        function updateSize() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateSize, 100);
        });
        resizeObserver.observe(container);
        requestAnimationFrame(updateSize);

        // --- Timeline-driven animation ---
        // Phase 1: Grow in (staggered per card) → Phase 2: spin forever
        const INTRO_DUR = 0.6; // seconds — each card's grow duration
        const STAGGER = 0.12; // seconds — delay between each card

        let rotationOffset = 0;
        let isVisible = true;
        let startTime = -1;

        function startLoop() {
            if (disposed || !isVisible || isAnimating) return;
            isAnimating = true;
            animationId = requestAnimationFrame(animate);
        }

        function stopLoop() {
            if (!isAnimating) return;
            cancelAnimationFrame(animationId);
            animationId = 0;
            isAnimating = false;
        }

        // Ease-in-out cubic — smooth acceleration and deceleration
        function easeInOutCubic(t: number) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function getCardScaleY(cardIndex: number, elapsed: number): number {
            // Intro: last card opens first; stays at 1.0 after intro completes
            const delay = (MESH_COUNT - 1 - cardIndex) * STAGGER;
            const introT = Math.max(
                0,
                Math.min(1, (elapsed - delay) / INTRO_DUR),
            );
            return easeInOutCubic(introT);
        }

        function animate() {
            if (!isVisible || disposed) {
                isAnimating = false;
                return;
            }
            animationId = requestAnimationFrame(animate);

            const now = performance.now() / 1000;
            if (startTime < 0) startTime = now;
            const elapsed = now - startTime;

            rotationOffset += ROTATION_SPEED;

            // Update all materials with per-card stagger
            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatAngle = -i * angleStep;
                materials[i].uniforms.uBaseAngle.value =
                    baseSeatAngle + rotationOffset;
                materials[i].uniforms.uScaleY.value = getCardScaleY(i, elapsed);
            }

            renderer.render(scene, camera);
        }

        // Pause animation when off-screen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) startLoop();
                else stopLoop();
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        startLoop();

        // --- Cleanup ---
        return () => {
            disposed = true;
            stopLoop();
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            geometry.dispose();
            for (const mat of materials) mat.dispose();
            textureCache.forEach((tex) => tex.dispose());
            textureCache.clear();
            renderer.dispose();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div class="drum-shell">
    <div class="drum-shadow" aria-hidden="true"></div>
    <div class="drum-container" bind:this={container}></div>
</div>

<style>
    :global(c-torus) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .drum-shell {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .drum-container {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .drum-shadow {
        position: absolute;
        left: 50%;
        bottom: 18%;
        width: min(38vw, 460px);
        height: min(11vw, 120px);
        transform: translateX(-50%);
        border-radius: 999px;
        background:
            radial-gradient(
                ellipse at center,
                rgba(0, 0, 0, 0.34) 0%,
                rgba(0, 0, 0, 0.18) 42%,
                rgba(0, 0, 0, 0.08) 62%,
                rgba(0, 0, 0, 0) 78%
            );
        filter: blur(16px);
        opacity: 0.9;
        pointer-events: none;
    }

    .drum-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }

    @media (max-width: 991px) {
        .drum-shadow {
            bottom: 22%;
            width: min(56vw, 360px);
            height: min(16vw, 110px);
            filter: blur(14px);
        }
    }
</style>
