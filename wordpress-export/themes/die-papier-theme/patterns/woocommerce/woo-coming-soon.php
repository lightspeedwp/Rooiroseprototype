<?php
/**
 * Title: Coming Soon
 * Slug: die-papier/woo-coming-soon
 * Categories: die-papier-woocommerce
 * Keywords: coming soon, binnekort, maintenance, woocommerce
 * Description: Branded Coming Soon page for WooCommerce Coming Soon mode. Self-contained — no header/footer.
 * Inserter: false
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}},"dimensions":{"minHeight":"100vh"}},"backgroundColor":"secondary","layout":{"type":"flex","orientation":"vertical","verticalAlignment":"center","justifyContent":"center"}} -->
<div class="wp-block-group alignfull has-secondary-background-color has-background" style="min-height:100vh;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">

	<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained","contentSize":"600px"}} -->
	<div class="wp-block-group">

		<!-- wp:site-logo {"width":200,"align":"center","className":"is-style-default"} /-->

		<!-- wp:heading {"textAlign":"center","level":1,"textColor":"base","fontSize":"xxx-large"} -->
		<h1 class="wp-block-heading has-text-align-center has-base-color has-text-color has-xxx-large-font-size">Binnekort beskikbaar</h1>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"base","fontSize":"medium"} -->
		<p class="has-text-align-center has-base-color has-text-color has-medium-font-size">Ons werk hard om iets spesiaals vir jou gereed te kry. Bly ingeskakel — ons is binnekort hier.</p>
		<!-- /wp:paragraph -->

		<!-- wp:separator {"backgroundColor":"border-light","className":"is-style-wide"} -->
		<hr class="wp-block-separator has-text-color has-border-light-color has-border-light-background-color has-background is-style-wide"/>
		<!-- /wp:separator -->

		<!-- wp:paragraph {"align":"center","textColor":"base","fontSize":"small"} -->
		<p class="has-text-align-center has-base-color has-text-color has-small-font-size">Teken in vir ons nuusbrief om eerste te weet wanneer ons langeer:</p>
		<!-- /wp:paragraph -->

		<!-- wp:gravityforms/form {"formId":"newsletter","title":false,"description":false,"ajax":true} /-->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
