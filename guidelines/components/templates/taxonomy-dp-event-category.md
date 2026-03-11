# Template: taxonomy-dp_event_category.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/taxonomy-dp_event_category.html`
**React equivalent**: Events category filter

---

## 1. Purpose

Event category taxonomy archive. 70/30 layout with event cards in a 2-column grid.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ query-title (archive) + term-description
      │  └─ query (12 per page, postType: dp_event, inherit: true)
      │     ├─ post-template (grid 2 cols)
      │     │  └─ card: featured-image (16/9) + title + meta-compact + excerpt
      │     ├─ pagination (centered)
      │     └─ no-results: "Geen gebeure in hierdie kategorie gevind nie."
      └─ column (30%)
         └─ sidebar-event (template part)
footer (template part)
```

## 3. Notes

- Uses `sidebar-event` template part (not generic `sidebar`)
- Uses `section-post-meta-compact` pattern
