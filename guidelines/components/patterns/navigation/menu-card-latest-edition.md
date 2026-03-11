# Navigation: Menu Card — Latest Edition

**Last updated**: 2026-03-04  
**Slug**: `die-papier/menu-card-latest-edition`  
**Folder**: `navigation/`  
**Source**: `patterns/navigation/menu-card-latest-edition.php`  
**Referenced by**: `menu-mobile.php`

---

## Overview

Promotional card displayed in the mobile menu showing the latest e-edition cover thumbnail, title, date, and "Lees nou" CTA link. Uses a `core/query` to dynamically fetch the most recent `dp_eedition` post.

## Composition

- **Background**: `tertiary` (light gray)
- **Text**: `secondary` (navy)
- **Border**: 8px radius
- **Padding**: `small` all sides
- **Layout**: Horizontal flex — thumbnail left (80px), text content right

## Block Structure

- `core/group` (`backgroundColor: tertiary`, `textColor: secondary`, 8px radius, padding `small`)
  - `core/group` (flex, no wrap, vertical center)
    - `core/group` (fixed width 80px, 1px border `border-light`, 4px radius) — Thumbnail
      - `core/query` (perPage 1, `postType: dp_eedition`, desc by date)
        - `core/post-template`
          - `core/post-featured-image` (linked, 80px x 110px, 4px radius)
    - `core/group` (fill width, vertical flex, blockGap `x-small`) — Content
      - `core/paragraph` — "Nuutste uitgawe" (uppercase, letter-spacing 0.05em, `fontSize: x-small`)
      - `core/query` (perPage 1, `dp_eedition`, desc by date)
        - `core/post-template`
          - `core/post-title` (H5, `fontSize: medium`)
          - `core/post-date` (format `j F Y`, `fontSize: small`)
      - `core/paragraph` — `<a href="/e-uitgawes">Lees nou &rarr;</a>` (`fontSize: small`)

## Design Tokens

- **Thumbnail**: 80px x 110px, 4px radius, 1px `border-light` border
- **Label**: `x-small` font, uppercase, 0.05em letter spacing
- **Card radius**: 8px

## React Equivalent

- `EEditionPromo.tsx` / sidebar e-edition component

## Related Files

- `/guidelines/components/patterns/navigation/menu-mobile.md` — Parent menu
- `/guidelines/components/patterns/sidebar/sidebar-eedition-promo.md` — Similar sidebar variant
