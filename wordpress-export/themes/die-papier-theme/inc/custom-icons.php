<?php
/**
 * Custom Icons for Outermost Icon Block.
 *
 * Registers Die Papier's custom Lucide-based icon library
 * in the Outermost Icon Block picker. Icons are loaded from
 * /assets/icons/icons.json and injected into the editor via
 * wp_localize_script().
 *
 * @package DiePapierTheme
 * @since   Die Papier Theme 1.0
 */
namespace DiePapierTema\includes;


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
	 * Enqueues the custom icon library script in the block editor.
	 *
	 * Only loads in the editor context (not the frontend) to avoid
	 * unnecessary HTTP requests on page loads.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function register_custom_icons() {
		$icons_file = get_template_directory() . '/assets/icons/icons.json';

		if ( ! file_exists( $icons_file ) ) {
			return;
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		$icons_json = file_get_contents( $icons_file );
		$icons      = json_decode( $icons_json, true );

		if ( empty( $icons ) || ! is_array( $icons ) ) {
			return;
		}

		wp_enqueue_script(
			'dp-custom-icons',
			get_template_directory_uri() . '/assets/js/custom-icons.js',
			array( 'wp-hooks', 'wp-i18n' ),
			wp_get_theme()->get( 'Version' ),
			true
		);

		wp_localize_script(
			'dp-custom-icons',
			'dpCustomIcons',
			array(
				'icons'    => $icons,
				'category' => 'die-papier',
				'label'    => 'Die Papier',
			)
		);
	}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_custom_icons' );
