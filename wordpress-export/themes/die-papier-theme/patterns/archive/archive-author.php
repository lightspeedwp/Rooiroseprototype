<?php
/**
 * Title: Skrywer Argief
 * Slug: die-papier/archive-author
 * Categories: die-papier-archives
 * Keywords: author, skrywer, argief, archive
 * Block Types: core/query
 */
?>

<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|x-large\",\"bottom\":\"var:preset|spacing|xx-large\",\"left\":\"var:preset|spacing|large\",\"right\":\"var:preset|spacing|large\"}}},\"layout\":{\"type\":\"constrained\"}} -->
<div class=\"wp-block-group alignfull\">

    <!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"verticalAlignment\":\"center\"},\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|large\",\"margin\":{\"bottom\":\"var:preset|spacing|x-large\"}}}} -->
    <div class=\"wp-block-group\">
        <!-- wp:avatar {\"size\":96,\"isLink\":false,\"className\":\"is-style-rounded\"} /-->

        <!-- wp:group {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"left\"}} -->
        <div class=\"wp-block-group\">
            <!-- wp:heading {\"level\":1} -->
            <h1 class="wp-block-heading">Artikels deur
                <!-- wp:query-title {\"type\":\"author\"} /-->
            </h1>
            <!-- /wp:heading -->

            <!-- wp:paragraph {\"textColor\":\"main-accent\",\"fontSize\":\"small\"} -->
            <p class=\"has-main-accent-color has-small-font-size\">Blaai deur alle artikels deur hierdie skrywer.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- wp:separator {\"className\":\"is-style-wide\",\"style\":{\"spacing\":{\"margin\":{\"bottom\":\"var:preset|spacing|x-large\"}}}} -->
    <hr class=\"wp-block-separator is-style-wide\"/>
    <!-- /wp:separator -->

    <!-- wp:query {\"queryId\":40,\"query\":{\"perPage\":12,\"pages\":0,\"offset\":0,\"postType\":\"post\",\"order\":\"desc\",\"orderBy\":\"date\",\"author\":\"\",\"search\":\"\",\"exclude\":[],\"sticky\":\"\",\"inherit\":true},\"align\":\"wide\"} -->
    <div class=\"wp-block-query alignwide\">

        <!-- wp:post-template {\"layout\":{\"type\":\"grid\",\"columnCount\":3}} -->
            <!-- wp:pattern {\"slug\":\"die-papier/card-post-grid-3col\"} /-->
        <!-- /wp:post-template -->

        <!-- wp:query-pagination {\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"},\"style\":{\"spacing\":{\"margin\":{\"top\":\"var:preset|spacing|x-large\"}}}} -->
            <!-- wp:query-pagination-previous {\"label\":\"Vorige\"} /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next {\"label\":\"Volgende\"} /-->
        <!-- /wp:query-pagination -->

        <!-- wp:query-no-results -->
            <!-- wp:pattern {\"slug\":\"die-papier/hidden-no-results\"} /-->
        <!-- /wp:query-no-results -->

    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->