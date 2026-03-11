# Kaart: Pos Rooster (3 Kolomme)

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-post-grid-3col`
**Folder**: `card/`
**Source**: `patterns/card/card-post-grid-3col.php`

---

## Overview
The canonical 3-column post grid card used throughout the site for standard article listings. It includes a featured image, category, title, author meta, and excerpt.

## Composition
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

## Block Structure
- `core/group` (`is-style-card`)
  - `core/post-featured-image` (isLink, aspectRatio 16/9, rounded top corners)
  - `core/group` (inner padding)
    - `core/post-terms` (category, caption size)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/group` (flex row — author meta)
      - `core/post-author` (avatar 20px, showAvatar, hideTitle:false)
      - `core/post-date` (format "j M Y", caption size)
    - `core/post-excerpt` (moreText: false, excerptLength: 25)

## Implementation Notes
- **Style Class**: `is-style-card` (border, padding, rounded corners).
- **Responsive**: Used inside a 3-column grid layout which stacks to 2 columns on tablet and 1 on mobile.
- **Excerpt**: Capped at 25 words via the `excerptLength` block attribute.
