---
title: "My Rekening"
slug: "my-rekening"
template: "page-my-account"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 986-1054 on 2026-02-28 -->

# My Account Page Content

## Logged-Out State
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "480px"}`

*   **Title:** "Meld aan"
*   **Form Fields:** E-posadres, Wagwoord
*   **Button:** "Meld aan"
*   **Links:** "Wagwoord vergeet?" | "Registreer" → /registreer

## Logged-In State
> **🛠 WP Implementation:**
> - **Block:** `core/group {layout: "constrained"}`

### Account Header
*   Welcome: "Welkom, [Voornaam]"
*   Member since: "Lid sedert [Date]"

### Dashboard Tabs

#### My intekeninge
*   Active subscriptions list
*   Subscription type, status, expiry date
*   Button: "Bestuur intekening"
*   Button: "Teken in" → /inteken (if no active subscription)

#### My e-uitgawes
*   List of purchased e-editions
*   Button: "Sien alle e-uitgawes" → /my-e-uitgawes

#### My profiel
*   Edit: Voornaam, van, e-posadres
*   Change password
*   Newsletter preferences
*   Button: "Stoor veranderinge"

#### Bestellings
*   Order history table
*   Order number, date, amount, status
*   Link: "Sien bestelling"

### Actions
*   Button: "Meld af"
