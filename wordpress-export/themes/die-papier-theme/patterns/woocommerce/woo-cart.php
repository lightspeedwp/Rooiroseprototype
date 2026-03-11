<?php
/**
 * Title: WooCommerce Mandjie
 * Slug: die-papier/woo-cart
 * Categories: die-papier-woocommerce
 * Keywords: cart, mandjie, woocommerce
 * Template Types: page-cart
 * Inserter: false
 * Description: Cart page layout with breadcrumbs, store notices, continue shopping link, and cart block.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"tagName":"main","metadata":{"name":"Cart Page"},"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"0"}},"layout":{"type":"default"}} -->
<main class="wp-block-group" style="margin-top:0;margin-bottom:0">

	<!-- wp:group {"metadata":{"name":"Page Header"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
		<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
		<div class="wp-block-group alignwide">
			<!-- wp:group {"metadata":{"name":"Title Column"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:template-part {"slug":"breadcrumbs","tagName":"nav"} /-->
				<!-- wp:heading {"level":1} -->
				<h1 class="wp-block-heading">Mandjie</h1>
				<!-- /wp:heading -->
			</div>
			<!-- /wp:group -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"className":"is-style-outline","fontSize":"base"} -->
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-base-font-size wp-element-button" href="/e-uitgawes">Gaan voort met inkopies</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->

	<!-- wp:woocommerce/page-content-wrapper {"page":"cart"} -->
		<!-- wp:group {"metadata":{"name":"Cart Main Content"},"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|x-large"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--x-large)">
			<!-- wp:woocommerce/store-notices /-->
			<!-- wp:post-content {"align":"wide"} /-->
		</div>
		<!-- /wp:group -->
	<!-- /wp:woocommerce/page-content-wrapper -->

</main>
<!-- /wp:group -->
