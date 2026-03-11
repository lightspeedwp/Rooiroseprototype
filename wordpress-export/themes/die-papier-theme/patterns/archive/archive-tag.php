<?php
/**
 * Title: Etiket Argief
 * Slug: die-papier/archive-tag
 * Categories: die-papier-archives
 * Keywords: tag, etiket, argief, archive
 * Block Types: core/query
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--x-large);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">

    <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--large)">
        <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
        <h1 class="wp-block-heading">Etiket:
            <!-- wp:query-title {"type":"archive"} /-->
        </h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"textColor":"main-accent","fontSize":"small"} -->
        <p class="has-main-accent-color has-text-color has-small-font-size">Alle artikels gemerk met hierdie etiket.</p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:separator {"className":"is-style-wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"}}}} -->
    <hr class="wp-block-separator is-style-wide" style="margin-bottom:var(--wp--preset--spacing--large)"/>
    <!-- /wp:separator -->

    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-columns alignwide">

        <!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%">

            <!-- wp:query {"queryId":41,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
            <div class="wp-block-query">

                <!-- wp:post-template {"layout":{"type":"default"}} -->
                    <!-- wp:pattern {"slug":"die-papier/card-post-list"} /-->
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
        <!-- /wp:column -->

        <!-- wp:column {"width":"33.33%","style":{"spacing":{"blockGap":"var:preset|spacing|medium"}}} -->
        <div class="wp-block-column" style="flex-basis:33.33%">
            <!-- wp:template-part {"slug":"sidebar","tagName":"aside"} /-->
        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard"} /-->