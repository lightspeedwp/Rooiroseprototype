<?php
namespace DiePapierTema\includes;
/**
 * Performance Optimisations.
 *
 * Resource hints, emoji removal, heartbeat control, and font preloading.
 *
 * @package DiePapierTema
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ── Emoji removal ─────────────────────────────────────────────────────────

if ( ! function_exists( __NAMESPACE__ . '\dp_disable_emojis' ) ) :
	/**
	 * Removes the WordPress emoji detection scripts and styles.
	 *
	 * Modern browsers render emoji natively — the detection script
	 * (~15 KB parsed) is unnecessary overhead.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function dp_disable_emojis() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

		// Remove emoji DNS prefetch.
		add_filter( 'wp_resource_hints', __NAMESPACE__ . '\dp_disable_emoji_dns_prefetch', 10, 2 );

		// Remove emoji from TinyMCE.
		add_filter( 'tiny_mce_plugins', __NAMESPACE__ . '\dp_disable_emoji_tinymce' );
	}
endif;
add_action( 'init', __NAMESPACE__ . '\dp_disable_emojis' );

if ( ! function_exists( __NAMESPACE__ . '\dp_disable_emoji_dns_prefetch' ) ) :
	/**
	 * Removes the emoji CDN DNS prefetch hint.
	 *
	 * @param array  $urls          DNS prefetch URLs.
	 * @param string $relation_type Relation type.
	 * @return array
	 */
	function dp_disable_emoji_dns_prefetch( $urls, $relation_type ) {
		if ( 'dns-prefetch' === $relation_type ) {
			$emoji_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/14.0.0/svg/' );
			$urls      = array_diff( $urls, array( $emoji_url ) );
		}
		return $urls;
	}
endif;

if ( ! function_exists( __NAMESPACE__ . '\dp_disable_emoji_tinymce' ) ) :
	/**
	 * Removes the wpemoji TinyMCE plugin.
	 *
	 * @param array $plugins TinyMCE plugins.
	 * @return array
	 */
	function dp_disable_emoji_tinymce( $plugins ) {
		return is_array( $plugins )
			? array_diff( $plugins, array( 'wpemoji' ) )
			: array();
	}
endif;

// ── Heartbeat optimisation ────────────────────────────────────────────────

if ( ! function_exists( __NAMESPACE__ . '\dp_optimize_heartbeat' ) ) :
	/**
	 * Slows the Heartbeat API to 60 s and disables it on the front end.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @param array $settings Heartbeat settings.
	 * @return array
	 */
	function dp_optimize_heartbeat( $settings ) {
		$settings['interval'] = 60;
		return $settings;
	}
endif;
add_filter( 'heartbeat_settings', __NAMESPACE__ . '\dp_optimize_heartbeat' );

if ( ! function_exists( __NAMESPACE__ . '\dp_disable_heartbeat_frontend' ) ) :
	/**
	 * Deregisters the heartbeat script on the front end.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function dp_disable_heartbeat_frontend() {
		if ( ! is_admin() ) {
			wp_deregister_script( 'heartbeat' );
		}
	}
endif;
add_action( 'init', __NAMESPACE__ . '\dp_disable_heartbeat_frontend', 1 );

// ── Font preloading ──────────────────────────────────────────────────────

if ( ! function_exists( __NAMESPACE__ . '\dp_preload_fonts' ) ) :
	/**
	 * Preloads the primary variable fonts for faster first contentful paint.
	 *
	 * Inter (variable, sans-serif) and Roboto Serif (variable, serif)
	 * are both bundled in the theme's /fonts/ directory.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @return void
	 */
	function dp_preload_fonts() {
		if ( is_admin() ) {
			return;
		}

		$fonts = array(
			'Inter-VariableFont_opsz,wght.woff2',
			'RobotoSerif-VariableFont_GRAD,opsz,wdth,wght.woff2',
		);

		foreach ( $fonts as $font_file ) {
			$path = get_template_directory() . '/fonts/' . $font_file;
			if ( file_exists( $path ) ) {
				printf(
					'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
					esc_url( get_template_directory_uri() . '/fonts/' . $font_file )
				);
			}
		}
	}
endif;
add_action( 'wp_head', __NAMESPACE__ . '\dp_preload_fonts', 1 );

// ── Lazy loading enhancements ────────────────────────────────────────────

if ( ! function_exists( __NAMESPACE__ . '\dp_lazy_load_images' ) ) :
	/**
	 * Ensures images in post content are lazy-loaded.
	 *
	 * WordPress handles this automatically since 5.5, but we enforce it
	 * here as a safety net.
	 *
	 * @since Die Papier Theme 1.0
	 *
	 * @param string $value   Loading attribute value.
	 * @param string $image   Image tag HTML.
	 * @param string $context Context (the_content, widget_text, etc.).
	 * @return string
	 */
	function dp_lazy_load_images( $value, $image, $context ) {
		if ( 'the_content' === $context ) {
			return 'lazy';
		}
		return $value;
	}
endif;
add_filter( 'wp_img_tag_add_loading_attr', __NAMESPACE__ . '\dp_lazy_load_images', 10, 3 );