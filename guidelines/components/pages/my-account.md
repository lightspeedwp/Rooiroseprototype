# My Account

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/MyAccount.tsx`
**WordPress target**: WooCommerce `woocommerce/my-account` block
**Shell doc**: [Commerce & Account Pages](./commerce-account-pages.md)

---

## 1. Purpose

User dashboard with tabbed interface for profile management, order history, subscription management, and newsletter preferences.

## 2. Route

`/my-rekening`

## 3. Tabs

| Tab | Label | Content |
|-----|-------|---------|
| 1 | **Profiel** | Personal details (name, email, phone), address management |
| 2 | **Bestellings** | Order history table — includes e-edition purchases and subscription orders |
| 3 | **Intekeninge** | Active/expired subscriptions — shows e-edition subscription plan name, status, next payment date, amount. Links to "Bestuur intekening" and "Opgradeer". Link to "My E-Uitgawes" library (`/my-e-uitgawes`). |
| 4 | **Nuusbriewe** | Newsletter subscription preferences, manage/unsubscribe |

## 4. E-Edition Connection

The "Intekeninge" tab is the primary connection to the e-edition access system:
- Shows the user's active "E-Uitgawe Intekenaar" membership status
- Displays next payment date and subscription amount
- Links to `/my-e-uitgawes` for the full e-edition library
- Links to `/inteken/e-uitgawe` for upgrade/plan change

## 5. WordPress Mapping

WooCommerce `woocommerce/my-account` block with custom tab styling. The "Intekeninge" tab maps to WooCommerce Subscriptions' "My Subscriptions" endpoint. The "Nuusbriewe" tab is a custom endpoint.

## 6. Dependencies

SEO, PageContainer

## 7. Cross-References

- [My E-Editions](./my-eeditions.md) — Library page linked from Intekeninge tab
- [Commerce & Account Pages](./commerce-account-pages.md) — Group overview
