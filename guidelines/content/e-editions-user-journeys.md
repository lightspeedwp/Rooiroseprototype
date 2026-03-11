# E-Editions User Journeys & Page States

**Last updated**: 2026-03-01
**Version**: 1.0

This document defines the user experience, page states, and purchase flows for all e-edition related pages in the *Die Papier* prototype React application, and maps each flow to its WordPress/WooCommerce production implementation.

---

## Table of Contents

1. [Page Inventory](#1-page-inventory)
2. [User States](#2-user-states)
3. [Page-by-Page Specifications](#3-page-by-page-specifications)
   - 3.1 [E-Editions Archive (`/e-uitgawes`)](#31-e-editions-archive-e-uitgawes)
   - 3.2 [Single E-Edition (`/e-uitgawe/:slug`)](#32-single-e-edition-e-uitgaweslug)
   - 3.3 [My E-Editions Library (`/my-e-uitgawes`)](#33-my-e-editions-library-my-e-uitgawes)
   - 3.4 [Subscribe to E-Edition (`/inteken/e-uitgawe`)](#34-subscribe-to-e-edition-intekene-uitgawe)
4. [Purchase User Journey (End-to-End)](#4-purchase-user-journey-end-to-end)
5. [Registration & Login Policy](#5-registration--login-policy)
6. [Prototype Implementation (React)](#6-prototype-implementation-react)
7. [WordPress / WooCommerce Implementation](#7-wordpress--woocommerce-implementation)
8. [WooCommerce Memberships — E-Edition Access](#8-woocommerce-memberships--e-edition-access)
9. [WooCommerce Subscriptions — Recurring Access](#9-woocommerce-subscriptions--recurring-access)
10. [Cross-References](#10-cross-references)

---

## 1. Page Inventory

| Route | Page Component | Purpose |
|---|---|---|
| `/e-uitgawes` | `EEditions.tsx` | Archive/browse all available e-editions for purchase |
| `/e-uitgawe/:slug` | `SingleEEdition.tsx` | Single e-edition product page (title, excerpt, add-to-cart, reader) |
| `/my-e-uitgawes` | `MyEEditions.tsx` | Logged-in user's library of purchased/subscription-covered editions |
| `/inteken/e-uitgawe` | `SubscribeEEdition.tsx` | E-edition subscription landing page (1/3/12 month plans) |
| `/mandjie` | `Cart.tsx` | Shopping cart with all cart items |
| `/betaal` | `Checkout.tsx` | Checkout form (billing, payment) |
| `/bestelling-bevestiging` | `OrderConfirmation.tsx` | Order confirmation with download/access links |

---

## 2. User States

The application recognises the following user states that affect what is displayed:

| State | Description | Prototype Mechanism |
|---|---|---|
| **Logged Out** (Guest) | No session. Can browse and see prices but must register/login to purchase (guest checkout disabled). | Default state; no auth context. |
| **Trial User** | Authenticated user on a 14-day free trial. Can access max 2 e-editions. Card on file via Payfast. | Mock: trial countdown badge, limited access. |
| **Active Subscriber** | Authenticated user with active subscription. Can access editions from subscription start date onward. | Mock: editions after `SUBSCRIPTION_CUTOFF`. |
| **Expired Subscriber** | Authenticated user whose subscription has expired/cancelled. Retains access to individually purchased editions only. Shows re-subscribe banner. | Mock: expired status badge + re-subscribe CTA. |
| **Logged In — Not Purchased** | Authenticated user with no subscription and no purchases for the specific edition. | Mock: editions outside subscription cutoff and not in `INDIVIDUAL_PURCHASE_IDS`. |
| **Logged In — Purchased** | Authenticated user who has individually purchased the specific edition (R35 one-off). | Mock: editions in `INDIVIDUAL_PURCHASE_IDS`. |

### Ownership Sources

An e-edition is "owned" if:
1. **Subscription-covered:** The edition's publication date falls on or after the user's **active subscription start date** (not full historical archive). Resubscribers only regain access from their latest subscription start.
2. **Individually purchased:** The user has a completed WooCommerce order containing the specific e-edition product. Access is permanent.
3. **Trial access:** The user is on a 14-day trial and has not exceeded the 2-edition trial limit.

---

## 3. Page-by-Page Specifications

### 3.1 E-Editions Archive (`/e-uitgawes`)

**Purpose:** Browse all available e-editions. This is the shop front for individual (ad hoc, R35) purchases.

#### Logged Out

| Element | Displayed | Notes |
|---|---|---|
| ContentHero banner | Yes | Title "E-uitgawes", subtitle about R35 per issue |
| "Gaan na my biblioteek" button | Yes | Links to `/my-e-uitgawes` (will redirect to login in WP) |
| Edition grid cards | Yes | Cover image, title, date, price (R35), "Koop" add-to-cart button |
| Add-to-cart buttons | Yes | Fully functional — adds to CartContext |
| Sidebar ads | Yes | Standard ad placements |
| Pagination | Yes | 8 items per page |

#### Logged In: Active Subscriber

| Element | Displayed | Notes |
|---|---|---|
| All common elements above | Yes | Same hero, grid, sidebar, pagination, FAQ |
| Ownership badges on ALL cards | Yes | Green "Intekening" badge on every edition cover |
| "Koop" to "Lees" on ALL editions | Yes | All editions replace price + "Koop" with "In biblioteek" label + "Lees" link |

#### Logged In: No Subscription, No Purchases

| Element | Displayed | Notes |
|---|---|---|
| All common elements above | Yes | Same hero, grid, sidebar, pagination, FAQ |
| Ownership badges | No | No badges — user owns nothing |
| Edition cards | Yes | Identical to logged-out: price (R35) + "Koop" button on all editions |

#### Logged In: No Subscription, Has Individual Purchases

| Element | Displayed | Notes |
|---|---|---|
| All common elements above | Yes | Same hero, grid, sidebar, pagination, FAQ |
| Ownership badges on purchased cards | Yes | Green "Gekoop" badge only on individually purchased editions |
| "Koop" to "Lees" on purchased editions | Yes | Purchased editions show "In biblioteek" + "Lees"; unowned editions show price + "Koop" |

#### Demo State Switcher

The archive page includes a fixed bottom-right demo dropdown with 6 states:

| State | `demoState` value | Effect |
|-------|-------------------|--------|
| Uitgelogd | `logged-out` | No badges, all cards show price + "Koop". Must register to purchase (guest checkout disabled). |
| Proeftydperk | `trial` | Trial countdown badge shown. Max 2 editions accessible with "Lees" buttons. Remaining editions show price + "Koop". Upgrade CTA banner displayed. |
| Intekenaar | `subscriber` | Editions from subscription start date onward show "Intekening" badge + "Lees". Older editions show price + "Koop". |
| Verval intekenaar | `expired-subscriber` | Re-subscribe banner at top. Previously accessible editions greyed/locked. Only individually purchased editions show "Lees". |
| Ingelogd (geen koop) | `logged-in-no-purchases` | No badges, all cards show price + "Koop" |
| Ingelogd (koop) | `logged-in-with-purchases` | Only individually purchased editions show "Gekoop" badge + "Lees"; rest show price + "Koop" |

> **Note:** In WordPress, these states will be driven by WooCommerce Memberships access checks, not a demo switcher. The demo dropdown replaces the old button-based switcher for scalability.

---

### 3.2 Single E-Edition (`/e-uitgawe/:slug`)

**Purpose:** Product page for a specific e-edition. This is where users see the title, description, and either purchase or read the edition.

#### ALL States (Common Elements)

Every visitor, regardless of auth state, always sees:
- **Breadcrumbs:** Tuis > E-uitgawes > [Edition Title]
- **Cover image:** Newspaper mock-up with Die Papier branding, cover photo, date strip
- **Title (H1):** Full edition title (e.g. "Die Papier - 13 Februarie 2026")
- **Date, page count, edition number:** Metadata line
- **Description/excerpt:** Full description paragraph
- **Social share:** Share buttons
- **Related editions grid:** 4 other recent editions with ownership badges

#### State: Logged Out

| Element | Displayed | Notes |
|---|---|---|
| Price display | Yes | Large "R 35.00" with "eenmalige aankoop" label |
| "Voeg by mandjie — R 35.00" button | Yes | Adds to CartContext; changes to "Gaan na mandjie" once added |
| "Teken eerder in" link | Yes | Links to `/inteken/e-uitgawe` |
| Subscription upsell text | Yes | "Of teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes." |
| **Locked preview section** | Yes | Blurred cover background, lock icon, "Koop hierdie uitgawe om te lees" message |
| **Subscription CTA section** | Yes | Navy banner with value proposition, 3 feature bullets, plan price summary, "Bekyk intekeningplanne" button to `/inteken/e-uitgawe` |
| Issuu reader embed | No | Not shown — content is locked |

#### State: Logged In — Not Purchased

| Element | Displayed | Notes |
|---|---|---|
| All elements from Logged Out | Yes | Identical purchase flow |
| **Subscription CTA section** | Yes | Same as logged-out |
| Issuu reader embed | No | Still locked — user doesn't own this edition |

#### State: Logged In — Purchased (via Subscription)

| Element | Displayed | Notes |
|---|---|---|
| Price / add-to-cart | No | Replaced by ownership confirmation |
| Green confirmation banner | Yes | "Hierdie uitgawe is ingesluit by jou digitale intekening." with check icon |
| "Lees nou" button | Yes | Scrolls to `#reader` section |
| "My biblioteek" link | Yes | Links to `/my-e-uitgawes` |
| **Issuu reader embed** | Yes | Full Issuu iframe, full width |
| **Subscription CTA section** | No | Hidden — user already has access |
| "Gekoop" badge on cover | Yes | "Intekening" badge on cover image |

#### State: Logged In — Purchased (Individual Purchase)

| Element | Displayed | Notes |
|---|---|---|
| All elements from Subscription state | Yes | Same layout |
| Green confirmation banner text | Different | "Jy het hierdie uitgawe reeds gekoop." |
| Badge text | Different | "Gekoop" instead of "Intekening" |
| **Subscription CTA section** | No | Hidden — user already has access |

---

### 3.3 My E-Editions Library (`/my-e-uitgawes`)

**Purpose:** Logged-in user's personal library showing all editions they have access to.

#### Logged Out

This page should **redirect to login**. In the prototype, it renders for demo purposes with mock data.

In WordPress, this will be a WooCommerce Memberships restricted page that redirects unauthenticated users to the login/register page.

#### Logged In

| Element | Displayed | Notes |
|---|---|---|
| Subscription status card | Yes | Plan name, status (active/expired), next payment date, amount |
| Subscription management links | Yes | "Bestuur intekening", "Opgradeer" |
| Search & filter bar | Yes | Search by title, filter by acquisition type (all/subscription/purchase) |
| View toggle (grid/list) | Yes | Grid or list view modes |
| Edition cards | Yes | Cover image, title, date, acquisition badge ("INTEKENING" / "GEKOOP"), "Lees" button |
| Empty state | Conditional | If no editions owned: "Jy het nog geen e-uitgawes nie" with CTA to browse/subscribe |
| "Koop meer uitgawes" link | Yes | Links to `/e-uitgawes` archive |

**Data source (prototype):** `buildUserLibrary()` function combines:
- Editions after `SUBSCRIPTION_CUTOFF` (tagged as `acquiredVia: 'subscription'`)
- Editions in `INDIVIDUAL_PURCHASE_IDS` (tagged as `acquiredVia: 'purchase'`)

---

### 3.4 Subscribe to E-Edition (`/inteken/e-uitgawe`)

**Purpose:** Subscription landing page. User selects a plan (1/3/12 months), which is added to the cart and the user is taken directly to checkout.

| Element | Displayed | Notes |
|---|---|---|
| Hero section | Yes | Background image, value proposition |
| Plan cards (1/3/12 months) | Yes | Price, per-issue breakdown, features, "Teken In" button |
| Popular badge | Yes | On 3-month and 12-month plans |
| "Teken In" action | Yes | Adds subscription product to cart, navigates directly to `/betaal` |
| FAQ section | Yes | Subscription-specific FAQs |

> **Key difference from archive page:** This page does NOT add to cart for browsing — it adds a subscription product and immediately redirects to checkout. The cart is bypassed.

---

## 4. Purchase User Journey (End-to-End)

### Journey A: Individual E-Edition Purchase

```
1. Browse /e-uitgawes → See all editions with prices
2. View /e-uitgawe/:slug → Title, excerpt, price, cover
3. Add to Cart → Toast: "Bygevoeg", button changes to "Gaan na mandjie"
4. View Cart /mandjie → Review items, quantities, coupon codes → "Gaan na betaal"
5. Checkout /betaal → Logged-in user info, billing address, Payfast → "Plaas bestelling"
6. Confirmation /bestelling-bevestiging → Order #, access links to e-edition reader
```

### Journey B: Subscription Purchase

```
1. Subscribe /inteken/e-uitgawe → Select plan, click "Teken In"
2. Checkout /betaal → Cart bypassed, subscription pre-loaded → "Plaas bestelling"
3. Confirmation → Subscription activated, all future editions accessible
```

### Journey C: Returning to Read a Purchased Edition

```
1. My Library /my-e-uitgawes → Browse owned editions, click "Lees"
2. Single Edition /e-uitgawe/:slug → Green "Gekoop" banner, "Lees nou" button, embedded Issuu reader
```

---

## 5. Registration & Login Policy

### Must users register before checkout?

**Yes — all buyers must create an account.**

#### Rationale

E-editions are digital products delivered via Issuu embeds that are only accessible to logged-in users. Guest checkout is disabled for both subscriptions and single-issue purchases. Users must register or log in before they can complete a purchase.

#### Approach: Account Required

1. **Guest checkout is disabled.** All buyers must have an account.
2. **At checkout**, if the user is not logged in, they are redirected to the registration/login page.
3. **Registration is streamlined** — WooCommerce auto-generates username and password from the billing email.
4. **Post-registration**, the user is redirected back to checkout to complete their purchase.
5. **Access is immediate** — because the user already has an account, their Issuu embed access is available as soon as the order completes.

#### WordPress Configuration

```
WooCommerce > Settings > Accounts & Privacy:
- [ ] Allow customers to place orders without an account (DISABLED)
- [x] Allow customers to create an account during checkout
- [x] When creating an account, automatically generate an account username
- [x] When creating an account, automatically generate an account password
- [x] Allow customers to log into an existing account during checkout
```

> **Note:** Guest checkout is disabled because the Issuu publication embed is only rendered for logged-in users with valid membership/purchase access. Without an account, there is no way to grant or verify content access.

---

## 6. Prototype Implementation (React)

### Mock Auth State

The prototype uses mock data to simulate authentication and ownership:

| File | Mechanism |
|---|---|
| `SingleEEdition.tsx` | 6-state demo dropdown. Each state overrides ownership display. Ownership is derived from `demoState`. |
| `EEditions.tsx` | 6-state demo dropdown. Uses `getEditionOwnership()` wrapper that overrides based on demo state. |
| `MyEEditions.tsx` | `buildUserLibrary()` constructs the full library from mock data in `mockUserAccess.ts`. Demo dropdown with subscription status states. |
| `SubscribeEEdition.tsx` | 4-state demo dropdown. Shows contextual banners per state. |
| `Checkout.tsx` | `isLoggedIn` state toggle (demo mode) switches between guest and logged-in views |
| `OrderConfirmation.tsx` | `isGuestMode` state toggle shows guest vs. logged-in confirmation |

All mock ownership data is centralised in `/src/app/data/mockUserAccess.ts`.

### Cart System

| File | Role |
|---|---|
| `CartContext.tsx` | React context with `localStorage` persistence, `addItem` / `removeItem` / `clearCart` |
| `EEditions.tsx` | Archive page "Koop" buttons call `addItem()` with `type: 'single'` |
| `SingleEEdition.tsx` | Product page "Voeg by mandjie" calls `addItem()` with `type: 'single'` |
| `SubscribeEEdition.tsx` | Subscription page "Teken In" calls `addItem()` with `type: 'subscription'` then `navigate('/betaal')` |
| `Cart.tsx` | Full cart page with quantity controls, coupon input, and "Gaan na betaal" button |
| `Checkout.tsx` | Checkout form consuming `useCart()` for order summary |

### Mock Ownership Data

```typescript
// Shared utility: /src/app/data/mockUserAccess.ts
// Subscription covers all editions from Nov 2025 onward
export const SUBSCRIPTION_CUTOFF = new Date('2025-11-01');

// These specific editions were purchased individually
export const INDIVIDUAL_PURCHASE_IDS = [
  'uitgawe-2025-10-24',
  'uitgawe-2025-10-10',
];
```

This mock data is centralised in `/src/app/data/mockUserAccess.ts` and imported by both `SingleEEdition.tsx` and `MyEEditions.tsx`. In production, this would be a single API call to WooCommerce REST API or WooCommerce Memberships REST API.

---

## 7. WordPress / WooCommerce Implementation

### Product Types

| Product | WooCommerce Type | Price | SKU Pattern |
|---|---|---|---|
| Individual e-edition | Simple Product (Virtual) | R35 | `DP-EE-YYYY-MM-DD` |
| 1-Month subscription | Subscription Product | R140/month | `DP-SUB-1M` |
| 3-Month subscription | Subscription Product | R390/3 months | `DP-SUB-3M` |
| 12-Month subscription | Subscription Product | R1,400/year | `DP-SUB-12M` |

### Page Mapping (React to WordPress)

| React Route | WordPress Page/Template | WooCommerce Block |
|---|---|---|
| `/e-uitgawes` | Custom page template with `dp_eedition` archive loop | Custom block + product grid |
| `/e-uitgawe/:slug` | `single-dp_eedition.html` template | Product "Add to Cart" block + content restriction |
| `/my-e-uitgawes` | My Account sub-page or custom members-area page | WC Memberships "My Content" |
| `/inteken/e-uitgawe` | Custom page with subscription product cards | Custom pattern linking to checkout |
| `/mandjie` | `cart.html` template | `woocommerce/cart` block |
| `/betaal` | `checkout.html` template | `woocommerce/checkout` block |
| `/bestelling-bevestiging` | Auto-generated by WooCommerce Checkout block | `woocommerce/order-confirmation` |

---

## 8. WooCommerce Memberships — E-Edition Access

### Why Memberships?

WooCommerce Memberships controls **content access**. It determines whether a user can view/read an e-edition based on what they've purchased.

### Membership Plans

#### Plan 1: "E-Uitgawe Intekenaar" (E-Edition Subscriber)

- **Triggered by:** Purchasing any subscription product (1M/3M/12M)
- **Free trial:** 14-day trial with access to max 2 e-editions. Card required at sign-up via Payfast.
- **Access grants:** `dp_eedition` posts published **on or after the membership start date** only. Subscribers do NOT get access to the full historical archive. Resubscribers only regain access from their latest subscription start date.
- **Expiry:** Linked to subscription status — when subscription is cancelled/expired, membership expires. Cancellation retains access until end of paid period.
- **Content rule:** Restrict all `dp_eedition` CPT posts to this plan (date-filtered by membership start)

#### Plan 2: "Enkel E-Uitgawe Koper" (Single E-Edition Buyer)

This is NOT a separate membership plan. Instead, individual purchases use WooCommerce Memberships' **"Grant access to specific content"** feature on a per-product basis:

- Each individual e-edition Simple Product has a "Membership" meta linking it to the specific `dp_eedition` post
- When the order completes, the user gains access to ONLY that specific edition
- Access is permanent (no expiry) for individually purchased editions

### How Access is Checked

```
User visits /e-uitgawe/uitgawe-2026-02-13
    |
    -- Is user logged in?
    |   -- NO: Show product page with price + add-to-cart + locked preview
    |   -- YES: Check membership/order access:
    |       -- Has active "E-Uitgawe Intekenaar" membership? -> Show reader (subscription)
    |       -- Has completed order containing this specific e-edition product? -> Show reader (purchased)
    |       -- Neither -> Show product page with price + add-to-cart + locked preview
    |
    -- Output: Full reader OR locked product page
```

### WordPress Implementation

WooCommerce Memberships provides built-in template hooks:

```php
// Check if current user has access to this e-edition
if ( wc_memberships_is_post_content_restricted() ) {
    if ( current_user_can( 'wc_memberships_view_restricted_post_content', get_the_ID() ) ) {
        // User has access — render Issuu embed
        get_template_part( 'parts/eedition-reader' );
    } else {
        // User does NOT have access — render product/purchase CTA
        get_template_part( 'parts/eedition-locked' );
    }
}
```

---

## 9. WooCommerce Subscriptions — Recurring Access

### Why Subscriptions?

WooCommerce Subscriptions manages the **recurring payment** and **subscription lifecycle**. It works together with Memberships:

- **Subscriptions** = handles billing (recurring charges, cancellation, suspension, renewal)
- **Memberships** = handles access (what content the user can see)

### Subscription Products Setup

| Product | Billing Period | Signup Fee | Free Trial | Auto-renew | Payment Gateway |
|---|---|---|---|---|---|
| Digitale Intekening — 1 Maand | Every 1 month | R0 | 14 days (max 2 editions, card required) | Yes | Payfast |
| Digitale Intekening — 3 Maande | Every 3 months | R0 | 14 days (max 2 editions, card required) | Yes | Payfast |
| Digitale Intekening — 12 Maande | Every 1 year | R0 | 14 days (max 2 editions, card required) | Yes | Payfast |

### Subscription to Membership Link

In WooCommerce Memberships > Membership Plans > "E-Uitgawe Intekenaar":

```
Grant Access:
- Product: "Digitale Intekening — 1 Maand"
- Product: "Digitale Intekening — 3 Maande"
- Product: "Digitale Intekening — 12 Maande"

Membership Length: "Subscription length" (tied to active subscription)
```

When a subscription is:
- **Active** -> Membership is active -> User can read e-editions published from subscription start date onward
- **On hold** -> Membership is paused -> Access revoked temporarily
- **Cancelled** -> Membership expires -> Access revoked
- **Expired** -> Membership expires -> Access revoked

### Subscription Landing Page Flow (WordPress)

The `/inteken/e-uitgawe` page in WordPress will:

1. Display 3 subscription plan cards (pattern template)
2. Each "Teken In" button links to: `/betaal/?add-to-cart={product_id}`
3. This WooCommerce URL automatically adds the subscription product to cart AND redirects to checkout
4. The cart page is bypassed entirely (same as current React prototype behaviour)

---

## 10. Cross-References

| Document | Relevance |
|---|---|
| `/guidelines/content/pricing.md` | Canonical pricing for all products |
| `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` | Block plugin commerce integration, access gate blocks, Payfast config |
| `/guidelines/wordpress-migration/third-party-plugins/plugin-structure.md` | `dp_eedition` CPT definition |
| `/guidelines/wordpress-migration/templates-and-parts.md` | Template hierarchy |
| `/src/app/data/eEditions.ts` | Mock edition data |
| `/src/app/data/subscriptions.ts` | Subscription plan data |
| `/src/app/context/CartContext.tsx` | Cart state management |

---

*End of document.*