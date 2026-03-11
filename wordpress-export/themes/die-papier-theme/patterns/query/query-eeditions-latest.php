<?php
/**
 * Title: Navraag: Jongste E-Uitgawes
 * Slug: die-papier/query-eeditions-latest
 * Categories: die-papier-queries
 * Keywords: query, navraag, eeditions, e-uitgawes, latest, jongste
 * Description: Latest e-editions query ordered by date DESC. Uses AQL. Displays e-editions using card-eedition-grid-4col in a 4-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - Post type: dp_eedition
 * - order: date DESC (latest issues first)
 * - Ready for meta_value ordering by issue_date once SCF field is confirmed
 *
 * Used in: E-editions archive, homepage promo
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":12,"postType":"dp_eedition","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-eeditions-latest"} -->
<div class="wp-block-query dp-query-eeditions-latest">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
        <!-- wp:pattern {"slug":"die-papier/card-eedition-grid-4col"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Geen e-uitgawes gevind nie.</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->