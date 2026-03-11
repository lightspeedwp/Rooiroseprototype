<?php
/**
 * Title: Mobile Menu
 * Slug: die-papier/menu-mobile
 * Categories: die-papier-navigation
 * Description: Slide-in mobile menu panel with main navigation, utility links, subscribe CTA, and latest edition card.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"className":"mobile-menu-overlay","style":{"display":{"all":"none"}},"layout":{"type":"default"}} -->
<div class="wp-block-group mobile-menu-overlay"></div>
<!-- /wp:group -->

<!-- wp:group {"className":"mobile-menu-panel","backgroundColor":"secondary","textColor":"base","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}} -->
<div class="wp-block-group mobile-menu-panel has-secondary-background-color has-base-color has-text-color has-background">
	
	<!-- wp:group {"className":"mobile-menu-close","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|medium"}}},"layout":{"type":"flex","justifyContent":"right"}} -->
	<div class="wp-block-group mobile-menu-close">
		<!-- wp:html -->
		<button class="mobile-menu-close-btn" aria-label="Sluit spyskaart">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<!-- /wp:html -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical","justifyContent":"left"},"style":{"spacing":{"blockGap":"var:preset|spacing|small"}}} -->
		<!-- wp:navigation-link {"label":"Tuisblad","url":"/"} /-->
		<!-- wp:navigation-link {"label":"Nuus","url":"/nuus"} /-->
		<!-- wp:navigation-link {"label":"Sport","url":"/sport"} /-->
		<!-- wp:navigation-link {"label":"Skole","url":"/skole"} /-->
		<!-- wp:navigation-link {"label":"Leefstyl","url":"/leefstyl"} /-->
		<!-- wp:navigation-link {"label":"Opinie","url":"/opinie"} /-->
		<!-- wp:navigation-link {"label":"Meer","url":"/meer"} /-->
	<!-- /wp:navigation -->
	
	<!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"backgroundColor":"border-light"} -->
	<hr class="wp-block-separator has-text-color has-border-light-color has-alpha-channel-opacity has-border-light-background-color has-background"/>
	<!-- /wp:separator -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"left"}} -->
	<div class="wp-block-group">
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size"><a href="/inteken/e-uitgawe">Teken in</a></p>
		<!-- /wp:paragraph -->
		
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size"><a href="/e-uitgawes">E-Uitgawes</a></p>
		<!-- /wp:paragraph -->
		
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size"><a href="/my-rekening">My Rekening</a></p>
		<!-- /wp:paragraph -->
		
		<!-- wp:paragraph {"fontSize":"small"} -->
		<p class="has-small-font-size"><a href="/soek">Soek</a></p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small","padding":{"top":"var:preset|spacing|large"}}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--large)">
		<!-- wp:pattern {"slug":"die-papier/menu-card-subscribe-cta"} /-->
		
		<!-- wp:pattern {"slug":"die-papier/menu-card-latest-edition"} /-->
	</div>
	<!-- /wp:group -->
	
	<!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|medium"}}},"backgroundColor":"border-light","className":"is-style-wide"} -->
	<hr class="wp-block-separator has-border-light-background-color has-background is-style-wide"/>
	<!-- /wp:separator -->

	<!-- wp:group {"layout":{"type":"flex","justifyContent":"center"}} -->
	<div class="wp-block-group">
		<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
	</div>
	<!-- /wp:group -->
	
</div>
<!-- /wp:group -->
