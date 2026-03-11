<?php
/**
 * Register Custom Post Type: Multimedia (dp_multimedia)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_cpt_multimedia() {
	$labels = array(
		'name'                  => 'Multimedia',
		'singular_name'         => 'Multimedia-item',
		'menu_name'             => 'Multimedia',
		'name_admin_bar'        => 'Multimedia',
		'add_new'               => 'Voeg By',
		'add_new_item'          => 'Voeg Nuwe Multimedia-item By',
		'new_item'              => 'Nuwe Multimedia-item',
		'edit_item'             => 'Wysig Multimedia-item',
		'view_item'             => 'Bekyk Multimedia-item',
		'all_items'             => 'Alle Multimedia',
		'search_items'          => 'Soek Multimedia',
		'not_found'             => 'Geen multimedia-items gevind nie.',
		'not_found_in_trash'    => 'Geen multimedia-items in asblik nie.',
		'archives'              => 'Multimedia Argief',
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'multimedia', 'with_front' => false ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 23,
		'menu_icon'          => 'dashicons-format-video',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	);

	register_post_type( 'dp_multimedia', $args );
}
add_action( 'init', 'dp_register_cpt_multimedia' );

/**
 * Register taxonomy: Multimedia Category (dp_multimedia_category)
 */
function dp_register_tax_multimedia_category() {
	$labels = array(
		'name'              => 'Multimedia-kategorieë',
		'singular_name'     => 'Multimedia-kategorie',
		'search_items'      => 'Soek Kategorieë',
		'all_items'         => 'Alle Kategorieë',
		'edit_item'         => 'Wysig Kategorie',
		'update_item'       => 'Werk Kategorie Op',
		'add_new_item'      => 'Voeg Nuwe Kategorie By',
		'new_item_name'     => 'Nuwe Kategorie Naam',
		'menu_name'         => 'Tipes',
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'multimedia-tipe' ),
		// Default terms to seed:
		// - Video's
		// - Podcasts
		// - Fotogalerye
	);

	register_taxonomy( 'dp_multimedia_category', array( 'dp_multimedia' ), $args );
}
add_action( 'init', 'dp_register_tax_multimedia_category' );
