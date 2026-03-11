---
title: "Soek"
slug: "soek"
template: "page-search"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 143-239 on 2026-02-28 -->

# Search Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `core/search {align: wide}`

*   **Placeholder:** "Soek vir artikels, gebeure, multimedia..."
*   **Title:** "Soekresultate vir '[Query]'"

## Filter Sidebar
> **🛠 WP Implementation:**
> - **Block:** `dp/filter-sidebar`

*   **Sort:** Jongste | Oudste | Relevansie
*   **Filter by:** Category
*   **Filter by:** Date Range
*   **Filter by:** Content Type (Articles, Events, Obituaries, Multimedia)

## Categories (Updated)
*   Alles
*   Nuus
*   Sport
*   Sake
*   Leefstyl
*   Dink
*   Skole
*   Kompetisies

**Note:** "Skole rugby" category removed from filter options.

## Results Grid
> **🛠 WP Implementation:**
> - **Block:** `core/query {inherit: true}`

*   **Layout:** List
*   **Template:** Standard post template (title, excerpt, date, category)
*   **Per Page:** 10
*   **Pagination:** Numbered

## No Results State
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card"}`

*   **Title:** "Geen resultate gevind"
*   **Description:** "Geen resultate gevind vir '[Query]' nie. Probeer 'n ander soekterm."
*   **Suggestions:** Gewilde bladsye, jongste artikels

## Newsletter CTA
> **🛠 WP Implementation:**
> - **Block:** `dp/newsletter-cta {variant: "sidebar"}`
