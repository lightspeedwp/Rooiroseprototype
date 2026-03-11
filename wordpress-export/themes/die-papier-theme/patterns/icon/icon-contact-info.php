<?php
/**
 * Title: Kontakbesonderhede met Ikone
 * Slug: die-papier/icon-contact-info
 * Categories: die-papier-sections
 * Keywords: contact, info, address, email, phone, icons
 * Description: Vertical or horizontal list of contact information with Lucide-based icons.
 */
?>

<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
	
	<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"},"style":{"spacing":{"blockGap":"12px"}}} -->
	<div class="wp-block-group">
		<!-- wp:outermost/icon {"iconName":"phone","iconLibrary":"custom","width":"20px","style":{"color":{"text":"var:preset|color|primary"}}} /-->
		<!-- wp:paragraph {"fontSize":"base"} -->
		<p class="has-base-font-size">012 345 6789</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"},"style":{"spacing":{"blockGap":"12px"}}} -->
	<div class="wp-block-group">
		<!-- wp:outermost/icon {"iconName":"mail","iconLibrary":"custom","width":"20px","style":{"color":{"text":"var:preset|color|primary"}}} /-->
		<!-- wp:paragraph {"fontSize":"base"} -->
		<p class="has-base-font-size">redaksie@diepapier.co.za</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"},"style":{"spacing":{"blockGap":"12px"}}} -->
	<div class="wp-block-group">
		<!-- wp:outermost/icon {"iconName":"map-pin","iconLibrary":"custom","width":"20px","style":{"color":{"text":"var:preset|color|primary"}}} /-->
		<!-- wp:paragraph {"fontSize":"base"} -->
		<p class="has-base-font-size">123 Kerkstraat, Pretoria-Oos, 0001</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
	
</div>
<!-- /wp:group -->
