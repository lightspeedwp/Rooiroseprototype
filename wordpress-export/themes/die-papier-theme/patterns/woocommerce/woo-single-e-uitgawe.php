<?php
/**
 * Title: Enkele E-Uitgawe Produk
 * Slug: die-papier/woo-single-e-uitgawe
 * Categories: die-papier-woocommerce
 * Keywords: e-uitgawe, e-edition, single product, woocommerce
 * Template Types: single-product-e-uitgawe
 * Inserter: false
 * Description: Single e-edition product page. Two-column layout with cover image, product details, Issuu viewer embed, and related editions.
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

	<!-- wp:columns {"metadata":{"name":"Product Info Columns"},"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"},"margin":{"top":"0","bottom":"0"}}}} -->
	<div class="wp-block-columns alignwide" style="margin-top:0;margin-bottom:0">

		<!-- wp:column {"width":"50%"} -->
		<div class="wp-block-column" style="flex-basis:50%">
			<!-- wp:woocommerce/product-image {"aspectRatio":"3/4","imageSizing":"cover","style":{"border":{"radius":"8px"}}} /-->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"width":"50%","style":{"spacing":{"blockGap":"var:preset|spacing|small"}}} -->
		<div class="wp-block-column" style="flex-basis:50%">

			<!-- wp:post-title {"level":1} /-->

			<!-- wp:woocommerce/product-price {"fontSize":"x-large"} /-->

			<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:paragraph {"textColor":"main-accent","fontSize":"small"} -->
				<p class="has-main-accent-color has-text-color has-small-font-size">Hierdie e-uitgawe is beskikbaar as PDF aflaai na aankoop.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:woocommerce/add-to-cart-with-options /-->

			<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small","padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}},"border":{"top":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group" style="border-top-color:var(--wp--preset--color--border-light);border-top-width:1px;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
				<!-- wp:paragraph {"fontSize":"x-small","textColor":"main-accent"} -->
				<p class="has-main-accent-color has-text-color has-x-small-font-size">Veilige betaling via Payfast | Onmiddellike toegang na betaling</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:outermost/social-sharing {"layout":{"type":"flex","justifyContent":"left"}} -->
			<ul class="wp-block-outermost-social-sharing">
				<!-- wp:outermost/social-sharing-link {"service":"facebook","label":"Deel op Facebook"} /-->
				<!-- wp:outermost/social-sharing-link {"service":"whatsapp","label":"Stuur op WhatsApp"} /-->
				<!-- wp:outermost/social-sharing-link {"service":"x","label":"Deel op X"} /-->
				<!-- wp:outermost/social-sharing-link {"service":"mail","label":"Stuur per e-pos"} /-->
			</ul>
			<!-- /wp:outermost/social-sharing -->

		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

	<!-- wp:group {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|large"},"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}},"border":{"top":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide" style="border-top-color:var(--wp--preset--color--border-light);border-top-width:1px;margin-top:var(--wp--preset--spacing--large);padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">

		<!-- wp:heading {"level":2,"fontSize":"large"} -->
		<h2 class="wp-block-heading has-large-font-size">Voorskou</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"textColor":"main-accent","fontSize":"small"} -->
		<p class="has-main-accent-color has-text-color has-small-font-size">Blaai deur die eerste paar bladsye gratis — koop of teken in vir volle toegang.</p>
		<!-- /wp:paragraph -->

		<!-- wp:html -->
		<div style="position:relative;padding-bottom:70%;height:0;overflow:hidden;max-width:100%;border-radius:8px;">
			<p style="text-align:center;padding:2rem;color:#666;">Issuu voorskou laai hier...</p>
		</div>
		<!-- /wp:html -->

	</div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide" style="margin-top:var(--wp--preset--spacing--large)">

		<!-- wp:heading {"level":2,"fontSize":"large"} -->
		<h2 class="wp-block-heading has-large-font-size">Meer e-uitgawes</h2>
		<!-- /wp:heading -->

		<!-- wp:woocommerce/product-collection {"query":{"perPage":4,"pages":1,"offset":0,"postType":"product","order":"desc","orderBy":"date","search":"","exclude":[],"inherit":false,"taxQuery":{"product_cat":[]},"isProductCollectionBlock":true},"tagName":"div","displayLayout":{"type":"flex","columns":4}} -->
		<div class="wp-block-woocommerce-product-collection">
			<!-- wp:woocommerce/product-template -->
				<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:woocommerce/product-image {"aspectRatio":"3/4","imageSizing":"cover","style":{"border":{"radius":"4px"}}} /-->
					<!-- wp:post-title {"level":3,"isLink":true,"fontSize":"small"} /-->
					<!-- wp:woocommerce/product-price {"fontSize":"x-small"} /-->
				</div>
				<!-- /wp:group -->
			<!-- /wp:woocommerce/product-template -->
		</div>
		<!-- /wp:woocommerce/product-collection -->

	</div>
	<!-- /wp:group -->

</main>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->
