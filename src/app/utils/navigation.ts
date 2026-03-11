/**
 * Navigation utility functions
 * Handles mapping between display categories and URL slugs
 */

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  // Main Categories
  'Nuus': 'nuus',
  'Sport': 'sport',
  'Sake': 'sake',
  'Skole': 'skole',
  'Leefstyl': 'leefstyl',
  'Lewenstyl': 'leefstyl', // Map Lewenstyl to leefstyl
  'Dink': 'dink',
  'Opinie': 'dink', // Map Opinie to Dink
  'Kompetisies': 'kompetisies',
  'Gebeure': 'gebeure',
  
  // Subcategories / Variations
  'Skole Rugby': 'skolerugby',
  'Skolerugby': 'skolerugby',
  'Onderwys': 'skole', // Map Onderwys to Skole if needed
  'Netnuus': 'nuus',
  'Skole rugby': 'skolerugby',
};

/**
 * Get the URL slug for a given category name
 */
export function getCategorySlug(category: string): string {
  if (!category) return '';
  
  // Direct lookup
  if (CATEGORY_SLUG_MAP[category]) {
    return CATEGORY_SLUG_MAP[category];
  }
  
  // Default fallback: lowercase and replace spaces with hyphens
  return category.toLowerCase().trim().replace(/\s+/g, '-');
}

/**
 * Get the display label for a slug (reverse lookup attempt)
 */
export function getCategoryLabel(slug: string): string {
  // This is a basic implementation, ideally we'd have a reverse map or source of truth
  const entry = Object.entries(CATEGORY_SLUG_MAP).find(([_, value]) => value === slug);
  return entry ? entry[0] : slug.charAt(0).toUpperCase() + slug.slice(1);
}