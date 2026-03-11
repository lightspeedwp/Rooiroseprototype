# E-Edition Single

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/SingleEEdition.tsx`
**WordPress target**: Template — `single-dp_eedition.html`
**Shell doc**: [CPT Singles](./cpt-singles.md)

---

## 1. Purpose

Single e-edition product page. Displays the edition cover, title, description, price/purchase actions, embedded Issuu reader (purchased), locked preview (unpurchased), a subscription CTA, social sharing, and related editions. Access is gated via `dp/eedition-access` block in WordPress (WooCommerce Memberships).

## 2. Page Sections (Top to Bottom)

| # | Section | Visibility | Notes |
|---|---------|-----------|-------|
| 1 | **Breadcrumbs** | All states | Tuis → E-uitgawes → [Title] |
| 2 | **Product section** | All states | Two-column: cover image (left), details + actions (right) |
| 2a | — Cover image | All states | 3:4 newspaper mock-up with Die Papier branding, date strip |
| 2b | — Ownership badge | Purchased only | Green pill on cover: "Intekening" or "Gekoop" |
| 2c | — Title (H1) | All states | Full edition title |
| 2d | — Metadata line | All states | Date, page count, edition number |
| 2e | — Description | All states | Full excerpt paragraph |
| 2f | — Price + add-to-cart | Not purchased | R35 price, "Voeg by mandjie" button, "Teken eerder in" link |
| 2g | — Green confirmation | Purchased only | Banner with ownership message + "Lees nou" + "My biblioteek" |
| 3 | **Issuu reader embed** | Purchased only | Full-width iframe, `#reader` anchor for scroll-to |
| 4 | **Locked preview** | Not purchased | Blurred cover background, lock icon, purchase/subscribe CTAs |
| 5 | **Subscription CTA** | Not purchased | Navy banner with value proposition, feature list, plan price summary, link to `/inteken/e-uitgawe` |
| 6 | **Social share** | All states | SocialShare component |
| 7 | **Related editions** | All states | 4-column grid, ownership badges respect auth state |
| 8 | **Demo state switcher** | All states (dev) | Fixed bottom-right toggle: Uitgelogd / Ingelogd: Koop / Intekening / Gekoop |

## 3. Subscription CTA Section

The subscription CTA is a full-width `alignwide` section that appears **only when the edition is not purchased** (both logged-out and logged-in-not-purchased states). It sits between the locked preview and social share.

### Layout

Two-column card on `bg-brand-navy`:

- **Left column** (flex-1): Eyebrow label ("DIGITALE INTEKENING" in yellow), H3 heading, description paragraph, 3-item feature list with icons (Archive, Zap, BookOpen), "Bekyk intekeningplanne" primary button → `/inteken/e-uitgawe`
- **Right column** (280–320px): "Planne vanaf" label, large R140/maand price, 3 plan rows (1M R140, 3M R390 "Gewild", 12M R1 400 "Beste waarde")

### Pricing Source

All prices must match `/guidelines/content/pricing.md`:
- 1 Month: R140
- 3 Months: R390
- 12 Months: R1 400

> **Note:** Feature list should say "Toegang tot alle nuwe uitgawes" (not "Volledige argieftoegang") — subscribers only access editions from their sign-up date onward. All plans include a 14-day free trial.

### WordPress Implementation

In WordPress, this section maps to a **reusable pattern** `die-papier/section-subscription-cta` composed of core blocks + the `dp/subscription-cta` custom block. The block's `render.php` can pull live subscription product prices from WooCommerce to avoid hardcoding.

## 4. Demo State Switcher

The page includes a fixed bottom-right demo toggle (matching the pattern from `EEditions.tsx`). Six states:

| State | `demoState` value | Ownership | Sections visible |
|-------|-------------------|-----------|-----------------| 
| Uitgelogd | `logged-out` | `null` | Price, add-to-cart, locked preview, subscription CTA |
| Proeftydperk | `trial` | `trial` | Blue trial banner, reader (limited), upgrade CTA |
| Ingelogd: Koop | `logged-in-buy` | `null` | Same as logged-out (identical in prototype) |
| Intekening | `logged-in-subscription` | `subscription` | Green banner, reader, NO subscription CTA |
| Gekoop | `logged-in-purchased` | `purchase` | Green banner, reader, NO subscription CTA |
| Verlope intekenaar | `expired-subscriber` | `null` | Amber re-subscribe banner, locked preview, subscription CTA |

## 5. Data Sources

- `LATEST_EDITIONS.find()` from `/src/app/data/eEditions.ts`
- `getOwnershipStatus()` from `/src/app/data/mockUserAccess.ts` (shared utility)
- `useCart()` from `/src/app/context/CartContext.tsx`

## 6. WordPress Mapping

| React Element | WP Construct |
|---|---|
| Breadcrumbs | `dp/breadcrumbs` (dynamic) |
| Cover image | Post thumbnail with custom overlay template part |
| Product details | `dp/eedition-access` custom block (membership-gated) |
| Issuu reader | Restricted content via WooCommerce Memberships |
| Locked preview | `parts/eedition-locked.php` template part |
| Subscription CTA | `die-papier/section-subscription-cta` pattern / `dp/subscription-cta` block |
| Social share | `core/social-links` |
| Related editions | `core/query` with `dp_eedition` post type, 4 per page |
| Demo switcher | Dev-only; not migrated to WordPress |

## 7. Dependencies

SEO, Breadcrumbs, ImageWithFallback, SocialShare, Button, CartContext, mockUserAccess (getOwnershipStatus), renderWithBrandItalics

## 8. Cross-References

- [E-Editions User Journeys](/guidelines/content/e-editions-user-journeys.md) — Full state specifications
- [Pricing](/guidelines/content/pricing.md) — Canonical subscription prices
- [Block Plugin Strategy](/guidelines/wordpress-migration/block-plugin-strategy.md) — `dp/subscription-cta` block definition
- [Full Page Patterns](/guidelines/wordpress-migration/full-page-patterns.md) — `single-eedition` pattern spec