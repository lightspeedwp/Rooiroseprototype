# Query: Artikels per Kategorie

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-posts-category`
**Folder**: `query/`
**Source**: `patterns/query/query-posts-category.php`

---

## Overview
A dynamic category query pattern that can be used multiple times on a single page (e.g., Homepage "Nuus", "Sport", etc.). It requires configuration of the `taxQuery.category` in the block editor per instance.

## AQL Configuration
```json
{
  "perPage": 3,
  "postType": "post",
  "order": "desc",
  "orderBy": "date",
  "taxQuery": {
    "category": []
  },
  "sticky": "exclude",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-post-grid-3col`
- **Layout**: Grid (3 columns)

## Implementation Notes
- **Deduplication**: Automatically inherits AQL's `aql_query_vars` for page-level deduplication.
- **Caching**: Uses a 1-hour transient cache (`enable_caching: true`).
- **Heading**: This pattern does NOT include a heading; it is intended to follow a `core/heading` in a group.
