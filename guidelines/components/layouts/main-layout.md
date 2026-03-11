# Main Layout

**Last updated**: 2026-02-23
**Category**: Layout
**React source**: `/src/app/components/layouts/MainLayout.tsx`
**WordPress target**: All standard templates — implicit via WordPress template hierarchy

---

## 1. Purpose

The standard site layout providing the full "chrome": Header, main content area (with Suspense loading fallback), Footer, and persistent UI overlays (BackToTopButton, NewsletterModal, CookieBanner, Toaster). Used for all public-facing pages except the checkout flow and bare utility pages (Foundations, email templates).

## 2. Visual Structure

```
┌─ Root div (.min-h-screen .bg-background .antialiased .flex .flex-col .transition-colors)
│  ├─ RouteSEOProvider (invisible — sets <title>, meta tags per route)
│  ├─ SkipToContent (invisible until focused — "Spring na inhoud" link)
│  ├─ <Header /> (sticky, 3-tier)
│  ├─ <MainContentWrapper id="main-content">
│  │  └─ <Suspense fallback={<PageLoader />}>
│  │     └─ {children} or <Outlet />
│  │  </Suspense>
│  ├─ <Footer />
│  ├─ <BackToTopButton /> (fixed bottom-right, appears on scroll)
│  ├─ <NewsletterModal /> (currently disabled)
│  ├─ <CookieBanner /> (fixed bottom, appears once per session)
│  └─ <Toaster /> (sonner toast container)
```

## 3. Props / Attributes

| Prop (React) | Type | Default | Purpose |
|:-------------|:-----|:--------|:--------|
| `children` | `React.ReactNode?` | `undefined` | Legacy direct-render mode. When absent, renders `<Outlet />`. |

## 4. Data Sources

No data consumed directly — all content comes via child route components.

## 5. Design Tokens

### Root Container

| Property | Value | Token |
|:---------|:------|:------|
| Min height | `min-h-screen` | — |
| Background | `bg-background` | `--background` |
| Font smoothing | `antialiased` | — |
| Layout | `flex flex-col` | — |
| Transition | `transition-colors` | Smooth dark mode switch |

### PageLoader (Suspense Fallback)

| Element | Value | Token |
|:--------|:------|:------|
| Container | `min-h-screen flex items-center justify-center` | — |
| Spinner | `h-8 w-8 animate-spin rounded-full border-4 border-brand-red border-r-transparent` | — |
| Text | "Laai..." `text-gray-600 dark:text-gray-400` | — |

## 6. Section Style

Not applicable — layout wrapper, not a content section.

## 7. BEM Class Map

Not applicable for WordPress — the template hierarchy implicitly provides header/footer/main structure.

## 8. Responsive Behaviour

No layout-level responsive changes. The root `flex flex-col` ensures the footer is pushed to the bottom via `flex-1` on the main content area.

## 9. Dark Mode

| Element | Change | Token |
|:--------|:-------|:------|
| Root bg | `bg-background` stays the same token | `--background` changes from `#FFFFFF` to `#0F1923` |
| Loader text | `text-gray-600` → `text-gray-400` | `dark:text-gray-400` |
| Colour transition | `transition-colors` | Smooth animation between light/dark |

## 10. Accessibility

- **Skip to content**: `<SkipToContent />` renders a visually hidden link that becomes visible on focus, allowing keyboard users to bypass the header navigation. Links to `#main-content`.
- **Main content wrapper**: `<MainContentWrapper>` renders `<main id="main-content" role="main">` — proper landmark for screen readers.
- **SEO**: `<RouteSEOProvider />` sets `<title>` and `<meta>` tags per route for search engines and social sharing.

## 11. WordPress Mapping

### Construct Type
WordPress template hierarchy — not a single file.

### WordPress Equivalent

Every WordPress template (e.g., `single.html`, `page.html`, `archive.html`, `front-page.html`) implicitly includes the header and footer template parts:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- Page-specific content blocks -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### Overlay Components Mapping

| React Component | WordPress Equivalent |
|:----------------|:--------------------|
| `SkipToContent` | Added via `functions.php`: `wp_body_open()` hook → skip link HTML |
| `RouteSEOProvider` | Yoast SEO plugin (automatic `<title>` and meta tags) |
| `BackToTopButton` | Custom JS in `die-papier-blocks` plugin or theme `view.js` |
| `NewsletterModal` | MailPoet popup or Popup Maker plugin (currently disabled) |
| `CookieBanner` | Complianz, CookieYes, or custom JS/PHP banner |
| `Toaster` | Not needed — WP uses admin notices; user-facing toasts via custom JS |
| `PageLoader` | Not needed — WordPress renders full HTML server-side |

### Existing WP Files
- Template parts: `parts/header.html`, `parts/footer.html`
- Templates: All files in `/wordpress-export/themes/die-papier-theme/templates/`

## 12. Dependencies

- **Sub-components**: `Header` (part), `Footer` (part), `BackToTopButton` (common), `NewsletterModal` (pattern), `CookieBanner` (common), `SkipToContent` + `MainContentWrapper` (common), `RouteSEOProvider` (common), ShadCN `Toaster` (sonner)
- **Consumed by**: `routes.tsx` — wraps all standard page routes
- **Route hierarchy**: `RootLayout` → **`MainLayout`** → page components
- **Loading**: `React.Suspense` with `PageLoader` fallback for lazy-loaded page components

## 13. Known Exemptions

None.
