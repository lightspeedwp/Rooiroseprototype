<?php
/**
 * Title: Homepage: Nuus
 * Slug: die-papier/homepage-nuus
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"className":"is-style-section-white","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-section-white">
    <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"level":2,"textColor":"secondary"} -->
        <h2 class="wp-block-heading has-secondary-color has-text-color">Nuus</h2>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p><a href="/nuus"><strong>Alle nuus →</strong></a></p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
    <!-- wp:query {"queryId":3,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","taxQuery":{"category":[]},"sticky":"exclude","inherit":false},"className":"aql-category-nuus"} -->
    <div class="wp-block-query aql-category-nuus">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:group {"className":"is-style-card","layout":{"type":"default"}} -->
            <div class="wp-block-group is-style-card">
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