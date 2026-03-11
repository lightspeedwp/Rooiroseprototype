# Query: Aktiewe Kompetisies

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-competitions-active`
**Folder**: `query/`
**Source**: `patterns/query/query-competitions-active.php`

---

## Overview
A dynamic query for the `dp_competition` CPT. It fetches active/open competitions ordered by date descending.

## AQL Configuration
```json
{
  "perPage": 9,
  "postType": "dp_competition",
  "orderBy": "date",
  "order": "desc",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-competition-grid`
- **Layout**: Grid (3 columns)
- **Pagination**: Enabled for archive usage

## Implementation Notes
- **Status Filtering**: In production, it should be updated to use a `meta_query` to filter by the `status` SCF field (Active/Closed) once the field is confirmed.
- **Deduplication**: Automatically inherits AQL's `aql_query_vars`.
- **Fallback**: Includes a localized Afrikaans "no competitions" message in `query-no-results`.
