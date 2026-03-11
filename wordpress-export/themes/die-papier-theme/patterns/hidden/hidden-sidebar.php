<?php
/**
 * Title: Sidebar
 * Slug: die-papier/hidden-sidebar
 * Categories: die-papier-hidden, die-papier-sidebars
 * Inserter: no
 * Description: Default sidebar with e-edition promo, newsletter CTA, ads, competitions, and trending articles.
 *
 * Trending articles section uses AQL for:
 * - post_order: comment_count DESC (most engaged first)
 * - disable_pagination: true (sidebar widget, no pagination needed)
 * - enable_caching: true (1-hour transient cache for performance)
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"className":"dp-sidebar","style":{"spacing":{"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group dp-sidebar">

    <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->

    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-mrec"} /-->

    <!-- wp:pattern {"slug":"die-papier/sidebar-competition-card"} /-->

    <!-- wp:group {"className":"dp-sidebar-section"} -->
    <div class="wp-block-group dp-sidebar-section">
        <!-- wp:heading {"level":3,"fontSize":"medium"} -->
        <h3 class="wp-block-heading has-medium-font-size">Gewild</h3>
        <!-- /wp:heading -->

        <!-- wp:query {"queryId":10,"query":{"perPage":5,"postType":"post","orderBy":"comment_count","order":"desc","inherit":false,"namespace":"advanced-query-loop","disable_pagination":true,"enable_caching":true},"namespace":"advanced-query-loop"} -->
        <div class="wp-block-query">
            <!-- wp:post-template {"layout":{"type":"default"}} -->
                <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small","padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}}}} -->
                <div class="wp-block-group">
                    <!-- wp:post-featured-image {"isLink":true,"width":"80px","height":"60px","style":{"border":{"radius":"4px"}}} /-->
                    <!-- wp:post-title {"isLink":true,"fontSize":"small"} /-->
                </div>
                <!-- /wp:group -->
            <!-- /wp:post-template -->
        </div>
        <!-- /wp:query -->
    </div>
    <!-- /wp:group -->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-hpage"} /-->

    <!-- wp:dp/sponsor-banner /-->

    <!-- wp:group {"className":"dp-sidebar-section","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
    <div class="wp-block-group dp-sidebar-section">
        <!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->