/**
 * Navigation data for Die Papier
 * Header and Footer menu structures
 *
 * @wordpress-patterns header, header-transparent, header-masthead, footer, footer-simple
 * @wordpress-parts parts/header.html, parts/footer.html
 * @see /guidelines/components/patterns/header/README.md
 * @see /guidelines/components/patterns/footer/README.md
 */

import pressCouncilLogo from "figma:asset/b65e04d9bca837fe59d564b9a5c81e06d132d3a8.png";
import wanIfraLogo from "figma:asset/f482683b284adea205ba8414607510526ef08307.png";
import fcjLogo from "figma:asset/b829544a17c90494ed9a73fa9b4a127647d9301f.png";

export const TOP_NAVIGATION = [
  { label: "Inhoudsopgawe", href: "/inhoudsopgawe" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
  { label: "Beleid", href: "/beleid" },
  { label: "Gebeure", href: "/gebeure" },
  { label: "Kontak", href: "/kontak" },
  { label: "Vrae", href: "/vrae" },
  { label: "Nuusbrief", href: "/nuusbrief-inteken" },
];

export const CATEGORY_NAVIGATION = [
  { label: "Tuis", href: "/" },
  { label: "Nuus", href: "/nuus" },
  { label: "Skole", href: "/skole" },
  { label: "Sport", href: "/sport" },
  { label: "Skolerugby", href: "/skolerugby" },
  { label: "Sake", href: "/sake" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Dink", href: "/dink" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/diepapier.za/about/", icon: "Facebook" },
  { label: "Instagram", href: "https://instagram.com/die.papier", icon: "Instagram" },
  { label: "X", href: "https://x.com/die_papier", icon: "XSocial" },
  { label: "YouTube", href: "https://www.youtube.com/@diepapier", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/diepapier/", icon: "Linkedin" },
  { label: "TikTok", href: "https://www.tiktok.com/@diepapier", icon: "TikTok" },
  { label: "Email", href: "mailto:lesers@diepapier.co.za", icon: "Mail" },
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
 */
export const HEADER_CATEGORY_BAR_LINKS = [
  { label: "Tuis", href: "/" },
  { label: "Nuus", href: "/nuus" },
  { label: "Sport", href: "/sport" },
  { label: "Dink", href: "/dink" },
  { label: "Sake", href: "/sake" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Gebeure", href: "/gebeure" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Doodsberrigte", href: "/doodsberrigte" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
];

export const FOOTER_LINK_COLUMNS = [
  {
    title: "Kategorieë",
    links: [
      { label: "Nuus", href: "/nuus" },
      { label: "Sport", href: "/sport" },
      { label: "Sake", href: "/sake" },
      { label: "Leefstyl", href: "/leefstyl" },
      { label: "Dink", href: "/dink" },
      { label: "Skole", href: "/skole" },
      { label: "Skolerugby", href: "/skolerugby" },
      { label: "Kompetisies", href: "/kompetisies" },
    ],
  },
  {
    title: "Inhoud",
    links: [
      { label: "E-uitgawes", href: "/e-uitgawes" },
      { label: "Gebeure", href: "/gebeure" },
      { label: "Multimedia", href: "/multimedia" },
      { label: "Doodsberrigte", href: "/doodsberrigte" },
      { label: "Nuusbrief-argief", href: "/nuusbrief-argief" },
      { label: "Stuur nuus in", href: "/stuur-in" },
    ],
  },
  {
    title: "Dienste",
    links: [
      { label: "Weer", href: "/weer" },
      { label: "Verkeer", href: "/verkeer" },
      { label: "Inteken", href: "/inteken" },
      { label: "Nuusbrief", href: "/nuusbrief-inteken" },
      { label: "My rekening", href: "/my-rekening" },
      { label: "Registreer", href: "/registreer" },
    ],
  },
  {
    title: "Die Papier",
    links: [
      { label: "Oor ons", href: "/oor-ons" },
      { label: "Ons span", href: "/oor-ons/redaksie" },
      { label: "Kontak ons", href: "/kontak" },
      { label: "Adverteer", href: "/adverteer" },
      { label: "Algemene vrae", href: "/vrae" },
      { label: "Inhoudsopgawe", href: "/inhoudsopgawe" },
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
    description: "Die Papier is 'n weeklikse nasionale koerant op die voorpunt van die week se nuus en die naweek se gebeure. Dit verskyn op Vrydae."
  },
  contact: {
    title: "Kontak",
    address: "Loft Office East (LOE4), Tweede verdieping, The Zone, Oxfordstraat 187, Rosebank, 2196",
    email: "lesers@diepapier.co.za"
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
    email: "mailto:lesers@diepapier.co.za"
  },
  copyright: `© ${new Date().getFullYear()} Die Papier. Alle regte voorbehou.`
};

/**
 * Mobile Menu — primary category grid.
 * Single source of truth — used by MobileMenu.tsx.
 * Icons are mapped separately inside the component.
 */
export const MOBILE_CATEGORY_LINKS = [
  { label: "Tuis", href: "/" },
  { label: "Nuus", href: "/nuus" },
  { label: "Sport", href: "/sport" },
  { label: "Skole", href: "/skole" },
  { label: "Sake", href: "/sake" },
  { label: "Leefstyl", href: "/leefstyl" },
  { label: "Dink", href: "/dink" },
  { label: "Gebeure", href: "/gebeure" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Doodsberrigte", href: "/doodsberrigte" },
  { label: "E-uitgawes", href: "/e-uitgawes" },
  { label: "Kompetisies", href: "/kompetisies" },
  { label: "Nuusbrief-argief", href: "/nuusbrief-argief" },
];

/**
 * Mobile Menu — secondary / utility links.
 * Single source of truth — used by MobileMenu.tsx.
 * Icons are mapped separately inside the component.
 */
export const MOBILE_SECONDARY_LINKS = [
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
  { name: "Doodsberrigte", path: "/doodsberrigte" },
  { name: "Multimedia", path: "/multimedia" },
  { name: "Gebeure", path: "/gebeure" },
  { name: "Nuusbrief-argief", path: "/nuusbrief-argief" },
  { name: "Inhoudsopgawe", path: "/inhoudsopgawe" },
];

export const SITEMAP_CATEGORY_PAGES = [
  { name: "Nuus", path: "/nuus" },
  { name: "Sport", path: "/sport" },
  { name: "Sake", path: "/sake" },
  { name: "Leefstyl", path: "/leefstyl" },
  { name: "Dink", path: "/dink" },
  { name: "Skole", path: "/skole" },
  { name: "Skolerugby", path: "/skolerugby" },
  { name: "Kompetisies", path: "/kompetisies" },
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