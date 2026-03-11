/**
 * Centralized Route-Level SEO Configuration
 * Maps routes/pages to their meta tag data for Die Papier.
 * Used by the <SEO> component across all pages.
 *
 * NOTE: "Die Papier" is NOT italicised in SEO meta (exception per Rule 13).
 */

export interface RouteSeoData {
  title: string;
  description: string;
  keywords: string;
  type?: 'website' | 'article';
  /** Breadcrumb trail for BreadcrumbList JSON-LD. Each item is { name, path }. Tuisblad is prepended automatically. */
  breadcrumbs?: Array<{ name: string; path: string }>;
}

/**
 * SEO data for all static/informational pages.
 * Dynamic pages (articles, single events, etc.) generate their own SEO at render time.
 */
export const ROUTE_SEO: Record<string, RouteSeoData> = {
  // ── Home ───────────────────────────────────────────────────────
  '/': {
    title: 'Die Papier - Afrikaanse Nuusblad',
    description: 'Die Papier - Jou betroubare bron vir die jongste Afrikaanse nuus oor plaaslike en nasionale gebeure, sport, sake, lewenstyl, opinie en meer.',
    keywords: 'nuus, afrikaans, suid-afrika, sport, sake, lewenstyl, opinie, e-uitgawes, plaaslik',
  },

  // ── Categories ─────────────────────────────────────────────────
  '/nuus': {
    title: 'Nuus',
    description: 'Die jongste plaaslike en nasionale nuusberigte op Die Papier. Bly op hoogte van gebeure, politiek, misdaad en meer.',
    keywords: 'nuus, plaaslik, nasionaal, aktueel, politiek, misdaad, suid-afrika',
  },
  '/sport': {
    title: 'Sport',
    description: 'Sportnuus, uitslae en ontledings op Die Papier. Rugby, krieket, sokker, atletiek en meer.',
    keywords: 'sport, rugby, krieket, sokker, atletiek, uitslae, suid-afrika',
  },
  '/skole': {
    title: 'Skole',
    description: 'Skooluusnuus en prestasies op Die Papier. Akademiese uitslae, kultuur, sport en meer uit ons skole.',
    keywords: 'skole, onderwys, matriek, prestasies, skolenuus, akademie',
  },
  '/sake': {
    title: 'Sake',
    description: 'Sakenews, ekonomiese ontledings en markverslae op Die Papier. Plaaslike en nasionale besigheidsnuus.',
    keywords: 'sake, besigheid, ekonomie, markte, landbou, geldsake',
  },
  '/leefstyl': {
    title: 'Lewenstyl',
    description: 'Lewenstyl nuus en artikels op Die Papier. Vermaak, kos, reis, kuns, kultuur en meer.',
    keywords: 'lewenstyl, vermaak, kos, resepte, reis, kuns, kultuur',
  },
  '/dink': {
    title: 'Dink',
    description: 'Menings, rubrieke en kommentaar op Die Papier. Denkstukke oor aktuele onderwerpe.',
    keywords: 'opinie, rubrieke, menings, kommentaar, denkstukke, profiele',
  },
  '/skolerugby': {
    title: 'Skole rugby',
    description: 'Skolerugby nuus, uitslae en verslagdoening op Die Papier. Cravenweek, interskole en meer.',
    keywords: 'skolerugby, rugby, skolesport, cravenweek, interskole',
  },

  // ── Informational Pages ────────────────────────────────────────
  '/oor-ons': {
    title: 'Oor ons',
    description: 'Leer meer oor Die Papier - ons geskiedenis, missie en die span agter jou betroubare Afrikaanse nuusbron.',
    keywords: 'oor ons, die papier, geskiedenis, missie, afrikaans, koerant',
  },
  '/oor-ons/redaksie': {
    title: 'Ons span',
    description: 'Ontmoet die redaksionele span en verslaggewers van Die Papier.',
    keywords: 'redaksie, verslaggewers, span, joernaliste, die papier',
  },
  '/kontak': {
    title: 'Kontak ons',
    description: 'Kontak Die Papier - ons adres, telefoonnommers, e-posadresse en kontakvorm.',
    keywords: 'kontak, adres, telefoon, e-pos, navrae, die papier',
  },
  '/adverteer': {
    title: 'Adverteer',
    description: 'Adverteer in Die Papier - bereik duisende lesers met geklassifiseerde, vertoon-, digitale en gedrukte advertensies.',
    keywords: 'adverteer, advertensies, geklassifiseerd, vertoon, tariewe, media',
  },
  '/adverteer/geklassifiseerd': {
    title: 'Geklassifiseerde advertensies',
    description: 'Plaas geklassifiseerde advertensies in Die Papier. Bereik duisende lesers met u geklassifiseerde.',
    keywords: 'geklassifiseerd, advertensies, koop, verkoop, te huur',
  },
  '/adverteer/vertoonadvertensies': {
    title: 'Vertoonadvertensies',
    description: 'Vertoonadvertensie-opsies in Die Papier. Druk- en digitale formate beskikbaar.',
    keywords: 'vertoonadvertensies, drukadvertensies, digitaal, formaat, tariewe',
  },
  '/adverteer/pamflette': {
    title: 'Pamflette',
    description: 'Versprei u pamflette saam met Die Papier. Bereik huishoudings direk.',
    keywords: 'pamflette, verspreiding, huishoudings, drukwerk, bemarking',
  },
  '/adverteer/geborgde-inhoud': {
    title: 'Geborgde inhoud',
    description: 'Geborgde inhoud en inheemse advertering op Die Papier. Vertel u verhaal aan ons lesers.',
    keywords: 'geborgde inhoud, inheemse advertering, borgskappe, inhoud, bemarking',
  },
  '/adverteer/borgskappe': {
    title: 'Borgskappe',
    description: 'Borgskapsmoontlikhede by Die Papier. Assosieer u handelsmerk met betroubare nuus.',
    keywords: 'borgskappe, handelsmerk, sponsoreer, bemarking, mediaborg',
  },
  '/adverteer/bylaes': {
    title: 'Bylaes',
    description: 'Bylaes en spesiale uitgawes in Die Papier. Adverteer in ons tematiese aanvullings.',
    keywords: 'bylaes, spesiale uitgawes, aanvullings, temas, adverteer',
  },

  // ── Policies ───────────────────────────────────────────────────
  '/beleid': {
    title: 'Beleid',
    description: 'Alle beleid en regskennis van Die Papier - privaatheid, terme, koekies, PAIA en meer.',
    keywords: 'beleid, privaatheid, terme, koekies, regskennis, paia',
  },
  '/beleid/privaatheidsbeleid': {
    title: 'Privaatheidsbeleid',
    description: 'Die Papier se privaatheidsbeleid - hoe ons u persoonlike inligting hanteer en beskerm.',
    keywords: 'privaatheid, persoonlike inligting, data, beskerming, popia',
  },
  '/beleid/koekiebeleid': {
    title: 'Koekiebeleid',
    description: 'Die Papier se koekiebeleid - hoe ons koekies gebruik om u ervaring te verbeter.',
    keywords: 'koekies, cookies, webwerf, privaatheid, voorkeure',
  },
  '/beleid/terme-en-voorwaardes': {
    title: 'Terme en voorwaardes',
    description: 'Die terme en voorwaardes vir die gebruik van Die Papier se webwerf en dienste.',
    keywords: 'terme, voorwaardes, gebruik, webwerf, regskennis',
  },
  '/beleid/paia': {
    title: 'PAIA-handleiding',
    description: 'Die Papier se PAIA handleiding - Bevordering van Toegang tot Inligting Wet.',
    keywords: 'paia, toegang, inligting, wet, handleiding',
  },
  '/beleid/gebruikersreels': {
    title: 'Gebruikersreëls',
    description: 'Gebruikersreëls vir Die Papier se webwerf en digitale platforms.',
    keywords: 'gebruikersreëls, gedragskode, webwerf, reels, gemeenskap',
  },
  '/beleid/advertensie-riglyne': {
    title: 'Advertensie-riglyne',
    description: 'Riglyne vir advertensies op Die Papier - standaarde, formate en spesifikasies.',
    keywords: 'advertensie, riglyne, standaarde, formate, spesifikasies',
  },
  '/beleid/perskode': {
    title: 'Perskode',
    description: 'Die Papier onderskryf die Suid-Afrikaanse Perskode. Lees ons verbintenis tot etiese joernalistiek.',
    keywords: 'perskode, etiek, joernalistiek, standaarde, persraad',
  },
  '/beleid/ki-beleid': {
    title: 'KI (AI) beleid',
    description: 'Die Papier se kunsmatige intelligensie (KI) beleid - hoe ons KI verantwoordelik gebruik.',
    keywords: 'ki, ai, kunsmatige intelligensie, beleid, tegnologie',
  },
  '/beleid/kommentaarbeleid': {
    title: 'Kommentaarbeleid',
    description: 'Die Papier se kommentaarbeleid - riglyne vir deelname aan besprekings op ons platform.',
    keywords: 'kommentaar, beleid, besprekings, moderering, gemeenskap',
  },
  '/beleid/terugsendingsbeleid': {
    title: 'Terugsendingsbeleid',
    description: 'Die Papier se terugsendingsbeleid vir aankope en inskrywings.',
    keywords: 'terugsending, terugbetaling, beleid, aankope, inskrywings',
  },
  '/beleid/klagteprosedure': {
    title: 'Klagteprosedure',
    description: 'Hoe om \'n klagte by Die Papier in te dien oor redaksionele inhoud of dienste.',
    keywords: 'klagte, prosedure, ombudsman, redaksioneel, dienste',
  },

  // ── User Account & Commerce ────────────────────────────────────
  '/my-rekening': {
    title: 'My rekening',
    description: 'Bestuur u Die Papier-rekening - inskrywings, nuusbriewe, e-uitgawes en meer.',
    keywords: 'rekening, profiel, inskrywings, nuusbriewe, bestuur',
  },
  '/registreer': {
    title: 'Registreer',
    description: 'Registreer vir \'n gratis Die Papier-rekening. Kry toegang tot eksklusiewe inhoud en e-uitgawes.',
    keywords: 'registreer, inskryf, rekening, gratis, eksklusief',
  },
  '/mandjie': {
    title: 'Mandjie',
    description: 'U inkopiemandjie by Die Papier.',
    keywords: 'mandjie, inkopies, e-uitgawes, betaal',
  },
  '/betaal': {
    title: 'Betaal',
    description: 'Voltooi u aankoop by Die Papier.',
    keywords: 'betaal, aankoop, betaling, afhandel',
  },
  '/bestelling-bevestiging': {
    title: 'Bestelling bevestiging',
    description: 'U bestelling by Die Papier is bevestig.',
    keywords: 'bestelling, bevestiging, aankoop, dankie',
  },

  // ── E-Editions ─────────────────────────────────────────────────
  '/e-uitgawes': {
    title: 'E-uitgawes',
    description: 'Blaai deur Die Papier se e-uitgawes - die volledige koerant in digitale formaat.',
    keywords: 'e-uitgawes, digitaal, koerant, lees, argief',
  },
  '/my-e-uitgawes': {
    title: 'My e-uitgawes',
    description: 'Bestuur en lees u gekoopte e-uitgawes van Die Papier.',
    keywords: 'my e-uitgawes, biblioteek, digitaal, lees',
  },
  '/inteken': {
    title: 'Inteken',
    description: 'Teken in op Die Papier - kies tussen e-uitgawe of afleweringsinskrywings.',
    keywords: 'inteken, inskryf, e-uitgawe, aflewering, prys',
  },
  '/inteken/e-uitgawe': {
    title: 'Inteken - E-uitgawe',
    description: 'Teken in op Die Papier se digitale e-uitgawe. Lees die koerant op enige toestel.',
    keywords: 'inteken, e-uitgawe, digitaal, maandeliks, prys',
  },
  '/inteken/aflewering': {
    title: 'Inteken - Aflewering',
    description: 'Teken in vir tuisaflewering van Die Papier se gedrukte koerant.',
    keywords: 'inteken, aflewering, druk, koerant, tuisaflewering',
  },

  // ── Submit ─────────────────────────────────────────────────────
  '/stuur-in': {
    title: 'Stuur in',
    description: 'Stuur u storie, lesersbrief, terugvoer of shoutout in na Die Papier.',
    keywords: 'stuur in, storie, lesersbrief, terugvoer, shoutout',
  },
  '/stuur-in/storie': {
    title: 'Stuur \'n storie in',
    description: 'Het u \'n nuuswenk of storie? Stuur dit in na Die Papier se redaksie.',
    keywords: 'storie, nuuswenk, stuur in, redaksie, nuus',
  },
  '/stuur-in/lesersbrief': {
    title: 'Stuur \'n lesersbrief',
    description: 'Skryf \'n lesersbrief aan Die Papier. Deel u mening oor aktuele onderwerpe.',
    keywords: 'lesersbrief, mening, brief, redakteur, aktueel',
  },
  '/stuur-in/terugvoer': {
    title: 'Stuur terugvoer',
    description: 'Gee terugvoer aan Die Papier. Ons waardeer u insette om ons diens te verbeter.',
    keywords: 'terugvoer, mening, verbeter, diens, insette',
  },
  '/stuur-in/shoutout': {
    title: 'Stuur \'n shoutout',
    description: 'Stuur \'n shoutout aan iemand spesiaals via Die Papier.',
    keywords: 'shoutout, gelukwensing, spesiaal, boodskap',
  },

  // ── Events ─────────────────────────────────────────────────────
  '/gebeure': {
    title: 'Gebeure',
    description: 'Komende gebeure en aktiwiteite in ons omgewing. Bly op hoogte met Die Papier.',
    keywords: 'gebeure, aktiwiteite, fees, konsert, mark, plaaslik',
  },
  '/gebeure/dien-in': {
    title: 'Dien \'n gebeurtenis in',
    description: 'Dien u gebeurtenis in by Die Papier sodat ons lesers daarvan kan weet.',
    keywords: 'gebeurtenis, indienin, lys, bekendstelling, aankondiging',
  },

  // ── Other ──────────────────────────────────────────────────────
  '/vrae': {
    title: 'Algemene vrae (FAQ)',
    description: 'Antwoorde op algemene vrae oor Die Papier, inskrywings, e-uitgawes, advertensies en meer.',
    keywords: 'vrae, faq, hulp, inskrywings, e-uitgawes, adverteer',
  },
  '/kompetisies': {
    title: 'Kompetisies',
    description: 'Neem deel aan Die Papier se kompetisies en wen opwindende pryse.',
    keywords: 'kompetisies, wen, pryse, inskrywings, deelname',
  },
  '/kompetisie-terme-en-voorwaardes': {
    title: 'Kompetisie terme en voorwaardes',
    description: 'Terme en voorwaardes vir alle kompetisies by Die Papier.',
    keywords: 'kompetisie, terme, voorwaardes, reels, deelname',
  },
  '/doodsberrigte': {
    title: 'Doodsberrigte',
    description: 'Doodsberrigte en huldeblykke op Die Papier.',
    keywords: 'doodsberrigte, huldeblykke, begrafnis, herdenking',
  },
  '/multimedia': {
    title: 'Multimedia',
    description: 'Multimedia-inhoud op Die Papier - videos, fotogalerye en podcasts.',
    keywords: 'multimedia, video, foto, podcast, galerye',
  },
  '/nuusbrief-argief': {
    title: 'Nuusbrief-argief',
    description: 'Blaai deur vorige uitgawes van Die Papier se nuusbriewe.',
    keywords: 'nuusbrief, argief, vorige, uitgawes, e-pos',
  },
  '/soek': {
    title: 'Soek artikels',
    description: 'Soek deur al Die Papier se nuus, sport, sake, en meer.',
    keywords: 'soek, artikels, nuus, sport, sake, die papier',
  },
  '/inhoudsopgawe': {
    title: 'Inhoudsopgawe',
    description: 'Volledige inhoudsopgawe van Die Papier se webwerf - alle afdelings en bladsye.',
    keywords: 'inhoudsopgawe, sitemap, navigasie, bladsye, afdelings',
  },
  '/weer': {
    title: 'Weer',
    description: 'Die jongste weervoorspelling vir ons omgewing op Die Papier.',
    keywords: 'weer, voorspelling, temperatuur, reën, son',
  },
  '/verkeer': {
    title: 'Verkeer',
    description: 'Verkeeropdaterings en padinligting op Die Papier.',
    keywords: 'verkeer, paaie, opdaterings, padwerke, roetes',
  },

  // ── Newsletter & Account ───────────────────────────────────────
  '/nuusbrief-inteken': {
    title: 'Nuusbrief-inskrywing',
    description: 'Teken in op Die Papier se gratis nuusbrief. Ontvang die jongste nuus direk in u posbus.',
    keywords: 'nuusbrief, inteken, gratis, e-pos, nuus',
  },
  '/bestuur-my-nuusbriewe': {
    title: 'Bestuur my nuusbriewe',
    description: 'Bestuur u nuusbrief-voorkeure by Die Papier.',
    keywords: 'nuusbriewe, bestuur, voorkeure, inskrywings',
  },
  '/rekening-aktivering': {
    title: 'Rekening-aktivering',
    description: 'Aktiveer u Die Papier-rekening.',
    keywords: 'aktivering, rekening, bevestig, registreer',
  },
  '/nuusbrief-inteken-bevestiging': {
    title: 'Nuusbrief-bevestiging',
    description: 'U nuusbrief-inskrywing by Die Papier is bevestig.',
    keywords: 'nuusbrief, bevestiging, inteken, sukses',
  },
  '/nuusbrief-herbetrokkenheid': {
    title: 'Nuusbrief-herbetrokkenheid',
    description: 'Bly ingeteken op Die Papier se nuusbrief. Ons wil u nie verloor nie.',
    keywords: 'nuusbrief, herbetrokkenheid, inteken, bly',
  },
  '/nuusbrief-uitskryf-bevestiging': {
    title: 'Nuusbrief-uitskrywing',
    description: 'Bevestig u uitskrywing van Die Papier se nuusbrief.',
    keywords: 'nuusbrief, uitskryf, bevestig, kanselleer',
  },
  '/nuusbrief-uitskryf-sukses': {
    title: 'Uitskrywing suksesvol',
    description: 'U is suksesvol uitgeskryf van Die Papier se nuusbrief.',
    keywords: 'nuusbrief, uitskryf, sukses, kanselleer',
  },

  // ── Thank You Pages ────────────────────────────────────────────
  '/dankie-advertensie-navraag': {
    title: 'Dankie vir u navraag',
    description: 'Dankie vir u advertensie-navraag by Die Papier. Ons sal u binnekort kontak.',
    keywords: 'dankie, navraag, advertensie, kontak',
  },
  '/dankie-vir-kontak': {
    title: 'Dankie vir kontak',
    description: 'Dankie dat u Die Papier gekontak het. Ons sal so gou moontlik reageer.',
    keywords: 'dankie, kontak, antwoord, reageer',
  },
  '/dankie-vir-nuusbrief-inskrywing': {
    title: 'Dankie vir nuusbrief-inskrywing',
    description: 'Dankie dat u ingeteken het op Die Papier se nuusbrief.',
    keywords: 'dankie, nuusbrief, inteken, welkom',
  },
  '/dankie-vir-registrasie': {
    title: 'Dankie vir registrasie',
    description: 'Dankie dat u geregistreer het by Die Papier. Welkom!',
    keywords: 'dankie, registrasie, welkom, rekening',
  },
  '/dankie-vir-jou-indiening': {
    title: 'Dankie vir u indiening',
    description: 'Dankie vir u indiening by Die Papier. Ons sal dit binnekort hersien.',
    keywords: 'dankie, indiening, storie, hersien',
  },
  '/dankie-vir-kompetisie-inskrywing': {
    title: 'Dankie vir kompetisie-inskrywing',
    description: 'Dankie dat u aan Die Papier se kompetisie deelgeneem het. Sterkte!',
    keywords: 'dankie, kompetisie, inskrywing, deelname, sterkte',
  },

  // ── Utility Pages ──────────────────────────────────────────────
  '/vanlyn': {
    title: 'Vanlyn',
    description: 'U is tans vanlyn. Gaan asseblief u internetverbinding na.',
    keywords: 'vanlyn, geen internet, verbinding',
  },
};

/**
 * Get SEO data for a specific route path.
 * Falls back to default SEO data if no specific config is found.
 */
export function getRouteSeo(path: string): RouteSeoData {
  return ROUTE_SEO[path] || {
    title: 'Die Papier',
    description: 'Die Papier - Jou betroubare bron vir die jongste Afrikaanse nuus, sport, sake, lewenstyl en meer.',
    keywords: 'nuus, afrikaans, suid-afrika, sport, sake, lewenstyl, opinie',
  };
}