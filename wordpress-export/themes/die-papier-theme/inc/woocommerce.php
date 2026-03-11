<?php
namespace DiePapierTema\includes;
/**
 * WooCommerce Integration
 *
 * Conditional logic based on Ollie theme architecture:
 * - When WC active: theme support, custom styles, pattern deregistration, breadcrumbs, cart enhancements
 * - When WC inactive: filter out WC templates and patterns to keep the theme clean
 *
 * @package DiePapierTema
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*
|--------------------------------------------------------------------------
| WooCommerce Active — Full Integration
|--------------------------------------------------------------------------
*/

if ( class_exists( 'WooCommerce' ) ) :

	/**
	 * Declare WooCommerce theme support.
	 *
	 * Enables WooCommerce features and optimizations for the theme.
	 */
	function dp_add_woocommerce_support() {
		add_theme_support( 'woocommerce' );

		// Enable product gallery features.
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );
	}
	add_action( 'after_setup_theme', __NAMESPACE__ . '\dp_add_woocommerce_support' );

	/**
	 * Enqueue WooCommerce-specific styles.
	 *
	 * Loads custom WooCommerce CSS that supplements theme.json block styles.
	 * Only loaded when WooCommerce is active.
	 */
	function dp_enqueue_woocommerce_styles() {
		if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) {
			wp_enqueue_style(
				'dp-woocommerce',
				get_template_directory_uri() . '/assets/css/woocommerce.css',
				array(),
				wp_get_theme()->get( 'Version' )
			);
		}
	}
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\dp_enqueue_woocommerce_styles' );

	/**
	 * Disable WooCommerce default stylesheet.
	 *
	 * The theme provides all WooCommerce styling via theme.json and custom CSS.
	 * This prevents loading the default WooCommerce stylesheet.
	 */
	add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

	/**
	 * Unregister default WooCommerce block patterns.
	 *
	 * Removes all `woocommerce-blocks/*` patterns so Die Papier's custom
	 * patterns (die-papier/woo-*) take priority. Based on Ollie's approach.
	 */
	function dp_unregister_woocommerce_block_patterns() {
		$patterns = \WP_Block_Patterns_Registry::get_instance()->get_all_registered();

		foreach ( $patterns as $pattern ) {
			if ( str_starts_with( $pattern['name'], 'woocommerce-blocks/' ) ) {
				unregister_block_pattern( $pattern['name'] );
			}
		}
	}
	add_action( 'init', __NAMESPACE__ . '\dp_unregister_woocommerce_block_patterns', 99 );

	/**
	 * Disable WooCommerce Pattern Toolkit Full Composability.
	 *
	 * Prevents WooCommerce from auto-generating competing patterns that would
	 * override the theme's carefully crafted WC patterns. Based on Ollie's approach.
	 *
	 * @param bool $enabled Whether the Pattern Toolkit is enabled.
	 * @return bool Always false.
	 */
	function dp_disable_pattern_toolkit( $enabled ) {
		return false;
	}
	add_filter( 'woocommerce_pattern_toolkit_full_composability_enabled', __NAMESPACE__ . '\dp_disable_pattern_toolkit' );

	/**
	 * Customize WooCommerce breadcrumbs.
	 *
	 * Sets Afrikaans-friendly separator and home text.
	 * Note: This applies to the legacy `woocommerce_breadcrumb()` function.
	 * The `woocommerce/breadcrumbs` block uses its own settings.
	 *
	 * @param array $args Breadcrumb arguments.
	 * @return array Modified breadcrumb arguments.
	 */
	function dp_woocommerce_breadcrumb_args( $args ) {
		$args['delimiter']   = ' &rsaquo; ';
		$args['home']        = 'Tuisblad';
		$args['wrap_before'] = '<nav class="woocommerce-breadcrumb" aria-label="Broodkrummels">';
		$args['wrap_after']  = '</nav>';
		return $args;
	}
	add_filter( 'woocommerce_breadcrumb_defaults', __NAMESPACE__ . '\dp_woocommerce_breadcrumb_args' );

	/**
	 * Display e-edition cover image in cart thumbnails.
	 *
	 * When a subscription product is linked to an e-edition post, this filter
	 * swaps the product featured image with the e-edition's cover image.
	 *
	 * @param string $image         Product thumbnail HTML.
	 * @param array  $cart_item     Cart item data.
	 * @param string $cart_item_key Cart item key.
	 * @return string Modified thumbnail HTML with e-edition cover.
	 */
	function dp_cart_item_thumbnail( $image, $cart_item, $cart_item_key ) {
		$product_id  = $cart_item['product_id'];
		$eedition_id = get_post_meta( $product_id, '_dp_linked_eedition', true );

		if ( ! $eedition_id ) {
			return $image;
		}

		$cover_image_id = get_post_thumbnail_id( $eedition_id );

		if ( ! $cover_image_id ) {
			return $image;
		}

		$cover_image_url = wp_get_attachment_image_url( $cover_image_id, 'woocommerce_thumbnail' );
		$eedition_title  = get_the_title( $eedition_id );

		if ( $cover_image_url ) {
			$image = sprintf(
				'<img src="%s" alt="%s" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" />',
				esc_url( $cover_image_url ),
				esc_attr( $eedition_title )
			);
		}

		return $image;
	}
	add_filter( 'woocommerce_cart_item_thumbnail', __NAMESPACE__ . '\dp_cart_item_thumbnail', 10, 3 );

	/**
	 * Display e-edition metadata in cart.
	 *
	 * Shows edition date and issue number below the product name in the cart.
	 *
	 * @param array $item_data Existing cart item data.
	 * @param array $cart_item Cart item data.
	 * @return array Modified cart item data with e-edition metadata.
	 */
	function dp_cart_item_data( $item_data, $cart_item ) {
		$product_id  = $cart_item['product_id'];
		$eedition_id = get_post_meta( $product_id, '_dp_linked_eedition', true );

		if ( ! $eedition_id ) {
			return $item_data;
		}

		$edition_date = get_post_meta( $eedition_id, 'dp_eedition_date', true );
		$issue_number = get_post_meta( $eedition_id, 'dp_issue_number', true );

		if ( $edition_date ) {
			$item_data[] = array(
				'name'  => 'Uitgawe Datum',
				'value' => date_i18n( 'j F Y', strtotime( $edition_date ) ),
			);
		}

		if ( $issue_number ) {
			$item_data[] = array(
				'name'  => 'Uitgawe Nommer',
				'value' => '#' . esc_html( $issue_number ),
			);
		}

		return $item_data;
	}
	add_filter( 'woocommerce_get_item_data', __NAMESPACE__ . '\dp_cart_item_data', 10, 2 );

	/**
	 * Customize WooCommerce "Place Order" button text.
	 *
	 * Changes the checkout button text to Afrikaans.
	 *
	 * @param string $button_text Default button text.
	 * @return string Translated button text.
	 */
	function dp_woocommerce_order_button_text( $button_text ) {
		return 'Plaas Bestelling';
	}
	add_filter( 'woocommerce_order_button_text', __NAMESPACE__ . '\dp_woocommerce_order_button_text' );

	/**
	 * Add custom "Teken in" text to subscription products.
	 *
	 * Changes "Add to cart" button text for subscription products.
	 *
	 * @param string     $text    Button text.
	 * @param WC_Product $product Product object.
	 * @return string Modified button text.
	 */
	function dp_subscription_add_to_cart_text( $text, $product ) {
		if ( class_exists( 'WC_Subscriptions_Product' ) && WC_Subscriptions_Product::is_subscription( $product ) ) {
			return 'Teken in';
		}
		return $text;
	}
	add_filter( 'woocommerce_product_add_to_cart_text', __NAMESPACE__ . '\dp_subscription_add_to_cart_text', 10, 2 );
	add_filter( 'woocommerce_product_single_add_to_cart_text', __NAMESPACE__ . '\dp_subscription_add_to_cart_text', 10, 2 );

/*
|--------------------------------------------------------------------------
| WooCommerce Inactive — Graceful Degradation
|--------------------------------------------------------------------------
*/

else :

	/**
	 * Filter out WooCommerce templates when WC is not active.
	 *
	 * Prevents WC-specific templates from appearing in the template list
	 * when WooCommerce is not installed/active. Based on Ollie's approach.
	 *
	 * @param array $query_result Templates returned by WP_Theme::get_block_templates().
	 * @return array Filtered templates without WC-specific ones.
	 */
	function dp_filter_woocommerce_templates( $query_result ) {
		$wc_templates = array(
			'archive-product',
			'order-confirmation',
			'page-cart',
			'page-checkout',
			'page-my-account',
			'page-order-received',
			'product-search-results',
			'single-product',
		);

		return array_filter(
			$query_result,
			function ( $template ) use ( $wc_templates ) {
				return ! in_array( $template->slug, $wc_templates, true );
			}
		);
	}
	add_filter( 'get_block_templates', __NAMESPACE__ . '\dp_filter_woocommerce_templates' );

	/**
	 * Unregister Die Papier WooCommerce patterns when WC is not active.
	 *
	 * Removes all `die-papier/woo-*` patterns since they would be broken
	 * without WooCommerce blocks available. Based on Ollie's approach.
	 */
	function dp_unregister_woocommerce_patterns() {
		$patterns = \WP_Block_Patterns_Registry::get_instance()->get_all_registered();

		foreach ( $patterns as $pattern ) {
			if ( str_starts_with( $pattern['name'], 'die-papier/woo-' ) ) {
				unregister_block_pattern( $pattern['name'] );
			}
		}
	}
	add_action( 'init', __NAMESPACE__ . '\dp_unregister_woocommerce_patterns', 99 );

	/**
	 * Filter out WooCommerce template parts when WC is not active.
	 *
	 * Prevents WC-specific template parts from appearing in the parts list.
	 *
	 * @param array $query_result Template parts returned by WP.
	 * @return array Filtered template parts without WC-specific ones.
	 */
	function dp_filter_woocommerce_template_parts( $query_result ) {
		$wc_parts = array(
			'product-card',
			'simple-product-add-to-cart-with-options',
			'variable-product-add-to-cart-with-options',
		);

		return array_filter(
			$query_result,
			function ( $part ) use ( $wc_parts ) {
				return ! in_array( $part->slug, $wc_parts, true );
			}
		);
	}
	add_filter( 'get_block_templates', __NAMESPACE__ . '\dp_filter_woocommerce_template_parts' );

endif;