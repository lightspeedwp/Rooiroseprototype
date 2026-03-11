<?php
/**
 * Title: Kaart: Multimedia Rooster
 * Slug: die-papier/card-multimedia-grid
 * Categories: die-papier-cards
 * Keywords: card, kaart, multimedia, grid, rooster, video, podcast
 * Description: Multimedia grid card with featured image, category terms, title, and date. Used inside wp:post-template for dp_multimedia queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card-hover","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card-hover">
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"8px 8px 0 0"}}} /-->
    <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}}} -->
    <div class="wp-block-group">
        <!-- wp:post-terms {"term":"dp_multimedia_category","fontSize":"small"} /-->
        <!-- wp:post-title {"isLink":true,"fontSize":"medium"} /-->
        <!-- wp:post-date {"fontSize":"small"} /-->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
