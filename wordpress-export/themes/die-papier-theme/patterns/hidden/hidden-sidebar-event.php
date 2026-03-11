<?php
/**
 * Title: Event Sidebar
 * Slug: die-papier/hidden-sidebar-event
 * Categories: die-papier-hidden, die-papier-sidebars
 * Inserter: no
 * Description: Event sidebar with location map, submit event CTA, upcoming events, and newsletter.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"className":"dp-sidebar dp-sidebar-event","style":{"spacing":{"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-group dp-sidebar dp-sidebar-event">

    <!-- wp:group {"className":"is-style-card"} -->
    <div class="wp-block-group is-style-card">
        <!-- wp:heading {"level":3,"fontSize":"medium"} -->
        <h3 class="wp-block-heading has-medium-font-size">Ligging</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p>Kaart en ligging word hier vertoon.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"className":"is-style-card","backgroundColor":"tertiary"} -->
    <div class="wp-block-group is-style-card has-tertiary-background-color has-background">
        <!-- wp:heading {"level":3,"fontSize":"medium"} -->
        <h3 class="wp-block-heading has-medium-font-size">Dien jou gebeurtenis in</h3>
        <!-- /wp:heading -->
        <!-- wp:paragraph -->
        <p>Het jy 'n gebeurtenis wat jy wil adverteer?</p>
        <!-- /wp:paragraph -->
        <!-- wp:buttons -->
        <div class="wp-block-buttons">
            <!-- wp:button {"className":"is-style-outline"} -->
            <div class="wp-block-button is-style-outline"><a class="wp-block-button__link" href="/gebeure/dien-in">Dien In</a></div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"className":"dp-sidebar-section"} -->
    <div class="wp-block-group dp-sidebar-section">
        <!-- wp:heading {"level":3,"fontSize":"medium"} -->
        <h3 class="wp-block-heading has-medium-font-size">Komende Gebeure</h3>
        <!-- /wp:heading -->

        <!-- wp:query {"queryId":11,"query":{"perPage":3,"postType":"dp_event","orderby":"meta_value","meta_key":"event_date","order":"asc"}} -->
        <div class="wp-block-query">
            <!-- wp:post-template {"layout":{"type":"default"}} -->
                <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"},"margin":{"bottom":"var:preset|spacing|x-small"}}}} -->
                <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--x-small);margin-bottom:var(--wp--preset--spacing--x-small)">
                    <!-- wp:post-title {"isLink":true,"fontSize":"small"} /-->
                    <!-- wp:pattern {"slug":"die-papier/card-event-meta"} /-->
                </div>
                <!-- /wp:group -->
            <!-- /wp:post-template -->
        </div>
        <!-- /wp:query -->
    </div>
    <!-- /wp:group -->

    <!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->

    <!-- wp:advads/gblock {"itemID":"dp-sidebar-event-mrec"} /-->

</div>
<!-- /wp:group -->
