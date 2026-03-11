<?php
/**
 * This file adds functions to the DiePapierTema WordPress theme.
 *
 * @package diepapiertema
 * @author  Die Papier Development Team
 * @license GNU General Public License v2 or later
 * @link    https://diepapier.co.za
 */

namespace DiePapierTema;

require_once get_template_directory() . '/inc/setup.php';
require_once get_template_directory() . '/inc/presets.php';
require_once get_template_directory() . '/inc/patterns.php';
require_once get_template_directory() . '/inc/custom-icons.php';
require_once get_template_directory() . '/inc/block-bindings.php';

// Optional inc files — keep for functionality not yet on GitHub.
if ( file_exists( get_template_directory() . '/inc/woocommerce.php' ) ) {
	require_once get_template_directory() . '/inc/woocommerce.php';
}
if ( file_exists( get_template_directory() . '/inc/performance.php' ) ) {
	require_once get_template_directory() . '/inc/performance.php';
}
if ( file_exists( get_template_directory() . '/inc/advanced-ads-memberships.php' ) ) {
	require_once get_template_directory() . '/inc/advanced-ads-memberships.php';
}
if ( file_exists( get_template_directory() . '/inc/aql-deduplication.php' ) ) {
	require_once get_template_directory() . '/inc/aql-deduplication.php';
}
if ( file_exists( get_template_directory() . '/inc/font-collections.php' ) ) {
	require_once get_template_directory() . '/inc/font-collections.php';
}


/**
 * Enqueue styles.
 */
function enqueue_style_sheet() {
	wp_enqueue_style( sanitize_title( __NAMESPACE__ ), get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_style_sheet' );

/**
 * Enqueue WooCommerce specific stylesheet
 */
function enqueue_woocommerce_styles() {

	// Only enqueue if WooCommerce is active
	if ( class_exists( 'WooCommerce' ) ) {
		wp_enqueue_style(
			'theme-woocommerce-style',
			get_template_directory_uri() . '/assets/styles/woocommerce.css',
			array(),
			'1.0.0'
		);
	}
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_woocommerce_styles' );

/**
 * Remove last separator on blog/archive if no pagination exists.
 */
function is_paginated() {
	global $wp_query;
	if ( $wp_query->max_num_pages < 2 ) {
		echo '<style>.blog .wp-block-post-template .wp-block-post:last-child .entry-content + .wp-block-separator, .archive .wp-block-post-template .wp-block-post:last-child .entry-content + .wp-block-separator, .blog .wp-block-post-template .wp-block-post:last-child .entry-content + .wp-block-separator, .search .wp-block-post-template .wp-block-post:last-child .wp-block-post-excerpt + .wp-block-separator { display: none; }</style>';
	}
}
add_action( 'wp_head', __NAMESPACE__ . '\is_paginated' );


/**
 * Add a Sidebar template part area
 */
function template_part_areas( array $areas ) {
	$areas[] = array(
		'area'        => 'sidebar',
		'area_tag'    => 'section',
		'label'       => __( 'Sidebar', 'diepapiertema' ),
		'description' => __( 'The Sidebar template defines a page area that can be found on the Page (With Sidebar) template.', 'diepapiertema' ),
		'icon'        => 'sidebar',
	);

	return $areas;
}
add_filter( 'default_wp_template_part_areas', __NAMESPACE__ . '\template_part_areas' );

/**
 * Modifies the excerpt length.
 *
 * @since Die Papier Theme 1.0
 *
 * @return int
 */
function excerpt_length() {
	return 25;
}
add_filter( 'excerpt_length', __NAMESPACE__ . '\excerpt_length' );

/**
 * Modifies the excerpt suffix.
 *
 * @since Die Papier Theme 1.0
 *
 * @return string
 */
function excerpt_more() {
	return '&hellip;';
}
add_filter( 'excerpt_more', __NAMESPACE__ . '\excerpt_more' );

/**
 * Displays an admin notice if the companion plugin is not active.
 *
 * @since Die Papier Theme 1.0
 *
 * @return void
 */
function required_plugins_notice() {
	if ( ! function_exists( 'is_plugin_active' ) ) {
		include_once ABSPATH . 'wp-admin/includes/plugin.php';
	}

	if ( ! is_plugin_active( 'die-papier-blocks/die-papier-blocks.php' ) ) {
		echo '<div class="notice notice-warning"><p>';
		echo '<strong>Die Papier Tema:</strong> Die <em>Die Papier Blocks</em>-inprop is nie aktief nie. Aktiveer dit asseblief vir volle funksionaliteit.';
		echo '</p></div>';
	}
}
add_action( 'admin_notices', __NAMESPACE__ . '\required_plugins_notice' );
