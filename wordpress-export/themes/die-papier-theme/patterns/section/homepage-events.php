<?php
/**
 * Title: Homepage: Gebeure
 * Slug: die-papier/homepage-events
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"align":"full","className":"is-style-section-white","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-group alignfull is-style-section-white" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
    <div class="wp-block-group alignwide">
        <!-- wp:heading {"level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-secondary-color has-text-color">Gebeure</h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p><a href="/gebeure"><strong>Alle gebeure →</strong></a></p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:query {"queryId":10,"query":{"perPage":3,"pages":0,"offset":0,"postType":"dp_event","order":"asc","orderBy":"meta_value","inherit":false},"align":"wide","className":"aql-events-upcoming"} -->
    <div class="wp-block-query alignwide aql-events-upcoming">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:group {"className":"is-style-card-hover","layout":{"type":"default"}} -->
            <div class="wp-block-group is-style-card-hover">
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
                <!-- wp:pattern {"slug":"die-papier/card-event-meta"} /-->
                <!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"var:preset|font-size|medium"}}} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->