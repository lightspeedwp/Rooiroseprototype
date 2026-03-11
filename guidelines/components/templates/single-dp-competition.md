# Template: single-dp_competition.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_competition.html`
**React equivalent**: `CompetitionSingle.tsx`

---

## 1. Purpose

Single competition detail template. 70/30 layout with featured image, title, status badge, meta card, entry form, and sharing.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ post-featured-image (16/9, radius 8px)
      │  ├─ post-title (H1)
      │  ├─ meta row: dp/competition-badge · post-date
      │  ├─ card: pattern die-papier/section-competition-meta
      │  ├─ post-content
      │  ├─ dp/competition-entry (custom block)
      │  └─ pattern: die-papier/section-share
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```

## 3. Custom Blocks Used

- `dp/competition-badge`
- `dp/competition-entry`

## 4. Patterns Used

- `die-papier/section-competition-meta`
- `die-papier/section-share`
