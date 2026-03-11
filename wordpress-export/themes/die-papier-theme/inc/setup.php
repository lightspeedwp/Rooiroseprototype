<?php
namespace DiePapierTema\includes;
/**
 * Theme Setup.
 *
 * @package DiePapierTheme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * @since Die Papier Theme 1.0
 *
 * @return void
 */
function theme_setup() {
	// Block styles.
	add_theme_support( 'wp-block-styles' );

	// Editor styles.
	add_theme_support( 'editor-styles' );

	// Responsive embeds.
	add_theme_support( 'responsive-embeds' );

	// Post thumbnails.
	add_theme_support( 'post-thumbnails' );

	// Custom image sizes.
	add_image_size( 'dp-hero', 1280, 600, true );
	add_image_size( 'dp-card', 640, 360, true );
	add_image_size( 'dp-thumbnail', 300, 200, true );
	add_image_size( 'dp-avatar', 120, 120, true );

	// HTML5 support.
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );

	// Title tag.
	add_theme_support( 'title-tag' );
}

add_action( 'after_setup_theme', __NAMESPACE__ . '\theme_setup' );
