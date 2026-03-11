---
title: "Doodsberrigte"
slug: "doodsberrigte"
type: "page"
template: "archive-dp_obituary"
pattern: "die-papier/page-obituaries"
status: "publish"
---

# Hero Section
[Block: core/cover]
- Title: "Doodsberrigte"

# Obituaries Grid
[Block: core/query {postType: "dp_obituary", orderBy: "date", order: "desc"}]
- Layout: Grid 3-column
- Template: dp/obituary-card
- Per Page: 12
- Pagination: Load More

# Search
[Block: core/search]
- Placeholder: "Soek doodsberrigte..."

# Submit CTA
[Block: core/group {style: "section-shade"}]
- Title: "Plaas 'n Doodsberig"
- Description: "Om 'n doodsberig of herdenkingskennisgewing te plaas, e-pos doodsberrigte@diepapier.co.za."
- Button: "E-pos Ons" -> mailto:doodsberrigte@diepapier.co.za

# FAQ Section
[Block: dp/faq-accordion {category: "obituaries"}]

## FAQ Content
1.  **Hoe plaas ek 'n doodsberig?**
    "E-pos doodsberrigte@diepapier.co.za."
2.  **Hoeveel kos 'n doodsberig?**
    "Tariewe wissel. Kontak vir kwotasie."
3.  **Hoe lank bly 'n doodsberig aanlyn?**
    "Permanent."