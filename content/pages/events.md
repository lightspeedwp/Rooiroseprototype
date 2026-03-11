---
title: "Gebeure"
slug: "gebeure"
type: "page"
template: "archive-dp_event"
pattern: "die-papier/page-events"
status: "publish"
---

# Hero Section
[Block: core/cover]
- Title: "Plaaslike Gebeure"
- Subtitle: "Ontdek wat in jou gemeenskap gebeur."
- Button: "Dien gebeurtenis in" -> /gebeure/dien-in

# Event Filters
[Block: dp/filter-sidebar]
- Filter by: dp_event_category
- Filter by: date range
- Sort: event_date ASC (future events only)

# Events Grid
[Block: core/query {postType: "dp_event", orderBy: "meta_value", metaKey: "event_date", order: "asc"}]
- Layout: Grid 3-column
- Template: dp/event-card
- Per Page: 12
- Pagination: Load More

# Submit Event CTA
[Block: core/group {style: "section-shade"}]
- Title: "Het jy 'n gebeurtenis?"
- Description: "Dien jou gemeenskapsgebeurtenis gratis in."
- Button: "Dien Gebeurtenis In" -> /gebeure/dien-in

# FAQ Section
[Block: dp/faq-accordion {category: "events"}]

## FAQ Content
1.  **Hoe dien ek 'n gebeurtenis in?**
    "Gebruik die 'Dien Gebeurtenis In' knoppie."
2.  **Is dit gratis om 'n gebeurtenis te lys?**
    "Basiese lysting is gratis. Prominente plasing kos geld."
3.  **Hoe lank voor die tyd moet ek 'n gebeurtenis indien?**
    "2 weke."
4.  **Kan ek my ingediende gebeurtenis wysig?**
    "E-pos gebeure@diepapier.co.za."