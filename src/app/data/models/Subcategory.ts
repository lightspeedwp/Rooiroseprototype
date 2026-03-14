/**
 * Subcategory Model
 * 
 * Represents second-level editorial categories (e.g., "Maklik & vinnig" under "Kos").
 * Maps to WordPress tag taxonomy or hierarchical category child.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/tags/
 */

/**
 * Subcategory Interface
 */
export interface Subcategory {
  /** Unique subcategory identifier (lowercase slug) */
  id: string;
  
  /** Subcategory display name (e.g., "Maklik & vinnig") */
  title: string;
  
  /** URL-friendly slug (e.g., "maklik-vinnig") */
  slug: string;
  
  /** Parent category ID (e.g., "kos") */
  parent: string;
  
  /** Subcategory description (optional, 1 sentence) */
  description?: string;
}

/**
 * Slugify Subcategory Name
 * 
 * Converts subcategory name to URL-friendly slug format.
 * 
 * @param name - Subcategory name (e.g., "Maklik & vinnig")
 * @returns Slugified string (e.g., "maklik-vinnig")
 */
export function slugifySubcategoryName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD') // Decompose Afrikaans accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .substring(0, 30); // Limit to 30 chars
}
