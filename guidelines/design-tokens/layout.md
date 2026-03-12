# Layout — rooi rose Magazine

**Last updated**: 2026-03-11  
**Version**: 2.0 (rooi rose Redesign)

> **Status**: Updated for rooi rose magazine. New 12-column modular grid system with generous gutters, flexible container widths, and editorial layout patterns.

This document details the layout system for *rooi rose*, ensuring consistent spacing, alignment, and responsiveness across the magazine-style application.

---

## 1. Responsive Breakpoints

rooi rose uses a mobile-first breakpoint system optimized for editorial content across devices.

| Token | Width | Tailwind Prefix | Typical Devices | rooi rose Usage |
|:------|:------|:----------------|:----------------|:----------------|
| `xs` | < 480px | *(base)* | Small phones | Single-column, stacked layout |
| `sm` | 480px | `sm:` | Large phones | 2-column grids, larger touch targets |
| `md` | 768px | `md:` | Tablets (portrait) | 3-column grids, sidebar appears |
| `lg` | 1024px | `lg:` | Tablets (landscape), laptops | Full desktop layout, 12-column grid active |
| `xl` | 1280px | `xl:` | Desktops | Optimal reading experience |
| `2xl` | 1440px | `2xl:` | Wide desktops | Maximum container width reached |

### Breakpoint Strategy

**Mobile (< 480px)**:
- Single-column layout
- Stacked article cards
- Simplified navigation
- Hero images 1:1 or 4:5 aspect

**Tablet (480-768px)**:
- 2-column article grids
- Side-by-side featured content
- Horizontal hero images (3:2 aspect)

**Desktop (≥ 768px)**:
- 3-column or 12-column modular grid
- Full navigation menu
- Sidebar content
- Generous white space

---

## 2. Container System

rooi rose uses **three container widths** for editorial flexibility:

| Container | Max Width | Usage | CSS Class |
|:----------|:----------|:------|:----------|
| **Narrow** | 680px | Single-column articles, long-form reading | `.container-narrow` |
| **Content** | 960px | Standard content, 2-column layouts | `.container-content` |
| **Wide** | 1280px | Editorial features, 3-column grids | `.container-wide` |
| **Full-Bleed** | 100vw | Hero images, galleries, full-width sections | `.container-full` |

### Container Implementation

#### Narrow Container (680px)
Optimal for long-form article reading (45-75 characters per line).

```css
.container-narrow {
  width: 100%;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-medium); /* 24px */
  padding-right: var(--space-medium);
}
```

**Usage**: Article body text, single-column features, newsletter signup forms.

---

#### Content Container (960px)
Standard editorial layout for mixed content.

```css
.container-content {
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-medium); /* 24px */
  padding-right: var(--space-medium);
}
```

**Usage**: Category pages, 2-column article/sidebar layouts, standard pages.

---

#### Wide Container (1280px)
Maximum width for editorial features and grid layouts.

```css
.container-wide {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-large); /* 40px */
  padding-right: var(--space-large);
}
```

**Usage**: Homepage, 3-column category grids, wide editorial features.

---

#### Full-Bleed (100vw)
Edge-to-edge sections for maximum visual impact.

```css
.container-full {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
```

**Usage**: Hero sections, full-width galleries, alternating background sections.

---

## 3. Magazine Grid System

rooi rose uses a **12-column modular grid** for flexible editorial layouts.

### Grid Specifications

| Property | Value | Notes |
|:---------|:------|:------|
| **Columns** | 12 | Standard CSS Grid 12-column system |
| **Gutter** | 24px (desktop), 16px (mobile) | `var(--space-medium)` / `var(--space-small)` |
| **Margin** | 24px (desktop), 16px (mobile) | Container horizontal padding |
| **Max Width** | 1280px | Wide container |

### Grid Implementation

```css
.magazine-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-medium); /* 24px */
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-medium);
}

@media (max-width: 767px) {
  .magazine-grid {
    gap: var(--space-small); /* 16px on mobile */
    padding: 0 var(--space-small);
  }
}
```

---

## 4. Editorial Layout Patterns

### 4.1 Single Column (12 cols)

Long-form articles, full-width content.

```html
<div class="magazine-grid">
  <article class="col-span-12">
    <!-- Full width article -->
  </article>
</div>
```

**Usage**: Article body, full-width hero sections, single-focus pages.

---

### 4.2 Two Column (8:4)

Main content with sidebar.

```html
<div class="magazine-grid">
  <article class="col-span-8">
    <!-- Main article content -->
  </article>
  
  <aside class="col-span-4">
    <!-- Sidebar: Related articles, newsletter signup -->
  </aside>
</div>
```

**Responsive**:
- Desktop (≥ 768px): 8:4 layout
- Mobile (< 768px): Stacked (12:12)

**Usage**: Article pages with sidebar, category pages with filters.

---

### 4.3 Three Column (4:4:4)

Category grids, article lists.

```html
<div class="magazine-grid">
  <div class="col-span-4"><!-- Article card 1 --></div>
  <div class="col-span-4"><!-- Article card 2 --></div>
  <div class="col-span-4"><!-- Article card 3 --></div>
</div>
```

**Responsive**:
- Desktop (≥ 1024px): 3 columns (4:4:4)
- Tablet (768-1023px): 2 columns (6:6)
- Mobile (< 768px): 1 column (12)

**Usage**: Homepage category sections, category archive pages.

---

### 4.4 Hero + Offset (8:4)

Featured article with meta column.

```html
<div class="magazine-grid">
  <div class="col-span-8">
    <!-- Hero image + headline -->
  </div>
  
  <div class="col-span-4">
    <!-- Author, date, category, share buttons -->
  </div>
</div>
```

**Usage**: Featured article headers, editorial spotlights.

---

### 4.5 Magazine Spread (6:6)

Side-by-side editorial features.

```html
<div class="magazine-grid">
  <div class="col-span-6">
    <!-- Image or content -->
  </div>
  
  <div class="col-span-6">
    <!-- Text or complementary image -->
  </div>
</div>
```

**Usage**: Interview layouts, photo essays, split-screen features.

---

### 4.6 Masonry Grid (Variable)

Varied card heights for dynamic layouts.

```html
<div class="masonry-grid">
  <div class="masonry-item"><!-- Tall card --></div>
  <div class="masonry-item"><!-- Short card --></div>
  <div class="masonry-item"><!-- Medium card --></div>
</div>
```

**Implementation**: Use `react-responsive-masonry` package for React components, or CSS Grid with `grid-auto-flow: dense` for WordPress.

**Usage**: Photo galleries, mixed-content category pages, Pinterest-style layouts.

---

## 5. Aspect Ratios

rooi rose uses consistent aspect ratios for editorial photography.

| Ratio | CSS | Padding-Bottom | Usage |
|:------|:----|:---------------|:------|
| **3:2** | `aspect-ratio: 3 / 2` | 66.67% | Featured images, hero sections, landscape photos |
| **4:5** | `aspect-ratio: 4 / 5` | 125% | Portrait images, mobile hero sections |
| **9:16** | `aspect-ratio: 9 / 16` | 177.78% | Vertical stories, Instagram-style content |
| **16:9** | `aspect-ratio: 16 / 9` | 56.25% | Video embeds, widescreen content |
| **1:1** | `aspect-ratio: 1 / 1` | 100% | Gallery thumbnails, profile images |

### Aspect Ratio Implementation

```css
/* Modern browsers (preferred) */
.image-3-2 {
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

/* Fallback for older browsers */
.image-3-2-fallback {
  position: relative;
  padding-bottom: 66.67%;
  overflow: hidden;
}

.image-3-2-fallback img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**rooi rose Preference**: 3:2 for featured images (magazine editorial standard), 4:5 for portrait/mobile.

---

## 6. Vertical Rhythm

rooi rose maintains consistent vertical rhythm through spacing tokens.

### Spacing Between Sections

| Section Type | Spacing Token | Value | Usage |
|:-------------|:-------------|:------|:------|
| **Paragraph to paragraph** | `small` | 16px | Article body flow |
| **Card internal spacing** | `medium` | 24px | Inside article cards |
| **Between article cards** | `large` | 40px | Category grid vertical gaps |
| **Between homepage sections** | `x-large` | 64px | Major content breaks |
| **Hero section padding** | `xx-large` | 96px | Dramatic editorial impact |
| **Scrollytelling breaks** | `xxx-large` | 128px | Magazine-style pacing |

### Vertical Rhythm Formula

```
Base unit: 8px (--space-xx-small × 2)
Small: 16px (2 units)
Medium: 24px (3 units)
Large: 40px (5 units)
X-Large: 64px (8 units)
XX-Large: 96px (12 units)
XXX-Large: 128px (16 units)
```

---

## 7. WordPress FSE Layout Settings

### theme.json Configuration

```json
{
  "settings": {
    "layout": {
      "contentSize": "960px",
      "wideSize": "1280px"
    }
  }
}
```

**Mapping**:
- `contentSize` → `.container-content` (standard editorial width)
- `wideSize` → `.container-wide` (maximum editorial width)
- Full-width → 100vw (no container)

### WordPress Alignment Classes

```css
.alignwide {
  max-width: var(--wp--style--global--wide-size); /* 1280px */
  width: 100%;
}

.alignfull {
  max-width: none;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
```

---

## 8. Responsive Layout Strategy

### Mobile-First Approach

rooi rose uses mobile-first responsive design:

```css
/* Base: Mobile (< 480px) */
.article-grid {
  grid-template-columns: 1fr; /* Single column */
}

/* Tablet (≥ 480px) */
@media (min-width: 480px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}
```

---

## 9. Layout Utilities

### CSS Grid Utilities

```css
/* 12-Column Grid */
.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); }

/* Column Spans */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-8 { grid-column: span 8; }
.col-span-12 { grid-column: span 12; }

/* Gap Utilities */
.gap-small { gap: var(--space-small); }
.gap-medium { gap: var(--space-medium); }
.gap-large { gap: var(--space-large); }
```

### Flexbox Utilities

```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 1rem; }
```

---

## 10. Migration from Die Papier

### Layout System Changes

| Die Papier | rooi rose | Change Rationale |
|:-----------|:----------|:-----------------|
| 4-column newspaper grid | 12-column modular grid | More flexible editorial layouts |
| Single container (1440px) | 3 containers (680px/960px/1280px) | Optimized reading widths per content type |
| 16:9 hero images | 3:2 hero images | Magazine editorial standard |
| Tight gutters (16px) | Generous gutters (24px) | More white space, sophisticated feel |
| Static breakpoints | Fluid responsive system | Better tablet/mobile experience |

**Impact**: rooi rose layouts are more flexible, more generous, and optimized for editorial magazine content vs. newspaper density.

---

## 11. Accessibility Guidelines

### WCAG 2.1 Compliance

- **Reading Line Length**: Maximum 680px (narrow container) = 45-75 characters per line
- **Touch Targets**: Minimum 44x44px tap targets (ensured by `medium` padding)
- **Keyboard Navigation**: Logical tab order follows visual hierarchy (left-to-right, top-to-bottom)
- **Reflow**: Content reflows at 400% zoom without horizontal scrolling

### Focus Management

```css
:focus-visible {
  outline: 3px solid var(--custom-primary-accessible);
  outline-offset: 4px;
}
```

---

## 12. Related Guidelines

- [Spacing](/guidelines/design-tokens/spacing.md) — Magazine spacing scale (8 tokens)
- [Typography](/guidelines/design-tokens/typography.md) — Playfair Display SC + Karla
- [Editorial Components](/guidelines/design-tokens/editorial-components.md) — Component layout patterns
- [rooi rose Editorial Style Guide](/guidelines/rooi-rose/editorial-style-guide.md) — Article structure and layout hierarchy
- [Aspect Ratios](/guidelines/design-tokens/aspect-ratios.md) — Image aspect ratio utilities

---

## 13. Visual Layout Examples

### Homepage Layout (Desktop)

```
┌──────────────────────────────────────────────┐
│               Hero Slider (3:2)              │  ← XX-Large padding (96px)
│         [Full-bleed, 100vw width]            │
└──────────────────────────────────────────────┘
               ↕ X-Large gap (64px)
┌──────────────────────────────────────────────┐
│  [Container Wide: 1280px]                    │
│  ┌──────────┬──────────┬──────────┐         │  ← 3-column grid
│  │ Card 1   │ Card 2   │ Card 3   │         │
│  └──────────┴──────────┴──────────┘         │
└──────────────────────────────────────────────┘
               ↕ X-Large gap (64px)
┌──────────────────────────────────────────────┐
│     Pull Quote Section (soft grey bg)        │  ← Large padding (40px)
└──────────────────────────────────────────────┘
```

### Article Page Layout (Desktop)

```
┌──────────────────────────────────────────────┐
│         Hero Image (3:2 aspect)              │  ← Container Wide (1280px)
└──────────────────────────────────────────────┘
               ↕ Large gap (40px)
┌────────────────────────┬─────────────────────┐
│                        │                     │
│  Article Body          │  Sidebar            │  ← 8:4 grid
│  [Container Narrow]    │  - Related          │
│  680px max width       │  - Newsletter       │
│                        │  - Share            │
└────────────────────────┴─────────────────────┘
```

---

**Last Updated**: 2026-03-11  
**Version**: 2.0 (rooi rose Redesign)
