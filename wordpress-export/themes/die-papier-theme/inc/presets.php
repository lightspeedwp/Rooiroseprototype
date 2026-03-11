<?php
namespace DiePapierTema\includes;

/**
 * Register Modular Theme.json Presets.
 *
 * Loads separate JSON preset files from /styles/presets/ and merges them
 * into theme.json via the wp_theme_json_data_theme filter. This allows
 * design tokens (colours, typography, spacing, shadows, radii, borders,
 * layout) and CSS utility classes (aspect ratios, flex/grid helpers,
 * spacing utilities, text truncation) to be maintained in individual
 * files for better organisation and reusability across projects.
 *
 * @package DiePapierTema\includes
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Merges modular preset JSON files into the theme's theme.json data.
 *
 * Automatically discovers and loads all .json files from the /styles/presets/
 * directory and its subdirectories (e.g., /styles/presets/blocks/). Each preset
 * file contains a slice of `settings` or `styles` that would otherwise live
 * directly in theme.json. Files are loaded alphabetically, and WordPress's
 * native WP_Theme_JSON::merge() handles the merging logic.
 *
 * @since Die Papier Theme 1.0
 *
 * @param WP_Theme_JSON_Data $theme_json The theme JSON data object.
 * @return WP_Theme_JSON_Data The modified theme JSON data object.
 */
function merge_preset_files( $theme_json ) {
	$preset_dir = get_template_directory() . '/styles/presets/';

	// Automatically discover all JSON files in the presets directory.
	if ( ! is_dir( $preset_dir ) ) {
		return $theme_json;
	}

	// Recursively find all JSON files in presets directory and subdirectories.
	$preset_files = get_preset_files_recursive( $preset_dir );

	if ( empty( $preset_files ) ) {
		return $theme_json;
	}

	// Sort alphabetically for predictable loading order.
	sort( $preset_files );

	foreach ( $preset_files as $file ) {
		$preset_data = json_decode( file_get_contents( $file ), true ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents

		if ( ! is_array( $preset_data ) ) {
			continue;
		}

		// Use WordPress's native merge method via update_with().
		$theme_json->update_with( $preset_data );
	}

	return $theme_json;
}

/**
 * Recursively retrieves all JSON files from a directory and its subdirectories.
 *
 * @since Die Papier Theme 1.1
 *
 * @param string $directory The directory path to scan for JSON files.
 * @return array Array of file paths to JSON files.
 */
function get_preset_files_recursive( $directory ) {
	$files = array();

	// Get JSON files in the current directory.
	$json_files = glob( $directory . '*.json' );
	if ( ! empty( $json_files ) ) {
		$files = array_merge( $files, $json_files );
	}

	// Get subdirectories and recursively scan them.
	$subdirs = glob( $directory . '*', GLOB_ONLYDIR );
	if ( ! empty( $subdirs ) ) {
		foreach ( $subdirs as $subdir ) {
			$files = array_merge( $files, get_preset_files_recursive( trailingslashit( $subdir ) ) );
		}
	}

	return $files;
}

add_filter( 'wp_theme_json_data_theme', __NAMESPACE__ . '\merge_preset_files' );
