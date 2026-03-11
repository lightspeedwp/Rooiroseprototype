<?php
/**
 * Title: Homepage: Multimedia
 * Slug: die-papier/homepage-multimedia
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"align":"full","className":"is-style-section-white","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-group alignfull is-style-section-white" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
    <div class="wp-block-group alignwide">
        <!-- wp:heading {"level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-secondary-color has-text-color">Multimedia</h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p><a href="/multimedia"><strong>Alle multimedia →</strong></a></p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:query {"queryId":8,"query":{"perPage":4,"pages":0,"offset":0,"postType":"dp_multimedia","order":"desc","orderBy":"date","inherit":false},"align":"wide","className":"aql-multimedia"} -->
    <div class="wp-block-query alignwide aql-multimedia">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            <!-- wp:group {"className":"is-style-card-hover","layout":{"type":"default"}} -->
            <div class="wp-block-group is-style-card-hover">
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
                <!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"var:preset|font-size|medium"}}} /-->
                <!-- wp:post-date {"style":{"typography":{"fontSize":"var:preset|font-size|small"}},"textColor":"main-accent"} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->