# Vitruvian Portfolio - Complete Setup Guide

**Last Updated:** November 9, 2025
**Status:** ✅ Fully functional with Prismic CMS integration

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Recent Development Session](#recent-development-session)
4. [Project Architecture](#project-architecture)
5. [Prismic CMS Integration](#prismic-cms-integration)
6. [Development Guide](#development-guide)
7. [Component Inventory](#component-inventory)
8. [Troubleshooting](#troubleshooting)
9. [Next Steps](#next-steps)

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Prismic account (repository: `vitruvian`)

### Installation

```bash
# Clone repository
cd /Users/austinjoseph/Documents/GitHub/vitruvian

# Navigate to website directory
cd website

# Install dependencies
npm install

# Set up environment variables
echo "VITE_PRISMIC_ENVIRONMENT=vitruvian" > .env

# Start development server
npm run dev
# → http://localhost:5173

# Start Slice Machine (optional, for CMS development)
npm run slicemachine
# → http://localhost:9999
```

### Build & Deploy

```bash
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## Project Overview

### Repository Structure

```
vitruvian/
├── vanilla/              # Original static HTML/CSS/JS site
│   ├── index.html       # Reference implementation
│   ├── css/             # Original styles
│   └── images/          # Static assets
└── website/             # 🎯 Active SvelteKit application
    ├── src/
    │   ├── routes/      # SvelteKit pages
    │   ├── lib/
    │   │   ├── components/     # Reusable components
    │   │   ├── slices/         # Prismic slice components
    │   │   └── styles/         # Global CSS
    │   └── prismicio.ts        # Prismic client
    ├── static/                 # Public assets
    └── customtypes/            # Prismic schema definitions
```

### Technology Stack

**Frontend:**
- SvelteKit 2.x with Svelte 5
- TypeScript
- Vite 7.x
- Custom utility-first CSS framework

**CMS:**
- Prismic CMS with Slice Machine
- Dynamic content management
- SliceZone for flexible layouts

**Animations (Partial):**
- GSAP 3.12+ with ScrollTrigger
- Lenis smooth scroll (to be implemented)

**Deployment:**
- Adapter-auto (Vercel, Netlify, Cloudflare Pages compatible)

---

## Recent Development Session

### November 9, 2025 - Prismic Integration & Bug Fixes

#### ✅ Critical Fixes

**1. Fixed 500 Internal Server Error**
- **Issue:** Homepage returning 500 error
- **Root Cause:** Missing `filter` import from `@prismicio/client`
- **Fix:** Added `import { filter } from "@prismicio/client"` in `+page.server.ts`
- **File:** `website/src/routes/+page.server.ts`

**2. Corrected Prismic Field Mappings**
- **Updated:** All components to use correct Prismic schema field names
- **Changes:**
  - `data.title` → `data.project_title`
  - `data.thumbnail` → `data.thumbnail_base`
  - `data.description` → `data.project_description`
  - `data.meta_image` → `data.social_share_image`
  - `data.slices` → `data.slices2`
  - `my.project.published_date` → `my.project.published`

**3. Fixed IndexCard Image Positioning**
- **Issue:** Images stacking vertically instead of layering
- **Root Cause:** `<PrismicImage>` wrapper breaking absolute positioning
- **Solution:** Wrapped each `<PrismicImage>` in positioned divs
- **File:** `website/src/lib/components/IndexCard.svelte`

#### ✅ Image Optimization

**Implemented Responsive Images with PrismicImage:**

1. **IndexCard Component**
   - Responsive widths: `[640, 750, 828, 1080, 1200, 1920, 2048]`
   - Proper wrapper structure for absolute positioning
   - File: `website/src/lib/components/IndexCard.svelte`

2. **ImageBlock Slice**
   - Responsive widths: `[640, 750, 828, 1080, 1200, 1920, 2048]`
   - File: `website/src/lib/slices/ImageBlock/index.svelte`

3. **FullWidthImage Slice**
   - Responsive widths: `[640, 750, 828, 1080, 1200, 1920, 2048, 3840]`
   - Extra 3840px for 4K displays
   - File: `website/src/lib/slices/FullWidthImage/index.svelte`

**Benefits:**
- Automatic WebP/AVIF format delivery
- Prismic Imgix CDN optimization
- Responsive srcset generation
- Better quality on high-DPI screens

#### ✅ Dynamic Routing Migration

**Migrated from Static to Prismic-Powered Pages:**

1. **Archived Static Pages**
   - Moved: `/work/nuro/`, `/work/circle/`, `/work/copacabana/`, `/work/petrichor/`
   - To: `/work/_archived_static_pages/`
   - All projects now load via dynamic `[uid]` route

2. **Updated Dynamic Route**
   - Fixed slices field: `project.data.slices` → `project.data.slices2`
   - File: `website/src/routes/work/[uid]/+page.svelte`

3. **URLs Unchanged**
   - `/work/nuro` → Loads from Prismic (UID: `nuro`)
   - `/work/circle` → Loads from Prismic (UID: `circle`)
   - `/work/copacabana` → Loads from Prismic (UID: `copacabana`)
   - `/work/petrichor` → Loads from Prismic (UID: `petrichor`)

#### ✅ UI/UX Improvements

**1. TextBlock Slice - 4-Column Reverse Grid**
- **Implementation:** RTL (right-to-left) grid direction
- **Behavior:** Items fill from right to left (columns 4, 3, 2, 1)
- **Example:** 2 items fill columns 4 and 3 (leaving 1 and 2 empty)
- **File:** `website/src/lib/slices/TextBlock/index.svelte`

```css
.grid {
  grid-template-columns: repeat(4, 1fr);
  direction: rtl;  /* Grid fills from right */
}
.grid > * {
  direction: ltr;  /* Text reads normally */
}
```

**2. Padding Cleanup**
- **Removed:** Nested horizontal padding from all slices
- **Principle:** Only `.section` class should have global margins
- **Fixed Slices:**
  - TextBlock (removed from `.text`)
  - ImageBlock (removed from `.grid`)
  - NumberedGrid (removed from `.grid-container`)
  - ArticleHeader (kept - no `<section>` wrapper)

**3. Homepage Sorting**
- **Updated:** Sort by `project_index` field instead of `published` date
- **Order:** Ascending (1, 2, 3, 4)
- **Control:** Manual ordering via Prismic CMS
- **File:** `website/src/routes/+page.server.ts`

```typescript
orderings: [{ field: "my.project.project_index", direction: "asc" }]
```

#### 📊 Session Summary

**Files Modified:** 12+
**Bugs Fixed:** 5 critical issues
**Features Added:** 3 major improvements
**Dev Server Status:** ✅ Running without errors at http://localhost:5173/

---

## Project Architecture

### Design System

#### Typography

- **Primary:** Saans (sans-serif) - Regular, Medium, Bold
- **Accent:** EB Garamond (serif) - Regular, Italic
- **Monospace:** SaansMono - Regular, Medium

#### Color Palette (Dark Theme)

```css
--bg-primary:      #020508  /* Almost black */
--bg-secondary:    #0e0f10  /* Very dark gray */
--text-primary:    #ffffff  /* White */
--text-secondary:  #7f8082  /* Gray */
--accent-active:   #15de7e  /* Bright green */
--accent-warm:     #ff6955  /* Coral */
```

#### CSS Architecture

**Three-Tier Naming Convention:**

1. **Utility Classes (u- prefix)** - Global
   - Location: `src/lib/styles/styles.css`
   - Examples: `u-layout-vflex`, `u-layout-hflex`, `gap-md`, `text-lg`
   - Usage: Available globally across all components

2. **Component Classes (no prefix)** - Scoped
   - Defined in component `<style>` blocks
   - Svelte scoping makes `c-` prefix redundant
   - Examples: `.button`, `.header`, `.card`

3. **Section Classes (no prefix)** - Scoped
   - Page-level component styles
   - Examples: `.inner`, `.track`, `.scroll`

#### Spacing Scale

```css
--gap--xxs: 0.25rem  (4px)
--gap--xs:  0.5rem   (8px)
--gap--sm:  0.75rem  (12px)
--gap--md:  1rem     (16px)
--gap--lg:  1.5rem   (24px)
--gap--xl:  2rem     (32px)
--gap--xxl: 3rem     (48px)
```

#### Responsive Breakpoints

```css
@media (max-width: 479px)  /* Mobile */
@media (max-width: 767px)  /* Tablet Portrait */
@media (max-width: 991px)  /* Tablet Landscape */
@media (min-width: 1920px) /* Large Desktop */
```

### Site Structure

#### Routes

```
/                    → Homepage (project showcase)
/about               → Biography page
/work                → Empty (future: project gallery)
/work/[uid]          → Dynamic project pages
/slice-simulator     → Prismic development tool
/api/preview         → Prismic preview endpoint
```

#### Pages Status

| Page | Status | Source |
|------|--------|--------|
| Homepage | ✅ Complete | Prismic + Index.svelte |
| About | ✅ Complete | Prismic + Bio.svelte |
| Work Gallery | ⏳ Empty | To be implemented |
| Project Detail | ✅ Complete | Prismic SliceZone |
| Error Pages | ❌ Not started | - |

---

## Prismic CMS Integration

### Project Custom Type

**Location:** `website/customtypes/project/index.json`

#### Main Fields

```typescript
{
  uid: "UID",                           // URL identifier
  project_name: "Text",                 // Internal name
  project_title: "Text",                // Display title
  project_description: "RichText",      // Long-form description
  showcase: "Boolean",                  // Show on homepage
  thumbnail_base: "Image (1200x800)",   // Main thumbnail
  thumbnail_overlay: "Image (1200x800)", // Overlay image
  published: "Date",                    // Publish date
  project_index: "Number",              // Manual sort order
  tags: "Group[]"                       // Project tags
}
```

#### SEO Fields

```typescript
{
  meta_title: "Text",                   // SEO title
  meta_description: "Text",             // SEO description
  social_share_image: "Image (1200x800)" // OG image
}
```

#### Content Fields

```typescript
{
  slices2: "SliceZone",                 // Note: field name is "slices2"
  project_metadata: "Group[]"           // Metadata items (role, timeline, etc.)
}
```

### Available Slices

#### 1. ArticleHeader
**File:** `src/lib/slices/ArticleHeader/index.svelte`

**Purpose:** Project title and description header

**Fields:**
- `title` (Text)
- `description` (RichText)

**Layout:** 4-column grid on desktop, stacked on mobile

**Note:** Has its own horizontal padding (doesn't use `<section>` wrapper)

---

#### 2. TextBlock
**File:** `src/lib/slices/TextBlock/index.svelte`

**Purpose:** Multi-column text content with RTL grid

**Fields:**
- `content` (RichText) - Repeatable group

**Layout:**
- Always 4 columns on desktop
- Fills from right to left (RTL direction)
- 2 columns on tablet, 1 on mobile

**Example:**
- 2 items → Columns 4, 3
- 4 items → Columns 4, 3, 2, 1
- 6 items → Row 1: 4,3,2,1; Row 2: 4,3

---

#### 3. ImageBlock
**File:** `src/lib/slices/ImageBlock/index.svelte`

**Purpose:** Multi-column image grid

**Fields:**
- `columns` (Select: 1, 2, 3, 4)
- `image` (Image) - Repeatable group
- `caption` (Text) - Optional

**Features:**
- Responsive image widths: `[640, 750, 828, 1080, 1200, 1920, 2048]`
- Lazy loading
- Optional captions

---

#### 4. FullWidthImage
**File:** `src/lib/slices/FullWidthImage/index.svelte`

**Purpose:** Hero images at full width

**Fields:**
- `image` (Image)
- `caption` (Text) - Optional

**Features:**
- Responsive widths: `[640, 750, 828, 1080, 1200, 1920, 2048, 3840]`
- 4K support (3840px)
- 16:9 aspect ratio

---

#### 5. NumberedGrid
**File:** `src/lib/slices/NumberedGrid/index.svelte`

**Purpose:** Grid with auto-numbered items

**Fields:**
- `columns` (Select: 2, 3, 4)
- `show_numbers` (Boolean) - Default: true
- `heading` (Text) - Optional custom heading
- `description` (RichText) - Repeatable group

**Features:**
- Auto-numbering: (01), (02), (03)...
- RTL grid (fills from right to left)
- Responsive breakpoints

---

### Fetching Content Example

```typescript
// In +page.server.ts
import { createClient } from "$lib/prismicio";
import { filter } from "@prismicio/client";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  // Fetch showcase projects
  const projects = await client.getAllByType("project", {
    filters: [filter.at("my.project.showcase", true)],
    orderings: [{ field: "my.project.project_index", direction: "asc" }],
    limit: 4,
  });

  return { projects };
};
```

### Using PrismicImage Component

```svelte
<script>
  import { PrismicImage } from '@prismicio/svelte';
</script>

<!-- Wrap in positioned div for layout control -->
<div class="image-wrapper">
  <PrismicImage
    field={project.data.thumbnail_base}
    loading="lazy"
    widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
  />
</div>

<style>
  .image-wrapper {
    position: relative;
  }

  .image-wrapper :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
```

---

## Development Guide

### Component Development Workflow

1. **Create Component**
   ```bash
   # In src/lib/components/
   touch MyComponent.svelte
   ```

2. **Structure**
   ```svelte
   <script lang="ts">
     export let prop: string;
   </script>

   <div class="my-component">
     {prop}
   </div>

   <style>
     .my-component {
       /* Scoped styles */
     }
   </style>
   ```

3. **Use Global Utilities**
   ```svelte
   <div class="u-layout-vflex gap-md">
     <!-- Flexbox column with medium gap -->
   </div>
   ```

### Creating Prismic Slices

1. **Run Slice Machine**
   ```bash
   npm run slicemachine
   # → http://localhost:9999
   ```

2. **Create New Slice**
   - Click "Create a slice"
   - Define fields
   - Generate Svelte component

3. **Implement Component**
   - Edit in `src/lib/slices/[SliceName]/index.svelte`
   - Test in `/slice-simulator`

4. **Register Slice**
   ```typescript
   // src/lib/slices/index.ts
   import MySlice from './MySlice/index.svelte';

   export const components = {
     my_slice: MySlice,
   };
   ```

### File Organization

```
src/lib/
├── components/
│   ├── Button.svelte          # Reusable UI components
│   ├── Header.svelte
│   ├── Footer.svelte
│   ├── IndexCard.svelte       # Project card
│   └── pages/
│       ├── Index.svelte       # Homepage layout
│       └── Bio.svelte         # About page layout
├── slices/
│   ├── index.ts               # Slice registry
│   ├── ArticleHeader/
│   ├── TextBlock/
│   ├── ImageBlock/
│   ├── FullWidthImage/
│   └── NumberedGrid/
└── styles/
    └── styles.css             # Global utilities
```

### CSS Best Practices

**✅ DO:**
- Use utility classes for layout: `u-layout-vflex`, `gap-md`
- Scope component-specific styles in `<style>` blocks
- Use CSS variables: `var(--gap--md)`
- Follow mobile-first responsive design

**❌ DON'T:**
- Add horizontal padding to slice children (`.section` handles it)
- Use inline styles
- Create redundant utility classes
- Use `!important` (except ArticleHeader exception)

---

## Component Inventory

### Completed Components

| Component | Location | Purpose | Status |
|-----------|----------|---------|--------|
| Header | `components/Header.svelte` | Navigation | ✅ Complete |
| Footer | `components/Footer.svelte` | Footer links | ✅ Complete |
| Button | `components/Button.svelte` | CTA buttons | ✅ Complete |
| IndexCard | `components/IndexCard.svelte` | Project cards | ✅ Complete |
| Index | `components/pages/Index.svelte` | Homepage | ✅ Complete |
| Bio | `components/pages/Bio.svelte` | About page | ✅ Complete |

### Completed Slices

| Slice | Purpose | Status |
|-------|---------|--------|
| ArticleHeader | Project title/desc | ✅ Complete |
| TextBlock | Multi-column text | ✅ Complete |
| ImageBlock | Image grids | ✅ Complete |
| FullWidthImage | Hero images | ✅ Complete |
| NumberedGrid | Numbered lists | ✅ Complete |

### To Be Implemented

- Work gallery/index page (`/work`)
- Error pages (404, 401)
- Blog/Thoughts section (optional)

---

## Troubleshooting

### Common Issues

#### 1. 500 Internal Server Error on Homepage

**Symptom:** `Cannot read properties of undefined (reading 'at')`

**Cause:** Missing `filter` import from Prismic client

**Fix:**
```typescript
// Add to +page.server.ts
import { filter } from "@prismicio/client";

// Use in query
filters: [filter.at("my.project.showcase", true)]
```

---

#### 2. Incorrect Field Names

**Symptom:** Fields showing as `undefined` or not rendering

**Cause:** Using old/incorrect Prismic field names

**Fix:** Refer to correct schema:
```typescript
// ✅ Correct
project.data.project_title
project.data.thumbnail_base
project.data.social_share_image
project.data.slices2  // Note: field is "slices2"

// ❌ Incorrect
project.data.title
project.data.thumbnail
project.data.meta_image
project.data.slices
```

---

#### 3. Images Not Loading or Low Quality

**Symptom:** Broken images or pixelated thumbnails

**Cause:** Not using PrismicImage component

**Fix:**
```svelte
<!-- ✅ Correct -->
<div class="image-container">
  <PrismicImage
    field={project.data.thumbnail_base}
    widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
  />
</div>

<!-- ❌ Incorrect -->
<img src={project.data.thumbnail_base.url} />
```

---

#### 4. Images Stacking Instead of Layering

**Symptom:** IndexCard images stack vertically

**Cause:** `<PrismicImage>` wrapper breaking absolute positioning

**Fix:** Wrap in positioned div:
```svelte
<div class="card-bg">
  <PrismicImage field={backgroundImage} ... />
</div>

<style>
  .card-bg {
    position: absolute;
    inset: 0;
  }
  .card-bg :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
```

---

#### 5. Changes Not Reflecting in Browser

**Symptom:** Code changes don't show in browser

**Solutions:**
1. **Hard Refresh:** `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. **Clear Cache:** DevTools → Right-click refresh → "Empty Cache and Hard Reload"
3. **Check HMR:** Look for Vite HMR update in console
4. **Restart Dev Server:** `Ctrl+C` then `npm run dev`

---

### Debugging Tips

**Check Prismic Data:**
```svelte
<script>
  export let data;
  console.log('Prismic data:', data.project);
</script>
```

**Verify Field Exists:**
```svelte
{#if project.data.project_title}
  <h1>{project.data.project_title}</h1>
{:else}
  <p>Title not found - check field name</p>
{/if}
```

**Test Slice Rendering:**
```svelte
<pre>{JSON.stringify(slice, null, 2)}</pre>
```

---

## Next Steps

### Immediate Priorities

1. **Create Work Gallery Page** (`/work`)
   - Fetch all projects from Prismic
   - Grid layout with filtering
   - Category/tag filtering

2. **Test All Project Pages**
   - Verify `/work/nuro`, `/work/circle`, etc. load correctly
   - Check all slices render properly
   - Test responsive layouts

3. **Content Review**
   - Ensure all Prismic content is accurate
   - Check image quality on different devices
   - Verify meta tags for SEO

### Short-Term Goals

1. **Implement Animations**
   - Uncomment GSAP animations
   - Add scroll-triggered effects
   - Implement smooth scroll (Lenis)

2. **Error Pages**
   - Create 404 page
   - Create 401 page
   - Custom error layouts

3. **Performance Optimization**
   - Lighthouse audit
   - Image lazy loading verification
   - Bundle size optimization

### Medium-Term Enhancements

1. **Blog/Thoughts Section** (Optional)
   - Create blog custom type
   - Blog listing page
   - Individual blog post pages

2. **Advanced Features**
   - Contact form
   - Project filtering by category
   - Search functionality
   - Dark/light theme toggle (currently dark only)

3. **Deployment**
   - Choose hosting (Vercel/Netlify/Cloudflare)
   - Setup CI/CD
   - Configure Prismic webhooks
   - Custom domain setup

---

## Archive Files

The following files have been archived and can be deleted after verification:

- `setup-old.md` - Previous setup documentation
- `_archive_MIGRATION_PLAN.md` - Migration planning doc (completed)
- `_archive_PRISMIC_INTEGRATION_STRATEGY.md` - Original strategy (implemented)
- `website/src/routes/work/_archived_static_pages/` - Old static pages (backup)

**Safe to delete after confirming all projects load from Prismic.**

---

## Contributing

### Making Changes

1. Always work in the `website/` directory
2. Follow CSS naming conventions (utilities with `u-` prefix)
3. Use TypeScript for type safety
4. Test on multiple screen sizes
5. Verify Prismic preview functionality

### Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: description of changes"

# Push to main
git push origin main
```

---

## Resources

- **SvelteKit Docs:** https://kit.svelte.dev
- **Prismic Docs:** https://prismic.io/docs/svelte
- **Slice Machine:** https://prismic.io/docs/slice-machine
- **GSAP Docs:** https://greensock.com/docs

---

**Vitruvian Portfolio** - A modern, CMS-powered portfolio built with SvelteKit and Prismic.

*Documentation last updated: November 9, 2025*
