<?php
/**
 * Title: Deel Hierdie Artikel
 * Slug: die-papier/section-share
 * Categories: die-papier-sections
 * Description: Social sharing section using Outermost Social Sharing block
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */
?>

<!-- wp:group {"className":"dp-share-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}},"border":{"top":{"color":"var:preset|color|border-light","width":"1px"},"bottom":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group dp-share-section" style="border-top-color:var(--wp--preset--color--border-light);border-top-width:1px;border-bottom-color:var(--wp--preset--color--border-light);border-bottom-width:1px;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
	<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group">
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size"><strong>Deel hierdie artikel:</strong></p>
		<!-- /wp:paragraph -->

		<!-- wp:outermost/social-sharing {"networks":["facebook","whatsapp","x","email","copy"],"iconSize":"default","iconStyle":"filled","showLabels":false,"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} /-->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->