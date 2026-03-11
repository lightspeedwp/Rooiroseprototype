<?php
/**
 * Title: Kaart: Pos Rooster (2 Kolomme)
 * Slug: die-papier/card-post-grid-2col
 * Categories: die-papier-cards
 * Keywords: card, kaart, post, grid, rooster, 2col
 * Description: 2-column optimized post grid card with featured image, title, compact meta, and excerpt. Used inside wp:post-template with 2-column grid layout.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card" style="padding-top:0;padding-bottom:var(--wp--preset--spacing--small);padding-left:0;padding-right:0">
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","style":{"border":{"radius":{"topLeft":"var:preset|spacing|x-small","topRight":"var:preset|spacing|x-small"}}}} /-->

    <div style="padding: 0 var(--wp--preset--spacing--small);">
        <!-- wp:post-title {"level":3,"isLink":true,"fontSize":"heading-4","style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small"}}}} /-->
        <!-- wp:pattern {"slug":"die-papier/section-post-meta-compact"} /-->
        <!-- wp:post-excerpt {"moreText":"","excerptLength":20,"fontSize":"small","textColor":"main-accent"} /-->
    </div>
</div>
<!-- /wp:group -->