<?php
namespace DiePapierTema\includes;

/**
 * Register block pattern categories and subdirectory pattern discovery.
 *
 * WordPress core auto-discovers patterns only in the root /patterns/ directory.
 * This file registers pattern categories and recursively registers patterns from
 * subfolders under /patterns/.
 *
 * @package DiePapierTema
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers block pattern categories.
 *
 * @since Die Papier Theme 1.0
 *
 * @return void
 */
function register_block_pattern_categories() {
	$categories = array(
		'die-papier-pages'       => array( 'label' => __( 'Die Papier - Bladsye', 'diepapiertema' ) ),
		'die-papier-sections'    => array( 'label' => __( 'Die Papier - Afdelings', 'diepapiertema' ) ),
		'die-papier-archives'    => array( 'label' => __( 'Die Papier - Argiewe', 'diepapiertema' ) ),
		'die-papier-cta'         => array( 'label' => __( 'Die Papier - CTA', 'diepapiertema' ) ),
		'die-papier-headers'     => array( 'label' => __( 'Die Papier - Kopstukke', 'diepapiertema' ) ),
		'die-papier-cards'       => array( 'label' => __( 'Die Papier - Kaarte', 'diepapiertema' ) ),
		'die-papier-queries'     => array( 'label' => __( 'Die Papier - Navrae', 'diepapiertema' ) ),
		'die-papier-forms'       => array( 'label' => __( 'Die Papier - Vorms', 'diepapiertema' ) ),
		'die-papier-footers'     => array( 'label' => __( 'Die Papier - Voetskrifte', 'diepapiertema' ) ),
		'die-papier-sidebars'    => array( 'label' => __( 'Die Papier - Sybalke', 'diepapiertema' ) ),
		'die-papier-hidden'      => array( 'label' => __( 'Die Papier - Verborge', 'diepapiertema' ) ),
		'die-papier-woocommerce' => array( 'label' => __( 'Die Papier - WooCommerce', 'diepapiertema' ) ),
		'die-papier-navigation'  => array( 'label' => __( 'Die Papier - Navigasie', 'diepapiertema' ) ),
		'die-papier-parts'       => array( 'label' => __( 'Die Papier - Onderdele', 'diepapiertema' ) ),
	);

	foreach ( $categories as $slug => $args ) {
		register_block_pattern_category( $slug, $args );
	}
}

add_action( 'init', __NAMESPACE__ . '\register_block_pattern_categories' );


/**
 * Registers block patterns from subdirectories of the /patterns/ folder.
 *
 * @since Die Papier Theme 1.1
 *
 * @return void
 */
function register_subdirectory_patterns() {
	$patterns_dir = get_theme_file_path( '/patterns/' );
	$subdirs      = glob( $patterns_dir . '*', GLOB_ONLYDIR );

	if ( empty( $subdirs ) ) {
		return;
	}

	$default_headers = array(
		'title'         => 'Title',
		'slug'          => 'Slug',
		'description'   => 'Description',
		'categories'    => 'Categories',
		'keywords'      => 'Keywords',
		'blockTypes'    => 'Block Types',
		'inserter'      => 'Inserter',
		'postTypes'     => 'Post Types',
		'templateTypes' => 'Template Types',
	);

	foreach ( $subdirs as $subdir ) {
		$pattern_files = glob( $subdir . '/*.php' );

		if ( empty( $pattern_files ) ) {
			continue;
		}

		foreach ( $pattern_files as $file ) {
			$headers = get_file_data( $file, $default_headers );

			if ( empty( $headers['title'] ) || empty( $headers['slug'] ) ) {
				continue;
			}

			if ( \WP_Block_Patterns_Registry::get_instance()->is_registered( $headers['slug'] ) ) {
				continue;
			}

			$pattern_args = array(
				'title'   => $headers['title'],
				'content' => '',
			);

			if ( ! empty( $headers['description'] ) ) {
				$pattern_args['description'] = $headers['description'];
			}

			if ( ! empty( $headers['categories'] ) ) {
				$pattern_args['categories'] = array_map( 'trim', explode( ',', $headers['categories'] ) );
			}

			if ( ! empty( $headers['keywords'] ) ) {
				$pattern_args['keywords'] = array_map( 'trim', explode( ',', $headers['keywords'] ) );
			}

			if ( ! empty( $headers['blockTypes'] ) ) {
				$pattern_args['blockTypes'] = array_map( 'trim', explode( ',', $headers['blockTypes'] ) );
			}

			if ( ! empty( $headers['postTypes'] ) ) {
				$pattern_args['postTypes'] = array_map( 'trim', explode( ',', $headers['postTypes'] ) );
			}

			if ( ! empty( $headers['templateTypes'] ) ) {
				$pattern_args['templateTypes'] = array_map( 'trim', explode( ',', $headers['templateTypes'] ) );
			}

			if ( ! empty( $headers['inserter'] ) ) {
				$pattern_args['inserter'] = strtolower( $headers['inserter'] ) !== 'false';
			}

			ob_start();
			include $file;
			$pattern_args['content'] = ob_get_clean();

			$pattern_args['content'] = preg_replace( '/^<\?php.*?\?>\s*/s', '', $pattern_args['content'] );

			register_block_pattern( $headers['slug'], $pattern_args );
		}
	}
}

add_action( 'init', __NAMESPACE__ . '\register_subdirectory_patterns' );
