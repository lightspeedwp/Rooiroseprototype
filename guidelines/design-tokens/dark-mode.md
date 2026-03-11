# Dark Mode

**Last updated**: 2026-03-02
**Version**: 1.0

> This document defines **every** CSS variable and hardcoded colour that must change when `html.dark` (or `body.dark`) is active. A separate stylesheet `/src/styles/dark-mode.css` will be created to hold all overrides.

---

## 1  Strategy

| Decision | Value |
|:---|:---|
| Toggle mechanism | CSS class `.dark` on `<html>` element |
| Persistence | `localStorage` key `dp-theme` (`"light"` / `"dark"` / `"system"`) |
| Default | `"system"` (respects `prefers-color-scheme`) |
| Tailwind variant | Already configured: `@custom-variant dark (&:is(.dark *));` in `theme.css` |

---

## 2  CSS Variable Mapping (`:root` → `.dark`)

### 2.1  Brand / Custom Tokens

| Variable | Light value | Dark value | Notes |
|:---|:---|:---|:---|
| `--custom-primary` | `#D70025` | `#E83050` | Slightly lighter red for contrast on dark bg |
| `--custom-primary-2` | `#9E0918` | `#C4243E` | Hover / pressed red |
| `--accent` / `--accent-2` | `#1A3A5F` / `#142135` | `#8EADC8` / `#B0C8DC` | Navy inverts to light steel blue for readability |
| `--base` | `#ffffff` | `#0F1923` | Deep navy-tinted black (brand-aware dark bg) |
| `--base-2` | `#F0F0F0` | `#162233` | Slightly lighter card/section bg |
| `--base-3` | `#DDDDDD` | `#1E3044` | Borders / dividers |
| `--contrast` | `#2c2c2c` | `#E8E8ED` | Primary text on dark backgrounds |

### 2.2  ShadCN System Tokens

| Variable | Light value | Dark value |
|:---|:---|:---|
| `--background` | `#ffffff` | `#0F1923` |
| `--foreground` | `#2c2c2c` | `#E8E8ED` |
| `--card` | `#ffffff` | `#162233` |
| `--card-foreground` | `#2c2c2c` | `#E8E8ED` |
| `--popover` | `#ffffff` | `#162233` |
| `--popover-foreground` | `#2c2c2c` | `#E8E8ED` |
| `--primary` | `#D70025` | `#E83050` |
| `--primary-foreground` | `#ffffff` | `#ffffff` |
| `--secondary` | `#F0F0F0` | `#1E3044` |
| `--secondary-foreground` | `#1A3A5F` | `#B0C8DC` |
| `--muted` | `#F0F0F0` | `#1E3044` |
| `--muted-foreground` | `#636375` | `#95A3B1` |
| `--accent` | `#F0F0F0` | `#1E3044` |
| `--accent-foreground` | `#1A3A5F` | `#B0C8DC` |
| `--destructive` | `#d4183d` | `#E83050` |
| `--destructive-foreground` | `#ffffff` | `#ffffff` |
| `--border` | `#DDDDDD` | `#1E3044` |
| `--input` | `#DDDDDD` | `#253D54` |
| `--ring` | `#D70025` | `#E83050` |

### 2.3  Chart Tokens

| Variable | Dark value |
|:---|:---|
| `--chart-1` | `oklch(0.55 0.25 41.116)` |
| `--chart-2` | `oklch(0.65 0.13 184.704)` |
| `--chart-3` | `oklch(0.50 0.09 227.392)` |
| `--chart-4` | `oklch(0.78 0.17 84.429)` |
| `--chart-5` | `oklch(0.72 0.17 70.08)` |

### 2.4  Sidebar Tokens

| Variable | Dark value |
|:---|:---|
| `--sidebar` | `#0F1923` |
| `--sidebar-foreground` | `#E8E8ED` |
| `--sidebar-primary` | `#E83050` |
| `--sidebar-primary-foreground` | `#ffffff` |
| `--sidebar-accent` | `#1E3044` |
| `--sidebar-accent-foreground` | `#E8E8ED` |
| `--sidebar-border` | `#1E3044` |
| `--sidebar-ring` | `#E83050` |

---

## 3  Hardcoded Colour Overrides (Tailwind classes)

These are frequently used hardcoded colours across the codebase that require `dark:` variant overrides.

### 3.1  Backgrounds

| Light class | Dark override | Usage areas |
|:---|:---|:---|
| `bg-white` | `dark:bg-[#0F1923]` | Page backgrounds, cards, sections |
| `bg-gray-50` | `dark:bg-[#0D1520]` | Alternate section backgrounds |
| `bg-gray-100` | `dark:bg-[#162233]` | Subtle section tints, input bgs |
| `bg-[#F0F0F0]` | `dark:bg-[#1E3044]` | Article overview boxes |
| `bg-[#142135]` | `dark:bg-[#0A1018]` | Header / footer (darken further) |
| `bg-[#D70025]` | `dark:bg-[#E83050]` | CTA buttons, badges — stays bold |
| `bg-[#1A3A5F]` | `dark:bg-[#253D54]` | Nav accent bars |

### 3.2  Text Colours

| Light class | Dark override |
|:---|:---|
| `text-[#142135]` | `dark:text-[#E8E8ED]` |
| `text-[#2c2c2c]` | `dark:text-[#E8E8ED]` |
| `text-[#1A3A5F]` | `dark:text-[#8EADC8]` |
| `text-[#D70025]` | `dark:text-[#E83050]` |
| `text-gray-600` | `dark:text-gray-400` |
| `text-gray-500` | `dark:text-gray-400` |
| `text-gray-400` | `dark:text-gray-500` |
| `text-gray-700` | `dark:text-gray-300` |
| `text-gray-800` | `dark:text-gray-200` |
| `text-gray-900` | `dark:text-gray-100` |
| `text-black` | `dark:text-white` |

### 3.3  Borders

| Light class | Dark override |
|:---|:---|
| `border-gray-200` | `dark:border-[#1E3044]` |
| `border-gray-100` | `dark:border-[#162233]` |
| `border-gray-300` | `dark:border-[#253D54]` |
| `border-[#142135]` | `dark:border-[#8EADC8]` |
| `border-[#D70025]` | `dark:border-[#E83050]` |
| `border-[#DDDDDD]` | `dark:border-[#1E3044]` |
| `border-[#1a3a5f]` | `dark:border-[#8EADC8]` |

### 3.4  Hover States

| Light class | Dark override |
|:---|:---|
| `hover:bg-gray-100` | `dark:hover:bg-[#1E3044]` |
| `hover:bg-gray-50` | `dark:hover:bg-[#162233]` |
| `hover:bg-[#142135]` | `dark:hover:bg-[#253D54]` |
| `hover:bg-[#1c2d45]` | `dark:hover:bg-[#2A4A66]` |
| `hover:bg-[#9E0918]` | `dark:hover:bg-[#C4243E]` |
| `hover:text-[#D70025]` | `dark:hover:text-[#E83050]` |

### 3.5  Shadows

| Light class | Dark override |
|:---|:---|
| `shadow-sm` | `dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]` |
| `shadow-md` | `dark:shadow-[0_4px_6px_rgba(0,0,0,0.5)]` |
| `shadow-lg` | `dark:shadow-[0_10px_15px_rgba(0,0,0,0.5)]` |

---

## 4  Special Component Considerations

### 4.1  Header & Footer
- Header already uses `bg-[#142135]` with white text → darken to `bg-[#0A1018]`
- Category bar strip → `dark:bg-[#0D1520]`
- Footer → same treatment as header

### 4.2  Article Content (`.article-content`)
- Body text `color: #000` → `dark: color: #E8E8ED`
- Headings `color: #2c2c2c` → `dark: color: #E8E8ED`
- Blockquote `background: white` → `dark: background: #162233`
- Blockquote `border-left: 2px solid #3e3e3e` → `dark: border-left: 2px solid #8EADC8`
- Links `color: #D70025` → `dark: color: #E83050`
- Links hover `color: #9E0918` → `dark: color: #C4243E`

### 4.3  Ad Placeholders
- Gray dashed borders → `dark:border-[#253D54]`
- Light gray backgrounds → `dark:bg-[#162233]`
- Muted text → `dark:text-gray-500`

### 4.4  Forms & Inputs
- White backgrounds → `dark:bg-[#162233]`
- Border colors → `dark:border-[#253D54]`
- Placeholder text → `dark:placeholder-gray-500`
- Focus rings → `dark:ring-[#E83050]`

### 4.5  Cards (Article, Event, Obituary, Competition)
- White card → `dark:bg-[#162233]`
- Card borders → `dark:border-[#1E3044]`
- Card shadows → deeper black shadow

### 4.6  Image Overlays
- Gradient overlays on hero images stay the same (dark-on-image works in both modes)
- Badge backgrounds (red) stay the same

---

## 5  Implementation Status

> Updated: 2026-02-13

### Completed
- **CSS Variables**: All `.dark {}` overrides live in `/src/styles/theme.css` (brand tokens, ShadCN, chart, sidebar)
- **Sitewide CSS Utilities**: `.dark` rules for `color-scheme`, `::selection`, scrollbar, `::placeholder`, `<hr>`, `.prose` content — all in `theme.css` `@layer base`
- **Article Content**: `.dark .article-content` rules for body text, headings, blockquotes, links in `theme.css`
- **Toggle**: `useTheme` hook + `ThemeToggle` component in Header top bar
- **Global Layout**: Header, Footer, MobileMenu, PageContainer, Breadcrumbs, CookieBanner, CheckoutLayout
- **Home Page**: All sections (HeroSlider, Nuusflitse, FeatureGrid, CategorySection, Poll, Events, Obituaries, Multimedia, Archive, Competitions)
- **Content Pages**: Article, SingleEvent, SingleObituary, CommentsSection, SocialShare
- **Archive Pages**: Category (with pagination), SearchResults, Obituaries, Events, Competitions, Multimedia — all with `pb-20` post-pagination
- **Static Pages**: About, Contact, NotFound — wrappers and key sections
- **Components**: NewsCard, SubsectionFilter, EEditionAccess, PageFAQSection, Skeletons, CompetitionStatusBadge, AdSlot, LeaderboardAd, StickyMobileFooter
- **StyleGuide**: Full dark mode + mobile anchored nav
- **User/Account Pages**: Register, MyAccount (login + logged-in views + NavButton/DashboardCard sub-components), AccountActivation
- **E-commerce Pages**: Cart (empty + items views), Checkout (full form + order summary), OrderConfirmation (guest + logged-in)
- **Author Page**: Full dark mode (header, article cards, empty state)
- **Weather Page**: City selector, current weather, 7-day forecast, all-cities grid
- **Traffic Page**: Filter tabs, severity configs, incident cards, empty state
- **Sitemap Page**: All sections (SitemapSection component, authors, obituaries, multimedia, events, categories, tags, articles)
- **Sponsored Archive**: Full inner content dark mode
- **Policy Pages** (wrappers + inner content inherits sitewide CSS): PrivacyPolicy, TermsAndConditions, CookiePolicy, PAIAPage, UserRulesPage, AdvertisingGuidelinesPage, PressCodePage, AIPolicyPage, CommentPolicyPage, ComplaintsProcedurePage, ReturnsPolicy, CompetitionTerms
- **ThankYou Pages** (full inner content): ThankYouRegistration, ThankYouContact, ThankYouNewsletter, ThankYouSubmission, ThankYouCompetition, ThankYouAdvertising
- **Newsletter Pages** (full inner content): NewsletterSubscribe, NewsletterConfirmation (steps, help box), ManageNewsletters (toggle cards, header)
- **Subscribe Pages** (full inner content): SubscribeDelivery (pricing cards, cross-sell, features grid), SubscribeEEdition (pricing cards, cross-sell), SingleEEdition (wrapper)
- **Advertise Sub-pages** (full inner content — categories, pricing tiers, how-it-works, spec boxes, CTA blocks): ClassifiedsPage, DisplayAdvertisingPage, LeafletsPage, SponsoredContentPage, SponsorshipsPage, SupplementsPage
- **Submit Pages** (full inner content — form cards, selects, textareas, file upload zones, consent notices): SubmitStory, SubmitLetter, SubmitFeedback, SubmitShoutout
- **Policy Pages** (full inner content — headings, prose): ReturnsPolicy, ComplaintsProcedurePage
- **Utility Pages**: Offline, Foundations, SingleMultimedia, CompetitionSingle (wrappers)

### Remaining
- **Task 20**: Full visual QA across all routes — every page now has dark mode applied to wrappers and inner content; QA pass needed for edge cases, contrast issues, and any missed elements

---

## 6  Implementation Approach

1. Create `/src/styles/dark-mode.css` with all `.dark` overrides
2. Import it in the main stylesheet chain
3. Create `ThemeToggle.tsx` component
4. Add toggle to Header top bar
5. Add `useTheme` hook for reading/setting theme state
6. Sweep all pages/components adding `dark:` Tailwind classes where needed
7. Test all routes in dark mode

---

## 7  Colour Palette Summary

### Light Mode
```
Background:      #FFFFFF
Surface/Card:    #FFFFFF
Surface Alt:     #F0F0F0
Border:          #DDDDDD
Text Primary:    #2C2C2C / #142135
Text Secondary:  #636375
Text Muted:      #9CA3AF (gray-400)
Brand Red:       #D70025
Brand Navy:      #142135
Accent Navy:     #1A3A5F
```

### Dark Mode
```
Background:      #0F1923
Surface/Card:    #162233
Surface Alt:     #1E3044
Border:          #1E3044
Text Primary:    #E8E8ED
Text Secondary:  #95A3B1
Text Muted:      #6B7B8D
Brand Red:       #E83050
Brand Navy:      #8EADC8 (inverted for readability)
Accent Navy:     #B0C8DC (inverted for readability)
```