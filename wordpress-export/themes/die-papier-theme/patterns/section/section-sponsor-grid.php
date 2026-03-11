<?php
/**
 * Title: Borg Rooster
 * Slug: die-papier/section-sponsor-grid
 * Categories: die-papier-sections
 * Keywords: sponsor, borg, grid, rooster
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Ons Borge</h2>
    <!-- /wp:heading -->

    <!-- wp:heading {"textAlign":"center","level":4,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <h4 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--medium)">Hoofborge</h4>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":30,"query":{"perPage":6,"pages":0,"offset":0,"postType":"dp_sponsor","order":"asc","orderBy":"title","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":{"dp_sponsor_tier":["hoof"]}},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
                <!-- wp:post-featured-image {"isLink":true,"height":"80px","sizeSlug":"medium","style":{"layout":{"selfStretch":"fit"}}} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

    <!-- wp:heading {"textAlign":"center","level":4,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <h4 class="wp-block-heading has-text-align-center" style="margin-top:var(--wp--preset--spacing--medium)">Vennote</h4>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":31,"query":{"perPage":12,"pages":0,"offset":0,"postType":"dp_sponsor","order":"asc","orderBy":"title","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":{"dp_sponsor_tier":["vennoot"]}},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":6}} -->
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small)">
                <!-- wp:post-featured-image {"isLink":true,"height":"50px","sizeSlug":"thumbnail","style":{"layout":{"selfStretch":"fit"}}} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->