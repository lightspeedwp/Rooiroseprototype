<?php
/**
 * Title: Handelsmerkaanhalings / Brand Quotes
 * Slug: die-papier/section-brand-quotes
 * Categories: die-papier-sections
 * Description: Carousel of brand endorsement quotes using the dp/slider block with core/quote inner blocks. Replaces the deprecated dp/quote-slider custom block.
 */
?>

<!-- wp:group {"align":"full","className":"is-style-section-navy","style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-group alignfull is-style-section-navy" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large)">

	<!-- wp:heading {"textAlign":"center","level":2} -->
	<h2 class="wp-block-heading has-text-align-center"><?php esc_html_e( 'Wat die mense s\u00ea', 'die-papier' ); ?></h2>
	<!-- /wp:heading -->

	<!-- wp:dp/slider {"autoplay":true,"interval":6000,"showArrows":true,"showDots":true,"loop":true,"align":"wide"} -->

		<!-- wp:group {"className":"wp-block-dp-slider__slide","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}}} -->
		<div class="wp-block-group wp-block-dp-slider__slide" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
			<!-- wp:quote -->
			<blockquote class="wp-block-quote">
				<p>Die Papier lewer elke week vars, betroubare nuus wat ek nêrens anders kry nie.</p>
				<cite>— Maria van der Merwe, Stellenbosch</cite>
			</blockquote>
			<!-- /wp:quote -->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"className":"wp-block-dp-slider__slide","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}}} -->
		<div class="wp-block-group wp-block-dp-slider__slide" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
			<!-- wp:quote -->
			<blockquote class="wp-block-quote">
				<p>As 'n adverteerder bereik ek my teikenmark doeltreffend deur Die Papier se platforms.</p>
				<cite>— Johan Pretorius, Paarl Motors</cite>
			</blockquote>
			<!-- /wp:quote -->
		</div>
		<!-- /wp:group -->

		<!-- wp:group {"className":"wp-block-dp-slider__slide","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|medium","right":"var:preset|spacing|medium"}}}} -->
		<div class="wp-block-group wp-block-dp-slider__slide" style="padding-top:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--medium);padding-right:var(--wp--preset--spacing--medium)">
			<!-- wp:quote -->
			<blockquote class="wp-block-quote">
				<p>Die e-uitgawe maak dit maklik om my koerant oral saam te neem — op my foon, tablet of rekenaar.</p>
				<cite>— Annemarie du Plessis, Kaapstad</cite>
			</blockquote>
			<!-- /wp:quote -->
		</div>
		<!-- /wp:group -->

	<!-- /wp:dp/slider -->

</div>
<!-- /wp:group -->