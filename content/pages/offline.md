---
title: "Vanlyn"
slug: "offline"
type: "page"
template: "page"
pattern: "die-papier/page-offline"
status: "system"
---

# Offline Page (Service Worker Fallback)

[Block: core/group {style: "card", layout: "constrained", textAlign: "center"}]
- Icon: WifiOff
- Title: "Jy is vanlyn"
- Description: "Dit lyk of jy nie aan die internet gekoppel is nie. Konnekteer asseblief weer en probeer weer."
- Button: "Probeer weer" (onClick: window.location.reload())

# Notes
- This page is served by the service worker when the user is offline
- Cached during initial page load
- Minimal styling, no external resources needed
