/**
 * Navigation data for *rooi rose*
 * Header and Footer menu structures
 *
 * @wordpress-patterns header, header-transparent, header-masthead, footer, footer-simple
 * @wordpress-parts parts/header.html, parts/footer.html
 * @see /guidelines/components/patterns/header/README.md
 * @see /guidelines/components/patterns/footer/README.md
 */

import { CONTACT_EMAILS, PHYSICAL_ADDRESS, createMailtoLink } from './contactInfo';
import pressCouncilLogo from "figma:asset/b65e04d9bca837fe59d564b9a5c81e06d132d3a8.png";
import wanIfraLogo from "figma:asset/f482683b284adea205ba8414607510526ef08307.png";
import fcjLogo from "figma:asset/b829544a17c90494ed9a73fa9b4a127647d9301f.png";

/* ── rooi rose Magazine Navigation Structure ────────────────────────
 * Phase 0: Content Architecture Update (2026-03-11)
 * Updated from newspaper categories to lifestyle magazine categories
 * Categories: Kos, Mode, Skoonheid, Gesondheid, Bekendes, Leefstyl,
 *             Jou lewe, Ontspanning, Rooiwarm wenners, Wen
 * ──────────────────────────────────────────────────────────────────── */

export const TOP_NAVIGATION = [
  { label: "Inhoudsopgawe", href: "/inhoudsopgawe" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
  { label: "Beleid", href: "/beleid" },
  { label: "Kontak", href: "/kontak" },
  { label: "Vrae", href: "/vrae" },
  { label: "Nuusbrief", href: "/nuusbrief-inteken" },
];

/**
 * rooi rose Magazine Categories — Main Navigation
 * 8 editorial categories + Home + Competitions + Contact
 */
export const CATEGORY_NAVIGATION = [
  { label: "Tuis", href: "/" },
  { label: "Kos", href: "/kos" },
  { label: "Mode", href: "/mode" },
  { label: "Skoonheid", href: "/skoonheid" },
  { label: "Gesondheid", href: "/gesondheid" },
  { label: "Bekendes", href: "/bekendes" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Jou lewe", href: "/jou-lewe" },
  { label: "Ontspanning", href: "/ontspanning" },
  { label: "Wen", href: "/wen" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/rooirose.co.za", icon: "Facebook" },
  { label: "Instagram", href: "https://instagram.com/rooirose", icon: "Instagram" },
  { label: "X", href: "https://x.com/rooirose", icon: "XSocial" },
  { label: "YouTube", href: "https://www.youtube.com/@rooirose", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/rooirose", icon: "Linkedin" },
  { label: "TikTok", href: "https://www.tiktok.com/@rooirose", icon: "TikTok" },
  { label: "Email", href: createMailtoLink(CONTACT_EMAILS.editorial), icon: "Mail" },
];

// Maintain compatibility if other components import MAIN_NAVIGATION
export const MAIN_NAVIGATION = CATEGORY_NAVIGATION;

/**
 * Header top bar links (desktop only, black bar above logo).
 * Single source of truth — used by Header.tsx.
 */
export const HEADER_TOP_BAR_LINKS = [
  { label: "Ontwikkelaars", href: "/ontwikkelaar" },
  { label: "Oor ons", href: "/oor-ons" },
  { label: "Ons span", href: "/oor-ons/redaksie" },
  { label: "Beleid", href: "/beleid" },
  { label: "Kontak", href: "/kontak" },
  { label: "Adverteer", href: "/adverteer" },
  { label: "Algemene vrae", href: "/vrae" },
  { label: "Nuusbrief", href: "/nuusbrief-inteken" },
];

/**
 * Desktop category bar links (horizontal nav below logo).
 * Single source of truth — used by Header.tsx.
 * rooi rose Magazine: 12 items (8 editorial categories + Rooiwarm wenners + Wen + Shop + Kontak)
 * Updated: 2026-03-15 — Added Shop, Rooiwarm wenners, and Kontak to align with mega menu orchestrator
 */
export const HEADER_CATEGORY_BAR_LINKS = [
  { label: "Kos", href: "/kos" },
  { label: "Mode", href: "/mode" },
  { label: "Skoonheid", href: "/skoonheid" },
  { label: "Gesondheid", href: "/gesondheid" },
  { label: "Bekendes", href: "/bekendes" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Jou lewe", href: "/jou-lewe" },
  { label: "Ontspanning", href: "/ontspanning" },
  { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
  { label: "Wen", href: "/wen" },
  { label: "Shop", href: "/winkel" },
  { label: "Kontak", href: "/kontak" },
];

export const FOOTER_LINK_COLUMNS = [
  {
    title: "rooi rose Kategorieë",
    links: [
      { label: "Kos", href: "/kos" },
      { label: "Mode", href: "/mode" },
      { label: "Skoonheid", href: "/skoonheid" },
      { label: "Gesondheid", href: "/gesondheid" },
      { label: "Bekendes", href: "/bekendes" },
      { label: "Leefstyl", href: "/leefstyl" },
      { label: "Jou lewe", href: "/jou-lewe" },
      { label: "Ontspanning", href: "/ontspanning" },
    ],
  },
  {
    title: "Kompetisies & Dienste",
    links: [
      { label: "Wen", href: "/wen" },
      { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
      { label: "E-uitgawes", href: "/e-uitgawes" },
      { label: "Winkel", href: "/winkel" },
      { label: "Inteken", href: "/inteken" },
      { label: "Nuusbrief", href: "/nuusbrief-inteken" },
      { label: "My rekening", href: "/my-rekening" },
      { label: "Registreer", href: "/registreer" },
    ],
  },
  {
    title: "Oor rooi rose",
    links: [
      { label: "Oor ons", href: "/oor-ons" },
      { label: "Ons span", href: "/oor-ons/redaksie" },
      { label: "Kontak ons", href: "/kontak" },
      { label: "Adverteer", href: "/adverteer" },
      { label: "Stuur in", href: "/stuur-in" },
      { label: "Algemene vrae", href: "/vrae" },
      { label: "Gebeure", href: "/gebeure" },
    ],
  },
  {
    title: "Beleid & Inligting",
    links: [
      { label: "Beleid (oorsig)", href: "/beleid" },
      { label: "Privaatheidsbeleid", href: "/beleid/privaatheidsbeleid" },
      { label: "Terme en voorwaardes", href: "/beleid/terme-en-voorwaardes" },
      { label: "Koekiebeleid", href: "/beleid/koekiebeleid" },
      { label: "Gebruikersreëls", href: "/beleid/gebruikersreels" },
      { label: "Perskode", href: "/beleid/perskode" },
      { label: "Terugsendingsbeleid", href: "/beleid/terugsendingsbeleid" },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Inhoudsopgawe", href: "/inhoudsopgawe" },
  { label: "Beleid", href: "/beleid" },
  { label: "Privaatheidsbeleid", href: "/beleid/privaatheidsbeleid" },
  { label: "Terme en voorwaardes", href: "/beleid/terme-en-voorwaardes" },
];

export const FOOTER_CONTENT = {
  newsletter: {
    title: "Kry ons gratis nuusbrief",
    description: "Ontvang die jongste nuus elke Dinsdag en Vrydag in jou inkassie.",
    placeholder: "Jou e-posadres",
    buttonText: "Nuusbrief"
  },
  brand: {
    description: "*rooi rose* is 'n weeklikse nasionale tydskrif op die voorpunt van die week se nuus en die naweek se gebeure. Dit verskyn op Vrydae."
  },
  contact: {
    title: "Kontak",
    address: PHYSICAL_ADDRESS.full,
    email: CONTACT_EMAILS.letters
  },
  accreditations: {
    title: "Akkreditasies",
    items: [
      { name: "Press Council of South Africa", url: "https://presscouncil.org.za/", image: pressCouncilLogo },
      { name: "WAN-IFRA", url: "https://wan-ifra.org/", image: wanIfraLogo },
      { name: "Interactive Advertising Bureau South Africa", url: "https://iabsa.net/", image: "https://novanews.co.za/wp-content/uploads/2025/02/iab-logo.png" },
      { name: "Forum of Community Journalists", url: "https://fcjonline.co.za/", image: fcjLogo }
    ]
  },
  bottom: {
    publicationInfo: "'n Publikasie van Novus Media, 'n divisie van Novus Holdings."
  }
};

export const FOOTER_NAVIGATION = {
  social: {
    facebook: "https://www.facebook.com/diepapier.za/about/",
    x: "https://x.com/die_papier",
    instagram: "https://instagram.com/die.papier",
    youtube: "https://www.youtube.com/@diepapier",
    linkedin: "https://linkedin.com/company/diepapier/",
    tiktok: "https://www.tiktok.com/@diepapier",
    email: createMailtoLink(CONTACT_EMAILS.letters)
  },
  copyright: `© ${new Date().getFullYear()} *rooi rose*. Alle regte voorbehou.`
};

/**
 * Mobile Menu — primary category grid.
 * Single source of truth — used by MobileMenu.tsx.
 * Icons are mapped separately inside the component.
 * rooi rose Magazine: 13 items (Tuis + 8 categories + Wen + E-uitgawes + Rooiwarm wenners + Nuusbrief-argief)
 */
export const MOBILE_CATEGORY_LINKS = [
  { label: "Tuis", href: "/" },
  { label: "Kos", href: "/kos" },
  { label: "Mode", href: "/mode" },
  { label: "Skoonheid", href: "/skoonheid" },
  { label: "Gesondheid", href: "/gesondheid" },
  { label: "Bekendes", href: "/bekendes" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Jou lewe", href: "/jou-lewe" },
  { label: "Ontspanning", href: "/ontspanning" },
  { label: "Wen", href: "/wen" },
  { label: "Rooiwarm wenners", href: "/rooiwarm-wenners" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
  { label: "Nuusbrief-argief", href: "/nuusbrief-argief" },
];

/**
 * Mobile Menu — secondary / utility links.
 * Single source of truth — used by MobileMenu.tsx.
 * Icons are mapped separately inside the component.
 */
export const MOBILE_SECONDARY_LINKS = [
  { label: "Winkel", href: "/winkel" },
  { label: "Inteken", href: "/inteken" },
  { label: "Gebeure", href: "/gebeure" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Oor ons", href: "/oor-ons" },
  { label: "Ons span", href: "/oor-ons/redaksie" },
  { label: "Adverteer", href: "/adverteer" },
  { label: "Kontak", href: "/kontak" },
  { label: "Algemene vrae", href: "/vrae" },
  { label: "Stuur in", href: "/stuur-in" },
  { label: "Nuusbrief", href: "/nuusbrief-inteken" },
  { label: "Beleid", href: "/beleid" },
  { label: "Inhoudsopgawe", href: "/inhoudsopgawe" },
];

/**
 * Sitemap — Structured page listings.
 * Single source of truth for the Inhoudsopgawe page.
 */
export const SITEMAP_SUBMIT = [
  { name: "Stuur in (hub)", path: "/stuur-in" },
  { name: "Stuur in – storie", path: "/stuur-in/storie" },
  { name: "Stuur in – lesersbrief", path: "/stuur-in/lesersbrief" },
  { name: "Stuur in – terugvoer", path: "/stuur-in/terugvoer" },
  { name: "Stuur in – shoutout", path: "/stuur-in/shoutout" },
  { name: "Dien gebeurtenis in", path: "/gebeure/dien-in" },
];

export const SITEMAP_MAIN_PAGES = [
  { name: "Tuis", path: "/" },
  { name: "Oor ons", path: "/oor-ons" },
  { name: "Ons span / redaksie", path: "/oor-ons/redaksie" },
  { name: "Kontak ons", path: "/kontak" },
  { name: "Algemene vrae", path: "/vrae" },
  { name: "Soek", path: "/soek" },
  { name: "Weer", path: "/weer" },
  { name: "Verkeer", path: "/verkeer" },
  { name: "Multimedia", path: "/multimedia" },
  { name: "Gebeure", path: "/gebeure" },
  { name: "Nuusbrief-argief", path: "/nuusbrief-argief" },
  { name: "Inhoudsopgawe", path: "/inhoudsopgawe" },
];

export const SITEMAP_CATEGORY_PAGES = [
  /* rooi rose Magazine Categories — Phase 0 (2026-03-11) */
  { name: "Kos", path: "/kos" },
  { name: "Mode", path: "/mode" },
  { name: "Skoonheid", path: "/skoonheid" },
  { name: "Gesondheid", path: "/gesondheid" },
  { name: "Bekendes", path: "/bekendes" },
  { name: "Leefstyl", path: "/leefstyl" },
  { name: "Jou lewe", path: "/jou-lewe" },
  { name: "Ontspanning", path: "/ontspanning" },
  { name: "Wen", path: "/wen" },
  { name: "Rooiwarm wenners", path: "/rooiwarm-wenners" },
];

export const SITEMAP_EEDITION_PAGES = [
  { name: "E-uitgawes (winkel)", path: "/e-uitgawes" },
  { name: "My e-uitgawes / My biblioteek", path: "/my-e-uitgawes" },
];

export const SITEMAP_ADVERTISE_PAGES = [
  { name: "Adverteer (oorsig)", path: "/adverteer" },
  { name: "Geklassifiseerde advertensies", path: "/adverteer/geklassifiseerd" },
  { name: "Vertoonadvertensies", path: "/adverteer/vertoonadvertensies" },
  { name: "Pamflette", path: "/adverteer/pamflette" },
  { name: "Geborgde inhoud", path: "/adverteer/geborgde-inhoud" },
  { name: "Borgskappe", path: "/adverteer/borgskappe" },
  { name: "Bylaes", path: "/adverteer/bylaes" },
];

export const SITEMAP_SUBSCRIPTION_PAGES = [
  { name: "Inteken – oorsig", path: "/inteken" },
  { name: "Inteken – e-uitgawe", path: "/inteken/e-uitgawe" },
  { name: "Inteken – aflewering (druk)", path: "/inteken/aflewering" },
  { name: "Mandjie", path: "/mandjie" },
  { name: "Betaal", path: "/betaal" },
  { name: "Bestelling bevestiging", path: "/bestelling-bevestiging" },
];

export const SITEMAP_ACCOUNT_PAGES = [
  { name: "My rekening (teken in)", path: "/my-rekening" },
  { name: "Registreer", path: "/registreer" },
  { name: "Rekening aktivering", path: "/rekening-aktivering" },
];

export const SITEMAP_NEWSLETTER_PAGES = [
  { name: "Nuusbrief-inteken", path: "/nuusbrief-inteken" },
  { name: "Bestuur my nuusbriewe", path: "/bestuur-my-nuusbriewe" },
  { name: "Inskrywing bevestiging", path: "/nuusbrief-inteken-bevestiging" },
  { name: "Herbetrokkenheid", path: "/nuusbrief-herbetrokkenheid" },
  { name: "Uitskrywing bevestiging", path: "/nuusbrief-uitskryf-bevestiging" },
  { name: "Uitskrywing sukses", path: "/nuusbrief-uitskryf-sukses" },
];

export const SITEMAP_THANK_YOU_PAGES = [
  { name: "Dankie – advertensie-navraag", path: "/dankie-advertensie-navraag" },
  { name: "Dankie – kontak", path: "/dankie-vir-kontak" },
  { name: "Dankie – nuusbrief-inskrywing", path: "/dankie-vir-nuusbrief-inskrywing" },
  { name: "Dankie – registrasie", path: "/dankie-vir-registrasie" },
  { name: "Dankie – indiening", path: "/dankie-vir-jou-indiening" },
  { name: "Dankie – kompetisie", path: "/dankie-vir-kompetisie-inskrywing" },
];

export const SITEMAP_COMPETITION_PAGES = [
  { name: "Kompetisies (argief)", path: "/kompetisies" },
  { name: "Kompetisie terme en voorwaardes", path: "/kompetisie-terme-en-voorwaardes" },
];

export const SITEMAP_LEGAL_PAGES = [
  { name: "Beleid (oorsig)", path: "/beleid" },
  { name: "Privaatheidsbeleid", path: "/beleid/privaatheidsbeleid" },
  { name: "Terme en voorwaardes", path: "/beleid/terme-en-voorwaardes" },
  { name: "Koekiebeleid", path: "/beleid/koekiebeleid" },
  { name: "PAIA-handleiding", path: "/beleid/paia" },
  { name: "Algemene gebruikersreëls", path: "/beleid/gebruikersreels" },
  { name: "Advertensie-riglyne", path: "/beleid/advertensie-riglyne" },
  { name: "Perskode", path: "/beleid/perskode" },
  { name: "KI (AI)-beleid", path: "/beleid/ki-beleid" },
  { name: "Kommentaarbeleid", path: "/beleid/kommentaarbeleid" },
  { name: "Terugsendingsbeleid", path: "/beleid/terugsendingsbeleid" },
  { name: "Klagteprosedure", path: "/beleid/klagteprosedure" },
  { name: "Kompetisie terme en voorwaardes", path: "/kompetisie-terme-en-voorwaardes" },
];

/**
 * Developer Tools — internal dev portal navigation.
 * Single source of truth for the /ontwikkelaar pages.
 * NOTE: Only routes with defined page components are listed here.
 * Updated: 2026-02-25 — Added Launch Checklist, fixed Email Previews path
 */
export const SITEMAP_DEV_TOOLS = [
  { name: "Dev Hub", path: "/ontwikkelaar" },
  { name: "Ontwerpstelsel", path: "/ontwikkelaar/ontwerpstelsel" },
  { name: "Token-kartering", path: "/ontwikkelaar/token-kartering" },
  { name: "Komponentblaaier", path: "/ontwikkelaar/komponente" },
  { name: "Afdeling-style", path: "/ontwikkelaar/afdeling-style" },
  { name: "Roetekaart", path: "/ontwikkelaar/roetes" },
  { name: "Datastruktuur", path: "/ontwikkelaar/data" },
  { name: "Riglyne", path: "/ontwikkelaar/riglyne" },
  { name: "WordPress Migrasie", path: "/ontwikkelaar/wordpress" },
  { name: "E-pos Voorskou", path: "/ontwikkelaar/e-pos-voorskou" },
  { name: "Stelselkonfig", path: "/ontwikkelaar/stelselkonfig" },
  { name: "Inhoud", path: "/ontwikkelaar/inhoud" },
  { name: "Lansering Kontrolelys", path: "/ontwikkelaar/lansering" },
  { name: "Beelde-bateblaaier", path: "/ontwikkelaar/beelde" },
  { name: "Patroonblaaier", path: "/ontwikkelaar/patrone" },
  { name: "Blok-stylblaaier", path: "/ontwikkelaar/blok-styl" },
  { name: "Template-blaaier", path: "/ontwikkelaar/sjablone" },
  { name: "Template-deelblaaier", path: "/ontwikkelaar/sjablone-onderdeel" },
  { name: "Inc-lêerblaaier", path: "/ontwikkelaar/inc-map" },
  { name: "Ikoonblaaier", path: "/ontwikkelaar/ikone" },
];

export const SITEMAP_DEMO_PAGES = [
  { name: "Redaksionele Demo", path: "/editorial-demo" },
  { name: "Redaksionele Landing Page", path: "/editorial-demo/landing-page" },
];