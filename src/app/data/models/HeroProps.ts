/**
 * SharedHero Component Props
 * 
 * Defines props for the universal SharedHero component with 6 variants.
 * Used across all page templates (Home, Category, Subcategory, Article, Competition, Award).
 */

/**
 * Hero Variant Types
 * 
 * Determines hero layout and metadata display:
 * - home: Hero slider with featured posts
 * - category: Category landing page hero
 * - subcategory: Subcategory landing page hero (filtered view)
 * - article: Single article hero with metadata
 * - competition: Competition hero with prize callout
 * - award: Award winner hero with badge
 */
export type HeroVariant = 
  | "home" 
  | "category" 
  | "subcategory" 
  | "article" 
  | "competition" 
  | "award";

/**
 * Breadcrumb Item
 */
export interface Breadcrumb {
  /** Breadcrumb label (e.g., "Home", "Kos") */
  label: string;
  
  /** Breadcrumb link URL (e.g., "/", "/kos") */
  href: string;
}

/**
 * Post Metadata (for article variant)
 */
export interface PostMeta {
  /** Author name */
  author: string;
  
  /** Publish date (formatted string, e.g., "12 Maart 2026") */
  date: string;
  
  /** Estimated read time in minutes */
  readTime?: number;
  
  /** Article tags */
  tags?: string[];
}

/**
 * SharedHero Props Interface
 */
export interface HeroProps {
  /** Hero variant (determines layout) */
  variant: HeroVariant;
  
  /** Hero title (headline) */
  title: string;
  
  /** Optional subtitle or description */
  subtitle?: string;
  
  /** Hero image URL */
  image: string;
  
  /** Optional category name (for article/competition/award variants) */
  category?: string;
  
  /** Optional breadcrumbs array (for article/subcategory variants) */
  breadcrumbs?: Breadcrumb[];
  
  /** Optional post metadata (for article variant) */
  meta?: PostMeta;
  
  /** Optional prize description (for competition variant) */
  prize?: string;
  
  /** Optional award category (for award variant) */
  awardCategory?: string;
}

/**
 * Format Date to Afrikaans
 * 
 * Converts ISO date string to Afrikaans formatted date.
 * 
 * @param isoDate - ISO 8601 date string (e.g., "2026-03-12")
 * @returns Afrikaans formatted date (e.g., "12 Maart 2026")
 */
export function formatDateAfrikaans(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate();
  const year = date.getFullYear();
  
  const monthNames = [
    'Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie',
    'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  const month = monthNames[date.getMonth()];
  
  return `${day} ${month} ${year}`;
}
