/**
 * Responsive Image Utilities (PERF-046)
 *
 * Generates srcSet and sizes attributes for Unsplash-hosted images.
 * Unsplash supports on-the-fly resizing via URL query parameters.
 *
 * Usage:
 *   const { srcSet, sizes } = getResponsiveProps(imageUrl, 'hero');
 *   <ImageWithFallback src={imageUrl} srcSet={srcSet} sizes={sizes} />
 */

const UNSPLASH_WIDTHS = [400, 800, 1200, 1600] as const;

/** Check if a URL is an Unsplash image that supports ?w= resizing */
function isUnsplashUrl(url: string): boolean {
  return url.includes('images.unsplash.com');
}

/**
 * Build a resized Unsplash URL at a given width.
 * Preserves existing query params and adds/overrides w, fit, q.
 */
function unsplashResize(url: string, width: number, quality = 80): string {
  try {
    const u = new URL(url);
    u.searchParams.set('w', String(width));
    u.searchParams.set('fit', 'crop');
    u.searchParams.set('q', String(quality));
    u.searchParams.set('auto', 'format'); // WebP/AVIF when supported
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * Preset size hints for common layout positions.
 * Maps to CSS `sizes` attribute values.
 */
const SIZE_PRESETS = {
  /** Full-width hero image */
  hero: '100vw',
  /** Hero on desktop constrained, full on mobile */
  heroConstrained: '(min-width: 1280px) 1200px, 100vw',
  /** Card thumbnail in a grid */
  card: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  /** Small thumbnail (sidebar, list item) */
  thumbnail: '(min-width: 640px) 200px, 150px',
  /** Half-width featured image */
  featured: '(min-width: 768px) 50vw, 100vw',
} as const;

export type SizePreset = keyof typeof SIZE_PRESETS;

interface ResponsiveProps {
  srcSet?: string;
  sizes?: string;
}

/**
 * Generate responsive image props for an image URL.
 * Only generates srcSet for Unsplash images; returns empty object otherwise.
 *
 * @param url - The image URL
 * @param preset - Layout preset for the `sizes` attribute
 * @param quality - JPEG/WebP quality (default 80)
 */
export function getResponsiveProps(
  url: string,
  preset: SizePreset = 'card',
  quality = 80,
): ResponsiveProps {
  if (!url || !isUnsplashUrl(url)) {
    return {};
  }

  const srcSet = UNSPLASH_WIDTHS
    .map(w => `${unsplashResize(url, w, quality)} ${w}w`)
    .join(', ');

  return {
    srcSet,
    sizes: SIZE_PRESETS[preset],
  };
}
