# Card Patterns

**Last updated**: 2026-02-28
**Category**: Patterns (Cards)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/card/`
**Total**: 17 patterns

---

## Overview

Card patterns are **atomic-level** components designed to be used inside `core/post-template` blocks within query loops. They define how a single post/CPT item renders in a listing context. All card patterns have `Inserter: false` — they are composable building blocks, not standalone patterns.

### Architecture

```
query pattern (Tier 2)
└── core/query
    └── core/post-template
        └── card pattern (Tier 1)  ← This folder
            └── card-*-meta (PHP-rendered CPT metadata)
```

---

## Card Types

### Post Cards (5)

| Pattern | Slug | Layout | Used In |
|:---|:---|:---|:---|
| card-post-grid-3col | `die-papier/card-post-grid-3col` | 3-column grid | Homepage, category sections, related articles, archives |
| card-post-grid-2col | `die-papier/card-post-grid-2col` | 2-column grid | Event category archives |
| card-post-list | `die-papier/card-post-list` | Horizontal list (image + content) | Default archive, category, tag, search archives |
| card-post-featured-hero | `die-papier/card-post-featured-hero` | Full-width hero | Homepage hero slider |
| card-newsletter-grid | `die-papier/card-newsletter-grid` | Grid card (no image) | Newsletter archive |

### CPT Cards (5)

| Pattern | Slug | Post Type | Layout |
|:---|:---|:---|:---|
| card-event-grid | `die-papier/card-event-grid` | `dp_event` | Grid + event meta badge |
| card-competition-grid | `die-papier/card-competition-grid` | `dp_competition` | Grid + prize/closing date |
| card-eedition-grid-4col | `die-papier/card-eedition-grid-4col` | `dp_eedition` | 4-column cover grid |
| card-obituary-grid | `die-papier/card-obituary-grid` | `dp_obituary` | Grid + round portrait |
| card-multimedia-grid | `die-papier/card-multimedia-grid` | `dp_multimedia` | Grid + media type badge |

### Sponsor Cards (3)

| Pattern | Slug | Tier | Grid Columns |
|:---|:---|:---|:---|
| card-sponsor-gold | `die-papier/card-sponsor-gold` | Gold | 3 columns (100px logo) |
| card-sponsor-silver | `die-papier/card-sponsor-silver` | Silver | 4 columns (80px logo) |
| card-sponsor-bronze | `die-papier/card-sponsor-bronze` | Bronze | 5 columns (60px logo, no title) |

### Meta Patterns (4) — PHP-rendered

| Pattern | Slug | Post Type | Content |
|:---|:---|:---|:---|
| card-event-meta | `die-papier/card-event-meta` | `dp_event` | Date badge, time, location, price |
| card-competition-meta | `die-papier/card-competition-meta` | `dp_competition` | Prize value, closing date, status |
| card-obituary-meta | `die-papier/card-obituary-meta` | `dp_obituary` | Birth/death dates, service details |
| card-multimedia-meta-compact | `die-papier/card-multimedia-meta-compact` | `dp_multimedia` | Media type icon, duration |

---

## Card Anatomy

### Standard Grid Card (card-post-grid-3col)

```
┌──────────────────────┐
│  Featured Image      │  ← 16:9 aspect ratio, linked
│  (post-featured-image)│
├──────────────────────┤
│  Category Label      │  ← post-terms (category), caption size
│  Post Title (H3)     │  ← post-title, linked, heading-4 size
│  Author · Date       │  ← post-author + post-date, caption size
│  Excerpt (25 words)  │  ← post-excerpt, body-small size
└──────────────────────┘
```

**Section style**: `is-style-card` (border, padding, rounded corners)

### List Card (card-post-list)

```
┌──────────┬─────────────────────┐
│  Image   │  Category Label     │
│  200x140 │  Post Title (H4)    │
│          │  Author · Date      │
│          │  Excerpt (25 words) │
└──────────┴─────────────────────┘
```

**Section style**: `is-style-card` (border, padding)
**Layout**: Flex row, image fixed 200px width

### Hero Card (card-post-featured-hero)

```
┌─────────────────────────────────────┐
│  Full-width Featured Image          │
│  (cover block with gradient overlay)│
│                                     │
│  ┌─────────────────────────────┐    │
│  │  Category · Date            │    │
│  │  Post Title (H1)            │    │
│  │  Excerpt                    │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

**Section style**: `is-style-hero-slider`

### CPT Card (card-event-grid example)

```
┌──────────────────────┐
│  Featured Image      │  ← 16:9 aspect ratio
├──────────────────────┤
│  ┌────┐              │
│  │ 15 │ Event Title  │  ← Date badge (day/month) + title
│  │ Mrt│              │
│  └────┘              │
│  🕐 14:00 📍 Paarl   │  ← card-event-meta (PHP-rendered)
│  R150                │  ← Price from SCF field
└──────────────────────┘
```

**Section style**: `is-style-card-hover` (elevation on hover)

---

## Meta Pattern Details

Meta patterns use **PHP rendering** (`get_post_meta()`) because WordPress block markup cannot access custom fields natively. They read SCF (Secure Custom Fields) values and output semantic HTML with BEM class names.

### CSS Classes

All meta patterns use the `dp-card-meta` BEM namespace:

```css
.dp-card-meta                    /* Root container */
.dp-card-meta--event             /* Modifier: event type */
.dp-card-meta--competition       /* Modifier: competition type */
.dp-card-meta--obituary          /* Modifier: obituary type */
.dp-card-meta--multimedia        /* Modifier: multimedia type */
.dp-card-meta__date-badge        /* Event date badge (day + month) */
.dp-card-meta__date-day          /* Day number */
.dp-card-meta__date-month        /* Short month (Afrikaans) */
.dp-card-meta__details           /* Details container */
.dp-card-meta__item              /* Individual meta item */
.dp-card-meta__item--price       /* Price modifier */
.dp-card-meta__item--prize       /* Prize modifier */
.dp-card-meta__item--type        /* Media type modifier */
.dp-card-meta__item--duration    /* Duration modifier */
.dp-card-meta__sep               /* Separator (·) */
```

### Afrikaans Month Names

Event meta uses Afrikaans short month names:
`Jan, Feb, Mrt, Apr, Mei, Jun, Jul, Aug, Sep, Okt, Nov, Des`

---

## Usage

### In a query pattern

```html
<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
<!-- /wp:post-template -->
```

### In an archive pattern

```html
<!-- wp:post-template {"layout":{"type":"default"}} -->
    <!-- wp:pattern {"slug":"die-papier/card-post-list"} /-->
<!-- /wp:post-template -->
```

### Sponsor tiers with different column counts

```html
<!-- Gold: 3 columns -->
<!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
    <!-- wp:pattern {"slug":"die-papier/card-sponsor-gold"} /-->
<!-- /wp:post-template -->

<!-- Silver: 4 columns -->
<!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
    <!-- wp:pattern {"slug":"die-papier/card-sponsor-silver"} /-->
<!-- /wp:post-template -->

<!-- Bronze: 5 columns -->
<!-- wp:post-template {"layout":{"type":"grid","columnCount":5}} -->
    <!-- wp:pattern {"slug":"die-papier/card-sponsor-bronze"} /-->
<!-- /wp:post-template -->
```

---

## Homepage Exception

The homepage category section cards in `page-home.php` are **intentionally kept inline** (not refactored to use card patterns). They use a minimal variant with custom `font-size` presets different from the standard archive cards. This is a deliberate architectural decision, not technical debt.
