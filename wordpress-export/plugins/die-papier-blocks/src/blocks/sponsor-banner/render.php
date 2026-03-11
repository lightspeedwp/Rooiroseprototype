<?php
/**
 * Sponsor Banner — Server-side Render
 *
 * Displays a single sponsor logo and link from the dp_sponsor CPT.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block inner HTML.
 * @var WP_Block $block      Block instance.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$sponsor_id = $attributes['sponsorId'] ?? 0;
$alignment  = $attributes['alignment'] ?? 'center';
$size       = $attributes['size'] ?? 'medium';

if ( ! $sponsor_id || 'dp_sponsor' !== get_post_type( $sponsor_id ) ) {
	return;
}

$sponsor_name = get_the_title( $sponsor_id );
$sponsor_url  = get_post_meta( $sponsor_id, 'sponsor_url', true );
$logo_id      = get_post_thumbnail_id( $sponsor_id );
$logo_url     = $logo_id ? wp_get_attachment_image_url( $logo_id, 'medium' ) : '';

if ( ! $logo_url ) {
	return;
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => sprintf(
		'dp-sponsor-banner dp-sponsor-banner--align-%s dp-sponsor-banner--size-%s',
		sanitize_html_class( $alignment ),
		sanitize_html_class( $size )
	),
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<p class="dp-sponsor-label"><?php esc_html_e( 'In vennootskap met', 'die-papier-blocks' ); ?></p>
	<?php if ( $sponsor_url ) : ?>
		<a href="<?php echo esc_url( $sponsor_url ); ?>" target="_blank" rel="noopener noreferrer sponsored">
			<img
				src="<?php echo esc_url( $logo_url ); ?>"
				alt="<?php echo esc_attr( $sponsor_name ); ?>"
				loading="lazy"
			/>
		</a>
	<?php else : ?>
		<img
			src="<?php echo esc_url( $logo_url ); ?>"
			alt="<?php echo esc_attr( $sponsor_name ); ?>"
			loading="lazy"
		/>
	<?php endif; ?>
</div>
