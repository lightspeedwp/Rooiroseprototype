<?php
/**
 * Title: Kaart: Pos Lys
 * Slug: die-papier/card-post-list
 * Categories: die-papier-cards
 * Keywords: card, kaart, post, list, lys
 * Description: Horizontal list-style post card with image (200x140) and content column. Used inside wp:post-template with default layout.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"margin":{"bottom":"var:preset|spacing|medium"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}}} -->
<div class="wp-block-group is-style-card">
    <!-- wp:post-featured-image {"isLink":true,"width":"200px","height":"140px","style":{"border":{"radius":"var:preset|spacing|x-small"}},"className":"flex-shrink-0"} /-->

    <!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
    <div class="wp-block-group">
        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
        <div class="wp-block-group">
            <!-- wp:post-terms {"term":"category","className":"is-style-badge"} /-->
            <!-- wp:post-date {"format":"j M Y","fontSize":"x-small","textColor":"main-accent"} /-->
        </div>
        <!-- /wp:group -->

        <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"large"} /-->

        <!-- wp:post-excerpt {"moreText":"","excerptLength":20,"fontSize":"small","textColor":"main-accent"} /-->

        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
        <div class="wp-block-group">
            <!-- wp:post-author-name {"isLink":true,"fontSize":"x-small"} /-->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
