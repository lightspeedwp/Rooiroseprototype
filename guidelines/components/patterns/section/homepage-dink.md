# Homepage: Dink (Opinion)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-dink`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-dink.php`  
**Referenced by**: `page-home.php`

---

## Overview

Dink (Opinion) category section on the homepage. Displays 3 latest posts from the Dink category in a 3-column card grid with a section header and "Alle dink" CTA link.

## Composition

- **Layout**: Constrained, 3-column grid
- **Section Style**: `is-style-section-white`
- **Query**: `core/query` — `queryId: 7`, `perPage: 3`, `postType: post`, descending by date, `sticky: exclude`
- **AQL Class**: `aql-category-dink`

## Block Structure

- `core/group` (`is-style-section-white`, constrained layout)
  - `core/group` (flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Dink"
    - `core/paragraph` — `<a href="/dink"><strong>Alle dink &rarr;</strong></a>`
  - `core/query` (queryId 7, perPage 3, sticky exclude, `aql-category-dink`)
    - `core/post-template` (grid, 3 columns)
      - `core/group` (`is-style-card`)
        - `core/post-featured-image` (linked, 16:9)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `core/post-date` (`fontSize: small`, `textColor: main-accent`)

## Design Tokens

- Identical to `homepage-nuus.md` — see that file for full token reference.

## React Equivalent

- `CategorySection.tsx` with `category="dink"` prop

## Related Files

- `/guidelines/components/patterns/section/homepage-nuus.md` — Shared category section structure
- `/guidelines/components/patterns/archive/archive-category-dink.md` — Full Dink archive
