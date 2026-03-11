<?php
/**
 * Title: E-Uitgawes Produk Kategorie
 * Slug: die-papier/woo-archive-e-uitgawes
 * Categories: die-papier-woocommerce
 * Keywords: e-uitgawe, e-edition, product category, archive, woocommerce
 * Template Types: taxonomy-product_cat-e-uitgawes
 * Inserter: false
 * Description: Product category archive for E-Uitgawes. Edition grid with sidebar subscription CTA and FAQ section.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","className":"is-style-section-hero-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-section-hero-default">
	<!-- wp:group {"layout":{"type":"constrained","contentSize":"800px"}} -->
	<div class="wp-block-group">
		<!-- wp:query-title {"type":"archive","textAlign":"center","level":1} /-->

		<!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
		<p class="has-text-align-center has-medium-font-size">Blaai deur ons volledige argief van e-uitgawes. Koop enkel of teken in vir onbeperkte toegang.</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|x-large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">

	<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|large"}}}} -->
	<div class="wp-block-columns alignwide">

		<!-- wp:column {"width":"66.66%"} -->
		<div class="wp-block-column" style="flex-basis:66.66%">

			<!-- wp:woocommerce/product-collection {"query":{"perPage":24,"pages":0,"offset":0,"postType":"product","order":"desc","orderBy":"date","search":"","exclude":[],"inherit":false,"taxQuery":{"product_cat":[]},"isProductCollectionBlock":true,"woocommerceAttributes":[]},"tagName":"div","displayLayout":{"type":"flex","columns":4},"collection":"","hideControls":["order","attributes","keyword"]} -->
			<div class="wp-block-woocommerce-product-collection">
				<!-- wp:woocommerce/product-template -->

					<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
					<div class="wp-block-group">
						<!-- wp:woocommerce/product-image {"aspectRatio":"3/4","imageSizing":"cover","style":{"border":{"radius":"4px"}}} /-->
						<!-- wp:post-title {"level":3,"isLink":true,"fontSize":"small","style":{"typography":{"lineHeight":"1.3"}}} /-->
						<!-- wp:woocommerce/product-price {"fontSize":"small"} /-->
					</div>
					<!-- /wp:group -->

				<!-- /wp:woocommerce/product-template -->

				<!-- wp:advads/gblock {"itemID":"dp-archive-in-feed"} /-->

				<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|large"}}}} -->
					<!-- wp:query-pagination-previous {"label":"Vorige"} /-->
					<!-- wp:query-pagination-numbers /-->
					<!-- wp:query-pagination-next {"label":"Volgende"} /-->
				<!-- /wp:query-pagination -->

				<!-- wp:query-no-results -->
					<!-- wp:paragraph {"align":"center"} -->
					<p class="has-text-align-center">Geen e-uitgawes beskikbaar nie.</p>
					<!-- /wp:paragraph -->
				<!-- /wp:query-no-results -->
			</div>
			<!-- /wp:woocommerce/product-collection -->

		</div>
		<!-- /wp:column -->

		<!-- wp:column {"width":"33.33%"} -->
		<div class="wp-block-column" style="flex-basis:33.33%">
			<!-- wp:template-part {"slug":"sidebar","tagName":"aside"} /-->
		</div>
		<!-- /wp:column -->

	</div>
	<!-- /wp:columns -->

</div>
<!-- /wp:group -->

<!-- wp:advads/gblock {"itemID":"dp-archive-footer-leaderboard"} /-->

<!-- wp:pattern {"slug":"die-papier/woo-subscription-pricing-table"} /-->

<!-- wp:pattern {"slug":"die-papier/section-faq-eeditions"} /-->

<!-- wp:pattern {"slug":"die-papier/section-newsletter-cta"} /-->
