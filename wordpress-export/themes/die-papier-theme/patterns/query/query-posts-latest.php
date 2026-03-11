<?php
/**
 * Title: Navraag: Jongste Artikels
 * Slug: die-papier/query-posts-latest
 * Categories: die-papier-queries
 * Keywords: query, navraag, latest, jongste, posts, artikels
 * Description: Latest posts query excluding sticky posts. Uses AQL with configurable per-page count. Displays posts using card-post-grid-3col pattern in a 3-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - sticky: exclude (prevents sticky posts from appearing)
 * - enable_caching: 1-hour transient cache for performance
 * - pagination: disabled (homepage sections don't need pagination)
 *
 * Used in: Homepage feature grid, category sections
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"exclude","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-posts-latest"} -->
<div class="wp-block-query dp-query-posts-latest">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-no-results -->
        <!-- wp:pattern {"slug":"die-papier/hidden-no-results"} /-->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->
