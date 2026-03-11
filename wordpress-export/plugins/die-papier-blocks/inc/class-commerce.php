<?php
/**
 * Commerce Logic for Die Papier
 * 
 * Handles access control, subscription checks, and paywall logic.
 * Integrates with WooCommerce, WC Subscriptions, and WC Memberships.
 * 
 * @package DiePapier
 */

namespace DiePapier\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Commerce {

	/**
	 * Membership Plan Slugs
	 */
	const PLAN_DIGITAL = 'digital-subscriber';

	/**
	 * Check if a user has access to a specific post (usually an E-Edition).
	 *
	 * @param int $user_id The user ID.
	 * @param int $post_id The post ID (e.g. dp_eedition).
	 * @return boolean True if access is granted.
	 */
	public static function user_has_access( $user_id, $post_id ) {
		if ( ! $user_id ) {
			return false;
		}

		// 1. Admin always has access
		if ( user_can( $user_id, 'manage_options' ) ) {
			return true;
		}

		// 2. Check Active Subscription (Membership Plan)
		if ( self::is_digital_subscriber( $user_id ) ) {
			return true;
		}

		// 3. Check Single Purchase (Linked Product)
		if ( self::has_purchased_post( $user_id, $post_id ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Check if user is an active digital subscriber.
	 * Wraps WC Memberships logic.
	 *
	 * @param int $user_id
	 * @return boolean
	 */
	public static function is_digital_subscriber( $user_id ) {
		if ( ! function_exists( 'wc_memberships_is_user_member' ) ) {
			return false; // Plugin not active
		}

		return wc_memberships_is_user_member( $user_id, self::PLAN_DIGITAL );
	}

	/**
	 * Check if user purchased the specific product linked to this post.
	 * Relies on metadata `_linked_product_id` stored on the content post.
	 *
	 * @param int $user_id
	 * @param int $post_id
	 * @return boolean
	 */
	public static function has_purchased_post( $user_id, $post_id ) {
		$product_id = get_post_meta( $post_id, '_linked_product_id', true );

		if ( ! $product_id ) {
			return false; // No product linked, so can't be purchased separately
		}

		if ( ! function_exists( 'wc_customer_bought_product' ) ) {
			return false;
		}

		// Check if customer bought this specific product
		return wc_customer_bought_product( '', $user_id, $product_id );
	}

	/**
	 * Render the appropriate Paywall CTA based on the content type.
	 * 
	 * @param int $post_id
	 */
	public static function render_paywall( $post_id ) {
		$product_id = get_post_meta( $post_id, '_linked_product_id', true );
		$product = $product_id && function_exists( 'wc_get_product' ) ? wc_get_product( $product_id ) : null;
		$price = $product ? $product->get_price_html() : 'R20';

		// Load the 'paywall-cta' pattern or render HTML directly
		?>
		<div class="wp-block-group has-base-2-background-color has-background is-style-card" style="padding: 2rem; text-align: center; border: 1px solid var(--wp--preset--color--base-3); border-radius: 8px;">
			<div style="margin-bottom: 1.5rem;">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--wp--preset--color--secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
					<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
				</svg>
			</div>
			
			<h3 class="wp-block-heading has-secondary-color has-text-color">Hierdie inhoud is gesluit</h3>
			<p>Teken in vir onbeperkte toegang of koop hierdie uitgawe vir slegs <strong><?php echo esc_html( $price ); ?></strong>.</p>
			
			<div class="wp-block-buttons is-layout-flex is-content-justification-center" style="margin-top: 1.5rem;">
				<!-- Subscription Button -->
				<div class="wp-block-button">
					<a class="wp-block-button__link has-white-color has-primary-background-color has-text-color has-background wp-element-button" href="/inteken/e-uitgawe">
						Teken In (Vanaf R100/pm)
					</a>
				</div>

				<?php if ( $product_id ) : ?>
				<!-- Single Purchase Button -->
				<div class="wp-block-button is-style-outline">
					<a class="wp-block-button__link wp-element-button" href="<?php echo esc_url( '/cart/?add-to-cart=' . $product_id ); ?>">
						Koop Uitgawe (<?php echo wp_kses_post( $price ); ?>)
					</a>
				</div>
				<?php endif; ?>
			</div>
			
			<p style="font-size: var(--wp--preset--font-size--small); margin-top: 1rem; color: var(--wp--preset--color--contrast-2);">
				Reeds 'n intekenaar? <a href="/my-rekening" style="color: var(--wp--preset--color--primary);">Teken aan</a>
			</p>
		</div>
		<?php
	}
}