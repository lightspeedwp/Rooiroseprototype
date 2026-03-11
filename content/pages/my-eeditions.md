---
title: "My e-uitgawes"
slug: "my-e-uitgawes"
template: "page-my-eeditions"
status: "ready"
requires_auth: true
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 1949-1995 on 2026-02-28 -->

# My E-Editions Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `dp/content-hero`

*   **Title:** "My e-uitgawes"
*   **Subtitle:** "Lees jou e-uitgawes."

## Active Subscription Banner (if subscriber)
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "section-shade"}`

*   "Jou intekening is aktief tot [Expiry Date]. Alle e-uitgawes is beskikbaar."

## E-Editions Grid
> **🛠 WP Implementation:**
> - **Block:** `core/query {postType: "dp_eedition", orderBy: "meta_value", metaKey: "publication_date", order: "desc"}`

*   **Layout:** Grid 4-column
*   **Card:** Cover image + Date + Edition number
*   **Status badge:** "Nuut" (for latest), "Gelees" (read tracking)
*   **Button per card:** "Lees" → /e-uitgawes/[slug]
*   **Per Page:** 12
*   **Pagination:** Numbered

## No Subscription CTA (if not subscriber)
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", textAlign: "center"}`

*   **Title:** "Teken in vir onbeperkte toegang"
*   **Description:** "Kry toegang tot alle e-uitgawes met 'n intekening."
*   **Button:** "Sien intekeningsopsies" → /inteken/e-uitgawe
