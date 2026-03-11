<?php
/**
 * Title: Soekresultate
 * Slug: die-papier/archive-search
 * Categories: die-papier-archives
 * Inserter: false
 * Description: Search results page with filters and results grid
 * Content from content-for-review.md lines 143-206 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:heading {"textAlign":"center","level":1} -->
        <h1 class="wp-block-heading has-text-align-center">Soekresultate</h1>
        <!-- /wp:heading -->

        <!-- wp:search {"label":"Soek","showLabel":false,"placeholder":"Soek vir artikels, gebeure, multimedia...","width":100,"widthUnit":"%","buttonText":"Soek","buttonPosition":"button-inside","buttonUseIcon":true,"align":"center"} /-->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">

        <!-- wp:column {"width":"25%"} -->
        <div class="wp-block-column" style="flex-basis:25%">
            
            <!-- wp:pattern {"slug":"die-papier/hidden-search-filters"} /-->
            
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"75%"} -->
        <div class="wp-block-column" style="flex-basis:75%">

            <!-- wp:group {"style":{"spacing":{"padding":{"bottom":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
            <div class="wp-block-group" style="padding-bottom:var(--wp--preset--spacing--small)">
                <!-- wp:paragraph {"fontSize":"small"} -->
                <p class="has-small-font-size"><strong>Soekresultate vir:</strong> <em>[Query]</em></p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->

            <!-- wp:query {"queryId":50,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"wide"} -->
            <div class="wp-block-query alignwide">
                
                <!-- wp:post-template {"layout":{"type":"default"}} -->
                    
                    <!-- wp:pattern {"slug":"die-papier/card-post-list"} /-->
                    
                <!-- /wp:post-template -->
                
                <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
                    <!-- wp:query-pagination-previous /-->
                    <!-- wp:query-pagination-numbers /-->
                    <!-- wp:query-pagination-next /-->
                <!-- /wp:query-pagination -->
                
                <!-- wp:query-no-results -->
                    <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
                    <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
                        
                        <!-- wp:heading {"textAlign":"center","level":2} -->
                        <h2 class="wp-block-heading has-text-align-center">Geen resultate gevind</h2>
                        <!-- /wp:heading -->

                        <!-- wp:paragraph {"align":"center"} -->
                        <p class="has-text-align-center">Geen resultate gevind vir '<em>[Query]</em>' nie. Probeer 'n ander soekterm.</p>
                        <!-- /wp:paragraph -->

                        <!-- wp:heading {"textAlign":"center","level":3} -->
                        <h3 class="wp-block-heading has-text-align-center">Gewilde bladsye</h3>
                        <!-- /wp:heading -->

                        <!-- wp:list {"className":"is-style-no-bullets"} -->
                        <ul class="is-style-no-bullets">
                            <!-- wp:list-item -->
                            <li><a href="/nuus">Nuus</a></li>
                            <!-- /wp:list-item -->
                            <!-- wp:list-item -->
                            <li><a href="/sport">Sport</a></li>
                            <!-- /wp:list-item -->
                            <!-- wp:list-item -->
                            <li><a href="/sake">Sake</a></li>
                            <!-- /wp:list-item -->
                            <!-- wp:list-item -->
                            <li><a href="/leefstyl">Leefstyl</a></li>
                            <!-- /wp:list-item -->
                            <!-- wp:list-item -->
                            <li><a href="/dink">Dink</a></li>
                            <!-- /wp:list-item -->
                        </ul>
                        <!-- /wp:list -->

                    </div>
                    <!-- /wp:group -->
                <!-- /wp:query-no-results -->
                
            </div>
            <!-- /wp:query -->

        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->