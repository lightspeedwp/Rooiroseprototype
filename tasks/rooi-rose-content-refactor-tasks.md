# Rooi Rose Magazine Content Refactor — Task List

**Orchestrator**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`  
**Version**: 1.0  
**Created**: 2026-03-12  
**Total Tasks**: 128

---

## Phase 1: Data Model Foundation (6 tasks)

**Goal**: Create TypeScript data models and brand token constants  
**Estimated Time**: 4-5 hours

- [ ] **Task 1.1**: Create `/src/app/data/models/Post.ts` — Universal post model
  - Fields: id, title, slug, excerpt, content, category, subcategory, tags, author, date, heroImage, gallery, featured, type
  - Type variants: `"article" | "recipe" | "competition" | "award"`
  - JSDoc comments for WordPress REST API mapping

- [ ] **Task 1.2**: Create `/src/app/data/models/Category.ts` — Category model
  - Fields: id, title, slug, description, heroImage, subcategories (array of subcategory IDs)
  - Export `Category` type and `categories` array

- [ ] **Task 1.3**: Create `/src/app/data/models/Subcategory.ts` — Subcategory model
  - Fields: id, title, slug, parent (category ID), description
  - Export `Subcategory` type and `subcategories` array

- [ ] **Task 1.4**: Create `/src/app/data/models/HeroProps.ts` — SharedHero component props
  - Type: `HeroVariant = "home" | "category" | "subcategory" | "article" | "competition" | "award"`
  - Props: variant, title, subtitle, image, category, breadcrumbs, meta (PostMeta type)
  - PostMeta type: author, date, readTime, tags

- [ ] **Task 1.5**: Create `/src/app/data/brandTokens.ts` — Rooi rose brand constants
  - Colors: PRIMARY_RED = "#e01e12", TAGLINE_GREY = "#424242"
  - Fonts: DISPLAY_FONT = "Playfair Display SC", BODY_FONT = "Karla"
  - Export as const object

- [ ] **Task 1.6**: Create `/guidelines/data-structure/rooi-rose-content-model.md` — Documentation
  - Document all 4 data models with TypeScript interfaces
  - Include WordPress REST API field mapping table
  - Add slug format rules (`{id}-{slugified-title}`)
  - Document post type conditional rendering logic

---

## Phase 2: Category & Subcategory Data (6 tasks)

**Goal**: Define all 10 editorial categories + 44 subcategories  
**Estimated Time**: 3-4 hours

- [ ] **Task 2.1**: Create `/src/app/data/categories.ts` — Define 10 categories
  - Kos: "Resepte en inspirasie vir elke dag"
  - Mode: "Style en neigings vir die moderne vrou"
  - Skoonheid: "Jou gids vir skoonheid en selfversorging"
  - Gesondheid: "Leef gesond, voel beter"
  - Bekendes: "Die jongste nuus oor jou gunsteling sterre"
  - Leefstyl: "Idees om jou lewe te verryk"
  - Jou lewe: "Refleksies oor verhoudings, familie en groei"
  - Ontspanning: "Reis, lees, kyk en luister"
  - Rooiwarm wenners: "Die beste produkte soos gekies deur ons redaksie"
  - Wen: "Kompetisies en geskenke"
  - Generate 10 unique Unsplash hero images (keywords: magazine, editorial, lifestyle)

- [ ] **Task 2.2**: Create `/src/app/data/subcategories.ts` — Define 44 subcategories
  - Kos (12): Begin hier, Kook vir die seisoen, Soet & spesiaal, Maklik & vinnig, Aandetes vir die week, Somerkos, Winterkos, Laekoolhidraat, Vegetaries, Gebak, Nagereg, Drankies, Jy kan, Nuut & Nou, Recipes in English
  - Mode (6): Nuutste neigings, Style gidse, Rooi loper, Kapsule kas, Seisoenale mode, Ontwerpers
  - Skoonheid (5): Velversorging, Grimering, Haarversorging, Naelversorging, Produkresensies
  - Gesondheid (4): Fiksheid, Voeding, Simptome, Geestesgesondheid
  - Bekendes (4): Onderhoude, TV dekking, Agter die skerms, Kultuur
  - Leefstyl (5): Dekor, DIY, Tuin, Klein spasies, Ambag
  - Jou lewe (5): Verhoudings, Ouerskap, Finansies, Inspirasie, Mening
  - Ontspanning (6): Reis, Boeke, Podsendings, Flieks, Gebeure, Blogs
  - Rooiwarm wenners (3): Skoonheid, Welstand, Redakteur se keuse
  - Wen (1): Kompetisies

- [ ] **Task 2.3**: Map subcategories to categories in `categories.ts`
  - Add `subcategories: string[]` field to each category
  - Populate with subcategory ID arrays

- [ ] **Task 2.4**: Generate 10 category hero images
  - Use Unsplash with category-specific keywords
  - Format: `https://source.unsplash.com/1200x800/?[keywords]&sig=[category-id]`
  - Store URLs in category objects

- [ ] **Task 2.5**: Write category descriptions (Afrikaans)
  - 1-2 sentence editorial descriptions
  - Warm, inviting magazine tone
  - Include in category objects

- [ ] **Task 2.6**: Update `/guidelines/rooi-rose/content-architecture.md`
  - Document final 10-category taxonomy
  - Add subcategory mapping table (44 subcategories)
  - Include category description guidelines
  - Add Unsplash keyword strategy per category

---

## Phase 3: Shared Hero Component System (8 tasks)

**Goal**: Create universal hero component with 6 variants  
**Estimated Time**: 4-5 hours

- [ ] **Task 3.1**: Create `/src/app/components/hero/SharedHero.tsx` — Universal hero component
  - Import `HeroProps` from models
  - Implement variant switch statement (6 variants)
  - Use Playfair Display SC for hero titles
  - Use #e01e12 for accent elements

- [ ] **Task 3.2**: Implement `home` variant
  - Hero slider layout (image + title overlay)
  - Large hero image (full viewport width)
  - Title: Playfair Display SC, 48px, white text with shadow

- [ ] **Task 3.3**: Implement `category` variant
  - Hero image + category title + description
  - Breadcrumbs: Home > Category
  - Subcategory quick-link strip below hero

- [ ] **Task 3.4**: Implement `subcategory` variant
  - Same as category variant but with subcategory context
  - Breadcrumbs: Home > Category > Subcategory

- [ ] **Task 3.5**: Implement `article` variant
  - Hero image + article title + metadata (author, date, category)
  - Breadcrumbs: Home > Category > Article Title
  - Metadata display: Karla font, 14px, grey

- [ ] **Task 3.6**: Implement `competition` variant
  - Hero image + competition title + prize callout
  - CTA button: "Neem deel" (#e01e12 background)

- [ ] **Task 3.7**: Implement `award` variant
  - Hero image + award title + winner badge
  - Badge: "Rooiwarm Wenner" with trophy icon

- [ ] **Task 3.8**: Create `/src/app/components/hero/CategoryHeroLinks.tsx`
  - Subcategory quick-link strip component
  - Horizontal scroll on mobile, wrap on desktop
  - Links styled with #e01e12 hover state
  - Props: `subcategories: Subcategory[]`, `categorySlug: string`

---

## Phase 4: Editorial Post Generation — Categories 1-5 (40 tasks)

**Goal**: Generate 50 posts for Kos, Mode, Skoonheid, Gesondheid, Bekendes  
**Estimated Time**: 5-6 hours

### Kos (10 posts)

- [ ] **Task 4.1**: Create `/src/app/data/posts/kos/` directory
- [ ] **Task 4.2**: Generate `kos-post-001.ts` — Quick meal (Maklik & vinnig)
  - Title, excerpt, 500-800 word Afrikaans content
  - Unsplash image: `food,cooking&sig=kos-001`
  - Subcategory: "maklik-vinnig", Type: "recipe"
- [ ] **Task 4.3**: Generate `kos-post-002.ts` — Quick meal
- [ ] **Task 4.4**: Generate `kos-post-003.ts` — Quick meal
- [ ] **Task 4.5**: Generate `kos-post-004.ts` — Seasonal feature (Somerkos)
- [ ] **Task 4.6**: Generate `kos-post-005.ts` — Seasonal feature (Winterkos)
- [ ] **Task 4.7**: Generate `kos-post-006.ts` — Dessert (Nagereg)
- [ ] **Task 4.8**: Generate `kos-post-007.ts` — Dessert
- [ ] **Task 4.9**: Generate `kos-post-008.ts` — Low-carb (Laekoolhidraat)
- [ ] **Task 4.10**: Generate `kos-post-009.ts` — Vegetarian (Vegetaries)
- [ ] **Task 4.11**: Generate `kos-post-010.ts` — Drinks (Drankies)
- [ ] **Task 4.12**: Create `/src/app/data/posts/kos/index.ts` — Export all 10 posts

### Mode (10 posts)

- [ ] **Task 4.13**: Create `/src/app/data/posts/mode/` directory
- [ ] **Task 4.14**: Generate `mode-post-001.ts` — Trend report (Nuutste neigings)
- [ ] **Task 4.15**: Generate `mode-post-002.ts` — Trend report
- [ ] **Task 4.16**: Generate `mode-post-003.ts` — Trend report
- [ ] **Task 4.17**: Generate `mode-post-004.ts` — Style guide (Style gidse)
- [ ] **Task 4.18**: Generate `mode-post-005.ts` — Style guide
- [ ] **Task 4.19**: Generate `mode-post-006.ts` — Red carpet breakdown (Rooi loper)
- [ ] **Task 4.20**: Generate `mode-post-007.ts` — Red carpet breakdown
- [ ] **Task 4.21**: Generate `mode-post-008.ts` — Capsule wardrobe (Kapsule kas)
- [ ] **Task 4.22**: Generate `mode-post-009.ts` — Seasonal fashion (Seisoenale mode)
- [ ] **Task 4.23**: Generate `mode-post-010.ts` — Seasonal fashion
- [ ] **Task 4.24**: Create `/src/app/data/posts/mode/index.ts`

### Skoonheid (10 posts)

- [ ] **Task 4.25**: Create `/src/app/data/posts/skoonheid/` directory
- [ ] **Task 4.26**: Generate `skoonheid-post-001.ts` — Skincare routine (Velversorging)
- [ ] **Task 4.27**: Generate `skoonheid-post-002.ts` — Skincare routine
- [ ] **Task 4.28**: Generate `skoonheid-post-003.ts` — Skincare routine
- [ ] **Task 4.29**: Generate `skoonheid-post-004.ts` — Hair feature (Haarversorging)
- [ ] **Task 4.30**: Generate `skoonheid-post-005.ts` — Hair feature
- [ ] **Task 4.31**: Generate `skoonheid-post-006.ts` — Makeup tutorial (Grimering)
- [ ] **Task 4.32**: Generate `skoonheid-post-007.ts` — Makeup tutorial
- [ ] **Task 4.33**: Generate `skoonheid-post-008.ts` — Nail trend (Naelversorging)
- [ ] **Task 4.34**: Generate `skoonheid-post-009.ts` — Product roundup (Produkresensies)
- [ ] **Task 4.35**: Generate `skoonheid-post-010.ts` — Product roundup
- [ ] **Task 4.36**: Create `/src/app/data/posts/skoonheid/index.ts`

### Gesondheid (10 posts)

- [ ] **Task 4.37**: Create `/src/app/data/posts/gesondheid/` directory
- [ ] **Task 4.38**: Generate `gesondheid-post-001.ts` — Fitness (Fiksheid)
- [ ] **Task 4.39**: Generate `gesondheid-post-002.ts` — Fitness
- [ ] **Task 4.40**: Generate `gesondheid-post-003.ts` — Fitness
- [ ] **Task 4.41**: Generate `gesondheid-post-004.ts` — Nutrition (Voeding)
- [ ] **Task 4.42**: Generate `gesondheid-post-005.ts` — Nutrition
- [ ] **Task 4.43**: Generate `gesondheid-post-006.ts` — Nutrition
- [ ] **Task 4.44**: Generate `gesondheid-post-007.ts` — Symptom explainer (Simptome)
- [ ] **Task 4.45**: Generate `gesondheid-post-008.ts` — Symptom explainer
- [ ] **Task 4.46**: Generate `gesondheid-post-009.ts` — Mental health (Geestesgesondheid)
- [ ] **Task 4.47**: Generate `gesondheid-post-010.ts` — Mental health
- [ ] **Task 4.48**: Create `/src/app/data/posts/gesondheid/index.ts`

### Bekendes (10 posts)

- [ ] **Task 4.49**: Create `/src/app/data/posts/bekendes/` directory
- [ ] **Task 4.50**: Generate `bekendes-post-001.ts` — Celebrity interview (Onderhoude)
- [ ] **Task 4.51**: Generate `bekendes-post-002.ts` — Celebrity interview
- [ ] **Task 4.52**: Generate `bekendes-post-003.ts` — Celebrity interview
- [ ] **Task 4.53**: Generate `bekendes-post-004.ts` — TV coverage (TV dekking)
- [ ] **Task 4.54**: Generate `bekendes-post-005.ts` — TV coverage
- [ ] **Task 4.55**: Generate `bekendes-post-006.ts` — TV coverage
- [ ] **Task 4.56**: Generate `bekendes-post-007.ts` — Behind the scenes (Agter die skerms)
- [ ] **Task 4.57**: Generate `bekendes-post-008.ts` — Behind the scenes
- [ ] **Task 4.58**: Generate `bekendes-post-009.ts` — Cultural commentary (Kultuur)
- [ ] **Task 4.59**: Generate `bekendes-post-010.ts` — Cultural commentary
- [ ] **Task 4.60**: Create `/src/app/data/posts/bekendes/index.ts`

---

## Phase 5: Editorial Post Generation — Categories 6-10 (40 tasks)

**Goal**: Generate 50 posts for Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen  
**Estimated Time**: 5-6 hours

### Leefstyl (10 posts)

- [ ] **Task 5.1**: Create `/src/app/data/posts/leefstyl/` directory
- [ ] **Task 5.2**: Generate `leefstyl-post-001.ts` — Decor feature (Dekor)
- [ ] **Task 5.3**: Generate `leefstyl-post-002.ts` — Decor feature
- [ ] **Task 5.4**: Generate `leefstyl-post-003.ts` — Decor feature
- [ ] **Task 5.5**: Generate `leefstyl-post-004.ts` — DIY project (DIY)
- [ ] **Task 5.6**: Generate `leefstyl-post-005.ts` — DIY project
- [ ] **Task 5.7**: Generate `leefstyl-post-006.ts` — Garden guide (Tuin)
- [ ] **Task 5.8**: Generate `leefstyl-post-007.ts` — Garden guide
- [ ] **Task 5.9**: Generate `leefstyl-post-008.ts` — Small space hack (Klein spasies)
- [ ] **Task 5.10**: Generate `leefstyl-post-009.ts` — Small space hack
- [ ] **Task 5.11**: Generate `leefstyl-post-010.ts` — Craft tutorial (Ambag)
- [ ] **Task 5.12**: Create `/src/app/data/posts/leefstyl/index.ts`

### Jou lewe (10 posts)

- [ ] **Task 5.13**: Create `/src/app/data/posts/jou-lewe/` directory
- [ ] **Task 5.14**: Generate `jou-lewe-post-001.ts` — Relationships (Verhoudings)
- [ ] **Task 5.15**: Generate `jou-lewe-post-002.ts` — Relationships
- [ ] **Task 5.16**: Generate `jou-lewe-post-003.ts` — Relationships
- [ ] **Task 5.17**: Generate `jou-lewe-post-004.ts` — Parenting (Ouerskap)
- [ ] **Task 5.18**: Generate `jou-lewe-post-005.ts` — Parenting
- [ ] **Task 5.19**: Generate `jou-lewe-post-006.ts` — Finance (Finansies)
- [ ] **Task 5.20**: Generate `jou-lewe-post-007.ts` — Finance
- [ ] **Task 5.21**: Generate `jou-lewe-post-008.ts` — Inspiration (Inspirasie)
- [ ] **Task 5.22**: Generate `jou-lewe-post-009.ts` — Inspiration
- [ ] **Task 5.23**: Generate `jou-lewe-post-010.ts` — Opinion (Mening)
- [ ] **Task 5.24**: Create `/src/app/data/posts/jou-lewe/index.ts`

### Ontspanning (10 posts)

- [ ] **Task 5.25**: Create `/src/app/data/posts/ontspanning/` directory
- [ ] **Task 5.26**: Generate `ontspanning-post-001.ts` — Travel (Reis)
- [ ] **Task 5.27**: Generate `ontspanning-post-002.ts` — Travel
- [ ] **Task 5.28**: Generate `ontspanning-post-003.ts` — Travel
- [ ] **Task 5.29**: Generate `ontspanning-post-004.ts` — Book review (Boeke)
- [ ] **Task 5.30**: Generate `ontspanning-post-005.ts` — Book review
- [ ] **Task 5.31**: Generate `ontspanning-post-006.ts` — Podcast episode (Podsendings)
- [ ] **Task 5.32**: Generate `ontspanning-post-007.ts` — Podcast episode
- [ ] **Task 5.33**: Generate `ontspanning-post-008.ts` — Film list (Flieks)
- [ ] **Task 5.34**: Generate `ontspanning-post-009.ts` — Film list
- [ ] **Task 5.35**: Generate `ontspanning-post-010.ts` — Event feature (Gebeure)
- [ ] **Task 5.36**: Create `/src/app/data/posts/ontspanning/index.ts`

### Rooiwarm wenners (10 posts)

- [ ] **Task 5.37**: Create `/src/app/data/posts/rooiwarm-wenners/` directory
- [ ] **Task 5.38**: Generate `rooiwarm-post-001.ts` — Beauty winner (Skoonheid), type: "award"
- [ ] **Task 5.39**: Generate `rooiwarm-post-002.ts` — Beauty winner
- [ ] **Task 5.40**: Generate `rooiwarm-post-003.ts` — Beauty winner
- [ ] **Task 5.41**: Generate `rooiwarm-post-004.ts` — Beauty winner
- [ ] **Task 5.42**: Generate `rooiwarm-post-005.ts` — Beauty winner
- [ ] **Task 5.43**: Generate `rooiwarm-post-006.ts` — Wellness winner (Welstand)
- [ ] **Task 5.44**: Generate `rooiwarm-post-007.ts` — Wellness winner
- [ ] **Task 5.45**: Generate `rooiwarm-post-008.ts` — Wellness winner
- [ ] **Task 5.46**: Generate `rooiwarm-post-009.ts` — Editor's pick (Redakteur se keuse)
- [ ] **Task 5.47**: Generate `rooiwarm-post-010.ts` — Editor's pick
- [ ] **Task 5.48**: Create `/src/app/data/posts/rooiwarm-wenners/index.ts`

### Wen (10 posts)

- [ ] **Task 5.49**: Create `/src/app/data/posts/wen/` directory
- [ ] **Task 5.50**: Generate `wen-post-001.ts` — Competition, type: "competition"
- [ ] **Task 5.51**: Generate `wen-post-002.ts` — Competition
- [ ] **Task 5.52**: Generate `wen-post-003.ts` — Competition
- [ ] **Task 5.53**: Generate `wen-post-004.ts` — Competition
- [ ] **Task 5.54**: Generate `wen-post-005.ts` — Competition
- [ ] **Task 5.55**: Generate `wen-post-006.ts` — Competition
- [ ] **Task 5.56**: Generate `wen-post-007.ts` — Competition
- [ ] **Task 5.57**: Generate `wen-post-008.ts` — Competition
- [ ] **Task 5.58**: Generate `wen-post-009.ts` — Competition
- [ ] **Task 5.59**: Generate `wen-post-010.ts` — Competition
- [ ] **Task 5.60**: Create `/src/app/data/posts/wen/index.ts`

---

## Phase 6: Post Loader & Mega Menu Config (7 tasks)

**Goal**: Create post loader utilities and mega menu navigation config  
**Estimated Time**: 3-4 hours

- [ ] **Task 6.1**: Create `/src/app/data/posts/index.ts` — Vite glob post loader
  - Use `import.meta.glob('./*/index.ts', { eager: true })`
  - Export `getAllPosts()` — Returns all 100 posts as array
  - Export `getPostsByCategory(categoryId: string)` — Filters by category
  - Export `getPostsBySubcategory(subcategoryId: string)` — Filters by subcategory
  - Export `getFeaturedPosts(limit: number)` — Returns featured posts
  - Export `getTrendingPosts(categoryId: string, limit: number)` — Returns 3 most recent per category

- [ ] **Task 6.2**: Create `/src/app/data/navigation.ts` — Main nav + footer links
  - Main nav: 12 top-level items (Kos through Kontak)
  - Footer legal links: Privaatheidsbeleid, Gebruiksvoorwaardes, Kontak, Adverteer
  - Export `mainNavigation` and `footerNavigation` arrays

- [ ] **Task 6.3**: Create `/src/app/data/megaMenuConfig.ts` — Mega menu config
  - Structure: `{ [categoryId]: { featured: Post, subcategories: Subcategory[], trending: Post[] } }`
  - Manually select 1 featured post per category (first post from each category)
  - Use `getTrendingPosts()` to auto-populate 3 trending posts per category

- [ ] **Task 6.4**: Map featured posts in `megaMenuConfig.ts`
  - Kos: kos-post-001 (featured seasonal recipe)
  - Mode: mode-post-001 (latest trend report)
  - Skoonheid: skoonheid-post-001 (skincare routine)
  - (Continue for all 10 categories)

- [ ] **Task 6.5**: Test post loader functions
  - Verify `getAllPosts()` returns 100 posts
  - Verify `getPostsByCategory('kos')` returns 10 posts
  - Verify `getTrendingPosts('kos', 3)` returns 3 most recent Kos posts

- [ ] **Task 6.6**: Test mega menu config
  - Verify each category has featured post, subcategories array, trending posts array
  - Verify Shop and Kontak have no mega menu config (utility pages)

- [ ] **Task 6.7**: Create `/guidelines/components/navigation/mega-menu-system.md`
  - Document mega menu architecture (3-column layout)
  - Document featured post selection strategy
  - Document trending post auto-population logic
  - Include usage examples for MegaMenu component

---

## Phase 7: Route Architecture & Template Updates (11 tasks)

**Goal**: Update React Router routes and refactor category/article templates  
**Estimated Time**: 4-5 hours

- [ ] **Task 7.1**: Update `/src/app/routes.tsx` — New routes for 10 categories
  - Add routes: `/kos`, `/mode`, `/skoonheid`, `/gesondheid`, `/bekendes`, `/leefstyl`, `/jou-lewe`, `/ontspanning`, `/rooiwarm-wenners`, `/wen`
  - Add subcategory routes: `/:category/:subcategory`
  - Add article routes: `/:category/:articleSlug` (or `/:category/:subcategory/:articleSlug` if subcategory in path)
  - Keep Shop and Kontak as utility page routes

- [ ] **Task 7.2**: Create `/src/app/pages/Category.tsx` — Universal category template
  - Use `SharedHero` with `category` variant
  - Add `CategoryHeroLinks` subcategory strip below hero
  - Add featured story block (first post in category, large card)
  - Add 3-column post grid (remaining 9 posts)
  - Add newsletter CTA at bottom
  - Props: `categoryId: string` (from route param)

- [ ] **Task 7.3**: Create `/src/app/pages/Subcategory.tsx` — Universal subcategory template
  - Reuse `Category.tsx` structure but filter posts by subcategory
  - Use `SharedHero` with `subcategory` variant
  - Breadcrumbs: Home > Category > Subcategory
  - Props: `categoryId: string`, `subcategoryId: string`

- [ ] **Task 7.4**: Update `/src/app/pages/Article.tsx` — Use SharedHero
  - Replace existing hero with `SharedHero` component (variant: `article`)
  - Add breadcrumbs: Home > Category > Article Title
  - Add author, date, category metadata display
  - Keep existing article content rendering

- [ ] **Task 7.5**: Add conditional rendering for post types in `Article.tsx`
  - If `type === "recipe"`: Show ingredients block before content
  - If `type === "competition"`: Show entry form after content
  - If `type === "award"`: Show winner badge in hero

- [ ] **Task 7.6**: Update `/src/app/pages/Home.tsx` — Use SharedHero
  - Replace existing hero with `SharedHero` component (variant: `home`)
  - Implement hero slider with 5 featured posts
  - Keep existing homepage sections (category grids)

- [ ] **Task 7.7**: Implement category quick-link subcategory strip on category pages
  - Use `CategoryHeroLinks` component
  - Pass subcategories from category data
  - Horizontal scroll on mobile, wrap on desktop

- [ ] **Task 7.8**: Add featured story block to category pages
  - First post in category
  - Large card layout (image left, content right on desktop)
  - CTA button: "Lees meer" (#e01e12 background)

- [ ] **Task 7.9**: Add 3-column post grid to category pages
  - Remaining 9 posts (exclude featured post)
  - Card layout: image top, title, excerpt, "Lees meer" link
  - Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop

- [ ] **Task 7.10**: Delete legacy news-focused pages and routes
  - Identify and remove old news category pages
  - Remove old news article templates
  - Clean up unused imports in `routes.tsx`

- [ ] **Task 7.11**: Update `/guidelines/rooi-rose/template-system.md`
  - Document new template architecture (Category, Subcategory, Article)
  - Document SharedHero usage in all templates
  - Document conditional rendering by post type
  - Add routing convention (category/subcategory/article path structure)

---

## Phase 8: Repository Cleanup & Documentation (10 tasks)

**Goal**: Clean repository hygiene, update .gitignore, create final documentation  
**Estimated Time**: 3-4 hours

- [ ] **Task 8.1**: Delete `/src/app/data/news.ts` and legacy news content files
  - Remove old news mock data
  - Remove old news category definitions
  - Verify no broken imports

- [ ] **Task 8.2**: Remove committed `node_modules/tw-animate-css` artifacts
  - Use Git to remove from history if already committed
  - Document removal in cleanup report

- [ ] **Task 8.3**: Update `.gitignore` — Add comprehensive React/Vite exclusions
  - Add `node_modules/`
  - Add `dist/`
  - Add `.env` and `.env.local`
  - Add OS-specific files (`.DS_Store`, `Thumbs.db`)
  - Add editor files (`.vscode/`, `.idea/`)

- [ ] **Task 8.4**: Update `public/manifest.json` — Rooi rose branding
  - App name: "rooi rose"
  - Short name: "rooi rose"
  - Description: "Afrikaanse tydskrif met leefstyl, resepte en inspirasie"
  - Theme color: "#e01e12"

- [ ] **Task 8.5**: Create `/docs/CONTENT-MIGRATION-GUIDE.md` — WordPress CMS migration guide
  - Map TypeScript Post model to WordPress REST API fields
  - Document CPT requirements (post type for recipe/competition/award)
  - Document taxonomy mapping (category/subcategory → category/tag)
  - Include GraphQL query examples for Headless WordPress

- [ ] **Task 8.6**: Create `/manifest.csv` — Complete index of all 100 posts
  - Columns: id, title, category, subcategory, type, author, date, image_url, slug
  - One row per post
  - CSV format for spreadsheet import

- [ ] **Task 8.7**: Create `/manifest.md` — Human-readable manifest
  - Markdown table format
  - Grouped by category
  - Include thumbnail images (Unsplash URLs)
  - Include post titles and links to files

- [ ] **Task 8.8**: Update `/README.md` — Add content architecture overview
  - Add "Content Architecture" section
  - Document 10 categories, 44 subcategories, 100 posts
  - Link to manifests and data model guidelines
  - Include Unsplash image attribution note

- [ ] **Task 8.9**: Update `/Guidelines.md` — Document content refactor completion
  - Add "Content Refactor Complete" section (2026-03-12)
  - Link to orchestrator and task list
  - Document 100 posts generated, 10 categories, 44 subcategories
  - Note legacy news content removed

- [ ] **Task 8.10**: Create `/reports/rooi-rose-content-refactor-complete-2026-03-12.md` — Completion report
  - Executive summary of refactor
  - Files created/updated/deleted counts
  - Data model documentation links
  - Component architecture summary
  - Success metrics (100 posts, 100 unique images, 44 subcategories, 12 nav items)
  - Next steps (WordPress migration, visual QA, content review)

---

## Progress Tracking

**Phase 1**: ⬜ 0/6 tasks complete  
**Phase 2**: ⬜ 0/6 tasks complete  
**Phase 3**: ⬜ 0/8 tasks complete  
**Phase 4**: ⬜ 0/60 tasks complete  
**Phase 5**: ⬜ 0/60 tasks complete  
**Phase 6**: ⬜ 0/7 tasks complete  
**Phase 7**: ⬜ 0/11 tasks complete  
**Phase 8**: ⬜ 0/10 tasks complete  

**Overall Progress**: ⬜ 0/128 tasks complete (0%)

---

## Notes

- All Afrikaans content must be authentic editorial quality (not machine-translated)
- All 100 posts must have unique Unsplash images (use `sig` parameter with post ID)
- Data models must support future WordPress REST API / GraphQL migration
- Templates must use shared components (no one-off hero implementations)
- Delete all legacy news content before marking Phase 8 complete
