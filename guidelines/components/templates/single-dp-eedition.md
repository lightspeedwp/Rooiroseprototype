# Template: single-dp_eedition.html

**Last updated**: 2026-02-27
**Category**: Template
**WP file**: `/wordpress-export/themes/die-papier-theme/templates/single-dp_eedition.html`
**React equivalent**: `SingleEEdition.tsx`

---

## 1. Purpose

Single e-edition product page template. Displays edition cover, metadata, purchase/access controls (membership-gated), embedded reader (purchased), locked preview + subscription CTA (unpurchased), social sharing, and related editions.

## 2. Structure

```
header (template part)
└─ main (constrained)
   ├─ breadcrumbs (template part → hidden-breadcrumbs pattern → yoast-seo/breadcrumbs)
   └─ group (wide, py: spacing|50)
      ├─ columns (40%/60% split)
      │  ├─ column (40%, cover)
      │  │  └─ post-featured-image (3:4, radius 8px, shadow large)
      │  └─ column (60%, details)
      │     ├─ post-title (H1)
      │     ├─ post-date (j F Y)
      │     ├─ group (is-style-card) → pattern: section-eedition-meta
      │     ├─ post-content (constrained)
      │     └─ group (dp-eedition-access-gate) — WooCommerce Memberships content restriction
      │        ├─ paragraph (access message)
      │        └─ buttons → "Teken Nou In" (primary, /inteken)
      └─ pattern: section-newsletter-cta-full
footer (template part)
```

## 3. Conditional Rendering

| Section | Not Purchased | Purchased |
|---------|--------------|-----------|
| Price + add-to-cart | ✅ Shown | ❌ Hidden |
| Green confirmation banner | ❌ Hidden | ✅ Shown |
| "Lees nou" button | ❌ Hidden | ✅ Shown |
| Issuu reader embed | ❌ Hidden | ✅ Shown |
| Locked preview section | ✅ Shown | ❌ Hidden |
| Subscription CTA section | ✅ Shown | ❌ Hidden |
| Ownership badge on cover | ❌ Hidden | ✅ Shown |

## 4. Custom Blocks Used

| Block | Purpose | Status |
|-------|---------|--------|
| `yoast-seo/breadcrumbs` | Breadcrumb navigation (via breadcrumbs template part) | ✅ Active |
| `woocommerce/gated-content` | Access gating via WC Memberships content restriction | ✅ Active |
| `dp/subscription-cta` | Navy subscription value proposition banner | ✅ Active |
| `dp/eedition-access` | **DEPRECATED** — replaced by WC Memberships content restriction group | ❌ Removed |
| `dp/eedition-reader` | Issuu iframe embed (restricted content, future implementation) | 🔜 Planned |
| `dp/eedition-locked-preview` | Blurred cover + lock icon (future implementation) | 🔜 Planned |
| `dp/eedition-ownership-badge` | Green pill badge on cover image (future implementation) | 🔜 Planned |
| `dp/eedition-meta` | Page count and edition number metadata (future implementation) | 🔜 Planned |

## 5. Notes

- Layout uses `40%/60%` split for cover and details columns
- No traditional sidebar column — the subscription CTA has an internal 2-column layout (value prop + plan summary)
- Related editions grid uses a 4-column layout at desktop, 2-column at mobile

## 6. Cross-References

- [Full Page Patterns § Single E-Edition](/guidelines/wordpress-migration/full-page-patterns.md) — Detailed block structure and typography tokens
- [Block Mapping § 3.7](/guidelines/wordpress-migration/block-mapping.md) — `dp/subscription-cta` block definition
- [E-Editions User Journeys § 3.2](/guidelines/content/e-editions-user-journeys.md) — State specifications
- [Component: Single E-Edition](/guidelines/components/pages/single-eedition.md) — React page spec