# Homepage: Multimedia

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-multimedia`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-multimedia.php`  
**Referenced by**: `page-home.php`

---

## Overview

Multimedia section on the homepage. Displays the 4 latest multimedia items (videos/galleries) from the `dp_multimedia` CPT in a 4-column card grid. Uses `is-style-card-hover` for interactive hover effects.

## Composition

- **Layout**: Full-width (`alignfull`) with wide inner alignment
- **Section Style**: `is-style-section-white`
- **Spacing**: Extra padding — `x-large` top and bottom
- **Query**: `core/query` — `queryId: 8`, `perPage: 4`, `postType: dp_multimedia`, descending by date
- **AQL Class**: `aql-multimedia`
- **Card Style**: `is-style-card-hover` (hover lift effect)

## Block Structure

- `core/group` (`alignfull`, `is-style-section-white`, padding x-large top/bottom)
  - `core/group` (`alignwide`, flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Multimedia"
    - `core/paragraph` — `<a href="/multimedia"><strong>Alle multimedia &rarr;</strong></a>`
  - `core/query` (queryId 8, perPage 4, `dp_multimedia`, `alignwide`, `aql-multimedia`)
    - `core/post-template` (grid, 4 columns)
      - `core/group` (`is-style-card-hover`)
        - `core/post-featured-image` (linked, 16:9)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `core/post-date` (`fontSize: small`, `textColor: main-accent`)

## Design Tokens

- **Grid**: 4-column (wider than standard category sections)
- **Card**: `is-style-card-hover` — adds shadow lift on hover
- **Image**: 16:9 aspect ratio

## React Equivalent

- `MultimediaSection.tsx`
- Data from `multimedia.ts`

## Related Files

- `/guidelines/components/patterns/section/homepage-nuus.md` — Shared section header pattern
- `/guidelines/components/patterns/archive/archive-multimedia.md` — Full multimedia archive
- `/guidelines/components/patterns/card/card-multimedia-grid.md` — Multimedia card variant
