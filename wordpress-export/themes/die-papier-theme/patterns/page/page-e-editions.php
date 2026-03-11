<?php
/**
 * Title: E-uitgawes (Oorsig)
 * Slug: die-papier/page-e-editions
 * Categories: die-papier-pages
 * Keywords: e-editions, e-uitgawes, digital, digitaal
 * Post Types: page
 * Description: E-editions overview page with latest edition and archive
 * Content from content-for-review.md lines 1339-1397 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":1} -->
        <h1 class="wp-block-heading has-text-align-center">E-uitgawes</h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Die volledige koerant in digitale formaat.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
    
    <!-- wp:list {"className":"is-style-checkmark-list"} -->
    <ul class="is-style-checkmark-list">
        <!-- wp:list-item -->
        <li>Kry volledige toegang tot e-koerant.</li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li>Bevat alle inhoud van drukkoerant.</li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li>Drukkoerant Vrydae in die winkels.</li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--small)">

    <!-- wp:heading {"level":2} -->
    <h2 class="wp-block-heading">Jongste uitgawe</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":20,"query":{"perPage":1,"pages":0,"offset":0,"postType":"dp_eedition","order":"desc","orderBy":"meta_value","metaKey":"publication_date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        
        <!-- wp:post-template -->
            
            <!-- wp:group {"className":"is-style-card","layout":{"type":"flex","flexWrap":"nowrap","orientation":"horizontal"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"blockGap":"var:preset|spacing|small"}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small)">
                
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/4","width":"300px"} /-->
                
                <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}} -->
                <div class="wp-block-group">
                    
                    <!-- wp:post-date {"format":"j F Y"} /-->
                    
                    <!-- wp:post-title {"isLink":true,"level":3} /-->
                    
                    <!-- wp:post-excerpt {"moreText":"","excerptLength":30} /-->
                    
                    <!-- wp:paragraph {"style":{"typography":{"fontWeight":"700"}},"fontSize":"x-large"} -->
                    <p class="has-x-large-font-size" style="font-weight:700">R35</p>
                    <!-- /wp:paragraph -->
                    
                    <!-- wp:buttons -->
                    <div class="wp-block-buttons">
                        <!-- wp:button -->
                        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Koop uitgawe</a></div>
                        <!-- /wp:button -->
                    </div>
                    <!-- /wp:buttons -->
                    
                </div>
                <!-- /wp:group -->
                
            </div>
            <!-- /wp:group -->
            
        <!-- /wp:post-template -->
        
        <!-- wp:query-no-results -->
            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Geen e-uitgawes beskikbaar nie.</p>
            <!-- /wp:paragraph -->
        <!-- /wp:query-no-results -->
        
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:heading {"level":2} -->
    <h2 class="wp-block-heading">Vorige uitgawes</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":21,"query":{"perPage":12,"pages":0,"offset":1,"postType":"dp_eedition","order":"desc","orderBy":"meta_value","metaKey":"publication_date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|x-small","left":"0","right":"0"}}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:0;padding-bottom:var(--wp--preset--spacing--x-small);padding-left:0;padding-right:0">
                
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"3/4"} /-->
                
                <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"}}},"layout":{"type":"constrained"}} -->
                <div class="wp-block-group" style="padding-left:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--x-small)">
                    
                    <!-- wp:post-date {"format":"j F Y"} /-->
                    
                    <!-- wp:post-title {"isLink":true,"level":4} /-->
                    
                    <!-- wp:paragraph -->
                    <p><strong>R35</strong></p>
                    <!-- /wp:paragraph -->
                    
                    <!-- wp:buttons -->
                    <div class="wp-block-buttons">
                        <!-- wp:button {"width":100,"className":"is-style-outline"} -->
                        <div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button">Koop</a></div>
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
            <p class="has-text-align-center">Geen vorige uitgawes gevind nie.</p>
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
        <h2 class="wp-block-heading has-text-align-center">Bespaar met 'n intekening</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes.</p>
        <!-- /wp:paragraph -->

        <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
        <div class="wp-block-buttons">
            <!-- wp:button -->
            <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/inteken/e-uitgawe">Sien intekeningsopsies</a></div>
            <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-faq","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-faq">

    <!-- wp:heading {"level":2} -->
    <h2 class="wp-block-heading">Algemene vrae</h2>
    <!-- /wp:heading -->

    <!-- wp:yoast/faq-block {"questions":[{"id":"faq-question-1733155220000","question":["Wat is 'n e-uitgawe?"],"answer":["'n Digitale replika van die gedrukte koerant wat jy op enige toestel kan lees."],"jsonQuestion":"Wat is 'n e-uitgawe?","jsonAnswer":"'n Digitale replika van die gedrukte koerant wat jy op enige toestel kan lees."},{"id":"faq-question-1733155221000","question":["Hoeveel kos 'n enkele e-uitgawe?"],"answer":["R35 per uitgawe."],"jsonQuestion":"Hoeveel kos 'n enkele e-uitgawe?","jsonAnswer":"R35 per uitgawe."},{"id":"faq-question-1733155222000","question":["Op watter toestelle kan ek dit lees?"],"answer":["Enige toestel met 'n webblaaier \u2013 rekenaar, tablet, of selfoon."],"jsonQuestion":"Op watter toestelle kan ek dit lees?","jsonAnswer":"Enige toestel met 'n webblaaier \u2013 rekenaar, tablet, of selfoon."},{"id":"faq-question-1733155223000","question":["Kan ek e-uitgawes aflaai om te lees as ek nie aanlyn is nie?"],"answer":["Tans is dit net aanlyn beskikbaar."],"jsonQuestion":"Kan ek e-uitgawes aflaai om te lees as ek nie aanlyn is nie?","jsonAnswer":"Tans is dit net aanlyn beskikbaar."}]} /-->

</div>
<!-- /wp:group -->