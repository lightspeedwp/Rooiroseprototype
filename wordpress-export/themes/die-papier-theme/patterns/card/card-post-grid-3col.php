<?php
/**
 * Title: Kaart: Pos Rooster (3 Kolomme)
 * Slug: die-papier/card-post-grid-3col
 * Categories: die-papier-cards
 * Keywords: card, kaart, post, grid, rooster, 3col
 * Description: Standard 3-column post grid card with featured image, category, title, excerpt, date and author. Used inside wp:post-template.
 * Inserter: false
 */
?>

<!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|small","left":"0","right":"0"}}}} -->
<div class="wp-block-group is-style-card" style="padding-top:0;padding-bottom:var(--wp--preset--spacing--small);padding-left:0;padding-right:0">
    
    <!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"} /-->
    
    <!-- wp:group {"style":{"spacing":{"padding":{"left":"var:preset|spacing|small","right":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
    <div class="wp-block-group" style="padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small)">
        
        <!-- wp:post-terms {"term":"category"} /-->
        
        <!-- wp:post-title {"isLink":true,"level":3} /-->
        
        <!-- wp:post-excerpt {"moreText":"","excerptLength":20} /-->
        
        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
        <div class="wp-block-group">
            <!-- wp:post-date {"format":"j M Y","isLink":false} /-->
            
            <!-- wp:post-author {"showAvatar":false,"showBio":false,"byline":"deur"} /-->
        </div>
        <!-- /wp:group -->
        
    </div>
    <!-- /wp:group -->
    
</div>
<!-- /wp:group -->
