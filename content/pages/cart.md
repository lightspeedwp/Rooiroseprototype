---
title: "Mandjie"
slug: "mandjie"
template: "page-cart"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 1799-1856 on 2026-02-28 -->

# Cart Page Content

## Cart Items Table
> **🛠 WP Implementation:**
> - **Block:** `core/group {layout: "constrained"}`

*   **Column:** Item (thumbnail + title)
*   **Column:** Prys
*   **Column:** Hoeveelheid
*   **Column:** Subtotaal
*   **Action:** Verwyder

## Cart Summary
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card"}`

*   Subtotaal: R[X]
*   BTW (15%): R[X]
*   Totaal: R[X]
*   Button: "Gaan voort na betaling" → /betaal

## Empty State

*   **Title:** "Jou mandjie is leeg."
*   **Description:** "Blaai deur ons e-uitgawes of intekeningsopsies."
*   Button: "Sien e-uitgawes" → /e-uitgawes
*   Button: "Sien intekeningsopsies" → /inteken
