/**
 * Unified Launch Checklist Data — Merged from WP Migration Roadmap + Launch Checklist.
 * Source: LaunchChecklist.tsx (formerly two-tab layout, now unified)
 * Used by: LaunchChecklist (/ontwikkelaar/lansering)
 *
 * 15 phases covering the full project lifecycle from planning to post-launch.
 * Items marked checked: true represent work that has already been completed.
 */

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ChecklistPhase {
  id: string;
  /** Phase number for display */
  num: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  /** Estimated duration */
  duration: string;
  /** Related guideline file path */
  guideline?: string;
  items: ChecklistItem[];
  expanded: boolean;
}

// ─── Phase 1: Pre-Launch Planning & Strategy ─────────────────────────────────

const PHASE_1: ChecklistPhase = {
  id: 'p1', num: 1,
  title: 'Voorlanseringsbeplanning & Strategie',
  titleEn: 'Pre-Launch Planning & Strategy',
  description: 'Besigheidsgereedheid, inhoudstrategie, bemarking, tegniese infrastruktuur, spangereedheid',
  descriptionEn: 'Business readiness, content strategy, marketing prep, technical infrastructure, team readiness',
  duration: '2–4w',
  expanded: false,
  items: [
    // Business Readiness
    { id: 'p1-br-1', text: 'Legal entity registration confirmed (rooi rose PTY Ltd)', checked: false },
    { id: 'p1-br-2', text: 'Business licenses obtained for digital publishing in South Africa', checked: false },
    { id: 'p1-br-3', text: 'Tax registration complete (VAT, PAYE, company tax)', checked: false },
    { id: 'p1-br-4', text: 'Banking setup finalized (merchant account, business accounts)', checked: false },
    { id: 'p1-br-5', text: 'Insurance policies active (professional indemnity, cyber liability)', checked: false },
    { id: 'p1-br-6', text: 'Trademark registration filed for "rooi rose" brand', checked: false },
    { id: 'p1-br-7', text: 'Domain ownership verified (rooirose.co.za and all variants)', checked: false },
    { id: 'p1-br-8', text: 'SSL certificates purchased (wildcard cert for all subdomains)', checked: false },
    { id: 'p1-br-9', text: 'Email hosting configured (admin@, support@, redaksie@, advertensies@)', checked: false },
    // Content Strategy
    { id: 'p1-cs-1', text: 'Editorial calendar prepared (minimum 4 weeks of content planned)', checked: false },
    { id: 'p1-cs-2', text: 'Launch day articles ready (minimum 10 feature articles, 20 news items)', checked: false },
    { id: 'p1-cs-3', text: 'Author/journalist agreements signed (all contributors onboarded)', checked: false },
    { id: 'p1-cs-4', text: 'Photography licensing verified (all images have proper attribution/licenses)', checked: false },
    { id: 'p1-cs-5', text: 'Content guidelines documented (style guide, editorial policy)', checked: false },
    { id: 'p1-cs-6', text: 'Moderation policy defined (comments, user submissions)', checked: false },
    { id: 'p1-cs-7', text: 'Content workflow established (draft \u2192 review \u2192 approval \u2192 publish)', checked: false },
    // Marketing & Communications
    { id: 'p1-mc-1', text: 'Press release drafted (Afrikaans and English versions)', checked: false },
    { id: 'p1-mc-2', text: 'Media contact list compiled (journalists, bloggers, influencers)', checked: false },
    { id: 'p1-mc-3', text: 'Social media accounts created (Facebook, Twitter, Instagram, LinkedIn)', checked: false },
    { id: 'p1-mc-4', text: 'Social media content calendar ready (2 weeks pre-launch, 4 weeks post-launch)', checked: false },
    { id: 'p1-mc-5', text: 'Email newsletter template designed (welcome series, weekly digest)', checked: false },
    { id: 'p1-mc-6', text: 'Subscriber incentive defined (launch offer, early access benefits)', checked: false },
    { id: 'p1-mc-7', text: 'Partnership agreements finalized (cross-promotion, content syndication)', checked: false },
    { id: 'p1-mc-8', text: 'Advertising packages defined (rates, specs, booking process)', checked: false },
    { id: 'p1-mc-9', text: 'Launch event planned (if applicable \u2014 virtual or physical)', checked: false },
    // Technical Infrastructure
    { id: 'p1-ti-1', text: 'Hosting provider selected (WordPress-optimized, CDN included)', checked: false },
    { id: 'p1-ti-2', text: 'Server specifications confirmed (CPU, RAM, storage, bandwidth)', checked: false },
    { id: 'p1-ti-3', text: 'Staging environment deployed (exact replica of production)', checked: false },
    { id: 'p1-ti-4', text: 'Backup solution configured (automated daily backups, offsite storage)', checked: false },
    { id: 'p1-ti-5', text: 'Monitoring tools installed (uptime monitoring, error tracking)', checked: false },
    { id: 'p1-ti-6', text: 'DNS configuration prepared (A records, CNAME, MX, SPF, DKIM)', checked: false },
    { id: 'p1-ti-7', text: 'CDN configured (CloudFlare/Cloudinary for images, static assets)', checked: false },
    { id: 'p1-ti-8', text: 'Load testing plan documented (expected traffic, stress test scenarios)', checked: false },
    // Team Readiness
    { id: 'p1-tr-1', text: 'Roles and responsibilities defined (editor, developers, support, marketing)', checked: false },
    { id: 'p1-tr-2', text: 'Training completed (WordPress admin, content management, support workflows)', checked: false },
    { id: 'p1-tr-3', text: 'Support desk configured (ticketing system, knowledge base, FAQs)', checked: false },
    { id: 'p1-tr-4', text: 'Emergency contacts list created (hosting, domain, payment gateway, CDN)', checked: false },
    { id: 'p1-tr-5', text: 'Launch day schedule published (who does what, when, contingency plans)', checked: false },
    { id: 'p1-tr-6', text: 'Post-launch support roster finalized (24/7 coverage for first 72 hours)', checked: false },
  ],
};

// ─── Phase 2: WordPress Foundation ───────────────────────────────────────────

const PHASE_2: ChecklistPhase = {
  id: 'p2', num: 2,
  title: 'WordPress Fondament',
  titleEn: 'WordPress Foundation',
  description: 'theme.json, lettertipes, globale style, style.css, functions.php',
  descriptionEn: 'theme.json, fonts, global styles, style.css, functions.php',
  duration: '1\u20132w',
  guideline: '/guidelines/wordpress-migration/theme-json-strategy.md',
  expanded: false,
  items: [
    { id: 'p2-f-1', text: 'Create style.css with theme header metadata (Theme Name, Version, Text Domain)', checked: true },
    { id: 'p2-f-2', text: 'Build theme.json v3 schema ($schema: schemas.wp.org/trunk/theme.json)', checked: true },
    { id: 'p2-f-3', text: 'Configure color palette \u2014 10 semantic slugs (primary, primary-alt, secondary, secondary-accent, base, tertiary, border-light, main, main-accent, accent) in styles/presets/colors.json', checked: true },
    { id: 'p2-f-4', text: 'Configure typography \u2014 2 font families: brand-serif (Roboto Serif) + brand-sans (Inter)', checked: true },
    { id: 'p2-f-5', text: 'Configure typography \u2014 9 font sizes (slugs 100\u2013900): 5 static (100\u2013500) + 4 fluid clamp() (600\u2013900)', checked: true },
    { id: 'p2-f-6', text: 'Define spacing scale \u2014 9 numeric slugs (10\u2013100) in styles/presets/spacing.json: 0.25rem\u20132.5rem', checked: true },
    { id: 'p2-f-7', text: 'Map shadow presets \u2014 elevation tokens (lightValue/darkValue from designTokens.ts)', checked: true },
    { id: 'p2-f-8', text: 'Configure border radius presets (radius.sm, radius.md, radius.lg, radius.xl, radius.full)', checked: true },
    { id: 'p2-f-9', text: 'Set layout widths \u2014 contentSize: 1280px, wideSize: 1400px (in styles/presets/layout.json)', checked: true },
    { id: 'p2-f-10', text: 'Download Inter & Roboto Serif variable font files to fonts/ directory (GDPR-compliant local hosting — see fonts/README.md)', checked: false },
    { id: 'p2-f-11', text: 'Create functions.php \u2014 slim loader requiring inc/ files (setup.php, enqueue.php, patterns.php, block-styles.php, block-bindings.php, performance.php, font-collections.php, presets.php)', checked: true },
    { id: 'p2-f-12', text: 'Verify all CSS custom properties generate correctly (--wp--preset--color--*, --wp--preset--font-size--*, --wp--preset--spacing--*)', checked: true },
    { id: 'p2-f-13', text: 'Set up aspect ratio presets (16:9, 4:3, 1:1, 3:2)', checked: true },
    { id: 'p2-f-14', text: 'Configure settings.custom tokens for non-preset values (transitions, z-index, etc.)', checked: true },
    { id: 'p2-f-15', text: 'Validate: slug conventions follow presets-and-tokens.md rules (numeric for sizes, semantic for colours)', checked: true },
  ],
};

// ─── Phase 3: Templates & Template Parts ─────────────────────────────────────

const PHASE_3: ChecklistPhase = {
  id: 'p3', num: 3,
  title: 'Sjablone & Sjabloon-onderdele',
  titleEn: 'Templates & Template Parts',
  description: 'Alle HTML-sjablone + sjabloon-onderdele (koptekst, voettekst, sybalk)',
  descriptionEn: 'All HTML templates + template parts (header, footer, sidebar)',
  duration: '1\u20132w',
  guideline: '/guidelines/wordpress-migration/templates-and-parts.md',
  expanded: false,
  items: [
    { id: 'p3-t-1', text: 'Create index.html \u2014 fallback template with core/query-title + archive-default pattern', checked: true },
    { id: 'p3-t-2', text: 'Create front-page.html \u2014 homepage with die-papier/page-home pattern', checked: true },
    { id: 'p3-t-3', text: 'Create single.html \u2014 article template with 70/30 columns (content + sidebar)', checked: true },
    { id: 'p3-t-4', text: 'Create page.html \u2014 static page template with die-papier/page-default pattern', checked: true },
    { id: 'p3-t-5', text: 'Create archive.html \u2014 generic archive fallback template', checked: true },
    { id: 'p3-t-5a', text: 'Create category.html \u2014 category-specific archive template', checked: true },
    { id: 'p3-t-6', text: 'Create search.html \u2014 search results template with filter integration', checked: true },
    { id: 'p3-t-7', text: 'Create 404.html \u2014 error page template', checked: true },
    { id: 'p3-t-8', text: 'Create author.html \u2014 author archive template', checked: true },
    { id: 'p3-t-9', text: 'Create tag.html \u2014 tag archive template', checked: true },
    { id: 'p3-t-10', text: 'Create single-dp_event.html \u2014 event single template', checked: true },
    { id: 'p3-t-11', text: 'Create single-dp_obituary.html \u2014 obituary single template', checked: true },
    { id: 'p3-t-12', text: 'Create single-dp_multimedia.html \u2014 multimedia single template', checked: true },
    { id: 'p3-t-13', text: 'Create single-dp_competition.html \u2014 competition single template', checked: true },
    { id: 'p3-t-14', text: 'Create single-dp_eedition.html \u2014 e-edition single template (with access gate)', checked: true },
    { id: 'p3-t-15', text: 'Create single-dp_sponsor.html \u2014 sponsor single template', checked: true },
    { id: 'p3-t-16', text: 'Create archive-dp_event.html \u2014 event archive', checked: true },
    { id: 'p3-t-17', text: 'Create archive-dp_obituary.html \u2014 obituary archive', checked: true },
    { id: 'p3-t-18', text: 'Create archive-dp_multimedia.html \u2014 multimedia archive', checked: true },
    { id: 'p3-t-19', text: 'Create archive-dp_competition.html \u2014 competition archive', checked: true },
    { id: 'p3-t-20', text: 'Create archive-dp_sponsor.html \u2014 sponsor archive', checked: true },
    { id: 'p3-t-20a', text: 'Create archive-dp_eedition.html \u2014 e-edition archive', checked: true },
    { id: 'p3-t-21', text: 'Create taxonomy-dp_event_category.html \u2014 event category taxonomy archive', checked: true },
    { id: 'p3-t-22', text: 'Create taxonomy-dp_multimedia_category.html \u2014 media type taxonomy archive', checked: true },
    { id: 'p3-t-23', text: 'Create taxonomy-dp_sponsor_tier.html \u2014 sponsor tier taxonomy archive', checked: true },
    { id: 'p3-t-23a', text: 'Create page-no-title.html \u2014 custom template: page without title (registered in customTemplates)', checked: true },
    { id: 'p3-t-23b', text: 'Create page-full-width.html \u2014 custom template: full-width page (registered in customTemplates)', checked: true },
    { id: 'p3-t-24', text: 'Create parts/header.html \u2014 default header (logo, nav, search, user menu)', checked: true },
    { id: 'p3-t-25', text: 'Create parts/header-transparent.html \u2014 overlay header for hero pages', checked: true },
    { id: 'p3-t-26', text: 'Create parts/footer.html \u2014 default footer (4-col layout, copyright)', checked: true },
    { id: 'p3-t-27', text: 'Create parts/footer-simple.html \u2014 simplified footer (checkout/login)', checked: true },
    { id: 'p3-t-28', text: 'Create parts/sidebar.html \u2014 default article sidebar', checked: true },
    { id: 'p3-t-29', text: 'Create parts/sidebar-event.html \u2014 event-specific sidebar', checked: true },
    { id: 'p3-t-30', text: 'Create patterns/hidden-comments.php \u2014 comments section (converted from template part to hidden pattern per TT5-T43)', checked: true },
    { id: 'p3-t-31', text: 'Create patterns/section-post-meta.php + section-post-meta-compact.php \u2014 author, date, category meta sections (replaces former post-meta template part)', checked: true },
    { id: 'p3-t-32', text: 'Create parts/breadcrumbs.html \u2014 breadcrumb navigation (one-liner pattern ref to hidden-breadcrumbs.php)', checked: true },
  ],
};

// ─── Phase 4: Block Patterns ─────────────────────────────────────────────────

const PHASE_4: ChecklistPhase = {
  id: 'p4', num: 4,
  title: 'Blokpatrone',
  titleEn: 'Block Patterns',
  description: '86 blokpatrone wat React-seksies weerspie\u00ebl',
  descriptionEn: '86 block patterns mirroring React sections',
  duration: '2\u20133w',
  guideline: '/guidelines/wordpress-migration/pattern-strategy.md',
  expanded: false,
  items: [
    { id: 'p4-p-1', text: 'Register 11 pattern categories in inc/patterns.php (pages, sections, archives, cta, headers, cards, queries, forms, footers, sidebars, hidden)', checked: true },
    { id: 'p4-p-2', text: 'Implement Type A patterns (Full Sync) \u2014 newsletter CTA, contact banners, global headers/footers', checked: true },
    { id: 'p4-p-3', text: 'Implement Type B patterns (Unsynced) \u2014 layout starters with placeholder content', checked: true },
    { id: 'p4-p-4', text: 'Implement Type C patterns (Dynamic PHP) \u2014 Query Loop-based patterns for latest news, events', checked: true },
    { id: 'p4-p-5', text: 'Create page-home.php \u2014 full homepage composition (hero + query + sidebar)', checked: true },
    { id: 'p4-p-6', text: 'Create page-about.php \u2014 about page layout', checked: true },
    { id: 'p4-p-7', text: 'Create page-contact.php \u2014 contact page with Gravity Forms block', checked: true },
    { id: 'p4-p-8', text: 'Create page-advertise.php \u2014 advertising info page', checked: true },
    { id: 'p4-p-9', text: 'Create page-faq.php \u2014 FAQ page with dp_faq Query Loop', checked: true },
    { id: 'p4-p-10', text: 'Create 10 additional full-page static patterns (weather, traffic, sitemap, privacy, terms, etc.)', checked: true },
    { id: 'p4-p-11', text: 'Create die-papier/card-default \u2014 standard article card (Image 16:9, H3, Excerpt, Meta)', checked: true },
    { id: 'p4-p-12', text: 'Create die-papier/card-compact \u2014 compact card (Image 16:9, H4, No Excerpt)', checked: true },
    { id: 'p4-p-13', text: 'Create die-papier/card-list \u2014 list card (Flex Row: 80px image + content)', checked: true },
    { id: 'p4-p-14', text: 'Create die-papier/card-featured \u2014 featured card (Large Image, H2, Excerpt Large)', checked: true },
    { id: 'p4-p-15', text: 'Create die-papier/card-event \u2014 event card with date/time meta', checked: true },
    { id: 'p4-p-16', text: 'Create die-papier/card-sponsor \u2014 sponsor card with logo/tier', checked: true },
    { id: 'p4-p-17', text: 'Create die-papier/feature-grid \u2014 2/3 featured + 1/3 list cards columns', checked: true },
    { id: 'p4-p-18', text: 'Create die-papier/section-multimedia \u2014 multimedia section (video + gallery + podcast)', checked: true },
    { id: 'p4-p-19', text: 'Create die-papier/section-share \u2014 social share buttons strip', checked: true },
    { id: 'p4-p-20', text: 'Create die-papier/section-related-articles \u2014 related articles Query Loop (3 items, same category)', checked: true },
    { id: 'p4-p-21', text: 'Create die-papier/marketing-grid \u2014 social proof cards grid', checked: true },
    { id: 'p4-p-22', text: 'Create die-papier/pricing-table \u2014 subscription pricing plans pattern', checked: true },
    { id: 'p4-p-23', text: 'Create die-papier/sponsors-archive \u2014 sponsor archive grid (Query Loop + card-sponsor)', checked: true },
    { id: 'p4-p-24', text: 'Create die-papier/breadcrumbs \u2014 breadcrumb navigation pattern (Yoast/RankMath)', checked: true },
    { id: 'p4-p-25', text: 'Add standard PHP file headers to all pattern files (Title, Slug, Categories, Keywords, Description)', checked: true },
    { id: 'p4-p-26', text: 'Create hidden utility patterns (hidden-no-results, hidden-article-hero, hidden-breadcrumbs, hidden-comments, hidden-sidebar, hidden-sidebar-event)', checked: true },
    { id: 'p4-p-27', text: 'Verify total: 86 patterns on disk (32 page, 15 archive, 23 section, 6 hidden, 3 card-meta, 3 header, 2 footer, 2 sidebar)', checked: true },
  ],
};

// ─── Phase 5: Content & Data Migration ───────────────────────────────────────

const PHASE_5: ChecklistPhase = {
  id: 'p5', num: 5,
  title: 'Inhoud & Data-migrasie',
  titleEn: 'Content & Data Migration',
  description: 'WXR-uitvoer, inhoudmigrasie, taksonomie-saaiing, kwaliteitsversekering',
  descriptionEn: 'WXR export, content migration, taxonomy seeding, quality assurance',
  duration: '1\u20132w',
  guideline: '/guidelines/wordpress-migration/content/data-migration.md',
  expanded: false,
  items: [
    // Data Migration (from WP Roadmap P4)
    { id: 'p5-dm-1', text: 'Convert React data/*.ts arrays to JSON export files', checked: true },
    { id: 'p5-dm-2', text: 'Map articles.ts \u2192 wp_posts (title, excerpt, content, date, author, image)', checked: true },
    { id: 'p5-dm-3', text: 'Map events.ts \u2192 dp_event CPT (event_date Ymd, event_time, event_location, ticket_url)', checked: true },
    { id: 'p5-dm-4', text: 'Map competitions.ts \u2192 dp_competition CPT (prize, dates, sponsor_id, entry_form_id)', checked: true },
    { id: 'p5-dm-5', text: 'Map obituary data \u2192 dp_obituary CPT (birth, death, location, survived_by, funeral)', checked: true },
    { id: 'p5-dm-6', text: 'Map multimedia data \u2192 dp_multimedia CPT', checked: true },
    { id: 'p5-dm-7', text: 'Map sponsor data \u2192 dp_sponsor CPT (website_url, contact_email, primary_color)', checked: true },
    { id: 'p5-dm-8', text: 'Seed standard categories: Nuus, Sport, Sake, Leefstyl, Dink, Skole, Skole Rugby (child)', checked: true },
    { id: 'p5-dm-9', text: 'Seed standard tags: 12+ tags (Aktueel, Politiek, Misdaad, Rugby, Sokker, etc.)', checked: true },
    { id: 'p5-dm-10', text: 'Create custom taxonomy terms: dp_event_category (7 terms), dp_competition_category (11 terms)', checked: true },
    { id: 'p5-dm-11', text: 'Create custom taxonomy terms: dp_obituary_category, dp_multimedia_category, dp_sponsor_tier', checked: true },
    { id: 'p5-dm-12', text: 'Implement media import with MD5 deduplication (_import_source_hash meta)', checked: true },
    { id: 'p5-dm-13', text: 'Handle Unsplash URL sideloading via media_handle_sideload()', checked: true },
    { id: 'p5-dm-14', text: 'Handle local asset import from /public/images/ \u2192 wp-content/uploads/import-assets/', checked: true },
    { id: 'p5-dm-15', text: 'Create WP-CLI import command: wp dp import_react_data --file=export.json --verbose', checked: true },
    { id: 'p5-dm-16', text: 'Map author strings ("Johan Bekker") \u2192 WP User IDs (get_user_by or create)', checked: true },
    { id: 'p5-dm-17', text: 'Set post meta: _read_time, _is_featured, _is_breaking, _sponsor_id for standard posts', checked: true },
    { id: 'p5-dm-18', text: 'Pre-import: backup DB (wp db export pre-import.sql), disable emails, increase PHP limits', checked: true },
    { id: 'p5-dm-19', text: 'Run post-import verification: wp post list --format=count per post type', checked: true },
    { id: 'p5-dm-20', text: 'Run post-import verification: wp term list category/dp_event_category --format=count', checked: true },
    { id: 'p5-dm-21', text: 'Check missing thumbnails: wp post list --meta_key=_thumbnail_id --meta_compare=NOT EXISTS', checked: true },
    { id: 'p5-dm-22', text: 'Clean legacy React attributes (className, style={{...}}) from imported content', checked: true },
    // Content Audit & QA (from Launch Checklist P2)
    { id: 'p5-ci-1', text: 'All pages catalogued (86 patterns documented — 32 page, 15 archive, 23 section, 6 hidden, 10 misc)', checked: false },
    { id: 'p5-ci-2', text: 'Article archive reviewed (all news, opinion, sport, entertainment content verified)', checked: false },
    { id: 'p5-ci-3', text: 'Media library audited (images, videos, PDFs, infographics)', checked: false },
    { id: 'p5-ci-4', text: 'Unused content identified (draft articles, outdated pages, redundant media)', checked: false },
    { id: 'p5-ci-5', text: 'Redirect map created (React routes \u2192 WordPress URLs)', checked: false },
    { id: 'p5-ci-6', text: 'Broken link check completed (internal and external links verified)', checked: false },
    { id: 'p5-ci-7', text: 'Duplicate content flagged (canonical URLs defined)', checked: false },
    { id: 'p5-ci-8', text: 'Custom Post Types created and verified (dp_event, dp_competition, dp_sponsor, dp_eedition, dp_obituary, dp_multimedia, dp_faq \u2014 7 CPTs)', checked: false },
    { id: 'p5-ci-9', text: 'Taxonomies configured and verified (Kategorie, Etikette, Skrywer)', checked: false },
    { id: 'p5-ci-10', text: 'SCF fields created (all meta fields for each CPT — see inc/scf-fields.php)', checked: false },
    { id: 'p5-ci-11', text: 'Sample content imported (10 articles per category for testing)', checked: false },
    { id: 'p5-ci-12', text: 'Author profiles migrated (all journalist bios, photos, social links)', checked: false },
    { id: 'p5-ci-13', text: 'Category structure finalized (Nuus, Opinie, Sport, Vermaak, etc.)', checked: false },
    { id: 'p5-ci-14', text: 'Tag taxonomy seeded (100+ relevant tags for content classification)', checked: false },
    { id: 'p5-ci-15', text: 'Featured images assigned (all posts have proper featured image, alt text)', checked: false },
    { id: 'p5-ci-16', text: 'Image optimization completed (WebP conversion, lazy loading enabled)', checked: false },
    // Quality Assurance
    { id: 'p5-qa-1', text: 'Spelling/grammar checked (all Afrikaans content proofread)', checked: false },
    { id: 'p5-qa-2', text: 'Formatting verified (headings, lists, blockquotes, pull quotes)', checked: false },
    { id: 'p5-qa-3', text: 'Links validated (all internal/external links functional)', checked: false },
    { id: 'p5-qa-4', text: 'Metadata complete (meta titles, descriptions, OG tags, Twitter cards)', checked: false },
    { id: 'p5-qa-5', text: 'Alt text added (all images have descriptive alt text)', checked: false },
    { id: 'p5-qa-6', text: 'Readability scores checked (Flesch Reading Ease for target audience)', checked: false },
    { id: 'p5-qa-7', text: 'Mobile formatting tested (all content readable on mobile devices)', checked: false },
  ],
};

// ─── Phase 6: Plugin, CPTs & Taxonomies ──────────────────────────────────────

const PHASE_6: ChecklistPhase = {
  id: 'p6', num: 6,
  title: 'Inprop, CPTs & Taksonomie\u00eb',
  titleEn: 'Plugin, CPTs & Taxonomies',
  description: 'CPT-registrasie, SCF-velde, taksonomie\u00eb, blok-inprop',
  descriptionEn: 'CPT registrations, SCF fields, taxonomies, block plugin',
  duration: '2\u20133w',
  guideline: '/guidelines/wordpress-migration/plugin-structure.md',
  expanded: false,
  items: [
    { id: 'p6-pl-1', text: 'Create main plugin file die-papier-blocks.php with plugin header', checked: true },
    { id: 'p6-pl-2', text: 'Set up plugin directory structure (build/, src/blocks/, inc/, assets/)', checked: true },
    { id: 'p6-pl-3', text: 'Register dp_event CPT \u2014 supports: title, editor, excerpt, thumbnail, custom-fields', checked: true },
    { id: 'p6-pl-4', text: 'Register dp_event SCF fields: event_date (Date Ymd), event_time, event_location, event_ticket_url, event_cost', checked: true },
    { id: 'p6-pl-5', text: 'Register dp_competition CPT \u2014 supports: title, editor, thumbnail', checked: true },
    { id: 'p6-pl-6', text: 'Register dp_competition SCF fields: prize, prize_value, open_date, closing_date, winner_date, sponsor_id (Post Object), entry_form_id, status', checked: true },
    { id: 'p6-pl-7', text: 'Register dp_sponsor CPT \u2014 supports: title, excerpt, thumbnail', checked: true },
    { id: 'p6-pl-8', text: 'Register dp_sponsor SCF fields: website_url, contact_email, primary_color (Color Picker)', checked: true },
    { id: 'p6-pl-9', text: 'Register dp_eedition CPT \u2014 supports: title, editor, thumbnail', checked: true },
    { id: 'p6-pl-10', text: 'Register dp_eedition SCF fields: publication_date, pdf_file (File), edition_number, page_count, linked_product_id', checked: true },
    { id: 'p6-pl-11', text: 'Register dp_obituary CPT \u2014 supports: title, editor, excerpt, thumbnail', checked: true },
    { id: 'p6-pl-12', text: 'Register dp_obituary SCF fields: date_of_birth, date_of_death, location, survived_by, funeral_details', checked: true },
    { id: 'p6-pl-13', text: 'Register dp_multimedia CPT \u2014 supports: title, editor, thumbnail', checked: true },
    { id: 'p6-pl-14', text: 'Register dp_faq CPT for page-specific FAQ pairs (~80 Q&A across ~30 categories)', checked: true },
    { id: 'p6-pl-15', text: 'Register taxonomy: dp_event_category (hierarchical, for dp_event)', checked: true },
    { id: 'p6-pl-16', text: 'Register taxonomy: dp_competition_category (hierarchical, for dp_competition)', checked: true },
    { id: 'p6-pl-17', text: 'Register taxonomy: dp_sponsor_tier (hierarchical, for dp_sponsor)', checked: true },
    { id: 'p6-pl-18', text: 'Register taxonomy: dp_obituary_category (hierarchical, for dp_obituary)', checked: true },
    { id: 'p6-pl-19', text: 'Register taxonomy: dp_multimedia_category / dp_media_type (for dp_multimedia)', checked: true },
    { id: 'p6-pl-20', text: 'Register taxonomy: dp_faq_category (for dp_faq page assignment)', checked: true },
    { id: 'p6-pl-21', text: 'Register taxonomy: dp_edition_type (Weekliks, Daagliks)', checked: true },
    { id: 'p6-pl-22', text: 'Add standard post extensions: _read_time (Number), _is_featured, _is_breaking (Boolean), _sponsor_id (Post Object)', checked: true },
    { id: 'p6-pl-23', text: 'Export all SCF field definitions to PHP (inc/scf-fields.php)', checked: true },
    { id: 'p6-pl-24', text: 'Register pattern category: die-papier-blocks (for plugin patterns)', checked: true },
    { id: 'p6-pl-25', text: 'Set up @wordpress/scripts build pipeline (package.json, webpack config)', checked: true },
    { id: 'p6-pl-26', text: 'Dependencies declared: WooCommerce, MailPoet, Secure Custom Fields (SCF)', checked: true },
    // Third-Party Plugin Setup (New)
    { id: 'p6-tp-1', text: 'Advanced Ads: Map all 12 manual placements to production GAM IDs', checked: false },
    { id: 'p6-tp-2', text: 'Advanced Ads: Configure Sticky placements (Sidebar, Mobile Footer) in Pro', checked: false },
    { id: 'p6-tp-3', text: 'Advanced Ads: Configure Background/Takeover ads (Desktop >1280px)', checked: false },
    { id: 'p6-tp-4', text: 'Advanced Ads: Set up Content Injection for in-article ads (after P3, P7)', checked: false },
    { id: 'p6-tp-5', text: 'Gravity Forms: Verify Pattern IDs match production form IDs ( newsletter, contact, competition)', checked: false },
    { id: 'p6-tp-6', text: 'Gravity Forms: Import Afrikaans labels/placeholders for all forms', checked: false },
    { id: 'p6-tp-7', text: 'Yoast SEO: Configure Breadcrumbs to match "dp-breadcrumbs" design', checked: false },
    { id: 'p6-tp-8', text: 'Social Sharing: Set network priority (WhatsApp > Facebook > X > Email > Copy)', checked: false },
    { id: 'p6-tp-9', text: 'Social Sharing: Verify Afrikaans translation script (social-sharing-i18n.js)', checked: true },
    { id: 'p6-tp-10', text: 'Icon Block: Register custom SVG library for Lucide icons', checked: false },
  ],
};

// ─── Phase 7: Custom Blocks & Search ─────────────────────────────────────────

const PHASE_7: ChecklistPhase = {
  id: 'p7', num: 7,
  title: 'Pasgemaakte Blokke & Soek',
  titleEn: 'Custom Blocks & Search',
  description: 'Gutenberg-blokke (9 aktief: slider, weer, verkeer, ens.) + soekfunksie',
  descriptionEn: 'Custom Gutenberg blocks (9 active: slider, weather, traffic, etc.) + search',
  duration: '3\u20134w',
  guideline: '/guidelines/wordpress-migration/block-mapping.md',
  expanded: false,
  items: [
    // Custom Blocks
    { id: 'p7-bl-1', text: '⛔ SUPERSEDED dp/hero-slider \u2014 replaced by section-content-hero.php pattern (core/cover) + dp/slider block for carousels', checked: true },
    { id: 'p7-bl-2', text: '⛔ SUPERSEDED dp/newsletter-cta \u2014 replaced by Gravity Forms patterns (section-newsletter-cta.php, section-newsletter-cta-full.php)', checked: true },
    { id: 'p7-bl-3', text: 'Build dp/weather-widget \u2014 server-side render.php with Transients API (1hr cache), OpenWeatherMap API, defaultCity: Bloemfontein', checked: false },
    { id: 'p7-bl-4', text: 'Build dp/traffic-widget \u2014 server-side render.php with route data integration', checked: false },
    { id: 'p7-bl-5', text: '⛔ SUPERSEDED dp/quote-slider \u2014 replaced by section-brand-quotes.php pattern using dp/slider + core/quote InnerBlocks', checked: true },
    { id: 'p7-bl-6', text: '⛔ SUPERSEDED dp/eedition-access \u2014 replaced by WooCommerce Memberships content restriction', checked: true },
    { id: 'p7-bl-7', text: 'Build dp/sponsor-banner \u2014 sponsorId (Post Object), alignment (left|center|right), size (small 32px|medium 48px|large 80px)', checked: false },
    { id: 'p7-bl-8', text: '⛔ SUPERSEDED dp/ad-unit \u2014 replaced by Advanced Ads plugin ([advanced_ads] shortcode blocks)', checked: true },
    { id: 'p7-bl-9', text: '⛔ SUPERSEDED dp/sticky-footer \u2014 replaced by Advanced Ads Pro sticky placement', checked: true },
    { id: 'p7-bl-10', text: '\u26d4 SUPERSEDED dp/article-hero \u2014 replaced by hidden-article-hero.php pattern (core/post-title + core/post-featured-image + core/columns)', checked: true },
    { id: 'p7-bl-11', text: '\u26d4 SUPERSEDED dp/breadcrumbs \u2014 replaced by Yoast SEO breadcrumbs in hidden-breadcrumbs.php pattern + parts/breadcrumbs.html', checked: true },
    { id: 'p7-bl-12', text: 'Build dp/competition-entry \u2014 competition entry form with date gating (Gravity Forms embed)', checked: true },
    { id: 'p7-bl-13', text: 'Build dp/slider \u2014 generic InnerBlocks carousel (replaces dp/hero-slider and dp/quote-slider)', checked: true },
    { id: 'p7-bl-14', text: 'Build dp/competition-badge \u2014 Active/Closed/Winner status badge for competitions', checked: true },
    { id: 'p7-bl-15', text: 'Build dp/filter-bar \u2014 category/tag filter chips for archive pages (Interactivity API)', checked: true },
    { id: 'p7-bl-16', text: 'Build dp/tab-bar \u2014 tabbed content navigation (Interactivity API)', checked: true },
    { id: 'p7-bl-17', text: 'Build dp/subscription-cta \u2014 navy subscription value proposition banner (listed in wordpress-blocks.md but src/blocks/subscription-cta/ not yet created)', checked: false },
    { id: 'p7-bl-18', text: 'Create block.json + edit.js + render.php + view.js + style.scss for all 9 active custom blocks', checked: false },
    { id: 'p7-bl-19', text: 'Register block style variations via JSON auto-discovery (styles/blocks/ — 8 button, 8 group, 4 image, + heading, list, paragraph, quote, separator, table, woocommerce)', checked: true },
    { id: 'p7-bl-20', text: 'Style WooCommerce blocks: product-button primary variation (styles/blocks/woocommerce/)', checked: false },
    { id: 'p7-bl-21', text: 'Implement Icon Block strategy \u2014 migrate lucide-react icons to inline SVGs or "The Icon Block" plugin', checked: false },
    { id: 'p7-bl-22', text: 'Verify all 9 active blocks render correctly in Site Editor preview', checked: false },
    // Search & Filtering
    { id: 'p7-sf-1', text: 'Build dp/search-filters \u2014 faceted sidebar block: taxonomy dropdowns, date ranges, post type selection (src/blocks/search-filters/ exists on disk)', checked: false },
    { id: 'p7-sf-2', text: 'Integrate dp/filter-bar block (see p7-bl-15) into archive templates for inline filter pills', checked: false },
    { id: 'p7-sf-3', text: 'Style core/search block to match rooi rose design system', checked: false },
    { id: 'p7-sf-4', text: 'Configure core/query-loop with taxonomy filtering (category, post_tag)', checked: false },
    { id: 'p7-sf-5', text: 'Map taxonomy filters: category (Nuus, Sport, Sake), post_tag, dp_event_category, dp_edition_type', checked: false },
    { id: 'p7-sf-6', text: 'Integrate filters into search.html template', checked: false },
    { id: 'p7-sf-7', text: 'Implement archive page query modifications (pre_get_posts hooks)', checked: false },
    { id: 'p7-sf-8', text: 'Add AJAX-based filter updates using WordPress Interactivity API', checked: false },
    { id: 'p7-sf-9', text: 'Ensure search covers all CPTs: post, dp_event, dp_competition, dp_obituary, dp_eedition', checked: false },
    { id: 'p7-sf-10', text: 'Configure search results template with relevance sorting + highlighted matches', checked: false },
  ],
};

// ─── Phase 8: Commerce & Subscriptions ───────────────────────────────────────

const PHASE_8: ChecklistPhase = {
  id: 'p8', num: 8,
  title: 'Handel & Intekeninge',
  titleEn: 'Commerce & Subscriptions',
  description: 'WooCommerce-integrasie, e-uitgawe-toegang, intekeninghekke, E-Uitgawes-opstelling',
  descriptionEn: 'WooCommerce integration, e-edition access, subscription gating, E-Editions setup',
  duration: '2\u20133w',
  guideline: '/guidelines/wordpress-migration/woocommerce/woocommerce-subscriptions-memberships.md',
  expanded: false,
  items: [
    // WooCommerce Setup
    { id: 'p8-wc-1', text: 'Install & configure WooCommerce core', checked: false },
    { id: 'p8-wc-2', text: 'Install WooCommerce Subscriptions plugin', checked: false },
    { id: 'p8-wc-3', text: 'Install WooCommerce Memberships plugin', checked: false },
    { id: 'p8-wc-4', text: 'Create Membership Plan A: "E-Uitgawe Intekenaar" \u2014 grants access to ALL dp_eedition posts', checked: false },
    { id: 'p8-wc-5', text: 'Create Membership Plan B: "Gratis Geregistreer" \u2014 free registration, 3 premium articles/month soft paywall', checked: false },
    { id: 'p8-wc-6', text: 'Create subscription product: "Digitale Intekening \u2014 1 Maand" (SKU: DP-SUB-1M, R140/month)', checked: false },
    { id: 'p8-wc-7', text: 'Create subscription product: "Digitale Intekening \u2014 3 Maande" (SKU: DP-SUB-3M, R390/3 months)', checked: false },
    { id: 'p8-wc-8', text: 'Create subscription product: "Digitale Intekening \u2014 12 Maande" (SKU: DP-SUB-12M, R1,400/year)', checked: false },
    { id: 'p8-wc-9', text: 'Create single purchase product template: "Enkel Uitgawe" (R35/issue, SKU: DP-EE-YYYY-MM-DD)', checked: false },
    { id: 'p8-wc-10', text: 'Configure Option B (Specific Content Access) \u2014 product grants access to specific dp_eedition post', checked: false },
    { id: 'p8-wc-11', text: 'Set access duration: permanent for single purchases, linked to subscription status for subscribers', checked: false },
    { id: 'p8-wc-12', text: 'Create cart.html template \u2014 wp:woocommerce/cart block, heading "Jou Mandjie"', checked: false },
    { id: 'p8-wc-13', text: 'Create checkout.html template \u2014 wp:woocommerce/checkout block, heading "Betaal"', checked: false },
    { id: 'p8-wc-14', text: 'Create my-account.html template \u2014 wp:woocommerce/customer-account block', checked: false },
    { id: 'p8-wc-15', text: 'Implement content restriction logic in single-dp_eedition.html (membership check before Flipbook render)', checked: false },
    { id: 'p8-wc-16', text: 'Configure PayFast payment gateway for South African Rand (ZAR)', checked: false },
    { id: 'p8-wc-17', text: 'Integrate Gravity Forms with MailPoet via connector plugin for newsletter signups', checked: false },
    { id: 'p8-wc-18', text: 'RULE 8: Verify subscription pricing NOT shown on e-edition archive page (per pricing.md)', checked: false },
    { id: 'p8-wc-19', text: 'Admin workflow: dp_eedition post \u2192 WC Product \u2192 "Grant Access" link \u2192 Price R35', checked: false },
    { id: 'p8-wc-20', text: 'Test: purchase single edition R35, verify PDF/Flipbook access granted immediately', checked: false },
    // E-Editions Setup
    { id: 'p8-ee-1', text: 'E-Edition archive uploaded (all PDF files in /e-uitgawes/ directory)', checked: false },
    { id: 'p8-ee-2', text: 'E-Edition metadata populated (date, edition number, cover image, preview)', checked: false },
    { id: 'p8-ee-3', text: 'E-Edition access rules configured (guest access, subscriber-only PDFs)', checked: false },
    { id: 'p8-ee-4', text: 'Pricing verified per pricing.md (R35 single issue, R140/1mo, R390/3mo, R1 400/12mo subscriptions)', checked: false },
    { id: 'p8-ee-5', text: 'Sample E-Editions tested (Tuesday/Friday display, download, paywall)', checked: false },
    { id: 'p8-ee-6', text: 'Archive pagination working (all historical editions browsable)', checked: false },
    // WooCommerce Specifics (New)
    { id: 'p8-wc-1', text: 'WooCommerce: Payfast integration active & verified', checked: false },
    { id: 'p8-wc-2', text: 'WooCommerce: Afrikaans checkout flow (all strings verified)', checked: false },
    { id: 'p8-wc-3', text: 'WooCommerce: Membership gates for "premium" content active', checked: false },
    { id: 'p8-wc-4', text: 'WooCommerce: Subscription lifecycle emails verified (registration, purchase, expiry)', checked: false },
    { id: 'p8-wc-5', text: 'WooCommerce: My Account page verified (downloads, memberships, profile)', checked: false },
  ],
};

// ─── Phase 9: Design System & Polish ─────────────────────────────────────────

const PHASE_9: ChecklistPhase = {
  id: 'p9', num: 9,
  title: 'Ontwerpstelsel & Poleer',
  titleEn: 'Design System & Polish',
  description: 'Tipografie, kleur, spasiëring, blokstylvariasies, donker modus, responsief',
  descriptionEn: 'Typography, color, spacing, block style variations, dark mode, responsive',
  duration: '1\u20132w',
  guideline: '/guidelines/wordpress-migration/block-styles.md',
  expanded: false,
  items: [
    // Typography
    { id: 'p9-ta-1', text: 'All headings use correct fonts (H1-H4 = Roboto Serif, H5-H6 = Inter)', checked: false },
    { id: 'p9-ta-2', text: 'Body text uses Inter (all paragraphs, UI elements, forms)', checked: false },
    { id: 'p9-ta-3', text: 'Font variation settings applied (Roboto Serif opsz, wdth, GRAD)', checked: false },
    { id: 'p9-ta-4', text: 'Fluid typography working (clamp values scale correctly 390px \u2192 1280px)', checked: false },
    { id: 'p9-ta-5', text: 'Text contrast ratios pass WCAG AA (4.5:1 minimum)', checked: false },
    // Colors
    { id: 'p9-ca-1', text: 'All colors use CSS variables (no hardcoded hex except brand/social)', checked: false },
    { id: 'p9-ca-2', text: 'Brand colors consistent (#E82C27 red / #C41F20 hover, #172134 navy / #1A3A5F navy-light, #636375 muted, #C41F20 text-link-red)', checked: false },
    { id: 'p9-ca-3', text: 'Dark mode colors correct (light/dark variants for all tokens)', checked: false },
    // Spacing & Layout
    { id: 'p9-sl-1', text: 'Container widths: contentSize 1280px, wideSize 1400px (per layout.json preset)', checked: false },
    { id: 'p9-sl-2', text: 'Spacing uses tokens (--space-10 through --space-100)', checked: false },
    { id: 'p9-co-1', text: 'All 86 patterns functional (32 page + 15 archive + 23 section + 6 hidden + 10 misc)', checked: false },
    { id: 'p9-co-2', text: 'Buttons match spec (Inter Medium 500, correct sizes, hover states)', checked: false },
    { id: 'p9-co-3', text: 'Cards consistent (image ratios, padding, hover effects)', checked: false },
    // Block Style Variations (from WP Roadmap P9)
    { id: 'p9-bs-1', text: 'Implement dark mode via prefers-color-scheme and theme.json color overrides', checked: false },
    { id: 'p9-bs-2', text: 'Create global style variations: 5 typography presets + 2 color variations (02-dark, 03-high-contrast) + serif.json root variation', checked: true },
    { id: 'p9-bs-3', text: 'Configure block style variations \u2014 button: 8 styles (default, outline, ghost, arrow, dark, light, soft, tint) in styles/blocks/button/', checked: true },
    { id: 'p9-bs-4', text: 'Configure block style variations \u2014 group: 8 styles (card, card-hover, container-narrow, muted, navy, newsletter, red-accent, section-shade) in styles/blocks/group/', checked: true },
    { id: 'p9-bs-5', text: 'Configure block style variations \u2014 image: 4 styles (rounded, caption-overlay, circular, shadow) in styles/blocks/image/', checked: true },
    { id: 'p9-bs-6', text: 'Configure block style variations \u2014 heading: 4 styles (card-compact, display, section-title, subtitle)', checked: true },
    { id: 'p9-bs-7', text: 'Configure block style variations \u2014 paragraph: 2 styles (badge, lead)', checked: true },
    { id: 'p9-bs-8', text: 'Configure block style variations \u2014 list: 3 styles (checkmarks, no-bullets, numbered-circle)', checked: true },
    { id: 'p9-bs-9', text: 'Configure block style variations \u2014 quote: 3 styles (border-left, large-serif, pull-quote)', checked: true },
    { id: 'p9-bs-10', text: 'Configure block style variations \u2014 separator: 3 styles (brand-line, dots, wide)', checked: true },
    { id: 'p9-bs-11', text: 'Configure block style variations \u2014 table: 1 style (borderless)', checked: true },
    { id: 'p9-bs-12', text: 'Configure block style variations \u2014 woocommerce: product-button, product-image, product-price directories', checked: true },
    { id: 'p9-ss-1', text: 'Configure 24 section style variations in styles/sections/ (hero, navy, red, muted, cta, pricing, etc.)', checked: true },
    { id: 'p9-ss-2', text: 'Verify section styles apply via className in patterns (is-style-section-navy, is-style-section-hero, etc.)', checked: false },
    // Responsive & Cross-browser
    { id: 'p9-rd-1', text: 'All layouts tested at 5 breakpoints (390px, 768px, 1024px, 1280px, 1920px)', checked: false },
    { id: 'p9-rd-2', text: 'Touch targets \u2265 44px (buttons, links on mobile)', checked: false },
    { id: 'p9-rd-3', text: 'Mobile menu functional (hamburger, drawer, close, search)', checked: false },
    { id: 'p9-dm-1', text: 'Dark mode toggle accessible (visible, keyboard navigable, persisted)', checked: false },
    { id: 'p9-dm-2', text: 'All colors have dark variants', checked: false },
    { id: 'p9-dm-3', text: 'Form inputs readable in dark mode', checked: false },
    { id: 'p9-xb-1', text: 'Cross-browser testing: Chrome, Firefox, Safari, Edge (latest 2 versions)', checked: false },
    { id: 'p9-xb-2', text: 'Verify Gravity Forms styling matches design system (newsletter, contact, competition entry)', checked: false },
    { id: 'p9-xb-3', text: 'Test mobile hamburger menu behaviour and sticky header', checked: false },
    { id: 'p9-xb-4', text: 'Verify image lazy loading and responsive srcset across all templates', checked: false },
  ],
};

// ─── Phase 10: Functionality Testing ─────────────────────────────────────────

const PHASE_10: ChecklistPhase = {
  id: 'p10', num: 10,
  title: 'Funksionaliteitstoetsing',
  titleEn: 'Functionality Testing',
  description: 'Navigasie, outentisering, handel, vorms, soek, media, sosiaal, admin',
  descriptionEn: 'Navigation, auth, commerce, forms, search, media, social, admin',
  duration: '1w',
  expanded: false,
  items: [
    { id: 'p10-nr-1', text: 'All 70+ routes functional (no 404 errors \u2014 ~32 pages, ~15 archives, ~7 categories, ~8 CPT archives, + search, 404, front-page)', checked: false },
    { id: 'p10-nr-2', text: 'Breadcrumbs correct (Home \u2192 Category \u2192 Article)', checked: false },
    { id: 'p10-nr-3', text: 'Search functional (live suggestions, results, filters)', checked: false },
    { id: 'p10-nr-4', text: 'Redirects tested (legacy English \u2192 Afrikaans URLs)', checked: false },
    { id: 'p10-ua-1', text: 'Registration form working (email/password, validation, confirmation)', checked: false },
    { id: 'p10-ua-2', text: 'Login form working (email/password, "remember me")', checked: false },
    { id: 'p10-ua-3', text: 'Password reset working', checked: false },
    { id: 'p10-ec-1', text: 'Single issue purchase working (R35 \u2192 single PDF download)', checked: false },
    { id: 'p10-ec-2', text: 'Subscription purchase working (membership created)', checked: false },
    { id: 'p10-ec-3', text: 'PayFast integration tested (success, failure, IPN)', checked: false },
    { id: 'p10-ec-4', text: 'Access gates functional (non-subscribers see locked content)', checked: false },
    { id: 'p10-ec-5', text: 'Receipt emails sent (purchase confirmation)', checked: false },
    { id: 'p10-fi-1', text: 'Contact form working (submission, validation, email)', checked: false },
    { id: 'p10-fi-2', text: 'Newsletter signup working (double opt-in)', checked: false },
    { id: 'p10-fi-3', text: 'Competition entry working', checked: false },
    { id: 'p10-ss-1', text: 'Share buttons functional (Facebook, Twitter, WhatsApp)', checked: false },
    { id: 'p10-ss-2', text: 'Open Graph tags correct', checked: false },
    { id: 'p10-at-1', text: 'WordPress admin accessible (wp-admin, 2FA)', checked: false },
    { id: 'p10-at-2', text: 'Block editor working (Gutenberg + custom blocks)', checked: false },
    { id: 'p10-at-3', text: 'Draft/publish workflow works', checked: false },
    // Third-Party Testing (New)
    { id: 'p10-tp-1', text: 'Advanced Ads: Verify all placements display on correct devices/pages', checked: false },
    { id: 'p10-tp-2', text: 'Advanced Ads: Test "Ad-Free" experience for logged-in subscribers', checked: false },
    { id: 'p10-tp-3', text: 'Gravity Forms: Verify all 154+ pattern forms submit to correct IDs', checked: false },
    { id: 'p10-tp-4', text: 'Gravity Forms: Test file uploads and confirmation messages', checked: false },
    { id: 'p10-tp-5', text: 'Yoast SEO: Breadcrumb hierarchy verified on all 86 full-page patterns', checked: false },
    { id: 'p10-tp-6', text: 'Social Sharing: Test WhatsApp sharing on mobile device', checked: false },
  ],
};

// ─── Phase 11: Performance, SEO & Analytics ──────────────────────────────────

const PHASE_11: ChecklistPhase = {
  id: 'p11', num: 11,
  title: 'Prestasie, SEO & Analise',
  titleEn: 'Performance, SEO & Analytics',
  description: 'Bladsy-spoed, kas, databasis, bediener, tegniese SEO, analise',
  descriptionEn: 'Page speed, caching, database, server, technical SEO, analytics',
  duration: '1w',
  expanded: false,
  items: [
    // Performance
    { id: 'p11-ps-1', text: 'Lighthouse score: 90+ (Mobile)', checked: false },
    { id: 'p11-ps-2', text: 'Lighthouse score: 95+ (Desktop)', checked: false },
    { id: 'p11-ps-3', text: 'LCP < 2.5s, CLS < 0.1, TBT < 200ms', checked: false },
    { id: 'p11-ao-1', text: 'Images compressed (WebP, lazy loading)', checked: false },
    { id: 'p11-ao-2', text: 'CSS/JS minified (production build)', checked: false },
    { id: 'p11-ao-3', text: 'Fonts optimized (font-display: swap, WOFF2)', checked: false },
    { id: 'p11-cs-1', text: 'Browser caching configured', checked: false },
    { id: 'p11-cs-2', text: 'CDN caching enabled', checked: false },
    { id: 'p11-cs-3', text: 'WordPress object cache (Redis/Memcached)', checked: false },
    { id: 'p11-cs-4', text: 'Page caching enabled', checked: false },
    { id: 'p11-cs-5', text: 'Gzip/Brotli compression', checked: false },
    { id: 'p11-sc-1', text: 'HTTP/2 enabled', checked: false },
    { id: 'p11-sc-2', text: 'PHP 8.2+ with OPcache', checked: false },
    { id: 'p11-sc-3', text: 'Server response time < 200ms', checked: false },
    // SEO & Analytics
    { id: 'p11-ts-1', text: 'Robots.txt configured', checked: false },
    { id: 'p11-ts-2', text: 'XML sitemap generated and submitted', checked: false },
    { id: 'p11-ts-3', text: 'Canonical URLs set', checked: false },
    { id: 'p11-ts-4', text: 'Structured data implemented (NewsArticle, Product, BreadcrumbList)', checked: false },
    { id: 'p11-op-1', text: 'Meta titles optimized (< 60 chars, unique)', checked: false },
    { id: 'p11-op-2', text: 'Meta descriptions optimized (< 160 chars)', checked: false },
    { id: 'p11-og-1', text: 'Open Graph tags set (title, description, image)', checked: false },
    { id: 'p11-og-2', text: 'Twitter Card tags set', checked: false },
    { id: 'p11-as-1', text: 'Google Analytics 4 configured', checked: false },
    { id: 'p11-as-2', text: 'Goals/conversions tracked', checked: false },
    { id: 'p11-sc2-1', text: 'Google Search Console verified', checked: false },
    { id: 'p11-sc2-2', text: 'Core Web Vitals reviewed', checked: false },
  ],
};

// ─── Phase 12: Security & Compliance ─────────────────────────────────────────

const PHASE_12: ChecklistPhase = {
  id: 'p12', num: 12,
  title: 'Sekuriteit & Nakoming',
  titleEn: 'Security & Compliance',
  description: 'WordPress-sekuriteit, SSL, GDPR, POPIA, PCI DSS, rugsteun',
  descriptionEn: 'WordPress security, SSL, GDPR, POPIA, PCI DSS, backup',
  duration: '1w',
  expanded: false,
  items: [
    { id: 'p12-ws-1', text: 'WordPress core + all plugins updated', checked: false },
    { id: 'p12-ws-2', text: '2FA enabled for all admin users', checked: false },
    { id: 'p12-ws-3', text: 'Login attempts limited', checked: false },
    { id: 'p12-ws-4', text: 'Firewall configured (Wordfence/Sucuri)', checked: false },
    { id: 'p12-ssl-1', text: 'SSL certificate installed, HTTPS enforced', checked: false },
    { id: 'p12-ssl-2', text: 'HSTS header set', checked: false },
    { id: 'p12-gdpr-1', text: 'Privacy Policy published (Afrikaans & English)', checked: false },
    { id: 'p12-gdpr-2', text: 'Cookie consent banner implemented', checked: false },
    { id: 'p12-gdpr-3', text: 'User data export/deletion functional', checked: false },
    { id: 'p12-popia-1', text: 'POPIA policy published', checked: false },
    { id: 'p12-popia-2', text: 'Information Officer appointed', checked: false },
    { id: 'p12-pci-1', text: 'No card data stored (PayFast handles payments)', checked: false },
    { id: 'p12-lc-1', text: 'Terms of Service published', checked: false },
    { id: 'p12-bdr-1', text: 'Automated daily backups with offsite storage', checked: false },
    { id: 'p12-bdr-2', text: 'Backup restoration tested', checked: false },
    { id: 'p12-bdr-3', text: 'Disaster recovery plan documented', checked: false },
  ],
};

// ─── Phase 13: Pre-Launch Testing ────────────────────────────────────────────

const PHASE_13: ChecklistPhase = {
  id: 'p13', num: 13,
  title: 'Voorlanserings-toetsing',
  titleEn: 'Pre-Launch Testing',
  description: 'Kruisblaaier, toestel, toeganklikheid, las, sekuriteit, e-pos toetsing',
  descriptionEn: 'Cross-browser, device, accessibility, load, security, email testing',
  duration: '1w',
  expanded: false,
  items: [
    { id: 'p13-cb-1', text: 'Chrome, Firefox, Safari, Edge \u2014 Desktop & Mobile', checked: false },
    { id: 'p13-dt-1', text: 'iPhone 13-15, Samsung Galaxy S23, iPad Pro tested', checked: false },
    { id: 'p13-at-1', text: 'WCAG 2.1 AA compliance verified', checked: false },
    { id: 'p13-at-2', text: 'Keyboard navigation working', checked: false },
    { id: 'p13-at-3', text: 'Screen reader tested (NVDA/VoiceOver)', checked: false },
    { id: 'p13-ft-1', text: 'All pages load (no 404s, no 500 errors)', checked: false },
    { id: 'p13-ft-2', text: 'All forms submit successfully', checked: false },
    { id: 'p13-ft-3', text: 'E-Edition purchase end-to-end tested', checked: false },
    { id: 'p13-lt-1', text: 'Load test: 100/500/1000 concurrent users', checked: false },
    { id: 'p13-st-1', text: 'SQL injection, XSS, CSRF tested', checked: false },
    { id: 'p13-et-1', text: 'All transactional emails tested (registration, purchase, reset)', checked: false },
    { id: 'p13-et-2', text: 'Emails not in spam (SPF, DKIM, DMARC configured)', checked: false },
    { id: 'p13-cr-1', text: 'All copy proofread, images optimized, links verified', checked: false },
    { id: 'p13-cr-2', text: 'Legal pages reviewed by lawyer', checked: false },
    { id: 'p13-vsd-1', text: 'Validate structured data with Google Rich Results Test', checked: false },
    { id: 'p13-wcf-1', text: 'Test all WooCommerce flows end-to-end (browse \u2192 add to cart \u2192 checkout \u2192 access)', checked: false },
    { id: 'p13-cwv-1', text: 'Performance audit: Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)', checked: false },
    { id: 'p13-a11y-1', text: 'Accessibility audit: WCAG 2.1 AA compliance (colour contrast, focus states, screen reader)', checked: false },
  ],
};

// ─── Phase 14: Deployment & Go-Live ──────────────────────────────────────────

const PHASE_14: ChecklistPhase = {
  id: 'p14', num: 14,
  title: 'Ontplooiing & Lewendig',
  titleEn: 'Deployment & Go-Live',
  description: 'DNS, SSL, herleidings, bedieneropstelling, lanseringsdagtake, onmiddellike nalanseringstoetse',
  descriptionEn: 'DNS, SSL, redirects, server setup, launch day tasks, immediate post-launch checks',
  duration: '1w',
  guideline: '/guidelines/wordpress-migration/launch-checklist.md',
  expanded: false,
  items: [
    // Pre-deployment
    { id: 'p14-pd-1', text: 'Staging fully tested (all Phase 13 tests passed)', checked: false },
    { id: 'p14-pd-2', text: 'Lower DNS TTL to 300 seconds (24-48h before cutover)', checked: false },
    { id: 'p14-pd-3', text: 'Verify access to DNS provider (Cloudflare/GoDaddy/Hetzner)', checked: false },
    { id: 'p14-pd-4', text: 'Rollback plan documented', checked: false },
    { id: 'p14-pd-5', text: 'Team briefed (roles, responsibilities, comms)', checked: false },
    // Server Config
    { id: 'p14-sv-1', text: 'Install SSL certificate: sudo certbot --nginx -d rooirose.co.za -d www.rooirose.co.za', checked: false },
    { id: 'p14-sv-2', text: 'Force HTTPS in wp-config.php: WP_HOME, WP_SITEURL, $_SERVER["HTTPS"]', checked: false },
    { id: 'p14-sv-3', text: 'Configure environment variables in .env (DB, WP_ENV, OPENWEATHER_API_KEY, MAILPOET_KEY)', checked: false },
    { id: 'p14-sv-4', text: 'Run search-replace: wp search-replace localhost/dev URLs \u2192 https://rooirose.co.za --all-tables', checked: false },
    { id: 'p14-sv-5', text: 'Set DISALLOW_FILE_EDIT = true in wp-config.php', checked: false },
    { id: 'p14-sv-6', text: 'Configure Nginx security headers: X-Frame-Options, X-XSS-Protection, X-Content-Type-Options', checked: false },
    { id: 'p14-sv-7', text: 'Implement 301 redirects: English \u2192 Afrikaans URLs (Nginx rewrite rules or Redirection plugin)', checked: false },
    { id: 'p14-sv-8', text: 'Deploy redirect map: /about \u2192 /oor-ons, /contact \u2192 /kontak, /weather \u2192 /weer, etc. (30+ rules)', checked: false },
    // Deployment Day
    { id: 'p14-dd-1', text: 'Final staging backup taken', checked: false },
    { id: 'p14-dd-2', text: 'Files synced to production', checked: false },
    { id: 'p14-dd-3', text: 'Update DNS A record: @ \u2192 new server IP', checked: false },
    { id: 'p14-dd-4', text: 'Update DNS CNAME: www \u2192 @ (or reverse)', checked: false },
    { id: 'p14-dd-5', text: 'DNS propagation verified', checked: false },
    { id: 'p14-dd-6', text: 'Maintenance mode disabled (site live!)', checked: false },
    { id: 'p14-dd-7', text: 'All caches flushed', checked: false },
    // Analytics & SEO
    { id: 'p14-as-1', text: 'Configure Google Analytics 4 tracking tag', checked: false },
    { id: 'p14-as-2', text: 'Submit updated XML sitemap to Google Search Console', checked: false },
    // Immediate Post-Launch
    { id: 'p14-pl-1', text: 'Homepage + 5 random pages tested', checked: false },
    { id: 'p14-pl-2', text: 'Test menu navigation (desktop & mobile)', checked: false },
    { id: 'p14-pl-3', text: 'Verify "Gebeure" calendar sort order', checked: false },
    { id: 'p14-pl-4', text: 'Test "Kompetisie" entry form submission', checked: false },
    { id: 'p14-pl-5', text: 'Purchase single edition R35 with test card, verify PDF access', checked: false },
    { id: 'p14-pl-6', text: 'Verify "My Account" page shows downloads', checked: false },
    { id: 'p14-pl-7', text: 'Check Google Search Console for crawl errors', checked: false },
    { id: 'p14-pl-8', text: 'Monitor server load, errors, uptime (first 2 hours)', checked: false },
    { id: 'p14-pl-9', text: 'Day 1: full smoke test, analytics review, error logs', checked: false },
    { id: 'p14-pl-10', text: 'Day 1: backup production site', checked: false },
    // Deployment Automation & Mapping (New)
    { id: 'p14-am-1', text: 'Validate WXR content using "validate-wxr.sh"', checked: true },
    { id: 'p14-am-2', text: 'Validate theme/plugin assets using "preflight-check.sh"', checked: true },
    { id: 'p14-am-3', text: 'Verify 301 redirect map in Nginx/htaccess', checked: false },
    { id: 'p14-am-4', text: 'Verify Outermost Icon library registration on production', checked: false },
    { id: 'p14-am-5', text: 'Verify all production Gravity Form IDs match theme patterns', checked: false },
    // Training & Automation
    { id: 'p14-ta-1', text: 'Editor training: creating articles, managing events, uploading e-editions, linking WC product IDs', checked: false },
    { id: 'p14-ta-2', text: 'Create staging \u2192 production deployment script (rsync themes/ + plugins/, wp db export/import)', checked: false },
  ],
};

// ─── Phase 15: Post-Launch Monitoring ────────────────────────────────────────

const PHASE_15: ChecklistPhase = {
  id: 'p15', num: 15,
  title: 'Na-lansering Monitering',
  titleEn: 'Post-Launch Monitoring',
  description: 'Week 1, weke 2-4, maand 1 oorsig, deurlopende onderhoud',
  descriptionEn: 'Week 1, weeks 2-4, month 1 review, ongoing maintenance',
  duration: 'Deurlopend',
  expanded: false,
  items: [
    { id: 'p15-w1-1', text: 'Daily analytics, error logs, uptime monitoring (Week 1)', checked: false },
    { id: 'p15-w1-2', text: 'Daily backup verification', checked: false },
    { id: 'p15-w1-3', text: 'E-Edition sales tracking', checked: false },
    { id: 'p15-w1-4', text: 'Newsletter performance tracking', checked: false },
    { id: 'p15-w2-1', text: 'Weekly analytics + SEO performance reports', checked: false },
    { id: 'p15-w2-2', text: 'Weekly conversion funnel analysis', checked: false },
    { id: 'p15-w2-3', text: 'Weekly content audit', checked: false },
    { id: 'p15-m1-1', text: 'Traffic + revenue goals review', checked: false },
    { id: 'p15-m1-2', text: 'User retention tracked', checked: false },
    { id: 'p15-m1-3', text: 'Technical stability verified', checked: false },
    { id: 'p15-om-1', text: 'Weekly WordPress updates (test on staging first)', checked: false },
    { id: 'p15-om-2', text: 'Monthly security + performance audits', checked: false },
    { id: 'p15-om-3', text: 'Monthly backup restoration test', checked: false },
    { id: 'p15-om-4', text: 'Quarterly user research + feature roadmap review', checked: false },
    { id: 'p15-go-1', text: 'A/B test headlines, CTAs, pricing', checked: false },
    { id: 'p15-go-2', text: 'Scale infrastructure as needed', checked: false },
  ],
};

// ─── Combined Export ─────────────────────────────────────────────────────────

export const ALL_CHECKLIST_PHASES: ChecklistPhase[] = [
  PHASE_1,
  PHASE_2,
  PHASE_3,
  PHASE_4,
  PHASE_5,
  PHASE_6,
  PHASE_7,
  PHASE_8,
  PHASE_9,
  PHASE_10,
  PHASE_11,
  PHASE_12,
  PHASE_13,
  PHASE_14,
  PHASE_15,
];

/** LocalStorage key for persisting checklist progress */
export const CHECKLIST_STORAGE_KEY = 'die-papier-unified-launch-checklist';
