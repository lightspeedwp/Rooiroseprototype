# rooi rose Content Architecture

**Last Updated**: 2026-03-11 (Phase 0 Implementation Complete)  
**Status**: Production Ready — Core Categories  
**Related**: [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md), [Navigation Data](/src/app/data/navigation.ts)

---

## Overview

rooi rose is an Afrikaans lifestyle magazine with **10 main content categories** focused on modern living, health, food, fashion, beauty, and entertainment. This document defines the complete content architecture, navigation structure, and URL hierarchy.

---

## Main Navigation Categories (11 items)

The primary navigation contains **11 items** — 8 lifestyle categories + 2 competition sections + Contact:

| Order | Category | Slug | URL | Type | Articles |
|:------|:---------|:-----|:----|:-----|:---------|
| 1 | **Tuis** | `tuis` | `/` | Homepage | — |
| 2 | **Kos** | `kos` | `/kos` | Lifestyle | 2 |
| 3 | **Mode** | `mode` | `/mode` | Lifestyle | 2 |
| 4 | **Skoonheid** | `skoonheid` | `/skoonheid` | Lifestyle | 2 |
| 5 | **Gesondheid** | `gesondheid` | `/gesondheid` | Lifestyle | 2 |
| 6 | **Bekendes** | `bekendes` | `/bekendes` | Lifestyle | 2 |
| 7 | **Leefstyl** | `leefstyl` | `/leefstyl` | Lifestyle | 2 |
| 8 | **Jou lewe** | `jou-lewe` | `/jou-lewe` | Lifestyle | 2 |
| 9 | **Ontspanning** | `ontspanning` | `/ontspanning` | Lifestyle | 2 |
| 10 | **Wen** | `wen` | `/wen` | Competitions | — |
| 11 | **Kontak** | `kontak` | `/kontak` | Utility | — |

**Total Mock Articles**: 17 articles across 8 lifestyle categories (2 per category + 1 for Rooiwarm wenners)

---

## Category Descriptions (SEO Metadata)

Each category has a dedicated SEO description for Google search results:

| Category | Meta Description |
|:---------|:-----------------|
| **Kos** | Heerlike resepte, kook-wenke en kuliniese inspirasie vir elke geleentheid. |
| **Mode** | Die nuutste modeneigings, stylwenke en mode-inspirasie vir elke seisoen. |
| **Skoonheid** | Skoonheidsprodukte, velsorg, grimering en skoonheidsroetines vir die moderne vrou. |
| **Gesondheid** | Gesonde leefstyl, oefeningswenke, voeding en welstandsadvies. |
| **Bekendes** | Eksklusiewe onderhoude, profiele en stories van Suid-Afrikaanse bekendes. |
| **Leefstyl** | Kuns, kultuur, kos en alles wat die lewe lekker maak. |
| **Jou lewe** | Werk-lewe balans, finansiële beplanning, verhoudings en persoonlike groei. |
| **Ontspanning** | Resensies, reis-idees, boeke, films en vermaak vir die hele gesin. |
| **Wen** | Kompetisies, pryse en wenners — neem deel en wen groot! |
| **Rooiwarm wenners** | Sien wie onlangs groot gewen het in ons Rooiwarm-kompetisies. |

---

## Subcategories (44 total — Future Phase)

Each main category has subcategories for deeper content organization. **Note**: Subcategory routes are not yet implemented in the prototype (Phase 0.7 — optional enhancement).

### 1. Kos (12 subcategories)
- Maklik & vinnig → `/kos/maklik-vinnig`
- Aandetes vir die week → `/kos/aandetes-vir-die-week`
- Somerkos → `/kos/somerkos`
- Winterkos → `/kos/winterkos`
- Laekoolhidraat → `/kos/laekoolhidraat`
- Vegetaries → `/kos/vegetaries`
- Gebak → `/kos/gebak`
- Nagereg → `/kos/nagereg`
- Drankies → `/kos/drankies`
- Jy kan → `/kos/jy-kan`
- Nuut & Nou → `/kos/nuut-en-nou`
- Recipes in English → `/kos/recipes-in-english`

### 2. Mode (3 subcategories)
- Dra dit so → `/mode/dra-dit-so`
- Wenke → `/mode/wenke`
- Trends → `/mode/nuut-en-nou-mode`

### 3. Skoonheid (5 subcategories)
- Hare → `/skoonheid/hare`
- Velsorg → `/skoonheid/velsorg`
- Grimering → `/skoonheid/grimering`
- Naels → `/skoonheid/naels`
- Wenke → `/skoonheid/wenke`

### 4. Gesondheid (3 subcategories)
- Leef gesond → `/gesondheid/leef-gesond`
- Dieet → `/gesondheid/dieet`
- Fiksheid → `/gesondheid/fiksheid`

### 5. Bekendes (1 subcategory)
- Ons mense → `/bekendes/ons-mense`

### 6. Leefstyl (4 subcategories)
- Dekor → `/leefstyl/dekor`
- Handwerk → `/leefstyl/handwerk`
- Tuinmaak → `/leefstyl/tuinmaak`
- Doen dit self → `/leefstyl/doen-dit-self`

### 7. Jou lewe (6 subcategories)
- Verhoudings → `/jou-lewe/verhoudings`
- Ouerskap → `/jou-lewe/ouerskap`
- Inspirasie → `/jou-lewe/inspirasie`
- In die nuus → `/jou-lewe/in-die-nuus`
- Geld & Sukses → `/jou-lewe/geld-sukses`
- Persoonlike groei → `/jou-lewe/persoonlike-groei`

### 8. Ontspanning (6 subcategories)
- Reis → `/ontspanning/reis`
- Blogs → `/ontspanning/blogs`
- Leestyd → `/lees` (special URL)
- Video → `/ontspanning/video`
- Kalender → `/ontspanning/kalender`
- RRRADIO → `/rrradio` (special URL)

### 9. Rooiwarm wenners (0 subcategories)
Awards hub — no subcategories

### 10. Wen (0 subcategories)
Competitions hub — no subcategories

---

## Mobile Menu Structure

The mobile menu displays categories in a **3×5 grid** with lifestyle icons:

| Icon | Category | URL |
|:-----|:---------|:----|
| 🏠 Home | Tuis | `/` |
| 🍴 Utensils | Kos | `/kos` |
| 👕 Shirt | Mode | `/mode` |
| ✨ Sparkles | Skoonheid | `/skoonheid` |
| 💪 Dumbbell | Gesondheid | `/gesondheid` |
| ⭐ Star | Bekendes | `/bekendes` |
| ☕ Coffee | Leefstyl | `/leefstyl` |
| 👥 Users | Jou lewe | `/jou-lewe` |
| 🎬 Film | Ontspanning | `/ontspanning` |
| 🎁 Gift | Wen | `/wen` |
| 🏆 Trophy | Rooiwarm wenners | `/rooiwarm-wenners` |
| 📖 Book-Open | E-uitgawes | `/e-uitgawes` |
| 📧 Mail | Nuusbrief-argief | `/nuusbrief-argief` |

**Icons from**: `lucide-react` package

---

## Footer Navigation Structure

The footer contains **4 columns** with 25+ links:

### Column 1: rooi rose Kategorieë (8 items)
- Kos → `/kos`
- Mode → `/mode`
- Skoonheid → `/skoonheid`
- Gesondheid → `/gesondheid`
- Bekendes → `/bekendes`
- Leefstyl → `/leefstyl`
- Jou lewe → `/jou-lewe`
- Ontspanning → `/ontspanning`

### Column 2: Kompetisies & Dienste (6 items)
- Wen → `/wen`
- Rooiwarm wenners → `/rooiwarm-wenners`
- E-uitgawes → `/e-uitgawes`
- Nuusbrief-argief → `/nuusbrief-argief`
- My rekening → `/my-rekening`
- Kontak ons → `/kontak`

### Column 3: Oor rooi rose (6 items)
- Oor ons → `/oor-ons`
- Ons span → `/oor-ons/redaksie`
- Kontak → `/kontak`
- Adverteer → `/adverteer`
- Algemene vrae → `/vrae`
- Inhoudsopgawe → `/inhoudsopgawe`

### Column 4: Beleid (5 items)
- Privaatheidsbeleid → `/beleid/privaatheidsbeleid`
- Gebruikersooreenkomste → `/beleid/gebruikersooreenkomste`
- Koekiebeleid → `/beleid/koekiebeleid`
- Gebruiksreëls → `/beleid/gebruiksreels`
- Perscode → `/beleid/perscode`

---

## Legacy Newspaper Redirects (14 redirects)

Old Die Papier newspaper categories redirect to the homepage:

| Old Route | Category Type | Redirect Target |
|:----------|:--------------|:----------------|
| `/nuus` | News | `/` |
| `/sport` | Sports | `/` |
| `/skole` | Schools | `/` |
| `/sake` | Business | `/` |
| `/dink` | Opinion | `/` |
| `/skolerugby` | Schools Rugby | `/` |
| `/doodsberrigte` | Obituaries | `/` |
| `/news` | (English) | `/` |
| `/schools` | (English) | `/` |
| `/business` | (English) | `/` |
| `/lifestyle` | (English) | `/leefstyl` ✅ |
| `/opinion` | (English) | `/` |
| `/schools-rugby` | (English) | `/` |
| `/competitions` | (English) | `/wen` ✅ |

**SEO Strategy**: Most legacy redirects point to homepage to avoid 404 errors. Only `/lifestyle` and `/competitions` map to rooi rose equivalents (`/leefstyl` and `/wen`) because they align with magazine content.

---

## Sitemap Structure (SEO)

The sitemap (`/inhoudsopgawe`) lists all main pages:

### Main Pages (14 items)
- Tuis → `/`
- Oor ons → `/oor-ons`
- Ons span / redaksie → `/oor-ons/redaksie`
- Kontak ons → `/kontak`
- Algemene vrae → `/vrae`
- Soek → `/soek`
- Weer → `/weer`
- Verkeer → `/verkeer`
- Doodsberrigte → `/doodsberrigte` (legacy)
- Multimedia → `/multimedia` (legacy)
- Gebeure → `/gebeure` (legacy)
- Nuusbrief-argief → `/nuusbrief-argief`
- Inhoudsopgawe → `/inhoudsopgawe`

### Category Pages (10 items)
- Kos → `/kos`
- Mode → `/mode`
- Skoonheid → `/skoonheid`
- Gesondheid → `/gesondheid`
- Bekendes → `/bekendes`
- Leefstyl → `/leefstyl`
- Jou lewe → `/jou-lewe`
- Ontspanning → `/ontspanning`
- Wen → `/wen`
- Rooiwarm wenners → `/rooiwarm-wenners`

### E-Editions (2 items)
- E-uitgawes (winkel) → `/e-uitgawes`
- My e-uitgawes / My biblioteek → `/my-e-uitgawes`

### Submission Forms (6 items)
- Stuur in (hub) → `/stuur-in`
- Stuur in – storie → `/stuur-in/storie`
- Stuur in – lesersbrief → `/stuur-in/lesersbrief`
- Stuur in – terugvoer → `/stuur-in/terugvoer`
- Stuur in – shoutout → `/stuur-in/shoutout`
- Dien gebeurtenis in → `/gebeure/dien-in`

---

## Page Templates

rooi rose uses **6 core page templates**:

| Template | Route Pattern | Component | Example |
|:---------|:--------------|:----------|:--------|
| **Homepage** | `/` | `Home.tsx` | Magazine grid + hero slider |
| **Category Archive** | `/{category}` | `Category.tsx` | `/kos`, `/mode` |
| **Article Single** | `/artikel/:slug` | `Article.tsx` | `/artikel/heerlike-herfskos` |
| **Recipe Single** | `/resep/:slug` | `Recipe.tsx` (future) | `/resep/vis-en-skyfies` |
| **Competition Single** | `/wen/:slug` | `CompetitionSinglePage.tsx` | `/wen/wen-n-spa-naweek` |
| **Awards Hub** | `/rooiwarm-wenners` | `Category.tsx` | Competition winners showcase |

**Note**: Recipe template is planned for future implementation. Current prototype uses standard Article template for all post types.

---

## URL Slug Rules

All rooi rose URLs follow WordPress-compatible slug conventions:

### Slug Format
- **Lowercase only**: `kos`, `mode`, `skoonheid`
- **Afrikaans characters**: No special chars (ê, ë, etc. → e)
- **Spaces**: Use hyphens (`jou-lewe`, `rooiwarm-wenners`)
- **English exceptions**: `/recipes-in-english` (international audience)

### Special URLs
- `/lees` — Leestyd section (not `/ontspanning/lees`)
- `/rrradio` — RRRADIO section (not `/ontspanning/rrradio`)
- `/kontak-ons-2` — Contact page (WordPress legacy URL)

---

## WordPress Migration Notes

### Category Taxonomy Mapping

| Prototype Category | WordPress Category ID | Slug | Parent |
|:-------------------|:---------------------|:-----|:-------|
| Kos | TBD | `kos` | — |
| Mode | TBD | `mode` | — |
| Skoonheid | TBD | `skoonheid` | — |
| Gesondheid | TBD | `gesondheid` | — |
| Bekendes | TBD | `bekendes` | — |
| Leefstyl | TBD | `leefstyl` | — |
| Jou lewe | TBD | `jou-lewe` | — |
| Ontspanning | TBD | `ontspanning` | — |
| Wen | TBD | `wen` | — |
| Rooiwarm wenners | TBD | `rooiwarm-wenners` | — |

**Subcategories**: 44 subcategories will be created as child terms of their parent categories (e.g., `maklik-vinnig` → parent: `kos`).

### URL Rewrite Rules

WordPress `.htaccess` or Nginx rewrite rules required:

```nginx
# Legacy newspaper redirects
rewrite ^/nuus/?$ / permanent;
rewrite ^/sport/?$ / permanent;
rewrite ^/skole/?$ / permanent;
rewrite ^/sake/?$ / permanent;
rewrite ^/dink/?$ / permanent;
rewrite ^/skolerugby/?$ / permanent;
rewrite ^/doodsberrigte/?$ / permanent;
rewrite ^/news/?$ / permanent;
rewrite ^/schools/?$ / permanent;
rewrite ^/business/?$ / permanent;
rewrite ^/lifestyle/?$ /leefstyl permanent;
rewrite ^/opinion/?$ / permanent;
rewrite ^/schools-rugby/?$ / permanent;
rewrite ^/competitions/?$ /wen permanent;

# Competitions rename
rewrite ^/kompetisies/?$ /wen permanent;
rewrite ^/kompetisies/(.*)$ /wen/$1 permanent;
```

---

## Implementation Status (Phase 0)

| Task | Status | Completion |
|:-----|:-------|:-----------|
| Main navigation data | ✅ Complete | 2026-03-11 |
| Route configuration | ✅ Complete | 2026-03-11 |
| Legacy redirects | ✅ Complete | 2026-03-11 |
| Mock article data | ✅ Complete | 2026-03-11 |
| Mobile menu icons | ✅ Complete | 2026-03-11 |
| Sitemap updates | ✅ Complete | 2026-03-11 |
| SEO metadata | ✅ Complete | 2026-03-11 |
| RouteMap dev tool | ✅ Complete | 2026-03-11 |
| Breadcrumb navigation | ✅ Complete | Already working |
| **Subcategory routes** | ⏳ **Optional** | Not yet implemented |
| Mega menu component | ⏳ Optional | Not yet implemented |

**Production Ready**: ✅ **YES** — Core 10 categories fully functional with navigation, SEO, and mock content.

**Next Phase**: Subcategory implementation (44 routes) is optional enhancement — can be added post-launch or synced during WordPress migration.

---

## Related Documentation

- [Brand Guidelines](/guidelines/rooi-rose/brand-guidelines.md) — Brand identity, colors, typography
- [Navigation Data](/src/app/data/navigation.ts) — Navigation constants (MAIN_NAVIGATION, MOBILE_MENU_ITEMS, FOOTER_CATEGORIES)
- [Routes Configuration](/src/app/routes.tsx) — React Router route definitions
- [Category Mock Data](/src/app/data/categoryArticles.ts) — 17 sample articles for testing
- [Content Architecture Orchestrator](/prompts/rooi-rose-content-architecture-orchestrator.md) — Complete implementation plan
- [Category Component](/src/app/pages/Category.tsx) — Magazine category page template

---

## Quick Reference: Category Count Summary

| Metric | Count |
|:-------|:------|
| Main navigation items | 11 |
| Lifestyle categories | 8 |
| Total subcategories | 44 |
| Mobile menu items | 13 |
| Footer links | 25+ |
| SEO descriptions | 10 |
| Mock articles | 17 |
| Legacy redirects | 14 |
| Page templates | 6 |

---

**Last Updated**: 2026-03-11  
**Phase**: Phase 0 Implementation — Content Architecture Foundation  
**Status**: ✅ Production Ready (Core Categories)
