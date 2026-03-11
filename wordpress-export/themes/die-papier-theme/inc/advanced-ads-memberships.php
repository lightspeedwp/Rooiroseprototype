<?php
namespace DiePapierTema\includes;
/**
 * Advanced Ads + WooCommerce Memberships Integration
 *
 * Hides ads from active E-Edition subscribers. This filter integrates
 * Advanced Ads plugin with WooCommerce Memberships to provide an
 * ad-free experience for paying subscribers.
 *
 * @package DiePapierTema
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Hide ads for active E-Edition subscribers
 *
 * This filter checks if the current user has an active "E-Uitgawe Intekenaar"
 * membership. If yes, all Advanced Ads placements are hidden.
 *
 * @param bool   $can_display Whether the ad can be displayed (default: true).
 * @param object $ad          Advanced Ads ad object.
 * @return bool True if ad should display, false to hide.
 */
function dp_hide_ads_for_subscribers( $can_display, $ad ) {
	// Check if WooCommerce Memberships plugin is active
	if ( ! function_exists( 'wc_memberships_is_user_active_member' ) ) {
		return $can_display; // Plugin not active, show ads
	}
	
	// Check if user is logged in
	if ( ! is_user_logged_in() ) {
		return $can_display; // Not logged in, show ads
	}
	
	// Get current user ID
	$user_id = get_current_user_id();
	
	// Check if user has active E-Edition subscription membership
	$membership_plan_slug = 'e-uitgawe-intekenaar'; // Membership plan slug
	
	if ( wc_memberships_is_user_active_member( $user_id, $membership_plan_slug ) ) {
		// User is an active subscriber, hide ads
		return false;
	}
	
	// User is not a subscriber, show ads
	return $can_display;
}
add_filter( 'advanced-ads-can-display', __NAMESPACE__ . '\dp_hide_ads_for_subscribers', 10, 2 );

/**
 * Exempted ad placements (always show, even for subscribers)
 *
 * Some ad placements may need to display even for subscribers (e.g., sponsored content,
 * editorial placements). This filter allows specific placements to bypass the subscriber check.
 *
 * @param bool   $can_display Whether the ad can be displayed.
 * @param object $ad          Advanced Ads ad object.
 * @return bool True if ad should display, false to hide.
 */
function dp_exempt_sponsored_content_ads( $can_display, $ad ) {
	// If ad is already hidden by subscriber filter, check if it should be exempted
	if ( ! $can_display ) {
		// List of exempted placement IDs
		$exempted_placements = array(
			// 'dp-sponsored-content', // Example: Sponsored content placement
			// Add more placement IDs here as needed
		);
		
		// Check if this ad belongs to an exempted placement
		if ( isset( $ad->placement ) && in_array( $ad->placement, $exempted_placements, true ) ) {
			return true; // Show this ad even for subscribers
		}
	}
	
	return $can_display;
}
// Uncomment the line below to enable sponsored content exemptions
// add_filter( 'advanced-ads-can-display', __NAMESPACE__ . '\dp_exempt_sponsored_content_ads', 20, 2 );

/**
 * Debug: Log ad display decisions (for development only)
 *
 * Uncomment this function during development to log why ads are showing/hiding.
 * Remove or comment out before production deployment.
 */
/*
function dp_debug_ad_display( $can_display, $ad ) {
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		error_log( sprintf(
			'[Die Papier Ads] Ad ID: %s, Can Display: %s, User ID: %s, Is Subscriber: %s',
			$ad->id,
			$can_display ? 'Yes' : 'No',
			get_current_user_id(),
			function_exists( 'wc_memberships_is_user_active_member' ) && wc_memberships_is_user_active_member( get_current_user_id(), 'e-uitgawe-intekenaar' ) ? 'Yes' : 'No'
		) );
	}
	return $can_display;
}
add_filter( 'advanced-ads-can-display', 'dp_debug_ad_display', 30, 2 );
*/