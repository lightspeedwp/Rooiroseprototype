# My E-Editions

**Last updated**: 2026-02-24
**Category**: Page
**React source**: `/src/app/pages/MyEEditions.tsx`
**WordPress target**: Custom page template with WC Memberships content loop
**Shell doc**: [Commerce & Account Pages](./commerce-account-pages.md)

---

## 1. Purpose

Digital e-edition library for logged-in users. Shows all editions the user has access to (via subscription and/or individual purchases), with search, filter, and view toggle controls.

## 2. Route

`/my-e-uitgawes`

## 3. Page Sections (Top to Bottom)

| # | Section | Notes |
|---|---------|-------|
| 1 | **Subscription status card** | Plan name, status badge (Aktief/Verval), next payment date, amount (R140.00), manage/upgrade links |
| 2 | **Search & filter bar** | Text search by title, filter dropdown (Alle/Intekening/Gekoop), view toggle (grid/list icons) |
| 3 | **Edition cards** | Cover thumbnail, title, date, acquisition badge ("INTEKENING" green / "GEKOOP" blue), "Lees" button → `/e-uitgawe/:id` |
| 4 | **Empty state** | Shown when no editions match filters: "Jy het nog geen e-uitgawes nie" with CTAs to browse (`/e-uitgawes`) and subscribe (`/inteken/e-uitgawe`) |
| 5 | **"Koop meer uitgawes" link** | Links to `/e-uitgawes` archive |

## 4. States

| State | Behaviour |
|-------|-----------|
| **Logged out** | Should redirect to login. In prototype: renders with mock data (pending EE-010 for demo toggle). In WordPress: WC Memberships restricted page → login redirect. |
| **Logged in, has editions** | Shows subscription card + edition grid |
| **Logged in, no editions** | Shows subscription card + empty state CTA |

## 5. Data Sources

| Source | File | Usage |
|--------|------|-------|
| `buildUserLibrary()` | `/src/app/data/mockUserAccess.ts` | Constructs library from subscription cutoff + individual purchase IDs |
| `MOCK_SUBSCRIPTION` | `/src/app/data/mockUserAccess.ts` | Subscription status card data |
| `LATEST_EDITIONS` | `/src/app/data/eEditions.ts` | Full edition catalogue (input to library builder) |

## 6. Edition Card Component

Two view modes: **grid** (cover + details below) and **list** (compact horizontal row).

### Grid Card
- Cover thumbnail (aspect 3:4) with "DIE PAPIER" header
- Title (H3 with `--text-h-compact` token)
- Date
- Acquisition badge pill
- "Lees" button → `/e-uitgawe/:id`

### List Card
- Small thumbnail (64×80px)
- Title + date inline
- Acquisition badge pill (smaller)
- "Lees" link

## 7. WordPress Mapping

| React Element | WP Construct |
|---|---|
| Subscription status card | WooCommerce Memberships shortcode or custom block reading active membership |
| Edition grid | Custom query loop filtering `dp_eedition` posts accessible to current user |
| Acquisition badges | PHP conditional: `wc_memberships_is_post_content_restricted()` check per edition |
| Search/filter | JavaScript filter on client-side (or WP REST API search) |
| Redirect for logged-out | WC Memberships page restriction → login redirect |

## 8. Dependencies

SEO, PageContainer, Button, Input, mockUserAccess (`buildUserLibrary`, `MOCK_SUBSCRIPTION`, `SUBSCRIPTION_CUTOFF`, `INDIVIDUAL_PURCHASE_IDS`, `parseEditionDate`, `OwnedEdition`, `UserSubscription`)

## 9. Cross-References

- [E-Editions User Journeys § 3.3](/guidelines/content/e-editions-user-journeys.md) — State specifications
- [Commerce & Account Pages](./commerce-account-pages.md) — Group overview
- [Pricing](/guidelines/content/pricing.md) — Subscription amounts for status card