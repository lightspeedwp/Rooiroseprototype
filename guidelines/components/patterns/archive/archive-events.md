# Argief: Gebeure Rooster

**Last updated**: 2026-03-01
**Slug**: `die-papier/archive-events`
**Folder**: `archive/`
**Source**: `patterns/archive/archive-events.php`

---

## Overview
The full-page layout for the `dp_event` CPT archive. It uses a 3-column grid to show upcoming events chronologically.

## Composition
- **Layout**: 1-column, constrained width
- **Query**: AQL, post type `dp_event`, upcoming events
- **Card**: `die-papier/card-event-grid`
- **Filter Bar**: `dp/filter-bar` (custom block)

## Block Structure
- `core/group` (`alignwide`, inner padding 50px)
  - `core/heading` (H1, "Gebeure")
  - `core/paragraph` (description text)
  - `core/group` (filter bar)
    - `dp/filter-bar` (showSearch: false)
  - `core/query` (AQL, `postType: dp_event`, `orderBy: meta_value`, `order: asc`)
    - `core/post-template` (3-column grid)
      - `core/pattern` (`die-papier/card-event-grid`)
    - `core/query-pagination` (Previous/Next/Numbers)
    - `core/query-no-results` ("Geen komende gebeure nie")

## Implementation Notes
- **AQL**: Requires AQL's `meta_query` to only show future events (event_date >= today).
- **Sorting**: Ordered by `event_date` meta value ASC (soonest first).
- **Filter Bar**: The `dp/filter-bar` is a custom block provided by the `die-papier-blocks` plugin for filtering events by category or month.
- **CTA**: Includes `die-papier/section-newsletter-cta-full` at the bottom.
