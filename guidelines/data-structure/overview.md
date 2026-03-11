# Data Structure Overview

**Last updated**: 2026-03-04
**Version**: 1.1

This document outlines the data architecture for *Die Papier*. All prototype data files are located in `src/app/data/` (68 files total). For the WordPress production data model, see [WordPress Data Model](/guidelines/data-structure/wordpress-data-model.md).

### File Inventory

| Category | Files | Description |
|:---------|:------|:------------|
| Content | `articles.ts`, `categoryArticles.ts`, `articleContent.ts`, `trendingArticles.ts`, `breakingNews.ts` | Article data |
| Commerce | `eEditions.ts`, `eEditionsCommerceData.ts`, `subscriptions.ts` | E-editions & subscriptions |
| Community | `obituaries.ts`, `multimedia.ts`, `events.ts`, `competitions.ts`, `sponsors.ts` | UGC & community content |
| User | `user.ts`, `mockUserAccess.ts`, `comments.ts`, `polls.ts` | User interaction data |
| Navigation | `navigation.ts`, `header.ts`, `routeSeoConfig.ts`, `sitemap.ts`, `search.ts` | Site navigation |
| Pages | `about.ts`, `contact.ts`, `team.ts`, `notFound.ts`, `weather.ts`, `traffic.ts` | Page-specific data |
| Marketing | `marketing.ts`, `newsletter.ts`, `newsletterArchive.ts`, `newsletterOptions.ts`, `newsletterUnsubscribe.ts`, `advertising.ts`, `cookieBanner.ts` | Marketing & newsletters |
| Forms | `submit.ts`, `formEmailTemplates.ts`, `formPatternsData.ts` | Form configs |
| Policies | `policies.ts`, `policies/` (8 files) | Policy content |
| FAQs | `pageFaqs.ts` | Page-specific FAQs |
| Design | `designTokens.ts`, `heroImages.ts`, `imageAssets.ts` | Design tokens & assets |
| Dev Tools | `blockStylesData.ts`, `contentData.ts`, `devToolHeroData.ts`, `devTranslations.ts`, `guidelinesContent.ts`, `iconBrowserData.ts`, `incFolderData.ts`, `ollieThemeData.ts`, `patternBrowserData.ts`, `patternBrowserDataExtra.ts`*, `patternStatusStore.ts`, `sectionStylesData.ts`, `templateBrowserData.ts`, `templatePartBrowserData.ts`, `themeJsonData.ts`, `themeJsonPresetsData.ts`, `taxonomies.ts`, `wpFileLoader.ts`, `wpMigrationData.ts`, `globalStyleVariationsData.ts`* | Dev tool browsers |
| Config | `ads.ts`, `home.ts`, `index.ts` | Configuration & barrel exports |

\* `patternBrowserDataExtra.ts` and `globalStyleVariationsData.ts` are orphaned (zero imports) but protected by dev-tools-protection guideline.

### Size Audit (files > 50KB)

| File | Size | Consumer |
|:-----|:-----|:---------|
| `blockStylesData.ts` | ~83KB | BlockStyleBrowser (lazy) |
| `categoryArticles.ts` | ~79KB | CategoryPage (static) |
| `patternBrowserData.ts` | ~77KB | PatternBrowser (lazy) |
| `iconBrowserData.ts` | ~69KB | IconBrowser (lazy) |
| `launchChecklistData.ts` | ~62KB | LaunchChecklist (lazy) |
| `devTranslations.ts` | ~58KB | DevLayout (lazy) |

All large files are consumed by lazy-loaded routes (auto code-split) except `categoryArticles.ts` which is used by the static CategoryPage component.

## 1. Articles (`articles.ts` & `categoryArticles.ts`)

The application uses a hybrid approach for article data:
*   **`articles.ts`**: Contains curated lists for global components like `TOP_STORIES` and `LATEST_NEWS`.
*   **`categoryArticles.ts`**: Contains the full archive of articles categorized by section (Nuus, Sport, etc.).

### Article Interface
```typescript
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string; // Must match one of the main categories (Nuus, Sport, etc.)
  tags?: string[];  // Optional tags for sub-categorization (e.g., ["Rugby", "Skolesport"])
  featured?: boolean; // If true, article appears in the category archive hero slider
  date: string;     // Format: "DD MMM YYYY"
  author: string;   // Should match a TeamMember name if possible
  imageUrl: string; // Unsplash URL or figma:asset path
  readTime: string; // e.g., "4 min"
}
```

### Featured Articles
*   Articles with `featured: true` are displayed in the category archive hero slider (see [Content Components](/guidelines/components/content-components.md)).
*   Use `getFeaturedArticles(category)` from `categoryArticles.ts` to filter.
*   If no articles are flagged as featured, the first article in the category is used as the single hero.
*   Non-featured articles appear in the paginated list below the hero.

### Tagging Strategy
*   Tags are used to generate the Tag Archive pages (`/onderwerp/:tagSlug`).
*   Tags should be consistent across articles (e.g., always "Rugby", never "rugby" or "Rugby Union").
*   The `getArticlesByTag` helper function in `categoryArticles.ts` aggregates articles from all sources and filters by tag (case-insensitive).

## 2. Team (`team.ts`)

Contains the staff profiles for the "Ons span" page.

### TeamMember Interface
```typescript
interface TeamMember {
  id: string;       // Kebab-case ID (e.g., "barnard-beukman")
  name: string;     // Full name
  role: string;     // Job title (e.g., "Redakteur")
  bio: string;      // Short biography
  email: string;    // Contact email
  image: string;    // Profile image URL
}
```

## 3. Obituaries (`obituaries.ts`)

Contains obituary records for the Doodsberrigte section. Each obituary includes a portrait photo, biographical text, and funeral details. Currently contains **15 records**.

*   **Archive page**: `/doodsberrigte` — paginated list (10 per page) with sidebar promo + ad slots
*   **Single page**: `/doodsberrigte/:slug` — full obituary with biography, survived-by, funeral details

### Obituary Interface
```typescript
interface Obituary {
  id: number;
  slug: string;           // URL-safe slug (e.g., "dr-cornelius-johannes-van-der-merwe")
  name: string;           // Full name with title
  age: number;
  dateOfBirth: string;    // "DD Maand JJJJ" (Afrikaans month names)
  dateOfDeath: string;
  location: string;
  imageUrl: string;       // Portrait photo (Unsplash)
  excerpt: string;        // One-line summary for list view
  biography: string;      // Full multi-paragraph biography
  survived_by: string;    // Family members surviving
  funeral_details: string;
  published: string;      // Publication date
}
```

### Helper Functions
*   `getObituaryBySlug(slug)` — find by URL slug
*   `getObituaryById(id)` — find by numeric ID

## 4. Multimedia (`multimedia.ts`)

Contains all multimedia content (videos, photo galleries, podcasts) with categories. Each item has a slug for its single page. Currently contains **8 videos, 9 photo galleries, 9 podcasts** (26 total).

*   **Archive page**: `/multimedia` — tab-based view by category with per-tab pagination (6 per page) + ad slots
*   **Single page**: `/multimedia/:slug` — full content page with description, tags, related items + ad slots

### MultimediaItem Interface
```typescript
type MultimediaCategory = 'Video' | 'Fotogalery' | 'Podcast';

interface MultimediaItem {
  id: number;
  slug: string;
  title: string;
  category: MultimediaCategory;
  description: string;    // Multi-paragraph description
  imageUrl: string;
  time: string;           // Relative time (e.g., "2 dae gelede")
  published: string;      // Date string
  author: string;         // Author name
  duration?: string;      // For videos & podcasts
  views?: number;         // For videos
  photoCount?: number;    // For photo galleries
  episode?: string;       // For podcasts
  tags: string[];         // Content tags
}
```

### Helper Functions
*   `getMultimediaBySlug(slug)` — find by URL slug
*   `getMultimediaById(id)` — find by numeric ID
*   `getMultimediaByCategory(category)` — filter by category type

### Backward-compatible Exports
For pages that still use the old structure:
*   `VIDEO_CONTENT` — filtered to category 'Video'
*   `PHOTO_GALLERIES` — filtered to category 'Fotogalery'
*   `PODCASTS` — filtered to category 'Podcast'
*   `MULTIMEDIA_CATEGORIES` — array of `{ id, label, slug }` for tab rendering

## 5. Events (`events.ts`)

Contains events data for the Gebeure section. Each event links to `/gebeure/:id`. Currently contains **18 events** across categories: Gemeenskap, Sport, Kuns, Sake, Mark, Literatuur, Kos.

*   **Archive page**: `/gebeure` — paginated list (8 per page) with category filter + ad slots
*   **Single page**: `/gebeure/:id` — full event detail with map placeholder + ad slots

## 6. Competitions (`competitions.ts`)

Contains all competition data for the Kompetisies section. Each competition has per-competition FAQs, rules, sponsor details, and entry form configuration.

*   **Archive page**: `/kompetisies` — tabbed view (Aktief / Vorige) with pagination (6 per page) + sidebar
*   **Single page**: `/kompetisies/:slug` — full competition with countdown timer, entry form, FAQ accordion, sponsor spotlight, rules, and "Meer Kompetisies" strip
*   **Thank you page**: `/dankie-vir-kompetisie-inskrywing`
*   **T&C page**: `/kompetisie-terme-en-voorwaardes`

### Competition Interface
```typescript
interface Competition {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  prize: string;
  prizeValue: string;
  sponsor: string;
  sponsorLogo?: string;
  imageUrl: string;
  openDate: string;
  closingDate: string;
  winnerAnnouncementDate: string;
  status: 'active' | 'closed' | 'winner-announced';
  winner?: { name: string; location: string };
  rules: string[];
  category: string;
  faqs?: { id: string; question: string; answer: string }[];
  // SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}
```

### Helper Functions
*   `getCompetitionBySlug(slug)` — find by URL slug
*   `getActiveCompetitions()` — filter active competitions
*   `getClosedCompetitions()` — filter closed / winner-announced competitions

### Components
*   `CompetitionStatusBadge` — Reusable badge for active/closed/winner status (green pulse, gray, amber trophy)
*   `CompetitionSinglePage` — Full template with countdown timer, how-to-enter steps, entry form, sponsor spotlight, per-competition FAQ, and related competitions strip

## 7. Navigation (`navigation.ts`)

Centralized navigation arrays. See [Coding Standards](/guidelines/development/coding-standards.md) for the full export list.

## 8. UI & Content Strings

To support the brand's Afrikaans-first policy and strict styling guidelines, all hardcoded text in components is moved to specific data files:

*   **`contact.ts`**: Labels, placeholders, validation messages, and success states for contact forms.
*   **`comments.ts`**: UI strings for the comments section (logged in/out states, buttons, moderation notices) and mock comment data.
*   **`uiStrings.ts`**: Shared UI labels like access gate indicators ("Preview + Access Gate").
*   **`notFound.ts`**: Content for the 404 page (headings, descriptions, button labels, popular links).
*   **`marketing.ts`**: Content for marketing social cards and banners.
*   **`newsletter.ts`**: Content for Newsletter CTA and Modals.
*   **`cookieBanner.ts`**: Text and links for the Cookie Consent banner.
*   **`header.ts`**: UI strings for the Header, Search, and Shopping Cart.

## 9. FAQ Data (`pageFaqs.ts`)

FAQ items organized by page. See [FAQ Sections](/guidelines/components/faq-sections.md) for the full coverage table.

## 10. Categories

The main categories are hardcoded in the routing structure but reflect the keys in `CATEGORY_ARTICLES`:
*   Nuus
*   Sport
*   Sake
*   Leefstyl
*   Dink (Opinion)
*   Skole
*   Skole rugby
*   Kompetisies

## 11. Updates & Maintenance

*   **Adding Articles**: Add to the relevant array in `categoryArticles.ts`. If it's a top story, also add/update `TOP_STORIES` in `articles.ts`.
*   **Adding Tags**: Simply add the string to the `tags` array of an article. The Tag Archive page handles new tags dynamically.
*   **Adding Obituaries**: Add a new entry to `OBITUARIES` in `obituaries.ts` with a unique `id`, `slug`, and portrait `imageUrl`.
*   **Adding Multimedia**: Add a new entry to `MULTIMEDIA_ITEMS` in `multimedia.ts`. The backward-compatible exports update automatically.
*   **Adding Competitions**: Add a new entry to `COMPETITIONS` in `competitions.ts`. Include `faqs` array with at least the `DEFAULT_FAQS`.
*   **Authors**: Ensure author names match exactly to facilitate cross-linking (future feature).

## 12. Footer Legal Links

The footer bottom row of legal links is defined in `FOOTER_LEGAL_LINKS` (in `navigation.ts`):
*   Inhoudsopgawe
*   Beleid
*   Privaatheidsbeleid
*   Terme en Voorwaardes

## 13. WordPress Data Model

For the production WordPress backend, see [WordPress Data Model](/guidelines/data-structure/wordpress-data-model.md) which defines:
*   **Custom Post Types**: `dp_e_edition`, `dp_obituary`, `dp_event`, `dp_multimedia`, `dp_competition`, `dp_team_member`
*   **Custom Taxonomies**: `dp_event_category`, `dp_competition_category`, `dp_multimedia_category`, `dp_content_tag`
*   **Custom Fields**: SCF (Secure Custom Fields) field groups per CPT
*   **REST API**: Endpoints for headless React frontend