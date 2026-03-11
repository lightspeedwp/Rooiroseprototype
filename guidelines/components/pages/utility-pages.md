# Utility & Misc Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Various

---

This document covers utility, submission, and miscellaneous pages.

## Pages Covered

| Page | React Source | Route | Purpose | WP Mapping |
|:-----|:------------|:------|:--------|:-----------|
| **Offline** | `Offline.tsx` | N/A (service worker) | No-internet fallback | PWA/Service Worker |
| **Foundations** | `Foundations.tsx` | `/foundations` | Design system dev page | Not exported |
| **Traffic** | `Traffic.tsx` | `/verkeer` | Traffic/readership stats | Static page |
| **Weather** | `Weather.tsx` | `/weer` | Weather widget page | Static page or widget |
| **Submit Event** | `SubmitEvent.tsx` | `/gebeure/dien-in` | Event submission form | Gravity Forms page |
| **Submit Hub** | `SubmitHub.tsx` | `/dien-in` | Content submission hub | Static page |
| **Competition Terms** | `CompetitionTerms.tsx` | `/kompetisie-terme-en-voorwaardes` | Competition T&Cs | Static page |

## Page Details

### Offline (`Offline.tsx`)
- Minimal page: WifiOff icon + "Jy is vanlyn" title + "Probeer Weer" / "Tuisblad" buttons
- WP: Handled by service worker if PWA is enabled, not a standard page

### Foundations (`Foundations.tsx`)
- **Dev-only** documentation page showing all design tokens, colours, typography, components
- WP: Not exported — development reference only
- **Exemption**: Retains `text-primary` for inline links, non-standard tokens for demonstration purposes

### Traffic (`Traffic.tsx`)
- Readership statistics, publication reach, audience demographics
- WP: Static page with infographics, possibly using charts

### Weather (`Weather.tsx`)
- Weather widget/embed for local weather
- WP: Widget or embed block

### Submit Event (`SubmitEvent.tsx`)
- Form for community event submissions (title, date, location, description, contact)
- WP: Gravity Forms with custom fields

### Submit Hub (`SubmitHub.tsx`)
- Landing page linking to various submission types (events, obituaries, classifieds)
- WP: Static page with link cards

### Competition Terms (`CompetitionTerms.tsx`)
- Standard legal terms for all competitions
- WP: Static page with prose content

## Dependencies

Various — each page uses `PageContainer`, `SEO`, and page-specific data files.

## Known Exemptions

- **Foundations.tsx** — Documentation/dev page; retains `text-primary` for inline links, non-standard tokens for demonstration purposes (per exemption list).
