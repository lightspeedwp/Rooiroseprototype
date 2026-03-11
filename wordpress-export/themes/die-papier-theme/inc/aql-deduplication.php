<?php
namespace DiePapierTema\includes;
/**
 * Advanced Query Loop (AQL) Deduplication Filter
 *
 * Prevents duplicate posts from appearing across multiple query blocks on the same page.
 * Essential for homepage sections (Hero, Feature Grid, Nuus, Sport, etc.) to ensure
 * each section shows unique articles.
 *
 * @package DiePapierTema
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Global array to track displayed post IDs across all queries
 *
 * This array persists throughout the page load and accumulates post IDs
 * from each query block execution.
 *
 * @var array
 */
global $dp_displayed_post_ids;
$dp_displayed_post_ids = array();

/**
 * Deduplicate posts across AQL query blocks
 *
 * This filter hooks into the Advanced Query Loop plugin's query_vars filter.
 * It excludes posts that have already been displayed in previous query blocks
 * on the same page.
 *
 * @param array $query_vars WP_Query arguments from the AQL block.
 * @param array $block      AQL block attributes.
 * @return array Modified query arguments with post__not_in filter.
 */
function dp_aql_deduplicate_posts( $query_vars, $block ) {
	global $dp_displayed_post_ids;
	
	// Skip deduplication if explicitly disabled via block attribute
	if ( isset( $block['attrs']['dpDisableDeduplication'] ) && $block['attrs']['dpDisableDeduplication'] ) {
		return $query_vars;
	}
	
	// Exclude already-displayed posts
	if ( ! empty( $dp_displayed_post_ids ) ) {
		// Merge with existing post__not_in if it exists
		if ( isset( $query_vars['post__not_in'] ) && is_array( $query_vars['post__not_in'] ) ) {
			$query_vars['post__not_in'] = array_merge( $query_vars['post__not_in'], $dp_displayed_post_ids );
		} else {
			$query_vars['post__not_in'] = $dp_displayed_post_ids;
		}
		
		// Remove duplicates
		$query_vars['post__not_in'] = array_unique( $query_vars['post__not_in'] );
	}
	
	return $query_vars;
}
add_filter( 'aql_query_vars', __NAMESPACE__ . '\dp_aql_deduplicate_posts', 10, 2 );

/**
 * Track displayed posts after each query
 *
 * After each AQL block executes, this filter captures the post IDs
 * and adds them to the global tracking array.
 *
 * @param WP_Query $query  The WP_Query object after execution.
 * @param array    $block  AQL block attributes.
 * @return WP_Query Unmodified query object (filter is for side effects only).
 */
function dp_track_displayed_posts( $query, $block ) {
	global $dp_displayed_post_ids;
	
	// Skip tracking if deduplication is disabled
	if ( isset( $block['attrs']['dpDisableDeduplication'] ) && $block['attrs']['dpDisableDeduplication'] ) {
		return $query;
	}
	
	// Add post IDs from this query to the global tracking array
	if ( $query->have_posts() ) {
		foreach ( $query->posts as $post ) {
			$dp_displayed_post_ids[] = $post->ID;
		}
		
		// Remove duplicates (defensive)
		$dp_displayed_post_ids = array_unique( $dp_displayed_post_ids );
	}
	
	return $query;
}
add_filter( 'aql_query', __NAMESPACE__ . '\dp_track_displayed_posts', 10, 2 );

/**
 * Reset deduplication tracking on new page load
 *
 * Clears the global tracking array before rendering each template.
 * This prevents deduplication from carrying over between page loads
 * or between different templates in the same request.
 */
function dp_reset_deduplication_tracking() {
	global $dp_displayed_post_ids;
	$dp_displayed_post_ids = array();
}
add_action( 'wp_head', __NAMESPACE__ . '\dp_reset_deduplication_tracking', 1 );

/**
 * How to disable deduplication for specific query blocks
 *
 * Add this custom attribute to your AQL block in the pattern file:
 *
 * ```
 * <!-- wp:acf/advanced-query-loop {
 *     "dpDisableDeduplication": true,
 *     ... other attributes ...
 * } -->
 * ```
 *
 * Use cases for disabling deduplication:
 * - Related Articles section (should show posts related to current article, even if duplicates)
 * - "You May Also Like" sections
 * - Sidebar widgets with curated content
 * - Archive pages where showing all results is required
 */

/**
 * Debug: Log deduplication activity (for development only)
 *
 * Uncomment this function during development to see which posts are being excluded.
 * Remove or comment out before production deployment.
 */
/*
function dp_debug_deduplication() {
	global $dp_displayed_post_ids;
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG && ! empty( $dp_displayed_post_ids ) ) {
		error_log( '[Die Papier AQL] Excluded Post IDs: ' . implode( ', ', $dp_displayed_post_ids ) );
	}
}
add_action( 'wp_footer', 'dp_debug_deduplication' );
*/