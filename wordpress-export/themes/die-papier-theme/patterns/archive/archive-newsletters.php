<?php
/**
 * Title: Nuusbrief-argief
 * Slug: die-papier/archive-newsletters
 * Categories: die-papier-archives
 * Keywords: newsletter, archive, argief, nuusbrief
 * Block Types: core/query
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">

    <!-- wp:heading {"level":1,"className":"wp-block-heading"} -->
    <h1 class="wp-block-heading">Nuusbrief-argief</h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Blaai deur vorige uitgawes van Die Papier se nuusbriewe.</p>
    <!-- /wp:paragraph -->

    <!-- wp:query {"queryId":20,"query":{"perPage":12,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":{"category":[]}}} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"die-papier/card-newsletter-grid"} /-->
        <!-- /wp:post-template -->
        <!-- wp:query-pagination -->
            <!-- wp:query-pagination-previous /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next /-->
        <!-- /wp:query-pagination -->
        <!-- wp:query-no-results -->
            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Geen nuusbriewe gevind nie.</p>
            <!-- /wp:paragraph -->
        <!-- /wp:query-no-results -->
    </div>
    <!-- /wp:query -->

</div>
<!-- /wp:group -->