# Query: Borgskappe per Vlak

**Last updated**: 2026-03-01
**Slug**: `die-papier/query-sponsors-tier`
**Folder**: `query/`
**Source**: `patterns/query/query-sponsors-tier.php`

---

## Overview
A specialized query for the `dp_sponsor` CPT. It uses a `taxQuery` to only show sponsors of a specific tier (Gold, Silver, Bronze).

## AQL Configuration
```json
{
  "perPage": 12,
  "postType": "dp_sponsor",
  "orderBy": "date",
  "order": "desc",
  "taxQuery": {
    "dp_sponsor_tier": []
  },
  "inherit": false,
  "namespace": "advanced-query-loop"
}
```

## Composition
- **Card**: `die-papier/card-sponsor-gold`, `die-papier/card-sponsor-silver`, or `die-papier/card-sponsor-bronze`
- **Layout**: Grid (3-5 columns depending on the tier)

## Implementation Notes
- **Tier Filtering**: Requires configuration of the `taxQuery.dp_sponsor_tier` array in the block editor per instance (Gold/Silver/Bronze).
- **Sorting**: Usually ordered by date descending to show the newest sponsors first, or can be changed to alphabetically.
- **Fallback**: No "no results" block is included by default for this pattern.
