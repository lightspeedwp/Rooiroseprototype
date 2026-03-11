<?php
/**
 * Title: Gebeurtenis Metadata
 * Slug: die-papier/section-event-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic event meta: date, time, venue, price, organiser.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_event' !== get_post_type( $post_id ) ) {
	return;
}

$event_date     = get_post_meta( $post_id, 'event_date', true );
$event_end_date = get_post_meta( $post_id, 'event_end_date', true );
$location_name  = get_post_meta( $post_id, 'location_name', true );
$location_addr  = get_post_meta( $post_id, 'location_address', true );
$price          = get_post_meta( $post_id, 'price', true );
$organiser      = get_post_meta( $post_id, 'organiser_name', true );
$organiser_email = get_post_meta( $post_id, 'organiser_email', true );
$website_url    = get_post_meta( $post_id, 'website_url', true );
$is_recurring   = get_post_meta( $post_id, 'is_recurring', true );
$recurrence     = get_post_meta( $post_id, 'recurrence', true );

// Format dates.
$date_fmt = $event_date ? wp_date( 'l, j F Y', strtotime( $event_date ) ) : '';
$time_fmt = $event_date ? wp_date( 'H:i', strtotime( $event_date ) ) : '';
$end_fmt  = $event_end_date ? wp_date( 'H:i', strtotime( $event_end_date ) ) : '';

// Build time string.
$time_str = $time_fmt;
if ( $time_fmt && $end_fmt ) {
	$time_str = $time_fmt . ' – ' . $end_fmt;
}

// Price display.
$price_str = '';
if ( $price !== '' && $price !== false ) {
	$price_str = floatval( $price ) === 0.0 ? 'Gratis' : 'R' . number_format( (float) $price, 0, ',', ' ' );
}
?>

<div class="dp-cpt-meta dp-cpt-meta--event">
	<div class="dp-cpt-meta__grid">
		<?php if ( $date_fmt ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Datum', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $date_fmt ); ?></span>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $time_str ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Tyd', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $time_str ); ?></span>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $location_name ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Plek', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $location_name ); ?></span>
				<?php if ( $location_addr ) : ?>
				<span class="dp-cpt-meta__sub"><?php echo esc_html( $location_addr ); ?></span>
				<?php endif; ?>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $price_str ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Toegang', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $price_str ); ?></span>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $organiser ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Organiseerder', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $organiser ); ?></span>
				<?php if ( $organiser_email ) : ?>
				<a class="dp-cpt-meta__link" href="mailto:<?php echo esc_attr( $organiser_email ); ?>"><?php echo esc_html( $organiser_email ); ?></a>
				<?php endif; ?>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $website_url ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Webwerf', 'die-papier' ); ?></span>
				<a class="dp-cpt-meta__link" href="<?php echo esc_url( $website_url ); ?>" target="_blank" rel="noopener noreferrer">
					<?php echo esc_html( wp_parse_url( $website_url, PHP_URL_HOST ) ); ?>
				</a>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $is_recurring && $recurrence ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Herhaling', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $recurrence ); ?></span>
			</div>
		</div>
		<?php endif; ?>
	</div>
</div>
