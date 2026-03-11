# Header

**Last updated**: 2026-02-23
**Version**: 1.0
**Category**: Part
**React source**: `/src/app/components/parts/Header.tsx`
**WordPress target**: Template Part — `/wordpress-export/themes/die-papier-theme/parts/header.html`

---

## 1. Purpose

The site-wide sticky header providing brand identity, primary/secondary navigation, search, cart, user account access, theme toggle, and a prominent "Huisaflewering" subscription CTA. It is the first element on every page and adapts between a three-tier desktop layout and a compact mobile layout with a hamburger-triggered `MobileMenu` overlay.

## 2. Visual Structure

```
┌─ <header> (.sticky .top-0 .z-50 .shadow-sm)
│
│  ┌─ Tier 1: Top Bar (desktop only, bg-black, hidden lg:block)
│  │  └─ Inner (.max-w-[1440px] .mx-auto, fluid px)
│  │     ├─ Left: HEADER_TOP_BAR_LINKS × 7 (text links)
│  │     └─ Right: SOCIAL_LINKS × 5 (icon links, border-l separator)
│  │
│  ┌─ Tier 2: Masthead (gradient-brand-red + texture overlay)
│  │  └─ Inner (.max-w-[1440px] .mx-auto, fluid px)
│  │     ├─ Left (mobile) / Center (desktop): Logo
│  │     ├─ Center (when open): Search overlay with live suggestions
│  │     └─ Right: ThemeToggle | Search | Cart (Sheet) | User | "Huisaflewering" CTA | MobileMenu
│  │
│  └─ Tier 3: Category Bar (desktop only, bg-white, border-b)
│     └─ Inner (.max-w-[1440px] .mx-auto, fluid px)
│        └─ <nav>: HEADER_CATEGORY_BAR_LINKS × 10 (centered, gap-8)
```

## 3. Props / Attributes

The Header is a self-contained component with no external props. All data is imported.

| Internal State | Type | Purpose | WP Equivalent |
|:---------------|:-----|:--------|:-------------|
| `searchOpen` | `boolean` | Toggles search overlay visibility | `core/search` block handles natively |
| `searchQuery` | `string` | Controlled input for search field | N/A |
| `searchData` | `CategoryArticle[] \| null` | Lazy-loaded article data for suggestions | N/A (WP uses AJAX/REST) |
| `searchSuggestions` | `CategoryArticle[]` | Debounced filtered results (max 5) | N/A |

## 4. Data Sources

- **Navigation links**: `/src/app/data/navigation.ts`
  - `HEADER_TOP_BAR_LINKS` — 7 links (Oor ons, Ons span, Beleid, Kontak, Adverteer, Algemene vrae, Nuusbrief)
  - `HEADER_CATEGORY_BAR_LINKS` — 10 links (Tuis, Nuus, Sport, Dink, Sake, Leefstyl, Gebeure, Multimedia, Doodsberrigte, E-uitgawes)
  - `SOCIAL_LINKS` — 5 links (Facebook, Instagram, X, LinkedIn, TikTok)
- **UI strings**: `/src/app/data/header.ts` — `HEADER_UI` object (search placeholder, cart labels, delivery button text)
- **Cart data**: `useCart()` from `/src/app/context/CartContext.tsx` — `count`, `items`, `removeItem`, `total`
- **Search data**: Lazy-loaded from `/src/app/data/categoryArticles.ts` via dynamic `import()`
- **Header texture**: `figma:asset/59f5f21fc3ab664ddea62e2cde218d15718c0a5b.png`
- **WordPress source**: `wp_navigation` block (menus managed in admin), `core/site-logo`, `core/search`, `woocommerce/mini-cart`

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Line-Height | Weight | Extras |
|:--------|:------------|:-----------|:------------|:-------|:-------|
| Top bar links | `--font-inter` | `text-xs` / `text-sm` (md) | default | 500 (`font-medium`) | `whitespace-nowrap` |
| Category bar links | `--font-inter` | `text-sm` | default | 700 (`font-bold`) | `uppercase tracking-wide` |
| Search input | `--font-inter` | `text-lg` | default | 400 | `placeholder-gray-400` |
| Search suggestion title | `--font-inter` | `text-sm` | default | 400 | — |
| Search suggestion category | `--font-inter` | `text-xs` | default | 700 | `uppercase`, `text-brand-red` |
| Cart item title | `--font-heading` | `text-sm` | `--lh-h3` | 400 | `fvs: --fvs-h3`, `ls: --ls-h3` |
| Cart item type | `--font-inter` | `text-xs` | default | 400 | — |
| Cart price | `--font-inter` | default | default | 700 | `text-brand-red` |
| Cart total | `--font-inter` | `text-lg` | default | 700 | — |
| Delivery CTA | `--font-inter` | `text-sm` | default | 700 | `tracking-wide` |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Top bar height | `h-10` (40px) | — |
| Masthead height | `h-[80px]` mobile / `h-[124px]` desktop | — |
| Category bar height | `h-12` (48px) | — |
| Fluid horizontal padding | `clamp(1rem, 4vw, 2rem)` | Applied via inline style on all 3 tiers |
| Max content width | `max-w-[1440px]` | Structural chrome exemption |
| Top bar link gap | `gap-6` | `--space-60` |
| Category bar link gap | `gap-8` | `--space-80` |
| Social icons gap | `gap-4` | `--space-40` |
| Right-side icon gap | `gap-1` mobile / `gap-3` desktop | `--space-10` / `--space-30` |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Top bar bg | `#000000` (`bg-black`) | `--background` (`bg-background`) | — |
| Top bar text | `#FFFFFF` | `#FFFFFF` (inherited) | — |
| Masthead bg | `var(--gradient-brand-red)` | Same | `--gradient-brand-red` |
| Masthead text | `#FFFFFF` | `#FFFFFF` | — |
| Category bar bg | `#FFFFFF` (`bg-white`) | `--background` | `--background` |
| Category bar text | `--brand-navy` | `--foreground` | `text-brand-navy dark:text-foreground` |
| Category bar hover | `--custom-primary` | Same | `hover:text-brand-red` |
| Category bar border | `border-gray-200` | `--border` | `dark:border-border` |
| Search overlay bg | `bg-white/10 backdrop-blur-sm` | Same | — |
| Search suggestions bg | `#FFFFFF` | `--card` | `bg-white dark:bg-card` |
| Cart badge | `--custom-primary` | Same | `bg-brand-red` |
| Delivery CTA bg | `--custom-primary` | Same | `bg-brand-red` |
| Delivery CTA hover | `--custom-primary-2` | Same | `hover:bg-brand-red-hover` |

### Shadows / Borders

| Element | Value | Token |
|:--------|:------|:------|
| Header shadow | `shadow-sm` | `--wp--preset--shadow--200` |
| Top bar social separator | `border-l border-gray-700` | — |
| Category bar bottom | `border-b border-gray-200` | `--wp--custom--border-width--100` |
| Masthead bottom | `border-b border-gray-800` | — |
| Search suggestions shadow | `shadow-xl` | `--wp--preset--shadow--500` |
| Search suggestions dark shadow | `var(--shadow-dark-500)` | Dark mode shadow token |

## 6. Section Style

Not applicable — the header is a template part, not a section pattern.

## 7. BEM Class Map

The React component uses Tailwind utility classes exclusively. No custom BEM classes exist in `style.css` for the header. WordPress should use semantic classes:

| Suggested BEM Class | Element | WordPress Block |
|:---------------------|:--------|:---------------|
| `.dp-header` | Root `<header>` wrapper | `core/group` (template part) |
| `.dp-header__top-bar` | Black top bar | `core/group` |
| `.dp-header__masthead` | Red gradient masthead | `core/group` with custom CSS |
| `.dp-header__category-bar` | Desktop category nav | `core/group` |
| `.dp-header__logo` | Logo container | `core/site-logo` |
| `.dp-header__search` | Search overlay | `core/search` |
| `.dp-header__cart` | Cart sheet trigger | `woocommerce/mini-cart` |
| `.dp-header__cta` | "Huisaflewering" button | `core/button` with link |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 1024px` (mobile/tablet) | Top bar hidden. Category bar hidden. Masthead height 80px. Logo left-aligned. MobileMenu hamburger visible. Delivery CTA hidden. ThemeToggle hidden (available in MobileMenu). |
| `≥ 1024px` (desktop) | All 3 tiers visible. Logo absolutely centered in masthead. Category bar centered nav with 10 links. MobileMenu trigger hidden. Delivery CTA visible. ThemeToggle visible. |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Top bar bg | `bg-black` → `bg-background` (`#0F1923`) | `dark:bg-background` |
| Category bar bg | `bg-white` → `bg-background` | `dark:bg-background` |
| Category bar text | `text-brand-navy` → `text-foreground` | `dark:text-foreground` |
| Category bar border | `border-gray-200` → `border-border` | `dark:border-border` |
| Search suggestions bg | `bg-white` → `bg-card` | `dark:bg-card` |
| Search suggestions shadow | `shadow-xl` → `var(--shadow-dark-500)` | Dark shadow token |
| Cart item borders | `border-gray-100` → `border-border` | `dark:border-border` |
| Cart item title | `text-brand-navy` → `text-foreground` | `dark:text-foreground` |

## 10. Accessibility

- **ARIA roles**: `<header>` landmark; search `<form>` with `type="text"` input; cart trigger has `aria-label="Mandjie"`; search trigger has `aria-label="Soek"`; user link has `aria-label="My rekening"`
- **Keyboard navigation**: Escape key closes search overlay; Sheet (cart) handles focus trap via Radix primitives; all interactive elements are focusable
- **Skip to content**: Handled separately by `SkipToContent.tsx` in the layout
- **Contrast**: White text on brand red gradient (large text, passes WCAG AA); category bar navy text on white (exceeds 7:1)

## 11. WordPress Mapping

### Construct Type
Template Part (`header.html`)

### Block Composition

The WordPress header needs 3 separate groups to match the React 3-tier structure. The current `header.html` only has a single tier:

```html
<!-- wp:group {"tagName":"header","className":"dp-header","style":{"position":{"type":"sticky"}}} -->
<header class="wp-block-group dp-header">

    <!-- Tier 1: Top Bar -->
    <!-- wp:group {"className":"dp-header__top-bar","backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
    <div class="wp-block-group dp-header__top-bar">
        <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"center"}} -->
            <!-- wp:navigation --> <!-- Top bar links -->
            <!-- wp:social-links --> <!-- Social icons -->
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- Tier 2: Masthead -->
    <!-- wp:group {"className":"dp-header__masthead","layout":{"type":"constrained"}} -->
    <div class="wp-block-group dp-header__masthead">
        <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
            <!-- wp:site-logo -->
            <!-- wp:group --> <!-- Right utility icons -->
                <!-- wp:search -->
                <!-- woocommerce/mini-cart -->
                <!-- wp:navigation-link {"label":"My rekening"} -->
                <!-- wp:buttons --> <!-- Huisaflewering CTA -->
            <!-- /wp:group -->
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- Tier 3: Category Bar -->
    <!-- wp:group {"className":"dp-header__category-bar","backgroundColor":"base","layout":{"type":"constrained"}} -->
    <div class="wp-block-group dp-header__category-bar">
        <!-- wp:navigation {"layout":{"type":"flex","justifyContent":"center"}} -->
            <!-- Category links populated from WP admin menu -->
        <!-- /wp:navigation -->
    </div>
    <!-- /wp:group -->

</header>
<!-- /wp:group -->
```

### Existing WP Files
- Part: `/wordpress-export/themes/die-papier-theme/parts/header.html` — **INCOMPLETE**: only has a single-tier layout with hardcoded navigation links. Missing top bar, gradient masthead, and most functionality.
- Part variant: `/wordpress-export/themes/die-papier-theme/parts/header-transparent.html` — transparent variant for hero pages, also single-tier.
- Pattern: `/wordpress-export/themes/die-papier-theme/patterns/header-masthead.php` — masthead pattern (needs review).

### CSS Required in style.css

The following custom CSS is needed for the masthead gradient, texture overlay, and sticky positioning:

```css
/* Header masthead gradient + texture */
.dp-header__masthead {
    background: var(--gradient-brand-red);
    position: relative;
    overflow: hidden;
}

.dp-header__masthead::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('./assets/images/header-texture.png');
    background-size: cover;
    background-position: center;
    mix-blend-mode: multiply;
    pointer-events: none;
}

/* Top bar responsive hide */
.dp-header__top-bar {
    display: none;
}
@media (min-width: 1024px) {
    .dp-header__top-bar { display: block; }
}

/* Category bar responsive hide */
.dp-header__category-bar {
    display: none;
}
@media (min-width: 1024px) {
    .dp-header__category-bar { display: block; }
}
```

## 12. Dependencies

- **Sub-components**: `Logo` (common), `MobileMenu` (part), `ThemeToggle` (common), ShadCN `Sheet`, ShadCN `Button`
- **Consumed by**: `MainLayout.tsx`, `CheckoutLayout.tsx` (via routes)
- **Shared utilities**: `useCart()` (CartContext), `useDebounce()` hook, `useNavigate()` (React Router)
- **Assets**: Header texture image (`figma:asset/59f5f21...png`)

## 13. Known Exemptions

- **Structural chrome `max-w-[1440px]`** — Intentional layout constraint on all three header tiers. Do not change to theme.json `contentSize`.
- **`dark:hover` `#1A3A5F` navy overrides** — Not directly in header but the cart hover states reference navy tones.