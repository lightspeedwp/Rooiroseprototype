# WooCommerce Blocks — Overview

**Last updated**: 2026-03-03
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Overview

Die Papier uses WooCommerce to sell **e-edition subscriptions** (not traditional products). The commerce integration is designed for a **subscription-based model** with three pricing tiers:

- **1-Month**: R140/month (4 issues, R35 per issue)
- **3-Month**: R390/3 months (12 issues, R32.50 per issue, Save R30) — **Featured tier**
- **12-Month**: R1400/year (52 issues, ~R26.92 per issue, Save R420)

All subscriptions include a **14-day trial period** and can be cancelled anytime.

### Key Commerce Pages

| Page | URL | Template | Pattern |
|------|-----|----------|---------|
| Cart | `/winkelmandjie` | `page-cart.html` | `die-papier/woo-cart` |
| Checkout | `/betaal` | `page-checkout.html` | `die-papier/woo-checkout` |
| My Account | `/my-rekening` | `page-my-account.html` | `die-papier/woo-my-account` |
| Order Confirmation | `/order-received/{order-id}` | `page-order-received.html` | `die-papier/woo-order-confirmation` |

---

## WooCommerce Blocks Inventory

WooCommerce provides **47 blocks** across 6 categories. Die Papier uses **9 critical blocks** for the e-editions commerce flow.

### Cart & Checkout Blocks (5 blocks — CRITICAL)

| Block | Slug | Usage | Pattern/Template |
|-------|------|-------|------------------|
| **Cart** | `woocommerce/cart` | Full cart page | `woo-cart`, `page-cart.html` |
| **Checkout** | `woocommerce/checkout` | Full checkout page | `woo-checkout`, `page-checkout.html` |
| **Mini Cart** | `woocommerce/mini-cart` | Header cart icon | `woo-mini-cart`, `header.php` |
| **Order Confirmation Status** | `woocommerce/order-confirmation-status` | Order success message | `woo-order-confirmation` |
| **Order Confirmation Summary** | `woocommerce/order-confirmation-summary` | Order details table | `woo-order-confirmation` |

### Account Blocks (1 block — CRITICAL)

| Block | Slug | Usage | Pattern/Template |
|-------|------|-------|------------------|
| **Customer Account** | `woocommerce/customer-account` | My Account dashboard | `woo-my-account`, `page-my-account.html` |

### Product Blocks (NOT USED for e-editions)

Die Papier does **not** use traditional product catalog blocks because e-editions are sold as **subscriptions** with custom archive pages. See `/guidelines/wordpress-migration/woocommerce/products.md` for details on what product blocks are available and how they're configured for the product archive/search templates.

> **Complete block-level documentation**: For the full 120+ WooCommerce block reference with individual block specs, block styles, attributes, and pattern usage, see `/guidelines/components/blocks/woocommerce/README.md`.

### Utility Blocks (3 blocks)

| Block | Slug | Usage | Pattern/Template |
|-------|------|-------|------------------|
| **Breadcrumbs** | `woocommerce/breadcrumbs` | Site navigation | All templates via `parts/breadcrumbs.html` |
| **Store Notices** | `woocommerce/store-notices` | Global notices (sale, errors) | Auto-injected by WooCommerce |
| **Rating Filter** | `woocommerce/rating-filter` | NOT USED (no product reviews) | — |

**Note**: WooCommerce breadcrumbs are **replaced** with **Yoast SEO breadcrumbs** for better schema markup and customization. See `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md`.

---

## E-Editions Commerce Flow

### User Journey: Guest -> Subscriber

```
1. Browse E-Editions (/e-uitgawes)
   |
2. Click "Koop hierdie uitgawe" (R35 single purchase)
   OR
   Click "Teken in" (subscription)
   |
3. Redirected to Cart (/winkelmandjie)
   - Mini cart icon updates (item count badge)
   |
4. Click "Gaan voort na betaal"
   |
5. Checkout Page (/betaal)
   - Distraction-free layout (checkout header/footer, no ads)
   - Guest checkout DISABLED (requires account)
   - Billing fields (Name, Email, Address)
   - Payment method: Payfast
   |
6. Account Creation (auto-prompted if not logged in)
   - Email becomes username
   - Password created
   |
7. Payment via Payfast
   - Secure redirect to Payfast gateway
   - Supports: Credit card, EFT, Instant EFT
   |
8. Order Confirmation (/order-received/{order-id})
   - "Jou e-uitgawe is gereed!" message
   - CTAs: "Lees jou e-uitgawe" (primary), "Gaan na My Rekening" (secondary)
   - Order summary table
   |
9. Membership Granted (WooCommerce Memberships)
   - Access to e-edition CPT
   - Access from subscription start date onward (not historical archive)
   |
10. User can access e-editions at /e-uitgawes
    - "Lees nou" button appears (was "Koop hierdie uitgawe" before purchase)
```

### User Journey: Subscriber Management

```
1. My Account (/my-rekening)
   |
2. Tabs:
   - Dashboard (overview)
   - Orders (order history)
   - Subscriptions (manage subscriptions via WC Subscriptions)
   - Account Details (edit profile, change password)
   - Logout
   |
3. Subscriptions Tab
   - Active subscriptions (status, next billing date)
   - Actions: View details, Change payment method, Cancel
   |
4. Cancel Subscription
   - Confirmation dialog
   - Access retained until end of billing period
```

---

## Split Documentation Index

This monolith has been split into topic-specific files:

| File | Topic |
|:-----|:------|
| `cart.md` | Cart page pattern, empty cart state |
| `checkout.md` | Checkout pattern, guest checkout disabled, order confirmation flow |
| `customer-account.md` | My Account dashboard, customer account block |
| `mini-cart.md` | Header mini cart icon |
| `products.md` | Product blocks, product card, archive, search (subscription-first project) |
| `store-notices.md` | Store notices block |
| `translations.md` | 400+ Afrikaans strings |
| `testing.md` | Testing checklist (Cart, Checkout, Order, Account, Payment, Membership) |
| `product-collection.md` | Product catalog, archive, search (Ollie-learned) |

---

## Architecture

### Template Architecture (Pattern-First)

All WC templates use the **pattern-first** approach (learned from Ollie theme). Each template is a single `<!-- wp:pattern -->` reference. The pattern contains the full page layout including header/footer template parts.

**Why pattern-first?** Patterns are editable in the Site Editor while templates require code changes. This architecture lets content editors customize WC page layouts without touching template files.

### Templates (8 files)

| Template | URL | Pattern | Notes |
|----------|-----|---------|-------|
| `page-cart.html` | `/winkelmandjie` | `die-papier/woo-cart` | Standard header/footer, breadcrumbs |
| `page-checkout.html` | `/betaal` | `die-papier/woo-checkout` | Checkout header/footer (distraction-free) |
| `page-my-account.html` | `/my-rekening` | `die-papier/woo-my-account` | Standard header/footer, breadcrumbs |
| `page-order-received.html` | `/order-received/{id}` | `die-papier/woo-order-confirmation` | Checkout header/footer |
| `order-confirmation.html` | (WC canonical) | `die-papier/woo-order-confirmation` | WC canonical template slug |
| `single-product.html` | `/product/{slug}` | `die-papier/woo-single-product` | Standard header/footer, breadcrumbs |
| `archive-product.html` | `/winkel` | `die-papier/woo-product-archive` | Product catalog with 4-column grid |
| `product-search-results.html` | `/?s=...&post_type=product` | `die-papier/woo-product-search` | Product search |

### Template Parts (6 files)

| Part | Slug | Area |
|:-----|:-----|:-----|
| `checkout-header.html` | `checkout-header` | header |
| `checkout-footer.html` | `checkout-footer` | footer |
| `breadcrumbs.html` | `breadcrumbs` | uncategorized |
| `product-card.html` | `product-card` | uncategorized |
| `simple-product-add-to-cart-with-options.html` | `simple-product-add-to-cart-with-options` | uncategorized |
| `variable-product-add-to-cart-with-options.html` | `variable-product-add-to-cart-with-options` | uncategorized |

---

## PHP Integration

All WooCommerce theme support and customizations are in `/inc/woocommerce.php`. See the full architecture in the file itself.

---

## Related Documentation

| Document | Relevance |
|:---------|:----------|
| `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` | Subscriptions, memberships, access control |
| `/guidelines/e-editions-user-journeys.md` | Full UX flows with state matrices |
| `/guidelines/pricing.md` | Canonical pricing reference |
| `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` | Breadcrumbs (replaces WC breadcrumbs) |

---

**End of WooCommerce Blocks Overview**