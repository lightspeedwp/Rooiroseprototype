---
title: "Nuusbrief"
slug: "nuusbrief"
template: "page-newsletter"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 8-64 on 2026-02-28 -->

# Newsletter Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `dp/content-hero`

*   **Title:** "Kry ons gratis nuusbrief"
*   **Subtitle:** "Ontvang die jongste nuus elke Dinsdag en Vrydag regstreeks in jou e-posbus."

## Newsletter Options
> **🛠 WP Implementation:**
> - **Block:** `core/columns {align: wide}`

### Dinsdag Nuusbrief
*   **Title:** "Dinsdag-nuusbrief"
*   **Description:** "'n Blik vooruit op die week se nuus, samestelling van die beste stories en eksklusiewe inhoud."
*   **Frequency:** "Elke Dinsdag"
*   [Checkbox: Subscribe]

### Vrydag Nuusbrief
*   **Title:** "Vrydag-nuusbrief"
*   **Description:** "Die week se hoogtepunte, die jongste e-uitgawe, en naweek-leesstof."
*   **Frequency:** "Elke Vrydag"
*   [Checkbox: Subscribe]

### Brekende nuus
*   **Title:** "Brekende nuus"
*   **Description:** "Onmiddellike kennisgewings van groot nuusstories soos dit gebeur."
*   **Frequency:** "Ad hoc"
*   [Checkbox: Subscribe]

## Subscription Form
> **🛠 WP Implementation:**
> - **Block:** `core/form` / Gravity Form / MailPoet

*   Email input
*   Name input (optional)
*   Newsletter selection checkboxes
*   Submit button: "Teken in"
*   Privacy note: "Ons sal nooit jou e-pos met 'n derde partye deel nie."

## FAQ Section
> **🛠 WP Implementation:**
> - **Block:** `dp/faq-accordion {category: "newsletter"}`
