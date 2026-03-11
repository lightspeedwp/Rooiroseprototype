# Kaart: Pos Lys (Horisontaal)

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-post-list`
**Folder**: `card/`
**Source**: `patterns/card/card-post-list.php`

---

## Overview
A horizontal post list card pattern designed for default archives, categories, tags, and search result pages. It places the image to the left of the content.

## Composition
```
┌──────────┬─────────────────────┐
│  Image   │  Category           │
│  200×140 │  Post Title (H4)    │
│  fixed   │  Author · Date      │
│          │  Excerpt (25 words) │
└──────────┴─────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card`, flex row)
  - `core/post-featured-image` (width 200px, height 140px, isLink)
  - `core/group` (content column)
    - `core/post-terms` (category)
    - `core/post-title` (H4, isLink)
    - `core/group` (flex row — meta)
      - `core/post-author` (avatar 20px)
      - `core/post-date`
    - `core/post-excerpt` (excerptLength: 25)

## Implementation Notes
- **Style Class**: `is-style-card` (border, padding, rounded corners).
- **Responsive**: Stacks the image above the content on mobile (< 768px).
- **Layout**: Uses a flex container with a fixed 200px width for the image column on desktop/tablet.
- **Excerpt**: Capped at 25 words via the `excerptLength` block attribute.
