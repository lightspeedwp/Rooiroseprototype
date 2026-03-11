<?php
/**
 * Title: Kompetisie Kaart Metadata
 * Slug: die-papier/card-competition-meta
 * Categories: die-papier-cards
 * Description: Compact competition meta for archive card: closing date + prize value.
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

$closing_date = get_post_meta( $post_id, 'closing_date', true );
$prize_value  = get_post_meta( $post_id, 'prize_value', true );
$status       = get_post_meta( $post_id, 'status', true ) ?: 'active';

$closing_fmt = $closing_date ? wp_date( 'j M Y', strtotime( $closing_date ) ) : '';
$prize_fmt   = $prize_value ? 'R' . number_format( (float) $prize_value, 0, ',', ' ' ) : '';

// Determine if expired.
$is_open = true;
if ( $closing_date ) {
	$is_open = strtotime( $closing_date ) > time();
}
?>

<div class="dp-card-meta dp-card-meta--competition">
	<?php if ( $prize_fmt ) : ?>
	<span class="dp-card-meta__item dp-card-meta__item--prize">
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
		<?php echo esc_html( $prize_fmt ); ?>
	</span>
	<?php endif; ?>

	<?php if ( $closing_fmt ) : ?>
	<span class="dp-card-meta__sep">&middot;</span>
	<span class="dp-card-meta__item">
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
		<?php
		if ( $is_open ) {
			/* translators: %s: closing date */
			printf( esc_html__( 'Sluit %s', 'die-papier' ), esc_html( $closing_fmt ) );
		} else {
			esc_html_e( 'Gesluit', 'die-papier' );
		}
		?>
	</span>
	<?php endif; ?>
</div>
