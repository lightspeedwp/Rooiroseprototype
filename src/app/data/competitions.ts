/**
 * Competition data for rooi rose
 * Contains current and past competitions with SEO metadata
 * INCLUDES PAID COMPETITIONS with entry fees
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
  entryFee?: number; // Optional entry fee for paid competitions
  isPaid?: boolean; // Flag to indicate paid competition
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
    description: "Vier Springbok-kaartjies vir die toets teen Nieu-Seeland by Loftus Versfeld! Slegs vir rooi rose-lesers.",
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
  // Paid Competitions
  {
    id: 10,
    slug: "wen-r50000-kontant-premium",
    title: "Wen R50,000 kontant! (Premium Inskrywing)",
    description: "Ons grootste kompetisie tot op hede! Skryf in vir net R25 en staan 'n kans om R50,000 kontant te wen. Beperkte inskrywings.",
    prizeValue: "R50,000",
    sponsor: "rooi rose",
    closingDate: "30 April 2026",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    category: "Kontant",
    status: "active",
    isPaid: true,
    entryFee: 25,
    rules: [
      "Inskrywingsfooi van R25 per inskrywing.",
      "Slegs Suid-Afrikaanse inwoners mag deelneem.",
      "Die wenner sal telefonies en per e-pos gekontak word.",
      "Die prys word elektronies oorgeplaas binne 14 werksdae.",
      "Maksimum 5 inskrywings per persoon.",
      "Werknemers van rooi rose en geaffilieerde maatskappye mag nie deelneem nie."
    ]
  },
  {
    id: 11,
    slug: "wen-royal-hotel-wegbreek",
    title: "Wen 'n Royal Hotel luukse wegbreek (Premium)",
    description: "3 nagte se 5-ster akkommodasie by die prestigieuse Twelve Apostles Hotel vir 2 persone. Ontbyt, spa-behandeling en wynproe ingesluit. Inskrywingsfooi: R35.",
    prizeValue: "R35,000",
    sponsor: "Twelve Apostles Hotel",
    closingDate: "20 April 2026",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "Reis",
    status: "active",
    isPaid: true,
    entryFee: 35,
    rules: [
      "Inskrywingsfooi van R35 per inskrywing.",
      "Onderhewig aan beskikbaarheid (uitgesluit Desember en Januarie).",
      "Prys sluit 3 nagte se akkommodasie, ontbyt, 1x spa-behandeling per persoon, en wynproe in.",
      "Geldig vir 12 maande vanaf die datum van trekking.",
      "Vervoer is nie ingesluit nie.",
      "Nie oordraagbaar of uitruilbaar vir kontant nie."
    ]
  },
  {
    id: 12,
    slug: "wen-bmw-vir-n-jaar",
    title: "Bestuur 'n BMW vir 'n jaar! (Premium Inskrywing)",
    description: "Wen die gebruik van 'n splinternuwe BMW 3-Reeks vir 'n volle jaar, insluitende versekering en instandhouding. Totale waarde: R120,000. Inskrywingsfooi: R50.",
    prizeValue: "R120,000",
    sponsor: "BMW SA",
    closingDate: "15 Mei 2026",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    category: "Motors",
    status: "active",
    isPaid: true,
    entryFee: 50,
    rules: [
      "Inskrywingsfooi van R50 per inskrywing.",
      "Slegs Suid-Afrikaanse inwoners met 'n geldige bestuurslisensie mag deelneem.",
      "Die wenner moet 25 jaar of ouer wees.",
      "Prys sluit 12 maande se gebruik, volledige versekering, en alle instandhouding in.",
      "Brandstof is nie ingesluit nie.",
      "Die motor moet by 'n BMW-handelaar in Kaapstad, Johannesburg of Durban opgetel word.",
      "Die wenner moet 'n skoon kredietrekord hê."
    ]
  },
  // Past Competitions
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
    sponsor: "rooi rose",
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
 * Get all free competitions (no entry fee)
 */
export function getFreeCompetitions(): Competition[] {
  return COMPETITIONS.filter(c => c.status === 'active' && !c.isPaid);
}

/**
 * Get all paid competitions (with entry fee)
 */
export function getPaidCompetitions(): Competition[] {
  return COMPETITIONS.filter(c => c.status === 'active' && c.isPaid);
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
