---
title: "Tuisblad"
slug: "home"
template: "page-home"
status: "ready"
---

# Home Page Content

## Hero Section
> **🛠 WP Implementation:**
> - **Block:** `dp/hero-section` (Custom Block/Pattern)
> - **Components:** 
>   - **Main Article:** Latest Sticky Post or Featured Category
>   - **Sidebar:** `dp/breaking-news-ticker` (Custom Block)
>   - **Load More Button:** AJAX functionality or `core/query-pagination-next`

*   **Sidebar Title:** "Nuusflitse"
*   **Load More Button:** "Laai meer nuus"

## Feature Grid (Main News)
> **🛠 WP Implementation:**
> - **Block:** `core/query-loop`
> - **Pattern:** `dp/news-grid-layout`
> - **Filters:** Excludes Hero Post, includes latest articles.

*   **Title:** "Top stories"
*   **View All Link:** "Sien alles"

## Right Sidebar Widgets
> **🛠 WP Implementation:**
> - **Location:** `dp/sidebar-area` (Template Part or Column)
> - **Blocks:** Stacked custom blocks

### 1. E-Edition Promo
> **Block:** `dp/promo-box`
*   **Title:** "Nuutste e-uitgawe"
*   **Subtitle:** "R35 per uitgawe — alle inhoud van die drukkoerant"
*   **Button:** "Koop e-uitgawe"
*   **Image:** 
    *   **Source:** `https://images.unsplash.com/photo-1722096314740-53439a68d9ca`
    *   **Alt Text:** "Mockup van 'n Die Papier koerantvoorblad"
    *   **Title:** "Die Papier E-Uitgawe Voorblad"
    *   **Original Filename:** "die-papier-e-uitgawe-voorblad.jpg"
    *   **Description:** "Digitale voorstelling van die jongste Die Papier koerantuitgawe."
    *   **SEO Meta:** "e-uitgawe, koerant, voorblad, nuus, digitaal"

### 2. Poll Widget
> **Block:** `dp/poll-widget`
*   **Title:** "Leserspeiling"
*   **Button Vote:** "Stem nou"
*   **Button Voted:** "Gestem"
*   **Error Message:** "Kies asseblief 'n opsie"
*   **Success Title:** "Dankie vir jou stem!"
*   **Success Desc:** "Jou antwoord is aangeteken."

### 3. Competitions Widget
> **Block:** `dp/competitions-widget`
*   **Badge:** "LESERSKOMPETISIE"
*   **Action Link:** "Sien alle kompetisies"
*   **Closing Label:** "Sluit" (Prefix)
*   **Button:** "Neem nou deel!"

### 4. Subscription Promo (Delivery)
> **Block:** `dp/promo-box`
*   **Title:** "Huisaflewering"
*   **Description:** "Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand."
*   **Button:** "Teken nou in"

## Archive Section (Bottom)
> **🛠 WP Implementation:**
> - **Block:** `dp/archive-browser` (Custom Block or Pattern)
> - **Functionality:** Filter by Year/Month

*   **Heading:** "Argief toegang"
*   **Subheading:** "Deursoek ons geskiedenis"
*   **Description:** "Kry toegang tot meer as 20 jaar se koerante, artikels en stories. Ons digitale argief bevat duisende artikels wat jy kan deursoek en lees."
*   **Primary Button:** "Deursoek argief"
*   **Secondary Button:** "E-uitgawes"
*   **Card Hover Action:** "Klik om te bekyk"

### Featured Archive Months (Data Sample)
1.  **Desember 2025**
    *   **Highlight:** "30 uitgawes beskikbaar"
    *   **Image:** 
        *   **Source:** `https://images.unsplash.com/photo-1585829365295-ab7cd400c167`
        *   **Alt Text:** "Argiefbeeld vir Desember 2025"
        *   **Title:** "Desember 2025 Argief"
        *   **Original Filename:** "argief-desember-2025.jpg"
        *   **Description:** "Versameling van koerante uit Desember 2025."
        *   **SEO Meta:** "argief, desember 2025, nuus, geskiedenis"
2.  **November 2025**
    *   **Highlight:** "28 uitgawes beskikbaar"
    *   **Image:** 
        *   **Source:** `https://images.unsplash.com/photo-1504711434969-e33886168f5c`
        *   **Alt Text:** "Argiefbeeld vir November 2025"
        *   **Title:** "November 2025 Argief"
        *   **Original Filename:** "argief-november-2025.jpg"
        *   **Description:** "Versameling van koerante uit November 2025."
        *   **SEO Meta:** "argief, november 2025, nuus, geskiedenis"
3.  **Oktober 2025**
    *   **Highlight:** "30 uitgawes beskikbaar"
    *   **Image:** 
        *   **Source:** `https://images.unsplash.com/photo-1495020689067-958852a7765e`
        *   **Alt Text:** "Argiefbeeld vir Oktober 2025"
        *   **Title:** "Oktober 2025 Argief"
        *   **Original Filename:** "argief-oktober-2025.jpg"
        *   **Description:** "Versameling van koerante uit Oktober 2025."
        *   **SEO Meta:** "argief, oktober 2025, nuus, geskiedenis"

## SEO Settings
> **🛠 WP Implementation:**
> - **Plugin:** Yoast SEO or RankMath

*   **Description:** "Die Papier - Jou betroubare bron vir die jongste Afrikaanse nuus oor plaaslike en nasionale gebeure, sport, sake, lewenstyl, opinie en meer."
*   **Keywords:** "nuus, afrikaans, suid-afrika, sport, sake, lewenstyl, opinie, netnuus, skole, e-uitgawes, die papier"
