<?php
/**
 * Title: Kaart: Pos Voorblad Held
 * Slug: die-papier/card-post-featured-hero
 * Categories: die-papier-cards
 * Keywords: card, kaart, hero, featured, voorblad, held
 * Description: Hero-style featured post card using cover block with featured image overlay. Used inside wp:post-template in homepage hero slider.
 * Inserter: false
 */
?>

<!-- wp:cover {"useFeaturedImage":true,"dimRatio":50,"overlayColor":"secondary","minHeight":500,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:500px">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-50 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained"}} -->
        <div class="wp-block-group">
            <!-- wp:post-terms {"term":"category","textColor":"base","style":{"typography":{"textTransform":"uppercase","letterSpacing":"2px","fontSize":"var:preset|font-size|small","fontWeight":"700"}}} /-->
            <!-- wp:post-title {"level":2,"isLink":true,"textColor":"base","style":{"typography":{"fontSize":"clamp(1.5rem, 4vw, 2.5rem)"}}} /-->
            <!-- wp:post-excerpt {"textColor":"base","style":{"typography":{"fontSize":"var:preset|font-size|medium"}},"excerptLength":25} /-->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->