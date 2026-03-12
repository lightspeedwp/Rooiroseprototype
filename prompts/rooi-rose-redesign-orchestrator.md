# Rooi Rose Redesign Orchestrator

**Priority**: P0 — Brand Transformation  
**Status**: IN PROGRESS (Phase 1: 55% Complete)  
**Estimated Effort**: 60-70 hours (100+ tasks across 6 phases)

---

## Executive Summary

Transform the Die Papier newspaper prototype into **rooi rose** — a sophisticated Afrikaans lifestyle magazine with editorial aesthetics. This orchestrator manages the complete redesign from brand tokens through content architecture, navigation, homepage, category, and single post templates, maintaining the existing token-driven architecture while introducing magazine-style layouts, new typography (Playfair Display SC + Karla), and the rooi rose red (#e01e12) color palette.

**Value**: Token-first redesign preserves WordPress export capability, accessibility compliance, and dark mode support while delivering a premium magazine aesthetic with proper editorial content structure.

**Risks**: 
- WCAG contrast failures with bright red (#e01e12) on white backgrounds
- Typography rhythm disruption from font changes
- Component coupling to old Die Papier tokens
- Content architecture mismatch with live WordPress structure
- Route structure incompatibility with new navigation

**Mitigation**: Accessible color variants defined upfront, comprehensive token mapping, content architecture audit before implementation, phased rollout with visual regression testing.

---

## Phase 0: Content Architecture Audit (P0) — NEW

**Goal**: Audit current routes/structure, map to live WordPress content architecture, establish navigation strategy  
**Effort**: 6-8 hours (15 tasks)  
**Orchestrator**: `/prompts/rooi-rose-content-architecture-orchestrator.md`

### Why This Phase is Critical

Before redesigning pages, we must ensure the prototype's route structure, navigation, and content organization aligns with the live WordPress site's editorial architecture. This prevents:
- Building pages that don't match live content categories
- Navigation mismatches during WordPress migration
- Content template gaps for existing page types
- Wasted design effort on deprecated routes

### 0.1 Current State Audit (5 tasks)

**Task 0.1.1**: Audit `/src/app/routes.tsx`  
- Document all existing routes
- Identify Die Papier-specific routes to deprecate
- Map routes to content types (articles, categories, pages, etc.)

**Task 0.1.2**: Audit existing navigation structures  
- Header navigation in `/src/app/components/layout/Header.tsx`
- Footer navigation
- Mobile navigation
- Breadcrumb patterns

**Task 0.1.3**: Audit existing page templates  
- Homepage structure
- Category/archive pages
- Single article pages
- Special pages (contact, competitions, etc.)

**Task 0.1.4**: Identify content type gaps  
- Missing recipe template
- Missing competition template
- Missing awards hub template
- Missing podcast/video pages

**Task 0.1.5**: Document route → WordPress URL mapping  
- Create mapping table for migration
- Identify redirect requirements

### 0.2 New Content Architecture Implementation (10 tasks)

**See**: `/prompts/rooi-rose-content-architecture-orchestrator.md` for complete strategy

**Key Deliverables**:
1. **New Navigation Structure** (11 top-level items):
   - Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, Kontak

2. **Category Hierarchy** (8 main categories with subcategories):
   - Kos (12 subcategories)
   - Mode (3 subcategories)
   - Skoonheid (5 subcategories)
   - Gesondheid (3 subcategories)
   - Bekendes (1 subcategory)
   - Leefstyl (4 subcategories)
   - Jou lewe (6 subcategories)
   - Ontspanning (6 subcategories)

3. **Page Template System** (6 core templates):
   - Home Template
   - Category Template
   - Article Template (Long-form editorial)
   - Recipe Template
   - Competition Template
   - Awards Template

4. **Route Structure Refactor**:
   - Update `/src/app/routes.tsx` with new categories
   - Create subcategory routes
   - Implement mega menu navigation
   - Build editorial footer

**Success Criteria**:
- ✅ All 11 main navigation items have routes
- ✅ All 44 subcategories have routes and templates
- ✅ 6 page templates created and mapped to routes
- ✅ Header/footer updated with new navigation
- ✅ Route → WordPress URL mapping documented

---

## Phase 1: Guidelines Cleanup & Token Foundation (P0)

**Goal**: Remove obsolete Die Papier newspaper guidelines, establish rooi rose brand tokens  
**Effort**: 8-10 hours (20 tasks)

### 1.1 Delete Obsolete Guidelines (5 tasks)

**Files to DELETE**:
```
/guidelines/wordpress-migration/redirects.md — English→Afrikaans redirects (Die Papier specific)
/guidelines/wordpress-migration/full-page-patterns.md — 159 Die Papier patterns (will be recreated)
/guidelines/content/master-content-export.md — Die Papier static pages
/guidelines/data-structure/wordpress-data-model.md — Die Papier CPTs (will be updated)
/src/imports/css-guidelines.md — Superseded by /guidelines/design-tokens/
/src/imports/cleanup-guidelines.md — Merged into main Guidelines.md
```

**Rationale**: These files reference Die Papier-specific content structures, URL patterns, and outdated CSS architecture that doesn't apply to rooi rose magazine editorial model.

### 1.2 Update Core Design Token Guidelines (10 tasks)

#### Task 1.2.1: Update `/guidelines/design-tokens/colors.md`

**Current**: Die Papier navy (#142135) + red (#E82C27)  
**New**: rooi rose palette

```markdown
# Colors — rooi rose Magazine

## 1. Brand Colors

| Token | Light | Dark | Usage | WCAG |
|:------|:------|:-----|:------|:-----|
| `--custom-primary` | #e01e12 | #ff4d42 | Logo, CTAs, accents | AA Large only |
| `--custom-primary-accessible` | #b51410 | #ff4d42 | Body links, buttons | AAA compliant |
| `--custom-primary-hover` | #c01711 | #ff6961 | Hover states | AA compliant |

## 2. Neutrals

| Token | Light | Dark | Usage |
|:------|:------|:-----|:------|
| `--base` | #FFFFFF | #1a1a1a | Background |
| `--contrast` | #222222 | #f5f5f5 | Headings |
| `--body-text` | #000000 | #e8e8e8 | Body copy |
| `--muted` | #f5f5f5 | #2a2a2a | Cards, borders |
| `--muted-foreground` | #424242 | #b8b8b8 | Taglines, meta |

## 3. Editorial Accents (NEW)

| Token | Value | Usage |
|:------|:------|:------|
| `--accent-blush` | #f4e5e0 | Section backgrounds |
| `--accent-warm-beige` | #f8f4f0 | Alternating sections |
| `--accent-soft-grey` | #e8e5e2 | Pull quote backgrounds |
```

**Accessibility Notes**:
- ⚠️ **#e01e12 fails WCAG AA for normal text** (3.58:1 contrast on white)
- ✅ Use **#b51410** for body links (4.72:1 — AAA compliant)
- ✅ Large text (18pt+) can use #e01e12 (passes AA Large)

---

#### Task 1.2.2: Update `/guidelines/design-tokens/typography.md`

**Current**: Roboto Serif + Inter  
**New**: Playfair Display SC + Karla

```markdown
# Typography — rooi rose Magazine

## 1. Font Families

| Role | Family | Weights | Usage |
|:-----|:-------|:--------|:------|
| **Display** | Playfair Display SC | 400, 600 | H1, H2, category labels |
| **Body** | Karla | 400, 600, 700 | H3-H6, body, UI |

**Google Fonts Import**:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;600&family=Karla:wght@400;600;700&display=swap');
```

## 2. Typography Scale (Editorial)

| Level | Font | Size | Line Height | Letter Spacing | Slug |
|:------|:-----|:-----|:------------|:---------------|:-----|
| **H1** | Playfair Display SC | 48px (clamp 36px→48px) | 1.1 (52px) | +0.05em | `xxx-large` |
| **H2** | Playfair Display SC | 36px (clamp 28px→36px) | 1.15 (41px) | +0.05em | `xx-large` |
| **H3** | Karla | 28px (clamp 24px→28px) | 1.2 (34px) | 0 | `x-large` |
| **H4** | Karla | 22px | 1.3 (29px) | 0 | `large` |
| **H5** | Karla | 18px | 1.4 (25px) | 0 | `medium` |
| **H6** | Karla | 14px | 1.5 (21px) | +0.02em | `small` |
| **Body (P1)** | Karla | 18px | 1.6 (29px) | 0 | `medium` |
| **Body (P2)** | Karla | 16px | 1.6 (26px) | 0 | `base` |
| **Small** | Karla | 14px | 1.5 (21px) | 0 | `small` |
| **Caption** | Karla | 12px | 1.4 (17px) | 0 | `x-small` |

**Editorial Enhancements**:
- Playfair Display SC small-caps add premium feel
- Increased letter-spacing (+5-10%) for readability
- Body line-height 1.6 for comfortable long-form reading
```

---

#### Task 1.2.3: Update `/guidelines/design-tokens/spacing.md`

**Current**: 7-step scale (x-small → xxx-large)  
**New**: Magazine spacing with generous white space

```markdown
# Spacing — rooi rose Magazine

## 1. Editorial Spacing Scale

| Slug | Value | Pixel | Usage |
|:-----|:------|:------|:------|
| `xx-small` | 0.25rem | 4px | Micro spacing |
| `x-small` | 0.5rem | 8px | Tight spacing |
| `small` | 1rem | 16px | Default gap |
| `medium` | 1.5rem | 24px | Section internal |
| `large` | 2.5rem | 40px | Between sections |
| `x-large` | 4rem | 64px | Major sections |
| `xx-large` | 6rem | 96px | Hero spacing |
| `xxx-large` | 8rem | 128px | Editorial breaks |

## 2. Magazine Layout Principles

**Vertical Rhythm**:
- Double standard padding on cards (2x `medium` = 48px)
- Generous section breaks (minimum `large` = 40px)
- Hero sections use `xx-large` or `xxx-large` (96-128px)

**Horizontal Gutters**:
- Standard gutter: `medium` (24px)
- Wide layouts: `large` (40px)
- Full-bleed sections: 0px (edge-to-edge)
```

---

#### Task 1.2.4: Update `/guidelines/design-tokens/layout.md`

**Current**: Newspaper 4-column grid  
**New**: Magazine 12-column modular grid

```markdown
# Layout — rooi rose Magazine

## 1. Container Widths

| Container | Max Width | Usage |
|:----------|:----------|:------|
| `narrow` | 680px | Single-column articles |
| `content` | 960px | Standard content |
| `wide` | 1280px | Editorial features |
| `full-bleed` | 100vw | Hero images, galleries |

## 2. Magazine Grid System

**12-Column Modular Grid**:
- Gutter: 24px (tablet+), 16px (mobile)
- Margin: 24px (tablet+), 16px (mobile)
- Breakpoints: 480px, 768px, 1024px, 1440px

**Editorial Layouts**:
```
Single Column:     [12 cols]           Long-form articles
Two Column:        [8 cols] [4 cols]   Article + sidebar
Three Column:      [4][4][4]           Category grids
Hero + Offset:     [8 cols]  [4 cols]  Featured + meta
Magazine Spread:   [6][6]              Editorial features
```

## 3. Aspect Ratios (NEW)

| Ratio | CSS | Usage |
|:------|:----|:------|
| `3:2` | 66.67% | Featured images |
| `4:5` | 125% | Portrait images |
| `9:16` | 177.78% | Vertical stories |
| `16:9` | 56.25% | Video embeds |
```

---

#### Task 1.2.5: Create `/guidelines/design-tokens/editorial-components.md` (NEW)

```markdown
# Editorial Components — rooi rose Magazine

## 1. Pull Quotes

**Visual Style**:
- Font: Playfair Display SC, 24-28px
- Color: `--custom-primary` (#e01e12)
- Border-left: 4px solid `--custom-primary`
- Background: `--accent-soft-grey`
- Padding: `large` (40px)

**Token Mapping**:
```css
.c-pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-x-large);
  color: var(--custom-primary);
  border-left: 4px solid var(--custom-primary);
  background-color: var(--accent-soft-grey);
  padding: var(--space-large);
}
```

## 2. Hero Sections

**Layout**:
- Full-bleed background image (3:2 aspect)
- Overlay gradient: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)
- Text overlay: bottom-aligned, max-width 680px
- Spacing: `xx-large` vertical padding (96px)

## 3. Category Labels

**Typography**:
- Font: Playfair Display SC, 14px
- Transform: uppercase
- Letter-spacing: +0.1em
- Color: `--custom-primary`

## 4. Scrollytelling (Progressive Enhancement)

**Features**:
- Fixed background images with parallax
- IntersectionObserver for reveal animations
- Progress indicators
- Respects `prefers-reduced-motion`
```

---

### 1.3 Create New rooi rose Guidelines (5 tasks)

#### Task 1.3.1: Create `/guidelines/rooi-rose/brand-guidelines.md` (NEW)

```markdown
# rooi rose Brand Guidelines

**Version**: 1.0  
**Last Updated**: 2026-03-11

## 1. Brand Identity

**Name**: rooi rose (always lowercase)  
**Tagline**: verhale wat aanraak (stories that matter)  
**Audience**: Afrikaans-speaking women, lifestyle-focused  
**Voice**: Warm, sophisticated, aspirational

## 2. Visual Identity

**Primary Color**: #e01e12 (vibrant red)
- Logo color
- CTAs and buttons
- Category accents
- Pull quote borders

**Typography**:
- Display: Playfair Display SC (elegant, editorial)
- Body: Karla (clean, readable)

**Photography Style**:
- High-quality lifestyle imagery
- 3:2 or vertical (4:5) aspect ratios
- Natural lighting, warm tones
- Candid, authentic moments

## 3. Editorial Principles

**Content Focus**:
- Lifestyle features
- Personal stories
- Home & garden
- Food & recipes
- Fashion & beauty
- Health & wellness

**Layout Philosophy**:
- Generous white space
- Large, impactful images
- Pull quotes for emphasis
- Minimal navigation chrome
- Scrollytelling for features

## 4. Accessibility Commitment

**WCAG 2.1 Level AA**:
- 4.5:1 contrast for normal text
- 3:1 contrast for large text (18pt+)
- Keyboard navigation
- Screen reader support
- `prefers-reduced-motion` respect
```

---

#### Task 1.3.2: Create `/guidelines/rooi-rose/editorial-style-guide.md` (NEW)

```markdown
# Editorial Style Guide — rooi rose Magazine

## 1. Article Structure

**Long-form Articles** (1500-3000 words):
```
├── Hero Section (full-bleed image + headline overlay)
├── Deck/Summary (18px Karla, max 3 sentences)
├── Author Byline + Meta (category, date, read time)
├── Article Body
│   ├── Section breaks (large heading + white space)
│   ├── Pull quotes (every 800-1000 words)
│   ├── Inline images (3:2 aspect, caption)
│   └── Scrollytelling sections (optional)
└── Related Articles (3-column grid)
```

**Short-form Articles** (500-1000 words):
```
├── Hero Image (3:2 aspect)
├── Headline (H1, Playfair Display SC)
├── Deck (H5, Karla)
├── Meta
├── Article Body
└── Share Buttons
```

## 2. Typography Hierarchy

**In Articles**:
- H1: Playfair Display SC, 48px (hero headline)
- H2: Playfair Display SC, 36px (section breaks)
- H3: Karla, 28px (subsections)
- Body: Karla, 18px, line-height 1.6
- Pull Quote: Playfair Display SC, 24-28px, italic

**In Lists**:
- Category Heading: Playfair Display SC, 14px, uppercase, letterspacing +0.1em
- Card Title: Karla, 22px, bold
- Card Excerpt: Karla, 16px

## 3. Image Guidelines

**Aspect Ratios**:
- Featured images: 3:2 (landscape)
- Portrait images: 4:5 (vertical)
- Gallery images: Square (1:1) or 3:2

**Image Sizing**:
- Hero: 1920x1280 (3:2)
- Featured: 1200x800 (3:2)
- Thumbnail: 600x400 (3:2)
- Portrait: 600x750 (4:5)

**Captions**: 12px Karla, color: `--muted-foreground`, italic

## 4. Color Usage

**Text**:
- Headlines: `--contrast` (#222222)
- Body: `--body-text` (#000000)
- Links: `--custom-primary-accessible` (#b51410)
- Meta: `--muted-foreground` (#424242)

**Backgrounds**:
- Default: `--base` (#FFFFFF)
- Alternating sections: `--accent-blush` (#f4e5e0) or `--accent-warm-beige` (#f8f4f0)
- Pull quotes: `--accent-soft-grey` (#e8e5e2)

## 5. Spacing Patterns

**Section Spacing**:
- Between articles: `x-large` (64px)
- Between sections: `large` (40px)
- Card internal: `medium` (24px) padding
- Hero bottom: `xx-large` (96px)

**Paragraph Spacing**:
- Margin-bottom: `small` (16px)
- First paragraph: no indent
- Subsequent: optional 2em indent (editorial style)
```

---

## Phase 2: CSS Token Implementation (P0)

**Goal**: Implement new rooi rose tokens in CSS architecture  
**Effort**: 10-12 hours (25 tasks)

### 2.1 Font Integration (3 tasks)

#### Task 2.1.1: Update `/src/styles/fonts.css`

**Current**:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:...');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:...');
```

**New**:
```css
/* rooi rose Magazine Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;600&family=Karla:wght@400;600;700&display=swap');

:root {
  /* Font Family Tokens */
  --font-display: 'Playfair Display SC', serif;
  --font-body: 'Karla', sans-serif;
  --font-heading: var(--font-display); /* H1-H2 */
  --font-inter: var(--font-body); /* Compatibility alias */
}
```

---

#### Task 2.1.2: Update `/src/styles/theme-tokens.css`

**Changes**:
1. Replace color tokens (lines 15-34)
2. Replace font family references
3. Update typography scale with new clamp values
4. Add editorial accent colors
5. Update spacing scale

**Key Updates**:
```css
:root {
  /* === ROOI ROSE BRAND TOKENS === */
  
  /* Brand Colors */
  --custom-primary: #e01e12;
  --custom-primary-accessible: #b51410; /* AAA contrast */
  --custom-primary-hover: #c01711;
  --custom-primary-2: #ff4d42; /* Dark mode */
  
  /* Neutrals */
  --base: #FFFFFF;
  --contrast: #222222;
  --body-text: #000000;
  --muted: #f5f5f5;
  --muted-foreground: #424242;
  
  /* Editorial Accents */
  --accent-blush: #f4e5e0;
  --accent-warm-beige: #f8f4f0;
  --accent-soft-grey: #e8e5e2;
  
  /* Typography Scale (Editorial) */
  --text-xxx-large: clamp(2.25rem, 1.5rem + 2vw, 3rem); /* 36px → 48px (H1) */
  --text-xx-large: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem); /* 28px → 36px (H2) */
  --text-x-large: clamp(1.5rem, 1.25rem + 0.75vw, 1.75rem); /* 24px → 28px (H3) */
  --text-large: 1.375rem; /* 22px (H4) */
  --text-medium: 1.125rem; /* 18px (H5, P1) */
  --text-base: 1rem; /* 16px (H6, P2) */
  --text-small: 0.875rem; /* 14px */
  --text-x-small: 0.75rem; /* 12px */
  
  /* Line Heights (Editorial) */
  --lh-h1: 1.1; /* 52px at 48px */
  --lh-h2: 1.15; /* 41px at 36px */
  --lh-h3: 1.2; /* 34px at 28px */
  --lh-h4: 1.3; /* 29px at 22px */
  --lh-body: 1.6; /* Long-form reading */
  
  /* Letter Spacing */
  --ls-display: 0.05em; /* Playfair Display SC */
  --ls-uppercase: 0.1em; /* Category labels */
  
  /* Magazine Spacing */
  --space-xx-small: 0.25rem; /* 4px */
  --space-x-small: 0.5rem; /* 8px */
  --space-small: 1rem; /* 16px */
  --space-medium: 1.5rem; /* 24px */
  --space-large: 2.5rem; /* 40px */
  --space-x-large: 4rem; /* 64px */
  --space-xx-large: 6rem; /* 96px */
  --space-xxx-large: 8rem; /* 128px */
}
```

---

#### Task 2.1.3: Update `/src/styles/theme-dark.css`

**Add rooi rose dark mode tokens**:
```css
.dark {
  /* rooi rose Brand Tokens — Dark */
  --custom-primary: #ff4d42;
  --custom-primary-accessible: #ff6961;
  --custom-primary-hover: #ff847d;
  
  --base: #1a1a1a;
  --contrast: #f5f5f5;
  --body-text: #e8e8e8;
  --muted: #2a2a2a;
  --muted-foreground: #b8b8b8;
  
  --accent-blush: #3a2a28;
  --accent-warm-beige: #2e2a26;
  --accent-soft-grey: #2d2d2d;
}
```

---

### 2.2 Base Styles Update (5 tasks)

#### Task 2.2.1: Update `/src/styles/theme-base.css`

**Replace all typography rules**:
```css
@layer base {
  /* === ROOI ROSE MAGAZINE BASE STYLES === */
  
  body {
    font-family: var(--font-body);
    font-size: var(--text-medium); /* 18px for editorial */
    line-height: var(--lh-body); /* 1.6 */
    color: var(--body-text);
    background-color: var(--base);
  }
  
  /* Display Headings (Playfair Display SC) */
  h1 {
    font-family: var(--font-display);
    font-size: var(--text-xxx-large);
    line-height: var(--lh-h1);
    letter-spacing: var(--ls-display);
    color: var(--contrast);
    font-weight: 400; /* Regular for elegance */
  }
  
  h2 {
    font-family: var(--font-display);
    font-size: var(--text-xx-large);
    line-height: var(--lh-h2);
    letter-spacing: var(--ls-display);
    color: var(--contrast);
    font-weight: 400;
  }
  
  /* UI Headings (Karla) */
  h3 {
    font-family: var(--font-body);
    font-size: var(--text-x-large);
    line-height: var(--lh-h3);
    color: var(--contrast);
    font-weight: 600;
  }
  
  h4, h5, h6 {
    font-family: var(--font-body);
    color: var(--contrast);
    font-weight: 600;
  }
  
  h4 { font-size: var(--text-large); line-height: var(--lh-h4); }
  h5 { font-size: var(--text-medium); line-height: var(--lh-body); }
  h6 { font-size: var(--text-small); line-height: 1.5; letter-spacing: var(--ls-uppercase); text-transform: uppercase; }
  
  /* Links */
  a {
    color: var(--custom-primary-accessible);
    text-decoration: none;
    transition: color 200ms ease;
  }
  
  a:hover {
    color: var(--custom-primary-hover);
  }
}
```

---

### 2.3 Editorial Component Styles (10 tasks)

#### Task 2.3.1: Create `/src/styles/components/pull-quote.css` (NEW)

```css
@layer components {
  .c-pull-quote {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 1.25rem + 0.5vw, 1.75rem); /* 24-28px */
    font-style: italic;
    color: var(--custom-primary);
    border-left: 4px solid var(--custom-primary);
    background-color: var(--accent-soft-grey);
    padding: var(--space-large);
    margin: var(--space-large) 0;
  }
  
  .c-pull-quote__cite {
    font-family: var(--font-body);
    font-size: var(--text-small);
    font-style: normal;
    color: var(--muted-foreground);
    margin-top: var(--space-small);
  }
}
```

---

#### Task 2.3.2: Create `/src/styles/components/hero-section.css` (NEW)

```css
@layer components {
  .c-hero {
    position: relative;
    aspect-ratio: 3 / 2;
    overflow: hidden;
  }
  
  .c-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .c-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
  
  .c-hero__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-xx-large) var(--space-medium);
    max-width: 680px;
    color: #FFFFFF;
  }
  
  .c-hero__headline {
    font-size: var(--text-xxx-large);
    color: #FFFFFF;
    margin-bottom: var(--space-small);
  }
  
  .c-hero__deck {
    font-size: var(--text-medium);
    line-height: var(--lh-body);
    opacity: 0.95;
  }
}
```

---

#### Task 2.3.3: Create `/src/styles/components/category-label.css` (NEW)

```css
@layer components {
  .c-category-label {
    font-family: var(--font-display);
    font-size: var(--text-small);
    font-weight: 400;
    letter-spacing: var(--ls-uppercase);
    text-transform: uppercase;
    color: var(--custom-primary);
    display: inline-block;
  }
  
  .c-category-label:hover {
    color: var(--custom-primary-hover);
  }
}
```

---

#### Task 2.3.4: Create `/src/styles/components/article-card.css` (NEW)

```css
@layer components {
  .c-article-card {
    background-color: var(--base);
    border-radius: 0; /* Editorial sharp edges */
    overflow: hidden;
    transition: transform 300ms ease;
  }
  
  .c-article-card:hover {
    transform: translateY(-4px);
  }
  
  .c-article-card__image {
    aspect-ratio: 3 / 2;
    width: 100%;
    object-fit: cover;
  }
  
  .c-article-card__content {
    padding: var(--space-medium);
  }
  
  .c-article-card__category {
    margin-bottom: var(--space-x-small);
  }
  
  .c-article-card__title {
    font-size: var(--text-large);
    font-weight: 600;
    color: var(--contrast);
    margin-bottom: var(--space-small);
    line-height: 1.3;
  }
  
  .c-article-card__excerpt {
    font-size: var(--text-base);
    color: var(--body-text);
    line-height: 1.6;
    margin-bottom: var(--space-small);
  }
  
  .c-article-card__meta {
    font-size: var(--text-small);
    color: var(--muted-foreground);
  }
}
```

---

### 2.4 Update WordPress Utilities (5 tasks)

#### Task 2.4.1: Update `/src/styles/wp-utilities.css`

**Map new rooi rose tokens to WordPress preset variables**:
```css
@layer utilities {
  /* === WORDPRESS PRESET UTILITIES - rooi rose === */
  
  /* Color Classes */
  .has-primary-color { color: var(--custom-primary) !important; }
  .has-primary-background-color { background-color: var(--custom-primary) !important; }
  
  .has-contrast-color { color: var(--contrast) !important; }
  .has-contrast-background-color { background-color: var(--contrast) !important; }
  
  .has-muted-color { color: var(--muted-foreground) !important; }
  .has-muted-background-color { background-color: var(--muted) !important; }
  
  /* Font Size Classes */
  .has-xxx-large-font-size { font-size: var(--text-xxx-large) !important; }
  .has-xx-large-font-size { font-size: var(--text-xx-large) !important; }
  .has-x-large-font-size { font-size: var(--text-x-large) !important; }
  .has-large-font-size { font-size: var(--text-large) !important; }
  .has-medium-font-size { font-size: var(--text-medium) !important; }
  .has-base-font-size { font-size: var(--text-base) !important; }
  .has-small-font-size { font-size: var(--text-small) !important; }
  .has-x-small-font-size { font-size: var(--text-x-small) !important; }
}
```

---

### 2.5 TypeScript Token Sync (2 tasks)

#### Task 2.5.1: Update `/src/app/data/designTokens.ts`

**Replace Die Papier tokens with rooi rose**:
```typescript
// Color Tokens
export const COLOR_TOKENS: ColorToken[] = [
  {
    name: '--custom-primary',
    light: '#e01e12',
    dark: '#ff4d42',
    usage: 'Logo, CTAs, accents',
    wcag: 'AA Large only (3.58:1)',
  },
  {
    name: '--custom-primary-accessible',
    light: '#b51410',
    dark: '#ff6961',
    usage: 'Body links, buttons',
    wcag: 'AAA (4.72:1)',
  },
  // ... rest of tokens
];

// Typography Tokens
export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    name: '--font-display',
    value: "'Playfair Display SC', serif",
    usage: 'H1, H2, category labels',
  },
  {
    name: '--font-body',
    value: "'Karla', sans-serif",
    usage: 'Body text, H3-H6, UI',
  },
  // ... rest of tokens
];
```

---

## Phase 3: Homepage Redesign (P1)

**Goal**: Redesign homepage with rooi rose editorial layout  
**Effort**: 12-15 hours (20 tasks)

### 3.1 Homepage Components (10 tasks)

#### Task 3.1.1: Create `/src/app/components/homepage/HeroSlider.tsx`

**Features**:
- Full-bleed hero images (3:2 aspect)
- Playfair Display SC headlines
- Overlay gradient
- Swipeable on mobile (react-slick)
- Auto-play with pause on hover

**Implementation**:
```typescript
import { motion } from 'motion/react';
import Slider from 'react-slick';

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  return (
    <div className="c-hero-slider">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="c-hero">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="c-hero__image"
              loading="eager"
              fetchPriority="high"
            />
            <div className="c-hero__overlay" />
            <motion.div 
              className="c-hero__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="c-category-label">{slide.category}</span>
              <h1 className="c-hero__headline">{slide.title}</h1>
              <p className="c-hero__deck">{slide.deck}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
```

---

#### Task 3.1.2: Create `/src/app/components/homepage/FeaturedSection.tsx`

**Layout**: 2-column (8:4 cols) — Large featured article + sidebar  
**Styling**: White background, generous padding, editorial spacing

---

#### Task 3.1.3: Create `/src/app/components/homepage/CategoryGrid.tsx`

**Layout**: 3-column grid of article cards  
**Features**: Category labels, hover lift animation, lazy-loaded images

---

#### Task 3.1.4: Create `/src/app/components/homepage/PullQuoteSection.tsx`

**Visual**: Full-width pull quote with soft grey background  
**Typography**: Playfair Display SC, 24-28px italic  
**Usage**: Content break between sections

---

### 3.2 Homepage Layout (5 tasks)

#### Task 3.2.1: Update `/src/app/pages/Home.tsx`

**Structure**:
```typescript
<>
  <HeroSlider slides={heroSlides} />
  <FeaturedSection articles={featured} />
  <PullQuoteSection quote={sectionQuote} />
  <CategoryGrid category="Lifestyle" articles={lifestyleArticles} />
  <AlternatingSection bgColor="blush">
    <CategoryGrid category="Food" articles={foodArticles} />
  </AlternatingSection>
  <ScrollytellingFeature article={featureArticle} />
  <CategoryGrid category="Fashion" articles={fashionArticles} />
</>
```

---

### 3.3 Responsive Design (5 tasks)

#### Task 3.3.1: Mobile Hero Layout

- Single slide (no slider on mobile)
- Vertical spacing reduced to `large` (40px)
- Font sizes: clamp() ensures mobile scaling

---

## Phase 4: Category Page Redesign (P1)

**Goal**: Category archive pages with magazine grid layout  
**Effort**: 8-10 hours (15 tasks)

### 4.1 Category Page Components (7 tasks)

#### Task 4.1.1: Create `/src/app/components/category/CategoryHeader.tsx`

**Layout**:
```
├── Category Label (Playfair Display SC, uppercase)
├── Description (Karla, 18px)
└── Filter Tabs (optional: All, Recent, Popular)
```

---

#### Task 4.1.2: Create `/src/app/components/category/ArticleGrid.tsx`

**Layouts**:
- **Masonry Grid** (react-responsive-masonry) for varied image heights
- **Standard Grid** (3-column, 2-column on tablet, 1-column on mobile)
- Infinite scroll with loading skeleton

---

#### Task 4.1.3: Update `/src/app/pages/category/[slug].tsx`

**Structure**:
```typescript
<>
  <CategoryHeader 
    category="Lifestyle" 
    description="Stories about living well" 
  />
  <ArticleGrid articles={articles} layout="masonry" />
  <LoadMore onLoadMore={handleLoadMore} />
</>
```

---

### 4.2 Category Variations (5 tasks)

**Task 4.2.1**: Standard category (grid layout)  
**Task 4.2.2**: Featured category (hero + grid)  
**Task 4.2.3**: Photo gallery category (masonry)  
**Task 4.2.4**: Recipe category (card + ingredients preview)  
**Task 4.2.5**: Video category (16:9 thumbnails)

---

## Phase 5: Single Post Redesign (P1)

**Goal**: Editorial article template with scrollytelling  
**Effort**: 10-12 hours (20 tasks)

### 5.1 Article Header (5 tasks)

#### Task 5.1.1: Create `/src/app/components/article/ArticleHero.tsx`

**Layout**:
```
├── Full-width featured image (3:2)
├── Overlay gradient (if overlay style)
├── Category label
├── Headline (H1, Playfair Display SC, 48px)
├── Deck/Summary (H5, Karla, 18px, max 3 lines)
├── Author + Date + Read Time
└── Share Buttons
```

---

### 5.2 Article Body (8 tasks)

#### Task 5.2.1: Update `/src/styles/article-content.css`

**Typography**:
```css
.article-content {
  font-family: var(--font-body);
  font-size: var(--text-medium); /* 18px */
  line-height: var(--lh-body); /* 1.6 */
  color: var(--body-text);
  max-width: 680px;
  margin: 0 auto;
}

.article-content h2 {
  font-family: var(--font-display);
  font-size: var(--text-xx-large);
  margin-top: var(--space-x-large);
  margin-bottom: var(--space-medium);
}

.article-content h3 {
  font-family: var(--font-body);
  font-size: var(--text-x-large);
  margin-top: var(--space-large);
  margin-bottom: var(--space-small);
}

.article-content p {
  margin-bottom: var(--space-small);
}

.article-content p:first-of-type {
  font-size: var(--text-medium);
  /* Optional: drop cap */
}

.article-content p:first-of-type::first-letter {
  font-size: 3.5em;
  font-family: var(--font-display);
  float: left;
  line-height: 0.85;
  margin: 0.1em 0.1em 0 0;
  color: var(--custom-primary);
}

.article-content blockquote {
  /* Use .c-pull-quote component */
}

.article-content figure {
  margin: var(--space-large) 0;
}

.article-content figcaption {
  font-size: var(--text-x-small);
  font-style: italic;
  color: var(--muted-foreground);
  text-align: center;
  margin-top: var(--space-x-small);
}
```

---

#### Task 5.2.2: Create `/src/app/components/article/PullQuote.tsx`

**React Component**:
```typescript
export function PullQuote({ quote, cite }: PullQuoteProps) {
  return (
    <aside className="c-pull-quote">
      <p>{quote}</p>
      {cite && <cite className="c-pull-quote__cite">— {cite}</cite>}
    </aside>
  );
}
```

---

#### Task 5.2.3: Create `/src/app/components/article/ScrollytellingSection.tsx`

**Features**:
- Fixed background image with parallax
- Text overlay with IntersectionObserver reveal
- Respects `prefers-reduced-motion`

**Implementation**:
```typescript
export function ScrollytellingSection({ backgroundImage, content }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={ref}
      className="c-scrollytelling"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.div>
    </section>
  );
}
```

---

### 5.3 Related Content (4 tasks)

#### Task 5.3.1: Create `/src/app/components/article/RelatedArticles.tsx`

**Layout**: 3-column grid (2-col tablet, 1-col mobile)  
**Styling**: Article cards with category labels

---

#### Task 5.3.2: Create `/src/app/components/article/AuthorBio.tsx`

**Layout**: Avatar + Name + Bio + Social Links  
**Styling**: Soft grey background, `medium` padding

---

### 5.4 Article Template (3 tasks)

#### Task 5.4.1: Update `/src/app/pages/article/[slug].tsx`

**Structure**:
```typescript
<article>
  <ArticleHero 
    image={article.featuredImage}
    category={article.category}
    title={article.title}
    deck={article.deck}
    author={article.author}
    date={article.date}
    readTime={article.readTime}
  />
  
  <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
  
  <ShareButtons />
  
  <AuthorBio author={article.author} />
  
  <RelatedArticles articles={relatedArticles} />
</article>
```

---

## Phase 6: Repository Cleanup (P2)

**Goal**: Remove obsolete assets, archive old tasks  
**Effort**: 4-6 hours (10 tasks)

### 6.1 Asset Cleanup (5 tasks)

#### Task 6.1.1: Clean `/public/` folder

**Delete**:
- `vite.svg` (default Vite logo)
- Generic `favicon.ico`
- Placeholder social images

**Add**:
- rooi rose favicon (16x16, 32x32, 48x48)
- Apple Touch icon (180x180)
- Social share image (1200x630)
- Manifest icons (192x192, 512x512)

---

#### Task 6.1.2: Update `public/manifest.json`

```json
{
  "name": "rooi rose - verhale wat aanraak",
  "short_name": "rooi rose",
  "description": "Afrikaans tydskrif met leefstyl, verhale en e-uitgawes",
  "theme_color": "#e01e12",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

### 6.2 Task Archive (3 tasks)

#### Task 6.2.1: Archive completed tasks

**Move to `/tasks/archived/2026-03/`**:
- `/tasks/memory-optimization-tasks.md`
- `/tasks/theme-completeness-tasks.md`
- `/tasks/system-stability-audit-tasks.md`
- All Die Papier phase task lists

---

#### Task 6.2.2: Update `/tasks/master-task-list.md`

**Remove** Die Papier orchestrators  
**Add** rooi rose redesign orchestrator

---

### 6.3 .gitignore Update (2 tasks)

#### Task 6.3.1: Update `.gitignore`

**Add**:
```
# Build artifacts
/dist/
/build/
/.next/
/public/build/
/coverage/

# OS files
.DS_Store
Icon
Thumbs.db

# IDE
.vscode/
.idea/

# Dependencies
/node_modules/
/node_modules/tw-animate-css/

# Env
.env
.env.local
```

---

## Success Criteria

### Phase 1 (Token Foundation)
- [ ] All 6 obsolete guidelines deleted
- [ ] 5 core design token guidelines updated with rooi rose palette
- [ ] 2 new rooi rose brand guidelines created
- [ ] WCAG contrast issues documented with accessible variants

### Phase 2 (CSS Implementation)
- [ ] Playfair Display SC + Karla fonts imported
- [ ] All color tokens updated (#e01e12, neutrals, accents)
- [ ] Typography scale with editorial line-heights implemented
- [ ] Magazine spacing scale (xx-small → xxx-large) applied
- [ ] 4 editorial component CSS files created
- [ ] TypeScript designTokens.ts synced with CSS

### Phase 3 (Homepage)
- [ ] HeroSlider component with full-bleed images
- [ ] FeaturedSection 2-column layout
- [ ] CategoryGrid 3-column masonry
- [ ] PullQuoteSection with Playfair Display SC
- [ ] ScrollytellingFeature with parallax
- [ ] Responsive breakpoints: 480px, 768px, 1024px, 1440px

### Phase 4 (Category Pages)
- [ ] CategoryHeader with Playfair Display SC labels
- [ ] Masonry grid layout for varied image heights
- [ ] Infinite scroll with loading skeleton
- [ ] 5 category variations (standard, featured, gallery, recipe, video)

### Phase 5 (Single Post)
- [ ] ArticleHero with 3:2 featured image
- [ ] Editorial typography (18px body, 1.6 line-height)
- [ ] Drop cap on first paragraph
- [ ] Pull quote component integration
- [ ] ScrollytellingSection with IntersectionObserver
- [ ] RelatedArticles 3-column grid
- [ ] AuthorBio component

### Phase 6 (Cleanup)
- [ ] `/public/` folder assets replaced with rooi rose branding
- [ ] Obsolete Die Papier tasks archived to `/tasks/archived/2026-03/`
- [ ] `.gitignore` updated
- [ ] Documentation references updated

---

## Visual Regression Testing

**Before Each Phase**:
1. Take screenshots of existing pages (Playwright)
2. Document current behavior

**After Implementation**:
1. Compare new layouts against rooi rose editorial mockups
2. Test dark mode token application
3. Verify WCAG contrast with axe-core
4. Test responsive breakpoints (mobile, tablet, desktop)
5. Validate `prefers-reduced-motion` fallbacks

---

## Rollback Plan

**If Critical Issues Arise**:
1. Revert `/src/styles/theme-tokens.css` to Die Papier tokens
2. Restore `/src/styles/fonts.css` (Inter + Roboto Serif)
3. Rollback component files from Git history
4. Document issues in `/reports/rooi-rose-redesign-rollback.md`

---

## Next Steps After Completion

1. **WordPress Export**: Sync new tokens to `theme.json` v3
2. **Pattern Library**: Create Figma component library with rooi rose tokens
3. **Content Migration**: Update mock data with editorial photography
4. **Performance Audit**: Lazy-load Playfair Display SC, optimize hero images
5. **User Testing**: Test magazine aesthetic with target audience

---

## References

- [rooi rose Plan](/src/imports/pasted_text/rooi-rose-plan.md)
- [Guidelines Cleanup Report](/reports/guidelines-cleanup-report.md) — TBD
- [Design Tokens Guide](/guidelines/design-tokens/DESIGN-SYSTEM-GUIDE.md)
- [Typography Implementation Guide](/guidelines/design-tokens/typography-implementation-guide.md)
- [CSS Architecture](/guidelines/development/css-architecture.md)