# Homepage: Nuusflitse (Breaking News Bar)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-nuusflitse`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-nuusflitse.php`  
**Referenced by**: `page-home.php` (first child pattern)

---

## Overview

Breaking news ticker bar displayed at the very top of the homepage. Shows the 3 most recent posts from the "nuusflitse" category in a horizontal row against a navy background. Provides urgent/breaking news visibility.

## Composition

- **Layout**: Full-width constrained, single flex row (no wrap)
- **Section Style**: `is-style-section-navy` (dark navy background, white text)
- **Query**: `core/query` — `perPage: 3`, `postType: post`, `categoryName: nuusflitse`, descending by date

## Block Structure

- `core/group` (`is-style-section-navy`, constrained layout)
  - `core/group` (flex, no wrap)
    - `core/paragraph` — "Nuusflitse:" label (uppercase, bold 700, `textColor: base`)
    - `core/query` (perPage 3, category "nuusflitse")
      - `core/post-template` (flex, no wrap)
        - `core/post-title` (linked, `fontSize: small`, `textColor: base`)

## Design Tokens

- **Background**: Navy (`--wp--preset--color--secondary`)
- **Text**: White/base (`--wp--preset--color--base`)
- **Label**: Uppercase, `font-weight: 700`
- **Title size**: `small` preset

## React Equivalent

- `BreakingNews.tsx` (currently disabled — renders `null`)
- Category data from `categoryArticles.ts` → `nuusflitse` category

## Related Files

- `/guidelines/components/patterns/page/page-home.md` — Parent page pattern
- `/guidelines/components/patterns/homepage.md` — Homepage overview (section 12)
