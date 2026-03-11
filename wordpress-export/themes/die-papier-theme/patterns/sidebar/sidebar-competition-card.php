<?php
/**
 * Title: Kompetisie Sybalk Kaart
 * Slug: die-papier/sidebar-competition-card
 * Categories: die-papier-sidebars, die-papier-cards
 * Description: Featured active competition card for sidebar. Shows the latest open competition with image, title, closing date, and CTA button.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Query latest active competition.
$comp_query = new WP_Query( array(
	'post_type'      => 'dp_competition',
	'posts_per_page' => 1,
	'post_status'    => 'publish',
	'meta_query'     => array(
		'relation' => 'OR',
		// No closing date set (open-ended).
		array(
			'key'     => 'closing_date',
			'compare' => 'NOT EXISTS',
		),
		// Closing date in the future.
		array(
			'key'     => 'closing_date',
			'value'   => wp_date( 'Y-m-d' ),
			'compare' => '>=',
			'type'    => 'DATE',
		),
	),
	'orderby'        => 'date',
	'order'          => 'DESC',
) );

if ( ! $comp_query->have_posts() ) {
	return;
}

$comp_query->the_post();
$comp_id       = get_the_ID();
$comp_title    = get_the_title();
$comp_thumb    = get_the_post_thumbnail_url( $comp_id, 'dp-card' );
$comp_link     = get_permalink( $comp_id );
$closing_date  = get_post_meta( $comp_id, 'closing_date', true );
$prize_value   = get_post_meta( $comp_id, 'prize_value', true );

$closing_fmt = $closing_date ? wp_date( 'j M Y', strtotime( $closing_date ) ) : '';
$prize_fmt   = $prize_value ? 'R' . number_format( (float) $prize_value, 0, ',', ' ' ) : '';

wp_reset_postdata();
?>

<div class="dp-sidebar-comp">
	<a href="<?php echo esc_url( $comp_link ); ?>" class="dp-sidebar-comp__link">
		<?php if ( $comp_thumb ) : ?>
		<div class="dp-sidebar-comp__image-wrap">
			<img
				src="<?php echo esc_url( $comp_thumb ); ?>"
				alt="<?php echo esc_attr( $comp_title ); ?>"
				class="dp-sidebar-comp__image"
				loading="lazy"
			/>
			<div class="dp-sidebar-comp__overlay"></div>
			<span class="dp-sidebar-comp__badge">
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
				<?php esc_html_e( 'Kompetisie', 'die-papier' ); ?>
			</span>
		</div>
		<?php endif; ?>

		<div class="dp-sidebar-comp__body">
			<h4 class="dp-sidebar-comp__title"><?php echo esc_html( $comp_title ); ?></h4>

			<?php if ( $closing_fmt ) : ?>
			<p class="dp-sidebar-comp__meta">
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				<?php
				/* translators: %s: closing date */
				printf( esc_html__( 'Sluit %s', 'die-papier' ), esc_html( $closing_fmt ) );
				?>
			</p>
			<?php endif; ?>

			<span class="dp-sidebar-comp__cta">
				<?php esc_html_e( 'Skryf Nou In', 'die-papier' ); ?>
			</span>
		</div>
	</a>

	<a href="<?php echo esc_url( home_url( '/kompetisies/' ) ); ?>" class="dp-sidebar-comp__view-all">
		<?php esc_html_e( 'Alle Kompetisies', 'die-papier' ); ?> →
	</a>
</div>
