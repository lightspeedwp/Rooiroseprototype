<?php
/**
 * Title: Navraag: Jongste Multimedia
 * Slug: die-papier/query-multimedia-latest
 * Categories: die-papier-queries
 * Keywords: query, navraag, multimedia, latest, jongste, video, podcast
 * Description: Latest multimedia items query ordered by date DESC. Uses AQL (migrated from core query). Displays items using card-multimedia-grid in a 3-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - Post type: dp_multimedia
 * - order: date DESC
 * - enable_caching: transient cache for performance
 * - Migrated from core query to AQL for consistency and caching
 *
 * Used in: Multimedia archive, homepage multimedia section
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":12,"postType":"dp_multimedia","orderBy":"date","order":"desc","inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-multimedia-latest"} -->
<div class="wp-block-query dp-query-multimedia-latest">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-multimedia-grid"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Geen multimedia-items gevind nie.</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->