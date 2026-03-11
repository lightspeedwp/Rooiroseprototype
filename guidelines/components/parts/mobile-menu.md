# Mobile Menu

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Part
**React source**: `/src/app/components/parts/MobileMenu.tsx`
**WordPress target**: Part of Template Part — `parts/header.html` (handled by `core/navigation` overlay mode)

---

## 1. Purpose

A full-screen mobile navigation overlay triggered by a hamburger icon in the header. It provides search, category navigation (3-column icon grid), two subscription CTAs (e-edition + print delivery), secondary navigation links, account quick actions, social media links, and a theme toggle. It replaces the desktop header's three tiers on screens below 1024px.

## 2. Visual Structure

```
┌─ Hamburger trigger (lg:hidden, inside Header.tsx)
│
└─ Full-screen overlay (fixed inset-0 z-[9999], AnimatePresence)
   ├─ Backdrop (bg-brand-navy / dark:bg-background, full opacity)
   │
   └─ Content (relative z-10, flex-col h-full)
      ├─ Header strip (px-5 py-4, border-b border-white/10)
      │  ├─ Logo (white variant, h-8)
      │  └─ Icons: Cart | User | ThemeToggle | Close (X)
      │
      └─ Scrollable body (flex-1 overflow-y-auto, staggered motion)
         ├─ Search input (px-5, bg-white/5, rounded-lg)
         │
         ├─ Section: "Kategorieë" (label, brand-red, uppercase)
         │  └─ 3-col grid (13 category buttons, rounded-xl)
         │     Each: Icon + Label, active state = bg-brand-red
         │
         ├─ Subscribe CTA (bg-brand-red, rounded-xl)
         │  └─ BookOpen icon + "Teken in op e-uitgawe" + arrow
         │
         ├─ Delivery CTA (bg-brand-navy, border border-white/10, rounded-xl)
         │  └─ Truck icon + "Huisaflewering" + arrow
         │
         ├─ Divider (border-t border-white/8)
         │
         ├─ Section: "Die Papier" (secondary nav, 9 list items)
         │  Each: Icon + Label + ChevronRight, full-width buttons
         │
         ├─ Divider
         │
         ├─ Section: "My rekening" (2 buttons side by side)
         │  ├─ "My rekening" (User icon)
         │  └─ "Registreer" (ArrowRight icon)
         │
         ├─ Divider
         │
         ├─ Section: "Volg Ons" (5 social icons, circular bg-white/5)
         │
         └─ Copyright (text-[11px], text-white/20)
```

## 3. Props / Attributes

The MobileMenu is self-contained with no external props.

| Internal State | Type | Purpose | WP Equivalent |
|:---------------|:-----|:--------|:-------------|
| `open` | `boolean` | Controls overlay visibility | `core/navigation` `overlayMenu` attribute |
| `searchQuery` | `string` | Controlled search input | `core/search` inside overlay |
| `searchFocused` | `boolean` | Highlights search icon on focus | CSS `:focus-within` |

## 4. Data Sources

- **Navigation links**: `/src/app/data/navigation.ts`
  - `MOBILE_CATEGORY_LINKS` — 13 category links with route paths (Tuis, Nuus, Sport, Skole, Sake, Leefstyl, Dink, Gebeure, Multimedia, Doodsberrigte, E-uitgawes, Kompetisies, Nuusbrief-argief)
  - `MOBILE_SECONDARY_LINKS` — 9 secondary links (Oor ons, Ons span, Adverteer, Kontak, Algemene vrae, Stuur in, Nuusbrief, Beleid, Inhoudsopgawe)
  - `SOCIAL_LINKS` — 5 social platforms
- **Cart count**: `useCart().count` from `CartContext`
- **Route**: `useLocation().pathname` for active state detection + auto-close on navigate
- **Icons**: Lucide icons mapped via `buildCategoryIcons()` and `buildSecondaryIcons()` factory functions (lazy, memoized)
- **Custom icon**: `Newspaper` from `/src/app/components/icons/NewspaperIcon.tsx`

## 5. Design Tokens

### Typography

| Element | Font Family | Size | Weight | Extras |
|:--------|:------------|:-----|:-------|:-------|
| Section labels | `--font-inter` | `text-[11px]` (11px) | 700 | `uppercase tracking-[0.15em]`, `text-brand-red` or `text-white/40` |
| Category button labels | `--font-inter` | `text-[13px]` (13px) | 500 | `leading-tight` |
| CTA primary text | `--font-inter` | `text-[15px]` (15px) | 700 | `leading-tight` |
| CTA sub-text | `--font-inter` | `text-[12px]` (12px) | 400 | `text-white/70`, `leading-tight` |
| Secondary nav labels | `--font-inter` | `text-[15px]` (15px) | 500 | — |
| Account buttons | `--font-inter` | `text-[14px]` (14px) | 500 | — |
| Search input | `--font-inter` | `text-[15px]` (15px) | 400 | `placeholder:text-white/30` |
| Copyright | `--font-inter` | `text-[11px]` (11px) | 400 | `text-white/20` |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Header strip padding | `px-5 py-4` | `--space-50` / `--space-40` |
| Search padding | `px-5 pt-5 pb-3` | — |
| Category grid gap | `gap-2` (8px) | `--space-20` |
| CTA padding | `px-5 py-4` | `--space-50` / `--space-40` |
| Secondary nav item padding | `px-5 py-3` | `--space-50` / `--space-30` |
| Social icons gap | `gap-3` (12px) | `--space-30` |
| Social icon size | `w-10 h-10` (40px) | — |
| Dividers margin | `mx-5` (20px sides) | `--space-50` |
| Bottom copyright | `pb-8` (32px) | `--space-80` |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Backdrop | `--brand-navy` (#172134) | `--background` (#0F1923) | `bg-brand-navy dark:bg-background` |
| Category active | `--custom-primary` | Same | `bg-brand-red text-white` |
| Category inactive | `bg-white/5` | Same | `text-white/70 hover:bg-white/10` |
| Subscribe CTA | `--custom-primary` | Same | `bg-brand-red hover:bg-brand-red-hover` |
| Delivery CTA | `--brand-navy` | Same | `hover:bg-brand-navy-light dark:hover:bg-[#1A3A5F]` |
| Secondary active | `--custom-primary` (text) + `bg-brand-red/5` | Same | — |
| Secondary inactive | `text-white/60` | Same | `hover:text-white hover:bg-white/5` |
| Search input bg | `bg-white/5` | Same | `focus:bg-white/8` |
| Search input border | `border-white/10` | Same | `focus:border-brand-red/60` |
| Dividers | `border-white/8` | Same | — |

### Shadows / Borders

| Element | Value | Token |
|:--------|:------|:------|
| Header strip border | `border-b border-white/10` | — |
| Delivery CTA border | `border border-white/10` | — |
| Dividers | `border-t border-white/8` | — |
| Search input border | `border border-white/10` | `focus:border-brand-red/60` |

## 6. Section Style

Not applicable — this is a full-screen overlay, not a block pattern section.

## 7. BEM Class Map

No BEM classes in `style.css`. The component uses Tailwind exclusively. For WordPress:

| Suggested BEM Class | Element | Notes |
|:---------------------|:--------|:------|
| `.dp-mobile-menu` | Overlay root | `core/navigation` overlay mode |
| `.dp-mobile-menu__header` | Logo + close strip | — |
| `.dp-mobile-menu__search` | Search form | — |
| `.dp-mobile-menu__categories` | 3-col icon grid | — |
| `.dp-mobile-menu__cta` | Subscribe/delivery buttons | — |
| `.dp-mobile-menu__secondary` | Secondary nav list | — |
| `.dp-mobile-menu__social` | Social icon row | — |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 1024px` | Hamburger trigger visible. Overlay takes full viewport. Category grid is 3 columns. |
| `≥ 1024px` | Hamburger trigger hidden (`lg:hidden`). Desktop header tiers handle all navigation. |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Backdrop | `bg-brand-navy` → `bg-background` (#0F1923) | `dark:bg-background` |
| Delivery CTA hover | `hover:bg-brand-navy-light` → `hover:bg-[#1A3A5F]` | **Exemption**: dark:hover navy override |

**Note**: The mobile menu is already a "dark" UI (white text on navy/dark). Most colors stay the same; only the backdrop base shifts slightly darker in dark mode.

## 10. Accessibility

- **ARIA roles**: Hamburger has `aria-label="Open kieslys"`; Close has `aria-label="Sluit kieslys"`; Cart has `aria-label="Mandjie"`; User has `aria-label="My rekening"`
- **Keyboard navigation**: Escape key closes overlay; body scroll locked when open (`overflow: hidden`); staggered motion animation uses `AnimatePresence` for enter/exit
- **Focus management**: Auto-close on route change via `useEffect` on `location.pathname`
- **Screen reader**: All icon-only buttons have aria-labels; social links have `title` attributes

## 11. WordPress Mapping

### Construct Type
Part of Template Part — integrated into `parts/header.html` via `core/navigation` with `overlayMenu: "mobile"`.

### WordPress Implementation

WordPress handles responsive navigation natively through the `core/navigation` block's overlay mode. The full-screen mobile menu is configured via:

```html
<!-- wp:navigation {
    "overlayMenu": "mobile",
    "overlayBackgroundColor": "brand-navy",
    "overlayTextColor": "base",
    "layout": {"type":"flex","justifyContent":"center"}
} -->
    <!-- wp:navigation-link {..} /-->
    <!-- wp:navigation-submenu {..} /-->
<!-- /wp:navigation -->
```

**Limitations**: WordPress `core/navigation` overlay does not natively support:
- 3-column icon grid layout for categories
- Subscription CTAs within the menu
- Theme toggle button
- Cart count badge

These would require either:
1. A custom block (`dp/mobile-navigation`) in the plugin
2. Custom CSS + JS added to the navigation overlay via `wp_enqueue_scripts`
3. A Gravity Forms shortcode or custom HTML block for the CTA

### Existing WP Files
- No dedicated file — mobile menu is implicit within `parts/header.html` via `core/navigation` overlay mode
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/header-masthead.php` — may include mobile nav references

## 12. Dependencies

- **Sub-components**: `Logo` (common), `ThemeToggle` (common), `Newspaper` icon (custom), `SocialIcon` (local)
- **Consumed by**: `Header.tsx` — rendered inline within the header component
- **Shared utilities**: `useCart()` (CartContext), `useNavigate()`, `useLocation()` (React Router)
- **Animation library**: `motion/react` — `motion`, `AnimatePresence` for enter/exit animations and staggered children

## 13. Known Exemptions

- **`dark:hover` `#1A3A5F` navy overrides** — Delivery CTA hover state uses `dark:hover:bg-[#1A3A5F]`. Intentional dark mode override.