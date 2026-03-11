<?php
/**
 * Filter Bar — Server-side Render
 *
 * Client-side filter bar for archive pages. Uses Interactivity API
 * to update query params without page reload.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block inner HTML.
 * @var WP_Block $block      Block instance.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$show_search = $attributes['showSearch'] ?? true;
$filters     = $attributes['filters'] ?? array();

// Auto-detect taxonomies if no filters configured.
if ( empty( $filters ) ) {
	$filters = array(
		array(
			'taxonomy' => 'category',
			'label'    => __( 'Kategorie', 'die-papier-blocks' ),
		),
	);
}

// Get current query params.
$current_search   = get_search_query();
$current_category = get_query_var( 'cat' );

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class'                => 'dp-filter-bar',
	'data-wp-interactive'  => 'dp/filter-bar',
	'data-wp-context'      => wp_json_encode( array(
		'search'        => $current_search,
		'activeFilters' => array(),
	) ),
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<div class="dp-filter-bar__inner">

		<?php if ( $show_search ) : ?>
		<div class="dp-filter-bar__search">
			<svg class="dp-filter-bar__search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="11" cy="11" r="8"/>
				<path d="m21 21-4.3-4.3"/>
			</svg>
			<input
				type="search"
				class="dp-filter-bar__search-input"
				placeholder="<?php esc_attr_e( 'Soek...', 'die-papier-blocks' ); ?>"
				value="<?php echo esc_attr( $current_search ); ?>"
				data-wp-bind--value="context.search"
				data-wp-on--input="actions.updateSearch"
				data-wp-on--keydown="actions.handleSearchKey"
			/>
		</div>
		<?php endif; ?>

		<div class="dp-filter-bar__filters">
			<?php foreach ( $filters as $filter ) :
				$taxonomy = $filter['taxonomy'] ?? 'category';
				$label    = $filter['label'] ?? ucfirst( $taxonomy );
				$terms    = get_terms( array(
					'taxonomy'   => $taxonomy,
					'hide_empty' => true,
					'number'     => 50,
				) );

				if ( is_wp_error( $terms ) || empty( $terms ) ) {
					continue;
				}
			?>
			<div class="dp-filter-bar__group">
				<span class="dp-filter-bar__label"><?php echo esc_html( $label ); ?>:</span>
				<div class="dp-filter-bar__pills">
					<button
						class="dp-filter-bar__pill<?php echo ! $current_category ? ' dp-filter-bar__pill--active' : ''; ?>"
						data-wp-on--click="actions.clearFilter"
						data-taxonomy="<?php echo esc_attr( $taxonomy ); ?>"
					>
						<?php esc_html_e( 'Alles', 'die-papier-blocks' ); ?>
					</button>
					<?php foreach ( $terms as $term ) :
						$is_active = ( $current_category == $term->term_id );
					?>
					<button
						class="dp-filter-bar__pill<?php echo $is_active ? ' dp-filter-bar__pill--active' : ''; ?>"
						data-wp-on--click="actions.applyFilter"
						data-taxonomy="<?php echo esc_attr( $taxonomy ); ?>"
						data-term-id="<?php echo esc_attr( $term->term_id ); ?>"
						data-term-slug="<?php echo esc_attr( $term->slug ); ?>"
					>
						<?php echo esc_html( $term->name ); ?>
					</button>
					<?php endforeach; ?>
				</div>
			</div>
			<?php endforeach; ?>
		</div>

	</div>
</div>
