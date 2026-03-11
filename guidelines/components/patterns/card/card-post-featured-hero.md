# Kaart: Voorblad Hero Slider

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-post-featured-hero`
**Folder**: `card/`
**Source**: `patterns/card/card-post-featured-hero.php`

---

## Overview
A large, full-width featured hero card designed to be used in the homepage hero slider. It places the post content inside a group that overlays the featured image.

## Composition
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

## Block Structure
- `core/cover` (`is-style-hero-slider`, full width)
  - `core/group` (content container, overlay)
    - `core/post-terms` (category, text-white)
    - `core/post-title` (H1, isLink, text-white, heading-1 size)
    - `core/group` (flex row — meta)
      - `core/post-date` (text-white, format "j M Y")
    - `core/post-excerpt` (excerptLength: 40, text-white)

## Implementation Notes
- **Style Class**: `is-style-hero-slider` (full width, custom gradient overlay).
- **Responsive**: Full width across all devices; uses larger heading sizes for desktop/tablet.
- **Overlay**: Content is centered or bottom-left aligned using `core/cover` block settings.
- **Excerpt**: Capped at 40 words via the `excerptLength` block attribute.
