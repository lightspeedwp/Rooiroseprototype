# Query: Jongste E-Uitgawes

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-eeditions-latest`
**Folder**: `query/`
**Source**: `patterns/query/query-eeditions-latest.php`

---

## Overview
A dynamic query for the `dp_eedition` CPT. It fetches latest e-editions (PDF issues) ordered by date descending.

## AQL Configuration
```json
{
  "perPage": 12,
  "postType": "dp_eedition",
  "orderBy": "date",
  "order": "desc",
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-eedition-grid-4col`
- **Layout**: Grid (4 columns)
- **Pagination**: Enabled for archive usage

## Implementation Notes
- **Sorting**: Uses `orderBy: date` by default, but should be updated to `meta_value: issue_date` if the `issue_date` SCF field is used for historical/back-dated issues.
- **Deduplication**: Automatically inherits AQL's `aql_query_vars`.
- **Fallback**: Includes a localized Afrikaans "no e-editions" message in `query-no-results`.
