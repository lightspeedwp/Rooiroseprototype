/**
 * E-Editions data for Die Papier
 * Contains recent digital newspaper editions
 *
 * @wordpress-patterns page-e-editions, page-my-eeditions, page-subscribe-eedition, archive-eeditions
 * @wordpress-cards card-eedition-grid-4col
 * @wordpress-queries query-eeditions-latest
 * @wordpress-sidebar sidebar-eedition-promo
 * @wordpress-cpt dp_eedition
 * @see /guidelines/components/patterns/card/README.md
 */

import { EEdition } from '../types';
import type { EEditionRegion } from '../types';

// ── Issuu embed URL generation ──────────────────────────────
// Each region follows a predictable Issuu document naming pattern:
//   diepapier-{regionPrefix}_{DD}_{MM}_{YYYY}
// Publisher account: novusmedianewspapers

const ISSUU_PUBLISHER = 'novusmedianewspapers';

/** Maps region slug → Issuu document prefix */
const ISSUU_REGION_PREFIX: Record<string, string> = {
  'gauteng-vrystaat': 'diepapier-gauteng',
  'wes-kaap': 'diepapier-wc-cape',
  'oos-kaap': 'diepapier-ep-eastern',
  'kwazulu-natal': 'diepapier-kz-natal',
};

/**
 * Generate the Issuu embed URL for a specific edition + region.
 *
 * @param regionSlug - e.g. 'gauteng-vrystaat'
 * @param editionId  - e.g. 'uitgawe-2026-03-06' (contains YYYY-MM-DD)
 * @returns Full Issuu embed URL, or null if the inputs can't be parsed
 *
 * @example
 * getIssuuEmbedUrl('wes-kaap', 'uitgawe-2026-03-06')
 * // → 'https://e.issuu.com/embed.html?d=diepapier-wc-cape_06_03_2026&u=novusmedianewspapers'
 */
export function getIssuuEmbedUrl(regionSlug: string, editionId: string): string | null {
  const prefix = ISSUU_REGION_PREFIX[regionSlug];
  if (!prefix) return null;

  // Parse date from edition ID: "uitgawe-2026-03-06" → day=06, month=03, year=2026
  const dateMatch = editionId.match(/uitgawe-(\d{4})-(\d{2})-(\d{2})/);
  if (!dateMatch) return null;

  const [, year, month, day] = dateMatch;
  return `https://e.issuu.com/embed.html?d=${prefix}_${day}_${month}_${year}&u=${ISSUU_PUBLISHER}`;
}

/**
 * Regional variants (streke) shared across all editions.
 * In WooCommerce these map to a global "pa_streek" product attribute
 * on each variable e-edition product.
 *
 * NOTE: `pdfUrl` on each region is a static fallback (latest edition).
 * For per-edition URLs, use `getIssuuEmbedUrl(regionSlug, editionId)`.
 */
export const EDITION_REGIONS: EEditionRegion[] = [
  { slug: 'gauteng-vrystaat', label: 'Gauteng en Vrystaat', pdfUrl: 'https://e.issuu.com/embed.html?d=diepapier-gauteng_06_03_2026&u=novusmedianewspapers' },
  { slug: 'wes-kaap', label: 'Wes-Kaap', pdfUrl: 'https://e.issuu.com/embed.html?d=diepapier-wc-cape_06_03_2026&u=novusmedianewspapers' },
  { slug: 'oos-kaap', label: 'Oos-Kaap', pdfUrl: 'https://e.issuu.com/embed.html?d=diepapier-ep-eastern_06_03_2026&u=novusmedianewspapers' },
  { slug: 'kwazulu-natal', label: 'KwaZulu-Natal', pdfUrl: 'https://e.issuu.com/embed.html?d=diepapier-kz-natal_06_03_2026&u=novusmedianewspapers' },
];

export const LATEST_EDITIONS: EEdition[] = [
  // ─── 2026 ───
  {
    id: "uitgawe-2026-03-06",
    productId: 2100,
    title: "Die Papier - 06 Maart 2026",
    date: "06 Mrt 2026",
    coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Amptelike bekendstelling van Die Papier! Eksklusiewe onderhoude, ons visie vir die toekoms, en 'n spesiale bylae oor die geskiedenis van Afrikaanse joernalistiek.",
    metaTitle: "Bekendstelling Uitgawe - Die Papier",
    metaDescription: "Amptelike bekendstelling van Die Papier! Eksklusiewe onderhoude en 'n spesiale bylae oor die geskiedenis van Afrikaanse joernalistiek.",
    metaKeywords: "bekendstelling, joernalistiek, Die Papier, eerste uitgawe",
    editionNumber: 1,
    pageCount: 24,
    publicationDate: "2026-03-06"
  },
  {
    id: "uitgawe-2026-02-27",
    productId: 2099,
    title: "Die Papier - 27 Februarie 2026",
    date: "27 Feb 2026",
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Die laaste aftelling begin. Plaaslike munisipale begrotingsrede ontleed, en die jaarlikse Vrystaat-wynfees in fokus.",
    metaTitle: "Munisipale Begrotingsrede - Die Papier",
    metaDescription: "Plaaslike munisipale begrotingsrede ontleed en die jaarlikse Vrystaat-wynfees in fokus in hierdie uitgawe.",
    metaKeywords: "begrotingsrede, wynfees, Vrystaat, Die Papier"
  },
  {
    id: "uitgawe-2026-02-20",
    productId: 2098,
    title: "Die Papier - 20 Februarie 2026",
    date: "20 Feb 2026",
    coverImage: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Groot sportnaweek vooruit: Skolerugby seisoen skop af. Plus, 'n ondersoek na watertekorte in die streek.",
    metaTitle: "Skolerugby Seisoen Skop Af - Die Papier",
    metaDescription: "Groot sportnaweek vooruit: Skolerugby seisoen skop af. Plus, 'n ondersoek na watertekorte in die streek.",
    metaKeywords: "skolerugby, watertekorte, sport, Die Papier"
  },
  {
    id: "uitgawe-2026-02-13",
    productId: 2000,
    title: "Die Papier - 13 Februarie 2026",
    date: "13 Feb 2026",
    coverImage: "https://images.unsplash.com/photo-1552350718-03eafd9b774a?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Valentynsdag spesiale uitgawe: Liefdesverhale, romantiese restaurante gids, en plaaslike sport.",
    metaTitle: "Valentynsdag Spesiale Uitgawe - Die Papier",
    metaDescription: "Liefdesverhale, romantiese restaurante gids, en plaaslike sport in die Valentynsdag spesiale uitgawe van Die Papier.",
    metaKeywords: "Valentynsdag, liefdesverhale, romantiese restaurante, plaaslike sport, Die Papier"
  },
  {
    id: "uitgawe-2026-02-06",
    productId: 2050,
    title: "Die Papier - 06 Februarie 2026",
    date: "06 Feb 2026",
    coverImage: "https://images.unsplash.com/photo-1666281269793-da06484657e8?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Terug-na-skool spesiale uitgawe: Nuwe skoolhoofde, bou-projekte, en matriekulante se voornemens vir 2026.",
    metaTitle: "Terug-na-skool Spesiale Uitgawe - Die Papier",
    metaDescription: "Nuwe skoolhoofde, bou-projekte, en matriekulante se voornemens vir 2026 in die terug-na-skool spesiale uitgawe van Die Papier.",
    metaKeywords: "terug-na-skool, skoolhoofde, bou-projekte, matriekulante, Die Papier"
  },
  {
    id: "uitgawe-2026-01-30",
    productId: 2051,
    title: "Die Papier - 30 Januarie 2026",
    date: "30 Jan 2026",
    coverImage: "https://images.unsplash.com/photo-1604348489791-f95132c5d8c0?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Stadsraadsvergadering hoogtepunte, nuwe besigheidsopenings in die middestad, en die Vrystaat Cheetahs se seisoensvooruitsig.",
    metaTitle: "Stadsraadsvergadering Hoogtepunte - Die Papier",
    metaDescription: "Stadsraadsvergadering hoogtepunte, nuwe besigheidsopenings in die middestad, en die Vrystaat Cheetahs se seisoensvooruitsig in die uitgawe van Die Papier.",
    metaKeywords: "stadsraadsvergadering, besigheidsopenings, Vrystaat Cheetahs, Die Papier"
  },
  {
    id: "uitgawe-2026-01-23",
    productId: 2001,
    title: "Die Papier - 23 Januarie 2026",
    date: "23 Jan 2026",
    coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "In hierdie uitgawe: Munisipale begroting goedgekeur, Hoërskool atletiek rekords spat, en meer.",
    metaTitle: "Munisipale Begroting Goedgekeur - Die Papier",
    metaDescription: "Munisipale begroting goedgekeur, Hoërskool atletiek rekords spat, en meer in die uitgawe van Die Papier.",
    metaKeywords: "munisipale begroting, Hoërskool atletiek, Die Papier"
  },
  {
    id: "uitgawe-2026-01-16",
    productId: 2002,
    title: "Die Papier - 16 Januarie 2026",
    date: "16 Jan 2026",
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Terug skool toe uitgawe: Foto's van Graad 1's, Matriekuitslae analise, en plaaslike sport.",
    metaTitle: "Terug Skool Toe Uitgawe - Die Papier",
    metaDescription: "Foto's van Graad 1's, Matriekuitslae analise, en plaaslike sport in die terug skool toe uitgawe van Die Papier.",
    metaKeywords: "terug skool toe, Graad 1's, Matriekuitslae, plaaslike sport, Die Papier"
  },
  {
    id: "uitgawe-2026-01-09",
    productId: 2003,
    title: "Die Papier - 09 Januarie 2026",
    date: "09 Jan 2026",
    coverImage: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Plaaslike nuus, vakansie-verkeerverslag en vooruitsigte vir 2026.",
    metaTitle: "Plaaslike Nuus & Vooruitsigte - Die Papier",
    metaDescription: "Plaaslike nuus, vakansie-verkeerverslag en vooruitsigte vir 2026 in die uitgawe van Die Papier.",
    metaKeywords: "plaaslike nuus, vakansie verkeer, vooruitsigte, Die Papier"
  },
  // ─── 2025 ───
  {
    id: "uitgawe-2025-12-19",
    productId: 2004,
    title: "Die Papier - 19 Desember 2025",
    date: "19 Des 2025",
    coverImage: "https://images.unsplash.com/photo-1595759132205-09d6c11f7743?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Kersfees uitgawe: Feestelike resepte, Kersmark foto's, en boodskappe van die burgemeester.",
    metaTitle: "Kersfees Uitgawe - Die Papier",
    metaDescription: "Feestelike resepte, Kersmark foto's, en boodskappe van die burgemeester in die kersfees uitgawe van Die Papier.",
    metaKeywords: "kersfees, resepte, Kersmark, boodskappe, Die Papier"
  },
  {
    id: "uitgawe-2025-12-12",
    productId: 2005,
    title: "Die Papier - 12 Desember 2025",
    date: "12 Des 2025",
    coverImage: "https://images.unsplash.com/photo-1764191958943-cafb7a77d09c?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Versoenningsdag voorskou, Desember vakansieplanne, en die beste Kersgeskenke uit plaaslike winkels.",
    metaTitle: "Versoenningsdag Voorskou - Die Papier",
    metaDescription: "Versoenningsdag voorskou, Desember vakansieplanne, en die beste Kersgeskenke uit plaaslike winkels in die uitgawe van Die Papier.",
    metaKeywords: "versoenningsdag, vakansieplanne, Kersgeskenke, Die Papier"
  },
  {
    id: "uitgawe-2025-12-05",
    productId: 2006,
    title: "Die Papier - 05 Desember 2025",
    date: "05 Des 2025",
    coverImage: "https://images.unsplash.com/photo-1556816214-6d16c62fbbf6?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Matrieklaaste klok lui, padveiligsheidsberaad, en skool se afskeid aan geliefde onderwyser.",
    metaTitle: "Matrieklaaste Klok Lui - Die Papier",
    metaDescription: "Matrieklaaste klok lui, padveiligsheidsberaad, en skool se afskeid aan geliefde onderwyser in die uitgawe van Die Papier.",
    metaKeywords: "matrieklaaste, padveiligsheidsberaad, afskeid, Die Papier"
  },
  {
    id: "uitgawe-2025-11-28",
    productId: 2007,
    title: "Die Papier - 28 November 2025",
    date: "28 Nov 2025",
    coverImage: "https://images.unsplash.com/photo-1763854413165-1713bc5a7f4a?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Springbok-toets terugblik, plaaslike krieketseisoen begin, en munisipale dienslewering verslag.",
    metaTitle: "Springbok-toets Terugblik - Die Papier",
    metaDescription: "Springbok-toets terugblik, plaaslike krieketseisoen begin, en munisipale dienslewering verslag in die uitgawe van Die Papier.",
    metaKeywords: "Springbok-toets, krieketseisoen, dienslewering, Die Papier"
  },
  {
    id: "uitgawe-2025-11-21",
    productId: 2008,
    title: "Die Papier - 21 November 2025",
    date: "21 Nov 2025",
    coverImage: "https://images.unsplash.com/photo-1688320243376-69b68a8f656f?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Landbou spesiale uitgawe: Oes-vooruitsigte, boerderyinnovasies, en die impak van droogte op die Vrystaat.",
    metaTitle: "Landbou Spesiale Uitgawe - Die Papier",
    metaDescription: "Oes-vooruitsigte, boerderyinnovasies, en die impak van droogte op die Vrystaat in die landbou spesiale uitgawe van Die Papier.",
    metaKeywords: "landbou, oes-vooruitsigte, boerderyinnovasies, droogte, Die Papier"
  },
  {
    id: "uitgawe-2025-11-14",
    productId: 2009,
    title: "Die Papier - 14 November 2025",
    date: "14 Nov 2025",
    coverImage: "https://images.unsplash.com/photo-1700981026304-a17bf692d755?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Middestad herontwikkelingsplan, Plaaslike Veiligheidsforum verslag, en jong entrepreneurs in die kollig.",
    metaTitle: "Middestad Herontwikkelingsplan - Die Papier",
    metaDescription: "Middestad herontwikkelingsplan, Plaaslike Veiligheidsforum verslag, en jong entrepreneurs in die kollig in die uitgawe van Die Papier.",
    metaKeywords: "middestad, herontwikkelingsplan, gemeenskapsveiligheidsforum, entrepreneurs, Die Papier"
  },
  {
    id: "uitgawe-2025-11-07",
    productId: 2010,
    title: "Die Papier - 07 November 2025",
    date: "07 Nov 2025",
    coverImage: "https://images.unsplash.com/photo-1749989882242-77402fb6763e?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Eksamens kom: Studietips vir matrieks, universiteitsaansoeke, en beursgeleenthede.",
    metaTitle: "Eksamens Kom - Die Papier",
    metaDescription: "Studietips vir matrieks, universiteitsaansoeke, en beursgeleenthede in die uitgawe van Die Papier.",
    metaKeywords: "eksamens, studietips, universiteitsaansoeke, beursgeleenthede, Die Papier"
  },
  {
    id: "uitgawe-2025-10-31",
    productId: 2011,
    title: "Die Papier - 31 Oktober 2025",
    date: "31 Okt 2025",
    coverImage: "https://images.unsplash.com/photo-1769689461322-fa732e9df2ab?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Hervormingsdag spesiale, Gesondheidsdag vir almal hoogtepunte, en nagmarkgids vir die somer.",
    metaTitle: "Hervormingsdag Spesiale - Die Papier",
    metaDescription: "Hervormingsdag spesiale, Gesondheidsdag vir almal hoogtepunte, en nagmarkgids vir die somer in die uitgawe van Die Papier.",
    metaKeywords: "hervormingsdag, gemeenskapsgesondheidsdag, nagmarkgids, Die Papier"
  },
  {
    id: "uitgawe-2025-10-24",
    productId: 2012,
    title: "Die Papier - 24 Oktober 2025",
    date: "24 Okt 2025",
    coverImage: "https://images.unsplash.com/photo-1513331006937-db9db75ac1a7?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Vrystaat Kunstefees in volle gang, resensies van die topvertonings, en interviews met kunstenaars.",
    metaTitle: "Vrystaat Kunstefees - Die Papier",
    metaDescription: "Vrystaat Kunstefees in volle gang, resensies van die topvertonings, en interviews met kunstenaars in die uitgawe van Die Papier.",
    metaKeywords: "vrystaat kunstefees, topvertonings, interviews, kunstenaars, Die Papier"
  },
  {
    id: "uitgawe-2025-10-17",
    productId: 2013,
    title: "Die Papier - 17 Oktober 2025",
    date: "17 Okt 2025",
    coverImage: "https://images.unsplash.com/photo-1760742712753-ab5e448f6f05?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Munisipale verkiesings voorskou, kandidaatprofiele, en die pad vorentoe vir plaaslike regering.",
    metaTitle: "Munisipale Verkiesings Voorskou - Die Papier",
    metaDescription: "Munisipale verkiesings voorskou, kandidaatprofiele, en die pad vorentoe vir plaaslike regering in die uitgawe van Die Papier.",
    metaKeywords: "munisipale verkiesings, kandidaatprofiele, plaaslike regering, Die Papier"
  },
  {
    id: "uitgawe-2025-10-10",
    productId: 2014,
    title: "Die Papier - 10 Oktober 2025",
    date: "10 Okt 2025",
    coverImage: "https://images.unsplash.com/photo-1604348489791-f95132c5d8c0?auto=format&fit=crop&q=80&w=600",
    pdfUrl: "#",
    price: "R 35.00",
    priceValue: 35.00,
    regions: EDITION_REGIONS,
    description: "Krugerdag herdenking, skoletoernooi-uitslae, en die nuwe winkelsentrum se openingsdatum bevestig.",
    metaTitle: "Krugerdag Herdenking - Die Papier",
    metaDescription: "Krugerdag herdenking, skoletoernooi-uitslae, en die nuwe winkelsentrum se openingsdatum bevestig in die uitgawe van Die Papier.",
    metaKeywords: "krugerdag, skoletoernooi, winkelsentrum, Die Papier"
  },
];