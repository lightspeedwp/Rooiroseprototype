<?php
/**
 * Title: WooCommerce Bestelbevestiging
 * Slug: die-papier/woo-order-confirmation
 * Categories: die-papier-woocommerce
 * Keywords: order, confirmation, thank you, dankie, woocommerce
 * Template Types: order-confirmation
 * Inserter: false
 * Description: Complete order confirmation with status, e-edition CTA, order totals, addresses, and additional info.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"metadata":{"name":"Confirmation Header"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:group {"metadata":{"name":"Status Column"},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group">
			<!-- wp:woocommerce/order-confirmation-status {"fontSize":"base"} /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"className":"is-style-outline","fontSize":"base"} -->
			<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-base-font-size wp-element-button" href="/e-uitgawes">Terug na winkel</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"metadata":{"name":"Main Content"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|large"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--large)">

	<!-- wp:woocommerce/page-content-wrapper {"page":"cart"} -->
		<!-- wp:group {"metadata":{"name":"Store Notices Container"},"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:var(--wp--preset--spacing--medium)">
			<!-- wp:woocommerce/store-notices /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|small"},"border":{"radius":"8px"}},"backgroundColor":"tertiary","layout":{"type":"constrained","contentSize":"600px"}} -->
		<div class="wp-block-group alignwide has-tertiary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium)">
			<!-- wp:heading {"textAlign":"center","level":2} -->
			<h2 class="wp-block-heading has-text-align-center">Jou e-uitgawe is gereed!</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"align":"center"} -->
			<p class="has-text-align-center">Dankie vir jou intekening! Jy het nou toegang tot alle e-uitgawes vanaf jou intekeningdatum.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"primary"} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-primary-background-color has-background wp-element-button" href="/e-uitgawes">Lees jou e-uitgawe</a></div>
				<!-- /wp:button -->
				<!-- wp:button {"className":"is-style-outline"} -->
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/my-rekening">Gaan na My Rekening</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"lock":{"remove":true},"metadata":{"name":"Confirmation Content"},"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"0"},"blockGap":"var:preset|spacing|medium"}},"fontSize":"base","layout":{"type":"constrained","justifyContent":"left"}} -->
		<div class="wp-block-group alignwide has-base-font-size" style="margin-top:var(--wp--preset--spacing--medium);margin-bottom:0">

			<!-- wp:woocommerce/order-confirmation-summary /-->

			<!-- wp:woocommerce/order-confirmation-totals-wrapper {"align":"wide"} -->
				<!-- wp:heading {"level":3,"fontSize":"large"} -->
				<h3 class="wp-block-heading has-large-font-size">Bestellingsbesonderhede</h3>
				<!-- /wp:heading -->
				<!-- wp:woocommerce/order-confirmation-totals {"lock":{"remove":true}} /-->
			<!-- /wp:woocommerce/order-confirmation-totals-wrapper -->

			<!-- wp:woocommerce/order-confirmation-downloads-wrapper {"align":"wide"} -->
				<!-- wp:heading {"level":3,"fontSize":"large"} -->
				<h3 class="wp-block-heading has-large-font-size">Aflaaie</h3>
				<!-- /wp:heading -->
				<!-- wp:woocommerce/order-confirmation-downloads {"lock":{"remove":true}} /-->
			<!-- /wp:woocommerce/order-confirmation-downloads-wrapper -->

			<!-- wp:woocommerce/order-confirmation-billing-wrapper {"align":"wide"} -->
				<!-- wp:heading {"level":3,"fontSize":"large"} -->
				<h3 class="wp-block-heading has-large-font-size">Faktuuradres</h3>
				<!-- /wp:heading -->
				<!-- wp:woocommerce/order-confirmation-billing-address {"lock":{"remove":true}} /-->
			<!-- /wp:woocommerce/order-confirmation-billing-wrapper -->

			<!-- wp:woocommerce/order-confirmation-additional-fields-wrapper {"align":"wide"} -->
				<!-- wp:heading {"level":3,"fontSize":"large"} -->
				<h3 class="wp-block-heading has-large-font-size">Bykomende inligting</h3>
				<!-- /wp:heading -->
				<!-- wp:woocommerce/order-confirmation-additional-fields /-->
			<!-- /wp:woocommerce/order-confirmation-additional-fields-wrapper -->

			<!-- wp:woocommerce/order-confirmation-additional-information /-->

		</div>
		<!-- /wp:group -->

	<!-- /wp:woocommerce/page-content-wrapper -->

</div>
<!-- /wp:group -->
