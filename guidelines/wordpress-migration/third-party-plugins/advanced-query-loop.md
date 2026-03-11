# Advanced Query Loop (AQL) Integration Guide

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: 4.4.0

> **Purpose**: Documents how Die Papier uses the Advanced Query Loop plugin to power homepage sections, category archives, and any pattern requiring advanced WordPress queries — including article deduplication across multiple query loops on the same page.

---

## 1. Overview

**Advanced Query Loop** (AQL) is a free WordPress plugin by Ryan Welcher that extends the core Query Loop block (`core/query`) with a block variation (`namespace: 'advanced-query-loop'`). It adds controls for taxonomy queries, post meta queries, date queries, advanced ordering, post exclusion, pagination control, and transient caching — all without writing custom PHP.

- **Plugin**: https://wordpress.org/plugins/advanced-query-loop/
- **GitHub**: https://github.com/ryanwelcher/advanced-query-loop
- **Extends**: `core/query` block (block variation, not a separate block)
- **Namespace**: `advanced-query-loop`

### Why AQL Instead of Custom Blocks

Previously, Die Papier spec'd custom blocks like `dp/hero-slider` with `render.php` containing raw `WP_Query` calls. AQL replaces this by:

1. Providing a GUI for all query parameters in the block editor
2. Working with standard `core/post-template` InnerBlocks (no custom save/render needed)
3. Supporting the `aql_query_vars` PHP filter for custom extensions (e.g., deduplication)
4. Offering built-in caching via transients
5. Being maintained as a widely-used open source plugin

---

## 2. Available Controls

| Control | AQL Key | Die Papier Use Case |
|:---|:---|:---|
| **Taxonomy queries** | `taxonomy_query_builder` | Filter by category (Nuus, Sport, Skole, etc.) |
| **Multiple post types** | `additional_post_types` | Query across `post` + `dp_event` or `dp_multimedia` |
| **Include specific posts** | `include_posts` | Manually curated "Editor's Picks" sections |
| **Exclude current post** | `exclude_current_post` | Related content on single article pages |
| **Exclude posts list** | `exclude_posts` | Article deduplication on homepage |
| **Post meta query** | `post_meta_query` | Filter by custom fields (e.g., `featured: true`) |
| **Date query** | `date_query_dynamic_range` | "Last 7 days" for breaking news, "Last 30 days" for archives |
| **Order by** | `post_order` | Random, comment count, date, meta value, menu order |
| **Disable pagination** | `pagination` | Performance: homepage sections don't need pagination |
| **Enable caching** | `enable_caching` | 1-hour transient cache for homepage queries |

---

## 3. Article Deduplication Strategy

### The Problem

The homepage has 10+ query-driven sections (Hero, Feature Grid, Nuus, Sport, Skole, Lewenstyl, Dink, Multimedia, Obituaries, Events, Archive). Without deduplication, the same popular article could appear in the Hero carousel AND in the Nuus category section AND in the Feature Grid.

### The Solution: Custom AQL Extension

AQL's `aql_query_vars` filter allows us to build a page-level deduplication tracker. This is implemented as a small mu-plugin or as part of the `die-papier-blocks` plugin.

#### PHP Implementation

```php
<?php
/**
 * AQL Extension: Page-Level Article Deduplication
 *
 * Tracks displayed post IDs across all AQL queries on a single page render.
 * Each subsequent AQL query automatically excludes posts already shown.
 *
 * Enable per-query by adding the attribute: "deduplication": true
 * in the AQL block's query object.
 */

namespace DiePapier\AQL;

// Static tracker for displayed post IDs (persists across multiple queries on same page load)
class Deduplication_Tracker {
    private static array $displayed_ids = [];

    public static function add_ids( array $ids ): void {
        self::$displayed_ids = array_unique( array_merge( self::$displayed_ids, $ids ) );
    }

    public static function get_ids(): array {
        return self::$displayed_ids;
    }

    public static function reset(): void {
        self::$displayed_ids = [];
    }
}

/**
 * Filter AQL queries to exclude already-displayed posts.
 */
add_filter( 'aql_query_vars', function ( $query_args, $block_query, $inherited ) {
    // Only apply if deduplication is enabled for this query
    if ( empty( $block_query['deduplication'] ) ) {
        return $query_args;
    }

    // Get already-displayed IDs
    $displayed = Deduplication_Tracker::get_ids();

    if ( ! empty( $displayed ) ) {
        // Merge with any existing post__not_in
        $existing_exclude = $query_args['post__not_in'] ?? [];
        $query_args['post__not_in'] = array_unique( array_merge( $existing_exclude, $displayed ) );
    }

    return $query_args;
}, 10, 3 );

/**
 * After each AQL query renders, track the post IDs that were displayed.
 */
add_filter( 'the_posts', function ( $posts, $query ) {
    // Only track AQL queries with deduplication enabled
    if ( ! empty( $query->query['is_aql'] ) && ! empty( $query->query['deduplication'] ) ) {
        $ids = wp_list_pluck( $posts, 'ID' );
        Deduplication_Tracker::add_ids( $ids );
    }
    return $posts;
}, 10, 2 );

/**
 * Reset tracker on each new page load (safety measure).
 */
add_action( 'wp', [ Deduplication_Tracker::class, 'reset' ] );
```

#### How It Works

1. The homepage template renders sections top-to-bottom
2. The Hero section's AQL query runs first → displays 5 posts → adds IDs to tracker
3. The Feature Grid section's AQL query runs → tracker automatically excludes the 5 hero post IDs → displays 7 different posts → adds those 7 IDs to tracker
4. The Nuus category section runs → excludes all 12 previously displayed IDs → shows fresh Nuus articles
5. And so on for every section

#### Enabling in Patterns

In pattern markup, add `"deduplication":true` to the AQL query attributes:

```html
<!-- wp:query {"queryId":1,"query":{"perPage":5,"postType":"post","namespace":"advanced-query-loop","deduplication":true},"namespace":"advanced-query-loop"} -->
```

---

## 4. Homepage Section AQL Configurations

| Section | Post Type | Category/Tax | perPage | Order | Dedup | Cache |
|:---|:---|:---|:---|:---|:---|:---|
| Hero Slider | `post` | — (latest) | 5 | Date DESC | Yes (first) | Yes |
| Feature Grid | `post` | — (latest) | 7 | Date DESC | Yes | Yes |
| Nuus | `post` | `category: nuus` | 4 | Date DESC | Yes | Yes |
| Sport | `post` | `category: sport` | 4 | Date DESC | Yes | Yes |
| Skole | `post` | `category: skole` | 4 | Date DESC | Yes | Yes |
| Lewenstyl | `post` | `category: lewenstyl` | 3 | Date DESC | Yes | Yes |
| Dink | `post` | `category: dink` | 4 | Date DESC | Yes | Yes |
| Multimedia | `dp_multimedia` | — | 6 | Date DESC | No | Yes |
| Obituaries | `dp_obituary` | — | 4 | Date DESC | No | Yes |
| Events | `dp_event` | — | 4 | `meta_value_num` (event_date) | No | Yes |
| Archive | `post` | — | 8 | Date DESC | Yes | Yes |

---

## 5. Extending AQL (SlotFills)

AQL exposes its extensibility via `window.aql`:

```js
const { AQLControls, AQLControlsInheritedQuery } = window.aql;
```

If Die Papier needs a custom editor control (e.g., a "Deduplication" toggle), it can be added as an AQL extension plugin:

```js
import { registerPlugin } from '@wordpress/plugins';
import { ToggleControl } from '@wordpress/components';

const DeduplicationControl = ({ attributes, setAttributes }) => {
    const { query: { deduplication = false } = {} } = attributes;
    return (
        <ToggleControl
            label="Deduplicate articles"
            help="Exclude articles already shown in previous sections on this page"
            checked={deduplication}
            onChange={() => {
                setAttributes({
                    query: { ...attributes.query, deduplication: !deduplication },
                });
            }}
        />
    );
};

registerPlugin('dp-aql-dedup', {
    render: () => (
        <>
            <window.aql.AQLControls>
                {(props) => <DeduplicationControl {...props} />}
            </window.aql.AQLControls>
        </>
    ),
});
```

---

## 6. Performance Notes

- **Disable pagination** on all homepage section queries (they're fixed-count, not paginated)
- **Enable caching** on all homepage section queries (1-hour transient cache reduces DB load)
- The deduplication tracker adds negligible overhead (array merge of ~50 IDs across 10 queries)
- AQL queries work with both the REST API (editor preview) and `WP_Query` (frontend)

---

## 7. Relationship to Other Plugins

| Plugin | Relationship to AQL |
|:---|:---|
| Advanced Ads | Ad placements sit *between* AQL query sections — they don't use AQL |
| Gravity Forms | Poll widget and newsletter CTA sit in sidebar — they don't use AQL |
| Yoast SEO | FAQ sections are static patterns — they don't use AQL |
| WooCommerce | E-edition queries could use AQL if archive filtering is needed |

---

## 8. AQL in Archive & Content Patterns

> **Added 2026-02-27** — Based on template DRY audit (`/reports/template-dry-aql-audit.md`).

### 8.1 Query Loop Patterns Strategy

**Principle**: All query loops should live in patterns, not inline in templates. Templates reference patterns via `<!-- wp:pattern {"slug":"..."} /-->`. This enables:

- **DRY**: One query loop definition shared across templates
- **Maintainability**: Edit the pattern, all templates update
- **Editor UX**: Patterns appear in the pattern inserter
- **AQL integration**: Easier to upgrade standard queries to AQL

### 8.2 Patterns Using AQL

| Pattern | Post Type | AQL Features Used | Notes |
|:---|:---|:---|:---|
| `page-home.php` sections | `post`, CPTs | Taxonomy queries, deduplication, caching, disable pagination | 10+ sections |
| `section-related-articles.php` | `post` | `exclude_current`, `enable_caching` | **Planned** — upgrade from core/query |
| `section-sponsor-articles.php` | `post` | `exclude_current`, `enable_caching` | **Planned** — extract from single-dp_sponsor |
| `archive-events.php` | `dp_event` | Meta query ordering by `event_date`, date query (future events) | **Planned** |
| `archive-obituaries.php` | `dp_obituary` | Meta query ordering by `death_date` DESC | **Planned** |
| `archive-competitions.php` | `dp_competition` | Meta query filter (`status = active`) | **Planned** |
| `archive-eeditions.php` | `dp_eedition` | Meta query ordering by `issue_date` DESC | **Planned** |

### 8.3 AQL Block Markup for Archive Patterns

Standard `core/query` with AQL namespace:

```html
<!-- Events archive: upcoming events first, ordered by event_date -->
<!-- wp:query {"queryId":1,"query":{"perPage":12,"postType":"dp_event","inherit":false,"namespace":"advanced-query-loop","meta_query":{"relation":"AND","queries":[{"meta_key":"event_date","meta_value":"","meta_compare":">=","meta_type":"DATE"}]},"orderBy":"meta_value","order":"asc","enable_caching":true},"namespace":"advanced-query-loop"} -->
```

### 8.4 AQL vs Standard core/query Decision Tree

Use **AQL** when the query needs ANY of:
- Exclude current post
- Taxonomy filtering beyond what `inherit:true` provides
- Meta query (custom field filtering/ordering)
- Date query (relative dates, before/after)
- Multiple post types in one query
- Transient caching
- Deduplication (homepage)

Use **standard core/query** when:
- Simple inherited archive query (`inherit: true`)
- No custom ordering or filtering needed
- The standard WordPress template hierarchy provides the correct query

---

## 9. Plugin Version & Compatibility

| Property | Value |
|:---|:---|
| Plugin version | 4.4.0 |
| Requires WP | 6.2+ |
| Tested up to | 6.9 |
| Requires PHP | 7.4+ |
| GitHub | https://github.com/ryanwelcher/advanced-query-loop |
| WP.org | https://wordpress.org/plugins/advanced-query-loop/ |

---

## 10. AQL Block Attributes Reference

**Block Namespace**: `core/query` (with `"namespace":"advanced-query-loop"` attribute)

**Complete Attribute Structure** (Homepage Hero Example):

```json
{
  "queryId": 1,
  "query": {
    "perPage": 5,
    "postType": "post",
    "inherit": false,
    "namespace": "advanced-query-loop",
    "orderBy": "date",
    "order": "desc",
    "deduplication": true,
    "enable_caching": true,
    "cache_time": 3600,
    "pagination": false
  },
  "namespace": "advanced-query-loop"
}
```

**Key Attribute Definitions**:

| Attribute | Type | Description | Example Value |
|:---|:---|:---|:---|
| `queryId` | number | Unique ID for this query instance | `1`, `2`, `3`, etc. |
| `query.perPage` | number | Number of posts to display | `5`, `12`, etc. |
| `query.postType` | string | Post type to query | `"post"`, `"dp_event"`, etc. |
| `query.inherit` | boolean | Whether to inherit query from template context | `false` (homepage sections), `true` (archives) |
| `query.namespace` | string | AQL namespace identifier | `"advanced-query-loop"` |
| `query.orderBy` | string | Order posts by field | `"date"`, `"meta_value"`, `"title"`, `"rand"` |
| `query.order` | string | Sort direction | `"desc"`, `"asc"` |
| `query.deduplication` | boolean | **Custom** — Enable Die Papier deduplication | `true` |
| `query.enable_caching` | boolean | Enable AQL transient caching | `true` |
| `query.cache_time` | number | Cache duration in seconds | `3600` (1 hour) |
| `query.pagination` | boolean | Enable pagination controls | `false` (homepage), `true` (archives) |
| `query.taxonomy_query_builder` | object | Taxonomy filter configuration | See below |
| `query.post_meta_query` | object | Meta query configuration | See below |
| `query.date_query_dynamic_range` | string | Relative date filtering | `"last_7_days"`, `"last_30_days"` |
| `query.exclude_current_post` | boolean | Exclude current post (single templates) | `true` |
| `query.exclude_posts` | array | Manual post exclusion list | `[1, 2, 3]` |

---

## 11. Complete Homepage Section Examples

### Example 1: Hero Slider

**Pattern**: `die-papier/homepage-hero`

**Configuration**: Latest 5 articles, any category, with deduplication and caching

**Block Markup**:
```html
<!-- wp:query {
  "queryId":1,
  "query":{
    "perPage":5,
    "postType":"post",
    "inherit":false,
    "namespace":"advanced-query-loop",
    "orderBy":"date",
    "order":"desc",
    "deduplication":true,
    "enable_caching":true,
    "cache_time":3600,
    "pagination":false
  },
  "namespace":"advanced-query-loop"
} -->
<div class="wp-block-query">
  <!-- wp:post-template {"layout":{"type":"default","columnCount":1}} -->
    <!-- Card markup here -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
```

---

### Example 2: Sport Section (Taxonomy Filter)

**Pattern**: `die-papier/homepage-sport`

**Configuration**: Latest 4 Sport articles, with category taxonomy filter

**Block Markup**:
```html
<!-- wp:query {
  "queryId":3,
  "query":{
    "perPage":4,
    "postType":"post",
    "inherit":false,
    "namespace":"advanced-query-loop",
    "orderBy":"date",
    "order":"desc",
    "deduplication":true,
    "enable_caching":true,
    "cache_time":3600,
    "pagination":false,
    "taxonomy_query_builder":{
      "relation":"AND",
      "queries":[
        {
          "taxonomy":"category",
          "terms":["sport"],
          "field":"slug",
          "operator":"IN",
          "include_children":true
        }
      ]
    }
  },
  "namespace":"advanced-query-loop"
} -->
<div class="wp-block-query">
  <!-- wp:post-template -->
    <!-- Card markup here -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
```

---

### Example 3: Events Section (Meta Query Ordering)

**Pattern**: `die-papier/homepage-events`

**Configuration**: Next 4 upcoming events, ordered by `event_date` custom field

**Block Markup**:
```html
<!-- wp:query {
  "queryId":10,
  "query":{
    "perPage":4,
    "postType":"dp_event",
    "inherit":false,
    "namespace":"advanced-query-loop",
    "orderBy":"meta_value",
    "order":"asc",
    "meta_key":"event_date",
    "meta_type":"DATE",
    "enable_caching":true,
    "cache_time":3600,
    "pagination":false,
    "post_meta_query":{
      "relation":"AND",
      "queries":[
        {
          "meta_key":"event_date",
          "meta_value":"",
          "meta_compare":">=",
          "meta_type":"DATE"
        }
      ]
    }
  },
  "namespace":"advanced-query-loop"
} -->
<div class="wp-block-query">
  <!-- wp:post-template -->
    <!-- Event card markup here -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
```

**Note**: Meta query filters out past events (event_date >= today), then orders ascending by date (soonest first).

---

### Example 4: Related Articles (Exclude Current Post)

**Pattern**: `die-papier/section-related-articles`

**Configuration**: 4 related articles from same category, excluding current post

**Block Markup**:
```html
<!-- wp:query {
  "queryId":1,
  "query":{
    "perPage":4,
    "postType":"post",
    "inherit":true,
    "namespace":"advanced-query-loop",
    "orderBy":"date",
    "order":"desc",
    "exclude_current_post":true,
    "enable_caching":true,
    "cache_time":3600,
    "pagination":false
  },
  "namespace":"advanced-query-loop"
} -->
<div class="wp-block-query">
  <!-- wp:post-template -->
    <!-- Card markup here -->
  <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
```

**Note**: `"inherit":true` means the query inherits taxonomy context from the current post (same category). `exclude_current_post` removes the current article from results.

---

## 12. Cross-References

**Audit Report**: `/reports/audits/aql-homepage-integration-audit.md`  
**Task List**: `/tasks/third-party-blocks-integration-task-list.md` (Phase 2.6, Phase 3.1)  
**Homepage Patterns**: `/guidelines/components/patterns/homepage.md`  
**Archive Patterns**: `/guidelines/components/patterns/archives.md`

---

**End of Document**