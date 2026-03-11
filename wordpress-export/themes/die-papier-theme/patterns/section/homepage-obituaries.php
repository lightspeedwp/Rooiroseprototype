<?php
/**
 * Title: Homepage: Sterftes
 * Slug: die-papier/homepage-obituaries
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"align":"full","className":"is-style-section-muted","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-group alignfull is-style-section-muted" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">
    <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
    <div class="wp-block-group alignwide">
        <!-- wp:heading {"level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-secondary-color has-text-color">Sterftes</h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p><a href="/sterftes"><strong>Alle sterftes →</strong></a></p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:query {"queryId":9,"query":{"perPage":4,"pages":0,"offset":0,"postType":"dp_obituary","order":"desc","orderBy":"date","inherit":false},"align":"wide","className":"aql-obituaries"} -->
    <div class="wp-block-query alignwide aql-obituaries">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            <!-- wp:group {"className":"is-style-card","layout":{"type":"default"}} -->
            <div class="wp-block-group is-style-card">
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"1","width":"120px","height":"120px","style":{"border":{"radius":"50%"}}} /-->
                <!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"var:preset|font-size|medium"}}} /-->
                <!-- wp:pattern {"slug":"die-papier/card-obituary-meta"} /-->
                <!-- wp:post-excerpt {"excerptLength":15} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->