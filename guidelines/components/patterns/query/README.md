# Query Patterns

**Last updated**: 2026-02-28
**Category**: Patterns (Query)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/query/`
**Total**: 10 patterns

---

## Overview

Query patterns encapsulate **AQL (Advanced Query Loop) configurations** separated from card layouts. Each query pattern defines *what* to fetch (post type, filters, ordering, caching) and composes a card pattern for *how* to render each item. All query patterns have `Inserter: false`.

### Architecture

```
page/archive pattern (Tier 3)
└── query pattern (Tier 2)  ← This folder
    └── core/query (AQL namespace)
        └── core/post-template
            └── card pattern (Tier 1)
```

This separation means:
- **Card layout** can be reused across different queries
- **Query configuration** can be changed without touching card markup
- **AQL settings** (caching, dedup, taxonomy filters) are centralised

---

## Pattern Inventory

### Post Queries (4)

| Pattern | Slug | Purpose | Card Used | AQL Features |
|:---|:---|:---|:---|:---|
| query-posts-latest | `die-papier/query-posts-latest` | Latest posts (excl. sticky) | card-post-grid-3col | sticky:exclude, caching |
| query-posts-sticky | `die-papier/query-posts-sticky` | Sticky/featured posts only | card-post-featured-hero | sticky:only, caching |
| query-posts-category | `die-papier/query-posts-category` | Posts from specific category | card-post-grid-3col | taxQuery, sticky:exclude |
| query-posts-related | `die-papier/query-posts-related` | Related posts (excl. current) | card-post-grid-3col | exclude_current_post, caching |

### CPT Queries (6)

| Pattern | Slug | Post Type | Card Used | AQL Features |
|:---|:---|:---|:---|:---|
| query-events-upcoming | `die-papier/query-events-upcoming` | `dp_event` | card-event-grid | meta_query (future dates), orderBy:meta_value |
| query-competitions-active | `die-papier/query-competitions-active` | `dp_competition` | card-competition-grid | orderBy:date DESC |
| query-eeditions-latest | `die-papier/query-eeditions-latest` | `dp_eedition` | card-eedition-grid-4col | orderBy:date DESC |
| query-multimedia-latest | `die-papier/query-multimedia-latest` | `dp_multimedia` | card-multimedia-grid | caching |
| query-obituaries-latest | `die-papier/query-obituaries-latest` | `dp_obituary` | card-obituary-grid | orderBy:date DESC |
| query-sponsors-tier | `die-papier/query-sponsors-tier` | `dp_sponsor` | card-sponsor-gold/silver/bronze | taxQuery (dp_sponsor_tier) |

---

## AQL Configuration Reference

All query patterns use `"namespace":"advanced-query-loop"` on both the `wp:query` block and the outer wrapper.

### Common AQL Attributes

```json
{
  "query": {
    "perPage": 6,
    "postType": "post",
    "order": "desc",
    "orderBy": "date",
    "inherit": false,
    "namespace": "advanced-query-loop",
    "sticky": "exclude"
  },
  "namespace": "advanced-query-loop"
}
```

### AQL-Specific Keys

| Key | Type | Description | Used In |
|:---|:---|:---|:---|
| `sticky` | `"exclude"` / `"only"` | Filter sticky posts | posts-latest, posts-sticky |
| `exclude_current_post` | `true` | Exclude current post from results | posts-related |
| `enable_caching` | `true` | 1-hour transient cache | posts-related, homepage sections |
| `taxQuery` | `object` | Taxonomy filter (category, tier) | posts-category, sponsors-tier |
| `meta_query` | `object` | Custom field filters | events-upcoming (future dates) |

---

## Pagination

- **Archive queries**: Include `<!-- wp:query-pagination -->` with Afrikaans-labelled prev/next
- **Homepage/widget queries**: No pagination (display fixed count)
- **Related posts**: No pagination (display 3 items)

### Pagination Block

```html
<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|50"}}}} -->
<!-- wp:query-pagination-previous /-->
<!-- wp:query-pagination-numbers /-->
<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination -->
```

---

## No-Results Fallback

All query patterns include a no-results block with Afrikaans messaging:

```html
<!-- wp:query-no-results -->
    <!-- wp:pattern {"slug":"die-papier/hidden-no-results"} /-->
<!-- /wp:query-no-results -->
```

Or inline for CPT-specific messages:

```html
<!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Geen komende gebeure nie. Kyk later weer!</p>
    <!-- /wp:paragraph -->
<!-- /wp:query-no-results -->
```

---

## Deduplication

Homepage queries use AQL's `aql_query_vars` filter for page-level deduplication. Each subsequent AQL query on the same page automatically excludes posts already shown by previous queries. This prevents the same article from appearing in both the hero slider and a category section.

Implementation: Custom PHP in `die-papier-blocks` plugin. See [AQL Integration Guide](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md#3-article-deduplication-strategy).

---

## Usage Examples

### Drop-in query on a page

```html
<!-- wp:pattern {"slug":"die-papier/query-posts-latest"} /-->
```

### Category section with heading

```html
<!-- wp:group -->
    <!-- wp:heading {"level":2,"className":"is-style-section-title"} -->
    <h2>Sport</h2>
    <!-- /wp:heading -->
    <!-- wp:pattern {"slug":"die-papier/query-posts-category"} /-->
<!-- /wp:group -->
```

Note: The `query-posts-category` pattern requires configuring the `taxQuery.category` array in the block editor for the specific category.

### Related articles in single post template

```html
<!-- wp:pattern {"slug":"die-papier/query-posts-related"} /-->
```

This pattern includes its own heading ("Verwante Artikels") and wrapping group.

---

## Relationship to Archive Patterns

Archive patterns (`archive/`) contain their own inline `core/query` blocks with full query configurations. Query patterns (`query/`) are designed for:

1. **Reuse across multiple pages** — the same query can appear on the homepage, a widget, and a sidebar
2. **Homepage composition** — where multiple queries need deduplication
3. **Standardised AQL config** — centralised caching and ordering settings

Archive patterns may migrate to use query patterns in future phases, but currently maintain their own inline queries for template-level control.