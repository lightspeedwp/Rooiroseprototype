<?php
/**
 * Secure Custom Fields (SCF/ACF) Configuration
 *
 * Configures JSON save/load points for field group sync,
 * and registers meta fields for REST API exposure.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Set SCF/ACF JSON save point to plugin directory.
 */
add_filter( 'acf/settings/save_json', function ( $path ) {
	return DP_BLOCKS_PATH . 'acf-json';
} );

/**
 * Add plugin directory as SCF/ACF JSON load point.
 */
add_filter( 'acf/settings/load_json', function ( $paths ) {
	$paths[] = DP_BLOCKS_PATH . 'acf-json';
	return $paths;
} );

/**
 * Register post meta for REST API visibility.
 *
 * This ensures custom fields are accessible via the REST API
 * and in the WordPress Block Editor sidebar.
 */
function dp_register_post_meta() {
	// --- Posts (Articles) ---
	$post_fields = array(
		'_dp_subtitle'     => 'string',
		'_dp_is_breaking'  => 'boolean',
		'_dp_is_sponsored' => 'boolean',
		'_dp_sponsor'      => 'string',
	);
	foreach ( $post_fields as $key => $type ) {
		register_post_meta( 'post', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Pages ---
	$page_fields = array(
		'_dp_page_pattern' => 'string',
	);
	foreach ( $page_fields as $key => $type ) {
		register_post_meta( 'page', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Events ---
	$event_fields = array(
		'event_date'       => 'string',
		'event_end_date'   => 'string',
		'location_name'    => 'string',
		'location_address' => 'string',
		'price'            => 'number',
		'organiser_name'   => 'string',
		'organiser_email'  => 'string',
		'website_url'      => 'string',
		'is_recurring'     => 'boolean',
		'recurrence'       => 'string',
		'max_attendees'    => 'integer',
	);
	foreach ( $event_fields as $key => $type ) {
		register_post_meta( 'dp_event', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Obituaries ---
	$obituary_fields = array(
		'date_of_birth'     => 'string',
		'date_of_death'     => 'string',
		'location'          => 'string',
		'service_date'      => 'string',
		'service_time'      => 'string',
		'service_location'  => 'string',
		'condolences_email' => 'string',
		'condolences_url'   => 'string',
	);
	foreach ( $obituary_fields as $key => $type ) {
		register_post_meta( 'dp_obituary', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Sponsors ---
	$sponsor_fields = array(
		'website_url'   => 'string',
		'active_until'  => 'string',
		'logo_id'       => 'integer',
		'contact_phone' => 'string',
		'contact_email' => 'string',
	);
	foreach ( $sponsor_fields as $key => $type ) {
		register_post_meta( 'dp_sponsor', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Competitions ---
	$competition_fields = array(
		'status'            => 'string',
		'closing_date'      => 'string',
		'prize_value'       => 'number',
		'prize_description' => 'string',
		'sponsor_name'      => 'string',
		'entry_method'      => 'string',
		'rules_url'         => 'string',
		'winner_name'       => 'string',
		'winner_email'      => 'string',
		'gravity_form_id'   => 'integer',
	);
	foreach ( $competition_fields as $key => $type ) {
		register_post_meta( 'dp_competition', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- Multimedia ---
	$multimedia_fields = array(
		'media_type'       => 'string',
		'duration'         => 'string',
		'video_url'        => 'string',
		'audio_url'        => 'string',
		'image_count'      => 'integer',
		'photographer'     => 'string',
		'publication_date' => 'string',
	);
	foreach ( $multimedia_fields as $key => $type ) {
		register_post_meta( 'dp_multimedia', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}

	// --- E-Editions ---
	$eedition_fields = array(
		'publication_date' => 'string',
		'edition_number'   => 'string',
		'page_count'       => 'integer',
		'price'            => 'number',
		'pdf_url'          => 'string',
		'cover_image_id'   => 'integer',
		'is_free'          => 'boolean',
	);
	foreach ( $eedition_fields as $key => $type ) {
		register_post_meta( 'dp_eedition', $key, array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => $type,
		) );
	}
}
add_action( 'init', 'dp_register_post_meta' );