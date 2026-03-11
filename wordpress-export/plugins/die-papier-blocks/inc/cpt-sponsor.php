<?php
/**
 * Register Custom Post Type: Sponsors (dp_sponsor)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_sponsor() {
	$labels = array(
		'name'                  => 'Borge',
		'singular_name'         => 'Borg',
		'menu_name'             => 'Borge',
		'name_admin_bar'        => 'Borg',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Borg By',
		'new_item'              => 'Nuwe Borg',
		'edit_item'             => 'Wysig Borg',
		'view_item'             => 'Bekyk Borg',
		'all_items'             => 'Alle Borge',
		'search_items'          => 'Soek Borge',
		'not_found'             => 'Geen borge gevind nie.',
		'not_found_in_trash'    => 'Geen borge in asblik nie.',
		'archives'              => 'Borge Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'geborg', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 25,
		'menu_icon'          => 'dashicons-money-alt',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	);

	register_post_type( 'dp_sponsor', $args );
}
add_action( 'init', 'dp_register_cpt_sponsor' );