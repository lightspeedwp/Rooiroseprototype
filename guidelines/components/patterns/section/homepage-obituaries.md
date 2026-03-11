# Homepage: Sterftes (Obituaries)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-obituaries`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-obituaries.php`  
**Referenced by**: `page-home.php`

---

## Overview

Obituaries section on the homepage. Displays the 4 latest obituaries from the `dp_obituary` CPT in a 4-column grid. Uses circular portrait photos (120px, `border-radius: 50%`) and a muted background section style. Each card includes a nested `card-obituary-meta` pattern for dates.

## Composition

- **Layout**: Full-width (`alignfull`) with wide inner alignment
- **Section Style**: `is-style-section-muted` (light gray background)
- **Spacing**: Extra padding — `x-large` top and bottom
- **Query**: `core/query` — `queryId: 9`, `perPage: 4`, `postType: dp_obituary`, descending by date
- **AQL Class**: `aql-obituaries`

## Block Structure

- `core/group` (`alignfull`, `is-style-section-muted`, padding x-large top/bottom)
  - `core/group` (`alignwide`, flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Sterftes"
    - `core/paragraph` — `<a href="/sterftes"><strong>Alle sterftes &rarr;</strong></a>`
  - `core/query` (queryId 9, perPage 4, `dp_obituary`, `alignwide`, `aql-obituaries`)
    - `core/post-template` (grid, 4 columns)
      - `core/group` (`is-style-card`)
        - `core/post-featured-image` (linked, 1:1 aspect ratio, 120px width/height, `border-radius: 50%`)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `wp:pattern` — `die-papier/card-obituary-meta`
        - `core/post-excerpt` (excerptLength: 15)

## Design Tokens

- **Photo**: Circular (1:1 aspect, 50% border radius, 120px)
- **Background**: Muted section style (`--wp--preset--color--tertiary`)
- **Grid**: 4-column

## React Equivalent

- `ObituariesSection.tsx`
- Data from `obituaries.ts`

## Related Files

- `/guidelines/components/patterns/card/card-obituary-meta.md` — Nested meta pattern
- `/guidelines/components/patterns/archive/archive-obituaries.md` — Full obituaries archive
