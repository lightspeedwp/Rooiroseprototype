<?php
/**
 * Title: Multimedia Metadata
 * Slug: die-papier/section-multimedia-meta
 * Categories: die-papier-sections
 * Block Types: core/group
 * Description: Dynamic multimedia meta and embed: video/audio/gallery type, duration, photographer.
 * Inserter: false
 *
 * @package die-papier-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = get_the_ID();

if ( ! $post_id || 'dp_multimedia' !== get_post_type( $post_id ) ) {
	return;
}

$media_type   = get_post_meta( $post_id, 'media_type', true ) ?: 'video';
$duration     = get_post_meta( $post_id, 'duration', true );
$video_url    = get_post_meta( $post_id, 'video_url', true );
$audio_url    = get_post_meta( $post_id, 'audio_url', true );
$image_count  = get_post_meta( $post_id, 'image_count', true );
$photographer = get_post_meta( $post_id, 'photographer', true );
$pub_date     = get_post_meta( $post_id, 'publication_date', true );

// Type labels in Afrikaans.
$type_labels = array(
	'video'   => __( 'Video', 'die-papier' ),
	'audio'   => __( 'Oudio', 'die-papier' ),
	'gallery' => __( 'Fotogalery', 'die-papier' ),
);
$type_label = $type_labels[ $media_type ] ?? $media_type;

// Type icons.
$type_icons = array(
	'video'   => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
	'audio'   => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
	'gallery' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
);
$type_icon = $type_icons[ $media_type ] ?? $type_icons['video'];

$pub_fmt = $pub_date ? wp_date( 'j F Y', strtotime( $pub_date ) ) : '';
?>

<div class="dp-cpt-meta dp-cpt-meta--multimedia">
	<div class="dp-multimedia-meta__pills">
		<span class="dp-multimedia-meta__pill dp-multimedia-meta__pill--type">
			<?php echo $type_icon; ?>
			<?php echo esc_html( $type_label ); ?>
		</span>

		<?php if ( $duration ) : ?>
		<span class="dp-multimedia-meta__pill">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			<?php echo esc_html( $duration ); ?>
		</span>
		<?php endif; ?>

		<?php if ( 'gallery' === $media_type && $image_count ) : ?>
		<span class="dp-multimedia-meta__pill">
			<?php
			printf(
				/* translators: %d: number of photos */
				esc_html( _n( '%d foto', '%d foto\'s', (int) $image_count, 'die-papier' ) ),
				(int) $image_count
			);
			?>
		</span>
		<?php endif; ?>

		<?php if ( $photographer ) : ?>
		<span class="dp-multimedia-meta__pill">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
			<?php echo esc_html( $photographer ); ?>
		</span>
		<?php endif; ?>

		<?php if ( $pub_fmt ) : ?>
		<span class="dp-multimedia-meta__pill">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
			<?php echo esc_html( $pub_fmt ); ?>
		</span>
		<?php endif; ?>
	</div>

	<div class="dp-multimedia-meta__embed">
		<?php if ( 'video' === $media_type && $video_url ) : ?>
			<?php
			// Use WordPress oEmbed for YouTube/Vimeo/etc.
			$embed = wp_oembed_get( $video_url );
			if ( $embed ) {
				echo '<div class="dp-multimedia-meta__video-wrap">' . $embed . '</div>';
			} else {
				// Fallback to direct video element.
				?>
				<video controls class="dp-multimedia-meta__video" preload="metadata">
					<source src="<?php echo esc_url( $video_url ); ?>">
					<?php esc_html_e( 'Jou blaaier ondersteun nie hierdie video-formaat nie.', 'die-papier' ); ?>
				</video>
				<?php
			}
			?>
		<?php elseif ( 'audio' === $media_type && $audio_url ) : ?>
			<audio controls class="dp-multimedia-meta__audio" preload="metadata">
				<source src="<?php echo esc_url( $audio_url ); ?>">
				<?php esc_html_e( 'Jou blaaier ondersteun nie hierdie oudio-formaat nie.', 'die-papier' ); ?>
			</audio>
		<?php elseif ( 'gallery' === $media_type ) : ?>
			<?php
			// Render attached images as a gallery.
			$gallery_images = get_attached_media( 'image', $post_id );
			if ( ! empty( $gallery_images ) ) :
			?>
			<div class="dp-multimedia-meta__gallery">
				<?php foreach ( $gallery_images as $img ) : ?>
				<figure class="dp-multimedia-meta__gallery-item">
					<?php echo wp_get_attachment_image( $img->ID, 'medium_large', false, array( 'loading' => 'lazy' ) ); ?>
					<?php if ( $img->post_excerpt ) : ?>
					<figcaption><?php echo esc_html( $img->post_excerpt ); ?></figcaption>
					<?php endif; ?>
				</figure>
				<?php endforeach; ?>
			</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>
</div>