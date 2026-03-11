<?php
/**
 * Title: Kaart: Doodsberig Rooster
 * Slug: die-papier/card-obituary-grid
 * Categories: die-papier-cards
 * Keywords: card, kaart, obituary, doodsberig, grid, rooster
 * Description: Obituary grid card with round portrait image (120x120), centered title, obituary meta, and excerpt. Used inside wp:post-template for dp_obituary queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}}} -->
<div class="wp-block-group is-style-card">
    <!-- wp:post-featured-image {"isLink":true,"width":"120px","aspectRatio":"1","style":{"border":{"radius":"50%"},"layout":{"selfStretch":"fit"}}} /-->
    <!-- wp:post-title {"isLink":true,"textAlign":"center","fontSize":"medium"} /-->
    <!-- wp:pattern {"slug":"die-papier/card-obituary-meta"} /-->
    <!-- wp:post-excerpt {"textAlign":"center","excerptLength":15} /-->
</div>
<!-- /wp:group -->