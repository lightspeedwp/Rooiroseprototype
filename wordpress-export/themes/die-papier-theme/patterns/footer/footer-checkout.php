<?php
/**
 * Title: Checkout Footer
 * Slug: die-papier/footer-checkout
 * Categories: die-papier-footers
 * Block Types: core/template-part/footer
 * Description: Minimal checkout footer with payment icons and essential links (distraction-free checkout experience)
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">
	<!-- wp:group {"align":"wide","layout":{"type":"default"}} -->
	<div class="wp-block-group alignwide">
		
		<!-- wp:group {"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"},"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|x-small"},"blockGap":"var:preset|spacing|x-small"}}} -->
		<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--x-small)">
			<!-- wp:paragraph {"align":"center","fontSize":"small","textColor":"main-accent"} -->
			<p class="has-text-align-center has-main-accent-color has-text-color has-small-font-size">Aanvaar:</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:image {"width":"40px","sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image size-full is-resized">
				<img src="https://www.payfast.co.za/images/payment_methods/visa.png" alt="Visa" style="width:40px"/>
			</figure>
			<!-- /wp:image -->
			
			<!-- wp:image {"width":"40px","sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image size-full is-resized">
				<img src="https://www.payfast.co.za/images/payment_methods/mastercard.png" alt="Mastercard" style="width:40px"/>
			</figure>
			<!-- /wp:image -->
			
			<!-- wp:image {"width":"60px","sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image size-full is-resized">
				<img src="https://www.payfast.co.za/images/logo.png" alt="Payfast" style="width:60px"/>
			</figure>
			<!-- /wp:image -->
		</div>
		<!-- /wp:group -->
		
		<!-- wp:group {"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} -->
		<div class="wp-block-group">
			<!-- wp:paragraph {"fontSize":"small","textColor":"main-accent"} -->
			<p class="has-main-accent-color has-text-color has-small-font-size">© 2026 Die Papier. Alle regte voorbehou.</p>
			<!-- /wp:paragraph -->
			
			<!-- wp:paragraph {"fontSize":"small"} -->
			<p class="has-small-font-size"><a href="/privaatheid">Privaatheidsbeleid</a> | <a href="/terms">Terme en Voorwaardes</a></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:group -->
		
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
