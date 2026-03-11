# Kaart: Sterfberig Rooster

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-obituary-grid`
**Folder**: `card/`
**Source**: `patterns/card/card-obituary-grid.php`

---

## Overview
A specialized card pattern for the `dp_obituary` CPT. It combines a round portrait image with birth/death dates and service details.

## Composition
```
┌──────────────────────┐
│  Round Portrait      │  1:1 aspect ratio, rounded 50%, linked
├──────────────────────┤
│  Obituary Title      │  post-title, linked, heading-4 size
│  Dates               │  card-obituary-meta (PHP-rendered)
│  Service Details     │  card-obituary-meta (PHP-rendered)
│  Excerpt             │  post-excerpt, body-small size
└──────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card`)
  - `core/post-featured-image` (isLink, width 120px, height 120px, rounded 50%, center align)
  - `core/group` (inner padding, text-center align)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/pattern` (`die-papier/card-obituary-meta`)
    - `core/post-excerpt` (excerptLength: 15, body-small size)

## Implementation Notes
- **Style Class**: `is-style-card` (border, padding, rounded corners).
- **Meta Pattern**: Uses `die-papier/card-obituary-meta` which is a PHP-rendered pattern fetching birth/death dates from SCF fields.
- **Responsive**: Used inside a 4-column grid layout which remains 4 columns on desktop, 3 columns on tablet, and 2 columns on mobile.
- **Excerpt**: Capped at 15 words via the `excerptLength` block attribute.
