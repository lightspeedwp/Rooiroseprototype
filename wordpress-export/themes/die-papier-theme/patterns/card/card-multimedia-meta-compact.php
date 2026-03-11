<?php
/**
 * Title: Multimedia Kaart Metadata (Kompak)
 * Slug: die-papier/card-multimedia-meta-compact
 * Categories: die-papier-cards
 * Keywords: card, kaart, multimedia, meta, compact
 * Description: Compact multimedia meta for archive card: media type icon + duration.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id ) {
	return;
}

$media_type = get_post_meta( $post_id, 'media_type', true ) ?: '';
$duration   = get_post_meta( $post_id, 'duration', true ) ?: '';

// Map media type to Afrikaans label and icon.
$type_map = array(
	'video'   => array(
		'label' => 'Video',
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>',
	),
	'podcast' => array(
		'label' => 'Podcast',
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
	),
	'gallery' => array(
		'label' => 'Fotogalery',
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
	),
);

$type_info = $type_map[ $media_type ] ?? null;

// Format duration (e.g., "05:32" or "1:23:45").
$duration_str = '';
if ( $duration ) {
	$seconds = (int) $duration;
	if ( $seconds >= 3600 ) {
		$duration_str = sprintf( '%d:%02d:%02d', floor( $seconds / 3600 ), floor( ( $seconds % 3600 ) / 60 ), $seconds % 60 );
	} else {
		$duration_str = sprintf( '%d:%02d', floor( $seconds / 60 ), $seconds % 60 );
	}
}

if ( ! $type_info && ! $duration_str ) {
	return;
}
?>

<div class="dp-card-meta dp-card-meta--multimedia">
	<?php if ( $type_info ) : ?>
	<span class="dp-card-meta__item dp-card-meta__item--type">
		<?php echo $type_info['icon']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- SVG markup. ?>
		<?php echo esc_html( $type_info['label'] ); ?>
	</span>
	<?php endif; ?>

	<?php if ( $type_info && $duration_str ) : ?>
	<span class="dp-card-meta__sep">&middot;</span>
	<?php endif; ?>

	<?php if ( $duration_str ) : ?>
	<span class="dp-card-meta__item dp-card-meta__item--duration">
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
		<?php echo esc_html( $duration_str ); ?>
	</span>
	<?php endif; ?>
</div>
