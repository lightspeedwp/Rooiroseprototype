<?php
/**
 * Title: Navraag: Vasgesteekte Artikels
 * Slug: die-papier/query-posts-sticky
 * Categories: die-papier-queries
 * Keywords: query, navraag, sticky, vasgesteek, featured, voorblad
 * Description: Sticky/featured posts only query. Uses AQL. Displays posts using card-post-featured-hero pattern in hero slider format.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - sticky: only (only show sticky/featured posts)
 * - pagination: disabled
 * - enable_caching: 1-hour transient cache
 *
 * Used in: Homepage hero slider
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":5,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"only","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","align":"full","className":"is-style-hero-slider dp-query-posts-sticky","enhancedPagination":false} -->
<div class="wp-block-query alignfull is-style-hero-slider dp-query-posts-sticky">
    <!-- wp:post-template {"layout":{"type":"default"}} -->
        <!-- wp:pattern {"slug":"die-papier/card-post-featured-hero"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->
