# Content Export Strategy

**Last updated**: 2026-02-23
**Version**: 1.0

This document outlines the strategy for exporting content from the React application to the WordPress migration environment.

## Overview

The goal is to provide a clean, structured set of content files (Markdown) that the editorial team can review and the development team can use to populate the initial WordPress database. The WXR generator (`/wordpress-export/scripts/generate-wxr.js`) converts these files into a WordPress eXtended RSS (WXR) XML file for import.

## Directory Structure

```text
/content/
├── pages/                      # Static page content (54 files)
│   ├── home.md                 # Homepage
│   ├── about.md                # About Us
│   ├── contact.md              # Contact
│   ├── advertise.md            # Advertise with us
│   ├── subscriptions.md        # Subscription landing
│   ├── subscribe-delivery.md   # Home delivery plans
│   ├── subscribe-eedition.md   # E-edition plans
│   ├── faq.md                  # FAQ page
│   ├── team.md                 # Team page
│   ├── events.md               # Events hub
│   ├── obituaries.md           # Obituaries hub
│   ├── competitions.md         # Competitions hub
│   ├── multimedia.md           # Multimedia hub
│   ├── e-editions.md           # E-editions hub
│   ├── weather.md              # Weather page
│   ├── traffic.md              # Traffic page
│   ├── search.md               # Search page
│   ├── sitemap.md              # HTML sitemap
│   ├── 404.md                  # Not Found
│   ├── offline.md              # Offline fallback (PWA)
│   │
│   │  # Category landing pages (5)
│   ├── category-nuus.md
│   ├── category-sport.md
│   ├── category-dink.md
│   ├── category-sake.md
│   ├── category-leefstyl.md
│   │
│   │  # Auth & Account (6)
│   ├── register.md
│   ├── my-account.md
│   ├── my-eeditions.md
│   ├── account-activation.md
│   ├── cart.md
│   ├── checkout.md
│   │
│   │  # Newsletter flows (6)
│   ├── newsletter.md
│   ├── newsletter-archive.md
│   ├── newsletter-manage.md
│   ├── newsletter-confirmation.md
│   ├── newsletter-unsubscribe.md
│   ├── newsletter-re-engagement.md
│   │
│   │  # Submissions (2)
│   ├── submit-hub.md
│   ├── submit-event.md
│   │
│   │  # Sponsor & competition pages (3)
│   ├── sponsor-archive.md
│   ├── competition-terms.md
│   ├── author.md
│   ├── tag-archive.md
│   │
│   │  # Thank You pages (7)
│   ├── thank-you-advertising.md
│   ├── thank-you-competition.md
│   ├── thank-you-contact.md
│   ├── thank-you-newsletter.md
│   ├── thank-you-registration.md
│   ├── thank-you-submission.md
│   └── order-confirmation.md
│
├── policies/                   # Legal and policy pages (12 files)
│   ├── privacy-policy.md
│   ├── terms-conditions.md
│   ├── cookie-policy.md
│   ├── paia.md
│   ├── user-rules.md
│   ├── advertising-guidelines.md
│   ├── press-code.md
│   ├── ai-policy.md
│   ├── comment-policy.md
│   ├── returns-policy.md
│   ├── complaints.md
│   └── README.md
│
└── collections/                # CPT data in monolithic collection files (7 files)
    ├── articles.md             # post (9 articles + ticker items)
    ├── events.md               # dp_event (3 events)
    ├── obituaries.md           # dp_obituary (3 notices)
    ├── sponsors.md             # dp_sponsor (3 sponsors)
    ├── competitions.md         # dp_competition (7 active + 2 closed)
    ├── multimedia.md           # dp_multimedia (4 items)
    └── eeditions.md            # dp_eedition (2 editions)
```

**Total: 73 content files across 3 directories.**

> **Note on superseded directories:** The original plan included `/content/cpt/` (individual CPT sample files), `/content/templates/` (template structure docs), and `/content/parts/` (template parts docs). These were superseded by:
> - CPT data consolidated into monolithic `/content/collections/*.md` files (parsed by the WXR generator's `### N. Title` H3 splitter)
> - Template and parts documentation now lives in `/guidelines/components/templates/` (28 files) and `/guidelines/components/parts/` (7 files)

## WXR Generator

The WXR generator at `/wordpress-export/scripts/generate-wxr.js` converts content files into WordPress-importable XML. It handles:

### Content Processing
- **Pages**: Reads `/content/pages/*.md` and `/content/policies/*.md`. Converts markdown to block HTML. Assigns page patterns via `<!-- wp:pattern -->` block syntax.
- **Collections**: Reads `/content/collections/*.md`. Splits by H3 headings, parses key-value metadata, creates CPT posts with full meta field mapping.
- **FAQs**: Reads `/guidelines/content/FAQs.md`. Parses H2 categories and bold-text Q&A pairs into `dp_faq` posts with `dp_faq_category` taxonomy assignments.

### Structural Data
- **Authors**: 14 author records (admin + 13 named authors from collection data)
- **Taxonomy Terms**: ~75 terms across 7 taxonomies (category, post_tag, dp_sponsor_tier, dp_event_category, dp_multimedia_category, dp_edition_type, dp_faq_category)
- **Navigation Menus**: 8 menus (primary, top-bar, 5 footer columns, mobile) exported as `nav_menu` taxonomy terms + `nav_menu_item` posts
- **Page Hierarchy**: Policy pages assigned as children of "Beleid" parent page

### CPT Meta Mapping
| CPT | Meta Fields Exported |
|:----|:----|
| `dp_event` | event_date, event_end_date, location_name, location_address, price, organiser_name, organiser_email, is_recurring, recurrence |
| `dp_obituary` | date_of_birth, date_of_death, location, service_date, service_time, service_location, condolences_email, condolences_url |
| `dp_sponsor` | website_url, active_until, contact_phone, contact_email |
| `dp_competition` | closing_date, prize_value, prize_description, sponsor_name, status |
| `dp_multimedia` | media_type, duration, video_url, audio_url, image_count, photographer, publication_date |
| `dp_eedition` | publication_date, edition_number, page_count, price, pdf_url, is_free |

### Running the Generator

```bash
cd wordpress-export
node scripts/generate-wxr.js
```

Output: `wordpress-export/die-papier-content.xml`

## File Format

Files are written in **Markdown** with **YAML Frontmatter**.

### Frontmatter Schema — Pages

```yaml
---
title: "Page Title (Afrikaans)"
slug: "afrikaans-slug"
type: "page"
template: "page"              # WP template to use
pattern: "die-papier/page-x"  # Full-page pattern slug
status: "publish"
requires_auth: false           # Optional: true for authenticated pages
---
```

### Frontmatter Schema — CPT Collections

Each collection file has a file-level frontmatter:

```yaml
---
title: "Collection Name"
slug: "collection-slug"
template: "collection-type"   # e.g. "collection-events"
status: "ready"
---
```

Individual entries within the collection are delimited by `### N. Title` H3 headings, with key-value metadata as `* **Key:** Value` bullet points.

### Frontmatter Schema — Policies

```yaml
---
title: "Privaatheidsbeleid"
slug: "privaatheidsbeleid"
type: "page"
template: "page"
pattern: "die-papier/policy-privacy"
status: "publish"
parent: "beleid"
last_updated: "2026-01-15"
---
```

## Content Body Notation

Within the markdown body, we use a pseudo-block notation to describe the WordPress block structure:

```markdown
# Section Title
[Block: core/cover]
- Title: "Hero Title"
- Subtitle: "Hero subtitle text"

# Query Section
[Block: core/query {postType: "post", perPage: 6}]
- Layout: Grid 3-column
- Card fields: Image, Title, Excerpt, Date
```

### Block Notation Conventions

| Notation | Meaning |
| :--- | :--- |
| `[Block: core/group]` | A Core WordPress block |
| `[Block: dp/newsletter-cta]` | A custom plugin block |
| `{postType: "dp_event"}` | Block attributes in JSON shorthand |
| `- Title: "Text"` | Block attribute value |
| `## Section Name` | Logical section heading |
| `[Dynamic: ...]` | Dynamic content slot |

## Export Process

1.  **Identify Component:** Locate the React page component (e.g., `src/app/pages/About.tsx`).
2.  **Extract Static Text:** Copy all headings, paragraphs, and labels (Afrikaans).
3.  **Map to Blocks:** Identify which WordPress blocks each React component maps to (see `block-mapping.md`).
4.  **Note Dynamic Slots:** Mark dynamic areas with `[Block: ...]` notation including query parameters.
5.  **Create Markdown File:** Save to the appropriate `/content/` subdirectory with proper frontmatter.
6.  **Review:** Cross-reference against the live React site and the pattern inventory in `full-page-patterns.md`.

## Naming Convention

-   **Files:** `kebab-case.md` (e.g., `privacy-policy.md`).
-   **CPT samples:** Named by collection type (e.g., `events.md` contains all event entries).
-   **Templates:** Named by WP template hierarchy convention (e.g., `single-event.md`).

## Related Documents

- **Media Import Strategy**: `/guidelines/content/media-import-strategy.md` — How featured images are handled during import.
- **WordPress Data Model**: `/guidelines/data-structure/wordpress-data-model.md` — CPT and taxonomy definitions.
- **Block Mapping**: `/guidelines/wordpress-migration/block-mapping.md` — React component to WordPress block mapping.

## Validation Checklist

- [x] Every page in `/content/pages/` has a corresponding pattern slug in `full-page-patterns.md`
- [x] Every CPT sample has valid frontmatter with all required meta fields
- [x] Every template has a matching file in the theme's `/templates/` directory
- [ ] All Afrikaans text has been reviewed for spelling/grammar
- [x] All internal links use Afrikaans slugs (not English legacy)
- [ ] Every policy page has `last_updated` in frontmatter