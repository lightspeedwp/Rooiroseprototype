<?php
/**
 * Title: Pos Meta (Kompak)
 * Slug: die-papier/section-post-meta-compact
 * Categories: die-papier-sections
 * Keywords: meta, date, category, compact, card
 * Inserter: false
 * Description: Compact post metadata for card layouts: date + category. Used inside card patterns.
 */
?>

<!-- wp:group {"style":{"spacing":{"blockGap":"4px","padding":{"top":"var:preset|spacing|x-small","bottom":"0"}}},"layout":{"type":"flex","flexWrap":"nowrap"},"fontSize":"small"} -->
<div class="wp-block-group has-small-font-size" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:0">
    <!-- wp:post-date {"format":"j M Y","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|main-accent"}}}},"textColor":"main-accent"} /-->
    <!-- wp:paragraph {"textColor":"main-accent","fontSize":"small"} -->
    <p class="has-main-accent-color has-text-color has-small-font-size">&middot;</p>
    <!-- /wp:paragraph -->
    <!-- wp:post-terms {"term":"category","separator":"","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"},":hover":{"color":{"text":"var:preset|color|primary-alt"}}}}}} /-->
</div>
<!-- /wp:group -->