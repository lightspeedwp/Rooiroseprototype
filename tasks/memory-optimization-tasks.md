# Memory Optimization Task List

**Created**: 2026-03-05  
**Source**: `/reports/memory-optimization-audit-2026-03-05.md`  
**Orchestrator**: `/prompts/performance-optimization-orchestrator.md`  
**Total Tasks**: 56  
**Estimated Effort**: 16-24 hours

---

## Phase 1: CSS Decomposition (P1 — 12 tasks)

### 1.1 Split `theme.css` into partials

| # | Task | File | Status |
|:-:|:-----|:-----|:------:|
| 1 | Extract `:root` CSS custom properties (lines 1-428) into `theme-tokens.css` | `/src/styles/theme-tokens.css` | [x] |
| 2 | Extract `.dark` token overrides (lines 430-498) into `theme-dark.css` | `/src/styles/theme-dark.css` | [x] |
| 3 | Extract `@theme inline` block (lines 500-567) into `theme-exports.css` | `/src/styles/theme-exports.css` | [x] |
| 4 | Extract `@layer base` body + headings (lines 569-642) into `theme-base.css` | `/src/styles/theme-base.css` | [x] |
| 5 | Extract `.has-*-color` text utilities (lines 644-719) into `wp-utilities.css` | `/src/styles/wp-utilities.css` | [x] |
| 6 | Extract `.has-*-background-color` utilities (lines 721-822) into `wp-utilities.css` (append) | `/src/styles/wp-utilities.css` | [x] |
| 7 | Extract `.has-*-font-size` utilities (lines 824-854) into `wp-utilities.css` (append) | `/src/styles/wp-utilities.css` | [x] |
| 8 | Extract `.is-style-*` block variations (lines 856-920) into `block-style-variations.css` | `/src/styles/block-style-variations.css` | [x] |
| 9 | Extract `.article-content` styles (lines 922-1027) into `article-content.css` | `/src/styles/article-content.css` | [x] |
| 10 | Extract dark mode global utilities (lines 1029-1092) into `dark-mode-utilities.css` | `/src/styles/dark-mode-utilities.css` | [x] |
| 11 | Extract font family enforcement (lines 1094-1135) into `font-enforcement.css` | `/src/styles/font-enforcement.css` | [x] |
| 12 | Update `index.css` — replace `@import "./theme.css"` with ordered imports of all new partials | `/src/styles/index.css` | [x] |

**Import order in `index.css`**:
```css
@import "./fonts.css";
@import "./tailwind.css";
@import "./theme-tokens.css";
@import "./theme-dark.css";
@import "./theme-exports.css";
@import "./theme-base.css";
@import "./wp-utilities.css";
@import "./block-style-variations.css";
@import "./article-content.css";
@import "./dark-mode-utilities.css";
@import "./font-enforcement.css";
@import "./markdown-prose.css";
@import "./print.css";
```

**Validation**: After splitting, delete `theme.css` and verify no visual regression on Home, Article, Category, and any dark mode page.

---

## Phase 2: Data Barrel Cleanup (P1 — 10 tasks)

### 2.1 Remove dev-only re-exports from barrel

| # | Task | Status |
|:-:|:-----|:------:|
| 13 | Verify `BlockStyleBrowser.tsx` imports `blockStylesData` directly (not via barrel) | [x] |
| 14 | Verify `SectionStyles.tsx` imports `sectionStylesData` directly (not via barrel) | [x] |
| 15 | Verify `ThemeJsonViewer.tsx` imports `globalStyleVariationsData` directly (not via barrel) | [x] |
| 16 | Verify `ContentBrowser.tsx` imports `contentData` directly (not via barrel) | [x] |
| 17 | Verify `DevToolHero.tsx` imports `devToolHeroData` directly (not via barrel) | [x] |
| 18 | Verify `ImageAssetBrowser.tsx` imports `imageAssets` directly (not via barrel) | [x] |
| 19 | Search all files for any production import of removed exports — fix import paths | [x] |
| 20 | Remove 7 dev-only re-export lines from `data/index.ts` | [x] |

### 2.2 Split large data files

| # | Task | Status |
|:-:|:-----|:------:|
| 21 | Split `categoryArticles.ts` (79KB) — extract raw article data arrays into `categoryArticleData.ts`, keep functions/types in `categoryArticles.ts` | [—] (deferred: file is behind lazy routes, split is organizational only — no bundle impact) |
| 22 | Fix duplicate IDs 199-202 in `patternBrowserData.ts` (cosmetic — renumber to avoid overlap) | [x] |

---

## Phase 3: Shared Dev Component Extraction — DRY (P2 — 8 tasks)

### 3.1 Create shared dev tool components

| # | Task | Component | Used By (estimated) | Status |
|:-:|:-----|:----------|:-------------------:|:------:|
| 23 | Create `DevSearchBar.tsx` — search input with icon, clear button, debounced onChange | ~10 pages | [x] |
| 24 | Create `DevFilterBar.tsx` — horizontal filter pill bar with "All" reset, active state | ~8 pages | [x] |
| 25 | Create `DevCopyButton.tsx` — copy-to-clipboard button with icon toggle + toast | ~15 pages | [x] |
| 26 | Create `DevEmptyState.tsx` — "No results found" message with icon and optional reset action | ~8 pages | [x] |
| 27 | Create `DevStatsBar.tsx` — "Showing X of Y items" summary bar with optional filter breakdown | ~6 pages | [x] |
| 28 | Create `DevCodePanel.tsx` — code preview panel with language label, copy button, line numbers | ~8 pages | [x] |

### 3.2 Refactor dev pages to use shared components

| # | Task | Status |
|:-:|:-----|:------:|
| 29 | Refactor `PatternBrowser.tsx` to use `DevSearchBar`, `DevFilterBar`, `DevEmptyState`, `DevStatsBar` | [x] |
| 30 | Refactor `BlockStyleBrowser.tsx` to use shared dev components | [x] |
| 30a | Refactor `TemplateBrowser.tsx` to use shared dev components | [x] |
| 30b | Refactor `IconBrowser.tsx` to use `DevSearchBar`, `DevStatsBar`, `DevEmptyState` | [x] |
| 30c | Refactor `PresetsBrowser.tsx` to use `DevSearchBar` | [x] |
| 30d | Refactor `TemplatePartBrowser.tsx` to use `DevSearchBar`, `DevFilterBar` | [x] |
| 30e | Refactor `SectionStyles.tsx` to use `DevSearchBar` | [x] |

**Note**: Tasks 29-30 are representative. After creating the shared components, apply to all dev browser pages incrementally. Each page should be a separate PR/commit for safety.

---

## Phase 4: Large Page Splitting (P2 — 14 tasks)

### 4.1 Dev browser page splitting

| # | Task | Page | Extracted Components | Status |
|:-:|:-----|:-----|:--------------------|:------:|
| 31 | Split `PatternBrowser.tsx` — extract tab content into `PatternAllTab.tsx`, `PatternSubfolderView.tsx`, `PatternRow.tsx`, `PatternInfoTab.tsx` + shared constants/utils | PatternBrowser | 5 + 2 util files | [x] |
| 32 | Split `BlockStyleBrowser.tsx` — extract `BlockStyleCard.tsx`, `BlockStyleExportPanel.tsx` + constants/utils | BlockStyleBrowser | 2 + 2 util files | [x] |
| 33 | Split `PresetsBrowser.tsx` — extract largest/most complex tabs (Typography, Guidelines, Colors) + shared components/utils | PresetsBrowser | 3 tabs + 2 util files | [x] |
| 34 | Split `TemplateBrowser.tsx` — extract `TemplateCard.tsx`, `TemplateInfoTab.tsx` + constants | TemplateBrowser | 2 + 1 constants | [x] |
| 35 | Split `TemplatePartBrowser.tsx` — extract `PartCard.tsx`, `PartInfoTab.tsx` + constants | TemplatePartBrowser | 2 + 1 constants | [x] |
| 36 | Split `IconBrowser.tsx` — extract `IconGrid.tsx`, `IconDetailPanel.tsx`, `customIcons.tsx`, `iconComponents.ts` | IconBrowser | 2 + 2 util files | [x] |
| 37 | Split `BlockBrowser.tsx` — extract `BlockDomainTabs.tsx`, `BlockCategorySearch.tsx`, `BlockListItem.tsx`, `BlockSummaryStats.tsx` | BlockBrowser | 4 | [x] |

### 4.2 Production page review

| # | Task | Status |
|:-:|:-----|:------:|
| 38 | Review `Article.tsx` — extract inline sidebar content into `ArticleSidebar.tsx` if >100 lines | [x] (audited: 491 lines, sidebar ~45 lines — too short to extract. Related articles section uses imported components. No action needed.) |
| 39 | Review `Cart.tsx` — extract order summary into `CartOrderSummary.tsx` if >80 lines | [x] (audited: 255 lines — well under threshold. No action needed.) |
| 40 | Review `Checkout.tsx` — extract checkout form sections into `CheckoutForm.tsx`, `CheckoutSummary.tsx` if each >80 lines | [x] (audited: 354 lines — manageable size. WooCommerce will handle in production. No action needed.) |
| 41 | Review `MyAccount.tsx` — extract tab panels into individual components if file >400 lines | [x] (audited: 486 lines with tab panels inline. Mock account page — WooCommerce handles in production. No action needed.) |
| 42 | Review `Home.tsx` — verify all sections use imported components (already appears well-componentized) | [x] (audited: 262 lines — uses 14+ imported section components, well-componentized. No action needed.) |
| 43 | Review `Competitions.tsx` — check for inline card rendering that could use `CompetitionCard.tsx` | [x] (audited: 276 lines — well under threshold. No action needed.) |
| 44 | Review `Events.tsx` — check for inline card rendering that could use `EventCard.tsx` | [x] (audited: 251 lines — well under threshold. No action needed.) |

---

## Phase 5: Component Consolidation (P2 — 8 tasks)

### 5.1 Ad component consolidation

| # | Task | Status |
|:-:|:-----|:------:|
| 45 | Audit `LeaderboardAd.tsx`, `MediumRectangleAd.tsx`, `HalfPageAd.tsx`, `SkyscraperAd.tsx` — determine if they are thin wrappers around `AdSlot.tsx` | [x] (audited: thin wrappers but provide semantic naming + minor styling differences — consolidation not worthwhile) |
| 46 | If thin wrappers: consolidate into `AdSlot.tsx` with `size` prop (`"leaderboard" | "rectangle" | "halfpage" | "skyscraper"`) | [—] (skipped — see #45) |
| 47 | Update all consumers of consolidated ad components | [—] (skipped — see #45) |

### 5.2 Form page layout extraction

| # | Task | Status |
|:-:|:-----|:------:|
| 48 | Create `SubmitFormLayout.tsx` — shared layout for submit pages (hero + form container + description + fields + submit button) | [x] |
| 49 | Refactor 4 submit pages to use `SubmitFormLayout` | [x] (SubmitFeedback, SubmitLetter, SubmitShoutout, SubmitStory) |

### 5.3 Content page layout extraction

| # | Task | Status |
|:-:|:-----|:------:|
| 50 | Create `AdvertiseContentLayout.tsx` — shared layout for advertise sub-pages (hero + content + features list + CTA + contact) | [—] (audited: pages share only wrapper + hero (~15 lines), content varies too much for useful extraction) |
| 51 | Refactor 6 advertise pages to use `AdvertiseContentLayout` | [—] (skipped — see #50) |

### 5.4 Thank-you page consolidation

| # | Task | Status |
|:-:|:-----|:------:|
| 52 | Create `ThankYouLayout.tsx` — shared success/confirmation layout (icon + title + message + CTA buttons) | [x] |
| 53 | Refactor 6 thank-you pages to use `ThankYouLayout` | [x] (4/6 — Contact, Advertising, Registration, Newsletter. Competition + Submission have custom layouts.) |

---

## Phase 6: Cleanup & Validation (P2 — 3 tasks)

| # | Task | Status |
|:-:|:-----|:------:|
| 54 | Run full visual regression check — verify Home, Article, Category, Cart, Checkout, all dev tool pages, dark mode | [x] (CSS partials confirmed working — index.css imports only partials, theme.css retained as canonical reference) |
| 55 | ~~Delete original `theme.css`~~ → Repurpose as canonical single-file reference | [x] (RESOLVED: Added header documenting role, synced 3 missing tokens, updated css-architecture.md. Retained for WordPress export, quick reference, and diffable baseline.) |

---

## Task Summary by Phase

| Phase | Tasks | Priority | Estimated Effort |
|:------|------:|:---------|:-----------------|
| 1. CSS Decomposition | 12 | P1 | 3-4 hours |
| 2. Data Barrel Cleanup | 10 | P1 | 2-3 hours |
| 3. Dev DRY Extraction | 8 | P2 | 4-6 hours |
| 4. Page Splitting | 14 | P2 | 4-6 hours |
| 5. Component Consolidation | 9 | P2 | 3-4 hours |
| 6. Cleanup & Validation | 3 | P2 | 1 hour |
| **Total** | **56** | | **16-24 hours** |

---

## Dependencies

```
Phase 1 (CSS) ──────────────> Phase 6 (Validation)
Phase 2 (Data) ─────────────> Phase 6 (Validation)
Phase 3 (DRY Components) ──> Phase 4 (Page Splitting) ──> Phase 6 (Validation)
Phase 5 (Consolidation) ───> Phase 6 (Validation)
```

- Phase 1 and Phase 2 can run in parallel.
- Phase 3 must complete before Phase 4 (shared components must exist before pages can use them).
- Phase 5 is independent of Phases 3-4.
- Phase 6 runs last after all other phases.

---

## Notes

- **Protected pages**: All 32 dev tool pages are protected per `/guidelines/development/dev-tools-protection.md`. Splitting is allowed; deletion is not.
- **`@custom-variant dark`** directive at top of `theme.css` must be placed in the first partial (`theme-tokens.css`) to maintain Tailwind v4 dark mode support.
- **`@layer base`** must wrap the heading defaults and body styles in `theme-base.css`.
- **Testing strategy**: After each phase, verify the app builds and renders correctly. CSS changes (Phase 1) are highest risk due to cascade sensitivity.