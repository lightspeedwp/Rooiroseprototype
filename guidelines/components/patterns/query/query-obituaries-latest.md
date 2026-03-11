# Query: Jongste Sterftes

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-obituaries-latest`
**Folder**: `query/`
**Source**: `patterns/query/query-obituaries-latest.php`

---

## Overview
A dynamic query for the `dp_obituary` CPT. It fetches latest obituaries ordered by date descending.

## AQL Configuration
```json
{
  "perPage": 12,
  "postType": "dp_obituary",
  "orderBy": "date",
  "order": "desc",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-obituary-grid`
- **Layout**: Grid (4 columns on homepage, 3 columns on archive)
- **Pagination**: Enabled for archive usage

## Implementation Notes
- **Deduplication**: Automatically inherits AQL's `aql_query_vars`.
- **Fallback**: Includes a localized Afrikaans "no obituaries" message in `query-no-results`.
- **Sorting**: Should be updated to `meta_value: death_date` if chronological sorting by the actual event is required instead of post date.
