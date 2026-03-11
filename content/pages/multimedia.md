---
title: "Multimedia"
slug: "multimedia"
type: "page"
template: "archive-dp_multimedia"
pattern: "die-papier/page-multimedia"
status: "publish"
---

# Hero Section
[Block: core/cover]
- Title: "Multimedia"

# Filters
[Block: dp/filter-sidebar]
- Filter by: dp_multimedia_category (Video's, Podcasts, Fotogalerye)
- Filter by: date

# Video Section
[Block: core/group {id: "videos"}]
## Nuutste Video's
[Block: core/query {postType: "dp_multimedia", taxQuery: {taxonomy: "dp_multimedia_category", terms: "videos"}, perPage: 6}]
- Layout: Grid 3-column
- Template: dp/multimedia-card-video

# Podcast Section
[Block: core/group {id: "podcasts", style: "section-shade"}]
## Podcasts
[Block: core/query {postType: "dp_multimedia", taxQuery: {taxonomy: "dp_multimedia_category", terms: "podcasts"}, perPage: 4}]
- Layout: List
- Template: dp/multimedia-card-podcast

# Gallery Section
[Block: core/group {id: "galleries"}]
## Fotogalerye
[Block: core/query {postType: "dp_multimedia", taxQuery: {taxonomy: "dp_multimedia_category", terms: "fotogalerye"}, perPage: 6}]
- Layout: Grid 3-column
- Template: dp/multimedia-card-gallery

# FAQ Section
[Block: dp/faq-accordion {category: "multimedia"}]

## FAQ Content
1.  **Watter tipe multimedia-inhoud bied Die Papier aan?**
    "Video-verslae, foto-galerye, podcasts."
2.  **Hoe gereeld word nuwe video's en podcasts gepubliseer?**
    "Daagliks video's, weekliks podcasts."
3.  **Kan ek my eie video of foto's instuur?**
    "Ja, e-pos nuus@diepapier.co.za."