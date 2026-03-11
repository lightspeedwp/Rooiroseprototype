<?php
/**
 * Tab Bar — Server-side Render
 *
 * Renders tab buttons and content panels. The Interactivity API (view.js)
 * handles tab switching on the client side.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block inner HTML (InnerBlocks).
 * @var WP_Block $block      Block instance.
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$tabs       = $attributes['tabs'] ?? array();
$default    = $attributes['defaultTab'] ?? ( $tabs[0]['value'] ?? 'tab-1' );

if ( empty( $tabs ) ) {
	return;
}

$wrapper_attrs = get_block_wrapper_attributes( array(
	'class'                => 'dp-tab-bar',
	'data-wp-interactive'  => 'dp/tab-bar',
	'data-wp-context'      => wp_json_encode( array(
		'activeTab' => $default,
		'tabs'      => $tabs,
	) ),
) );
?>

<div <?php echo $wrapper_attrs; // phpcs:ignore ?>>

	<div class="dp-tab-bar__tabs" role="tablist">
		<?php foreach ( $tabs as $tab ) :
			$is_default = ( $tab['value'] === $default );
		?>
		<button
			class="dp-tab-bar__tab"
			role="tab"
			aria-selected="<?php echo $is_default ? 'true' : 'false'; ?>"
			data-tab="<?php echo esc_attr( $tab['value'] ); ?>"
			data-wp-on--click="actions.switchTab"
			data-wp-class--dp-tab-bar__tab--active="<?php echo esc_attr( 'state.isActive_' . $tab['value'] ); ?>"
		>
			<?php echo esc_html( $tab['label'] ); ?>
		</button>
		<?php endforeach; ?>
	</div>

	<div class="dp-tab-bar__panels">
		<?php echo $content; // phpcs:ignore — InnerBlocks content. ?>
	</div>

</div>
