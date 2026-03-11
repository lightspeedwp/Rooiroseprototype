---
title: "Nuusbrief-argief"
slug: "nuusbrief-argief"
template: "page-newsletter-archive"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 1696-1759 on 2026-02-28 -->

# Newsletter Archive Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `dp/content-hero`

*   **Title:** "Nuusbrief-argief"
*   **Subtitle:** "Blaai deur ons vorige nuusbriewe."

## Description (Updated)

Blaai deur vorige uitgawes van ons nuusbriewe. Ons stuur twee keer per week: Dinsdae en Vrydae.

## Filter
> **🛠 WP Implementation:**
> - **Block:** `dp/filter-sidebar`

*   **Filter by:** Newsletter type (Dinsdag, Vrydag)
*   **Filter by:** Date range

## Newsletter Archive Grid
> **🛠 WP Implementation:**
> - **Block:** `core/query {postType: "dp_newsletter", orderBy: "date", order: "desc"}`

*   **Layout:** List
*   **Fields:** Title, Date, Type, Preview link
*   **Per Page:** 20
*   **Pagination:** Numbered

## Subscribe CTA
> **🛠 WP Implementation:**
> - **Block:** `dp/newsletter-cta {variant: "full"}`

*   **Title:** "Nog nie ingeteken nie?"
*   **Description:** "Ontvang Die Papier se nuusbrief gratis in jou e-pos se inmandjie elke Dinsdag en Vrydag."
*   **Button:** "Teken in" → /nuusbrief-inteken
