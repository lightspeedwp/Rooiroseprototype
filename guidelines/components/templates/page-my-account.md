# Template: page-my-account.html

**Last updated**: 2026-03-02
**Category**: Template — WooCommerce
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/page-my-account.html`
**Also covers**: `page-order-received.html`, `order-confirmation.html`
**React equivalent**: `Account.tsx`, `EEditionSidebar.tsx` (subscriber access views)
**Afrikaans URL**: `/my-rekening`

---

## 1. Purpose

WooCommerce My Account page template. Handles all account dashboard views: dashboard, subscriptions, orders, downloads, and address management. Also parent template hierarchy for post-purchase confirmation pages. Pattern-first: delegates to a single `wp:pattern` reference.

**Three related templates** (all use the same guideline):

| Template file | Matched by | Pattern |
|:---|:---|:---|
| `page-my-account.html` | `/my-rekening` page slug | `die-papier/woo-my-account` |
| `page-order-received.html` | `/order-received/{id}` endpoint | `die-papier/woo-order-confirmation` |
| `order-confirmation.html` | WC canonical slug | `die-papier/woo-order-confirmation` |

## 2. Structure

```
header (template part)
└─ main (constrained, 1440px)
   ├─ breadcrumbs (template part — Yoast SEO breadcrumbs)
   └─ pattern: die-papier/woo-my-account
      └─ woocommerce/customer-account block
         ├─ Account Navigation (sidebar: Dashboard, Orders, Subscriptions, Downloads)
         └─ Account Content (main panel — endpoint-driven)
footer (template part)
```

**Order Received / Confirmation structure**:

```
header (template part)
└─ main (constrained, 1440px)
   └─ pattern: die-papier/woo-order-confirmation
      ├─ woocommerce/order-confirmation-status
      └─ woocommerce/order-confirmation-summary
footer (template part)
```

## 3. Template Parts Used

- `header`, `breadcrumbs`, `footer`

## 4. WooCommerce Blocks Used

| Block | Slug | Template | Purpose |
|-------|------|----------|---------|
| Customer Account | `woocommerce/customer-account` | My Account | Full account dashboard |
| Order Confirmation Status | `woocommerce/order-confirmation-status` | Order Received | Success/failure message |
| Order Confirmation Summary | `woocommerce/order-confirmation-summary` | Order Received | Order details table |
| Breadcrumbs (Yoast) | `yoast-seo/breadcrumbs` | My Account | Navigation trail |

## 5. Patterns Used

- `die-papier/woo-my-account` — account dashboard layout
- `die-papier/woo-order-confirmation` — post-purchase confirmation layout

## 6. Layout

- Type: `constrained`
- Content size: `1440px`
- My Account: two-column (nav sidebar 280px + content area), `blockGap: spacing|60`
- Order Confirmation: single column, `padding: spacing|80`, `blockGap: spacing|50`

## 7. WP Hierarchy Position

**Priority**: P0 — matched by WooCommerce page slugs and endpoint rewrite rules.

## 8. Key Behaviours

- **Login-gated**: Non-logged-in users are redirected to `/inlog` (login page)
- **Subscriptions tab**: Shows active subscription (plan, renewal date, status) — WC Subscriptions plugin
- **Downloads tab**: Shows downloadable e-edition PDFs for subscriber tier
- **Order Confirmation**: Triggered by successful payment callback from PayFast IPN

## 9. Styling

- `/guidelines/wordpress-migration/woocommerce/customer-account.md` — Customer Account block
- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview (order confirmation)

## 10. Related Files

- `/guidelines/wordpress-migration/woocommerce/customer-account.md` — Customer Account block styling spec
- `/guidelines/wordpress-migration/woocommerce/README.md` — Commerce flow overview
- `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md` — Subscriptions & memberships
- `/guidelines/components/templates/page-checkout.md` — Previous step in the commerce flow
- `/wordpress-export/themes/die-papier-theme/templates/page-my-account.html`
- `/wordpress-export/themes/die-papier-theme/templates/page-order-received.html`
- `/wordpress-export/themes/die-papier-theme/templates/order-confirmation.html`
