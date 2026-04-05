# Process Log

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
