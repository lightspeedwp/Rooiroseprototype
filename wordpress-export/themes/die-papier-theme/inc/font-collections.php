<?php
namespace DiePapierTema\includes;
/**
 * Font Collections — registers curated font collections for the Font Library.
 *
 * WordPress 6.5+ Font Library API allows themes to register font collections
 * so editors can browse and activate fonts from Appearance > Editor > Styles > Typography.
 * These collections are curated subsets relevant to the Die Papier brand.
 *
 * @package DiePapierTema
 * @since   Die Papier Theme 1.0
 * @see     https://developer.wordpress.org/reference/functions/wp_register_font_collection/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( __NAMESPACE__ . '\dp_register_font_collections' ) ) :
	/**
	 * Registers theme font collections for the Font Library.
	 *
	 * Two collections: Sans-Serif (Inter) for body/UI and Serif (Roboto Serif)
	 * for headings/editorial. These match the brand typography documented in
	 * /guidelines/design-tokens/typography.md.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function dp_register_font_collections() {
		if ( ! function_exists( 'wp_register_font_collection' ) ) {
			return;
		}

		wp_register_font_collection(
			'die-papier-sans',
			array(
				'name'        => __( 'Die Papier — Sans-Serif', 'diepapiertema' ),
				'description' => __( 'Inter variable font — used for body text, UI elements, navigation, and H5/H6 headings.', 'diepapiertema' ),
				'font_families' => array(
					array(
						'font_family_settings' => array(
							'fontFamily' => '"Inter", sans-serif',
							'slug'       => 'brand-sans',
							'name'       => 'Inter',
							'fontFace'   => array(
								array(
									'fontFamily'  => 'Inter',
									'fontStyle'   => 'normal',
									'fontWeight'  => '100 900',
									'src'         => array( 'file:./assets/fonts/inter-variable.woff2' ),
									'fontDisplay' => 'swap',
								),
							),
						),
						'categories' => array( 'sans-serif' ),
					),
				),
			)
		);

		wp_register_font_collection(
			'die-papier-serif',
			array(
				'name'        => __( 'Die Papier — Serif', 'diepapiertema' ),
				'description' => __( 'Roboto Serif variable font — used for H1-H4 headings, editorial content, and display typography.', 'diepapiertema' ),
				'font_families' => array(
					array(
						'font_family_settings' => array(
							'fontFamily' => '"Roboto Serif", serif',
							'slug'       => 'brand-serif',
							'name'       => 'Roboto Serif',
							'fontFace'   => array(
								array(
									'fontFamily'  => 'Roboto Serif',
									'fontStyle'   => 'normal',
									'fontWeight'  => '100 900',
									'src'         => array( 'file:./assets/fonts/roboto-serif-variable.woff2' ),
									'fontDisplay' => 'swap',
								),
							),
						),
						'categories' => array( 'serif' ),
					),
				),
			)
		);
	}
endif;
add_action( 'init', __NAMESPACE__ . '\dp_register_font_collections' );