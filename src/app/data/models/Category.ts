/**
 * Category Model
 * 
 * Represents top-level editorial categories (e.g., Kos, Mode, Skoonheid).
 * Maps to WordPress category taxonomy.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/categories/
 */

/**
 * Category Interface
 */
export interface Category {
  /** Unique category identifier (lowercase slug) */
  id: string;
  
  /** Category display name (e.g., "Kos") */
  title: string;
  
  /** URL-friendly slug (same as id for top-level categories) */
  slug: string;
  
  /** Category description (1-2 sentence editorial summary) */
  description: string;
  
  /** Category hero image URL (for category landing page hero) */
  heroImage: string;
  
  /** Array of subcategory IDs (child categories) */
  subcategories: string[];
}

/**
 * Slugify Category Name
 * 
 * Converts category name to URL-friendly slug format.
 * 
 * @param name - Category name (e.g., "Jou lewe")
 * @returns Slugified string (e.g., "jou-lewe")
 */
export function slugifyCategoryName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD') // Decompose Afrikaans accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .substring(0, 30); // Limit to 30 chars
}
