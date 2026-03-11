<?php
/**
 * Title: WooCommerce Enkele Produk
 * Slug: die-papier/woo-single-product
 * Categories: die-papier-woocommerce
 * Keywords: product, single, woocommerce, subscription, intekening
 * Template Types: single-product
 * Inserter: false
 * Description: Single product page for e-edition subscription products. Two-column layout with image, details, add-to-cart, and trust badges.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"tagName":"main","metadata":{"name":"Main Content"},"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|medium","padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|large"}}},"layout":{"inherit":true,"type":"constrained"}} -->
<main class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--large)">

	<!-- wp:group {"metadata":{"name":"Store Notice"},"align":"wide","style":{"spacing":{"margin":{"top":"0","bottom":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide" style="margin-top:0;margin-bottom:var(--wp--preset--spacing--small)">
		<!-- wp:woocommerce/store-notices /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:columns {"metadata":{"name":"Product Info Columns"},"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|medium"},"margin":{"top":"0","bottom":"0"}}}} -->
	<div class="wp-block-columns alignwide" style="margin-top:0;margin-bottom:0">

		<!-- wp:column {"width":"480px"} -->
		<div class="wp-block-column" style="flex-basis:480px">
			<!-- wp:woocommerce/product-image {"showProductLink":false,"showSaleBadge":false,"style":{"border":{"radius":"8px"}}} /-->
			<div class="is-loading"></div>
			<!-- /wp:woocommerce/product-image -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:group {"metadata":{"name":"Product Details Wrapper"},"style":{"dimensions":{"minHeight":"100%"}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group" style="min-height:100%">
				<!-- wp:group {"metadata":{"name":"Product Info Section"},"style":{"position":{"type":"sticky","top":"0px"}},"layout":{"type":"constrained"},"stickyScrollOffset":"25px"} -->
				<div class="wp-block-group" style="position:sticky;top:0px">
					<!-- wp:group {"metadata":{"name":"Product Details"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
					<div class="wp-block-group">
						<!-- wp:post-title {"level":1,"fontSize":"xx-large","__woocommerceNamespace":"woocommerce/product-query/product-title"} /-->
						<!-- wp:woocommerce/product-price {"isDescendentOfSingleProductTemplate":true,"fontSize":"large"} /-->
						<!-- wp:post-excerpt {"excerptLength":100,"fontSize":"base","__woocommerceNamespace":"woocommerce/product-query/product-summary"} /-->
					</div>
					<!-- /wp:group -->

					<!-- wp:group {"metadata":{"name":"Product Social Sharing"},"className":"product-social-sharing","style":{"spacing":{"margin":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"},"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"},"blockGap":"var:preset|spacing|x-small"},"border":{"top":{"color":"var:preset|color|border-light","width":"1px"},"bottom":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
					<div class="wp-block-group product-social-sharing">
						<!-- wp:paragraph {"fontSize":"base","style":{"typography":{"fontWeight":"600"}}} -->
						<p class="has-base-font-size" style="font-weight:600">Deel hierdie produk:</p>
						<!-- /wp:paragraph -->

						<!-- wp:outermost/social-sharing {"networks":["whatsapp","facebook","x","email","copy"],"iconSize":"default","iconStyle":"filled","showLabels":false} /-->
					</div>
					<!-- /wp:group -->

					<!-- wp:woocommerce/add-to-cart-with-options /-->

					<!-- wp:group {"metadata":{"name":"Trust Badges"},"style":{"spacing":{"blockGap":"var:preset|spacing|small","margin":{"top":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
					<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--small)">
						<!-- wp:group {"style":{"spacing":{"blockGap":"6px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
						<div class="wp-block-group">
							<!-- wp:paragraph {"fontSize":"base","textColor":"main-accent"} -->
							<p class="has-main-accent-color has-text-color has-base-font-size">&#x1F512; Veilige betaling via Payfast</p>
							<!-- /wp:paragraph -->
						</div>
						<!-- /wp:group -->
						<!-- wp:group {"style":{"spacing":{"blockGap":"6px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
						<div class="wp-block-group">
							<!-- wp:paragraph {"fontSize":"base","textColor":"main-accent"} -->
							<p class="has-main-accent-color has-text-color has-base-font-size">&#x2705; 14-dag geld-terug-waarborg</p>
							<!-- /wp:paragraph -->
						</div>
						<!-- /wp:group -->
					</div>
					<!-- /wp:group -->

				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

	<!-- wp:group {"metadata":{"name":"Product Details Tabs"},"align":"wide","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide has-tertiary-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium);padding-left:var(--wp--preset--spacing--medium)">
		<!-- wp:woocommerce/product-details {"className":"is-style-minimal"} -->
		<div class="wp-block-woocommerce-product-details alignwide is-style-minimal"></div>
		<!-- /wp:woocommerce/product-details -->

		<!-- wp:woocommerce/product-meta {"align":"wide"} -->
		<div class="wp-block-woocommerce-product-meta alignwide">
			<!-- wp:group {"metadata":{"name":"Product Taxonomy Links"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"},"elements":{"link":{"color":{"text":"var:preset|color|main-accent"}}}},"textColor":"main-accent","fontSize":"base","layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group has-main-accent-color has-text-color has-link-color has-base-font-size">
				<!-- wp:woocommerce/product-sku /-->
				<!-- wp:post-terms {"term":"product_cat","prefix":"Kategorie: "} /-->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:woocommerce/product-meta -->
	</div>
	<!-- /wp:group -->

</main>
<!-- /wp:group -->