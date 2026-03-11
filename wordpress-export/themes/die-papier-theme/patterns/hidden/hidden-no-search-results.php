<?php
/**
 * Title: Geen Soekresultate
 * Slug: die-papier/hidden-no-search-results
 * Categories: die-papier-hidden
 * Inserter: false
 * Description: No search results message with search suggestions and helpful links. Used for WooCommerce product search and general site search.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained","contentSize":"700px"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">

    <!-- wp:heading {"textAlign":"center","level":2,"className":"wp-block-heading"} -->
    <h2 class="wp-block-heading has-text-align-center">Geen resultate gevind</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
    <p class="has-text-align-center has-medium-font-size">Jammer, jou soektog het geen resultate gelewer nie. Probeer 'n ander soekterm, of kyk na die voorstelle hieronder.</p>
    <!-- /wp:paragraph -->

    <!-- wp:search {"label":"Soek","showLabel":false,"placeholder":"Probeer 'n ander soekterm...","buttonText":"Soek","buttonPosition":"button-inside","buttonUseIcon":true,"align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} /-->

    <!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"backgroundColor":"border-light"} -->
    <hr class="wp-block-separator has-text-color has-border-light-color has-alpha-channel-opacity has-border-light-background-color has-background" style="margin-top:var(--wp--preset--spacing--medium);margin-bottom:var(--wp--preset--spacing--medium)"/>
    <!-- /wp:separator -->

    <!-- wp:heading {"textAlign":"center","level":3,"fontSize":"large","className":"wp-block-heading"} -->
    <h3 class="wp-block-heading has-text-align-center has-large-font-size">Soektips</h3>
    <!-- /wp:heading -->

    <!-- wp:list {"fontSize":"base"} -->
    <ul class="has-base-font-size">
        <!-- wp:list-item -->
        <li>Kontroleer spelfoute en probeer weer</li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li>Gebruik minder spesifieke soekterme</li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li>Probeer sinonieme of verwante woorde</li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li>Verander die soekfilters (indien van toepassing)</li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <div class="wp-block-buttons">
        <!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/">Gaan na tuisblad</a></div>
        <!-- /wp:button -->
        <!-- wp:button {"className":"is-style-outline"} -->
        <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/nuus">Blaai nuus</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">

    <!-- wp:heading {"textAlign":"center","level":3,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"className":"wp-block-heading"} -->
    <h3 class="wp-block-heading has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--small)">Gewilde kategorieë</h3>
    <!-- /wp:heading -->

    <!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"fontSize":"medium"} -->
        <!-- wp:navigation-link {"label":"Nuus","url":"/nuus"} /-->
        <!-- wp:navigation-link {"label":"Sport","url":"/sport"} /-->
        <!-- wp:navigation-link {"label":"Skole","url":"/skole"} /-->
        <!-- wp:navigation-link {"label":"Leefstyl","url":"/leefstyl"} /-->
        <!-- wp:navigation-link {"label":"Opinie","url":"/opinie"} /-->
        <!-- wp:navigation-link {"label":"E-uitgawes","url":"/e-uitgawes"} /-->
    <!-- /wp:navigation -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-white","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-white">

    <!-- wp:heading {"textAlign":"center","level":3,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"className":"wp-block-heading"} -->
    <h3 class="wp-block-heading has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--small)">Nuutste artikels</h3>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":0,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide","layout":{"type":"default"}} -->
    <div class="wp-block-query alignwide">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
            <!-- wp:post-title {"isLink":true,"fontSize":"medium"} /-->
            <!-- wp:post-date {"fontSize":"small"} /-->
            <!-- wp:post-excerpt {"moreText":"Lees meer","excerptLength":12} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->