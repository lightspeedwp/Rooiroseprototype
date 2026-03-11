# Template: taxonomy-dp_multimedia_category.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/taxonomy-dp_multimedia_category.html`
**React equivalent**: Multimedia type filter

---

## 1. Purpose

Multimedia category taxonomy archive. 70/30 layout with multimedia cards in a 3-column grid.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ query-title (archive) + term-description
      │  └─ query (12 per page, postType: dp_multimedia, inherit: true)
      │     ├─ post-template (grid 3 cols)
      │     │  └─ card: featured-image (16/9) + title + meta-compact
      │     ├─ pagination (centered)
      │     └─ no-results: "Geen multimedia-inhoud in hierdie kategorie gevind nie."
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```
