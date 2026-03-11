/**
 * Utility functions for URL slug generation and manipulation
 */

/**
 * Convert a string to a URL-friendly slug
 * Handles Afrikaans characters properly
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Replace spaces with hyphens
    .replace(/\s+/g, '-')
    // Remove special characters but keep Afrikaans characters
    .replace(/[^\w\sêëïôûáéíóúàèìòùâêîôû-]/g, '')
    // Replace multiple hyphens with single hyphen
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate a unique article slug from ID and title
 */
export function generateArticleSlug(id: number, title: string): string {
  const titleSlug = slugify(title);
  return `${id}-${titleSlug}`;
}

/**
 * Extract article ID from slug
 */
export function getIdFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : null;
}
