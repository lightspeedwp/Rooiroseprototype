# Template: category.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/category.html`
**React equivalent**: `Category.tsx`

---

## 1. Purpose

Category archive template. 70/30 layout with query title, article list (is-style-card), pagination, and sidebar.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ query-title (archive)
      │  ├─ term-description
      │  └─ query (12 per page, inherit: true)
      │     ├─ post-template (default layout)
      │     │  └─ card: columns (30/70)
      │     │     ├─ post-featured-image (16/9, radius 4px)
      │     │     ├─ post-title (link, medium)
      │     │     ├─ pattern: section-post-meta-compact
      │     │     └─ post-excerpt (25 words)
      │     ├─ pagination (centered)
      │     └─ no-results: pattern hidden-no-results
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```

## 3. Patterns Used

- `die-papier/section-post-meta-compact`
- `die-papier/hidden-no-results`
