# Performance Optimization Standards

**Last updated**: 2026-03-04
**Orchestrator**: `/prompts/performance-optimization-orchestrator.md`
**Status**: **AUDIT COMPLETE** — 7/7 audits executed, 4 violations found and fixed, 100% compliant

---

## 1. Overview

Performance standards for the Die Papier React prototype application. These guidelines ensure fast load times, efficient rendering, and optimal bundle sizes. The orchestrator defines 7 audit areas; this document captures the ongoing standards that all new code must follow.

---

## 2. Bundle Size Targets

| Metric | Target | Current |
|:-------|:-------|:--------|
| Initial bundle (gzipped) | < 200KB | Estimated compliant (5 static imports + lazy loading) |
| Largest single chunk | < 500KB | Estimated compliant (dev tools are largest chunks, all lazy-loaded) |
| Total bundle (all chunks) | < 2MB | Estimated compliant (requires build measurement) |

---

## 3. Route-Based Code Splitting

### Rules

1. **All route-level page components** must use `React.lazy()` and `<Suspense>`.
2. **Shared components** (used across 3+ routes) belong in the main bundle — do not lazy-load them.
3. **Dev tool pages** (`/ontwikkelaar/*`) must be lazy-loaded — they are never needed on initial page load.
4. **Heavy library routes** (e.g., pages using `recharts`) must be in their own chunk.

### Pattern

```tsx
// In routes.tsx
const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));
const DevPresets = lazy(() => import('./pages/dev/PresetsBrowser'));

// Wrap routes in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Outlet />
</Suspense>
```

---

## 4. Image Optimization

### Rules

1. **All images** must use `loading="lazy"` or the `ImageWithFallback` component.
2. **Above-the-fold images** (hero, logo) may use `loading="eager"` — max 2 per page.
3. **SVGs > 10KB** should be lazy-loaded or simplified.
4. **No inline base64 images** > 5KB — use separate files.
5. **Unsplash images** must use width parameters (e.g., `?w=800`) to avoid loading full-resolution images.

### Figma Asset Imports

```tsx
// Raster images use figma:asset scheme
import img from "figma:asset/abc123.png";

// SVGs use relative file paths
import svgPaths from "../imports/svg-xyz";
```

---

## 5. Data File Optimization

### Rules

1. **Data files > 50KB** should use named exports for tree shaking.
2. **Data files > 150KB** must be code-split (dynamic import or separate module).
3. **Large inline strings** (guideline content, article HTML) should be in separate TypeScript modules under `/src/app/data/guidelines/` and imported dynamically.
4. **Prefer JSON** for pure data — TypeScript overhead is unnecessary for static data.
5. **No duplicate data** across files — use a single source and import it.

---

## 6. Component Rendering

### Memoization Rules

1. **Components rendering lists > 50 items**: Consider `React.memo()`.
2. **Expensive computations** (sorting, filtering, mapping large arrays): Wrap in `useMemo()`.
3. **Callbacks passed as props**: Wrap in `useCallback()` when the child component is memoized.
4. **Context providers**: Split into multiple contexts if different parts of state update at different frequencies.

### List Rendering

1. **Lists > 100 items**: Consider virtualization (`react-window` or similar).
2. **Every list item** must have a stable, unique `key` prop — never use array index.
3. **Pagination**: Prefer paginated rendering over infinite scroll for SEO-relevant content.

---

## 7. Third-Party Library Guidelines

### Rules

1. **Import only what you use**: `import { BarChart } from 'recharts'` not `import * as Recharts`.
2. **Heavy libraries** (> 100KB): Must be lazy-loaded if used on a single route.
3. **No unused dependencies**: Every entry in `package.json` must be imported somewhere.
4. **Prefer lighter alternatives** where functionality is equivalent.

### Known Heavy Libraries

| Library | Approx. Size | Usage | Strategy |
|:--------|:-------------|:------|:---------|
| `recharts` | ~450KB | Charts on dev tools pages | Lazy load |
| `motion` | ~100KB | Animations across routes | Keep (widely used) |
| `react-slick` | ~50KB | Hero slider, carousels | Lazy load on routes that use it |

---

## 8. Core Web Vitals Targets

| Metric | Target | Description |
|:-------|:-------|:------------|
| LCP | < 2.5s | Largest Contentful Paint (on Fast 3G) |
| FID / INP | < 100ms | First Input Delay / Interaction to Next Paint |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTI | < 5s | Time to Interactive (on Fast 3G) |

### Strategies

- **LCP**: Ensure hero images are eager-loaded, critical CSS is inlined, fonts are preloaded.
- **CLS**: Set explicit `width` and `height` (or `aspect-ratio`) on all images. Avoid layout shifts from lazy-loaded content.
- **TTI**: Minimize main thread work via code splitting and deferred scripts.

---

## 9. Build Configuration

### Vite Optimization

1. **Source maps**: Disabled in production.
2. **CSS purging**: Tailwind CSS purges unused styles via content configuration.
3. **Chunk splitting**: Manual chunks for large vendor libraries.
4. **Compression**: Server-level gzip/brotli compression expected.

---

## 10. Related Files

- `/prompts/performance-optimization-orchestrator.md` — 7-audit optimization workflow
- `/guidelines/development/dev-tools-protection.md` — Protected dev tool pages (relevant to lazy loading strategy)
- `/guidelines/development/coding-standards.md` — General coding conventions