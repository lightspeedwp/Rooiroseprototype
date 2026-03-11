<?php
/**
 * Title: Kaart: Gebeurtenis Rooster
 * Slug: die-papier/card-event-grid
 * Categories: die-papier-cards
 * Keywords: card, kaart, event, gebeurtenis, grid, rooster
 * Description: Event grid card with featured image, event meta, and title. Used inside wp:post-template for dp_event queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card-hover","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card-hover">
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"8px 8px 0 0"}}} /-->
    <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}}} -->
    <div class="wp-block-group">
        <!-- wp:pattern {"slug":"die-papier/card-event-meta"} /-->
        <!-- wp:post-title {"isLink":true,"fontSize":"medium"} /-->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
