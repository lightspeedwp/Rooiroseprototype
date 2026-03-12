# WordPress Migration Checklist — rooi rose

**Category**: WordPress Migration  
**Last Updated**: 2026-03-12  
**Status**: ✅ Ready for Production Migration  
**Estimated Total Effort**: 40-60 hours

---

## Overview

This checklist provides a comprehensive, step-by-step guide for migrating the rooi rose React prototype to WordPress FSE. Use this as a project management tool to track progress and ensure no critical steps are missed.

---

## Pre-Migration Requirements

### ✅ Prerequisites (All Complete)

- [x] React prototype 100% functional
- [x] Font migration complete (Playfair Display SC + Karla)
- [x] Brand colors updated (#e01e12 red, #424242 tagline grey)
- [x] All documentation complete (100% coverage)
- [x] Design tokens documented (145+ tokens)
- [x] WordPress theme structure defined
- [x] Block patterns validated (235 files, 0 violations)
- [x] Category structure defined (10 categories, 44 subcategories)

---

## Phase 1: WordPress Environment Setup

**Estimated Time**: 4-6 hours  
**Priority**: P0 — Critical

### 1.1 Server & Domain Setup

- [ ] **1.1.1** Provision production server (recommended: managed WordPress hosting)
  - Minimum specs: 2GB RAM, 2 CPU cores, 50GB SSD
  - PHP 8.1+, MySQL 8.0+, HTTPS enabled
  - Server location: South Africa (for latency)
  
- [ ] **1.1.2** Configure domain DNS
  - Point domain to server IP
  - Configure SSL certificate (Let's Encrypt or Cloudflare)
  - Set up www → non-www redirect (or vice versa)
  
- [ ] **1.1.3** Create staging subdomain
  - staging.rooirose.co.za (example)
  - Separate database from production
  - Password-protected via .htaccess

**Deliverable**: Accessible WordPress installation at production + staging URLs

---

### 1.2 WordPress Core Installation

- [ ] **1.2.1** Install WordPress 6.4+ (latest stable)
  - Use WordPress CLI for faster setup: `wp core download`
  - Configure wp-config.php with database credentials
  - Set strong unique authentication keys/salts
  
- [ ] **1.2.2** Configure permalink structure
  - Settings → Permalinks → Post name (`/%postname%/`)
  - Custom structure for categories: `/category/%category%/`
  
- [ ] **1.2.3** Configure site settings
  - Site Title: "rooi rose"
  - Tagline: "'n Tydskrif met leefstyl, verhale, en inspirasie"
  - Language: Afrikaans (af)
  - Timezone: Africa/Johannesburg
  - Date format: d F Y (12 Maart 2026)
  - Time format: H:i (14:30)

**Deliverable**: WordPress core installed with correct settings

---

### 1.3 Essential Plugins Installation

**Core Functionality** (7 plugins):

- [ ] **1.3.1** WooCommerce (8.5+)
  - For e-edition subscriptions
  - Install WooCommerce Subscriptions extension
  - Install WooCommerce Memberships extension
  
- [ ] **1.3.2** Yoast SEO (21.0+)
  - For breadcrumbs, FAQ blocks, structured data
  - Configure Afrikaans language support
  
- [ ] **1.3.3** Gravity Forms (2.7+)
  - For submission forms, contact forms, competition entries
  - Install Afrikaans translation files
  
- [ ] **1.3.4** Advanced Ads (1.36+)
  - For all ad placements (replaces custom blocks)
  - Configure ad positions
  
- [ ] **1.3.5** Outermost Blocks (free plugin)
  - For Icon Block and Social Sharing Block
  - Configure icon library
  
- [ ] **1.3.6** Advanced Query Loop (free plugin)
  - For homepage category sections, article deduplication
  - Configure taxonomy queries
  
- [ ] **1.3.7** Advanced Custom Fields (ACF) Pro (6.2+)
  - For custom post type fields
  - Configure field groups

**Optional/Enhancement** (3 plugins):

- [ ] **1.3.8** Wordfence Security (or similar)
  - For firewall, malware scanning
  
- [ ] **1.3.9** UpdraftPlus (or similar)
  - For automated backups
  
- [ ] **1.3.10** WP Rocket (or similar)
  - For caching, performance optimization

**Deliverable**: All required plugins installed and activated

---

## Phase 2: Theme Installation & Configuration

**Estimated Time**: 8-12 hours  
**Priority**: P0 — Critical

### 2.1 Theme Files Upload

- [ ] **2.1.1** Prepare theme package
  - Copy `/die-papier-theme/` to `/rooi-rose-theme/`
  - Update all theme metadata (style.css header)
  - Update text domain: `diepapiertema` → `rooirosetema`
  - Verify all files present (177 patterns, 44 templates, 14 parts)
  
- [ ] **2.1.2** Upload theme to WordPress
  - Via SFTP: Upload to `/wp-content/themes/rooi-rose-theme/`
  - OR via Appearance → Themes → Add New → Upload Theme (ZIP)
  - Activate theme
  
- [ ] **2.1.3** Verify theme activation
  - Check for PHP errors in debug.log
  - Verify all template files loaded
  - Check Site Editor accessibility

**Deliverable**: rooi rose theme activated without errors

---

### 2.2 Theme.json Configuration

- [ ] **2.2.1** Update color palette
  - Primary: #E01E12 (rooi rose Red)
  - Tagline Grey: #424242
  - Navy: #142135 (dark mode background)
  - Verify 8 brand colors in `settings.color.palette`
  
- [ ] **2.2.2** Update typography
  - Install Google Fonts: Playfair Display SC, Karla
  - Configure font families in `settings.typography.fontFamilies`
  - Set font size scale (8 presets: x-small → xxx-large)
  
- [ ] **2.2.3** Update spacing scale
  - Configure 7 spacing presets (x-small → xxx-large)
  - Verify fluid spacing formulas
  
- [ ] **2.2.4** Configure layout settings
  - Content width: 680px
  - Wide width: 1200px
  - Container width: 1280px
  
- [ ] **2.2.5** Test in Site Editor
  - Open Site Editor (Appearance → Editor)
  - Verify all presets appear in sidebar
  - Test color picker, font selector, spacing controls

**Deliverable**: theme.json configured with rooi rose design tokens

---

### 2.3 Custom Post Types Registration

**Reference**: `/guidelines/wordpress-migration/content/cpt-definitions.md`

- [ ] **2.3.1** Register `dp_recipe` (Recipes)
  - Slug: `resep`
  - Supports: title, editor, thumbnail, excerpt, custom-fields
  - Taxonomies: category, post_tag
  - ACF fields: prep_time, cook_time, servings, difficulty
  
- [ ] **2.3.2** Register `dp_competition` (Competitions)
  - Slug: `kompetisie`
  - Supports: title, editor, thumbnail, custom-fields
  - ACF fields: prize, closing_date, status, winner, sponsor, form_id
  
- [ ] **2.3.3** Register `dp_event` (Events)
  - Slug: `gebeurtenis`
  - Supports: title, editor, thumbnail, excerpt, custom-fields
  - ACF fields: event_date, event_time, location, ticket_url
  
- [ ] **2.3.4** Register `dp_obituary` (Obituaries) [if needed]
  - Slug: `rubriek`
  - Supports: title, editor, thumbnail, custom-fields
  - ACF fields: date_of_birth, date_of_death, funeral_details
  
- [ ] **2.3.5** Test CPT registration
  - Verify each CPT appears in admin menu
  - Test creating/editing/deleting posts
  - Verify permalink structure

**Deliverable**: All custom post types registered and functional

---

### 2.4 ACF Field Groups Configuration

**Reference**: `/guidelines/wordpress-migration/third-party-plugins/plugin-structure.md`

- [ ] **2.4.1** Create Recipe Fields group
  - Fields: Prep Time, Cook Time, Servings, Difficulty, Ingredients, Instructions, Chef's Notes
  - Location: Post Type = dp_recipe
  
- [ ] **2.4.2** Create Competition Fields group
  - Fields: Prize, Closing Date, Status, Winner, Sponsor, Form ID
  - Location: Post Type = dp_competition
  
- [ ] **2.4.3** Create Event Fields group
  - Fields: Event Date, Event Time, Location, Ticket URL, Organizer
  - Location: Post Type = dp_event
  
- [ ] **2.4.4** Export field groups to JSON
  - Save field groups to `/acf-json/` folder in theme
  - Commit to version control

**Deliverable**: ACF field groups created and exported

---

## Phase 3: Content Structure Setup

**Estimated Time**: 4-6 hours  
**Priority**: P0 — Critical

### 3.1 Category Creation

**Reference**: `/guidelines/rooi-rose/content-architecture.md`

- [ ] **3.1.1** Create 10 main categories
  - Kos (slug: kos)
  - Mode (slug: mode)
  - Skoonheid (slug: skoonheid)
  - Gesondheid (slug: gesondheid)
  - Bekendes (slug: bekendes)
  - Leefstyl (slug: leefstyl)
  - Jou lewe (slug: jou-lewe)
  - Ontspanning (slug: ontspanning)
  - Wen (slug: wen)
  - Rooiwarm wenners (slug: rooiwarm-wenners)
  
- [ ] **3.1.2** Create 44 subcategories
  - **Kos**: Resepte, Bak, Aandete, Nagereg, Ontbyt, Ligte etes, Kosresensies, Vermaak, Drankies, Koskuns, Geregte, Slaaie
  - **Mode**: Modeneigings, Modewenke, Inkopies
  - **Skoonheid**: Velversorging, Grimering, Haarversorging, Produkte, Skoonheidswenke
  - **Gesondheid**: Fiksheid, Voeding, Welstand
  - **Bekendes**: Vermaaklikheidsnuus
  - **Leefstyl**: Huis en Tuin, Versiering, Tuinmaak, Doen-dit-self
  - **Jou lewe**: Verhoudinge, Ouerskap, Persoonlike groei, Loopbaan, Finansies, Reise
  - **Ontspanning**: Boeke, Flieks, TV-reekse, Podsendings, Stokperdjies, Musiek
  
- [ ] **3.1.3** Configure category metadata
  - Add category descriptions (150-200 characters each)
  - Upload category images (3:2 aspect ratio, 1200x800px)
  - Set parent-child relationships
  
- [ ] **3.1.4** Update `/guidelines/rooi-rose/content-architecture.md`
  - Replace "TBD" placeholders with actual WordPress category IDs
  - Document category ID mapping

**Deliverable**: All 54 categories created with metadata

---

### 3.2 Menu Configuration

**Reference**: `/guidelines/wordpress-migration/content/menu-strategy.md`

- [ ] **3.2.1** Create Primary Navigation menu
  - Location: Header navigation
  - Items: 10 main categories + Home
  - Subcategory dropdowns (where applicable)
  
- [ ] **3.2.2** Create Footer Navigation menu
  - Location: Footer
  - Items: About, Contact, Privacy Policy, Terms of Service, Advertise
  
- [ ] **3.2.3** Create Legal menu
  - Location: Footer legal links
  - Items: Privacy Policy, Terms of Service, Cookie Policy
  
- [ ] **3.2.4** Create Social Media menu
  - Location: Footer social links
  - Items: Facebook, Instagram, X (Twitter), YouTube, LinkedIn, TikTok
  - Use actual social profile URLs from `/guidelines/wordpress-migration/canonical-social-urls.md`
  
- [ ] **3.2.5** Test menu rendering
  - Verify header navigation appears
  - Test mobile menu (hamburger icon)
  - Check footer menus

**Deliverable**: All navigation menus configured

---

### 3.3 Static Pages Creation

- [ ] **3.3.1** Create essential pages
  - Home (front page)
  - About Us (`/oor-ons/`)
  - Contact (`/kontak/`)
  - Privacy Policy (`/privaatheidsbeleid/`)
  - Terms of Service (`/terme-en-voorwaardes/`)
  - Advertise (`/adverteer/`)
  
- [ ] **3.3.2** Create e-edition pages
  - E-Editions Archive (`/e-uitgawes/`)
  - Subscribe (`/teken-in/`)
  - My Account (`/my-rekening/`)
  
- [ ] **3.3.3** Create submission pages
  - Submit Story (`/dien-storie-in/`)
  - Submit Tip (`/dien-wenk-in/`)
  - Submit Letter (`/dien-brief-in/`)
  - Submit Shoutout (`/dien-skreeue-in/`)
  - Submit Feedback (`/dien-terugvoer-in/`)
  
- [ ] **3.3.4** Set front page
  - Settings → Reading → Static page → Front page: "Home"

**Deliverable**: All static pages created and configured

---

## Phase 4: WooCommerce Setup

**Estimated Time**: 6-8 hours  
**Priority**: P1 — High

### 4.1 WooCommerce Base Configuration

- [ ] **4.1.1** Run WooCommerce setup wizard
  - Store address: South Africa
  - Currency: ZAR (R)
  - Payment gateway: PayFast (or PayGate)
  - Shipping: Disable (digital products only)
  
- [ ] **4.1.2** Configure tax settings
  - Enable/disable based on South African VAT requirements
  - Set tax rates if applicable
  
- [ ] **4.1.3** Configure checkout settings
  - Simplify checkout fields (no shipping address needed)
  - Enable guest checkout
  - Configure order statuses

**Deliverable**: WooCommerce base settings configured

---

### 4.2 Product Attribute Creation

**Reference**: `/src/app/data/eEditions.ts` (EDITION_REGIONS constant)

- [ ] **4.2.1** Create `pa_streek` attribute
  - Name: Streek (Region)
  - Slug: `streek`
  - Type: Select
  - Terms:
    1. Gauteng en Vrystaat
    2. Wes-Kaap
    3. Oos-Kaap
    4. KwaZulu-Natal

**Deliverable**: Product attribute created with 4 regions

---

### 4.3 E-Edition Products Setup

**Reference**: `/guidelines/wordpress-migration/third-party-plugins/woocommerce.md`

- [ ] **4.3.1** Create Variable Product: "E-Uitgawe Intekeninge"
  - Product type: Variable subscription
  - Variations: 4 regions (based on `pa_streek`)
  - Price: R[TBD] per month
  - Billing period: Monthly (renews automatically)
  
- [ ] **4.3.2** Configure each variation
  - Gauteng en Vrystaat: [Issuu embed URL]
  - Wes-Kaap: [Issuu embed URL]
  - Oos-Kaap: [Issuu embed URL]
  - KwaZulu-Natal: [Issuu embed URL]
  - Add ACF field for `issuu_publication_url`
  
- [ ] **4.3.3** Configure subscription settings
  - Renewal period: 1 month
  - Sign-up fee: R0 (optional)
  - Trial period: None (removed as per requirements)
  - Payment reminder emails enabled
  
- [ ] **4.3.4** Test product creation
  - Add to cart
  - Complete checkout
  - Verify subscription created
  - Check renewal email sent

**Deliverable**: E-edition products configured with regional variants

---

### 4.4 Membership Levels Setup

- [ ] **4.4.1** Create "E-Uitgawe Leser" membership plan
  - Access rules: Full access to e-edition content
  - Linked to e-edition subscription products
  - Drip content: Immediate access
  
- [ ] **4.4.2** Configure content restrictions
  - Restrict e-edition posts to members only
  - Display paywall for non-members
  - Configure access denied message (Afrikaans)
  
- [ ] **4.4.3** Test membership access
  - Create test user
  - Subscribe to e-edition
  - Verify membership assigned
  - Test content access

**Deliverable**: Membership plans configured and tested

---

## Phase 5: Forms & Integrations

**Estimated Time**: 4-6 hours  
**Priority**: P1 — High

### 5.1 Gravity Forms Setup

**Reference**: `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`

- [ ] **5.1.1** Create Newsletter Signup form (ID: 1)
  - Fields: Name, Email, Consent checkbox
  - Submit button: "Teken in vir nuusbrief"
  - Confirmation: "Dankie! Kyk in jou e-pos vir bevestiging."
  - Mailchimp/ActiveCampaign integration
  
- [ ] **5.1.2** Create Contact Form (ID: 2)
  - Fields: Name, Email, Subject, Message
  - Notification email: info@rooirose.co.za
  - Confirmation: "Dankie! Ons sal binnekort antwoord."
  
- [ ] **5.1.3** Create Story Submission form (ID: 3)
  - Fields: Name, Email, Story Title, Story Content, Image Upload
  - Notification: Editorial team
  
- [ ] **5.1.4** Create Competition Entry form (ID: 4)
  - Fields: Name, Email, Phone, Answer, Consent
  - Conditional logic based on competition
  
- [ ] **5.1.5** Create Tip Submission form (ID: 5)
  - Fields: Name, Email, Tip Category, Tip Content
  
- [ ] **5.1.6** Translate all forms to Afrikaans
  - Field labels, placeholders, validation messages
  - Submit buttons, confirmation messages
  
- [ ] **5.1.7** Test all forms
  - Submit test entries
  - Verify email notifications
  - Check database entries

**Deliverable**: 5 Gravity Forms created and tested

---

### 5.2 Newsletter Integration

- [ ] **5.2.1** Connect email marketing service
  - Mailchimp or ActiveCampaign recommended
  - Configure API key
  - Create "rooi rose Newsletter" list
  
- [ ] **5.2.2** Set up automated welcome series
  - Email 1: Welcome + brand introduction
  - Email 2: Latest articles (3 days later)
  - Email 3: Exclusive content offer (7 days later)
  
- [ ] **5.2.3** Create weekly newsletter template
  - Featured article
  - Top 5 articles of the week
  - Competition spotlight
  - Social media links

**Deliverable**: Newsletter system integrated and automated

---

## Phase 6: Content Migration

**Estimated Time**: 8-12 hours  
**Priority**: P2 — Medium

### 6.1 Mock Content Import

- [ ] **6.1.1** Prepare content CSV
  - Export React mock data to CSV format
  - Map fields: Title, Content, Excerpt, Category, Featured Image URL
  - Add: Author, Publish Date, Tags, SEO metadata
  
- [ ] **6.1.2** Import articles
  - Use WP All Import plugin (recommended)
  - Map CSV columns to WordPress post fields
  - Import featured images from URLs
  - Set post status: Published or Draft
  
- [ ] **6.1.3** Verify import
  - Check article count (17 lifestyle articles minimum)
  - Verify categories assigned correctly
  - Check featured images uploaded
  - Review post formatting (headings, paragraphs, lists)
  
- [ ] **6.1.4** Add missing content
  - Create additional articles for empty categories
  - Add placeholder recipes (3-5)
  - Add sample competitions (2-3)
  - Add sample events (5-10)

**Deliverable**: Minimum 20 articles imported and published

---

### 6.2 Media Library Setup

- [ ] **6.2.1** Organize media library
  - Create folders: Articles, Recipes, Competitions, Events, Ads, UI
  - Upload brand assets (logo, favicon, social share images)
  
- [ ] **6.2.2** Optimize images
  - Install Smush or EWWW Image Optimizer
  - Bulk optimize existing images
  - Enable automatic optimization for new uploads
  
- [ ] **6.2.3** Set default image sizes
  - Thumbnail: 300x200 (3:2)
  - Medium: 600x400 (3:2)
  - Large: 1200x800 (3:2)
  - Full: Original (max 1920px wide)

**Deliverable**: Media library organized and optimized

---

## Phase 7: Advanced Ads Setup

**Estimated Time**: 3-4 hours  
**Priority**: P2 — Medium

### 7.1 Ad Placements Configuration

**Reference**: `/guidelines/wordpress-migration/third-party-plugins/advanced-ads.md`

- [ ] **7.1.1** Create ad placements
  - Header Banner (728x90 leaderboard)
  - Sidebar Ad (300x250 rectangle)
  - In-Content Ad (inserted after 3rd paragraph)
  - Footer Banner (728x90 leaderboard)
  - Sticky Footer Ad (320x50 mobile)
  
- [ ] **7.1.2** Configure placement conditions
  - Header: All pages
  - Sidebar: Single posts, category archives
  - In-Content: Single posts only
  - Footer: All pages
  - Sticky Footer: Mobile devices only
  
- [ ] **7.1.3** Add test ads
  - Use placeholder ad images (300x250, 728x90, 320x50)
  - Link to /advertise page
  - Test ad rotation (if multiple ads per placement)

**Deliverable**: Ad placements configured with test ads

---

## Phase 8: SEO Configuration

**Estimated Time**: 3-4 hours  
**Priority**: P1 — High

### 8.1 Yoast SEO Setup

- [ ] **8.1.1** Configure site-wide settings
  - Site name: rooi rose
  - Tagline: "'n Tydskrif met leefstyl, verhale, en inspirasie"
  - Organization: rooi rose Media
  - Social profiles: Add all social media URLs
  
- [ ] **8.1.2** Configure post type SEO
  - Posts: Enable breadcrumbs, FAQ blocks
  - Pages: Enable breadcrumbs
  - Recipes: Custom schema (Recipe type)
  - Competitions: Custom schema (Event type)
  
- [ ] **8.1.3** Set up breadcrumbs
  - Enable breadcrumbs
  - Separator: `/`
  - Remove post type from breadcrumbs
  - Show on: All pages except homepage
  
- [ ] **8.1.4** Configure XML sitemaps
  - Enable XML sitemap
  - Exclude: Media, Authors, Format taxonomies
  - Include: Posts, Pages, Categories, Recipes, Competitions
  - Ping Google on publish

**Deliverable**: Yoast SEO fully configured

---

### 8.2 Schema.org Structured Data

- [ ] **8.2.1** Add Organization schema
  - Use Yoast SEO Organization settings
  - Add logo, social profiles
  
- [ ] **8.2.2** Add Article schema
  - Configured via Yoast SEO (automatic)
  - Verify with Google Rich Results Test
  
- [ ] **8.2.3** Add Recipe schema (for dp_recipe CPT)
  - Create custom ACF fields for recipe data
  - Output schema using Yoast API or custom function
  
- [ ] **8.2.4** Add FAQ schema
  - Use Yoast FAQ block in relevant articles
  - Verify markup with Google Rich Results Test

**Deliverable**: Schema.org markup implemented and verified

---

## Phase 9: Performance Optimization

**Estimated Time**: 4-6 hours  
**Priority**: P2 — Medium

### 9.1 Caching Setup

- [ ] **9.1.1** Install WP Rocket (or free alternative)
  - Enable page caching
  - Enable browser caching (1 year for static assets)
  - Enable GZIP compression
  - Minify CSS, JS (test carefully)
  
- [ ] **9.1.2** Configure object caching
  - Redis or Memcached (if available on server)
  - WP-CLI: `wp redis enable` (if Redis installed)
  
- [ ] **9.1.3** Test cache invalidation
  - Publish new post → verify cache cleared
  - Update page → verify cache cleared
  - Test logged-in vs logged-out caching

**Deliverable**: Caching configured and tested

---

### 9.2 Image Optimization

- [ ] **9.2.1** Configure lazy loading
  - Enable native WordPress lazy loading (built-in 5.5+)
  - Exclude above-fold images from lazy loading
  
- [ ] **9.2.2** Convert images to WebP
  - Use Smush, EWWW, or server-level conversion
  - Fallback to JPEG for unsupported browsers
  
- [ ] **9.2.3** Implement responsive images
  - Verify srcset attributes present
  - Test on mobile, tablet, desktop

**Deliverable**: Images optimized with lazy loading and WebP

---

### 9.3 Database Optimization

- [ ] **9.3.1** Clean up database
  - Delete post revisions (keep last 3)
  - Delete spam comments, trashed items
  - Optimize database tables
  
- [ ] **9.3.2** Schedule automatic cleanup
  - WP-Optimize plugin: Weekly cleanup
  - Keep 3 revisions per post
  - Auto-delete spam older than 7 days

**Deliverable**: Database optimized and auto-cleanup scheduled

---

### 9.4 CDN Setup (Optional)

- [ ] **9.4.1** Configure Cloudflare CDN
  - Add site to Cloudflare
  - Update DNS nameservers
  - Enable Auto Minify, Brotli compression
  - Set caching rules (4 hours for HTML, 1 month for static assets)
  
- [ ] **9.4.2** Test CDN
  - Verify assets loading from CDN
  - Check page speed (GTmetrix, PageSpeed Insights)

**Deliverable**: CDN configured (if using)

---

## Phase 10: Testing & QA

**Estimated Time**: 6-8 hours  
**Priority**: P0 — Critical

### 10.1 Functionality Testing

- [ ] **10.1.1** Test navigation
  - Click all menu items
  - Test mobile menu (hamburger)
  - Verify breadcrumbs appear and are accurate
  
- [ ] **10.1.2** Test search
  - Search for articles by keyword
  - Verify results accuracy
  - Test "No results" message
  
- [ ] **10.1.3** Test forms
  - Submit newsletter signup
  - Submit contact form
  - Submit story/tip/letter
  - Verify email notifications received
  
- [ ] **10.1.4** Test WooCommerce
  - Add e-edition to cart
  - Complete checkout (use test payment gateway)
  - Verify subscription created
  - Test member access to restricted content
  
- [ ] **10.1.5** Test comments
  - Submit test comment
  - Verify moderation queue
  - Approve/reject comment

**Deliverable**: Functionality test report with 0 critical issues

---

### 10.2 Visual Regression Testing

- [ ] **10.2.1** Compare React vs WordPress
  - Homepage layout
  - Category page layout
  - Single post layout
  - Typography (fonts, sizes, line heights)
  - Colors (brand palette accuracy)
  
- [ ] **10.2.2** Test responsive design
  - Desktop (1920px, 1440px, 1280px)
  - Tablet (1024px, 768px)
  - Mobile (375px, 390px, 430px)
  
- [ ] **10.2.3** Test dark mode
  - Toggle dark mode
  - Verify color inversions
  - Check contrast ratios (WCAG AA)

**Deliverable**: Visual regression report with screenshots

---

### 10.3 Browser & Device Testing

- [ ] **10.3.1** Test browsers
  - Chrome (latest)
  - Safari (latest)
  - Firefox (latest)
  - Edge (latest)
  - Mobile Safari (iOS)
  - Chrome Mobile (Android)
  
- [ ] **10.3.2** Test devices
  - iPhone 13/14/15 (Safari)
  - Samsung Galaxy S21/S22/S23 (Chrome)
  - iPad Pro (Safari)
  - Desktop PC (Windows)
  - MacBook (macOS)

**Deliverable**: Browser/device compatibility report

---

### 10.4 Performance Testing

- [ ] **10.4.1** Run PageSpeed Insights
  - Target: 90+ mobile, 95+ desktop
  - Check Core Web Vitals:
    - LCP < 2.5s
    - FID < 100ms
    - CLS < 0.1
  
- [ ] **10.4.2** Run GTmetrix
  - Target: Grade A, 90+ performance score
  - Check fully loaded time < 3s
  
- [ ] **10.4.3** Test with slow 3G
  - Chrome DevTools → Network → Slow 3G
  - Verify page usable within 5 seconds

**Deliverable**: Performance test report meeting targets

---

### 10.5 SEO Testing

- [ ] **10.5.1** Verify meta tags
  - Check title tags (50-60 chars)
  - Check meta descriptions (150-160 chars)
  - Check Open Graph tags (Facebook)
  - Check Twitter Card tags
  
- [ ] **10.5.2** Test structured data
  - Google Rich Results Test
  - Verify Organization, Article, Recipe schema
  - Check for errors/warnings
  
- [ ] **10.5.3** Verify XML sitemap
  - Access /sitemap_index.xml
  - Check all post types included
  - Submit to Google Search Console

**Deliverable**: SEO audit report with 0 critical issues

---

### 10.6 Accessibility Testing

- [ ] **10.6.1** Run WAVE accessibility checker
  - Target: 0 errors
  - Check color contrast
  - Check alt text on images
  - Check form labels
  
- [ ] **10.6.2** Test keyboard navigation
  - Tab through entire page
  - Verify skip links work
  - Check focus indicators visible
  
- [ ] **10.6.3** Test screen reader
  - Use NVDA (Windows) or VoiceOver (Mac)
  - Verify headings announce correctly
  - Check ARIA labels

**Deliverable**: WCAG AA compliance report

---

## Phase 11: Security Hardening

**Estimated Time**: 2-3 hours  
**Priority**: P1 — High

### 11.1 Security Configuration

- [ ] **11.1.1** Update all plugins & theme
  - Check for WordPress core updates
  - Update all plugins to latest stable
  - Update theme files
  
- [ ] **11.1.2** Secure wp-config.php
  - Move outside public_html (if possible)
  - Set correct file permissions (644)
  - Disable file editing: `define('DISALLOW_FILE_EDIT', true);`
  
- [ ] **11.1.3** Configure Wordfence (or similar)
  - Enable firewall (learning mode for 1 week)
  - Enable malware scanner (daily scans)
  - Enable login security (2FA, login attempt limits)
  - Configure email alerts
  
- [ ] **11.1.4** Secure login page
  - Change login URL (use WPS Hide Login plugin)
  - Enable reCAPTCHA on login form
  - Limit login attempts (max 3 attempts, 15-min lockout)

**Deliverable**: Security hardened with 0 vulnerabilities

---

### 11.2 SSL & HTTPS

- [ ] **11.2.1** Install SSL certificate
  - Let's Encrypt (free) or paid certificate
  - Verify HTTPS enabled
  
- [ ] **11.2.2** Force HTTPS redirect
  - Update .htaccess with redirect rules
  - OR use Really Simple SSL plugin
  
- [ ] **11.2.3** Update site URLs
  - Settings → General → WordPress Address & Site Address
  - Change http:// to https://
  - Update database URLs (use Better Search Replace plugin)

**Deliverable**: Full HTTPS with A+ SSL rating (SSL Labs)

---

## Phase 12: Backup & Monitoring

**Estimated Time**: 2-3 hours  
**Priority**: P1 — High

### 12.1 Backup Configuration

- [ ] **12.1.1** Configure UpdraftPlus (or similar)
  - Backup schedule: Daily (files + database)
  - Retention: Keep 7 daily, 4 weekly, 3 monthly
  - Remote storage: Google Drive, Dropbox, or S3
  
- [ ] **12.1.2** Test backup restoration
  - Download backup file
  - Restore to staging site
  - Verify all content intact
  
- [ ] **12.1.3** Document backup procedure
  - Manual backup steps
  - Restore instructions
  - Emergency contact info

**Deliverable**: Automated backups configured and tested

---

### 12.2 Monitoring Setup

- [ ] **12.2.1** Set up uptime monitoring
  - UptimeRobot (free) or Pingdom
  - Check every 5 minutes
  - Email/SMS alerts on downtime
  
- [ ] **12.2.2** Configure Google Analytics 4
  - Create GA4 property
  - Install tracking code (use plugin or theme.json)
  - Set up custom events: Newsletter signup, Competition entry, E-edition purchase
  
- [ ] **12.2.3** Set up Google Search Console
  - Verify site ownership
  - Submit sitemap
  - Monitor search performance, crawl errors

**Deliverable**: Monitoring configured with alerts

---

## Phase 13: Pre-Launch Checklist

**Estimated Time**: 2-3 hours  
**Priority**: P0 — Critical

### 13.1 Final Review

- [ ] **13.1.1** Content review
  - Proofread all static pages
  - Check for lorem ipsum placeholders
  - Verify all links work (use Broken Link Checker)
  
- [ ] **13.1.2** Legal review
  - Privacy Policy accurate and compliant (POPIA)
  - Terms of Service accurate
  - Cookie Policy accurate (if using cookies)
  - GDPR compliance (if applicable)
  
- [ ] **13.1.3** Brand consistency
  - Verify logo correct (high-res)
  - Check favicon (16x16, 32x32, 192x192, 512x512)
  - Verify brand colors accurate (#e01e12, #424242)
  - Check typography (Playfair Display SC + Karla)

**Deliverable**: Pre-launch review complete with sign-off

---

### 13.2 Launch Preparation

- [ ] **13.2.1** Disable "Coming Soon" mode
  - Remove maintenance mode plugin
  - Make site publicly accessible
  
- [ ] **13.2.2** Set up redirects
  - Redirect old Die Papier URLs to rooi rose (if applicable)
  - Set up 301 redirects via .htaccess or Redirection plugin
  - Verify redirect map from `/guidelines/wordpress-migration/redirects.md`
  
- [ ] **13.2.3** Optimize robots.txt
  - Allow all search engines
  - Disallow: /wp-admin/, /wp-includes/
  - Reference sitemap: `/sitemap_index.xml`
  
- [ ] **13.2.4** Create launch announcement
  - Social media posts (draft)
  - Email newsletter (draft)
  - Press release (if applicable)

**Deliverable**: Site ready for public launch

---

## Phase 14: Launch Day

**Estimated Time**: 4-6 hours  
**Priority**: P0 — Critical

### 14.1 Go Live

- [ ] **14.1.1** Final backup
  - Create manual backup before launch
  - Store locally and remotely
  
- [ ] **14.1.2** Switch DNS to production
  - Update domain DNS to production server
  - Propagation time: 24-48 hours
  - Keep staging site for testing
  
- [ ] **14.1.3** Monitor launch
  - Watch server logs for errors
  - Monitor uptime alerts
  - Check Google Analytics real-time traffic
  
- [ ] **14.1.4** Send launch announcements
  - Publish social media posts
  - Send newsletter to subscribers
  - Update Google My Business (if applicable)

**Deliverable**: Site live and publicly accessible

---

### 14.2 Post-Launch Monitoring (First 24 Hours)

- [ ] **14.2.1** Monitor performance
  - Check page load times every 2 hours
  - Verify CDN functioning
  - Check database performance
  
- [ ] **14.2.2** Monitor errors
  - Check error logs for PHP errors
  - Review 404 errors (broken links)
  - Monitor JavaScript console errors
  
- [ ] **14.2.3** Monitor user feedback
  - Check contact form submissions
  - Monitor social media mentions
  - Review early comments
  
- [ ] **14.2.4** Fix critical issues immediately
  - Prioritize: Security > Functionality > Visual
  - Deploy hotfixes to production
  - Document all changes

**Deliverable**: Stable site with no critical issues

---

## Phase 15: Post-Launch (Week 1)

**Estimated Time**: 4-6 hours  
**Priority**: P2 — Medium

### 15.1 SEO Indexing

- [ ] **15.1.1** Force Google crawl
  - Google Search Console → Request Indexing (homepage)
  - Submit sitemap again
  - Verify pages getting indexed
  
- [ ] **15.1.2** Monitor search appearance
  - Check Google SERPs for brand name
  - Verify meta titles/descriptions showing correctly
  - Check rich results (FAQ, Article schema)

**Deliverable**: Site indexed by Google within 7 days

---

### 15.2 Performance Review

- [ ] **15.2.1** Review analytics
  - Check traffic patterns
  - Identify popular content
  - Review bounce rate, session duration
  
- [ ] **15.2.2** Review conversion rates
  - Newsletter signups
  - E-edition purchases
  - Competition entries
  
- [ ] **15.2.3** Optimize based on data
  - Improve slow-loading pages
  - Fix high-bounce-rate pages
  - Promote popular content

**Deliverable**: Week 1 analytics report

---

## Success Criteria

### Launch-Ready Checklist

All items must be ✅ before launch:

- [ ] WordPress 6.4+ installed and configured
- [ ] rooi rose theme activated without errors
- [ ] All 7 essential plugins installed and configured
- [ ] 54 categories created (10 main + 44 subcategories)
- [ ] Navigation menus configured
- [ ] Minimum 20 articles published
- [ ] WooCommerce e-edition products live
- [ ] All forms functional (5 Gravity Forms)
- [ ] SEO configured (Yoast, schema, sitemap)
- [ ] Performance optimized (90+ PageSpeed score)
- [ ] Security hardened (SSL, firewall, backups)
- [ ] Accessibility tested (WCAG AA compliant)
- [ ] Cross-browser tested (6 browsers)
- [ ] Mobile responsive tested (3 devices)

**Launch Approval**: Requires sign-off from stakeholders after all items ✅

---

## Risk Management

### High-Risk Items

| Risk | Mitigation | Contingency |
|:-----|:-----------|:------------|
| **Data loss during migration** | Backup before every major change | Restore from backup, re-import |
| **Plugin conflicts** | Test plugins on staging first | Disable conflicting plugin, find alternative |
| **Payment gateway issues** | Test with test mode before live | Use backup gateway, manual invoicing |
| **Performance degradation** | Monitor PageSpeed after each change | Disable heavy plugins, optimize images |
| **Security breach** | Firewall, regular updates, monitoring | Restore from clean backup, security audit |
| **DNS propagation delays** | Announce DNS change 48h in advance | Use temporary URL, communicate delay |

---

## Timeline Estimate

**Total Estimated Time**: 40-60 hours

| Phase | Time | Dependencies |
|:------|:-----|:-------------|
| Phase 1: Environment Setup | 4-6h | None |
| Phase 2: Theme Installation | 8-12h | Phase 1 |
| Phase 3: Content Structure | 4-6h | Phase 2 |
| Phase 4: WooCommerce | 6-8h | Phase 2, 3 |
| Phase 5: Forms & Integrations | 4-6h | Phase 2 |
| Phase 6: Content Migration | 8-12h | Phase 3 |
| Phase 7: Advanced Ads | 3-4h | Phase 2 |
| Phase 8: SEO Configuration | 3-4h | Phase 3 |
| Phase 9: Performance | 4-6h | Phase 2-7 |
| Phase 10: Testing & QA | 6-8h | All previous phases |
| Phase 11: Security | 2-3h | Phase 1 |
| Phase 12: Backup & Monitoring | 2-3h | Phase 1 |
| Phase 13: Pre-Launch | 2-3h | All previous phases |
| Phase 14: Launch Day | 4-6h | All previous phases |
| Phase 15: Post-Launch | 4-6h | Phase 14 |

**Realistic Timeline**: 6-8 weeks (5-8 hours per week)

---

## Related Documentation

- [Theme Structure](/guidelines/wordpress-migration/theme-structure.md)
- [Content Architecture](/guidelines/rooi-rose/content-architecture.md)
- [WooCommerce Setup](/guidelines/wordpress-migration/third-party-plugins/woocommerce.md)
- [Gravity Forms Integration](/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md)
- [Template System](/guidelines/rooi-rose/template-system.md)

---

**Last Updated**: 2026-03-12  
**Version**: 1.0  
**Status**: ✅ Ready for Production Use

