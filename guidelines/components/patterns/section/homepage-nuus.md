# Homepage: Nuus (News)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-nuus`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-nuus.php`  
**Referenced by**: `page-home.php`

---

## Overview

News category section on the homepage. Displays 3 latest posts from the Nuus (News) category in a 3-column card grid with a section header and "Alle nuus" CTA link.

## Composition

- **Layout**: Constrained, 3-column grid
- **Section Style**: `is-style-section-white`
- **Query**: `core/query` — `queryId: 3`, `perPage: 3`, `postType: post`, descending by date, `sticky: exclude`
- **AQL Class**: `aql-category-nuus` (for Advanced Query Loop deduplication)

## Block Structure

- `core/group` (`is-style-section-white`, constrained layout)
  - `core/group` (flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Nuus"
    - `core/paragraph` — `<a href="/nuus"><strong>Alle nuus &rarr;</strong></a>`
  - `core/query` (queryId 3, perPage 3, sticky exclude, `aql-category-nuus`)
    - `core/post-template` (grid, 3 columns)
      - `core/group` (`is-style-card`)
        - `core/post-featured-image` (linked, 16:9)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `core/post-date` (`fontSize: small`, `textColor: main-accent`)

## Design Tokens

- **Section heading**: H2, `secondary` color (navy)
- **CTA link**: Bold, arrow suffix
- **Card**: Same structure as other category sections

## AQL Integration

- Class `aql-category-nuus` enables the Advanced Query Loop plugin to filter by Nuus category via `aql_query_vars`
- Deduplication with other homepage sections via AQL's post exclusion

## React Equivalent

- `CategorySection.tsx` with `category="nuus"` prop
- Data from `categoryArticles.ts`

## Related Files

- `/guidelines/components/patterns/homepage.md` — Homepage overview (section 2)
- `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md` — AQL configuration
- `/guidelines/components/patterns/archive/archive-category-nuus.md` — Full Nuus archive
