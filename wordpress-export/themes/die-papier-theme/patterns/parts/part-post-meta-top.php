<?php
/**
 * Title: Post Meta Top (Byline, Date, Category, Share)
 * Slug: die-papier/part-post-meta-top
 * Categories: die-papier-parts
 * Inserter: false
 * Description: Article metadata displayed at the top of the post (byline, date, time to read, category, social sharing)
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|small","padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small"}},"border":{"bottom":{"color":"var:preset|color|border-light","width":"1px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","orientation":"horizontal"}} -->
<div class="wp-block-group" style="border-bottom-color:var(--wp--preset--color--border-light);border-bottom-width:1px;padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small)">

	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"left"}} -->
	<div class="wp-block-group">

		<!-- wp:post-author {"showAvatar":false,"showBio":false,"avatarSize":32,"byline":"","isLink":true,"linkTarget":"_self","fontSize":"small"} /-->

		<!-- wp:group {"style":{"spacing":{"blockGap":"4px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group">
			<!-- wp:post-date {"format":"j F Y","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|main-accent"}}}},"textColor":"main-accent"} /-->
		</div>
		<!-- /wp:group -->

		<!-- wp:dp/time-to-read {"fontSize":"small","style":{"typography":{"fontStyle":"normal","fontWeight":"400"}}} /-->

		<!-- wp:post-terms {"term":"category","separator":" ","fontSize":"small","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"},":hover":{"color":{"text":"var:preset|color|primary-alt"}}}}}} /-->

	</div>
	<!-- /wp:group -->

	<!-- wp:pattern {"slug":"die-papier/hidden-social-sharing"} /-->

</div>
<!-- /wp:group -->
