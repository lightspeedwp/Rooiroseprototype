<?php
/**
 * Title: Header
 * Slug: die-papier/header
 * Categories: die-papier-headers
 * Block Types: core/template-part/header
 * Description: Default header with site logo, navigation, search, and header leaderboard ad.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}}},"backgroundColor":"tertiary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-tertiary-background-color has-background" style="padding-top:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small)">
	<!-- wp:advads/gblock {"itemID":"dp-header-leaderboard","align":"center"} /-->
</div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:site-logo {"width":120} /-->
		
		<!-- wp:navigation {"layout":{"type":"flex","justifyContent":"right"}} -->
			<!-- wp:navigation-link {"label":"Nuus","url":"/nuus"} /-->
			<!-- wp:navigation-link {"label":"Sport","url":"/sport"} /-->
			<!-- wp:navigation-link {"label":"Skole","url":"/skole"} /-->
			<!-- wp:navigation-link {"label":"Leefstyl","url":"/leefstyl"} /-->
			<!-- wp:navigation-link {"label":"Opinie","url":"/opinie"} /-->
		<!-- /wp:navigation -->
		
		<!-- wp:search {"label":"Soek","buttonText":"Soek","buttonUseIcon":true} /-->
		
		<!-- wp:html -->
		<button class="mobile-menu-toggle" aria-label="Open spyskaart">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<!-- /wp:html -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"die-papier/menu-mobile"} /-->