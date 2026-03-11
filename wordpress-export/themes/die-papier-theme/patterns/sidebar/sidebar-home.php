<?php
/**
 * Title: Tuisblad Sybalk
 * Slug: die-papier/sidebar-home
 * Categories: die-papier-sidebars
 * Description: Homepage sidebar with e-edition promo, top ad, poll, middle ad, competition card, delivery CTA, and bottom ad.
 * Inserter: false
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */
?>

<!-- wp:group {"tagName":"aside","className":"sidebar-home","layout":{"type":"default"}} -->
<aside class="wp-block-group sidebar-home">

    <!-- wp:pattern {"slug":"die-papier/sidebar-eedition-promo"} /-->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-home-top"} /-->

    <!-- wp:pattern {"slug":"die-papier/section-homepage-poll"} /-->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-home-middle"} /-->

    <!-- wp:pattern {"slug":"die-papier/sidebar-competition-card"} /-->

    <!-- wp:group {"backgroundColor":"primary","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group has-primary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
        <!-- wp:heading {"level":4,"textColor":"base"} -->
        <h4 class="wp-block-heading has-base-color has-text-color">Huisaflewering</h4>
        <!-- /wp:heading -->
        <!-- wp:paragraph {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|small"}}} -->
        <p class="has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--small)">Kry <em>Die Papier</em> elke Vrydag by jou voordeur afgelewer. Vanaf R140/maand.</p>
        <!-- /wp:paragraph -->
        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
            <!-- wp:button {"backgroundColor":"base","textColor":"primary","width":100,"className":"is-style-fill"} -->
            <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill"><a class="wp-block-button__link has-primary-color has-base-background-color has-text-color has-background wp-element-button" href="/inteken/aflewering">Teken in vir aflewering</a></div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-home-bottom"} /-->

</aside>
<!-- /wp:group -->
