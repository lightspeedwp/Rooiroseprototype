# Template: author.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/author.html`
**React equivalent**: `Author.tsx`

---

## 1. Purpose

Author archive template. 70/30 layout with author profile header (avatar, name, biography) and a 2-column article grid.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ author header group (gap: spacing|30, pb: spacing|50)
      │  │  ├─ avatar (96px, border-radius 50%)
      │  │  ├─ post-author-name (large, dp-author-name--capitalize)
      │  │  └─ post-author-biography
      │  └─ query (12 per page, inherit: true)
      │     ├─ post-template (grid 2 cols)
      │     │  └─ card: featured-image (16/9) + title + date + excerpt
      │     ├─ pagination
      │     └─ no-results: "Geen artikels gevind nie."
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```
