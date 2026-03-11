<?php
/**
 * Competition Entry — Server-side Render
 *
 * Shows the entry form if competition is open, or a closed message if expired.
 * Uses dp_competition CPT with SCF fields for dates, prizes, and rules.
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

// Fall back to current post context.
if ( ! $competition_id ) {
	$competition_id = $block->context['postId'] ?? get_the_ID();
}

if ( ! $competition_id || 'dp_competition' !== get_post_type( $competition_id ) ) {
	return;
}

$title      = get_the_title( $competition_id );
$close_date = get_post_meta( $competition_id, 'closing_date', true );
$prize      = get_post_meta( $competition_id, 'prize_description', true );
$rules_url  = get_post_meta( $competition_id, 'rules_url', true );

// Determine if competition is still open.
$is_open = true;
if ( $close_date ) {
	$close_timestamp = strtotime( $close_date );
	$is_open         = $close_timestamp && $close_timestamp > time();
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class' => 'dp-competition-entry' . ( $is_open ? '' : ' dp-competition-entry--closed' ),
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<div class="dp-competition-entry__container">

		<?php if ( $is_open ) : ?>
			<div class="dp-competition-entry__header">
				<h2 class="dp-competition-entry__title"><?php echo esc_html( $title ); ?></h2>

				<?php if ( $prize ) : ?>
				<p class="dp-competition-entry__prize">
					<strong><?php esc_html_e( 'Prys:', 'die-papier-blocks' ); ?></strong>
					<?php echo esc_html( $prize ); ?>
				</p>
				<?php endif; ?>

				<?php if ( $close_date ) : ?>
				<p class="dp-competition-entry__deadline">
					<?php
					printf(
						/* translators: %s: closing date */
						esc_html__( 'Sluitingsdatum: %s', 'die-papier-blocks' ),
						esc_html( wp_date( 'd F Y', strtotime( $close_date ) ) )
					);
					?>
				</p>
				<?php endif; ?>
			</div>

			<form class="dp-competition-entry__form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'dp_competition_entry_' . $competition_id ); ?>
				<input type="hidden" name="action" value="dp_competition_submit" />
				<input type="hidden" name="competition_id" value="<?php echo esc_attr( $competition_id ); ?>" />

				<div class="dp-competition-entry__field">
					<label for="dp-comp-name-<?php echo $competition_id; ?>" class="dp-competition-entry__label">
						<?php esc_html_e( 'Volle Naam', 'die-papier-blocks' ); ?>
					</label>
					<input
						type="text"
						id="dp-comp-name-<?php echo $competition_id; ?>"
						name="full_name"
						required
						class="dp-competition-entry__input"
					/>
				</div>

				<div class="dp-competition-entry__field">
					<label for="dp-comp-email-<?php echo $competition_id; ?>" class="dp-competition-entry__label">
						<?php esc_html_e( 'E-posadres', 'die-papier-blocks' ); ?>
					</label>
					<input
						type="email"
						id="dp-comp-email-<?php echo $competition_id; ?>"
						name="email"
						required
						class="dp-competition-entry__input"
					/>
				</div>

				<div class="dp-competition-entry__field">
					<label for="dp-comp-phone-<?php echo $competition_id; ?>" class="dp-competition-entry__label">
						<?php esc_html_e( 'Telefoonnommer', 'die-papier-blocks' ); ?>
					</label>
					<input
						type="tel"
						id="dp-comp-phone-<?php echo $competition_id; ?>"
						name="phone"
						class="dp-competition-entry__input"
					/>
				</div>

				<?php if ( $rules_url ) : ?>
				<div class="dp-competition-entry__rules">
					<label class="dp-competition-entry__checkbox-label">
						<input type="checkbox" name="accept_rules" required />
						<?php
						printf(
							/* translators: %s: link to rules */
							wp_kses_post( __( 'Ek aanvaar die <a href="%s" target="_blank" rel="noopener">kompetisiereëls</a>.', 'die-papier-blocks' ) ),
							esc_url( $rules_url )
						);
						?>
					</label>
				</div>
				<?php endif; ?>

				<button type="submit" class="dp-competition-entry__submit">
					<?php esc_html_e( 'Skryf In', 'die-papier-blocks' ); ?>
				</button>
			</form>

		<?php else : ?>
			<div class="dp-competition-entry__closed-msg">
				<h2 class="dp-competition-entry__title"><?php echo esc_html( $title ); ?></h2>
				<p class="dp-competition-entry__closed-text">
					<?php esc_html_e( 'Hierdie kompetisie is gesluit. Dankie vir jou belangstelling!', 'die-papier-blocks' ); ?>
				</p>
			</div>
		<?php endif; ?>

	</div>
</div>