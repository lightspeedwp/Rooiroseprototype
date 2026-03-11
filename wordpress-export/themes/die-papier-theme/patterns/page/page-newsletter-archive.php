<?php
/**
 * Title: Nuusbrief-argief
 * Slug: die-papier/page-newsletter-archive
 * Categories: die-papier-pages
 * Keywords: newsletter, archive, argief, nuusbrief
 * Post Types: page
 * Description: Newsletter archive page with past editions
 * Content from content-for-review.md lines 1696-1751 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":1} -->
        <h1 class="wp-block-heading has-text-align-center">Nuusbrief-argief</h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Blaai deur vorige uitgawes van ons nuusbriewe. Ons stuur twee keer per week: Dinsdae en Vrydae.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:heading {"level":2} -->
    <h2 class="wp-block-heading">Vorige nuusbriewe</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":30,"query":{"perPage":20,"pages":0,"offset":0,"postType":"dp_newsletter","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        
        <!-- wp:post-template {"layout":{"type":"default"}} -->
            
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"margin":{"bottom":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
            <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);margin-bottom:var(--wp--preset--spacing--x-small)">
                
                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"},"style":{"layout":{"selfStretch":"fill"}}} -->
                <div class="wp-block-group">
                    
                    <!-- wp:post-title {"isLink":true,"level":3} /-->
                    
                    <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
                    <div class="wp-block-group">
                        <!-- wp:post-date {"format":"j F Y"} /-->
                        
                        <!-- wp:post-terms {"term":"dp_newsletter_type"} /-->
                    </div>
                    <!-- /wp:group -->
                    
                </div>
                <!-- /wp:group -->
                
                <!-- wp:buttons -->
                <div class="wp-block-buttons">
                    <!-- wp:button {"className":"is-style-outline"} -->
                    <div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button">Lees</a></div>
                    <!-- /wp:button -->
                </div>
                <!-- /wp:buttons -->
                
            </div>
            <!-- /wp:group -->
            
        <!-- /wp:post-template -->
        
        <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
            <!-- wp:query-pagination-previous /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next /-->
        <!-- /wp:query-pagination -->
        
        <!-- wp:query-no-results -->
            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Geen nuusbriewe gevind nie.</p>
            <!-- /wp:paragraph -->
        <!-- /wp:query-no-results -->
        
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"640px"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":2} -->
        <h2 class="wp-block-heading has-text-align-center">Teken in vir ons nuusbrief</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Kry die jongste nuus en stories direk in jou e-pos.</p>
        <!-- /wp:paragraph -->

        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
            <!-- wp:button -->
            <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/nuusbrief">Teken in</a></div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->
