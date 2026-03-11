# Template: single.html

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single.html`
**React equivalent**: `Article.tsx`

---

## 1. Purpose

Single article (post) template. 70/30 two-column layout with article content on the left and sidebar on the right.

## 2. Structure

```
header (template part)
└─ main (constrained, 1280px)
   └─ columns (wide, gap: spacing|50)
      ├─ column (70%)
      │  ├─ breadcrumbs (template part)
      │  ├─ pattern: die-papier/hidden-article-hero (core blocks: post-title + post-featured-image)
      │  ├─ post-meta (template part)
      │  ├─ post-content (constrained)
      │  ├─ pattern: die-papier/section-share
      │  ├─ pattern: die-papier/section-related-articles
      │  └─ comments (template part)
      └─ column (30%)
         └─ sidebar (template part)
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `post-meta`, `comments`, `sidebar`, `footer`

## 4. Custom Blocks Used

- None (article hero now uses core blocks via `hidden-article-hero` pattern)

## 5. Patterns Used

- `die-papier/section-share`
- `die-papier/section-related-articles`

## 6. Layout

- Type: `constrained`
- Content size: `1280px`
- Columns: `70%` / `30%`
- Gap: `var:preset|spacing|50`