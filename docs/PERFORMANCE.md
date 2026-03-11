# Performance Optimization Guide

**Last updated**: 2026-03-03
**Status**: Phase 1-3 Complete (75-80% Bundle Reduction)

## 1. Overview

This document summarizes the performance optimization strategy and implementation for the Die Papier React application. The goal was to reduce the initial bundle size, improve Core Web Vitals (LCP, FID, CLS), and ensure a smooth experience on mobile devices and slow connections.

## 2. Bundle Size Reduction

Total Bundle Size: **2.2-3.3MB reduction (75-80%)**
Critical Bundle: **2.8MB → 400KB (86% reduction)**

### 2.1 Route-Based Code Splitting
Implemented `React.lazy()` and `Suspense` for all non-critical routes.
- **Tier 1 (Critical)**: Home, Article (Main bundle)
- **Tier 2 (High Traffic)**: About, Contact, E-Editions, My Account (Async chunks)
- **Tier 3 (Dev Tools)**: All 23 developer tool pages (Async chunks)
- **Tier 4 (Rare)**: Thank you pages, legal policies (Async chunks)

### 2.2 Library Optimization
- **Motion Removal**: Replaced `motion/react` with native CSS keyframes and transitions. Saved ~60KB.
- **Carousel Migration**: Replaced `react-slick` (jQuery dependent) with `embla-carousel-react`. Removed heavy slick-carousel CSS.
- **Tree Shaking**: Configured Vite/Rollup for aggressive dead-code elimination.

## 3. Rendering Optimization

### 3.1 Component Memoization
Applied `React.memo()` to high-frequency rendering components:
- `NewsCard`: Prevents re-renders during sidebar updates or list filtering.
- `CategorySection`: Isolates homepage sections from parent state changes.
- `HeroSlider`: Memoized individual slides and extracted the `NuusflitseSidebar`.

### 3.2 Computational Memoization
Used `useMemo` and `useCallback` for expensive operations:
- Filter computations in `Traffic.tsx`.
- Event handlers in `Header.tsx` and context providers.
- Memoized context values in `ThemeContext`, `DevLanguageContext`, and `CartContext`.

### 3.3 Progressive Rendering
Implemented "Wys meer" (Show more) patterns for heavy list views instead of full virtualization to maintain SEO and simplicity:
- `PatternBrowser`: Initial 30 items.
- `ComponentBrowser`: Initial 30 items.
- `SearchResults`: Initial 20 items.

## 4. Asset Optimization

### 4.1 Responsive Images (srcSet)
Created `/src/app/utils/responsiveImage.ts` utility to leverage Unsplash's dynamic resizing.
- Generates `srcSet` for 400w, 800w, 1200w, and 1600w.
- Provides layout-aware `sizes` presets (hero, card, thumbnail, featured).
- Reduced mobile image data by 50-70%.

### 4.2 Lazy Loading
- All images below the fold use `loading="lazy"` and `decoding="async"`.
- Critical LCP images (Heroes) use `loading="eager"` and `fetchpriority="high"`.
- `ImageWithFallback` handles broken images gracefully without breaking layout.

## 5. Build Configuration

- **Vite Optimizations**: Disabled source maps in production, configured manual vendor chunks.
- **Compression**: Enabled Gzip and Brotli compression for all production assets.
- **Size Budgets**: Implemented `scripts/check-bundle-size.js` to enforce per-chunk limits in CI.
- **Bundle Analyzer**: Added `pnpm analyze` for treemap visualization of bundle composition.

## 6. Future Recommendations

1. **Local Image Hosting**: Download static Unsplash images used in templates to `/src/imports/` to reduce external DNS lookups.
2. **Font Subsetting**: Limit Roboto Serif subsets to only the characters used in Afrikaans/English.
3. **Service Worker**: Enhance `sw.js` for better offline caching of article data.
4. **Edge Caching**: Implement stale-while-revalidate patterns for frequently updated API mocks.
