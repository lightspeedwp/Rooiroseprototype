<?php
/**
 * Title: Borg Vlak Argief
 * Slug: die-papier/archive-sponsor-tier
 * Categories: die-papier-archives
 * Keywords: sponsor, borg, tier, vlak, argief, archive
 * Block Types: core/query
 * Inserter: false
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--x-large);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">

    <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
        <!-- wp:query-title {"type":"archive"} /-->
        <!-- wp:term-description {"textColor":"main-accent","fontSize":"small"} /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:query {"queryId":82,"query":{"perPage":24,"postType":"dp_sponsor","inherit":true},"align":"wide"} -->
    <div class="wp-block-query alignwide">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"},"margin":{"bottom":"var:preset|spacing|x-small"}}}} -->
            <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);margin-bottom:var(--wp--preset--spacing--x-small)">
                <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"1","width":"120px","height":"120px","style":{"border":{"radius":"8px"},"spacing":{"margin":{"left":"auto","right":"auto","bottom":"var:preset|spacing|x-small"}}}} /-->
                <!-- wp:post-title {"textAlign":"center","isLink":true,"fontSize":"medium"} /-->
                <!-- wp:post-excerpt {"textAlign":"center","excerptLength":15,"fontSize":"small","textColor":"main-accent"} /-->
            </div>
            <!-- /wp:group -->
        <!-- /wp:post-template -->

        <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
            <!-- wp:query-pagination-previous {"label":"Vorige"} /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next {"label":"Volgende"} /-->
        <!-- /wp:query-pagination -->

        <!-- wp:query-no-results -->
            <!-- wp:pattern {"slug":"die-papier/hidden-no-results"} /-->
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->