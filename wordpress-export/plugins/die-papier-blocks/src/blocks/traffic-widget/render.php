<?php
/**
 * Traffic Widget — Server-side Render
 *
 * Server-renders a traffic incident list with client-side interactivity
 * for filtering and expanding incident details.
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

$max_items    = $attributes['maxItems'] ?? 6;
$region       = $attributes['region'] ?? 'boland';
$api_endpoint = $attributes['apiEndpoint'] ?? '';

// Try to get cached traffic data.
$transient_key = 'dp_traffic_' . sanitize_key( $region );
$incidents     = get_transient( $transient_key );

if ( false === $incidents ) {
	// Fallback — empty state. Client-side will fetch live data.
	$incidents = array();
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class'                => 'dp-traffic-widget',
	'data-wp-interactive'  => 'dp/traffic-widget',
	'data-wp-context'      => wp_json_encode( array(
		'region'      => $region,
		'maxItems'    => $max_items,
		'apiEndpoint' => $api_endpoint ?: rest_url( 'dp/v1/traffic' ),
		'expanded'    => array(),
		'loading'     => false,
	) ),
	'data-wp-init'         => 'actions.fetchIncidents',
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<div class="dp-traffic-widget__container">

		<div class="dp-traffic-widget__header">
			<h3 class="dp-traffic-widget__title">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
					<line x1="12" y1="9" x2="12" y2="13"/>
					<line x1="12" y1="17" x2="12.01" y2="17"/>
				</svg>
				<?php esc_html_e( 'Verkeer', 'die-papier-blocks' ); ?>
			</h3>
			<span class="dp-traffic-widget__region">
				<?php echo esc_html( ucfirst( $region ) ); ?>
			</span>
		</div>

		<div class="dp-traffic-widget__list" data-wp-bind--hidden="state.isEmpty">
			<?php if ( ! empty( $incidents ) ) :
				$display_incidents = array_slice( $incidents, 0, $max_items );
				foreach ( $display_incidents as $i => $incident ) :
			?>
			<div
				class="dp-traffic-widget__item"
				data-index="<?php echo esc_attr( $i ); ?>"
				data-wp-on--click="actions.toggleExpand"
			>
				<div class="dp-traffic-widget__item-header">
					<span class="dp-traffic-widget__item-severity dp-traffic-widget__item-severity--<?php echo esc_attr( $incident['severity'] ?? 'low' ); ?>">
						<?php echo esc_html( $incident['severity'] ?? 'Laag' ); ?>
					</span>
					<span class="dp-traffic-widget__item-location">
						<?php echo esc_html( $incident['location'] ?? '' ); ?>
					</span>
					<span class="dp-traffic-widget__item-time">
						<?php echo esc_html( $incident['time'] ?? '' ); ?>
					</span>
				</div>
				<div class="dp-traffic-widget__item-detail" hidden>
					<p><?php echo esc_html( $incident['description'] ?? '' ); ?></p>
				</div>
			</div>
			<?php
				endforeach;
			endif;
			?>
		</div>

		<div class="dp-traffic-widget__empty" data-wp-bind--hidden="state.hasIncidents">
			<p><?php esc_html_e( 'Geen verkeervoorvalle tans gerapporteer nie.', 'die-papier-blocks' ); ?></p>
		</div>

	</div>
</div>
