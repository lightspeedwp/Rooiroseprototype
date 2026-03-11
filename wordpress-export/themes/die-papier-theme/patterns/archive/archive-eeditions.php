<?php
/**
 * Title: E-Uitgawes Argief
 * Slug: die-papier/archive-eeditions
 * Categories: die-papier-archives
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - post_order: date DESC (latest issues first)
 * - Ready for meta_value ordering by issue_date once SCF field is confirmed
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"},"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1} -->
    <h1 class="wp-block-heading">E-Uitgawes</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Blaai deur ons elektroniese uitgawes. Intekenare het toegang tot alle uitgawes vanaf hul intekeningdatum.</p>
    <!-- /wp:paragraph -->

    <!-- wp:advads/gblock {"itemID":"dp-eedition-archive-leaderboard","align":"center"} /-->

    <!-- wp:query {"queryId":44,"query":{"perPage":4,"postType":"dp_eedition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            <!-- wp:pattern {"slug":"die-papier/card-eedition-grid-4col"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-no-results -->
        <p>Geen e-uitgawes gevind nie.</p>
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

    <!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":441,"query":{"perPage":8,"offset":4,"postType":"dp_eedition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            <!-- wp:pattern {"slug":"die-papier/card-eedition-grid-4col"} /-->
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

    <!-- wp:pattern {\"slug\":\"die-papier/section-newsletter-cta-full\"} /-->

</div>
<!-- /wp:group -->