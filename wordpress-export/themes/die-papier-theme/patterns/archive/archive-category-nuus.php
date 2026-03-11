<?php
/**
 * Title: Kategorie: Nuus
 * Slug: die-papier/archive-category-nuus
 * Categories: die-papier-archives
 * Keywords: category, kategorie, nuus, news
 * Description: Category archive page for Nuus (News)
 * Content from content-for-review.md lines 1598-1635 on 2026-02-28
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
    
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
    <div class="wp-block-group">
        <!-- wp:query-title {"type":"archive","textAlign":"center","level":1} /-->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Die jongste nuus uit Suid-Afrika en die wêreld. Politiek, misdaad, onderwys, gesondheid en meer.</p>
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
        <li><a href="/nuus/politiek">Politiek</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/nuus/misdaad">Misdaad</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/nuus/onderwys">Onderwys</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/nuus/gesondheid">Gesondheid</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/nuus/plaaslik">Plaaslik</a></li>
        <!-- /wp:list-item -->
        <!-- wp:list-item -->
        <li><a href="/nuus/internasionaal">Internasionaal</a></li>
        <!-- /wp:list-item -->
    </ul>
    <!-- /wp:list -->

</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

    <!-- wp:query {"queryId":43,"query":{"perPage":12,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"wide"} -->
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