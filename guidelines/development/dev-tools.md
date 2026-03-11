# Developer Tools & WordPress Migration Guide

**Last updated**: 2026-02-26
**Version**: 1.0

This document outlines the architecture, purpose, and usage of the internal developer tools built to facilitate the migration from the React prototype to the WordPress Block Theme (FSE) and Block Plugin.

## Architecture Overview

### Section Groupings (4 sections — decided 2026-02-26)

| Section (AF) | Section (EN) | Route | Tools |
|---|---|---|---|
| Prototipe | Prototype | `/ontwikkelaar/prototipe` | Design System, Components, Route Map, Data Browser, Icon Browser |
| WordPress | WordPress | `/ontwikkelaar/wordpress` | WP Migration Hub (expanded landing), Patterns, Section Styles, Block Styles, Templates, Template Parts, Inc/ Files, Theme.json Viewer, Presets Browser, Ollie Theme, E-Editions Commerce |
| Verwysings | Reference | `/ontwikkelaar/verwysings` | Guidelines Browser, Content Browser, Image Assets |
| Bedrywighede | Operations | `/ontwikkelaar/bedrywighede` | Launch Checklist, Email Previews, System Config, Form Builder Preview |

### Single Source of Truth

The canonical WordPress export lives at `/wordpress-export/themes/die-papier-theme/`. Dev tools import from this directory:
- `theme.json` — imported via Vite JSON import
- `style.css` — imported via `?raw` for parsing
- `styles/` — block style variations (dark.json, high-contrast.json, serif.json, blocks/, sections/)

**Do NOT create `/src/wordpress/` or duplicate WordPress data in TypeScript files.** Data files like `themeJsonData.ts` should wrap imports from the canonical source.

### Sub-tab Routing

Multi-tab tools use full URL routes per tab (not URL hashes). Example:
- `/ontwikkelaar/ontwerpstelsel/kleure` (Design System → Colors tab)
- `/ontwikkelaar/wordpress/blok-kartering` (WordPress → Block Mapping sub-page)

### Navigation

- `DevToolHeader.tsx` — persistent header with burger menu trigger
- `DevFullScreenMenu.tsx` — full-screen overlay with 4 expandable section groups
- Breadcrumbs: 3-level — `Dev Hub > Section > Tool Name`
- Mobile: accordion-style collapsible sections with 44px touch targets

## Tool Overview

The developer tools are located under `/src/app/pages/dev/`. The merged Design System is the primary design reference. Legacy pages (`Foundations.tsx`, `StyleGuide.tsx`, `DesignSystemExtractor.tsx`) redirect to the merged tool.

Key data files:
- `/src/app/data/designTokens.ts`: Single-source-of-truth TypeScript data for all design tokens
- `/src/app/data/themeJsonData.ts`: Imports canonical theme.json from `/wordpress-export/`
- `/src/app/data/devTranslations.ts`: AF/EN translations for all dev tool pages

## Core Capabilities

### 1. Design Foundations Page (`/foundations` → redirects to `/ontwikkelaar/ontwerpstelsel`)

The `DesignFoundations` component provides an interactive, developer-facing reference for the entire V2 design system:

- **Section 1 — Colours**: Brand, neutral, and ShadCN system tokens with dual light/dark preview swatches, WCAG contrast badges (AA/AAA), and click-to-copy on all values.
- **Section 2 — Typography (V2)**: Full type scale grouped into three categories:
  - **Vloeiende Opskrifte (H1–H4)**: Roboto Serif 400 with `clamp()` fluid sizing, font-variation-settings (`GRAD`, `wdth`, `opsz`), letter-spacing tokens, and CSS custom property references (`--text-h*`, `--lh-h*`, `--ls-h*`, `--fvs-h*`).
  - **UI Opskrifte (H5–H6)**: Inter Bold/SemiBold with `text-transform: uppercase` support (H6), letter-spacing tokens.
  - **Liggaamsteks (P1–P4, Small)**: Inter 400 body text with line-height ratios and AAA compliance indicators.
  - Each token row shows: name + badges (Fluid/UC), CSS var references (click-to-copy), specs (px, LH, weight, LS, FVS), live preview, and HTML element.
- **Section 3 — Spacing**: Visual bar chart of `--space-10` through `--space-100` with px values and usage.
- **Section 4 — Radii & Shadows**: Interactive radius cards and elevation shadow previews.
- **Section 5 — Layout**: Align-wide container pattern, grid system, sidebar width, narrow content.
- **Section 6 — Breakpoints**: Visual width bars for all Tailwind breakpoints (375px–1536px).
- **Section 7 — Token Mapping Table**: Complete CSS var → light/dark hex → Tailwind class → Figma path mapping for all colour tokens.
- **Section 8 — Brand Components**: Live QuoteSlider and MarketingGrid demos.

### 2. Design Token Data (`/src/app/data/designTokens.ts`)

The `designTokens.ts` file is the single-source-of-truth for all token arrays:

- **`TYPOGRAPHY_TOKENS`**: 11 entries (H1–H6, P1–P4, Small) matching `/src/styles/theme.css` V2 scale. Each token includes:
  - CSS custom property references (`cssVars.fontSize`, `cssVars.lineHeight`, `cssVars.letterSpacing`, `cssVars.fvs`)
  - Desktop and mobile px values (for fluid types)
  - Font variation settings string (Roboto Serif only)
  - Text transform (H6 only)
  - Fluid flag (H1, H2 use `clamp()`)
  - Group classification (`heading-serif`, `heading-sans`, `body`)
- **`COLOR_TOKENS`**: 15 colour tokens with light/dark hex, Figma paths, Tailwind classes, WCAG-aware.
- **`SPACING_TOKENS`**: 8 space tokens (`space.10`–`space.100`).
- **`RADIUS_TOKENS`**: 4 border-radius tokens.
- **`SHADOW_TOKENS`**: 4 elevation levels with light and dark mode values.
- **`BREAKPOINT_TOKENS`**: 6 breakpoints.
- **`LAYOUT_TOKENS`**: 4 layout patterns.
- **`FONT_TOKENS`**: 2 font families (Inter, Roboto Serif).
- **`extractDesignTokensJSON()`**: Exports all tokens as a structured JSON file including V2 typography fields (fluid, cssVars, FVS, letterSpacing, textTransform).

### 3. JSON & CSS Export

- **JSON Export**: Downloads a `die-papier-design-tokens.json` file with full metadata, all colour tokens, V2 typography tokens (including fluid/cssVars/FVS), spacing, radii, breakpoints, and fonts.
- **CSS Copy**: Copies `:root` and `.dark` CSS variable declarations to clipboard.

### 4. Active Exemptions

The Foundations page is exempt from certain design system rules (see Guidelines.md Active Exemption Lists):
- Retains `text-primary` for inline links
- Uses non-standard tokens for demonstration purposes

## Workflow Integration

1. **Verify tokens**: Use the Foundations page to confirm any design token values against `theme.css`.
2. **Copy CSS vars**: Click any CSS variable reference in the typography table to copy `var(--text-h1)` etc.
3. **Export for Figma**: Use JSON export to sync tokens with Figma variables.
4. **WordPress mapping**: CSS var references in typography tokens (`--text-h*`, `--lh-h*`, etc.) map directly to `--wp--preset--font-size--*` variables in `theme.json`.

## Maintenance

- **Source of Truth**: `/src/styles/theme.css` is the canonical source. `/src/app/data/designTokens.ts` must mirror it exactly.
- **Updates**: When design tokens change in `theme.css`, update `designTokens.ts` to match, then verify on the Foundations page.
- **Typography V2**: All heading tokens use CSS custom properties from `theme.css` (not hardcoded px values). Font variation settings are stored as strings and applied via inline `fontVariationSettings` style.

---

## Email Previews (`/ontwikkelaar/e-pos-voorskou`)

**Route**: `/ontwikkelaar/e-pos-voorskou`  
**Component**: `/src/app/pages/dev/EmailPreviews.tsx`

### Purpose

The Email Previews page provides a visual reference and implementation guide for all WooCommerce email templates used in the e-editions commerce workflow. This tool helps developers and stakeholders preview how transactional emails will appear to subscribers across the entire subscription lifecycle.

### Email Templates

The page showcases **7 WooCommerce email templates**:

1. **New Subscription** — Sent when a customer completes a new e-edition subscription purchase
2. **Subscription Renewal** — Sent when a subscription auto-renews (monthly/annual billing)
3. **Subscription Cancelled** — Sent when a subscription is cancelled (by user or admin)
4. **Subscription Expired** — Sent when a subscription expires without renewal
5. **Payment Failed** — Sent when a subscription payment fails (e.g., card declined)
6. **Trial Ending Soon** — Sent 3 days before the 14-day free trial ends
7. **Subscription Switched** — Sent when a customer switches from one plan to another (e.g., Monthly → Annual)

### WooCommerce Hook Mapping

Each email template in the preview corresponds to a specific WooCommerce Subscriptions hook:

| Email Template | WooCommerce Hook | Trigger |
|:---------------|:-----------------|:--------|
| New Subscription | `woocommerce_subscription_status_active` | Subscription becomes active after purchase/trial |
| Subscription Renewal | `woocommerce_subscription_renewal_payment_complete` | Successful renewal payment processed |
| Subscription Cancelled | `woocommerce_subscription_status_cancelled` | Subscription status changes to "cancelled" |
| Subscription Expired | `woocommerce_subscription_status_expired` | Subscription status changes to "expired" |
| Payment Failed | `woocommerce_subscription_renewal_payment_failed` | Renewal payment fails |
| Trial Ending Soon | Custom scheduled action (3 days before trial end) | Triggered by WP-Cron or Action Scheduler |
| Subscription Switched | `woocommerce_subscriptions_switched_item` | Customer switches subscription plan |

### Implementation Notes

#### Email Template Files

In WordPress, these emails are rendered via:
- **WooCommerce Subscriptions plugin** — Handles all subscription lifecycle emails
- **WooCommerce Email Customizer** (optional plugin) — Allows visual customization of email templates
- **Template overrides** — Custom email templates can be placed in `/wp-content/themes/die-papier-theme/woocommerce/emails/`

#### Template Structure

Each WooCommerce email template follows this structure:
```
/woocommerce/emails/
├── customer-new-subscription.php
├── customer-renewal-invoice.php
├── customer-cancelled-subscription.php
├── customer-expired-subscription.php
├── customer-payment-retry.php
├── customer-subscription-trial-end.php (custom)
└── customer-switched-subscription.php
```

#### Customization Strategy

The React email templates in `/src/app/components/emails/` serve as **design references** for the WordPress email templates. Key customization elements:

- **Header**: Die Papier logo, brand colors (#142135 navy, #D70025 red)
- **Typography**: Match web typography (Roboto Serif for headings, Inter for body)
- **CTA Buttons**: Brand red with white text, rounded corners
- **Footer**: Contact info, unsubscribe link (required by WooCommerce), social links
- **Content Blocks**: Subscription details table (plan name, price, billing cycle, next payment date)

#### Email Content Tokens

WooCommerce provides dynamic tokens for personalization:
- `{customer_email}` — Customer's email address
- `{customer_first_name}` — Customer's first name
- `{subscription_id}` — WooCommerce subscription ID
- `{order_id}` — Order ID (for initial purchase)
- `{subscription_start_date}` — Subscription start date
- `{subscription_end_date}` — Subscription end/renewal date
- `{subscription_price}` — Formatted price (e.g., "R99.00 per month")
- `{subscription_status}` — Current status (active, cancelled, expired)
- `{payment_method}` — Payment gateway used (Payfast)

### Using the Preview Tool

1. **Navigate** to `/ontwikkelaar/e-pos-voorskou`
2. **Select an email template** from the tab bar (7 tabs)
3. **View the rendered email** in the preview panel
4. **Review WooCommerce hook** and trigger conditions in the info panel
5. **Copy template code** for WordPress implementation

### WordPress Integration Workflow

1. Install **WooCommerce Subscriptions** plugin
2. Enable WooCommerce email notifications (WooCommerce → Settings → Emails)
3. Customize email templates:
   - Use WooCommerce Email Customizer plugin (GUI), OR
   - Create custom template overrides in theme folder
4. Test emails using WooCommerce → Subscriptions → [subscription] → Actions → Email customer
5. Verify Payfast integration sends emails on payment events

### Related Guidelines

- [WooCommerce Integration](/guidelines/wordpress-migration/third-party-plugins/woocommerce.md) — Product setup, access gates, pricing
- [E-Editions User Journeys](/guidelines/content/e-editions-user-journeys.md) — Complete user state matrix and purchase flows
- [E-Editions Orchestrator](/prompts/e-editions-orchestrator.md) — Business decisions, audit history, file inventory

---

## Launch Checklist (`/ontwikkelaar/lansering`)

**Route**: `/ontwikkelaar/lansering`  
**Component**: `/src/app/pages/dev/LaunchChecklist.tsx`

### Purpose

The Launch Checklist page provides an interactive 10-phase deployment checklist for the Die Papier WordPress migration and go-live process. It covers everything from pre-launch planning through post-launch monitoring, with persistent localStorage state so progress is retained across sessions.

### Phases

The checklist contains **10 phases** with 400+ individual items:

1. **Pre-Launch Planning & Strategy** — Business readiness, content strategy, marketing, infrastructure, team
2. **Content Audit & Migration** — Content inventory, WordPress migration, E-Editions, WooCommerce products, QA
3. **Design System Verification** — Typography, colors, spacing, components, responsive, dark mode
4. **Functionality Testing** — Navigation, authentication, commerce, forms, search, media, social, admin
5. **Performance Optimization** — Page speed, assets, caching, database, third-party scripts, server, mobile
6. **SEO & Analytics Setup** — Technical SEO, on-page SEO, social meta, analytics, Search Console, local SEO
7. **Security & Compliance** — WordPress security, SSL, GDPR, POPIA, PCI DSS, legal, backup/DR
8. **Pre-Launch Testing** — Cross-browser, device testing, accessibility, functional, load, security, email, content
9. **Deployment & Go-Live** — Pre-deployment, deployment day, immediate post-launch, day 1 review
10. **Post-Launch Monitoring** — Week 1, weeks 2-4, month 1 review, ongoing maintenance, growth

### Features

- **Collapsible phase sections** — Expand/collapse individual phases
- **Checkbox persistence** — State saved to localStorage (key: `die-papier-launch-checklist`)
- **Progress tracking** — Per-phase and overall completion percentage
- **Export** — Download checklist state as JSON
- **Save/Reset** — Explicit save and reset buttons with toast notifications

### Related Guidelines

- [Launch Checklist (detailed document)](/guidelines/development/launch-checklist.md) — Full 10-phase checklist specification
- [Dev Tools Protection](/guidelines/development/dev-tools-protection.md) — Non-negotiable retention rule

---

## E-Editions Commerce (`/ontwikkelaar/e-uitgawes`)

**Route**: `/ontwikkelaar/e-uitgawes`
**Component**: `/src/app/pages/dev/EEditionsCommerce.tsx` (planned — Phase 32)

### Purpose

Dedicated dev tool page for e-editions WooCommerce product configuration. Breaks down how to configure the subscription packages and individual products. This is a standalone page (Q10 decision), not an extension of the Content Model tab.

### Planned Tabs

1. **Oorsig (Overview)** — Commerce flow diagram: visitor → subscriber → access
2. **Intekeningpakkette (Subscription Packages)** — Monthly/Annual plan setup in WooCommerce
3. **Individuele Produkte (Individual Products)** — Single-issue product creation
4. **Toegangsbeheer (Access Control)** — WooCommerce Memberships rules
5. **Payfast Integrasie (Payment Integration)** — Gateway config and webhooks
6. **Opstelling Gids (Setup Guide)** — Step-by-step WooCommerce admin instructions

### Related Guidelines

- [E-Editions User Journeys](/guidelines/content/e-editions-user-journeys.md)
- [WooCommerce Integration](/guidelines/wordpress-migration/third-party-plugins/woocommerce.md)
- [Pricing](/guidelines/content/pricing.md)
- [E-Editions Orchestrator](/prompts/e-editions-orchestrator.md)

---

## Translation Guidelines

All developer tool pages must use the bilingual translation system. **No hardcoded UI strings** are allowed in dev tool page components.

### Translation File

- **Source**: `/src/app/data/devTranslations.ts`
- **Context**: `/src/app/context/DevLanguageContext.tsx`
- **Hook**: `useDevLanguage()` returns `{ language, setLanguage }`
- **Helper**: `getTranslation(key, language)` returns the translated string

### Key Naming Convention

Translation keys follow the `{page}.{element}` pattern:

| Pattern | Example | Usage |
|:--------|:--------|:------|
| `devhub.{cardName}` | `devhub.componentBrowser` | DevHub card title |
| `devhub.{cardName}Desc` | `devhub.componentBrowserDesc` | DevHub card description |
| `devhub.stat{Name}` | `devhub.statGuidelines` | DevHub stats panel |
| `{page}.title` | `migration.title` | Page heading |
| `{page}.{section}` | `migration.themeJson` | Tab/section label |

### Rules

1. **Both AF and EN required** — Every key must have both `af` and `en` values
2. **Afrikaans is default** — The `af` value is the primary language (site language)
3. **No hardcoded strings** — All visible text in dev tool pages must come from `devTranslations.ts`
4. **New pages = new keys** — When adding a new dev tool page, add all its string keys to `devTranslations.ts` first
5. **DevLayout labels** — Sidebar nav labels in `DevLayout.tsx` use `labelAf` / `labelEn` directly (not from devTranslations)

### Adding a New Translation

```typescript
// In devTranslations.ts
export const devTranslations: Record<string, { af: string; en: string }> = {
  // ... existing translations ...
  'newpage.title': { af: 'Bladsy Titel', en: 'Page Title' },
  'newpage.description': { af: 'Beskrywing hier', en: 'Description here' },
};
```

```tsx
// In the component
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';

const { language } = useDevLanguage();
const title = getTranslation('newpage.title', language);
```

---