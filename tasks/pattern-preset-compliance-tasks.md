# Pattern Preset Compliance — Task List

**Generated**: 2026-03-03
**Last updated**: 2026-03-04
**Source**: `/reports/audits/pattern-preset-compliance-audit.md`
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: ✅ **[ARCHIVED]** — 20/20 task groups complete (100%)

---

## P0 — Critical (Block Styles & Color Slugs)

### Task 1: Create missing `is-style-card` block style for core/group
- [x] Create `/styles/blocks/group/card.json` — ✅ Created with border, shadow, padding, background

### Task 2: Create missing `is-style-card-hover` block style for core/group
- [x] Create `/styles/blocks/group/card-hover.json` — ✅ Created with hover CSS transition

### Task 3: Create missing `is-style-card` block style for core/column
- [x] Create `/styles/blocks/column/card.json` — ✅ Created mirroring group card style

### Task 4: Fix invalid color slug `base-2` → `tertiary` (23 instances)
- [x] `hidden/hidden-sidebar-event.php` line 30
- [x] `footer/footer-checkout.php` line 14
- [x] `section/section-sponsor-banner.php` line 10
- [x] `woocommerce/woo-cart.php` line 20
- [x] `woocommerce/woo-checkout.php` line 17
- [x] `woocommerce/woo-my-account.php` line 20
- [x] `woocommerce/woo-order-confirmation.php` lines 17, 52
- [x] `navigation/menu-card-latest-edition.php` line 13
- [x] `icon/icon-callouts.php` lines 15, 25, 35
- [x] `woocommerce/woo-single-product.php` line 102 (**NEW** — not in original audit)

### Task 5: Fix invalid color slug `base-3` → `border-light` (~14 instances)
- [x] `hidden/hidden-no-search-results.php` line 27
- [x] `footer/footer.php` line 51
- [x] `section/section-pricing-table.php` lines 48, 98, 144
- [x] `page/page-newsletter.php` lines 52, 71, 90
- [x] `page/page-subscribe-delivery.php` lines 49, 72, 95
- [x] `woocommerce/woo-subscription-pricing-table.php` lines 50, 94, 134
- [x] `woocommerce/woo-empty-cart.php` line 35
- [x] `hidden/hidden-article-hero.php` line 14 (**NEW** — not in original audit)
- [x] `section/section-share.php` lines 13-14 (**NEW** — not in original audit)
- [x] `woocommerce/woo-single-product.php` line 58 (**NEW** — not in original audit)

### Task 6: Fix invalid color slug `contrast` → `secondary`
- [x] `navigation/menu-card-latest-edition.php` line 13 (`textColor`) — already fixed in prior session
- [x] `icon/icon-cta-buttons.php` line 27 (`backgroundColor`)

### Task 7: Fix invalid color slug `neutral-50` → `tertiary`
- [x] `section/section-homepage-poll.php` line 10

---

## P1 — High Priority (Hardcoded Values)

### Task 8: Fix legacy numeric font-size slugs
- [x] `section/section-pricing-table.php` line 83: `fontSize:"200"` → `fontSize:"small"` — already fixed in prior session
- [x] `woocommerce/woo-subscription-pricing-table.php` line 79: `fontSize:"200"` → `fontSize:"small"`
- [x] `woocommerce/woo-empty-cart.php` line 133: `fontSize:"100"` → `fontSize:"x-small"`
- [x] `hidden/hidden-404.php` line 56: `fontSize:"400"` → `fontSize:"medium"`
- [x] `hidden/hidden-404.php` line 72: `fontSize:"400"` → `fontSize:"medium"`
- [x] `woocommerce/woo-mini-cart.php` line 11: `fontSize:"300"` → `fontSize:"base"`

### Task 9: Replace hardcoded hex colors with preset references
- [x] `page/page-thank-you-contact.php` lines 20-21: Replaced emoji with `outermost/icon` check-circle in `primary` color
- [x] `page/page-thank-you-register.php` lines 20-21: Replaced emoji with `outermost/icon` user-check in `primary` color
- [x] `page/page-newsletter-confirm.php` lines 20-21: Replaced emoji with `outermost/icon` mail-check in `primary` color
- [x] `navigation/menu-card-latest-edition.php` line 17-18: `#e5e7eb` → `var:preset|color|border-light` — already fixed in prior session
- [x] `icon/icon-cta-buttons.php` lines 23, 29: `#FFFFFF` → `var:preset|color|base`

### Task 10: Hardcoded font-sizes → preset references
- [x] `page/page-newsletter.php` lines 57, 76, 95: `"fontSize":"0.875rem"` → `"fontSize":"small"`
- [x] `page/page-subscribe-delivery.php` lines 54, 77, 100, 126: `"fontSize":"2.5rem"` → `"fontSize":"xx-large"`
- [x] `page/page-subscribe-delivery.php` line 120: `"fontSize":"0.75rem"` → `"fontSize":"x-small"`
- [x] `page/page-e-editions.php` line 74: `"fontSize":"1.5rem"` → `"fontSize":"x-large"`

### Task 11: Add aspect-ratio to team images
- [x] `section/section-team-grid.php`: Added `"aspectRatio":"1"` to all 3 `wp:image` blocks
- [x] `card/card-obituary-grid.php` line 14: Added `"aspectRatio":"1"`
- [x] `sidebar/sidebar-obituary.php` line 45: Added `"aspectRatio":"1"` to avatar images

---

## P2 — Important (Shadow & Section Style Enhancements)

### Task 12: Add shadow presets to card block styles
- [x] In `card.json` (Task 1): Includes `shadow: "var:preset|shadow|200"`
- [x] In `card-hover.json` (Task 2): Includes hover shadow CSS with `var(--wp--preset--shadow--400)`

### Task 13: Add shadow to pricing table featured cards
- [x] `section/section-pricing-table.php`: Added `"shadow":"var:preset|shadow|400"` to featured pricing column
- [x] `woocommerce/woo-subscription-pricing-table.php`: Same treatment

### Task 14: Fix `99px` border-radius to use preset `9999`
- [x] `page/page-subscribe-eedition.php` line 105: `"radius":"99px"` → `"radius":"9999px"`

### Task 15: Add outline button variant to dark section styles
- [x] `section-navy.json`: Added `core/button` outline variation with `base` border/text colors
- [x] `section-red.json`: Same
- [x] `section-navy-light.json`: Same
- [x] `section-gradient-navy.json`: Same
- [x] `section-hero-default.json`: Same
- [x] `section-cover-hero.json`: Same

### Task 16: Fix hardcoded border-width values (consider)
- [x] **Decision**: Since WordPress block JSON doesn't support `var:custom|borderWidth|*` syntax, hardcoded values that align with the preset scale (`1px`=100, `2px`=200, `4px`=300) are acceptable. Documented as intentional.

---

## P3 — Nice-to-Have (Icon Pattern Colors)

### Task 17: Decide on semantic utility colors
- [x] `icon-callouts.php` uses `#2196F3` (info blue), `#FF9800` (warning orange), `#4CAF50` (success green) — these are semantic UI colors not in the brand palette
- [x] `icon-trust-signals.php` uses `#4CAF50` (success green), `#FFC107` (star yellow)
- [x] **Decision**: Accept hardcoded values. These are utility-only patterns (callouts, trust signals) using standard Material Design semantic colors. Adding them to the brand palette would increase complexity for minimal gain (only 2 patterns). Documented as intentional — these colors are not part of the Die Papier brand identity.

---

## Follow-Up: Additional Invalid Slugs Found (2026-03-03)

### Task 18: Fix invalid color slugs `contrast-2` and `contrast-3` (23 instances)
- [x] `contrast-2` → `main-accent` — 16 instances across 12 files ✅
- [x] `contrast-3` → `main-accent` — 7 instances across 7 files ✅
- [x] Nested `contrast-2` in woo-checkout.php style element ✅

### Task 19: Fix additional legacy numeric font-size slugs (500, 600, 700, 800)
- [x] `fontSize:"500"` → `large` — 12 instances across 6 files ✅
- [x] `fontSize:"600"` → `x-large` — 10 instances across 6 files ✅
- [x] `fontSize:"700"` → `xx-large` — 2 instances across 2 files ✅
- [x] `fontSize:"800"` → `xxx-large` — 5 instances across 3 files ✅
- [x] `fontSize:"ui-text"` → `small` — 7 instances across 6 files ✅
- [x] `fontSize:"caption"` → `x-small` — 1 instance ✅

### Task 20: Remaining low-priority numeric font-size slugs (200, 300, 400, 900)
- [x] All 51 instances migrated to semantic slugs across 11 pattern files ✅
- [x] Additional: `icon-timeline.php` (6 instances), `icon-contact-info.php` (3 instances) ✅
- [x] Additional: `woo-single-product.php` — `fontSize:"700"`, `fontSize:"500"`, `fontSize:"300"` + `contrast-2` (5 instances) ✅
- [x] Additional: `section-newsletter-cta-full.php`, `section-newsletter-form.php` — inline `contrast-2` style (2 instances) ✅
- [x] Additional: `assets/css/social-sharing.css` — `contrast-2` CSS variable (2 instances) ✅
- [x] **Status**: COMPLETE — 0 legacy numeric slugs remaining, 0 contrast-2/contrast-3 references remaining

---

**Total Tasks**: 20 task groups
**Completed**: 20/20 task groups (Tasks 1-20) ✅
**Remaining**: None — all tasks including Task 17 decision are complete
**Report**: `/reports/pattern-preset-compliance-followup.md`

**End of Task List**