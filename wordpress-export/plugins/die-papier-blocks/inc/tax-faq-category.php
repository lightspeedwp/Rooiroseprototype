<?php
/**
 * Register Taxonomy: FAQ Category (dp_faq_category)
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dp_register_tax_faq_category() {
	$labels = array(
		'name'              => 'GV-kategorieë',
		'singular_name'     => 'GV-kategorie',
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
		'rewrite'           => false,
		// Default terms to seed:
		// - Inskrywings (Subscriptions)
		// - Rekening (Account)
		// - Inhoud (Content)
		// - Advertensies (Advertising)
		// - Tegnies (Technical)
	);

	register_taxonomy( 'dp_faq_category', array( 'dp_faq' ), $args );
}
add_action( 'init', 'dp_register_tax_faq_category' );
