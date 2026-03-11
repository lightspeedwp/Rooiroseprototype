---
title: "Kompetisies"
slug: "kompetisies"
type: "page"
template: "archive-dp_competition"
pattern: "die-papier/page-competitions"
status: "publish"
---

# Hero Section
[Block: core/cover]
- Title: "Kompetisies"

# Active Competitions
## Aktiewe Kompetisies
[Block: core/query {postType: "dp_competition", metaQuery: {status: "open"}, orderBy: "meta_value", metaKey: "closing_date", order: "asc"}]
- Layout: Grid 2-column
- Template: dp/competition-card (with status badge, closing date)
- Per Page: 6

# Closed Competitions
## Afgeslote Kompetisies
[Block: core/query {postType: "dp_competition", metaQuery: {status: "closed"}, orderBy: "date", order: "desc"}]
- Layout: Grid 3-column (smaller cards)
- Per Page: 6
- Pagination: Load More

# Terms Link
[Block: core/paragraph]
- Text: "Deur deel te neem stem jy in tot ons kompetisie terme en voorwaardes."
- Link: /kompetisie-terme-en-voorwaardes

# FAQ Section
[Block: dp/faq-accordion {category: "competitions"}]