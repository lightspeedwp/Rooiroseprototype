# Kaart: Multimedia Rooster

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-multimedia-grid`
**Folder**: `card/`
**Source**: `patterns/card/card-multimedia-grid.php`

---

## Overview
A specialized card pattern for the `dp_multimedia` CPT (videos, podcasts, galleries). It uses a 16:9 aspect ratio and a media type badge.

## Composition
```
┌──────────────────────┐
│  Featured Image      │  16:9 aspect ratio, linked to post
├──────────────────────┤
│  Media Type Badge    │  card-multimedia-meta-compact (PHP-rendered)
│  Multimedia Title    │  post-title, linked, heading-4 size
│  Duration            │  card-multimedia-meta-compact (PHP-rendered)
│  Excerpt             │  post-excerpt, body-small size
└──────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card-hover`)
  - `core/post-featured-image` (isLink, aspectRatio 16/9, rounded top corners)
  - `core/group` (inner padding)
    - `core/pattern` (`die-papier/card-multimedia-meta-compact`)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/post-excerpt` (excerptLength: 20, body-small size)

## Implementation Notes
- **Style Class**: `is-style-card-hover` (elevation on hover).
- **Meta Pattern**: Uses `die-papier/card-multimedia-meta-compact` which is a PHP-rendered pattern fetching the media type (Video, Podcast, Gallery) from SCF fields.
- **Responsive**: Used inside a 4-column grid layout which remains 4 columns on desktop, 3 columns on tablet, and 2 columns on mobile.
- **Excerpt**: Capped at 20 words via the `excerptLength` block attribute.
