<?php
/**
 * Title: Multimedia Argief
 * Slug: die-papier/archive-multimedia
 * Categories: die-papier-archives
 * Inserter: false
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Multimedia</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Video's, podcasts, fotogalerye en meer van Die Papier.</p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small","margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
    <div class="wp-block-group">
        <!-- wp:button {"className":"is-style-soft","fontSize":"small"} -->
        <div class="wp-block-button is-style-soft has-small-font-size"><a class="wp-block-button__link" href="/multimedia">Alles</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline","fontSize":"small"} -->
        <div class="wp-block-button is-style-outline has-small-font-size"><a class="wp-block-button__link" href="?filter=videos">Video's</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline","fontSize":"small"} -->
        <div class="wp-block-button is-style-outline has-small-font-size"><a class="wp-block-button__link" href="?filter=podcasts">Podcasts</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline","fontSize":"small"} -->
        <div class="wp-block-button is-style-outline has-small-font-size"><a class="wp-block-button__link" href="?filter=galleries">Fotogalerye</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:group -->

    <!-- wp:query {"queryId":42,"query":{"perPage":3,"postType":"dp_multimedia","orderby":"date","order":"desc","namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","enhancedPagination":true} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-multimedia-grid"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-no-results -->
        <p>Geen multimedia-items gevind nie.</p>
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

    <!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":421,"query":{"perPage":9,"offset":3,"postType":"dp_multimedia","orderby":"date","order":"desc","namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","enhancedPagination":true} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-multimedia-grid"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
        <!-- wp:query-pagination-previous /-->
        <!-- wp:query-pagination-numbers /-->
        <!-- wp:query-pagination-next /-->
        <!-- /wp:query-pagination -->

        <!-- wp:query-no-results -->
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->