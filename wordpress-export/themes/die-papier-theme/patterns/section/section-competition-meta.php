<?php
/**
 * Title: Kompetisie Metadata
 * Slug: die-papier/section-competition-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic competition meta: prize, value, sponsor, dates, status.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_competition' !== get_post_type( $post_id ) ) {
	return;
}

$prize_desc   = get_post_meta( $post_id, 'prize_description', true );
$prize_value  = get_post_meta( $post_id, 'prize_value', true );
$sponsor_name = get_post_meta( $post_id, 'sponsor_name', true );
$closing_date = get_post_meta( $post_id, 'closing_date', true );
$status       = get_post_meta( $post_id, 'status', true ) ?: 'active';
$winner_name  = get_post_meta( $post_id, 'winner_name', true );

// Format dates in Afrikaans.
$published_date = get_the_date( 'j F Y', $post_id );
$closing_fmt    = $closing_date ? wp_date( 'j F Y', strtotime( $closing_date ) ) : '';

// Determine if competition is still open.
$is_open = true;
if ( $closing_date ) {
	$close_ts = strtotime( $closing_date );
	$is_open  = $close_ts && $close_ts > time();
}

// SVG icon helper.
$icon = function ( $name ) {
	$icons = array(
		'gift'      => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
		'star'      => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
		'handshake' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88"/><path d="m16 16-4-4 3-3"/><path d="m7 21 1-1a3 3 0 0 0 0-4.24L4.5 12.5"/><path d="M2 14l6-6"/><path d="m22 2-6 6"/></svg>',
		'calendar'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
		'clock'     => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
		'trophy'    => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
	);
	return $icons[ $name ] ?? '';
};

// Build meta items.
$items = array();

if ( $prize_desc ) {
	$items[] = array( 'icon' => 'gift', 'label' => 'Prys', 'value' => $prize_desc );
}
if ( $prize_value ) {
	$items[] = array( 'icon' => 'star', 'label' => 'Waarde', 'value' => 'R' . number_format( $prize_value, 0, ',', ' ' ) );
}
if ( $sponsor_name ) {
	$items[] = array( 'icon' => 'handshake', 'label' => 'Borg', 'value' => $sponsor_name );
}
$items[] = array( 'icon' => 'calendar', 'label' => 'Oopmaakdatum', 'value' => $published_date );
if ( $closing_fmt ) {
	$items[] = array( 'icon' => 'clock', 'label' => 'Sluitingsdatum', 'value' => $closing_fmt );
}
if ( $winner_name ) {
	$items[] = array( 'icon' => 'trophy', 'label' => 'Wenner', 'value' => $winner_name );
}

if ( empty( $items ) ) {
	return;
}
?>

<div class="dp-cpt-meta dp-cpt-meta--competition">
	<div class="dp-cpt-meta__grid">
		<?php foreach ( $items as $item ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon"><?php echo $icon( $item['icon'] ); ?></span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php echo esc_html( $item['label'] ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $item['value'] ); ?></span>
			</div>
		</div>
		<?php endforeach; ?>
	</div>
</div>
