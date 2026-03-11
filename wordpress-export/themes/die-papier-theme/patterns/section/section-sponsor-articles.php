<?php
/**
 * Title: Borg Artikels
 * Slug: die-papier/section-sponsor-articles
 * Categories: die-papier-sections
 * Keywords: sponsor, borg, artikels, articles
 * Block Types: core/query
 * Inserter: false
 */
?>

<!-- wp:separator {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<hr class="wp-block-separator alignwide"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":2,"className":"wp-block-heading"} -->
<h2 class="wp-block-heading">Artikels deur hierdie borg</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":90,"query":{"perPage":6,"postType":"post","inherit":false,"namespace":"advanced-query-loop","exclude_current":true,"enable_caching":true},"namespace":"advanced-query-loop","align":"wide"} -->
<div class="wp-block-query alignwide">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:group {"className":"is-style-card-hover","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|small","left":"0","right":"0"}}}} -->
        <div class="wp-block-group is-style-card-hover" style="padding-top:0;padding-bottom:var(--wp--preset--spacing--small);padding-left:0;padding-right:0">
            <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":{"topLeft":"var:preset|spacing|x-small","topRight":"var:preset|spacing|x-small"}}}} /-->

            <div style="padding: 0 var(--wp--preset--spacing--small);">
                <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"heading-4","style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small"}}}} /-->
                <!-- wp:post-date {"format":"j M Y","fontSize":"x-small","textColor":"main-accent"} /-->
            </div>
        </div>
        <!-- /wp:group -->
    <!-- /wp:post-template -->

    <!-- wp:query-no-results -->
        <!-- wp:paragraph {"textColor":"main-accent","fontSize":"small"} -->
        <p class="has-main-accent-color has-text-color has-small-font-size">Geen artikels deur hierdie borg gevind nie.</p>
        <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->