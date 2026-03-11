---
title: "Teken Af van Nuusbrief"
slug: "nuusbrief/teken-af"
type: "page"
template: "page"
pattern: "die-papier/page-newsletter-unsubscribe"
status: "publish"
---

# Unsubscribe Confirmation

[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}]
- Icon: MailX
- Title: "Wil jy regtig afteken?"
- Description: "Jy gaan nie meer nuusbriewe van *Die Papier* ontvang nie."

## Options
- [Radio] Teken af van alle nuusbriewe
- [Radio] Teken af van slegs: [Select newsletter type]

## Feedback (optional)
- "Hoekom teken jy af?" (optional textarea)
  - Te veel e-posse
  - Nie meer relevant nie
  - Het nooit ingeteken nie
  - Ander

## Actions
- Button (destructive): "Bevestig Aftekening"
- Link: "Nee, ek wil ingeteken bly" -> /

# Success State (after confirmation)
[Block: core/group {style: "card", layout: "constrained", maxWidth: "640px", textAlign: "center"}]
- Icon: CheckCircle
- Title: "Jy is afgeteken"
- Description: "Jy sal nie meer nuusbriewe van ons ontvang nie. Jy kan enige tyd weer inteken."
- Button: "Teken weer in" -> /nuusbrief-inteken
