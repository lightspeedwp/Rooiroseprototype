<?php
/**
 * Title: Navraag: Borge per Vlak
 * Slug: die-papier/query-sponsors-tier
 * Categories: die-papier-queries
 * Keywords: query, navraag, sponsors, borge, tier, vlak
 * Description: Sponsors query filtered by sponsor tier taxonomy. Uses AQL (migrated from core query). Displays all three tiers (gold/silver/bronze) using respective card-sponsor-* patterns. Tier taxonomy must be configured per-instance.
 * Inserter: false
 *
 * Uses AQL (Advanced Query Loop) for:
 * - Post type: dp_sponsor
 * - taxQuery: dp_sponsor_tier filter (gold, silver, bronze)
 * - Migrated from core query to AQL for consistency
 *
 * Used in: Sponsor archives, sponsor page sections
 *
 * NOTE: This pattern includes all 3 tier queries. For individual tier queries,
 * use the wp:query block directly with the appropriate card pattern and taxonomy filter.
 */
?>

<!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
<h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--large)">Goue Borge</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":0,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["gold"]},"inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-sponsors-gold"} -->
<div class="wp-block-query dp-query-sponsors-gold">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
        <!-- wp:pattern {"slug":"die-papier/card-sponsor-gold"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->

<!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
<h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--medium)">Silwer Borge</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":0,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["silver"]},"inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-sponsors-silver"} -->
<div class="wp-block-query dp-query-sponsors-silver">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
        <!-- wp:pattern {"slug":"die-papier/card-sponsor-silver"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->

<!-- wp:heading {"level":2,"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}}} -->
<h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--medium)">Brons Borge</h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":0,"query":{"perPage":20,"postType":"dp_sponsor","taxQuery":{"dp_sponsor_tier":["bronze"]},"inherit":false,"namespace":"advanced-query-loop"},"namespace":"advanced-query-loop","className":"dp-query-sponsors-bronze"} -->
<div class="wp-block-query dp-query-sponsors-bronze">
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":5}} -->
        <!-- wp:pattern {"slug":"die-papier/card-sponsor-bronze"} /-->
    <!-- /wp:post-template -->
</div>
<!-- /wp:query -->