# Homepage: Gebeure (Events)

**Last updated**: 2026-03-04  
**Slug**: `die-papier/homepage-events`  
**Folder**: `section/`  
**Source**: `patterns/section/homepage-events.php`  
**Referenced by**: `page-home.php`

---

## Overview

Events section on the homepage. Displays 3 upcoming events from the `dp_event` CPT in a 3-column card grid, ordered ascending by `meta_value` (event date). Uses `is-style-card-hover` for interactive cards and includes nested `card-event-meta` pattern.

## Composition

- **Layout**: Full-width (`alignfull`) with wide inner alignment
- **Section Style**: `is-style-section-white`
- **Spacing**: Extra padding — `x-large` top and bottom
- **Query**: `core/query` — `queryId: 10`, `perPage: 3`, `postType: dp_event`, ascending by `meta_value`
- **AQL Class**: `aql-events-upcoming`
- **Card Style**: `is-style-card-hover`

## Block Structure

- `core/group` (`alignfull`, `is-style-section-white`, padding x-large top/bottom)
  - `core/group` (`alignwide`, flex, space-between) — Section header
    - `core/heading` (H2, `textColor: secondary`) — "Gebeure"
    - `core/paragraph` — `<a href="/gebeure"><strong>Alle gebeure &rarr;</strong></a>`
  - `core/query` (queryId 10, perPage 3, `dp_event`, order ASC, orderBy `meta_value`, `alignwide`, `aql-events-upcoming`)
    - `core/post-template` (grid, 3 columns)
      - `core/group` (`is-style-card-hover`)
        - `core/post-featured-image` (linked, 16:9)
        - `wp:pattern` — `die-papier/card-event-meta`
        - `core/post-title` (H3, linked, `fontSize: medium`)

## Design Tokens

- **Query ordering**: Ascending by `meta_value` — shows soonest events first
- **Card**: `is-style-card-hover` with lift shadow on hover
- **Meta pattern**: `card-event-meta` provides date box, location, time

## React Equivalent

- `EventsSection.tsx`
- Data from `events.ts`

## Related Files

- `/guidelines/components/patterns/card/card-event-meta.md` — Nested meta pattern
- `/guidelines/components/patterns/archive/archive-events.md` — Full events archive
- `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md` — AQL meta ordering
