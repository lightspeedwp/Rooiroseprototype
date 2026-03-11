# Template: single-dp_multimedia.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_multimedia.html`
**React equivalent**: `SingleMultimedia.tsx`

---

## 1. Purpose

Single multimedia item template. 70/30 layout with media embed, taxonomy terms, content, sharing, and related articles.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ post-title (H1)
      │  ├─ meta row: post-terms(dp_multimedia_category) · post-date
      │  ├─ media embed: pattern die-papier/section-multimedia-meta
      │  ├─ post-content
      │  ├─ pattern: die-papier/section-share
      │  └─ pattern: die-papier/section-related-articles
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```
