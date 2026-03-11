/**
 * Competition data for Die Papier
 * Contains current and past competitions with SEO metadata
 *
 * @wordpress-patterns archive-competitions
 * @wordpress-cards card-competition-grid, card-competition-meta
 * @wordpress-queries query-competitions-active
 * @wordpress-cpt dp_competition (SCF fields: closing_date, prize_value, entry_count)
 * @see /guidelines/components/patterns/card/README.md
 */

export interface Competition {
  id: number;
  slug: string;
  title: string;
  description: string;
  prizeValue: string;
  sponsor: string;
  closingDate: string;
  imageUrl: string;
  category: string;
  status: 'active' | 'closed' | 'winner-announced';
  winner?: {
    name: string;
    location: string;
  };
  rules?: string[];
}

export const COMPETITIONS: Competition[] = [
  {
    id: 1,
    slug: "wen-makro-inkopiebeurt",
    title: "Wen 'n R10,000 Makro-inkopiebeurt",
    description: "Staan 'n kans om 'n R10,000 inkopiebeurt by Makro te wen! Skryf bloot in en beantwoord die maklike vraag.",
    prizeValue: "R10,000",
    sponsor: "Makro",
    closingDate: "28 Februarie 2026",
    imageUrl: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a",
    category: "Inkopies",
    status: "active",
    rules: [
      "Slegs een inskrywing per persoon word toegelaat.",
      "Die wenner sal deur middel van 'n gelukkige trekking aangewys word.",
      "Die prys kan nie vir kontant geruil word nie.",
      "Werknemers van Novus Media en Makro mag nie deelneem nie."
    ]
  },
  {
    id: 2,
    slug: "wen-springbok-kaartjies",
    title: "Wen kaartjies na die Springbok-toets",
    description: "Vier Springbok-kaartjies vir die toets teen Nieu-Seeland by Loftus Versfeld! Slegs vir Die Papier-lesers.",
    prizeValue: "R8,000",
    sponsor: "SuperSport",
    closingDate: "15 Maart 2026",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    category: "Sport",
    status: "active",
    rules: [
      "Inskrywings sluit op die vermelde datum.",
      "Vervoer na en van die stadion is nie ingesluit nie.",
      "Kaartjies is slegs geldig vir die spesifieke toetswedstryd.",
      "Die beoordelaars se besluit is finaal."
    ]
  },
  {
    id: 3,
    slug: "drakensberge-naweek-wegbreek",
    title: "Vakansie wegbreek vir 2 na die Drakensberge",
    description: "Wen 'n luukse naweek-wegbreek vir twee na die Drakensberge, ter waarde van R15,000.",
    prizeValue: "R15,000",
    sponsor: "Drakensberg Sun Resort",
    closingDate: "5 April 2026",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    category: "Reis",
    status: "active",
    rules: [
      "Prys sluit 3 nagte se verblyf en ontbyt in.",
      "Onderhewig aan beskikbaarheid van die oord.",
      "Nie geldig tydens skoolvakansies of openbare vakansiedae nie.",
      "Geldig vir 6 maande vanaf die datum van trekking."
    ]
  },
  {
    id: 4,
    slug: "fancourt-spa-dag",
    title: "Wen 'n luukse spa-behandeling vir twee",
    description: "Bederf jouself en 'n geliefde met 'n spa-dag ter waarde van R6,000 by The Spa at Fancourt.",
    prizeValue: "R6,000",
    sponsor: "Fancourt",
    closingDate: "10 Maart 2026",
    imageUrl: "https://images.unsplash.com/photo-1760647422523-f532034a49ce",
    category: "Leefstyl",
    status: "active",
    rules: [
      "Insluitend twee volledige spa-behandelings.",
      "Afsprake moet vooraf bespreek word.",
      "Prys is nie oordraagbaar nie.",
      "Geldig vir 12 maande."
    ]
  },
  {
    id: 5,
    slug: "samsung-galaxy-s26-wen",
    title: "Wen 'n Samsung Galaxy S26",
    description: "Staan 'n kans om 'n splinternuwe Samsung Galaxy S26 ter waarde van R25,999 te wen!",
    prizeValue: "R25,999",
    sponsor: "Samsung SA",
    closingDate: "28 Februarie 2026",
    imageUrl: "https://images.unsplash.com/photo-1761907174062-c8baf8b7edb3",
    category: "Tegnologie",
    status: "active",
    rules: [
      "Slegs Suid-Afrikaanse inwoners mag deelneem.",
      "Die wenner sal telefonies gekontak word.",
      "Kleur van die toestel is onderhewig aan beskikbaarheid.",
      "ID-bewys word vereis om die prys op te eis."
    ]
  },
  {
    id: 6,
    slug: "stellenbosch-wynproe",
    title: "Wen 'n wynproegeleentheid in Stellenbosch",
    description: "Geniet 'n eksklusiewe wynproetog vir vier persone deur die Stellenbosch-wynlande.",
    prizeValue: "R12,000",
    sponsor: "Wine Routes SA",
    closingDate: "20 Maart 2026",
    imageUrl: "https://images.unsplash.com/photo-1638012858969-fac36ad2ea32",
    category: "Vermaak",
    status: "active"
  },
  {
    id: 7,
    slug: "kampeer-toerusting-wen",
    title: "Wen 'n kampeer-toerustingpakket",
    description: "Wen 'n volledige kampeer-toerustingpakket ter waarde van R8,500 van Cape Union Mart.",
    prizeValue: "R8,500",
    sponsor: "Cape Union Mart",
    closingDate: "31 Maart 2026",
    imageUrl: "https://images.unsplash.com/photo-1663648681648-df9b0465ce4e",
    category: "Buitelug",
    status: "active"
  },
  {
    id: 8,
    slug: "checkers-geskenkbewys-wenner",
    title: "Wen 'n R5,000 Checkers-geskenkbewys",
    description: "Baie geluk aan ons wenner van die R5,000 Checkers-geskenkbewys!",
    prizeValue: "R5,000",
    sponsor: "Checkers",
    closingDate: "15 Januarie 2026",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    category: "Inkopies",
    status: "winner-announced",
    winner: {
      name: "Mariet du Plessis",
      location: "Pretoria"
    }
  },
  {
    id: 9,
    slug: "steve-hofmeyr-kaartjies-wenner",
    title: "Wen 2 konsertkaartjies: Steve Hofmeyr Live",
    description: "Ons het 'n wenner vir die Steve Hofmeyr konsertkaartjies!",
    prizeValue: "R1,200",
    sponsor: "Die Papier",
    closingDate: "1 Februarie 2026",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    category: "Vermaak",
    status: "winner-announced",
    winner: {
      name: "Pieter Erasmus",
      location: "Bloemfontein"
    }
  }
];

/**
 * Get all active competitions
 */
export function getActiveCompetitions(): Competition[] {
  return COMPETITIONS.filter(c => c.status === 'active');
}

/**
 * Get all closed or winner-announced competitions
 */
export function getClosedCompetitions(): Competition[] {
  return COMPETITIONS.filter(c => c.status === 'closed' || c.status === 'winner-announced');
}

/**
 * Get a single competition by its slug
 */
export function getCompetitionBySlug(slug: string): Competition | undefined {
  return COMPETITIONS.find(c => c.slug === slug);
}
