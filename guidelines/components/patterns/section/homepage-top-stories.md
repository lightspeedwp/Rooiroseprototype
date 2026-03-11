# Homepage: Top Stories (Feature Grid)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-top-stories`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-top-stories.php`  
**Referenced by**: `page-home.php`

---

## Overview

Feature grid showing the 6 most recent non-sticky posts in a 3-column card layout. Appears directly below the hero slider. Uses the `is-style-feature-grid` block style for visual differentiation from standard category sections.

## Composition

- **Layout**: Constrained, 3-column grid
- **Section Style**: `is-style-section-white`
- **Query**: `core/query` — `queryId: 2`, `perPage: 6`, `postType: post`, descending by date, `sticky: exclude`
- **Card Style**: `is-style-card` on inner group

## Block Structure

- `core/group` (`is-style-section-white`, constrained layout)
  - `core/query` (queryId 2, perPage 6, sticky exclude, `is-style-feature-grid`)
    - `core/post-template` (grid, 3 columns)
      - `core/group` (`is-style-card`)
        - `core/post-featured-image` (linked, 16:9 aspect ratio)
        - `core/post-terms` (category — uppercase, letter-spacing 1px, `fontSize: x-small`, bold 700, `textColor: primary`)
        - `core/post-title` (H3, linked, `fontSize: medium`)
        - `core/post-date` (`fontSize: small`, `textColor: main-accent`)

## Design Tokens

- **Category badge**: `x-small` font, uppercase, `primary` color, `letter-spacing: 1px`, `font-weight: 700`
- **Title**: `medium` font size, Roboto Serif
- **Date**: `small` font, `main-accent` color
- **Image**: 16:9 aspect ratio

## React Equivalent

- `FeatureGrid.tsx` — Mixed-layout content grid
- Data from `categoryArticles.ts`

## Related Files

- `/guidelines/components/patterns/page/page-home.md` — Parent page pattern
- `/guidelines/components/patterns/homepage.md` — Homepage overview (section 8)
- `/guidelines/components/patterns/card/card-post-grid-3col.md` — Similar card structure
