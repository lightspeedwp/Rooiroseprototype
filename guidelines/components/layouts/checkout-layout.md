# Checkout Layout

**Last updated**: 2026-02-23
**Category**: Layout
**React source**: `/src/app/components/layouts/CheckoutLayout.tsx`
**WordPress target**: Template — `/wordpress-export/themes/die-papier-theme/templates/page-checkout.html` (not yet created)

---

## 1. Purpose

A minimal, distraction-free layout for the checkout and order confirmation flow. Replaces the full site Header and Footer with a simplified header (logo + "Veilige Betaling" badge + back-to-cart link) and a minimal footer (copyright + legal links + payment method indicators). Designed to maximise conversion by removing navigation distractions.

## 2. Visual Structure

```
┌─ Root div (.min-h-screen .bg-gray-50 dark:bg-background .flex .flex-col .font-inter)
│
│  ┌─ Header (bg-white dark:bg-card, border-b, h-[72px], sticky top-0 z-50)
│  │  └─ Inner (.max-w-[1440px] .mx-auto .px-4, flex justify-between)
│  │     ├─ Left: Logo (h-10) + "Veilige Betaling" badge (Lock icon, hidden md:flex)
│  │     └─ Right: "Terug na Mandjie" link (ArrowLeft icon)
│  │
│  ┌─ <main> (flex-1, .max-w-[1440px] .mx-auto, p-4 md:py-12)
│  │  └─ <Suspense fallback={<CheckoutLoader />}>
│  │     └─ {children} or <Outlet />
│  │
│  └─ Footer (bg-white dark:bg-card, border-t, py-8, mt-auto)
│     └─ Inner (.max-w-[1440px] .mx-auto .px-4, flex col→row)
│        ├─ Copyright: "© 2026 Die Papier. Alle regte voorbehou."
│        ├─ Legal links × 3: Privaatheidsbeleid, Terme, Terugsendingsbeleid
│        └─ Payment badges: Visa, Mastercard, Secure SSL (grayscale, hover reveals)
```

## 3. Props / Attributes

| Prop (React) | Type | Default | Purpose |
|:-------------|:-----|:--------|:--------|
| `children` | `React.ReactNode?` | `undefined` | Legacy mode. When absent, renders `<Outlet />`. |

## 4. Data Sources

No external data — all strings are hardcoded Afrikaans text.

### Hardcoded Strings (for WordPress extraction)

| String | Location | Notes |
|:-------|:---------|:------|
| `"Veilige Betaling"` | Header badge | Uppercase, tracking-widest |
| `"Terug na Mandjie"` | Header link | Links to `/mandjie` |
| `"Laai..."` | Loader spinner | Suspense fallback |
| `"Die Papier"` | Footer copyright | Italicised with `<em>` |
| `"Alle regte voorbehou."` | Footer copyright | — |
| `"Privaatheidsbeleid"` | Footer link | → `/beleid/privaatheidsbeleid` |
| `"Terme & Voorwaardes"` | Footer link | → `/beleid/terme-en-voorwaardes` |
| `"Terugsendingsbeleid"` | Footer link | → `/beleid/terugsendingsbeleid` |

## 5. Design Tokens

### Typography

| Element | Font Family | Size Token | Weight | Extras |
|:--------|:------------|:-----------|:-------|:-------|
| Badge text | `--font-inter` | `text-xs` | 700 | `uppercase tracking-widest` |
| Back link | `--font-inter` | `text-sm` | 500 | — |
| Loader text | `--font-inter` | default | 400 | `text-gray-600 dark:text-gray-400` |
| Copyright | `--font-inter` | `text-xs` | 400 | `text-gray-500 dark:text-gray-400` |
| Legal links | `--font-inter` | `text-xs` | 400 | `hover:text-brand-red underline` |

### Spacing

| Property | Value | Token |
|:---------|:------|:------|
| Header height | `h-[72px]` | — |
| Header px | `px-4` | `--space-40` |
| Main px | `p-4 md:py-12` | `--space-40` / `--space-100` |
| Footer py | `py-8` | `--space-80` |
| Max content width | `max-w-[1440px]` | Structural chrome exemption |
| Badge separator | `border-l border-gray-200 pl-6 h-8` | — |
| Legal links gap | `gap-6` | `--space-60` |
| Payment badges gap | `gap-4` | `--space-40` |

### Colors

| Element | Light Mode | Dark Mode | Token |
|:--------|:-----------|:----------|:------|
| Page bg | `bg-gray-50` | `bg-background` | `dark:bg-background` |
| Header bg | `bg-white` | `bg-card` | `dark:bg-card` |
| Header border | `border-gray-200` | `border-border` | `dark:border-border` |
| Badge text | `text-brand-navy` | `text-foreground` | `dark:text-foreground` |
| Back link | `text-brand-navy` | `text-foreground` | `dark:text-foreground` |
| Back link hover | `text-brand-red` | Same | `hover:text-brand-red` |
| Footer bg | `bg-white` | `bg-card` | `dark:bg-card` |
| Footer border | `border-gray-200` | `border-border` | `dark:border-border` |
| Footer text | `text-gray-500` | `text-gray-400` | `dark:text-gray-400` |
| Payment badges | `opacity-60 grayscale` | Same | `hover:grayscale-0` |

## 6. Section Style

Not applicable — layout wrapper.

## 7. BEM Class Map

| BEM Class | Element | WordPress Block |
|:----------|:--------|:---------------|
| `.dp-checkout` | Root wrapper | Template-level class |
| `.dp-checkout__header` | Minimal header | `core/group` |
| `.dp-checkout__badge` | "Veilige Betaling" | `core/group` with icon |
| `.dp-checkout__main` | Content area | `core/group` with `tagName: main` |
| `.dp-checkout__footer` | Minimal footer | `core/group` |

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|:-----------|:----------|
| `< 768px` (mobile) | "Veilige Betaling" badge hidden. Main content `p-4`. Footer stacks vertically (column). |
| `≥ 768px` (desktop) | Badge visible. Main content `py-12`. Footer row layout. |

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Page bg | `bg-gray-50` → `bg-background` | `dark:bg-background` |
| Header/Footer bg | `bg-white` → `bg-card` | `dark:bg-card` |
| Borders | `border-gray-200` → `border-border` | `dark:border-border` |
| Badge/back link text | `text-brand-navy` → `text-foreground` | `dark:text-foreground` |
| Footer text | `text-gray-500` → `text-gray-400` | `dark:text-gray-400` |

## 10. Accessibility

- **Header**: Logo links to home; back link has descriptive text "Terug na Mandjie"
- **Lock icon**: Paired with visible "Veilige Betaling" text — not icon-only
- **Main element**: Uses `<main>` tag with `flex-1` for landmark
- **Legal links**: Standard `<a>` elements with `underline` for visibility
- **Loader**: Spinner with descriptive "Laai..." text

## 11. WordPress Mapping

### Construct Type
Custom Template — `page-checkout.html`

### WordPress Implementation

The checkout layout needs its own WordPress template that does NOT include the standard `header.html` and `footer.html` template parts. Instead, it uses inline simplified header/footer:

```html
<!-- wp:group {"tagName":"div","className":"dp-checkout","layout":{"type":"default"}} -->
<div class="wp-block-group dp-checkout">

    <!-- Minimal Header -->
    <!-- wp:group {"tagName":"header","className":"dp-checkout__header","style":{"position":{"type":"sticky"}}} -->
    <header class="wp-block-group dp-checkout__header">
        <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
            <!-- wp:site-logo {"width":120} /-->
            <!-- wp:group {"layout":{"type":"flex"}} -->
                <!-- Lock icon + "Veilige Betaling" text -->
            <!-- /wp:group -->
            <!-- wp:paragraph --> <!-- "Terug na Mandjie" link -->
        <!-- /wp:group -->
    </header>
    <!-- /wp:group -->

    <!-- Main Content -->
    <!-- wp:group {"tagName":"main","className":"dp-checkout__main","layout":{"type":"constrained"}} -->
    <main class="wp-block-group dp-checkout__main">
        <!-- wp:woocommerce/checkout /-->
    </main>
    <!-- /wp:group -->

    <!-- Minimal Footer -->
    <!-- wp:group {"tagName":"footer","className":"dp-checkout__footer"} -->
    <footer class="wp-block-group dp-checkout__footer">
        <!-- Copyright, legal links, payment badges -->
    </footer>
    <!-- /wp:group -->

</div>
<!-- /wp:group -->
```

### WooCommerce Integration

In WordPress, the checkout page content is provided by:
- `woocommerce/checkout` block (WooCommerce Blocks plugin) for the modern checkout
- Or `[woocommerce_checkout]` shortcode for the classic checkout

The order confirmation page uses:
- `woocommerce/order-confirmation` block or `[woocommerce_thankyou]` shortcode

### Existing WP Files
- **Not yet created.** Needs:
  - `/wordpress-export/themes/die-papier-theme/templates/page-checkout.html`
  - `/wordpress-export/themes/die-papier-theme/templates/page-order-confirmation.html`
  - Or a single `page-checkout.html` handling both states via WooCommerce

### Routes Mapping

| React Route | WordPress Page |
|:------------|:---------------|
| `/betaal` | WooCommerce checkout page (uses `page-checkout.html` template) |
| `/bestelling-bevestiging` | WooCommerce thank you page (redirect from checkout) |
| `/mandjie` | WooCommerce cart page (uses standard `MainLayout` / `page.html`) |

## 12. Dependencies

- **Sub-components**: `Logo` (common)
- **Consumed by**: `routes.tsx` — wraps `/betaal` and `/bestelling-bevestiging` routes
- **Route hierarchy**: `RootLayout` → **`CheckoutLayout`** → `CheckoutPage` | `OrderConfirmationPage`
- **Icons**: Lucide `Lock`, `ArrowLeft`
- **Loading**: `React.Suspense` with `CheckoutLoader` fallback

## 13. Known Exemptions

- **Structural chrome `max-w-[1440px]`** — Intentional layout constraint on header, main, and footer containers.
