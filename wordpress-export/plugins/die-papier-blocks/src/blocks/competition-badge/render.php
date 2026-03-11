<?php
/**
 * Competition Badge — Server-side Render
 *
 * Displays a status badge: Oop (open), Sluit Binnekort (closing soon), Gesluit (closed).
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

$competition_id = $attributes['competitionId'] ?? 0;

if ( ! $competition_id ) {
	$competition_id = $block->context['postId'] ?? get_the_ID();
}

if ( ! $competition_id || 'dp_competition' !== get_post_type( $competition_id ) ) {
	return;
}

$close_date = get_post_meta( $competition_id, 'closing_date', true );

// Determine status.
$status       = 'open';
$status_label = __( 'Oop', 'die-papier-blocks' );

if ( $close_date ) {
	$close_timestamp = strtotime( $close_date );
	$now             = time();
	$days_left       = ( $close_timestamp - $now ) / DAY_IN_SECONDS;

	if ( $close_timestamp <= $now ) {
		$status       = 'closed';
		$status_label = __( 'Gesluit', 'die-papier-blocks' );
	} elseif ( $days_left <= 3 ) {
		$status       = 'closing';
		$status_label = __( 'Sluit Binnekort', 'die-papier-blocks' );
	}
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => 'dp-competition-badge dp-competition-badge--' . $status,
) );
?>

<span <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<?php echo esc_html( $status_label ); ?>
</span>