<?php
/**
 * Title: Borge Argief
 * Slug: die-papier/archive-sponsors
 * Categories: die-papier-archives
 * Inserter: false
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Ons Borge</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Ons waardeer die ondersteuning van ons borge wat dit moontlik maak om kwaliteit-joernalistiek aan jou te lewer.</p>
    <!-- /wp:paragraph -->

    <!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}},"className":"wp-block-heading"} -->
    <h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--large)">Goue Borge</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":50,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["gold"]},"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-sponsor-gold"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

    <!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}},"className":"wp-block-heading"} -->
    <h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--medium)">Silwer Borge</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":51,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["silver"]},"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
            <!-- wp:pattern {"slug":"die-papier/card-sponsor-silver"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

    <!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}},"className":"wp-block-heading"} -->
    <h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--medium)">Brons Borge</h2>
    <!-- /wp:heading -->

    <!-- wp:query {"queryId":52,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["bronze"]},"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop"} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":5}} -->
            <!-- wp:pattern {"slug":"die-papier/card-sponsor-bronze"} /-->
        <!-- /wp:post-template -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard","align":"center","style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} /-->