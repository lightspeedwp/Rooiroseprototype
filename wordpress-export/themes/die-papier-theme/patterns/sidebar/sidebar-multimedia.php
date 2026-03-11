<?php
/**
 * Title: Multimedia Sybalk
 * Slug: die-papier/sidebar-multimedia
 * Categories: die-papier-sidebars
 * Keywords: sidebar, sybalk, multimedia, video, podcast
 * Description: Multimedia sidebar with latest items by type, submit CTA, categories, and newsletter signup.
 * Inserter: false
 *
 * Used in: Multimedia archives, single multimedia templates
 */
?>

<!-- wp:group {"backgroundColor":"primary","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"margin":{"bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-primary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:heading {"level":4,"textColor":"base"} -->
    <h4 class="wp-block-heading has-base-color has-text-color">Deel jou multimedia</h4>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|small"}}} -->
    <p class="has-base-color has-text-color" style="font-size:var(--wp--preset--font-size--small)">Het jy 'n video, podcast of fotogalery om te deel? Stuur dit na ons!</p>
    <!-- /wp:paragraph -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
        <!-- wp:button {"backgroundColor":"base","textColor":"primary","width":100,"className":"is-style-fill"} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill"><a class="wp-block-button__link has-primary-color has-base-background-color has-text-color has-background wp-element-button" href="/kontak">Stuur multimedia</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:heading {"level":4} -->
    <h4 class="wp-block-heading">Kategorieë</h4>
    <!-- /wp:heading -->

    <!-- wp:list {"className":"is-style-no-bullets"} -->
    <ul class="is-style-no-bullets">
        <!-- wp:list-item -->
        <li><a href="/multimedia/?filter=videos">Video's</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/multimedia/?filter=podcasts">Podcasts</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/multimedia/?filter=galleries">Fotogalerye</a></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:advads/gblock {"itemID":"dp-sidebar-multimedia-mrec"} /-->
</div>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->