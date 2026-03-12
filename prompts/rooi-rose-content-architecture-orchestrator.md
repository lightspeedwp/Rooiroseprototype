# Rooi Rose Content Architecture Orchestrator

**Priority**: P0 — Content Foundation  
**Status**: READY TO EXECUTE  
**Estimated Effort**: 12-15 hours (30 tasks)  
**Prerequisites**: Phase 1 (Token Foundation) complete

---

## Executive Summary

Audit the current Die Papier prototype route structure and rebuild it to match the live **rooi rose WordPress editorial architecture**. This orchestrator ensures the React prototype aligns with the live magazine's content categories, navigation structure, and page templates before visual redesign work begins.

**Value**: Prevents building pages that don't match live categories, eliminates navigation mismatches, identifies template gaps, and provides clean migration path to WordPress.

**Scope**: 
- 11 main navigation categories
- 44 subcategories across 8 editorial sections
- 6 core page templates (Home, Category, Article, Recipe, Competition, Awards)
- Header/footer navigation redesign
- Route → WordPress URL mapping

---

## Part 1: Current State Audit (P0)

**Goal**: Document existing prototype structure, identify Die Papier dependencies  
**Effort**: 4-5 hours (10 tasks)

### 1.1 Route Structure Audit (3 tasks)

#### Task 1.1.1: Audit `/src/app/routes.tsx`

**Deliverable**: `/reports/route-audit-die-papier.md`

**Analysis Required**:
1. Document all existing routes (count: ~60+)
2. Categorize routes by type:
   - Homepage/landing pages
   - Category archives
   - Single post/article pages
   - Special pages (contact, competitions, etc.)
   - E-commerce (WooCommerce)
   - Dev tools (protected)
3. Identify Die Papier-specific routes to deprecate:
   - News sections (Nuus, Sport, Sake, etc.)
   - Obituaries (Gedenkings)
   - Classifieds (Kennisgewings)
   - Events/Calendar
   - English newspaper routes

**Example Output**:
```markdown
## Die Papier Routes to Deprecate

| Route | Type | Reason | rooi rose Replacement |
|:------|:-----|:-------|:----------------------|
| `/nuus` | Category | Newspaper news section | Remove (lifestyle magazine) |
| `/sport` | Category | Sports coverage | Remove |
| `/gedenkings` | Special | Obituaries | Remove |
| `/kennisgewings` | Special | Classifieds | Remove |
| `/kos/resepte` | Category | Recipes | Map to `/kos/` + subcategories |
```

---

#### Task 1.1.2: Audit Navigation Structures

**Files to Audit**:
- `/src/app/components/layout/Header.tsx` — Desktop navigation
- `/src/app/components/layout/MobileNav.tsx` — Mobile navigation
- `/src/app/components/layout/Footer.tsx` — Footer links
- `/src/app/components/common/Breadcrumbs.tsx` — Breadcrumb trails

**Deliverable**: `/reports/navigation-audit-die-papier.md`

**Analysis Required**:
1. Document current navigation menu items
2. Map Die Papier categories to rooi rose categories
3. Identify navigation patterns (dropdown, mega menu, sidebar)
4. Document mobile navigation behavior
5. Map footer structure

**Example Output**:
```markdown
## Die Papier Header Navigation

**Current**:
- Tuis
- Nuus
- Sport
- Sake
- Skole
- Leefstyl
- Dink
- Multimedia
- Kos
- Kontak

**rooi rose Replacement**:
- Kos
- Mode
- Skoonheid
- Gesondheid
- Bekendes
- Leefstyl
- Jou lewe
- Ontspanning
- Rooiwarm wenners
- Wen
- Kontak
```

---

#### Task 1.1.3: Audit Page Template Inventory

**Deliverable**: `/reports/template-inventory-die-papier.md`

**Analysis Required**:
1. Identify existing page templates in `/src/app/pages/`
2. Document template features and components
3. Identify reusable components vs. page-specific code
4. Map templates to content types

**Template Inventory**:

| Template | Location | Features | rooi rose Mapping |
|:---------|:---------|:---------|:------------------|
| `Home.tsx` | `/pages/` | Hero slider, news grid, featured stories | **Keep** — Redesign with editorial layout |
| `Category.tsx` | `/pages/category/[slug].tsx` | Article list, sidebar, filters | **Keep** — Update for magazine grid |
| `SinglePost.tsx` | `/pages/post/[slug].tsx` | Article header, body, related posts | **Keep** — Add editorial features |
| `Contact.tsx` | `/pages/contact.tsx` | Contact form, info | **Keep** |
| `NewsArchive.tsx` | `/pages/nuus/` | News-specific layout | **Deprecate** |
| `ObituariesPage.tsx` | `/pages/gedenkings/` | Obituary listings | **Deprecate** |

---

### 1.2 Content Type Gap Analysis (4 tasks)

#### Task 1.2.1: Identify Missing Recipe Template

**Current State**: Recipes may be using generic article template  
**rooi rose Requirement**: Dedicated recipe template with:
- Ingredients block (structured list)
- Method block (numbered steps)
- Prep/cook time metadata
- Servings info
- Nutrition facts (optional)
- Print-friendly version
- Image gallery (step-by-step photos)

**Gap**: Need to create `/src/app/pages/recipe/[slug].tsx` with recipe-specific components.

---

#### Task 1.2.2: Identify Missing Competition Template

**Current State**: Competitions may be using generic page template  
**rooi rose Requirement**: Dedicated competition template with:
- Prize showcase block
- "How to Enter" section
- Entry form integration (Gravity Forms)
- Terms & Conditions summary + link
- Winner announcement section
- Social sharing for viral entry

**Gap**: Need to create `/src/app/pages/wen/[slug].tsx` with competition-specific components.

---

#### Task 1.2.3: Identify Missing Awards Hub Template

**Current State**: No awards hub exists in Die Papier  
**rooi rose Requirement**: "Rooiwarm wenners" awards hub with:
- Category winner grids
- Product spotlight cards
- Judge quotes
- Award criteria
- Previous winners archive
- Filtering by category/year

**Gap**: Need to create `/src/app/pages/rooiwarm-wenners/` hub + `/src/app/pages/rooiwarm-wenners/[category].tsx` category pages.

---

#### Task 1.2.4: Identify Missing Podcast/Video Pages

**Current State**: Multimedia section exists but may lack dedicated templates  
**rooi rose Requirement**: Podcast/video pages under "Ontspanning" with:
- Podcast series page (RRRADIO)
- Episode detail page with audio player
- Video archive page
- Video detail page with video embed
- Event calendar page
- Blog author pages

**Gap**: Need to create podcast/video template architecture.

---

### 1.3 WordPress URL Mapping (3 tasks)

#### Task 1.3.1: Document Live WordPress URL Structure

**Research Method**: Review content architecture document + sitemap  
**Deliverable**: `/reports/wordpress-url-mapping.md`

**Live rooi rose URLs** (examples from content architecture):

**Main Categories**:
```
/kos/
/mode/
/skoonheid/
/gesondheid/
/bekendes/
/leefstyl/
/jou-lewe/
/ontspanning/
```

**Subcategories** (under `/kos/`):
```
/kos/maklik-vinnig/
/kos/aandetes-vir-die-week/
/kos/somerkos/
/kos/winterkos/
/kos/laekoolhidraat/
/kos/vegetaries/
/kos/gebak/
/kos/nagereg/
/kos/drankies/
/kos/jy-kan/
/kos/nuut-en-nou/
/kos/recipes-in-english/
```

**Special Pages**:
```
/rooiwarm-wenners/
/wen/
/kontak-ons-2/
/lees/ (book club)
/rrradio/ (podcast)
```

---

#### Task 1.3.2: Create Route → WordPress URL Mapping Table

**Deliverable**: Excel/Markdown table for migration reference

**Example**:

| React Route | WordPress URL | Category Type | Subcategory Of | Notes |
|:------------|:--------------|:--------------|:---------------|:------|
| `/kos` | `/kos/` | Main Category | — | Food main landing |
| `/kos/maklik-vinnig` | `/kos/maklik-vinnig/` | Subcategory | Kos | Quick & easy recipes |
| `/kos/resepte/[slug]` | `/kos/[subcategory]/[slug]/` | Recipe Detail | Kos | Individual recipe |
| `/mode` | `/mode/` | Main Category | — | Fashion main landing |
| `/mode/trends` | `/mode/nuut-en-nou-mode/` | Subcategory | Mode | Fashion trends (mapped from "nuut-en-nou") |
| `/wen` | `/wen/` | Special Page | — | Competitions hub |
| `/wen/[slug]` | `/wen/[slug]/` | Competition Detail | Wen | Individual competition |
| `/rooiwarm-wenners` | `/rooiwarm-wenners/` | Awards Hub | — | Awards landing |

---

#### Task 1.3.3: Identify Redirect Requirements

**Purpose**: Map old Die Papier URLs to rooi rose equivalents for SEO continuity

**Example Redirects**:

| Old Die Papier URL | New rooi rose URL | Redirect Type | Reason |
|:-------------------|:------------------|:--------------|:-------|
| `/nuus/` | `/jou-lewe/in-die-nuus/` | 301 Permanent | News now under "Jou lewe" |
| `/sport/` | _404_ | 410 Gone | Sports coverage discontinued |
| `/leefstyl/resepte/` | `/kos/` | 301 Permanent | Recipes moved to dedicated food section |
| `/gedenkings/` | _Remove_ | 410 Gone | Obituaries discontinued |

---

## Part 2: rooi rose Content Architecture Implementation (P0)

**Goal**: Build new navigation, routes, and template system aligned with live WordPress  
**Effort**: 8-10 hours (20 tasks)

### 2.1 Navigation Structure Implementation (5 tasks)

#### Task 2.1.1: Define Main Navigation Data Structure

**Create**: `/src/app/data/navigation.ts`

```typescript
export interface NavItem {
  label: string;
  slug: string;
  href: string;
  subcategories?: NavSubcategory[];
  featured?: boolean; // "Wen" highlighted in red
}

export interface NavSubcategory {
  label: string;
  slug: string;
  href: string;
  count?: number; // Article count (optional)
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Kos',
    slug: 'kos',
    href: '/kos',
    subcategories: [
      { label: 'Maklik & vinnig', slug: 'maklik-vinnig', href: '/kos/maklik-vinnig' },
      { label: 'Aandetes vir die week', slug: 'aandetes-vir-die-week', href: '/kos/aandetes-vir-die-week' },
      { label: 'Somerkos', slug: 'somerkos', href: '/kos/somerkos' },
      { label: 'Winterkos', slug: 'winterkos', href: '/kos/winterkos' },
      { label: 'Laekoolhidraat', slug: 'laekoolhidraat', href: '/kos/laekoolhidraat' },
      { label: 'Vegetaries', slug: 'vegetaries', href: '/kos/vegetaries' },
      { label: 'Gebak', slug: 'gebak', href: '/kos/gebak' },
      { label: 'Nagereg', slug: 'nagereg', href: '/kos/nagereg' },
      { label: 'Drankies', slug: 'drankies', href: '/kos/drankies' },
      { label: 'Jy kan', slug: 'jy-kan', href: '/kos/jy-kan' },
      { label: 'Nuut & Nou', slug: 'nuut-en-nou', href: '/kos/nuut-en-nou' },
      { label: 'Recipes in English', slug: 'recipes-in-english', href: '/kos/recipes-in-english' },
    ],
  },
  {
    label: 'Mode',
    slug: 'mode',
    href: '/mode',
    subcategories: [
      { label: 'Dra dit so', slug: 'dra-dit-so', href: '/mode/dra-dit-so' },
      { label: 'Wenke', slug: 'wenke', href: '/mode/wenke' },
      { label: 'Trends', slug: 'nuut-en-nou-mode', href: '/mode/nuut-en-nou-mode' },
    ],
  },
  {
    label: 'Skoonheid',
    slug: 'skoonheid',
    href: '/skoonheid',
    subcategories: [
      { label: 'Hare', slug: 'hare', href: '/skoonheid/hare' },
      { label: 'Velsorg', slug: 'velsorg', href: '/skoonheid/velsorg' },
      { label: 'Grimering', slug: 'grimering', href: '/skoonheid/grimering' },
      { label: 'Naels', slug: 'naels', href: '/skoonheid/naels' },
      { label: 'Wenke', slug: 'wenke', href: '/skoonheid/wenke' },
    ],
  },
  {
    label: 'Gesondheid',
    slug: 'gesondheid',
    href: '/gesondheid',
    subcategories: [
      { label: 'Leef gesond', slug: 'leef-gesond', href: '/gesondheid/leef-gesond' },
      { label: 'Dieet', slug: 'dieet', href: '/gesondheid/dieet' },
      { label: 'Fiksheid', slug: 'fiksheid', href: '/gesondheid/fiksheid' },
    ],
  },
  {
    label: 'Bekendes',
    slug: 'bekendes',
    href: '/bekendes',
    subcategories: [
      { label: 'Ons mense', slug: 'ons-mense', href: '/bekendes/ons-mense' },
    ],
  },
  {
    label: 'Leefstyl',
    slug: 'leefstyl',
    href: '/leefstyl',
    subcategories: [
      { label: 'Dekor', slug: 'dekor', href: '/leefstyl/dekor' },
      { label: 'Handwerk', slug: 'handwerk', href: '/leefstyl/handwerk' },
      { label: 'Tuinmaak', slug: 'tuinmaak', href: '/leefstyl/tuinmaak' },
      { label: 'Doen dit self', slug: 'doen-dit-self', href: '/leefstyl/doen-dit-self' },
    ],
  },
  {
    label: 'Jou lewe',
    slug: 'jou-lewe',
    href: '/jou-lewe',
    subcategories: [
      { label: 'Verhoudings', slug: 'verhoudings', href: '/jou-lewe/verhoudings' },
      { label: 'Ouerskap', slug: 'ouerskap', href: '/jou-lewe/ouerskap' },
      { label: 'Inspirasie', slug: 'inspirasie', href: '/jou-lewe/inspirasie' },
      { label: 'In die nuus', slug: 'in-die-nuus', href: '/jou-lewe/in-die-nuus' },
      { label: 'Geld & Sukses', slug: 'geld-sukses', href: '/jou-lewe/geld-sukses' },
      { label: 'Persoonlike groei', slug: 'persoonlike-groei', href: '/jou-lewe/persoonlike-groei' },
    ],
  },
  {
    label: 'Ontspanning',
    slug: 'ontspanning',
    href: '/ontspanning',
    subcategories: [
      { label: 'Reis', slug: 'reis', href: '/ontspanning/reis' },
      { label: 'Blogs', slug: 'blogs', href: '/ontspanning/blogs' },
      { label: 'Leestyd', slug: 'lees', href: '/lees' }, // Special URL
      { label: 'Video', slug: 'video', href: '/ontspanning/video' },
      { label: 'Kalender', slug: 'kalender', href: '/ontspanning/kalender' },
      { label: 'RRRADIO', slug: 'rrradio', href: '/rrradio' }, // Special URL
    ],
  },
  {
    label: 'Rooiwarm wenners',
    slug: 'rooiwarm-wenners',
    href: '/rooiwarm-wenners',
    subcategories: [], // Awards hub, no subcategories
  },
  {
    label: 'Wen',
    slug: 'wen',
    href: '/wen',
    featured: true, // Red highlight in navigation
    subcategories: [], // Competitions, no subcategories
  },
  {
    label: 'Kontak',
    slug: 'kontak',
    href: '/kontak-ons-2', // Matches live WordPress URL
    subcategories: [],
  },
];
```

---

#### Task 2.1.2: Create Mega Menu Component

**Create**: `/src/app/components/navigation/MegaMenu.tsx`

**Features**:
- Large dropdown on hover (desktop)
- Left column: Featured story with image
- Right column: Subcategory grid (2-3 columns)
- Bottom row: Trending articles

**Implementation**:
```typescript
interface MegaMenuProps {
  category: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ category, isOpen, onClose }: MegaMenuProps) {
  if (!category.subcategories || category.subcategories.length === 0) {
    return null;
  }

  return (
    <div 
      className={`mega-menu ${isOpen ? 'open' : ''}`}
      onMouseLeave={onClose}
    >
      <div className="mega-menu__container">
        {/* Left: Featured Story */}
        <div className="mega-menu__featured">
          <FeaturedStoryCard category={category.slug} />
        </div>
        
        {/* Right: Subcategory Grid */}
        <div className="mega-menu__subcategories">
          <h3 className="mega-menu__title">{category.label}</h3>
          <ul className="mega-menu__grid">
            {category.subcategories.map((sub) => (
              <li key={sub.slug}>
                <Link href={sub.href} className="mega-menu__link">
                  {sub.label}
                  {sub.count && <span className="count">({sub.count})</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Bottom: Trending */}
        <div className="mega-menu__trending">
          <h4>Gewild nou</h4>
          <TrendingArticlesList category={category.slug} limit={3} />
        </div>
      </div>
    </div>
  );
}
```

---

#### Task 2.1.3: Update Header Navigation

**Update**: `/src/app/components/layout/Header.tsx`

**Changes**:
1. Import `MAIN_NAVIGATION` from `/src/app/data/navigation.ts`
2. Replace Die Papier menu items with rooi rose navigation
3. Add mega menu hover behavior
4. Highlight "Wen" in red (`--custom-primary`)
5. Add search icon, subscribe button, account icon

**Header Layout**:
```typescript
<header className="site-header">
  {/* Top Row */}
  <div className="header__top">
    <Link href="/" className="header__logo">
      <img src="/logo/rooi-rose.svg" alt="rooi rose" />
    </Link>
    
    <div className="header__actions">
      <button className="header__search" aria-label="Soek">
        <SearchIcon />
      </button>
      <Link href="/inteken" className="btn btn--primary">
        Inteken
      </Link>
      <Link href="/my-account" className="header__account" aria-label="My rekening">
        <UserIcon />
      </Link>
    </div>
  </div>
  
  {/* Main Navigation */}
  <nav className="header__nav">
    <ul className="nav__list">
      {MAIN_NAVIGATION.map((item) => (
        <li 
          key={item.slug}
          className={`nav__item ${item.featured ? 'nav__item--featured' : ''}`}
          onMouseEnter={() => handleMenuOpen(item.slug)}
        >
          <Link href={item.href} className="nav__link">
            {item.label}
          </Link>
          {item.subcategories && item.subcategories.length > 0 && (
            <MegaMenu 
              category={item} 
              isOpen={openMenu === item.slug}
              onClose={handleMenuClose}
            />
          )}
        </li>
      ))}
    </ul>
  </nav>
</header>
```

**CSS Styling**:
```css
.nav__item--featured .nav__link {
  color: var(--custom-primary);
  font-weight: 600;
}

.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 1280px;
  background: var(--base);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease, visibility 300ms ease;
}

.mega-menu.open {
  opacity: 1;
  visibility: visible;
}

.mega-menu__container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-large);
  padding: var(--space-large);
}

.mega-menu__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-small);
}
```

---

#### Task 2.1.4: Update Footer Navigation

**Update**: `/src/app/components/layout/Footer.tsx`

**New 4-Column Footer Structure**:

```typescript
<footer className="site-footer">
  <div className="footer__container">
    {/* Column 1: Categories */}
    <div className="footer__column">
      <h3 className="footer__heading">Kategorieë</h3>
      <ul className="footer__links">
        <li><Link href="/kos">Kos</Link></li>
        <li><Link href="/mode">Mode</Link></li>
        <li><Link href="/skoonheid">Skoonheid</Link></li>
        <li><Link href="/gesondheid">Gesondheid</Link></li>
        <li><Link href="/bekendes">Bekendes</Link></li>
        <li><Link href="/leefstyl">Leefstyl</Link></li>
        <li><Link href="/jou-lewe">Jou lewe</Link></li>
        <li><Link href="/ontspanning">Ontspanning</Link></li>
      </ul>
    </div>
    
    {/* Column 2: About */}
    <div className="footer__column">
      <h3 className="footer__heading">Meer oor ons</h3>
      <ul className="footer__links">
        <li><Link href="/oor-ons">Oor rooi rose</Link></li>
        <li><Link href="/kontak-ons-2">Kontak ons</Link></li>
        <li><Link href="/adverteer">Adverteer</Link></li>
        <li><Link href="/loopbane">Loopbane</Link></li>
      </ul>
    </div>
    
    {/* Column 3: Participate */}
    <div className="footer__column">
      <h3 className="footer__heading">Neem deel</h3>
      <ul className="footer__links">
        <li><Link href="/wen">Wen</Link></li>
        <li><Link href="/rooiwarm-wenners">Rooiwarm wenners</Link></li>
        <li><Link href="/inteken">Inteken</Link></li>
        <li><Link href="/kook-nuusbrief">Nuusbrief</Link></li>
        <li><Link href="/lesersforum">Lesersforum</Link></li>
      </ul>
    </div>
    
    {/* Column 4: Legal */}
    <div className="footer__column">
      <h3 className="footer__heading">Regsaangeleenthede</h3>
      <ul className="footer__links">
        <li><Link href="/voorwaardes-en-bepalings">Voorwaardes</Link></li>
        <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
        <li><Link href="/privaatheidsbeleid">Privaatheidsbeleid</Link></li>
        <li><Link href="/facebook-privacy-policy">Facebook Privacy</Link></li>
        <li><Link href="/cookies">Cookies</Link></li>
      </ul>
    </div>
  </div>
  
  {/* Bottom Strip */}
  <div className="footer__bottom">
    <p>© 2026 rooi rose Magazine | Novus Media</p>
    <SocialLinks />
  </div>
</footer>
```

---

#### Task 2.1.5: Update Mobile Navigation

**Update**: `/src/app/components/layout/MobileNav.tsx`

**Changes**:
1. Replace Die Papier menu with rooi rose `MAIN_NAVIGATION`
2. Add accordion behavior for subcategories
3. Highlight "Wen" in red
4. Add search, subscribe, account at top

---

### 2.2 Route Structure Refactor (6 tasks)

#### Task 2.2.1: Update `/src/app/routes.tsx` — Main Categories

**Add routes for 8 main categories**:

```typescript
import { createBrowserRouter } from "react-router";

// Category Pages
import KosPage from "./pages/categories/Kos";
import ModePage from "./pages/categories/Mode";
import SkoonheidPage from "./pages/categories/Skoonheid";
import GesondheidPage from "./pages/categories/Gesondheid";
import BekendesPage from "./pages/categories/Bekendes";
import LeefstylPage from "./pages/categories/Leefstyl";
import JouLewePage from "./pages/categories/JouLewe";
import OntspanningPage from "./pages/categories/Ontspanning";

// Special Pages
import RooiwarmWennersPage from "./pages/special/RooiwarmWenners";
import WenPage from "./pages/special/Wen";
import KontakPage from "./pages/special/Kontak";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // Homepage
      { index: true, Component: Home },
      
      // Main Category Routes
      { path: "kos", Component: KosPage },
      { path: "mode", Component: ModePage },
      { path: "skoonheid", Component: SkoonheidPage },
      { path: "gesondheid", Component: GesondheidPage },
      { path: "bekendes", Component: BekendesPage },
      { path: "leefstyl", Component: LeefstylPage },
      { path: "jou-lewe", Component: JouLewePage },
      { path: "ontspanning", Component: OntspanningPage },
      
      // Special Pages
      { path: "rooiwarm-wenners", Component: RooiwarmWennersPage },
      { path: "wen", Component: WenPage },
      { path: "kontak-ons-2", Component: KontakPage },
      
      // ... rest of routes
    ],
  },
]);
```

---

#### Task 2.2.2: Add Subcategory Routes (44 routes)

**Example for Kos subcategories**:

```typescript
// Kos Subcategories
{ path: "kos/maklik-vinnig", Component: lazy(() => import("./pages/categories/kos/MaklikVinnig")) },
{ path: "kos/aandetes-vir-die-week", Component: lazy(() => import("./pages/categories/kos/AandetesVirDieWeek")) },
{ path: "kos/somerkos", Component: lazy(() => import("./pages/categories/kos/Somerkos")) },
{ path: "kos/winterkos", Component: lazy(() => import("./pages/categories/kos/Winterkos")) },
{ path: "kos/laekoolhidraat", Component: lazy(() => import("./pages/categories/kos/Laekoolhidraat")) },
{ path: "kos/vegetaries", Component: lazy(() => import("./pages/categories/kos/Vegetaries")) },
{ path: "kos/gebak", Component: lazy(() => import("./pages/categories/kos/Gebak")) },
{ path: "kos/nagereg", Component: lazy(() => import("./pages/categories/kos/Nagereg")) },
{ path: "kos/drankies", Component: lazy(() => import("./pages/categories/kos/Drankies")) },
{ path: "kos/jy-kan", Component: lazy(() => import("./pages/categories/kos/JyKan")) },
{ path: "kos/nuut-en-nou", Component: lazy(() => import("./pages/categories/kos/NuutEnNou")) },
{ path: "kos/recipes-in-english", Component: lazy(() => import("./pages/categories/kos/RecipesInEnglish")) },
```

**Repeat for all 8 categories** (Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning).

---

#### Task 2.2.3: Add Article Detail Routes

**Article types with different templates**:

```typescript
// Recipe Detail (under /kos/)
{ path: "kos/:subcategory/:slug", Component: RecipeDetailPage },

// Standard Article (all other categories)
{ path: ":category/:slug", Component: ArticleDetailPage },
{ path: ":category/:subcategory/:slug", Component: ArticleDetailPage },

// Competition Detail (under /wen/)
{ path: "wen/:slug", Component: CompetitionDetailPage },

// Awards Detail (under /rooiwarm-wenners/)
{ path: "rooiwarm-wenners/:category", Component: AwardsCategory Page },
```

---

#### Task 2.2.4: Add Special Page Routes

**Podcast, Video, Book Club, etc.**:

```typescript
// Podcast Pages
{ path: "rrradio", Component: lazy(() => import("./pages/special/RRRadio")) },
{ path: "rrradio/:episodeSlug", Component: lazy(() => import("./pages/special/RRRadioEpisode")) },

// Book Club
{ path: "lees", Component: lazy(() => import("./pages/special/Lees")) },
{ path: "lees/:slug", Component: lazy(() => import("./pages/special/LeesArticle")) },

// Video Archive
{ path: "ontspanning/video", Component: lazy(() => import("./pages/special/VideoArchive")) },
{ path: "ontspanning/video/:slug", Component: lazy(() => import("./pages/special/VideoDetail")) },

// Event Calendar
{ path: "ontspanning/kalender", Component: lazy(() => import("./pages/special/Kalender")) },

// Blog Author Pages
{ path: "ontspanning/blogs/:authorSlug", Component: lazy(() => import("./pages/special/BlogAuthor")) },
```

---

#### Task 2.2.5: Add Tag & Author Archive Routes

```typescript
// Tag Archives
{ path: "tag/:tagSlug", Component: lazy(() => import("./pages/archives/TagArchive")) },

// Author Pages
{ path: "author/:authorSlug", Component: lazy(() => import("./pages/archives/AuthorArchive")) },

// Series Pages (Boer Soek n Vrou, Suidooster, etc.)
{ path: "reeks/:seriesSlug", Component: lazy(() => import("./pages/archives/SeriesArchive")) },
```

---

#### Task 2.2.6: Deprecate Die Papier Routes

**Remove or redirect old routes**:

```typescript
// Deprecated Die Papier Routes (301 Redirects)
{ path: "nuus", loader: () => redirect("/jou-lewe/in-die-nuus") },
{ path: "nuus/:slug", loader: () => redirect("/jou-lewe/in-die-nuus") },
{ path: "sport", loader: () => redirect("/") }, // 404 or homepage
{ path: "gedenkings", loader: () => redirect("/") }, // 404
{ path: "kennisgewings", loader: () => redirect("/") }, // 404

// Keep shop/WooCommerce routes (unchanged)
{ path: "winkel", Component: Shop },
{ path: "mandjie", Component: Cart },
{ path: "afhandel", Component: Checkout },
{ path: "my-account", Component: MyAccount },
```

---

### 2.3 Page Template System (9 tasks)

#### Task 2.3.1: Create Home Template

**Create**: `/src/app/pages/Home.tsx`

**Features**:
- Hero slider (3-5 featured stories)
- Category row: Kos (3-column grid)
- Pull quote section
- Category row: Mode (3-column grid)
- Alternating background: Skoonheid (blush background)
- Competition highlight CTA
- Category row: Leefstyl (3-column grid)
- Newsletter signup block

---

#### Task 2.3.2: Create Category Template

**Create**: `/src/app/pages/templates/CategoryTemplate.tsx`

**Reusable template for all 8 main categories**:

```typescript
interface CategoryTemplateProps {
  category: string;
  title: string;
  description: string;
  subcategories: NavSubcategory[];
  articles: Article[];
  featuredArticle?: Article;
}

export function CategoryTemplate({ 
  category, 
  title, 
  description, 
  subcategories, 
  articles,
  featuredArticle 
}: CategoryTemplateProps) {
  return (
    <div className="category-page">
      {/* Category Hero */}
      {featuredArticle && (
        <CategoryHero article={featuredArticle} category={category} />
      )}
      
      {/* Category Header */}
      <CategoryHeader 
        title={title}
        description={description}
        subcategories={subcategories}
      />
      
      {/* Article Grid */}
      <ArticleGrid 
        articles={articles}
        layout="masonry" // or "grid" or "list"
      />
      
      {/* Sidebar (optional) */}
      <aside className="category-sidebar">
        <TrendingArticles category={category} />
        <NewsletterSignup />
        <CompetitionCTA />
      </aside>
    </div>
  );
}
```

---

#### Task 2.3.3: Create Article Template (Long-form Editorial)

**Create**: `/src/app/pages/templates/ArticleTemplate.tsx`

**Features**:
- Hero image (3:2 aspect)
- Category label
- Headline (Playfair Display SC, 48px)
- Standfirst/deck (Karla, 18px)
- Author byline + meta (date, read time)
- Share buttons
- Article body (Karla, 18px, 1.6 line-height)
- Pull quotes (every 800-1000 words)
- Inline images with captions
- Scrollytelling sections (optional)
- Related articles (3-column grid)
- Competition CTA block
- Author bio

---

#### Task 2.3.4: Create Recipe Template

**Create**: `/src/app/pages/templates/RecipeTemplate.tsx`

**Features**:
- Hero image (3:2 aspect, mouth-watering food photography)
- Recipe title (Playfair Display SC)
- Prep time, cook time, servings metadata
- Ingredients block (structured list with checkboxes)
- Method block (numbered steps with optional step images)
- Tips section (optional)
- Nutrition info (optional)
- Print button (print-friendly CSS)
- Related recipes (3-column grid)
- Competition CTA

**Example Structure**:
```typescript
<article className="recipe-page">
  <RecipeHero image={recipe.image} title={recipe.title} />
  
  <div className="recipe-meta">
    <span className="meta-item">Voorbereiding: {recipe.prepTime}</span>
    <span className="meta-item">Gaartyd: {recipe.cookTime}</span>
    <span className="meta-item">Porsies: {recipe.servings}</span>
  </div>
  
  <div className="recipe-content">
    <div className="recipe-ingredients">
      <h3>Bestanddele</h3>
      <IngredientsList ingredients={recipe.ingredients} />
    </div>
    
    <div className="recipe-method">
      <h3>Metode</h3>
      <MethodSteps steps={recipe.method} />
    </div>
  </div>
  
  {recipe.tips && (
    <div className="recipe-tips">
      <h3>Wenke</h3>
      <p>{recipe.tips}</p>
    </div>
  )}
  
  {recipe.nutrition && (
    <div className="recipe-nutrition">
      <h3>Voedingswaarde</h3>
      <NutritionTable nutrition={recipe.nutrition} />
    </div>
  )}
  
  <button className="btn btn--secondary" onClick={handlePrint}>
    Druk resep
  </button>
  
  <RelatedRecipes category={recipe.category} limit={3} />
</article>
```

---

#### Task 2.3.5: Create Competition Template

**Create**: `/src/app/pages/templates/CompetitionTemplate.tsx`

**Features**:
- Hero image (prize showcase)
- Competition title (Playfair Display SC)
- Prize detail block (images + descriptions)
- "How to Enter" section (numbered steps)
- Entry form (Gravity Forms integration)
- Terms & Conditions summary + link to full T&Cs
- Winners announcement section (if applicable)
- Social sharing buttons (for viral entry)
- Related competitions

**Example Structure**:
```typescript
<article className="competition-page">
  <CompetitionHero image={competition.prizeImage} title={competition.title} />
  
  <div className="competition-prize">
    <h2>Die prys</h2>
    <PrizeShowcase prizes={competition.prizes} />
  </div>
  
  <div className="competition-entry">
    <h2>Hoe om in te skryf</h2>
    <HowToEnter steps={competition.entrySteps} />
  </div>
  
  <div className="competition-form">
    <GravityFormEmbed formId={competition.formId} />
  </div>
  
  <div className="competition-terms">
    <h3>Voorwaardes</h3>
    <p>{competition.termsSummary}</p>
    <Link href={`/wen/${competition.slug}/terms`}>
      Lees volledige voorwaardes
    </Link>
  </div>
  
  {competition.winners && (
    <div className="competition-winners">
      <h3>Wenners</h3>
      <WinnersList winners={competition.winners} />
    </div>
  )}
  
  <ShareButtons />
  <RelatedCompetitions limit={3} />
</article>
```

---

#### Task 2.3.6: Create Awards Template

**Create**: `/src/app/pages/templates/AwardsTemplate.tsx`

**Features** (for Rooiwarm wenners hub):
- Awards hero banner
- Category navigation (Beauty, Wellness, Product of Year, etc.)
- Winner grid (product cards with images)
- Judge quotes section
- Award criteria explanation
- Previous winners archive (filter by year)
- Voting section (if applicable)

**Example Structure**:
```typescript
<div className="awards-page">
  <AwardsHero title="Rooiwarm Wenners 2026" />
  
  <CategoryNav categories={awardCategories} />
  
  <div className="awards-winners">
    <h2>{categoryName} Wenners</h2>
    <ProductGrid products={winners} layout="grid" />
  </div>
  
  <div className="awards-judges">
    <h3>Wat die beoordelaars sê</h3>
    <JudgeQuotes quotes={judgeQuotes} />
  </div>
  
  <div className="awards-criteria">
    <h3>Hoe ons kies</h3>
    <AwardCriteria />
  </div>
  
  <div className="awards-archive">
    <h3>Vorige wenners</h3>
    <YearFilter />
    <PreviousWinners year={selectedYear} />
  </div>
</div>
```

---

#### Task 2.3.7: Create Podcast Series Template

**Create**: `/src/app/pages/templates/PodcastSeriesTemplate.tsx`

**Features** (for RRRADIO):
- Podcast series header
- Latest episode feature (large card with audio player)
- Episode list (reverse chronological)
- Episode detail template (individual episode page)
- Subscription links (Apple Podcasts, Spotify, etc.)

---

#### Task 2.3.8: Create Video Archive Template

**Create**: `/src/app/pages/templates/VideoArchiveTemplate.tsx`

**Features**:
- Video grid (16:9 thumbnails)
- Video detail template (individual video page with YouTube/Vimeo embed)
- Category filter (if multiple video categories)
- Lazy loading for performance

---

#### Task 2.3.9: Create Blog Author Template

**Create**: `/src/app/pages/templates/BlogAuthorTemplate.tsx`

**Features** (for Ontspanning → Blogs):
- Author header (avatar, name, bio)
- Author's article list (reverse chronological)
- Social links
- Newsletter signup

---

## Part 3: Mock Data & Content Strategy (P1)

**Goal**: Create realistic mock data aligned with rooi rose content pillars  
**Effort**: 2-3 hours (5 tasks)

### 3.1 Category Mock Data (3 tasks)

#### Task 3.1.1: Create Kos Mock Data

**Create**: `/src/app/data/categories/kos.ts`

**Mock articles for Kos subcategories**:
- 5-10 recipes per subcategory
- Realistic Afrikaans recipe titles
- Food photography (Unsplash)
- Ingredients, method, metadata

---

#### Task 3.1.2: Create Mode Mock Data

**Create**: `/src/app/data/categories/mode.ts`

**Mock articles for Mode subcategories**:
- Fashion trend articles
- Style guides
- Seasonal fashion features
- Fashion photography (Unsplash)

---

#### Task 3.1.3: Repeat for All 8 Categories

Create mock data files for:
- Skoonheid
- Gesondheid
- Bekendes
- Leefstyl
- Jou lewe
- Ontspanning

---

### 3.2 Special Page Mock Data (2 tasks)

#### Task 3.2.1: Create Competition Mock Data

**Create**: `/src/app/data/competitions.ts`

**Mock competitions**:
- 3-5 active competitions
- Prize details, entry steps, T&Cs summaries
- Winners (for closed competitions)

---

#### Task 3.2.2: Create Awards Mock Data

**Create**: `/src/app/data/rooiwarm-wenners.ts`

**Mock award winners**:
- 2025/2026 Rooiwarm wenners
- Categories: Beauty, Wellness, Product of Year, etc.
- Product details, images, judge quotes

---

## Success Criteria

### Part 1: Audit Complete
- [x] Route audit document created
- [x] Navigation audit document created
- [x] Template inventory completed
- [x] Content type gaps identified (Recipe, Competition, Awards, Podcast/Video)
- [x] WordPress URL mapping table created
- [x] Redirect requirements documented

### Part 2: Implementation Complete
- [ ] MAIN_NAVIGATION data structure created (11 items, 44 subcategories)
- [ ] MegaMenu component built
- [ ] Header navigation updated with rooi rose categories
- [ ] Footer navigation updated (4-column layout)
- [ ] Mobile navigation updated
- [ ] routes.tsx refactored with all category routes
- [ ] 44 subcategory routes added
- [ ] Article detail routes configured
- [ ] Special page routes added (RRRADIO, Lees, Video, etc.)
- [ ] 6 page templates created (Home, Category, Article, Recipe, Competition, Awards)
- [ ] Template reusability tested

### Part 3: Mock Data Complete
- [ ] Mock data for all 8 main categories
- [ ] Mock data for competitions
- [ ] Mock data for awards
- [ ] Realistic Afrikaans content

---

## Documentation Deliverables

### Audit Reports
1. `/reports/route-audit-die-papier.md` — Current route structure analysis
2. `/reports/navigation-audit-die-papier.md` — Current navigation analysis
3. `/reports/template-inventory-die-papier.md` — Existing template inventory
4. `/reports/wordpress-url-mapping.md` — Live WordPress URL structure + mapping table

### Implementation Docs
1. `/guidelines/rooi-rose/content-architecture.md` — Complete content hierarchy
2. `/guidelines/rooi-rose/navigation-guide.md` — Navigation structure and usage
3. `/guidelines/rooi-rose/template-system.md` — Page template documentation
4. `/guidelines/rooi-rose/route-structure.md` — React Router configuration guide

---

## Next Steps After Completion

After content architecture is implemented, proceed to:

1. **Phase 2**: CSS Token Implementation (apply rooi rose design tokens)
2. **Phase 3**: Homepage Redesign (implement editorial layout)
3. **Phase 4**: Category Page Redesign (magazine grid layouts)
4. **Phase 5**: Single Post Redesign (editorial article template)

---

## Related Documents

- [rooi rose Redesign Orchestrator](/prompts/rooi-rose-redesign-orchestrator.md) — Master redesign plan
- [rooi rose Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Brand identity
- [Content Architecture Source](/src/imports/pasted_text/content-architecture.md) — Original content brief
- [Design Tokens](/guidelines/design-tokens/) — rooi rose design system

---

**Last Updated**: 2026-03-11  
**Status**: Ready to Execute  
**Next Phase**: Part 1 — Current State Audit
