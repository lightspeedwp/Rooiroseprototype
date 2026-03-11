# Kaart: Pos Rooster (2 Kolomme)

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-post-grid-2col`
**Folder**: `card/`
**Source**: `patterns/card/card-post-grid-2col.php`

---

## Overview
A specialized 2-column post grid card with larger typography and image sizes to fill the wider columns. Primarily used in event category archives.

## Composition
Same structure as the 3-column grid card but with:
- **Image**: Aspect ratio 16:9, slightly larger than 3-col variant.
- **Title**: H3, font size `heading-3` for desktop.
- **Meta**: Same as 3-col.

## Block Structure
- `core/group` (`is-style-card`)
  - `core/post-featured-image` (isLink, aspectRatio 16/9, rounded top corners)
  - `core/group` (inner padding)
    - `core/post-terms` (category, caption size)
    - `core/post-title` (H3, isLink, heading-3 size)
    - `core/group` (flex row — author meta)
      - `core/post-author` (avatar 20px, showAvatar, hideTitle:false)
      - `core/post-date` (format "j M Y", caption size)
    - `core/post-excerpt` (moreText: false, excerptLength: 30)

## Implementation Notes
- **Style Class**: `is-style-card` (border, padding, rounded corners).
- **Responsive**: Used inside a 2-column grid layout which remains 2 columns on tablet and stacks to 1 on mobile.
- **Excerpt**: Capped at 30 words via the `excerptLength` block attribute.
