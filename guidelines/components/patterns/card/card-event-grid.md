# Kaart: Gebeure Rooster

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-event-grid`
**Folder**: `card/`
**Source**: `patterns/card/card-event-grid.php`

---

## Overview
A specialized card pattern for the `dp_event` CPT. It combines a featured image with a chronological date badge and event metadata.

## Composition
```
┌──────────────────────┐
│  Featured Image      │  16:9 aspect ratio, linked to post
├──────────────────────┤
│  ┌────┐              │
│  │ 15 │ Event Title  │  Date badge (day/month) + title
│  │ Mrt│              │
│  └────┘              │
│  🕐 14:00 📍 Paarl   │  card-event-meta (PHP-rendered)
│  R150                │  Price from SCF field
└──────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card-hover`)
  - `core/post-featured-image` (isLink, aspectRatio 16/9, rounded top corners)
  - `core/group` (inner padding)
    - `core/group` (flex row — date + title)
      - `core/pattern` (`die-papier/card-event-meta`)
      - `core/post-title` (H3, isLink, heading-4 size)
    - `core/group` (flex row — meta)
      - `core/post-date` (format "j M Y")
    - `core/post-excerpt` (excerptLength: 20)

## Implementation Notes
- **Style Class**: `is-style-card-hover` (elevation on hover).
- **Meta Pattern**: Uses `die-papier/card-event-meta` which is a PHP-rendered pattern fetching SCF fields.
- **Responsive**: Used inside a 3-column grid layout which stacks to 2 columns on tablet and 1 on mobile.
- **Excerpt**: Capped at 20 words via the `excerptLength` block attribute.
