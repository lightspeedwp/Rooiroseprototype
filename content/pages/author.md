---
title: "Skrywer Argief"
slug: "skrywer"
type: "template"
template: "author"
pattern: "die-papier/archive-author"
status: "system"
---

# Author Archive Template

## Layout
Two-column: Main Content (70%) + Sidebar (30%)

## Main Content

### Author Header
[Block: dp/author-header]
- Avatar (circular, 96px)
- Full Name (display_name)
- Role/Title (from user meta: job_title)
- Bio (from user meta: description)
- Social links (Twitter, LinkedIn, email)
- Article count: "[X] artikels"

### Author Articles Grid
[Block: core/query {inherit: true, author: current}]
- Layout: Grid 3-column
- Per Page: 12
- Pagination: Numbered

## Sidebar
- Newsletter CTA
- Ad Slot
