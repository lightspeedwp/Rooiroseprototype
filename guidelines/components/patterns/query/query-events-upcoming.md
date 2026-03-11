# Query: Komende Gebeure

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-events-upcoming`
**Folder**: `query/`
**Source**: `patterns/query/query-events-upcoming.php`

---

## Overview
A complex query for the `dp_event` CPT. It uses a `meta_query` to only show future events and sorts them chronologically (soonest first).

## AQL Configuration
```json
{
  "perPage": 12,
  "postType": "dp_event",
  "orderBy": "meta_value",
  "order": "asc",
  "inherit": false,
  "namespace": "advanced-query-loop",
  "meta_query": {
    "relation": "AND",
    "queries": [
      {
        "meta_key": "event_date",
        "meta_value": "",
        "meta_compare": ">=",
        "meta_type": "DATE"
      }
    ]
  }
}
```

## Composition
- **Card**: `die-papier/card-event-grid`
- **Layout**: Grid (3 columns)
- **Pagination**: Enabled for archive usage

## Implementation Notes
- **Sorting**: Uses `orderBy: meta_value` on the `event_date` meta key.
- **Filtering**: Filters out past events based on the current system date.
- **Fallback**: Includes a localized Afrikaans "no events" message in `query-no-results`.
