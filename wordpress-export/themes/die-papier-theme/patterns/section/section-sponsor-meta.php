<?php
/**
 * Title: Borg Metadata
 * Slug: die-papier/section-sponsor-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic sponsor meta: website, contact info, active status.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_sponsor' !== get_post_type( $post_id ) ) {
	return;
}

$website       = get_post_meta( $post_id, 'website_url', true );
$active_until  = get_post_meta( $post_id, 'active_until', true );
$contact_phone = get_post_meta( $post_id, 'contact_phone', true );
$contact_email = get_post_meta( $post_id, 'contact_email', true );

// Determine active status.
$is_active = true;
if ( $active_until ) {
	$until_ts  = strtotime( $active_until );
	$is_active = $until_ts && $until_ts > time();
}

$items = array();

if ( $website ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
		'label' => __( 'Webwerf', 'die-papier' ),
		'value' => wp_parse_url( $website, PHP_URL_HOST ),
		'url'   => $website,
	);
}

if ( $contact_phone ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
		'label' => __( 'Telefoon', 'die-papier' ),
		'value' => $contact_phone,
		'url'   => 'tel:' . preg_replace( '/[^+0-9]/', '', $contact_phone ),
	);
}

if ( $contact_email ) {
	$items[] = array(
		'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
		'label' => __( 'E-pos', 'die-papier' ),
		'value' => $contact_email,
		'url'   => 'mailto:' . $contact_email,
	);
}

if ( empty( $items ) && ! $active_until ) {
	return;
}
?>

<div class="dp-cpt-meta dp-cpt-meta--sponsor">
	<div class="dp-sponsor-meta__status dp-sponsor-meta__status--<?php echo $is_active ? 'active' : 'inactive'; ?>">
		<span class="dp-sponsor-meta__status-dot"></span>
		<?php echo $is_active
			? esc_html__( 'Aktiewe borg', 'die-papier' )
			: esc_html__( 'Vorige borg', 'die-papier' ); ?>
	</div>

	<?php if ( ! empty( $items ) ) : ?>
	<div class="dp-cpt-meta__grid dp-cpt-meta__grid--stack">
		<?php foreach ( $items as $item ) : ?>
		<div class="dp-cpt-meta__item">
			<span class="dp-cpt-meta__icon"><?php echo $item['icon']; ?></span>
			<div class="dp-cpt-meta__text">
				<span class="dp-cpt-meta__label"><?php echo esc_html( $item['label'] ); ?></span>
				<?php if ( ! empty( $item['url'] ) ) : ?>
				<a class="dp-cpt-meta__link" href="<?php echo esc_url( $item['url'] ); ?>"
					<?php echo str_starts_with( $item['url'], 'http' ) ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>>
					<?php echo esc_html( $item['value'] ); ?>
				</a>
				<?php else : ?>
				<span class="dp-cpt-meta__value"><?php echo esc_html( $item['value'] ); ?></span>
				<?php endif; ?>
			</div>
		</div>
		<?php endforeach; ?>
	</div>
	<?php endif; ?>
</div>