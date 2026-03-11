# Query: Verwante Artikels

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-posts-related`
**Folder**: `query/`
**Source**: `patterns/query/query-posts-related.php`

---

## Overview
A dynamic query used at the bottom of single article pages (`single.html`) to fetch posts from the same category while excluding the current article.

## AQL Configuration
```json
{
  "perPage": 3,
  "postType": "post",
  "order": "desc",
  "orderBy": "date",
  "exclude_current_post": true,
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-post-grid-3col`
- **Layout**: Grid (3 columns)

## Implementation Notes
- **Deduplication**: Uses AQL's `exclude_current_post: true` to prevent self-referencing.
- **Caching**: Uses a 1-hour transient cache (`enable_caching: true`).
- **Context**: Requires being placed inside a context where the post ID and categories are known (automatic within the single post template).
