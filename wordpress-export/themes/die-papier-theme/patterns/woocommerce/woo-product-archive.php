<?php
/**
 * Title: WooCommerce Produkargief
 * Slug: die-papier/woo-product-archive
 * Template Types: archive-product
 * Categories: die-papier-woocommerce
 * Inserter: false
 * Description: Volledige produkargief-bladsy met kopstuk, broodkrummels, winkelkennisgewings, produkrooster, en paginering.
 */
?>

<!-- wp:group {"tagName":"main","metadata":{"name":"Inhoud"},"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"},"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">

	<!-- wp:woocommerce/breadcrumbs /-->

	<!-- wp:woocommerce/store-notices /-->

	<!-- wp:query-title {"type":"archive","textAlign":"left"} /-->

	<!-- wp:term-description {"textAlign":"left"} /-->

	<!-- wp:group {"metadata":{"name":"Rooster Kontroles"},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
	<div class="wp-block-group">
		<!-- wp:woocommerce/product-results-count /-->
		<!-- wp:woocommerce/catalog-sorting /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:woocommerce/product-collection {"queryId":0,"query":{"perPage":12,"pages":0,"offset":0,"postType":"product","order":"asc","orderBy":"title","search":"","exclude":[],"inherit":true,"taxQuery":{},"isProductCollectionBlock":true,"woocommerceHandPickedProducts":[]},"tagName":"div","displayLayout":{"type":"flex","columns":4},"metadata":{"name":"Produk Rooster"}} -->
		<!-- wp:woocommerce/product-template -->
			<!-- wp:template-part {"slug":"product-card","tagName":"article"} /-->
		<!-- /wp:woocommerce/product-template -->

		<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
			<!-- wp:query-pagination-previous {"label":"Vorige"} /-->
			<!-- wp:query-pagination-numbers /-->
			<!-- wp:query-pagination-next {"label":"Volgende"} /-->
		<!-- /wp:query-pagination -->

		<!-- wp:query-no-results -->
			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">
				<!-- wp:heading {"textAlign":"center","level":2} -->
				<h2 class="wp-block-heading has-text-align-center">Geen produkte gevind nie</h2>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center"} -->
				<p class="has-text-align-center">Ons kon geen produkte vind wat aan jou soektog voldoen nie. Probeer asseblief ander soekterme of verwyder filters.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"className":"is-style-outline"} -->
					<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>">Terug na winkel</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		<!-- /wp:query-no-results -->
	<!-- /wp:woocommerce/product-collection -->

</main>
<!-- /wp:group -->