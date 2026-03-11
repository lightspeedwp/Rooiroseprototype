<?php
/**
 * Title: Gebeurtenis Kaart Metadata
 * Slug: die-papier/card-event-meta
 * Categories: die-papier-cards
 * Description: Compact event meta for archive card: date badge + location.
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

$event_date    = get_post_meta( $post_id, 'event_date', true );
$location_name = get_post_meta( $post_id, 'location_name', true );
$price         = get_post_meta( $post_id, 'price', true );

// Afrikaans short month names.
$months_af = array(
	1 => 'Jan', 2 => 'Feb', 3 => 'Mrt', 4 => 'Apr',
	5 => 'Mei', 6 => 'Jun', 7 => 'Jul', 8 => 'Aug',
	9 => 'Sep', 10 => 'Okt', 11 => 'Nov', 12 => 'Des',
);

$day   = '';
$month = '';
$time  = '';

if ( $event_date ) {
	$ts    = strtotime( $event_date );
	$day   = wp_date( 'j', $ts );
	$month = $months_af[ (int) wp_date( 'n', $ts ) ] ?? wp_date( 'M', $ts );
	$time  = wp_date( 'H:i', $ts );
}

$price_str = '';
if ( $price !== '' && $price !== false ) {
	$price_str = floatval( $price ) === 0.0 ? 'Gratis' : 'R' . number_format( (float) $price, 0, ',', ' ' );
}
?>

<div class="dp-card-meta dp-card-meta--event">
	<?php if ( $day && $month ) : ?>
	<div class="dp-card-meta__date-badge">
		<span class="dp-card-meta__date-day"><?php echo esc_html( $day ); ?></span>
		<span class="dp-card-meta__date-month"><?php echo esc_html( $month ); ?></span>
	</div>
	<?php endif; ?>

	<div class="dp-card-meta__details">
		<?php if ( $time ) : ?>
		<span class="dp-card-meta__item">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			<?php echo esc_html( $time ); ?>
		</span>
		<?php endif; ?>

		<?php if ( $location_name ) : ?>
		<span class="dp-card-meta__item">
			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
			<?php echo esc_html( $location_name ); ?>
		</span>
		<?php endif; ?>

		<?php if ( $price_str ) : ?>
		<span class="dp-card-meta__item dp-card-meta__item--price">
			<?php echo esc_html( $price_str ); ?>
		</span>
		<?php endif; ?>
	</div>
</div>
