# E-Editions Archive

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/EEditions.tsx`
**WordPress target**: Template — `archive-dp_eedition.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

E-edition listing/archive page. Displays all available editions in a paginated grid with 3:4 cover image cards. Logged-in users see ownership badges ("Gekoop" / "Intekening") and "Lees" buttons on owned editions; logged-out users see prices and "Koop" buttons on all cards.

## 2. Page Sections (Top to Bottom)

| # | Section | Notes |
|---|---------|-------|
| 1 | **ContentHero banner** | Title "E-uitgawes", subtitle about R35 per issue |
| 2 | **Edition grid** (8 per page) | 2-col mobile / 3-col desktop, cover cards with conditional ownership state |
| 3 | **Sidebar** | Subscription CTA widget (navy), ad placements |
| 4 | **Pagination** | Numbered page controls |
| 5 | **"Reeds 'n intekenaar?" CTA** | Links to My Account and My E-Editions |
| 6 | **Leaderboard ad** | Above FAQ |
| 7 | **FAQ section** | `EEDITIONS_FAQS` accordion |
| 8 | **Demo state switcher** | Fixed bottom-right toggle: Uitgelogd / Ingelogd |

## 3. Edition Card States

| User state | Badge | Price | Button | Action |
|---|---|---|---|---|
| Logged out | None | Shown (R35) | "Koop" + ShoppingCart | `addItem()` to cart |
| Logged in — not owned | None | Shown (R35) | "Koop" + ShoppingCart | `addItem()` to cart |
| Logged in — owned (subscription) | Green "Intekening" pill | Hidden | "Lees" + BookOpen | Link to single page |
| Logged in — owned (purchase) | Green "Gekoop" pill | Hidden | "Lees" + BookOpen | Link to single page |

## 4. Sidebar Subscription CTA

The sidebar contains a navy widget promoting subscriptions. Per `/guidelines/content/pricing.md` rule 8, this widget does **not** display specific subscription pricing — it says "Teken in en kry onbeperkte toegang" and links to `/inteken/e-uitgawe`.

## 5. Demo State Switcher

Fixed bottom-right dropdown with six states:

| State | `demoState` value | Effect |
|-------|-------------------|--------|
| Uitgelogd | `logged-out` | No ownership badges, all cards show price + "Koop". Must register to purchase. |
| Proeftydperk | `trial` | Trial countdown badge. Max 2 editions accessible. Upgrade CTA banner. |
| Intekenaar | `subscriber` | Editions from subscription start date show "Intekening" badge + "In biblioteek" + "Lees" |
| Verval intekenaar | `expired-subscriber` | Re-subscribe banner. Previously accessible editions greyed. Only purchased editions show "Lees". |
| Ingelogd (geen koop) | `logged-in-no-purchases` | No badges, all cards show price + "Koop" (identical to logged-out visually) |
| Ingelogd (koop) | `logged-in-with-purchases` | Only individually purchased editions show "Gekoop" badge + "Lees"; rest show price + "Koop" |

## 6. Data Sources

- `LATEST_EDITIONS` from `/src/app/data/eEditions.ts`
- `getOwnershipStatus()` from `/src/app/data/mockUserAccess.ts` (shared utility)
- `useCart()` from `/src/app/context/CartContext.tsx`

## 7. WordPress Mapping

| React Element | WP Construct |
|---|---|
| ContentHero | `die-papier/section-content-hero` pattern |
| Edition grid | `core/query` with `dp_eedition` post type |
| Edition card | `die-papier/card-eedition` pattern (within query loop) |
| Ownership badges | `dp/eedition-access` block or PHP conditional in `render.php` |
| Sidebar CTA | `die-papier/section-subscription-cta-sidebar` pattern |
| Pagination | `core/query-pagination` |
| FAQ | `die-papier/section-faq` pattern |
| Demo switcher | Dev-only; not migrated to WordPress |

## 8. Dependencies

SEO, ContentHero, PageContainer, PageFAQSection (EEDITIONS_FAQS), ImageWithFallback, Button, CartContext, mockUserAccess (getOwnershipStatus), LeaderboardAd, SidebarAds, InFeedAd, renderWithBrandItalics

## 9. Cross-References

- [E-Editions User Journeys](/guidelines/content/e-editions-user-journeys.md) — Full state specifications
- [Pricing](/guidelines/content/pricing.md) — Rule 8 (no subscription pricing on archive)
- [Full Page Patterns](/guidelines/wordpress-migration/full-page-patterns.md) — `archive-eeditions` pattern spec