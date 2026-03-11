# Yoast SEO Integration Guide

**Last updated**: 2026-03-02
**Version**: 2.0
**Version at launch**: 23.2
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

Complete reference for Yoast SEO block integration in the Die Papier WordPress FSE theme. This guide documents breadcrumbs, FAQ blocks, How-To blocks, schema.org structured data, Afrikaans translations, and section style integration.

---

## Table of Contents

1. [Overview](#overview)
2. [Yoast SEO Blocks Inventory](#yoast-seo-blocks-inventory)
3. [Breadcrumbs Block](#breadcrumbs-block)
4. [FAQ Block](#faq-block)
5. [How-To Block](#how-to-block)
6. [Schema.org Structured Data](#schemaorg-structured-data)
7. [Template Integration](#template-integration)
8. [Pattern Integration](#pattern-integration)
9. [Afrikaans Translations](#afrikaans-translations)
10. [Theme Styling](#theme-styling)
11. [Configuration Settings](#configuration-settings)
12. [Accessibility](#accessibility)
13. [Testing Checklist](#testing-checklist)

---

## Overview

Yoast SEO provides **3 Gutenberg blocks** designed to improve SEO and user experience through structured data and enhanced navigation:

1. **Breadcrumbs Block** (`yoast-seo/breadcrumbs`) — Site navigation trail
2. **FAQ Block** (`yoast/faq-block`) — Frequently Asked Questions with schema markup
3. **How-To Block** (`yoast/how-to-block`) — Step-by-step instructions with schema markup

All blocks output **schema.org JSON-LD** structured data for improved search engine visibility.

### Key Features

- **Schema.org Compliance**: All blocks output valid JSON-LD structured data
- **Afrikaans Support**: Breadcrumbs and block UI translated to Afrikaans
- **Section Style Integration**: FAQ blocks work in all 24 section styles
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Benefits**: Rich snippets in Google search results (FAQ accordion, breadcrumbs)

### Usage in Die Papier

- **Breadcrumbs**: Used in **ALL templates** (26 templates) via `parts/breadcrumbs.html` template part
- **FAQ Blocks**: Used in 4+ page patterns (E-Edition Subscribe, Advertise, Contact, Dev Tools pages)
- **How-To Blocks**: NOT USED (no instructional content in Die Papier's editorial scope)

---

## Yoast SEO Blocks Inventory

| Block | Slug | Category | Schema Type | Die Papier Usage |
|-------|------|----------|-------------|------------------|
| **Breadcrumbs** | `yoast-seo/breadcrumbs` | `yoast-seo-structured-data-blocks` | `BreadcrumbList` | All templates (26) |
| **FAQ** | `yoast/faq-block` | `yoast-seo-structured-data-blocks` | `FAQPage` | 4+ page patterns |
| **How-To** | `yoast/how-to-block` | `yoast-seo-structured-data-blocks` | `HowTo` | NOT USED |

---

## Breadcrumbs Block

### Block Name

**Namespace**: `yoast-seo`  
**Slug**: `yoast-seo/breadcrumbs`  
**Category**: `yoast-seo-structured-data-blocks`

### Block Attributes

The breadcrumbs block has **NO user-editable attributes** in the block editor. All settings are configured via **Yoast SEO → Search Appearance → Breadcrumbs**.

```html
<!-- wp:yoast-seo/breadcrumbs /-->
```

### Breadcrumb Configuration (Yoast SEO Settings)

Die Papier breadcrumb configuration:

| Setting | Value | Purpose |
|---------|-------|---------|
| **Enable Breadcrumbs** | ✅ Yes | Enable block and schema output |
| **Separator** | `›` | Visual separator between crumbs |
| **Anchor text for Homepage** | `Tuisblad` | Afrikaans for "Home" |
| **Show taxonomy (category)** | ✅ Yes | Display post category in breadcrumb trail |
| **Bold last page** | ❌ No | Current page is not bolded |

### Breadcrumb Output Examples

#### 1. Homepage (Front Page)
**URL**: `/`  
**Breadcrumb**: (not displayed on homepage)

#### 2. Single Post (Article)
**URL**: `/nuus/breaking-news-article`  
**Breadcrumb**: `Tuisblad › Nuus › Breaking News Article`

#### 3. Category Archive
**URL**: `/category/sport`  
**Breadcrumb**: `Tuisblad › Sport`

#### 4. E-Edition Archive
**URL**: `/e-uitgawes`  
**Breadcrumb**: `Tuisblad › E-Uitgawes`

#### 5. Single E-Edition
**URL**: `/e-uitgawes/die-papier-27-feb-2026`  
**Breadcrumb**: `Tuisblad › E-Uitgawes › Die Papier 27 Feb 2026`

#### 6. Search Results
**URL**: `/search?s=rugby`  
**Breadcrumb**: `Tuisblad › Soekresultate vir "rugby"`

#### 7. 404 Page
**URL**: `/non-existent-page`  
**Breadcrumb**: `Tuisblad › Bladsy nie gevind`

### Schema.org Output (BreadcrumbList)

Yoast SEO automatically generates JSON-LD schema for breadcrumbs:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Tuisblad",
      "item": "https://diepapier.co.za/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Nuus",
      "item": "https://diepapier.co.za/category/nuus"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Breaking News Article",
      "item": "https://diepapier.co.za/nuus/breaking-news-article"
    }
  ]
}
```

**Benefits**:
- Google displays breadcrumb trail in search results (below page title)
- Improves click-through rate (CTR) by showing site structure
- Helps users understand their location in the site hierarchy

### CSS Styling

Die Papier breadcrumb styling (defined in `theme.json`):

```json
{
  "settings": {
    "blocks": {
      "yoast-seo/breadcrumbs": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--300)"
        },
        "color": {
          "text": "var(--wp--preset--color--contrast-2)"
        }
      }
    }
  }
}
```

**Visual Style**:
- Font size: `300` (14px)
- Text color: `contrast-2` (medium grey, #697A8D)
- Font family: Inter (inherited from theme)
- Separator: `›` with spacing (via Yoast settings)

### Breadcrumb Template Part

Breadcrumbs are added to templates via the `parts/breadcrumbs.html` template part:

```html
<!-- wp:yoast-seo/breadcrumbs /-->
```

**Usage in Templates**:
```html
<!-- wp:template-part {"slug":"breadcrumbs"} /-->
```

This template part is inserted **first inside `<main>`**, before page content, in all templates (except homepage and checkout).

---

## FAQ Block

### Block Name

**Namespace**: `yoast`  
**Slug**: `yoast/faq-block`  
**Category**: `yoast-seo-structured-data-blocks`

### Block Attributes

```json
{
  "questions": [
    {
      "id": "faq-question-1",
      "question": ["Wat is 'n e-uitgawe?"],
      "answer": ["'n E-uitgawe is 'n digitale weergawe van Die Papier koerant wat jy op jou foon, tablet of rekenaar kan lees."]
    },
    {
      "id": "faq-question-2",
      "question": ["Hoe werk intekeninge?"],
      "answer": ["Kies 'n plan (1, 3 of 12 maande), betaal veilig met Payfast, en kry onmiddellike toegang tot alle e-uitgawes."]
    }
  ]
}
```

### FAQ Block Structure

The FAQ block creates an **accordion-style interface** where:
- Each question is a clickable heading (H3)
- Clicking a question expands the answer (paragraph)
- Multiple questions can be open simultaneously
- All questions closed by default (user must click to expand)

### Block Markup Example

```html
<!-- wp:yoast/faq-block -->
<div class="schema-faq wp-block-yoast-faq-block">
    <div class="schema-faq-section" id="faq-question-1">
        <strong class="schema-faq-question">Wat is 'n e-uitgawe?</strong>
        <p class="schema-faq-answer">'n E-uitgawe is 'n digitale weergawe van Die Papier koerant wat jy op jou foon, tablet of rekenaar kan lees.</p>
    </div>
    <div class="schema-faq-section" id="faq-question-2">
        <strong class="schema-faq-question">Hoe werk intekeninge?</strong>
        <p class="schema-faq-answer">Kies 'n plan (1, 3 of 12 maande), betaal veilig met Payfast, en kry onmiddellike toegang tot alle e-uitgawes.</p>
    </div>
</div>
<!-- /wp:yoast/faq-block -->
```

### Schema.org Output (FAQPage)

Yoast SEO automatically generates JSON-LD schema for FAQ blocks:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is 'n e-uitgawe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "'n E-uitgawe is 'n digitale weergawe van Die Papier koerant wat jy op jou foon, tablet of rekenaar kan lees."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe werk intekeninge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kies 'n plan (1, 3 of 12 maande), betaal veilig met Payfast, en kry onmiddellike toegang tot alle e-uitgawes."
      }
    }
  ]
}
```

**Benefits**:
- Google displays FAQ rich snippets in search results (expandable Q&A)
- Increases search result real estate (larger snippet = higher CTR)
- Improves user experience (answers common questions directly in search)

### FAQ Content Sources

Die Papier FAQ content is stored in `/guidelines/content/master-content-export.md`:

#### Global FAQs (6 questions)

1. **Wat is Die Papier?**  
   Die Papier is 'n Afrikaanse gemeenskapskoerant vir Pretoria-Oos en omliggende areas.

2. **Hoe kan ek inteken?**  
   Jy kan inteken vir ons e-uitgawes op https://diepapier.co.za/inteken/e-uitgawe

3. **Wat is 'n e-uitgawe?**  
   'n E-uitgawe is 'n digitale weergawe van Die Papier koerant wat jy op jou foon, tablet of rekenaar kan lees.

4. **Hoeveel kos 'n intekening?**  
   Ons intekeninge kos R140/maand, R390/3 maande, of R1400/jaar. Alle planne sluit 'n 14-dag gratis proeftydperk in.

5. **Kan ek adverteer in Die Papier?**  
   Ja! Kontak ons advertensiespan by advertensies@diepapier.co.za of skakel 012 345 6789.

6. **Waar kan ek Die Papier kry?**  
   Ons gedrukte koerant is beskikbaar by verskeie verspreipunte in Pretoria-Oos, of jy kan inteken vir ons e-uitgawe.

**Note**: FAQ content is minimal. Additional FAQs will be needed for:
- E-Edition Subscribe page (payment, access, cancellation FAQs)
- Advertise page (ad specs, pricing, deadlines)
- Contact page (response time, support channels)
- Dev Tools pages (tool-specific FAQs)

---

## How-To Block

### Block Name

**Namespace**: `yoast`  
**Slug**: `yoast/how-to-block`  
**Category**: `yoast-seo-structured-data-blocks`

### Die Papier Usage

**Status**: ❌ **NOT USED**

**Rationale**: Die Papier does not publish instructional/how-to content. The site's editorial focus is:
- News articles (breaking news, local news, sport)
- E-edition subscriptions (purchase flow, not instructional)
- Events, obituaries, multimedia, competitions (informational, not instructional)

**Potential Future Use Cases** (if editorial scope expands):
- "How to submit an obituary"
- "How to enter a competition"
- "How to use our developer tools" (for dev tools pages)

If How-To blocks are added in the future, this section will document:
- Block attributes (steps array, total time, estimated cost)
- Schema.org HowTo output
- CSS styling for step numbers and images
- Accessibility considerations (step navigation)

---

## Schema.org Structured Data

Yoast SEO outputs **JSON-LD** structured data for all blocks. This data is injected into the `<head>` of each page and read by search engines.

### Breadcrumbs Schema (BreadcrumbList)

**Type**: `https://schema.org/BreadcrumbList`  
**Google Feature**: Breadcrumb trail in search results

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Tuisblad",
      "item": "https://diepapier.co.za/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Nuus",
      "item": "https://diepapier.co.za/category/nuus"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title",
      "item": "https://diepapier.co.za/nuus/article-slug"
    }
  ]
}
```

**Testing**: Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate.

---

### FAQ Schema (FAQPage)

**Type**: `https://schema.org/FAQPage`  
**Google Feature**: FAQ rich snippet (expandable questions in search results)

**Example**:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is 'n e-uitgawe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "'n E-uitgawe is 'n digitale weergawe van Die Papier koerant wat jy op jou foon, tablet of rekenaar kan lees."
      }
    }
  ]
}
```

**Requirements**:
- Minimum 2 questions per page (Google requirement for FAQ rich snippets)
- Each answer must be **at least 40 characters** (Google guideline)
- Questions must be phrased as questions (ending with `?`)
- Answers must be plain text (no HTML formatting in schema)

**Testing**: Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate.

---

### How-To Schema (HowTo)

**Type**: `https://schema.org/HowTo`  
**Google Feature**: How-To rich snippet (step carousel in search results)

**Not used in Die Papier** (see How-To Block section above).

---

## Template Integration

### Breadcrumbs in Templates

Breadcrumbs are added to **26 templates** via the `parts/breadcrumbs.html` template part.

#### Templates WITH Breadcrumbs (26 templates)

**Core Templates** (11):
- `single.html` — Single post (article)
- `page.html` — Single page
- `page-full-width.html` — Full-width page
- `page-no-title.html` — Page without title
- `author.html` — Author archive
- `category.html` — Category archive
- `tag.html` — Tag archive
- `archive.html` — Generic archive
- `search.html` — Search results
- `404.html` — 404 error page
- `index.html` — Fallback template

**Custom Post Type Templates** (9):
- `single-dp_event.html` — Single event
- `single-dp_multimedia.html` — Single multimedia
- `single-dp_obituary.html` — Single obituary
- `single-dp_competition.html` — Single competition
- `single-dp_eedition.html` — Single e-edition
- `single-dp_sponsor.html` — Single sponsor
- `archive-dp_event.html` — Event archive
- `archive-dp_multimedia.html` — Multimedia archive
- `archive-dp_obituary.html` — Obituary archive
- `archive-dp_competition.html` — Competition archive
- `archive-dp_eedition.html` — E-edition archive
- `archive-dp_sponsor.html` — Sponsor archive

**Taxonomy Templates** (3):
- `taxonomy-event_category.html` — Event category archive
- `taxonomy-multimedia_category.html` — Multimedia category archive
- `taxonomy-sponsor_tier.html` — Sponsor tier archive

**WooCommerce Templates** (3):
- `page-cart.html` — Cart page
- `page-my-account.html` — My Account page
- `page-order-received.html` — Order confirmation (OPTIONAL — currently has breadcrumbs, but could be removed for distraction-free experience)

#### Templates WITHOUT Breadcrumbs (2)

- `front-page.html` — Homepage (breadcrumbs not needed on homepage)
- `page-checkout.html` — Checkout page (distraction-free, no breadcrumbs)

#### Breadcrumb Placement

Breadcrumbs are placed **first inside `<main>`**, before page content:

```html
<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
    
    <!-- wp:template-part {"slug":"breadcrumbs"} /-->
    
    <!-- Page content follows -->
    
</main>
<!-- /wp:group -->
```

---

### FAQ Blocks in Patterns

FAQ blocks will be added to **4+ page patterns** (Phase 3.4 of task list):

1. **E-Edition Subscribe Page** (`/inteken/e-uitgawe`)  
   Pattern: `die-papier/faq-eedition-subscribe`  
   FAQs: Subscription pricing, access, cancellation, trial period (8-10 FAQs)

2. **Advertise Page** (`/adverteer`)  
   Pattern: `die-papier/faq-advertise`  
   FAQs: Ad specs, pricing, deadlines, design services (6-8 FAQs)

3. **Contact Page** (`/kontak`)  
   Pattern: `die-papier/faq-contact`  
   FAQs: Response time, support channels, office hours (4-6 FAQs)

4. **Dev Tools Pages** (`/ontwikkelaar/{tool-name}`)  
   Patterns: `die-papier/faq-dev-tools-{tool-name}` (8 patterns, 1 per tool)  
   FAQs: Tool-specific usage, features, limitations (3-5 FAQs per tool)

**Status**: ⏸️ Deferred — FAQ patterns require comprehensive FAQ content. Current FAQ content in `/guidelines/content/master-content-export.md` is minimal (6 global FAQs). Need to expand FAQ library before creating Yoast FAQ block patterns.

---

## Pattern Integration

### Breadcrumbs Template Part

**File**: `/wordpress-export/themes/die-papier-theme/parts/breadcrumbs.html`  
**Created**: 2026-02-28

```html
<!-- wp:yoast-seo/breadcrumbs /-->
```

**Usage**:
```html
<!-- wp:template-part {"slug":"breadcrumbs"} /-->
```

**Why a Template Part?**
- Single source of truth for breadcrumb markup (edit once, applies to all templates)
- Easy to update styling via `theme.json` block settings
- Consistent placement across all templates (first element in `<main>`)

---

### FAQ Patterns (To Be Created)

#### Pattern: `die-papier/faq-eedition-subscribe`

**Slug**: `die-papier/faq-eedition-subscribe`  
**Category**: `die-papier-faq`  
**Used in**: `/inteken/e-uitgawe` (E-Edition Subscribe page)

**Sample FAQs** (8-10 questions):
1. Wat is 'n e-uitgawe?
2. Hoe werk intekeninge?
3. Hoeveel kos 'n intekening?
4. Wat sluit die 14-dag gratis proeftydperk in?
5. Hoe kanselleer ek my intekening?
6. Kan ek toegang kry tot ou uitgawes?
7. Op watter toestelle kan ek e-uitgawes lees?
8. Hoe werk die aflaai-funksie?

**Block Markup** (to be created):
```html
<!-- wp:group {"align":"full","className":"is-style-section-white"} -->
<div class="wp-block-group alignfull is-style-section-white">
    
    <!-- wp:heading {"level":2,"textAlign":"center"} -->
    <h2 class="has-text-align-center">Gereelde vrae</h2>
    <!-- /wp:heading -->
    
    <!-- wp:yoast/faq-block -->
    <!-- FAQ questions inserted here -->
    <!-- /wp:yoast/faq-block -->
    
</div>
<!-- /wp:group -->
```

---

#### Pattern: `die-papier/faq-advertise`

**Slug**: `die-papier/faq-advertise`  
**Category**: `die-papier-faq`  
**Used in**: `/adverteer` (Advertise page)

**Sample FAQs** (6-8 questions):
1. Hoe kan ek adverteer in Die Papier?
2. Wat is die advertensie-groottes en pryse?
3. Wat is die sluitingsdatum vir advertensies?
4. Bied julle ontwerpsdienste aan?
5. Kan ek 'n advertensie op die webwerf plaas?
6. Hoe betaal ek vir advertensies?

---

#### Pattern: `die-papier/faq-contact`

**Slug**: `die-papier/faq-contact`  
**Category**: `die-papier-faq`  
**Used in**: `/kontak` (Contact page)

**Sample FAQs** (4-6 questions):
1. Hoe kontak ek Die Papier?
2. Wat is julle kantoorure?
3. Hoe lank neem dit om 'n antwoord te kry?
4. Kan ek 'n boodskap op WhatsApp stuur?

---

## Afrikaans Translations

All Yoast SEO block UI strings must be translated to Afrikaans. Translations are stored in `/wp-content/languages/plugins/wordpress-seo-af_ZA.po`.

### Critical Strings

| English | Afrikaans | Context |
|---------|-----------|---------|
| Home | Tuisblad | Breadcrumb home text |
| Search results for "%s" | Soekresultate vir "%s" | Breadcrumb search text |
| Page not found | Bladsy nie gevind | Breadcrumb 404 text |
| FAQ | Gereelde vrae | FAQ block heading |
| Question | Vraag | FAQ block editor label |
| Answer | Antwoord | FAQ block editor label |
| Add question | Voeg vraag by | FAQ block button |
| Delete question | Verwyder vraag | FAQ block button |
| How-To | Hoe om | How-To block heading (not used) |
| Step | Stap | How-To block editor label (not used) |

### Translation File Structure

```po
# Yoast SEO Afrikaans (South Africa) Translation
msgid "Home"
msgstr "Tuisblad"

msgid "Search results for \"%s\""
msgstr "Soekresultate vir \"%s\""

msgid "Page not found"
msgstr "Bladsy nie gevind"

msgid "FAQ"
msgstr "Gereelde vrae"

msgid "Question"
msgstr "Vraag"

msgid "Answer"
msgstr "Antwoord"

msgid "Add question"
msgstr "Voeg vraag by"

msgid "Delete question"
msgstr "Verwyder vraag"

# ... (300+ strings total for full Yoast SEO plugin)
```

### Breadcrumb Configuration Strings

Breadcrumb configuration strings are set in **Yoast SEO → Search Appearance → Breadcrumbs**:

- **Anchor text for Homepage**: `Tuisblad` (manual input, not translation file)
- **Separator**: `›` (manual input, not translation file)

---

## Theme Styling

All Yoast SEO block styles are defined in `/wordpress-export/themes/die-papier-theme/theme.json` and custom CSS.

### Breadcrumbs Styling (theme.json)

```json
{
  "version": 3,
  "settings": {
    "blocks": {
      "yoast-seo/breadcrumbs": {
        "typography": {
          "fontSize": "var(--wp--preset--font-size--300)"
        },
        "color": {
          "text": "var(--wp--preset--color--contrast-2)"
        }
      }
    }
  }
}
```

**Visual Output**:
- Font size: `300` (14px)
- Text color: `contrast-2` (medium grey, #697A8D)
- Font family: Inter (inherited)
- Separator: `›` (configured in Yoast settings, not CSS)

---

### FAQ Block Styling (Custom CSS)

All FAQ block custom CSS is in `/wordpress-export/themes/die-papier-theme/assets/css/yoast-seo.css`.

```css
/**
 * Yoast SEO Block Styling
 * Die Papier WordPress Theme
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

/* === 1. FAQ Block Container === */
.schema-faq {
    font-family: var(--wp--preset--font-family--inter);
}

/* === 2. FAQ Section (Question + Answer Pair) === */
.schema-faq-section {
    border-bottom: 1px solid var(--wp--preset--color--base-3);
    padding: 24px 0;
}

.schema-faq-section:first-child {
    padding-top: 0;
}

.schema-faq-section:last-child {
    border-bottom: none;
}

/* === 3. FAQ Question === */
.schema-faq-question {
    display: block;
    font-size: var(--wp--preset--font-size--500);
    font-weight: 700;
    color: var(--wp--preset--color--contrast);
    line-height: 1.4;
    margin-bottom: 12px;
    cursor: pointer;
    transition: color 0.2s ease;
    position: relative;
    padding-right: 32px; /* Space for chevron icon */
}

.schema-faq-question:hover {
    color: var(--wp--preset--color--primary);
}

/* Chevron icon (expand/collapse indicator) */
.schema-faq-question::after {
    content: '›';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    font-size: 24px;
    transition: transform 0.3s ease;
}

.schema-faq-section.is-open .schema-faq-question::after {
    transform: translateY(-50%) rotate(-90deg);
}

/* === 4. FAQ Answer === */
.schema-faq-answer {
    font-size: var(--wp--preset--font-size--400);
    color: var(--wp--preset--color--contrast-2);
    line-height: 1.6;
    margin: 0;
    display: none; /* Hidden by default, shown when expanded */
}

.schema-faq-section.is-open .schema-faq-answer {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* === 5. Section Style: Dark Sections === */
.is-style-section-navy .schema-faq-question,
.is-style-section-image .schema-faq-question {
    color: #FFFFFF;
}

.is-style-section-navy .schema-faq-question:hover,
.is-style-section-image .schema-faq-question:hover {
    color: var(--wp--preset--color--primary);
}

.is-style-section-navy .schema-faq-answer,
.is-style-section-image .schema-faq-answer {
    color: rgba(255, 255, 255, 0.9);
}

.is-style-section-navy .schema-faq-section,
.is-style-section-image .schema-faq-section {
    border-bottom-color: rgba(255, 255, 255, 0.2);
}

/* === 6. Section Style: Red Section === */
.is-style-section-red .schema-faq-question {
    color: #FFFFFF;
}

.is-style-section-red .schema-faq-question:hover {
    color: rgba(255, 255, 255, 0.8);
}

.is-style-section-red .schema-faq-answer {
    color: rgba(255, 255, 255, 0.9);
}

.is-style-section-red .schema-faq-section {
    border-bottom-color: rgba(255, 255, 255, 0.2);
}

/* === 7. Accessibility === */
.schema-faq-question:focus {
    outline: 2px solid var(--wp--preset--color--primary);
    outline-offset: 2px;
}

/* === 8. Mobile Responsive === */
@media (max-width: 768px) {
    .schema-faq-section {
        padding: 16px 0;
    }
    
    .schema-faq-question {
        font-size: var(--wp--preset--font-size--400);
    }
    
    .schema-faq-answer {
        font-size: var(--wp--preset--font-size--300);
    }
}
```

### Enqueuing CSS

Add to `/inc/enqueue.php`:

```php
function diepapier_enqueue_scripts() {
    // ... existing enqueues ...
    
    // Yoast SEO block styling
    wp_enqueue_style(
        'diepapier-yoast-seo',
        get_template_directory_uri() . '/assets/css/yoast-seo.css',
        array(),
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'diepapier_enqueue_scripts' );
```

---

### FAQ Block JavaScript (Accordion Functionality)

Yoast FAQ blocks do **NOT include built-in accordion functionality**. The block outputs static HTML with questions and answers both visible. To create an accordion (collapse/expand on click), custom JavaScript is required.

**File**: `/wordpress-export/themes/die-papier-theme/assets/js/yoast-faq-accordion.js`

```javascript
/**
 * Yoast FAQ Block Accordion
 * Die Papier WordPress Theme
 *
 * Adds collapse/expand functionality to Yoast FAQ blocks.
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initFAQAccordion();
    });
    
    function initFAQAccordion() {
        const faqSections = document.querySelectorAll('.schema-faq-section');
        
        if (!faqSections.length) {
            return; // No FAQ blocks on page
        }
        
        faqSections.forEach(function(section) {
            const question = section.querySelector('.schema-faq-question');
            const answer = section.querySelector('.schema-faq-answer');
            
            if (!question || !answer) {
                return; // Malformed FAQ section, skip
            }
            
            // Close all FAQs by default
            section.classList.remove('is-open');
            
            // Add ARIA attributes
            const sectionId = section.id || 'faq-' + Math.random().toString(36).substr(2, 9);
            section.id = sectionId;
            
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('aria-controls', sectionId + '-answer');
            question.setAttribute('tabindex', '0');
            
            answer.id = sectionId + '-answer';
            answer.setAttribute('role', 'region');
            answer.setAttribute('aria-labelledby', sectionId + '-question');
            
            question.id = sectionId + '-question';
            
            // Click handler
            question.addEventListener('click', function() {
                toggleFAQ(section, question, answer);
            });
            
            // Keyboard handler (Enter/Space)
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(section, question, answer);
                }
            });
        });
    }
    
    function toggleFAQ(section, question, answer) {
        const isOpen = section.classList.contains('is-open');
        
        if (isOpen) {
            // Close
            section.classList.remove('is-open');
            question.setAttribute('aria-expanded', 'false');
        } else {
            // Open
            section.classList.add('is-open');
            question.setAttribute('aria-expanded', 'true');
        }
    }
    
})();
```

**Enqueue JavaScript**:

Add to `/inc/enqueue.php`:

```php
function diepapier_enqueue_scripts() {
    // ... existing enqueues ...
    
    // Yoast FAQ accordion
    wp_enqueue_script(
        'diepapier-yoast-faq-accordion',
        get_template_directory_uri() . '/assets/js/yoast-faq-accordion.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'diepapier_enqueue_scripts' );
```

---

## Configuration Settings

### Yoast SEO Global Settings

Configure in **WordPress Admin → SEO → Search Appearance**.

#### Breadcrumbs Tab

| Setting | Value | Notes |
|---------|-------|-------|
| **Enable Breadcrumbs** | ✅ Yes | Required to use breadcrumbs block |
| **Separator** | `›` | Visual separator (right-pointing chevron) |
| **Anchor text for Homepage** | `Tuisblad` | Afrikaans for "Home" |
| **Prefix for breadcrumb path** | (empty) | No prefix needed |
| **Prefix for archive breadcrumbs** | (empty) | No prefix needed |
| **Prefix for search page breadcrumbs** | (empty) | No prefix needed |
| **Breadcrumb for 404 page** | `Bladsy nie gevind` | Afrikaans for "Page not found" |
| **Show taxonomy (category)** | ✅ Yes | Display post category in breadcrumb trail |
| **Bold last page** | ❌ No | Current page not bolded |

#### Schema Tab

| Setting | Value | Notes |
|---------|-------|-------|
| **Organization or Person** | Organization | Die Papier is a news organization |
| **Organization Name** | Die Papier | Company name |
| **Organization Logo** | (upload logo) | Square logo, min 112x112px |
| **Default Article Image** | (upload image) | Fallback image for articles without featured image |

---

### FAQ Block Settings (Per Block)

Each FAQ block has these settings in the block editor:

| Setting | Default | Description |
|---------|---------|-------------|
| **Add Question** | (button) | Click to add a new Q&A pair |
| **Question Text** | (input) | Enter the question (must end with `?`) |
| **Answer Text** | (rich text editor) | Enter the answer (supports paragraphs, bold, italic, links) |
| **Delete Question** | (button) | Remove Q&A pair |
| **Reorder Questions** | (drag handle) | Drag to reorder questions |

**Best Practices**:
- Minimum 2 questions per FAQ block (Google requirement)
- Questions should be phrased as actual questions (ending with `?`)
- Answers should be concise (1-3 sentences ideal, max 200 words)
- Answers must be at least 40 characters (Google guideline)
- Use plain language (avoid jargon, unless defined in the answer)

---

## Accessibility

### Breadcrumbs Accessibility

Yoast SEO breadcrumbs include proper ARIA attributes:

```html
<nav aria-label="Breadcrumb" class="yoast-breadcrumbs">
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="https://diepapier.co.za/">Tuisblad</a>
        </li>
        <li class="breadcrumb-item">
            <a href="https://diepapier.co.za/category/nuus">Nuus</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
            Article Title
        </li>
    </ol>
</nav>
```

**ARIA Attributes**:
- `aria-label="Breadcrumb"` on `<nav>` — Announces "Breadcrumb navigation" to screen readers
- `aria-current="page"` on last item — Announces "current page" to screen readers

**Keyboard Navigation**:
- Tab through breadcrumb links
- Enter to follow link

**Screen Reader Support**:
- Screen reader announces: "Breadcrumb navigation, list of 3 items"
- Each link is announced with its text (e.g., "Tuisblad, link")
- Current page is announced as "Article Title, current page"

---

### FAQ Block Accessibility

Custom JavaScript adds ARIA attributes for accordion functionality:

```html
<div class="schema-faq-section" id="faq-section-1">
    <strong
        class="schema-faq-question"
        role="button"
        aria-expanded="false"
        aria-controls="faq-section-1-answer"
        tabindex="0"
        id="faq-section-1-question"
    >
        Wat is 'n e-uitgawe?
    </strong>
    <p
        class="schema-faq-answer"
        role="region"
        aria-labelledby="faq-section-1-question"
        id="faq-section-1-answer"
    >
        'n E-uitgawe is 'n digitale weergawe van Die Papier koerant.
    </p>
</div>
```

**ARIA Attributes**:
- `role="button"` on question — Announces "button" to screen readers
- `aria-expanded="false"` — Announces "collapsed" (changes to "true" when expanded)
- `aria-controls` — Links question to answer (announces answer ID when focused)
- `tabindex="0"` — Makes question keyboard-focusable
- `role="region"` on answer — Announces "region" to screen readers
- `aria-labelledby` — Links answer to question (announces question text when answer is revealed)

**Keyboard Navigation**:
- Tab through FAQ questions
- Enter or Space to expand/collapse answer
- Focus indicator visible on question (2px red outline)

**Screen Reader Support**:
- Screen reader announces: "Wat is 'n e-uitgawe?, button, collapsed"
- When expanded: "Wat is 'n e-uitgawe?, button, expanded"
- Answer is announced when expanded: "'n E-uitgawe is 'n digitale weergawe..."

---

## Testing Checklist

### Breadcrumbs Testing

- [ ] Breadcrumbs display on all 26 templates (except homepage and checkout)
- [ ] Breadcrumb trail is correct on single post (Tuisblad › Category › Post Title)
- [ ] Breadcrumb trail is correct on category archive (Tuisblad › Category)
- [ ] Breadcrumb trail is correct on e-edition archive (Tuisblad › E-Uitgawes)
- [ ] Breadcrumb trail is correct on search results (Tuisblad › Soekresultate vir "query")
- [ ] Breadcrumb trail is correct on 404 page (Tuisblad › Bladsy nie gevind)
- [ ] Separator is `›` (not `/` or `>`)
- [ ] Home text is "Tuisblad" (not "Home")
- [ ] Breadcrumbs are NOT displayed on homepage
- [ ] Breadcrumbs are NOT displayed on checkout page

### Breadcrumbs Schema Testing

- [ ] Open any page with breadcrumbs in browser
- [ ] View page source (Ctrl+U)
- [ ] Search for `"@type": "BreadcrumbList"`
- [ ] Verify JSON-LD schema is present in `<head>`
- [ ] Copy page URL
- [ ] Open [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Paste URL, click "Test URL"
- [ ] Verify breadcrumbs schema is valid (green checkmark)
- [ ] Fix any schema errors (usually URL formatting issues)

### FAQ Block Testing

- [ ] FAQ block displays on E-Edition Subscribe page (when created)
- [ ] Accordion functionality works (click question to expand/collapse)
- [ ] Multiple questions can be open simultaneously
- [ ] Chevron icon rotates when question is expanded (90deg → -90deg)
- [ ] Answer fades in smoothly when expanded (0.3s animation)
- [ ] FAQ block works in white section style (dark text on white background)
- [ ] FAQ block works in navy section style (white text on navy background)
- [ ] FAQ block works in red section style (white text on red background)
- [ ] FAQ block works in image section style (white text with shadow)

### FAQ Schema Testing

- [ ] Open page with FAQ block in browser
- [ ] View page source (Ctrl+U)
- [ ] Search for `"@type": "FAQPage"`
- [ ] Verify JSON-LD schema is present in `<head>`
- [ ] Verify all questions are in schema (count matches block)
- [ ] Verify all answers are in schema (no truncation)
- [ ] Copy page URL
- [ ] Open [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Paste URL, click "Test URL"
- [ ] Verify FAQ schema is valid (green checkmark)
- [ ] Fix any schema errors (usually answer length <40 chars, or HTML in schema)

### Accessibility Testing

#### Breadcrumbs Accessibility

- [ ] Screen reader announces "Breadcrumb navigation" when focused
- [ ] Screen reader announces each breadcrumb link correctly
- [ ] Screen reader announces current page as "current page"
- [ ] Tab key navigates through breadcrumb links
- [ ] Enter key follows breadcrumb link

#### FAQ Accessibility

- [ ] Screen reader announces question as "button, collapsed"
- [ ] Tab key navigates through FAQ questions
- [ ] Enter key expands/collapses FAQ answer
- [ ] Space key expands/collapses FAQ answer
- [ ] Screen reader announces "button, expanded" when FAQ is open
- [ ] Screen reader reads answer text when expanded
- [ ] Focus indicator is visible on question (2px red outline)

### Performance Testing

- [ ] Breadcrumb schema loads quickly (no delay in page load)
- [ ] FAQ accordion animation is smooth (60fps, no jank)
- [ ] No JavaScript errors in browser console

---

## Related Files

**Template Parts**:
- `/parts/breadcrumbs.html` (breadcrumbs template part)

**Templates** (26 templates with breadcrumbs):
- All single, page, archive, search, 404, taxonomy, and WooCommerce templates

**Assets**:
- `/assets/css/yoast-seo.css` (FAQ block styling)
- `/assets/js/yoast-faq-accordion.js` (FAQ accordion functionality)

**PHP Integration**:
- `/inc/enqueue.php` (enqueues CSS and JS)

**Theme Configuration**:
- `/theme.json` (breadcrumbs block styles)

**Audit Reports**:
- `/reports/audits/yoast-seo-blocks-audit.md`

**Related Guidelines**:
- `/guidelines/wordpress-migration/SECTION-STYLES-CSS-TO-JSON.md` (FAQ blocks in section styles)
- `/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md` (homepage section patterns with FAQs)
- `/guidelines/content/master-content-export.md` (FAQ content source)

---

**End of Yoast SEO Integration Guide**