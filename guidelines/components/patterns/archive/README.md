# Archive Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Archives)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/archive/`
**Total**: 20 patterns

---

## Overview

Archive patterns provide the full-page layout for listing pages (category, tag, author, CPT archives, taxonomy archives, search). All templates reference these patterns via `<!-- wp:pattern {"slug":"die-papier/archive-*"} /-->` — templates contain no inline query loops (DRY principle).

All archive patterns follow this structure:
1. Title/description header
2. Two-column layout (66%/33% or full-width)
3. Query loop with post-template grid
4. Pagination (Afrikaans labels: "Vorige" / "Volgende")
5. No-results fallback → `hidden-no-results` pattern

---

## Pattern Inventory

### Core Archives (5)

| Pattern | Slug | Layout | Card Style |
|:---|:---|:---|:---|
| archive-default | `die-papier/archive-default` | 70/30 + Sidebar | List Card |
| archive-category | `die-papier/archive-category` | 66/33 + Sidebar | Flex Row Card |
| archive-tag | `die-papier/archive-tag` | 70/30 + Sidebar | List Card |
| archive-author | `die-papier/archive-author` | 70/30 + Sidebar | List Card |
| archive-search | `die-papier/archive-search` | 70/30 + Sidebar | List Card |

### CPT Archives (6)

| Pattern | Slug | Post Type | AQL Powered |
|:---|:---|:---|:---|
| archive-events | `die-papier/archive-events` | `dp_event` | Yes (Future filter) |
| archive-obituaries | `die-papier/archive-obituaries` | `dp_obituary` | Yes (Date sort) |
| archive-competitions | `die-papier/archive-competitions` | `dp_competition` | Yes (Status filter) |
| archive-eeditions | `die-papier/archive-eeditions` | `dp_eedition` | Yes (Issue sort) |
| archive-multimedia | `die-papier/archive-multimedia` | `dp_multimedia` | No |
| archive-sponsors | `die-papier/archive-sponsors` | `dp_sponsor` | No |

### Taxonomy Archives (3)

| Pattern | Slug | Taxonomy | Layout |
|:---|:---|:---|:---|
| archive-event-category | `die-papier/archive-event-category` | `dp_event_category` | 2-col Grid |
| archive-multimedia-category | `die-papier/archive-multimedia-category` | `dp_multimedia_category` | 3-col Grid |
| archive-sponsor-tier | `die-papier/archive-sponsor-tier` | `dp_sponsor_tier` | 3-col Grid |

### Category Variants (5)

| Pattern | Slug | Category | Notes |
|:---|:---|:---|:---|
| archive-category-dink | `die-papier/archive-category-dink` | Dink | Hero layout |
| archive-category-leefstyl | `die-papier/archive-category-leefstyl` | Leefstyl | Hero layout |
| archive-category-nuus | `die-papier/archive-category-nuus` | Nuus | Hero layout |
| archive-category-sake | `die-papier/archive-category-sake` | Sake | Hero layout |
| archive-category-sport | `die-papier/archive-category-sport` | Sport | Hero layout |

---

## Implementation Standards

### Pagination Block
All archive patterns must include the standard pagination block:

```html
<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
    <!-- wp:query-pagination-previous {"label":"Vorige"} /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next {"label":"Volgende"} /-->
<!-- /wp:query-pagination -->
```

### No Results Pattern
All archives must use the `die-papier/hidden-no-results` pattern within the `wp:query-no-results` block.
