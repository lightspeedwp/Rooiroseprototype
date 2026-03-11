# Root Layout

**Last updated**: 2026-02-23
**Category**: Layout
**React source**: `/src/app/components/layouts/RootLayout.tsx`
**WordPress target**: Not directly mapped — providers and scroll-to-top are implicit in WordPress

---

## 1. Purpose

The topmost layout wrapper rendered inside `RouterProvider`. Its sole job is to wrap the entire application with global providers (ErrorBoundary, CartProvider, ThemeProvider, DevLanguageProvider) and a scroll-to-top utility. It renders no visible UI — only an `<Outlet />` for child routes (which will be `MainLayout`, `CheckoutLayout`, or bare pages like Foundations).

## 2. Visual Structure

```
┌─ ErrorBoundary
│  └─ CartProvider
│     └─ ThemeProvider
│        └─ DevLanguageProvider
│           ├─ ScrollToTop (invisible, resets scroll on route change)
│           └─ <Outlet /> → MainLayout | CheckoutLayout | bare page
```

No visible elements. No HTML output. Pure provider tree.

## 3. Props / Attributes

None — self-contained.

| Internal Component | Purpose |
|:-------------------|:--------|
| `ScrollToTop` | Calls `window.scrollTo(0, 0)` on `pathname` change |

## 4. Data Sources

No data consumed directly.

## 5. Design Tokens

Not applicable — no visible output.

## 6. Section Style

Not applicable.

## 7. BEM Class Map

Not applicable.

## 8. Responsive Behaviour

Not applicable.

## 9. Dark Mode

Not applicable — ThemeProvider is provided here but renders no visual elements. Theme toggle logic lives in `ThemeContext.tsx`.

## 10. Accessibility

- **ErrorBoundary**: Catches rendering errors and shows a fallback UI instead of a white screen
- **ScrollToTop**: Ensures users start at the top of the page after navigation (critical for keyboard/screen reader users)

## 11. WordPress Mapping

### Construct Type
No direct equivalent — WordPress handles these concerns differently:

| React Provider | WordPress Equivalent |
|:---------------|:--------------------|
| `ErrorBoundary` | WordPress error handling via `wp_die()`, PHP error boundaries, and `500.php` template |
| `CartProvider` | WooCommerce cart session (server-side, `WC()->cart`) |
| `ThemeProvider` | Theme toggle via custom JS + `data-theme` attribute on `<html>` (handled in `functions.php` or `view.js`) |
| `DevLanguageProvider` | Not needed in production WordPress |
| `ScrollToTop` | Not needed — WordPress full page loads naturally scroll to top. For SPA-like behaviour with Interactivity API, add `window.scrollTo(0,0)` in `view.js` |

### Existing WP Files
- No direct equivalent. The provider concerns are distributed across `functions.php`, `theme.json`, and plugin PHP.

## 12. Dependencies

- **Sub-components (providers)**: `ErrorBoundary` (common), `CartProvider` (context), `ThemeProvider` (context), `DevLanguageProvider` (context)
- **Consumed by**: `App.tsx` — wraps the entire route tree via `<Route element={<RootLayout />}>`
- **Route hierarchy**: `App.tsx` → `RootLayout` → `MainLayout` | `CheckoutLayout` | bare pages

## 13. Known Exemptions

None.
