# SEO, Schema & Optimization — Consolidated Guide

**Last updated**: 2026-03-01
**Version**: 1.0
**Template**: `/guidelines/_templates/strategy-guideline-template.md`
**Status:** Production-ready
**Context:** Comprehensive SEO configuration for the Die Papier WordPress FSE theme, including Yoast SEO integration, structured data, image optimization, caching, and accessibility.

---

## 1. Meta Tags

Every page must include:
*   `title`: "Post Title | Die Papier"
*   `description`: Excerpt or manual meta description.
*   `robots`: "index, follow" (unless specific protected pages).
*   `og:image`: Featured image URL.

---

## 2. SEO Configuration (Yoast SEO)

### 2.1 Plugin Choice

We are using **Yoast SEO** (Free + Premium).
*   **Alternatives:** RankMath (Lighter, but Yoast is industry standard for news).

### 2.2 Title & Meta Templates

Configure defaults in `SEO -> Search Appearance`:

*   **Articles:** `%%title%% %%page%% %%sep%% %%sitename%%`
*   **Events:** `%%title%% (%%cf_event_date%%) %%sep%% %%sitename%%`
*   **Competitions:** `Wen %%cf_prize%%: %%title%% %%sep%% %%sitename%%`
*   **Archives:** `%%term_title%% Argief %%page%% %%sep%% %%sitename%%`

### 2.3 Sitemap Configuration

Ensure the XML sitemap includes:
*   `post` (Priority: 0.9)
*   `dp_event` (Priority: 0.7)
*   `dp_competition` (Priority: 0.8)
*   `dp_eedition` (Priority: 0.6)
*   `dp_obituary` (Priority: 0.5)
*   **Exclude:** `dp_sponsor`, Media Attachments, Tag Archives (to prevent crawl budget waste).

---

## 3. React SEO Component Migration

The React `SEO` component props map directly to Yoast SEO's storage in the `wp_postmeta` table and its global settings.

| React Prop (`SEO.tsx`) | Yoast SEO Meta Key / Setting | Notes |
| :--- | :--- | :--- |
| `title` | `_yoast_wpseo_title` | Fallback to `%title% %%sep%% %sitename%` global setting if empty. |
| `description` | `_yoast_wpseo_metadesc` | Fallback to `%excerpt%` or global default. |
| `keywords` | `_yoast_wpseo_focuskw` | Yoast only supports one "Focus Keyphrase" natively. Secondary keywords can be ignored or moved to tags. |
| `canonical` | `_yoast_wpseo_canonical` | Defaults to permalink if empty. |
| `type` ("article" vs "website") | `og:type` (Global/Post Type Settings) | Configured in Yoast > Social > Facebook. |
| `image` | `_yoast_wpseo_opengraph-image` |  |
| `author` | Author Archive / `post_author` | WordPress handles this natively. |
| `publishedTime` | `post_date` | Native WP field. |
| `modifiedTime` | `post_modified` | Native WP field. |

---

## 4. Open Graph & Twitter Cards

Yoast SEO automatically handles Open Graph (`og:*`) and Twitter (`twitter:*`) tags based on the settings above.

*   **Logic:** No custom code required. Ensure "Open Graph data" is enabled in *Yoast SEO > Social*.
*   **Default Image:** Set the default "Social Image" in *Yoast SEO > Social > Facebook* to match the `image` prop fallback in React (`/og-image.jpg`).

---

## 5. Structured Data (Schema.org)

The `generateArticleStructuredData` function in React manually constructs JSON-LD. Yoast SEO generates a robust Schema graph automatically.

### 5.1 Migration Action

*   **Disable** any manual Schema generation in the theme `header.php`.
*   **Configure** Yoast to output the correct graph pieces:
    *   **Organization:** Set "Organization Name" and "Organization Logo" in *Yoast SEO > General > Site Representation*.
    *   **Article:** Yoast automatically marks Posts as `Article` or `NewsArticle`.
    *   **Breadcrumbs:** Yoast generates `BreadcrumbList`. Enable breadcrumbs in *Yoast SEO > Settings*.

### 5.2 NewsArticle (Standard Posts)

Yoast handles this out of the box. Ensure:
*   `logo` is set in "Organization" settings.
*   `author` links to the WP User profile.
*   `datePublished` and `dateModified` are accurate.

**JSON-LD Example:**

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Post Title",
  "image": ["https://example.com/image.jpg"],
  "datePublished": "2023-10-06T08:00:00+02:00",
  "dateModified": "2023-10-06T09:00:00+02:00",
  "author": [{
      "@type": "Person",
      "name": "Author Name",
      "url": "https://diepapier.co.za/author/name"
  }]
}
```

### 5.3 Event (`dp_event`)

Add this filter to output `Event` schema:

```php
add_filter('wpseo_schema_graph_pieces', function($pieces, $context) {
    if (is_singular('dp_event')) {
        $pieces[] = new DP_Event_Schema($context);
    }
    return $pieces;
}, 10, 2);
```

**Fields:**
*   `@type`: Event
*   `name`: Post Title
*   `startDate`: `event_date` + `event_time`
*   `location`: `event_location` (Place)
*   `image`: Featured Image URL

### 5.4 Product (E-Edition)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Die Papier: 6 Oktober 2023",
  "image": "https://example.com/cover.jpg",
  "offers": {
    "@type": "Offer",
    "price": "35.00",
    "priceCurrency": "ZAR",
    "availability": "https://schema.org/InStock"
  }
}
```

### 5.5 Organization

Ensure "SameAs" links are populated with:
*   Facebook: `https://www.facebook.com/diepapier.za/about/`
*   Instagram: `https://instagram.com/die.papier`
*   X (Twitter): `https://x.com/die_papier`
*   YouTube: `https://www.youtube.com/@diepapier`
*   LinkedIn: `https://linkedin.com/company/diepapier/`
*   TikTok: `https://www.tiktok.com/@diepapier`

**Note**: These are Die Papier's official social media profile URLs. For the canonical reference document with all social URLs, see `/guidelines/wordpress-migration/canonical-social-urls.md`.

### 5.6 BreadcrumbList

Must be present on all pages except Home.

### 5.7 Custom Schema (If needed)

If we need to inject custom fields into the Schema (e.g., specific "Sponsor" data), use the `wpseo_schema_graph_pieces` filter in PHP.

```php
add_filter( 'wpseo_schema_graph_pieces', 'dp_add_custom_schema_pieces', 11, 2 );
function dp_add_custom_schema_pieces( $pieces, $context ) {
    // Add custom logic here
    return $pieces;
}
```

---

## 6. WXR Import Strategy

When importing content via WXR, ensure the `postmeta` fields for Yoast are populated.

**XML Example:**
```xml
<wp:postmeta>
    <wp:meta_key>_yoast_wpseo_title</wp:meta_key>
    <wp:meta_value><![CDATA[My Custom SEO Title]]></wp:meta_value>
</wp:postmeta>
<wp:postmeta>
    <wp:meta_key>_yoast_wpseo_metadesc</wp:meta_key>
    <wp:meta_value><![CDATA[My custom meta description for this article.]]></wp:meta_value>
</wp:postmeta>
```

---

## 7. Image Optimization

### 7.1 WebP Delivery

Use **EWWW Image Optimizer** or **WebP Express**.
*   **Strategy:** Serve WebP to supported browsers, fallback to JPG/PNG.
*   **Quality:** 82% (Balance between size and artifacting for text-heavy images).

### 7.2 Responsive Sizes (`theme.json`)

Define standard sizes to generate `srcset`:
*   `thumbnail`: 150x150 (Crop)
*   `medium`: 300x300 (Max)
*   `medium_large`: 768x0
*   `large`: 1024x1024 (Max)
*   `hero`: 1920x1080 (Crop) - *Custom size*

---

## 8. Caching Strategy

### 8.1 Page Caching

Use **WP Super Cache** or **W3 Total Cache**.
*   **Mode:** Simple (Disk Caching).
*   **Expiry:** 3600s (1 hour) for archives, 12h for singles.

### 8.2 Exclusions (Critical)

Exclude these pages from caching to ensure dynamic functionality works:
*   `/my-account/*` (WooCommerce)
*   `/checkout/*`
*   `/cart/*`
*   `/wp-admin/*`
*   `dp_competition` singles (if using Gravity Forms with nonce)

### 8.3 Object Caching

If hosting supports Redis/Memcached, install **Redis Object Cache**.
*   Crucial for transient performance (Weather Widget, External API calls).

---

## 9. Accessibility Audit (WCAG 2.1 AA)

### 9.1 Tools

*   **Axe DevTools:** Browser extension for manual checks.
*   **Pa11y:** CI/CD integration.

### 9.2 Key Focus Areas

1.  **Contrast:** Ensure text over images (Hero blocks) has overlay opacity.
2.  **Navigation:** Mega Menus must be keyboard navigable (`Tab`, `Enter`, `Esc`).
3.  **Forms:** All Gravity Forms inputs must have explicit `<label>` tags.
4.  **ARIA:** Add `aria-label` to icon-only buttons (Search, Social Links).

---

## Related Documentation

| Document | Relevance |
|:---------|:----------|
| `/guidelines/wordpress-migration/third-party-plugins/yoast-seo.md` | Yoast SEO plugin integration (breadcrumbs, FAQ block, schema) |
| `/guidelines/wordpress-migration/woocommerce/README.md` | WooCommerce commerce flow |
| `/guidelines/wordpress-migration/redirects.md` | Legacy URL redirect map |

---

**End of SEO, Schema & Optimization Guide**