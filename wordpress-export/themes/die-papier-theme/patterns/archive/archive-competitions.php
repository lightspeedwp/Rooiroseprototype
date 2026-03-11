<?php
/**
 * Title: Kompetisies Argief
 * Slug: die-papier/archive-competitions
 * Categories: die-papier-archives
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - post_order: date DESC (newest first)
 * - Ready for meta_query filter (status=active) once SCF field is confirmed
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Kompetisies</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Neem deel aan ons jongste kompetisies en wen fantastiese pryse!</p>
    <!-- /wp:paragraph -->

    <!-- wp:query {"queryId":43,"query":{"perPage":3,"postType":"dp_competition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-competition-grid"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-no-results -->
        <p>Daar is tans geen aktiewe kompetisies nie. Kyk later weer!</p>
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

    <!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":431,"query":{"perPage":6,"offset":3,"postType":"dp_competition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-competition-grid"} /-->
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

    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->