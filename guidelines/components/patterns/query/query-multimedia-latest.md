# Query: Jongste Multimedia

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-multimedia-latest`
**Folder**: `query/`
**Source**: `patterns/query/query-multimedia-latest.php`

---

## Overview
A dynamic query for the `dp_multimedia` CPT (videos, podcasts, galleries). It fetches latest items ordered by date descending.

## AQL Configuration
```json
{
  "perPage": 12,
  "postType": "dp_multimedia",
  "orderBy": "date",
  "order": "desc",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-multimedia-grid`
- **Layout**: Grid (4 columns on homepage, 3 columns on archive)
- **Pagination**: Enabled for archive usage

## Implementation Notes
- **Caching**: Uses a 1-hour transient cache (`enable_caching: true`).
- **Deduplication**: Automatically inherits AQL's `aql_query_vars`.
- **Fallback**: Includes a localized Afrikaans "no multimedia" message in `query-no-results`.
