<?php
/**
 * Custom REST API Endpoints
 *
 * Namespace: dp/v1
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register custom REST routes.
 */
function dp_register_rest_routes() {

	// GET /wp-json/dp/v1/weather
	register_rest_route( 'dp/v1', '/weather', array(
		'methods'             => 'GET',
		'callback'            => 'dp_rest_get_weather',
		'permission_callback' => '__return_true',
		'args'                => array(
			'location' => array(
				'default'           => 'Paarl',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	) );

	// GET /wp-json/dp/v1/traffic
	register_rest_route( 'dp/v1', '/traffic', array(
		'methods'             => 'GET',
		'callback'            => 'dp_rest_get_traffic',
		'permission_callback' => '__return_true',
		'args'                => array(
			'region' => array(
				'default'           => 'boland',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'max' => array(
				'default'           => 6,
				'sanitize_callback' => 'absint',
			),
		),
	) );

	// GET /wp-json/dp/v1/events/upcoming
	register_rest_route( 'dp/v1', '/events/upcoming', array(
		'methods'             => 'GET',
		'callback'            => 'dp_rest_get_upcoming_events',
		'permission_callback' => '__return_true',
		'args'                => array(
			'per_page' => array(
				'default'           => 6,
				'sanitize_callback' => 'absint',
			),
			'category' => array(
				'default'           => '',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	) );

	// GET /wp-json/dp/v1/obituaries/recent
	register_rest_route( 'dp/v1', '/obituaries/recent', array(
		'methods'             => 'GET',
		'callback'            => 'dp_rest_get_recent_obituaries',
		'permission_callback' => '__return_true',
		'args'                => array(
			'per_page' => array(
				'default'           => 10,
				'sanitize_callback' => 'absint',
			),
		),
	) );

	// GET /wp-json/dp/v1/sponsors/active
	register_rest_route( 'dp/v1', '/sponsors/active', array(
		'methods'             => 'GET',
		'callback'            => 'dp_rest_get_active_sponsors',
		'permission_callback' => '__return_true',
		'args'                => array(
			'tier' => array(
				'default'           => '',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	) );

	// POST /wp-json/dp/v1/submissions/event
	register_rest_route( 'dp/v1', '/submissions/event', array(
		'methods'             => 'POST',
		'callback'            => 'dp_rest_submit_event',
		'permission_callback' => 'is_user_logged_in',
	) );

	// POST /wp-json/dp/v1/submissions/obituary
	register_rest_route( 'dp/v1', '/submissions/obituary', array(
		'methods'             => 'POST',
		'callback'            => 'dp_rest_submit_obituary',
		'permission_callback' => 'is_user_logged_in',
	) );
}
add_action( 'rest_api_init', 'dp_register_rest_routes' );

/**
 * Callback: GET weather data for a location.
 *
 * Checks transient cache first, then fetches from OpenWeatherMap API.
 * Falls back to mock data if no API key is configured.
 *
 * Response shape (matches view.js expectations):
 * {
 *   "temp": 22,
 *   "condition": "Sonnig",
 *   "humidity": 45,
 *   "wind": 12,
 *   "icon": "sun",
 *   "forecast": []
 * }
 *
 * Configure your OpenWeatherMap API key via:
 *   update_option( 'dp_weather_api_key', 'YOUR_KEY' );
 *
 * @param WP_REST_Request $request The request object.
 * @return WP_REST_Response
 */
function dp_rest_get_weather( WP_REST_Request $request ) {
	$location = $request->get_param( 'location' );

	// Check transient cache (15-minute TTL).
	$transient_key = 'dp_weather_' . sanitize_key( $location );
	$cached        = get_transient( $transient_key );

	if ( false !== $cached ) {
		return new WP_REST_Response( $cached, 200 );
	}

	// Attempt to fetch from OpenWeatherMap if API key is configured.
	$api_key = get_option( 'dp_weather_api_key', '' );

	if ( ! empty( $api_key ) ) {
		$api_url  = sprintf(
			'https://api.openweathermap.org/data/2.5/weather?q=%s,ZA&appid=%s&units=metric&lang=af',
			rawurlencode( $location ),
			rawurlencode( $api_key )
		);
		$response = wp_remote_get( $api_url, array( 'timeout' => 5 ) );

		if ( ! is_wp_error( $response ) && 200 === wp_remote_retrieve_response_code( $response ) ) {
			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( isset( $body['main'] ) ) {
				// Map OpenWeatherMap icon codes to simple labels.
				$icon_map = array(
					'01' => 'sun',
					'02' => 'cloud-sun',
					'03' => 'cloud',
					'04' => 'cloud',
					'09' => 'cloud-rain',
					'10' => 'cloud-rain',
					'11' => 'cloud-lightning',
					'13' => 'snowflake',
					'50' => 'cloud-fog',
				);
				$icon_code = substr( $body['weather'][0]['icon'] ?? '01d', 0, 2 );

				$weather_data = array(
					'temp'      => round( $body['main']['temp'] ),
					'condition' => ucfirst( $body['weather'][0]['description'] ?? 'Onbekend' ),
					'humidity'  => $body['main']['humidity'] ?? 0,
					'wind'      => isset( $body['wind']['speed'] ) ? round( $body['wind']['speed'] * 3.6 ) : 0, // m/s → km/h
					'icon'      => $icon_map[ $icon_code ] ?? 'sun',
					'forecast'  => array(),
				);

				// Cache for 15 minutes.
				set_transient( $transient_key, $weather_data, 15 * MINUTE_IN_SECONDS );

				return new WP_REST_Response( $weather_data, 200 );
			}
		}
	}

	// Fallback: Return mock weather data per location.
	// In production, replace dp_weather_api_key option with a real OpenWeatherMap key.
	$mock_data = array(
		'Paarl'         => array( 'temp' => 24, 'condition' => 'Sonnig',        'humidity' => 42, 'wind' => 14, 'icon' => 'sun' ),
		'Stellenbosch'  => array( 'temp' => 22, 'condition' => 'Deels bewolk',  'humidity' => 48, 'wind' => 11, 'icon' => 'cloud-sun' ),
		'Franschhoek'   => array( 'temp' => 21, 'condition' => 'Bewolk',        'humidity' => 55, 'wind' => 8,  'icon' => 'cloud' ),
		'Worcester'     => array( 'temp' => 28, 'condition' => 'Sonnig',        'humidity' => 30, 'wind' => 18, 'icon' => 'sun' ),
		'Wellington'    => array( 'temp' => 25, 'condition' => 'Sonnig',        'humidity' => 38, 'wind' => 12, 'icon' => 'sun' ),
		'Kaapstad'      => array( 'temp' => 20, 'condition' => 'Deels bewolk',  'humidity' => 65, 'wind' => 22, 'icon' => 'cloud-sun' ),
		'Hermanus'      => array( 'temp' => 18, 'condition' => 'Winderig',      'humidity' => 72, 'wind' => 28, 'icon' => 'cloud' ),
		'George'        => array( 'temp' => 19, 'condition' => 'Ligte reën',    'humidity' => 78, 'wind' => 15, 'icon' => 'cloud-rain' ),
	);

	$data = $mock_data[ $location ] ?? $mock_data['Paarl'];
	$data['forecast'] = array();

	// Cache mock data for 15 minutes too (avoids repeated fallbacks).
	set_transient( $transient_key, $data, 15 * MINUTE_IN_SECONDS );

	return new WP_REST_Response( $data, 200 );
}

/**
 * Callback: GET traffic incidents for a region.
 *
 * Checks transient cache first, then fetches from external traffic API.
 * Falls back to mock data if no API key is configured.
 *
 * Response shape (matches view.js expectations):
 * {
 *   "incidents": [
 *     {
 *       "severity": "high|medium|low",
 *       "location": "N1 naby Paarl",
 *       "time": "08:30",
 *       "description": "Ongeluk op die N1..."
 *     }
 *   ]
 * }
 *
 * Configure your traffic API key via:
 *   update_option( 'dp_traffic_api_key', 'YOUR_KEY' );
 *
 * @param WP_REST_Request $request The request object.
 * @return WP_REST_Response
 */
function dp_rest_get_traffic( WP_REST_Request $request ) {
	$region = $request->get_param( 'region' );
	$max    = $request->get_param( 'max' );

	// Check transient cache (5-minute TTL — traffic data is more time-sensitive).
	$transient_key = 'dp_traffic_' . sanitize_key( $region );
	$cached        = get_transient( $transient_key );

	if ( false !== $cached ) {
		// Respect `max` param on cached data.
		$cached['incidents'] = array_slice( $cached['incidents'] ?? array(), 0, $max );
		return new WP_REST_Response( $cached, 200 );
	}

	// Attempt to fetch from external traffic API if key is configured.
	$api_key = get_option( 'dp_traffic_api_key', '' );

	if ( ! empty( $api_key ) ) {
		// TODO: Replace with your actual traffic data provider (e.g., TomTom, HERE, or i-Traffic).
		$api_url  = sprintf(
			'https://api.example.com/traffic/v1/incidents?region=%s&limit=%d&key=%s',
			rawurlencode( $region ),
			$max,
			rawurlencode( $api_key )
		);
		$response = wp_remote_get( $api_url, array( 'timeout' => 5 ) );

		if ( ! is_wp_error( $response ) && 200 === wp_remote_retrieve_response_code( $response ) ) {
			$body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( isset( $body['incidents'] ) && is_array( $body['incidents'] ) ) {
				$incidents = array_map( function ( $incident ) {
					return array(
						'severity'    => sanitize_text_field( $incident['severity'] ?? 'low' ),
						'location'    => sanitize_text_field( $incident['location'] ?? '' ),
						'time'        => sanitize_text_field( $incident['time'] ?? '' ),
						'description' => sanitize_text_field( $incident['description'] ?? '' ),
					);
				}, $body['incidents'] );

				$traffic_data = array( 'incidents' => array_slice( $incidents, 0, $max ) );

				// Cache for 5 minutes.
				set_transient( $transient_key, $traffic_data, 5 * MINUTE_IN_SECONDS );

				return new WP_REST_Response( $traffic_data, 200 );
			}
		}
	}

	// Fallback: Return mock traffic data per region.
	// In production, replace dp_traffic_api_key option with a real traffic API key.
	$mock_incidents = array(
		'boland' => array(
			array( 'severity' => 'high',   'location' => 'N1 naby Paarl-tolhek',           'time' => '07:45', 'description' => 'Ernstige ongeluk met twee voertuie. Regterbaan geblokkeer. Vermy die area indien moontlik.' ),
			array( 'severity' => 'medium', 'location' => 'R44 Stellenbosch–Franschhoek',    'time' => '08:15', 'description' => 'Padwerke tussen Kylemore en Franschhoek. Verwag vertragings van 15–20 minute.' ),
			array( 'severity' => 'low',    'location' => 'R45 Wellington–Hermon',            'time' => '09:00', 'description' => 'Slaggate gevul. Ry versigtig in nat toestande.' ),
			array( 'severity' => 'medium', 'location' => 'N1 Du Toitskloof-tonnel',         'time' => '10:30', 'description' => 'Slegs een baan oop weens onderhoud. Alternatief: Bainskloof-pas.' ),
			array( 'severity' => 'low',    'location' => 'R301 Paarl–Malmesbury',           'time' => '11:00', 'description' => 'Tydelike verkeersligte nie-funksioneel. Verkeersbeampte op toneel.' ),
			array( 'severity' => 'high',   'location' => 'N2 Sir Lowry\'s-pas',             'time' => '12:15', 'description' => 'Vragmotor omgeval. Pad heeltemal geblokkeer. Gebruik R44 as alternatief.' ),
			array( 'severity' => 'low',    'location' => 'Hoofstraat, Paarl',               'time' => '13:45', 'description' => 'Waterpyp gebars. Linkerbaan geblokkeer naby Pick n Pay.' ),
			array( 'severity' => 'medium', 'location' => 'R304 Stellenbosch–Franschhoek',   'time' => '14:20', 'description' => 'Botsing by Helshoogte-pas. Nooddienste op toneel.' ),
		),
		'winelands' => array(
			array( 'severity' => 'medium', 'location' => 'R44 Stellenbosch–Somerset-Wes',   'time' => '08:00', 'description' => 'Swaar verkeer weens oggendspitsuur. Verwag vertragings.' ),
			array( 'severity' => 'low',    'location' => 'R310 Stellenbosch–Kuils River',    'time' => '09:30', 'description' => 'Ligte ongeluk opgeruim. Verkeer vloei weer normaal.' ),
			array( 'severity' => 'high',   'location' => 'N2 Somerset-Wes–Kaapstad',        'time' => '07:15', 'description' => 'Multi-voertuig-botsing. Twee bane geblokkeer.' ),
			array( 'severity' => 'low',    'location' => 'Dorpstraat, Stellenbosch',         'time' => '10:45', 'description' => 'Kragonderbreking beïnvloed verkeersligte.' ),
		),
		'western-cape' => array(
			array( 'severity' => 'high',   'location' => 'N1 Kaapstad–Paarl',               'time' => '06:30', 'description' => 'Groot ongeluk by Huguenot-tonnel. Ernstige vertragings.' ),
			array( 'severity' => 'medium', 'location' => 'N2 Kaapstad–Luchhawe',            'time' => '07:00', 'description' => 'Padwerke by Borcherds Quarry-aansluiting.' ),
			array( 'severity' => 'low',    'location' => 'M5 Kaapstad–Muizenberg',           'time' => '08:45', 'description' => 'Ligte oorstroming na reënbui. Ry stadig.' ),
			array( 'severity' => 'medium', 'location' => 'N7 Kaapstad–Malmesbury',          'time' => '09:15', 'description' => 'Vee op die pad naby Philadelphia. Wees bedag.' ),
			array( 'severity' => 'high',   'location' => 'R27 Weskusweg',                   'time' => '11:30', 'description' => 'Brand langs pad naby Koeberg. Rook verminder sigbaarheid.' ),
		),
	);

	$incidents    = $mock_incidents[ $region ] ?? $mock_incidents['boland'];
	$traffic_data = array( 'incidents' => array_slice( $incidents, 0, $max ) );

	// Cache mock data for 5 minutes.
	set_transient( $transient_key, $traffic_data, 5 * MINUTE_IN_SECONDS );

	return new WP_REST_Response( $traffic_data, 200 );
}

/**
 * Callback: GET upcoming events.
 *
 * Returns events where event_date >= today, ordered by event_date ASC.
 */
function dp_rest_get_upcoming_events( WP_REST_Request $request ) {
	$per_page = $request->get_param( 'per_page' );
	$category = $request->get_param( 'category' );

	$args = array(
		'post_type'      => 'dp_event',
		'posts_per_page' => $per_page,
		'meta_key'       => 'event_date',
		'orderby'        => 'meta_value',
		'order'          => 'ASC',
		'meta_query'     => array(
			array(
				'key'     => 'event_date',
				'value'   => current_time( 'Y-m-d' ),
				'compare' => '>=',
				'type'    => 'DATE',
			),
		),
	);

	if ( ! empty( $category ) ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'dp_event_category',
				'field'    => 'slug',
				'terms'    => $category,
			),
		);
	}

	$query = new WP_Query( $args );
	$events = array();

	foreach ( $query->posts as $post ) {
		$events[] = array(
			'id'               => $post->ID,
			'title'            => get_the_title( $post ),
			'slug'             => $post->post_name,
			'excerpt'          => get_the_excerpt( $post ),
			'featured_image'   => get_the_post_thumbnail_url( $post, 'medium_large' ),
			'link'             => get_permalink( $post ),
			'event_date'       => get_post_meta( $post->ID, 'event_date', true ),
			'event_end_date'   => get_post_meta( $post->ID, 'event_end_date', true ),
			'location_name'    => get_post_meta( $post->ID, 'location_name', true ),
			'location_address' => get_post_meta( $post->ID, 'location_address', true ),
			'price'            => (float) get_post_meta( $post->ID, 'price', true ),
		);
	}

	return new WP_REST_Response( $events, 200 );
}

/**
 * Callback: GET recent obituaries.
 *
 * Returns obituaries from the last 30 days, ordered by date DESC.
 */
function dp_rest_get_recent_obituaries( WP_REST_Request $request ) {
	$per_page = $request->get_param( 'per_page' );

	$args = array(
		'post_type'      => 'dp_obituary',
		'posts_per_page' => $per_page,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'date_query'     => array(
			array(
				'after' => '30 days ago',
			),
		),
	);

	$query = new WP_Query( $args );
	$obituaries = array();

	foreach ( $query->posts as $post ) {
		$obituaries[] = array(
			'id'              => $post->ID,
			'title'           => get_the_title( $post ),
			'slug'            => $post->post_name,
			'excerpt'         => get_the_excerpt( $post ),
			'featured_image'  => get_the_post_thumbnail_url( $post, 'medium' ),
			'link'            => get_permalink( $post ),
			'date_of_birth'   => get_post_meta( $post->ID, 'date_of_birth', true ),
			'date_of_death'   => get_post_meta( $post->ID, 'date_of_death', true ),
			'location'        => get_post_meta( $post->ID, 'location', true ),
			'service_date'    => get_post_meta( $post->ID, 'service_date', true ),
		);
	}

	return new WP_REST_Response( $obituaries, 200 );
}

/**
 * Callback: GET active sponsors.
 *
 * Returns sponsors where active_until >= today, ordered by tier weight.
 */
function dp_rest_get_active_sponsors( WP_REST_Request $request ) {
	$tier = $request->get_param( 'tier' );

	$args = array(
		'post_type'      => 'dp_sponsor',
		'posts_per_page' => 50,
		'meta_query'     => array(
			'relation' => 'OR',
			array(
				'key'     => 'active_until',
				'value'   => current_time( 'Y-m-d' ),
				'compare' => '>=',
				'type'    => 'DATE',
			),
			array(
				'key'     => 'active_until',
				'compare' => 'NOT EXISTS',
			),
		),
	);

	if ( ! empty( $tier ) ) {
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'dp_sponsor_tier',
				'field'    => 'slug',
				'terms'    => $tier,
			),
		);
	}

	$query = new WP_Query( $args );
	$sponsors = array();

	foreach ( $query->posts as $post ) {
		$tiers = wp_get_post_terms( $post->ID, 'dp_sponsor_tier', array( 'fields' => 'slugs' ) );
		$sponsors[] = array(
			'id'             => $post->ID,
			'title'          => get_the_title( $post ),
			'slug'           => $post->post_name,
			'featured_image' => get_the_post_thumbnail_url( $post, 'medium' ),
			'link'           => get_permalink( $post ),
			'website_url'    => get_post_meta( $post->ID, 'website_url', true ),
			'tier'           => ! empty( $tiers ) ? $tiers[0] : 'bronze',
		);
	}

	return new WP_REST_Response( $sponsors, 200 );
}

/**
 * Callback: POST submit event (creates draft).
 */
function dp_rest_submit_event( WP_REST_Request $request ) {
	$params = $request->get_json_params();

	$post_data = array(
		'post_type'   => 'dp_event',
		'post_status' => 'draft',
		'post_title'  => sanitize_text_field( $params['title'] ?? '' ),
		'post_content' => wp_kses_post( $params['description'] ?? '' ),
		'post_author' => get_current_user_id(),
	);

	$post_id = wp_insert_post( $post_data, true );

	if ( is_wp_error( $post_id ) ) {
		return new WP_REST_Response( array( 'error' => $post_id->get_error_message() ), 400 );
	}

	// Save meta fields
	$meta_fields = array( 'event_date', 'event_end_date', 'location_name', 'location_address', 'price', 'organiser_name', 'organiser_email', 'website_url' );
	foreach ( $meta_fields as $key ) {
		if ( isset( $params[ $key ] ) ) {
			update_post_meta( $post_id, $key, sanitize_text_field( $params[ $key ] ) );
		}
	}

	return new WP_REST_Response( array(
		'success' => true,
		'post_id' => $post_id,
		'message' => 'Jou gebeurtenis is ingedien en wag vir goedkeuring.',
	), 201 );
}

/**
 * Callback: POST submit obituary (creates draft).
 */
function dp_rest_submit_obituary( WP_REST_Request $request ) {
	$params = $request->get_json_params();

	$post_data = array(
		'post_type'   => 'dp_obituary',
		'post_status' => 'draft',
		'post_title'  => sanitize_text_field( $params['title'] ?? '' ),
		'post_content' => wp_kses_post( $params['content'] ?? '' ),
		'post_author' => get_current_user_id(),
	);

	$post_id = wp_insert_post( $post_data, true );

	if ( is_wp_error( $post_id ) ) {
		return new WP_REST_Response( array( 'error' => $post_id->get_error_message() ), 400 );
	}

	$meta_fields = array( 'date_of_birth', 'date_of_death', 'location', 'service_date', 'service_time', 'service_location' );
	foreach ( $meta_fields as $key ) {
		if ( isset( $params[ $key ] ) ) {
			update_post_meta( $post_id, $key, sanitize_text_field( $params[ $key ] ) );
		}
	}

	return new WP_REST_Response( array(
		'success' => true,
		'post_id' => $post_id,
		'message' => 'Jou doodsberig is ingedien en wag vir goedkeuring.',
	), 201 );
}