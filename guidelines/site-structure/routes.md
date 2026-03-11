# Route Inventory

**Last updated**: 2026-03-04
**Version**: 1.0
**Source**: `/src/app/routes.tsx`
**SEO Config**: `/src/app/data/routeSeoConfig.ts`

---

## Architecture

```
RouterProvider
  └─ RootLayout (ErrorBoundary + CartProvider + ThemeProvider + DevLanguageProvider + Suspense)
       ├─ Bare routes (no Header/Footer)
       ├─ DevLayout (dev tools)
       ├─ CheckoutLayout (checkout flow)
       └─ MainLayout (Header + Footer, public site)
```

## Loading Strategy

| Tier | Strategy | Routes | Rationale |
|:-----|:---------|:-------|:----------|
| 1 | Static import | Home, ArticlePage, CategoryPage, SearchResultsPage, NotFoundPage | Critical user paths, always needed |
| 2-4 | `React.lazy()` | All other ~75 routes | Code-split, loaded on demand |

---

## Route Summary

| Layout | Routes | Description |
|:-------|:------:|:------------|
| Bare | 2 | Newsletter templates (no Header/Footer) |
| DevLayout | 36 | Developer tools (all lazy-loaded) |
| CheckoutLayout | 4 | Checkout + order confirmation (AF + EN) |
| MainLayout | ~145 | Public site (categories, articles, policies, etc.) |
| **Total** | **~187** | Including redirects and legacy English paths |

---

## Bare Routes (No Layout)

| Path | Component | Notes |
|:-----|:----------|:------|
| `/templates/newsletter/tuesday` | TuesdayNewsletter | Email template preview |
| `/templates/newsletter/friday` | FridayNewsletter | Email template preview |

## Checkout Routes

| Path | Component | Notes |
|:-----|:----------|:------|
| `/betaal` | CheckoutPage | Afrikaans |
| `/bestelling-bevestiging` | OrderConfirmationPage | Afrikaans |
| `/checkout` | CheckoutPage | English alias |
| `/order-confirmation` | OrderConfirmationPage | English alias |

## Dev Tools Routes (`/ontwikkelaar/*`)

All wrapped in DevLayout. See `/guidelines/development/dev-tools-protection.md` for the full protected list.

| Path | Component | Notes |
|:-----|:----------|:------|
| `/ontwikkelaar` | DevHub | Landing page |
| `/ontwikkelaar/lansering` | LaunchChecklist | Launch checklist |
| `/ontwikkelaar/komponente` | ComponentBrowser | React components |
| `/ontwikkelaar/roetes` | RouteMap | Route visualization |
| `/ontwikkelaar/data` | DataBrowser | Mock data browser |
| `/ontwikkelaar/wordpress/*` | WordPressMigration | WP migration hub |
| `/ontwikkelaar/ontwerpstelsel/*` | DesignSystem | Design system (merged) |
| `/ontwikkelaar/tokens` | Redirect | -> `/ontwikkelaar/ontwerpstelsel` |
| `/ontwikkelaar/stylgids` | Redirect | -> `/ontwikkelaar/ontwerpstelsel` |
| `/ontwikkelaar/token-kartering` | Redirect | -> `/ontwikkelaar/ontwerpstelsel` |
| `/ontwikkelaar/afdeling-style` | SectionStyles | Section styles |
| `/ontwikkelaar/afdeling-style/:usage` | SectionStyles | Filtered by usage |
| `/ontwikkelaar/riglyne` | GuidelinesBrowser | Guidelines browser |
| `/ontwikkelaar/inhoud` | ContentBrowser | Content browser |
| `/ontwikkelaar/e-pos-voorskou` | EmailPreviews | Email previews |
| `/ontwikkelaar/stelselkonfig` | SystemConfig | System config |
| `/ontwikkelaar/beelde` | ImageAssetBrowser | Image assets |
| `/ontwikkelaar/patrone` | PatternBrowser | WP patterns |
| `/ontwikkelaar/patrone/:subfolder` | PatternBrowser | Filtered patterns |
| `/ontwikkelaar/blok-styl` | BlockStyleBrowser | Block styles |
| `/ontwikkelaar/blok-styl/:category` | BlockStyleBrowser | Filtered by category |
| `/ontwikkelaar/sjablone` | TemplateBrowser | WP templates |
| `/ontwikkelaar/sjablone/:category` | TemplateBrowser | Filtered by category |
| `/ontwikkelaar/sjablone-onderdeel` | TemplatePartBrowser | Template parts |
| `/ontwikkelaar/sjablone-onderdeel/:area` | TemplatePartBrowser | Filtered by area |
| `/ontwikkelaar/inc-map` | IncFolderBrowser | PHP includes |
| `/ontwikkelaar/ikone` | IconBrowser | Icon library |
| `/ontwikkelaar/ikone/:type` | IconBrowser | Filtered by type |
| `/ontwikkelaar/temaJson/*` | ThemeJsonViewer | theme.json viewer |
| `/ontwikkelaar/voorinstellings/*` | PresetsBrowser | Presets browser |
| `/ontwikkelaar/ollie/*` | OllieThemeReference | Ollie reference |
| `/ontwikkelaar/prototipe` | PrototypeLanding | Prototype section |
| `/ontwikkelaar/verwysings` | ReferenceLanding | Reference section |
| `/ontwikkelaar/bedrywighede` | OperationsLanding | Operations section |
| `/ontwikkelaar/e-editions-handel/*` | EEditionsCommerce | E-editions commerce |
| `/ontwikkelaar/form-builder-preview` | FormBuilderPreview | Form builder |

## Main Layout Routes (Public Site)

### Categories (14 routes)

| Afrikaans Path | English Path | Component | Category |
|:---------------|:-------------|:----------|:---------|
| `/nuus` | `/news` | CategoryPage | Nuus |
| `/sport` | — | CategoryPage | Sport |
| `/skole` | `/schools` | CategoryPage | Skole |
| `/sake` | `/business` | CategoryPage | Sake |
| `/leefstyl` | `/lifestyle` | CategoryPage | Lewenstyl |
| `/dink` | `/opinion` | CategoryPage | Dink |
| `/skolerugby` | `/schools-rugby` | CategoryPage | Skole rugby |
| `/onderwerp/:tagSlug` | `/tag/:tagSlug` | TagArchivePage | Tag archive |

### Articles (3 routes)

| Path | Component |
|:-----|:----------|
| `/artikel/:slug` | ArticlePage |
| `/artikel/demo` | ArticlePage |
| `/article/:slug` | ArticlePage (English) |

### Competitions (6 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/kompetisies` | `/competitions` | CompetitionsPage |
| `/kompetisies/:slug` | `/competitions/:slug` | CompetitionSinglePage |
| `/kompetisie-terme-en-voorwaardes` | `/competition-terms-and-conditions` | CompetitionTermsPage |

### Sponsored Content (4 routes)

| Path | Component |
|:-----|:----------|
| `/geborg` | SponsorsPage |
| `/geborg/:slug` | SponsorArchivePage |
| `/borg/:slug` | SponsorArchivePage |
| `/sponsor/:slug` | SponsorArchivePage |

### Submit (10 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/stuur-in` | `/submit` | SubmitHubPage |
| `/stuur-in/storie` | `/submit/story` | SubmitStoryPage |
| `/stuur-in/lesersbrief` | `/submit/letter-to-the-editor` | SubmitLetterPage |
| `/stuur-in/terugvoer` | `/submit/feedback` | SubmitFeedbackPage |
| `/stuur-in/shoutout` | `/submit/shoutout` | SubmitShoutoutPage |

### E-Editions (8 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/e-uitgawes` | `/e-editions`, `/latest-e-editions` | EEditionsPage |
| `/my-e-uitgawes` | `/my-e-editions` | MyEEditionsPage |
| `/e-uitgawe/:slug`, `/e-uitgawes/:slug` | `/e-edition/:id` | SingleEEditionPage |

### Informational (18 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/oor-ons` | `/about` | About |
| `/oor-ons/redaksie` | `/about/team` | TeamPage |
| `/kontak` | `/contact` | ContactPage |
| `/adverteer` | `/advertise` | Advertise |
| `/adverteer/geklassifiseerd` | `/adverteer/classifieds`, `/advertise/classifieds` | ClassifiedsPage |
| `/adverteer/vertoonadvertensies` | `/adverteer/display-advertising`, `/advertise/display-advertising` | DisplayAdvertisingPage |
| `/adverteer/pamflette` | `/adverteer/leaflets`, `/advertise/leaflets` | LeafletsPage |
| `/adverteer/geborgde-inhoud` | `/adverteer/sponsored-content`, `/advertise/sponsored-content` | SponsoredContentPage |
| `/adverteer/borgskappe` | `/adverteer/sponsorships`, `/advertise/sponsorships` | SponsorshipsPage |
| `/adverteer/bylaes` | `/adverteer/supplements`, `/advertise/supplements` | SupplementsPage |
| `/inhoudsopgawe` | `/sitemap` | SitemapPage |
| `/weer` | `/weather` | WeatherPage |
| `/verkeer` | `/traffic` | TrafficPage |

### Policies (24 routes)

All policies have both `/beleid/*` (Afrikaans) and `/policies/*` (English) paths.

| Policy | Afrikaans Slug | English Slug | Component |
|:-------|:---------------|:-------------|:----------|
| Hub | `/beleid` | `/policies` | PoliciesPage |
| Privacy | `privaatheidsbeleid` | `privacy-policy` | PrivacyPolicyPage |
| Cookies | `koekiebeleid` | `cookie-policy`, `koekiebeleid` | CookiePolicyPage |
| Terms | `terme-en-voorwaardes` | `terms-and-conditions` | TermsAndConditionsPage |
| PAIA | `paia` | `paia` | PAIAPage |
| User Rules | `gebruikersreels` | `user-rules` | UserRulesPage |
| Advertising | `advertensie-riglyne` | `advertising-guidelines` | AdvertisingGuidelinesPage |
| Press Code | `perskode` | `press-code` | PressCodePage |
| AI Policy | `ki-beleid` | `ai-policy` | AIPolicyPage |
| Comments | `kommentaarbeleid` | `comment-policy` | CommentPolicyPage |
| Returns | `terugsendingsbeleid` | `returns-policy` | ReturnsPolicyPage |
| Complaints | `klagteprosedure` | `complaints-procedure` | ComplaintsProcedurePage |

### Subscribe & Cart (8 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/inteken` | `/subscribe` | SubscribeEEdition |
| `/inteken/e-uitgawe` | `/subscribe/e-edition` | SubscribeEEdition |
| `/inteken/aflewering` | `/subscribe/delivery` | SubscribeDelivery |
| `/mandjie` | `/cart`, `/basket` | CartPage |

### FAQ, Events & Search (10 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/vrae` | `/faqs`, `/faq` | FAQPage |
| `/gebeure` | `/events` | EventsPage |
| `/gebeure/dien-in`, `/stuur-gebeurtenis-in` | `/events/submit` | SubmitEventPage |
| `/gebeure/:id` | `/events/:id` | SingleEventPage |
| `/soek` | `/search` | SearchResultsPage |

### Content Pages (8 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/doodsberrigte` | `/obituaries` | ObituariesPage |
| `/multimedia` | `/multimedia-archive` | MultimediaPage |
| `/nuusbrief-argief` | `/newsletter-archive` | NewsletterArchivePage |
| `/doodsberrigte/:slug` | `/obituaries/:slug` | SingleObituaryPage |
| `/multimedia/:slug` | `/multimedia-archive/:slug` | SingleMultimediaPage |

### Account & Newsletter (12 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/my-rekening` | `/my-account` | MyAccount |
| `/registreer` | `/register` | RegisterPage |
| `/rekening-aktivering` | `/account-activation` | AccountActivationPage |
| `/nuusbrief-inteken` | `/newsletter-subscribe` | NewsletterSubscribe |
| `/nuusbrief-inteken-bevestiging` | `/mailpoet-newsletter-subscribe-confirmation` | NewsletterConfirmationPage |
| `/nuusbrief-herbetrokkenheid` | `/mailpoet-re-engagement-page` | NewsletterReEngagementPage |
| `/nuusbrief-uitskryf-bevestiging` | `/mailpoet-unsubscribe-confirmation-page` | NewsletterUnsubscribeConfirmPage |
| `/nuusbrief-uitskryf-sukses` | `/mailpoet-unsubscribe-success-page` | NewsletterUnsubscribeSuccessPage |
| `/bestuur-my-nuusbriewe` | `/manage-my-newsletters` | ManageNewslettersPage |

### Thank You Pages (12 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/dankie-advertensie-navraag` | `/thank-you-advertising-enquiry` | ThankYouAdvertisingPage |
| `/dankie-vir-kontak` | `/thank-you-for-contacting-us` | ThankYouContactPage |
| `/dankie-vir-nuusbrief-inskrywing` | `/thank-you-for-subscribing-to-our-newsletter` | ThankYouNewsletterPage |
| `/dankie-vir-registrasie` | `/thank-you-for-your-registration` | ThankYouRegistrationPage |
| `/dankie-vir-jou-indiening` | `/thank-you-for-your-submission` | ThankYouSubmissionPage |
| `/dankie-vir-kompetisie-inskrywing` | `/thank-you-for-entering-our-competition` | ThankYouCompetitionPage |

### Utility (2 routes)

| Afrikaans Path | English Path | Component |
|:---------------|:-------------|:----------|
| `/vanlyn` | `/offline` | OfflinePage |

### Redirects (15 routes)

| From | To | Type |
|:-----|:---|:-----|
| `/beleide` | `/beleid` | Navigate replace |
| `/beleide/*` (11 policy paths) | `/beleid/*` | Navigate replace |
| `/borge` | `/geborg` | Navigate replace |
| `/borge/:slug` | `/geborg/:slug` | BorgeRedirect component |
| `/foundations` | `/ontwikkelaar/ontwerpstelsel` | Navigate replace |

### Catch-All

| Path | Component |
|:-----|:----------|
| `*` | NotFoundPage |

---

## SEO Cross-Reference

The `routeSeoConfig.ts` file provides SEO metadata for **56 Afrikaans routes**. English aliases share SEO data with their Afrikaans counterparts (handled by the `getRouteSeo()` fallback).

### Routes WITH SEO Config (56)

All Afrikaans-primary routes have dedicated SEO entries:
- Home (`/`)
- 7 categories
- 6 advertise sub-pages
- 12 policies
- 8 e-editions/subscribe
- 5 submit pages
- 6 thank-you pages
- 5 newsletter/account management
- 7 informational (about, contact, FAQ, etc.)
- 5 content pages (obituaries, multimedia, etc.)

### Routes WITHOUT SEO Config (by design)

These routes generate SEO dynamically at render time:
- `/artikel/:slug` — Article title/description from article data
- `/skrywer/:authorName` — Author name from URL param
- `/onderwerp/:tagSlug` — Tag name from URL param
- `/kompetisies/:slug` — Competition title from data
- `/geborg/:slug` — Sponsor name from data
- `/gebeure/:id` — Event title from data
- `/e-uitgawe/:slug` — Edition title from data
- `/doodsberrigte/:slug` — Obituary from data
- `/multimedia/:slug` — Media item from data
- All dev tool routes (no public SEO needed)
- All redirect routes (no indexing)
- Newsletter template previews (internal only)

### Missing SEO Entries (potential gaps)

| Route | Status |
|:------|:-------|
| `/geborg` | Has SEO data in sponsor page component |
| `/borg/:slug` | Legacy alias, shares with `/geborg/:slug` |
| All English aliases | Fall back to default SEO via `getRouteSeo()` |

---

## Bilingual URL Strategy

Die Papier uses a **dual-path** approach:
- **Primary**: Afrikaans paths (canonical, indexed by search engines)
- **Secondary**: English aliases (for legacy URLs and English-speaking visitors)

Both paths render the same component with the same Afrikaans content. In WordPress production, English paths will be handled by Nginx redirects (see `/guidelines/wordpress-migration/redirects.md`).
