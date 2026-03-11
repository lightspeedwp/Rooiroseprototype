<?php
/**
 * Title: WooCommerce My Rekening
 * Slug: die-papier/woo-my-account
 * Categories: die-papier-woocommerce
 * Keywords: account, rekening, woocommerce, my account
 * Template Types: page-my-account
 * Inserter: false
 * Description: My Account page with dashboard, orders, subscriptions, and account details.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"tagName":"main","metadata":{"name":"My Account Page"},"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"0"}},"layout":{"type":"default"}} -->
<main class="wp-block-group" style="margin-top:0;margin-bottom:0">

	<!-- wp:group {"metadata":{"name":"Page Header"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
		<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide">
			<!-- wp:template-part {"slug":"breadcrumbs","tagName":"nav"} /-->
			<!-- wp:heading {"level":1} -->
			<h1 class="wp-block-heading">My Rekening</h1>
			<!-- /wp:heading -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"metadata":{"name":"Account Content"},"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--large)">
		<!-- wp:woocommerce/store-notices /-->
		<!-- wp:post-content {"align":"wide"} /-->
	</div>
	<!-- /wp:group -->

</main>
<!-- /wp:group -->
