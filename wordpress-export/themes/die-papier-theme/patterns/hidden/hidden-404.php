<?php
/**
 * Title: 404 Bladsy Nie Gevind
 * Slug: die-papier/hidden-404
 * Categories: die-papier-hidden
 * Inserter: false
 * Description: Enhanced 404 page with search box, helpful links, and popular articles query.
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
<div class="wp-block-group alignfull">

    <!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"6rem"}},"textColor":"primary"} -->
    <h1 class="wp-block-heading has-text-align-center has-primary-color has-text-color" style="font-size:6rem">404</h1>
    <!-- /wp:heading -->

    <!-- wp:heading {"textAlign":"center","level":2} -->
    <h2 class="wp-block-heading has-text-align-center">Jammer! Bladsy nie gevind nie.</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">Die bladsy bestaan nie, of is verskuif. Probeer soek, of kies een van die skakels hieronder.</p>
    <!-- /wp:paragraph -->

    <!-- wp:search {"label":"Soek","showLabel":false,"placeholder":"Soek artikels...","buttonText":"Soek","buttonPosition":"button-inside","buttonUseIcon":true,"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}}} /-->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|small"}}}} -->
    <div class="wp-block-buttons">
        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/">Gaan na tuisblad</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline"} -->
        <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/e-uitgawes">E-uitgawes</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline"} -->
        <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/kontak">Kontak ons</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">

    <!-- wp:heading {"textAlign":"center","level":3,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}}} -->
    <h3 class="wp-block-heading has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--small)">Gewilde artikels</h3>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide","layout":{"type":"default"}} -->
    <div class="wp-block-query alignwide">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
            <!-- wp:post-title {"isLink":true,"fontSize":"medium"} /-->
            <!-- wp:post-excerpt {"moreText":"Lees meer","excerptLength":15} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-white","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained","contentSize":"600px"}} -->
<div class="wp-block-group alignfull is-style-section-white">

    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="wp-block-heading has-text-align-center">Gewilde bladsye</h3>
    <!-- /wp:heading -->

    <!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center","orientation":"vertical"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"fontSize":"medium"} -->
        <!-- wp:navigation-link {"label":"Nuus","url":"/nuus"} /-->
        <!-- wp:navigation-link {"label":"Sport","url":"/sport"} /-->
        <!-- wp:navigation-link {"label":"E-uitgawes","url":"/e-uitgawes"} /-->
        <!-- wp:navigation-link {"label":"Teken in","url":"/inteken/e-uitgawe"} /-->
        <!-- wp:navigation-link {"label":"Kompetisies","url":"/kompetisies"} /-->
        <!-- wp:navigation-link {"label":"Kontak","url":"/kontak"} /-->
    <!-- /wp:navigation -->

</div>
<!-- /wp:group -->