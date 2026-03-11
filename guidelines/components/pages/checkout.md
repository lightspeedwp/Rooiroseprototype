# Checkout Page

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/Checkout.tsx`
**WordPress target**: WooCommerce `woocommerce/checkout` block
**Shell doc**: [Commerce & Account Pages](./commerce-account-pages.md)

---

## 1. Purpose

Multi-step checkout form: billing → delivery → payment. Uses CheckoutLayout (minimal chrome — no full header/footer).

## 2. Route

`/betaal`

## 3. Page Sections (Top to Bottom)

| # | Section | Notes |
|---|---------|-------|
| 1 | **Progress stepper** | 3 steps: Besonderhede → Aflewering → Betaling |
| 2 | **Billing form** | Name, email, phone, address fields |
| 3 | **"Skep 'n rekening" checkbox** | Guest only — creates WooCommerce account on order completion |
| 4 | **Delivery section** | Address confirmation (skipped for virtual products like e-editions) |
| 5 | **Payment method** | Card / EFT / SnapScan selectors |
| 6 | **Order summary sidebar** | Line items from CartContext, subtotal, VAT, total |
| 7 | **"Plaas bestelling" button** | Submits order |

## 4. States

| State | Behaviour |
|-------|-----------| 
| **Logged in** | Billing info pre-filled from account data, payment via Payfast |
| **Not logged in** | Redirect to `/registreer` or `/my-rekening` — guest checkout is disabled, all buyers must have an account |
| **Empty cart** | Redirect to `/mandjie` or show "Jou mandjie is leeg" message |

> **Note:** Guest checkout is disabled. The "Skep 'n rekening" checkbox and guest email field have been removed. All buyers must register/login before checkout because the Issuu e-edition embed is only accessible to logged-in users.

### E-Edition Specific Behaviour
- When cart contains only e-edition or subscription products (virtual items), the delivery step is skipped
- Subscription items show recurring billing indicator in order summary
- 14-day free trial subscriptions show trial indicator and first billing date

## 5. Demo State Switcher

No demo state switcher — guest checkout is disabled. The checkout page always renders the logged-in view.

## 6. Data Sources

- `CartContext` — cart items, totals, add/remove actions
- Mock billing data (hardcoded for demo)

## 7. WordPress Mapping

| React Element | WP Construct |
|---|---|
| Billing form | WooCommerce `woocommerce/checkout` block (handles form natively) |
| Order summary | WooCommerce `woocommerce/checkout-order-summary` block |
| Payment methods | WooCommerce payment gateway integrations |
| Guest account creation | WooCommerce Accounts & Privacy settings (auto-account creation) |
| Demo switcher | Dev-only; not migrated |

## 8. Dependencies

CartContext, CheckoutLayout, SEO

## 9. Cross-References

- [E-Editions User Journeys § 5](/guidelines/content/e-editions-user-journeys.md) — Registration & login policy
- [Commerce & Account Pages](./commerce-account-pages.md) — Group overview
- [Pricing](/guidelines/content/pricing.md) — Product prices for order summary