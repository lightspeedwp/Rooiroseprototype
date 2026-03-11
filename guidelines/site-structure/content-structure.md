# Content Structure

**Last updated**: 2026-03-02
**Version**: 1.0

## 1. Homepage (Tuis)
*   **Breaking News Bar**: Latest updates.
*   **Hero Section**:
    *   **Lead Story**: Large image, H2 title, Excerpt.
    *   **Sub-Lead**: Smaller image, H3 title.
*   **Category Feeds** (Nuus, Sport, Sake, etc.):
    *   Latest posts per category.
*   **Multimedia/Events**:
    *   Upcoming events (`/gebeure`) and multimedia highlights.
*   **E-uitgawes Carousel**:
    *   Latest digital editions.

## 2. Archive Pages (Nuus, Sport, etc.)
*   **Header**: Category Name.
*   **Featured Category Post**: 1x Large layout. Can be a **slider** of featured articles (articles tagged with `featured: true`). When multiple featured articles exist, render a carousel; when only one or zero, fall back to single hero article. All 8 categories now have exactly 3 featured articles each: Nuus, Skole, Sport, Sake, Lewenstyl, Dink, Skole rugby, and Kompetisies.
*   **List/Grid**: Paginated list of remaining posts (Grid of 3).
*   **Sidebar**: Standard widgets (Ads, Newsletter, Trending).
*   **Bottom Padding**: All archive pages must include `pb-20` (~80px) below pagination for consistent spacing before footer/FAQ.

## 3. Single Article (`/artikel/:slug`)
*   **Breadcrumbs**: Tuis > Category > Post Title.
*   **Headline**: H1 (Sentence case).
*   **Byline**: Author Image, Name, Date.
*   **Featured Image**: Full width or standard.
*   **Body**: Blocks (Paragraph, Image, Quote, List).
*   **Related Articles**: 3 posts from same category.
*   **Route**: Must use `/artikel/` prefix.

## 4. Team Page (`/oor-ons/redaksie`)
*   **Structure**: Split into two distinct sections.
    1.  **Redaksioneel (Editorial)**: Senior staff (Redakteur, Nuusredakteur, etc.). 3-column grid.
    2.  **Verslaggewers (Reporters)**: Reporting staff. 3-column grid.
*   **Card Data**: Photo, Name, Role, Bio, Email.

## 5. Policy Pages (`/beleid/*`)
*   **Hub Page**: Grid layout linking to specific policies.
*   **Specific Policies**: Text-heavy legal documents (PAIA, Privacy, Terms).

## 6. E-Commerce
*   **Product**: Digital Edition (PDF).
*   **Checkout Flow**: Cart -> Checkout -> Confirmation (all in Afrikaans).

## 7. Advertise Pages (`/adverteer/*`)
*   **Hub Page** (`/adverteer`): Landing page with 11 ad-option cards (6 link to sub-pages, 5 scroll to inquiry form), a leaflet feature banner, "Waarom Die Papier?" benefits section, and a contact form with sidebar.
*   **Sub-Pages** (6 total): Each sub-page follows a consistent layout:
    *   **Breadcrumbs**: Tuis > Adverteer > Sub-page title.
    *   **ContentHero**: Background image, H1 title, subtitle.
    *   **Intro paragraph**: Centered, max-w-3xl.
    *   **Content sections**: Category grids, pricing tiers, specs, process steps, distribution areas (varies per page).
    *   **CTA block**: Navy background, heading, call-to-action buttons linking back to `/adverteer#contact-form`.
    *   **Back link**: "Terug na Adverteer-oorsig" at bottom.
*   **Sub-page inventory**:
    *   `/adverteer/geklassifiseerd` — Categories, pricing tiers (Standaard/Uitgebrei/Premium), how-it-works steps, deadlines.
    *   `/adverteer/vertoonadvertensies` — Print ad sizes (6 options), digital ad formats (6 options), tech specs (CMYK/RGB).
    *   `/adverteer/pamflette` — Distribution areas (6 regions with copy counts), paper specs, minimum order requirements.
    *   `/adverteer/geborgde-inhoud` — 4 content types, engagement stats, 6-step editorial process, editorial standards.
    *   `/adverteer/borgskappe` — 4 sponsorship types (section, event, newsletter, custom), mock success stories.
    *   `/adverteer/bylaes` — 4 supplement types, full-service package, timeline, print specs.

## 8. Weather & Traffic Pages
*   **Weer** (`/weer`): 6 SA cities with mock weather data, weekly forecast, weather map placeholder.
*   **Verkeer** (`/verkeer`): Mock traffic incidents with severity filtering, route status cards.

## 9. Doodsberrigte (Obituaries)
*   **Archive Page** (`/doodsberrigte`): List of all obituaries with portrait photos, name, excerpt, date, location. Each card links to the single obituary page. Info banner for submitting obituaries.
*   **Single Page** (`/doodsberrigte/:slug`): Two-column layout.
    *   **Main column**: Navy header banner with portrait photo + name + life dates. Biography (multi-paragraph), "Nagelate Familie" section, "Begrafnisbesonderhede" section. Share/print bar.
    *   **Sidebar**: "Medelye oordra" CTA, "Plaas 'n doodsberig" info box, other obituaries list with photos.
*   **Data**: `obituaries.ts` — each entry has slug, portrait imageUrl, full biography, survived_by, funeral_details.

## 10. Multimedia
*   **Archive Page** (`/multimedia`): Tab-based layout with 3 categories (Video's, Fotogalerye, Podcasts). Each item links to single page.
*   **Single Page** (`/multimedia/:slug`): Two-column layout.
    *   **Main column**: Hero image with play overlay (video/podcast) or photo count (gallery). Category badge, title, author link, date, views. Multi-paragraph description. Tags with links to `/onderwerp/:tagSlug`. Share/back bar.
    *   **Sidebar**: Related items from same category, other multimedia items from different categories.
*   **Categories**: `MULTIMEDIA_CATEGORIES` array with `{ id, label, slug }`.
*   **Data**: `multimedia.ts` — unified `MultimediaItem` interface with backward-compatible exports (`VIDEO_CONTENT`, `PHOTO_GALLERIES`, `PODCASTS`).

## 11. Newsletter Management Pages
*   **Nuusbrief Inteken** (`/nuusbrief-inteken`): Two-column layout, single-list subscribe form, "Waarom inteken?" sidebar.
*   **Bestuur My Nuusbriewe** (`/bestuur-my-nuusbriewe`): Newsletter preference management (future MailPoet integration).
*   **Account management pages**: Activation, confirmation, re-engagement, unsubscribe flow (future MailPoet wiring).

## 12. Competitions (`/kompetisies`)
*   **Archive Page** (`/kompetisies`): Tabbed layout (Aktief/Vorige) with pagination (6 per page). Two-column with sidebar (300px). `CompetitionStatusBadge` on each card. Tab styling: active tab uses `#D70025`, closed tab uses `#142135`.
*   **Single Page** (`/kompetisies/:slug`): Two-column layout.
    *   **Main column**:
        1.  **Hero image** with gradient overlay, `CompetitionStatusBadge` (lg), and H1 title.
        2.  **Key Details Card**: 6-field grid (Prize, Value, Sponsor, Open Date, Closing Date, Winner Announcement).
        3.  **Countdown Timer**: Navy background, 3 digit boxes (Dae/Ure/Min). Active competitions only.
        4.  **Winner Announcement**: Green card (if status is `winner-announced`).
        5.  **How to Enter**: 4-step visual guide (icons + numbered circles). Active competitions only.
        6.  **Entry Form**: Name, surname, email, phone, answer question, T&C checkbox, submit button. Active competitions only.
        7.  **Sponsor Spotlight**: Sponsor monogram + name + description card.
        8.  **Competition Rules**: Numbered list + link to full T&C.
        9.  **Competition FAQ**: Per-competition accordion (data from `competition.faqs[]`).
        10. **Social Share**: Share buttons.
    *   **Sidebar** (300px):
        *   "Skryf Nou In" CTA button (scrolls to form, active only).
        *   T&C info card with link.
        *   Active competitions list (sidebar cards).
        *   Ad slot (MediumRectangle).
        *   Previous competitions list.
        *   Additional ads.
    *   **Full-width "Meer Kompetisies" strip**: Below PageContainer, shows up to 3 related active competitions.
*   **T&C Page** (`/kompetisie-terme-en-voorwaardes`): Static legal document.
*   **Components**:
    *   `CompetitionStatusBadge` — `/src/app/components/common/CompetitionStatusBadge.tsx` (sizes: `sm`, `lg`).

## 13. Algemene vrae (FAQ) Page (`/vrae`)
*   **Structure**: Sectioned accordion layout with sticky sidebar table of contents.
*   **Sections** (5 tab-like categories):
    1.  **Meer oor *Die Papier*** — General questions about the publication.
    2.  **Lees die e-koerant** — Digital edition / online reading questions.
    3.  **Adverteer in *Die Papier*** — Advertising enquiry questions.
    4.  **Meer oor die redaksie** — Editorial team questions.
*   **Brand name rule**: All occurrences of "Die Papier" in FAQ content must be rendered in italics (`<em>`).
*   **Data**: FAQ content is hardcoded in `FAQPage.tsx` (not in `pageFaqs.ts`, since the FAQ page has a distinct layout from the per-page `<PageFAQSection>` accordion).