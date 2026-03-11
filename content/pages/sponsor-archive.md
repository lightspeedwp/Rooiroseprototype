---
title: "Borge"
slug: "borge"
type: "page"
template: "page"
pattern: "die-papier/page-sponsor-archive"
status: "publish"
---

# Hero Section
[Block: core/cover]
- Title: "Ons Borge"

# Sponsor Grid
[Block: core/query {postType: "dp_sponsor", orderBy: "title", order: "asc"}]
- Layout: Grid (logo grid, grouped by tier)
- Grouped by: dp_sponsor_tier taxonomy (Gold, Silver, Bronze)
- Template: dp/sponsor-card (logo, name, link)

# Become a Sponsor CTA
[Block: core/group {style: "section-shade"}]
- Title: "Word 'n borg"
- Description: "Belyn jou handelsmerk met betroubare, kwaliteit Afrikaanse joernalistiek."
- Button: "Sien borgopsies" -> /adverteer/borgskappe