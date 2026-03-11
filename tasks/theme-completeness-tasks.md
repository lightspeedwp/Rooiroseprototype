# Theme Completeness — Guideline Documentation Tasks

**Generated**: 2026-03-04  
**Source Report**: `/reports/theme-completeness-audit-2026-03-04.md`  
**Orchestrator**: `/prompts/new-templates-patterns-orchestrator.md` (v2)  
**Status Legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked
**Status**: COMPLETE — 39/39 tasks done (100%)

---

## Instructions

For each task, create the guideline `.md` file by:
1. Reading the corresponding PHP pattern / HTML template / HTML part file
2. Reading related guidelines (parent template, referenced patterns, section style docs)
3. Using the appropriate template from `/guidelines/_templates/`
4. Including: Description, Block Composition, Section Style, Design Tokens, Ad Slots, React Equivalent, Related Files

---

## Phase 1: P1 — Homepage Section Pattern Guidelines (11 tasks)

These patterns are all referenced by `page-home.php` and render the homepage category sections. Each uses AQL query loops and section styles. Reference `/guidelines/components/patterns/homepage.md` for the overview.

**Guideline directory**: `/guidelines/components/patterns/section/`  
**Pattern directory**: `/wordpress-export/themes/die-papier-theme/patterns/section/`

- [x] **TC-001**: Create `homepage-top-stories.md` — Featured/sticky posts hero section with AQL query
- [x] **TC-002**: Create `homepage-nuus.md` — Nuus (News) category section
- [x] **TC-003**: Create `homepage-sport.md` — Sport category section
- [x] **TC-004**: Create `homepage-sake.md` — Sake (Business) category section
- [x] **TC-005**: Create `homepage-skole.md` — Skole (Schools) section
- [x] **TC-006**: Create `homepage-leefstyl.md` — Leefstyl (Lifestyle) category section
- [x] **TC-007**: Create `homepage-dink.md` — Dink (Opinion) category section
- [x] **TC-008**: Create `homepage-nuusflitse.md` — Breaking news bar/ticker
- [x] **TC-009**: Create `homepage-multimedia.md` — Multimedia section (videos/galleries)
- [x] **TC-010**: Create `homepage-obituaries.md` — Obituaries section
- [x] **TC-011**: Create `homepage-events.md` — Events section

---

## Phase 2: P1 — Navigation Pattern Guidelines (3 tasks)

**Create directory**: `/guidelines/components/patterns/navigation/`  
**Pattern directory**: `/wordpress-export/themes/die-papier-theme/patterns/navigation/`

- [x] **TC-012**: Create `navigation/README.md` — Navigation patterns overview
- [x] **TC-013**: Create `navigation/menu-card-latest-edition.md` — Mega menu card showing latest e-edition cover
- [x] **TC-014**: Create `navigation/menu-card-subscribe-cta.md` — Mega menu subscription CTA card
- [x] **TC-015**: Create `navigation/menu-mobile.md` — Mobile navigation menu pattern

---

## Phase 3: P1 — WooCommerce & Registration Pattern Guidelines (5 tasks)

**Guideline directories**: `/guidelines/components/patterns/woocommerce/` and `/guidelines/components/patterns/page/`

- [x] **TC-016**: Create `woocommerce/woo-product-archive.md` — Product archive/shop page pattern
- [x] **TC-017**: Create `woocommerce/woo-product-search.md` — Product search results pattern
- [x] **TC-018**: Create `woocommerce/woo-single-product.md` — Single product page pattern
- [x] **TC-019**: Create `woocommerce/woo-product-card.md` — Product card pattern used in grids
- [x] **TC-020**: Create `page/page-register.md` — User registration page pattern

---

## Phase 4: P2 — Submission Form Pattern Guidelines (5 tasks)

These are sub-pages of the submit hub (`page-submit.php`). Each uses Gravity Forms.

**Guideline directory**: `/guidelines/components/patterns/page/`

- [x] **TC-021**: Create `page/page-submit-feedback.md` — Feedback submission form
- [x] **TC-022**: Create `page/page-submit-letter.md` — Letter to editor submission form
- [x] **TC-023**: Create `page/page-submit-shoutout.md` — Shoutout submission form
- [x] **TC-024**: Create `page/page-submit-story.md` — Story tip submission form
- [x] **TC-025**: Create `page/page-submit-tip.md` — News tip submission form

---

## Phase 5: P2 — Hidden, Sidebar, Checkout & Part Pattern Guidelines (10 tasks)

**Guideline directories**: Various

### Hidden patterns
- [x] **TC-026**: Create `hidden/hidden-social-profiles.md` — Social media profile links (used on About page)
- [x] **TC-027**: Create `hidden/hidden-social-sharing.md` — Social sharing buttons (used on all single CPT templates)

### Section patterns
- [x] **TC-028**: Create `section/section-competition-entry.md` — Competition entry form/CTA section

### Sidebar patterns
- [x] **TC-029**: Create `sidebar/sidebar-home.md` — Homepage sidebar (polls, ads, e-edition promo)
- [x] **TC-030**: Create `sidebar/sidebar-newsletter-nuus.md` — Newsletter signup sidebar for Nuus section

### Checkout chrome patterns
- [x] **TC-031**: Create `footer/footer-checkout.md` — Simplified checkout footer
- [x] **TC-032**: Create `header/header-checkout.md` — Simplified checkout header with lock icon

### Part-level patterns
- [x] **TC-033**: Create `parts/part-post-meta-bottom.md` — Post meta bottom bar (sharing, tags, author)
- [x] **TC-034**: Create `parts/part-post-meta-top.md` — Post meta top bar (author, date, read time, category)

---

## Phase 6: P2 — Template & Part Guidelines (4 tasks)

### Missing template guidelines
- [x] **TC-035**: Create `/guidelines/components/templates/order-confirmation.md` — WooCommerce order confirmation (references `woo-order-confirmation` pattern)
- [x] **TC-036**: Create `/guidelines/components/templates/page-order-received.md` — WooCommerce order received page (same pattern, different template slug for WooCommerce compatibility)

### Missing part guidelines
- [x] **TC-037**: Create `/guidelines/components/parts/checkout-footer.md` — Checkout footer template part (references `footer-checkout` pattern)
- [x] **TC-038**: Create `/guidelines/components/parts/sidebar-home.md` — Homepage sidebar template part (references `sidebar-home` pattern)

---

## Summary

| Phase | Tasks | Priority | Description |
|:------|:-----:|:---------|:------------|
| 1. Homepage Sections | 11 | P1 | Homepage section pattern guidelines |
| 2. Navigation | 4 | P1 | Navigation pattern guidelines (new directory) |
| 3. WooCommerce & Registration | 5 | P1 | WooCommerce + registration pattern guidelines |
| 4. Submission Forms | 5 | P2 | Submit sub-page pattern guidelines |
| 5. Hidden/Sidebar/Checkout/Parts | 10 | P2 | Utility pattern guidelines |
| 6. Templates & Parts | 4 | P2 | Template and part guideline files |
| **Total** | **39** | | **39/39 complete** |

---

## Dependencies

- Phase 1 depends on reading `page-home.php` and `homepage.md`
- Phase 2 requires creating the `/guidelines/components/patterns/navigation/` directory
- Phase 3 depends on reading WooCommerce pattern files
- Phases 4-6 are independent and can be done in any order

---

## Verification

After all tasks complete:
1. Re-run Audit 1-3 from orchestrator — should find 0 missing guidelines
2. Verify no new patterns have been added since audit date
3. Update `PATTERN-INVENTORY.md` with new guideline cross-references

**End of Task List**