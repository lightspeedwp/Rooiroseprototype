<?php
/**
 * Title: Doodsberrigte Sybalk
 * Slug: die-papier/sidebar-obituary
 * Categories: die-papier-sidebars
 * Keywords: sidebar, sybalk, obituary, doodsberig, doodsberrigte
 * Description: Obituary sidebar with submit CTA, recent obituaries, condolence policy, and newsletter signup.
 * Inserter: false
 *
 * Used in: Obituary archives, single obituary templates
 */
?>

<!-- wp:group {"backgroundColor":"tertiary","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"margin":{"bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-tertiary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:heading {"level":4,"className":"wp-block-heading"} -->
    <h4 class="wp-block-heading">Plaas 'n doodsberig</h4>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"var:preset|font-size|small"}}} -->
    <p style="font-size:var(--wp--preset--font-size--small)">Om 'n doodsberig of in memoriam-kennisgewing te plaas, kontak ons redaksie.</p>
    <!-- /wp:paragraph -->
    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons">
        <!-- wp:button {"width":100,"className":"is-style-fill"} -->
        <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill"><a class="wp-block-button__link wp-element-button" href="/kontak">Kontak ons</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:heading {"level":4,"className":"wp-block-heading"} -->
    <h4 class="wp-block-heading">Onlangse doodsberrigte</h4>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":0,"query":{"perPage":5,"postType":"dp_obituary","orderBy":"date","order":"desc","inherit":false},"className":"dp-sidebar-recent-obituaries"} -->
    <div class="wp-block-query dp-sidebar-recent-obituaries">
        <!-- wp:post-template {"layout":{"type":"default"}} -->
            <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
            <div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small)">
                <!-- wp:post-featured-image {"isLink":true,"width":"48px","aspectRatio":"1","style":{"border":{"radius":"50%"},"layout":{"selfStretch":"fixed","flexSize":"48px"}}} /-->
                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical"}} -->
                <div class="wp-block-group">
                    <!-- wp:post-title {"isLink":true,"fontSize":"small"} /-->
                    <!-- wp:post-date {"format":"j M Y","fontSize":"x-small","textColor":"main-accent"} /-->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->
</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:advads/gblock {"itemID":"dp-sidebar-obituary-mrec","align":"center"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-muted","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"margin":{"bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group is-style-section-muted" style="border-radius:8px;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);margin-bottom:var(--wp--preset--spacing--large)">
    <!-- wp:heading {"level":5,"className":"wp-block-heading"} -->
    <h5 class="wp-block-heading">Medelye-beleid</h5>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"style":{"typography":{"fontSize":"var:preset|font-size|small"}}} -->
    <p style="font-size:var(--wp--preset--font-size--small)">Doodsberrigte word gratis geplaas vir een week. In memoriam- en medelye-kennisgewings kan teen standaardtariewe geplaas word.</p>
    <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->