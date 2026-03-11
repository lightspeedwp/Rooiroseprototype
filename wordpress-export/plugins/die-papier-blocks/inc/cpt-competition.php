<?php
/**
 * Register Custom Post Type: Competitions (dp_competition)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_competition() {
	$labels = array(
		'name'                  => 'Kompetisies',
		'singular_name'         => 'Kompetisie',
		'menu_name'             => 'Kompetisies',
		'name_admin_bar'        => 'Kompetisie',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Kompetisie By',
		'new_item'              => 'Nuwe Kompetisie',
		'edit_item'             => 'Wysig Kompetisie',
		'view_item'             => 'Bekyk Kompetisie',
		'all_items'             => 'Alle Kompetisies',
		'search_items'          => 'Soek Kompetisies',
		'not_found'             => 'Geen kompetisies gevind nie.',
		'not_found_in_trash'    => 'Geen kompetisies in asblik nie.',
		'archives'              => 'Kompetisies Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'kompetisies', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 22,
		'menu_icon'          => 'dashicons-awards',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	);

	register_post_type( 'dp_competition', $args );
}
add_action( 'init', 'dp_register_cpt_competition' );
