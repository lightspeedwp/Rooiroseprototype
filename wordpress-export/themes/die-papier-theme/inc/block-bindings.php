<?php
/**
 * Block Bindings Registration.
 *
 * Registers custom Block Bindings API sources for dynamic content
 * in patterns. Allows core/paragraph, core/heading, etc. to bind
 * their content to CPT meta fields without custom blocks.
 *
 * @package DiePapierTheme
 * @since   1.0.0
 */
namespace DiePapierTema\includes;


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
	 * Registers custom block binding sources.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function register_block_bindings() {
		if ( ! function_exists( 'register_block_bindings_source' ) ) {
			return; // Requires WordPress 6.5+.
		}

		// CPT meta binding source.
		register_block_bindings_source( 'die-papier/cpt-meta', array(
			'label'              => __( 'Die Papier CPT Meta', 'diepapiertema' ),
		'get_value_callback' => __NAMESPACE__ . '\get_cpt_meta_value',
		'uses_context'       => array( 'postId', 'postType' ),
	) );

	// Site-wide data binding source.
	register_block_bindings_source( 'die-papier/site-data', array(
		'label'              => __( 'Die Papier Werfdata', 'diepapiertema' ),
		'get_value_callback' => __NAMESPACE__ . '\get_site_data_value',
		) );
	}
add_action( 'init', __NAMESPACE__ . '\register_block_bindings' );

/**
	 * Returns formatted CPT meta values for Block Bindings API.
	 *
	 * Supported keys by CPT:
	 *   dp_event:       event_date, event_time, event_location, event_url, event_cost
	 *   dp_obituary:    obituary_dates, funeral_details, funeral_date, funeral_location
	 *   dp_sponsor:     sponsor_url, sponsor_tier
	 *   dp_eedition:    issue_date, issuu_url, edition_type, pdf_url
	 *   dp_competition: competition_status, entry_deadline, prize_description
	 *   dp_multimedia:  media_type, media_url, media_duration
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @param array    $source_args    Binding source arguments (must include 'key').
	 * @param WP_Block $block_instance Block instance.
	 * @param string   $attribute_name Attribute name being bound.
	 * @return string|null Formatted value or null.
	 */
	function get_cpt_meta_value( $source_args, $block_instance, $attribute_name ) {
		if ( ! isset( $source_args['key'] ) ) {
			return null;
		}

		$post_id   = $block_instance->context['postId'] ?? null;
		$post_type = $block_instance->context['postType'] ?? '';

		if ( ! $post_id ) {
			return null;
		}

		$key = sanitize_key( $source_args['key'] );

		switch ( $key ) {
			// -- dp_event -------------------------------------------------------
			case 'event_date':
				$date = get_post_meta( $post_id, 'dp_event_date', true );
				return $date ? wp_date( 'j F Y', strtotime( $date ) ) : null;

			case 'event_time':
				return get_post_meta( $post_id, 'dp_event_time', true ) ?: null;

			case 'event_location':
				return get_post_meta( $post_id, 'dp_event_location', true ) ?: null;

			case 'event_url':
				return get_post_meta( $post_id, 'dp_event_url', true ) ?: null;

			case 'event_cost':
				$cost = get_post_meta( $post_id, 'dp_event_cost', true );
				return $cost ? sprintf( 'R%s', number_format_i18n( (float) $cost, 2 ) ) : __( 'Gratis', 'diepapiertema' );

			// -- dp_obituary ----------------------------------------------------
			case 'obituary_dates':
				$birth = get_post_meta( $post_id, 'dp_obituary_birth_date', true );
				$death = get_post_meta( $post_id, 'dp_obituary_death_date', true );
				if ( $birth && $death ) {
					return sprintf(
						'%s – %s',
						wp_date( 'j F Y', strtotime( $birth ) ),
						wp_date( 'j F Y', strtotime( $death ) )
					);
				}
				return $death ? wp_date( 'j F Y', strtotime( $death ) ) : null;

			case 'funeral_details':
				return get_post_meta( $post_id, 'dp_obituary_funeral_details', true ) ?: null;

			case 'funeral_date':
				$date = get_post_meta( $post_id, 'dp_obituary_funeral_date', true );
				return $date ? wp_date( 'j F Y \o\m H:i', strtotime( $date ) ) : null;

			case 'funeral_location':
				return get_post_meta( $post_id, 'dp_obituary_funeral_location', true ) ?: null;

			// -- dp_sponsor -----------------------------------------------------
			case 'sponsor_url':
				return get_post_meta( $post_id, 'dp_sponsor_url', true ) ?: null;

			case 'sponsor_tier':
				$terms = get_the_terms( $post_id, 'dp_sponsor_tier' );
				return ( ! empty( $terms ) && ! is_wp_error( $terms ) )
					? esc_html( $terms[0]->name )
					: null;

			// -- dp_eedition ----------------------------------------------------
			case 'issue_date':
				$date = get_post_meta( $post_id, 'dp_eedition_issue_date', true );
				return $date ? wp_date( 'j F Y', strtotime( $date ) ) : null;

			case 'issuu_url':
				return get_post_meta( $post_id, 'dp_eedition_issuu_url', true ) ?: null;

			case 'edition_type':
				$terms = get_the_terms( $post_id, 'dp_edition_type' );
				return ( ! empty( $terms ) && ! is_wp_error( $terms ) )
					? esc_html( $terms[0]->name )
					: null;

			case 'pdf_url':
				return get_post_meta( $post_id, 'dp_eedition_pdf_url', true ) ?: null;

			// -- dp_competition -------------------------------------------------
			case 'competition_status':
				$deadline = get_post_meta( $post_id, 'dp_competition_deadline', true );
				if ( $deadline && strtotime( $deadline ) < time() ) {
					return __( 'Gesluit', 'diepapiertema' );
				}
				return __( 'Oop', 'diepapiertema' );

			case 'entry_deadline':
				$deadline = get_post_meta( $post_id, 'dp_competition_deadline', true );
				return $deadline ? wp_date( 'j F Y \o\m H:i', strtotime( $deadline ) ) : null;

			case 'prize_description':
				return get_post_meta( $post_id, 'dp_competition_prize', true ) ?: null;

			// -- dp_multimedia --------------------------------------------------
			case 'media_type':
				$terms = get_the_terms( $post_id, 'dp_multimedia_category' );
				return ( ! empty( $terms ) && ! is_wp_error( $terms ) )
					? esc_html( $terms[0]->name )
					: null;

			case 'media_url':
				return get_post_meta( $post_id, 'dp_multimedia_url', true ) ?: null;

			case 'media_duration':
				return get_post_meta( $post_id, 'dp_multimedia_duration', true ) ?: null;

			default:
				return null;
		}
	}

/**
	 * Returns site-wide data values for Block Bindings API.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @param array    $source_args    Binding source arguments.
	 * @param WP_Block $block_instance Block instance.
	 * @param string   $attribute_name Attribute name being bound.
	 * @return string|null Value or null.
	 */
	function get_site_data_value( $source_args, $block_instance, $attribute_name ) {
		if ( ! isset( $source_args['key'] ) ) {
			return null;
		}

		switch ( $source_args['key'] ) {
			case 'site_title':
				return get_bloginfo( 'name' );

			case 'site_tagline':
				return get_bloginfo( 'description' );

			case 'current_year':
				return wp_date( 'Y' );

			default:
				return null;
		}
	}
