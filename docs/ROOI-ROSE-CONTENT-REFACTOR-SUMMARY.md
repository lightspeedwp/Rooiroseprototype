# Rooi Rose Magazine Content Refactor — Summary

**Created**: 2026-03-12  
**Status**: Ready for Review & Execution  
**Deliverables**: 1 orchestrator, 1 task list, 4 guidelines

---

## 📋 What Was Created

I've created a **comprehensive implementation plan** for refactoring the rooi rose prototype from a news/newspaper model to a magazine/editorial content architecture. This includes:

### 1. Orchestrator Prompt

**File**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`

**Purpose**: Master execution plan with 8 phases and ~80 tasks

**Phases**:
1. **Data Model Foundation** (4-5 hours) — TypeScript models for Post, Category, Subcategory, HeroProps
2. **Category & Subcategory Data** (3-4 hours) — 10 categories + 44 subcategories
3. **Shared Hero Component System** (4-5 hours) — Universal hero with 6 variants
4. **Editorial Post Generation — Categories 1-5** (5-6 hours) — 50 posts (Kos, Mode, Skoonheid, Gesondheid, Bekendes)
5. **Editorial Post Generation — Categories 6-10** (5-6 hours) — 50 posts (Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen)
6. **Post Loader & Mega Menu Config** (3-4 hours) — Vite glob loader + mega menu navigation
7. **Route Architecture & Template Updates** (4-5 hours) — React Router updates + template refactoring
8. **Repository Cleanup & Documentation** (3-4 hours) — Delete legacy content, update .gitignore, create manifests

**Total Estimated Effort**: 24-32 hours

---

### 2. Task List

**File**: `/tasks/rooi-rose-content-refactor-tasks.md`

**Purpose**: Detailed checklist with 128 tasks across 8 phases

**Key Task Sections**:
- Phase 1: 6 tasks (data models)
- Phase 2: 6 tasks (categories/subcategories)
- Phase 3: 8 tasks (SharedHero component)
- Phase 4: 60 tasks (50 posts for categories 1-5)
- Phase 5: 60 tasks (50 posts for categories 6-10)
- Phase 6: 7 tasks (post loader + mega menu)
- Phase 7: 11 tasks (routes + templates)
- Phase 8: 10 tasks (cleanup + documentation)

**Progress Tracking**: Checkboxes for each task, phase completion percentages

---

### 3. Content Model Guideline

**File**: `/guidelines/data-structure/rooi-rose-content-model.md`

**Purpose**: Define TypeScript data models for magazine content

**Contents**:
- **Post Model** — Universal post interface with 4 type variants (article/recipe/competition/award)
- **Category Model** — Top-level editorial categories (Kos, Mode, etc.)
- **Subcategory Model** — Second-level categories (Maklik & vinnig, etc.)
- **HeroProps Model** — SharedHero component props with 6 variants
- **WordPress REST API Mapping** — Field mapping for CMS migration
- **Slug Format Rules** — `{id}-{slugified-title}` convention
- **Data File Structure** — Directory organization for 100 posts
- **Post Loader Functions** — `getAllPosts()`, `getPostsByCategory()`, etc.

---

### 4. Shared Hero System Guideline

**File**: `/guidelines/components/hero/shared-hero-system.md`

**Purpose**: Document universal hero component with 6 variants

**Contents**:
- **6 Hero Variants** — home, category, subcategory, article, competition, award
- **Design Specifications** — Layout, typography, colors, spacing per variant
- **Component API** — HeroProps interface, variant-specific props
- **Brand Design Tokens** — Playfair Display SC, Karla, #e01e12, #424242
- **Usage Examples** — Code examples for Home, Category, Article pages
- **Accessibility** — Heading hierarchy, alt text, breadcrumbs, color contrast
- **Responsive Design** — Mobile/tablet/desktop breakpoints
- **Testing Checklist** — Verification criteria for all variants

---

### 5. Mega Menu System Guideline

**File**: `/guidelines/components/navigation/mega-menu-system.md`

**Purpose**: Define 3-column mega menu navigation architecture

**Contents**:
- **Navigation Structure** — 12 top-level items (10 with mega menus)
- **3-Column Layout** — Featured story + subcategory links + trending posts
- **Data Model** — `MegaMenuConfig` structure and generation logic
- **Featured Post Selection** — Manual selection strategy (first post per category)
- **Trending Posts Logic** — Auto-populate 3 most recent posts per category
- **Design Specifications** — Desktop mega menu + mobile drawer dimensions
- **Component Implementation** — `MegaMenu.tsx`, `MegaMenuFeatured.tsx`, etc.
- **Accessibility** — Keyboard navigation, screen reader support, focus management
- **Responsive Breakpoints** — Mobile drawer vs desktop mega menu

---

## 🎯 Key Deliverables When Executed

### Content Deliverables

- **100 Editorial Posts** — 10 posts per category with 500-800 word Afrikaans content
- **100 Unique Images** — Unsplash Source images with category-specific keywords
- **10 Categories** — Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen
- **44 Subcategories** — Complete taxonomy mapped to categories

### Component Deliverables

- **1 SharedHero Component** — Universal hero with 6 variants (replaces fragmented hero implementations)
- **3 Mega Menu Components** — Featured story, subcategory links, trending posts columns
- **3 Reusable Templates** — Category, Subcategory, Article pages using shared components

### Data Deliverables

- **4 Data Models** — Post, Category, Subcategory, HeroProps TypeScript interfaces
- **10 Category Objects** — With hero images, descriptions, subcategory refs
- **44 Subcategory Objects** — With parent category refs, descriptions
- **1 Post Loader** — Vite glob importer with helper functions
- **1 Mega Menu Config** — Auto-populated trending posts, manually selected featured posts

### Documentation Deliverables

- **2 Manifests** — CSV + Markdown index of all 100 posts
- **1 Migration Guide** — WordPress CMS migration instructions
- **1 Completion Report** — Summary of refactor execution

---

## 🚀 How to Execute

### Step 1: Review This Summary

Read this document to understand the scope and deliverables.

### Step 2: Review the Orchestrator

**File**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`

- Understand the 8-phase execution plan
- Review phase breakdown and estimated effort
- Check design specifications and requirements

### Step 3: Review the Task List

**File**: `/tasks/rooi-rose-content-refactor-tasks.md`

- Scan the 128 tasks to understand granularity
- Check phase completion checklists
- Understand task dependencies

### Step 4: Review the Guidelines

Read the 4 guideline documents to understand:

1. **Content Model** — Data structures and WordPress mapping
2. **Shared Hero** — Component variants and design tokens
3. **Mega Menu** — Navigation architecture and auto-population logic

### Step 5: Decide on Execution

Once you're satisfied with the plan:

**Option A: Full Execution**
```
"Execute the rooi rose content refactor orchestrator, starting with Phase 1"
```

**Option B: Phased Execution**
```
"Execute Phase 1 of the rooi rose content refactor (Data Model Foundation)"
```

**Option C: Partial Execution**
```
"Execute Phase 3 only (Shared Hero Component System)"
```

---

## 📊 Success Metrics

When execution is complete, you will have:

✅ **100 editorial posts** generated (10 per category)  
✅ **100 unique Unsplash images** assigned  
✅ **44 subcategories** mapped to 10 categories  
✅ **12 top-level navigation items** configured  
✅ **1 universal SharedHero component** (6 variants)  
✅ **3 reusable templates** (Category, Subcategory, Article)  
✅ **Conditional rendering** for 4 post types (article/recipe/competition/award)  
✅ **All legacy news content** deleted  
✅ **`.gitignore`** prevents future `node_modules` commits  
✅ **Public folder branding** updated to rooi rose  
✅ **5 new guidelines** created  
✅ **2 manifests** generated (CSV + Markdown)  
✅ **1 WordPress migration guide** created

---

## ⚠️ Important Notes

### Afrikaans Content Quality

All editorial content will be **authentic Afrikaans** (not Google Translate quality). Each post will be 500-800 words with proper editorial tone matching the category:

- **Kos**: Warm, practical, inviting
- **Mode**: Confident, editorial, aspirational
- **Skoonheid**: Expert, polished, informative
- **Gesondheid**: Authoritative but warm
- **Bekendes**: Exclusive, conversational

### WordPress CMS Portability

All data models are designed for **WordPress REST API / GraphQL migration**:

- Field names match WordPress conventions
- Slug format compatible with WordPress URLs
- Optional fields support ACF (Advanced Custom Fields)
- Post types map to WordPress CPTs (Custom Post Types)

### Repository Hygiene

Phase 8 includes **comprehensive cleanup**:

- Delete all legacy news content files
- Remove committed `node_modules/tw-animate-css` artifacts
- Update `.gitignore` with React/Vite exclusions
- Update `public/manifest.json` with rooi rose branding

---

## 📚 Related Files

### Research Documents (Input)

- `/src/imports/pasted_text/rooi-rose-prototype-refactor-c.txt` — Research report analyzing current prototype
- `/src/imports/pasted_text/content-data-brief.md` — Content strategy and IA brief

### Implementation Files (Created)

- `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md` — Master execution plan
- `/tasks/rooi-rose-content-refactor-tasks.md` — Detailed task checklist (128 tasks)

### Guidelines (Created)

- `/guidelines/data-structure/rooi-rose-content-model.md` — TypeScript data models
- `/guidelines/components/hero/shared-hero-system.md` — Hero component variants
- `/guidelines/components/navigation/mega-menu-system.md` — Mega menu architecture

### Existing Guidelines (Referenced)

- `/guidelines/rooi-rose/content-architecture.md` — Existing category/subcategory taxonomy
- `/guidelines/rooi-rose/brand-guidelines.md` — Rooi rose brand identity
- `/guidelines/rooi-rose/template-system.md` — Current template patterns

---

## 🎉 Next Steps

**You are now ready to execute the rooi rose content refactor!**

1. ✅ Review this summary (you're reading it now)
2. ✅ Review the orchestrator (`/prompts/rooi-rose-magazine-content-refactor-orchestrator.md`)
3. ✅ Review the task list (`/tasks/rooi-rose-content-refactor-tasks.md`)
4. ✅ Review the 4 guidelines
5. ⏸️ **PAUSE** — Decide if you want to proceed with execution
6. 🚀 **EXECUTE** — Tell me to run the orchestrator when ready

---

**Questions Before Execution?**

If you have any questions about the plan, data models, component architecture, or execution strategy, ask before proceeding. I'm happy to clarify any part of the implementation plan.

---

**Last Updated**: 2026-03-12
