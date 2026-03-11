---
title: "Rekening Aktivering"
slug: "aktiveer"
template: "page-activation"
status: "ready"
last_updated: "2026-02-28"
---

<!-- Content updated from content-for-review.md lines 212-252 on 2026-02-28 -->

# Account Activation Page Content

## Success State
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}`

*   **Icon:** CheckCircle (green)
*   **Title:** "Rekening geaktiveer!"
*   **Description:** "Jy kan nou aanmeld."
*   **Button:** "Meld aan" → /my-rekening

## Error State (expired/invalid token)
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}`

*   **Icon:** XCircle (red)
*   **Title:** "Aktivering onsuksesvol"
*   **Description:** "Hierdie aktiveringskakel is ongeldig, of het verval. Versoek 'n nuwe e-pos vir aktivering."
*   **Button:** "Stuur 'n nuwe e-pos" → /aktiveer/herstuur

## Already Activated State
> **🛠 WP Implementation:**
> - **Block:** `core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}`

*   **Icon:** Info (blue)
*   **Title:** "Reeds geaktiveer."
*   **Description:** "Hierdie rekening is reeds geaktiveer. Jy kan nou aanmeld."
*   **Button:** "Meld aan" → /my-rekening
