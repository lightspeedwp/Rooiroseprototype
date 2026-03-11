# Back To Top Button

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/BackToTopButton.tsx`
**WordPress target**: Custom JS in theme or plugin

---

## 1. Purpose

A floating "back to top" button that appears after scrolling 300px and hides when the footer is visible (via IntersectionObserver). Fixed at bottom-right with smooth scroll animation.

## 2. Visual Structure

Circular button: ArrowUp icon (20px, strokeWidth 2.5). Semi-transparent navy bg with backdrop blur. `opacity-60` default, `opacity-100` on hover.

## 3. Props / Attributes

None — self-contained.

## 4. Design Tokens

| Element | Light | Dark |
|:--------|:------|:-----|
| Button bg | `bg-brand-navy/50` | `bg-muted-foreground/40` |
| Hover bg | `bg-brand-navy/90` | `bg-muted-foreground/70` |
| Text | `text-white` | Same |
| Focus ring | `ring-brand-red` | Same |
| Shadow | `shadow-md` | Same |
| Position | `bottom-6 right-4 md:bottom-8 md:right-8` | Same |
| z-index | `z-40` | Same |

## 5. Accessibility

- `aria-label="Terug na bo"`
- `focus:ring-2 focus:ring-offset-2 focus:ring-brand-red`

## 6. WordPress Mapping

Custom JS snippet in `die-papier-blocks` plugin or theme `view.js`:
```js
const btn = document.createElement('button');
// ... scroll listener, footer observer, click handler
```

## 7. Dependencies

- **Consumed by**: `MainLayout.tsx`
- **Utility**: `cn()` from ShadCN utils
