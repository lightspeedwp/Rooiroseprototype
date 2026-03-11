<?php
/**
 * Title: Inhoud Held (Content Hero)
 * Slug: die-papier/section-content-hero
 * Categories: die-papier-sections
 * Keywords: hero, held, cover
 * Description: Full-width hero banner for static pages using core/cover block. Replaces the deprecated dp/content-hero custom block. Edit the heading, paragraph, overlay colour, background image, and min-height directly in the editor.
 */
?>

<!-- wp:cover {"overlayColor":"secondary","dimRatio":60,"minHeight":400,"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large","left":"clamp(1rem, 4vw, 2rem)","right":"clamp(1rem, 4vw, 2rem)"}}}} -->
<div class="wp-block-cover alignfull" style="min-height:400px;padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large);padding-left:clamp(1rem, 4vw, 2rem);padding-right:clamp(1rem, 4vw, 2rem)">
    <span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-60 has-background-dim"></span>
    <div class="wp-block-cover__inner-container">
        <!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
        <div class="wp-block-group">
            <!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","placeholder":"Bladsy Titel","style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.5rem)","lineHeight":"1","letterSpacing":"-0.02em"}}} -->
            <h1 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:clamp(2.5rem, 6vw, 4.5rem);line-height:1;letter-spacing:-0.02em">Bladsy Titel</h1>
            <!-- /wp:heading -->
            <!-- wp:paragraph {"align":"center","textColor":"base","placeholder":"Kort beskrywing van die bladsy.","style":{"typography":{"fontSize":"clamp(1rem, 2vw, 1.375rem)"}}} -->
            <p class="has-text-align-center has-base-color has-text-color" style="font-size:clamp(1rem, 2vw, 1.375rem)">Kort beskrywing van die bladsy.</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
    </div>
</div>
<!-- /wp:cover -->