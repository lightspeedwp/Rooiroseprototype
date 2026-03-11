# Template: archive-dp_eedition.html

**Last updated**: 2026-02-27
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/archive-dp_eedition.html`
**React equivalent**: `EEditions.tsx`

---

## 1. Purpose

E-edition archive template. Displays all available e-editions in a paginated grid with ownership-aware cards, sidebar subscription CTA, and FAQ section.

## 2. Structure

```
header (template part)
└─ main (constrained)
   ├─ pattern: die-papier/section-content-hero ("E-uitgawes", subtitle)
   ├─ "Gaan na my biblioteek" button → /my-e-uitgawes
   ├─ columns (8/4 split)
   │  ├─ column (8-col, main content)
   │  │  ├─ core/query (dp_eedition, 8 per page, AQL namespace, grid 2-col mobile / 3-col desktop)
   │  │  │  └─ post-template
   │  │  │     └─ pattern: die-papier/card-eedition (conditional ownership)
   │  │  └─ core/query-pagination
   │  └─ column (4-col, sidebar, desktop only)
   │     ├─ die-papier/section-subscription-cta-sidebar (no pricing, links to /inteken/e-uitgawe)
   │     ├─ [advanced_ads placement="sidebar-top-mrec"] (Advanced Ads shortcode)
   │     └─ "Op soek na iets spesifiek?" search card
   ├─ "Reeds 'n intekenaar?" CTA (links to /my-rekening and /my-e-uitgawes)
   ├─ [advanced_ads placement="content-leaderboard"] (Advanced Ads shortcode)
   └─ die-papier/section-faq (EEDITIONS_FAQS)
footer (template part)
```

## 3. Conditional Rendering (per Edition Card)

| Element | Logged Out | Trial User | Subscriber | Expired Subscriber | Non-subscriber (no purchases) | Non-subscriber (has purchases) |
|---------|-----------|------------|------------|-------------------|-------------------------------|-------------------------------|
| Ownership badge | ❌ | ✅ "Proef" (max 2) | ✅ "Intekening" (from sign-up date) | ❌ (greyed) | ❌ | ✅ "Gekoop" (purchased only) |
| Price label | ✅ R35 | Mixed | ❌ "In biblioteek" | ✅ R35 | ✅ R35 | Mixed |
| Button | "Koop" | Mixed "Lees"/"Koop" | "Lees" | "Koop" + re-subscribe banner | "Koop" | Mixed "Lees"/"Koop" |
| Special banner | — | Trial countdown + upgrade CTA | — | Re-subscribe banner at top | — | — |

## 4. Patterns Used

| Pattern | Purpose |
|---------|---------|
| `die-papier/section-content-hero` | Hero banner |
| `die-papier/card-eedition` | Edition card within query loop |
| `die-papier/section-subscription-cta-sidebar` | Navy sidebar widget (no pricing per pricing.md rule 8) |
| `die-papier/section-faq` | FAQ accordion |

## 5. Notes

- Sidebar subscription CTA does NOT display specific pricing (per `/guidelines/content/pricing.md` rule 8) — links to `/inteken/e-uitgawe` instead
- Edition card ownership rendering uses `wc_memberships_is_post_content_restricted()` + `current_user_can()` in card `render.php`
- Pagination uses standard `core/query-pagination` block
- Subscribers only see "Intekening" badges on editions published from their sign-up date onward (not full archive)
- All plans include a 14-day free trial with max 2 edition accesses
- Guest checkout is disabled — "Koop" buttons redirect to login if not authenticated

## 6. Cross-References

- [Full Page Patterns § E-Editions Archive](/guidelines/wordpress-migration/full-page-patterns.md) — Detailed block structure
- [E-Editions User Journeys § 3.1](/guidelines/content/e-editions-user-journeys.md) — State specifications (6 states)
- [Component: E-Editions](/guidelines/components/pages/eeditions.md) — React page spec
- [Pricing](/guidelines/content/pricing.md) — Rule 8 (no subscription pricing on archive)