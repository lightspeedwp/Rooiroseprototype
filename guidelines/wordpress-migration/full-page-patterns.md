# Full Page Patterns Strategy

**Last updated**: 2026-02-24
**Version**: 1.0
**Theme Pattern Files**: 70 total

The "Die Papier" theme uses a **Full Page Pattern** architecture. This strategy decouples the page layout from the template hierarchy, allowing editors to modify entire page compositions without editing PHP template files.

## Concept

Instead of hardcoding layout grids and hero sections into `page.html` or `front-page.html`, these templates are kept minimal. They serve only as containers for:
1.  The Header Template Part.
2.  A single "Full Page Pattern" block.
3.  The Footer Template Part.

### Benefits
*   **Editor Control**: The entire page layout (including the hero) is available in the Site Editor.
*   **Portability**: Patterns can be exported/imported easily.
*   **Maintainability**: Template files remain clean and semantic.

## Implementation

### 1. Template File (`/templates/page.html`)
The template file is a simple wrapper:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/page-default"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### 2. Pattern File (`/patterns/page-home.php`)
The pattern file contains the actual block markup for the page content:

```php
<?php
/**
 * Title: Homepage Layout
 * Slug: die-papier/page-home
 * Categories: pages, layout
 * Keywords: home, landing
 */
?>
<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">
    <!-- wp:die-papier/hero-home {"title":"Die Papier","subtitle":"Jou Nuus, Jou Taal"} /-->
    
    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">
        <!-- wp:column {"width":"70%"} -->
        <div class="wp-block-column" style="flex-basis:70%">
            <!-- wp:query {"queryId":1,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
            <div class="wp-block-query">
                <!-- wp:post-template -->
                <!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}}} -->
                <div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)">
                    <!-- wp:post-title {"isLink":true} /-->
                    <!-- wp:post-excerpt /-->
                </div>
                <!-- /wp:group -->
                <!-- /wp:post-template -->
            </div>
            <!-- /wp:query -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"width":"30%"} -->
        <div class="wp-block-column" style="flex-basis:30%">
            <!-- wp:template-part {"slug":"sidebar"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->
```

## Complete Pattern Inventory

### Page Patterns (Static Pages)

| # | Pattern Name | Slug | Content Source | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Homepage** | `die-papier/page-home` | `/content/pages/home.md` | `Home.tsx` | P0 |
| 2 | **About Us** | `die-papier/page-about` | `/content/pages/about.md` | `About.tsx` | P1 |
| 3 | **Contact** | `die-papier/page-contact` | `/content/pages/contact.md` | `Contact.tsx` | P1 |
| 4 | **Advertise** | `die-papier/page-advertise` | `/content/pages/advertise.md` | `Advertise.tsx` | P1 |
| 5 | **Subscriptions** | `die-papier/page-subscriptions` | `/content/pages/subscriptions.md` | `SubscribeEEdition.tsx` | P1 |
| 6 | **Subscribe: Delivery** | `die-papier/page-subscribe-delivery` | `/content/pages/subscribe-delivery.md` | `SubscribeDelivery.tsx` | P1 |
| 7 | **Subscribe: E-Edition** | `die-papier/page-subscribe-eedition` | `/content/pages/subscribe-eedition.md` | `SubscribeEEdition.tsx` | P1 |
| 8 | **FAQ** | `die-papier/page-faq` | `/content/pages/faq.md` | `FAQPage.tsx` | P2 |
| 9 | **Team** | `die-papier/page-team` | `/content/pages/team.md` | `Team.tsx` | P2 |
| 10 | **Sitemap** | `die-papier/page-sitemap` | `/content/pages/sitemap.md` | `Sitemap.tsx` | P3 |
| 11 | **Weather** | `die-papier/page-weather` | `/content/pages/weather.md` | `Weather.tsx` | P3 |
| 12 | **Traffic** | `die-papier/page-traffic` | `/content/pages/traffic.md` | `Traffic.tsx` | P3 |

### Archive Patterns (Query Loops)

| # | Pattern Name | Slug | Template | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 13 | **Default Archive** | `die-papier/archive-default` | `archive.html` | `Category.tsx` | P0 |
| 14 | **Events Archive** | `die-papier/archive-events` | `archive-dp_event.html` | `Events.tsx` | P1 |
| 15 | **Obituaries Archive** | `die-papier/archive-obituaries` | `archive-dp_obituary.html` | `Obituaries.tsx` | P1 |
| 16 | **Multimedia Archive** | `die-papier/archive-multimedia` | `archive-dp_multimedia.html` | `Multimedia.tsx` | P2 |
| 17 | **Competitions Archive** | `die-papier/archive-competitions` | `archive-dp_competition.html` | `Competitions.tsx` | P2 |
| 18 | **Sponsor Archive** | `die-papier/archive-sponsors` | `archive-dp_sponsor.html` | `SponsorArchive.tsx` | P3 |
| 19 | **E-Editions Archive** | `die-papier/archive-eeditions` | (page) | `EEditions.tsx` | P1 |
| 20 | **Newsletter Archive** | `die-papier/archive-newsletters` | (page) | `NewsletterArchive.tsx` | P3 |
| 21 | **Author Archive** | `die-papier/archive-author` | `author.html` | `Author.tsx` | P2 |
| 22 | **Tag Archive** | `die-papier/archive-tag` | `tag.html` | `TagArchive.tsx` | P2 |
| 23 | **Search Results** | `die-papier/archive-search` | `search.html` | `SearchResults.tsx` | P1 |

### Single Post Patterns (Detail Pages)

| # | Pattern Name | Slug | Template | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 24 | **Single Article** | `die-papier/single-post` | `single.html` | `Article.tsx` | P0 |
| 25 | **Single Event** | `die-papier/single-event` | `single-dp_event.html` | `SingleEvent.tsx` | P1 |
| 26 | **Single Obituary** | `die-papier/single-obituary` | `single-dp_obituary.html` | `SingleObituary.tsx` | P1 |
| 27 | **Single Multimedia** | `die-papier/single-multimedia` | `single-dp_multimedia.html` | `SingleMultimedia.tsx` | P2 |
| 28 | **Single Competition** | `die-papier/single-competition` | `single-dp_competition.html` | `CompetitionSingle.tsx` | P2 |

### Auth & Account Patterns

| # | Pattern Name | Slug | Content Source | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 29 | **Login/Register** | `die-papier/page-auth` | `/content/pages/register.md` | `Register.tsx` | P1 |
| 30 | **My Account** | `die-papier/page-my-account` | `/content/pages/my-account.md` | `MyAccount.tsx` | P1 |
| 31 | **My E-Editions** | `die-papier/page-my-eeditions` | `/content/pages/my-eeditions.md` | `MyEEditions.tsx` | P2 |
| 32 | **Cart** | `die-papier/page-cart` | `/content/pages/cart.md` | `Cart.tsx` | P1 |
| 33 | **Checkout** | `die-papier/page-checkout` | `/content/pages/checkout.md` | `Checkout.tsx` | P1 |
| 34 | **Account Activation** | `die-papier/page-activation` | `/content/pages/account-activation.md` | `AccountActivation.tsx` | P2 |

### Submission Patterns

| # | Pattern Name | Slug | Content Source | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 35 | **Submit Hub** | `die-papier/page-submit-hub` | `/content/pages/submit-hub.md` | `SubmitHub.tsx` | P2 |
| 36 | **Submit Event** | `die-papier/page-submit-event` | `/content/pages/submit-event.md` | `SubmitEvent.tsx` | P2 |

### Newsletter Patterns

| # | Pattern Name | Slug | Content Source | React Equivalent | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 37 | **Newsletter Subscribe** | `die-papier/page-newsletter` | `/content/pages/newsletter.md` | `NewsletterSubscribe.tsx` | P1 |
| 38 | **Newsletter Manage** | `die-papier/page-newsletter-manage` | `/content/pages/newsletter-manage.md` | `ManageNewsletters.tsx` | P2 |
| 39 | **Newsletter Confirm** | `die-papier/page-newsletter-confirm` | `/content/pages/newsletter-confirmation.md` | `NewsletterConfirmation.tsx` | P2 |
| 40 | **Newsletter Unsubscribe** | `die-papier/page-newsletter-unsub` | `/content/pages/newsletter-unsubscribe.md` | `NewsletterUnsubscribeConfirm.tsx` | P2 |
| 41 | **Newsletter Re-engage** | `die-papier/page-newsletter-reengage` | `/content/pages/newsletter-re-engagement.md` | `NewsletterReEngagement.tsx` | P3 |

### Thank You Patterns (shared template)

| # | Pattern Name | Slug | Content Source | Priority |
| :--- | :--- | :--- | :--- | :--- |
| 42 | **Thank You: Contact** | `die-papier/thankyou-contact` | `/content/pages/thank-you-contact.md` | P2 |
| 43 | **Thank You: Newsletter** | `die-papier/thankyou-newsletter` | `/content/pages/thank-you-newsletter.md` | P2 |
| 44 | **Thank You: Registration** | `die-papier/thankyou-registration` | `/content/pages/thank-you-registration.md` | P2 |
| 45 | **Thank You: Competition** | `die-papier/thankyou-competition` | `/content/pages/thank-you-competition.md` | P2 |
| 46 | **Thank You: Submission** | `die-papier/thankyou-submission` | `/content/pages/thank-you-submission.md` | P2 |
| 47 | **Thank You: Advertising** | `die-papier/thankyou-advertising` | `/content/pages/thank-you-advertising.md` | P2 |
| 48 | **Order Confirmation** | `die-papier/thankyou-order` | `/content/pages/order-confirmation.md` | P1 |

### Policy Patterns (shared template)

All 11 policy pages use the `die-papier/page-policy` pattern (title + long-form content + TOC sidebar):

| # | Pattern Name | Slug | Content Source |
| :--- | :--- | :--- | :--- |
| 49 | **Privacy Policy** | `die-papier/policy-privacy` | `/content/policies/privacy-policy.md` |
| 50 | **Terms & Conditions** | `die-papier/policy-terms` | `/content/policies/terms-conditions.md` |
| 51 | **Cookie Policy** | `die-papier/policy-cookie` | `/content/policies/cookie-policy.md` |
| 52 | **PAIA Manual** | `die-papier/policy-paia` | `/content/policies/paia.md` |
| 53 | **User Rules** | `die-papier/policy-user-rules` | `/content/policies/user-rules.md` |
| 54 | **Advertising Guidelines** | `die-papier/policy-advertising` | `/content/policies/advertising-guidelines.md` |
| 55 | **Press Code** | `die-papier/policy-press-code` | `/content/policies/press-code.md` |
| 56 | **AI Policy** | `die-papier/policy-ai` | `/content/policies/ai-policy.md` |
| 57 | **Comment Policy** | `die-papier/policy-comments` | `/content/policies/comment-policy.md` |
| 58 | **Returns Policy** | `die-papier/policy-returns` | `/content/policies/returns-policy.md` |
| 59 | **Complaints Procedure** | `die-papier/policy-complaints` | `/content/policies/complaints.md` |

### Utility Patterns

| # | Pattern Name | Slug | Content Source | Priority |
| :--- | :--- | :--- | :--- | :--- |
| 60 | **404 Not Found** | `die-papier/page-404` | `/content/pages/404.md` | P0 |
| 61 | **Offline** | `die-papier/page-offline` | `/content/pages/offline.md` | P3 |
| 62 | **Competition Terms** | `die-papier/page-competition-terms` | `/content/pages/competition-terms.md` | P2 |

**Total: 62 patterns**

---

## Reusable Section Patterns (Partial Patterns)

These are smaller, reusable pattern fragments used within full-page patterns:

| Pattern Name | Slug | Description |
| :--- | :--- | :--- |
| **Newsletter CTA (Inline)** | `die-papier/section-newsletter-cta` | Inline newsletter signup box. |
| **Newsletter CTA (Full)** | `die-papier/section-newsletter-cta-full` | Full-width newsletter CTA. |
| **FAQ Accordion** | `die-papier/section-faq` | Accordion FAQ section for any page. |
| **Sponsor Banner** | `die-papier/section-sponsor-banner` | Single sponsor logo bar. |
| **Sponsor Grid** | `die-papier/section-sponsor-grid` | Grid of sponsor logos by tier. |
| **Related Articles** | `die-papier/section-related-articles` | 3-column grid of related posts. |
| **Content Hero** | `die-papier/section-content-hero` | Reusable hero with title + subtitle. |
| **CTA Card** | `die-papier/section-cta-card` | Generic call-to-action card. |
| **Breadcrumbs** | `die-papier/section-breadcrumbs` | Breadcrumb navigation row. |
| **Share Buttons** | `die-papier/section-share` | Social sharing buttons. |
| **Pricing Table** | `die-papier/section-pricing-table` | Pricing tier comparison columns. |
| **Team Grid** | `die-papier/section-team-grid` | Team member cards in grid layout. |
| **Subscription CTA** | `die-papier/section-subscription-cta` | Navy banner with value proposition, feature bullets, plan summary sidebar. Uses `dp/subscription-cta` custom block. Conditionally hidden for users with active membership. |
| **Subscription CTA (Sidebar)** | `die-papier/section-subscription-cta-sidebar` | Compact navy sidebar widget version. No plan summary, text-only CTA. Does not display specific pricing (per pricing.md rule 8). |

## Detailed Specifications

### Homepage (`page-home`)
**React Source**: `/src/app/pages/Home.tsx`
**WP Pattern File**: `patterns/page-home.php`
**WP Template**: `page-home.html` (Front Page)
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Takeover Rails | `TakeoverRails` | Custom Block / Ad | Optional, desktop only |
| Header Ad | `LeaderboardAd` | `advanced-ads/ad-block` | Placement: `dp-header-leaderboard` |
| Breaking News | `BreakingNews` | `die-papier/breaking-news` | Dynamic ticker |
| Hero Slider | `HeroSlider` | `die-papier/hero-home` | Pattern using `dp/slider` + Query Loop |
| Feature Grid | `FeatureGrid` | `core/query` | Layout: Feature Grid |
| Nuus Category | `CategorySection` | `core/query` | Category: Nuus |
| Sport Category | `CategorySection` | `core/query` | Category: Sport |
| Middle Ad 1 | `LeaderboardAd` | `advanced-ads/ad-block` | Placement: `dp-mid-leaderboard-1` |
| Skole Category | `CategorySection` | `core/query` | Category: Skole |
| Sponsored Feed | `SponsoredInFeed` | Custom Block | Sponsored content injection |
| Lewenstyl (Sidebar) | `SidebarCategorySection` | `core/query` | Layout: Sidebar list |
| Dink Category | `CategorySection` | `core/query` | Category: Dink |
| Middle Ad 2 | `LeaderboardAd` | `advanced-ads/ad-block` | Placement: `dp-mid-leaderboard-2` |
| Sidebar: E-Edition | `ImageWithFallback` + Link | `core/group` | Custom card design |
| Sidebar: Ad Top | `MediumRectangleAd` | Custom Block / Ad | Position: sidebar-top |
| Sidebar: Poll | `Poll` | `die-papier/poll` | Dynamic poll block |
| Sidebar: Ad Mid | `MediumRectangleAd` | Custom Block / Ad | Position: sidebar-middle |
| Sidebar: Competition | `Link` + Image | `core/query` | Single competition card |
| Sidebar: Delivery | `Link` + Icon | `core/group` | CTA banner |
| Sidebar: Ad Bot | `SidebarAds` | `advanced-ads/ad-block` | Placement: `dp-sidebar-mrec` |
| Quote Slider | `QuoteSlider` | `die-papier/brand-quotes` | Pattern using `dp/slider` |
| Multimedia | `MultimediaSection` | `core/query` | Post Type: dp_multimedia |
| Lower Ad | `LeaderboardAd` | `advanced-ads/ad-block` | Placement: `dp-mid-leaderboard-3` |
| Obituaries | `ObituariesSection` | `core/query` | Post Type: dp_obituary |
| Events | `EventsSection` | `core/query` | Post Type: dp_event |
| Archive Link | `ArchiveSection` | `core/group` | Navigation links |
| Newsletter | `NewsletterCTA` | `die-papier/newsletter` | Gravity Forms integration |
| Mobile Footer Ad | `StickyMobileFooter` | Custom Block / Ad | Sticky ad unit |

#### 2. PHP Parameters
| Parameter | Type | Default | Description | Block Attribute |
|-----------|------|---------|-------------|----------------|
| `show_takeover` | boolean | false | Enable takeover rails ad | `showTakeover` |
| `show_breaking_news` | boolean | true | Show breaking news ticker | `showBreakingNews` |
| `featured_category_id` | number | 0 | ID for Hero/Feature grid source | `featuredCategoryId` |
| `nuus_category_id` | number | 0 | ID for Nuus section | `nuusCategoryId` |
| `sport_category_id` | number | 0 | ID for Sport section | `sportCategoryId` |
| `skole_category_id` | number | 0 | ID for Skole section | `skoleCategoryId` |
| `lewenstyl_category_id` | number | 0 | ID for Lewenstyl section | `lewenstylCategoryId` |
| `dink_category_id` | number | 0 | ID for Dink section | `dinkCategoryId` |
| `newsletter_form_id` | number | 1 | Gravity Forms ID for newsletter | `newsletterFormId` |

#### 3. V2 Typography Applied
| Heading | Level | Tokens Applied | `font-variation-settings` |
|---------|-------|---------------|--------------------------|
| Sidebar E-Edition | H3 (Custom) | `text-[32px]` | `'GRAD' -50, 'wdth' 64, 'opsz' 24` |
| Sidebar Delivery | H4 (Custom) | `text-lg` | `'GRAD' 0, 'wdth' 64, 'opsz' 20` |

#### 4. Dynamic Requirements
| Feature | React Implementation | WP Strategy | Priority |
|---------|---------------------|------------|---------|
| Hero Slider | `useState` for active slide | WP Interactivity API or Swiper.js block | High |
| Polls | `getActivePoll()` from JSON | Integration with Polls plugin | Medium |
| Competitions | `getActiveCompetitions()` | CPT Query + Meta fields (closing date) | Medium |
| Ads | `GoogleAd` component | Ad Manager plugin + Shortcodes/Blocks | High |

#### 5. Block Structure (outline)
```html
<!-- wp:die-papier/takeover-rails /-->
<!-- wp:die-papier/leaderboard-ad /-->
<!-- wp:die-papier/breaking-news /-->
<!-- wp:die-papier/hero-slider /-->
<!-- wp:group {"layout":{"type":"constrained"}} -->
  <!-- wp:columns -->
    <!-- wp:column {"width":"70%"} -->
      <!-- wp:die-papier/feature-grid /-->
      <!-- wp:die-papier/category-section {"slug":"nuus"} /-->
      <!-- wp:die-papier/category-section {"slug":"sport"} /-->
      <!-- wp:die-papier/leaderboard-ad /-->
      <!-- wp:die-papier/category-section {"slug":"skole"} /-->
      <!-- wp:die-papier/sponsored-in-feed /-->
      <!-- wp:die-papier/sidebar-category-section {"slug":"lewenstyl"} /-->
      <!-- wp:die-papier/category-section {"slug":"dink"} /-->
      <!-- wp:die-papier/leaderboard-ad /-->
    <!-- /wp:column -->
    <!-- wp:column {"width":"30%"} -->
      <!-- wp:group {"className":"sidebar-widgets"} -->
        <!-- wp:group {"className":"e-edition-card"} /-->
        <!-- wp:die-papier/medium-rectangle-ad /-->
        <!-- wp:die-papier/poll /-->
        <!-- wp:die-papier/medium-rectangle-ad /-->
        <!-- wp:die-papier/competition-card /-->
        <!-- wp:group {"className":"delivery-cta"} /-->
        <!-- wp:die-papier/sidebar-ads /-->
      <!-- /wp:group -->
    <!-- /wp:column -->
  <!-- /wp:columns -->
<!-- /wp:group -->
<!-- wp:die-papier/quote-slider /-->
<!-- wp:die-papier/multimedia-section /-->
<!-- wp:die-papier/leaderboard-ad /-->
<!-- wp:die-papier/obituaries-section /-->
<!-- wp:die-papier/events-section /-->
<!-- wp:die-papier/archive-section /-->
<!-- wp:die-papier/newsletter-cta /-->
<!-- wp:die-papier/sticky-mobile-footer /-->
```

#### 6. Design System Compliance
- [x] Roboto Serif H1–H4 with correct GRAD settings
- [x] Inter H5–H6 with correct weights
- [x] No Raleway usage
- [x] No #D70025 usage
- [x] No margin on component root (Container uses `my-6` wrapper)
- [x] Container pattern applied (`max-w-[1440px]`)

### About Us (`page-about`)
**React Source**: `/src/app/pages/About.tsx`
**WP Pattern File**: `patterns/page-about.php`
**WP Template**: `page.html`
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Hero | `About.tsx` (Hero) | `die-papier/content-hero` | Custom background, H1, Subtitle |
| Quick Links | `Link` grid | `core/columns` | 3-col grid of cards |
| Social Proof | `MarketingGrid` | `die-papier/marketing-grid` | Testimonials/Stats |
| Introduction | `About.tsx` (Intro) | `core/group` | Text content |
| Novus Media | `About.tsx` (Novus) | `core/group` | Text with external links |
| Mission | `About.tsx` (Mission) | `core/columns` | 2-col: Text | List |
| Brand Quotes | `QuoteSlider` | `die-papier/quote-slider` | Carousel |
| Values | `About.tsx` (Values) | `core/columns` | 3-col grid of value cards |
| BEE Credentials | `About.tsx` (BEE) | `core/cover` | Blue banner |
| Governance | `About.tsx` (Ethics) | `core/group` | Text content |
| Management | `About.tsx` (Team) | `die-papier/section-team-grid` | 3-col grid |
| Regional | `About.tsx` (Regional) | `die-papier/section-team-grid` | 3-col grid |
| Code of Ethics | `About.tsx` (Code) | `core/group` | Text + Buttons |
| Social Media | `About.tsx` (Social) | `core/social-links` | Social icons |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | Accordion |
| Contact CTA | `About.tsx` (CTA) | `core/cover` | Bottom banner with button |

#### 2. PHP Parameters
| Parameter | Type | Default | Description | Block Attribute |
|-----------|------|---------|-------------|----------------|
| `hero_title` | string | "Oor ons" | Hero title | `heroTitle` |
| `hero_image_id` | number | 0 | Background image | `heroImageId` |
| `show_management` | boolean | true | Show management team | `showManagement` |
| `show_regional` | boolean | true | Show regional team | `showRegional` |

#### 3. V2 Typography Applied
| Heading | Level | Tokens Applied | `font-variation-settings` |
|---------|-------|---------------|--------------------------|
| Hero | H1 | `text-6xl` | `'GRAD' -50, 'wdth' 64, 'opsz' 48` |
| Section Headers | H2 | `text-3xl` | `'GRAD' -50, 'wdth' 64, 'opsz' 30` |

### Contact (`page-contact`)
**React Source**: `/src/app/pages/Contact.tsx`
**WP Pattern File**: `patterns/page-contact.php`
**WP Template**: `page.html`
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Hero | `ContentHero` | `die-papier/content-hero` | |
| Departments | `Contact.tsx` (Grid) | `core/columns` | 3-col department cards |
| Main Layout | `Contact.tsx` (Layout) | `core/columns` | 2/3 (Form) + 1/3 (Sidebar) |
| Contact Form | `ContactForm` | `gravityforms/form` | Gravity Forms integration |
| Sidebar Info | `Contact.tsx` (Info) | `core/group` | Office details, map, hours |
| Social Proof | `MarketingGrid` | `die-papier/marketing-grid` | |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. PHP Parameters
| Parameter | Type | Default | Description | Block Attribute |
|-----------|------|---------|-------------|----------------|
| `form_id` | number | 0 | Gravity Forms ID | `formId` |
| `map_embed` | string | "" | Google Maps Embed URL | `mapEmbedUrl` |

#### 3. V2 Typography Applied
| Heading | Level | Tokens Applied | `font-variation-settings` |
|---------|-------|---------------|--------------------------|
| Section Headers | H2 | `text-2xl` | `'GRAD' -50, 'wdth' 64, 'opsz' 30` |

### Advertise (`page-advertise`)
**React Source**: `/src/app/pages/Advertise.tsx`
**WP Pattern File**: `patterns/page-advertise.php`
**WP Template**: `page.html`
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Hero | `ContentHero` | `die-papier/content-hero` | |
| Ad Options | `Advertise.tsx` (Grid) | `core/columns` | 3-col options grid |
| Leaflet Feature | `Advertise.tsx` (Banner) | `core/cover` | Blue banner feature |
| Benefits | `Advertise.tsx` (Why) | `core/columns` | 3-col benefits |
| Brand Quotes | `QuoteSlider` | `die-papier/quote-slider` | |
| Lead Form | `Advertise.tsx` (Form) | `gravityforms/form` | Custom lead form |
| Sidebar | `Advertise.tsx` (Sidebar) | `core/group` | Direct contact details |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. PHP Parameters
| Parameter | Type | Default | Description | Block Attribute |
|-----------|------|---------|-------------|----------------|
| `ad_form_id` | number | 0 | Lead Gen Form ID | `adFormId` |

### Subscriptions (`page-subscriptions` / `page-subscribe-eedition`)
**React Source**: `/src/app/pages/SubscribeEEdition.tsx`
**WP Pattern File**: `patterns/page-subscribe-eedition.php`
**WP Template**: `page.html`
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Hero | `SubscribeEEdition.tsx` | `die-papier/content-hero` | "Building" or "Reading" variant |
| Pricing Cards | `E_EDITION_SUBSCRIPTIONS` | `die-papier/section-pricing-table` | 3-col pricing grid |
| Brand Quotes | `QuoteSlider` | `die-papier/quote-slider` | |
| Upsell Options | `Link` cards | `core/columns` | Single issue / Print links |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. PHP Parameters
| Parameter | Type | Default | Description | Block Attribute |
|-----------|------|---------|-------------|----------------|
| `hero_variant` | string | "subscription" | "subscription" or "eedition" | `heroVariant` |
| `products` | array | [] | WooCommerce Product IDs | `productIds` |

#### 3. V2 Typography Compliance Notes
*   **Correction Needed**: React source uses `Raleway` (H1, H3). WP Pattern MUST use `Roboto Serif` (`brand-serif`) with `GRAD -50` settings.
*   **Correction Needed**: React source uses `font-black`. WP Pattern should use `font-normal` (400) or `bold` (700) for prices, not 900.

### Subscribe: Delivery (`page-subscribe-delivery`)
**React Source**: `/src/app/pages/SubscribeDelivery.tsx`
**WP Pattern File**: `patterns/page-subscribe-delivery.php`
**WP Template**: `page.html`
**Pattern Category**: `die-papier-page`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Hero | `SubscribeDelivery.tsx` | `die-papier/content-hero` | Static "Building" hero |
| Pricing Cards | `PRINT_SUBSCRIPTIONS` | `die-papier/section-pricing-table` | 4-col pricing grid |
| Digital Upsell | `Link` card | `core/group` | Banner link to E-Edition |
| Delivery Areas | `Features Grid` | `core/columns` | 3-col info grid |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React source uses `Raleway`. WP Pattern MUST use `Roboto Serif`.

### Default Archive (`archive-default`)
**React Source**: `/src/app/pages/Category.tsx`
**WP Pattern File**: `patterns/archive-default.php`
**WP Template**: `archive.html`
**Pattern Category**: `die-papier-archive`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Header Ad | `LeaderboardAd` | `die-papier/leaderboard-ad` | |
| Header | `Category.tsx` (Header) | `core/group` | H1, Description, Access Indicator |
| Filters | `SubsectionFilter` | `core/navigation` | Sub-category menu |
| Hero Slider | `HeroSlider` | `die-papier/hero-slider` | Featured articles query |
| Main List | `ArticleCard` (List) | `core/query` | Main query loop |
| Sidebar | `Category.tsx` (Sidebar) | `core/column` (30%) | Sticky sidebar |
| - Latest | `CompactArticleCard` | `core/query` | 4 latest in category |
| - Popular | `PopularArticleCard` | `die-papier/popular-posts` | Trending API / Jetpack stats |
| - Newsletter | `Category.tsx` (Newsletter) | `die-papier/section-newsletter-cta` | Box variant |
| - Ads | `SidebarAds` | `die-papier/sidebar-ads` | MREC + Half Page |
| Mobile Ad | `StickyMobileFooter` | `die-papier/sticky-mobile-footer` | |

#### 2. Dynamic Requirements
| Feature | React Implementation | WP Strategy |
|---------|---------------------|-------------|
| Pagination | Custom logic | `core/query-pagination` |
| Featured | `getFeaturedArticles` | `sticky` posts or `meta_key` query |
| Access Gate | `EEditionAccess` | WC Memberships access restriction |

### Events Archive (`archive-events`)
**React Source**: `/src/app/pages/Events.tsx`
**WP Pattern File**: `patterns/archive-events.php`
**WP Template**: `archive-dp_event.html`
**Pattern Category**: `die-papier-archive`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Header | `Events.tsx` (Header) | `core/group` | H1 + "Add Event" Button |
| Filters | `Events.tsx` (Tabs) | `die-papier/archive-filters` | Category taxonomy filter |
| Event List | `Events.tsx` (List) | `core/query` | Custom Post Type: `dp_event` |
| Sidebar | `Events.tsx` (Sidebar) | `core/column` | Ads only |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. Layout Structure
*   **List Item**: Flex row (Date Box + Content + Action Button)
*   **Date Box**: `bg-primary`, vertical flex, big number.
*   **Typography**: H1 `4xl`, Event Title `2xl`. V2 Compliant.

### Obituaries Archive (`archive-obituaries`)
**React Source**: `/src/app/pages/Obituaries.tsx`
**WP Pattern File**: `patterns/archive-obituaries.php`
**WP Template**: `archive-dp_obituary.html`
**Pattern Category**: `die-papier-archive`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Header | `Obituaries.tsx` (Header) | `core/group` | H1 + Description |
| List | `Obituaries.tsx` (List) | `core/query` | CPT: `dp_obituary` |
| Sidebar | `Obituaries.tsx` (Sidebar) | `core/column` | Place ad, Recent, Condolences |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React uses `Raleway` for H1, H3, and Sidebar headings. WP Pattern MUST use `Roboto Serif` (`brand-serif`) with `GRAD -50`.
*   **Correction Needed**: React uses `#142135` hardcoded. WP Pattern should use `var(--wp--preset--color--brand-navy)`.

### Multimedia Archive (`archive-multimedia`)
**React Source**: `/src/app/pages/Multimedia.tsx`
**WP Pattern File**: `patterns/archive-multimedia.php`
**WP Template**: `archive-dp_multimedia.html`
**Pattern Category**: `die-papier-archive`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Header | `Multimedia.tsx` (Header) | `core/group` | H1 + Description |
| Tabs | `Multimedia.tsx` (Tabs) | `die-papier/tabbed-query` | Filter by `media_type` taxonomy |
| Video Grid | `Multimedia.tsx` (Video) | `core/query` | 2-col grid |
| Photo Grid | `Multimedia.tsx` (Photo) | `core/query` | 2-col grid with overlays |
| Podcast List | `Multimedia.tsx` (Podcast) | `core/query` | List view |
| Sidebar | `Multimedia.tsx` (Sidebar) | `core/column` | Ads only |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React uses `Raleway` for H1 and Card Titles. WP Pattern MUST use `Roboto Serif`.

### Single Article (`single-post`)
**React Source**: `/src/app/pages/Article.tsx`
**WP Pattern File**: `patterns/single-post.php`
**WP Template**: `single.html`
**Pattern Category**: `die-papier-single`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Header Ad | `LeaderboardAd` | `die-papier/leaderboard-ad` | |
| Hero | `Article.tsx` (Hero) | `die-papier/article-hero` | NovaNews Style: Title Left, Image Right |
| Main Content | `Article.tsx` (Content) | `core/column` | Left 70% |
| - Overview | `Article.tsx` (Overview) | `core/group` | Key points box |
| - Content | `Article.tsx` (Content) | `core/post-content` | Gutenberg content |
| - Tags/Share | `Article.tsx` (Bottom) | `core/group` | Tags & Social |
| - Comments | `CommentsSection` | `core/comments` | Comments block |
| Sidebar | `Article.tsx` (Sidebar) | `core/column` | Right 30% sticky |
| - Ads | `SidebarAds` | `die-papier/sidebar-ads` | MREC |
| - Related | `RelatedContent` | `core/query` | Related Posts |
| - Newsletter | `Article.tsx` (Newsletter) | `die-papier/section-newsletter-cta` | Box variant |
| Related Grid | `Article.tsx` (Related) | `die-papier/section-related-articles` | 3-col grid at bottom |
| Mobile Ad | `StickyMobileFooter` | `die-papier/sticky-mobile-footer` | |

#### 2. V2 Typography Compliance
*   **Compliant**: Uses `Roboto Serif` with `GRAD -50`.
*   **Compliant**: Uses CSS variables for line-height and letter-spacing.

### Single Event (`single-event`)
**React Source**: `/src/app/pages/SingleEvent.tsx`
**WP Pattern File**: `patterns/single-dp_event.php`
**WP Template**: `single-dp_event.html`
**Pattern Category**: `die-papier-single`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Breadcrumbs | `Breadcrumb` | `die-papier/breadcrumbs` | |
| Main Content | `SingleEvent.tsx` | `core/column` | Left 70% |
| - Header | `SingleEvent.tsx` (Header) | `core/group` | Title, Meta, Details |
| - Description | `SingleEvent.tsx` (Desc) | `core/post-content` | |
| - Map | `SingleEvent.tsx` (Map) | `core/html` or `acf/map` | Google Maps Embed |
| Sidebar | `SingleEvent.tsx` (Sidebar) | `core/column` | Right 30% |
| - Organizer | `SingleEvent.tsx` (Organizer) | `core/group` | ACF Fields |
| - Share | `SocialShare` | `die-papier/section-share` | |
| - Info Box | `SingleEvent.tsx` (Info) | `core/group` | Price/Ticket info |
| Related | `RelatedContent` | `die-papier/section-related-articles` | |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React uses `Raleway` for H1 and Sidebar H3. WP Pattern MUST use `Roboto Serif`.
*   **Correction Needed**: React uses hardcoded `#142135` and `#D70025`. WP Pattern must use vars.

### Single Obituary (`single-obituary`)
**React Source**: `/src/app/pages/SingleObituary.tsx`
**WP Pattern File**: `patterns/single-dp_obituary.php`
**WP Template**: `single-dp_obituary.html`
**Pattern Category**: `die-papier-single`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Main Card | `SingleObituary.tsx` | `core/group` | Large card layout |
| - Header | `SingleObituary.tsx` (Banner) | `core/cover` | Photo + Name + Dates |
| - Biography | `SingleObituary.tsx` (Bio) | `core/post-content` | |
| - Survived By | `SingleObituary.tsx` (Family) | `core/group` | ACF Field |
| - Funeral | `SingleObituary.tsx` (Funeral) | `core/group` | ACF Field |
| Sidebar | `SingleObituary.tsx` (Sidebar) | `core/column` | Condolences & Other Obituaries |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React uses `Raleway` for Name and Headings. WP Pattern MUST use `Roboto Serif`.
*   **Correction Needed**: React uses hardcoded `#142135` and `#D70025`. WP Pattern must use vars.

### Single Multimedia (`single-multimedia`)
**React Source**: `/src/app/pages/SingleMultimedia.tsx`
**WP Pattern File**: `patterns/single-dp_multimedia.php`
**WP Template**: `single-dp_multimedia.html`
**Pattern Category**: `die-papier-single`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Main Content | `SingleMultimedia.tsx` | `core/column` | Left 70% |
| - Player | `SingleMultimedia.tsx` (Hero) | `core/video` or `core/embed` | YouTube/Podcast player |
| - Meta | `SingleMultimedia.tsx` (Meta) | `core/group` | Title, Category, Stats |
| - Desc | `SingleMultimedia.tsx` (Desc) | `core/post-content` | |
| Sidebar | `SingleMultimedia.tsx` (Sidebar) | `core/column` | Related Media |

#### 2. V2 Typography Compliance Notes
*   **Correction Needed**: React uses `Raleway` for Title and Sidebar H3. WP Pattern MUST use `Roboto Serif`.
*   **Correction Needed**: React uses hardcoded `#142135` and `#D70025`. WP Pattern must use vars.

### E-Editions Archive (`archive-eeditions`)
**React Source**: `/src/app/pages/EEditions.tsx`
**WP Pattern File**: `patterns/archive-eeditions.php`
**WP Template**: Custom page template (not a CPT archive — uses WooCommerce product grid)
**Pattern Category**: `die-papier-archive`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| ContentHero | `ContentHero` | `die-papier/section-content-hero` | Title "E-uitgawes", subtitle |
| Edition Grid | `EEditions.tsx` (Grid) | `core/query` | CPT: `dp_eedition`, 8 per page, 3-col desktop / 2-col mobile |
| — Edition Card | Inline JSX | `die-papier/card-eedition` | Cover (3:4), title, date, ownership badge (conditional), price/Koop or "In biblioteek"/Lees |
| Sidebar CTA | Inline JSX | `die-papier/section-subscription-cta-sidebar` | Navy widget, no specific pricing (pricing.md rule 8) |
| Sidebar Ads | `SidebarAds` | `dp/ad-unit` | MREC slots |
| Pagination | Inline JSX | `core/query-pagination` | |
| "Reeds 'n intekenaar?" CTA | Inline JSX | `core/group` | Links to My Account and My E-Editions |
| Leaderboard Ad | `LeaderboardAd` | `dp/ad-unit` | Above FAQ |
| FAQ | `PageFAQSection` | `die-papier/section-faq` | `EEDITIONS_FAQS` |

#### 2. Conditional Rendering (WP)
| Element | Logged Out | Logged In (No Access) | Logged In (Has Access) |
|---------|------------|----------------------|----------------------|
| Edition card badge | Hidden | Hidden | Green "Intekening" / "Gekoop" |
| Card button | "Koop" + price | "Koop" + price | "Lees" → single page |
| Card price label | Shown | Shown | "In biblioteek" (green) |

#### 3. WordPress Implementation Notes
- Edition cards use `wc_memberships_is_post_content_restricted()` + `current_user_can()` in `render.php` to determine ownership state per card.
- The sidebar subscription CTA widget does NOT show specific pricing (per pricing.md rule 8). In WordPress, this is a static pattern `die-papier/section-subscription-cta-sidebar`.

#### 4. V2 Typography Applied
| Heading | Level | Tokens Applied |
|---------|-------|---------------|
| Card titles | H3 | `--text-h-compact`, `--fvs-h3`, `--lh-h3`, `--ls-h3` |
| "Reeds 'n intekenaar?" | H3 | `--text-h3`, `--fvs-h3`, `--lh-h3`, `--ls-h3` |

### Single E-Edition (`single-eedition`)
**React Source**: `/src/app/pages/SingleEEdition.tsx`
**WP Pattern File**: `patterns/single-eedition.php`
**WP Template**: `single-dp_eedition.html`
**Pattern Category**: `die-papier-single`

#### 1. Content Sections
| Section | React Component | WP Block | Notes |
|---------|----------------|----------|-------|
| Breadcrumbs | `Breadcrumbs` | `dp/breadcrumbs` | Tuis → E-uitgawes → [Title] |
| Product Section | Inline JSX | `dp/eedition-access` | Two-column: cover (left) + details (right) |
| — Cover image | `ImageWithFallback` | Post thumbnail + overlay template | 3:4 newspaper mock-up |
| — Ownership badge | Inline JSX | Conditional PHP | Green pill: "Intekening" / "Gekoop" |
| — Title (H1) | Inline JSX | `core/post-title` | Edition title |
| — Metadata | Inline JSX | `core/group` | Date, page count, edition number |
| — Description | Inline JSX | `core/post-excerpt` | Full description |
| — Price + Add-to-cart | Inline JSX | WooCommerce add-to-cart | R35 + "Voeg by mandjie" (unpurchased only) |
| — Green confirmation | Inline JSX | Conditional PHP | Ownership message + "Lees nou" + "My biblioteek" (purchased only) |
| Issuu Reader | `<iframe>` | `core/html` (restricted) | Full-width embed, `#reader` anchor (purchased only) |
| Locked Preview | Inline JSX | `parts/eedition-locked.php` | Blurred cover, lock icon, purchase CTAs (unpurchased only) |
| **Subscription CTA** | Inline JSX | `dp/subscription-cta` | Navy banner, value proposition, plan summary (unpurchased only) |
| Social Share | `SocialShare` | `core/social-links` | Share buttons |
| Related Editions | Inline JSX | `core/query` | 4-col grid of `dp_eedition`, ownership badges |

#### 2. Conditional Rendering (WP)
| Element | Not Purchased | Purchased |
|---------|--------------|-----------|
| Price + add-to-cart | ✅ Shown | ❌ Hidden |
| Green confirmation banner | ❌ Hidden | ✅ Shown |
| "Lees nou" button | ❌ Hidden | ✅ Shown |
| Issuu reader embed | ❌ Hidden | ✅ Shown |
| Locked preview section | ✅ Shown | ❌ Hidden |
| Subscription CTA section | ✅ Shown | ❌ Hidden |
| Ownership badge on cover | ❌ Hidden | ✅ Shown |

#### 3. Subscription CTA Block Details
- **Block**: `dp/subscription-cta` (see [Block Mapping § 3.7](/guidelines/wordpress-migration/block-mapping.md#37-subscription-cta-dpsubscription-cta))
- **Placement**: Between locked preview and social share
- **Visibility**: Conditionally hidden when user has membership access (`render.php` returns empty)
- **Pricing**: `render.php` queries WooCommerce Subscription products for live prices (R140/R390/R1400)
- **Layout**: Two-column navy card — left (value prop + CTA button) / right (plan summary with prices)

#### 4. V2 Typography Applied
| Heading | Level | Tokens Applied | `font-variation-settings` |
|---------|-------|---------------|--------------------------|
| Title | H1 | `--text-h1`, `--lh-h1`, `--ls-h1` | `var(--fvs-h1)` |
| Cover "DIE PAPIER" | H2 | `--text-h3`, `--lh-h3`, `--ls-h3` | `'GRAD' -50, 'wdth' 64, 'opsz' 24` |
| Locked preview heading | H3 | `--text-h3`, `--lh-h3`, `--ls-h3` | `var(--fvs-h3)` |
| Subscription CTA heading | H3 | `--text-h3`, `--lh-h3`, `--ls-h3` | `var(--fvs-h3)` |
| Related editions heading | H2 | `--text-h2`, `--lh-h2`, `--ls-h2` | `var(--fvs-h2)` |

#### 5. Block Structure (outline)
```html
<!-- wp:dp/breadcrumbs /-->

<!-- wp:group {"align":"wide","layout":{"type":"flex","flexWrap":"nowrap"}} -->
  <!-- wp:column {"width":"400px"} -->
    <!-- wp:post-featured-image {"aspectRatio":"3/4"} /-->
    <!-- wp:dp/eedition-ownership-badge /-->
  <!-- /wp:column -->
  <!-- wp:column -->
    <!-- wp:post-title {"level":1} /-->
    <!-- wp:group {"layout":{"type":"flex"}} -->
      <!-- wp:post-date /-->
      <!-- wp:dp/eedition-meta /-->
    <!-- /wp:group -->
    <!-- wp:post-excerpt /-->
    <!-- wp:dp/eedition-access /-->
  <!-- /wp:column -->
<!-- /wp:group -->

<!-- wp:dp/eedition-reader /-->

<!-- wp:dp/eedition-locked-preview /-->

<!-- wp:dp/subscription-cta {"showPlanSummary":true} /-->

<!-- wp:social-links /-->

<!-- wp:query {"queryId":1,"query":{"postType":"dp_eedition","perPage":4,"exclude":[current]}} -->
  <!-- wp:heading {"level":2} -->Ander onlangse uitgawes<!-- /wp:heading -->
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
    <!-- wp:pattern {"slug":"die-papier/card-eedition"} /-->
  <!-- /wp:post-template -->
<!-- /wp:query -->
```