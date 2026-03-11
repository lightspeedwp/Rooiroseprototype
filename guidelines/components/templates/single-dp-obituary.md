# Template: single-dp_obituary.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_obituary.html`
**React equivalent**: `SingleObituary.tsx`

---

## 1. Purpose

Single obituary template. 70/30 layout with portrait image (200×200px), title, meta card, content, and sharing.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ post-featured-image (200×200px, radius 8px)
      │  ├─ post-title (H1)
      │  ├─ card: pattern die-papier/section-obituary-meta
      │  ├─ post-content
      │  └─ pattern: die-papier/section-share
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```
