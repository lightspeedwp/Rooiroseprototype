# Rooi Rose Magazine Content Refactor Orchestrator

**Version**: 1.0  
**Priority**: P0 — Content Architecture Foundation  
**Status**: Ready for Execution  
**Estimated Effort**: 24–32 hours (8 phases, ~80 tasks)  
**Created**: 2026-03-12

---

## 🎯 Executive Summary

This orchestrator implements a comprehensive refactor of the rooi rose prototype from a **news/newspaper information model** to a **magazine/editorial content architecture**. The deliverable includes 100 mock editorial posts across 10 lifestyle categories, a new mega menu navigation system, shared hero component patterns, and structured TypeScript data models designed for WordPress CMS portability.

### Strategic Goals

1. **Replace News Content** — Delete legacy news-focused mock data and replace with magazine editorial content
2. **Implement Magazine IA** — 10 editorial categories + 44 subcategories aligned with live rooi rose brand
3. **Create Shared Component System** — Universal hero component with 6 variants (home/category/subcategory/article/competition/award)
4. **Generate 100 Editorial Posts** — 10 posts per category with unique Unsplash images and 500-800 word Afrikaans content
5. **Build Mega Menu Navigation** — 3-column mega menu with featured stories, subcategory links, and trending posts
6. **Ensure CMS Portability** — Structured data models compatible with WordPress REST/GraphQL migration

---

## 📊 Current State Analysis

### ✅ Prototype Strengths (Foundations to Preserve)

- **Token-Driven CSS** — Central theme file + global CSS layers allow brand updates at token level
- **React Router Architecture** — Page-based routes already recognize magazine page types (home, category, article, competitions)
- **Data/Template Separation** — Existing separation pattern makes it feasible to introduce new data layer without full rewrite
- **Shared Hero Pattern** — Prototype already uses hero sections with category entry links

### ⚠️ Gaps to Address (Refactor Requirements)

- **Legacy Navigation** — Current nav config is newspaper-oriented; needs explicit mega menu config for 12 top-level items
- **News-First Content** — Generic news categories/breaking news patterns incompatible with magazine editorial voice
- **Repository Hygiene** — Committed `node_modules/tw-animate-css` artifacts; missing `.gitignore` rules
- **Brand Artifacts** — Public folder contains old prototype branding (manifest.json app name, etc.)

---

## 🗂️ Information Architecture (Final)

### Main Navigation (12 Items)

| # | Category | Subcategories | Post Count |
|:--|:---------|:--------------|:-----------|
| 1 | **Kos** | 12 (Begin hier, Kook vir die seisoen, Soet & spesiaal, etc.) | 10 |
| 2 | **Mode** | 6 (Nuutste neigings, Style gidse, Seisoenale mode, etc.) | 10 |
| 3 | **Skoonheid** | 5 (Velversorging, Grimering, Haarversorging, etc.) | 10 |
| 4 | **Gesondheid** | 4 (Fiksheid, Voeding, Simptome, Geestesgesondheid) | 10 |
| 5 | **Bekendes** | 4 (Onderhoude, TV dekking, Agter die skerms, Kultuur) | 10 |
| 6 | **Leefstyl** | 5 (Dekor, DIY, Tuin, Klein spasies, Ambag) | 10 |
| 7 | **Jou lewe** | 5 (Verhoudings, Ouerskap, Finansies, Inspirasie, Mening) | 10 |
| 8 | **Ontspanning** | 6 (Reis, Boeke, Podsendings, Flieks, Gebeure, Blogs) | 10 |
| 9 | **Rooiwarm wenners** | 3 (Skoonheid, Welstand, Redakteur se keuse) | 10 |
| 10 | **Wen** | 1 (Kompetisies) | 10 |
| 11 | **Shop** | — | 0 (utility page) |
| 12 | **Kontak** | — | 0 (utility page) |

**Total Posts**: 100 (10 editorial categories × 10 posts each)

### Live Site-Aligned Subcategories (Verified)

**Based on live rooi rose navigation structure**, use these exact subcategory labels:

#### Kos
Maklik & vinnig; Aandetes vir die week; Somerkos; Laekoolhidraat; Vegetaries; Gebak; Nagereg; Drankies; Jy kan; Nuut & Nou; Recipes in English

#### Mode
Dra dit so; Wenke; Trends

#### Skoonheid
Hare; Velsorg; Grimering; Naels; Wenke

#### Gesondheid
Leef gesond; Dieet; Fiksheid

#### Bekendes
Ons mense

#### Leefstyl
Dekor; Handwerk; Tuinmaak; Doen dit self

#### Jou lewe
Verhoudings; Ouerskap; Inspirasie; In die nuus; Geld & Sukses; Persoonlike groei

#### Ontspanning
Reis; Blogs; Leestyd; **Podcasts** (links to `/rooiroseradio` and `/rrradio`)

#### Wen
Wen hub; Ma Dogter Kompetisie; Inskrywings

#### Rooiwarm wenners
Beauty & Wellness Awards; Wenners; Terms & Conditions

### Verified Live URLs

Use these **live-compatible subcategory paths** where confirmed:
- `/kos/aandetes-vir-die-week/`
- `/ontspanning/reis/`
- `/ontspanning/blogs/`
- `/mode/nuut-en-nou-mode/` (for Trends)
- `/jou-lewe/sukses-en-geld/` (for Geld & Sukses)
- `/lees/` (Leestyd hub)
- `/rooiroseradio/` and `/rrradio/` (Podcasts)

---

## 🧩 Phase Breakdown

### Phase 1: Data Model Foundation (4-5 hours)
**Goal**: Create TypeScript data models and brand token constants

**Tasks**:
1. Create `/src/app/data/models/Post.ts` — Universal post model with type variants
2. Create `/src/app/data/models/Category.ts` — Category model with subcategory refs
3. Create `/src/app/data/models/Subcategory.ts` — Subcategory model with parent ref
4. Create `/src/app/data/models/HeroProps.ts` — SharedHero component props + 6 variants
5. Create `/src/app/data/brandTokens.ts` — Rooi rose fonts (#e01e12 red, #424242 grey, Playfair Display SC, Karla)
6. Update `/guidelines/data-structure/rooi-rose-content-model.md` — Document new data models

**Deliverables**: 6 TypeScript files, 1 guideline document

---

### Phase 2: Category & Subcategory Data (3-4 hours)
**Goal**: Define all 10 editorial categories + 44 subcategories

**Tasks**:
1. Create `/src/app/data/categories.ts` — All 10 category definitions with hero images
2. Create `/src/app/data/subcategories.ts` — All 44 subcategory definitions with parent refs
3. Map subcategories to categories in `categories.ts` (subcategories array field)
4. Generate Unsplash hero images for each category (10 unique images)
5. Write category descriptions (Afrikaans, 1-2 sentences each)
6. Update `/guidelines/rooi-rose/content-architecture.md` — Document final category/subcategory taxonomy

**Deliverables**: 2 data files, 10 Unsplash images, 1 updated guideline

---

### Phase 3: Shared Hero Component System (4-5 hours)
**Goal**: Create universal hero component with 6 variants

**Tasks**:
1. Create `/src/app/components/hero/SharedHero.tsx` — Universal hero component
2. Implement variant logic: `home | category | subcategory | article | competition | award`
3. Create `/src/app/components/hero/CategoryHeroLinks.tsx` — Subcategory quick-link strip component
4. Style hero variants with rooi rose brand tokens (Playfair Display SC headings, #e01e12 accents)
5. Add breadcrumbs support for article/subcategory variants
6. Add metadata display for article variant (author, date, category)
7. Test all 6 variants with sample data
8. Update `/guidelines/components/hero/shared-hero-system.md` — Document hero variants and usage

**Deliverables**: 2 React components, 1 guideline document

---

### Phase 4: Editorial Post Generation — Categories 1-5 (5-6 hours)
**Goal**: Generate 50 posts for first 5 categories (Kos, Mode, Skoonheid, Gesondheid, Bekendes)

**Tasks** (per category):
1. Create `/src/app/data/posts/[category]/` directory
2. Generate 10 post modules with unique IDs, slugs, titles, excerpts
3. Write 500-800 word Afrikaans editorial content per post
4. Generate 10 unique Unsplash images using category-specific keywords
5. Assign subcategories, tags, authors, publish dates
6. Set post types (article/recipe for Kos, article for others)
7. Create `/src/app/data/posts/[category]/index.ts` — Export all 10 posts
8. Create manifest CSV row for each post (id, title, category, subcategory, image URL)

**Deliverables**: 50 post modules, 5 index files, 50 manifest rows

**Category-Specific Content Briefs**:

#### 🥘 Kos (10 Posts)
- 3 quick meals (Maklik & vinnig)
- 2 seasonal features (Somerkos/Winterkos)
- 2 desserts (Nagereg)
- 1 low-carb (Laekoolhidraat)
- 1 vegetarian (Vegetaries)
- 1 drinks (Drankies)

**Tone**: Warm, practical, inviting  
**Keywords**: food, recipe, cooking, dessert, kitchen, salad

#### 👗 Mode (10 Posts)
- 3 trend reports (Nuutste neigings)
- 2 how-to style guides (Style gidse)
- 2 red carpet breakdowns (Rooi loper)
- 1 capsule wardrobe (Kapsule kas)
- 2 seasonal fashion edits (Seisoenale mode)

**Tone**: Confident, editorial, aspirational  
**Keywords**: fashion, runway, outfit, style, clothing, editorial

#### 💄 Skoonheid (10 Posts)
- 3 skincare routines (Velversorging)
- 2 hair features (Haarversorging)
- 2 makeup tutorials (Grimering)
- 1 nail trend (Naelversorging)
- 2 product roundups (Produkresensies)

**Tone**: Expert, polished, informative  
**Keywords**: beauty, skincare, makeup, hair, cosmetics

#### 🧠 Gesondheid (10 Posts)
- 3 fitness (Fiksheid)
- 3 nutrition (Voeding)
- 2 symptom explainers (Simptome)
- 2 mental health pieces (Geestesgesondheid)

**Tone**: Authoritative but warm  
**Keywords**: wellness, fitness, yoga, healthy food, doctor

#### 🌟 Bekendes (10 Posts)
- 3 celebrity interviews (Onderhoude)
- 3 TV coverage (TV dekking)
- 2 behind-the-scenes (Agter die skerms)
- 2 cultural commentary (Kultuur)

**Tone**: Exclusive, conversational  
**Keywords**: celebrity, interview, red carpet, stage

---

### Phase 5: Editorial Post Generation — Categories 6-10 (5-6 hours)
**Goal**: Generate 50 posts for remaining 5 categories (Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen)

**Tasks**: Same as Phase 4 for 5 additional categories

**Category-Specific Content Briefs**:

#### 🏡 Leefstyl (10 Posts)
- 3 decor features (Dekor)
- 2 DIY projects (DIY)
- 2 garden guides (Tuin)
- 2 small space hacks (Klein spasies)
- 1 craft tutorial (Ambag)

**Tone**: Inspirational, practical  
**Keywords**: home decor, diy, garden, interior, craft

#### ❤️ Jou lewe (10 Posts)
- 3 relationships (Verhoudings)
- 2 parenting (Ouerskap)
- 2 finance (Finansies)
- 2 inspiration (Inspirasie)
- 1 opinion (Mening)

**Tone**: Empathetic, reflective  
**Keywords**: relationship, family, reflection, journal

#### ✈️ Ontspanning (10 Posts)
- 3 travel (Reis)
- 2 book reviews (Boeke)
- 2 podcast episodes (Podsendings)
- 2 film lists (Flieks)
- 1 event feature (Gebeure)

**Tone**: Adventurous, cultural  
**Keywords**: travel, beach, podcast, books, cinema

#### 🏆 Rooiwarm wenners (10 Posts)
- 5 beauty winners (Skoonheid)
- 3 wellness winners (Welstand)
- 2 editor's picks (Redakteur se keuse)

**Tone**: Authoritative, product-focused  
**Keywords**: award, trophy, product flatlay

#### 🎁 Wen (10 Posts)
- 10 competition entries with prizes, entry instructions, terms

**Tone**: Exciting, promotional  
**Keywords**: gift box, giveaway, prize

**Deliverables**: 50 post modules, 5 index files, 50 manifest rows

---

### Phase 6: Post Loader & Mega Menu Config (3-4 hours)
**Goal**: Create post loader utilities and mega menu navigation config

**Tasks**:
1. Create `/src/app/data/posts/index.ts` — Vite `import.meta.glob` post loader
2. Add helper functions: `getAllPosts()`, `getPostsByCategory()`, `getPostsBySubcategory()`, `getFeaturedPosts()`, `getTrendingPosts()`
3. Create `/src/app/data/navigation.ts` — Main nav links + footer legal links
4. Create `/src/app/data/megaMenuConfig.ts` — Mega menu config with featured/trending post refs
5. Map mega menu featured posts (1 per category, manually selected)
6. Implement auto-population logic for trending posts (3 most recent per category)
7. Update `/guidelines/components/navigation/mega-menu-system.md` — Document mega menu architecture

**Deliverables**: 3 data files, 1 guideline document

#### Mega Menu Architecture Specification

**Content Model Per Top-Level Item**:

For each **editorial category** (Kos/Mode/Skoonheid/Gesondheid/Bekendes/Leefstyl/Jou lewe/Ontspanning):
- **Left area**: Subcategory links (1–2 columns depending on count)
- **Right-top area**: Featured card (3:2 image + headline + 2-line deck)
- **Right-bottom area**: Trending list (3–5 titles with timestamps/tags)
- **Footer link**: "View all [Category]" → category landing page

For **Rooiwarm wenners** (Awards + Winners hub):
- Primary CTA: "Beauty & Wellness Awards" (hub destination)
- Secondary CTA: "Wenners" (winners list page)
- Optional: "Terms & Conditions"

For **Wen** (Competitions):
- Top links: "Wen hub", "Ma Dogter Kompetisie", "Inskrywings"
- Right panel: Featured competition card (image + prize teaser)

For **Shop**:
- Quick links: Shop home, Basket/Cart, Checkout, My Account
- Right panel: Featured product (e.g., subscription, entry fee)

For **Kontak**:
- No mega menu (simple route)
- Optional dropdown: "Advertensie-navrae", "Redaksie", "Intekenare"

**Desktop Behaviour**:
- Trigger: Hover AND focus on top-level nav label opens dropdown
- Dropdown: Full-width panel aligned to header container (max-width matches header)
- Close: Mouse-leave (short delay), ESC key, click outside, or focus-away
- Keyboard: Tab moves through items; ESC closes menu; Arrow keys optional (left/right changes top-level while menu stays open)

**Desktop Layout Grid** (3-zone):
- **Zone A (left)**: Subcategory columns (1–2 columns)
- **Zone B (right-top)**: Featured card (3:2 image, headline, short deck)
- **Zone C (right-bottom)**: Trending list + "View all" link

**Mobile Behaviour**:
- Keep existing full-screen mobile menu overlay
- Add expandable accordions per main category
- Inside accordion: subcategory links + one featured item
- No hover-only logic; use tap-to-expand

**Visual Styling**:
- Typeface: Playfair Display SC for category labels/headings, Karla for UI/body
- Colors: #e01e12 for highlights (active state, section headings, CTAs)
- White space: Generous padding for magazine-style contents spread
- Typography hierarchy: Clear distinction between category labels, subcategories, featured headlines

**TypeScript Interface** (megaMenuConfig.ts):
```typescript
interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  subcategories?: Array<{
    title: string;
    href: string;
  }>;
  featured?: {
    title: string;
    href: string;
    imageUrl: string;
    categoryLabel: string;
    deck?: string;
  };
  trending?: Array<{
    title: string;
    href: string;
    timestamp?: string;
  }>;
}
```

---

### Phase 7: Route Architecture & Template Updates (4-5 hours)
**Goal**: Update React Router routes and refactor category/article templates

**Tasks**:
1. Update `/src/app/routes.tsx` — New routes for 10 categories + subcategory filtering
2. Create `/src/app/pages/Category.tsx` — Universal category template using SharedHero
3. Create `/src/app/pages/Subcategory.tsx` — Universal subcategory template (filtered category view)
4. Update `/src/app/pages/Article.tsx` — Use SharedHero with article variant
5. Add conditional rendering for post types: recipe (ingredients block), competition (entry form), award (winner badge)
6. Update `/src/app/pages/Home.tsx` — Use SharedHero with home variant (hero slider)
7. Implement category quick-link subcategory strip on category pages
8. Add featured story block to category pages
9. Add 3-column post grid to category pages
10. Delete legacy news-focused pages and routes
11. Update `/guidelines/rooi-rose/template-system.md` — Document new template architecture

**Deliverables**: 4 React pages updated, 1 guideline updated, legacy files deleted

---

### Phase 8: Repository Cleanup & Documentation (3-4 hours)
**Goal**: Clean repository hygiene, update .gitignore, create final documentation

**Tasks**:
1. Delete `/src/app/data/news.ts` and other legacy news content files
2. Remove committed `node_modules/tw-animate-css` artifacts
3. Update `.gitignore` — Add comprehensive React/Vite exclusions
4. Update `public/manifest.json` — Rooi rose branding (app name, description)
5. Create `/docs/CONTENT-MIGRATION-GUIDE.md` — Guide for migrating to WordPress CMS
6. Create `/manifest.csv` — Complete index of all 100 posts
7. Create `/manifest.md` — Human-readable manifest with thumbnails
8. Update `/README.md` — Add content architecture overview section
9. Update `/Guidelines.md` — Document content refactor completion
10. Create `/reports/rooi-rose-content-refactor-complete-2026-03-12.md` — Completion report

**Deliverables**: 4 documentation files, 2 manifests, 1 completion report, cleaned repository

---

## 📋 Task Tracking

**Total Tasks**: ~80  
**Task List Location**: `/tasks/rooi-rose-content-refactor-tasks.md`

### Phase Completion Checklist

- [ ] **Phase 1**: Data Model Foundation (6 tasks)
- [ ] **Phase 2**: Category & Subcategory Data (6 tasks)
- [ ] **Phase 3**: Shared Hero Component System (8 tasks)
- [ ] **Phase 4**: Editorial Post Generation — Categories 1-5 (40 tasks)
- [ ] **Phase 5**: Editorial Post Generation — Categories 6-10 (40 tasks)
- [ ] **Phase 6**: Post Loader & Mega Menu Config (7 tasks)
- [ ] **Phase 7**: Route Architecture & Template Updates (11 tasks)
- [ ] **Phase 8**: Repository Cleanup & Documentation (10 tasks)

---

## 🎨 Design Specifications

### Unsplash Image Strategy

Use `https://source.unsplash.com/1200x800/?[keywords]&sig=[unique-id]` with:

- **Category-specific keyword pairs** (see phase 4/5 briefs)
- **Unique `sig` parameter** per post (use post ID) to prevent caching collisions
- **Dimensions**: 1200×800 (3:2 aspect ratio for hero images)

### Brand Token Requirements

All new components must use rooi rose brand tokens:

- **Primary Color**: `#e01e12` (rooi rose red)
- **Tagline Grey**: `#424242`
- **Display Font**: Playfair Display SC (headings, hero titles)
- **Body Font**: Karla (paragraphs, UI)

---

## ⚠️ Critical Requirements

### Data Model Portability

All TypeScript data models MUST:

1. Resemble WordPress REST API response structure
2. Use `slug` field format: `{id}-{slugified-title}` (compatible with legacy "get id from slug" patterns)
3. Support GraphQL field mapping (camelCase field names)
4. Include optional fields for future CMS migration (meta, gallery, featured flag)

### Template Reusability

Category/Subcategory/Article templates MUST:

1. Share single `SharedHero` component (variant-based rendering)
2. Use structured data props only (no hardcoded content)
3. Support dynamic filtering via URL params
4. Conditionally render by post type (article/recipe/competition/award)

### Afrikaans Content Quality

All editorial post content MUST:

1. Be 500-800 words (proper editorial length)
2. Use authentic Afrikaans tone/voice (not Google Translate quality)
3. Match category content brief specifications
4. Include proper paragraph breaks, headings, lists
5. Avoid placeholder Lorem Ipsum text

---

## 📦 Deliverables Summary

| Phase | Files Created | Files Updated | Files Deleted | Guidelines |
|:------|:-------------:|:-------------:|:-------------:|:----------:|
| 1 | 6 | 0 | 0 | 1 |
| 2 | 2 | 1 | 0 | 1 |
| 3 | 2 | 0 | 0 | 1 |
| 4 | 55 | 0 | 0 | 0 |
| 5 | 55 | 0 | 0 | 0 |
| 6 | 3 | 0 | 0 | 1 |
| 7 | 0 | 5 | ~10 | 1 |
| 8 | 4 | 2 | ~5 | 0 |
| **Total** | **127** | **8** | **~15** | **5** |

---

## 🚀 Execution Instructions

### Prerequisites

1. Review `/src/imports/pasted_text/rooi-rose-prototype-refactor-c.txt` (research report)
2. Review `/src/imports/pasted_text/content-data-brief.md` (content strategy brief)
3. Confirm current prototype navigation structure in `/src/app/routes.tsx`

### Execution Order

**Execute phases sequentially** — each phase builds on previous deliverables:

1. Start with Phase 1 (data models are foundation for all other phases)
2. Proceed to Phase 2 (categories needed before post generation)
3. Build SharedHero in Phase 3 (needed before template updates)
4. Generate posts in Phases 4-5 (can parallelize these two phases)
5. Configure navigation/mega menu in Phase 6
6. Refactor templates in Phase 7 (requires all previous phases complete)
7. Clean up repository in Phase 8 (final documentation step)

### Quality Gates

**After Phase 3**: Test all 6 hero variants render correctly  
**After Phase 5**: Verify all 100 posts have unique Unsplash images  
**After Phase 7**: Verify all category/subcategory routes navigate correctly  
**After Phase 8**: Run final visual regression check

---

## 📚 Related Documentation

- [Content Architecture](/guidelines/rooi-rose/content-architecture.md) — Existing category/subcategory taxonomy
- [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Rooi rose brand identity
- [Template System](/guidelines/rooi-rose/template-system.md) — Current template patterns
- [Data Structure Overview](/guidelines/data-structure/overview.md) — Existing React mock data interfaces

---

## 📊 Success Metrics

**Content Completeness**:
- ✅ 100 editorial posts generated (10 per category)
- ✅ 100 unique Unsplash images assigned
- ✅ 44 subcategories mapped to categories
- ✅ 12 top-level navigation items configured

**Component Architecture**:
- ✅ 1 universal SharedHero component (6 variants)
- ✅ 3 reusable templates (Category, Subcategory, Article)
- ✅ Conditional rendering for 4 post types

**Repository Health**:
- ✅ All legacy news content deleted
- ✅ `.gitignore` prevents future `node_modules` commits
- ✅ Public folder branding updated to rooi rose

**Documentation**:
- ✅ 5 new guidelines created
- ✅ 2 manifests generated (CSV + Markdown)
- ✅ 1 WordPress migration guide created

---

**Ready to Execute**: Review this orchestrator, then proceed to `/tasks/rooi-rose-content-refactor-tasks.md` for detailed task checklist.