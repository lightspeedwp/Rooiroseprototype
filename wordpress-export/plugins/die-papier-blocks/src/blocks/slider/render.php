<?php
/**
 * Slider Block — Server-side render.
 *
 * Generic carousel block using InnerBlocks and the Interactivity API.
 * Each direct child of InnerBlocks becomes one slide.
 *
 * @package DiePapierBlocks
 * @since   1.0.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    InnerBlocks content (the slides).
 * @var WP_Block $block      Block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$autoplay      = ! empty( $attributes['autoplay'] );
$interval      = absint( $attributes['interval'] ?? 5000 );
$show_arrows   = $attributes['showArrows'] ?? true;
$show_dots     = $attributes['showDots'] ?? true;
$loop          = $attributes['loop'] ?? true;
$slides_to_show = absint( $attributes['slidesToShow'] ?? 1 );

// Count slides (direct children).
$slide_count = substr_count( $content, 'wp-block-dp-slider__slide' );
if ( $slide_count < 1 ) {
	// Fallback: count top-level block comments.
	preg_match_all( '/<!-- wp:[^ ]+ /s', $content, $matches );
	$slide_count = count( $matches[0] );
}

$wrapper_attributes = get_block_wrapper_attributes( array(
	'class'                => 'wp-block-dp-slider',
	'data-wp-interactive'  => 'dp/slider',
	'data-wp-context'      => wp_json_encode( array(
		'currentSlide'  => 0,
		'slideCount'    => $slide_count,
		'autoplay'      => $autoplay,
		'interval'      => $interval,
		'loop'          => $loop,
		'slidesToShow'  => $slides_to_show,
		'isPlaying'     => $autoplay,
	) ),
	'data-wp-init'         => 'callbacks.init',
	'data-wp-on--keydown'  => 'actions.handleKeydown',
	'role'                 => 'region',
	'aria-roledescription' => __( 'Carousel', 'die-papier-blocks' ),
	'aria-label'           => __( 'Skyfievertoning', 'die-papier-blocks' ),
	'tabindex'             => '0',
) );
?>

<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $show_arrows ) : ?>
	<button
		class="wp-block-dp-slider__arrow wp-block-dp-slider__arrow--prev"
		data-wp-on--click="actions.prevSlide"
		data-wp-bind--disabled="!state.canGoPrev"
		aria-label="<?php esc_attr_e( 'Vorige skyfie', 'die-papier-blocks' ); ?>"
	>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="m15 18-6-6 6-6"/>
		</svg>
	</button>
	<?php endif; ?>

	<div
		class="wp-block-dp-slider__track"
		data-wp-style--transform="state.trackTransform"
		data-wp-style--transition="state.trackTransition"
		aria-live="polite"
	>
		<?php echo $content; ?>
	</div>

	<?php if ( $show_arrows ) : ?>
	<button
		class="wp-block-dp-slider__arrow wp-block-dp-slider__arrow--next"
		data-wp-on--click="actions.nextSlide"
		data-wp-bind--disabled="!state.canGoNext"
		aria-label="<?php esc_attr_e( 'Volgende skyfie', 'die-papier-blocks' ); ?>"
	>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="m9 18 6-6-6-6"/>
		</svg>
	</button>
	<?php endif; ?>

	<?php if ( $show_dots && $slide_count > 1 ) : ?>
	<div class="wp-block-dp-slider__dots" role="tablist" aria-label="<?php esc_attr_e( 'Skyfie-keuse', 'die-papier-blocks' ); ?>">
		<?php for ( $i = 0; $i < $slide_count; $i++ ) : ?>
		<button
			class="wp-block-dp-slider__dot"
			data-wp-on--click="actions.goToSlide"
			data-wp-class--is-active="state.isDotActive"
			data-slide-index="<?php echo $i; ?>"
			role="tab"
			aria-label="<?php printf( esc_attr__( 'Skyfie %d van %d', 'die-papier-blocks' ), $i + 1, $slide_count ); ?>"
			aria-selected="<?php echo $i === 0 ? 'true' : 'false'; ?>"
		></button>
		<?php endfor; ?>
	</div>
	<?php endif; ?>

	<?php if ( $autoplay ) : ?>
	<button
		class="wp-block-dp-slider__pause"
		data-wp-on--click="actions.toggleAutoplay"
		data-wp-text="state.pauseButtonText"
		aria-label="<?php esc_attr_e( 'Outo-speel beheer', 'die-papier-blocks' ); ?>"
	></button>
	<?php endif; ?>

</div>
