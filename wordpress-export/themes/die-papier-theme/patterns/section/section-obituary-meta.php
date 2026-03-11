<?php
/**
 * Title: Doodsberig Metadata
 * Slug: die-papier/section-obituary-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic obituary meta: birth/death dates, location, service info, condolences.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_obituary' !== get_post_type( $post_id ) ) {
	return;
}

$date_of_birth    = get_post_meta( $post_id, 'date_of_birth', true );
$date_of_death    = get_post_meta( $post_id, 'date_of_death', true );
$location         = get_post_meta( $post_id, 'location', true );
$service_date     = get_post_meta( $post_id, 'service_date', true );
$service_time     = get_post_meta( $post_id, 'service_time', true );
$service_location = get_post_meta( $post_id, 'service_location', true );
$condo_email      = get_post_meta( $post_id, 'condolences_email', true );
$condo_url        = get_post_meta( $post_id, 'condolences_url', true );

// Format dates.
$birth_fmt   = $date_of_birth ? wp_date( 'j F Y', strtotime( $date_of_birth ) ) : '';
$death_fmt   = $date_of_death ? wp_date( 'j F Y', strtotime( $date_of_death ) ) : '';
$service_fmt = $service_date ? wp_date( 'l, j F Y', strtotime( $service_date ) ) : '';

// Calculate age.
$age = '';
if ( $date_of_birth && $date_of_death ) {
	$birth = new DateTime( $date_of_birth );
	$death = new DateTime( $date_of_death );
	$diff  = $birth->diff( $death );
	$age   = $diff->y;
}

$name = get_the_title( $post_id );
?>

<div class="dp-cpt-meta dp-cpt-meta--obituary">
	<div class="dp-obituary-meta__dates">
		<?php if ( $birth_fmt && $death_fmt ) : ?>
		<p class="dp-obituary-meta__lifespan">
			<?php echo esc_html( $birth_fmt ); ?> &mdash; <?php echo esc_html( $death_fmt ); ?>
		</p>
		<?php endif; ?>

		<?php if ( $age ) : ?>
		<p class="dp-obituary-meta__age">
			<?php
			printf(
				/* translators: %s: age in years */
				esc_html__( 'Ouderdom: %s jaar', 'die-papier' ),
				esc_html( $age )
			);
			?>
		</p>
		<?php endif; ?>

		<?php if ( $location ) : ?>
		<p class="dp-obituary-meta__location">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
			<?php echo esc_html( $location ); ?>
		</p>
		<?php endif; ?>
	</div>

	<?php if ( $service_fmt || $service_location ) : ?>
	<div class="dp-obituary-meta__service">
		<h3 class="dp-obituary-meta__heading">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
			<?php esc_html_e( 'Begrafnisdiens', 'die-papier' ); ?>
		</h3>

		<?php if ( $service_fmt ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Datum', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value">
					<?php echo esc_html( $service_fmt ); ?>
					<?php if ( $service_time ) : ?>
					<?php
					printf(
						/* translators: %s: time */
						esc_html__( 'om %s', 'die-papier' ),
						esc_html( $service_time )
					);
					?>
					<?php endif; ?>
				</span>
			</div>
		</div>
		<?php endif; ?>

		<?php if ( $service_location ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
			</span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php esc_html_e( 'Plek', 'die-papier' ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $service_location ); ?></span>
			</div>
		</div>
		<?php endif; ?>
	</div>
	<?php endif; ?>

	<?php if ( $condo_email || $condo_url ) : ?>
	<div class="dp-obituary-meta__condolences">
		<h3 class="dp-obituary-meta__heading">
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
			<?php esc_html_e( 'Kondoleer', 'die-papier' ); ?>
		</h3>

		<?php if ( $condo_email ) : ?>
		<p class="dp-obituary-meta__condo-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
			<a href="mailto:<?php echo esc_attr( $condo_email ); ?>"><?php echo esc_html( $condo_email ); ?></a>
		</p>
		<?php endif; ?>

		<?php if ( $condo_url ) : ?>
		<p class="dp-obituary-meta__condo-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
			<a href="<?php echo esc_url( $condo_url ); ?>" target="_blank" rel="noopener noreferrer">
				<?php esc_html_e( 'Aanlyn kondoleer', 'die-papier' ); ?>
			</a>
		</p>
		<?php endif; ?>
	</div>
	<?php endif; ?>
</div>