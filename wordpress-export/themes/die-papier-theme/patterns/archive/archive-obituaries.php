<?php
/**
 * Title: Doodsberrigte Argief
 * Slug: die-papier/archive-obituaries
 * Categories: die-papier-archives
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - post_order: date DESC (most recent first)
 * - Ready for meta_value ordering by death_date once SCF field is confirmed
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Doodsberrigte</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>In liefdevolle herinnering aan geliefdes wat ons ontval het.</p>
    <!-- /wp:paragraph -->

    <!-- wp:search {"label":"Soek doodsberrigte","showLabel":false,"placeholder":"Soek na 'n naam...","buttonText":"Soek","width":50,"widthUnit":"%","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":41,"query":{"perPage":3,"postType":"dp_obituary","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-obituary-grid"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-no-results -->
        <p>Geen doodsberrigte gevind nie.</p>
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

    <!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":411,"query":{"perPage":9,"offset":3,"postType":"dp_obituary","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-obituary-grid"} /-->
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