<?php
/**
 * Title: Homepage: Nuusflitse
 * Slug: die-papier/homepage-nuusflitse
 * Categories: die-papier-sections
 */
?>
<!-- wp:group {"className":"is-style-section-navy","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-section-navy">
    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <div class="wp-block-group">
        <!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontWeight":"700"}},"textColor":"base"} -->
        <p class="has-base-color has-text-color" style="font-weight:700;text-transform:uppercase">Nuusflitse:</p>
        <!-- /wp:paragraph -->
        <!-- wp:query {"query":{"perPage":3,"postType":"post","categoryName":"nuusflitse","order":"desc","orderBy":"date","inherit":false}} -->
        <div class="wp-block-query">
            <!-- wp:post-template {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
                <!-- wp:post-title {"isLink":true,"style":{"typography":{"fontSize":"var:preset|font-size|small"}},"textColor":"base"} /-->
            <!-- /wp:post-template -->
        </div>
        <!-- /wp:query -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->