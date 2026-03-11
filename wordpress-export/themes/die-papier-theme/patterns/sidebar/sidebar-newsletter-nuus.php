<?php
/**
 * Title: Nuusbrief Kantbalk (Nuus Kategorie)
 * Slug: die-papier/sidebar-newsletter-nuus
 * Categories: die-papier-sidebars
 * Keywords: newsletter, nuusbrief, sidebar, kantbalk, nuus
 * Block Types: core/template-part/sidebar
 * Description: Newsletter signup sidebar widget specifically for the Nuus (News) category archives. Uses a dedicated Gravity Forms form (ID 44) for category-specific subscriber segmentation.
 */
?>

<!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|small"}}} -->
<div class="wp-block-group is-style-card">

    <!-- wp:heading {"level":3,"textAlign":"center","textColor":"secondary"} -->
    <h3 class="wp-block-heading has-text-align-center has-secondary-color has-text-color">Nuus Nuusbrief</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"color":{"text":"var:preset|color|main-accent"}}} -->
    <p class="has-text-align-center has-text-color" style="color:var(--wp--preset--color--main-accent)">Ontvang die nuutste nuusstories direk in jou inkassie.</p>
    <!-- /wp:paragraph -->

    <!-- wp:gravityforms/form {"formId":"44","title":false,"description":false,"ajax":true} /-->

    <!-- wp:paragraph {"align":"center","fontSize":"small","style":{"color":{"text":"var:preset|color|main-accent"}}} -->
    <p class="has-text-align-center has-text-color" style="color:var(--wp--preset--color--main-accent)">Ons respekteer jou privaatheid. <a href="/privaatheidsbeleid">Privaatheidsbeleid</a></p>
    <!-- /wp:paragraph -->

</div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--medium)">
    <!-- wp:advads/gblock {"itemID":"dp-sidebar-newsletter-mrec","align":"center"} /-->
</div>
<!-- /wp:group -->
