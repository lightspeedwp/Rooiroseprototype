---
title: "E-uitgawes"
slug: "e-uitgawes"
template: "page-e-editions"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 1339-1407 on 2026-02-28 -->

# E-Editions Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `dp/content-hero`

*   **Title:** "E-uitgawes"
*   **Subtitle:** "Die volledige koerant in digitale formaat."

## Key Points
> **🛠 WP Implementation:**
> - **Block:** `core/list {style: "checkmarks"}`

*   Kry volledige toegang tot e-koerant.
*   Bevat alle inhoud van drukkoerant.
*   Drukkoerant Vrydae in die winkels.

## Latest E-Edition

### Jongste uitgawe
> **🛠 WP Implementation:**
> - **Block:** `core/query {postType: "dp_eedition", perPage: 1, orderBy: "meta_value", metaKey: "publication_date", order: "desc"}`

*   **Layout:** Featured (large cover image + details)
*   **Price:** R35
*   **Button:** "Koop uitgawe"

## E-Edition Archive Grid

### Vorige uitgawes
> **🛠 WP Implementation:**
> - **Block:** `core/query {postType: "dp_eedition", orderBy: "meta_value", metaKey: "publication_date", order: "desc", offset: 1}`

*   **Layout:** Grid 4-column
*   **Template:** dp/eedition-card (cover thumbnail, date, price)
*   **Per Page:** 12
*   **Pagination:** Load More

## Subscription CTA
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "section-shade"}`

*   **Title:** "Bespaar met 'n intekening"
*   **Description:** "Teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes."
*   **Button:** "Sien intekeningsopsies" → /inteken/e-uitgawe

## FAQ Section
> **🛠 WP Implementation:**
> - **Block:** `dp/faq-accordion {category: "e-editions"}`
