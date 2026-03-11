<?php
/**
 * Weather Widget — Server-side Render
 *
 * Server-renders current weather with client-side hydration for live updates.
 * Weather data is fetched from a configured API endpoint or cached transient.
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

$location      = $attributes['location'] ?? 'Paarl';
$show_forecast = $attributes['showForecast'] ?? true;
$api_endpoint  = $attributes['apiEndpoint'] ?? '';

// Available locations for the city selector.
$locations = array( 'Paarl', 'Stellenbosch', 'Franschhoek', 'Worcester', 'Wellington', 'Kaapstad', 'Hermanus', 'George' );

// Try to get cached weather data.
$transient_key = 'dp_weather_' . sanitize_key( $location );
$weather_data  = get_transient( $transient_key );

if ( false === $weather_data ) {
	// Fallback placeholder data — in production, fetch from API here.
	$weather_data = array(
		'temp'        => '--',
		'condition'   => __( 'Laai...', 'die-papier-blocks' ),
		'humidity'    => '--',
		'wind'        => '--',
		'icon'        => 'sun',
		'forecast'    => array(),
	);
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class'                => 'dp-weather-widget',
	'data-wp-interactive'  => 'dp/weather-widget',
	'data-wp-context'      => wp_json_encode( array(
		'location'     => $location,
		'showForecast' => $show_forecast,
		'apiEndpoint'  => $api_endpoint ?: rest_url( 'dp/v1/weather' ),
		'loading'      => false,
	) ),
	'data-wp-init'         => 'actions.fetchWeather',
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<div class="dp-weather-widget__container">

		<!-- City selector -->
		<div class="dp-weather-widget__header">
			<select
				class="dp-weather-widget__select"
				data-wp-on--change="actions.changeLocation"
				aria-label="<?php esc_attr_e( 'Kies stad', 'die-papier-blocks' ); ?>"
			>
				<?php foreach ( $locations as $loc ) : ?>
				<option value="<?php echo esc_attr( $loc ); ?>" <?php selected( $location, $loc ); ?>>
					<?php echo esc_html( $loc ); ?>
				</option>
				<?php endforeach; ?>
			</select>
		</div>

		<!-- Current weather -->
		<div class="dp-weather-widget__current">
			<div class="dp-weather-widget__icon" data-wp-text="state.weatherIcon">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
					<circle cx="12" cy="12" r="4"/>
					<path d="M12 2v2"/>
					<path d="M12 20v2"/>
					<path d="m4.93 4.93 1.41 1.41"/>
					<path d="m17.66 17.66 1.41 1.41"/>
					<path d="M2 12h2"/>
					<path d="M20 12h2"/>
					<path d="m6.34 17.66-1.41 1.41"/>
					<path d="m19.07 4.93-1.41 1.41"/>
				</svg>
			</div>
			<div class="dp-weather-widget__info">
				<span class="dp-weather-widget__temp" data-wp-text="state.temperature">
					<?php echo esc_html( $weather_data['temp'] ); ?>°C
				</span>
				<span class="dp-weather-widget__condition" data-wp-text="state.condition">
					<?php echo esc_html( $weather_data['condition'] ); ?>
				</span>
			</div>
		</div>

		<!-- Details -->
		<div class="dp-weather-widget__details">
			<div class="dp-weather-widget__detail">
				<span class="dp-weather-widget__detail-label"><?php esc_html_e( 'Humiditeit', 'die-papier-blocks' ); ?></span>
				<span class="dp-weather-widget__detail-value" data-wp-text="state.humidity">
					<?php echo esc_html( $weather_data['humidity'] ); ?>%
				</span>
			</div>
			<div class="dp-weather-widget__detail">
				<span class="dp-weather-widget__detail-label"><?php esc_html_e( 'Wind', 'die-papier-blocks' ); ?></span>
				<span class="dp-weather-widget__detail-value" data-wp-text="state.wind">
					<?php echo esc_html( $weather_data['wind'] ); ?> km/h
				</span>
			</div>
		</div>

	</div>
</div>
