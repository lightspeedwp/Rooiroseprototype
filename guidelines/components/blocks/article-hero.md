# Block: dp/article-hero

**Last updated**: 2026-02-27
**Version**: 1.0
**Status**: DEPRECATED — block source deleted from plugin (2026-02-27)
**Replacement**: `hidden-article-hero.php` pattern using `core/post-title` + `core/post-featured-image` + `core/columns`
**See**: `/wordpress-export/themes/die-papier-theme/patterns/hidden-article-hero.php`
**Category**: Block (Deprecated)
**Block name**: `dp/article-hero`
**Title**: Artikel Held
**Source**: ~~`/wordpress-export/plugins/die-papier-blocks/src/blocks/article-hero/`~~ (deleted)
**React equivalent**: Article hero section in `Article.tsx`

---

> **DEPRECATED**: This custom block has been replaced by the `hidden-article-hero.php` theme pattern, which uses only core WordPress blocks (`core/group`, `core/columns`, `core/post-title`, `core/post-featured-image`). Share buttons were removed from the hero — they are handled by the separate `section-share.php` pattern which appears below post content in `single.html`.

## Replacement Guide

The `hidden-article-hero.php` pattern now uses:
- `core/columns` (60/40 split) for the two-column layout
- `core/post-title` (level 1) for the article title
- `core/post-featured-image` (square aspect ratio, cover) for the featured image
- No share buttons — handled by `die-papier/section-share` pattern in `single.html`

The pattern is referenced by `single.html` via `<!-- wp:pattern {"slug":"die-papier/hidden-article-hero"} /-->`.

## 1. Purpose

Renders the article hero section: featured image (16:9), category badge, title (H1), excerpt, and author/date/read-time metadata row.

## 2. Files

- `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`, `view.js`

## 3. Context

Uses post context (`postId`, `postType`) to pull featured image, title, and metadata from the current post.

## 4. Used In Templates

- `single.html`

## 5. Related Guidelines

- `/guidelines/wordpress-migration/blocks/article-hero.md` (existing)