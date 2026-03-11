<?php
/**
 * Title: WooCommerce Produkkaart
 * Slug: die-papier/woo-product-card
 * Categories: die-papier-woocommerce
 * Inserter: false
 * Description: Herbruikbare produkkaart vir produkargiewe en soekresultate. Gebaseer op Ollie-tema argitektuur.
 */
?>

<!-- wp:group {"metadata":{"name":"Produkkaart"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group">

	<!-- wp:woocommerce/product-image {"imageSizing":"thumbnail","isDescendentOfQueryLoop":true} -->
		<!-- wp:group {"style":{"dimensions":{"minHeight":"100%"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch","verticalAlignment":"space-between"}} -->
		<div class="wp-block-group" style="min-height:100%">
			<!-- wp:woocommerce/product-sale-badge {"isDescendentOfQueryLoop":true,"align":"right","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}}} /-->
		</div>
		<!-- /wp:group -->
	<!-- /wp:woocommerce/product-image -->

	<!-- wp:group {"metadata":{"name":"Produk Besonderhede"},"style":{"spacing":{"blockGap":"4px"}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:post-title {"textAlign":"left","level":3,"isLink":true,"fontSize":"medium","__woocommerceNamespace":"woocommerce/product-collection/product-title"} /-->
		<!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true,"textAlign":"left","textColor":"main-accent","fontSize":"base","style":{"typography":{"fontStyle":"normal"}}} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:woocommerce/product-button {"textAlign":"center","width":100,"isDescendentOfQueryLoop":true,"fontSize":"base"} /-->

</div>
<!-- /wp:group -->