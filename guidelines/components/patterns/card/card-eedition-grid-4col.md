# Kaart: E-Uitgawe Rooster (4 Kolomme)

**Last updated**: 2026-03-01
**Slug**: `die-papier/card-eedition-grid-4col`
**Folder**: `card/`
**Source**: `patterns/card/card-eedition-grid-4col.php`

---

## Overview
A specialized card pattern for the `dp_eedition` CPT (PDF issues). It prioritizes the issue cover image and the publication date.

## Composition
```
┌──────────────────────┐
│  Featured Image      │  3:4 aspect ratio, linked to post
├──────────────────────┤
│  E-Uitgawe Title     │  post-title, linked, heading-4 size
│  Issue Date          │  post-date, caption size
│  Lees Nou CTA        │  "Lees Nou" button
└──────────────────────┘
```

## Block Structure
- `core/group` (`is-style-card-hover`)
  - `core/post-featured-image` (isLink, aspectRatio 3/4, rounded corners)
  - `core/group` (inner padding)
    - `core/post-title` (H3, isLink, heading-4 size)
    - `core/post-date` (format "j M Y", caption size)
    - `core/buttons` (flex row — CTA)
      - `core/button` ("Lees Nou")

## Implementation Notes
- **Style Class**: `is-style-card-hover` (elevation on hover).
- **Responsive**: Used inside a 4-column grid layout which remains 4 columns on desktop, 3 columns on tablet, and 2 columns on mobile.
- **Aspect Ratio**: Uses 3/4 (portrait) to reflect the standard newspaper issue format.
- **Access Control**: In production, the "Lees Nou" button should be conditional based on the user's subscription status.
