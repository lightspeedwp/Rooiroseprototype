/**
 * Rooi Rose Brand Tokens
 * 
 * Brand constants for rooi rose magazine prototype.
 * Used across components for consistent branding.
 */

/**
 * Brand Colors
 */
export const BRAND_COLORS = {
  /** Primary rooi rose red (#e01e12) */
  PRIMARY_RED: '#e01e12',
  
  /** Tagline grey (#424242) */
  TAGLINE_GREY: '#424242',
  
  /** Navy text color (#142135) - inherited from design tokens */
  NAVY: '#142135',
  
  /** White (#FFFFFF) */
  WHITE: '#FFFFFF',
  
  /** Light grey for borders (#E5E7EB) */
  BORDER_LIGHT: '#E5E7EB',
  
  /** Dark grey for body text (#4B5563) */
  TEXT_GREY: '#4B5563',
} as const;

/**
 * Brand Typography
 */
export const BRAND_FONTS = {
  /** Display font for headings (Playfair Display SC) */
  DISPLAY_FONT: 'Playfair Display SC',
  
  /** Body font for paragraphs and UI (Karla) */
  BODY_FONT: 'Karla',
  
  /** WordPress-aligned CSS class for serif font */
  SERIF_CLASS: 'has-brand-serif-font-family',
  
  /** WordPress-aligned CSS class for sans-serif font */
  SANS_CLASS: 'has-brand-sans-font-family',
} as const;

/**
 * Brand Spacing
 */
export const BRAND_SPACING = {
  /** Extra small spacing (8px) */
  X_SMALL: 'var(--wp--preset--spacing--x-small)',
  
  /** Small spacing (16px) */
  SMALL: 'var(--wp--preset--spacing--small)',
  
  /** Medium spacing (24px) */
  MEDIUM: 'var(--wp--preset--spacing--medium)',
  
  /** Large spacing (32px) */
  LARGE: 'var(--wp--preset--spacing--large)',
  
  /** Extra large spacing (48px) */
  X_LARGE: 'var(--wp--preset--spacing--x-large)',
  
  /** Extra extra large spacing (64px) */
  XX_LARGE: 'var(--wp--preset--spacing--xx-large)',
} as const;

/**
 * Brand Breakpoints
 */
export const BRAND_BREAKPOINTS = {
  /** Mobile max width */
  MOBILE: 768,
  
  /** Tablet max width */
  TABLET: 1024,
  
  /** Desktop min width */
  DESKTOP: 1025,
} as const;

/**
 * Category Keywords for Unsplash Images
 * 
 * Used to generate category-specific hero images.
 */
export const CATEGORY_IMAGE_KEYWORDS = {
  kos: 'food,recipe,cooking,dessert,kitchen,salad',
  mode: 'fashion,runway,outfit,style,clothing,editorial',
  skoonheid: 'beauty,skincare,makeup,hair,cosmetics',
  gesondheid: 'wellness,fitness,yoga,healthy food,doctor',
  bekendes: 'celebrity,interview,red carpet,stage',
  leefstyl: 'home decor,diy,garden,interior,craft',
  'jou-lewe': 'relationship,family,reflection,journal',
  ontspanning: 'travel,beach,podcast,books,cinema',
  'rooiwarm-wenners': 'award,trophy,product flatlay',
  wen: 'gift box,giveaway,prize',
} as const;

/**
 * Default Author Name
 */
export const DEFAULT_AUTHOR = 'rooi rose Redaksie';

/**
 * Generate Unsplash Image URL
 * 
 * Creates Unsplash Source URL with category-specific keywords and unique signature.
 * 
 * @param categoryId - Category ID (e.g., "kos", "mode")
 * @param uniqueId - Unique identifier for sig parameter (e.g., post ID)
 * @param width - Image width (default: 1200)
 * @param height - Image height (default: 800)
 * @returns Unsplash Source URL
 */
export function generateUnsplashUrl(
  categoryId: string,
  uniqueId: string,
  width: number = 1200,
  height: number = 800
): string {
  const keywords = CATEGORY_IMAGE_KEYWORDS[categoryId as keyof typeof CATEGORY_IMAGE_KEYWORDS] || 'magazine,editorial';
  return `https://source.unsplash.com/${width}x${height}/?${keywords}&sig=${uniqueId}`;
}
