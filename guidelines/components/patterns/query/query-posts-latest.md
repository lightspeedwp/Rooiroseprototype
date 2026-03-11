# Query: Jongste Artikels

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-posts-latest`
**Folder**: `query/`
**Source**: `patterns/query/query-posts-latest.php`

---

## Overview
A standard AQL query to fetch the latest posts while excluding sticky (featured) articles. This is used in the main feature grid and various category sections on the homepage.

## AQL Configuration
```json
{
  "perPage": 6,
  "postType": "post",
  "order": "desc",
  "orderBy": "date",
  "sticky": "exclude",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-post-grid-3col`
- **Pagination**: Disabled (handled at page/archive level if needed)
- **Fallback**: Uses `die-papier/hidden-no-results`

## Implementation Notes
- Uses `enable_caching: true` for a 1-hour transient cache.
- Inherits deduplication via the `aql_query_vars` filter to prevent overlapping with the hero slider.
