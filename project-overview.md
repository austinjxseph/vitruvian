# Vitruvian Portfolio - Project Overview

## Project Structure

This monorepo contains two implementations of a portfolio website:

1. **Vanilla** - Original static website (HTML/CSS/JavaScript)
2. **Website** - Modern SvelteKit port with Prismic CMS integration

---

## 1. Technology Stack

### Vanilla Implementation

- Pure HTML5 semantic markup
- Custom Web Components (ES6 classes)
- Custom utility-first CSS framework
- GSAP for animations
- Lenis for smooth scrolling
- SplitType for text effects
- No build process (direct browser execution)

### SvelteKit Implementation

- **Framework**: SvelteKit 2.x with Svelte 5
- **Language**: TypeScript
- **CMS**: Prismic with Slice Machine
- **Styling**: Custom utility CSS framework (flexbox-based) + scoped component styles
- **Animations**: GSAP + ScrollTrigger (partially implemented)
  - **Note:** Will deprecate SplitType in favor of GSAP's native SplitText plugin for text animations
- **Build**: Vite 7.x
- **Deployment**: Adapter-auto (platform-agnostic)

---

## 2. Design System

### Typography

- **Primary**: Saans (sans-serif) - Regular, Medium, Bold
- **Secondary**: EB Garamond (serif) - Regular, Italic
- **Tertiary**: SaansMono (monospace) - Regular, Medium

### Color Palette (Dark Theme)

```css
Background Primary:   #020508 (almost black)
Background Secondary: #0e0f10 (very dark gray)
Background Tertiary:  #1a1a1e (dark gray)
Text Primary:         #ffffff (white)
Text Secondary:       #7f8082 (gray)
Accent Active:        #15de7e (bright green)
Accent Warm:          #ff6955 (coral/orange)
```

### CSS Architecture

**Three-tier naming convention with SvelteKit scoping:**

1. **Utility Classes** (u- prefix) - **Global Styles**
   - **Location:** `src/lib/styles/styles.css` (imported in `+layout.svelte`)
   - **Always prefixed** with `u-` in all contexts
   - Layout: `u-layout-vflex`, `u-layout-hflex`, `u-layout-grid`
   - Spacing: `gap-*`, `p-*`, `pt-*`, `pb-*`, `py-*` (xxs → xxl)
   - Typography: `text-sm`, `text-md`, `text-lg`, `u-font-*`
   - Display: `u-hide-*`, `u-z-index-*`, `u-overflow-*`
   - Sizing: `u-vp-100h`, `u-vp-100w`, `u-span-*`
   - **Usage:** Available globally across all components

2. **Component Classes** (c- prefix) - **Scoped to Svelte Components**
   - **Vanilla naming:** `.c-navbar`, `.c-button_glow`, `.c-cs_text`
   - **SvelteKit approach:** Remove `c-` prefix, use element name only
   - **Scoped within component `<style>` blocks**
   - Examples:
     - `c-navbar` → `.navbar` in Header.svelte
     - `c-button_glow` → `.button_glow` in Button.svelte
     - `c-cs_text` → `.text` in TextBlock.svelte
     - `c-cs_header` → `.header` in ArticleHeader.svelte
   - **Rationale:** Svelte's scoping makes namespacing redundant

3. **Section Classes** (s- prefix) - **Scoped to Page-Level Components**
   - **Vanilla naming:** `.s-hm_inner`, `.s-ab_scroll`, `.s-cs_body`
   - **SvelteKit approach:** Remove `s-` and page prefix, use element name only
   - **Scoped within page component `<style>` blocks**
   - Examples:
     - `s-hm_inner` → `.inner` in Index.svelte
     - `s-hm_card` → `.card` in Index.svelte
     - `s-hm_track` → `.track` in Index.svelte
     - `s-ab_scroll` → `.scroll` in Bio.svelte
     - `s-ab_block` → `.block` in Bio.svelte
   - **Rationale:** Page-level components own their layout, no namespace needed

### CSS Scoping Strategy Summary

```
Global (u- prefix):     u-layout-vflex, gap-md, text-lg
  ↓ Imported in all components

Component Scoped:       .button, .header, .text
  ↓ Defined in component <style>

Page Scoped:           .inner, .track, .card
  ↓ Defined in page component <style>
```

### Spacing Scale

- xxs: 0.25rem (4px)
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- xxl: 3rem (48px)

---

## 3. Site Structure

### Pages Overview

| Page                    | Vanilla | SvelteKit | Status               |
| ----------------------- | ------- | --------- | -------------------- |
| Homepage                | ✓       | ✓         | Ported               |
| About                   | ✓       | ✓         | Ported               |
| Thoughts/Blog           | ✓       | ✗         | Not started          |
| Work Gallery            | ✗       | Empty     | Needs implementation |
| Nuro (Case Study)       | ✓       | Empty     | Needs porting        |
| Copacabana (Case Study) | ✓       | Empty     | Needs porting        |
| Circle (Case Study)     | ✓       | Empty     | Needs porting        |
| Petrichor (Case Study)  | ✓       | Empty     | Needs porting        |
| 404 Error               | ✓       | ✗         | Not started          |
| 401 Error               | ✓       | ✗         | Not started          |

### Route Structure (SvelteKit)

```
/                         → Homepage (project showcase)
/about                    → Biography and background
/work                     → Project gallery (TODO)
/work/nuro                → Autism therapy app case study (TODO)
/work/copacabana          → Dubai cafe app case study (TODO)
/work/circle              → Social network redesign (TODO)
/work/petrichor           → Educational branding (TODO)
/slice-simulator          → Prismic development tool
/api/preview              → Prismic preview endpoint
```

---

## 4. Components Inventory

### Vanilla Web Components

| Component      | File       | Usage                        | SvelteKit Equivalent     |
| -------------- | ---------- | ---------------------------- | ------------------------ |
| `<el-button>`  | button.js  | CTA buttons with glow effect | Button.svelte ✓          |
| `<el-header>`  | header.js  | Navigation with drawer menu  | Header.svelte ✓          |
| `<el-footer>`  | footer.js  | Footer with social links     | Footer.svelte ✓          |
| `<el-sidebar>` | sidebar.js | Case study sidebars          | Sidebar.svelte (to port) |
| `<cs-text>`    | text.js    | Two-column text blocks       | TextBlock slice          |
| `<el-img>`     | image.js   | Responsive image wrapper     | ImageBlock slice         |

### SvelteKit Components Status

**Completed:**

- ✓ Header.svelte (400+ lines, fully responsive)
- ✓ Footer.svelte (120+ lines, social links)
- ✓ Button.svelte (300+ lines, animated)
- ✓ +layout.svelte (root layout wrapper)

**Page-Level Components (Full Viewport Experiences):**

- ✗ Index.svelte - Homepage hero with sticky panel + scrolling project cards
- ✗ Bio.svelte - About page with scrolling biography sections

**Reusable Components:**

- ✗ IndexCard.svelte - Individual project cards (extracted from homepage)
- ✗ Sidebar.svelte - Article metadata display (port for flexibility)
- ✗ ArticleHeader.svelte - Project/article title and intro (reusable across themes)
- ✗ CaseStudyGrid.svelte

---

## 5. Progress Assessment

### ✅ Completed (60%)

**Infrastructure:**

- SvelteKit project setup with TypeScript
- Vite build configuration
- Prismic CMS client integration
- Custom type definitions (page)
- Slice Machine configuration
- Preview and slice simulator routes

**Styling:**

- Complete utility CSS framework ported
- CSS variables and design tokens
- Typography system with custom fonts
- Normalize/reset stylesheet
- Keyframes for animations
- Responsive breakpoints (479px, 767px, 991px, 1920px)

**Layout & Navigation:**

- Root layout with Header/Footer
- Mobile-responsive navigation drawer
- Hamburger menu with overlay
- Footer with social links
- Page routing structure

**Pages:**

- Homepage with hero section
- Homepage project showcase (4 cards)
- About page with content blocks

**Components:**

- Header component (fully featured)
- Footer component (dynamic year)
- Button component (complex animations)

### 🚧 In Progress / Partial (25%)

**Animations:**

- GSAP library integrated but animations commented out
- Smooth scroll setup present but inactive
- ScrollTrigger configured but not utilized

**Content:**

- Static content on homepage and about page
- No Prismic content fetching yet

**Assets:**

- Icons ported (PNG format)
- Logo present (SVG)
- Project images not yet moved to static folder

### ❌ Not Started (15%)

**Pages:**

- Work gallery/index page
- 4 case study detail pages (empty files)
- Thoughts/blog section
- Error pages (404, 401)

**Components:**

- Case study-specific components
- Image and text block components
- Project card component (extractable from homepage)

**Prismic Integration:**

- Custom slices (none created yet)
- Content modeling for projects
- Dynamic page generation
- Image optimization with Prismic CDN

**Interactivity:**

- Text animations (SplitType)
- Scroll-triggered effects
- Image lazy loading
- Smooth scroll implementation

---

## 6. Content Breakdown by Page

### Homepage (index.html / +page.svelte)

**Sections:**

1. Hero with availability badge
2. Main heading with accent text
3. CTA button
4. Horizontal scrolling project showcase (4 cards)
   - Nuro (autism therapy app)
   - Copacabana (cafe discovery app)
   - Circle (social network redesign)
   - Petrichor (educational branding)

**Components Needed:**

- Header ✓
- Button ✓
- ProjectCard ✗
- Footer ✓

### About Page (about.html / about/+page.svelte)

**Sections:**

1. Hero image (splash.png - 261KB)
2. Main heading with accent
3. Scrollable content area with multiple text blocks

**Components Needed:**

- Header ✓
- ImageBlock ✗
- TextBlock ✗
- Footer ✓

### Case Study Pages (work/\*.html)

**Consistent Structure:**

1. **Header Section**
   - Project title (h2)
   - Main description (multi-paragraph)
   - Two-column description layout

2. **Body Content**
   - Full-width hero images
   - 4-column description grids
   - Numbered points (01, 02, 03, 04)
   - Two-column text blocks
   - Image galleries

3. **Assets Per Project**
   - Nuro: 7 images (nu-1 to nu-7)
   - Copacabana: 7 images (cc-1 to cc-7)
   - Circle: 9 images (ci-1 to ci-9)
   - Petrichor: 6 images (pt-1 to pt-6)

**Components Needed:**

- CaseStudyHeader ✗
- Sidebar ✗
- CaseStudyGrid ✗
- TextBlock ✗
- ImageBlock ✗

---

## 7. Prismic CMS Strategy

### Content Model (Component-First Approach)

The site architecture aligns perfectly with Prismic's **Slice model**:

#### Current Custom Type: "Page"

```json
{
  "uid": "UID",
  "title": "Heading1",
  "slices": "Slice Zone",
  "meta_title": "Text",
  "meta_description": "Text",
  "meta_image": "Image (2400x1260)"
}
```

#### Recommended Slices to Create

**Content Slices:**

1. **Hero Slice**
   - Heading (rich text)
   - Subheading (text)
   - CTA button (link + text)
   - Background image (optional)
   - Accent text highlights

2. **Project Showcase Slice**
   - Repeatable project items:
     - Title
     - Description
     - Card image
     - Overlay image
     - Link to project

3. **Text Block Slice** (variations)
   - Single column
   - Two columns
   - Three/Four columns
   - Accent text support
   - Rich text formatting

4. **Image Block Slice**
   - Single image
   - Image grid (2, 3, 4 columns)
   - Caption support
   - Responsive sizing
   - Lazy loading

5. **Case Study Header Slice**
   - Project title
   - Main description (rich text)
   - Metadata sidebar:
     - Role
     - Timeline
     - Team
     - Tools

6. **Numbered Grid Slice** (Enhanced with Flexible Logic)
   - Configurable columns (2, 3, or 4 column layouts)
   - Repeatable items (not limited to 4)
   - Auto-numbering: (01), (02), (03)... based on item count
   - Optional toggle for numbered headings
   - Custom heading support
   - Rich text descriptions
   - Example configurations:
     - 4 columns, 4 items (Circle pattern)
     - 3 columns, 6 items
     - 2 columns, 5 items (odd numbers wrap)

7. **Full Width Image Slice**
   - Large hero images
   - Optional caption
   - Alt text
   - Lazy loading

#### Additional Custom Types Needed

**Project Custom Type:**

```json
{
  "uid": "UID",
  "title": "Text",
  "subtitle": "Text",
  "category": "Select (App Design, UX/UI, Branding)",
  "featured": "Boolean",
  "thumbnail": "Image",
  "thumbnail_overlay": "Image",
  "role": "Text",
  "timeline": "Text",
  "team": "Text",
  "tools": "Text",
  "slices": "Slice Zone"
}
```

**Thought/Blog Post Custom Type:**

```json
{
  "uid": "UID",
  "title": "Text",
  "published_date": "Date",
  "excerpt": "Text",
  "featured_image": "Image",
  "slices": "Slice Zone"
}
```

### Migration Strategy

**Phase 1: Slice Creation**

1. Create slices in Slice Machine
2. Build Svelte components for each slice
3. Test in slice simulator

**Phase 2: Content Migration**

1. Create project documents in Prismic (4 projects)
2. Upload images to Prismic media library
3. Structure content using slices
4. Preserve text formatting and layout

**Phase 3: Page Integration**

1. Fetch content in SvelteKit routes
2. Replace static content with Prismic data
3. Implement route resolvers
4. Configure preview functionality

---

## 8. Assets Inventory

### Images to Migrate (45MB total)

**Homepage:**

- hm-01.webp (54KB) → Prismic
- hm-02.webp (174KB) → Prismic
- hm-03.webp (168KB) → Prismic
- hm-04.webp (158KB) → Prismic
- overlay-01 to overlay-04.webp → Prismic

**Nuro Project (7 images):**

- nu-1.webp (97KB) → nu-7.webp (606KB)

**Copacabana Project (7 images):**

- cc-1.webp (88KB) → cc-7.webp (660KB)

**Circle Project (9 images):**

- ci-1.webp (168KB) → ci-9.webp (830KB)

**Petrichor Project (6 images):**

- pt-1.webp (79KB) → pt-6.webp (1.4MB)

**About Page:**

- splash.png (261KB) → Convert to WebP

**UI Assets (keep in static/):**

- logo.svg (229B)
- arrow.svg, arrow.png
- Social icons: mail.png, linkedin.png, github.png, bluesky.png, readcv.png
- favicon.png, webclip.png

### Fonts (already in website/)

- EB Garamond: Regular, Italic
- Saans: Regular, Medium, Bold
- SaansMono: Regular, Medium

---

## 9. Implementation Phases & Roadmap

### Phase 1: Foundation - Page-Level Components

**Goal:** Build the full-viewport page experiences (homepage and about page)

#### Step 1.1: Homepage - Index.svelte

- [ ] Create `src/lib/components/pages/Index.svelte`
- [ ] Port sticky left panel (hero section) from `+page.svelte`
- [ ] Port scrolling right track (project cards) from `+page.svelte`
- [ ] Extract IndexCard component (see Step 1.2)
- [ ] Integrate IndexCard into Index.svelte
- [ ] Test responsive behavior (mobile vs desktop)
- [ ] Update `routes/+page.svelte` to use Index component

#### Step 1.2: IndexCard Component

- [ ] Create `src/lib/components/IndexCard.svelte`
- [ ] Accept props: title, description, href, backgroundImage, overlayImage
- [ ] Port card styles from homepage
- [ ] Add hover states and animations
- [ ] Test with all 4 project cards

#### Step 1.3: About Page - Bio.svelte

- [ ] Create `src/lib/components/pages/Bio.svelte`
- [ ] Port hero image section from `about/+page.svelte`
- [ ] Port scrollable content area
- [ ] Port text block layouts
- [ ] Test scroll behavior
- [ ] Update `routes/about/+page.svelte` to use Bio component

---

### Phase 2: Reusable Components for Articles

**Goal:** Build components needed for case study pages

#### Step 2.1: ArticleHeader Component

- [ ] Create `src/lib/components/ArticleHeader.svelte`
- [ ] Port header structure from `vanilla/work/nuro.html` (`.c-cs_header`)
- [ ] Accept props: title, description (rich text support)
- [ ] Add optional sidebar integration
- [ ] Style with existing `.c-cs_header`, `.c-cs_heading`, `.c-cs_text` classes
- [ ] Test with different content lengths

#### Step 2.2: Sidebar Component

- [ ] Create `src/lib/components/Sidebar.svelte`
- [ ] Port from `vanilla/components/sidebar.js`
- [ ] Accept props: heading, description, metadata array (role, timeline, team, tools)
- [ ] Numbered display (01-04) for metadata items
- [ ] Responsive layout (sticky on desktop, stacked on mobile)
- [ ] Test with case study metadata

---

### Phase 3: Prismic Slice Creation

**Goal:** Create CMS slices for flexible article content

#### Step 3.1: TextBlock Slice

- [ ] Run Slice Machine: Create "TextBlock" slice
- [ ] Configure fields:
  - `columns`: Select (1, 2, 3, 4)
  - `content`: Group (repeatable) with rich text field
- [ ] Generate Svelte component in `src/lib/slices/`
- [ ] Implement layout logic (1-4 column grid)
- [ ] Style with `.c-cs_text`, `.c-cs_row`, `.c-cs_col` classes
- [ ] Test in slice simulator

#### Step 3.2: ImageBlock Slice

- [ ] Run Slice Machine: Create "ImageBlock" slice
- [ ] Configure fields:
  - `layout`: Select (single, grid)
  - `images`: Group (repeatable) with image + alt + caption
  - `columns`: Select (2, 3, 4) - for grid layout
- [ ] Generate Svelte component
- [ ] Implement responsive image rendering
- [ ] Add lazy loading
- [ ] Style with `.c-cs_img` class
- [ ] Test in slice simulator

#### Step 3.3: NumberedGrid Slice (Enhanced)

- [ ] Run Slice Machine: Create "NumberedGrid" slice
- [ ] Configure fields:
  - `columns`: Select (2, 3, 4) - default 4
  - `show_numbers`: Boolean - default true
  - `items`: Group (repeatable)
    - `heading`: Text (optional custom heading)
    - `description`: Rich text
- [ ] Generate Svelte component
- [ ] Implement auto-numbering logic: `(01)`, `(02)`, etc.
- [ ] Style with `.c-cs_grid`, `.c-cs_cell`, `.u-4-col` classes
- [ ] Test with 2, 3, 4 columns
- [ ] Test with varying item counts (4, 5, 6+ items)
- [ ] Test in slice simulator

#### Step 3.4: FullWidthImage Slice

- [ ] Run Slice Machine: Create "FullWidthImage" slice
- [ ] Configure fields:
  - `image`: Image field
  - `alt`: Text
  - `caption`: Text (optional)
- [ ] Generate Svelte component
- [ ] Implement full-width layout with `.container-fw`
- [ ] Add lazy loading
- [ ] Style with `.c-cs_img` class
- [ ] Test in slice simulator

---

### Phase 4: Prismic Content Modeling

**Goal:** Set up CMS structure for projects

#### Step 4.1: Create Project Custom Type

- [ ] Open Prismic dashboard → Custom Types
- [ ] Create "Project" repeatable type
- [ ] Add fields:
  - `uid`: UID
  - `title`: Text
  - `subtitle`: Text
  - `category`: Select (App Design, UX/UI, Branding)
  - `featured`: Boolean
  - `thumbnail`: Image
  - `thumbnail_overlay`: Image
  - `role`: Text
  - `timeline`: Text
  - `team`: Text
  - `tools`: Text
  - `slices`: Slice Zone
  - `meta_title`: Text
  - `meta_description`: Text
  - `meta_image`: Image
- [ ] Save and publish custom type

#### Step 4.2: Content Migration Preparation

- [ ] Create folder structure in Prismic media library:
  - `/projects/nuro/`
  - `/projects/copacabana/`
  - `/projects/circle/`
  - `/projects/petrichor/`
- [ ] Upload images from `vanilla/images/` to respective folders
- [ ] Convert `splash.png` to WebP for about page

---

### Phase 5: Case Study Page Implementation

**Goal:** Build dynamic case study pages with Prismic data

#### Step 5.1: Create Project Route Handler

- [ ] Create `src/routes/work/[uid]/+page.server.ts`
- [ ] Import Prismic client
- [ ] Fetch project by UID
- [ ] Handle 404 for invalid UIDs
- [ ] Return project data to page

#### Step 5.2: Create Project Page Template

- [ ] Create `src/routes/work/[uid]/+page.svelte`
- [ ] Import ArticleHeader component
- [ ] Import SliceZone from Prismic
- [ ] Render ArticleHeader with project title/description
- [ ] Render SliceZone with project slices
- [ ] Add SEO meta tags from project data

#### Step 5.3: Migrate Nuro Content

- [ ] Create "Nuro" document in Prismic
- [ ] Fill metadata (title, role, timeline, team, tools)
- [ ] Add slices in order:
  - FullWidthImage (nu-1.webp)
  - FullWidthImage (nu-2.webp, nu-3.webp, nu-4.webp)
  - TextBlock (2-column descriptions)
  - FullWidthImage (nu-5.webp)
  - NumberedGrid (flashcard features - 2 items, 4 columns)
  - FullWidthImage (nu-6.webp, nu-7.webp)
- [ ] Test preview in Prismic
- [ ] Publish and test on `/work/nuro`

#### Step 5.4: Migrate Copacabana Content

- [ ] Create "Copacabana" document in Prismic
- [ ] Fill metadata
- [ ] Add slices (7 images + text blocks)
- [ ] Publish and test on `/work/copacabana`

#### Step 5.5: Migrate Circle Content

- [ ] Create "Circle" document in Prismic
- [ ] Fill metadata
- [ ] Add slices (9 images + NumberedGrid with 4 items)
- [ ] Publish and test on `/work/circle`

#### Step 5.6: Migrate Petrichor Content

- [ ] Create "Petrichor" document in Prismic
- [ ] Fill metadata
- [ ] Add slices (6 images + text blocks)
- [ ] Publish and test on `/work/petrichor`

---

### Phase 6: Work Gallery Page

**Goal:** Create project index/gallery page

#### Step 6.1: Fetch All Projects

- [ ] Create `src/routes/work/+page.server.ts`
- [ ] Fetch all projects from Prismic
- [ ] Sort by featured flag or date
- [ ] Return projects array

#### Step 6.2: Build Gallery Layout

- [ ] Create `src/routes/work/+page.svelte`
- [ ] Use IndexCard component to display projects
- [ ] Create grid or list layout
- [ ] Add filtering by category (optional)
- [ ] Test responsive behavior

---

### Phase 7: Polish & Optimization

**Goal:** Enhance interactivity and performance

#### Step 7.1: Animations

- [ ] Uncomment GSAP animations in `static/js/motion.js`
- [ ] Implement smooth scroll (Lenis)
- [ ] Add scroll-triggered animations with ScrollTrigger
- [ ] Implement text splitting effects (migrate to GSAP SplitText)
- [ ] Add hover states and transitions

#### Step 7.2: Performance

- [ ] Image lazy loading for all slices
- [ ] Route preloading for project pages
- [ ] Performance audit (Lighthouse)
- [ ] Optimize bundle size

#### Step 7.3: Accessibility & SEO

- [ ] Accessibility audit (WCAG 2.1)
- [ ] Add proper alt text to all images
- [ ] Meta tags for all pages
- [ ] Open Graph images
- [ ] Generate sitemap from Prismic documents

#### Step 7.4: Additional Features

- [ ] Thoughts/blog section (optional)
- [ ] 404/401 error pages
- [ ] Contact form (if needed)
- [ ] Resume page integration

---

### Phase 8: Deployment

**Goal:** Launch the site

#### Step 8.1: Pre-deployment

- [ ] Choose hosting platform (Vercel, Netlify, Cloudflare Pages)
- [ ] Configure environment variables (`VITE_PRISMIC_ENVIRONMENT`)
- [ ] Setup custom domain
- [ ] Configure Prismic webhooks for automatic rebuilds

#### Step 8.2: Launch

- [ ] Run production build: `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Deploy to hosting platform
- [ ] Test live site
- [ ] Setup analytics (optional)

---

## 10. Component Porting Checklist

### Priority 1: Case Study Components

#### Sidebar Component

**Vanilla:** `components/sidebar.js`
**SvelteKit:** `src/lib/components/Sidebar.svelte` (to create)

**Features:**

- Accepts: heading, description, 4 metadata rows
- Numbered display (01-04)
- Responsive layout
- Sticky positioning (optional)

**Props:**

```typescript
{
  heading: string;
  description: string;
  metadata: Array<{ label: string; value: string }>; // max 4 items
}
```

#### Text Block Component

**Vanilla:** `components/text.js`
**SvelteKit:** `src/lib/components/TextBlock.svelte` (to create)

**Features:**

- Single or multi-column layouts
- Rich text support
- Accent text highlighting
- Responsive breakpoints

**Props:**

```typescript
{
  columns: 1 | 2 | 3 | 4;
  content: string | string[];
}
```

#### Image Block Component

**Vanilla:** `components/image.js`
**SvelteKit:** `src/lib/components/ImageBlock.svelte` (to create)

**Features:**

- Responsive images with srcset
- Lazy loading
- Optional caption
- Grid layout support

**Props:**

```typescript
{
  src: string;
  srcset?: string;
  alt: string;
  caption?: string;
  loading?: 'lazy' | 'eager';
  layout?: 'single' | 'grid';
}
```

### Priority 2: Homepage Components

#### Project Card Component

**Vanilla:** Inline HTML in index.html (s-hm_card)
**SvelteKit:** `src/lib/components/ProjectCard.svelte` (to create)

**Features:**

- Background image
- Overlay image
- Project title and description
- Link to case study
- Hover effects

**Props:**

```typescript
{
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
  overlayImage: string;
}
```

### Priority 3: Case Study Layout Components

#### Case Study Header

**SvelteKit:** `src/lib/components/CaseStudyHeader.svelte` (to create)

**Features:**

- Project title
- Main description (rich text)
- Integrated sidebar or separate component
- Responsive two-column layout

**Props:**

```typescript
{
  title: string;
  description: string;
  sidebar?: {
    role: string;
    timeline: string;
    team: string;
    tools: string;
  };
}
```

#### Case Study Grid

**SvelteKit:** `src/lib/components/CaseStudyGrid.svelte` (to create)

**Features:**

- 2 or 4 column layouts
- Numbered items
- Gap control
- Responsive stacking

**Props:**

```typescript
{
  columns: 2 | 4;
  items: Array<{
    number?: string;
    heading: string;
    description: string;
  }>;
}
```

---

## 11. Technical Considerations

### Performance Optimization

- **Image Format**: WebP for all photos (already done in vanilla)
- **Font Loading**: font-display: swap (already configured)
- **Code Splitting**: Leverage SvelteKit's automatic splitting
- **Lazy Loading**: Implement for images below fold
- **Preloading**: Critical routes and assets

### Accessibility

- **Semantic HTML**: Maintain heading hierarchy
- **ARIA Labels**: Navigation, buttons, landmarks
- **Focus Management**: Keyboard navigation for drawer
- **Color Contrast**: Already meets WCAG AA (white on dark)
- **Alt Text**: Required for all images

### SEO Strategy

- **Dynamic Meta Tags**: Use Prismic meta fields
- **Open Graph**: Share previews for projects
- **Structured Data**: Schema.org for portfolio items
- **Sitemap**: Generate from Prismic documents
- **Canonical URLs**: Prevent duplicate content

### Browser Support

- **Modern Evergreen**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **CSS Grid & Flexbox**: Full support
- **ES6+**: Vite transpilation for older browsers if needed
- **WebP Fallbacks**: Not needed (95%+ support)

---

## 12. File Structure Reference

### Vanilla Implementation

```
/Users/austinjoseph/Documents/GitHub/vitruvian/vanilla/
```

Key files:

- `index.html` - Homepage
- `about.html` - About page
- `work/*.html` - Case studies
- `components/*.js` - Web components
- `css/davinci-v0.css` - Main stylesheet (2094 lines)
- `css/styles.css` - Global styles (132 lines)
- `css/variables.css` - Design tokens
- `images/` - 45MB of assets
- `fonts/` - Custom typefaces

### SvelteKit Implementation

```
/Users/austinjoseph/Documents/GitHub/vitruvian/website/
```

Key files:

- `src/routes/+page.svelte` - Homepage
- `src/routes/+layout.svelte` - Root layout
- `src/lib/components/` - Svelte components
- `src/lib/styles/` - Global CSS
- `src/lib/prismicio.ts` - Prismic client
- `slicemachine.config.json` - Slice Machine config
- `customtypes/page/` - Prismic page type

---

## 13. Development Workflow

### Local Development

```bash
# Start SvelteKit dev server
cd website
npm run dev
# → http://localhost:5173

# Start Slice Machine (separate terminal)
npm run slicemachine
# → http://localhost:9999
```

### Creating a New Slice

1. Open Slice Machine (localhost:9999)
2. Create new slice with fields
3. Generate Svelte component
4. Implement component in `src/lib/slices/`
5. Test in slice simulator (/slice-simulator)
6. Use in page routes

### Fetching Prismic Content

```typescript
// In +page.server.ts
import { createClient } from "$lib/prismicio";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const page = await client.getByUID("page", "homepage");

  return {
    page,
  };
}
```

### Building for Production

```bash
npm run build
npm run preview  # Test production build locally
```

---

## 14. Design Philosophy

This portfolio is built with a **component-first, content-flexible** approach:

1. **Atomic Design Principles**
   - Small, reusable components
   - Composition over configuration
   - Single responsibility

2. **Content-Agnostic Layouts**
   - Slices can be reordered
   - Flexible grid systems
   - Responsive by default

3. **Performance-First**
   - Minimal JavaScript
   - Progressive enhancement
   - Fast page transitions

4. **Accessibility-Aware**
   - Semantic markup
   - Keyboard navigation
   - Screen reader support

5. **Designer-Friendly CMS**
   - Visual slice previews
   - WYSIWYG editing
   - Instant previews

---

## Conclusion

The Vitruvian portfolio project is **60% complete** with solid foundations:

- ✅ Modern SvelteKit architecture
- ✅ Custom CSS design system fully ported
- ✅ Core navigation and layout components
- ✅ Prismic CMS infrastructure configured
- ✅ TypeScript for type safety

**Next critical phase**: Create case study components and Prismic slices to enable content migration. The component-first design and Prismic's slice model are perfectly aligned for a flexible, maintainable portfolio system.

**Estimated completion timeline**: 3-4 sprints (~6-8 weeks) for full feature parity with vanilla version plus enhanced CMS capabilities.
