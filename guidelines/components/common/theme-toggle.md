# Theme Toggle

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/ThemeToggle.tsx`
**WordPress target**: Custom JS in theme or `die-papier-blocks` plugin

---

## 1. Purpose

A dark/light/system theme switcher supporting two UI variants: `icon` (single button cycling through themes, used in header/mobile menu) and `full` (3-button segmented control for settings pages). Reads from and writes to `ThemeContext`.

## 2. Visual Structure

### `icon` variant
Single button: Sun icon (light mode) or Moon icon (dark mode, yellow-300). Cycles light → dark → system on click.

### `full` variant
Segmented control (border, rounded-lg): [☀ Lig] [🌙 Donker] [🖥 Stelsel]. Active segment has white bg + shadow.

## 3. Props / Attributes

| Prop | Type | Default | WP Attribute |
|:-----|:-----|:--------|:-------------|
| `variant` | `'icon' \| 'full'` | `'icon'` | N/A |
| `className` | `string` | `""` | N/A |

## 4. Data Sources

- **Theme state**: `useTheme()` from `/src/app/context/ThemeContext.tsx` — `theme`, `resolvedTheme`, `setTheme`, `toggleTheme`

## 5. Design Tokens

| Element | Light Mode | Dark Mode |
|:--------|:-----------|:----------|
| Icon (light) | Sun icon (inherited color) | — |
| Icon (dark) | — | Moon icon `text-yellow-300` |
| Full control border | `border-gray-200` | `border-border` |
| Full control bg | `bg-gray-100` | `bg-card` |
| Active segment | `bg-white text-brand-navy shadow-sm` | `bg-background text-foreground shadow-sm` |
| Inactive segment | `text-gray-500` | `text-gray-400` |

## 6–8. Standard

No section style or BEM. Responsive: `full` variant hides button text below `sm` breakpoint.

## 9. Dark Mode

Icon switches from Sun to Moon. Full variant active tab colours invert.

## 10. Accessibility

- All buttons have `title` and `aria-label` in Afrikaans: "Lig modus", "Donker modus", "Stelsel voorkeur"
- `icon` variant: `aria-label="Wissel tema (tans: [theme])"`
- Icons: Lucide `Sun`, `Moon`, `Monitor`

## 11. WordPress Mapping

### Construct Type
Custom JS — not a block.

WordPress implementation:
1. Add a toggle button in the header template part
2. JS in `view.js` toggles a `data-theme="dark"` attribute on `<html>`
3. CSS custom properties switch via `[data-theme="dark"]` or `prefers-color-scheme: dark`
4. Preference stored in `localStorage`

## 12. Dependencies

- **Consumed by**: `Header.tsx` (icon, desktop), `MobileMenu.tsx` (icon, mobile), settings pages (full)
- **Context**: `ThemeContext` / `ThemeProvider`

## 13. Known Exemptions

None.
