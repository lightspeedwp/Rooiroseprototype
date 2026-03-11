# Memory Optimization Orchestrator

**Created**: 2026-03-02  
**Rewritten**: 2026-03-05 (Memory-focused rewrite)  
**Audits**: 8 sequential audits  
**Output**: Audit report + task list  
**Scope**: Full React application codebase (`/src/`)  
**Parent Orchestrator**: `/prompts/comprehensive-theme-audit-orchestrator.md`  
**Report**: `/reports/memory-optimization-audit-2026-03-05.md`  
**Task List**: `/tasks/memory-optimization-tasks.md`

### Guideline Dependencies

**Reads**:
- `/guidelines/development/dev-tools-protection.md` — Protected dev tool pages (32 pages — never delete)
- `/guidelines/development/file-organization.md` — File placement rules
- `/guidelines/development/css-architecture.md` — CSS import chain and file responsibilities
- `/guidelines/development/performance.md` — Performance standards

**Creates/Updates**:
- `/reports/memory-optimization-audit-2026-03-05.md` — Audit findings
- `/tasks/memory-optimization-tasks.md` — Actionable task list

---

## Objective

Reduce memory footprint and improve maintainability of the Die Papier React prototype by breaking up oversized files, eliminating redundancy, flattening unnecessary nesting, and applying DRY principles. Each audit identifies concrete splitting, extraction, and cleanup opportunities.

**Core Principles**:
1. **Break large files into smaller ones** — No single file should exceed ~300 lines (CSS) or ~400 lines (TSX/TS) unless justified.
2. **DRY via shared patterns** — Extract repeated UI patterns into reusable components.
3. **Flatten complexity** — Reduce nested layers, simplify component trees, remove hidden/unused layers.
4. **Trim variants** — Replace component variants with component properties where possible.
5. **CSS decomposition** — Split monolithic CSS files into single-responsibility partials.

---

## Audit 1: CSS File Decomposition

**Target**: `/src/styles/theme.css` (~1135 lines)

**Problem**: Single monolithic CSS file containing 7+ distinct concern areas: CSS custom properties, dark mode tokens, `@theme inline` exports, `@layer base` heading defaults, WordPress color utility classes (~70 classes), WordPress font-size classes, block style variation classes, article content styles, dark mode global utilities, and font family enforcement rules.

**Action**: Split `theme.css` into focused partials:

| New File | Lines | Content |
|:---------|:-----:|:--------|
| `theme-tokens.css` | ~180 | `:root` CSS custom properties (brand, typography, shadcn, spacing, shadows, border-radius, layout) |
| `theme-dark.css` | ~70 | `.dark` block (dark mode token overrides only) |
| `theme-exports.css` | ~70 | `@theme inline` block (Tailwind v4 color/font exports) |
| `theme-base.css` | ~80 | `@layer base` heading defaults (h1-h6), body, `.alignwide` |
| `wp-color-utilities.css` | ~175 | `.has-{slug}-color` and `.has-{slug}-background-color` utility classes |
| `wp-font-utilities.css` | ~30 | `.has-{slug}-font-size` utility classes |
| `block-style-variations.css` | ~40 | `.is-style-*` block variation classes |
| `article-content.css` | ~110 | `.article-content` styles (light + dark) |
| `dark-mode-utilities.css` | ~65 | Dark mode global utilities (forms, scrollbar, placeholder, prose) |
| `font-enforcement.css` | ~35 | Font family utility classes and element enforcement |

**Update `index.css`**: Replace single `@import "./theme.css"` with ordered imports of all partials.

**Validation**: Verify no visual regression by checking all CSS custom properties resolve correctly.

---

## Audit 2: Markdown Prose CSS Review

**Target**: `/src/styles/markdown-prose.css` (~711 lines)

**Problem**: Single file covering 15+ distinct content element styles. While single-purpose, it's large enough to impact parse/memory.

**Action**: Evaluate splitting into:
- `md-prose-base.css` — Base, headings, paragraphs, links, strong/em (~160 lines)
- `md-prose-code.css` — Inline code, code blocks, syntax tokens, language labels (~100 lines)
- `md-prose-lists.css` — Lists, nested lists, checkbox/task lists (~60 lines)
- `md-prose-tables.css` — Table styles, alignment, overflow wrapper (~90 lines)
- `md-prose-blocks.css` — Blockquotes, horizontal rules, details/summary (~60 lines)
- `md-prose-misc.css` — Images, footnotes, keyboard, abbreviations, selection, scrollbar, print (~120 lines)

**Decision criteria**: Only split if markdown-prose is rendered by lazy-loaded routes only (dev tools). If so, consider making it a dynamic CSS import.

---

## Audit 3: Data File Barrel Export Audit

**Target**: `/src/app/data/index.ts` (~206 lines)

**Problem**: Barrel file re-exports ALL data modules including dev-only data (blockStylesData 83KB, patternBrowserData 77KB, iconBrowserData 69KB, etc.). Any component importing from `'../data'` or `'../data/index'` could pull in the entire module graph, defeating tree-shaking in development mode and increasing memory pressure.

**Action**:
1. **Remove dev-only re-exports** from `data/index.ts`. Dev tool pages should import directly from their specific data file (e.g., `import { ALL_BLOCK_STYLES } from '../../data/blockStylesData'`).
2. **Audit all import paths** — Ensure no production page imports from the barrel when it only needs one module.
3. **Split `categoryArticles.ts` (79KB)** — Extract article data arrays into category-specific files or a separate `articleData.ts` with the raw data, keeping only functions/types in `categoryArticles.ts`.

**Affected re-exports to remove from barrel**:
- `blockStylesData` (83KB) — dev-only
- `sectionStylesData` — dev-only
- `globalStyleVariationsData` — dev-only
- `contentData` — dev-only
- `devToolHeroData` — dev-only
- `imageAssets` — dev-only
- `heroImages` — dev-only

---

## Audit 4: Large Page File Splitting

**Target**: All page files in `/src/app/pages/` and `/src/app/pages/dev/`

**Problem**: Dev tool browser pages are complex monoliths with search, filters, tabs, detail panels, code viewers, and grid layouts all in one file. Many exceed 500-800+ lines.

**Action**: For each dev browser page (PatternBrowser, BlockStyleBrowser, TemplateBrowser, PresetsBrowser, etc.):
1. **Extract tab content** into separate components (e.g., `PatternBrowserAllTab.tsx`, `PatternBrowserStatusTab.tsx`).
2. **Extract detail/preview panels** into separate components.
3. **Extract filter panels** into shared components if pattern repeats.
4. **Target**: No page file exceeds ~400 lines after extraction.

**Production pages to review**:
- `Home.tsx` — Check if sections are properly componentized (they appear to use imported components already).
- `Article.tsx` — Check inline sidebar, related articles, comments sections.
- `Cart.tsx`, `Checkout.tsx` — Check for extractable order summary, form sections.
- `MyAccount.tsx` — Check for extractable tab panels.

---

## Audit 5: Shared Dev Tool Component Extraction (DRY)

**Target**: `/src/app/pages/dev/*.tsx` and `/src/app/components/dev/*.tsx`

**Problem**: 31 dev tool pages share common UI patterns that are duplicated:
- **Search bars** with clear button (used in ~10 browsers)
- **Filter dropdowns/pills** (used in ~8 browsers)
- **Copy-to-clipboard buttons** (used in ~15 pages)
- **Tab navigation** with route-based active state
- **Grid/list toggle** views
- **Detail panels** with code preview + guideline viewer
- **Empty state** messages
- **Stats/count badges**

**Action**: Extract into shared components under `/src/app/components/dev/`:
- `DevSearchBar.tsx` — Reusable search input with clear button
- `DevFilterBar.tsx` — Reusable filter pills/dropdown bar
- `DevCopyButton.tsx` — Copy-to-clipboard with toast feedback
- `DevGridListToggle.tsx` — View mode toggle
- `DevEmptyState.tsx` — "No results" message with icon
- `DevStatsBar.tsx` — Count/stats summary bar

**Estimate**: Each extraction removes ~20-50 lines from each consuming page, multiplied by 8-15 pages = significant reduction.

---

## Audit 6: Component Layer Cleanup

**Target**: All components in `/src/app/components/`

**Audit steps**:
1. **Identify unused components** — Components that are imported nowhere (dead code).
2. **Identify single-use wrapper components** — Components that only add a `<div>` wrapper and could be inlined.
3. **Reduce nesting depth** — Components with >4 levels of nested `<div>` wrappers. Flatten where outer wrappers only provide margin/padding (use Tailwind classes directly instead).
4. **Check for hidden/conditional layers** — Components rendering elements that are always hidden (e.g., `hidden` class, `display: none`, `opacity: 0` permanently).

**Specific checks**:
- `/src/app/components/ads/` (11 files) — Are all ad slot components used? Or are some variants of the same concept?
- `/src/app/components/marketing/socials/` — Check for unnecessary wrappers.
- `/src/app/components/brand-quotes/` (4 files) — Can `BrandLogo.tsx`, `BrandQuote.tsx`, and `presets.tsx` be consolidated?

---

## Audit 7: SVG and Vector Optimization

**Target**: `/src/imports/`, inline SVGs in components

**Audit steps**:
1. **Check `/src/imports/`** for SVG files — Verify they are optimized (no unnecessary metadata, editor artifacts, or redundant groups).
2. **Scan for inline SVGs** in TSX files — Large inline SVG path data should be extracted to separate SVG files or a shared icon registry.
3. **Check lucide-react usage** — Ensure icons are imported individually (not `import * as Icons from 'lucide-react'`).
4. **Flatten complex SVGs** — SVGs with nested `<g>` groups, `<defs>` with unused definitions, or excessive `<path>` elements should be simplified with SVGO.

**Specific concern**: `/src/app/components/icons/NewspaperIcon.tsx` — Is this a complex custom SVG that could be simplified?

---

## Audit 8: Component Variant Trimming

**Target**: Components with multiple visual variants

**Audit steps**:
1. **Scan for variant props** — Components using `variant` props with 4+ options (e.g., `variant="primary" | "secondary" | "outline" | "ghost" | "link" | "destructive"`).
2. **Check if variants can be replaced with properties** — Instead of 6 button variants each with full style definitions, use composable properties (`color`, `fill`, `size`).
3. **Review shadcn/ui components** — Standard shadcn components are fine, but check any customized variants added on top.
4. **Check page-level variant patterns** — Pages that render the same component in 3+ configurations might benefit from a dedicated composed component.

**Specific targets**:
- Ad components (11 files) — Many are size/position variants of `AdSlot.tsx`. Consider consolidating into `AdSlot.tsx` with `size` and `position` props.
- Submit pages (4 files) — Likely share form layout. Extract `SubmitFormLayout.tsx`.
- Advertise pages (6 files) — Likely share content layout. Extract `AdvertisePageLayout.tsx`.
- Newsletter pages (6+ pages) — Check for shared confirmation/status page patterns.

---

## Execution Order

| Phase | Audits | Priority | Impact |
|:------|:-------|:---------|:-------|
| 1 | Audit 1 (CSS decomposition) | P1 | High — theme.css is loaded on every page |
| 2 | Audit 3 (Data barrel cleanup) | P1 | High — reduces module graph in dev mode |
| 3 | Audit 5 (Dev DRY extraction) | P2 | Medium — reduces ~31 page files |
| 4 | Audit 4 (Page splitting) | P2 | Medium — reduces largest page files |
| 5 | Audit 6 (Layer cleanup) | P2 | Medium — removes dead weight |
| 6 | Audit 8 (Variant trimming) | P2 | Medium — consolidates similar components |
| 7 | Audit 2 (Prose CSS) | P3 | Low — already behind lazy routes |
| 8 | Audit 7 (SVG optimization) | P3 | Low — minimal SVG usage detected |

---

## Success Metrics

| Metric | Before | Target |
|:-------|:-------|:-------|
| `theme.css` line count | ~1135 | 0 (split into ~10 partials, each <180 lines) |
| Data barrel re-exports (dev-only) | 7 | 0 |
| Dev pages >400 lines | ~15 (estimated) | 0 |
| Shared dev UI patterns extracted | 0 | 6+ reusable components |
| Duplicate ad component files | 11 | ~4-5 (consolidated) |
| Submit page shared layout | 0 | 1 shared layout component |

---

## Constraints

- **Protected files**: All 32 dev tool pages listed in `/guidelines/development/dev-tools-protection.md` must be retained. Splitting is allowed; deletion is not.
- **CSS import order**: Must maintain correct cascade (tokens first, then exports, then base, then utilities).
- **No visual regression**: All changes must be verified against current rendering.
- **Barrel export safety**: Removing re-exports from `data/index.ts` requires updating all consuming import paths first.
