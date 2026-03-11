<?php
/**
 * Title: Menu Card — Latest Edition
 * Slug: die-papier/menu-card-latest-edition
 * Categories: die-papier-navigation
 * Description: Latest e-edition card for mobile menu. Displays cover thumbnail, title, date, and CTA link.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"backgroundColor":"tertiary","textColor":"secondary","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"8px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-tertiary-background-color has-secondary-color has-text-color has-background">
	<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
	<div class="wp-block-group">
		<!-- wp:group {"style":{"layout":{"selfStretch":"fixed","flexSize":"80px"},"spacing":{"blockGap":"0"},"border":{"radius":"4px","width":"1px","color":"var:preset|color|border-light"}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group has-border-color" style="border-color:var(--wp--preset--color--border-light);border-width:1px;border-radius:4px">
			<!-- wp:query {"queryId":0,"query":{"perPage":1,"postType":"dp_eedition","orderby":"date","order":"desc"},"displayLayout":{"type":"list"}} -->
			<div class="wp-block-query">
				<!-- wp:post-template -->
					<!-- wp:post-featured-image {"isLink":true,"width":"80px","height":"110px","style":{"border":{"radius":"4px"}}} /-->
				<!-- /wp:post-template -->
			</div>
			<!-- /wp:query -->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"},"layout":{"selfStretch":"fill","flexSize":""}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"left"}} -->
		<div class="wp-block-group">
			<!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","letterSpacing":"0.05em"}},"fontSize":"x-small"} -->
			<p class="has-x-small-font-size" style="letter-spacing:0.05em;text-transform:uppercase">Nuutste uitgawe</p>
			<!-- /wp:paragraph -->

			<!-- wp:query {"queryId":1,"query":{"perPage":1,"postType":"dp_eedition","orderby":"date","order":"desc"},"displayLayout":{"type":"list"}} -->
			<div class="wp-block-query">
				<!-- wp:post-template -->
					<!-- wp:post-title {"level":5,"isLink":false,"fontSize":"medium"} /-->
					<!-- wp:post-date {"format":"j F Y","fontSize":"small"} /-->
				<!-- /wp:post-template -->
			</div>
			<!-- /wp:query -->

			<!-- wp:paragraph {"fontSize":"small"} -->
			<p class="has-small-font-size"><a href="/e-uitgawes">Lees nou →</a></p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->