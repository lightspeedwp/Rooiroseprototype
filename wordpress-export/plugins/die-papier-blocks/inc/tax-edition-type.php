<?php
/**
 * Register Taxonomy: Edition Type (dp_edition_type)
 *
 * Classifies e-editions by frequency: Weekliks, Daagliks, Spesiale Bylae.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_tax_edition_type() {
	$labels = array(
		'name'              => 'Uitgawetipes',
		'singular_name'     => 'Uitgawetipe',
		'search_items'      => 'Soek Uitgawetipes',
		'all_items'         => 'Alle Uitgawetipes',
		'edit_item'         => 'Wysig Uitgawetipe',
		'update_item'       => 'Werk Uitgawetipe Op',
		'add_new_item'      => 'Voeg Nuwe Uitgawetipe By',
		'new_item_name'     => 'Nuwe Uitgawetipe Naam',
		'menu_name'         => 'Uitgawetipes',
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'uitgawetipe' ),
	);

	register_taxonomy( 'dp_edition_type', array( 'dp_eedition' ), $args );
}
add_action( 'init', 'dp_register_tax_edition_type' );
