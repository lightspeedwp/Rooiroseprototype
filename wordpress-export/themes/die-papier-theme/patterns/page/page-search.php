<?php
/**
 * Title: Soekresultate
 * Slug: die-papier/page-search
 * Categories: die-papier-pages
 * Keywords: search, soek, results, resultate
 * Post Types: page
 * Description: Search results page with filters
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

            <!-- wp:group {"style":{"spacing":{"padding":{"bottom":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
            <div class="wp-block-group" style="padding-bottom:var(--wp--preset--spacing--x-small)">
                <!-- wp:paragraph {"fontSize":"small"} -->
                <p class="has-small-font-size"><strong>Soekresultate vir:</strong> <em>[Query]</em></p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->

            <!-- wp:query {"queryId":50,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"wide"} -->
            <div class="wp-block-query alignwide">
                
                <!-- wp:post-template {"layout":{"type":"default"}} -->
                    
                    <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"margin":{"bottom":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
                    <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);margin-bottom:var(--wp--preset--spacing--x-small)">
                        
                        <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9","width":"180px","style":{"layout":{"selfStretch":"fixed","flexSize":"180px"}}} /-->
                        
                        <!-- wp:group {"style":{"layout":{"selfStretch":"fill"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}} -->
                        <div class="wp-block-group">
                            
                            <!-- wp:post-terms {"term":"category"} /-->
                            
                            <!-- wp:post-title {"isLink":true,"level":3} /-->
                            
                            <!-- wp:post-excerpt {"moreText":"","excerptLength":25} /-->
                            
                            <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
                            <div class="wp-block-group">
                                <!-- wp:post-date {"format":"j M Y","isLink":false} /-->
                                
                                <!-- wp:post-author {"showAvatar":false,"showBio":false,"byline":"deur"} /-->
                            </div>
                            <!-- /wp:group -->
                            
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
                    <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"blockGap":"var:preset|spacing|small"}},"layout":{"type":"constrained"}} -->
                    <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small)">
                        
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