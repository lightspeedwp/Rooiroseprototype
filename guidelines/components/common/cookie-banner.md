# Cookie Banner

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/CookieBanner.tsx`
**WordPress target**: Complianz, CookieYes, or custom plugin

---

## 1. Purpose

A POPIA/GDPR-compliant cookie consent banner fixed at the bottom of the viewport. Shows once per browser (tracked via `localStorage`). Includes links to cookie policy, PAIA, privacy policy, and terms. User can accept or decline. Uses V2 H6 section label for the title.

## 2. Visual Structure

```
┌─ Fixed bottom bar (z-50, bg-white dark:bg-card, border-t-4 border-brand-red, shadow-up)
│  └─ Container (.max-w-[1440px] .mx-auto, flex col→row)
│     ├─ Left: Cookie icon (circle, hidden sm) + Title (H6 style) + Description (HTML + policy links)
│     └─ Right: "Wys af" outline button + "Aanvaar" red button + Close X (mobile only)
```

## 3. Props / Attributes

Self-contained — no external props.

## 4. Data Sources

- **UI strings**: `/src/app/data/cookieBanner.ts` — `COOKIE_BANNER` (title, description HTML, links, button labels)
- **WordPress**: Handled by cookie consent plugin (Complianz recommended)

## 5. Design Tokens

| Element | Light | Dark |
|:--------|:------|:-----|
| Banner bg | `bg-white` | `bg-card` |
| Top border | `border-brand-red` (4px) | Same |
| Shadow | `shadow-[0_-4px_20px_rgba(0,0,0,0.1)]` | `var(--shadow-dark-up)` |
| Title | `--font-inter`, `--text-h6`, SemiBold, `text-brand-navy` | `text-foreground` |
| Description | `text-sm`, `text-gray-600` | `text-gray-400` |
| Links | `text-brand-red font-medium` | Same |
| Decline button | `border-gray-300 text-gray-700` | `border-border text-gray-300` |
| Accept button | `bg-brand-red text-white font-bold` | Same |

## 6–8. Standard

Responsive: stacks vertically on mobile, horizontal on desktop. Close X visible only on mobile.

## 9–10. Standard dark mode and accessibility (aria-label on close button).

## 11. WordPress Mapping

**Plugin-based** — use Complianz, CookieYes, or similar. Custom styling needed to match brand colours.

## 12. Dependencies

- **Consumed by**: `MainLayout.tsx`
- **Data**: `COOKIE_BANNER` from `/src/app/data/cookieBanner.ts`

## 13. Known Exemptions

None.
