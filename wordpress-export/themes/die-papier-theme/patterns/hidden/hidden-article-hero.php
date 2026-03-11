<?php
/**
 * Title: Article Hero
 * Slug: die-papier/hidden-article-hero
 * Categories: die-papier-hidden
 * Inserter: no
 * Description: Article hero section using core blocks — post title (left) and featured image (right) in a two-column layout. Replaces the deprecated dp/article-hero custom block.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","className":"dp-article-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|xx-large"},"margin":{"bottom":"var:preset|spacing|xx-large"}},"border":{"bottom":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull dp-article-hero">
    <!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"var:preset|spacing|x-large","left":"var:preset|spacing|x-large"}}}} -->
    <div class="wp-block-columns alignwide">

        <!-- wp:column {"width":"60%","verticalAlignment":"center"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:60%">
            <!-- wp:post-title {"level":1,"style":{"typography":{"fontSize":"clamp(1.875rem, 4vw, 2.5rem)","lineHeight":"1.15","letterSpacing":"-0.01em"}}} /-->
            
            <!-- wp:pattern {"slug":"die-papier/hidden-social-sharing"} /-->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"40%"} -->
        <div class="wp-block-column" style="flex-basis:40%">
            <!-- wp:post-featured-image {"aspectRatio":"1","width":"100%","height":"400px","scale":"cover"} /-->
        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->