# New Templates, Patterns & Template Parts — Task List

**Generated**: 2026-03-03
**Last updated**: 2026-03-04
**Source Report**: `/reports/audit-new-templates-patterns-consolidated-2026-03-03.md`
**Orchestrator**: `/prompts/new-templates-patterns-orchestrator.md`
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: ✅ **[ARCHIVED]** — 42/42 tasks complete (100%)

---

## Phase 1: Guidelines (Documentation Only — No Code Changes) ✅

### Category Template Guidelines (5 files)

- [x] **1.1**: Create `/guidelines/components/templates/category-nuus.md`
- [x] **1.2**: Create `/guidelines/components/templates/category-sake.md`
- [x] **1.3**: Create `/guidelines/components/templates/category-leefstyl.md`
- [x] **1.4**: Create `/guidelines/components/templates/category-dink.md`
- [x] **1.5**: Create `/guidelines/components/templates/category-sport.md`

### WooCommerce Template Guidelines (4 files)

- [x] **1.6**: Create `/guidelines/components/templates/woocommerce/page-coming-soon.md`
- [x] **1.7**: Create `/guidelines/components/templates/taxonomy-product-cat-e-uitgawes.md`
- [x] **1.8**: Create `/guidelines/components/templates/single-product-e-uitgawe.md`
- [x] **1.9**: Create `/guidelines/components/templates/single-product-inteken.md`

### Template Part Guidelines (2 files)

- [x] **1.10**: Create `/guidelines/components/parts/mini-cart.md`
- [x] **1.11**: Create `/guidelines/components/parts/checkout-header.md`

### Overview File Updates (2 files)

- [x] **1.12**: Update `/guidelines/wordpress-migration/templates-and-parts.md` — Added 5 category templates, 3 WooCommerce templates, 2 template parts to inventory tables + template selection logic
- [x] **1.13**: Update `/guidelines/components/patterns/archives.md` — Deferred to Phase 5 (task 5.2)

---

## Phase 2: Create Missing Patterns (Dependencies for Templates) ✅

### WooCommerce Patterns (3 new files)

- [x] **2.1** (P0): Create `patterns/woocommerce/woo-coming-soon.php` — Branded Coming Soon page with logo, "Binnekort beskikbaar" heading, Gravity Forms newsletter
- [x] **2.2** (P0): Create `patterns/woocommerce/woo-archive-e-uitgawes.php` — E-Uitgawes product category with 70/30 layout, product collection grid, sidebar, FAQ, newsletter CTA, ad slots
- [x] **2.3** (P0): Create `patterns/woocommerce/woo-single-e-uitgawe.php` — Single e-edition with two-column product layout, Issuu viewer placeholder, social sharing, related editions

### Category Hero Pattern (1 new file)

- [x] **2.4** (P1): Create `patterns/section/section-category-hero.php` — Featured post hero using core/query (1 sticky post) + core/cover with gradient overlay

### Block Style for Filter Pills (1 new file)

- [x] **2.5** (P1): Create `styles/blocks/buttons/filter-pill.json` — Block style `is-style-filter-pill` for core/buttons: border-radius 9999px, small padding, border

---

## Phase 3: Rewrite Category Patterns + Create Templates ✅

### Rewrite 5 Category Patterns

- [x] **3.1** (P0): Rewrite `patterns/archive/archive-category-nuus.php` — Description: "Die jongste plaaslike en internasionale nuus." Tags: Aktueel, Politiek, Misdaad, Wêreld, Omgewing.
- [x] **3.2** (P0): Rewrite `patterns/archive/archive-category-sake.php` — Description: "Alle verwikkelings op die sakefront wat vir jou saak maak." Tags: Ekonomie, Landbou, Geldsake, Markte, Maatskappye.
- [x] **3.3** (P0): Rewrite `patterns/archive/archive-category-leefstyl.php` — Description: "Kuns, kultuur, kos en alles wat die lewe lekker maak." Tags: Vermaak, Kos en resepte, Reis en buitelewe, Kuns en kultuur, Blokkiesraaisels.
- [x] **3.4** (P0): Rewrite `patterns/archive/archive-category-dink.php` — Description: "Ontledings van die sake van die dag, met 'n persoonlike aanslag" Tags: Aktueel, Rubrieke, Profiele, Kommentaar, Spotprente, Menings.
- [x] **3.5** (P0): Rewrite `patterns/archive/archive-category-sport.php` — Description: "Al die aksie op en af van die veld." Tags: Rugby, Sokker, Krieket, Skolesport, Motorsport, Ander.

### Create 5 Category Templates

- [x] **3.6** (P0): Create `templates/category-nuus.html`
- [x] **3.7** (P0): Create `templates/category-sake.html`
- [x] **3.8** (P0): Create `templates/category-leefstyl.html`
- [x] **3.9** (P0): Create `templates/category-dink.html`
- [x] **3.10** (P0): Create `templates/category-sport.html`

### Create 3 WooCommerce Templates

- [x] **3.11** (P0): Create `templates/taxonomy-product_cat-e-uitgawes.html`
- [x] **3.12** (P0): Create `templates/single-product-e-uitgawe.html`
- [x] **3.13** (P0): Create `templates/single-product-inteken.html`

---

## Phase 4: theme.json Updates + Ad/Tag Fixes ✅

### theme.json Registration

- [x] **4.1** (P0): Add `single-product-e-uitgawe` and `single-product-inteken` to `theme.json` `customTemplates`

### Ad Slot Fixes

- [x] **4.2** (P0): Fix `patterns/archive/archive-tag.php` — Replaced `[the_ad id="sidebar-1"]` shortcode with `wp:template-part {"slug":"sidebar"}` + added `dp-archive-footer-leaderboard` ad block
- [x] **4.3** (P1): Update `patterns/archive/archive-category.php` — Added `dp-archive-footer-leaderboard` ad block after query loop

### Broken JSON Fixes

- [x] **4.4** (P2): Fix `patterns/woocommerce/woo-single-product.php` — Replaced all `\\\"` with `\"` throughout the file (full rewrite)

---

## Phase 5: Overview Files + Documentation

- [x] **5.1** (P2): Update `/guidelines/wordpress-migration/templates-and-parts.md` — version bump to 1.2
- [x] **5.2** (P2): Update `/guidelines/components/patterns/archives.md` — Added 5 dedicated category pattern entries + cross-references
- [x] **5.3** (P2): Update `Guidelines.md` — Added summary of orchestrator's completion status
- [x] **5.4** (P3): Verify `die-papier/card-post-grid-3col` pattern exists ✅ (`patterns/card/card-post-grid-3col.php`)
- [x] **5.5** (P3): Verify `die-papier/card-post-list` pattern exists ✅ (`patterns/card/card-post-list.php`)
- [x] **5.6** (P3): Verify `die-papier/section-newsletter-cta` pattern exists ✅ (`patterns/section/section-newsletter-cta.php`)
- [x] **5.7** (P3): Replaced emoji 🔒 in `header-checkout.php` with `outermost/icon` lock block using `main-accent` color ✅

---

## Summary

| Phase | Count | Status | Description |
|:------|:-----:|:------:|:------------|
| Phase 1 | 13 | ✅ | Guidelines (documentation only) |
| Phase 2 | 5 | ✅ | Create missing patterns |
| Phase 3 | 13 | ✅ | Rewrite patterns + create templates |
| Phase 4 | 4 | ✅ | theme.json + ad/tag fixes |
| Phase 5 | 7 | ✅ | Overview files + verification |
| **Total** | **42** | **42/42** | All tasks complete |