<?php
/**
 * Title: Comments
 * Slug: die-papier/hidden-comments
 * Categories: die-papier-hidden
 * Inserter: no
 *
 * @package DiePapierTheme
 */

?>
<!-- wp:comments {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-comments">
	<!-- wp:heading {"level":3} -->
	<h3><?php esc_html_e( 'Kommentaar', 'die-papier' ); ?></h3>
	<!-- /wp:heading -->

	<!-- wp:comment-template -->
		<!-- wp:columns {"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
		<div class="wp-block-columns">
			<!-- wp:column {"width":"40px"} -->
			<div class="wp-block-column" style="flex-basis:40px">
				<!-- wp:avatar {"size":40,"style":{"border":{"radius":"50%"}}} /-->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}} -->
				<div class="wp-block-group">
					<!-- wp:comment-author-name {"fontSize":"small"} /-->
					<!-- wp:comment-date {"fontSize":"small"} /-->
				</div>
				<!-- /wp:group -->
				<!-- wp:comment-content /-->
				<!-- wp:comment-reply-link {"fontSize":"small"} /-->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	<!-- /wp:comment-template -->

	<!-- wp:comments-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
	<!-- wp:comments-pagination-previous /-->
	<!-- wp:comments-pagination-numbers /-->
	<!-- wp:comments-pagination-next /-->
	<!-- /wp:comments-pagination -->

	<!-- wp:post-comments-form /-->
</div>
<!-- /wp:comments -->