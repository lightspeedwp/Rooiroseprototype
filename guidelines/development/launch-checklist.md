# Die Papier Launch Checklist

**Last updated**: 2026-03-02

This is the complete 10-phase launch checklist for taking Die Papier from development to production. Each phase must be completed sequentially, with all items verified before moving to the next phase.

---

## Phase 1: Pre-Launch Planning & Strategy

### Business Readiness
- [ ] **Legal entity registration confirmed** (Die Papier PTY Ltd)
- [ ] **Business licenses obtained** for digital publishing in South Africa
- [ ] **Tax registration complete** (VAT, PAYE, company tax)
- [ ] **Banking setup finalized** (merchant account, business accounts)
- [ ] **Insurance policies active** (professional indemnity, cyber liability)
- [ ] **Trademark registration filed** for "Die Papier" brand
- [ ] **Domain ownership verified** (diepapier.co.za and all variants)
- [ ] **SSL certificates purchased** (wildcard cert for all subdomains)
- [ ] **Email hosting configured** (admin@, support@, redaksie@, advertensies@)

### Content Strategy
- [ ] **Editorial calendar prepared** (minimum 4 weeks of content planned)
- [ ] **Launch day articles ready** (minimum 10 feature articles, 20 news items)
- [ ] **Author/journalist agreements signed** (all contributors onboarded)
- [ ] **Photography licensing verified** (all images have proper attribution/licenses)
- [ ] **Content guidelines documented** (style guide, editorial policy)
- [ ] **Moderation policy defined** (comments, user submissions)
- [ ] **Content workflow established** (draft → review → approval → publish)

### Marketing & Communications
- [ ] **Press release drafted** (Afrikaans and English versions)
- [ ] **Media contact list compiled** (journalists, bloggers, influencers)
- [ ] **Social media accounts created** (Facebook, Twitter, Instagram, LinkedIn)
- [ ] **Social media content calendar ready** (2 weeks pre-launch, 4 weeks post-launch)
- [ ] **Email newsletter template designed** (welcome series, weekly digest)
- [ ] **Subscriber incentive defined** (launch offer, early access benefits)
- [ ] **Partnership agreements finalized** (cross-promotion, content syndication)
- [ ] **Advertising packages defined** (rates, specs, booking process)
- [ ] **Launch event planned** (if applicable — virtual or physical)

### Technical Infrastructure
- [ ] **Hosting provider selected** (WordPress-optimized, CDN included)
- [ ] **Server specifications confirmed** (CPU, RAM, storage, bandwidth)
- [ ] **Staging environment deployed** (exact replica of production)
- [ ] **Backup solution configured** (automated daily backups, offsite storage)
- [ ] **Monitoring tools installed** (uptime monitoring, error tracking)
- [ ] **DNS configuration prepared** (A records, CNAME, MX, SPF, DKIM)
- [ ] **CDN configured** (CloudFlare/Cloudinary for images, static assets)
- [ ] **Load testing plan documented** (expected traffic, stress test scenarios)

### Team Readiness
- [ ] **Roles and responsibilities defined** (editor, developers, support, marketing)
- [ ] **Training completed** (WordPress admin, content management, support workflows)
- [ ] **Support desk configured** (ticketing system, knowledge base, FAQs)
- [ ] **Emergency contacts list created** (hosting, domain, payment gateway, CDN)
- [ ] **Launch day schedule published** (who does what, when, contingency plans)
- [ ] **Post-launch support roster finalized** (24/7 coverage for first 72 hours)

---

## Phase 2: WordPress Theme & Plugin Foundation

### theme.json & Presets
- [ ] **theme.json v3 schema validated** (OllieWP-aligned)
- [ ] **Color palette standardized** (10 semantic slugs: primary, primary-alt, secondary, secondary-accent, base, tertiary, border-light, main, main-accent, accent)
- [ ] **Typography configured** (Inter + Roboto Serif variable fonts, 9 fluid sizes)
- [ ] **Spacing scale verified** (9 semantic slugs: x-small through xxx-large)
- [ ] **Layout widths set** (contentSize: 1280px, wideSize: 1400px)

### Block Styles & Section Styles
- [ ] **All 71 block style JSON files registered** (core, WooCommerce, third-party)
- [ ] **All 9 section style variations verified** (is-style-section-*)
- [ ] **Dark mode overrides implemented** for all section styles

### Third-Party Plugin Integration
- [ ] **Advanced Ads: 12 manual placements mapped** to production GAM IDs
- [ ] **Advanced Ads: Sticky placements configured** (Sidebar, Mobile Footer)
- [ ] **Advanced Ads: Background/Takeover ads configured** (Desktop only)
- [ ] **Advanced Ads: Content Injection set up** for in-article ads (after P3, P7)
- [ ] **Advanced Ads: Display conditions verified** (Exclude commerce pages, hide for members)
- [ ] **Gravity Forms: Pattern IDs aligned** with production form IDs
- [ ] **Gravity Forms: Afrikaans labels & placeholders** verified in all forms
- [ ] **Yoast SEO: Breadcrumbs configured** to match `dp-breadcrumbs` design
- [ ] **Yoast SEO: FAQ block schema validated** on Newsletter/Subscribe pages
- [ ] **Social Sharing: Outermost network priority set** (WhatsApp > Facebook > X > Email > Copy)
- [ ] **Social Sharing: Afrikaans translations active** via `social-sharing-i18n.js`
- [ ] **Icon Block: Custom SVG library registered** for Lucide icons

## Phase 3: Content Audit & Migration

### Content Inventory
- [ ] **All pages catalogued** (159+ patterns documented)
- [ ] **Article archive reviewed** (news, opinion, sport, etc. verified)
- [ ] **Media library audited** (sideloaded Unsplash images + local assets)
- [ ] **Redirect map verified** (100+ legacy English URLs → Afrikaans URLs)
- [ ] **Nginx/Apache redirect config files generated** (`redirects.conf`, `.htaccess-redirects`)

### WordPress Data Migration (WXR)
- [ ] **CPTs registered & verified** (dp_event, dp_competition, dp_sponsor, dp_eedition, dp_obituary, dp_multimedia, dp_faq)
- [ ] **Taxonomies seeded** (5 hierarchical taxonomies + standard categories/tags)
- [ ] **SCF fields verified** (all meta fields registered in `inc/scf-fields.php`)
- [ ] **Author profiles migrated** (biographies, photos, social links)
- [ ] **WXR script executed & validated** (using `validate-wxr.sh`)

## Phase 4: E-Editions & WooCommerce

### WooCommerce Setup
- [ ] **E-Edition products created** (Single Issue, Monthly, Quarterly, Annual)
- [ ] **Payfast integration active** (verified merchant ID, passphrase, IPN)
- [ ] **Afrikaans strings verified** in checkout, cart, and account pages
- [ ] **Membership gates active** (content restriction for `premium` content)
- [ ] **Ad-free experience tested** for logged-in subscribers

### E-Editions Access
- [ ] **PDF files uploaded** to secure directory
- [ ] **Access rules verified** (Single issue purchase vs. active membership)
- [ ] **Issue metadata populated** (date, cover, page count)
- [ ] **Archive navigation verified** (historical issues accessible)

---

## Phase 5: Design System Verification

### Typography Audit
- [ ] **All headings use correct fonts** (H1-H4 = Roboto Serif, H5-H6 = Inter)
- [ ] **Body text uses Inter** (all paragraphs, UI elements, forms)
- [ ] **No system fonts present** (no Arial, Helvetica, sans-serif fallbacks)
- [ ] **Font weights correct** (400, 500, 600, 700 only — no 300, 800, 900)
- [ ] **Font variation settings applied** (Roboto Serif opsz, wdth, GRAD settings)
- [ ] **Line heights match tokens** (--lh-h1 through --lh-p4)
- [ ] **Letter spacing matches tokens** (--ls-h1 through --ls-p4)
- [ ] **Fluid typography working** (clamp values scale correctly 390px → 1280px)
- [ ] **Text contrast ratios pass WCAG AA** (4.5:1 minimum for body text)
- [ ] **Dark mode typography verified** (all text readable, no contrast issues)

### Color Audit
- [ ] **All colors use CSS variables** (no hardcoded hex values except brand/social)
- [ ] **Brand colors consistent** (#E82C27 red, #172134 navy, #ebe7e7 warm gray)
- [ ] **Semantic color tokens used** (--primary, --foreground, --background, etc.)
- [ ] **Dark mode colors correct** (light/dark variants for all tokens)
- [ ] **Accessible text link red used** (#C41F20 for body text links, #E82C27 for buttons)
- [ ] **Social brand colors exempt** (Facebook #1877F2, etc. — documented exemptions)
- [ ] **Competition gradient correct** (dark-from/dark-to for dark mode)
- [ ] **Chart colors accessible** (5 distinct oklch colors for data visualization)
- [ ] **No arbitrary Tailwind colors** (all colors map to design tokens)

### Spacing & Layout Audit
- [ ] **Container max-width: 1440px** (all structural chrome constrained)
- [ ] **Spacing uses tokens** (--space-10 through --space-100)
- [ ] **Padding/margin consistent** (clamp values for responsive spacing)
- [ ] **Grid systems verified** (2/3/4 column layouts responsive)
- [ ] **Card spacing consistent** (gap between cards matches design system)
- [ ] **Section spacing correct** (48px/64px/80px between major sections)
- [ ] **Mobile padding correct** (16px min, 32px max on small screens)

### Component Audit
- [ ] **All 159 patterns functional** (Header, Footer, Hero, Sections, Forms, etc.)
- [ ] **Buttons match spec** (Inter Medium 500, correct sizes, hover states)
- [ ] **Forms styled correctly** (Inter Regular 400, 16px to prevent iOS zoom)
- [ ] **Badges use Inter SemiBold 600** (uppercase, 12px, correct letter-spacing)
- [ ] **Navigation uses Inter Medium 500** (15px, active state = 600)
- [ ] **Tabs styled correctly** (Inter Medium 500, active/inactive states)
- [ ] **Cards consistent** (image ratios, padding, hover effects)
- [ ] **Icons from Lucide React** (consistent size, color, alignment)
- [ ] **Shadows match tokens** (shadow-sm, shadow-md, shadow-lg)
- [ ] **Border radius consistent** (0.5rem default, rounded-xl for cards)

### Responsive Design Audit
- [ ] **Mobile breakpoint: 390px minimum** (iPhone SE, Galaxy S8)
- [ ] **Tablet breakpoint: 768px** (iPad, Android tablets)
- [ ] **Desktop breakpoint: 1024px** (laptop screens)
- [ ] **Large desktop: 1280px+** (desktop monitors)
- [ ] **All layouts tested at 5 breakpoints** (390px, 768px, 1024px, 1280px, 1920px)
- [ ] **Touch targets ≥ 44px** (buttons, links on mobile)
- [ ] **Mobile menu functional** (hamburger, drawer, close, search)
- [ ] **Images responsive** (srcset for 1x/2x, lazy loading)
- [ ] **Tables responsive** (horizontal scroll or stacked layout)

### Dark Mode Audit
- [ ] **Toggle accessible** (visible, keyboard navigable, persisted)
- [ ] **All colors have dark variants** (--wp--preset--color--* tokens)
- [ ] **Text contrast passes WCAG AA** (dark mode text on dark backgrounds)
- [ ] **Images don't bleed** (borders/shadows on images for definition)
- [ ] **Form inputs readable** (dark backgrounds, light text, visible borders)
- [ ] **Hover states visible** (sufficient contrast in dark mode)
- [ ] **Loading states visible** (skeletons, spinners contrast properly)
- [ ] **Email templates exempt** (documented exemption — light mode only)

---

## Phase 4: Functionality Testing

### Navigation & Routing
- [ ] **All 57 routes functional** (no 404 errors on internal links)
- [ ] **Breadcrumbs correct** (Home → Category → Article hierarchy)
- [ ] **Category filtering works** (Nuus, Opinie, Sport, Vermaak, etc.)
- [ ] **Search functional** (live suggestions, results page, filters)
- [ ] **Pagination working** (article archives, E-Edition archives)
- [ ] **404 page designed** (helpful error page with search, links)
- [ ] **Redirects tested** (legacy English URLs → Afrikaans URLs)
- [ ] **Deep linking works** (share URLs load correct page state)

### User Authentication
- [ ] **Registration form working** (email/password, validation, confirmation)
- [ ] **Login form working** (email/password, "remember me", error handling)
- [ ] **Password reset working** (email sent, reset link functional, new password saved)
- [ ] **Email verification required** (users must verify before full access)
- [ ] **Social login tested** (if enabled — Facebook, Google OAuth)
- [ ] **User roles assigned correctly** (Free, Guest, Subscriber, Admin)
- [ ] **Profile editing works** (name, email, password, avatar)
- [ ] **Account deletion functional** (GDPR compliance — user can delete account)

### E-Editions Commerce
- [ ] **Guest Access purchase working** (R5 → single PDF download)
- [ ] **Subscription purchase working** (R20/R50/R120 → membership created)
- [ ] **PayFast integration tested** (payment success, payment failure, IPN)
- [ ] **Subscription auto-renewal working** (monthly billing, payment retries)
- [ ] **Access gates functional** (non-subscribers see blurred/locked content)
- [ ] **Subscriber dashboard working** (active subscriptions, download history)
- [ ] **Download links secure** (time-limited, one-time use, or user-specific)
- [ ] **Receipt emails sent** (purchase confirmation, download link)
- [ ] **Refund process tested** (admin can issue refund, membership revoked)
- [ ] **Failed payment handling** (retry logic, email notifications, grace period)

### Forms & Interactions
- [ ] **Contact form working** (submission, validation, email delivery)
- [ ] **Newsletter signup working** (email capture, double opt-in, confirmation)
- [ ] **Comment system tested** (if enabled — post comment, moderation, notifications)
- [ ] **Competition entry working** (form validation, entry confirmation, winner selection)
- [ ] **File upload tested** (image upload, size limits, file type validation)
- [ ] **CAPTCHA working** (spam prevention on forms)
- [ ] **Form error messages clear** (validation messages in Afrikaans, helpful)
- [ ] **Success messages clear** ("Dankie vir jou boodskap" confirmation)

### Search & Filters
- [ ] **Global search working** (searches articles, pages, E-Editions)
- [ ] **Live search suggestions** (typeahead results, keyboard navigation)
- [ ] **Search results relevant** (sorted by relevance, date, or popularity)
- [ ] **Filter by category** (Nuus, Opinie, Sport, Vermaak checkboxes)
- [ ] **Filter by date range** (last week, last month, custom range)
- [ ] **Filter by author** (journalist byline filter)
- [ ] **Sort options working** (relevance, date, popularity)
- [ ] **No results page helpful** (suggestions, popular articles, category links)

### Media & Embeds
- [ ] **Images load correctly** (WebP with JPEG fallback, lazy loading)
- [ ] **Image galleries work** (lightbox, swipe navigation, captions)
- [ ] **Videos embed properly** (YouTube, Vimeo, or self-hosted)
- [ ] **Audio players work** (podcast embeds, play/pause, scrubbing)
- [ ] **PDF viewer functional** (E-Edition reader, zoom, page navigation)
- [ ] **Social embeds work** (Twitter, Instagram, Facebook embeds)
- [ ] **Infographics responsive** (SVG scales, readable on mobile)
- [ ] **Image alt text present** (all images have descriptive alt text)

### Social Sharing
- [ ] **Share buttons functional** (Facebook, Twitter, WhatsApp, LinkedIn, Email)
- [ ] **Open Graph tags correct** (title, description, image, URL)
- [ ] **Twitter Card tags correct** (summary_large_image, title, description)
- [ ] **WhatsApp preview correct** (title, description, image)
- [ ] **Copy link button working** (copies URL to clipboard, toast confirmation)
- [ ] **Email share opens client** (mailto: link with subject, body)
- [ ] **Share counts accurate** (if enabled — display share counts)

### Admin & Editorial Tools
- [ ] **WordPress admin accessible** (wp-admin login, 2FA enabled)
- [ ] **Block editor working** (Gutenberg with custom blocks)
- [ ] **Custom blocks functional** (Hero, Article Card, E-Edition Sidebar, etc.)
- [ ] **Draft/publish workflow works** (save draft, submit for review, publish)
- [ ] **Scheduled posts work** (future-dated posts auto-publish)
- [ ] **Revision history accessible** (compare revisions, restore previous version)
- [ ] **Media library organized** (folders, tags, search)
- [ ] **User management working** (add/edit/delete users, assign roles)
- [ ] **Analytics dashboard accessible** (visitor stats, popular content)

---

## Phase 5: Performance Optimization

### Page Speed
- [ ] **Lighthouse score: 90+ (Mobile)** (Performance metric)
- [ ] **Lighthouse score: 95+ (Desktop)** (Performance metric)
- [ ] **First Contentful Paint < 1.8s** (mobile on 3G)
- [ ] **Largest Contentful Paint < 2.5s** (mobile on 3G)
- [ ] **Time to Interactive < 3.8s** (mobile on 3G)
- [ ] **Cumulative Layout Shift < 0.1** (no layout jumps on load)
- [ ] **Total Blocking Time < 200ms** (smooth scrolling, interactions)
- [ ] **Speed Index < 3.4s** (visual completeness)

### Asset Optimization
- [ ] **Images compressed** (WebP 80% quality, max 1920px width)
- [ ] **Image lazy loading enabled** (offscreen images deferred)
- [ ] **CSS minified** (production build, comments removed)
- [ ] **JavaScript minified** (production build, tree-shaking enabled)
- [ ] **Fonts optimized** (font-display: swap, WOFF2 format)
- [ ] **SVGs optimized** (SVGO, removed unnecessary metadata)
- [ ] **No unused CSS** (PurgeCSS or similar, only used styles shipped)
- [ ] **No unused JavaScript** (code splitting, dynamic imports)

### Caching Strategy
- [ ] **Browser caching configured** (1 year for static assets, 1 hour for HTML)
- [ ] **CDN caching enabled** (images, CSS, JS served from edge locations)
- [ ] **WordPress object cache** (Redis or Memcached for database queries)
- [ ] **Page caching enabled** (WP Rocket, W3 Total Cache, or server-level)
- [ ] **Gzip/Brotli compression** (text assets compressed)
- [ ] **Cache invalidation working** (purge cache on content publish)
- [ ] **Logged-in users bypass cache** (personalized content served fresh)
- [ ] **API responses cached** (WooCommerce, search results cached)

### Database Optimization
- [ ] **Database indexes created** (post_date, post_status, post_type)
- [ ] **Unused tables removed** (old plugins, spam, revisions)
- [ ] **Revision limits set** (max 5 revisions per post)
- [ ] **Auto-save interval increased** (reduce database writes)
- [ ] **Transient cleanup automated** (expired transients purged daily)
- [ ] **Query monitoring enabled** (slow query log, N+1 query detection)
- [ ] **Database backups optimized** (incremental backups, compressed)

### Third-Party Scripts
- [ ] **Google Analytics loaded async** (gtag.js deferred, no blocking)
- [ ] **Facebook Pixel loaded async** (no render-blocking)
- [ ] **Ad scripts lazy loaded** (if ads enabled — load on scroll)
- [ ] **Social widgets lazy loaded** (Facebook/Twitter embeds deferred)
- [ ] **No FOUT/FOIT** (fonts load without flash of unstyled text)
- [ ] **Critical CSS inlined** (above-the-fold styles in <head>)
- [ ] **Non-critical CSS deferred** (loaded async or via media query)

### Server Configuration
- [ ] **HTTP/2 enabled** (multiplexing, server push)
- [ ] **PHP 8.2+ configured** (latest stable version, OPcache enabled)
- [ ] **Server response time < 200ms** (TTFB target)
- [ ] **Keep-Alive enabled** (persistent connections)
- [ ] **Resource hints used** (dns-prefetch, preconnect, prefetch)
- [ ] **Security headers set** (CSP, X-Frame-Options, HSTS)

### Mobile Optimization
- [ ] **Responsive images** (srcset for 1x/2x, sizes attribute)
- [ ] **Touch targets ≥ 44px** (buttons, links easily tappable)
- [ ] **No horizontal scroll** (viewport width respected)
- [ ] **No pinch-zoom required** (text readable without zooming)
- [ ] **Mobile menu fast** (drawer opens < 300ms)
- [ ] **Reduced motion respected** (prefers-reduced-motion CSS)

---

## Phase 6: SEO & Analytics Setup

### Technical SEO
- [ ] **Robots.txt configured** (allow search engines, block admin, wp-includes)
- [ ] **XML sitemap generated** (Yoast or Rank Math sitemap)
- [ ] **Sitemap submitted to Google** (Google Search Console)
- [ ] **Sitemap submitted to Bing** (Bing Webmaster Tools)
- [ ] **Canonical URLs set** (self-referencing canonical on all pages)
- [ ] **Hreflang tags added** (if multilingual — Afrikaans/English)
- [ ] **Structured data implemented** (Article, NewsArticle, Organization schema)
- [ ] **Breadcrumb schema added** (JSON-LD breadcrumb list)
- [ ] **Logo schema added** (Organization with logo, social profiles)
- [ ] **Author schema added** (Person schema for journalists)
- [ ] **FAQ schema added** (FAQPage schema on FAQ pages)
- [ ] **Review schema tested** (if applicable — AggregateRating)

### On-Page SEO
- [ ] **Meta titles optimized** (< 60 characters, keyword-rich, unique)
- [ ] **Meta descriptions optimized** (< 160 characters, compelling, unique)
- [ ] **H1 tags unique** (one H1 per page, matches page topic)
- [ ] **Heading hierarchy correct** (H1 → H2 → H3, no skipped levels)
- [ ] **Alt text descriptive** (images describe content, include keywords)
- [ ] **Internal linking strategy** (related articles, category links, breadcrumbs)
- [ ] **External links rel="nofollow"** (where appropriate — ads, user content)
- [ ] **URL structure clean** (/kategorie/artikel-slug, no ?p=123)
- [ ] **Keyword research completed** (target keywords per category/article)
- [ ] **Content optimized** (keywords in title, headings, first 100 words)

### Open Graph & Social Meta
- [ ] **og:title set** (Facebook/LinkedIn share title)
- [ ] **og:description set** (Facebook/LinkedIn share description)
- [ ] **og:image set** (1200x630px image, < 8MB)
- [ ] **og:url set** (canonical URL)
- [ ] **og:type set** (article, website, etc.)
- [ ] **og:site_name set** ("Die Papier")
- [ ] **og:locale set** (af_ZA for Afrikaans)
- [ ] **twitter:card set** (summary_large_image)
- [ ] **twitter:site set** (@diepapier handle)
- [ ] **twitter:creator set** (author's Twitter handle)
- [ ] **Social preview tested** (Facebook Debugger, Twitter Card Validator)

### Analytics Setup
- [ ] **Google Analytics 4 configured** (GA4 property created, gtag.js installed)
- [ ] **Goals/conversions tracked** (newsletter signup, E-Edition purchase, article read)
- [ ] **Event tracking configured** (button clicks, video plays, scroll depth)
- [ ] **Enhanced eCommerce tracking** (WooCommerce integration, transaction tracking)
- [ ] **User ID tracking** (logged-in users tracked across devices)
- [ ] **Scroll tracking enabled** (25%, 50%, 75%, 100% article read)
- [ ] **Outbound link tracking** (clicks to external sites)
- [ ] **File download tracking** (PDF downloads, E-Edition downloads)
- [ ] **Search tracking** (internal search queries, no results searches)

### Search Console Setup
- [ ] **Google Search Console verified** (DNS or meta tag verification)
- [ ] **Bing Webmaster Tools verified** (DNS or meta tag verification)
- [ ] **Coverage report reviewed** (no index errors, all pages submitted)
- [ ] **Mobile usability checked** (no mobile-specific errors)
- [ ] **Core Web Vitals reviewed** (LCP, FID, CLS all "Good")
- [ ] **Manual actions checked** (no penalties, no security issues)
- [ ] **Rich results validated** (Article, FAQ, Breadcrumb rich snippets working)

### Local SEO (if applicable)
- [ ] **Google My Business created** (if physical location/events)
- [ ] **NAP consistent** (Name, Address, Phone on all platforms)
- [ ] **Local schema added** (LocalBusiness schema with address, hours)
- [ ] **Local citations built** (directories, industry listings)

---

## Phase 7: Security & Compliance

### WordPress Security
- [ ] **WordPress core updated** (latest stable version installed)
- [ ] **All plugins updated** (no outdated or abandoned plugins)
- [ ] **All themes updated** (child theme if customizations made)
- [ ] **Admin username not "admin"** (unique username, strong password)
- [ ] **Two-factor authentication enabled** (2FA for all admin users)
- [ ] **Login attempts limited** (fail2ban, Wordfence, or similar)
- [ ] **XML-RPC disabled** (prevent brute force attacks)
- [ ] **File editing disabled** (define('DISALLOW_FILE_EDIT', true))
- [ ] **Directory browsing disabled** (Options -Indexes in .htaccess)
- [ ] **Database prefix changed** (not default "wp_")
- [ ] **Security keys regenerated** (wp-config.php salts)
- [ ] **wp-config.php secured** (moved outside web root or 444 permissions)
- [ ] **Firewall configured** (Wordfence, Sucuri, or server-level WAF)
- [ ] **Malware scanner installed** (daily scans, email alerts)
- [ ] **Security headers set** (CSP, X-Frame-Options, X-XSS-Protection, HSTS)

### SSL & HTTPS
- [ ] **SSL certificate installed** (Let's Encrypt, Cloudflare, or commercial)
- [ ] **HTTPS enforced** (all HTTP requests redirect to HTTPS)
- [ ] **Mixed content resolved** (all resources load over HTTPS)
- [ ] **HSTS header set** (Strict-Transport-Security: max-age=31536000)
- [ ] **SSL Labs grade A+** (tested at ssllabs.com)
- [ ] **Certificate auto-renewal configured** (certbot cron job or hosting auto-renew)

### Data Protection & GDPR
- [ ] **Privacy Policy published** (GDPR-compliant, Afrikaans & English)
- [ ] **Cookie Notice displayed** (consent banner, cookie policy link)
- [ ] **Cookie consent tracked** (user preferences stored, respected)
- [ ] **Data Processing Agreement signed** (with hosting provider, payment gateway)
- [ ] **User data export** (GDPR right to data portability — WP export tool)
- [ ] **User data deletion** (GDPR right to erasure — WP deletion tool)
- [ ] **Data breach response plan** (documented procedure, notification templates)
- [ ] **Third-party data processors listed** (Google Analytics, PayFast, CDN, etc.)
- [ ] **Email opt-in confirmed** (double opt-in for newsletters)
- [ ] **Marketing consent separate** (explicit consent for marketing emails)

### POPIA Compliance (South Africa)
- [ ] **POPIA policy published** (Protection of Personal Information Act)
- [ ] **Information Officer appointed** (contact details published)
- [ ] **Data collection justified** (legitimate business purpose documented)
- [ ] **Data retention policy defined** (how long data is kept, deletion schedule)
- [ ] **User consent explicit** (clear, affirmative action required)
- [ ] **Data subject rights respected** (access, correction, deletion, objection)
- [ ] **Cross-border transfer safeguards** (if using overseas services)
- [ ] **Security measures documented** (encryption, access controls, backups)

### Payment Security (PCI DSS)
- [ ] **No card data stored** (PayFast handles all payment processing)
- [ ] **SSL certificate on checkout** (HTTPS enforced on payment pages)
- [ ] **Payment gateway PCI compliant** (PayFast certification verified)
- [ ] **IPN callback secured** (signature verification, IP whitelist)
- [ ] **Fraud detection enabled** (PayFast fraud rules configured)
- [ ] **Refund process documented** (manual refunds via PayFast dashboard)

### Legal Compliance
- [ ] **Terms of Service published** (user agreement, acceptable use policy)
- [ ] **Disclaimer published** (content accuracy, liability limits)
- [ ] **Copyright notice published** (©2026 Die Papier, all rights reserved)
- [ ] **DMCA policy published** (copyright infringement procedure)
- [ ] **User-generated content moderation** (comments, submissions reviewed)
- [ ] **Defamation policy documented** (editorial standards, correction procedure)
- [ ] **Advertising disclosure** (sponsored content clearly labeled)
- [ ] **Affiliate disclosure** (if applicable — FTC/ASA compliance)

### Backup & Disaster Recovery
- [ ] **Automated daily backups** (full site + database)
- [ ] **Offsite backup storage** (separate from hosting server)
- [ ] **Backup retention policy** (daily for 7 days, weekly for 4 weeks, monthly for 12 months)
- [ ] **Backup restoration tested** (dry run restore to staging)
- [ ] **Disaster recovery plan documented** (step-by-step restoration procedure)
- [ ] **Emergency contact list** (hosting, domain, CDN, payment gateway)
- [ ] **Backup encryption enabled** (backups encrypted at rest)
- [ ] **Backup integrity verified** (automated verification checks)

---

## Phase 8: Pre-Launch Testing

### Cross-Browser Testing
- [ ] **Chrome (latest)** — Desktop & Mobile
- [ ] **Firefox (latest)** — Desktop & Mobile
- [ ] **Safari (latest)** — Desktop & Mobile (iOS)
- [ ] **Edge (latest)** — Desktop
- [ ] **Samsung Internet** — Mobile (Android)
- [ ] **Opera** — Desktop (optional)
- [ ] **IE11** — Graceful degradation (if required)

### Device Testing
- [ ] **iPhone 13/14/15** (iOS 17, Safari)
- [ ] **iPhone SE (2nd gen)** (smallest modern iPhone)
- [ ] **Samsung Galaxy S21/S22/S23** (Android 13+, Chrome)
- [ ] **Google Pixel 6/7** (Android 13+, Chrome)
- [ ] **iPad Pro** (iPadOS, Safari)
- [ ] **MacBook Pro** (macOS, Chrome/Safari)
- [ ] **Windows laptop** (Windows 11, Chrome/Edge)
- [ ] **Desktop monitor (1920×1080)** (Windows/Mac, all browsers)
- [ ] **Desktop monitor (2560×1440)** (Windows/Mac, all browsers)
- [ ] **4K monitor (3840×2160)** (if target audience)

### Accessibility Testing
- [ ] **WCAG 2.1 AA compliance verified** (axe DevTools, WAVE)
- [ ] **Keyboard navigation working** (tab order logical, all interactive elements accessible)
- [ ] **Screen reader tested** (NVDA on Windows, VoiceOver on Mac/iOS)
- [ ] **Focus indicators visible** (focus ring on all interactive elements)
- [ ] **Color contrast passes WCAG AA** (4.5:1 for text, 3:1 for UI elements)
- [ ] **Alt text descriptive** (all images have meaningful alt text)
- [ ] **Form labels associated** (all inputs have <label> or aria-label)
- [ ] **ARIA landmarks used** (nav, main, aside, footer)
- [ ] **Headings hierarchical** (H1 → H2 → H3, no skipped levels)
- [ ] **Skip links present** ("Skip to content" at top of page)
- [ ] **No keyboard traps** (users can tab out of all interactive elements)
- [ ] **Reduced motion respected** (prefers-reduced-motion CSS honored)
- [ ] **Text can be zoomed to 200%** (no loss of functionality)

### Functional Testing
- [ ] **All 57 pages load** (no 404s, no 500 errors)
- [ ] **All forms submit** (contact, newsletter, comment, competition)
- [ ] **All links work** (internal, external, anchor links)
- [ ] **Search returns results** (relevant results, no errors)
- [ ] **Filters work** (category, date, author filters)
- [ ] **Pagination works** (next/previous, page numbers, jump to page)
- [ ] **User registration works** (sign up, email verification, login)
- [ ] **Password reset works** (email sent, reset link valid, password changed)
- [ ] **E-Edition purchase works** (add to cart, checkout, payment, download)
- [ ] **Subscription works** (monthly/quarterly/semi-annual, auto-renewal)
- [ ] **Access gates work** (non-subscribers blocked, subscribers granted access)
- [ ] **Comments work** (if enabled — post comment, moderation, notifications)
- [ ] **Social sharing works** (Facebook, Twitter, WhatsApp, LinkedIn, Email)
- [ ] **Dark mode toggle works** (theme persists, all pages styled)
- [ ] **Mobile menu works** (open, close, search, navigation)

### Load Testing
- [ ] **Concurrent users: 100** (site remains responsive)
- [ ] **Concurrent users: 500** (site remains responsive)
- [ ] **Concurrent users: 1000** (acceptable degradation, no crashes)
- [ ] **Peak traffic scenario tested** (launch day, viral article traffic surge)
- [ ] **Database connection limits tested** (no connection pool exhaustion)
- [ ] **CDN failover tested** (site still loads if CDN down)
- [ ] **Payment gateway load tested** (multiple simultaneous purchases)
- [ ] **Backup restoration tested under load** (can restore during high traffic)

### Security Testing
- [ ] **SQL injection tested** (all forms, URL parameters sanitized)
- [ ] **XSS vulnerability tested** (user input escaped, no script injection)
- [ ] **CSRF protection verified** (nonces on all forms)
- [ ] **File upload vulnerability tested** (only allowed file types accepted)
- [ ] **Brute force protection tested** (login attempts limited, CAPTCHA required)
- [ ] **Session hijacking prevented** (secure cookies, HttpOnly flag)
- [ ] **Directory traversal prevented** (no access to sensitive files)
- [ ] **XML-RPC attacks blocked** (XML-RPC disabled or secured)
- [ ] **Clickjacking prevented** (X-Frame-Options header set)
- [ ] **Security headers verified** (CSP, HSTS, X-XSS-Protection)

### Email Testing
- [ ] **Registration confirmation sent** (welcome email received)
- [ ] **Password reset email sent** (reset link received, valid)
- [ ] **Purchase confirmation sent** (receipt email received)
- [ ] **Subscription confirmation sent** (membership welcome email)
- [ ] **Newsletter emails sent** (scheduled send works, unsubscribe link present)
- [ ] **Comment notification sent** (if enabled — author notified of new comments)
- [ ] **Form submission confirmation** (contact form auto-reply)
- [ ] **Emails not in spam** (SPF, DKIM, DMARC configured, spam score checked)
- [ ] **Emails mobile-friendly** (responsive email template, readable on mobile)
- [ ] **Unsubscribe working** (one-click unsubscribe, preference center)

### Content Review
- [ ] **All copy proofread** (no spelling/grammar errors)
- [ ] **All images optimized** (correct size, compressed, alt text present)
- [ ] **All links verified** (no broken links, correct targets)
- [ ] **All metadata complete** (meta titles, descriptions, OG tags)
- [ ] **All E-Editions uploaded** (PDFs accessible, metadata correct)
- [ ] **All author profiles complete** (bios, photos, social links)
- [ ] **All categories populated** (minimum 5 articles per category)
- [ ] **Homepage curated** (featured articles, hero section, sidebars)
- [ ] **Legal pages reviewed** (Terms, Privacy, Disclaimer by lawyer)

---

## Phase 9: Deployment & Go-Live

### Pre-Deployment Checklist
- [ ] **Staging site fully tested** (all Phase 8 tests passed)
- [ ] **Production database prepared** (empty or seeded with launch content)
- [ ] **DNS TTL lowered** (to 300 seconds, 24 hours before launch)
- [ ] **Maintenance mode page ready** ("We're launching soon...")
- [ ] **Rollback plan documented** (step-by-step instructions)
- [ ] **Team briefed** (roles, responsibilities, emergency contacts)
- [ ] **Launch checklist printed** (physical copy for each team member)
- [ ] **Communication channels open** (Slack, WhatsApp, phone numbers confirmed)

### Deployment Day (T-0)
- [ ] **Final staging backup** (full site + database backup taken)
- [ ] **Enable maintenance mode** (display "launching soon" page)
- [ ] **Sync files to production** (rsync, FTP, or Git deploy)
- [ ] **Import production database** (if not already migrated)
- [ ] **Update wp-config.php** (production database credentials, salts)
- [ ] **Update DNS** (point domain to production server)
- [ ] **Verify DNS propagation** (check multiple locations, wait for propagation)
- [ ] **Disable maintenance mode** (site goes live!)
- [ ] **Flush all caches** (WordPress cache, CDN cache, browser cache)
- [ ] **Test homepage** (loads correctly, no errors)
- [ ] **Test 5 random pages** (articles, category pages, E-Editions)
- [ ] **Test user registration** (sign up, email received)
- [ ] **Test E-Edition purchase** (end-to-end transaction)
- [ ] **Submit sitemap to Google** (Google Search Console)
- [ ] **Submit sitemap to Bing** (Bing Webmaster Tools)

### Immediate Post-Launch (First 2 Hours)
- [ ] **Monitor server load** (CPU, RAM, bandwidth usage)
- [ ] **Monitor error logs** (PHP errors, WordPress debug log)
- [ ] **Monitor uptime** (Pingdom, UptimeRobot alerts)
- [ ] **Monitor analytics** (real-time visitors, traffic sources)
- [ ] **Monitor social media** (mentions, shares, feedback)
- [ ] **Monitor support inbox** (user-reported issues)
- [ ] **Test checkout again** (ensure payments still working)
- [ ] **Test email delivery** (registration, newsletter, receipts)
- [ ] **Check for 404s** (monitor 404 log, fix broken links)
- [ ] **Check for slow pages** (identify bottlenecks, optimize)

### Day 1 Post-Launch
- [ ] **Full site smoke test** (all critical paths functional)
- [ ] **Review analytics** (visitor count, bounce rate, top pages)
- [ ] **Review error logs** (any new errors introduced)
- [ ] **Review support tickets** (common issues, quick fixes needed)
- [ ] **Review social media** (user feedback, viral potential)
- [ ] **Review payment gateway** (successful transactions, failed payments)
- [ ] **Backup production site** (full backup after first 24 hours)
- [ ] **Celebrate launch!** 🎉 (team lunch, acknowledgments)

---

## Phase 10: Post-Launch Monitoring

### Week 1 Monitoring
- [ ] **Daily analytics review** (visitor trends, popular content, traffic sources)
- [ ] **Daily error log review** (PHP errors, JavaScript errors, 404s)
- [ ] **Daily uptime monitoring** (downtime incidents, response times)
- [ ] **Daily performance checks** (Lighthouse scores, Core Web Vitals)
- [ ] **Daily security scans** (malware scans, firewall logs)
- [ ] **Daily backup verification** (automated backups running, offsite storage confirmed)
- [ ] **User feedback collection** (support tickets, social media comments)
- [ ] **Content publishing pace** (daily articles published, editorial calendar on track)
- [ ] **E-Edition sales tracking** (conversions, revenue, subscription growth)
- [ ] **Newsletter performance** (open rate, click rate, unsubscribe rate)

### Week 2-4 Monitoring
- [ ] **Weekly analytics report** (traffic trends, top articles, demographics)
- [ ] **Weekly SEO performance** (Search Console impressions, clicks, rankings)
- [ ] **Weekly conversion funnel** (newsletter signups, E-Edition purchases, drop-off points)
- [ ] **Weekly A/B testing** (test headlines, CTAs, pricing, layouts)
- [ ] **Weekly content audit** (identify gaps, update old content, remove outdated)
- [ ] **Weekly user surveys** (collect feedback, feature requests, pain points)
- [ ] **Weekly competitor analysis** (traffic, content, features, pricing)
- [ ] **Weekly technical debt review** (quick wins, performance optimizations)

### Month 1 Review
- [ ] **Traffic goals achieved?** (visitor count vs. target)
- [ ] **Revenue goals achieved?** (E-Edition sales vs. target)
- [ ] **User retention tracked?** (returning visitors, subscription renewals)
- [ ] **Content goals achieved?** (articles published, categories balanced)
- [ ] **SEO progress measured?** (keyword rankings, organic traffic growth)
- [ ] **User satisfaction measured?** (NPS score, support ticket sentiment)
- [ ] **Technical stability verified?** (uptime %, performance scores)
- [ ] **Security incidents logged?** (any breaches, attacks, vulnerabilities)

### Ongoing Maintenance
- [ ] **Weekly WordPress updates** (core, plugins, themes — test on staging first)
- [ ] **Monthly security audit** (vulnerability scans, firewall logs, user access review)
- [ ] **Monthly performance audit** (Lighthouse scores, Core Web Vitals, load testing)
- [ ] **Monthly content audit** (update old articles, fix broken links, remove outdated)
- [ ] **Monthly backup restoration test** (dry run restore to staging, verify integrity)
- [ ] **Monthly analytics deep dive** (traffic patterns, user behavior, conversion funnels)
- [ ] **Quarterly user research** (surveys, interviews, usability testing)
- [ ] **Quarterly feature roadmap review** (prioritize new features, deprecate unused)
- [ ] **Quarterly competitive analysis** (market trends, competitor moves, differentiation)
- [ ] **Annual infrastructure review** (hosting costs, scaling needs, tech stack updates)

### Growth & Optimization
- [ ] **A/B test headlines** (improve click-through rates)
- [ ] **A/B test CTAs** (improve E-Edition conversions)
- [ ] **A/B test pricing** (optimize subscription tiers)
- [ ] **Optimize SEO** (target high-value keywords, improve rankings)
- [ ] **Expand content categories** (new topics, niche coverage)
- [ ] **Launch email campaigns** (re-engage dormant subscribers)
- [ ] **Partner with influencers** (guest posts, cross-promotion)
- [ ] **Launch referral program** (incentivize word-of-mouth)
- [ ] **Introduce new features** (podcasts, video, live events)
- [ ] **Scale infrastructure** (upgrade hosting, add CDN regions, optimize database)

---

## Launch Sign-Off

### Final Approval
- [ ] **Editor-in-Chief sign-off** (content quality, editorial standards)
- [ ] **Technical Lead sign-off** (functionality, performance, security)
- [ ] **Marketing Lead sign-off** (SEO, analytics, campaigns ready)
- [ ] **Legal sign-off** (compliance, policies, terms)
- [ ] **Executive sign-off** (budget, timeline, strategic goals)

### Launch Date Confirmed
- **Target Launch Date**: _______________________
- **Launch Time**: _______________________ (SAST)
- **Launch Announced**: [ ] Press Release | [ ] Social Media | [ ] Email Newsletter

---

**Status**: ___ / ___ items completed (___%)

**Last updated**: 2026-03-02

**Next milestone**: _______________________

---

*This checklist is a living document. Update it as new items are discovered or requirements change. Archive completed phases and maintain focus on the current phase.*
