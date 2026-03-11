<?php
/**
 * Title: Kaart: Kompetisie Rooster
 * Slug: die-papier/card-competition-grid
 * Categories: die-papier-cards
 * Keywords: card, kaart, competition, kompetisie, grid, rooster
 * Description: Competition grid card with featured image, badge, title, and competition meta. Used inside wp:post-template for dp_competition queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card-hover","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card-hover">
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":"8px 8px 0 0"}}} /-->
    <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}}} -->
    <div class="wp-block-group">
        <!-- wp:dp/competition-badge /-->
        <!-- wp:post-title {"isLink":true,"fontSize":"medium"} /-->
        <!-- wp:pattern {"slug":"die-papier/card-competition-meta"} /-->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
