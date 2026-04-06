# Process Log

## Motion State Body Attribute Rename (2026-04-06)

### What was done
Renamed the global body-level motion flag from a boolean `data-motion-stagger-disabled` attribute to `data-motion-state="enabled|disabled"`.

### What the problem was
The old attribute encoded only one stagger-specific disabled state, which made the motion contract less expressive now that the shared motion bootstrap controls more than just text stagger behavior.

### What fixed it
Updated the body output in `site/snippets/head.php` to emit `data-motion-state` and changed the motion gate in `assets/js/script.js` to treat `data-motion-state="disabled"` as the CMS-driven opt-out signal.

## Responsive Motion Reinitialization (2026-04-06)

### What was done
Refactored the global motion bootstrap so desktop-only animations can tear down and reinitialize live when the viewport crosses the tablet breakpoint or when responsive layout shifts require SplitText to be rebuilt.

### What the problem was
The earlier desktop gate only applied on initial page load, so resizing across the breakpoint could leave Lenis, Barba, and SplitText running in the wrong mode, while text that had already been split into line wrappers could keep stale line breaks after responsive width changes.

### What fixed it
Rewrote `assets/js/script.js` around a shared responsive motion lifecycle that watches breakpoint changes, window resize, and relevant DOM mutations; tears down Lenis and Barba on tablet/mobile; reverts SplitText markup when leaving desktop; and rebuilds stagger line structure without replaying the full animation on layout refreshes.

## Desktop-Only Motion Gating (2026-04-06)

### What was done
Restricted the global text stagger, Lenis smooth scrolling, and Barba transition system to desktop viewports only.

### What the problem was
The shared `script.js` motion lifecycle ran on all devices, so tablet and mobile users still received SplitText reveals, Lenis scroll behavior, and Barba-driven opacity transitions instead of a simpler static browsing experience.

### What fixed it
Added a shared desktop breakpoint gate in `assets/js/script.js` and used it to make the stagger system skip at `991px` and below, while also preventing Lenis and Barba from initializing on non-desktop devices so those viewports fall back to native scrolling and normal page loads.

## Project Block Image Width Fix (2026-04-06)

### What was done
Updated the `b-img` Svelte block so its custom-element host and internal section explicitly stretch to full width, with the project page namespace covered directly inside the block styles.

### What the problem was
Project pages render `b-img` blocks directly from the Kirby template instead of through the text layout wrapper, and the block component did not declare a hydrated `b-img` host display mode, which could leave the custom element behaving like an inline box and stop the image block from reliably filling its parent width.

### What fixed it
Added `:global(b-img)` block-level sizing rules and a project-page-specific stretch rule in `svelte/src/components/blocks/BlockImage.svelte`, plus explicit `width: 100%` on the block section/grid so the component fills the available project content column consistently after hydration.

## Preloader Drum Depth Cues (2026-04-06)

### What was done
Added shader-based directional lighting, a subtle rim/specular pass, and a soft contact shadow under the preloader drum so the rotating wheel reads with more depth.

### What the problem was
The preloader wheel used a custom `ShaderMaterial` that only sampled the image textures and dimmed cards past the horizon, so the drum had no scene light response or grounding shadow and looked visually flat.

### What fixed it
Updated `svelte/src/components/ui/Drum.svelte` so the vertex shader now exports a curved cylinder normal and view vector, the fragment shader applies wrapped diffuse light plus restrained highlight/rim cues, and the component renders an elliptical shadow layer beneath the canvas to anchor the wheel in space.

## Global Above-Fold Text Stagger (2026-04-05)

### What was done
Added a new global page-load text stagger flow using GSAP and SplitText, exposed a Kirby globals toggle to disable it site-wide, and tagged the requested Svelte text block elements with `data-motion-stagger`.

### What the problem was
The site needed a single above-the-fold text reveal sweep on page load, but there was no shared motion hook for line-by-line text splitting and no editor control to skip the effect entirely when needed.

### What fixed it
Added `initStagger()` to `assets/js/script.js`, loading it after the existing page reveal points so only visible `[data-motion-stagger]` elements are split into masked lines and animated in one global sweep, then wired a `disable_motion_stagger` site toggle through the `<body>` data attributes and updated the `BlockHeader`, `BlockText`, and `BlockGrid` Svelte components to opt into the effect.

## Project Template Stagger Lifecycle Fix (2026-04-05)

### What was done
Hardened the global stagger queue so it waits briefly for Svelte-rendered block markup to appear before running the SplitText sweep.

### What the problem was
The `project` template renders block custom elements server-side, but their inner text nodes with `data-motion-stagger` are mounted by Svelte just after the page reveal, so the original one-shot stagger check could run too early and find no targets.

### What fixed it
Updated `assets/js/script.js` to collect targets through a shared helper and, when none are present yet, attach a short-lived `MutationObserver` to the revealed container so the stagger starts as soon as the Svelte block internals land in the DOM.

## Global Stagger Mask Class Update (2026-04-05)

### What was done
Adjusted the global SplitText reveal so lines now animate from `yPercent: 100` and use the requested `.a-stagger` / `.a-stagger.mask` class naming.

### What the problem was
The previous version used a small pixel offset and internal helper class names, which didn’t match the desired masked line-reveal convention.

### What fixed it
Changed the SplitText line class to `a-stagger`, added `a-stagger mask` to the generated mask wrappers, updated the CSS selectors accordingly, and switched the reveal animation to `yPercent: 100 -> 0` with a global `0.15s` line stagger for a full masked slide-through effect.

## Concurrent Block Stagger Start (2026-04-06)

### What was done
Changed the page-load text stagger so each tagged text block starts animating at the same time, while the lines inside each block still stagger locally.

### What the problem was
The previous global line queue made every tagged text element wait for the previous one to finish starting, which stretched the reveal into a long sequential sweep across the page.

### What fixed it
Updated `assets/js/script.js` so `initStagger()` creates one GSAP tween per split element instead of flattening all lines into a single array, keeping the current `0.4s` duration and `0.15s` line stagger but letting all blocks begin concurrently.

## Stagger Ease Curve Tuning (2026-04-06)

### What was done
Updated the global masked text reveal to use a stronger custom ease-out curve based on the Emil design-engineering motion guidance.

### What the problem was
The reveal timing had been tuned, but the previous easing shape still made the line entrances feel heavier and less responsive than intended for an entering UI animation.

### What fixed it
Changed the GSAP ease in `assets/js/script.js` from a slow-starting curve to `cubic-bezier(0.23, 1, 0.32, 1)`, which gives the lines a faster initial response and a smoother settle while preserving the current duration and stagger values.

## Stagger Softer Travel And Fade (2026-04-06)

### What was done
Adjusted the masked line reveal to travel a shorter distance and fade in at the same time.

### What the problem was
Starting the lines too far below the mask made the entrance feel heavier than necessary, and relying on motion alone left the reveal harsher than intended.

### What fixed it
Updated `assets/js/script.js` so split lines now animate from `yPercent: 60` instead of `100`, while also transitioning `opacity: 0 -> 1` and clearing both transform and opacity after the tween completes.

## Stagger Opacity-Only Variant (2026-04-06)

### What was done
Created a comparison version of the global line reveal that removes vertical translation and keeps only the line-by-line fade.

### What the problem was
Even with reduced travel, the masked translate could still contribute visual heaviness, so the next useful comparison was to isolate the effect of timing and easing without positional motion.

### What fixed it
Updated `assets/js/script.js` so split lines now animate only from `opacity: 0 -> 1`, preserving the current duration, stagger, and custom ease while clearing only opacity after the tween completes.

## Stagger Pre-Prime And No-Mask CSS (2026-04-06)

### What was done
Removed the active masking CSS while keeping the existing stagger class hooks, and changed the motion lifecycle so above-the-fold stagger targets are prepared before the Barba page reveal completes.

### What the problem was
The active mask CSS was no longer needed for the opacity-only variant, and the previous stagger flow could allow targets to appear at full opacity briefly before their fade animation was initialized during page transitions.

### What fixed it
Updated `assets/css/styles.css` so `.a-stagger.mask` remains as a no-op selector, and refactored `assets/js/script.js` to pre-split visible stagger targets, set their line opacity to `0` ahead of time, and then trigger the fade animation only after the page container finishes its Barba or preloader reveal.

## Stagger Full-DOM Targeting (2026-04-06)

### What was done
Changed the stagger target selection so every eligible text element in the current page container is initialized and animated during the same page-load sequence, not just the ones intersecting the viewport.

### What the problem was
The viewport-only filter meant below-the-fold stagger elements could still be prepared into a hidden state by the transition lifecycle without ever being selected into the animation pass, leaving them at zero opacity when the user later scrolled to them.

### What fixed it
Updated `assets/js/script.js` so `getStaggerTargets()` now includes all visible-in-layout `[data-motion-stagger]` nodes in the current DOM scope, allowing the existing page-load sequencer to handle the whole set without introducing scroll-triggered behavior.

## Stagger Mask Wrapper Removal (2026-04-06)

### What was done
Removed SplitText's line-mask wrapper generation from the stagger setup.

### What the problem was
Even after neutralizing the mask CSS, the extra wrapper structure created by `mask: "lines"` could still clip text ascenders, descenders, or line boxes and make parts of the copy look visually cropped.

### What fixed it
Deleted `mask: "lines"` from the SplitText config in `assets/js/script.js`, leaving the stagger classes in place but allowing the opacity-only reveal to run without the additional masking wrappers.

## Stagger Loading State Hooks (2026-04-06)

### What was done
Added a temporary body loading class and start/stop custom events around the global stagger timeline, plus global cursor CSS for that loading state.

### What the problem was
The page transition could still feel interactive while the stagger reveal was running, and there was no global lifecycle hook for other code to react to the start and end of the text-load sequence.

### What fixed it
Updated `assets/js/script.js` so the stagger timeline now toggles `body.loading` and dispatches `stagger:start` / `stagger:done` events, then added global CSS in `assets/css/styles.css` so the cursor switches to `wait` while that class is present.

## Event Naming Convention Cleanup (2026-04-06)

### What was done
Aligned the global readiness and lifecycle custom event names with the colon-scoped convention already used by the navigation and canvas interactions.

### What the problem was
The codebase mixed hyphenated readiness events and scoped colon events, which made the stagger hooks feel inconsistent with the rest of the motion lifecycle.

### What fixed it
Renamed the stagger hooks to `stagger:start` / `stagger:done`, changed `lenis-ready` to `lenis:ready`, changed `svelte-ready` to `svelte:ready`, and changed the preloader handoff event to `preloader:exit`, updating all dispatchers and listeners to match.

## Home Strip Inertia-Only Active Switching (2026-04-05)

### What was done
Removed the home page strip's snap-to-card behavior so the reel now coasts purely on inertia while still updating the active project and left-hand title list as cards cross the existing activation threshold.

### What the problem was
The automatic snap made the strip feel overly sensitive at the end of a scroll gesture, causing the reel to roll forward or backward unpredictably when the user was trying to stop on a card naturally.

### What fixed it
Deleted the snap state machine from `svelte/src/components/ui/Strip.svelte` and kept the active-card switching driven by the nearest visible card plus the existing hysteresis threshold, so the list still updates without forcing visual alignment.

## Home Strip Faster Opacity Response (2026-04-05)

### What was done
Restored the original active-switch hysteresis and sped up the strip card opacity interpolation so hover and active emphasis settle faster.

### What the problem was
The latest tweak changed when cards became active, but the actual request was about the visual fade speed of the hover and active state on the strip cards.

### What fixed it
Set `ACTIVE_SWITCH_HYSTERESIS` back to its previous value and increased `LERP_SPEED` in `svelte/src/components/ui/Strip.svelte`, which makes the opacity transition react more quickly without changing the active-card threshold.

## Home Availability Status Controls (2026-04-05)

### What was done
Replaced the home blueprint's availability dropdown with an inline toggle row for `Blocked`, `Available`, and `Hold`, and wired those values through the home template into `LayoutIndex.svelte`.

### What the problem was
The previous setup used a select field with older status names (`on_hold`, `not_accepting`) and didn't match the desired editor experience or the newer blocked/available/hold language.

### What fixed it
Switched the blueprint field to `toggles`, normalized legacy saved values in `site/templates/home.php`, and updated the Svelte layout badge logic to support both the new and old status enums while rendering the correct orange, red, and green marker states.

## Home Blueprint Layout Cleanup (2026-04-05)

### What was done
Adjusted the home blueprint editor layout to a 1:1 split between the left-side text fields and the right-side featured project picker, and grouped related fields into shared rows.

### What the problem was
The left and right columns were uneven, the status control had been changed to tabs, and the eyebrow/button-related fields were stacked instead of being paired on one line.

### What fixed it
Updated `site/blueprints/pages/home.yml` so the page uses two equal-width columns, changed the status field back to a `select` dropdown labeled `Status`, set `hero_eyebrow` and `hero_availability_status` widths to share a row, and set `hero_button_label` and `hero_button_link` widths to share a second row.

## About Layout Two-Column Body (2026-04-05)

### What was done
Updated the about page layout so the right-hand `col-body` becomes a two-column grid at higher breakpoints, with header blocks taking one column and text blocks spanning both.

### What the problem was
The about page body content stacked as a single column at all desktop sizes, so header blocks couldn't sit at half width while text blocks kept their current full-width presentation.

### What fixed it
Added a desktop-only media query in `svelte/src/components/layout/LayoutAbout.svelte` that switches `.col-body` to a two-column grid, sets `b-text` to `grid-column: span 2`, and sets `b-header` to `grid-column: span 1`, leaving mobile behavior unchanged.

## Project Image Placeholder State (2026-04-05)

### What was done
Added a faint placeholder background and fade-in state for project-page image blocks, and passed intrinsic image dimensions from Kirby into the Svelte components.

### What the problem was
Project pages showed visible layout shift and abrupt image pop-in while CMS images were loading for the first time.

### What fixed it
Updated the `b-img` and `b-fullbleed` PHP snippets to include image `width` and `height`, then added a subtle grey placeholder plus image fade-in in `BlockImage.svelte` and `BlockFullBleed.svelte` so the layout stays reserved and feels stable while images load.

## About Header Text Wrapping (2026-04-05)

### What was done
Added balanced, prettier text wrapping for header block headings on the about page only.

### What the problem was
About-page header titles could break awkwardly across lines on wider layouts, even though the change was only desired for that page context.

### What fixed it
Added a scoped rule in `svelte/src/components/layout/LayoutAbout.svelte` targeting `b-header h2` with balanced and pretty text wrapping so the about page headings wrap more gracefully without affecting other pages.

## Strip Component — Session 1 (2026-02-18)

### What was done
Created `c-strip`, a new Three.js web component combining the best of `c-reel` (drum carousel) and `c-helix` (diagonal strip orientation).

### Files changed
- `svelte/src/components/ui/Strip.svelte` — new component
- `svelte/src/main.ts` — registered `c-strip`
- `svelte/src/components/layout/LayoutIndex.svelte` — swapped `c-reel` → `c-strip`, updated event listeners from `reel:update/exit` → `strip:update/exit`
- `assets/js/script.js` — added `strip:exit` Barba navigation handler

### Architecture decisions

**From Reel:**
- Infinite card recycling via modulo wrap on world-space X position
- Inertia + snap-to-nearest-card scroll (wheel/touch on `[data-canvas-map]`)
- `strip:update` CustomEvent for GSAP title slot animation
- `strip:exit` CustomEvent → Barba navigation
- Hover state: non-hovered cards fade to `HOVER_OPACITY`
- Active card highlight (nearest to X=0)
- Raycaster for flat hit-testing (simpler than Reel's analytical cylinder intersection)
- Mobile fallback to `<c-indexcard>` flat list
- WebGL context loss, IntersectionObserver pause, ResizeObserver

**From Helix:**
- Diagonal tilt: `stripGroup.rotation.z = -18°`
- Mouse gyro: subtle `targetTiltX/Y` lerp on mouse move
- `PerspectiveCamera(40°, ...)` at Z=12

**Key difference from both:**
- No cylinder warp (Reel's vertex shader bend removed)
- No helix twist (Helix's `uTwist` uniform removed)
- Flat `PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 1, 1)` — no extra segments needed
- Infinite wrap: `worldX = ((baseSeatX + stripOffset + halfStrip) % STRIP_WIDTH + STRIP_WIDTH) % STRIP_WIDTH - halfStrip`
- Snap: `Math.round(stripOffset / CARD_SPACING) * CARD_SPACING`

### Config values
- `CARD_WIDTH=3.2, CARD_HEIGHT=4.2, CARD_GAP=0.28`
- `CAMERA_Z=12, CAMERA_FOV=40`
- `STRIP_TILT_Z=-18°, STRIP_TILT_X=4°`
- `FRICTION=0.91, WHEEL_SENSITIVITY=0.004`
