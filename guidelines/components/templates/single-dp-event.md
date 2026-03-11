# Template: single-dp_event.html

**Last updated**: 2026-02-23
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_event.html`
**React equivalent**: `SingleEvent.tsx`

---

## 1. Purpose

Single event detail template. 70/30 layout with event image, title, meta card, content, and sharing.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   ├─ breadcrumbs (template part)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ post-featured-image (16/9, radius 8px)
      │  ├─ post-title (H1)
      │  ├─ card: pattern die-papier/section-event-meta
      │  ├─ post-content
      │  └─ pattern: die-papier/section-share
      └─ column (30%)
         └─ sidebar-event (template part)
footer (template part)
```

## 3. Notes

- Uses `sidebar-event` template part (not generic `sidebar`)
