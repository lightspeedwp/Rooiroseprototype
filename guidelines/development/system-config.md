# WordPress & WooCommerce System Configuration

**Last updated**: 2026-03-02
**Version**: 1.0

This guideline documents the complete WordPress and plugin configuration required for the Die Papier production site.

---

## WordPress Core Settings

### General Settings

- **Site Title**: Die Papier
- **Tagline**: Jou gemeenskapskoerant (Your community newspaper)
- **WordPress Address (URL)**: https://diepapier.co.za
- **Site Address (URL)**: https://diepapier.co.za
- **Administration Email**: admin@diepapier.co.za
- **Site Language**: Afrikaans (af)
- **Timezone**: Africa/Johannesburg (GMT+2)
- **Date Format**: d F Y (e.g., 24 Februarie 2026)
- **Time Format**: H:i (24-hour)
- **Week Starts On**: Monday

### Reading Settings

- **Your homepage displays**: Latest posts (or a static page if using a custom homepage)
- **Homepage**: Front Page (custom page template)
- **Posts page**: Not applicable (news archives use category pages)
- **Blog pages show at most**: 12 posts
- **Syndication feeds show the most recent**: 25 items
- **For each post in a feed, include**: Full text
- **Search engine visibility**: ☐ Discourage search engines from indexing this site (unchecked in production)

### Discussion Settings

- **Default post settings**:
  - ☑ Attempt to notify any blogs linked to from the article
  - ☑ Allow link notifications from other blogs (pingbacks and trackbacks) on new posts
  - ☑ Allow people to submit comments on new posts
- **Other comment settings**:
  - ☑ Comment author must fill out name and email
  - ☑ Users must be registered and logged in to comment
  - ☑ Automatically close comments on posts older than 30 days
  - ☐ Enable threaded (nested) comments (simple flat list preferred)
  - ☑ Break comments into pages with 50 top level comments per page
  - ☑ Comments should be displayed with the older comments at the top of each page
- **Email me whenever**:
  - ☑ Anyone posts a comment
  - ☑ A comment is held for moderation
- **Before a comment appears**:
  - ☑ Comment must be manually approved
  - ☐ Comment author must have a previously approved comment
- **Comment Moderation**: Hold comment if it contains 2 or more links
- **Comment Disallowed List**: (Configure spam keywords as needed)
- **Avatars**: Show Avatars (☑), Default Avatar: Mystery Person

### Media Settings

- **Image sizes**:
  - **Thumbnail size**: 300 × 300 (cropped)
  - **Medium size**: 768 × 0 (no height limit)
  - **Large size**: 1280 × 0 (no height limit)
- **Uploading Files**:
  - ☑ Organize my uploads into month- and year-based folders

### Permalinks Settings

- **Permalink structure**: Custom Structure: `/%postname%/`
- **Category base**: Leave blank (WordPress default `/category/` will be replaced by custom taxonomy rewrites)
- **Tag base**: `etiket` (Afrikaans for tag)

---

## WooCommerce General Settings

### Store Address

- **Address line 1**: (Office address if applicable)
- **Address line 2**: (Suite/Unit if applicable)
- **City**: (Office city)
- **Country / State**: South Africa / Western Cape (or applicable province)
- **Postcode / ZIP**: (Office postcode)

### General Options

- **Selling location(s)**: Sell to all countries
- **Shipping location(s)**: Ship to all countries (Note: Die Papier sells digital-only subscriptions; physical delivery is handled by a sister company with no digital access)
- **Default customer location**: South Africa
- **Enable tax rates and calculations**: ☑ (VAT required in South Africa)
- **Calculate tax based on**: Customer billing address
- **Shipping tax class**: Based on cart items
- **Rounding**: ☑ Round tax at subtotal level, instead of rounding per line
- **Display prices during cart and checkout**: Including tax

### Currency Options

- **Currency**: South African rand (ZAR)
- **Currency position**: Left with space (R 150.00)
- **Thousand separator**: Space ( )
- **Decimal separator**: Comma (,) OR Period (.) — confirm with client
- **Number of decimals**: 2

---

## WooCommerce Products Settings

### General

- **Shop page**: Not applicable (e-editions archive serves as product catalog)
- **Measurements**: Metric (kg, cm)
- **Inventory**:
  - ☑ Enable stock management (for tracking active subscriptions)
  - ☐ Hold stock (minutes) — Not applicable for digital subscriptions
  - ☐ Notifications — Low stock / Out of stock not applicable for digital products

### Downloadable Products

- **File download method**: Force downloads
- **Access restriction**: ☑ Downloads require login
- **Grant access to download products after payment**: ☑

---

## WooCommerce Tax Settings

### Standard Rates

- **Country Code**: ZA (South Africa)
- **State Code**: * (all provinces)
- **Postcode / ZIP**: * (all postcodes)
- **City**: * (all cities)
- **Rate %**: 15.00 (South African VAT)
- **Tax name**: VAT
- **Priority**: 1
- **Compound**: ☐
- **Shipping**: ☑ (apply VAT to shipping if applicable)

### Tax Options

- **Prices entered with tax**: Yes, I will enter prices inclusive of tax
- **Calculate tax based on**: Customer billing address
- **Shipping tax class**: Based on cart items
- **Rounding**: ☑ Round tax at subtotal level
- **Additional tax classes**: None required
- **Display prices in the shop**: Including tax
- **Display prices during cart and checkout**: Including tax
- **Price display suffix**: (empty)
- **Display tax totals**: As a single total

---

## WooCommerce Subscriptions Settings

### General

- **Add to Cart Button Text**: Subscribe Now (Teken nou in)
- **Place Order Button Text**: Sign Up Now (Meld aan)
- **Prorate Recurring Payment**: ☐ (subscriptions start immediately)
- **Prorate Sign-up Fee**: ☐
- **Apportion Sign-up Fee**: ☐
- **Apportion Length**: Full subscription period
- **Mixed Checkout**: Enable customers to purchase subscriptions and non-subscription products in the same transaction (☑)
- **Multiple Subscriptions**: Enable customers to purchase multiple subscriptions in one transaction (☑)
- **Allow Switching**: Enable subscribers to switch (upgrade/downgrade) between different subscription products (☑)
- **Switching Button Text**: Switch Subscription (Wissel intekening)

### Subscription Statuses

- **Manual Renewal Orders**: Create renewal orders with "Pending" status (☑)
- **Automatic Payments**: Enable automatic renewal payments (☑)
- **Accept Manual Renewals**: Yes, always accept manual renewal payments (☑)
- **Turn Off Automatic Payments**: Allow customers to turn off automatic payments on active subscriptions (☑)

### Renewal

- **Retry Failed Payments**: ☑
- **Retry Failed Payment Rules**: Retry 3 times (after 1 day, 3 days, 5 days)
- **Retry Email Notifications**: ☑ Send email notifications when retrying failed payments

### Cancellation

- **Cancelled Subscription Status**: Cancel immediately (do not set pending cancellation)
- **Trash Cancelled Subscriptions**: ☐ (keep for reporting)
- **Trash Expired Subscriptions**: ☐ (keep for reporting)

---

## WooCommerce Memberships Settings

### General

- **Members Area Page**: My Account → Memberships tab
- **Restriction Mode**: Hide restricted content (vs. redirect)
- **Restriction Message (Content)**: "Hierdie inhoud is slegs beskikbaar vir e-uitgawe-intekenaars. [Teken in](/e-uitgawes/teken-in) om toegang te kry." (This content is only available to e-edition subscribers. [Sign in](/e-uitgawes/sign-in) to get access.)
- **Restriction Message (Products)**: "Jy moet 'n aktiewe intekening hê om hierdie produk te koop." (You must have an active subscription to purchase this product.)
- **Grant Access Upon**: Subscription activation (immediately after payment)
- **Revoke Access Upon**: Subscription cancellation or expiration

### Members Area

- **My Memberships Endpoint**: my-memberships (Afrikaans: my-lidmaatskappe)
- **Show Member Discounts**: ☑
- **Show Content Restricted Message**: ☑
- **Show Product Purchasing Restricted Message**: ☑

### Content Restriction Rules

**Membership Plan**: E-Uitgawe Intekenaar

- **Restricted Content Types**:
  - ☑ Posts (CPT: `dp_article` with `dp_access_level` = `subscriber-only`)
  - ☑ Pages (single e-edition archive pages: `/e-uitgawes/argief/:date`)
  - ☐ Products (e-editions are membership-gated content, not products)
  - ☑ Custom Post Types: `dp_eedition` (individual e-edition archive posts)

- **Dripping Rules**: Grant archive access from sign-up date forward (not retroactive full archive access)

**Archive Access Logic** (custom implementation required):
- Members who subscribe on 2026-02-24 get access to all e-editions published from 2026-02-24 onward.
- Past e-editions (before subscription date) remain restricted.
- Special handling: "Volledige Argief" single purchase (R500) grants unrestricted access to all past and future e-editions.

---

## Payfast Gateway Configuration

### Connection Settings

- **Merchant ID**: (Provided by Payfast)
- **Merchant Key**: (Provided by Payfast)
- **Passphrase**: (Set in Payfast dashboard, must match here)
- **Enable Sandbox Mode**: ☑ (for testing), ☐ (for production)
- **Enable Logging**: ☑ (recommended for troubleshooting)

### Payment Settings

- **Title**: Payfast (displayed at checkout)
- **Description**: "Betaal veilig met Payfast — kredietkaart, debietkaart, of EFT." (Pay securely with Payfast — credit card, debit card, or EFT.)
- **Enable for Subscriptions**: ☑
- **Enable Tokenization**: ☑ (required for recurring subscription payments)
- **Payment Action**: Authorize and Capture

### Subscription Settings

- **Recurring Billing**: Enable (☑)
- **Subscription Tokenization**: Use Payfast subscription tokenization for recurring billing (☑)
- **Card Required for Trial**: ☑ (users must enter card details even for 14-day free trial)
- **Failed Payment Handling**: Retry via WooCommerce Subscriptions retry rules (3 attempts)

### Return URLs

- **Success URL**: `https://diepapier.co.za/bestelling-bevestiging?status=success`
- **Cancel URL**: `https://diepapier.co.za/betaal?status=cancelled`
- **Notify URL**: `https://diepapier.co.za/wc-api/WC_Gateway_Payfast` (ITN webhook)

### ITN (Instant Transaction Notification)

- **Enable ITN**: ☑
- **ITN URL**: `https://diepapier.co.za/wc-api/WC_Gateway_Payfast`
- **Verify ITN Signatures**: ☑ (security requirement)
- **Allowed IP Addresses**: Payfast IP ranges (whitelist in firewall if applicable)

---

## Issuu Integration Configuration

**Integration Type**: Manual embed via custom fields (no plugin)

### Custom Fields (SCF)

**Field Group**: E-Edition Metadata  
**Assigned to**: `dp_eedition` CPT

- **Field Name**: `issuu_embed_code`
- **Field Type**: Textarea
- **Instructions**: "Paste the full Issuu embed code (iframe) here. Get this from the Issuu dashboard → Share → Embed."
- **Required**: Yes
- **Default Value**: (empty)

**Field Name**: `issuu_publication_id`
- **Field Type**: Text
- **Instructions**: "Issuu publication ID (for API access, if needed in future)."
- **Required**: No

### Template Integration

**File**: `single-dp_eedition.php` (or block pattern equivalent)

```php
<?php
// Fetch Issuu embed code
$issuu_embed = get_field('issuu_embed_code');
if ($issuu_embed) {
    echo '<div class="issuu-embed-container">';
    echo $issuu_embed; // Output raw iframe embed code
    echo '</div>';
} else {
    echo '<p>Geen Issuu-embed beskikbaar nie.</p>';
}
?>
```

**Styling** (theme.css or block styles):

```css
.issuu-embed-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.issuu-embed-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}
```

### Workflow

1. **Publish PDF to Issuu**: Upload the weekly e-edition PDF to Issuu.com.
2. **Get Embed Code**: Navigate to Issuu dashboard → Publications → [Publication Name] → Share → Embed. Copy the full iframe HTML.
3. **Create WordPress Post**: In WordPress admin, create a new `dp_eedition` post.
4. **Paste Embed Code**: In the "E-Edition Metadata" custom field group, paste the Issuu iframe code into the `issuu_embed_code` textarea.
5. **Publish**: Publish the post. The embed will render on the single e-edition page.

---

## Gravity Forms Configuration

### Form 1: Newsletter Subscription

**Form ID**: 1  
**Form Name**: Newsletter Subscription (Nuusbrief Intekening)

**Fields**:
1. **Name** (Naam) — Text (Required)
2. **Email** (E-pos) — Email (Required)
3. **Frequency** (Frekwensie) — Radio Buttons (Required)
   - Choices: "Dinsdag" (Tuesday), "Vrydag" (Friday), "Beide" (Both)
4. **Consent** (Toestemming) — Checkbox (Required)
   - Label: "Ek stem in om nuusbriewe van Die Papier te ontvang." (I agree to receive newsletters from Die Papier.)

**Confirmations**:
- **Type**: Redirect
- **URL**: `/dankie-nuusbrief`

**Notifications**:
- **To**: {admin_email} (notification to admin)
- **Subject**: "Nuwe nuusbrief-intekening"
- **Message**: Include {all_fields}

**Integrations**:
- Mailchimp (or alternative ESP) — map Name → FNAME, Email → EMAIL, Frequency → FREQ

---

### Form 2: Contact Form

**Form ID**: 2  
**Form Name**: Contact Form (Kontak Vorm)

**Fields**:
1. **Name** (Naam) — Text (Required)
2. **Email** (E-pos) — Email (Required)
3. **Phone** (Telefoon) — Phone (Optional)
4. **Subject** (Onderwerp) — Dropdown (Required)
   - Choices: "Algemene navraag", "Advertensie-navraag", "Redaksionele navraag", "Tegnies
e ondersteuning"
5. **Message** (Boodskap) — Textarea (Required)
6. **Consent** (Toestemming) — Checkbox (Required)
   - Label: "Ek stem in tot Die Papier se [Privaatheidsbeleid](/beleid/privaatheidsbeleid)."

**Confirmations**:
- **Type**: Redirect
- **URL**: `/dankie-kontak`

**Notifications**:
- **To**: kontak@diepapier.co.za
- **Subject**: "Nuwe kontak-vorm-inskrywing: {Subject:5}"
- **Message**: Include {all_fields}

---

### Form 3: Competition Entry

**Form ID**: 3  
**Form Name**: Competition Entry (Kompetisie Inskrywing)

**Fields**:
1. **Name** (Naam) — Text (Required)
2. **Email** (E-pos) — Email (Required)
3. **Phone** (Telefoon) — Phone (Required)
4. **Answer** (Antwoord) — Text or Textarea (Required, question text dynamically populated per competition)
5. **Terms Agreement** (Terme-ooreenkoms) — Checkbox (Required)
   - Label: "Ek stem in tot die [Kompetisie Terme en Voorwaardes](/kompetisies/terme)."

**Confirmations**:
- **Type**: Redirect
- **URL**: `/dankie-kompetisie`

**Notifications**:
- **To**: kompetisies@diepapier.co.za
- **Subject**: "Nuwe kompetisie-inskrywing"
- **Message**: Include {all_fields}

---

## SEO Plugin Configuration (Yoast SEO)

### General Settings

- **SEO Title Separator**: — (em dash)
- **Homepage Title**: Die Papier — Jou gemeenskapskoerant
- **Homepage Meta Description**: "Die Papier is jou gemeenskapskoerant vir Bellville, Brackenfell, Durbanville, en omgewing. Nuus, gebeure, kompetisies, en meer."
- **Social Profiles**: Facebook, Twitter (X), Instagram, LinkedIn (configured in Social tab)

### Content Types

**Posts** (`dp_article`):
- **Show in search results**: Yes
- **Title template**: `%%title%% — Die Papier`
- **Meta description template**: `%%excerpt%%`

**Pages**:
- **Show in search results**: Yes
- **Title template**: `%%title%% — Die Papier`
- **Meta description template**: `%%excerpt%%`

**E-Editions** (`dp_eedition`):
- **Show in search results**: Yes
- **Title template**: `%%title%% — E-Uitgawes`
- **Meta description template**: "Lees die nuutste e-uitgawe van Die Papier online."

**Competitions** (`dp_competition`):
- **Show in search results**: Yes
- **Title template**: `%%title%% — Kompetisies`

**Events** (`dp_event`):
- **Show in search results**: Yes
- **Title template**: `%%title%% — Gebeure`

**Sponsors** (`dp_sponsor`):
- **Show in search results**: No (noindex)

**FAQs** (`dp_faq`):
- **Show in search results**: No (embedded on pages, not standalone)

### Taxonomies

**Categories** (`dp_category`):
- **Show in search results**: Yes
- **Title template**: `%%term_title%% — Kategorie`

**Tags** (`dp_tag`):
- **Show in search results**: Yes
- **Title template**: `%%term_title%% — Etiket`

### Social Settings

- **Facebook**: App ID (if applicable), Default image (logo or homepage hero)
- **Twitter**: @diepapier (Twitter username)
- **Pinterest**: Disable (not applicable)

### Schema Settings

- **Organization**: Die Papier
- **Logo**: (URL to logo image)
- **Website Type**: News Media Organization

---

## Caching & Performance Plugins

**Recommended Plugin**: WP Rocket or W3 Total Cache

### WP Rocket Configuration

**File Optimization**:
- ☑ Minify CSS
- ☑ Combine CSS (test for conflicts)
- ☑ Minify JavaScript
- ☐ Combine JavaScript (often causes conflicts, test carefully)
- ☑ Defer JavaScript loading

**Media**:
- ☑ Enable Lazy Load for images
- ☑ Enable Lazy Load for iframes (for Issuu embeds)
- ☑ Replace YouTube iframe with preview image

**Cache**:
- ☑ Enable Caching for Mobile Devices
- ☑ Enable Caching for Logged-in Users (set exclusions for /my-account/*, /betaal/*, /my-e-uitgawes/)
- **Cache Lifespan**: 10 hours (default)

**Exclusions**:
- **Never cache URLs**: `/my-account/`, `/betaal/`, `/my-e-uitgawes/`, `/wc-api/`
- **Never cache cookies**: `woocommerce_items_in_cart`, `woocommerce_cart_hash`, `wp_woocommerce_session_*`

**Database Optimization**:
- ☑ Post Revisions Cleanup (keep last 5)
- ☑ Auto Drafts Cleanup
- ☑ Trashed Posts Cleanup (after 30 days)

---

## Security & Maintenance

### Recommended Plugins

- **Wordfence Security**: Firewall, malware scanner, login security
- **UpdraftPlus**: Automated backups (daily database, weekly files)
- **WP Mail SMTP**: Configure transactional email via SMTP (SendGrid, Mailgun, or similar)

### Wordfence Configuration

- **Firewall Mode**: Extended Protection (requires .htaccess modification)
- **Real-time IP Blocklist**: Enabled
- **Rate Limiting**: 
  - Human: 240 requests per minute
  - Crawler: 60 requests per minute
- **Login Security**:
  - ☑ Enable Two-Factor Authentication for Administrators
  - ☑ Block login attempts after 3 failed attempts (lock for 15 minutes)

### UpdraftPlus Backup Schedule

- **Database Backups**: Daily at 02:00 (retain 30 backups)
- **File Backups**: Weekly at 03:00 (retain 4 backups)
- **Remote Storage**: Google Drive, Dropbox, or S3 (configure as needed)
- **Backup Contents**: All (database, plugins, themes, uploads, core files)

---

## Custom Configuration Notes

### User Roles & Capabilities

**Custom Roles** (via plugin: Members or User Role Editor):

1. **E-Uitgawe Intekenaar** (E-Edition Subscriber)
   - Capabilities: `read`, `read_dp_eedition`, `read_private_dp_eedition`
   - Assigned via WooCommerce Memberships upon subscription activation

2. **Redakteur** (Editor)
   - All default Editor capabilities
   - Additional: `manage_dp_articles`, `edit_dp_competitions`, `edit_dp_events`

3. **Adverteerder** (Advertiser)
   - Capabilities: `read`, `upload_files`, `edit_posts` (limited to sponsored content)
   - Restricted dashboard access

### Email Templates (WooCommerce)

All WooCommerce email templates should be overridden in the theme:

**Location**: `/themes/die-papier/woocommerce/emails/`

**Templates to override**:
- `customer-processing-order.php` → "Bestelling ontvang" (Order received)
- `customer-completed-order.php` → "Bestelling voltooi" (Order completed)
- `customer-invoice.php` → "Jou faktuur" (Your invoice)
- `customer-new-account.php` → "Welkom by Die Papier" (Welcome to Die Papier)
- `customer-renewal-invoice.php` → "Jou hernuwings-faktuur" (Your renewal invoice)
- `customer-on-hold-renewal.php` → "Jou intekening is op wag" (Your subscription is on hold)
- `cancelled-subscription.php` → "Jou intekening is gekanselleer" (Your subscription has been cancelled)

**Styling**: Match React email templates (FridayNewsletterTemplate.tsx, TuesdayNewsletterTemplate.tsx) for brand consistency.

---

## Deployment Checklist

Before launching the WordPress site:

- [ ] Verify all WooCommerce Subscriptions products are created (3 monthly + 1 single purchase)
- [ ] Test Payfast sandbox mode end-to-end (free trial, recurring payment, cancellation)
- [ ] Verify WooCommerce Memberships access gates work on restricted e-edition archives
- [ ] Test all 3 Gravity Forms (newsletter, contact, competition) submit to correct endpoints
- [ ] Verify Yoast SEO meta tags render correctly on all page types
- [ ] Verify Issuu embeds render correctly on single e-edition pages
- [ ] Set up automated backups (UpdraftPlus daily database, weekly files)
- [ ] Configure SMTP email (WP Mail SMTP) and test all transactional emails
- [ ] Switch Payfast from sandbox to production mode
- [ ] Disable WordPress search engine visibility block (Settings → Reading)
- [ ] Verify all dev tool pages (`/ontwikkelaar/*`) are noindexed or password-protected

---

*End of System Configuration guideline.*