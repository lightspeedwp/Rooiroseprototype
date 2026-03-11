# Template: taxonomy-dp_sponsor_tier.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/taxonomy-dp_sponsor_tier.html`
**React equivalent**: Sponsor tier filter

---

## 1. Purpose

Sponsor tier taxonomy archive. Full-width layout (no sidebar) with sponsor cards in a 3-column grid.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   ├─ query-title (archive) + term-description
   └─ query (24 per page, postType: dp_sponsor, inherit: true)
      ├─ post-template (grid 3 cols)
      │  └─ card: featured-image (1:1, 120×120px, centered) + title (centered) + excerpt (centered)
      ├─ pagination (centered)
      └─ no-results: "Geen borge in hierdie vlak gevind nie."
footer (template part)
```

## 3. Notes

- Full-width layout (no sidebar columns)
- Sponsor logos displayed as 1:1 squares, 120px, centered
