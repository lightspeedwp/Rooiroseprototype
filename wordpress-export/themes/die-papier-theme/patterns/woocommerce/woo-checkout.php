<?php
/**
 * Title: WooCommerce Betaling
 * Slug: die-papier/woo-checkout
 * Categories: die-papier-woocommerce
 * Keywords: checkout, payment, betaal, betaling, woocommerce
 * Template Types: page-checkout
 * Inserter: false
 * Description: Distraction-free checkout page with minimal header/footer, store notices, and checkout block.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"metadata":{"name":"Page Header"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"level":1,"fontSize":"x-large"} -->
		<h1 class="wp-block-heading has-x-large-font-size">Betaal</h1>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/cart-link {"fontSize":"base","style":{"elements":{"link":{"color":{"text":"var:preset|color|main-accent"}}}}} -->
		<a class="wc-block-cart-link has-base-font-size has-link-color">Terug na mandjie</a>
		<!-- /wp:woocommerce/cart-link -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:woocommerce/page-content-wrapper {"page":"checkout"} -->
	<!-- wp:group {"tagName":"main","metadata":{"name":"Checkout Main Content"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|x-large"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
	<main class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--x-large)">
		<!-- wp:group {"metadata":{"name":"Store Notices Container"},"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:var(--wp--preset--spacing--medium)">
			<!-- wp:woocommerce/store-notices /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:post-content {"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"0","bottom":"0"}}}} /-->
	</main>
	<!-- /wp:group -->
<!-- /wp:woocommerce/page-content-wrapper -->
