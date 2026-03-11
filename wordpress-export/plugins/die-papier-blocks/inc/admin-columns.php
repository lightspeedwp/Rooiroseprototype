<?php
/**
 * Custom Admin List Table Columns
 *
 * Adds useful meta columns to CPT admin screens.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ========================
// Events
// ========================
function dp_event_admin_columns( $columns ) {
	$new_columns = array();
	foreach ( $columns as $key => $value ) {
		$new_columns[ $key ] = $value;
		if ( 'title' === $key ) {
			$new_columns['event_date']    = 'Datum';
			$new_columns['location_name'] = 'Ligging';
			$new_columns['price']         = 'Prys';
		}
	}
	return $new_columns;
}
add_filter( 'manage_dp_event_posts_columns', 'dp_event_admin_columns' );

function dp_event_admin_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'event_date':
			$date = get_post_meta( $post_id, 'event_date', true );
			echo $date ? esc_html( wp_date( 'j M Y', strtotime( $date ) ) ) : '—';
			break;
		case 'location_name':
			echo esc_html( get_post_meta( $post_id, 'location_name', true ) ?: '—' );
			break;
		case 'price':
			$price = get_post_meta( $post_id, 'price', true );
			echo ( $price && $price > 0 ) ? 'R' . esc_html( number_format( (float) $price, 2 ) ) : 'Gratis';
			break;
	}
}
add_action( 'manage_dp_event_posts_custom_column', 'dp_event_admin_column_content', 10, 2 );

function dp_event_sortable_columns( $columns ) {
	$columns['event_date'] = 'event_date';
	$columns['price']      = 'price';
	return $columns;
}
add_filter( 'manage_edit-dp_event_sortable_columns', 'dp_event_sortable_columns' );

// ========================
// Obituaries
// ========================
function dp_obituary_admin_columns( $columns ) {
	$new_columns = array();
	foreach ( $columns as $key => $value ) {
		$new_columns[ $key ] = $value;
		if ( 'title' === $key ) {
			$new_columns['date_of_death']   = 'Sterfdatum';
			$new_columns['location']        = 'Ligging';
			$new_columns['service_date']    = 'Diens Datum';
		}
	}
	return $new_columns;
}
add_filter( 'manage_dp_obituary_posts_columns', 'dp_obituary_admin_columns' );

function dp_obituary_admin_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'date_of_death':
			$date = get_post_meta( $post_id, 'date_of_death', true );
			echo $date ? esc_html( wp_date( 'j M Y', strtotime( $date ) ) ) : '—';
			break;
		case 'location':
			echo esc_html( get_post_meta( $post_id, 'location', true ) ?: '—' );
			break;
		case 'service_date':
			$date = get_post_meta( $post_id, 'service_date', true );
			echo $date ? esc_html( wp_date( 'j M Y', strtotime( $date ) ) ) : '—';
			break;
	}
}
add_action( 'manage_dp_obituary_posts_custom_column', 'dp_obituary_admin_column_content', 10, 2 );

// ========================
// Sponsors
// ========================
function dp_sponsor_admin_columns( $columns ) {
	$new_columns = array();
	foreach ( $columns as $key => $value ) {
		$new_columns[ $key ] = $value;
		if ( 'title' === $key ) {
			$new_columns['sponsor_tier']  = 'Vlak';
			$new_columns['active_until']  = 'Aktief Tot';
			$new_columns['website_url']   = 'Webwerf';
		}
	}
	return $new_columns;
}
add_filter( 'manage_dp_sponsor_posts_columns', 'dp_sponsor_admin_columns' );

function dp_sponsor_admin_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'sponsor_tier':
			$terms = wp_get_post_terms( $post_id, 'dp_sponsor_tier', array( 'fields' => 'names' ) );
			echo ! empty( $terms ) ? esc_html( implode( ', ', $terms ) ) : '—';
			break;
		case 'active_until':
			$date = get_post_meta( $post_id, 'active_until', true );
			if ( $date ) {
				$is_expired = strtotime( $date ) < time();
				$label = esc_html( wp_date( 'j M Y', strtotime( $date ) ) );
				echo $is_expired ? '<span style="color:#E82C27">' . $label . ' (Verval)</span>' : $label;
			} else {
				echo '—';
			}
			break;
		case 'website_url':
			$url = get_post_meta( $post_id, 'website_url', true );
			echo $url ? '<a href="' . esc_url( $url ) . '" target="_blank">↗</a>' : '—';
			break;
	}
}
add_action( 'manage_dp_sponsor_posts_custom_column', 'dp_sponsor_admin_column_content', 10, 2 );

// ========================
// Competitions
// ========================
function dp_competition_admin_columns( $columns ) {
	$new_columns = array();
	foreach ( $columns as $key => $value ) {
		$new_columns[ $key ] = $value;
		if ( 'title' === $key ) {
			$new_columns['comp_status']    = 'Status';
			$new_columns['closing_date']   = 'Sluitingsdatum';
			$new_columns['prize_value']    = 'Pryswaarde';
		}
	}
	return $new_columns;
}
add_filter( 'manage_dp_competition_posts_columns', 'dp_competition_admin_columns' );

function dp_competition_admin_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'comp_status':
			$status = get_post_meta( $post_id, 'status', true );
			$labels = array(
				'open'             => '<span style="color:green">● Oop</span>',
				'closed'           => '<span style="color:#E82C27">● Gesluit</span>',
				'winner_announced' => '<span style="color:#1A3A5F">● Wenner Aangekondig</span>',
			);
			echo $labels[ $status ] ?? esc_html( $status ?: '—' );
			break;
		case 'closing_date':
			$date = get_post_meta( $post_id, 'closing_date', true );
			echo $date ? esc_html( wp_date( 'j M Y', strtotime( $date ) ) ) : '—';
			break;
		case 'prize_value':
			$value = get_post_meta( $post_id, 'prize_value', true );
			echo $value ? 'R' . esc_html( number_format( (float) $value, 2 ) ) : '—';
			break;
	}
}
add_action( 'manage_dp_competition_posts_custom_column', 'dp_competition_admin_column_content', 10, 2 );

// ========================
// E-Editions
// ========================
function dp_eedition_admin_columns( $columns ) {
	$new_columns = array();
	foreach ( $columns as $key => $value ) {
		$new_columns[ $key ] = $value;
		if ( 'title' === $key ) {
			$new_columns['publication_date'] = 'Publikasiedatum';
			$new_columns['edition_number']   = 'Uitgawenommer';
			$new_columns['eedition_price']   = 'Prys';
		}
	}
	return $new_columns;
}
add_filter( 'manage_dp_eedition_posts_columns', 'dp_eedition_admin_columns' );

function dp_eedition_admin_column_content( $column, $post_id ) {
	switch ( $column ) {
		case 'publication_date':
			$date = get_post_meta( $post_id, 'publication_date', true );
			echo $date ? esc_html( wp_date( 'j M Y', strtotime( $date ) ) ) : '—';
			break;
		case 'edition_number':
			echo esc_html( get_post_meta( $post_id, 'edition_number', true ) ?: '—' );
			break;
		case 'eedition_price':
			$is_free = get_post_meta( $post_id, 'is_free', true );
			if ( $is_free ) {
				echo '<span style="color:green">Gratis</span>';
			} else {
				$price = get_post_meta( $post_id, 'price', true );
				echo $price ? 'R' . esc_html( number_format( (float) $price, 2 ) ) : '—';
			}
			break;
	}
}
add_action( 'manage_dp_eedition_posts_custom_column', 'dp_eedition_admin_column_content', 10, 2 );

// ========================
// Sortable column orderby for meta_key queries
// ========================
function dp_custom_orderby( $query ) {
	if ( ! is_admin() || ! $query->is_main_query() ) {
		return;
	}

	$orderby = $query->get( 'orderby' );

	$meta_orderby_map = array(
		'event_date'       => array( 'meta_key' => 'event_date', 'orderby' => 'meta_value' ),
		'price'            => array( 'meta_key' => 'price', 'orderby' => 'meta_value_num' ),
		'closing_date'     => array( 'meta_key' => 'closing_date', 'orderby' => 'meta_value' ),
		'publication_date' => array( 'meta_key' => 'publication_date', 'orderby' => 'meta_value' ),
	);

	if ( isset( $meta_orderby_map[ $orderby ] ) ) {
		$query->set( 'meta_key', $meta_orderby_map[ $orderby ]['meta_key'] );
		$query->set( 'orderby', $meta_orderby_map[ $orderby ]['orderby'] );
	}
}
add_action( 'pre_get_posts', 'dp_custom_orderby' );