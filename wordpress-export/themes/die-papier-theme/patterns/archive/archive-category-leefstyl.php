<?php
/**
 * Title: Kategorie: Leefstyl
 * Slug: die-papier/archive-category-leefstyl
 * Categories: die-papier-archives
 * Keywords: category, kategorie, leefstyl, lifestyle
 * Description: Category archive page for Leefstyl
 * Content from content-for-review.md lines 937-976 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:query-title {"type":"archive","textAlign":"center","level":1} /-->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Kos, reis, mode, gesondheid, verhoudings en alles wat die lewe lekker maak.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"is-style-section-muted","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-muted">
    
    <!-- wp:heading {"level":2,"fontSize":"small","style":{"typography":{"textTransform":"uppercase","letterSpacing":"0.05em"}}} -->
    <h2 class="wp-block-heading has-small-font-size" style="letter-spacing:0.05em;text-transform:uppercase">Onderafdelings</h2>
    <!-- /wp:heading -->

    <!-- wp:list {"className":"is-style-inline-list"} -->
    <ul class="is-style-inline-list">
        <!-- wp:list-item -->
        <li><a href="/leefstyl/kos">Kos en resepte</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/leefstyl/reis">Reis</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/leefstyl/mode">Mode</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/leefstyl/gesondheid">Gesondheid</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/leefstyl/vermaak">Vermaak</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/leefstyl/boeke">Boeke</a></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">

    <!-- wp:query {"queryId":40,"query":{"perPage":12,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            
            <!-- wp:pattern {"slug":"die-papier/card-post-grid-3col"} /-->
            
        <!-- /wp:post-template -->
        
        <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
            <!-- wp:query-pagination-previous /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next /-->
        <!-- /wp:query-pagination -->
        
        <!-- wp:query-no-results -->
            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Geen artikels in hierdie kategorie nie.</p>
            <!-- /wp:paragraph -->
        <!-- /wp:query-no-results -->
        
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->