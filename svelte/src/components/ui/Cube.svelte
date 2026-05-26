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

    const config = {
        radius: 1.1,
        cardWidth: 1.65,
        cardHeight: 1.15,
        facePadding: 0.12, // 0 = full face, 1 = no face. Gap around each plane so you can see through the cube.
        baseRotationSpeed: 0.003,
        portraitSpeedMultiplier: 1.0,
        tiltLoopSpeed: 0.005,
        tiltLimit: Math.PI,
        baseTilt: {
            tiltX: 0.3,
            tiltZ: 0.1,
        },
        landscape: {
            cameraZ: 9,
            masterRotationZ: 0,
        },
        portrait: {
            cameraZ: 12,
            masterRotationZ: 75 * (Math.PI / 180),
        },
    };

    // Vertex shader — flat plane, just pass through view-space data + world normal/depth
    const vertexShader = `
        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        void main() {
            vUv = uv;

            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            vViewPosition = -mvPosition.xyz;
            vDepth = worldPos.z;
            vCurveNormal = normalize(normalMatrix * normal);

            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    // Fragment shader — ported from Drum: wrapped diffuse + specular + rim + horizon fade
    const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform vec3 uLightDir;
        uniform float uAmbientStrength;
        uniform float uDiffuseStrength;
        uniform float uSpecularStrength;
        uniform float uRimStrength;
        uniform float uRadius;

        varying vec2 vUv;
        varying float vDepth;
        varying vec3 vCurveNormal;
        varying vec3 vViewPosition;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // DoubleSide: flip normal on back faces so lighting is consistent
            vec3 normal = normalize(vCurveNormal);
            if (!gl_FrontFacing) normal = -normal;

            vec3 lightDir = normalize(uLightDir);
            vec3 viewDir = normalize(vViewPosition);
            vec3 halfVector = normalize(lightDir + viewDir);

            float diffuse = max(dot(normal, lightDir), 0.0);
            float wrappedDiffuse = diffuse * 0.75 + 0.25;
            float specular = pow(max(dot(normal, halfVector), 0.0), 20.0);
            float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

            float horizonFade = smoothstep(-uRadius * 0.85, 0.0, vDepth);

            float lighting = uAmbientStrength + wrappedDiffuse * uDiffuseStrength;

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

        // Cube has 6 faces — cycle through provided images
        const FACE_COUNT = 6;

        let renderer: WebGLRenderer;
        let animationId: number;
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
        const camera = new PerspectiveCamera(35, 1, 0.1, 30);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        function onContextLost(e: Event) {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        }
        function onContextRestored() {
            if (!disposed) animate();
        }
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);
        renderer.domElement.addEventListener(
            "webglcontextrestored",
            onContextRestored,
        );

        // Scene hierarchy: orientationGroup > tiltWrapper > mainGroup > meshes
        const orientationGroup = new Group();
        scene.add(orientationGroup);

        const tiltWrapper = new Group();
        orientationGroup.add(tiltWrapper);

        const mainGroup = new Group();
        tiltWrapper.add(mainGroup);

        // Lighting handled per-fragment in the shader (matches Drum)

        // Build meshes — six square faces of a symmetrical cube
        const half = config.radius;
        const faceSize = config.radius * 2 * (1 - config.facePadding);

        // [position, euler rotation] for each face, outward-facing
        const faceTransforms: Array<{
            pos: [number, number, number];
            rot: [number, number, number];
        }> = [
            { pos: [half, 0, 0], rot: [0, Math.PI / 2, 0] }, // +X
            { pos: [-half, 0, 0], rot: [0, -Math.PI / 2, 0] }, // -X
            { pos: [0, half, 0], rot: [-Math.PI / 2, 0, 0] }, // +Y
            { pos: [0, -half, 0], rot: [Math.PI / 2, 0, 0] }, // -Y
            { pos: [0, 0, half], rot: [0, 0, 0] }, // +Z
            { pos: [0, 0, -half], rot: [0, Math.PI, 0] }, // -Z
        ];

        const geometry = new PlaneGeometry(1, 1);
        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];
        const textures: Texture[] = [];
        const textureCache = new Map<string, Texture>();

        function getTexture(url: string): Texture {
            const cached = textureCache.get(url);
            if (cached) return cached;
            const tex = textureLoader.load(url, (loaded) => {
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
            textureCache.set(url, tex);
            textures.push(tex);
            return tex;
        }

        for (let i = 0; i < FACE_COUNT; i++) {
            const image = images[i % images.length];
            const tex = getTexture(image.url);

            const material = new ShaderMaterial({
                uniforms: {
                    uTexture: { value: tex },
                    uImageRes: { value: new Vector2(1, 1) },
                    uPlaneSize: {
                        value: new Vector2(faceSize, faceSize),
                    },
                    uLightDir: { value: new Vector3(0.7, 0.95, 1.2) },
                    uAmbientStrength: { value: 0.6 },
                    uDiffuseStrength: { value: 0.55 },
                    uSpecularStrength: { value: 0.12 },
                    uRimStrength: { value: 0.08 },
                    uRadius: { value: config.radius },
                },
                vertexShader,
                fragmentShader,
                side: DoubleSide,
            });

            if (!tex.userData.materials) {
                tex.userData.materials = [];
            }
            tex.userData.materials.push(material);

            materials.push(material);

            const mesh = new Mesh(geometry, material);
            const { pos, rot } = faceTransforms[i];
            mesh.position.set(pos[0], pos[1], pos[2]);
            mesh.rotation.set(rot[0], rot[1], rot[2]);
            mesh.scale.set(faceSize, faceSize, 1);

            mainGroup.add(mesh);
        }

        // Animation state
        let loopValue = -config.tiltLimit;
        let loopDirection = 1;
        let absoluteRotation = 0;
        let currentRotationSpeed = config.baseRotationSpeed;

        function updateOrientation() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;

            const isPortrait = width / height < 1;
            const settings = isPortrait ? config.portrait : config.landscape;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            camera.position.set(0, 0, settings.cameraZ);
            camera.lookAt(0, 0, 0);

            const calculatedOffsetV =
                (config.radius * Math.sin(config.baseTilt.tiltX)) / 2.2;
            orientationGroup.position.y = calculatedOffsetV;
            orientationGroup.rotation.z = settings.masterRotationZ;

            currentRotationSpeed = isPortrait
                ? config.baseRotationSpeed * config.portraitSpeedMultiplier
                : config.baseRotationSpeed;
        }

        updateOrientation();

        resizeObserver = new ResizeObserver(updateOrientation);
        resizeObserver.observe(container);

        // Pause animation when off-screen
        let isVisible = true;
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        // Animation loop
        function animate() {
            if (!isVisible || disposed) return;
            animationId = requestAnimationFrame(animate);

            loopValue += config.tiltLoopSpeed * loopDirection;
            if (loopValue >= config.tiltLimit) {
                loopValue = config.tiltLimit;
                loopDirection = -1;
            } else if (loopValue <= -config.tiltLimit) {
                loopValue = -config.tiltLimit;
                loopDirection = 1;
            }

            absoluteRotation += currentRotationSpeed;

            tiltWrapper.rotation.y = loopValue;
            tiltWrapper.rotation.x = config.baseTilt.tiltX;
            tiltWrapper.rotation.z = config.baseTilt.tiltZ;

            mainGroup.rotation.y = absoluteRotation - loopValue;

            renderer.render(scene, camera);
        }

        animate();

        // Cleanup
        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            renderer.domElement.removeEventListener(
                "webglcontextlost",
                onContextLost,
            );
            renderer.domElement.removeEventListener(
                "webglcontextrestored",
                onContextRestored,
            );

            // Remove scene children to break references
            mainGroup.clear();
            tiltWrapper.clear();
            orientationGroup.clear();
            scene.clear();

            // Dispose GPU resources
            geometry.dispose();
            for (const mat of materials) mat.dispose();
            for (const tex of textures) tex.dispose();
            textureCache.clear();
            materials.length = 0;
            textures.length = 0;

            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div class="cube-container" bind:this={container}></div>

<style>
    :global(c-cube) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .cube-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .cube-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }
</style>
