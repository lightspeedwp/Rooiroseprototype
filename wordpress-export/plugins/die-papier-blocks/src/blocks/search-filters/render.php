<?php
/**
 * Search Filters — Server-side Render
 *
 * Renders filter controls for search results pages (date, category, sort).
 * Form submission triggers page reload with query params.
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

$show_date     = $attributes['showDate'] ?? true;
$show_category = $attributes['showCategory'] ?? true;
$show_sort     = $attributes['showSort'] ?? true;

// Current query state.
$current_search   = get_search_query();
$current_cat      = isset( $_GET['category_name'] ) ? sanitize_text_field( wp_unslash( $_GET['category_name'] ) ) : '';
$current_date     = isset( $_GET['date_range'] ) ? sanitize_text_field( wp_unslash( $_GET['date_range'] ) ) : '';
$current_sort     = isset( $_GET['orderby'] ) ? sanitize_text_field( wp_unslash( $_GET['orderby'] ) ) : 'relevance';

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class'                => 'dp-search-filters',
	'data-wp-interactive'  => 'dp/search-filters',
	'data-wp-context'      => wp_json_encode( array(
		'category'  => $current_cat,
		'dateRange' => $current_date,
		'sort'      => $current_sort,
	) ),
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>
	<form class="dp-search-filters__form" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<?php if ( $current_search ) : ?>
		<input type="hidden" name="s" value="<?php echo esc_attr( $current_search ); ?>" />
		<?php endif; ?>

		<div class="dp-search-filters__controls">

			<?php if ( $show_date ) : ?>
			<div class="dp-search-filters__control">
				<label for="dp-sf-date" class="dp-search-filters__label">
					<?php esc_html_e( 'Datum', 'die-papier-blocks' ); ?>
				</label>
				<select
					id="dp-sf-date"
					name="date_range"
					class="dp-search-filters__select"
					data-wp-on--change="actions.submitForm"
				>
					<option value=""><?php esc_html_e( 'Enige tyd', 'die-papier-blocks' ); ?></option>
					<option value="24h" <?php selected( $current_date, '24h' ); ?>><?php esc_html_e( 'Afgelope 24 uur', 'die-papier-blocks' ); ?></option>
					<option value="7d" <?php selected( $current_date, '7d' ); ?>><?php esc_html_e( 'Afgelope week', 'die-papier-blocks' ); ?></option>
					<option value="30d" <?php selected( $current_date, '30d' ); ?>><?php esc_html_e( 'Afgelope maand', 'die-papier-blocks' ); ?></option>
					<option value="1y" <?php selected( $current_date, '1y' ); ?>><?php esc_html_e( 'Afgelope jaar', 'die-papier-blocks' ); ?></option>
				</select>
			</div>
			<?php endif; ?>

			<?php if ( $show_category ) :
				$categories = get_categories( array( 'hide_empty' => true ) );
			?>
			<div class="dp-search-filters__control">
				<label for="dp-sf-cat" class="dp-search-filters__label">
					<?php esc_html_e( 'Kategorie', 'die-papier-blocks' ); ?>
				</label>
				<select
					id="dp-sf-cat"
					name="category_name"
					class="dp-search-filters__select"
					data-wp-on--change="actions.submitForm"
				>
					<option value=""><?php esc_html_e( 'Alle kategorieë', 'die-papier-blocks' ); ?></option>
					<?php foreach ( $categories as $cat ) : ?>
					<option value="<?php echo esc_attr( $cat->slug ); ?>" <?php selected( $current_cat, $cat->slug ); ?>>
						<?php echo esc_html( $cat->name ); ?>
					</option>
					<?php endforeach; ?>
				</select>
			</div>
			<?php endif; ?>

			<?php if ( $show_sort ) : ?>
			<div class="dp-search-filters__control">
				<label for="dp-sf-sort" class="dp-search-filters__label">
					<?php esc_html_e( 'Sorteer', 'die-papier-blocks' ); ?>
				</label>
				<select
					id="dp-sf-sort"
					name="orderby"
					class="dp-search-filters__select"
					data-wp-on--change="actions.submitForm"
				>
					<option value="relevance" <?php selected( $current_sort, 'relevance' ); ?>><?php esc_html_e( 'Relevansie', 'die-papier-blocks' ); ?></option>
					<option value="date" <?php selected( $current_sort, 'date' ); ?>><?php esc_html_e( 'Nuutste eerste', 'die-papier-blocks' ); ?></option>
					<option value="title" <?php selected( $current_sort, 'title' ); ?>><?php esc_html_e( 'Alfabeties', 'die-papier-blocks' ); ?></option>
				</select>
			</div>
			<?php endif; ?>

		</div>

		<noscript>
			<button type="submit" class="dp-search-filters__submit">
				<?php esc_html_e( 'Filter', 'die-papier-blocks' ); ?>
			</button>
		</noscript>
	</form>
</div>
