# Card, Sidebar & Utility Patterns

**Last updated**: 2026-02-27
**Category**: Patterns (Cards, Sidebars, Utilities)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/`

---

## Overview

Small modular patterns used inside query loops (card meta), template parts (sidebar widgets), and as infrastructure (hidden utilities). These are building blocks, not full sections.

---

## Card Meta Patterns

Used inside `core/post-template` to display CPT-specific metadata.

### card-event-meta

**Slug**: `die-papier/card-event-meta`
Displays event date, time, and location. Used in event archive cards and homepage events section.

### card-obituary-meta

**Slug**: `die-papier/card-obituary-meta`
Displays birth/death dates, service details. Used in obituary archive cards.

### card-competition-meta

**Slug**: `die-papier/card-competition-meta`
Displays closing date, prize info, entry count. Used in competition archive cards.

---

## Sidebar Widget Patterns

Used inside `parts/sidebar.html` and `parts/sidebar-event.html` template parts.

### sidebar-eedition-promo

**Slug**: `die-papier/sidebar-eedition-promo`
**Inserter**: false

Latest e-edition cover image with "Lees Nou" CTA button. Queries `dp_eedition` CPT for most recent edition. Navy-blue card body. Single query, no pagination.

### sidebar-competition-card

**Slug**: `die-papier/sidebar-competition-card`
**Inserter**: false

Latest active competition card. Queries `dp_competition` CPT for most recent open competition (future closing date). Shows featured image with overlay badge, title, closing date, CTA button, and "Alle Kompetisies" link.

---

## Hidden Utility Patterns

Infrastructure patterns hidden from the block inserter (`Inserter: false`). Referenced programmatically by templates and other patterns.

### hidden-no-results

**Slug**: `die-papier/hidden-no-results`

Displayed inside `core/query-no-results` when a query returns zero results. User-friendly Afrikaans message: "Geen resultate gevind nie." with CTA to return to homepage.

### hidden-breadcrumbs

**Slug**: `die-papier/hidden-breadcrumbs`

Wrapper for `yoast-seo/breadcrumbs` block. Referenced by the `parts/breadcrumbs.html` template part.

### hidden-article-hero

**Slug**: `die-papier/hidden-article-hero`

Article hero pattern used in `single.html`. Uses core blocks (`core/group`, `core/columns`, `core/post-title`, `core/post-featured-image`) for a two-column article hero layout. Replaces the deprecated `dp/article-hero` custom block (2026-02-27). Share buttons are handled separately by `section-share.php`.

### hidden-sidebar

**Slug**: `die-papier/hidden-sidebar`

Default sidebar composition. Ordered content:
1. E-edition promo (`sidebar-eedition-promo`)
2. Newsletter CTA (Gravity Forms)
3. Ad slot — Advanced Ads MREC (`sidebar-top-mrec`)
4. Competition card (`sidebar-competition-card`)
5. Trending articles (AQL: `orderBy: comment_count`, cached, no pagination)
6. Sponsor banner (`dp/sponsor-banner`)
7. Ad slot — Advanced Ads MREC (`sidebar-bottom-mrec`)

### hidden-sidebar-event

**Slug**: `die-papier/hidden-sidebar-event`

Event-specific sidebar with map/location widget, "Submit Your Event" CTA, upcoming events query (3 next events), newsletter CTA, and ad slot.

### hidden-comments

**Slug**: `die-papier/hidden-comments`

Comments section template content. Threaded comments with avatar, author name, date, content, reply link. WordPress native comments pagination + comment form.

---

## Other Patterns

### comments-section

**WordPress target**: Template Part `parts/comments.html`
**React source**: `CommentsSection.tsx`

Article comments system with logged-in form and logged-out registration prompt, threaded replies. Uses core comment blocks.

### contact-form

**WordPress target**: Uses `gravityforms/form` block
**React source**: `ContactForm.tsx`

Contact page form. Replaced by Gravity Forms integration.

### newsletter-modal (Disabled)

**Status**: Not implemented in WordPress. Was a React-only modal popup for newsletter signup.

---

## Cross-References

- [Pattern Strategy](/guidelines/wordpress-migration/pattern-strategy.md) — Hidden pattern naming convention
- [Sidebar parts](/guidelines/components/parts/sidebar.md) — Sidebar composition
- [AQL Integration](/guidelines/wordpress-migration/third-party-plugins/advanced-query-loop.md) — Trending articles caching