---
title: "Betaal"
slug: "betaal"
template: "page-checkout"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 882-935 on 2026-02-28 -->

# Checkout Page Content

## Order Summary
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card"}`

*   Item list (from cart)
*   Subtotaal, BTW, Totaal

## Billing Details Form

*   Voornaam (required)
*   Van (required)
*   E-posadres (required)
*   Telefoonnommer (required)

## Delivery Address (if physical product)

*   Adreslyn 1 (required)
*   Adreslyn 2
*   Stad (required)
*   Provinsie (required, select)
*   Poskode (required)

## Payment Method

*   Kredietkaart (PayFast/Peach Payments integration)
*   Elektroniese oorplasing
*   Debietorder (for recurring subscriptions)

## Actions

*   Button: "Betaal nou"
*   Note: "Deur te betaal, stem jy in tot ons bepalings en voorwaardes."
