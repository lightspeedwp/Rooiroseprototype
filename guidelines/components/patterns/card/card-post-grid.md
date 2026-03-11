# Post Grid Card Specification

**Last updated**: 2026-02-28
**Category**: Patterns (Cards)

---

## Overview

The post grid card is the most frequently used card pattern in the theme. It has 3 variants based on grid column count, with the 3-column version (`card-post-grid-3col`) being the canonical default used in 10+ patterns.

---

## Variants

### card-post-grid-3col (Primary)

**Slug**: `die-papier/card-post-grid-3col`
**File**: `/patterns/card/card-post-grid-3col.php`
**Used in**: Homepage feature grid, category sections, related articles, most archive patterns

```
┌──────────────────────┐
│  Featured Image      │  16:9 aspect ratio, linked to post
├──────────────────────┤
│  Category            │  post-terms, caption size, contrast-2 colour
│  Post Title (H3)     │  post-title, linked, heading-4 font size
│  Author · Date       │  post-author (avatar 20px) + post-date, caption
│  Excerpt (25 words)  │  post-excerpt, body-small size
└──────────────────────┘
```

**Block composition**:
- `core/group` (`is-style-card`)
  - `core/post-featured-image` (isLink, aspectRatio 16/9, rounded top corners)
  - `core/group` (inner padding)
    - `core/post-terms` (category, caption size)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/group` (flex row — author meta)
      - `core/post-author` (avatar 20px, showAvatar, hideTitle:false)
      - `core/post-date` (format "j M Y", caption size)
    - `core/post-excerpt` (moreText: false, excerptLength: 25)

### card-post-grid-2col

**Slug**: `die-papier/card-post-grid-2col`
**File**: `/patterns/card/card-post-grid-2col.php`
**Used in**: Event category archives

Same structure as 3-col but optimised for 2-column layouts. May have slightly larger image and title sizes to fill the wider column.

### card-post-list (Horizontal)

**Slug**: `die-papier/card-post-list`
**File**: `/patterns/card/card-post-list.php`
**Used in**: Default archive, category archive, tag archive, search archive

```
┌──────────┬─────────────────────┐
│  Image   │  Category           │
│  200×140 │  Post Title (H4)    │
│  fixed   │  Author · Date      │
│          │  Excerpt (25 words) │
└──────────┴─────────────────────┘
```

**Block composition**:
- `core/group` (`is-style-card`, flex row)
  - `core/post-featured-image` (width 200px, height 140px, isLink)
  - `core/group` (content column)
    - `core/post-terms` (category)
    - `core/post-title` (H4, isLink)
    - `core/group` (flex row — meta)
      - `core/post-author` (avatar 20px)
      - `core/post-date`
    - `core/post-excerpt` (excerptLength: 25)

---

## Section Styles

| Card | Style Class | Effect |
|:---|:---|:---|
| Grid cards | `is-style-card` | Border, padding, rounded corners |
| CPT cards | `is-style-card-hover` | Card + elevation on hover |
| Hero card | `is-style-hero-slider` | Full-bleed with gradient overlay |

---

## Responsive Behaviour

| Breakpoint | 3-col Grid | 2-col Grid | List |
|:---|:---|:---|:---|
| Desktop (≥1024px) | 3 columns | 2 columns | Image + text side-by-side |
| Tablet (768–1023px) | 2 columns | 2 columns | Image + text side-by-side |
| Mobile (<768px) | 1 column | 1 column | Image stacked above text |

Grid responsiveness is handled by WordPress's native `core/post-template` grid layout — no custom CSS needed.

---

## Usage Notes

- All grid cards require being inside a `<!-- wp:post-template {"layout":{"type":"grid","columnCount":N}} -->` block
- List cards require `<!-- wp:post-template {"layout":{"type":"default"}} -->` (default stack/flex)
- Cards never include pagination — that's the responsibility of the parent query or archive pattern
- Meta patterns (author, date) use `textColor: "contrast-2"` for muted appearance
- Excerpt length is capped at 25 words via `excerptLength` attribute
