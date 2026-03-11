<?php
/**
 * Title: Navraag: Aktiewe Kompetisies
 * Slug: die-papier/query-competitions-active
 * Categories: die-papier-queries
 * Keywords: query, navraag, competitions, kompetisies, active, aktief
 * Description: Active/open competitions query ordered by date DESC (newest first). Uses AQL. Displays competitions using card-competition-grid in a 3-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - Post type: dp_competition
 * - order: date DESC (newest first)
 * - Ready for meta_query filter (status=active) once SCF field is confirmed
 *
 * Used in: Competitions archive, sidebar widget
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":9,"postType":"dp_competition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-competitions-active"} -->
<div class="wp-block-query dp-query-competitions-active">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-competition-grid"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Daar is tans geen aktiewe kompetisies nie. Kyk later weer!</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->