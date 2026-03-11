<?php
/**
 * Title: Gebeure Argief
 * Slug: die-papier/archive-events
 * Categories: die-papier-archives
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - post_order: meta_value ordering by event_date ASC (upcoming events first)
 * - date_query: only show future events (after today)
 * - enable_caching: disabled (paginated archive)
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Gebeure</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Ontdek die jongste gebeure, feeste en byeenkomste in jou omgewing.</p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"layout":{"type":"flex","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small","margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
    <div class="wp-block-group">
        <!-- wp:dp/filter-bar {"filters":[],"showSearch":false} /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:query {"queryId":40,"query":{"perPage":3,"postType":"dp_event","orderBy":"meta_value","order":"asc","inherit":false,"namespace":"advanced-query-loop","meta_query":{"relation":"AND","queries":[{"meta_key":"event_date","meta_value":"","meta_compare":">=","meta_type":"DATE"}]}},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-event-grid"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-no-results -->
        <p>Geen komende gebeure nie. Kyk later weer!</p>
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

    <!-- wp:advads/gblock {"itemID":"dp-archive-in-feed","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:query {"queryId":401,"query":{"perPage":9,"offset":3,"postType":"dp_event","orderBy":"meta_value","order":"asc","inherit":false,"namespace":"advanced-query-loop","meta_query":{"relation":"AND","queries":[{"meta_key":"event_date","meta_value":"","meta_compare":">=","meta_type":"DATE"}]}},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-event-grid"} /-->
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

    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta-full"} /-->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->