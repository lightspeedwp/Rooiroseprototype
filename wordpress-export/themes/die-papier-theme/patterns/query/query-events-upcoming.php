<?php
/**
 * Title: Navraag: Komende Gebeure
 * Slug: die-papier/query-events-upcoming
 * Categories: die-papier-queries
 * Keywords: query, navraag, events, gebeure, upcoming, komende
 * Description: Upcoming events query sorted by event_date ASC (soonest first). Uses AQL with meta_query to only show future events. Displays events using card-event-grid in a 3-column grid.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - post_order: meta_value ordering by event_date ASC (upcoming events first)
 * - meta_query: event_date >= today (only future events)
 * - pagination: disabled for widget usage, enabled for archive
 * - Post type: dp_event
 *
 * Used in: Events archive, homepage events widget
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":12,"postType":"dp_event","orderBy":"meta_value","order":"asc","inherit":false,"namespace":"advanced-query-loop","meta_query":{"relation":"AND","queries":[{"meta_key":"event_date","meta_value":"","meta_compare":">=","meta_type":"DATE"}]}},"namespace":"advanced-query-loop","className":"dp-query-events-upcoming"} -->
<div class="wp-block-query dp-query-events-upcoming">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-event-grid"} /-->
    <!-- /wp:post-template -->

    <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
    <!-- /wp:query-pagination -->

    <!-- wp:query-no-results -->
    <!-- wp:paragraph -->
    <p>Geen komende gebeure nie. Kyk later weer!</p>
    <!-- /wp:paragraph -->
    <!-- /wp:query-no-results -->
</div>
<!-- /wp:query -->