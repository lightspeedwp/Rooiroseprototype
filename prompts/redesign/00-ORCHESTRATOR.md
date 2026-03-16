# Rooi Rose Mega Menu & Navigation Redesign Orchestrator

**Priority**: P0 — Navigation Foundation  
**Status**: READY TO EXECUTE  
**Estimated Effort**: 18-22 hours (50+ tasks across 6 phases)  
**Prerequisites**: Content Architecture Phase complete, Design Tokens implemented

---

## Executive Summary

Transform the rooi rose prototype navigation from a simple category bar to a **sophisticated magazine-style mega menu system** that matches the live WordPress site structure. This orchestrator manages the complete navigation redesign from data architecture through desktop mega menus, mobile accordions, and dynamic content integration.

**Value**: Data-driven mega menu preserves editorial discoverability, aligns prototype with live WordPress navigation, enables content preview in dropdowns, and provides premium magazine UX with proper subcategory organization.

**Scope**:
- 12 top-level navigation items (Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, Shop, Kontak)
- 44 subcategories across 8 editorial sections
- Desktop mega menu with 3-zone layout (subcategories + featured + trending)
- Mobile accordion navigation
- Dynamic content integration
- Live-compatible URL slugs

**Risks**:
- Route structure misalignment with live WordPress URLs
- Mega menu complexity overwhelming mobile users
- Subcategory slug conflicts
- Featured content curation overhead
- Navigation performance on low-end devices

**Mitigation**: Live-derived URL mapping, progressive enhancement for mobile, centralized slug management, auto-populated trending content, performance budgets enforced.

---

## Phase 0: Navigation Architecture Audit (P0)

**Goal**: Audit current navigation, document gaps, map to live WordPress structure  
**Effort**: 3-4 hours (8 tasks)  
**Orchestrator**: `01-navigation-audit.md`

### 0.1 Current Navigation Audit (4 tasks)

**Task 0.1.1**: Audit existing header navigation  
- Inspect `/src/app/components/layout/Header.tsx`
- Document current primary navigation items
- Identify Die Papier holdovers (Nuus, Sport, etc.)
- Map to rooi rose requirements

**Task 0.1.2**: Audit mobile navigation  
- Review `/src/app/components/layout/MobileNav.tsx`
- Document current mobile menu pattern
- Identify accordion/expansion behavior
- Assess touch targets and accessibility

**Task 0.1.3**: Audit navigation data structure  
- Review `/src/app/data/navigation.ts`
- Document current data model
- Identify static vs. dynamic content
- Map to mega menu requirements

**Task 0.1.4**: Audit footer navigation  
- Review footer columns and links
- Map to rooi rose footer structure
- Identify utility links (Privaatheid, Terme, etc.)

### 0.2 Live WordPress Alignment (4 tasks)

**Task 0.2.1**: Verify live navigation structure  
- Confirm top-level items match live site
- Document subcategory labels from live
- Identify special navigation items (Rooiwarm wenners, Wen)
- Map Podcasts placement under Ontspanning

**Task 0.2.2**: URL slug verification  
- Confirm live subcategory URLs
- Document URL patterns (e.g., `/kos/aandetes-vir-die-week/`)
- Create slug mapping table
- Identify redirect requirements

**Task 0.2.3**: Special pages audit  
- Document Shop navigation (WooCommerce)
- Map Rooiwarm wenners structure (Awards + Winners)
- Audit Wen dropdown (Ma Dogter Kompetisie, Inskrywings)
- Verify Kontak page structure

**Task 0.2.4**: Create alignment report  
- Document gaps between prototype and live
- Prioritize navigation items
- Create implementation roadmap
- Deliverable: `/reports/redesign/navigation-alignment-report.md`

---

## Phase 1: Mega Menu Data Architecture (P0)

**Goal**: Create centralized, type-safe mega menu configuration  
**Effort**: 4-5 hours (10 tasks)  
**Orchestrator**: `02-mega-menu-data-architecture.md`

### 1.1 TypeScript Type Definitions (3 tasks)

#### Task 1.1.1: Create mega menu types

**File**: `/src/app/types/navigation.ts`

**Type Definitions**:
```typescript
// Mega Menu Configuration Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  megaMenu?: MegaMenuConfig;
}

export interface MegaMenuConfig {
  layout: 'editorial' | 'utility' | 'simple';
  subcategories?: SubcategoryGroup[];
  featured?: FeaturedContent;
  trending?: TrendingItem[];
  cta?: CallToAction;
}

export interface SubcategoryGroup {
  title?: string;
  links: NavLink[];
  columns?: 1 | 2; // Column layout for subcategories
}

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string; // e.g., "New", "Popular"
}

export interface FeaturedContent {
  title: string;
  href: string;
  excerpt: string;
  imageUrl: string;
  categoryLabel: string;
  author?: string;
  date?: string;
}

export interface TrendingItem {
  title: string;
  href: string;
  categoryLabel?: string;
  timestamp?: string;
}

export interface CallToAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

---

#### Task 1.1.2: Create breadcrumb types

**File**: `/src/app/types/navigation.ts`

**Type Definitions**:
```typescript
export interface Breadcrumb {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbConfig {
  items: Breadcrumb[];
  separator?: 'arrow' | 'slash' | 'chevron';
}
```

---

#### Task 1.1.3: Create navigation state types

**Type Definitions**:
```typescript
export interface NavigationState {
  activeMenu: string | null;
  mobileMenuOpen: boolean;
  searchOpen: boolean;
}

export interface MenuTrigger {
  id: string;
  type: 'hover' | 'click' | 'focus';
  closeDelay?: number; // milliseconds
}
```

---

### 1.2 Mega Menu Configuration (7 tasks)

#### Task 1.2.1: Create Kos mega menu config

**File**: `/src/app/data/megaMenuConfig.ts`

**Implementation**:
```typescript
import { NavItem } from '../types/navigation';

export const KOS_MEGA_MENU: NavItem = {
  id: 'kos',
  label: 'Kos',
  href: '/kos',
  description: 'Resepte en inspirasie vir elke dag',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Maklik & vinnig', href: '/kos/maklik-vinnig' },
          { label: 'Aandetes vir die week', href: '/kos/aandetes-vir-die-week' },
          { label: 'Somerkos', href: '/kos/somerkos' },
          { label: 'Winterkos', href: '/kos/winterkos' },
          { label: 'Laekoolhidraat', href: '/kos/laekoolhidraat' },
          { label: 'Vegetaries', href: '/kos/vegetaries' },
        ],
        columns: 2, // Two columns for many subcategories
      },
      {
        links: [
          { label: 'Gebak', href: '/kos/gebak' },
          { label: 'Nagereg', href: '/kos/nagereg' },
          { label: 'Drankies', href: '/kos/drankies' },
          { label: 'Jy kan', href: '/kos/jy-kan' },
          { label: 'Nuut & Nou', href: '/kos/nuut-en-nou' },
          { label: 'Recipes in English', href: '/kos/recipes-in-english' },
        ],
        columns: 2,
      },
    ],
    featured: {
      title: 'Somerse slaai vir elke geleentheid',
      href: '/kos/somerse-slaai-vir-elke-geleentheid',
      excerpt: 'Vars, kleurvolle slaaie wat maklik is om te maak',
      imageUrl: 'unsplash://summer-salad-food-fresh',
      categoryLabel: 'Somerkos',
      author: 'Annemarie Cillie',
      date: '2026-03-14',
    },
    trending: [
      { title: 'Vinnige weekaand-ontbyt resepte', href: '/kos/vinnige-weekaand-ontbyt', categoryLabel: 'Maklik & vinnig' },
      { title: 'Laekoolhidraat aandete in 30 minute', href: '/kos/laekoolhidraat-aandete-30-minute', categoryLabel: 'Laekoolhidraat' },
      { title: 'Die beste sjokolade-koek ooit', href: '/kos/beste-sjokolade-koek', categoryLabel: 'Gebak' },
    ],
    cta: {
      label: 'Sien alle resepte',
      href: '/kos',
      variant: 'primary',
    },
  },
};
```

**Note**: Repeat this pattern for all 8 editorial categories (Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning).

---

#### Task 1.2.2: Create Rooiwarm wenners mega menu config

**Implementation**:
```typescript
export const ROOIWARM_WENNERS_MEGA_MENU: NavItem = {
  id: 'rooiwarm-wenners',
  label: 'Rooiwarm wenners',
  href: '/rooiwarm-wenners',
  description: 'Beauty & Wellness Awards en Wenners',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Awards',
        links: [
          { label: 'Beauty & Wellness Awards', href: '/rooiwarm-wenners/beauty-wellness-awards', badge: 'Live' },
          { label: 'Wenners', href: '/rooiwarm-wenners/wenners' },
          { label: 'Terme en Voorwaardes', href: '/rooiwarm-wenners/terme' },
        ],
      },
    ],
    featured: {
      title: '2026 Beauty & Wellness Awards: Die Wenners',
      href: '/rooiwarm-wenners/2026-beauty-wellness-awards-wenners',
      excerpt: 'Ontdek die produkte wat deur lesers gekies is',
      imageUrl: 'unsplash://beauty-awards-trophy-product',
      categoryLabel: 'Wenners',
    },
  },
};
```

---

#### Task 1.2.3: Create Wen mega menu config

**Implementation**:
```typescript
export const WEN_MEGA_MENU: NavItem = {
  id: 'wen',
  label: 'Wen',
  href: '/wen',
  description: 'Kompetisies en pryse',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Kompetisies',
        links: [
          { label: 'Wen', href: '/wen', badge: 'Hot' },
          { label: 'Ma Dogter Kompetisie', href: '/wen/ma-dogter-kompetisie' },
          { label: 'Inskrywings', href: '/wen/inskrywings' },
        ],
      },
    ],
    featured: {
      title: 'Wen 'n wonderlike spabesoek ter waarde van R10 000',
      href: '/wen/spa-besoek-r10000',
      excerpt: 'Sluit in ontspanning, masserings en skoonheidsbehandelings',
      imageUrl: 'unsplash://spa-wellness-relaxation-luxury',
      categoryLabel: 'Wen',
    },
  },
};
```

---

#### Task 1.2.4: Create Shop mega menu config

**Implementation**:
```typescript
export const SHOP_MEGA_MENU: NavItem = {
  id: 'shop',
  label: 'Shop',
  href: '/winkel',
  description: 'rooi rose winkel',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Winkel',
        links: [
          { label: 'Winkel', href: '/winkel' },
          { label: 'Mandjie', href: '/winkel/mandjie' },
          { label: 'Betaling', href: '/winkel/betaling' },
          { label: 'My Rekening', href: '/winkel/my-rekening' },
        ],
      },
      {
        title: 'Inteken',
        links: [
          { label: 'Inteken', href: '/inteken' },
          { label: 'E-Uitgawe', href: '/inteken/e-uitgawe' },
          { label: 'Druk en Pos', href: '/inteken/druk-pos' },
        ],
      },
    ],
    featured: {
      title: 'Teken in vir rooi rose e-uitgawe',
      href: '/inteken/e-uitgawe',
      excerpt: 'Kry elke maand se tydskrif digitaal - slegs R99',
      imageUrl: 'unsplash://magazine-digital-tablet-reading',
      categoryLabel: 'Inteken',
    },
  },
};
```

---

#### Task 1.2.5: Create Kontak config (simple)

**Implementation**:
```typescript
export const KONTAK_NAV_ITEM: NavItem = {
  id: 'kontak',
  label: 'Kontak',
  href: '/kontak',
  description: 'Kontak ons',
  // No mega menu - simple link
};
```

---

#### Task 1.2.6: Create master navigation config

**File**: `/src/app/data/navigation.ts`

**Implementation**:
```typescript
import { NavItem } from '../types/navigation';
import {
  KOS_MEGA_MENU,
  MODE_MEGA_MENU,
  SKOONHEID_MEGA_MENU,
  GESONDHEID_MEGA_MENU,
  BEKENDES_MEGA_MENU,
  LEEFSTYL_MEGA_MENU,
  JOU_LEWE_MEGA_MENU,
  ONTSPANNING_MEGA_MENU,
  ROOIWARM_WENNERS_MEGA_MENU,
  WEN_MEGA_MENU,
  SHOP_MEGA_MENU,
  KONTAK_NAV_ITEM,
} from './megaMenuConfig';

// Master navigation configuration
export const PRIMARY_NAVIGATION: NavItem[] = [
  KOS_MEGA_MENU,
  MODE_MEGA_MENU,
  SKOONHEID_MEGA_MENU,
  GESONDHEID_MEGA_MENU,
  BEKENDES_MEGA_MENU,
  LEEFSTYL_MEGA_MENU,
  JOU_LEWE_MEGA_MENU,
  ONTSPANNING_MEGA_MENU,
  ROOIWARM_WENNERS_MEGA_MENU,
  WEN_MEGA_MENU,
  SHOP_MEGA_MENU,
  KONTAK_NAV_ITEM,
];

// Mobile navigation (same data, different UI)
export const MOBILE_NAVIGATION = PRIMARY_NAVIGATION;

// Utility navigation (search, cart, account)
export const UTILITY_NAVIGATION: NavLink[] = [
  { label: 'Soek', href: '/soek', icon: 'Search' },
  { label: 'Mandjie', href: '/winkel/mandjie', icon: 'ShoppingCart' },
  { label: 'My Rekening', href: '/winkel/my-rekening', icon: 'User' },
];
```

---

#### Task 1.2.7: Create footer navigation config

**Implementation**:
```typescript
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const FOOTER_NAVIGATION: FooterColumn[] = [
  {
    title: 'rooi rose',
    links: [
      { label: 'Oor ons', href: '/oor-ons' },
      { label: 'Kontak ons', href: '/kontak' },
      { label: 'Adverteer', href: '/adverteer' },
      { label: 'Algemene vrae', href: '/vrae' },
    ],
  },
  {
    title: 'Kategorieë',
    links: [
      { label: 'Kos', href: '/kos' },
      { label: 'Mode', href: '/mode' },
      { label: 'Skoonheid', href: '/skoonheid' },
      { label: 'Gesondheid', href: '/gesondheid' },
      { label: 'Leefstyl', href: '/leefstyl' },
    ],
  },
  {
    title: 'Inligting',
    links: [
      { label: 'Privaatheidsbeleid', href: '/beleid/privaatheidsbeleid' },
      { label: 'Terme en Voorwaardes', href: '/beleid/terme-en-voorwaardes' },
      { label: 'Koekiebeleid', href: '/beleid/koekiebeleid' },
    ],
  },
  {
    title: 'Volg Ons',
    links: [
      { label: 'Facebook', href: 'https://facebook.com/rooirose', icon: 'Facebook' },
      { label: 'Instagram', href: 'https://instagram.com/rooirose', icon: 'Instagram' },
      { label: 'Pinterest', href: 'https://pinterest.com/rooirose', icon: 'Pinterest' },
    ],
  },
];
```

---

## Phase 2: Desktop Mega Menu Implementation (P1)

**Goal**: Build interactive desktop mega menu components  
**Effort**: 5-6 hours (12 tasks)  
**Orchestrator**: `03-desktop-mega-menu-implementation.md`

### 2.1 Core Mega Menu Component (4 tasks)

#### Task 2.1.1: Create MegaMenu wrapper component

**File**: `/src/app/components/navigation/MegaMenu/MegaMenu.tsx`

**Features**:
- Receives `NavItem` with `megaMenu` config
- Manages open/close state
- Handles hover, focus, keyboard events
- Provides accessibility attributes
- Animated entrance/exit

**Implementation Pattern**:
```typescript
import { useState, useRef, useEffect } from 'react';
import { NavItem } from '../../../types/navigation';
import { MegaMenuPanel } from './MegaMenuPanel';

interface MegaMenuProps {
  item: NavItem;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function MegaMenu({ item, isActive, onOpen, onClose }: MegaMenuProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  // Hover handlers with delay
  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    onOpen();
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 200); // 200ms delay
  };

  // Keyboard handlers
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        ref={triggerRef}
        className="nav-item"
        aria-expanded={isActive}
        aria-controls={`mega-menu-${item.id}`}
        onFocus={onOpen}
      >
        {item.label}
      </button>

      {/* Panel */}
      {isActive && item.megaMenu && (
        <MegaMenuPanel
          id={`mega-menu-${item.id}`}
          ref={panelRef}
          config={item.megaMenu}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
}
```

---

#### Task 2.1.2: Create MegaMenuPanel component

**File**: `/src/app/components/navigation/MegaMenu/MegaMenuPanel.tsx`

**Features**:
- Renders based on layout type (editorial, utility, simple)
- Three-zone layout for editorial
- Featured content card
- Trending list
- CTA button

**Implementation Pattern**:
```typescript
import { forwardRef } from 'react';
import { MegaMenuConfig } from '../../../types/navigation';
import { SubcategoryLinks } from './SubcategoryLinks';
import { FeaturedCard } from './FeaturedCard';
import { TrendingList } from './TrendingList';

interface MegaMenuPanelProps {
  id: string;
  config: MegaMenuConfig;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const MegaMenuPanel = forwardRef<HTMLDivElement, MegaMenuPanelProps>(
  ({ id, config, onKeyDown }, ref) => {
    const isEditorial = config.layout === 'editorial';

    return (
      <div
        id={id}
        ref={ref}
        className="mega-menu-panel"
        onKeyDown={onKeyDown}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="mega-menu-content">
          {/* Zone A: Subcategories */}
          {config.subcategories && (
            <div className="mega-menu-zone mega-menu-zone--links">
              <SubcategoryLinks groups={config.subcategories} />
            </div>
          )}

          {/* Zone B: Featured Content */}
          {isEditorial && config.featured && (
            <div className="mega-menu-zone mega-menu-zone--featured">
              <FeaturedCard content={config.featured} />
            </div>
          )}

          {/* Zone C: Trending */}
          {isEditorial && config.trending && (
            <div className="mega-menu-zone mega-menu-zone--trending">
              <TrendingList items={config.trending} />
            </div>
          )}

          {/* CTA */}
          {config.cta && (
            <div className="mega-menu-cta">
              <a
                href={config.cta.href}
                className={`button button--${config.cta.variant}`}
              >
                {config.cta.label}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
);
```

---

#### Task 2.1.3: Create SubcategoryLinks component

**Features**:
- Renders column-based layout
- Supports 1 or 2 columns
- Handles badges (New, Popular)
- Keyboard navigation

---

#### Task 2.1.4: Create FeaturedCard component

**Features**:
- 3:2 aspect ratio image
- Category label
- Title (H3)
- Excerpt (2 lines max)
- Author + date metadata
- Hover effect

---

### 2.2 Mega Menu Integration (4 tasks)

#### Task 2.2.1: Update Header component

**File**: `/src/app/components/layout/Header.tsx`

**Changes**:
1. Import `PRIMARY_NAVIGATION` from `navigation.ts`
2. Replace static category links with `<MegaMenu>` components
3. Add state management for active menu
4. Implement click-outside to close
5. Keep utility navigation (search, cart, account)

---

#### Task 2.2.2: Create mega menu state hook

**File**: `/src/app/hooks/useMegaMenu.ts`

**Features**:
```typescript
export function useMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const openMenu = (menuId: string) => setActiveMenu(menuId);
  const closeMenu = () => setActiveMenu(null);
  const toggleMenu = (menuId: string) =>
    setActiveMenu(activeMenu === menuId ? null : menuId);

  return {
    activeMenu,
    openMenu,
    closeMenu,
    toggleMenu,
  };
}
```

---

#### Task 2.2.3: Add mega menu styles

**File**: `/src/styles/components/mega-menu.css`

**Implementation**:
```css
@layer components {
  .mega-menu-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--base);
    border: 1px solid var(--muted);
    border-top: 3px solid var(--custom-primary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: var(--space-large);
    margin-top: 0;
    z-index: 1000;
    animation: megaMenuSlideDown 200ms ease-out;
  }

  @keyframes megaMenuSlideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mega-menu-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-large);
    max-width: 1280px;
    margin: 0 auto;
  }

  /* Zone A: Subcategory Links */
  .mega-menu-zone--links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-medium);
  }

  /* Zone B: Featured Card */
  .mega-menu-zone--featured {
    border-left: 1px solid var(--muted);
    padding-left: var(--space-large);
  }

  /* Zone C: Trending List */
  .mega-menu-zone--trending {
    margin-top: var(--space-medium);
    padding-top: var(--space-medium);
    border-top: 1px solid var(--muted);
  }
}
```

---

#### Task 2.2.4: Add accessibility features

**Features**:
- ARIA attributes (`aria-expanded`, `aria-controls`, `role="dialog"`)
- Focus management (trap focus in open menu)
- Keyboard navigation (Tab, Shift+Tab, Escape, Arrow keys)
- Skip links for screen readers
- `prefers-reduced-motion` support for animations

---

### 2.3 Editorial Layout Mega Menus (4 tasks)

Create mega menu panels for each editorial category (Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning) following the pattern in Phase 1.

**Deliverables** (per category):
- Subcategory links (1-2 columns)
- Featured content (dynamic from posts data)
- Trending list (auto-populated, last 3 posts)

---

## Phase 3: Mobile Navigation Implementation (P1)

**Goal**: Adapt mega menu for mobile with accordion pattern  
**Effort**: 4-5 hours (10 tasks)  
**Orchestrator**: `04-mobile-navigation-implementation.md`

### 3.1 Mobile Menu Component (4 tasks)

#### Task 3.1.1: Update MobileMenu component

**File**: `/src/app/components/layout/MobileMenu.tsx`

**Changes**:
1. Replace static links with accordion pattern
2. Add subcategory expansion on tap
3. Include featured content thumbnail per category
4. Add smooth expand/collapse animations
5. Respect `prefers-reduced-motion`

**Implementation Pattern**:
```typescript
import { useState } from 'react';
import { PRIMARY_NAVIGATION } from '../../data/navigation';
import { MobileAccordion } from './MobileAccordion';

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <nav className="mobile-menu__nav">
        {PRIMARY_NAVIGATION.map((item) => (
          <MobileAccordion
            key={item.id}
            item={item}
            isExpanded={expandedCategory === item.id}
            onToggle={() => toggleCategory(item.id)}
          />
        ))}
      </nav>
    </div>
  );
}
```

---

#### Task 3.1.2: Create MobileAccordion component

**Features**:
- Top-level category button
- Expandable subcategory list
- Featured content thumbnail (optional)
- Smooth height animation
- Touch-optimized (minimum 44px touch targets)

---

#### Task 3.1.3: Add mobile mega menu styles

**File**: `/src/styles/components/mobile-menu.css`

**Features**:
- Full-screen overlay
- Sticky header with close button
- Smooth expand/collapse transitions
- Touch-friendly spacing
- Dark mode support

---

#### Task 3.1.4: Optimize mobile performance

**Features**:
- Lazy-load subcategory content
- Virtualize long lists (if >50 items)
- Debounce scroll events
- Use `will-change` for animations
- Reduce repaints

---

### 3.2 Mobile Navigation Patterns (3 tasks)

#### Task 3.2.1: Implement hamburger button

**Features**:
- Animated hamburger → X transition
- Accessible label
- Focus visible state
- Touch target 44x44px minimum

---

#### Task 3.2.2: Add mobile search

**Features**:
- Expand search bar on tap
- Overlay search results
- Recent searches (localStorage)
- Voice search (optional)

---

#### Task 3.2.3: Mobile utility navigation

**Features**:
- Sticky bottom bar (search, cart, account)
- Badge counts (cart items)
- Active state indicators

---

### 3.3 Responsive Breakpoints (3 tasks)

#### Task 3.3.1: Define navigation breakpoints

**File**: `/src/styles/theme-tokens.css`

```css
:root {
  /* Navigation Breakpoints */
  --nav-mobile-max: 1023px;   /* Mobile menu shown */
  --nav-desktop-min: 1024px;  /* Mega menu shown */
  --nav-compact-max: 1279px;  /* Compact desktop nav */
  --nav-full-min: 1280px;     /* Full desktop nav */
}
```

---

#### Task 3.3.2: Implement progressive navigation

**Features**:
- Mobile (0-1023px): Hamburger + accordion
- Tablet (1024-1279px): Compact mega menu (1 column subcategories)
- Desktop (1280px+): Full mega menu (2 column subcategories)

---

#### Task 3.3.3: Test touch vs. mouse behavior

**Test Cases**:
- Mobile: Tap to expand, tap again to collapse
- Tablet: Hover opens menu, tap follows link
- Desktop: Hover opens menu, click follows link

---

## Phase 4: Dynamic Content Integration (P2)

**Goal**: Populate mega menus with dynamic content from posts data  
**Effort**: 3-4 hours (8 tasks)  
**Orchestrator**: `05-dynamic-content-integration.md`

### 4.1 Featured Content Logic (4 tasks)

#### Task 4.1.1: Create featured content selector

**File**: `/src/app/utils/featuredContentSelector.ts`

**Features**:
- Select 1 featured post per category
- Prioritize posts with `featured: true` flag
- Fall back to most recent post
- Cache results (1 hour)

**Implementation**:
```typescript
import { Post } from '../types/content';

export function selectFeaturedContent(
  categoryId: string,
  posts: Post[]
): FeaturedContent | null {
  // Filter posts by category
  const categoryPosts = posts.filter((p) => p.category === categoryId);

  // Find featured post or most recent
  const featured =
    categoryPosts.find((p) => p.featured) || categoryPosts[0];

  if (!featured) return null;

  return {
    title: featured.title,
    href: featured.href,
    excerpt: featured.excerpt,
    imageUrl: featured.heroImage,
    categoryLabel: featured.categoryLabel,
    author: featured.author,
    date: featured.publishDate,
  };
}
```

---

#### Task 4.1.2: Create trending content selector

**Features**:
- Select 3 most recent posts per category
- Exclude featured post
- Sort by date descending
- Include category label and timestamp

---

#### Task 4.1.3: Integrate with mega menu config

**Changes**:
- Update `megaMenuConfig.ts` to use dynamic selectors
- Replace static `featured` and `trending` with function calls
- Implement memoization to prevent re-fetching

---

#### Task 4.1.4: Add content fallbacks

**Features**:
- Placeholder featured card if no posts
- "No recent posts" message for trending
- Graceful degradation if images fail to load

---

### 4.2 Content Caching (4 tasks)

#### Task 4.2.1: Implement navigation content cache

**File**: `/src/app/utils/navigationCache.ts`

**Features**:
- Cache featured/trending content for 1 hour
- Invalidate cache on new post publish
- Store in memory (React state) or localStorage

---

#### Task 4.2.2: Add cache invalidation hooks

**Features**:
- Invalidate on route change
- Invalidate on user login/logout
- Manual invalidation via admin action

---

#### Task 4.2.3: Optimize image loading

**Features**:
- Preload featured images on menu hover
- Use `loading="lazy"` for trending images
- Serve responsive images (srcset)
- WebP format with fallbacks

---

#### Task 4.2.4: Monitor cache performance

**Metrics**:
- Cache hit rate
- Average load time
- Memory usage
- Invalidation frequency

---

## Phase 5: Accessibility & Keyboard Navigation (P1)

**Goal**: Ensure WCAG 2.1 AA compliance and keyboard-only navigation  
**Effort**: 3-4 hours (8 tasks)  
**Orchestrator**: `06-accessibility-keyboard-navigation.md`

### 5.1 ARIA Implementation (4 tasks)

#### Task 5.1.1: Add ARIA attributes

**Required Attributes**:
- `aria-expanded` on menu triggers
- `aria-controls` linking trigger to panel
- `aria-label` for menu panels
- `aria-current` for active page
- `role="navigation"` on nav containers
- `role="dialog"` on mega menu panels

---

#### Task 5.1.2: Implement focus management

**Features**:
- Focus trap in open mega menu
- Return focus to trigger on Escape
- Skip links to main content
- Visible focus indicators (3px outline)

---

#### Task 5.1.3: Add screen reader announcements

**Features**:
- Announce menu open/close (aria-live)
- Announce navigation landmarks
- Provide descriptive link text (no "Click here")

---

#### Task 5.1.4: Test with screen readers

**Tools**:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

---

### 5.2 Keyboard Navigation (4 tasks)

#### Task 5.2.1: Implement keyboard shortcuts

**Shortcuts**:
- `Tab` / `Shift+Tab`: Navigate through menu items
- `Enter` / `Space`: Activate link or toggle menu
- `Escape`: Close menu and return focus
- `Arrow Left/Right`: Navigate between top-level items (optional)
- `Arrow Up/Down`: Navigate within subcategories (optional)

---

#### Task 5.2.2: Add keyboard navigation hook

**File**: `/src/app/hooks/useKeyboardNav.ts`

**Features**:
```typescript
export function useKeyboardNav(
  items: NavItem[],
  onClose: () => void
) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'Tab':
        // Handle tab trapping
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        // Navigate between top-level items
        break;
      default:
        break;
    }
  };

  return { handleKeyDown };
}
```

---

#### Task 5.2.3: Test keyboard-only navigation

**Test Cases**:
- [ ] Can navigate entire site without mouse
- [ ] Focus visible on all interactive elements
- [ ] Escape closes menu and returns focus
- [ ] Tab order is logical
- [ ] No keyboard traps

---

#### Task 5.2.4: Add keyboard navigation documentation

**Deliverable**: `/docs/keyboard-navigation.md`

**Content**:
- Keyboard shortcuts table
- Navigation flow diagram
- Focus management strategy
- Screen reader compatibility notes

---

## Phase 6: Testing & Optimization (P2)

**Goal**: Ensure mega menu performance and cross-browser compatibility  
**Effort**: 2-3 hours (6 tasks)  
**Orchestrator**: `07-testing-optimization.md`

### 6.1 Performance Testing (3 tasks)

#### Task 6.1.1: Measure navigation performance

**Metrics**:
- Time to Interactive (TTI) for mega menu open
- First Contentful Paint (FCP) for featured content
- Total Blocking Time (TBT) during navigation
- Cumulative Layout Shift (CLS) on menu open

**Targets**:
- TTI < 200ms
- FCP < 500ms
- TBT < 50ms
- CLS < 0.1

---

#### Task 6.1.2: Optimize bundle size

**Actions**:
- Code-split mega menu components
- Lazy-load featured images
- Tree-shake unused icon imports
- Minify and compress CSS

**Target**: Mega menu bundle < 50KB gzipped

---

#### Task 6.1.3: Test on low-end devices

**Devices**:
- iPhone SE (2020)
- Samsung Galaxy A52
- Desktop with throttled CPU (4x slowdown)

**Pass Criteria**:
- Menu opens in < 300ms
- Animations run at 60fps
- No jank or freezing

---

### 6.2 Cross-Browser Testing (3 tasks)

#### Task 6.2.1: Browser compatibility matrix

**Browsers**:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Safari iOS (latest)
- Chrome Android (latest)

**Features to Test**:
- Mega menu open/close
- Keyboard navigation
- Touch gestures
- CSS Grid layout
- CSS animations

---

#### Task 6.2.2: Fix browser-specific issues

**Common Issues**:
- Safari: Focus visible styles
- Firefox: Grid gap rendering
- Edge: Smooth scroll behavior
- Mobile Safari: Touch event handling

---

#### Task 6.2.3: Create browser support documentation

**Deliverable**: `/docs/browser-support.md`

**Content**:
- Supported browsers table
- Known issues and workarounds
- Progressive enhancement strategy
- Polyfill requirements

---

## Success Criteria

### Phase 0: Navigation Architecture Audit
- ✅ Current navigation documented
- ✅ Live WordPress alignment confirmed
- ✅ URL slug mapping complete
- ✅ Gap analysis report created

### Phase 1: Mega Menu Data Architecture
- ✅ TypeScript types defined
- ✅ 12 navigation items configured
- ✅ 44 subcategories mapped
- ✅ Featured/trending data structure defined

### Phase 2: Desktop Mega Menu Implementation
- ✅ Mega menu components built
- ✅ Header integration complete
- ✅ Hover/focus behavior working
- ✅ 3-zone editorial layout implemented

### Phase 3: Mobile Navigation Implementation
- ✅ Mobile accordion pattern working
- ✅ Touch-optimized (44px targets)
- ✅ Responsive breakpoints defined
- ✅ Progressive enhancement verified

### Phase 4: Dynamic Content Integration
- ✅ Featured content auto-populated
- ✅ Trending posts auto-populated
- ✅ Content caching implemented
- ✅ Image optimization complete

### Phase 5: Accessibility & Keyboard Navigation
- ✅ ARIA attributes implemented
- ✅ Keyboard-only navigation working
- ✅ Screen reader tested
- ✅ WCAG 2.1 AA compliance verified

### Phase 6: Testing & Optimization
- ✅ Performance targets met (TTI < 200ms)
- ✅ Cross-browser compatibility confirmed
- ✅ Low-end device testing passed
- ✅ Documentation complete

---

## Deliverables

### Code
- `/src/app/types/navigation.ts` — Type definitions
- `/src/app/data/navigation.ts` — Master navigation config
- `/src/app/data/megaMenuConfig.ts` — Mega menu configurations
- `/src/app/components/navigation/MegaMenu/` — Mega menu components
- `/src/app/components/layout/Header.tsx` — Updated header
- `/src/app/components/layout/MobileMenu.tsx` — Updated mobile menu
- `/src/app/hooks/useMegaMenu.ts` — State management hook
- `/src/app/hooks/useKeyboardNav.ts` — Keyboard navigation hook
- `/src/app/utils/featuredContentSelector.ts` — Content selection logic
- `/src/app/utils/navigationCache.ts` — Caching utilities
- `/src/styles/components/mega-menu.css` — Mega menu styles
- `/src/styles/components/mobile-menu.css` — Mobile menu styles

### Documentation
- `/reports/redesign/navigation-alignment-report.md` — Alignment analysis
- `/docs/keyboard-navigation.md` — Keyboard shortcuts guide
- `/docs/browser-support.md` — Browser compatibility matrix
- `/docs/navigation-architecture.md` — Architecture documentation

### Guidelines
- Update `/guidelines/rooi-rose/navigation-guidelines.md` — Navigation patterns
- Update `/guidelines/design-tokens/navigation-tokens.md` — Navigation tokens

---

## Related Orchestrators

- **Content Architecture Orchestrator** (`/prompts/rooi-rose-content-architecture-orchestrator.md`) — Content structure foundation
- **Redesign Orchestrator** (`/prompts/rooi-rose-redesign-orchestrator.md`) — Overall redesign strategy
- **Token Foundation** (Phase 1 of Redesign Orchestrator) — Design tokens required

---

**Version**: 1.0  
**Last Updated**: 2026-03-15  
**Status**: ✅ Ready to Execute
