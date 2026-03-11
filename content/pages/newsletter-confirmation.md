---
title: "Nuusbrief Bevestiging"
slug: "nuusbrief/bevestig"
template: "page-newsletter-confirmation"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 1761-1797 on 2026-02-28 -->

# Newsletter Confirmation Page Content

## Success State (valid token)
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}`

*   **Icon:** MailCheck (green)
*   **Title:** "E-posadres bevestig!"
*   **Description:** "Jou e-posadres is suksesvol bevestig. Jy sal voortaan ons nuusbrief ontvang."
*   **Button:** "Gaan na tuisblad" → /

## Error State (expired/invalid token)
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}`

*   **Icon:** XCircle (red)
*   **Title:** "Bevestiging onsuksesvol"
*   **Description:** "Hierdie bevestigingskakel is ongeldig, of het verval."
*   **Button:** "Teken weer in" → /nuusbrief-inteken
