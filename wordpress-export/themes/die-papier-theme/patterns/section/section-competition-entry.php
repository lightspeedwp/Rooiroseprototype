<?php
/**
 * Title: Kompetisie Inskrywing
 * Slug: die-papier/section-competition-entry
 * Categories: die-papier-sections, die-papier-forms
 * Keywords: competition, kompetisie, inskrywing, entry, form
 * Description: Competition entry form section using Gravity Forms. Replace formId with the actual competition form ID after import.
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-red","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large"},"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained","contentSize":"640px"}} -->
<div class="wp-block-group alignfull is-style-section-red" style="padding-top:var(--wp--preset--spacing--x-large);padding-bottom:var(--wp--preset--spacing--x-large)">

    <!-- wp:heading {"textAlign":"center","level":2,"textColor":"base"} -->
    <h2 class="wp-block-heading has-text-align-center has-base-color has-text-color">Wen Met Die Papier</h2>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"align":"center","textColor":"base"} -->
    <p class="has-text-align-center has-base-color has-text-color">Skryf in vir ons nuutste kompetisie en staan 'n kans om groot te wen. Vul die inskrywingsvorm hieronder in.</p>
    <!-- /wp:paragraph -->

    <!-- wp:group {"className":"is-style-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}}} -->
    <div class="wp-block-group is-style-card" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--large);padding-right:var(--wp--preset--spacing--large)">
        <!-- wp:gravityforms/form {"formId":"24","title":false,"description":false,"ajax":true} /-->
    </div>
    <!-- /wp:group -->

    <!-- wp:paragraph {"align":"center","fontSize":"small","textColor":"base"} -->
    <p class="has-text-align-center has-base-color has-text-color has-small-font-size">Kompetisiereëls en voorwaardes is van toepassing. <a href="/kompetisie-voorwaardes" style="color:var(--wp--preset--color--base)">Lees die volledige voorwaardes</a>.</p>
    <!-- /wp:paragraph -->

</div>
<!-- /wp:group -->