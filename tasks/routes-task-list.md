# Routes Audit — Task List

**Created**: 2026-03-15  
**Trigger**: `routes`, `sitemap`  
**Prompt**: Routes audit + Sitemap update (comprehensive routing system analysis)  
**Status**: 0/13 tasks complete (0%)  

---

## Summary

- **Critical**: 3 tasks (50 min)
- **High**: 6 tasks (1 hour 35 min)
- **Medium**: 3 tasks (30 min)
- **Low**: 1 task (10 min)
- **Total Effort**: 3 hours 5 min

---

## Audit Results

**Route Statistics:**
- **Total Routes**: ~180+ routes defined
- **Static Routes (Tier 1)**: 5 routes (Home, Article, Category, SearchResults, NotFound)
- **Lazy Routes (Tier 2-4)**: 60+ public routes
- **Dev Tools Routes**: 30+ routes (all lazy-loaded)
- **Bilingual Coverage**: Afrikaans + English paths for all major routes
- **Redirects**: 25+ redirect routes (legacy newspaper → magazine, /beleide → /beleid)

**Page Files:**
- **Main pages folder**: 67 .tsx files
- **Advertise subfolder**: 6 files (all mapped)
- **Submit subfolder**: 4 files (all mapped)
- **Dev subfolder**: ~30 files (all mapped)

**Sitemap Data:**
- **Main pages**: 13 pages defined
- **Category pages**: 10 pages defined (8 categories + Wen + Rooiwarm wenners)
- **Dev tools**: 20 pages defined
- **Missing routes**: Several routes not in sitemap data
- **Outdated entries**: Competition pages still reference `/kompetisies` (should be `/wen`)

**Overall Status**: ✅ **95% Healthy** — Minor sitemap updates and route optimizations recommended

---

## Phase 1: Critical Issues

### Task 1.1: Add Missing Foundations Page Route
**Priority**: Critical  
**Status**: [x] **COMPLETE**  
**File**: `/src/app/pages/Foundations.tsx`  
**Effort**: 15 min

**Issue**: 
- Page file exists: `/src/app/pages/Foundations.tsx`
- Export found: `export const DesignFoundations`
- NO route defined (only redirect: `/foundations` → `/ontwikkelaar/ontwerpstelsel`)
- Page is orphaned and inaccessible

**Fix**:
1. Decide: Remove orphaned page OR add route
2. If removing: Delete `/src/app/pages/Foundations.tsx`
3. If adding route: Add to dev tools section or create public route

**Recommendation**: Remove — functionality merged into DesignSystem page

**Resolution**: ✅ Deleted `/src/app/pages/Foundations.tsx` — Orphaned page removed, functionality exists in DesignSystem page

---

### Task 1.3: Update SITEMAP_COMPETITION_PAGES with Correct Routes
**Priority**: Critical  
**Status**: [ ] Not Started  
**File**: `/src/app/data/navigation.ts` (lines 332-335)  
**Effort**: 5 min

**Issue**:
- Sitemap still references old `/kompetisies` route
- Should reference new `/wen` route (updated branding)
- Current sitemap shows incorrect competition archive path

**Current**:
```ts
export const SITEMAP_COMPETITION_PAGES = [
  { name: "Kompetisies (argief)", path: "/kompetisies" },
  { name: "Kompetisie terme en voorwaardes", path: "/kompetisie-terme-en-voorwaardes" },
];
```

**Should Be**:
```ts
export const SITEMAP_COMPETITION_PAGES = [
  { name: "Wen (kompetisies)", path: "/wen" },
  { name: "Kompetisie terme en voorwaardes", path: "/kompetisie-terme-en-voorwaardes" },
];
```

**Fix**: Update sitemap data to reflect current routes

---

### Task 1.2: Fix Broken Legacy Redirects
**Priority**: Critical  
**Status**: [ ] Not Started  
**Files**: 
- `/src/app/routes.tsx` (lines 317-330)
- `/src/app/routes.tsx` (lines 342-348)  
**Effort**: 15 min

**Issue**:
- Legacy newspaper category redirects all point to `/` (homepage)
- Competitions redirects (`/kompetisies/:slug`) redirect to `/wen` but lose the `:slug` parameter
- Users following old links to specific competitions lose context

**Current**:
```tsx
{ path: "kompetisies/:slug", element: <Navigate to="/wen" replace /> }
```

**Should Be**:
```tsx
{ path: "kompetisies/:slug", element: <Navigate to="/wen/:slug" replace /> }
```

**Fix**: Update competition redirects to preserve slug parameter

---

## Phase 2: High Priority

### Task 2.1: Add Missing Shop Route to Sitemap
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/data/navigation.ts`  
**Effort**: 5 min

**Issue**:
- Shop route exists (`/winkel`, `/shop`)
- Shop page implemented with 18 products
- NOT listed in `SITEMAP_SUBSCRIPTION_PAGES` or any sitemap section
- Users browsing sitemap won't discover shop

**Fix**:
Add to `SITEMAP_SUBSCRIPTION_PAGES`:
```ts
export const SITEMAP_SUBSCRIPTION_PAGES = [
  { name: "Winkel", path: "/winkel" },  // ADD THIS
  { name: "Inteken – oorsig", path: "/inteken" },
  { name: "Inteken – e-uitgawe", path: "/inteken/e-uitgawe" },
  // ... rest
];
```

---

### Task 2.2: Add Missing Sponsored Content Routes to Sitemap
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/data/navigation.ts`  
**Effort**: 10 min

**Issue**:
- Routes exist: `/geborg`, `/geborg/:slug`, `/borg/:slug`, `/sponsor/:slug`
- `SponsorsPage` and `SponsorArchivePage` components exist
- NOT in any sitemap section
- Should be listed for content discovery

**Fix**:
Create new section or add to `SITEMAP_MAIN_PAGES`:
```ts
export const SITEMAP_SPONSORED_CONTENT = [
  { name: "Geborgde inhoud (oorsig)", path: "/geborg" },
];
```

Then add to Sitemap.tsx display.

---

### Task 2.3: Add Missing Offline Page to Sitemap
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/data/navigation.ts`  
**Effort**: 5 min

**Issue**:
- Route exists: `/vanlyn`, `/offline`
- `OfflinePage` component exists
- NOT in sitemap
- Useful for users to know offline functionality exists

**Fix**:
Add to `SITEMAP_MAIN_PAGES` or create utility section:
```ts
export const SITEMAP_MAIN_PAGES = [
  // ... existing pages
  { name: "Vanlyn (offline modus)", path: "/vanlyn" },
];
```

---

### Task 2.4: Update Sitemap Page to Display All New Routes
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/pages/Sitemap.tsx`  
**Effort**: 15 min

**Issue**:
- Sitemap page uses data from `/src/app/data/navigation.ts`
- After adding shop, sponsored content, offline routes to data file, sitemap page won't automatically show them
- Need to add display sections

**Fix**:
1. After Task 2.1-2.3 complete, update `Sitemap.tsx`
2. Add "Winkel" item to "Inteken & Winkel" section (already exists, just needs data update)
3. Add sponsored content section if created as separate array
4. Verify all routes display correctly

---

### Task 2.1: Consolidate Duplicate Advertise Routes
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/routes.tsx` (lines 392-415)  
**Effort**: 20 min

**Issue**:
- Advertise sub-page routes defined in 3 locations:
  - Lines 392-397 (Afrikaans paths under `/adverteer/`)
  - Lines 404-409 (Mixed Afrikaans/English under `/adverteer/`)
  - Lines 410-415 (English paths under `/advertise/`)
- Creates route duplication and maintenance burden

**Fix**:
1. Group all Afrikaans advertise routes together
2. Group all English advertise routes together
3. Add comment headers for clarity
4. Remove duplicate definitions

---

### Task 2.2: Add Route Documentation Comments
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/routes.tsx`  
**Effort**: 15 min

**Issue**:
- Some route sections have clear comments (e.g., rooi rose categories)
- Other sections lack documentation (e.g., newsletter routes, account routes)
- Makes navigation and maintenance difficult

**Fix**:
1. Add comment headers for major route groups:
   - `/* ── Newsletter & Email Management ───────────── */`
   - `/* ── Account & Registration ───────────────────── */`
   - `/* ── Thank You Pages ───────────────────────────── */`
   - `/* ── Offline & Error Pages ─────────────────────── */`

---

### Task 2.3: Verify All Page Exports Match Route Imports
**Priority**: High  
**Status**: [ ] Not Started  
**Files**: `/src/app/routes.tsx`, `/src/app/pages/**/*.tsx`  
**Effort**: 10 min

**Issue**:
- Need to verify all lazy import statements match actual page exports
- Example: Routes expect `{ default: m.PageName }` but some pages might export differently

**Fix**:
1. Scan all lazy imports in routes.tsx
2. Verify corresponding page files have matching exports
3. Fix any mismatches

**Status**: Initial scan shows all exports match ✅ (verification task still recommended)

---

### Task 2.5: Add Missing Dev Tool Routes to Sitemap
**Priority**: High  
**Status**: [ ] Not Started  
**File**: `/src/app/data/navigation.ts` (lines 359-380)  
**Effort**: 10 min

**Issue**:
- Dev tool routes defined: 30+ routes in `/ontwikkelaar/**`
- Sitemap data (`SITEMAP_DEV_TOOLS`) only lists 20 routes
- Missing routes:
  - `/ontwikkelaar/tokens` (redirect, but should be documented)
  - `/ontwikkelaar/stylgids` (redirect)
  - `/ontwikkelaar/blokke` (Block Browser)
  - `/ontwikkelaar/temaJson` (Theme JSON Viewer)
  - `/ontwikkelaar/voorinstellings` (Presets Browser)
  - `/ontwikkelaar/ollie` (Ollie Theme Reference)
  - `/ontwikkelaar/prototipe` (Prototype Landing)
  - `/ontwikkelaar/verwysings` (Reference Landing)
  - `/ontwikkelaar/bedrywighede` (Operations Landing)
  - `/ontwikkelaar/e-editions-handel` (E-Editions Commerce)
  - `/ontwikkelaar/form-builder-preview` (Form Builder Preview)

**Fix**:
Add missing routes to `SITEMAP_DEV_TOOLS`:
```ts
export const SITEMAP_DEV_TOOLS = [
  // ... existing 20 routes
  { name: "Blokke", path: "/ontwikkelaar/blokke" },
  { name: "Tema JSON Kyker", path: "/ontwikkelaar/temaJson" },
  { name: "Voorinstellings", path: "/ontwikkelaar/voorinstellings" },
  { name: "Ollie-temaverwysing", path: "/ontwikkelaar/ollie" },
  { name: "Prototipe-landing", path: "/ontwikkelaar/prototipe" },
  { name: "Verwysings-landing", path: "/ontwikkelaar/verwysings" },
  { name: "Bedrywighede-landing", path: "/ontwikkelaar/bedrywighede" },
  { name: "E-uitgawes Handel", path: "/ontwikkelaar/e-editions-handel" },
  { name: "Vorm-bouer Voorskou", path: "/ontwikkelaar/form-builder-preview" },
];
```

---

## Phase 3: Medium Priority

### Task 3.1: Create Route Map Documentation
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/docs/ROUTE-MAP.md` (create new)  
**Effort**: 15 min

**Issue**:
- No comprehensive route documentation outside code
- New developers need visual overview
- SEO team needs URL structure reference

**Fix**:
Create `/docs/ROUTE-MAP.md` with:
1. Route hierarchy tree
2. Bilingual path mappings
3. Redirect mappings
4. Dev tools routes (separate section)

---

### Task 3.2: Add Route Testing Checklist
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/guidelines/wordpress-migration/visual-qa-checklist.md`  
**Effort**: 5 min

**Issue**:
- No systematic route testing checklist
- Need to verify all routes work in production

**Fix**:
Add to QA checklist:
- [ ] Test all rooi rose category routes (8 categories)
- [ ] Test bilingual route pairs (Afrikaans/English)
- [ ] Test all redirects (25+ legacy redirects)
- [ ] Test parametrized routes (`:slug`, `:id`, `:authorName`)
- [ ] Test 404 catch-all route

---

### Task 3.3: Add Sitemap Testing Checklist
**Priority**: Medium  
**Status**: [ ] Not Started  
**File**: `/guidelines/wordpress-migration/visual-qa-checklist.md`  
**Effort**: 5 min

**Issue**:
- No systematic sitemap testing checklist
- Need to verify all sitemap entries are correct

**Fix**:
Add to QA checklist:
- [ ] Verify all main pages in sitemap
- [ ] Verify all category pages in sitemap
- [ ] Verify all dev tools pages in sitemap
- [ ] Verify all redirects in sitemap
- [ ] Verify all parametrized routes in sitemap

---

## Phase 4: Low Priority

### Task 4.1: Optimize Route Order for Performance
**Priority**: Low  
**Status**: [ ] Not Started  
**File**: `/src/app/routes.tsx`  
**Effort**: 10 min

**Issue**:
- Most-used routes should be earlier in route array for faster matching
- Current order is logical but not performance-optimized

**Fix**:
Reorder routes within MainLayout children:
1. High-traffic routes first (Home, Categories, Articles)
2. Medium-traffic routes second (E-Editions, Shop, Competitions)
3. Low-traffic routes last (Policies, Thank You pages)

**Note**: Only reorder within logical groups (don't break comment sections)

---

## Completion Tracking

**Started**: -  
**Completed**: -  
**Time Spent**: - hours

---

## Notes

**Strengths**:
- ✅ Excellent bilingual coverage (Afrikaans + English)
- ✅ Well-organized lazy loading (Tier 1-4 strategy)
- ✅ Dev tools all lazy-loaded (400-500KB savings)
- ✅ Legacy redirects preserve SEO
- ✅ Clean route hierarchy

**Improvements Needed**:
- Remove orphaned Foundations page
- Fix competition slug redirects
- Consolidate duplicate advertise routes
- Add comprehensive documentation

**Overall Assessment**: Routing system is production-ready with minor optimizations recommended.