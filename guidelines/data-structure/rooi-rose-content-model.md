# Rooi Rose Content Model — Data Structure Guidelines

**Version**: 1.0  
**Created**: 2026-03-12  
**Purpose**: Define TypeScript data models for rooi rose magazine prototype and WordPress CMS migration

---

## 📋 Overview

This guideline documents the **structured content data models** for the rooi rose magazine prototype. These models are designed for:

1. **React Prototype** — Type-safe data structures for mock content
2. **WordPress CMS Migration** — Field mapping compatible with WordPress REST API and GraphQL
3. **Template Reusability** — Consistent data shape across Category, Subcategory, and Article templates
4. **Content Portability** — Frontmatter-like structure for future Markdown/MDX support

---

## 🗂️ Data Model Architecture

### Model Files Location

All data models are stored in `/src/app/data/models/`:

```
/src/app/data/models/
  Post.ts          — Universal post model (article/recipe/competition/award)
  Category.ts      — Category model with subcategory references
  Subcategory.ts   — Subcategory model with parent category reference
  HeroProps.ts     — SharedHero component props and variant types
```

---

## 📄 Post Model

**File**: `/src/app/data/models/Post.ts`

### TypeScript Interface

```typescript
/**
 * Universal Post Model
 * 
 * Represents editorial content across all magazine categories.
 * Compatible with WordPress REST API post object structure.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/posts/
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
```

---

## 📁 Category Model

**File**: `/src/app/data/models/Category.ts`

### TypeScript Interface

```typescript
/**
 * Category Model
 * 
 * Represents top-level editorial categories (e.g., Kos, Mode, Skoonheid).
 * Maps to WordPress category taxonomy.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/categories/
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
 * Example Category Object
 */
export const kosCategory: Category = {
  id: "kos",
  title: "Kos",
  slug: "kos",
  description: "Resepte en inspirasie vir elke dag.",
  heroImage: "https://source.unsplash.com/1200x800/?food,magazine&sig=kos",
  subcategories: [
    "begin-hier",
    "kook-vir-die-seisoen",
    "soet-spesiaal",
    "maklik-vinnig",
    "aandetes-vir-die-week",
    "somerkos",
    "winterkos",
    "laekoolhidraat",
    "vegetaries",
    "gebak",
    "nagereg",
    "drankies"
  ]
};
```

---

## 🗂️ Subcategory Model

**File**: `/src/app/data/models/Subcategory.ts`

### TypeScript Interface

```typescript
/**
 * Subcategory Model
 * 
 * Represents second-level editorial categories (e.g., "Maklik & vinnig" under "Kos").
 * Maps to WordPress tag taxonomy or hierarchical category child.
 * 
 * @see https://developer.wordpress.org/rest-api/reference/tags/
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
 * Example Subcategory Object
 */
export const maklikVinnigSubcategory: Subcategory = {
  id: "maklik-vinnig",
  title: "Maklik & vinnig",
  slug: "maklik-vinnig",
  parent: "kos",
  description: "Vinnige resepte vir druk weeksdae."
};
```

---

## 🎨 SharedHero Props Model

**File**: `/src/app/data/models/HeroProps.ts`

### TypeScript Interface

```typescript
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
 * Example HeroProps for Article Variant
 */
export const articleHeroExample: HeroProps = {
  variant: "article",
  title: "Die beste somerresepte vir die hele gesin",
  subtitle: "Maklike en vinnige etes vir warm dae",
  image: "https://source.unsplash.com/1200x800/?food,summer&sig=kos-001",
  category: "Kos",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Kos", href: "/kos" },
    { label: "Die beste somerresepte", href: "/kos/kos-001-die-beste-somerresepte" }
  ],
  meta: {
    author: "rooi rose Redaksie",
    date: "12 Maart 2026",
    readTime: 5,
    tags: ["somer", "resepte", "maklik"]
  }
};
```

---

## 🔗 WordPress REST API Field Mapping

### Post Model → WordPress Post Object

| TypeScript Field | WordPress REST API Field | Type | Notes |
|:---|:---|:---|:---|
| `id` | `id` | number | WordPress auto-generates numeric IDs |
| `title` | `title.rendered` | string | WordPress stores HTML-encoded titles |
| `slug` | `slug` | string | WordPress auto-generates slugs from title |
| `excerpt` | `excerpt.rendered` | string | WordPress supports manual excerpts |
| `content` | `content.rendered` | string | WordPress stores block editor HTML |
| `category` | `categories[0]` | number | WordPress uses category term IDs |
| `subcategory` | `tags[0]` | number | Map to tags or hierarchical categories |
| `tags` | `tags` | array<number> | WordPress uses tag term IDs |
| `author` | `author` | number | WordPress uses author user IDs |
| `date` | `date` | string (ISO 8601) | WordPress stores in UTC timezone |
| `heroImage` | `featured_media` | number | WordPress stores media attachment IDs |
| `gallery` | Custom ACF field | array<number> | Requires ACF Gallery field |
| `featured` | `sticky` | boolean | WordPress has built-in sticky post flag |
| `type` | `meta.post_type_variant` | string | Custom meta field or CPT |
| `recipeData` | Custom ACF fields | object | Requires ACF field group |
| `competitionData` | Custom ACF fields | object | Requires ACF field group |
| `awardData` | Custom ACF fields | object | Requires ACF field group |

### Category Model → WordPress Category Object

| TypeScript Field | WordPress REST API Field | Type | Notes |
|:---|:---|:---|:---|
| `id` | `slug` | string | Use slug as unique identifier |
| `title` | `name` | string | Category display name |
| `slug` | `slug` | string | Auto-generated or custom |
| `description` | `description` | string | Category description field |
| `heroImage` | `meta.hero_image` | string | Custom meta field (URL or attachment ID) |
| `subcategories` | `children` (hierarchical) or custom | array | Hierarchical categories or ACF relationship |

### Subcategory Model → WordPress Tag Object

| TypeScript Field | WordPress REST API Field | Type | Notes |
|:---|:---|:---|:---|
| `id` | `slug` | string | Use slug as unique identifier |
| `title` | `name` | string | Tag display name |
| `slug` | `slug` | string | Auto-generated or custom |
| `parent` | `meta.parent_category` | string | Custom meta field (category slug) |
| `description` | `description` | string | Tag description field |

---

## 🔧 Slug Format Rules

### Post Slug Format

**Format**: `{id}-{slugified-title}`

**Example**: `001-die-beste-somerresepte-vir-die-hele-gesin`

**Rules**:
1. Start with numeric ID (3 digits, zero-padded)
2. Hyphen separator
3. Slugified title (lowercase, spaces → hyphens, remove special chars)
4. Maximum 60 characters total

**JavaScript Slugify Function**:

```javascript
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

// Example usage:
slugifyPostTitle('1', 'Die beste somerresepte vir die hele gesin');
// Returns: "001-die-beste-somerresepte-vir-die-hele-gesin"
```

### Category/Subcategory Slug Format

**Format**: `{slugified-name}`

**Example**: `maklik-vinnig` (from "Maklik & vinnig")

**Rules**:
1. Lowercase only
2. Spaces → hyphens
3. Remove special characters (&, %, etc.)
4. Maximum 30 characters

---

## 📊 Data File Structure

### Posts Directory Organization

```
/src/app/data/posts/
  kos/
    kos-post-001.ts
    kos-post-002.ts
    ...
    kos-post-010.ts
    index.ts           — Exports all 10 Kos posts
  mode/
    mode-post-001.ts
    ...
  skoonheid/
  gesondheid/
  bekendes/
  leefstyl/
  jou-lewe/
  ontspanning/
  rooiwarm-wenners/
  wen/
  index.ts             — Vite glob loader + helper functions
```

### Post File Template

```typescript
// /src/app/data/posts/kos/kos-post-001.ts

import { Post } from '../../models/Post';

export const kosPost001: Post = {
  id: '001',
  title: 'Die beste somerresepte vir die hele gesin',
  slug: '001-die-beste-somerresepte-vir-die-hele-gesin',
  excerpt: 'Maklike en vinnige etes vir warm dae wat die hele gesin sal geniet.',
  content: `
    <h2>Somerresepte wat almal sal geniet</h2>
    <p>Die somer is hier en dit beteken warm dae, lang aande buite, en die perfekte geleentheid vir lekker kos...</p>
    <!-- 500-800 words of editorial content -->
  `,
  category: 'kos',
  subcategory: 'somerkos',
  tags: ['somer', 'resepte', 'maklik', 'gesin'],
  author: 'rooi rose Redaksie',
  date: '2026-03-12',
  heroImage: 'https://source.unsplash.com/1200x800/?food,summer&sig=kos-001',
  featured: true,
  type: 'recipe',
  recipeData: {
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [
      '500g pasta',
      '2 hoenders borsies',
      '1 ui, gekap',
      '2 knoffelhuisies, fyngedruk',
      'Vars basilie'
    ],
    instructions: [
      'Kook die pasta volgens pakkieinstruksies.',
      'Braai die hoender in olyfolie tot gaar.',
      'Voeg ui en knoffel by, soteer vir 2 minute.',
      'Gooi alles saam en bedien met vars basilie.'
    ]
  }
};
```

### Category Index File Template

```typescript
// /src/app/data/posts/kos/index.ts

export { kosPost001 } from './kos-post-001';
export { kosPost002 } from './kos-post-002';
export { kosPost003 } from './kos-post-003';
export { kosPost004 } from './kos-post-004';
export { kosPost005 } from './kos-post-005';
export { kosPost006 } from './kos-post-006';
export { kosPost007 } from './kos-post-007';
export { kosPost008 } from './kos-post-008';
export { kosPost009 } from './kos-post-009';
export { kosPost010 } from './kos-post-010';
```

### Global Post Loader Template

```typescript
// /src/app/data/posts/index.ts

import { Post } from '../models/Post';

// Vite glob import (eagerly loads all category index files)
const postModules = import.meta.glob('./*/index.ts', { eager: true });

/**
 * Get all posts from all categories
 */
export function getAllPosts(): Post[] {
  const posts: Post[] = [];
  
  Object.values(postModules).forEach((module: any) => {
    Object.values(module).forEach((post) => {
      if (post && typeof post === 'object' && 'id' in post) {
        posts.push(post as Post);
      }
    });
  });
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get posts by category ID
 */
export function getPostsByCategory(categoryId: string): Post[] {
  return getAllPosts().filter((post) => post.category === categoryId);
}

/**
 * Get posts by subcategory ID
 */
export function getPostsBySubcategory(subcategoryId: string): Post[] {
  return getAllPosts().filter((post) => post.subcategory === subcategoryId);
}

/**
 * Get featured posts (homepage/category featured slots)
 */
export function getFeaturedPosts(limit: number = 5): Post[] {
  return getAllPosts()
    .filter((post) => post.featured === true)
    .slice(0, limit);
}

/**
 * Get trending posts for a category (3 most recent)
 */
export function getTrendingPosts(categoryId: string, limit: number = 3): Post[] {
  return getPostsByCategory(categoryId).slice(0, limit);
}
```

---

## 🎯 Content Quality Standards

### Afrikaans Content Requirements

1. **Authentic Language** — Use natural Afrikaans phrasing, not Google Translate quality
2. **Editorial Tone** — Match category tone (warm for Kos, confident for Mode, expert for Skoonheid)
3. **Length** — 500-800 words per article (proper editorial length)
4. **Structure** — Include headings (H2/H3), paragraphs, lists where appropriate
5. **No Placeholders** — Never use Lorem Ipsum or "TODO" placeholders

### Image Requirements

1. **Unique Images** — All 100 posts must have unique Unsplash images
2. **Category Keywords** — Use category-specific keyword pairs (see orchestrator)
3. **Sig Parameter** — Always include `&sig={post-id}` to prevent caching collisions
4. **Dimensions** — 1200×800 (3:2 aspect ratio for hero images)
5. **Attribution** — Document Unsplash usage in README

### Metadata Requirements

1. **Author** — Default to "rooi rose Redaksie" unless specific byline needed
2. **Date** — Use ISO 8601 format (YYYY-MM-DD)
3. **Tags** — 3-5 relevant keywords per post
4. **Featured Flag** — Mark 1 post per category as featured (first post)

---

## 🚀 Usage Examples

### Rendering a Post in Article Template

```tsx
import { Post } from '../data/models/Post';
import { SharedHero } from '../components/hero/SharedHero';

interface ArticlePageProps {
  post: Post;
}

export function ArticlePage({ post }: ArticlePageProps) {
  return (
    <div>
      <SharedHero
        variant="article"
        title={post.title}
        subtitle={post.excerpt}
        image={post.heroImage}
        category={post.category}
        meta={{
          author: post.author,
          date: post.date,
          tags: post.tags
        }}
      />
      
      {/* Conditional rendering by post type */}
      {post.type === 'recipe' && post.recipeData && (
        <div className="ingredients-block">
          <h3>Bestanddele</h3>
          <ul>
            {post.recipeData.ingredients?.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {post.type === 'competition' && post.competitionData && (
        <div className="entry-form">
          <h3>Neem deel</h3>
          <p>Prys: {post.competitionData.prize}</p>
          <p>Sluitingsdatum: {post.competitionData.deadline}</p>
        </div>
      )}
      
      {post.type === 'award' && post.awardData && (
        <div className="winner-badge">
          <span>🏆 Rooiwarm Wenner</span>
          <p>{post.awardData.productName} deur {post.awardData.brand}</p>
        </div>
      )}
    </div>
  );
}
```

### Filtering Posts by Subcategory

```tsx
import { getPostsBySubcategory } from '../data/posts';

export function SubcategoryPage({ subcategoryId }: { subcategoryId: string }) {
  const posts = getPostsBySubcategory(subcategoryId);
  
  return (
    <div>
      <h1>Gevind: {posts.length} artikels</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

---

## 📚 Related Documentation

- [Rooi Rose Content Architecture](/guidelines/rooi-rose/content-architecture.md) — Category/subcategory taxonomy
- [Shared Hero System](/guidelines/components/hero/shared-hero-system.md) — Hero component variants and usage
- [Mega Menu System](/guidelines/components/navigation/mega-menu-system.md) — Navigation and mega menu config
- [WordPress Migration Guide](/docs/CONTENT-MIGRATION-GUIDE.md) — CMS migration strategy

---

**Last Updated**: 2026-03-12  
**Orchestrator**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`
