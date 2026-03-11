<?php
/**
 * Title: Navraag: Verwante Artikels
 * Slug: die-papier/query-posts-related
 * Categories: die-papier-queries
 * Keywords: query, navraag, related, verwante, artikels
 * Description: Related posts query that excludes the current post. Uses AQL with exclude_current and caching. Displays 3 related posts in a grid using card-post-grid-3col.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - exclude_current_post: true (prevents current article from appearing in its own related list)
 * - enable_caching: 1-hour transient cache for performance
 * - pagination: disabled
 *
 * Used in: Single post templates (below article content)
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-group">
    <!-- wp:heading {"level":3} -->
    <h3 class="wp-block-heading">Verwante Artikels</h3>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":0,"query":{"perPage":3,"postType":"post","inherit":false,"namespace":"advanced-query-loop","exclude_current_post":true,"enable_caching":true},"namespace":"advanced-query-loop","className":"dp-query-posts-related"} -->
    <div class="wp-block-query dp-query-posts-related">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->