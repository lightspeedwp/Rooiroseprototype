<?php
/**
 * Title: E-Uitgawe Metadata
 * Slug: die-papier/section-eedition-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic e-edition meta: publication date, edition number, page count, price.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_eedition' !== get_post_type( $post_id ) ) {
	return;
}

$pub_date     = get_post_meta( $post_id, 'publication_date', true );
$edition_num  = get_post_meta( $post_id, 'edition_number', true );
$page_count   = get_post_meta( $post_id, 'page_count', true );
$price        = get_post_meta( $post_id, 'price', true );
$is_free      = get_post_meta( $post_id, 'is_free', true );

$pub_fmt = $pub_date ? wp_date( 'j F Y', strtotime( $pub_date ) ) : '';

// Price display.
$price_str = '';
if ( $is_free ) {
	$price_str = 'Gratis';
} elseif ( $price !== '' && $price !== false ) {
	$price_str = 'R' . number_format( (float) $price, 2, ',', ' ' );
}

$items = array();

if ( $pub_fmt ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
		'label' => __( 'Publikasiedatum', 'die-papier' ),
		'value' => $pub_fmt,
	);
}

if ( $edition_num ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
		'label' => __( 'Uitgawe', 'die-papier' ),
		'value' => $edition_num,
	);
}

if ( $page_count ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
		'label' => __( 'Bladsye', 'die-papier' ),
		'value' => $page_count . ' ' . _n( 'bladsy', 'bladsye', (int) $page_count, 'die-papier' ),
	);
}

if ( $price_str ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
		'label' => __( 'Prys', 'die-papier' ),
		'value' => $price_str,
	);
}

if ( empty( $items ) ) {
	return;
}
?>

<div class="dp-cpt-meta dp-cpt-meta--eedition">
	<div class="dp-cpt-meta__grid dp-cpt-meta__grid--row">
		<?php foreach ( $items as $item ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon"><?php echo $item['icon']; ?></span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php echo esc_html( $item['label'] ); ?></span>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $item['value'] ); ?></span>
			</div>
		</div>
		<?php endforeach; ?>
	</div>
</div>
