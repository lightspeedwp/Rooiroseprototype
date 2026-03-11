<?php
/**
 * Title: E-Uitgawe Sybalk Promosie
 * Slug: die-papier/sidebar-eedition-promo
 * Categories: die-papier-sidebars, die-papier-cards
 * Description: E-edition sidebar promo card showing the latest edition cover with subscribe CTA.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Query the latest published e-edition.
$ee_query = new WP_Query( array(
	'post_type'      => 'dp_eedition',
	'posts_per_page' => 1,
	'post_status'    => 'publish',
	'orderby'        => 'date',
	'order'          => 'DESC',
) );

if ( ! $ee_query->have_posts() ) {
	return;
}

$ee_query->the_post();
$ee_id     = get_the_ID();
$ee_title  = get_the_title();
$ee_thumb  = get_the_post_thumbnail_url( $ee_id, 'medium_large' );
$ee_link   = get_permalink( $ee_id );
$ee_date   = get_post_meta( $ee_id, 'publication_date', true );
$ee_date_fmt = $ee_date ? wp_date( 'j F Y', strtotime( $ee_date ) ) : get_the_date( 'j F Y' );

wp_reset_postdata();
?>

<div class="dp-sidebar-eedition">
	<?php if ( $ee_thumb ) : ?>
	<a href="<?php echo esc_url( $ee_link ); ?>" class="dp-sidebar-eedition__cover-link">
		<img
			src="<?php echo esc_url( $ee_thumb ); ?>"
			alt="<?php echo esc_attr( $ee_title ); ?>"
			class="dp-sidebar-eedition__cover"
			loading="lazy"
		/>
	</a>
	<?php endif; ?>

	<div class="dp-sidebar-eedition__body">
		<h3 class="dp-sidebar-eedition__title">
			<?php esc_html_e( 'Jongste Uitgawe', 'die-papier' ); ?>
		</h3>
		<p class="dp-sidebar-eedition__subtitle">
			<?php echo esc_html( $ee_date_fmt ); ?>
		</p>

		<a href="<?php echo esc_url( home_url( '/e-uitgawes/' ) ); ?>" class="dp-sidebar-eedition__cta">
			<?php esc_html_e( 'Lees Nou', 'die-papier' ); ?>
		</a>
	</div>
</div>

<div class="dp-sidebar-ad-wrapper" style="margin-top:var(--wp--preset--spacing--medium); margin-bottom:var(--wp--preset--spacing--medium); text-align:center;">
    <!-- wp:advads/gblock {"itemID":"dp-sidebar-eedition-promo-mrec","align":"center"} /-->
</div>
