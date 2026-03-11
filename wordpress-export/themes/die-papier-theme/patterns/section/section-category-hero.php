<?php
/**
 * Title: Kategorie Held (Voorgestelde Artikel)
 * Slug: die-papier/section-category-hero
 * Categories: die-papier-sections
 * Keywords: hero, featured, category, cover, voorgestelde
 * Block Types: core/query
 * Inserter: false
 * Description: Featured article hero for category archives. Single sticky/featured post displayed as a cover block with gradient overlay, category badge, title, excerpt, and meta. Limitation: no auto-advancing carousel (core blocks only support single featured post).
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:query {"queryId":99,"query":{"perPage":1,"pages":1,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"only","inherit":false},"align":"wide"} -->
<div class="wp-block-query alignwide">
	<!-- wp:post-template {"layout":{"type":"default"}} -->

		<!-- wp:cover {"useFeaturedImage":true,"dimRatio":70,"customGradient":"linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.3) 50%,transparent 100%)","minHeight":440,"minHeightUnit":"px","contentPosition":"bottom left","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}}} -->
		<div class="wp-block-cover" style="border-radius:8px;min-height:440px;padding-top:var(--wp--preset--spacing--large);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--large);padding-left:var(--wp--preset--spacing--medium)">
			<span aria-hidden="true" class="wp-block-cover__background"></span>
			<div class="wp-block-cover__inner-container">

				<!-- wp:post-terms {"term":"category","style":{"typography":{"textTransform":"uppercase","letterSpacing":"0.05em"}},"fontSize":"x-small","backgroundColor":"primary","textColor":"base","className":"is-style-default"} /-->

				<!-- wp:post-title {"level":2,"isLink":true,"style":{"typography":{"lineHeight":"1.08"}},"textColor":"base","fontSize":"xx-large"} /-->

				<!-- wp:post-excerpt {"moreText":"","excerptLength":25,"textColor":"base","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}}} /-->

				<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|small"}}} -->
				<div class="wp-block-group">
					<!-- wp:post-author-name {"isLink":false,"textColor":"base","fontSize":"x-small"} /-->
					<!-- wp:paragraph {"textColor":"base","fontSize":"x-small"} -->
					<p class="has-base-color has-text-color has-x-small-font-size">·</p>
					<!-- /wp:paragraph -->
					<!-- wp:post-date {"textColor":"base","fontSize":"x-small"} /-->
				</div>
				<!-- /wp:group -->

			</div>
		</div>
		<!-- /wp:cover -->

	<!-- /wp:post-template -->

	<!-- wp:query-no-results -->
		<!-- wp:paragraph {"align":"center","textColor":"main-accent","fontSize":"small"} -->
		<p class="has-text-align-center has-main-accent-color has-text-color has-small-font-size">Geen voorgestelde artikels nie.</p>
		<!-- /wp:paragraph -->
	<!-- /wp:query-no-results -->

</div>
<!-- /wp:query -->
