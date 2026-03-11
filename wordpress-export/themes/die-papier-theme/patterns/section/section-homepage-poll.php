<?php
/**
 * Title: Tuisblad Peiling
 * Slug: die-papier/section-homepage-poll
 * Categories: die-papier-sections, die-papier-forms
 * Description: Weekly community poll widget using Gravity Forms Polls Add-On. Replace formId with the actual Gravity Forms poll form ID after import.
 */
?>

<!-- wp:group {"align":"wide","className":"dp-homepage-poll","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"8px"}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide dp-homepage-poll has-tertiary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small)">

    <!-- wp:heading {"level":3,"className":"wp-block-heading"} -->
    <h3 class="wp-block-heading">Weeklikse Peiling</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"textColor":"neutral-600"} -->
    <p class="has-neutral-600-color has-text-color">Deel jou mening oor aktuele gemeenskapskwessies.</p>
    <!-- /wp:paragraph -->

    <!-- wp:gravityforms/form {"formId":"23","title":false,"description":false,"ajax":true} /-->

</div>
<!-- /wp:group -->
