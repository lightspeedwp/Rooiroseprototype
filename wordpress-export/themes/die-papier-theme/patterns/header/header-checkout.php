<?php
/**
 * Title: Checkout Header
 * Slug: die-papier/header-checkout
 * Categories: die-papier-headers
 * Block Types: core/template-part/header
 * Description: Minimal checkout header with logo and security badge (distraction-free checkout experience)
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}}},"backgroundColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-base-background-color has-background" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:site-logo {"width":180,"isLink":true,"linkTarget":"_self"} /-->
		
		<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
		<div class="wp-block-group">
			<!-- wp:outermost/icon {"iconName":"lock","iconLibrary":"custom","width":"16px","style":{"color":{"text":"var:preset|color|main-accent"}}} /-->

			<!-- wp:paragraph {"fontSize":"small","textColor":"main-accent","style":{"elements":{"link":{"color":{"text":"var:preset|color|main-accent"}}}}} -->
			<p class="has-main-accent-color has-text-color has-small-font-size">Veilige betaling</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:image {"width":"80px","sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image size-full is-resized">
				<img src="https://www.payfast.co.za/images/logo.png" alt="Payfast" style="width:80px"/>
			</figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->