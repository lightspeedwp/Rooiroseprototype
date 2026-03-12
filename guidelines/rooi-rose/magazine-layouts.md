# Magazine Layouts — rooi rose

**Category**: Design System  
**Last Updated**: 2026-03-12  
**Status**: ✅ Production Ready

---

## Overview

This guideline documents the three core magazine layout patterns used throughout the rooi rose prototype: Homepage, Category Pages, and Single Post (Article) layouts. These layouts establish the visual hierarchy and content flow for the lifestyle magazine aesthetic.

---

## 1. Homepage Layout

**Template**: `/src/app/pages/Home.tsx`  
**Pattern Type**: Editorial Grid with Featured Content  
**Grid System**: 12-column modular grid

### Layout Structure

```
┌─────────────────────────────────────────────┐
│ Header (Sticky)                              │
├─────────────────────────────────────────────┤
│ Hero Slider (Full-width, 3:2 aspect ratio)  │
│ - 3-5 featured articles                      │
│ - Overlay text (white on dark gradient)     │
│ - Auto-play carousel                         │
├─────────────────────────────────────────────┤
│ News Flashes (Horizontal scroll)            │
│ - Breaking news ticker                       │
│ - Red accent background                      │
├─────────────────────────────────────────────┤
│ Category Sections (Stacked)                 │
│ ┌───────────────────────────────────────┐   │
│ │ Kos (Food) - 3-column grid            │   │
│ │ - Featured image + headline + excerpt │   │
│ └───────────────────────────────────────┘   │
│ ┌───────────────────────────────────────┐   │
│ │ Mode (Fashion) - 3-column grid        │   │
│ └───────────────────────────────────────┘   │
│ ┌───────────────────────────────────────┐   │
│ │ Skoonheid (Beauty) - 3-column grid    │   │
│ └───────────────────────────────────────┘   │
│ (Repeat for all 10 categories)              │
├─────────────────────────────────────────────┤
│ Competitions Section                         │
│ - 2-column grid                              │
│ - Badge overlays (active/closed)             │
├─────────────────────────────────────────────┤
│ Events Section                               │
│ - 3-column grid                              │
│ - Date badges                                │
├─────────────────────────────────────────────┤
│ Footer                                       │
└─────────────────────────────────────────────┘
```

### Design Tokens

**Spacing**:
- Section padding: `var(--wp--preset--spacing--large)` (top/bottom)
- Content gap: `var(--wp--preset--spacing--medium)`
- Card gap: `var(--wp--preset--spacing--small)`

**Typography**:
- Section headings: Playfair Display SC, `var(--wp--preset--font-size--x-large)`
- Article headlines: Playfair Display SC, `var(--wp--preset--font-size--large)`
- Body text: Karla, `var(--wp--preset--font-size--base)`

**Colors**:
- Background: White (light mode), `var(--custom-navy)` (dark mode)
- Accent: `var(--custom-primary)` (#e01e12 red)

### Components Used

- `HeroSlider` — Full-width featured content carousel
- `NewsFlashes` — Breaking news ticker
- `CategorySection` — Modular category content blocks
- `CompetitionsSection` — Competition cards grid
- `EventsSection` — Events cards grid

### Responsive Behavior

**Desktop (1280px+)**:
- 3-column grid for category sections
- Full-width hero slider

**Tablet (768px - 1279px)**:
- 2-column grid for category sections
- Full-width hero slider

**Mobile (<768px)**:
- 1-column grid (stacked)
- Full-width hero slider (touch swipe enabled)
- Horizontal scroll for news flashes

---

## 2. Category Page Layout

**Template**: `/src/app/pages/Category.tsx`  
**Pattern Type**: Magazine Archive with Featured Hero  
**Grid System**: Masonry grid (Pinterest-style)

### Layout Structure

```
┌─────────────────────────────────────────────┐
│ Header (Sticky)                              │
├─────────────────────────────────────────────┤
│ Category Hero                                │
│ - Category name (Playfair Display SC)       │
│ - Breadcrumbs                                │
│ - Background: Subtle gradient               │
├─────────────────────────────────────────────┤
│ Subcategory Filter (if applicable)          │
│ - Horizontal pill buttons                   │
│ - Karla font                                │
├─────────────────────────────────────────────┤
│ Article Grid (3-column masonry)             │
│ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │ Card 1 │ │ Card 2 │ │ Card 3 │           │
│ │ 3:2 img│ │ 3:2 img│ │ 3:2 img│           │
│ │ Title  │ │ Title  │ │ Title  │           │
│ │ Excerpt│ │ Excerpt│ │ Excerpt│           │
│ │ Meta   │ │ Meta   │ │ Meta   │           │
│ └────────┘ └────────┘ └────────┘           │
│ ┌────────┐ ┌────────┐ ┌────────┐           │
│ │ Card 4 │ │ Card 5 │ │ Card 6 │           │
│ └────────┘ └────────┘ └────────┘           │
│ (Masonry layout - variable heights)         │
├─────────────────────────────────────────────┤
│ Pagination                                   │
├─────────────────────────────────────────────┤
│ Footer                                       │
└─────────────────────────────────────────────┘
```

### Design Tokens

**Spacing**:
- Category hero padding: `var(--wp--preset--spacing--x-large)`
- Grid gap: `var(--wp--preset--spacing--medium)`
- Card padding: `var(--wp--preset--spacing--small)`

**Typography**:
- Category title: Playfair Display SC, `var(--wp--preset--font-size--xx-large)`
- Card headlines: Playfair Display SC, `var(--wp--preset--font-size--medium)`
- Excerpt: Karla, `var(--wp--preset--font-size--small)`

**Images**:
- Aspect ratio: 3:2 (magazine standard)
- Loading: Lazy (below fold)
- Object-fit: Cover

### Components Used

- `CategoryHeader` — Hero section with breadcrumbs
- `SubsectionFilter` — Subcategory pill navigation
- `ArticleCard` — Magazine-style article cards
- `SimplePagination` — Page navigation

### Responsive Behavior

**Desktop (1280px+)**:
- 3-column masonry grid
- Generous white space

**Tablet (768px - 1279px)**:
- 2-column masonry grid
- Reduced white space

**Mobile (<768px)**:
- 1-column stacked layout
- Full-width cards

---

## 3. Single Post (Article) Layout

**Template**: `/src/app/pages/Article.tsx`  
**Pattern Type**: Editorial Long-form Content  
**Grid System**: Single-column content well

### Layout Structure

```
┌─────────────────────────────────────────────┐
│ Header (Sticky)                              │
├─────────────────────────────────────────────┤
│ Article Hero                                 │
│ - Featured image (16:9 or 3:2)              │
│ - Headline (Playfair Display SC, large)     │
│ - Byline (author, date, reading time)       │
│ - Category badge                             │
├─────────────────────────────────────────────┤
│ Article Content (Single-column, max-width)  │
│ ┌───────────────────────────────────────┐   │
│ │ Body Text (Karla, optimal line-length)│   │
│ │                                        │   │
│ │ Pull Quote (Playfair Display SC)      │   │
│ │                                        │   │
│ │ Body Text (continued)                  │   │
│ │                                        │   │
│ │ Image (Full-width within content well)│   │
│ │ Caption (Karla, small, grey)           │   │
│ │                                        │   │
│ │ Body Text (continued)                  │   │
│ └───────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│ Social Share Bar                             │
│ - Facebook, WhatsApp, X, Email, Copy Link  │
├─────────────────────────────────────────────┤
│ Related Content                              │
│ - 3-column grid of related articles         │
├─────────────────────────────────────────────┤
│ Comments Section                             │
├─────────────────────────────────────────────┤
│ Footer                                       │
└─────────────────────────────────────────────┘
```

### Design Tokens

**Content Width**:
- Max-width: `var(--wp--custom--layout--content-size)` (680px)
- Wide content: `var(--wp--custom--layout--wide-size)` (1200px)

**Typography**:
- Headline: Playfair Display SC, `var(--wp--preset--font-size--xxx-large)`
- Body text: Karla, `var(--wp--preset--font-size--base)`
- Pull quotes: Playfair Display SC, `var(--wp--preset--font-size--x-large)`, italic
- Captions: Karla, `var(--wp--preset--font-size--small)`, grey

**Line Height**:
- Body text: 1.7 (optimal readability)
- Headlines: 1.2

**Spacing**:
- Paragraph gap: `var(--wp--preset--spacing--small)`
- Section gap: `var(--wp--preset--spacing--large)`

### Editorial Typography Hierarchy

1. **H1 (Article Title)**: Playfair Display SC, xxx-large, bold
2. **H2 (Major Section)**: Playfair Display SC, xx-large, bold
3. **H3 (Subsection)**: Playfair Display SC, x-large, bold
4. **H4 (Minor Heading)**: Karla, large, semibold
5. **Body**: Karla, base, regular
6. **Pull Quote**: Playfair Display SC, x-large, italic

### Components Used

- `ArticleHero` — Featured image + headline + metadata
- `PullQuoteSection` — Editorial pull quotes
- `SocialShare` — Share buttons
- `RelatedContent` — Related articles grid
- `CommentsSection` — Reader comments

### Responsive Behavior

**Desktop (1280px+)**:
- Single-column content well (680px max-width)
- Generous side margins
- Full-width images within content well

**Tablet (768px - 1279px)**:
- Single-column content well (90% viewport width)
- Reduced side margins

**Mobile (<768px)**:
- Single-column, full-width
- Smaller typography scale
- Touch-optimized share buttons

---

## 4. Design Principles

### White Space

rooi rose uses generous white space to create a premium, breathable reading experience:

- **Minimum spacing**: `var(--wp--preset--spacing--small)` (16px)
- **Standard spacing**: `var(--wp--preset--spacing--medium)` (32px)
- **Large spacing**: `var(--wp--preset--spacing--large)` (48px)

### Image Guidelines

**Aspect Ratios**:
- Hero images: 16:9 or 3:2
- Card thumbnails: 3:2 (magazine standard)
- In-content images: Variable (maintains original aspect ratio)

**Quality**:
- Minimum resolution: 1200px wide
- Format: WebP (with JPEG fallback)
- Compression: 80% quality

**Placement**:
- Full-width within content well
- Center-aligned
- Captions below image (grey, small text)

### Typography Scale

rooi rose uses a modular scale for visual rhythm:

```
xxx-large: 3rem (48px)    — Article headlines
xx-large:  2.25rem (36px) — Section headings
x-large:   1.875rem (30px)— Pull quotes, category titles
large:     1.5rem (24px)   — Card headlines
medium:    1.25rem (20px)  — Subheadings
base:      1rem (16px)     — Body text
small:     0.875rem (14px) — Captions, metadata
x-small:   0.75rem (12px)  — Labels
```

### Color Usage

**Primary Red** (`#e01e12`):
- Category badges
- Accent elements
- CTAs (sparingly)
- Hover states

**Neutrals**:
- Body text: `#1a1a1a` (light mode), `#f5f5f5` (dark mode)
- Headings: Pure black/white
- Backgrounds: White/Navy

**Tagline Grey** (`#424242`):
- Metadata (date, author, reading time)
- Captions
- Secondary text

---

## 5. WordPress Block Patterns

### Homepage Pattern

**Pattern Name**: `rooi-rose/page-home`  
**Blocks Used**:
- `core/cover` (hero slider)
- `core/group` (category sections)
- `core/query` (article grids)
- `core/columns` (multi-column layouts)

### Category Archive Pattern

**Pattern Name**: `rooi-rose/archive-category`  
**Blocks Used**:
- `core/group` (category hero)
- `core/query` (article loop)
- `core/post-template` (masonry grid)
- `core/pagination` (page navigation)

### Single Post Pattern

**Pattern Name**: `rooi-rose/single-post`  
**Blocks Used**:
- `core/post-featured-image` (hero image)
- `core/post-title` (headline)
- `core/post-date` + `core/post-author` (byline)
- `core/post-content` (article body)
- `outermost/social-sharing` (share buttons)
- `core/query` (related posts)

---

## 6. Performance Considerations

### Lazy Loading

- Hero images: Eager loading (`loading="eager"`)
- Above-fold thumbnails: Eager loading
- Below-fold images: Lazy loading (`loading="lazy"`)

### Image Optimization

- Responsive images: `srcset` with 3 sizes (480px, 800px, 1200px)
- Fetch priority: `fetchpriority="high"` for hero images
- Aspect ratio boxes: Prevent layout shift

### Code Splitting

- Homepage: Separate bundle (hero slider, category sections)
- Category pages: Lazy-loaded route
- Single posts: Lazy-loaded route

---

## 7. Accessibility

### Semantic HTML

- `<main>` for primary content
- `<article>` for blog posts
- `<aside>` for sidebars
- `<nav>` for navigation

### ARIA Labels

- Breadcrumbs: `aria-label="Breadcrumbs"`
- Category filters: `aria-label="Filter by subcategory"`
- Pagination: `aria-label="Page navigation"`

### Keyboard Navigation

- All interactive elements focusable
- Skip-to-content link
- Focus indicators visible (red ring)

### Screen Readers

- Alt text for all images
- Descriptive link text (no "click here")
- Heading hierarchy maintained (h1 → h2 → h3)

---

## 8. Dark Mode

All layouts support automatic dark mode:

**Background Colors**:
- Light mode: White (`#ffffff`)
- Dark mode: Navy (`var(--custom-navy)`)

**Text Colors**:
- Light mode: Near-black (`#1a1a1a`)
- Dark mode: Off-white (`#f5f5f5`)

**Accent Colors**:
- Primary red adjusts brightness for dark mode
- Focus rings use lighter variant

---

## 9. Related Guidelines

- [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Voice, tone, photography
- [Content Architecture](/guidelines/rooi-rose/content-architecture.md) — Category structure
- [Typography](/guidelines/design-tokens/typography.md) — Font system
- [Spacing](/guidelines/design-tokens/spacing.md) — Spacing scale
- [Layout](/guidelines/design-tokens/layout.md) — Grid system

---

**Last Updated**: 2026-03-12  
**Maintained By**: rooi rose Design System Team
