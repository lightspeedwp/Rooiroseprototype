# Template: single-dp_sponsor.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_sponsor.html`
**React equivalent**: `SponsorArchive.tsx`

---

## 1. Purpose

Single sponsor page. Shows sponsor details (logo, tier, description) and a grid of their sponsored articles.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ group (wide, py: spacing|50)
      ├─ columns (gap: spacing|50)
      │  ├─ column (30%)
      │  │  ├─ post-featured-image (radius 8px)
      │  │  └─ post-terms(dp_sponsor_tier) — tier badge
      │  └─ column (70%)
      │     ├─ post-title (H1)
      │     ├─ post-content
      │     └─ card: pattern die-papier/section-sponsor-meta
      ├─ separator (wide, my: spacing|60)
      ├─ H2 "Artikels deur hierdie borg"
      └─ query (6 posts, grid 3 cols, is-style-card-hover)
footer (template part)
```

## 3. Notes

- Full-width (no sidebar)
- Article grid uses `is-style-card-hover` block style
