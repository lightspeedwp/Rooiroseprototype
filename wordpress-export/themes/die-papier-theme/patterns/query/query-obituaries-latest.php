<?php
/**
 * Title: Navraag: Jongste Doodsberrigte
 * Slug: die-papier/query-obituaries-latest
 * Categories: die-papier-queries
 * Keywords: query, navraag, obituaries, doodsberrigte, latest, jongste
 * Description: Latest obituaries query ordered by date DESC. Uses AQL. Displays obituaries using card-obituary-grid in a 3-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - Post type: dp_obituary
 * - order: date DESC (most recent first)
 * - Ready for meta_value ordering by death_date once SCF field is confirmed
 *
 * Used in: Obituaries archive, homepage obituaries section
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":12,"postType":"dp_obituary","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-obituaries-latest"} -->
<div class="wp-block-query dp-query-obituaries-latest">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-obituary-grid"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Geen doodsberrigte gevind nie.</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->