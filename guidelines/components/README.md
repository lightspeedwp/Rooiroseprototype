# Components

**Last updated**: 2026-02-28
**Version**: 1.0

Component specifications and architecture documentation for Die Papier.

## Directory Structure

### Blocks (`blocks/`)
Custom Gutenberg blocks registered by the `die-papier-blocks` plugin.
- [wordpress-blocks.md](blocks/wordpress-blocks.md) — **Master inventory** (11 active, 7 deprecated)
- Active: `article-hero`, `competition-badge`, `competition-entry`, `content-hero`, `filter-bar`, `slider`, `sponsor-banner`, `tab-bar`, `traffic-widget`, `weather-widget`
- Deprecated (⛔): `ad-mrec`, `eedition-access`, `hero-slider`, `newsletter-cta`, `pricing-table`, `quote-slider`, `sticky-footer`

### Patterns (`patterns/`)
WordPress block patterns — organised into 10 subfolders with per-category READMEs:
- [Pattern System README](patterns/README.md) — **Master reference:** 3-tier composition model, naming conventions, AQL integration, registration
- **Subfolder READMEs:**
  - [Archive Patterns](patterns/archive/README.md) — 20 archive listing layouts
  - [Card Patterns](patterns/card/README.md) — 17 reusable card components + [Post Grid Spec](patterns/card/card-post-grid.md)
  - [CTA Patterns](patterns/cta/README.md) — 2 call-to-action blocks
  - [Footer Patterns](patterns/footer/README.md) — 2 footer variants
  - [Header Patterns](patterns/header/README.md) — 3 header variants
  - [Hidden Patterns](patterns/hidden/README.md) — 8 utility/infrastructure patterns
  - [Page Patterns](patterns/page/README.md) — 38 full-page layouts + [Composition Guide](patterns/page/page-composition.md) + [Homepage Spec](patterns/page/page-home.md)
  - [Query Patterns](patterns/query/README.md) — 10 AQL-powered query loops
  - [Sidebar Patterns](patterns/sidebar/README.md) — 4 sidebar compositions
- **Legacy consolidated docs (pre-subfolder):**
  - [Homepage Patterns](patterns/homepage.md) — Homepage section specs
  - [Archive Patterns](patterns/archives.md) — Archive pattern specs
  - [Section Patterns](patterns/sections.md) — Reusable section specs
  - [Cards & Utilities](patterns/cards-and-utilities.md) — Card meta, sidebar, hidden specs

### Templates (`templates/`)
WordPress FSE template guidelines — one file per template.

### Parts (`parts/`)
Template part guidelines — header, footer, sidebar, breadcrumbs, etc.

### Pages (`pages/`)
React page specifications — detailed content and layout docs per route.

### Layouts (`layouts/`)
Layout wrapper specifications (root, main, checkout).

## General References

- [Component Library](./component-library.md) — ShadCN primitive reference and usage
- [Content Components](./content-components.md) — Article cards, hero sections, media embeds
- [FAQ Sections](./faq-sections.md) — Page-level FAQ patterns and accordion specs
- [Interactive Components](./interactive-components.md) — Forms, modals, filters, tabs
- [Layout Components](./layout-components.md) — Headers, footers, sidebars, navigation