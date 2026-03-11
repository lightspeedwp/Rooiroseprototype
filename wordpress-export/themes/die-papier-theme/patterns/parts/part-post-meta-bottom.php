<?php
/**
 * Title: Post Meta Bottom (Tags, Share)
 * Slug: die-papier/part-post-meta-bottom
 * Categories: die-papier-parts
 * Inserter: false
 * Description: Article metadata displayed at the bottom of the post (tags, social sharing with labels)
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"className":"dp-post-meta-bottom","style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}},"border":{"top":{"color":"var:preset|color|border-light","width":"1px"},"bottom":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group dp-post-meta-bottom" style="border-top-color:var(--wp--preset--color--border-light);border-top-width:1px;border-bottom-color:var(--wp--preset--color--border-light);border-bottom-width:1px;padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)">

	<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
	<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--small)">
		<!-- wp:paragraph {"fontSize":"small","style":{"typography":{"fontWeight":"700"}}} -->
		<p class="has-small-font-size" style="font-weight:700">Sleutelwoorde:</p>
		<!-- /wp:paragraph -->

		<!-- wp:post-terms {"term":"post_tag","separator":", ","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"},":hover":{"color":{"text":"var:preset|color|primary-alt"}}}}}} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"layout":{"type":"default"}} -->
	<div class="wp-block-group">
		<!-- wp:heading {"level":3,"fontSize":"medium","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}}} -->
		<h3 class="wp-block-heading has-medium-font-size" style="margin-bottom:var(--wp--preset--spacing--small)">Deel hierdie artikel</h3>
		<!-- /wp:heading -->

		<!-- wp:outermost/social-sharing {"networks":["facebook","whatsapp","x","email","copy"],"iconSize":"large","iconStyle":"filled","showLabels":true,"labels":{"facebook":"Deel op Facebook","whatsapp":"Stuur op WhatsApp","x":"Deel op X","email":"Stuur per e-pos","copy":"Kopieer skakel"},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"left"}} /-->
	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
