Perfect — this is exactly the right moment to formalise the **content architecture** before we design header, footer and Figma Make flows.

You’ve already supplied:

* Full **page sitemap**
* Full **category sitemap**
* Sample of **posts sitemap**
* Required **top-level navigation**
* All required **submenus**

That’s enough to build a clean editorial content structure without needing live scraping.

Below is a **structured Figma Make Content Brief** aligned to:

* The live WordPress structure
* Your new top-level navigation
* The editorial magazine direction
* A scalable React prototype

---

# 1. MASTER CONTENT ARCHITECTURE (Prototype Mapping)

This is the **cleaned, consolidated content hierarchy** the prototype should implement.

---

# GLOBAL SITE STRUCTURE

## 1️⃣ Core Editorial Sections (Main Menu)

These become the **primary navigation in the new header**.

```
Kos
Mode
Skoonheid
Gesondheid
Bekendes
Leefstyl
Jou lewe
Ontspanning
Rooiwarm wenners
Wen
Kontak
```

---

# 2️⃣ Category + Subcategory Structure (Figma Build Map)

This is the clean version for Figma Make.

---

## 🥘 KOS

**Landing page:** /kos/

**Subcategories:**

* Maklik & vinnig
* Aandetes vir die week
* Somerkos
* Winterkos (exists in sitemap – should be included)
* Laekoolhidraat
* Vegetaries
* Gebak
* Nagereg
* Drankies
* Jy kan
* Nuut & Nou
* Recipes in English

### Page Types Required:

1. Kos Category Landing
2. Kos Subcategory Listing
3. Recipe Detail Page
4. Recipe Collection Page (e.g., “10 feestelike slaaie”)
5. Editor’s Pick (Redakteurkeuse-kos)
6. Sponsored Recipe (branded template)

---

## 👗 MODE

Landing: /mode/

Subcategories:

* Dra dit so
* Wenke
* Trends (map to nuut-en-nou-mode)

Page Types:

* Fashion Article
* Gallery (Golden Globes outfits)
* Trend List
* Style Guide
* Shoppable Fashion Article

---

## 💄 SKOONHEID

Landing: /skoonheid/

Subcategories:

* Hare
* Velsorg
* Grimering
* Naels
* Wenke

Special Pages:

* Beauty & Wellness Awards
* Rooiwarm wenners (link integration)

Templates:

* Beauty Advice Article
* Product Review
* Award Feature
* Giveaway-linked Beauty Article

---

## 🧠 GESONDHEID

Landing: /gesondheid/

Subcategories:

* Leef gesond
* Dieet
* Fiksheid

Article Types:

* Medical Advice
* Nutrition Guide
* Symptom Explainer
* Fitness Routine
* Mental Health Article

---

## 🌟 BEKENDES

Landing: /bekendes/

Subcategory:

* Ons mense

Content Types:

* Celebrity Interview
* TV Show Coverage
* Entertainment News
* Exclusive Feature
* Margaret uit Hollywood column
* Series-based tag pages (Boer Soek n Vrou etc.)

---

## 🏡 LEEFSTYL

Landing: /leefstyl/

Subcategories:

* Dekor
* Handwerk
* Tuinmaak
* Doen dit self

Content Types:

* DIY Tutorial
* Home Decor Feature
* Small Space Advice
* Garden Guide
* Craft Template Article

---

## ❤️ JOU LEWE

Landing: /jou-lewe/

Subcategories:

* Verhoudings
* Ouerskap
* Inspirasie
* In die nuus
* Geld & Sukses
* Persoonlike groei

Content Types:

* Relationship Advice
* Parenting Guide
* Inspirational Essay
* Finance Article
* Personal Growth Feature
* Opinion Column

---

## ✈️ ONTSPANNING

Landing: /ontspanning/

Subsections from sitemap:

* Reis
* Blogs
* Leestyd (map to /lees/)
* Video
* Kalender
* RRRADIO

Templates Required:

* Travel Feature
* Blog Author Page
* Book Club Page
* Podcast Series Page
* Episode Detail Page
* Event Calendar Page

---

## 🏆 ROOIWARM WENNERS

This should be a **standalone Awards Hub**.

Pulls from:

* Beauty & Wellness Awards
* Skoonheid awards
* Product winner announcements

Template:

* Award Landing Page
* Category Winner Page
* Product Spotlight Page

---

## 🎁 WEN

Landing: /wen/

Includes:

* Competition pages
* Individual giveaway detail pages
* Winners page (/wenners/)
* Entry submission form page
* Terms & Conditions link

Templates:

* Competition Landing
* Giveaway Detail
* Winners Archive
* Entry Confirmation

---

## 📩 KONTAK

Landing: /kontak-ons-2/

Should include:

* Contact Form
* Editorial Contacts
* Advertising (adverteer)
* Subscribe (inteken)
* Newsletter (kook-nuusbrief)

---

# 3. NON-MENU BUT REQUIRED SYSTEM PAGES

These must exist in the prototype even if not in main nav:

* Home
* Search results
* Tag archive
* Author page
* 404
* Privacy Policy
* Terms & Conditions
* Facebook privacy policy
* Shop
* Basket
* Checkout
* My Account
* Inskrywings
* Dynamic Content (likely legacy)
* Home Slider (CMS-driven)

---

# 4. NEW HEADER STRUCTURE (Prototype)

We are not copying live.

We are designing an **editorial magazine header**.

## HEADER LAYOUT (Figma Instruction)

Top Row:

* Logo (centered or left aligned)
* Search icon
* Subscribe button
* Account icon
* “Wen” highlighted in red

Main Navigation:
Kos | Mode | Skoonheid | Gesondheid | Bekendes | Leefstyl | Jou lewe | Ontspanning | Rooiwarm wenners | Wen | Kontak

Dropdown:
Large editorial mega menu:

* Left: Featured story
* Right: Subcategory grid
* Bottom: Trending

---

# 5. NEW FOOTER STRUCTURE (Expanded Editorial Footer)

Live footer is too basic.

We redesign as:

## Footer Columns

Column 1 – Categories
Column 2 – About
Column 3 – Participate
Column 4 – Legal

### Proposed Footer Links:

Categories:
Kos
Mode
Skoonheid
Gesondheid
Bekendes
Leefstyl
Jou lewe
Ontspanning

Participate:
Wen
Rooiwarm wenners
Inteken
Adverteer
Lesersforum

Legal:
Voorwaardes en bepalings
Terms & Conditions
Privaatheidsbeleid
Facebook privacy policy
Cookies

Bottom strip:
© 2026 rooi rose Magazine | Novus Media

---

# 6. CONTENT TEMPLATE SYSTEM (Figma Make Must Build)

We do NOT build page-by-page.

We build reusable editorial templates:

### 1. Home Template

* Hero slider
* Featured story
* Category rows
* Trending
* Competition highlight
* Newsletter block

### 2. Category Template

* Hero category story
* Grid of latest posts
* Sidebar (optional)
* Tag filter

### 3. Article Template (Long-form editorial)

* Hero image
* Category label
* Headline (Playfair Display SC)
* Standfirst
* Body (Karla)
* Pull quote
* Inline image
* Related stories
* Social share
* Competition CTA block

### 4. Recipe Template

* Hero image
* Ingredients block
* Method block
* Tips
* Nutrition info
* Print button

### 5. Competition Template

* Hero
* Prize block
* How to enter
* Terms summary
* Entry form

### 6. Awards Template

* Category winners
* Product grid
* Judge quotes

---

# 7. CONTENT VOLUME ANALYSIS (From 333 Posts)

Observations:

* Heavy recipe volume
* Heavy TV/entertainment coverage
* Many competition pages
* Strong recurring series (Boer Soek n Vrou, Suidooster, etc.)
* Seasonal spikes (Christmas, Summer, February awards)

Implication:

Prototype must support:

* Recurring tag-based editorial collections
* Seasonal landing pages
* Campaign landing pages

---

# 8. Figma Make Content Brief (Ready to Paste)

Below is the condensed instruction set for Figma Make AI:

---

### FIGMA MAKE PROTOTYPE CONTENT BRIEF

Build a scalable editorial magazine website structure for Rooi Rose.

Top-level navigation must include:
Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl, Jou lewe, Ontspanning, Rooiwarm wenners, Wen, Kontak.

Each main category must support:

* Category landing
* Subcategory listing
* Article detail
* Tag archive

Article template must support:

* Long-form editorial layout
* Pull quotes
* Inline image blocks
* Competition CTAs
* Related stories
* Social sharing

Recipe template must include:

* Ingredients
* Method
* Notes
* Print version

Competition template must include:

* Prize detail
* Entry instructions
* Terms block
* Form integration

Header:
Editorial magazine style with mega dropdown.

Footer:
4-column expanded footer with categories, participate, about, legal.

All content must support:

* Tag-based filtering
* Author pages
* Series pages
* Awards hub
* Podcast pages
* Video pages

---

# 9. Critical Structural Decisions

Before we proceed, we need to confirm:

1. Should Rooiwarm wenners be standalone or nested under Skoonheid?
2. Should Shop remain visible in main nav or account dropdown?
3. Should Podcasts live under Ontspanning only?

---

If you'd like, next I can:

* Create a **visual sitemap diagram**
* Or create a **component-level Figma system map**
* Or define the **React route structure** for the prototype

Which direction do you want to go next?
