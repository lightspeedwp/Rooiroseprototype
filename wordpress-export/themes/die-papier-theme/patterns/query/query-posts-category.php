<?php
/**
 * Title: Navraag: Artikels per Kategorie
 * Slug: die-papier/query-posts-category
 * Categories: die-papier-queries
 * Keywords: query, navraag, category, kategorie, posts, artikels
 * Description: Posts from a specific category. Uses AQL with taxonomy filter. Displays posts using card-post-grid-3col in a 3-column grid. Category must be configured per-instance in the block editor.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - taxQuery: category filter (configured in editor per instance)
 * - sticky: exclude
 * - pagination: disabled (section widget)
 * - enable_caching: 1-hour transient cache
 *
 * Used in: Homepage category sections (Nuus, Sport, Skole, Lewenstyl, Dink)
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","taxQuery":{"category":[]},"sticky":"exclude","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-posts-category"} -->
<div class="wp-block-query dp-query-posts-category">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
