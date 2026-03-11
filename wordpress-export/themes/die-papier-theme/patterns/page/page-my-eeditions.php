<?php
/**
 * Title: My E-Uitgawes (Biblioteek)
 * Slug: die-papier/page-my-eeditions
 * Categories: die-papier-pages
 * Keywords: e-editions, biblioteek, my e-uitgawes
 * Post Types: page
 * Description: User's e-editions library page with subscription status
 * Content from content-for-review.md lines 1949-1993 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":1} -->
        <h1 class="wp-block-heading has-text-align-center">My e-uitgawes</h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Lees jou e-uitgawes.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
    
    <!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">Jou intekening is aktief tot [Expiry Date]. Alle e-uitgawes is beskikbaar.</p>
    <!-- /wp:paragraph -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:query {"queryId":10,"query":{"perPage":12,"pages":0,"offset":0,"postType":"dp_eedition","order":"desc","orderBy":"meta_value","metaKey":"publication_date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:0;padding-bottom:var(--wp--preset--spacing--x-small);padding-left:0;padding-right:0">
                
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/4"} /-->
                
                <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group" style="padding-left:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--x-small)">
                    
                    <!-- wp:post-date {"format":"j F Y"} /-->
                    
                    <!-- wp:post-title {"isLink":true,"level":4} /-->
                    
                    <!-- wp:buttons -->
                    <div class="wp-block-buttons">
                        <!-- wp:button {"width":100} -->
                        <div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link wp-element-button">Lees</a></div>
                        <!-- /wp:button -->
                    </div>
                    <!-- /wp:buttons -->
                    
                </div>
                <!-- /wp:group -->
                
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
            <p class="has-text-align-center">Geen e-uitgawes gevind nie.</p>
            <!-- /wp:paragraph -->
        <!-- /wp:query-no-results -->
        
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"die-papier/section-cta"} /-->
