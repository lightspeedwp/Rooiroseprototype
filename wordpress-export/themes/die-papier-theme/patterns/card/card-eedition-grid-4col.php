<?php
/**
 * Title: Kaart: E-Uitgawe Rooster (4 Kolomme)
 * Slug: die-papier/card-eedition-grid-4col
 * Categories: die-papier-cards
 * Keywords: card, kaart, eedition, e-uitgawe, grid, rooster
 * Description: E-edition grid card with cover image (3/4 ratio), centered title, and date. Used inside wp:post-template for dp_eedition queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card-hover","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card-hover">
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/4","style":{"border":{"radius":"8px 8px 0 0"}}} /-->
    <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}}} -->
    <div class="wp-block-group">
        <!-- wp:post-title {"isLink":true,"textAlign":"center","fontSize":"small"} /-->
        <!-- wp:post-date {"textAlign":"center","format":"j F Y","fontSize":"small"} /-->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->
