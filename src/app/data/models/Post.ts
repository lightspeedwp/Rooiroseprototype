/**
 * Post Model
 * 
 * Universal post model for rooi rose magazine prototype.
 * Represents editorial content across all magazine categories.
 * Compatible with WordPress REST API post object structure.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/posts/
 */

/**
 * Post Type Variants
 * 
 * Determines conditional rendering in Article template:
 * - article: Standard editorial content
 * - recipe: Includes ingredients block
 * - competition: Includes entry form
 * - award: Includes winner badge
 */
export type PostType = "article" | "recipe" | "competition" | "award";

/**
 * Recipe-Specific Data (optional field for recipe posts)
 */
export interface RecipeData {
  /** Prep time in minutes */
  prepTime?: number;
  
  /** Cook time in minutes */
  cookTime?: number;
  
  /** Number of servings */
  servings?: number;
  
  /** Ingredient list (array of strings) */
  ingredients?: string[];
  
  /** Cooking instructions (step-by-step) */
  instructions?: string[];
}

/**
 * Competition-Specific Data (optional field for competition posts)
 */
export interface CompetitionData {
  /** Prize description */
  prize: string;
  
  /** Entry deadline (ISO 8601 date) */
  deadline: string;
  
  /** Entry form URL or ID */
  entryFormUrl?: string;
  
  /** Terms and conditions snippet */
  terms?: string;
}

/**
 * Award-Specific Data (optional field for award posts)
 */
export interface AwardData {
  /** Award category (e.g., "Skoonheid", "Welstand") */
  awardCategory: string;
  
  /** Product name (winning product) */
  productName: string;
  
  /** Product brand */
  brand?: string;
  
  /** Editor's note / why it won */
  editorNote?: string;
}

/**
 * Universal Post Interface
 */
export interface Post {
  /** Unique post identifier (numeric ID as string) */
  id: string;
  
  /** Post title (headline) */
  title: string;
  
  /** URL-friendly slug format: {id}-{slugified-title} */
  slug: string;
  
  /** Short excerpt (1-2 sentences, 100-150 chars) */
  excerpt: string;
  
  /** Full editorial content (HTML string, 500-800 words) */
  content: string;
  
  /** Category ID reference (e.g., "kos", "mode") */
  category: string;
  
  /** Optional subcategory ID reference (e.g., "maklik-vinnig") */
  subcategory?: string;
  
  /** Article tags (keywords for search/filtering) */
  tags: string[];
  
  /** Author name (default: "rooi rose Redaksie") */
  author: string;
  
  /** Publish date (ISO 8601 format: "2026-03-12") */
  date: string;
  
  /** Hero image URL (Unsplash Source or local path) */
  heroImage: string;
  
  /** Optional image gallery URLs (for recipe steps, product shots) */
  gallery?: string[];
  
  /** Featured post flag (homepage/category featured slots) */
  featured?: boolean;
  
  /** Post type variant (affects template rendering) */
  type: PostType;
  
  /** Optional recipe-specific fields (when type === "recipe") */
  recipeData?: RecipeData;
  
  /** Optional competition-specific fields (when type === "competition") */
  competitionData?: CompetitionData;
  
  /** Optional award-specific fields (when type === "award") */
  awardData?: AwardData;
}

/**
 * Slugify Post Title
 * 
 * Converts post ID + title to URL-friendly slug format.
 * Format: {id}-{slugified-title}
 * 
 * @param id - Post ID (numeric string)
 * @param title - Post title
 * @returns Slugified string (e.g., "001-die-beste-somerresepte")
 */
export function slugifyPostTitle(id: string, title: string): string {
  const paddedId = id.padStart(3, '0');
  const slugifiedTitle = title
    .toLowerCase()
    .normalize('NFD') // Decompose Afrikaans accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .substring(0, 50); // Limit title portion to 50 chars
  
  return `${paddedId}-${slugifiedTitle}`;
}
