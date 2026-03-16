# Rooi Rose Mega Menu Navigation Prompt and Prototype Content Brief

## Executive summary

The live **rooi rose** site already exposes a clear, magazine-style information architecture: eight lifestyle categories with deep subcategories, plus **Wen** (competitions), a separate **Leestyd** reading section, **Rooiwarm wenners** (currently linking to a Beauty & Wellness Awards hub), and **Kontak Ons** (contact). The homepage HTML shows the full navigation tree, including drop-downs for each category. citeturn1view0  
Your current **Rooiroseprototype** repo has been partially shifted to these category names and routes (e.g., `/kos`, `/mode`, `/ontspanning`) but still lacks a true **desktop mega menu system**, a **Shop** top-level item, and (critically) **live-compatible subcategory slugs** (some existing internal docs use different slug patterns than the live site’s URLs). citeturn1view0turn6view1turn6view3turn11view1turn11view3  

This deliverable provides:

- A **live-derived navigation + subcategory structure** suitable for Figma Make and the React prototype.
- A **mega menu behavioural + layout specification** (desktop + mobile).
- A **ready-to-paste “Figma Make prompt”** tailored to refactoring the prototype header/navigation into a data-driven mega menu.
- A **manageable content-generation brief** that aligns the prototype’s content with rooi rose’s editorial taxonomy (including podcasts under Ontspanning and Shop in main nav).

## Live site content structure to mirror in the prototype

### Primary navigation items confirmed on live

The live homepage navigation lists the main categories and utility sections, including **Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou Lewe, Ontspanning, Wen, Leestyd, Kontak Ons**. citeturn1view0  
It also shows **Rooiwarm wenners** as a top-level item in the expanded menu. citeturn1view0  

Your required prototype top-level navigation (per your brief) is:

Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, **Shop**, Kontak.

Notes for alignment:

- Live uses **Leestyd** as its own top-level link and also places it under Ontspanning in the menu structure. citeturn1view0turn8view0  
  In your prototype, keep **Leestyd inside Ontspanning** (as you specified), but still consider supporting `/lees` as a route because live uses it as a canonical URL. citeturn8view0
- Live uses **Kontak Ons** at a legacy URL (`/kontak-ons-2/`) and exposes contact details there. citeturn9view1  
  The prototype can keep `/kontak` as the “pretty” route, but it’s useful to mirror the live address as an alias for realism.
- Live has a **Shop** (`/shop/`) with WooCommerce-style listing and sorting. citeturn4view0  
  Your prototype should keep **Shop** visible in the main nav even if it is a lightweight placeholder page initially.

### Submenus confirmed on live

The homepage reveals the full category drop-down structure (this is effectively your canonical taxonomy). citeturn1view0  

Kos subcategories (live menu list):

Maklik & vinnig; Aandetes vir die week; Somerkos; Laekoolhidraat; Vegetaries; Gebak; Nagereg; Drankies; Jy kan; Nuut & Nou; Recipes in English. citeturn1view0turn2view0  

Mode subcategories:

Dra dit so; Wenke; Trends. citeturn1view0turn11view1  

Skoonheid subcategories:

Hare; Velsorg; Grimering; Naels; Wenke. citeturn1view0  

Gesondheid subcategories:

Leef gesond; Dieet; Fiksheid. citeturn1view0  

Bekendes subcategories:

Ons mense. citeturn1view0  

Leefstyl subcategories:

Dekor; Handwerk; Tuinmaak; Doen dit self. citeturn1view0  

Jou lewe subcategories:

Verhoudings; Ouerskap; Inspirasie; In die nuus; Geld & Sukses; Persoonlike groei. citeturn1view0turn11view3  

Ontspanning subcategories live-visible:

Reis; Blogs; (and it also surfaces Leestyd). citeturn1view0turn6view3turn7view3turn8view0  

Your additional rule:

- **Podcasts live under Ontspanning**. Live has at least two podcast/radio hubs: `/rooiroseradio/` (a landing page describing rrRADIO as the official podcast channel) and a taxonomy-like archive at `/rrradio/` with episodes/posts. citeturn5view0turn5view1  

Wen submenu (important live detail):

The top navigation exposes **Ma Dogter Kompetisie** and **Inskrywings** under **Wen**. citeturn1view0turn8view1turn8view2  

Rooiwarm wenners live behaviour:

On live, the “Rooiwarm wenners” menu item currently routes to a **Beauty & Wellness Awards** hub page. citeturn3view0  
Separately, live has a “Wenners” page with a historical winners list and recent competition-related content. citeturn10view0  
For the prototype mega menu, treat **Rooiwarm wenners** as “Awards + Winners” (see spec below) to cover both realities cleanly.

## Current prototype navigation architecture and implications for a mega menu

### What exists today (and what it implies)

From repo inspection:

- The prototype already has a centralised navigation data file (`src/app/data/navigation.ts`) and a real `Header` component (`src/app/components/parts/Header.tsx`) that consumes navigation constants, plus a dedicated `MobileMenu` overlay (`src/app/components/parts/MobileMenu.tsx`).
- The routes are concentrated in `src/app/routes.tsx` and already include top-level category routes (e.g., `/kos`, `/mode`, `/ontspanning`) and a competitions hub at `/wen`.  
- There is already a content data source (`src/app/data/categoryArticles.ts`) used for search suggestions and category/article rendering; however it still contains legacy “newspaper” categories in the same file alongside the newer magazine categories.

This matters for mega menus because:

A mega menu works best when **navigation and “preview content”** (featured/trending) are data-driven. You already have the right pattern (centralised data), but you need one extra layer: a **MegaMenuConfig** describing (a) subcategory columns and (b) featured/trending content references.

### Key alignment gaps versus live and your updated requirements

Shop is missing from live’s visible primary nav list, but you explicitly require it in the prototype’s main nav (and live does have a shop endpoint). citeturn4view0  

Rooiwarm wenners in the prototype should be treated as **standalone**, consistent with your requirement and the live nav position, but the live destination is currently the Beauty & Wellness Awards hub. citeturn1view0turn3view0  

Subcategory slugs must match live URLs where possible. You can confirm several live subcategory destinations (for example: `Aandetes vir die week` loads at `/kos/aandetes-vir-die-week/`, `Reis` at `/ontspanning/reis/`, `Blogs` at `/ontspanning/blogs/`, `Trends` at `/mode/nuut-en-nou-mode/`, and `Sukses en geld` at `/jou-lewe/sukses-en-geld/`). citeturn6view1turn6view3turn7view3turn11view1turn11view3  

Your mega menu should therefore prefer those **live-compatible paths** (even if the prototype internally renders them using a shared template initially).

## Proposed mega menu information architecture for Rooi Rose

### Top-level nav set for the prototype header

Use the following exact visible labels in the header (desktop) in this order:

Kos; Mode; Skoonheid; Gesondheid; Bekendes; Leefstyl; Jou lewe; Ontspanning; Rooiwarm wenners; Wen; Shop; Kontak.

Home is via the logo (do not add “Tuis” as a primary menu item unless you have spare space on desktop).

### Mega menu content model per top-level item

Each dropdown should follow a consistent editorial pattern: “browse taxonomy + highlight content”.

For each category mega menu (Kos/Mode/Skoonheid/Gesondheid/Bekendes/Leefstyl/Jou lewe/Ontspanning):

- Left area: subcategory links (split into 1–2 columns depending on count).
- Right area: a “Featured” card with image + headline + short deck (2 lines max).
- Lower/right area: a short “Trending” list (3–5 titles) with timestamps or tags.

For utility/special items (Rooiwarm wenners/Wen/Shop/Kontak):

- Rooiwarm wenners: treat as “Awards + Winners hub”:
  - Primary CTA: “Beauty & Wellness Awards” (live destination currently). citeturn3view0  
  - Secondary CTA: “Wenners” winners list page. citeturn10view0  
  - Optional: “Terms & Conditions” (if you want realism; live footer includes Terms & Conditions). citeturn1view0  
- Wen:
  - Top links: Wen hub + “Ma Dogter Kompetisie” + “Inskrywings” (as per live dropdown). citeturn1view0turn8view1turn8view2  
  - Right panel: featured competition card (image + prize teaser).
- Shop:
  - Quick links (prototype): Shop home; Basket/Cart; Checkout; My Account (mirror the common WooCommerce journey; live exposes Shop and cart/checkout endpoints). citeturn4view0turn1view0  
  - Right panel: featured product (e.g., subscription, entry fee).
- Kontak:
  - No mega menu needed; a simple route is acceptable.
  - If you do a dropdown, include “Advertensie-navrae”, “Redaksie”, “Intekenare” as informational anchors (live contact page sections). citeturn9view1  

### Subcategory URL mapping guidance

Because the web tool could not fetch every subcategory page (some returned cache-miss errors), treat the following as “best-effort verified” live URLs that you should prioritise:

- `/kos/aandetes-vir-die-week/` confirmed. citeturn6view1  
- `/ontspanning/reis/` confirmed. citeturn6view3  
- `/ontspanning/blogs/` confirmed. citeturn7view3  
- `/mode/nuut-en-nou-mode/` confirmed for “Trends”. citeturn11view1  
- `/jou-lewe/sukses-en-geld/` confirmed for “Geld & Sukses”. citeturn11view3  
- `/lees/` confirmed for Leestyd content hub. citeturn8view0  
- `/rooiroseradio/` and `/rrradio/` confirmed for podcasts/radio. citeturn5view0turn5view1  

Where a subcategory URL can’t be confirmed from fetchable pages, derive it from the live menu pattern (hyphenated Afrikaans slugs under the parent category). Keep these in one config file so they’re easy to correct later without touching component logic.

## Mega menu interaction and layout specification

### Desktop behaviour

The mega menu should feel like a premium magazine site:

- Trigger: hover *and* focus on the top-level nav label opens the dropdown.
- Dropdown: full-width panel aligned to the header container (use the same max width as your header content).
- Close conditions: mouse-leave (with a short delay), ESC key, click outside, or moving focus away.
- Keyboard:
  - Tab moves through top-level items and into open menu.
  - ESC closes menu and returns focus to the trigger.
  - Arrow keys are optional; if implemented, left/right changes top-level item while keeping menu open (editorial sites often do this smoothly, but it is not mandatory for the prototype).

### Desktop mega menu layout grid

Use a consistent three-zone layout:

- Zone A (left): Subcategory columns (1–2 columns).
- Zone B (right-top): Featured card (image 3:2, headline, short deck).
- Zone C (right-bottom): Trending list + “View all” link.

For **Kos** (many subcategories), use two link columns to prevent a very tall panel. citeturn1view0turn2view0  

### Mobile behaviour

Keep the existing full-screen mobile menu pattern (it’s already aligned to a modern UX), but add:

- Expandable accordions per main category.
- Inside each accordion: subcategory links + one featured item.

Do not implement hover-only logic on mobile; use tap-to-expand.

### Visual styling rules for the mega menu

- Typeface: headline/section labels should reflect the editorial personality (Playfair Display SC for display-style labels is consistent with your brand token decision; body/UI in Karla).
- Colours: ensure primary accents use the brand red carefully (your brand red is strong, so reserve it for highlights: active state, section headings, category labels, and key CTAs).
- White space: give the dropdown breathable padding so it reads like a magazine contents spread, not a cramped site map.

The live site is very content-forward: menu items are plain text; the mega menu should enhance discoverability without cluttering the header. citeturn1view0  

![Rooi Rose logo](sandbox:/mnt/data/rooi-rose-logo.jpg)

## Figma Make prompt for implementing the mega menu and navigation refactor

Copy/paste the following prompt into Figma Make (and adjust only the file paths if your repo differs):

```text
You are refactoring the React prototype repo “lightspeedwp/Rooiroseprototype” to match the live Rooi Rose magazine navigation structure and implement desktop mega menus.

Goal
- Replace the current simple desktop category bar in src/app/components/parts/Header.tsx with a fully data-driven Mega Menu system for Rooi Rose.
- Keep the existing sticky header layout and right-side utility icons (search/cart/account), but upgrade the primary navigation to support dropdown mega menus.

Non-negotiable navigation requirements
- Top-level header nav items (in this order; exact labels):
  Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, Shop, Kontak
- Podcasts must live under Ontspanning (add “Podcasts” sub-link(s) in that mega menu).
- Rooiwarm wenners must be standalone as a top-level item (it has its own mega menu panel).
- Shop must remain visible in the main nav as a top-level item.

Source-of-truth for submenus (use these labels)
Kos:
- Maklik & vinnig
- Aandetes vir die week
- Somerkos
- Laekoolhidraat
- Vegetaries
- Gebak
- Nagereg
- Drankies
- Jy kan
- Nuut & Nou
- Recipes in English

Mode:
- Dra dit so
- Wenke
- Trends

Skoonheid:
- Hare
- Velsorg
- Grimering
- Naels
- Wenke

Gesondheid:
- Leef gesond
- Dieet
- Fiksheid

Bekendes:
- Ons mense

Leefstyl:
- Dekor
- Handwerk
- Tuinmaak
- Doen dit self

Jou lewe:
- Verhoudings
- Ouerskap
- Inspirasie
- In die nuus
- Geld & Sukses
- Persoonlike groei

Ontspanning:
- Reis
- Blogs
- Leestyd
- Podcasts   (NEW; include links to /rooiroseradio and /rrradio)

Wen mega menu must include:
- Wen (hub)
- Ma Dogter Kompetisie
- Inskrywings

Rooiwarm wenners mega menu must include:
- Beauty & Wellness Awards (hub)
- Wenners (winners list)
- Terms & Conditions (optional)

Implementation approach (code + data)
1) Add a new data config file:
   - Create src/app/data/megaMenuConfig.ts
   - Define a TypeScript interface for:
     - top-level item (label, href, optional description)
     - subcategory groups (title + list of links)
     - featuredContent reference (title, href, imageUrl, categoryLabel, optional deck)
     - trending references (array of {title, href})
   - Export MEGA_MENU_CONFIG keyed by top-level label or slug.

2) Update src/app/data/navigation.ts
   - Update the existing header category links to match the top-level list above (include Shop and Kontak).
   - Ensure MOBILE_CATEGORY_LINKS stays in sync with these top-level categories (icons can stay; add any missing icon mapping entries).
   - Keep legacy links/redirects if they exist, but do not show legacy newspaper categories in primary navigation.

3) Build the MegaMenu UI
   - Create src/app/components/parts/MegaMenu.tsx (or a folder /MegaMenu/* if you prefer).
   - Desktop:
     - Each top-level nav item (except Kontak if you choose) is a trigger that opens a large dropdown panel.
     - Panel layout:
       - Left: subcategory links (1–2 columns depending on count)
       - Right: a featured card with image + title + 1–2 line deck
       - Below featured: trending list (3–5 links)
       - Include a “View all” link per category to the top-level category page.
     - Behaviour:
       - Open on hover AND focus.
       - Close on mouse leave (short delay), click outside, and Escape.
       - Accessible: aria-expanded, aria-controls, focus management so keyboard users can tab through.
   - Mobile:
     - Keep existing MobileMenu overlay.
     - Add accordion expansion per top-level category to reveal subcategories beneath the category button list (or on a second screen).
     - Ensure Podcasts appear under Ontspanning.

4) Routes (minimal)
   - Ensure the top-level nav hrefs match existing routes where possible:
     /kos, /mode, /skoonheid, /gesondheid, /bekendes, /leefstyl, /jou-lewe, /ontspanning, /wen, /kontak
   - Add /shop route if it doesn’t exist (simple placeholder page is fine).
   - Add /rooiroseradio and /rrradio routes as placeholders under Ontspanning (or redirect to a placeholder “Podcasts” page).
   - Subcategory routes can be added later; if not implemented, link them to the parent category for now but keep the correct slug strings in config.

Brand styling constraints
- Fonts: Playfair Display SC (display/category labels), Karla (UI/body).
- Colours: primary #e01e12, text #222222/#000000, muted/meta #424242, background #FFFFFF.
- The mega menu should feel like a magazine contents spread: generous spacing, clear typographic hierarchy, strong image-led featured area.

Deliverable
- Updated Header with mega menus working in desktop and a coherent mobile experience.
- New megaMenuConfig.ts and updated navigation.ts.
- Shop is visible in the main nav.
- Podcasts are nested under Ontspanning.
- Rooiwarm wenners is standalone and has its own mega menu.
```

## Manageable prototype content brief aligned to the navigation

### Content types to support (minimal but realistic)

To keep the prototype manageable while still “magazine-authentic”, model content into these types:

- Article (standard editorial story)
- Recipe (Kos)
- Competition entry (Wen)
- Awards / Winners hub (Rooiwarm wenners)
- Podcast episode (Ontspanning → Podcasts)
- Static pages (Kontak; Terms/Privacy; etc.)

This aligns with what you see live: Kos is a large archive, Wen is a paginated competition hub, and there are separate hubs for reading and podcasts/radio. citeturn2view0turn0search5turn5view1turn8view0turn10view0  

### Minimum page set to build in the prototype

Keep templates reusable:

- Home
- Category landing (shared template for Kos/Mode/Skoonheid/etc.)
- Subcategory landing (same template, filtered)
- Article page (shared hero + editorial body)
- Competition hub + competition single (Wen)
- Awards/Winners hub (Rooiwarm wenners)
- Podcasts hub + episode page(s) (under Ontspanning) citeturn5view0turn5view1  
- Shop landing + product detail placeholder citeturn4view0  
- Contact page citeturn9view1  

### Content generation guidance for Figma Make

To create believable demo content without overbuilding:

- Produce 10 posts per top-level lifestyle category (Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning).
- Produce 6 competition entries for Wen (including “Ma Dogter Kompetisie” as a spotlight example, because it is prominent on live). citeturn8view1  
- Produce 6 items for Rooiwarm wenners split as:
  - 3 “Awards” informational items (submission rules, deadlines, categories)
  - 3 “Winners” announcement articles (to mirror the winners-list feel). citeturn3view0turn10view0  
- For Ontspanning → Podcasts:
  - Create 8 podcast episode entries as a separate content type and list them under a Podcasts landing page; mirror the existence of rrRADIO as the podcast channel. citeturn5view1  

For images in the prototype:

- Use unique editorial photography per item and keep consistent aspect ratios:
  - Feature/hero: 3:2
  - Cards: 3:2 or 4:5 for fashion/beauty “cover-like” moments

For SEO/meta realism:

- Each post should have:
  - Title, short deck/excerpt, author name, date, category, subcategory, tags, and a hero image.
- Use Afrikaans tone and vocabulary consistent with the live site (e.g., category headings are Afrikaans, and content is lifestyle-focused). citeturn2view0turn8view0turn11view1turn11view3  

### Editorial “contents-page” logic for category landing pages

To mirror the strength of the live experience:

- At the top of every category landing page, include “quick links” for the subcategories (this is the same mental model as the drop-down, but visible in-page).
- Use a shared CategoryHero pattern:
  - Category label (small caps / display style)
  - One-sentence description
  - Inline subcategory chips/links
  - One featured story tile

This is directly compatible with your mega menu, because both can be driven from the same `megaMenuConfig` dataset.

## Sources and connectors used

GitHub connector: used to inspect Rooiroseprototype code structure, header/navigation components, routing, and existing rooi rose orchestrator/guidelines in-repo.

Google Drive connector: searched for Rooiroseprototype navigation/mega menu notes; no relevant documents were surfaced in the quick scan.

Public web: rooirose.co.za pages were opened to confirm live navigation, submenus, and key hubs (Wen, Leestyd, podcast/radio, Shop, Beauty & Wellness Awards, winners list, contact). citeturn1view0turn0search5turn5view1turn8view0turn10view0turn9view1turn4view0turn3view0