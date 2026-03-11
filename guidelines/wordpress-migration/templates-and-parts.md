# Templates and Template Parts

**Last updated**: 2026-03-02
**Version**: 1.1

This document provides the complete reference for all WordPress FSE templates and template parts in the "Die Papier" theme.

## Template Architecture

Every template follows a consistent 3-part structure:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/[pattern-slug]"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

The only variation is which **pattern** is loaded in the `<main>` group, and occasionally which header/footer variant is used.

---

### ⚠️ Template Part Mandatory Attributes (CRITICAL)

Every `<!-- wp:template-part -->` block **MUST** include BOTH attributes:

1. **`slug`** — Template part filename (without `.html`)
2. **`tagName`** — Semantic HTML element to render

**Correct Examples**:
```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
<!-- wp:template-part {"slug":"breadcrumbs","tagName":"nav"} /-->
<!-- wp:template-part {"slug":"sidebar","tagName":"aside"} /-->
```

**Incorrect (Missing tagName)**:
```html
<!-- wp:template-part {"slug":"breadcrumbs"} /-->
<!-- Renders as <div> instead of <nav> — breaks accessibility & SEO! -->
```

**Standard tagName Values**:

| Template Part Slug | Semantic Role | tagName |
|--------------------|---------------|---------|
| `header` | Site header | `"header"` |
| `footer` | Site footer | `"footer"` |
| `sidebar` / `sidebar-*` | Sidebar content | `"aside"` |
| `breadcrumbs` | Breadcrumb navigation | `"nav"` |
| `comments` | Comments section | `"section"` |
| `post-meta` | Post metadata | `"div"` |
| WooCommerce parts | Product components | `"div"` or `"section"` |

**When in doubt**: Use `"div"` as fallback, but prefer semantic HTML5 elements when the role is clear.

**Why This Matters**:
- ✅ **Accessibility**: Screen readers use semantic elements as navigation landmarks
- ✅ **SEO**: Search engines understand content structure via semantic HTML
- ✅ **Standards Compliance**: Required by WordPress Block Theme specification
- ❌ **Without tagName**: Renders as generic `<div class="wp-block-template-part">` — loses all semantic meaning

---

## 1. Core Templates (7)

### `index.html` — Fallback

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:query-title {"type":"archive"} /-->
    <!-- wp:pattern {"slug":"die-papier/archive-default"} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `front-page.html` — Homepage

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/page-home"} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `single.html` — Article

Uses post content directly (not a pattern):

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">
        <!-- wp:column {"width":"70%"} -->
        <div class="wp-block-column" style="flex-basis:70%">
            <!-- wp:template-part {"slug":"breadcrumbs"} /-->
            <!-- wp:die-papier/article-hero /-->
            <!-- wp:post-content {"layout":{"type":"constrained"}} /-->
            <!-- wp:pattern {"slug":"die-papier/section-share"} /-->
            <!-- wp:pattern {"slug":"die-papier/section-related-articles"} /-->
            <!-- wp:template-part {"slug":"comments"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"width":"30%"} -->
        <div class="wp-block-column" style="flex-basis:30%">
            <!-- wp:template-part {"slug":"sidebar"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `page.html` — Generic Page

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:template-part {"slug":"breadcrumbs"} /-->
    <!-- wp:post-content {"layout":{"type":"constrained"}} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

**Note:** Individual pages override their content via the Full Page Pattern strategy. The page content in the editor IS the pattern.

### `archive.html` — Category/Tag

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/archive-default"} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `search.html` — Search Results

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/archive-search"} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `404.html` — Not Found

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:pattern {"slug":"die-papier/page-404"} /-->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

---

## 2. CPT Single Templates (6)

All CPT singles follow this pattern with a two-column layout:

### `single-dp_event.html`

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    <!-- wp:template-part {"slug":"breadcrumbs"} /-->
    <!-- wp:columns {"align":"wide"} -->
    <div class="wp-block-columns alignwide">
        <!-- wp:column {"width":"70%"} -->
        <div class="wp-block-column" style="flex-basis:70%">
            <!-- wp:post-featured-image {"aspectRatio":"16/9","style":{"border":{"radius":"8px"}}} /-->
            <!-- wp:post-title {"level":1} /-->
            <!-- Event Meta Fields (date, location, price, organiser) -->
            <!-- wp:group {"className":"is-style-card"} -->
            <div class="wp-block-group is-style-card">
                <!-- Rendered via dp/event-meta or post-meta fields -->
            </div>
            <!-- /wp:group -->
            <!-- wp:post-content {"layout":{"type":"constrained"}} /-->
            <!-- wp:pattern {"slug":"die-papier/section-share"} /-->
        </div>
        <!-- /wp:column -->
        <!-- wp:column {"width":"30%"} -->
        <div class="wp-block-column" style="flex-basis:30%">
            <!-- wp:template-part {"slug":"sidebar-event"} /-->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</main>
<!-- /wp:group -->
<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### `single-dp_obituary.html`

Similar to single-event but with obituary-specific meta fields (dates of birth/death, service details, condolence info). Uses the default sidebar.

### `single-dp_multimedia.html`

Includes video/audio embed area at top, or photo gallery slider. Media type determines which embed block is shown.

### `single-dp_competition.html`

Includes the `dp/competition-entry` block which dynamically shows the entry form (if open) or closed message (if past closing date).

### `single-dp_eedition.html`

Shows cover image, edition details, and either a PDF viewer (for subscribers) or a purchase CTA (for non-subscribers).

### `single-dp_sponsor.html`

Sponsor profile with logo, description, website link, and a query loop showing articles associated with this sponsor.

---

## 3. CPT Archive Templates (5)

Each uses the corresponding archive pattern (see `full-page-patterns.md`):

| Template | Pattern | Content Doc |
| :--- | :--- | :--- |
| `archive-dp_event.html` | `die-papier/archive-events` | `/content/templates/archive-event.md` |
| `archive-dp_obituary.html` | `die-papier/archive-obituaries` | `/content/templates/archive-obituary.md` |
| `archive-dp_multimedia.html` | `die-papier/archive-multimedia` | `/content/templates/archive-multimedia.md` |
| `archive-dp_competition.html` | `die-papier/archive-competitions` | `/content/templates/archive-competition.md` |
| `archive-dp_sponsor.html` | `die-papier/archive-sponsors` | `/content/templates/archive-sponsor.md` |

---

## 4. Taxonomy Templates (3)

Taxonomy archives use dedicated patterns (DRY — no inline query loops):

| Template | Taxonomy | Pattern | Purpose |
| :--- | :--- | :--- | :--- |
| `taxonomy-dp_event_category.html` | `dp_event_category` | `archive-event-category` | Filter events by category (Musiek, Markte, etc.) |
| `taxonomy-dp_multimedia_category.html` | `dp_multimedia_category` | `archive-multimedia-category` | Filter media by type (Video's, Podcasts, Fotogalerye) |
| `taxonomy-dp_sponsor_tier.html` | `dp_sponsor_tier` | `archive-sponsor-tier` | Show sponsors by tier (Gold, Silver, Bronze) |

---

## 5. Template Parts (9)

### `header.html` — Default Header

```html
<!-- wp:group {"tagName":"header","className":"site-header","layout":{"type":"constrained","contentSize":"1440px"}} -->
<header class="wp-block-group site-header">
    <!-- wp:group {"layout":{"type":"flex","justifyContent":"space-between","flexWrap":"nowrap"}} -->
    <div class="wp-block-group">
        <!-- wp:site-logo {"width":120} /-->
        <!-- wp:navigation {"ref":PRIMARY_NAV_ID,"layout":{"type":"flex","justifyContent":"center"}} /-->
        <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
        <div class="wp-block-group">
            <!-- wp:search {"label":"Soek","showLabel":false,"placeholder":"Soek...","buttonText":"Soek","buttonUseIcon":true} /-->
            <!-- Theme Toggle Button (via view.js) -->
            <!-- User Menu (Login/My Account) -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</header>
<!-- /wp:group -->
```

**Navigation Menus:**
-   **Primary:** Tuis | Nuus | Sport | Dink | Sake | Leefstyl | E-uitgawes
-   **Secondary:** Skolerugby | Kompetisies | Gebeure | Doodsberrigte | Multimedia
-   **Mobile:** Full-screen overlay with all navigation items

### `footer.html` — Default Footer

4-column grid layout:
1.  **Column 1:** Logo, tagline, social links
2.  **Column 2:** Navigasie (main links)
3.  **Column 3:** Dienste (Adverteer, Inteken, Kontak)
4.  **Column 4:** Beleid (all 11 policy links)

Bottom bar: Copyright notice + "Gebou met WordPress" credit

### `sidebar.html` — Default Sidebar

Ordered content:
1.  Newsletter CTA (`dp/newsletter-cta` variant="sidebar")
2.  Ad Slot (MREC 300x250)
3.  Trending Articles (query: 5 posts, orderby popularity, 7 days)
4.  Sponsor Banner (`dp/sponsor-banner`)
5.  Ad Slot (MREC 300x250)

### `sidebar-event.html` — Event Sidebar

1.  Map / Location widget
2.  "Submit Your Event" CTA
3.  Upcoming Events (query: 3 next events)
4.  Newsletter CTA
5.  Ad Slot

### `comments.html` — Comments Section

```html
<!-- wp:comments -->
<div class="wp-block-comments">
    <!-- wp:heading {"level":3} -->
    <h3>Kommentaar</h3>
    <!-- /wp:heading -->
    <!-- wp:comment-template -->
        <!-- wp:columns -->
        <div class="wp-block-columns">
            <!-- wp:column {"width":"40px"} -->
            <div class="wp-block-column"><<!-- wp:avatar {"size":40} /--></div>
            <!-- /wp:column -->
            <!-- wp:column -->
            <div class="wp-block-column">
                <!-- wp:comment-author-name /-->
                <!-- wp:comment-date /-->
                <!-- wp:comment-content /-->
                <!-- wp:comment-reply-link /-->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->
    <!-- /wp:comment-template -->
    <!-- wp:comments-pagination -->
    <!-- wp:comments-pagination-previous /-->
    <!-- wp:comments-pagination-numbers /-->
    <!-- wp:comments-pagination-next /-->
    <!-- /wp:comments-pagination -->
    <!-- wp:post-comments-form /-->
</div>
<!-- /wp:comments -->
```

### `breadcrumbs.html` — Breadcrumbs

Uses Yoast SEO breadcrumbs block or a manual breadcrumb pattern:

```html
<!-- wp:group {"className":"breadcrumbs","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20"}}}} -->
<div class="wp-block-group breadcrumbs">
    <!-- wp:yoast-seo/breadcrumbs /-->
</div>
<!-- /wp:group -->
```

### `post-meta.html` — Post Meta

```html
<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"var:preset|spacing|20"}}} -->
<div class="wp-block-group">
    <!-- wp:post-author-name {"isLink":true} /-->
    <!-- wp:paragraph -->
    <p>·</p>
    <!-- /wp:paragraph -->
    <!-- wp:post-date /-->
    <!-- wp:paragraph -->
    <p>·</p>
    <!-- /wp:paragraph -->
    <!-- wp:post-terms {"term":"category"} /-->
</div>
<!-- /wp:group -->
```

---

## 6. Template Selection Logic

WordPress applies templates based on priority:

| Request | Template Used | Pattern Loaded |
| :--- | :--- | :--- |
| Homepage `/` | `front-page.html` | `page-home` |
| Article `/artikel/x` | `single.html` | N/A (post content) |
| Page `/oor-ons` | `page.html` | `page-about` (via page content) |
| Category `/nuus` | `category.html` | `archive-category` |
| Event `/gebeure/x` | `single-dp_event.html` | N/A (post content + meta) |
| Events listing `/gebeure` | `archive-dp_event.html` | `archive-events` |
| Tag `/onderwerp/x` | `tag.html` | `archive-tag` |
| Author `/skrywer/x` | `author.html` | `archive-author` |
| Search `/soek?s=x` | `search.html` | `archive-search` |
| 404 | `404.html` | `page-404` |

---

## 7. Responsive Behaviour

### Header
-   **Desktop (>1024px):** Full horizontal navigation
-   **Tablet (768-1024px):** Abbreviated nav + hamburger for secondary
-   **Mobile (<768px):** Logo + hamburger, full-screen overlay menu

### Sidebar
-   **Desktop:** 30% column, visible
-   **Tablet/Mobile:** Hidden, content goes full width

### Archive Grids
-   **Desktop:** 3-column grid
-   **Tablet:** 2-column grid
-   **Mobile:** Single column stack

---

## 8. V2 Typography Specifications (New)

All templates must adhere to the V2 Design System (Roboto Serif headings, Inter body). 
**Key Rule:** All H1-H3 headings must use `font-variation-settings: 'GRAD' -50`.

| Template Type | Main Heading (H1) Style | Secondary Headings (H2) | Notes |
| :--- | :--- | :--- | :--- |
| **Front Page** | `var(--text-h1)` + `GRAD -50` | `var(--text-h2)` + `GRAD -50` | Hero Slider uses Custom H2 styles (White) |
| **Single Post** | `var(--text-h1)` + `GRAD -50` | `var(--text-h2)` + `GRAD -50` | Article body headings must respect `theme.json` elements |
| **Pages** | `var(--text-h1)` + `GRAD -50` | `var(--text-h2)` + `GRAD -50` | "Content Hero" pattern standardizes H1 |
| **Archives** | `var(--text-h1)` + `GRAD -50` | `var(--text-h3)` + `GRAD -50` | Archive titles are H1, Card titles are H3 |
| **Sidebar** | N/A | `var(--text-h3)` + `GRAD -50` | Widget titles use H3 style but `div` or `h2` tag |