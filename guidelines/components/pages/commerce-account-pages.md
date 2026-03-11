# Commerce & Account Pages

**Last updated**: 2026-02-24
**Category**: Pages (Group)
**WordPress target**: WooCommerce + custom account pages

---

This document covers shopping cart, checkout, order confirmation, subscription, and account management pages.

## Pages Covered

| Page | React Source | Route | Layout | Purpose |
|:-----|:------------|:------|:-------|:--------|
| **Cart** | `Cart.tsx` | `/mandjie` | MainLayout | Shopping cart (e-edition, delivery subs) |
| **Checkout** | `Checkout.tsx` | `/betaal` | CheckoutLayout | Payment form + order summary |
| **Order Confirmation** | `OrderConfirmation.tsx` | `/bestelling-bevestiging` | CheckoutLayout | Post-purchase confirmation |
| **My Account** | `MyAccount.tsx` | `/my-rekening` | MainLayout | Dashboard with tabs (profile, orders, subscriptions, newsletters) |
| **My E-Editions** | `MyEEditions.tsx` | `/my-e-uitgawes` | MainLayout | Digital e-edition library |
| **Register** | `Register.tsx` | `/registreer` | MainLayout | Account registration form |
| **Account Activation** | `AccountActivation.tsx` | `/aktiveer-rekening` | MainLayout | Email activation confirmation |
| **Subscribe Delivery** | `SubscribeDelivery.tsx` | `/inteken/aflewering` | MainLayout | Physical delivery subscription signup |
| **Subscribe E-Edition** | `SubscribeEEdition.tsx` | `/inteken/e-uitgawe` | MainLayout | Digital e-edition subscription signup |

## Key Implementation Notes

### Cart (`Cart.tsx`)
- Reads from `CartContext` (items, totals, add/remove/update actions)
- Shows line items with quantity controls, subtotal, delivery estimate
- **Item types**: `type: 'single'` (e-edition ad hoc purchase) and `type: 'subscription'` (recurring plan)
- **Pending enhancement** (EE-008): Add type badges — "Eenmalig" for single items, "Intekening" for subscription items
- "Gaan voort na betaling" CTA navigates to `/betaal`

### Checkout (`Checkout.tsx`)
- Uses `CheckoutLayout` (minimal chrome)
- Multi-step form: billing → delivery → payment
- Reads cart state from `CartContext`
- **Guest checkout disabled**: All buyers must have an account. If not logged in, redirect to registration/login page.
- **Logged-in view**: Pre-fills billing info from account data. Payment via Payfast.
- **E-edition specific**: When cart contains e-edition/subscription products, delivery step is skipped (virtual products)

### Order Confirmation (`OrderConfirmation.tsx`)
- **Demo toggle**: `isGuestMode` state switcher
- Guest mode: shows "Create Account" banner with email and password fields
- Logged-in mode: shows download/access links directly
- For e-edition purchases: shows "Gaan na jou biblioteek" link → `/my-e-uitgawes`

### My Account (`MyAccount.tsx`)
- Tabbed interface with 4 tabs:
  - **Profiel**: Personal details, address
  - **Bestellings**: Order history (includes e-edition purchases)
  - **Intekeninge**: Active subscriptions, including e-edition subscription status, manage/upgrade links
  - **Nuusbriewe**: Newsletter preferences
- The "Intekeninge" tab connects to the e-edition access system — shows plan name, status, next payment date
- Link to "My E-Uitgawes" library from subscription tab

### My E-Editions (`MyEEditions.tsx`)
- Digital e-edition library for logged-in users
- **Data source**: `buildUserLibrary()` from `/src/app/data/mockUserAccess.ts`
- **Sections**: Subscription status card, search/filter bar, view toggle (grid/list), edition cards with acquisition badges, empty state
- **Pending enhancement** (EE-010): Add demo toggle for logged-out redirect state
- See [My E-Editions page spec](/guidelines/components/pages/my-eeditions.md) for full details

### Subscribe Pages (`SubscribeEEdition.tsx`, `SubscribeDelivery.tsx`)
- ContentHero + pricing tiers + FAQs + CTAs
- Data from `/src/app/data/subscriptions.ts`
- **E-Edition subscribe** (`/inteken/e-uitgawe`): 3 plans (1M R140, 3M R390, 12M R1,400) with 14-day free trial (max 2 editions, card required). "Teken In" adds subscription product to cart and navigates directly to `/betaal` (bypasses cart page).
- **Delivery subscribe** (`/inteken/aflewering`): 4 plans (1M R140, 3M R455, 6M R910, 12M R1,820). Links to external On the Dot service. Delivery does NOT include digital access.

## WordPress Mapping

| Page | WP Implementation |
|:-----|:-----------------|
| Cart | WooCommerce `woocommerce/cart` block |
| Checkout | WooCommerce `woocommerce/checkout` block (uses `page-checkout.html` template) |
| Order Confirmation | WooCommerce order-received endpoint |
| My Account | WooCommerce `woocommerce/my-account` block with custom tab styling |
| My E-Editions | Custom page template with WC Memberships "My Content" or custom ACF loop |
| Register | WooCommerce registration or custom form |
| Subscribe E-Edition | WooCommerce subscription product page with `die-papier/section-pricing-table` pattern |
| Subscribe Delivery | Static page linking to external On the Dot service |

### Existing WP Files
- Template: `/wordpress-export/themes/die-papier-theme/templates/page-checkout.html` (planned)
- WooCommerce templates in `/wordpress-export/themes/die-papier-theme/woocommerce/` (if customized)

## Demo State Switchers

| Page | Toggle | States |
|------|--------|--------|
| Cart | None currently | — |
| Checkout | None (guest checkout disabled) | Logged-in only |
| Order Confirmation | `isGuestMode` | Guest / Logged-in (default: Logged-in) |
| My E-Editions | Demo dropdown | Uitgelogd / Proeftydperk / Intekenaar / Verval / Geen koop / Koop |

## Dependencies

- **Context**: `CartContext` (Cart, Checkout, OrderConfirmation)
- **Mock Data**: `/src/app/data/mockUserAccess.ts` (`getOwnershipStatus`, `buildUserLibrary`, `MOCK_SUBSCRIPTION`)
- **Components**: `PageContainer`, `SEO`, `ContentHero`, `PageFAQSection`, `CallToAction`
- **Data**: `/src/app/data/subscriptions.ts`, `/src/app/data/eEditions.ts`

## Known Exemptions

None.