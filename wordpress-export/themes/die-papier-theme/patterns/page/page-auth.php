<?php
/**
 * Title: Auth Page (Login/Register)
 * Slug: die-papier/page-auth
 * Categories: die-papier-pages
 * Keywords: login, register, account, auth
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xxx-large","bottom":"var:preset|spacing|xxx-large"},"blockGap":"var:preset|spacing|large"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--xxx-large);padding-bottom:var(--wp--preset--spacing--xxx-large)">

    <!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"var:preset|font-size|xxx-large"}}} -->
    <h1 class="wp-block-heading has-text-align-center" style="font-size:var(--wp--preset--font-size--xxx-large)">My Rekening</h1>
    <!-- /wp:heading -->

    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">
        <!-- wp:column {"width":"100%"} -->
        <div class="wp-block-column" style="flex-basis:100%">
            <!-- wp:woocommerce/my-account /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

</div>
<!-- /wp:group -->
