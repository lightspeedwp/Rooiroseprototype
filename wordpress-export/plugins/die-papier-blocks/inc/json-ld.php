<?php
/**
 * JSON-LD Structured Data for CPTs
 *
 * Outputs schema.org markup in the <head> for single CPT pages.
 * Supports: dp_competition, dp_event, dp_obituary, dp_eedition,
 *           dp_multimedia, dp_sponsor, and regular posts (Article).
 *
 * @package DiePapierBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Outputs JSON-LD structured data for the current single post/CPT.
 */
function dp_json_ld_output() {
	if ( ! is_singular() ) {
		return;
	}

	$post_id   = get_the_ID();
	$post_type = get_post_type( $post_id );

	$schema = null;

	switch ( $post_type ) {
		case 'post':
			$schema = dp_json_ld_article( $post_id );
			break;

		case 'dp_event':
			$schema = dp_json_ld_event( $post_id );
			break;

		case 'dp_competition':
			$schema = dp_json_ld_competition( $post_id );
			break;

		case 'dp_obituary':
			$schema = dp_json_ld_obituary( $post_id );
			break;

		case 'dp_eedition':
			$schema = dp_json_ld_eedition( $post_id );
			break;

		case 'dp_multimedia':
			$schema = dp_json_ld_multimedia( $post_id );
			break;

		case 'dp_sponsor':
			$schema = dp_json_ld_sponsor( $post_id );
			break;
	}

	if ( ! $schema ) {
		return;
	}

	// Add publisher info to all schemas.
	$schema['publisher'] = dp_json_ld_publisher();

	echo '<script type="application/ld+json">' . "\n";
	echo wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT );
	echo "\n" . '</script>' . "\n";
}
add_action( 'wp_head', 'dp_json_ld_output', 5 );

/**
 * Publisher/Organization schema (shared).
 */
function dp_json_ld_publisher() {
	$logo_id  = get_theme_mod( 'custom_logo' );
	$logo_url = $logo_id ? wp_get_attachment_image_url( $logo_id, 'full' ) : '';

	$publisher = array(
		'@type' => 'NewsMediaOrganization',
		'name'  => get_bloginfo( 'name' ),
		'url'   => home_url( '/' ),
	);

	if ( $logo_url ) {
		$publisher['logo'] = array(
			'@type' => 'ImageObject',
			'url'   => $logo_url,
		);
	}

	return $publisher;
}

/**
 * Get featured image data array.
 */
function dp_json_ld_image( $post_id ) {
	$thumb_id  = get_post_thumbnail_id( $post_id );
	if ( ! $thumb_id ) {
		return null;
	}

	$img_src = wp_get_attachment_image_src( $thumb_id, 'full' );
	if ( ! $img_src ) {
		return null;
	}

	return array(
		'@type'  => 'ImageObject',
		'url'    => $img_src[0],
		'width'  => $img_src[1],
		'height' => $img_src[2],
	);
}

/**
 * Article (regular posts).
 */
function dp_json_ld_article( $post_id ) {
	$categories = get_the_category( $post_id );
	$cat_name   = ! empty( $categories ) ? $categories[0]->name : '';

	$schema = array(
		'@context'         => 'https://schema.org',
		'@type'            => 'NewsArticle',
		'mainEntityOfPage' => get_permalink( $post_id ),
		'headline'         => get_the_title( $post_id ),
		'datePublished'    => get_the_date( 'c', $post_id ),
		'dateModified'     => get_the_modified_date( 'c', $post_id ),
		'author'           => array(
			'@type' => 'Person',
			'name'  => get_the_author_meta( 'display_name', get_post_field( 'post_author', $post_id ) ),
		),
		'description'      => wp_trim_words( get_the_excerpt( $post_id ), 30, '...' ),
		'inLanguage'       => 'af-ZA',
	);

	if ( $cat_name ) {
		$schema['articleSection'] = $cat_name;
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['image'] = $image;
	}

	return $schema;
}

/**
 * Event (dp_event).
 * Uses schema.org/Event.
 */
function dp_json_ld_event( $post_id ) {
	$event_date     = get_post_meta( $post_id, 'event_date', true );
	$event_end_date = get_post_meta( $post_id, 'event_end_date', true );
	$location_name  = get_post_meta( $post_id, 'location_name', true );
	$location_addr  = get_post_meta( $post_id, 'location_address', true );
	$price          = get_post_meta( $post_id, 'price', true );
	$organiser      = get_post_meta( $post_id, 'organiser_name', true );
	$website_url    = get_post_meta( $post_id, 'website_url', true );

	$schema = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Event',
		'name'        => get_the_title( $post_id ),
		'url'         => get_permalink( $post_id ),
		'description' => wp_trim_words( get_the_excerpt( $post_id ), 40, '...' ),
		'inLanguage'  => 'af-ZA',
	);

	if ( $event_date ) {
		$schema['startDate'] = gmdate( 'c', strtotime( $event_date ) );
	}

	if ( $event_end_date ) {
		$schema['endDate'] = gmdate( 'c', strtotime( $event_end_date ) );
	}

	// Location.
	if ( $location_name ) {
		$location = array(
			'@type' => 'Place',
			'name'  => $location_name,
		);
		if ( $location_addr ) {
			$location['address'] = array(
				'@type'          => 'PostalAddress',
				'streetAddress'  => $location_addr,
				'addressCountry' => 'ZA',
			);
		}
		$schema['location'] = $location;
	}

	// Offers.
	if ( $price !== '' && $price !== false ) {
		$schema['offers'] = array(
			'@type'         => 'Offer',
			'price'         => floatval( $price ),
			'priceCurrency' => 'ZAR',
			'availability'  => 'https://schema.org/InStock',
		);
	}

	// Organizer.
	if ( $organiser ) {
		$organizer_data = array(
			'@type' => 'Organization',
			'name'  => $organiser,
		);
		if ( $website_url ) {
			$organizer_data['url'] = $website_url;
		}
		$schema['organizer'] = $organizer_data;
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['image'] = $image;
	}

	// Event status.
	$schema['eventStatus']       = 'https://schema.org/EventScheduled';
	$schema['eventAttendanceMode'] = 'https://schema.org/OfflineEventAttendanceMode';

	return $schema;
}

/**
 * Competition (dp_competition).
 * Modelled as a schema.org/Event with contest properties.
 */
function dp_json_ld_competition( $post_id ) {
	$prize_desc   = get_post_meta( $post_id, 'prize_description', true );
	$prize_value  = get_post_meta( $post_id, 'prize_value', true );
	$closing_date = get_post_meta( $post_id, 'closing_date', true );

	$schema = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Event',
		'name'        => get_the_title( $post_id ),
		'url'         => get_permalink( $post_id ),
		'description' => wp_trim_words( get_the_excerpt( $post_id ), 40, '...' ),
		'inLanguage'  => 'af-ZA',
		'startDate'   => get_the_date( 'c', $post_id ),
	);

	if ( $closing_date ) {
		$schema['endDate'] = gmdate( 'c', strtotime( $closing_date ) );
	}

	// Offer (the prize).
	if ( $prize_value || $prize_desc ) {
		$offer = array(
			'@type'        => 'Offer',
			'availability' => 'https://schema.org/InStock',
		);
		if ( $prize_value ) {
			$offer['price']         = floatval( $prize_value );
			$offer['priceCurrency'] = 'ZAR';
		}
		if ( $prize_desc ) {
			$offer['description'] = $prize_desc;
		}
		$schema['offers'] = $offer;
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['image'] = $image;
	}

	return $schema;
}

/**
 * Obituary (dp_obituary).
 * Uses schema.org/Article with additional person data.
 */
function dp_json_ld_obituary( $post_id ) {
	$date_of_birth = get_post_meta( $post_id, 'date_of_birth', true );
	$date_of_death = get_post_meta( $post_id, 'date_of_death', true );
	$location      = get_post_meta( $post_id, 'location', true );

	$schema = array(
		'@context'         => 'https://schema.org',
		'@type'            => 'Article',
		'mainEntityOfPage' => get_permalink( $post_id ),
		'headline'         => get_the_title( $post_id ),
		'datePublished'    => get_the_date( 'c', $post_id ),
		'dateModified'     => get_the_modified_date( 'c', $post_id ),
		'inLanguage'       => 'af-ZA',
		'genre'            => 'Obituary',
	);

	// Embed the deceased person as about.
	$person = array(
		'@type' => 'Person',
		'name'  => get_the_title( $post_id ),
	);
	if ( $date_of_birth ) {
		$person['birthDate'] = $date_of_birth;
	}
	if ( $date_of_death ) {
		$person['deathDate'] = $date_of_death;
	}
	if ( $location ) {
		$person['homeLocation'] = array(
			'@type' => 'Place',
			'name'  => $location,
		);
	}
	$schema['about'] = $person;

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['image'] = $image;
	}

	return $schema;
}

/**
 * E-Edition (dp_eedition).
 * Uses schema.org/DigitalDocument.
 */
function dp_json_ld_eedition( $post_id ) {
	$issue_date = get_post_meta( $post_id, 'publication_date', true );
	$page_count = get_post_meta( $post_id, 'page_count', true );

	$schema = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'DigitalDocument',
		'name'        => get_the_title( $post_id ),
		'url'         => get_permalink( $post_id ),
		'description' => wp_trim_words( get_the_excerpt( $post_id ), 30, '...' ),
		'inLanguage'  => 'af-ZA',
		'encodingFormat' => 'application/pdf',
	);

	if ( $issue_date ) {
		$schema['datePublished'] = $issue_date;
	} else {
		$schema['datePublished'] = get_the_date( 'c', $post_id );
	}

	if ( $page_count ) {
		$schema['numberOfPages'] = intval( $page_count );
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['image'] = $image;
	}

	return $schema;
}

/**
 * Multimedia (dp_multimedia).
 * Uses schema.org/VideoObject, AudioObject, or ImageGallery depending on type.
 */
function dp_json_ld_multimedia( $post_id ) {
	$media_type = get_post_meta( $post_id, 'media_type', true ) ?: 'video';
	$duration   = get_post_meta( $post_id, 'duration', true );

	// Get the correct URL based on media type.
	$media_url = '';
	if ( 'video' === $media_type ) {
		$media_url = get_post_meta( $post_id, 'video_url', true );
	} elseif ( 'podcast' === $media_type || 'audio' === $media_type ) {
		$media_url = get_post_meta( $post_id, 'audio_url', true );
	}

	$type_map = array(
		'video'   => 'VideoObject',
		'audio'   => 'AudioObject',
		'podcast' => 'AudioObject',
		'gallery' => 'ImageGallery',
	);

	$schema_type = $type_map[ $media_type ] ?? 'CreativeWork';

	$schema = array(
		'@context'      => 'https://schema.org',
		'@type'         => $schema_type,
		'name'          => get_the_title( $post_id ),
		'url'           => get_permalink( $post_id ),
		'description'   => wp_trim_words( get_the_excerpt( $post_id ), 30, '...' ),
		'datePublished' => get_the_date( 'c', $post_id ),
		'inLanguage'    => 'af-ZA',
	);

	if ( $media_url ) {
		if ( 'video' === $media_type ) {
			$schema['contentUrl'] = $media_url;
			$schema['embedUrl']   = $media_url;
		} elseif ( 'podcast' === $media_type ) {
			$schema['contentUrl'] = $media_url;
		}
	}

	// Duration in ISO 8601 format.
	if ( $duration ) {
		$schema['duration'] = $duration;
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['thumbnailUrl'] = $image['url'];
		$schema['image']        = $image;
	}

	// Upload date (Google requires this for VideoObject).
	if ( 'video' === $media_type ) {
		$schema['uploadDate'] = get_the_date( 'c', $post_id );
	}

	return $schema;
}

/**
 * Sponsor (dp_sponsor).
 * Uses schema.org/Organization.
 */
function dp_json_ld_sponsor( $post_id ) {
	$website_url  = get_post_meta( $post_id, 'website_url', true );
	$contact_email = get_post_meta( $post_id, 'contact_email', true );

	$schema = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Organization',
		'name'        => get_the_title( $post_id ),
		'url'         => $website_url ?: get_permalink( $post_id ),
		'description' => wp_trim_words( get_the_excerpt( $post_id ), 30, '...' ),
	);

	if ( $contact_email ) {
		$schema['email'] = $contact_email;
	}

	$image = dp_json_ld_image( $post_id );
	if ( $image ) {
		$schema['logo'] = $image;
	}

	// Sponsor tier taxonomy.
	$tiers = get_the_terms( $post_id, 'dp_sponsor_tier' );
	if ( ! is_wp_error( $tiers ) && ! empty( $tiers ) ) {
		$schema['additionalType'] = 'Sponsor';
		$schema['award']          = $tiers[0]->name;
	}

	return $schema;
}