<?php
/**
 * Title: Verwante Artikels
 * Slug: die-papier/section-related-articles
 * Categories: die-papier-sections
 * Keywords: related, verwante, artikels
 *
 * Uses AQL (Advanced Query Loop) for:
 * - exclude_current: prevents the current article from appearing in its own "related" list
 * - enable_caching: 1-hour transient cache for performance
 */
?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">
    <!-- wp:heading {"level":3,"className":"wp-block-heading"} -->
    <h3 class="wp-block-heading">Verwante Artikels</h3>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":20,"query":{"perPage":3,"postType":"post","inherit":false,"namespace":"advanced-query-loop","exclude_current":true,"enable_caching":true},"namespace":"advanced-query-loop","className":"dp-related-articles"} -->
    <div class="wp-block-query dp-related-articles">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--medium)">
    <!-- wp:advads/gblock {"itemID":"dp-post-footer-mrec","align":"center"} /-->
</div>
<!-- /wp:group -->