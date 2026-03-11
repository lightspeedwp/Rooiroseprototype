# Coding Standards

**Last updated**: 2026-02-24
**Version**: 1.0

## File Naming
*   **React Components**: `PascalCase.tsx` (e.g., `ArticleCard.tsx`).
*   **Utilities/Hooks**: `camelCase.ts` (e.g., `useCart.ts`).
*   **Styles**: `kebab-case.css` (e.g., `theme.css`).

## Directory Structure
*   `/src/app/components/`: Business components.
*   `/src/app/components/ui/`: Reusable primitive components (ShadCN).
*   `/src/app/components/common/`: Shared utilities (`PageContainer`, `Logo`, `SEO`, `ErrorBoundary`, etc.).
*   `/src/app/components/parts/`: Layout parts (`Header`, `Footer`, `Breadcrumbs`, `MobileMenu`).
*   `/src/app/components/patterns/`: Reusable content patterns (`PageFAQSection`, `ContentHero`, `ContactForm`, etc.).
*   `/src/app/components/layouts/`: Layout wrappers (`RootLayout`, `MainLayout`, `CheckoutLayout`).
*   `/src/app/pages/`: Page-level components.
*   `/src/app/pages/dev/`: Developer tool pages (protected — see `/guidelines/development/dev-tools-protection.md`).
*   `/src/app/data/`: Mock data, types, and navigation constants.
*   `/src/imports/`: Static assets (SVGs).

## Router Pattern

This project uses **React Router v7** in **declarative mode** (`BrowserRouter` + `<Routes>` + `<Route>`). This is the canonical routing pattern.

### Key constraints

*   **No `createBrowserRouter` / `RouterProvider`** — The Figma Make proxy environment does not support React Router's "data mode" (`createBrowserRouter`) for existing projects. All routing must use the declarative `<Routes>` / `<Route>` pattern.
*   **No lazy loading** — Dynamic `import()` fails in the Figma Sites proxy. All page components must be statically imported at the top of `routes.tsx`.
*   **Single route file** — All routes are defined in `/src/app/routes.tsx`. Do not create separate route files.

### Layout nesting

Routes are grouped by layout wrapper:

```
<RootLayout>                   ← Toaster, ScrollToTop
  <MainLayout>                 ← Header + Footer
    /                          ← Home
    /kategorie/:slug           ← Category
    /e-uitgawes                ← E-Editions archive
    ...all public pages...
  </MainLayout>
  <CheckoutLayout>             ← Minimal header, no footer
    /betaal                    ← Checkout
    /bestelling-bevestiging    ← Order confirmation
  </CheckoutLayout>
  <DevLayout>                  ← Persistent sidebar, breadcrumb bar
    /ontwikkelaar              ← Dev Hub
    /ontwikkelaar/komponente   ← Component Browser
    /ontwikkelaar/wordpress    ← WordPress Migration
    ...all dev tool pages...
  </DevLayout>
  /foundations                 ← Design foundations (inside MainLayout)
</RootLayout>
```

### Adding a new route

1. Add a static import for the page component at the top of `routes.tsx`.
2. Add a `<Route>` element inside the appropriate layout group.
3. If the page needs header/footer, place it inside `<MainLayout>`.
4. If it's a dev tool page, place it as a bare route under `RootLayout` and add the `{/* PROTECTED */}` comment.
5. Update `/src/app/data/navigation.ts` with any new navigation entries.
6. Update `/guidelines/site-structure/sitemap.md` to include the new route.

## React Best Practices
*   **Functional Components**: Use `const Component = () => {}`.
*   **Types**: Explicitly type props using interfaces.
*   **Imports**:
    *   Third-party libraries first.
    *   Internal components second.
    *   Styles/Assets last.

## Page Pattern
All content pages should follow this standard structure:
```tsx
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { PAGE_FAQS } from '../data/pageFaqs';

export const ExamplePage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-[#0D1520]">
    <PageContainer breadcrumbs={[{ label: 'Page Name' }]}>
      {/* Page content */}
    </PageContainer>
    <PageFAQSection items={PAGE_FAQS} />
  </div>
);
```

### Hero Page Pattern
For pages with full-width heroes (About, Contact, Advertise, Category, Article), use the self-closing breadcrumbs-only variant:
```tsx
<div className="min-h-screen bg-white dark:bg-[#0F1923]">
  <PageContainer breadcrumbs={[{ label: 'Page Name' }]} noPadding />
  <ContentHero title="..." image="..." />
  <div className="w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)] py-8">
    {/* Page content */}
  </div>
</div>
```

### Exception
`SingleEEdition.tsx` is the only page that imports `<Breadcrumbs>` directly because it embeds them inside a sticky header toolbar.

## Data Files & Mock Content
*   **Centralized Data**: All textual content and mock data must reside in `/src/app/data/`. Do not hardcode strings in components.
*   **CPT Mock Data**: Each Custom Post Type defined in `wordpress-data-model.md` has a corresponding mock data file:
    *   `articles.ts` (Articles)
    *   `eEditions.ts` (E-Editions)
    *   `obituaries.ts` (Obituaries)
    *   `events.ts` (Events)
    *   `multimedia.ts` (Multimedia)
    *   `competitions.ts` (Competitions)
    *   `team.ts` (Team Members)
*   **Taxonomies**: All categories and tags are defined in `/src/app/data/taxonomies.ts`. Use these constants for filtering and routing.
*   **Interfaces**: All data files must implement interfaces defined in `/src/app/types.ts`.

## Navigation Data
*   All navigation link arrays are centralized in `/src/app/data/navigation.ts`.
*   **Do not** hardcode navigation arrays in components — import from the data file.
*   Exports: `HEADER_TOP_BAR_LINKS`, `HEADER_CATEGORY_BAR_LINKS`, `SOCIAL_LINKS`, `FOOTER_LINK_COLUMNS`, `FOOTER_LEGAL_LINKS`, `CATEGORY_NAVIGATION`, `TOP_NAVIGATION`, `MOBILE_CATEGORY_LINKS`, `MOBILE_SECONDARY_LINKS`, `SITEMAP_MAIN_PAGES`, `SITEMAP_CATEGORY_PAGES`, `SITEMAP_EEDITION_PAGES`, `SITEMAP_ADVERTISE_PAGES`, `SITEMAP_SUBSCRIPTION_PAGES`, `SITEMAP_ACCOUNT_PAGES`, `SITEMAP_NEWSLETTER_PAGES`, `SITEMAP_THANK_YOU_PAGES`, `SITEMAP_COMPETITION_PAGES`, `SITEMAP_LEGAL_PAGES`, `SITEMAP_SUBMIT`.

## Brand Name Rendering
*   The brand name "*Die Papier*" must **always** be rendered in **italics** within body/content text (not in navigation, headings, or UI labels).
*   In React: use `<em>Die Papier</em>` inside paragraph text, FAQ answers, descriptions, and other running prose.
*   Exceptions: Navigation links, page titles (H1/H2), breadcrumbs, footer copyright, and button labels should **not** italicise the brand name.
*   This rule applies to all page content, FAQ sections, and component descriptions site-wide.

## Language & Spelling Rules
*   **"Neem nou deel!"** — The correct Afrikaans spelling is "Neem nou deel!" (not "Neem deel now!" or any English variant). Always use "nou" (Afrikaans) instead of "now" (English) in user-facing text.
*   **"Intekenare"** — The correct spelling is "Intekenare" (not "Intekenaars"). See also Guidelines.md.
*   **"e-uitgawe" mid-sentence** — Use lowercase "e-uitgawe" / "e-uitgawes" within sentences. Capital "E-uitgawe" / "E-uitgawes" only at the start of sentences, headings, and page titles. See `/guidelines/content/pricing.md` for full nomenclature rules.
*   **Newsletter subscribe** — The canonical page heading is: **"Teken in op ons gratis nuusbrief"**. The canonical subheading is: **"Alles wat jy moet en wil weet — gratis"**.
*   **Newsletter CTA heading** — The full-width homepage newsletter CTA heading is: **"Bly op hoogte deur ons nuusbrief"** (uses "deur", not "met").
*   **Footer newsletter heading** — "Kry ons gratis nuusbrief" with button text "Nuusbrief".
*   **Intekenare contact** — The subscriber contact section uses heading "Intekenare", description "Om in te teken vir huisaflewering en vir navrae oor betalings:", phone **087 353 1291**, and email `diepapierintekening@onthedot.co.za`. See [Pricing](/guidelines/content/pricing.md) for the full approved phone numbers list.
*   **Competition badge label** — The featured competition badge reads **"LESERSKOMPETISIE"** (not "UITGELATE KOMPETISIE" — "uitgelate" means "elated/excited", which is incorrect). Secondary competition card badges use **"Wen"** (not the category name).
*   **"Beleide" → "Beleid"** — The correct singular form is **"Beleid"** (not the plural "Beleide"). Use "Beleid" for the section name, page title, navigation label, and route prefix `/beleid/*`. The old route `/beleide` is deprecated and redirected.
*   **"Sperdatum" → "Spertyd"** — Use **"Spertyd"** (not "Sperdatum" or "Sperdatums"). This applies to all labels, headings, FAQ questions, and body text site-wide.
*   **"Gereelde Vrae" → "Algemene vrae"** — The FAQ section heading is **"Algemene vrae"** (sentence case, not "Gereelde Vrae"). This applies to the `<PageFAQSection>` default title, all page headings, navigation labels, sitemap entries, SEO titles, structured data, and WordPress patterns. Note: the word "gereelde" in other contexts (e.g. "gereelde rustye", "gereelde sekuriteitsoudits") remains unchanged — only the FAQ heading changes.
*   **"ekstra blootstelling" → "bykomende blootstelling"** — Use **"bykomende blootstelling"** (not "ekstra blootstelling") in all body text and FAQ answers.
*   **"Persraad Webwerf" → "Persraad-webwerf"** — Use the hyphenated compound noun **"Persraad-webwerf"** (not "Persraad Webwerf" or "Besoek die Persraad Webwerf"). Similarly, use **"Persraad-oorsig"** (not "Persraad Oorsig"). The possessive form "Persraad se webwerf" should also be replaced with the compound noun "Persraad-webwerf". This applies to link text, labels, body text, and data files.
*   **Sentence case for headings** — All page headings and hero titles must use sentence case (only capitalise the first word and proper nouns). Example: **"Versterk jou handelsmerk met Die Papier"** (not "Versterk jou Handelsmerk met Die Papier"). Common nouns like "handelsmerk", "koerant", "nuusbrief" must be lowercase even in headings. Brand names like "Die Papier" remain capitalised and italicised.
*   **"woordlimiet" → "woordbeperking"** — Use **"woordbeperking"** (not "woordlimiet"). This applies to all body text, labels, and descriptions site-wide.
*   **No "gemeenskap" language** — Per Rule 5 in Guidelines.md, avoid "community" terms like "gemeenskap", "gemeenskapsnuus", "gemeenskapsverhale". Use "lesers", "plaaslik", "Suid-Afrika", or "leserskap" instead. Exceptions: official entity names ("Novus Gemeenskapsnuus", "Forum of Community Journalists"), official Novus Media/Holdings mission statements and charter text, and natural editorial context.
*   **"Aanlynmedia" → "Aanlyn Media"** — The compound "Aanlynmedia" must be written as two words: **"Aanlyn Media"**. Example: "Kode van Etiek vir Druk- en Aanlyn Media" (not "Druk- en Aanlynmedia"). This applies across all references to the Press Code name and similar compound terms.
*   **"ombud" → "ombudsman"** — Use **"ombudsman"** (not "ombud" or "media-ombud"). The correct label is **"Media-ombudsman"** (not "Media-ombud"). The email address is **mediaombudsman@novusmedia.co.za** (domain is `novusmedia.co.za`, not `novumedia.co.za`).
*   **"leierskap" → "leierskorps"** — Use **"leierskorps"** (not "leierskap") when referring to the leadership team. Example: "Ontmoet die Novus-leierskorps" (not "Ontmoet die Novus-leierskap").
*   **"publieke doelstellings" → "Ons doelstellings"** — In the mission section, the goals heading is **"Ons doelstellings"** (not "Publieke doelstellings" or just "Doelstellings"). The governance sub-heading remains **"Missie, waardes en doelstellings"**.
*   **Eiendom classified description** — Use **"Bemark eiendom (residensieel en kommersieel) aan aktiewe kopers en huurders."** (not "Bemark residensieel en kommersieel eiendom..."). The parenthetical form is preferred.
*   **"Alle Gebeure" → "Alle gebeure"** — Sentence case applies to archive labels and link text. Use "Alle gebeure" (not "Alle Gebeure") in navigation, sitemaps, and labels.
*   **"BEE Geloofsbriewe" → "BEE-geloofsbriewe"** — Use the hyphenated compound **"BEE-geloofsbriewe"** (not "BEE Geloofsbriewe"). The acronym "BEE" stays uppercase, followed by a hyphen and lowercase "geloofsbriewe".
*   **"transformasie-doelwitte" → "transformasiedoelwitte"** — This is one compound word with no hyphen: **"transformasiedoelwitte"** (not "transformasie-doelwitte").
*   **"Moedig" → "Dapper" (brand value)** — The brand value adjective is **"dapper"** (not "moedig"), and the noun form is **"Dapperheid"** (not "Moed"). Example: "Ons is dapper in ons joernalistiek en staan vas vir die waarheid." This does NOT apply to the verb "aanmoedig" (encourage), which remains unchanged.
*   **"te weerspieël, verteenwoordig en te dien"** — The infinitive marker "te" must appear before each verb in the series: **"te weerspieël, te verteenwoordig en te dien"** (not "te weerspieël, verteenwoordig en te dien").
*   **"detail" → "inligting"** — Use **"inligting"** (not "detail") when referring to information or particulars in body text.
*   **"werksdae" → "werkure"** — When referring to turnaround times like 24-48 hours, use **"werkure"** (working hours), not "werksdae" (working days), unless the duration specifically implies days.
*   **"publikasie" → "uitgewery"** — In the Novus Holdings description, use **"uitgewery"** (not "publikasie") when referring to the publishing industry: "...drukwerk, uitgewery, en verpakkingsvervaardiging."
*   **"tydskrif" → "publikasies"** — In the Novus Media description, use **"Die gewilde publikasies rooi rose..."** (not "Die gewilde tydskrif rooi rose..."). The word "tydskrif" (magazine, singular) is replaced with "publikasies" (publications, plural) to be more accurate.
*   **Email Links** — All email addresses in body text, FAQs, and contact sections must be clickable `mailto:` links.

## Content Integrity (CRITICAL)
*   **NEVER summarise, truncate, or paraphrase** any guideline or content file when inlining into TypeScript data files (e.g. `guidelinesContent.ts`, `contentBrowserData.ts`).
*   Every file must be reproduced **verbatim** from the source markdown. No exceptions.
*   If a file is too large for a single string constant, split it into a separate module under `/src/app/data/guidelines/` and import it.
*   This rule exists because summarisation silently corrupts production Afrikaans web content.

## Mock Data
*   All mock data should implement `WPPost` or `WCProduct` interfaces.
*   Do not hardcode data in components; import from `/src/app/data/`.

## Dark Mode Conventions
*   **CSS Variables**: All dark-mode token overrides live in the `.dark {}` block in `/src/styles/theme.css`. ShadCN components automatically pick up these tokens.
*   **Tailwind `dark:` Classes**: For hardcoded colours (e.g. `bg-[#142135]`, `text-[#D70025]`), always add the corresponding `dark:` variant alongside. Refer to the mapping in `/guidelines/design-tokens/dark-mode.md` Section 3.
*   **Page Wrappers**: Every page's outermost `<div>` must include a dark background: `bg-gray-50 dark:bg-[#0D1520]` or `bg-white dark:bg-[#0F1923]`.
*   **Cards & Surfaces**: Use `dark:bg-[#162233]` for card backgrounds, `dark:border-[#1E3044]` for borders, `dark:shadow-[0_1px_4px_rgba(0,0,0,0.3)]` for shadows.
*   **Text**: Map `text-[#142135]` → `dark:text-[#E8E8ED]`, `text-gray-600` → `dark:text-gray-400`, etc.
*   **Interactive Elements**: Hover states need `dark:hover:` overrides (e.g. `dark:hover:bg-[#1E3044]`, `dark:hover:text-[#E83050]`).
*   **Sitewide CSS**: The `@layer base` in `theme.css` provides global `.dark` rules for form elements, scrollbars, selection, `.prose`, and `<hr>` tags — these apply automatically without per-component overrides.
*   **Archive Pagination**: All archive page pagination sections must include `pb-20` (~80px) for consistent bottom spacing.