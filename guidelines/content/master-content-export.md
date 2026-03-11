# Master Content Export

**Last updated**: 2026-03-02
**Version**: 1.0

This document contains the exported content for all static pages and templates of *Die Papier*.
Use this as the source of truth for migrating content to WordPress Pages.

> **Note**: Dynamic content (Articles, Events, etc.) should be imported via the JSON data files. This document covers the "hardcoded" page structures.

---

## 1. Tuis (Home)
**Route**: `/`
**Template**: `template-home.php`

### Hero Section
*   **Featured Layout**: 1 Main Story (Left) + 4 Top Stories (Right List).
*   **Sidebar**: "Die Papier Gids" (Ads), Weather Widget, "Skryf in" CTA.

### Sections
1.  **Nuus**: 3-column grid of latest news.
2.  **Sport**: Hero article + side list.
3.  **Newsletter CTA**: "Kry ons gratis nuusbrief".
4.  **Opinie & Analise**: 2-column grid.
5.  **Multimedia**: Video carousel.

---

## 2. Oor ons (About)
**Route**: `/oor-ons`
**Template**: `template-about.php`

### Content
**H1**: Verken Die Papier
**Intro**: *Die Papier* is meer as net 'n koerant. Dit is 'n platform vir gesprek, debat en ingeligte leserskap.

**Mission Statement**:
Ons streef daarna om onafhanklike, geloofwaardige en relevante nuus aan die Afrikaanse gemeenskap te bring.

**Novus Media Info**:
'n Publikasie van Novus Media, 'n divisie van Novus Holdings. Susterpublikasies sluit in *novanews.co.za*, *rooi rose*, *Soccer Laduma*, en *Kick Off*.

### FAQs (About)
*   **Q:** Wat is Die Papier?
    *   **A:** 'n Onafhanklike Afrikaanse koerant.
*   **Q:** Waar kan ek die koerant koop?
    *   **A:** By uitgesoekte handelaars en digitaal as 'n e-uitgawe.

---

## 3. Kontak ons (Contact)
**Route**: `/kontak`
**Template**: `template-contact.php`

### Details
*   **Address**: Loft Office East (LOE4), Tweede verdieping, The Zone, Oxfordstraat 187, Rosebank, 2196.
*   **Email**: lesers@diepapier.co.za
*   **Phone (Subs)**: 087 353 1291
*   **Phone (Ads)**: +27 51 404 7600

### Form Fields
*   Naam
*   E-posadres
*   Onderwerp (Algemeen, Intekening, Adverteer, Nuuswenk)
*   Boodskap

---

## 4. Adverteer (Advertise)
**Route**: `/adverteer`
**Template**: `template-advertise.php`

### Hero
**H1**: Versterk jou handelsmerk met *Die Papier*
**Sub**: Wil jy jou handelsmerk uitbrei? By Die Papier bied ons dinamiese advertensie-oplossings.

### Content
*   **Why Us?**: Reach a dedicated Afrikaans audience. High engagement rates.
*   **Options**:
    *   Print Ads (Koerant)
    *   Digital Ads (Webwerf banners)
    *   Newsletter Sponsorships
    *   Sponsored Content (Advertorials)

### Sub-pages
*   `/adverteer/geklassifiseerd`
*   `/adverteer/vertoonadvertensies`
*   `/adverteer/pamflette`

---

## 5. E-Uitgawes (E-Editions)
**Route**: `/e-uitgawes`
**Template**: `template-e-editions.php`

### Content
**H1**: E-uitgawes
**Intro**: Koop individuele uitgawes vir R35 elk — 'n eenmalige aankoop, geen intekening nodig nie.

**Sidebar**:
*   "Wil jy elke week lees?" - Link to Subscription page.
*   Search Archive.

### FAQs (E-Editions)
*   **Q:** Hoe werk 'n e-uitgawe?
    *   **A:** Dit is 'n digitale replika van die gedrukte koerant wat jy op jou skerm kan blaai.
*   **Q:** Kan ek dit aflaai?
    *   **A:** Nee, dit word in 'n veilige webleser vertoon.

---

## 6. Kompetisies
**Route**: `/kompetisies`
**Template**: `template-competitions.php`

### Content
**H1**: Kompetisies
**Intro**: Wen groot met *Die Papier*! Sien alle aktiewe kompetisies hieronder.

### FAQs (Competitions)
*   **Q:** Hoe weet ek of ek gewen het?
    *   **A:** Wenners word telefonies of per e-pos gekontak.
*   **Q:** Hoeveel keer mag ek inskryf?
    *   **A:** Slegs een keer per persoon, tensy anders vermeld.

---

## 7. Inteken (Subscribe)
**Route**: `/inteken`
**Template**: `template-subscribe.php`

### Options
1.  **E-uitgawe**:
    *   R140 (1 maand / 4 uitgawes)
    *   R390 (3 maande / 12 uitgawes)
    *   R1400 (12 maande / 50 uitgawes)
2.  **Huisaflewering**:
    *   Kontak On The Dot.

---

## 8. FAQ Master List

Consolidated FAQs from all sections.

| Section | Question | Answer |
| :--- | :--- | :--- |
| **Algemeen** | Wat kos die koerant? | R35.00 (BTW ingesluit) op straat en digitaal. |
| **Algemeen** | Wanneer verskyn die koerant? | Elke Vrydagoggend. |
| **Inteken** | Hoe kanselleer ek? | Stuur 'n e-pos aan diepapierintekening@onthedot.co.za. |
| **Nuusbrief** | Is die nuusbrief gratis? | Ja, heeltemal gratis. |
| **Doodsberrigte** | Wat kos 'n plasing? | Vanaf R350 vir 'n standaard berig. |
| **Tegniese Hulp** | Ek kan nie aanmeld nie. | Gebruik die "Wagwoord vergeet" skakel op die aanmeldbladsy. |

---

## 9. Legal Pages

Content for these pages is standard legal text. Refer to the existing React components for the full prose.

*   **Privaatheidsbeleid**: Standard POPIA compliance text.
*   **Terme en Voorwaardes**: Standard website usage terms.
*   **Koekiebeleid**: Cookie consent details.
*   **PAIA-handleiding**: Access to information manual.

---

## 10. System Pages (Templates)

Content for system-generated pages that require translation.

### 404 (Not Found)
**Route**: `/404`
**Template**: `404.html`
**H1**: Bladsy nie gevind nie
**Text**: Oeps! Dit lyk asof die bladsy wat jy soek nie bestaan nie.
**CTA**: "Gaan terug Tuis" (Button)

### Search Results (Geen resultate)
**Route**: `/?s=xyz`
**Template**: `search.html` (No Results block)
**H1**: Geen resultate gevind nie
**Text**: Ons kon niks vind wat pas by jou soekterm nie. Probeer asseblief 'n ander sleutelwoord.