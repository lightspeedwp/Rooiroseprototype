<?php
/**
 * Title: Homepage: Topstories
 * Slug: die-papier/homepage-top-stories
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"className":"is-style-section-white","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-section-white">
    <!-- wp:query {"queryId":2,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"exclude","inherit":false},"className":"is-style-feature-grid"} -->
    <div class="wp-block-query is-style-feature-grid">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:group {"className":"is-style-card","layout":{"type":"default"}} -->
            <div class="wp-block-group is-style-card">
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
                <!-- wp:post-terms {"term":"category","style":{"typography":{"textTransform":"uppercase","letterSpacing":"1px","fontSize":"var:preset|font-size|x-small","fontWeight":"700"}},"textColor":"primary"} /-->
                <!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"var:preset|font-size|medium"}}} /-->
                <!-- wp:post-date {"style":{"typography":{"fontSize":"var:preset|font-size|small"}},"textColor":"main-accent"} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->