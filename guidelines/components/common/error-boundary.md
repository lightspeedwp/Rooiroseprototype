# Error Boundary

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/ErrorBoundary.tsx`
**WordPress target**: Not applicable — WordPress uses server-side error handling

---

## 1. Purpose

A React class component that catches JavaScript errors in the component tree and displays a branded fallback UI instead of a white screen. Shows error details in development mode, with "Probeer weer" (retry) and "Terug na tuisblad" (home) buttons. Afrikaans error messaging.

## 2. Visual Structure

```
┌─ Error screen (min-h-screen, bg-gray-50, centered)
│  └─ Card (max-w-2xl, bg-white dark:bg-card, rounded-lg, shadow-lg)
│     ├─ AlertTriangle icon (red, in circle)
│     ├─ H1 "Oeps! Iets het verkeerd geloop" (serif, --fvs-h1)
│     ├─ P explanation text
│     ├─ [Dev only] <details> with error stack trace
│     ├─ Buttons: "Probeer weer" (red) + "Terug na tuisblad" (outline)
│     └─ Support email link
```

## 3. Props / Attributes

| Prop | Type | Default |
|:-----|:-----|:--------|
| `children` | `ReactNode` | — (required) |
| `fallback` | `ReactNode?` | `undefined` (uses default error UI) |

## 4–5. Design Tokens

H1 uses `--font-heading` with `fvs: 'GRAD' -50, 'wdth' 64, 'opsz' 48`, `--lh-h1`, `--text-h1`. Buttons follow standard brand colours.

## 6–10. Standard

Dark mode: `bg-gray-50` → `bg-background`, `bg-white` → `bg-card`. Shadow → `var(--shadow-dark-400)`.

## 11. WordPress Mapping

Not needed — WordPress handles errors via `500.php`, `wp_die()`, and PHP error handling.

## 12. Dependencies

- **Consumed by**: `RootLayout.tsx` (wraps entire app)
- **Sub-components**: ShadCN `Button`

## 13. Known Exemptions

None.
