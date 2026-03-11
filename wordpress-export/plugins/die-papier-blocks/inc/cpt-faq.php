<?php
/**
 * Register Custom Post Type: FAQs (dp_faq)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_faq() {
	$labels = array(
		'name'                  => 'Algemene vrae',
		'singular_name'         => 'Vraag',
		'menu_name'             => 'GV\'s',
		'name_admin_bar'        => 'Vraag',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Vraag By',
		'new_item'              => 'Nuwe Vraag',
		'edit_item'             => 'Wysig Vraag',
		'view_item'             => 'Bekyk Vraag',
		'all_items'             => 'Alle Vrae',
		'search_items'          => 'Soek Vrae',
		'not_found'             => 'Geen vrae gevind nie.',
		'not_found_in_trash'    => 'Geen vrae in asblik nie.',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => false,
		'capability_type'    => 'post',
		'has_archive'        => false,
		'hierarchical'       => false,
		'menu_position'      => 26,
		'menu_icon'          => 'dashicons-editor-help',
		'supports'           => array( 'title', 'editor', 'custom-fields' ),
	);

	register_post_type( 'dp_faq', $args );
}
add_action( 'init', 'dp_register_cpt_faq' );