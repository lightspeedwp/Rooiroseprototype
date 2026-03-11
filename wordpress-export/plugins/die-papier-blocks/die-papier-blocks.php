<?php
/**
 * Plugin Name: Die Papier Blocks
 * Description: Custom Gutenberg blocks and functionality for Die Papier.
 * Version: 1.0.0
 * Author: Die Papier Development Team
 * Text Domain: die-papier-blocks
 * Requires at least: 6.9
 * Requires PHP: 8.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define Constants
define( 'DP_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'DP_BLOCKS_URL', plugin_dir_url( __FILE__ ) );
define( 'DP_BLOCKS_VERSION', '1.0.0' );

/**
 * Register the "die-papier" block category.
 *
 * All 17 custom blocks use "category": "die-papier" in their block.json.
 * This registers the category so it appears in the block inserter UI.
 *
 * @param array[]                $categories Array of block categories.
 * @param WP_Block_Editor_Context $context    The current editor context.
 * @return array[]
 */
function dp_register_block_category( $categories, $context ) {
	return array_merge(
		array(
			array(
				'slug'  => 'die-papier',
				'title' => __( 'Die Papier', 'die-papier-blocks' ),
				'icon'  => 'admin-page',
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'dp_register_block_category', 10, 2 );

/**
 * Register Blocks
 *
 * Uses register_block_type() for each block in build/.
 * Each block must have a valid block.json copied to its build directory
 * by @wordpress/scripts during the build step.
 *
 * All 9 blocks:
 *  1. competition-badge  — Competition status badge
 *  2. competition-entry  — Competition entry form
 *  3. filter-bar        — Archive filter bar (Interactivity API)
 *  4. search-filters    — Search result filters (Interactivity API)
 *  5. slider            — Generic carousel (InnerBlocks + Interactivity API)
 *  6. sponsor-banner    — Sponsor logo banner
 *  7. tab-bar           — Tab bar (Interactivity API)
 *  8. traffic-widget    — Traffic incidents widget (Interactivity API)
 *  9. weather-widget    — Weather widget with city selector (Interactivity API)
 *
 * Deprecated blocks (removed — replaced by patterns + third-party plugins):
 *  - ad-mrec           → Advanced Ads plugin (advanced-ads/ad-block)
 *  - article-hero      → hidden-article-hero.php pattern (core/post-title + core/post-featured-image + core/columns)
 *  - content-hero      → section-content-hero.php pattern (core/cover block)
 *  - eedition-access   → WooCommerce Memberships content restriction
 *  - hero-slider       → 6 hero patterns + dp/slider block
 *  - newsletter-cta    → Gravity Forms pattern (gravityforms/form)
 *  - pricing-table     → Core blocks pattern (columns + group cards)
 *  - quote-slider      → die-papier/section-brand-quotes pattern + dp/slider
 *  - sticky-footer     → Advanced Ads Pro sticky placement
 */
function dp_register_blocks() {
	$blocks = array(
		'competition-badge',
		'competition-entry',
		'filter-bar',
		'search-filters',
		'slider',
		'sponsor-banner',
		'tab-bar',
		'traffic-widget',
		'weather-widget',
	);

	foreach ( $blocks as $block ) {
		$block_path = DP_BLOCKS_PATH . 'build/' . $block;
		if ( file_exists( $block_path . '/block.json' ) ) {
			register_block_type( $block_path );
		} else {
			// Log missing block for debugging during development.
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				// translators: %s is the block directory name.
				error_log( sprintf( '[Die Papier Blocks] block.json not found for "%s". Run `npm run build`.', $block ) );
			}
		}
	}
}
add_action( 'init', 'dp_register_blocks' );

/**
 * Include Custom Post Types & Taxonomies
 */
require_once DP_BLOCKS_PATH . 'inc/cpt-sponsor.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-faq.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-event.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-obituary.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-competition.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-multimedia.php';
require_once DP_BLOCKS_PATH . 'inc/cpt-eedition.php';

require_once DP_BLOCKS_PATH . 'inc/tax-sponsor-tier.php';
require_once DP_BLOCKS_PATH . 'inc/tax-faq-category.php';
require_once DP_BLOCKS_PATH . 'inc/tax-edition-type.php';
// Note: dp_event_category and dp_multimedia_category taxonomies
// are registered inline in cpt-event.php and cpt-multimedia.php.

/**
 * Include Block Styles & Utilities
 */
require_once DP_BLOCKS_PATH . 'inc/block-styles.php';   // Block style variations (DEPRECATED — no-op, theme handles via JSON)
require_once DP_BLOCKS_PATH . 'inc/scf-fields.php';     // Secure Custom Fields
require_once DP_BLOCKS_PATH . 'inc/rest-api.php';       // Custom REST Endpoints
require_once DP_BLOCKS_PATH . 'inc/admin-columns.php';  // Admin list table columns
require_once DP_BLOCKS_PATH . 'inc/class-commerce.php'; // Commerce & Paywall Logic
require_once DP_BLOCKS_PATH . 'inc/json-ld.php';        // JSON-LD Structured Data

/**
 * Enqueue admin-only assets
 */
function dp_enqueue_admin_assets() {
	$admin_css = DP_BLOCKS_PATH . 'assets/admin.css';
	if ( file_exists( $admin_css ) ) {
		wp_enqueue_style(
			'dp-admin-styles',
			DP_BLOCKS_URL . 'assets/admin.css',
			array(),
			DP_BLOCKS_VERSION
		);
	}

	$admin_js = DP_BLOCKS_PATH . 'assets/admin.js';
	if ( file_exists( $admin_js ) ) {
		wp_enqueue_script(
			'dp-admin-scripts',
			DP_BLOCKS_URL . 'assets/admin.js',
			array(),
			DP_BLOCKS_VERSION,
			true
		);
	}
}
add_action( 'admin_enqueue_scripts', 'dp_enqueue_admin_assets' );

/**
 * Plugin activation: flush rewrite rules for CPT slugs.
 */
function dp_activate() {
	// Trigger all CPT registrations
	dp_register_cpt_event();
	dp_register_cpt_obituary();
	dp_register_cpt_sponsor();
	dp_register_cpt_competition();
	dp_register_cpt_multimedia();
	dp_register_cpt_eedition();
	dp_register_cpt_faq();

	// Register taxonomies before seeding terms.
	dp_register_tax_sponsor_tier();
	dp_register_tax_faq_category();
	dp_register_tax_event_category();
	dp_register_tax_multimedia_category();
	dp_register_tax_edition_type();

	// Seed default FAQ category terms.
	dp_seed_faq_categories();
	// Seed default edition type terms.
	dp_seed_edition_types();

	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'dp_activate' );

/**
 * Seed default FAQ category taxonomy terms on activation.
 *
 * Creates the 4 canonical FAQ categories used by page-faq.php:
 * algemeen, inteken, adverteer, aflewering.
 */
function dp_seed_faq_categories() {
	$default_terms = array(
		'algemeen'   => 'Algemeen',
		'inteken'    => 'Inteken',
		'adverteer'  => 'Adverteer',
		'aflewering' => 'Aflewering',
	);

	foreach ( $default_terms as $slug => $name ) {
		if ( ! term_exists( $slug, 'dp_faq_category' ) ) {
			wp_insert_term( $name, 'dp_faq_category', array( 'slug' => $slug ) );
		}
	}
}

/**
 * Seed default edition type taxonomy terms on activation.
 *
 * Creates the 3 canonical edition types:
 * weekliks, daagliks, spesiale-bylae.
 */
function dp_seed_edition_types() {
	$default_terms = array(
		'weekliks'       => 'Weekliks',
		'daagliks'       => 'Daagliks',
		'spesiale-bylae' => 'Spesiale Bylae',
	);

	foreach ( $default_terms as $slug => $name ) {
		if ( ! term_exists( $slug, 'dp_edition_type' ) ) {
			wp_insert_term( $name, 'dp_edition_type', array( 'slug' => $slug ) );
		}
	}
}

/**
 * Plugin deactivation: flush rewrite rules.
 */
function dp_deactivate() {
	flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'dp_deactivate' );