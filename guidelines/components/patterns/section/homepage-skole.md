# Homepage: Skole (Schools)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-skole`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-skole.php`  
**Referenced by**: `page-home.php`

---

## Overview

Skole (Schools) category section on the homepage. Displays 3 latest posts from the Skole category in a 3-column card grid with a section header and "Alle skole" CTA link.

## Composition

- **Layout**: Constrained, 3-column grid
- **Section Style**: `is-style-section-white`
- **Query**: `core/query` — `queryId: 5`, `perPage: 3`, `postType: post`, descending by date, `sticky: exclude`
- **AQL Class**: `aql-category-skole`

## Block Structure

- `core/group` (`is-style-section-white`, constrained layout)
  - `core/group` (flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Skole"
    - `core/paragraph` — `<a href="/skole"><strong>Alle skole &rarr;</strong></a>`
  - `core/query` (queryId 5, perPage 3, sticky exclude, `aql-category-skole`)
    - `core/post-template` (grid, 3 columns)
      - `core/group` (`is-style-card`)
        - `core/post-featured-image` (linked, 16:9)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `core/post-date` (`fontSize: small`, `textColor: main-accent`)

## Design Tokens

- Identical to `homepage-nuus.md` — see that file for full token reference.

## React Equivalent

- `CategorySection.tsx` with `category="skole"` prop

## Related Files

- `/guidelines/components/patterns/section/homepage-nuus.md` — Shared category section structure
