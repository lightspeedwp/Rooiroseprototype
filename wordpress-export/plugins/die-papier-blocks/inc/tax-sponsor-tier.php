<?php
/**
 * Register Taxonomy: Sponsor Tier (dp_sponsor_tier)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_tax_sponsor_tier() {
	$labels = array(
		'name'              => 'Borgvlakke',
		'singular_name'     => 'Borgvlak',
		'search_items'      => 'Soek Vlakke',
		'all_items'         => 'Alle Vlakke',
		'edit_item'         => 'Wysig Vlak',
		'update_item'       => 'Werk Vlak Op',
		'add_new_item'      => 'Voeg Nuwe Vlak By',
		'new_item_name'     => 'Nuwe Vlak Naam',
		'menu_name'         => 'Borgvlakke',
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'borgvlak' ),
		// Default terms to seed:
		// - Gold (Goue)
		// - Silver (Silwer)
		// - Bronze (Brons)
	);

	register_taxonomy( 'dp_sponsor_tier', array( 'dp_sponsor' ), $args );
}
add_action( 'init', 'dp_register_tax_sponsor_tier' );
