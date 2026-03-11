# Kaart: Kompetisie Rooster

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-competition-grid`
**Folder**: `card/`
**Source**: `patterns/card/card-competition-grid.php`

---

## Overview
A specialized card pattern for the `dp_competition` CPT. It combines a featured image with prize and closing date metadata.

## Composition
```
┌──────────────────────┐
│  Featured Image      │  1:1 or 16:9 aspect ratio, linked to post
├──────────────────────┤
│  Competition Title   │  post-title, linked, heading-4 font size
│  Prize Value         │  card-competition-meta (PHP-rendered)
│  Closing Date        │  card-competition-meta (PHP-rendered)
│  CTA Button          │  "Skryf Nou In" button
└──────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card-hover`)
  - `core/post-featured-image` (isLink, aspectRatio 1:1, rounded top corners)
  - `core/group` (inner padding)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/pattern` (`die-papier/card-competition-meta`)
    - `core/buttons` (flex row — CTA)
      - `core/button` ("Skryf Nou In")
    - `core/post-excerpt` (excerptLength: 20)

## Implementation Notes
- **Style Class**: `is-style-card-hover` (elevation on hover).
- **Meta Pattern**: Uses `die-papier/card-competition-meta` which is a PHP-rendered pattern fetching SCF fields.
- **Responsive**: Used inside a 3-column grid layout which stacks to 2 columns on tablet and 1 on mobile.
- **Excerpt**: Capped at 20 words via the `excerptLength` block attribute.
