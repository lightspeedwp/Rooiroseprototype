# rooi rose Content Architecture Audit

**Date**: 2026-03-11  
**Status**: Phase 0 — Content Architecture Audit  
**Priority**: P0 — Foundation for Magazine Redesign

---

## Executive Summary

This audit compares the current **Die Papier newspaper prototype** structure against the **rooi rose magazine** live WordPress site to identify gaps and plan the content architecture migration.

### Key Findings

| Metric | Current (Die Papier) | Target (rooi rose) | Gap |
|:-------|:---------------------|:-------------------|:----|
| **Main Categories** | 13 | 11 | -2 (complete restructure) |
| **Category Type** | Newspaper (News, Sport, Business) | Magazine (Food, Fashion, Beauty) | 100% different |
| **Routes Defined** | 70+ | Need 50+ new routes | ~30 routes to add |
| **Navigation Items** | 13 desktop, 13 mobile | 11 top-level | Restructure needed |

---

## Current Structure Analysis

### 1. Current Categories (Die Papier Newspaper)

| # | Category | Slug | Route | Type |
|:--|:---------|:-----|:------|:-----|
| 1 | Tuis | `/` | `/` | Homepage |
| 2 | Nuus | `nuus` | `/nuus` | News |
| 3 | Sport | `sport` | `/sport` | Sports |
| 4 | Skole | `skole` | `/skole` | Schools |
| 5 | Sake | `sake` | `/sake` | Business |
| 6 | Leefstyl | `leefstyl` | `/leefstyl` | Lifestyle |
| 7 | Dink | `dink` | `/dink` | Opinion |
| 8 | Skolerugby | `skolerugby` | `/skolerugby` | Schools Rugby |
| 9 | Gebeure | `gebeure` | `/gebeure` | Events |
| 10 | Multimedia | `multimedia` | `/multimedia` | Multimedia |
| 11 | Doodsberrigte | `doodsberrigte` | `/doodsberrigte` | Obituaries |
| 12 | Kompetisies | `kompetisies` | `/kompetisies` | Competitions |
| 13 | E-uitgawes | `e-uitgawes` | `/e-uitgawes` | E-editions |

**Total**: 13 categories (newspaper-focused)

### 2. Current Navigation Structure

**Desktop Header** (`HEADER_CATEGORY_BAR_LINKS`):
```typescript
Tuis | Nuus | Sport | Dink | Sake | Leefstyl | Gebeure | Multimedia | Doodsberrigte | E-uitgawes
```

**Mobile Menu** (`MOBILE_CATEGORY_LINKS`):
```typescript
Tuis, Nuus, Sport, Skole, Sake, Leefstyl, Dink, Gebeure, Multimedia, Doodsberrigte, E-uitgawes, Kompetisies, Nuusbrief-argief
```

**Footer Columns**:
- Kategorieë: Nuus, Sport, Sake, Leefstyl, Dink, Skole, Skolerugby, Kompetisies
- Inhoud: E-uitgawes, Gebeure, Multimedia, Doodsberrigte, Nuusbrief-argief, Stuur nuus in

---

## Target Structure (rooi rose Magazine)

### 3. rooi rose Categories (Live WordPress Site)

Based on the Guidelines.md Phase 0 specification, the live rooi rose WordPress site uses:

| # | Category | Slug | Route | Focus Area |
|:--|:---------|:-----|:------|:-----------|
| 1 | Kos | `kos` | `/kos` | Food & Recipes |
| 2 | Mode | `mode` | `/mode` | Fashion & Style |
| 3 | Skoonheid | `skoonheid` | `/skoonheid` | Beauty & Skincare |
| 4 | Gesondheid | `gesondheid` | `/gesondheid` | Health & Wellness |
| 5 | Bekendes | `bekendes` | `/bekendes` | Celebrities & Interviews |
| 6 | Leefstyl | `leefstyl` | `/leefstyl` | Lifestyle (General) |
| 7 | Jou lewe | `jou-lewe` | `/jou-lewe` | Personal Life & Relationships |
| 8 | Ontspanning | `ontspanning` | `/ontspanning` | Entertainment & Culture |
| 9 | Rooiwarm wenners | `rooiwarm-wenners` | `/rooiwarm-wenners` | Awards & Winners |
| 10 | Wen | `wen` | `/wen` | Competitions |
| 11 | Kontak | `kontak` | `/kontak` | Contact (utility) |

**Total**: 11 categories (magazine lifestyle-focused)

### 4. rooi rose Subcategories (44 total across 8 main categories)

According to Phase 0 guidelines, there are **44 subcategories** across the 8 main editorial categories. These need to be mapped during implementation.

**Example Subcategory Structure** (to be defined):
- **Kos**: Resepte, Bak, Gesond kook, Vinnige etes, etc.
- **Mode**: Tendense, Styl, Klere, Skoene, Bykomstighede, etc.
- **Skoonheid**: Grimering, Velversorging, Haarversorging, Naelsorg, etc.
- **Gesondheid**: Fiksheid, Voeding, Geestesgesondheid, Welstand, etc.

---

## Gap Analysis

### 5. Categories to Remove (Newspaper-Only)

| Category | Slug | Reason |
|:---------|:-----|:-------|
| Nuus | `nuus` | Newspaper category, not magazine |
| Sport | `sport` | Newspaper category, not magazine |
| Skole | `skole` | Newspaper category, not magazine |
| Sake | `sake` | Newspaper category, not magazine |
| Dink | `dink` | Opinion column, not magazine format |
| Skolerugby | `skolerugby` | Sports subcategory, not magazine |
| Doodsberrigte | `doodsberrigte` | Newspaper feature, not magazine |

**Total to Remove**: 7 categories

### 6. Categories to Keep/Migrate

| Category | Current Slug | New Slug | Notes |
|:---------|:-------------|:---------|:------|
| Leefstyl | `leefstyl` | `leefstyl` | Keep (core magazine category) |
| Gebeure | `gebeure` | (remove or merge) | May merge into Ontspanning |
| Multimedia | `multimedia` | (remove or merge) | May merge into Ontspanning |
| Kompetisies | `kompetisies` | `wen` | Rename to "Wen" |
| E-uitgawes | `e-uitgawes` | `e-uitgawes` | Keep (utility, not nav) |

**Total to Keep**: 2 categories (Leefstyl, E-uitgawes as utility)

### 7. Categories to Add (Magazine-Only)

| Category | Slug | Route | Priority |
|:---------|:-----|:------|:---------|
| Kos | `kos` | `/kos` | P0 |
| Mode | `mode` | `/mode` | P0 |
| Skoonheid | `skoonheid` | `/skoonheid` | P0 |
| Gesondheid | `gesondheid` | `/gesondheid` | P0 |
| Bekendes | `bekendes` | `/bekendes` | P0 |
| Jou lewe | `jou-lewe` | `/jou-lewe` | P0 |
| Ontspanning | `ontspanning` | `/ontspanning` | P0 |
| Rooiwarm wenners | `rooiwarm-wenners` | `/rooiwarm-wenners` | P1 |

**Total to Add**: 8 new categories

---

## Route Migration Plan

### 8. Routes to Add

**New Category Routes** (8 routes):
```typescript
{ path: "kos", element: <CategoryPage categoryName="Kos" /> },
{ path: "mode", element: <CategoryPage categoryName="Mode" /> },
{ path: "skoonheid", element: <CategoryPage categoryName="Skoonheid" /> },
{ path: "gesondheid", element: <CategoryPage categoryName="Gesondheid" /> },
{ path: "bekendes", element: <CategoryPage categoryName="Bekendes" /> },
{ path: "jou-lewe", element: <CategoryPage categoryName="Jou lewe" /> },
{ path: "ontspanning", element: <CategoryPage categoryName="Ontspanning" /> },
{ path: "rooiwarm-wenners", element: <CategoryPage categoryName="Rooiwarm wenners" /> },
```

**Rename Kompetisies → Wen**:
```typescript
// OLD
{ path: "kompetisies", Component: CompetitionsPage },

// NEW
{ path: "wen", Component: CompetitionsPage },
{ path: "kompetisies", element: <Navigate to="/wen" replace /> }, // Legacy redirect
```

### 9. Routes to Remove/Redirect

**Newspaper Category Redirects** (7 routes):
```typescript
// Redirect old newspaper categories to homepage or archive
{ path: "nuus", element: <Navigate to="/" replace /> },
{ path: "sport", element: <Navigate to="/" replace /> },
{ path: "skole", element: <Navigate to="/" replace /> },
{ path: "sake", element: <Navigate to="/" replace /> },
{ path: "dink", element: <Navigate to="/" replace /> },
{ path: "skolerugby", element: <Navigate to="/" replace /> },
{ path: "doodsberrigte", element: <Navigate to="/" replace /> },
```

**Alternative: Archive Section**
```typescript
// Create a "Nuus-argief" (News Archive) page for old newspaper content
{ path: "nuus-argief/:category", element: <ArchivePage /> },
```

---

## Navigation Structure Update

### 10. New Desktop Header Navigation

**Proposed `HEADER_CATEGORY_BAR_LINKS`** (11 items):
```typescript
export const HEADER_CATEGORY_BAR_LINKS = [
  { label: "Tuis", href: "/" },
  { label: "Kos", href: "/kos" },
  { label: "Mode", href: "/mode" },
  { label: "Skoonheid", href: "/skoonheid" },
  { label: "Gesondheid", href: "/gesondheid" },
  { label: "Bekendes", href: "/bekendes" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Jou lewe", href: "/jou-lewe" },
  { label: "Ontspanning", href: "/ontspanning" },
  { label: "Wen", href: "/wen" },
  { label: "Kontak", href: "/kontak" },
];
```

### 11. New Mobile Menu Navigation

**Proposed `MOBILE_CATEGORY_LINKS`** (12 items):
```typescript
export const MOBILE_CATEGORY_LINKS = [
  { label: "Tuis", href: "/" },
  { label: "Kos", href: "/kos" },
  { label: "Mode", href: "/mode" },
  { label: "Skoonheid", href: "/skoonheid" },
  { label: "Gesondheid", href: "/gesondheid" },
  { label: "Bekendes", href: "/bekendes" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Jou lewe", href: "/jou-lewe" },
  { label: "Ontspanning", href: "/ontspanning" },
  { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
  { label: "Wen", href: "/wen" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
];
```

### 12. New Footer Columns

**Proposed `FOOTER_LINK_COLUMNS`**:
```typescript
{
  title: "rooi rose Kategorieë",
  links: [
    { label: "Kos", href: "/kos" },
    { label: "Mode", href: "/mode" },
    { label: "Skoonheid", href: "/skoonheid" },
    { label: "Gesondheid", href: "/gesondheid" },
    { label: "Bekendes", href: "/bekendes" },
    { label: "Leefstyl", href: "/leefstyl" },
    { label: "Jou lewe", href: "/jou-lewe" },
    { label: "Ontspanning", href: "/ontspanning" },
  ],
},
{
  title: "Kompetisies & Dienste",
  links: [
    { label: "Wen", href: "/wen" },
    { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
    { label: "E-uitgawes", href: "/e-uitgawes" },
    { label: "Nuusbrief", href: "/nuusbrief-inteken" },
    { label: "My rekening", href: "/my-rekening" },
  ],
},
```

---

## WordPress URL Mapping

### 13. Migration-Ready Route → WordPress URL Table

| Prototype Route | WordPress URL | Category Slug | Redirect | Notes |
|:----------------|:--------------|:--------------|:---------|:------|
| `/` | `/` | N/A | No | Homepage |
| `/kos` | `/kos` | `kos` | No | New category |
| `/mode` | `/mode` | `mode` | No | New category |
| `/skoonheid` | `/skoonheid` | `skoonheid` | No | New category |
| `/gesondheid` | `/gesondheid` | `gesondheid` | No | New category |
| `/bekendes` | `/bekendes` | `bekendes` | No | New category |
| `/leefstyl` | `/leefstyl` | `leefstyl` | No | Existing category |
| `/jou-lewe` | `/jou-lewe` | `jou-lewe` | No | New category |
| `/ontspanning` | `/ontspanning` | `ontspanning` | No | New category |
| `/rooiwarm-wenners` | `/rooiwarm-wenners` | `rooiwarm-wenners` | No | New category |
| `/wen` | `/wen` | `wen` | No | Renamed from Kompetisies |
| `/kompetisies` | `/wen` | N/A | Yes | Legacy redirect |
| `/nuus` | `/` | N/A | Yes | Archive or homepage |
| `/sport` | `/` | N/A | Yes | Archive or homepage |
| `/skole` | `/` | N/A | Yes | Archive or homepage |
| `/sake` | `/` | N/A | Yes | Archive or homepage |
| `/dink` | `/` | N/A | Yes | Archive or homepage |
| `/skolerugby` | `/` | N/A | Yes | Archive or homepage |
| `/doodsberrigte` | `/` | N/A | Yes | Archive or homepage |

---

## Page Template Inventory

### 14. Current Templates

| Template | File | Route Pattern | Status |
|:---------|:-----|:--------------|:-------|
| Homepage | `/src/app/pages/Home.tsx` | `/` | ✅ Redesigned (Phase 3) |
| Category | `/src/app/pages/Category.tsx` | `/:category` | ✅ Redesigned (Phase 4) |
| Article | `/src/app/pages/Article.tsx` | `/artikel/:slug` | ✅ Redesigned (Phase 5) |
| Competition | `/src/app/pages/CompetitionSingle.tsx` | `/kompetisies/:slug` | ⏳ Needs update → `/wen/:slug` |
| Competitions Archive | `/src/app/pages/Competitions.tsx` | `/kompetisies` | ⏳ Needs update → `/wen` |

### 15. Templates Needed (rooi rose Specific)

According to Phase 0 guidelines, rooi rose needs **6 core templates**:

| # | Template | Description | Priority | Status |
|:--|:---------|:------------|:---------|:-------|
| 1 | Home | Magazine homepage | P0 | ✅ Complete |
| 2 | Category | Category archive page | P0 | ✅ Complete |
| 3 | Article | Single article page | P0 | ✅ Complete |
| 4 | Recipe | Recipe post type (Kos category) | P1 | ⏳ To create |
| 5 | Competition | Single competition page | P1 | ⏳ To update |
| 6 | Awards | Rooiwarm wenners page | P2 | ⏳ To create |

**Action Items**:
- ✅ Home, Category, Article templates complete
- ⏳ Create **Recipe template** for Kos category
- ⏳ Update **Competition template** for Wen category
- ⏳ Create **Awards template** for Rooiwarm wenners

---

## Data Migration Requirements

### 16. categoryArticles.ts Updates

**Current Categories**:
```typescript
getArticlesByCategory(categoryName: "Nuus" | "Sport" | "Skole" | "Sake" | "Leefstyl" | "Dink")
```

**New Categories**:
```typescript
getArticlesByCategory(categoryName: 
  | "Kos" 
  | "Mode" 
  | "Skoonheid" 
  | "Gesondheid" 
  | "Bekendes" 
  | "Leefstyl" 
  | "Jou lewe" 
  | "Ontspanning" 
  | "Rooiwarm wenners" 
  | "Wen"
)
```

**Action**: Refactor `/src/app/data/categoryArticles.ts` with new category mock data.

### 17. Homepage CategorySection Updates

**Current Sections** (from Phase 3 redesigned homepage):
```typescript
1. Kos (Food)
2. Mode (Fashion)
3. Skoonheid (Beauty)
4. Gesondheid (Health)
5. Bekendes (Celebrities)
6. Leefstyl (Lifestyle)
7. Jou lewe (Your Life)
8. Ontspanning (Entertainment)
```

**Status**: ✅ Already aligned with rooi rose categories!

The homepage CategorySection components already use the correct rooi rose category names from Phase 3 redesign.

---

## Subcategory Architecture (Phase 0.1)

### 18. Subcategory Hierarchy (44 total)

According to Phase 0 guidelines, rooi rose has **44 subcategories across 8 main categories**. This requires:

1. **Route Structure**: `/category/:subcategory` pattern
2. **SubsectionFilter Component**: Update with new subcategories
3. **Data Model**: Add subcategory field to article types

**Example Subcategory Routes**:
```typescript
// Kos subcategories
{ path: "kos/resepte", element: <CategoryPage categoryName="Kos" subcategory="Resepte" /> },
{ path: "kos/bak", element: <CategoryPage categoryName="Kos" subcategory="Bak" /> },
{ path: "kos/gesond-kook", element: <CategoryPage categoryName="Kos" subcategory="Gesond kook" /> },

// Mode subcategories
{ path: "mode/tendense", element: <CategoryPage categoryName="Mode" subcategory="Tendense" /> },
{ path: "mode/styl", element: <CategoryPage categoryName="Mode" subcategory="Styl" /> },
```

**Action**: Create subcategory definition document (separate task).

---

## Implementation Priority

### 19. Phase 0 Task Breakdown

| Task # | Task | Priority | Effort | Dependencies |
|:-------|:-----|:---------|:-------|:-------------|
| 0.1 | Update navigation.ts with new categories | P0 | 2 hours | None |
| 0.2 | Update routes.tsx with new category routes | P0 | 3 hours | Task 0.1 |
| 0.3 | Add legacy redirects (nuus → /, sport → /, etc.) | P0 | 1 hour | Task 0.2 |
| 0.4 | Update categoryArticles.ts with new mock data | P1 | 4 hours | Task 0.1 |
| 0.5 | Update CategoryPage to handle new categories | P1 | 2 hours | Task 0.2 |
| 0.6 | Update Footer columns with new categories | P1 | 1 hour | Task 0.1 |
| 0.7 | Create subcategory definition document | P2 | 3 hours | Task 0.1 |
| 0.8 | Create Recipe template (Kos category) | P2 | 4 hours | Task 0.5 |
| 0.9 | Update Competition template (Wen category) | P2 | 2 hours | Task 0.5 |
| 0.10 | Create Awards template (Rooiwarm wenners) | P3 | 4 hours | Task 0.5 |

**Total Effort**: 26 hours (P0-P1 tasks: 13 hours)

---

## Recommendations

### 20. Critical Path

1. **Execute Tasks 0.1-0.3 First** (6 hours): Core navigation and routing updates
2. **Then Execute Tasks 0.4-0.6** (7 hours): Data and page updates
3. **Defer Tasks 0.7-0.10** (13 hours): Advanced features (subcategories, special templates)

### 21. Risk Mitigation

| Risk | Mitigation |
|:-----|:-----------|
| **Broken links** from old categories | Add comprehensive redirects in routes.tsx |
| **SEO loss** from category changes | Implement 301 redirects in WordPress .htaccess |
| **User confusion** from sudden change | Keep legacy routes active for 6 months with redirects |
| **Missing content** in new categories | Create placeholder articles for each new category |

---

## Next Steps

1. ✅ **Complete this audit** (Phase 0 foundation)
2. ⏳ **Execute Task 0.1**: Update `navigation.ts` with rooi rose categories
3. ⏳ **Execute Task 0.2**: Update `routes.tsx` with new routes
4. ⏳ **Execute Task 0.3**: Add legacy redirects
5. ⏳ **Execute Task 0.4**: Create new category mock data
6. ⏳ **Execute Task 0.5**: Update CategoryPage component
7. ⏳ **Execute Task 0.6**: Update Footer navigation

---

**Audit Complete**: 2026-03-11  
**Estimated Implementation**: 13-26 hours (depending on scope)  
**Status**: Ready to execute Phase 0 tasks
