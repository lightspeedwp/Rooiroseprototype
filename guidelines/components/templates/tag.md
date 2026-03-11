# Template: tag.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/tag.html`
**React equivalent**: `TagArchive.tsx`

---

## 1. Purpose

Tag archive template. 70/30 layout with query title, tag article list, pagination, and sidebar. Same structure as `category.html`.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ query-title (archive) + term-description
      │  └─ query (12 per page, inherit: true)
      │     ├─ post-template (card layout: 30/70 columns)
      │     ├─ pagination (centered)
      │     └─ no-results: "Geen artikels gevind vir hierdie onderwerp nie."
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```
