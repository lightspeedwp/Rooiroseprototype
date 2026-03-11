<?php
/**
 * Register Custom Post Type: E-Editions (dp_eedition)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_eedition() {
	$labels = array(
		'name'                  => 'E-Uitgawes',
		'singular_name'         => 'E-Uitgawe',
		'menu_name'             => 'E-Uitgawes',
		'name_admin_bar'        => 'E-Uitgawe',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe E-Uitgawe By',
		'new_item'              => 'Nuwe E-Uitgawe',
		'edit_item'             => 'Wysig E-Uitgawe',
		'view_item'             => 'Bekyk E-Uitgawe',
		'all_items'             => 'Alle E-Uitgawes',
		'search_items'          => 'Soek E-Uitgawes',
		'not_found'             => 'Geen e-uitgawes gevind nie.',
		'not_found_in_trash'    => 'Geen e-uitgawes in asblik nie.',
		'archives'              => 'E-Uitgawes Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'e-uitgawes', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 24,
		'menu_icon'          => 'dashicons-media-document',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	);

	register_post_type( 'dp_eedition', $args );
}
add_action( 'init', 'dp_register_cpt_eedition' );
