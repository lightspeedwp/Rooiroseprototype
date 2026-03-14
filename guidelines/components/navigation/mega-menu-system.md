# Mega Menu Navigation System

**Version**: 1.0  
**Last Updated**: 2026-03-12  
**Status**: ✅ Architecture Complete

---

## Overview

The rooi rose mega menu is a data-driven, desktop/mobile-optimized navigation system that provides deep access to the magazine's 10 editorial categories, 44+ subcategories, featured stories, and trending content—all from a single hover or click.

---

## Architecture

### Core Principles

1. **Data-Driven**: All navigation content is configured in `/src/app/data/megaMenuConfig.ts`
2. **Component Separation**: MegaMenu UI is separate from navigation data
3. **Responsive**: Desktop mega menu + mobile accordion pattern
4. **Accessible**: Full keyboard navigation, ARIA support, focus management
5. **Performance**: Lazy-loaded post data, memoized trending/featured queries

---

## File Structure

```
/src/app/
├── data/
│   ├── megaMenuConfig.ts         # Main mega menu configuration
│   ├── navigation.ts              # Header/footer nav links
│   └── posts/index.ts             # Post loader utilities
├── components/
│   └── parts/
│       ├── Header.tsx             # Main header with mega menu integration
│       ├── MegaMenu.tsx           # Desktop mega menu dropdown (NEW)
│       └── MobileMenu.tsx         # Mobile accordion menu (UPDATED)
```

---

## Data Model

### MegaMenuItem Interface

```typescript
interface MegaMenuItem {
  label: string;                     // Display text (e.g., "Kos")
  href: string;                      // Top-level route (e.g., "/kos")
  description?: string;              // Optional meta description
  hasMegaMenu: boolean;              // Show dropdown vs simple link
  subcategories?: MegaMenuSubcategory[];
  featured?: MegaMenuFeatured;
  trending?: MegaMenuTrending[];
  specialLinks?: Array<{...}>;       // For utility pages (Shop, Wen, etc.)
}
```

### MegaMenuSubcategory

```typescript
interface MegaMenuSubcategory {
  title: string;                     // "Maklik & vinnig"
  href: string;                      // "/kos/maklik-vinnig"
  description?: string;              // Optional hover tooltip
}
```

### MegaMenuFeatured

```typescript
interface MegaMenuFeatured {
  title: string;                     // Post headline
  href: string;                      // Post URL
  imageUrl: string;                  // 3:2 aspect ratio hero image
  categoryLabel: string;             // "Kos", "Mode", etc.
  deck?: string;                     // 1-2 sentence excerpt
}
```

### MegaMenuTrending

```typescript
interface MegaMenuTrending {
  title: string;                     // Post title
  href: string;                      // Post URL
  timestamp?: string;                // "2 hours ago" or publish date
  tag?: string;                      // Single tag for context
}
```

---

## Configuration Structure

### Editorial Categories (Kos, Mode, Skoonheid, etc.)

Each editorial category mega menu has:

- **Left Zone**: Subcategory links (1-2 columns)
- **Right-Top Zone**: Featured card (image + headline + deck)
- **Right-Bottom Zone**: Trending list (3-5 recent posts)
- **Footer**: "View all [Category]" link

**Example**:
```typescript
kos: {
  label: 'Kos',
  href: '/kos',
  description: 'Resepte, wenke en inspirasie vir die kombuis',
  hasMegaMenu: true,
  subcategories: [
    { title: 'Maklik & vinnig', href: '/kos/maklik-vinnig' },
    { title: 'Aandetes vir die week', href: '/kos/aandetes-vir-die-week' },
    // ... 10 more
  ],
  featured: {
    title: 'Die beste somerresepte vir die hele gesin',
    href: '/kos/001-die-beste-somerresepte',
    imageUrl: 'https://source.unsplash.com/...',
    categoryLabel: 'Kos',
    deck: 'Maklike en vinnige etes vir warm dae...',
  },
  trending: [
    { title: 'Hoenderpasta in 20 minute', href: '/kos/002...', tag: 'Vinnig' },
    // ... 3-4 more
  ],
}
```

### Special/Utility Pages (Rooiwarm wenners, Wen, Shop)

These use `specialLinks` instead of subcategories:

**Example**:
```typescript
'rooiwarm-wenners': {
  label: 'Rooiwarm wenners',
  href: '/rooiwarm-wenners',
  hasMegaMenu: true,
  specialLinks: [
    { title: 'Beauty & Wellness Awards', href: '/rooiwarm-wenners/awards' },
    { title: 'Wenners', href: '/rooiwarm-wenners/wenners' },
    { title: 'Terms & Conditions', href: '/rooiwarm-wenners/terms' },
  ],
  featured: { /* Featured award or winner */ },
}
```

### Simple Links (Kontak)

```typescript
kontak: {
  label: 'Kontak',
  href: '/kontak',
  hasMegaMenu: false,  // No dropdown
}
```

---

## Desktop Mega Menu Behaviour

### Trigger Events

- **Hover**: Mouse enters top-level nav item → open mega menu
- **Focus**: Keyboard focus on nav item → open mega menu
- **Delay**: 150ms delay before opening (prevents accidental triggers)

### Close Events

- **Mouse Leave**: Mouse exits menu panel → close after 200ms delay
- **ESC Key**: Immediate close + return focus to trigger
- **Click Outside**: Click anywhere outside panel → close
- **Focus Away**: Tab past last menu item → close

### Keyboard Navigation

- **Tab**: Move through top-level items, then into open menu subcategories
- **Shift+Tab**: Reverse direction
- **ESC**: Close menu and return focus to trigger
- **Enter/Space**: Activate focused link
- **Arrow Keys** (optional enhancement): Left/Right changes top-level category while keeping menu open

### ARIA Attributes

```tsx
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
  aria-controls="mega-menu-kos"
>
  Kos
</button>

<div
  id="mega-menu-kos"
  role="region"
  aria-label="Kos submenu"
  hidden={!isOpen}
>
  {/* Menu content */}
</div>
```

---

## Desktop Layout Grid

### 3-Zone Layout

```
┌────────────────────────────────────────────────────────┐
│  MEGA MENU: KOS                                        │
├─────────────────────────┬──────────────────────────────┤
│ Zone A: Subcategories   │ Zone B: Featured Card        │
│ (1-2 columns)           │ ┌──────────────────────────┐ │
│                         │ │ [3:2 Image]              │ │
│ • Maklik & vinnig       │ │                          │ │
│ • Aandetes vir die week │ │ Die beste somerresepte   │ │
│ • Somerkos              │ │ Maklike en vinnige...    │ │
│ • Laekoolhidraat        │ └──────────────────────────┘ │
│ • Vegetaries            │                              │
│ • Gebak                 │ Zone C: Trending             │
│ • Nagereg               │ 1. Hoenderpasta (Vinnig)     │
│ • Drankies              │ 2. Roerbak hoender (Gesond)  │
│ • Jy kan                │ 3. Somergroenteslaai         │
│ • Nuut & Nou            │ 4. Winterpotjie (Winter)     │
│ • Recipes in English    │                              │
│                         │ → View all Kos               │
└─────────────────────────┴──────────────────────────────┘
```

### Responsive Breakpoints

- **Desktop**: > 1024px — Full 3-zone layout
- **Tablet**: 768px-1023px — Stacked zones (subcategories full-width, featured/trending below)
- **Mobile**: < 768px — Mobile accordion menu (see Mobile Behaviour)

---

## Mobile Behaviour

### Accordion Pattern

- Full-screen overlay (existing `MobileMenu.tsx`)
- Top-level categories displayed as expandable accordions
- **Tap to expand** → reveals subcategories + one featured item
- **No hover-only logic** (accessibility for touch devices)

### Mobile Menu Structure

```
┌─────────────────────────┐
│ ☰  rooi rose    [Close] │
├─────────────────────────┤
│ ▼ Kos                   │ ← Tap to expand
│   • Maklik & vinnig     │
│   • Somerkos            │
│   • Nagereg             │
│   [Featured: Somerresp] │
├─────────────────────────┤
│ ▶ Mode                  │ ← Collapsed
├─────────────────────────┤
│ ▶ Skoonheid             │
└─────────────────────────┘
```

---

## Visual Styling

### Typography

- **Category Labels**: Playfair Display SC, 16px, uppercase, letter-spacing: 0.05em
- **Subcategory Links**: Karla, 14px, regular weight
- **Featured Headline**: Playfair Display SC, 20px, line-height: 1.3
- **Featured Deck**: Karla, 14px, color: #424242
- **Trending Titles**: Karla, 14px, regular weight
- **Trending Tags**: Karla, 12px, color: #e01e12

### Colors

- **Primary Red**: `#e01e12` (active state, category labels, CTAs)
- **Text**: `#222222` (body), `#000000` (headings)
- **Meta/Muted**: `#424242` (deck text, timestamps)
- **Background**: `#FFFFFF` (panel), `#F8F8F8` (hover state)
- **Borders**: `#E0E0E0` (dividers between zones)

### Spacing

- **Panel Padding**: 32px (desktop), 16px (mobile)
- **Column Gap**: 24px (between Zone A/B)
- **Row Gap (Subcategories)**: 12px
- **Featured Card Margin**: 16px bottom
- **Trending List Gap**: 8px between items

### Shadows

- **Panel Shadow**: `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);`
- **Featured Card Hover**: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);`

---

## Post Data Integration

### Auto-Populating Trending Posts

Use the `getTrendingPosts()` helper from `/src/app/data/posts/index.ts`:

```typescript
import { getTrendingPosts } from '@/data/posts';

// Get 4 most recent posts from "kos" category
const trendingKos = await getTrendingPosts(4, 'kos');

MEGA_MENU_CONFIG.kos.trending = trendingKos.map(post => ({
  title: post.title,
  href: `/${post.category}/${post.slug}`,
  tag: post.tags?.[0] || post.subcategory,
}));
```

### Manually Selecting Featured Posts

Featured posts are **manually curated** in `megaMenuConfig.ts` to ensure editorial control. Update the `featured` object with the desired post data.

**Best Practice**: Feature posts that:
- Have high-quality hero images (3:2 ratio)
- Represent the category's core content well
- Are recent (published within last 30 days)
- Have strong headlines and decks

---

## Implementation Checklist

### Phase 6 (Current)

- [x] Create `megaMenuConfig.ts` with all 12 top-level items
- [x] Define TypeScript interfaces (`MegaMenuItem`, `MegaMenuFeatured`, etc.)
- [x] Add subcategories for all editorial categories
- [x] Configure special links for Wen, Rooiwarm wenners, Shop
- [x] Create post loader utilities (`getAllPosts`, `getTrendingPosts`, etc.)
- [x] Document mega menu architecture in this guideline

### Phase 7 (Next)

- [ ] Create `/src/app/components/parts/MegaMenu.tsx` component
- [ ] Implement 3-zone desktop layout
- [ ] Add hover/focus trigger logic with delays
- [ ] Add keyboard navigation (Tab, ESC, Arrow keys)
- [ ] Add ARIA attributes for accessibility
- [ ] Update `MobileMenu.tsx` with accordion pattern
- [ ] Integrate with Header component
- [ ] Test all 12 nav items + close behaviours

---

## Live Site Alignment

This configuration mirrors the **live rooi rose navigation structure**:

✅ **12 top-level items** (Kos → Kontak)  
✅ **Live-verified subcategories** (e.g., `/kos/aandetes-vir-die-week/`)  
✅ **Podcasts under Ontspanning** (`/rooiroseradio`, `/rrradio`)  
✅ **Rooiwarm wenners standalone** (Beauty & Wellness Awards hub)  
✅ **Shop visible** in main nav  
✅ **Ma Dogter Kompetisie** featured under Wen  

---

## References

- **Configuration**: `/src/app/data/megaMenuConfig.ts`
- **Post Loader**: `/src/app/data/posts/index.ts`
- **Orchestrator**: `/prompts/rooi-rose-magazine-content-refactor-orchestrator.md` (Phase 6)
- **Live Site**: [rooirose.co.za](https://www.rooirose.co.za) (navigation reference)
- **Mega Menu Brief**: `/src/imports/pasted_text/rooi-rose-mega-menu-brief.md`

---

**Status**: Architecture complete, ready for UI implementation in Phase 7.
