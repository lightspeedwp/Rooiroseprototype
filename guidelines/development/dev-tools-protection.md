# Developer Tools Protection Rule (CRITICAL)

**Last updated**: 2026-03-05 (Memory optimization — Phase 4: BlockBrowser split complete)
**Version**: 1.2
**Q&A Decisions recorded**: 2026-02-26

---

## Non-Negotiable Retention Rule

**NEVER delete, rename, merge-away, or gut any of the developer tool pages, components, data files, or routes listed below.** These tools were built incrementally across multiple sessions and represent significant accumulated work. AI assistants have repeatedly deleted dev tools in previous sessions — this rule exists to prevent that from ever happening again.

**If a task or request would result in removing any protected file, STOP and ask the user for explicit confirmation before proceeding.**

---

## Protected Pages (30 files)

All files under `/src/app/pages/dev/`:

| # | File | Route | Description |
|---|------|-------|-------------|
| 1 | `DevHub.tsx` | `/ontwikkelaar` | Dev portal landing page — 4 sections (Prototype, WordPress, Reference, Operations) |
| 2 | `DesignSystem.tsx` | `/ontwikkelaar/ontwerpstelsel` | Merged design system (Colors, Typography, Spacing, Shadows, Components, Export, WP Token Mapping) |
| 3 | `StyleGuide.tsx` | `/ontwikkelaar/stylgids` | Legacy — redirects to DesignSystem |
| 4 | `DesignSystemExtractor.tsx` | `/ontwikkelaar/tokens` | Legacy — redirects to DesignSystem |
| 5 | `TokenMapper.tsx` | `/ontwikkelaar/token-kartering` | Legacy redirect — merged into DesignSystem 7th tab (Phase 21) |
| 6 | `ComponentBrowser.tsx` | `/ontwikkelaar/komponente` | React component library browser |
| 7 | `RouteMap.tsx` | `/ontwikkelaar/roetes` | Full route hierarchy visualization |
| 8 | `DataBrowser.tsx` | `/ontwikkelaar/data` | Mock data structure browser |
| 9 | `ContentBrowser.tsx` | `/ontwikkelaar/inhoud` | Static content browser |
| 10 | `WordPressMigration.tsx` | `/ontwikkelaar/wordpress` | WP migration hub — block mapping, theme.json, block styles, guidelines |
| 11 | `SectionStyles.tsx` | `/ontwikkelaar/afdeling-style` | Section style CSS-to-JSON converter with 4-tab code viewer |
| 12 | `PatternBrowser.tsx` | `/ontwikkelaar/patrone` | 159 WP patterns — PHP generation, block HTML, status tracking |
| 13 | `BlockStyleBrowser.tsx` | `/ontwikkelaar/blok-styl` | 22 block styles — JSON + CSS, category filters |
| 14 | `TemplateBrowser.tsx` | `/ontwikkelaar/sjablone` | 31 WP templates — hierarchy, code viewer |
| 15 | `TemplatePartBrowser.tsx` | `/ontwikkelaar/sjablone-onderdeel` | 11 template parts — area filters, code viewer |
| 16 | `IncFolderBrowser.tsx` | `/ontwikkelaar/inc-map` | 12 PHP include files — functions, hooks, PHP snippets |
| 17 | `IconBrowser.tsx` | `/ontwikkelaar/ikone` | 50+ icons — Lucide preview, Dashicon mapping, SVG export |
| 18 | `ImageAssetBrowser.tsx` | `/ontwikkelaar/beelde` | Image asset browser — role filters, bulk select, WP media summary |
| 19 | `GuidelinesBrowser.tsx` | `/ontwikkelaar/riglyne` | Markdown guideline file browser |
| 20 | `EmailPreviews.tsx` | `/ontwikkelaar/e-pos-voorskou` | Newsletter email template previews |
| 21 | `SystemConfig.tsx` | `/ontwikkelaar/stelselkonfig` | WooCommerce, Issuu, system configuration reference |
| 22 | `LaunchChecklist.tsx` | `/ontwikkelaar/lansering` | 10-phase launch checklist |
| 23 | `ThemeJsonViewer.tsx` | `/ontwikkelaar/temaJson` | Theme.json v3 explorer — 5 tabs (Overview, Settings, Styles, Templates, Raw JSON) |
| 24 | `PresetsBrowser.tsx` | `/ontwikkelaar/voorinstellings` | Theme.json presets — 7 tabs (Colors, Font Sizes, Spacing, Shadows, Border Radius, Border Widths, Aspect Ratios) |
| 25 | `OllieThemeReference.tsx` | `/ontwikkelaar/ollie` | Ollie FSE theme reference — 6 tabs (Overview, Templates & Parts, Patterns, Block Styles, Style Variations, Migration Plan) — comprehensive v1.5.4 inventory |
| 26 | `EEditionsCommerce.tsx` | `/ontwikkelaar/e-editions-handel` | E-Editions Commerce — 6 tabs (Overview, Subscriptions, Individual Products, Access Control, Payfast, Setup Guide) |
| 27 | `PrototypeLanding.tsx` | `/ontwikkelaar/prototipe` | Section landing page — Prototype Development Tools (5 tool cards, stats) |
| 28 | `ReferenceLanding.tsx` | `/ontwikkelaar/verwysings` | Section landing page — Reference tools (3 tool cards, content integrity rule) |
| 29 | `OperationsLanding.tsx` | `/ontwikkelaar/bedrywighede` | Section landing page — Operations & Launch (4 tool cards, stats) |
| 30 | `FormBuilderPreview.tsx` | `/ontwikkelaar/form-builder-preview` | Form Pattern Gallery — 15 forms, 7 categories, field tables, WP handler mapping |
| 31 | `BlockBrowser.tsx` | `/ontwikkelaar/blokke` | Blocks Browser — React, WP Core, WooCommerce, third-party blocks with style cross-references, CSS audit, guideline links |

Additionally, `/foundations` redirects to `/ontwikkelaar/ontwerpstelsel` via `<Navigate replace />`.

---

## Protected Shared Components (18 files)

All files under `/src/app/components/dev/`:

| # | File | Description |
|---|------|-------------|
| 1 | `DevToolHeader.tsx` | Persistent header — logo, burger menu, theme toggle, language switcher |
| 2 | `DevFullScreenMenu.tsx` | Full-screen overlay menu — 4 groups (Prototype, WordPress, Reference, Operations) |
| 3 | `DevToolHero.tsx` | Reusable hero section — icon, title, description/descriptionHtml, compact animated stats, badge |
| 4 | `DevRelatedTools.tsx` | Related tools component — shown at bottom of tool pages |
| 5 | `CodeBlock.tsx` | Reusable syntax-highlighted code block — 6 language tokenizers (JSON, PHP, CSS, HTML, JS, text), line numbers, editable mode, copy-to-clipboard, language badge |
| 6 | `DevToolFooter.tsx` | Shared footer — branding, quick links, copyright. Rendered by DevLayout for all pages |
| 7 | `BackToTop.tsx` | Floating back-to-top button — appears after 400px scroll, Motion-animated |
| 8 | `FileBrowserShell.tsx` | Shared folder tree + markdown viewer — used by GuidelinesBrowser and ContentBrowser |
| 9 | `WpCodeViewer.tsx` | WordPress file viewer — loads files from disk via `wpFileLoader.ts` globs, syntax highlighting via CodeBlock, PHP header stripping toggle, file path breadcrumb, lazy loading with cache. Used by 7 browsers: PatternBrowser, TemplateBrowser, TemplatePartBrowser, IncFolderBrowser, SectionStyles, BlockStyleBrowser, ThemeJsonViewer |
| 10 | `BlockPreview.tsx` | Visual block preview mockups — category-based renderers for 70+ blocks showing wireframe representations (layout, text, media, product, cart, ads, home sections, navigation, social). Used by BlockBrowser |
| 11 | `DevSearchBar.tsx` | Reusable search input with Search icon, text input, clear (X) button. DRY extraction (2026-03-05) |
| 12 | `DevCopyButton.tsx` | Copy-to-clipboard button with Copy/Check icon toggle + toast feedback. DRY extraction (2026-03-05) |
| 13 | `DevEmptyState.tsx` | "No results found" empty state message with icon, title, description, optional reset. DRY extraction (2026-03-05) |
| 14 | `DevStatsBar.tsx` | "Showing X of Y" summary bar with optional stat badges. DRY extraction (2026-03-05) |
| 15 | `DevFilterBar.tsx` | Horizontal filter pill bar with "All" button, active state, counts. DRY extraction (2026-03-05) |
| 16 | `DevCodePanel.tsx` | Code preview panel with language label, copy button, scrollable pre block. DRY extraction (2026-03-05) |
| 17 | `DiskStatsPanel.tsx` | Disk usage statistics panel for WordPress file size reporting. Used by PatternBrowser |
| 18 | `WpMarkdownViewer.tsx` | Markdown guideline viewer — renders `.md` files with heading anchors, syntax highlighting. Used by dev tool browsers |

---

## Protected Page Sub-Components (19 files)

Sub-components extracted during memory optimization (Phase 4 — Large Page Splitting):

### Pattern Browser (6 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 1 | `/src/app/pages/dev/pattern-browser/PatternAllTab.tsx` | PatternBrowser | "All Patterns" tab with multi-axis filtering (priority, status, folder, usage), search, pattern rows |
| 2 | `/src/app/pages/dev/pattern-browser/PatternSubfolderView.tsx` | PatternBrowser | Subfolder detail view with guideline README, stats row, filters, pattern list |
| 3 | `/src/app/pages/dev/pattern-browser/PatternRow.tsx` | PatternBrowser | Individual pattern row with expand/collapse, status cycling, 3-tab detail panel (info, PHP, guideline) |
| 4 | `/src/app/pages/dev/pattern-browser/PatternInfoTab.tsx` | PatternBrowser | Pattern info tab with metadata, disk stats, usage references, block/section style cross-links |
| 5 | `/src/app/pages/dev/pattern-browser/constants.ts` | PatternBrowser | Shared constants (folder icons, priority/status/sync colors, usage styles) |
| 6 | `/src/app/pages/dev/pattern-browser/utils.ts` | PatternBrowser | Reverse maps (pattern slug → block styles, section styles) |

### Block Style Browser (4 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 7 | `/src/app/pages/dev/block-style-browser/BlockStyleCard.tsx` | BlockStyleBrowser | Individual block style card with expand/collapse, validation warnings, 3-tab detail panel (file/code/guidelines), preset refs, usage |
| 8 | `/src/app/pages/dev/block-style-browser/BlockStyleExportPanel.tsx` | BlockStyleBrowser | Bulk export UI with "Export All" and "Export Filtered" ZIP download buttons |
| 9 | `/src/app/pages/dev/block-style-browser/constants.ts` | BlockStyleBrowser | Shared constants (category colors, preset type labels, preset category slugs) |
| 10 | `/src/app/pages/dev/block-style-browser/utils.ts` | BlockStyleBrowser | Validation (validateJsonStyle), preset extraction (extractPresetRefs), guideline resolution, JSON key counting |

### Presets Browser (5 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 11 | `/src/app/pages/dev/presets-browser/TypographyPresetsTab.tsx` | PresetsBrowser | Typography presets tab with live preview, element detail table, full JSON view, key differences |
| 12 | `/src/app/pages/dev/presets-browser/ColorsTab.tsx` | PresetsBrowser | Colors tab with color swatches, hex values, CSS variables, grouped by brand/neutral/accent/semantic |
| 13 | `/src/app/pages/dev/presets-browser/GuidelinesTab.tsx` | PresetsBrowser | Guidelines tab with 13 design system guideline documents, category filters, markdown viewer |
| 14 | `/src/app/pages/dev/presets-browser/SharedComponents.tsx` | PresetsBrowser | Shared UI components (CopyButton, UsageBadges) |
| 15 | `/src/app/pages/dev/presets-browser/utils.ts` | PresetsBrowser | Shared utilities (useCopy hook, parseCssString, PRESETS_TAB_SLUGS map) |

### Template Browser (3 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 16 | `/src/app/pages/dev/template-browser/TemplateCard.tsx` | TemplateBrowser | Individual template card with expand/collapse, 3-tab detail panel (info, code, guideline), disk stats, cross-references |
| 17 | `/src/app/pages/dev/template-browser/TemplateInfoTab.tsx` | TemplateBrowser | Template info tab with React routes, components, template parts, patterns, section styles cross-links, copy filename |
| 18 | `/src/app/pages/dev/template-browser/constants.ts` | TemplateBrowser | Shared constants (PRIORITY_COLORS, CAT_COLORS) |

### Template Part Browser (3 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 19 | `/src/app/pages/dev/template-part-browser/PartCard.tsx` | TemplatePartBrowser | Individual template part card with expand/collapse, 3-tab detail panel (info, code, guideline), area icon badge |
| 20 | `/src/app/pages/dev/template-part-browser/PartInfoTab.tsx` | TemplatePartBrowser | Template part info tab with description, disk stats, blocks used, patterns called, copy WP code snippet |
| 21 | `/src/app/pages/dev/template-part-browser/constants.ts` | TemplatePartBrowser | Shared constants (AREA_COLORS, AREA_ICONS, PRIORITY_COLORS) |

### Icon Browser (4 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 22 | `/src/app/pages/dev/icon-browser/IconGrid.tsx` | IconBrowser | Dashicon-style grid of all icons with type indicator dots, click to select, empty state |
| 23 | `/src/app/pages/dev/icon-browser/IconDetailPanel.tsx` | IconBrowser | Sticky detail panel with live preview, size slider, metadata, copy buttons (import/JSX/SVG), download SVG, usages, tags |
| 24 | `/src/app/pages/dev/icon-browser/customIcons.tsx` | IconBrowser | Custom SVG components for brand icons (XSocialIcon, TikTokIcon, WhatsAppIcon) in outline style |
| 25 | `/src/app/pages/dev/icon-browser/iconComponents.ts` | IconBrowser | ICON_COMPONENTS map, TYPE_COLORS, TYPE_LABELS — maps icon names to React components for live preview |

### Block Browser (4 files)
| # | File | Parent Page | Description |
|---|------|-------------|-------------|
| 26 | `/src/app/pages/dev/BlockBrowser/BlockDomainTabs.tsx` | BlockBrowser | Domain filter tabs (All, React, Core, WooCommerce, Third-Party) with counts and icons |
| 27 | `/src/app/pages/dev/BlockBrowser/BlockCategorySearch.tsx` | BlockBrowser | Category dropdown + search input with clear button, dynamic category filtering |
| 28 | `/src/app/pages/dev/BlockBrowser/BlockListItem.tsx` | BlockBrowser | Individual expandable block row with preview, tabs (info/guideline), metadata, cross-references, copy buttons |
| 29 | `/src/app/pages/dev/BlockBrowser/BlockSummaryStats.tsx` | BlockBrowser | Summary statistics panel showing blocks with styles, guidelines, CSS missing, and total count |

**Protection Reason**: These sub-components were extracted from large browser files (PatternBrowser: 1,400+ lines → 220 lines, BlockStyleBrowser: 920+ lines → ~450 lines, PresetsBrowser: ~850 lines → ~320 lines, TemplateBrowser: ~380 lines → ~220 lines, TemplatePartBrowser: ~298 lines → ~160 lines, IconBrowser: ~486 lines → ~260 lines, BlockBrowser: 600 lines → ~200 lines) to improve code organization, reduce module size, and enable better code splitting. DO NOT delete or consolidate back into parent files.

---

## Protected Layout Components (2 files)

| File | Description |
|------|-------------|
| `/src/app/components/layouts/DevLayout.tsx` | Wraps all dev tool pages — sticky header, breadcrumbs (3-level), container, footer |
| `/src/app/components/layouts/ThankYouLayout.tsx` | Shared thank-you page layout — navy header, CheckCircle icon, card wrapper, action buttons, FAQ section. Used by 4 thank-you pages (2026-03-05) |

---

## Protected Hooks (1 file)

| File | Description |
|------|-------------|
| `/src/app/hooks/useTabRoute.ts` | URL-based tab routing hook — syncs activeTab with URL path segments, used by 7 multi-tab pages |

---

## Protected Data Files (22 files)

All files under `/src/app/data/`:

| # | File | Used By |
|---|------|---------| 
| 1 | `blockStylesData.ts` | BlockStyleBrowser, WordPressMigration |
| 2 | `templateBrowserData.ts` | TemplateBrowser |
| 3 | `templatePartBrowserData.ts` | TemplatePartBrowser |
| 4 | `incFolderData.ts` | IncFolderBrowser |
| 5 | `patternBrowserData.ts` | PatternBrowser |
| 6 | `patternStatusStore.ts` | PatternBrowser (localStorage persistence) |
| 7 | `iconBrowserData.ts` | IconBrowser |
| 8 | `imageAssets.ts` | ImageAssetBrowser |
| 9 | `wpMigrationData.ts` | WordPressMigration |
| 10 | `designTokens.ts` | DesignSystem |
| 11 | `devTranslations.ts` | All dev tool pages (AF/EN translations) |
| 12 | `guidelinesContent.ts` | GuidelinesBrowser, WordPressMigration |
| 13 | `sectionStylesData.ts` | SectionStyles, PatternBrowser (cross-links) |
| 14 | `devToolHeroData.ts` | All dev tool pages (hero config + related tools) |
| 15 | `themeJsonData.ts` | ThemeJsonViewer (typed theme.json v3 data) |
| 16 | `themeJsonPresetsData.ts` | PresetsBrowser (7 preset type registries) |
| 17 | `eEditionsCommerceData.ts` | EEditionsCommerce (subscriptions, access rules, Payfast config) |
| 18 | `ollieThemeData.ts` | OllieThemeReference (Ollie v1.5.4 patterns, templates, parts, block styles, style variations) |
| 19 | `formPatternsData.ts` | FormBuilderPreview (15 forms, 7 categories, 63 fields, WP handler mapping) |
| 20 | `formEmailTemplates.ts` | EmailPreviews (10 confirmations + 13 reply templates, form-to-email mapping) |
| 21 | `wpFileLoader.ts` | WpCodeViewer — Vite `import.meta.glob` with `?raw` for all WordPress files (15 glob maps: patterns, templates, parts, inc/, theme.json, section styles, block styles, color/typography presets, global variations, block source, plugin files). Helper functions: `loadWpFile`, `getWpFileNames`, `detectLanguage`, `getDisplayPath` |
| 22 | `blockBrowserData.ts` | BlockBrowser — 70+ blocks across 4 domains (React, WordPress Core, WooCommerce, Third-Party), category/domain filtering, block style cross-references, CSS audit status |

---

## Protected Context

| File | Description |
|------|-------------|
| `/src/app/context/DevLanguageContext.tsx` | AF/EN language toggle state for all dev tools |

---

## Route Registration

All dev tool routes are registered in `/src/app/routes.tsx` under the `DevLayout` wrapper. There are currently **31 route entries** (30 pages + 1 redirect). The routes use Afrikaans paths matching the site's language. Multi-tab pages use `/*` wildcard routes and the `useTabRoute` hook for URL-based tab navigation.

Navigation is handled via:
- `DevToolHeader.tsx` — burger menu trigger
- `DevFullScreenMenu.tsx` — full-screen overlay with 4 logical groups (Prototype, WordPress, Reference, Operations)
- Breadcrumbs bar in `DevLayout.tsx` — 3-level depth (Dev Hub > Section > Tool)

Dev tools are **NOT** listed in the public sitemap (removed in DTE-060).
Dev tools are **NOT** listed in the public footer (removed in DTE-061). The "Ontwikkeling" column was removed from `FOOTER_LINK_COLUMNS` in `navigation.ts`. Dev tools are accessed via the header "Ontwikkelaars" link and the burger menu.

---

## Verification Checklist

When auditing dev tool integrity, verify ALL of the following:

- [ ] **30 page files** exist under `/src/app/pages/dev/`
- [ ] **18 component files** exist under `/src/app/components/dev/`
- [ ] **2 layout files** exist at `/src/app/components/layouts/DevLayout.tsx` and `ThankYouLayout.tsx`
- [ ] **1 hook file** exists at `/src/app/hooks/useTabRoute.ts`
- [ ] **22 data files** exist under `/src/app/data/` (listed above)
- [ ] **31 route entries** in `/src/app/routes.tsx` (30 pages + 1 redirect)
- [ ] **DevHub** shows 4 sections: Prototype (5 cards), WordPress (12+ cards), Reference (3 cards), Operations (4 cards)
- [ ] **DevFullScreenMenu** shows 4 groups: Prototype, WordPress, Reference, Operations — group headers link to section landing pages
- [ ] **Translation keys** in `devTranslations.ts` cover all page titles + descriptions (~500+ keys)
- [ ] **CodeBlock component** is imported and used in: SectionStyles, PatternBrowser, SystemConfig, WordPressMigration (no bare `<pre>` blocks remain in dev pages)
- [ ] **WpCodeViewer component** is imported and used in: PatternBrowser, TemplateBrowser, TemplatePartBrowser, IncFolderBrowser, SectionStyles, BlockStyleBrowser, ThemeJsonViewer (7 browsers load files from disk)
- [ ] **No bare `<pre>` blocks** exist in any file under `/src/app/pages/dev/` (all replaced with CodeBlock)
- [ ] **DevToolHero** is used in: DevHub, ComponentBrowser, RouteMap, DataBrowser, WordPressMigration, SectionStyles, EmailPreviews, SystemConfig, LaunchChecklist, ImageAssetBrowser, PatternBrowser, BlockStyleBrowser, TemplateBrowser, TemplatePartBrowser, IncFolderBrowser, IconBrowser, DesignSystem, ThemeJsonViewer, PresetsBrowser, OllieThemeReference, EEditionsCommerce, FormBuilderPreview (22 pages)
- [ ] **DevRelatedTools** is used in: ComponentBrowser, RouteMap, DataBrowser, WordPressMigration, SectionStyles, EmailPreviews, SystemConfig, LaunchChecklist, ImageAssetBrowser, PatternBrowser, BlockStyleBrowser, TemplateBrowser, TemplatePartBrowser, IncFolderBrowser, IconBrowser, DesignSystem, ThemeJsonViewer, PresetsBrowser, OllieThemeReference, EEditionsCommerce, FormBuilderPreview (21 pages — all except DevHub)
- [ ] **resolveHeroMeta** from `devToolHeroData.ts` is used in 20 pages total (18 DevToolHero pages + GuidelinesBrowser/ContentBrowser via FileBrowserShell). 4 DevToolHero pages use `t()` translation keys instead: DevHub, TemplateBrowser, TemplatePartBrowser, IncFolderBrowser. HERO_META has 20 entries. RELATED_TOOLS_MAP has 22 entries — zero local RELATED_TOOLS arrays remain.

---

## What To Do If You Need To Modify Dev Tools

1. **Read this file first** — always, before any dev tool work.
2. **Read the task list** at `/tasks/dev-tools-expansion-tasks.md` — it tracks all completed and pending work.
3. **Never delete** — if consolidating, keep old files as redirects (see Phase 16 merge pattern).
4. **Update this file** — if you add new pages, components, or data files, add them to the lists above and update the date.
5. **Update the task list** — add new tasks under the appropriate phase or create a new phase.

---

## Known Bugs Fixed (2026-02-26)

| Bug | File | Fix |
|-----|------|-----|
| Vite cached truncated TemplatePartBrowser (16 lines, no export) | `TemplatePartBrowser.tsx` | Re-saved file to bust cache; added `export default` |
| Prop mismatch `onMenuToggle` vs `onMenuOpen` — burger menu crashed | `DevLayout.tsx` | Changed to `onMenuOpen` matching `DevToolHeader` interface |

---

## Architectural Decisions (2026-02-26)

These decisions were made via Q&A and are binding for all future implementation work:

| # | Decision | Detail |
|---|----------|--------|
| Q1 | **Rich section landing pages** | Landing pages get progress stats and rich cards. Simpler tools get basic cards. |
| Q2 | **Reference section created** | Guidelines Browser and Content Browser move to a new "Verwysings / Reference" section at `/ontwikkelaar/verwysings`. Image Assets also goes here. |
| Q3 | **WordPress page expanded** | Current `WordPressMigration.tsx` at `/ontwikkelaar/wordpress` is expanded in-place to become the WordPress section landing page. Its 4 tabs become sub-pages. No separate landing page is created. |
| Q4 | **Single source of truth** | `/wordpress-export/themes/die-papier-theme/` is the canonical WordPress export directory. Dev tools import from `theme.json`, `style.css`, and `styles/` here. Do NOT create `/src/wordpress/` or duplicate data in TypeScript files. |
| Q7 | **Dynamic stats bar** | Expand and polish the existing `DevToolHero` stats prop. Make stats as dynamic as possible (count from data arrays, not hardcoded numbers). |
| Q8 | **Full routes per tab** | Multi-tab tools use full URL routes per tab (e.g., `/ontwikkelaar/ontwerpstelsel/kleure`), not URL hashes. |
| Q9 | **Expandable mobile menu** | `DevFullScreenMenu` shows expandable section hierarchy. Desktop: 2-column with all visible. Mobile: accordion-style collapsible sections with 44px touch targets. |
| Q10 | **Dedicated E-Editions page** | Create a dedicated dev tool page for e-editions commerce at `/ontwikkelaar/e-uitgawes`, not a tab in Content Model. |

**4-section groupings:**

| Section | Route | Tools |
|---------|-------|-------|
| Prototipe / Prototype | `/ontwikkelaar/prototipe` | Design System, Components, Route Map, Data Browser, Icon Browser |
| WordPress | `/ontwikkelaar/wordpress` | WP Migration Hub (expanded), Patterns, Section Styles, Block Styles, Templates, Template Parts, Inc/ Files, Theme.json Viewer, Presets Browser, Ollie Theme, E-Editions Commerce |
| Verwysings / Reference | `/ontwikkelaar/verwysings` | Guidelines Browser, Content Browser, Image Assets |
| Bedrywighede / Operations | `/ontwikkelaar/bedrywighede` | Launch Checklist, Email Previews, System Config, Form Builder Preview |

---

## Upcoming Merges (Completed)

| Merge | Source | Target | Phase | Status |
|-------|--------|--------|-------|--------|
| Token Mapper → Design System | `TokenMapper.tsx` | `DesignSystem.tsx` (7th tab) | Phase 21 (DTE-091–098) | **Done** |

The Token Mapper page file has been **retained as a legacy redirect** (same pattern as Phase 16). The route `/ontwikkelaar/token-kartering` renders `<DesignSystem />` directly via `routes.tsx`.

---

## Upcoming New Pages

All planned pages have been created and are listed in the Protected Pages table above. No pending pages remain.