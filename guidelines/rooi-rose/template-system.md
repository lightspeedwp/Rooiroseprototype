# Template System — rooi rose

**Category**: WordPress Integration  
**Last Updated**: 2026-03-12  
**Status**: ✅ Production Ready

---

## Overview

This guideline documents the six core page templates used in the rooi rose WordPress theme. Each template defines the structure, blocks, and patterns used to create different page types in the magazine.

---

## Template Hierarchy

```
rooi rose Template System
│
├── 1. Home Template (front-page.html)
│   └── Pattern: page-home.php
│
├── 2. Category Template (category.html)
│   ├── Pattern: archive-category.php
│   └── Variants: category-{slug}.html (8 categories)
│
├── 3. Article Template (single.html)
│   └── Pattern: Single post content
│
├── 4. Recipe Template (single-recipe.html) [Future]
│   └── Custom post type: dp_recipe
│
├── 5. Competition Template (single-dp_competition.html)
│   └── Pattern: Competition meta + entry form
│
└── 6. Awards Template (page-awards.html) [Future]
    └── Pattern: Award winners showcase
```

---

## 1. Home Template

### Template File

**WordPress**: `/templates/front-page.html`  
**React**: `/src/app/pages/Home.tsx`  
**Pattern**: `/patterns/page/page-home.php`

### Purpose

The homepage serves as the magazine's main landing page, showcasing featured content across all lifestyle categories.

### Structure

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    
    <!-- Hero Slider: Featured Articles -->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-hero-slider"} /-->
    
    <!-- News Flashes Section -->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-nuusflitse"} /-->
    
    <!-- Category Sections (10 total) -->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-kos"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-mode"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-skoonheid"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-gesondheid"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-bekendes"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-leefstyl"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-jou-lewe"} /-->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-ontspanning"} /-->
    
    <!-- Competitions Section -->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-competitions"} /-->
    
    <!-- Events Section -->
    <!-- wp:pattern {"slug":"rooi-rose/homepage-events"} /-->
    
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

### Key Blocks

| Block | Usage | Settings |
|:------|:------|:---------|
| `core/template-part` | Header/Footer | Slug: header, footer |
| `core/group` | Main container | tagName: main, layout: constrained |
| `core/pattern` | Section modules | Category-specific slugs |
| `core/query` | Article loops | Posts per page: 3-6 |

### Patterns Used

1. **homepage-hero-slider** — Featured articles carousel
2. **homepage-nuusflitse** — Breaking news ticker
3. **homepage-kos** — Food category section (3-column grid)
4. **homepage-mode** — Fashion category section
5. **homepage-skoonheid** — Beauty category section
6. **homepage-gesondheid** — Health category section
7. **homepage-bekendes** — Celebrities category section
8. **homepage-leefstyl** — Lifestyle category section
9. **homepage-jou-lewe** — Your Life category section
10. **homepage-ontspanning** — Entertainment category section
11. **homepage-competitions** — Active competitions grid
12. **homepage-events** — Upcoming events grid

### React Implementation

**File**: `/src/app/pages/Home.tsx`

**Components**:
- `HeroSlider` — Full-width featured content
- `NewsFlashes` — Breaking news horizontal scroll
- `CategorySection` — Modular category blocks (10 instances)
- `CompetitionsSection` — Competition cards
- `EventsSection` — Event cards

**Data Sources**:
- `/src/app/data/home.ts` — Homepage configuration
- `/src/app/data/articles.ts` — Article content
- `/src/app/data/competitions.ts` — Competition data
- `/src/app/data/events.ts` — Event data

---

## 2. Category Template

### Template Files

**WordPress**: 
- `/templates/category.html` (default)
- `/templates/category-kos.html` (Kos-specific)
- `/templates/category-mode.html` (Mode-specific)
- `/templates/category-skoonheid.html` (Skoonheid-specific)
- `/templates/category-gesondheid.html` (Gesondheid-specific)
- `/templates/category-leefstyl.html` (Leefstyl-specific)
- `/templates/category-jou-lewe.html` (Jou lewe-specific)
- `/templates/category-ontspanning.html` (Ontspanning-specific)
- `/templates/category-bekendes.html` (Bekendes-specific)

**React**: `/src/app/pages/Category.tsx`  
**Pattern**: `/patterns/archive/archive-category.php`

### Purpose

Category pages display all articles within a specific lifestyle category, with optional subcategory filtering.

### Structure

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    
    <!-- Category Hero -->
    <!-- wp:group {"className":"category-hero","style":{"spacing":{"padding":"var(--wp--preset--spacing--x-large)"}}} -->
    <div class="wp-block-group category-hero">
        <!-- Breadcrumbs -->
        <!-- wp:yoast-seo/breadcrumbs /-->
        
        <!-- Category Title -->
        <!-- wp:query-title {"type":"archive","level":1,"className":"has-brand-serif-font-family"} /-->
    </div>
    <!-- /wp:group -->
    
    <!-- Subcategory Filter (if applicable) -->
    <!-- wp:pattern {"slug":"rooi-rose/filter-bar-subcategories"} /-->
    
    <!-- Article Grid (Masonry Layout) -->
    <!-- wp:query {"query":{"postType":"post","perPage":12,"categoryName":"kos"}} -->
    <div class="wp-block-query">
        <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
            <!-- wp:pattern {"slug":"rooi-rose/card-post-grid"} /-->
        <!-- /wp:post-template -->
        
        <!-- Pagination -->
        <!-- wp:query-pagination -->
            <!-- wp:query-pagination-previous /-->
            <!-- wp:query-pagination-numbers /-->
            <!-- wp:query-pagination-next /-->
        <!-- /wp:query-pagination -->
    </div>
    <!-- /wp:query -->
    
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

### Key Blocks

| Block | Usage | Settings |
|:------|:------|:---------|
| `yoast-seo/breadcrumbs` | Navigation | Default settings |
| `core/query-title` | Category name | Type: archive, Level: h1 |
| `core/query` | Article loop | Per page: 12, Order: date DESC |
| `core/post-template` | Grid layout | Columns: 3 (responsive) |
| `core/query-pagination` | Page navigation | Previous/Numbers/Next |

### Category-Specific Variations

Each category has a custom template that can include:

**Kos (Food)**:
- Featured recipe of the week
- Seasonal collection highlights
- Chef's tips sidebar

**Mode (Fashion)**:
- Trend spotlights
- Lookbook galleries
- Designer features

**Skoonheid (Beauty)**:
- Product reviews section
- Tutorial videos
- Ingredient glossary

### React Implementation

**File**: `/src/app/pages/Category.tsx`

**Components**:
- `CategoryHeader` — Breadcrumbs + title
- `SubsectionFilter` — Subcategory pills
- `ArticleCard` — Magazine-style cards
- `SimplePagination` — Page navigation

**Data Sources**:
- `/src/app/data/categoryArticles.ts` — Category-specific articles
- `/src/app/data/navigation.ts` — Breadcrumb structure

---

## 3. Article Template (Single Post)

### Template File

**WordPress**: `/templates/single.html`  
**React**: `/src/app/pages/Article.tsx`  
**Pattern**: Various section patterns

### Purpose

The single post template displays long-form editorial articles with full typography hierarchy and related content.

### Structure

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    
    <!-- Article Hero -->
    <!-- wp:group {"className":"article-hero"} -->
    <div class="wp-block-group article-hero">
        <!-- Featured Image -->
        <!-- wp:post-featured-image {"sizeSlug":"large","aspectRatio":"3/2"} /-->
        
        <!-- Breadcrumbs -->
        <!-- wp:yoast-seo/breadcrumbs /-->
        
        <!-- Article Meta (Top) -->
        <!-- wp:template-part {"slug":"post-meta-top"} /-->
    </div>
    <!-- /wp:group -->
    
    <!-- Article Content -->
    <!-- wp:group {"layout":{"type":"constrained","contentSize":"680px"}} -->
    <div class="wp-block-group">
        <!-- Article Title -->
        <!-- wp:post-title {"level":1,"className":"has-brand-serif-font-family"} /-->
        
        <!-- Post Content (includes pull quotes, images, etc.) -->
        <!-- wp:post-content /-->
    </div>
    <!-- /wp:group -->
    
    <!-- Article Meta (Bottom) -->
    <!-- wp:template-part {"slug":"post-meta-bottom"} /-->
    
    <!-- Social Share -->
    <!-- wp:pattern {"slug":"rooi-rose/section-share"} /-->
    
    <!-- Related Articles -->
    <!-- wp:pattern {"slug":"rooi-rose/section-related-articles"} /-->
    
    <!-- Comments -->
    <!-- wp:comments /-->
    
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

### Key Blocks

| Block | Usage | Settings |
|:------|:------|:---------|
| `core/post-featured-image` | Hero image | Aspect ratio: 3/2, Size: large |
| `core/post-title` | Article headline | Level: h1, Font: Playfair Display SC |
| `core/post-content` | Article body | Max-width: 680px |
| `outermost/social-sharing` | Share buttons | Networks: FB, WhatsApp, X, Email |
| `core/query` | Related posts | Posts: 3, Same category |
| `core/comments` | Reader comments | Default settings |

### Template Parts Used

1. **post-meta-top** — Author, date, reading time, category
2. **post-meta-bottom** — Tags, share count

### Content Blocks Supported

Within `core/post-content`, the following blocks are styled:

- `core/paragraph` — Body text (Karla)
- `core/heading` — Headings h2-h6 (Playfair Display SC)
- `core/quote` — Pull quotes (large serif italic)
- `core/list` — Bulleted/numbered lists
- `core/image` — Full-width images with captions
- `core/gallery` — Image galleries
- `core/table` — Data tables
- `core/separator` — Section dividers

### React Implementation

**File**: `/src/app/pages/Article.tsx`

**Components**:
- `ArticleHero` — Featured image + metadata
- `PullQuoteSection` — Editorial pull quotes
- `SocialShare` — Share buttons
- `RelatedContent` — Related articles grid
- `CommentsSection` — Reader comments

**Data Sources**:
- `/src/app/data/articles.ts` — Article content
- `/src/app/data/articleContent.ts` — Full article body
- `/src/app/data/comments.ts` — Comment data

---

## 4. Recipe Template (Future)

### Template File

**WordPress**: `/templates/single-recipe.html` (to be created)  
**React**: Not yet implemented  
**Custom Post Type**: `dp_recipe`

### Purpose

Dedicated template for recipe articles with structured data (schema.org/Recipe) and print-friendly layout.

### Planned Structure

```html
<!-- Recipe Hero: Photo + Title -->
<!-- Recipe Meta: Prep time, Cook time, Servings -->
<!-- Ingredients List (itemscope schema) -->
<!-- Step-by-step Instructions -->
<!-- Chef's Notes -->
<!-- Nutritional Information (optional) -->
<!-- Related Recipes -->
```

### Required Blocks

- `core/post-featured-image` (recipe photo)
- Custom `recipe-meta` block (times, servings)
- Custom `ingredients-list` block
- Custom `recipe-instructions` block
- `yoast/faq-block` (for Q&A section)

### Schema.org Markup

**Type**: `https://schema.org/Recipe`

**Required Properties**:
- name (recipe title)
- image (featured image)
- recipeIngredient (ingredients array)
- recipeInstructions (steps array)
- prepTime (ISO 8601 duration)
- cookTime (ISO 8601 duration)
- recipeYield (servings)

**Optional Properties**:
- author
- datePublished
- description
- recipeCategory
- recipeCuisine
- nutrition (calories, etc.)

### Status

🔴 **NOT YET IMPLEMENTED** — Planned for Phase 2

---

## 5. Competition Template

### Template File

**WordPress**: `/templates/single-dp_competition.html`  
**React**: `/src/app/pages/CompetitionSingle.tsx`  
**Custom Post Type**: `dp_competition`

### Purpose

Displays competition details with entry form, rules, prizes, and closing date countdown.

### Structure

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    
    <!-- Competition Hero -->
    <!-- wp:post-featured-image {"sizeSlug":"large"} /-->
    <!-- wp:post-title {"level":1} /-->
    
    <!-- Competition Meta -->
    <!-- wp:pattern {"slug":"rooi-rose/section-competition-meta"} /-->
    <!-- Prize, Closing Date, Status Badge -->
    
    <!-- Competition Details -->
    <!-- wp:post-content /-->
    
    <!-- Entry Form (if active) -->
    <!-- wp:pattern {"slug":"rooi-rose/section-competition-entry"} /-->
    
    <!-- Rules and Terms -->
    <!-- wp:yoast/faq-block /-->
    
    <!-- Previous Winners -->
    <!-- wp:query {"query":{"postType":"dp_competition","metaKey":"status","metaValue":"closed"}} /-->
    
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

### Key Blocks

| Block | Usage | Settings |
|:------|:------|:---------|
| `dp/competition-badge` | Status indicator | Active/Closed badge |
| `dp/competition-countdown` | Time remaining | Days/hours countdown |
| `gravityforms/form` | Entry form | Competition-specific form |
| `yoast/faq-block` | T&Cs | Schema markup included |

### Custom Fields (ACF)

**Competition Meta**:
- `competition_prize` (text) — Prize description
- `competition_closing_date` (date) — Entry deadline
- `competition_status` (select) — active, closed, winner_announced
- `competition_winner` (post_object) — Link to winner post
- `competition_sponsor` (post_object) — Link to sponsor
- `competition_form_id` (number) — Gravity Forms ID

### React Implementation

**File**: `/src/app/pages/CompetitionSingle.tsx`

**Components**:
- `CompetitionCard` — Hero section
- `CompetitionCountdown` — Time remaining
- `CompetitionEntryForm` — Entry form
- `CompetitionRules` — FAQ section
- `CompetitionWinner` — Winner announcement

**Data Sources**:
- `/src/app/data/competitions.ts` — Competition data

---

## 6. Awards Template (Future)

### Template File

**WordPress**: `/templates/page-awards.html` (to be created)  
**React**: Not yet implemented  
**Page Slug**: `/rooiwarm-wenners`

### Purpose

Showcase monthly competition winners (Rooiwarm Wenners) with photo gallery and winner profiles.

### Planned Structure

```html
<!-- Awards Hero: "Rooiwarm Wenners" title -->
<!-- Filter by Month/Year -->
<!-- Winners Grid (Photo + Name + Prize) -->
<!-- Winner Profiles (expandable) -->
<!-- Current Month Spotlight -->
```

### Required Patterns

- `rooi-rose/awards-hero`
- `rooi-rose/awards-filter`
- `rooi-rose/awards-grid`
- `rooi-rose/winner-profile-card`

### Status

🔴 **NOT YET IMPLEMENTED** — Planned for Phase 2

---

## Template Inheritance

### WordPress Template Hierarchy

```
single.html (most specific)
  ↓
single-{post-type}.html
  ↓
single-{post-type}-{slug}.html
  ↓
archive.html
  ↓
category.html
  ↓
category-{slug}.html
  ↓
front-page.html (homepage)
  ↓
page.html (default page)
  ↓
index.html (fallback)
```

### Template Parts

**Global Template Parts** (used across templates):

1. **header** (`/parts/header.html`)
   - Logo
   - Primary navigation
   - Search
   - Dark mode toggle

2. **footer** (`/parts/footer.html`)
   - Newsletter signup
   - Social links
   - Legal links (privacy, terms)
   - Copyright

3. **post-meta-top** (`/parts/post-meta-top.html`)
   - Author avatar + name
   - Publish date
   - Reading time
   - Category badge

4. **post-meta-bottom** (`/parts/post-meta-bottom.html`)
   - Tags
   - Social share count
   - Last updated date

5. **sidebar-home** (`/parts/sidebar-home.html`)
   - Latest e-edition promo
   - Newsletter signup CTA
   - Featured competition

---

## Block Style Variations

### Heading Styles

Used across all templates:

- `display` — Extra-large display headings
- `section-title` — Category section headings
- `subtitle` — Article subtitles
- `accent` — Headings with red underline

### Image Styles

- `aspect-3-2` — Magazine standard (3:2 ratio)
- `aspect-16-9` — Widescreen (16:9 ratio)
- `rounded` — Rounded corners (8px)
- `shadow` — Drop shadow elevation

### Quote Styles

- `pull-quote` — Large serif italic (editorial)
- `border-left` — Minimal border accent
- `minimal` — Clean, no borders

---

## Performance Optimization

### Critical CSS

Each template includes inline critical CSS for above-fold content:

- Header styles
- Hero section styles
- Typography base styles

### Lazy Loading

**Homepage**:
- Hero slider images: Eager
- Category section images: Lazy (below fold)

**Category Pages**:
- First 3 article cards: Eager
- Remaining cards: Lazy

**Single Posts**:
- Featured image: Eager
- In-content images: Lazy

### Code Splitting

React implementation uses route-based code splitting:

```tsx
const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));
const Article = lazy(() => import('./pages/Article'));
```

---

## Accessibility

### Skip Links

All templates include:
- Skip to content
- Skip to navigation
- Skip to footer

### Landmark Roles

- `<header>` — Site header
- `<nav>` — Navigation menus
- `<main>` — Main content
- `<aside>` — Sidebars
- `<footer>` — Site footer

### Heading Hierarchy

Strict h1-h6 hierarchy maintained:
- **h1**: Page title (one per page)
- **h2**: Major sections
- **h3**: Subsections
- **h4-h6**: Minor headings

---

## Related Guidelines

- [Magazine Layouts](/guidelines/rooi-rose/magazine-layouts.md) — Layout patterns
- [Content Architecture](/guidelines/rooi-rose/content-architecture.md) — Category structure
- [Content Strategy](/guidelines/rooi-rose/content-strategy.md) — Article types
- [WordPress Migration](/guidelines/wordpress-migration/templates-and-parts.md) — Template hierarchy

---

**Last Updated**: 2026-03-12  
**Maintained By**: rooi rose Development Team
