/**
 * Post Loader
 * 
 * Centralized post loading and filtering utilities for rooi rose magazine.
 * Uses Vite's import.meta.glob for efficient code-splitting and lazy loading.
 */

import { Post } from '../models/Post';

// Lazy load all post modules using Vite glob imports
const postModules = import.meta.glob<{ [key: string]: Post }>('./**/*.ts', { 
  eager: false 
});

// Cache for loaded posts
let allPostsCache: Post[] | null = null;

/**
 * Get all posts across all categories
 * Posts are sorted by date (newest first)
 */
export async function getAllPosts(): Promise<Post[]> {
  if (allPostsCache) {
    return allPostsCache;
  }

  const posts: Post[] = [];
  
  for (const path in postModules) {
    // Skip index files
    if (path.includes('/index.ts')) continue;
    
    const module = await postModules[path]();
    const postKey = Object.keys(module).find(key => key.includes('Post'));
    
    if (postKey) {
      posts.push(module[postKey] as Post);
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  allPostsCache = posts;
  return posts;
}

/**
 * Get posts filtered by category
 */
export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === categorySlug);
}

/**
 * Get posts filtered by subcategory
 */
export async function getPostsBySubcategory(subcategorySlug: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.subcategory === subcategorySlug);
}

/**
 * Get featured posts (marked with featured: true)
 */
export async function getFeaturedPosts(limit?: number): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const featured = allPosts.filter(post => post.featured === true);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Get trending posts (most recent posts, optionally filtered by category)
 */
export async function getTrendingPosts(
  limit: number = 5, 
  categorySlug?: string
): Promise<Post[]> {
  let posts = await getAllPosts();
  
  if (categorySlug) {
    posts = posts.filter(post => post.category === categorySlug);
  }
  
  // Already sorted by date in getAllPosts
  return posts.slice(0, limit);
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.tags?.includes(tag));
}

/**
 * Get related posts (same category, different post, up to limit)
 */
export async function getRelatedPosts(
  currentPost: Post, 
  limit: number = 3
): Promise<Post[]> {
  const categoryPosts = await getPostsByCategory(currentPost.category);
  return categoryPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, limit);
}

/**
 * Search posts by title or excerpt
 */
export async function searchPosts(query: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get post count by category
 */
export async function getPostCountByCategory(): Promise<Record<string, number>> {
  const allPosts = await getAllPosts();
  const counts: Record<string, number> = {};
  
  allPosts.forEach(post => {
    counts[post.category] = (counts[post.category] || 0) + 1;
  });
  
  return counts;
}
