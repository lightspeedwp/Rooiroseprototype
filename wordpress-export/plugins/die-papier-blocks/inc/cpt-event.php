<?php
/**
 * Register Custom Post Type: Events (dp_event)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_event() {
	$labels = array(
		'name'                  => 'Gebeure',
		'singular_name'         => 'Gebeurtenis',
		'menu_name'             => 'Gebeure',
		'name_admin_bar'        => 'Gebeurtenis',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Gebeurtenis By',
		'new_item'              => 'Nuwe Gebeurtenis',
		'edit_item'             => 'Wysig Gebeurtenis',
		'view_item'             => 'Bekyk Gebeurtenis',
		'all_items'             => 'Alle gebeure',
		'search_items'          => 'Soek Gebeure',
		'not_found'             => 'Geen gebeure gevind nie.',
		'not_found_in_trash'    => 'Geen gebeure in asblik nie.',
		'archives'              => 'Gebeure Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,  // Required for Gutenberg
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'gebeure', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'menu_icon'          => 'dashicons-calendar-alt',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
		'template'           => array(),
		'template_lock'      => false,
	);

	register_post_type( 'dp_event', $args );
}
add_action( 'init', 'dp_register_cpt_event' );

/**
 * Register taxonomy: Event Category (dp_event_category)
 */
function dp_register_tax_event_category() {
	$labels = array(
		'name'              => 'Gebeurtenis-kategorieë',
		'singular_name'     => 'Gebeurtenis-kategorie',
		'search_items'      => 'Soek Kategorieë',
		'all_items'         => 'Alle Kategorieë',
		'edit_item'         => 'Wysig Kategorie',
		'update_item'       => 'Werk Kategorie Op',
		'add_new_item'      => 'Voeg Nuwe Kategorie By',
		'new_item_name'     => 'Nuwe Kategorie Naam',
		'menu_name'         => 'Kategorieë',
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'gebeure-kategorie' ),
	);

	register_taxonomy( 'dp_event_category', array( 'dp_event' ), $args );
}
add_action( 'init', 'dp_register_tax_event_category' );