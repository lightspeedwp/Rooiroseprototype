<?php
/**
 * Register Custom Post Type: Obituaries (dp_obituary)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_obituary() {
	$labels = array(
		'name'                  => 'Doodsberrigte',
		'singular_name'         => 'Doodsberig',
		'menu_name'             => 'Doodsberrigte',
		'name_admin_bar'        => 'Doodsberig',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Doodsberig By',
		'new_item'              => 'Nuwe Doodsberig',
		'edit_item'             => 'Wysig Doodsberig',
		'view_item'             => 'Bekyk Doodsberig',
		'all_items'             => 'Alle Doodsberrigte',
		'search_items'          => 'Soek Doodsberrigte',
		'not_found'             => 'Geen doodsberrigte gevind nie.',
		'not_found_in_trash'    => 'Geen doodsberrigte in asblik nie.',
		'archives'              => 'Doodsberrigte Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'doodsberrigte', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 21,
		'menu_icon'          => 'dashicons-heart',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	);

	register_post_type( 'dp_obituary', $args );
}
add_action( 'init', 'dp_register_cpt_obituary' );
