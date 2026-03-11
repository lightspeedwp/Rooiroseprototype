<?php
/**
 * Title: Doodsberig Kaart Metadata
 * Slug: die-papier/card-obituary-meta
 * Categories: die-papier-cards
 * Description: Compact obituary meta for archive card: birth–death date range + location.
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

$date_of_birth = get_post_meta( $post_id, 'date_of_birth', true );
$date_of_death = get_post_meta( $post_id, 'date_of_death', true );
$location      = get_post_meta( $post_id, 'location', true );

$birth_fmt = $date_of_birth ? wp_date( 'j M Y', strtotime( $date_of_birth ) ) : '';
$death_fmt = $date_of_death ? wp_date( 'j M Y', strtotime( $date_of_death ) ) : '';

// Calculate age.
$age = '';
if ( $date_of_birth && $date_of_death ) {
	$birth = new DateTime( $date_of_birth );
	$death = new DateTime( $date_of_death );
	$diff  = $birth->diff( $death );
	$age   = $diff->y;
}
?>

<div class="dp-card-meta dp-card-meta--obituary">
	<?php if ( $birth_fmt || $death_fmt ) : ?>
	<p class="dp-card-meta__dates">
		<?php
		if ( $birth_fmt && $death_fmt ) {
			echo esc_html( $birth_fmt ) . ' &mdash; ' . esc_html( $death_fmt );
		} elseif ( $death_fmt ) {
			/* translators: %s: date of death */
			printf( '† %s', esc_html( $death_fmt ) );
		}
		?>
	</p>
	<?php endif; ?>

	<?php if ( $age ) : ?>
	<p class="dp-card-meta__age">
		<?php
		/* translators: %s: age in years */
		printf( esc_html__( '%s jaar', 'die-papier' ), esc_html( $age ) );
		?>
	</p>
	<?php endif; ?>

	<?php if ( $location ) : ?>
	<p class="dp-card-meta__location">
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
		<?php echo esc_html( $location ); ?>
	</p>
	<?php endif; ?>
</div>
