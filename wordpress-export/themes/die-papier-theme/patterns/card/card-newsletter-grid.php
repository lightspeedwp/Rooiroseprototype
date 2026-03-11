<?php
/**
 * Title: Kaart: Nuusbrief Rooster
 * Slug: die-papier/card-newsletter-grid
 * Categories: die-papier-cards
 * Keywords: card, kaart, newsletter, nuusbrief, grid, rooster
 * Description: Newsletter grid card with title (h4), date, and excerpt with read more link. Used inside wp:post-template for newsletter queries.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card"} -->
<div class="wp-block-group is-style-card">
    <!-- wp:post-title {"isLink":true,"level":4} /-->
    <!-- wp:post-date {"format":"j F Y"} /-->
    <!-- wp:post-excerpt {"moreText":"Lees meer →","excerptLength":20} /-->
</div>
<!-- /wp:group -->
