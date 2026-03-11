# WordPress Theme & Plugin Structure

This document outlines the file structure for the *Die Papier* WordPress migration. We use a **hybrid architecture**: a Block Theme (FSE) for the frontend design system and a separate "Block Plugin" for functionality (CPTs, Custom Blocks).

**Last updated**: 2026-02-27
**Version**: 1.0

## 1. Monorepo Strategy

```
/
├── plugins/
│   └── die-papier-blocks/   # Custom functionality & blocks
├── themes/
│   └── die-papier-theme/    # Design system & templates
├── .gitignore
└── package.json             # Root build scripts
```

---

## 2. Theme Structure (`die-papier-theme`)

The theme is a **Block Theme** (Full Site Editing). It contains **no PHP logic** for functionality (no CPT registration, no shortcodes). Its sole purpose is **presentation**.

### Complete File Tree

```text
die-papier-theme/
├── style.css                    # Theme declaration & compiled CSS
├── theme.json                   # Design tokens (v3 schema)
├── functions.php                # Minimal setup (enqueue, supports)
├── screenshot.png               # Theme preview (1200x900)
│
├── inc/                         # PHP includes (modular theme logic)
│   ├── patterns.php             # Pattern category registration (11 categories)
│   ├── block-bindings.php       # Block Bindings API sources (cpt-meta, site-data)
│   ├── performance.php          # Performance optimizations (emoji removal, heartbeat, preload)
│   └── font-collections.php     # Font collection registration (P3, planned)
│
├── templates/                   # Full template hierarchy
│   ├── index.html               # Fallback template
│   ├── front-page.html          # Homepage
│   ├── single.html              # Single post (article)
│   ├── page.html                # Static pages
│   ├── archive.html             # Category/tag archives
│   ├── search.html              # Search results
│   ├── 404.html                 # Not Found
│   ├── author.html              # Author archive
│   ├── tag.html                 # Tag archive
│   │
│   │  # CPT Singles
│   ├── single-dp_event.html
│   ├── single-dp_obituary.html
│   ├── single-dp_multimedia.html
│   ├── single-dp_competition.html
│   ├── single-dp_eedition.html
│   ├── single-dp_sponsor.html
│   │
│   │  # CPT Archives
│   ├── archive-dp_event.html
│   ├── archive-dp_obituary.html
│   ├── archive-dp_multimedia.html
│   ├── archive-dp_competition.html
│   ├── archive-dp_sponsor.html
│   │
│   │  # Taxonomy Archives
│   ├── taxonomy-dp_event_category.html
│   ├── taxonomy-dp_multimedia_category.html
│   └── taxonomy-dp_sponsor_tier.html
│
├── parts/                       # Reusable template parts
│   ├── header.html              # Default header
│   ├── header-transparent.html  # Overlay header (hero pages)
│   ├── footer.html              # Default footer
│   ├── footer-simple.html       # Simplified (checkout/login)
│   ├── sidebar.html             # Default sidebar
│   ├── sidebar-event.html       # Event-specific sidebar
│   ├── comments.html            # Comments section
│   ├── post-meta.html           # Author, date, category meta
│   └── breadcrumbs.html         # Breadcrumb navigation
│
├── patterns/                    # Block patterns (57 total)
│   │
│   │  # Full Page Patterns — Static Pages (15)
│   ├── page-home.php
│   ├── page-about.php
│   ├── page-contact.php
│   ├── page-advertise.php
│   ├── page-subscriptions.php
│   ├── page-subscribe-delivery.php
│   ├── page-subscribe-eedition.php
│   ├── page-faq.php
│   ├── page-team.php
│   ├── page-sitemap.php
│   ├── page-weather.php
│   ├── page-traffic.php
│   ├── page-default.php
│   ├── page-policy.php            # Shared: 11 policies
│   ├── page-thank-you.php         # Shared: 7 thank-you pages
│   │
│   │  # Full Page Patterns — Auth & Account (6)
│   ├── page-auth.php
│   ├── page-my-account.php
│   ├── page-my-eeditions.php
│   ├── page-cart.php
│   ├── page-checkout.php
│   ├── page-activation.php
│   │
│   │  # Full Page Patterns — Submissions & Newsletter (5)
│   ├── page-submit-hub.php
│   ├── page-submit-event.php
│   ├── page-newsletter.php
│   ├── page-newsletter-manage.php
│   ├── page-newsletter-unsub.php
│   │
│   │  # Full Page Patterns — Archives (8)
│   ├── archive-default.php
│   ├── archive-events.php
│   ├── archive-obituaries.php
│   ├── archive-multimedia.php
│   ├── archive-competitions.php
│   ├── archive-sponsors.php
│   ├── archive-eeditions.php
│   ├── archive-search.php
│   │
│   │  # Full Page Patterns — Utility (3)
│   ├── page-404.php
│   ├── page-offline.php
│   ├── page-competition-terms.php
│   │
│   │  # Reusable Section Patterns (12)
│   ├── section-newsletter-cta.php
│   ├── section-newsletter-cta-full.php
│   ├── section-faq.php
│   ├── section-sponsor-banner.php
│   ├── section-sponsor-grid.php
│   ├── section-related-articles.php
│   ├── section-content-hero.php
│   ├── section-cta-card.php
│   ├── section-breadcrumbs.php
│   ├── section-share.php
│   ├── section-pricing-table.php
│   ├── section-team-grid.php
│   │
│   │  # Query & Utility Patterns
│   └── hidden-no-results.php
│
├── styles/                      # Global Style Variations
│   ├── dark.json
│   ├── high-contrast.json
│   └── serif.json
│
└── assets/                      # Static theme assets
    ├── fonts/
    │   ├── inter-variable.woff2
    │   └── roboto-serif-variable.woff2
    └── images/
        ├── die-papier-logo.svg
        ├── die-papier-logo-white.svg
        └── placeholder.png
```

### Root Files

| File | Priority | Purpose |
| :--- | :--- | :--- |
| `style.css` | **Critical** | Theme declaration. Also contains the compiled Tailwind CSS utilities. |
| `theme.json` | **Critical** | The brain of the theme. Defines colors, typography, layout, and block defaults. Uses Schema v3. |
| `functions.php` | **Critical** | Minimal PHP entrypoint. Requires all `inc/*.php` files. Registers theme supports, enqueues `style.css`, and merges preset files via `wp_theme_json_data_theme` filter. CSS-minimal — no inline styles, no `wp_add_inline_style()`. |
| `screenshot.png` | Normal | Theme preview image for WP Admin (1200x900px). |

### `/templates/` — Template Hierarchy

Every template follows the same minimal pattern: Header Part → Main Content (Pattern or Post Content) → Footer Part. See [Full Page Patterns](./full-page-patterns.md) for the strategy.

| File | Purpose | React Equivalent | Priority |
| :--- | :--- | :--- | :--- |
| `index.html` | Fallback template for any undefined route. | `App.tsx` (generic) | Critical |
| `front-page.html` | Homepage layout. | `pages/Home.tsx` | Critical |
| `single.html` | Single post (Article) layout. | `pages/Article.tsx` | Critical |
| `page.html` | Standard static page layout. | `MainLayout.tsx` | Critical |
| `archive.html` | Category/Tag archives. | `pages/Category.tsx` | Important |
| `search.html` | Search results page. | `pages/Search.tsx` | Important |
| `404.html` | Not Found page. | `pages/NotFound.tsx` | Important |
| `author.html` | Author bio + posts archive. | `pages/Author.tsx` | Normal |
| `tag.html` | Tag-filtered archive. | `pages/TagArchive.tsx` | Normal |
| `single-dp_event.html` | Single event details. | `pages/SingleEvent.tsx` | Important |
| `single-dp_obituary.html` | Single obituary. | `pages/SingleObituary.tsx` | Important |
| `single-dp_multimedia.html` | Single multimedia item. | `pages/SingleMultimedia.tsx` | Important |
| `single-dp_competition.html` | Single competition + entry form. | `pages/SingleCompetition.tsx` | Important |
| `single-dp_eedition.html` | E-edition reader view. | `pages/SingleEEdition.tsx` | Important |
| `single-dp_sponsor.html` | Sponsor profile page. | `pages/SingleSponsor.tsx` | Normal |
| `archive-dp_event.html` | Events listing. | `pages/Events.tsx` | Important |
| `archive-dp_obituary.html` | Obituaries listing. | `pages/Obituaries.tsx` | Important |
| `archive-dp_multimedia.html` | Multimedia gallery. | `pages/Multimedia.tsx` | Important |
| `archive-dp_competition.html` | Competitions listing. | `pages/Competitions.tsx` | Important |
| `archive-dp_sponsor.html` | Sponsors directory. | `pages/SponsorArchive.tsx` | Normal |

### `/parts/` — Template Parts

| File | Purpose | React Equivalent | Priority |
| :--- | :--- | :--- | :--- |
| `header.html` | Global site header. | `Header.tsx` | Critical |
| `header-transparent.html` | Transparent header for hero overlays. | `Header.tsx` (variant) | Normal |
| `footer.html` | Global site footer. | `Footer.tsx` | Critical |
| `footer-simple.html` | Simplified footer (checkout/login). | `Footer.tsx` (variant) | Normal |
| `sidebar.html` | Default sidebar. | `Sidebar.tsx` | Important |
| `sidebar-event.html` | Event-specific sidebar. | `EventSidebar.tsx` | Normal |
| `comments.html` | Comments section. | `CommentsSection.tsx` | Normal |
| `post-meta.html` | Author, date, category meta. | `PostMeta.tsx` | Normal |
| `breadcrumbs.html` | Breadcrumb navigation. | `Breadcrumbs.tsx` | Normal |

### `/inc/` — PHP Includes (Modular Theme Logic)

The theme's PHP logic is split into focused include files. Each file uses `if ( ! function_exists() )` guards for safe re-inclusion.

| File | Purpose | Functions |
| :--- | :--- | :--- |
| `patterns.php` | Registers 11 pattern categories for the Block Editor inserter | `dp_register_pattern_categories()` |
| `block-bindings.php` | Registers Block Bindings API sources for CPT meta (13 keys across 6 CPTs) + site data (title, tagline, year) | `dp_register_block_bindings()` |
| `performance.php` | Disables emoji scripts, optimizes Heartbeat (60s), preloads font files (Inter + Roboto Serif woff2), lazy-loads images | `dp_disable_emojis()`, `dp_optimize_heartbeat()`, `dp_preload_fonts()`, `dp_lazy_load_images()` |
| `font-collections.php` | *(Planned, P3)* Registers font collections for the Font Library | — |

**CSS-Minimal Philosophy**: Following TT5, the theme avoids `wp_add_inline_style()` and inline CSS entirely. All styling is defined in `theme.json` presets, block style JSON files (`/styles/blocks/`), and the compiled `style.css`. PHP files never output CSS.

---

## 3. Plugin Structure (`die-papier-blocks`)

See [Plugin Structure](./third-party-plugins/plugin-structure.md)

---

## 4. Migration Considerations (React → WP)

### Code Migration Table

| Concept | React (Current) | WordPress (Target) |
| :--- | :--- | :--- |
| **Routing** | `react-router` | WordPress Template Hierarchy (`single.html`, etc.) |
| **State** | `useState`, `Context` | HTML attributes (static) or Interactivity API (dynamic). |
| **Data Fetching** | `fetch('/data/articles.ts')` | WP_Query (PHP) or `useSelect` (Editor JS). |
| **Styling** | Tailwind Classes | Tailwind (compiled) + `theme.json` presets. |
| **Icons** | `lucide-react` | SVGs in HTML or `@wordpress/icons`. |
| **Forms** | React Hook Form | Gravity Forms / Form Block / Custom PHP handler. |
| **Auth** | Custom React auth | WordPress login / WooCommerce / MemberPress. |
| **Payments** | N/A | WooCommerce (subscriptions, cart, checkout). |

### Critical "Gotchas"

1.  **Hydration**: WordPress is PHP-first. You cannot simply "mount" a React app on the frontend. Use **Dynamic Blocks** (`render.php`) for complex logic that needs server access.
2.  **Interactivity**: For frontend interactivity (like the "Search Sidebar" toggle), use the **WordPress Interactivity API** (introduced in WP 6.5) instead of vanilla React `useState`.
3.  **Tailwind JIT**: Since PHP renders HTML, Tailwind's JIT mode needs to scan `.html` and `.php` files in your theme/plugin to generate the correct CSS. Configure `content` paths in `tailwind.config.js` carefully.
4.  **InnerBlocks**: For composite components (like PricingTable with PricingCard children), use `InnerBlocks` with `allowedBlocks` to maintain structure while giving editors flexibility.
5.  **Template Locking**: Use `templateLock: "all"` on critical patterns (like the homepage hero) to prevent editors from breaking the layout.

### Data Migration Strategy

1.  **Static Pages**: Copy content from `/content/pages/*.md` into WordPress Pages.
2.  **Policies**: Copy from `/content/policies/*.md` using the shared `page-policy` pattern.
3.  **Articles**: Use WP CLI or CSV Importer to map `data/articles.ts` to Posts.
4.  **CPT Data**: Use WP CLI import scripts with `/content/cpt/**/*.md` as source.
5.  **Images**: Must be uploaded to the Media Library. URLs in content must be updated.
6.  **Redirects**: See sitemap for full legacy → Afrikaans URL redirect mapping.