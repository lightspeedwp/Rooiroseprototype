# Query: Vasgesteekte Artikels

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-posts-sticky`
**Folder**: `query/`
**Source**: `patterns/query/query-posts-sticky.php`

---

## Overview
A specialized query that fetches ONLY sticky/featured posts. This is the source for the homepage hero slider and featured grids.

## AQL Configuration
```json
{
  "perPage": 5,
  "postType": "post",
  "order": "desc",
  "orderBy": "date",
  "sticky": "only",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-post-featured-hero`
- **Align**: Full (`alignfull`)
- **Class**: `is-style-hero-slider`

## Implementation Notes
- This query defines the "Featured" pool for the homepage.
- The `queryId: 1` is reserved for the hero slider for the `aql_query_vars` deduplication logic.
