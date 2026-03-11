<?php
/**
 * Title: Kategorie Argief
 * Slug: die-papier/archive-category
 * Categories: die-papier-archives
 * Keywords: category, kategorie, argief, archive
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

    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-columns alignwide">

        <!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%">

            <!-- wp:query {"queryId":70,"query":{"perPage":12,"inherit":true}} -->
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

        <!-- wp:column {"width":"33.33%"} -->
        <div class="wp-block-column" style="flex-basis:33.33%">
            <!-- wp:template-part {"slug":"sidebar","tagName":"aside"} /-->
        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard"} /-->