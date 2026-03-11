# Pattern Inventory Index

**Last updated**: 2026-03-02
**Status**: 100% Production Ready
**Total Patterns**: 130+

---

## Master Inventory Index

This document serves as the master index for all WordPress block patterns in the **Die Papier** theme. Patterns are organized into 14 categories matching their disk subfolders.

### 📁 [Archive Patterns](./archive/README.md)
*20 patterns* — Full-page archive layouts for category, tag, author, and search listings.
- Includes category-specific variants (Dink, Leefstyl, Nuus, Sake, Sport).
- Powered by Advanced Query Loop (AQL).

### 📁 [Card Patterns](./card/README.md)
*17 patterns* — Atomic building blocks for query loops.
- Standard post cards (grid, list, featured).
- CPT-specific cards (Event, Competition, E-Edition, Obituary).
- PHP-rendered metadata patterns.

### 📁 [CTA Patterns](./cta/README.md)
*2 patterns* — Promotional and action-oriented blocks.
- Subscription prompts and generic CTA cards.

### 📁 [Footer Patterns](./footer/README.md)
*2 patterns* — Site footer variations.
- Default 4-column footer and simple checkout/utility footer.

### 📁 [Header Patterns](./header/README.md)
*3 patterns* — Site header and navigation variations.
- Default masthead, transparent hero header, and logo-only header.

### 📁 [Hidden Patterns](./hidden/README.md)
*9 patterns* — Utility/Infrastructure patterns (`Inserter: false`).
- 404 page content, breadcrumbs, comments, no-results states, and sidebars.

### 📁 [Icon Patterns](./icon/README.md)
*8 patterns* — Custom icon-based feature sections.
- Benefits grid, feature lists, timeline, and trust signals.

### 📁 [Navigation Patterns](./navigation/README.md)
*3 patterns* — Menu compositions.
- Mobile menu overlay and mega-menu cards.

### 📁 [Page Patterns](./page/README.md)
*20+ patterns* — Full-page layouts for static pages.
- About, Contact, Advertise, FAQ, Policies, Subscriptions, and Submit Hub.

### 📁 [Part Patterns](./parts/README.md)
*2 patterns* — Composition fragments for template parts.
- Post meta top/bottom fragments.

### 📁 [Query Patterns](./query/README.md)
*10 patterns* — Pre-configured AQL query loops.
- Latest posts, category queries, active competitions, and upcoming events.

### 📁 [Section Patterns](./section/README.md)
*21 patterns* — Reusable content sections.
- Newsletter CTAs, related articles, sponsor grids, and team grids.
- Includes 13 dedicated homepage section patterns.

### 📁 [Sidebar Patterns](./sidebar/README.md)
*4 patterns* — Sidebar widget compositions.
- E-edition promos, competition widgets, and CPT-specific sidebars.

### 📁 [WooCommerce Patterns](./woocommerce/README.md)
*11 patterns* — E-commerce and account pages.
- Cart, Checkout, My Account, Order Confirmation, and Subscription pricing.

---

## Implementation Standards

| Standard | Rule |
|:---|:---|
| **Namespace** | All slugs must start with `die-papier/` |
| **Typography** | Must use theme.json presets (`x-small` to `xxx-large`) |
| **Spacing** | Must use semantic fluid presets (`medium`, `large`, etc.) |
| **Section Styles** | Use `is-style-section-*` classes for container blocks |
| **Deduplication** | Use AQL plugin for all query loop sections |
| **Semantic HTML** | Use `tagName` attribute on Group blocks (`main`, `aside`, `nav`) |

---

## Related Documentation
- [Design System Guide](../design-tokens/DESIGN-SYSTEM-GUIDE.md)
- [Section Styles Architecture](../../wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md)
- [AQL Integration Guide](../../wordpress-migration/third-party-plugins/advanced-query-loop.md)
