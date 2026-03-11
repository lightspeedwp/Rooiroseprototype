<?php
/**
 * Title: Gebeurtenis Kategorie Argief
 * Slug: die-papier/archive-event-category
 * Categories: die-papier-archives
 * Keywords: event, gebeurtenis, kategorie, argief, archive
 * Block Types: core/query
 * Inserter: false
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">

    <!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|x-large"}}}} -->
    <div class="wp-block-group">
        <!-- wp:query-title {"type":"archive"} /-->
        <!-- wp:term-description {"textColor":"main-accent","fontSize":"small"} /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|x-large"}}}} -->
    <div class="wp-block-columns alignwide">

        <!-- wp:column {"width":"66.66%"} -->
        <div class="wp-block-column" style="flex-basis:66.66%">

            <!-- wp:query {"queryId":80,"query":{"perPage":12,"postType":"dp_event","inherit":true}} -->
            <div class="wp-block-query">
                <!-- wp:post-template {"layout":{"type":"grid","columnCount":2}} -->
                    <!-- wp:pattern {"slug":"die-papier/card-post-grid-2col"} /-->
                <!-- /wp:post-template -->

                <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|x-large"}}}} -->
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
            <!-- wp:template-part {"slug":"sidebar-event","tagName":"aside"} /-->
        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->