<?php
/**
 * Title: Standaard Argief
 * Slug: die-papier/archive-default
 * Categories: die-papier-archives
 * Inserter: false
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignwide">

    <!-- wp:query-title {"type":"archive","textAlign":"left"} /-->
    <!-- wp:term-description /-->

    <!-- wp:columns {"style":{"spacing":{"blockGap":"var:preset|spacing|large"}}} -->
    <div class="wp-block-columns">
        <!-- wp:column {"width":"70%"} -->
        <div class="wp-block-column" style="flex-basis:70%">

            <!-- wp:query {"queryId":30,"query":{"perPage":12,"inherit":true}} -->
            <div class="wp-block-query">
                <!-- wp:post-template {"layout":{"type":"default"}} -->
                    <!-- wp:pattern {"slug":"die-papier/card-post-list"} /-->
                <!-- /wp:post-template -->

                <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
                <!-- wp:query-pagination-previous /-->
                <!-- wp:query-pagination-numbers /-->
                <!-- wp:query-pagination-next /-->
                <!-- /wp:query-pagination -->

                <!-- wp:query-no-results -->
                <!-- wp:pattern {"slug":"die-papier/hidden-no-results"} /-->
                <!-- /wp:query-no-results -->
            </div>
            <!-- /wp:query -->

        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"30%"} -->
        <div class="wp-block-column" style="flex-basis:30%">
            <!-- wp:template-part {"slug":"sidebar","tagName":"aside"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->