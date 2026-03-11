# Author Link

**Last updated**: 2026-02-23
**Category**: Common (Utility)
**React source**: `/src/app/components/common/AuthorLink.tsx`
**WordPress target**: `get_author_posts_url()` in templates

---

## 1. Purpose

A wrapper around `<Link>` that generates author profile page URLs from the author's name. URL format: `/author/{lowercase-encoded-name}`.

## 2. Props

| Prop | Type | Default |
|:-----|:-----|:--------|
| `authorName` | `string` | — (required) |
| `className` | `string?` | `'hover:text-brand-red transition-colors'` |
| `children` | `ReactNode?` | Falls back to `authorName` text |

## 3. WordPress Mapping

WordPress uses `get_author_posts_url()` natively. The `author.html` template handles the archive.

## 4. Dependencies

- **Consumed by**: `Article.tsx`, article card components
