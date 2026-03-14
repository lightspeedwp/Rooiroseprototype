import {
  List,
  Layout,
  Map,
  FileText,
  Star,
  BookOpen,
  Megaphone,
  Share2,
  Mail,
  Cpu,
  Repeat,
  Briefcase,
  Home,
  Car,
  Wrench,
  Bell,
  Package,
  Target,
  BarChart3,
  Layers,
  Ruler,
  Scale,
  Printer,
  Truck,
  PenTool,
  Sparkles,
  Globe,
  Calendar,
  Zap,
  Award,
  TrendingUp,
  Palette,
  CalendarDays,
  Shirt,
  Sparkle,
  UtensilsCrossed,
  Heart,
  PartyPopper,
  Gift,
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';

export const AD_OPTIONS = [
  {
    title: "Geklassifiseerde advertensies",
    description: "Ons geklassifiseerde afdeling bied 'n bekostigbare manier om lesers nasionaal te bereik.",
    icon: List,
    link: "/adverteer/geklassifiseerd"
  },
  {
    title: "Vertoonadvertensies",
    description: "Maak 'n impak met ons vertoonadvertensieplasings op beide ons webwerf en in die gedrukte uitgawe.",
    icon: Layout,
    link: "/adverteer/vertoonadvertensies"
  },
  {
    title: "Pamflette",
    description: "Kry jou boodskap direk in die hande van lesers met koerant-insetsels en pamflette.",
    icon: Map,
    link: "/adverteer/pamflette"
  },
  {
    title: "Geborgde inhoud",
    description: "Gebruik ons betroubare platforms om jou boodskap met boeiende geborgde artikels te bevorder.",
    icon: FileText,
    link: "/adverteer/geborgde-inhoud"
  },
  {
    title: "Borgskappe",
    description: "Borg 'n spesifieke afdeling of geleentheid en belyn jou handelsmerk met betekenisvolle inhoud.",
    icon: Star,
    link: "/adverteer/borgskappe"
  },
  {
    title: "Bylaes",
    description: "Vertoon jou handelsmerk met 'n toegewyde advertensiebylaag, ontwerp vir diepgaande dekking.",
    icon: BookOpen,
    link: "/adverteer/bylaes"
  },
  {
    title: "Direkte advertering",
    description: "Bereik 'n invloedryke, hoë-inkomste Afrikaanse mark regoor Suid-Afrika met geteikende advertering.",
    icon: Megaphone,
    link: null
  },
  {
    title: "Sosiale media",
    description: "Gebruik ons sosiale media kanale om jou inhoud aan 'n wyer, geteikende gehoor te bevorder.",
    icon: Share2,
    link: null
  },
  {
    title: "Betaalde nuusbriewe",
    description: "Verskyn in ons nuusbriewe en bereik duisende betrokke lesers.",
    icon: Mail,
    link: null
  },
  {
    title: "Programmatiese advertensies",
    description: "Benut programmatiese advertering vir hoogs geteikende en outomatiese advertensieplasings.",
    icon: Cpu,
    link: null
  },
  {
    title: "Sindikasie",
    description: "Versterk jou boodskap deur jou inhoud oor veelvuldige rooi rose platforms te sindikeer.",
    icon: Repeat,
    link: "/adverteer/sindikasie"
  }
];

export const AD_BENEFITS = [
  {
    title: "Uitgebreide bereik",
    description: "Kry sigbaarheid oor veelvuldige streke en bereik 'n gehoor met uiteenlopende demografieë en belange."
  },
  {
    title: "Handelsmerk-konsekwentheid",
    description: "Bied 'n eenvormige, herkenbare handelsmerkbeeld regoor die land aan, wat vertroue en lojaliteit versterk."
  },
  {
    title: "Groter impak",
    description: "Verhoog algehele veldtog-effektiwiteit deur hoër frekwensie van indrukke en invloed op koopbesluite."
  }
];

// Classifieds
export const CLASSIFIED_CATEGORIES = [
  {
    title: 'Mode & Styl',
    description: 'Boutiques, styliste, mode-advies en bekostigbare mode-items vir die stilbewuste leser.',
    icon: Shirt,
  },
  {
    title: 'Skoonheid & Welstand',
    description: 'Skoonheidsalonge, spa-behandelings, grimeerders en skoonheidsprodukte vir selfversorgingliefhebbers.',
    icon: Sparkle,
  },
  {
    title: 'Kos & Wyn',
    description: 'Restaurante, koskursusse, wynproewe en gourmet-produkte vir kulinêre genieters.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Gesondheid & Fiksheid',
    description: 'Gimnasiums, persoonlike afrigters, welstandkosse en gesondheidsprodukte vir aktiewe vroue.',
    icon: Heart,
  },
  {
    title: 'Geleenthede & Ontspanning',
    description: 'Troues, partytjies, kunsvertonings, konserte en sosiale geleenthede vir die betrokke gemeenskap.',
    icon: PartyPopper,
  },
  {
    title: 'Leefstyl & Geskenke',
    description: 'Inrigting, kunswerk, geskenke en luukse items vir die verfynde smaak.',
    icon: Gift,
  },
];

export const CLASSIFIED_PRICING = [
  {
    name: 'Standaard',
    price: 'R150',
    unit: 'per plasing',
    features: [
      'Tot 30 woorde',
      '1 week se plasing (druk)',
      'Aanlyn vir 7 dae',
      'Basiese teksformaat',
    ],
    highlighted: false,
  },
  {
    name: 'Uitgebrei',
    price: 'R350',
    unit: 'per plasing',
    features: [
      'Tot 60 woorde',
      '2 weke se plasing (druk)',
      'Aanlyn vir 14 dae',
      '1 foto ingesluit',
      'Opskrif in vetdruk',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'R650',
    unit: 'per plasing',
    features: [
      'Tot 100 woorde',
      '4 weke se plasing (druk)',
      'Aanlyn vir 30 dae',
      'Tot 3 foto\'s',
      'Gekleurde raam & opskrif',
      'Prioriteitsplasing',
    ],
    highlighted: false,
  },
];

// Display Advertising
export const DISPLAY_PRINT_OPTIONS = [
  {
    name: 'Volle bladsy',
    size: '265mm x 380mm',
    description: "Maksimum impak met 'n volledige bladsy-advertensie.",
  },
  {
    name: 'Halwe bladsy (horisontaal)',
    size: '265mm x 185mm',
    description: 'Breë formaat ideaal vir visuele veldtogte.',
  },
  {
    name: 'Halwe bladsy (vertikaal)',
    size: '130mm x 380mm',
    description: 'Sterk vertikale teenwoordigheid langs redaksionele inhoud.',
  },
  {
    name: 'Kwart bladsy',
    size: '130mm x 185mm',
    description: 'Kompakte maar kragtige advertensieplasing.',
  },
  {
    name: 'Strookadvertensie',
    size: '265mm x 60mm',
    description: 'Ooglopende horisontale plasing bo of onder inhoud.',
  },
  {
    name: 'Kolom-advertensie',
    size: '60mm x 185mm',
    description: 'Bekostigbare opsie met goeie sigbaarheid.',
  },
];

export const DISPLAY_DIGITAL_OPTIONS = [
  {
    name: 'Banier (Leaderboard)',
    size: '728 x 90 px',
    description: 'Bo-aan-bladsy plasing met hoë sigbaarheid.',
  },
  {
    name: 'Groot reghoek',
    size: '336 x 280 px',
    description: 'In-inhoud plasing met uitstekende klikkoerse.',
  },
  {
    name: 'Skyscaper',
    size: '160 x 600 px',
    description: 'Lang sydbare-advertensie met aanhoudende sigbaarheid.',
  },
  {
    name: 'Mobiele banier',
    size: '320 x 50 px',
    description: 'Geoptimaliseer vir mobiele toestelle.',
  },
  {
    name: 'Interstitieel',
    size: '320 x 480 px',
    description: 'Volskerm mobiele advertensie met hoë impak.',
  },
  {
    name: 'Natuurlike advertensie',
    size: 'Responsief',
    description: 'Pas naatloos by die webwerf se ontwerp aan.',
  },
];

export const DISPLAY_BENEFITS = [
  {
    title: 'Premie-gehoor',
    description: 'Bereik welgestelde, stilbewuste vroue (25-55) wat gepassioneererd is oor mode, skoonheid, kos en leefstyl.',
    icon: Target,
  },
  {
    title: 'Multi-platform',
    description: 'Jou advertensie verskyn in ons premium tydskrif én digitale platforms vir omvattende dekking.',
    icon: Layers,
  },
  {
    title: 'Handelsmerkbelyning',
    description: 'Belyn jou handelsmerk met rooi rose se verfynde, aspirerende leefstyl-inhoud en bou geloofwaardigheid.',
    icon: BarChart3,
  },
];

// Leaflets
export const LEAFLET_DISTRIBUTION_AREAS = [
  { region: 'Kaapse Skiereiland', copies: '35 000+', areas: 'Kaapstad-metro, Suidelike Voorstede, Helderberg, Noordelike Voorstede' },
  { region: 'Boland & Weskus', copies: '18 000+', areas: 'Paarl, Stellenbosch, Franschhoek, Worcester, Saldanha' },
  { region: 'Tuinroete', copies: '12 000+', areas: 'George, Mosselbaai, Knysna, Oudtshoorn, Plettenbergbaai' },
  { region: 'Vrystaat & Noord-Kaap', copies: '15 000+', areas: 'Bloemfontein, Welkom, Kimberley, Kroonstad' },
  { region: 'Gauteng', copies: '20 000+', areas: 'Pretoria, Centurion, Randburg, Sandton, Vanderbijlpark' },
  { region: 'Nasionaal', copies: '100 000+', areas: 'Alle streke gekombineer vir volledige nasionale dekking' },
];

export const LEAFLET_SPECS = [
  { label: 'Papiergrootte', value: 'A4, A5, DL of pasgemaak', icon: Ruler },
  { label: 'Papiergewig', value: '80gsm – 170gsm', icon: Scale },
  { label: 'Drukwerk', value: 'Volkleur, dubbelsy', icon: Printer },
  { label: 'Aflewering', value: 'By ons drukkery of deur koerier', icon: Truck },
];

// Sponsored Content
export const SPONSORED_CONTENT_TYPES = [
  {
    title: 'Geborgde artikel',
    description: 'n Volledig geskryfde leefstyl-artikel wat jou handelsmerk, produk of diens op \'n outentieke en boeiende manier aan ons welgestelde lesers bekendstel.',
    features: ['800–1 500 woorde', 'Professionele redaksionele styl', 'Tot 5 premium beelde', 'SEO-geoptimaliseer vir aanlyn bereik'],
    icon: FileText,
  },
  {
    title: 'Advertoriaal',
    description: '\'n Betaalde redaksionele plasing wat soos \'n gewone tydskrif-artikel lees, maar jou handelsmerk-boodskap doeltreffend oordra in rooi rose se premie-konteks.',
    features: ['500–1 000 woorde', 'Gedrukte tydskrif én aanlyn', 'Duidelik gemerk as "Borginhoud"', 'Kliënt-goedkeuring voor publikasie'],
    icon: PenTool,
  },
  {
    title: 'Digitale inhoudsveldtog',
    description: '\'n Reeks leefstyl-artikels, sosiale media-plasings en nuusbriefinhoud wat jou boodskap oor meervoudige kanale versprei aan ons betrokke gehoor.',
    features: ['Multi-platform verspreiding', '3–6 inhoudstukke', 'Instagram & Facebook-bevordering', 'Prestasieverslag ingesluit'],
    icon: Globe,
  },
  {
    title: 'Video & multimedia',
    description: 'Boeiende video-inhoud (skoonheidsresensies, kookvlogs, modegidse) wat op ons webwerf en sosiale kanale geplaas word vir maksimum betrokkenheid.',
    features: ['30–120 sekondes', 'Professionele produksie', 'YouTube & Instagram Reels', 'Ingebedde webbladsplasing'],
    icon: Sparkles,
  },
];

export const SPONSORED_PROCESS_STEPS = [
  {
    step: '1',
    title: 'Kennis',
    description: 'Ons span vergader met jou om jou doelwitte, teikengehoor en kernboodskappe te verstaan.',
  },
  {
    step: '2',
    title: 'Konsep',
    description: "Ons redaksionele span ontwikkel 'n inhoudskonsep en struktuur vir jou goedkeuring.",
  },
  {
    step: '3',
    title: 'Skep',
    description: 'Ervare joernaliste en inhoudskeppers produseer die finale inhoud met professionele beelde.',
  },
  {
    step: '4',
    title: 'Goedkeuring',
    description: 'Jy keur die finale inhoud goed voor publikasie — ons maak enige aanpassings wat nodig is.',
  },
  {
    step: '5',
    title: 'Publiseer',
    description: 'Die inhoud word gepubliseer op die ooreengekome platforms en bevorder aan ons gehoor.',
  },
  {
    step: '6',
    title: 'Verslag',
    description: "Jy ontvang 'n volledige prestasieverslag met statistieke oor bereik en betrokkenheid.",
  },
];

// Sponsorships
export const SPONSORSHIP_TYPES = [
  {
    title: 'Afdelingsborgskap',
    description: "Borg 'n spesifieke redaksionele afdeling van rooi rose en belyn jou handelsmerk met premium leefstyl-inhoud wat by jou teikenmark aanklank vind.",
    examples: ['Mode & Styl', 'Skoonheid & Welstand', 'Kos & Wyn', 'Gesondheid & Fiksheid', 'Kunsliefde & Kultuur'],
    includes: [
      'Jou logo op die afdelingsopskrif (tydskrif & digitaal)',
      '"Aangebied deur"-vermelding',
      'Eksklusiewe advertensieplasing binne die afdeling',
      'Maandelikse prestasieverslag',
    ],
    icon: Palette,
  },
  {
    title: 'Gebeurtenisborgskap',
    description: "Borg 'n spesifieke leefstyl-gebeurtenis of reeks wat deur rooi rose gedek word, en kry prominente sigbaarheid voor, tydens en na die geleentheid.",
    examples: ['Modeweek-dekking', 'Skoonheidstoekennings', 'Kos & Wyn-feeste', 'Welstandseminare', 'Bruidsskou-verslae'],
    includes: [
      'Logo op alle verwante inhoud',
      'Sosiale media-vermelding voor en na',
      'Geborgde tydskrif-artikel oor die geleentheid',
      'Foto- en video-inhoud ingesluit',
    ],
    icon: Calendar,
  },
  {
    title: 'Nuusbriefborgskap',
    description: 'Borg rooi rose se weeklikse leefstyl-nuusbrief en bereik duisende welgestelde, betrokke lesers direk in hul inkassie.',
    examples: ['Dinsdagnuusbrief', 'Vrydagnuusbrief', 'Spesiale leefstyl-uitgawes'],
    includes: [
      'Prominente logo-plasing bo-aan nuusbrief',
      'Eksklusiewe advertensieblok',
      'Klikbare skakel na jou webwerf',
      'Open- en klikstatistieke',
    ],
    icon: Mail,
  },
  {
    title: 'Pasgemaakte borgskap',
    description: "Ons ontwerp 'n unieke borgskappakket wat presies by jou handelsmerk se doelwitte en begroting pas.",
    examples: ['Wedstryde & kompetisies', 'Spesiale leefstyl-projekte', 'Jaarlikse vennootskappe', 'Multi-platform veldtogte'],
    includes: [
      'Persoonlike konsultasie',
      'Buigsame kontrakduur',
      'Multi-platform integrasie',
      'Strategiese bemarkingsondersteuning',
    ],
    icon: Zap,
  },
];

export const SPONSORSHIP_BENEFITS = [
  {
    title: 'Handelsmerkbelyning',
    description: 'Belyn jou handelsmerk met premium leefstyl-inhoud en rooi rose se welgestelde, stilbewuste gehoor — bou geloofwaardigheid en aspirasionele waarde.',
    icon: Award,
  },
  {
    title: 'Eksklusiwiteit',
    description: 'As borg is jy die enigste handelsmerk in jou kategorie — geen kompetisie binne jou borgde afdeling of geleentheid.',
    icon: Star,
  },
  {
    title: 'Langtermyn impak',
    description: 'Borgskappe bou volgehoue bewustheid en handelsmerklojaliteit oor tyd, eerder as eenmalige advertensie-indrukke.',
    icon: TrendingUp,
  },
];

// Supplements
export const SUPPLEMENT_TYPES = [
  {
    title: 'Bruidsjoernaal',
    description: "Die omvattende jaarlikse gids vir verloofdes — van troues tot wittebrood. 'n Volledige publikasie vir jou handelsmerk.",
    pages: '48–64 bladsye',
    format: 'Tydskrif-formaat',
    ideal: 'Bruidswinkel, venue, fotograwe, kos, skoonheid',
    icon: BookOpen,
  },
  {
    title: 'Skoonheidsjaarlikse',
    description: "'n Jaarlikse spesiale uitgawe wat die nuutste skoonheidstrends, produkte en behandelings uitbeeld met premium advertensieplasing.",
    pages: '32–48 bladsye',
    format: 'Tydskrif-formaat',
    ideal: 'Skoonheidsmerke, spas, dermatoloë, klinieke',
    icon: Layers,
  },
  {
    title: 'Kos & Wyn Spesiale',
    description: "'n Seisoenale uitgawe wat kulinêre verfyning vier — resepte, restaurantgidse, wynpare en gourmet-leefstyl.",
    pages: '24–40 bladsye',
    format: 'Tydskrif-formaat',
    ideal: 'Wynplase, restaurante, koskursusse, gourmet-produkgeskenke',
    icon: CalendarDays,
  },
  {
    title: 'Pasgemaakte uitgawe',
    description: "Ons redaksionele en ontwerpspan werk saam met jou om 'n unieke premium uitgawe te skep wat jou handelsmerk se waardes weerspieël.",
    pages: 'Buigsaam',
    format: 'Enige formaat',
    ideal: 'Handelsmerkjaargidse, korporatiewe kommunikasie, spesiale projekte',
    icon: Sparkles,
  },
];

export const SUPPLEMENT_SERVICES = [
  {
    title: 'Ontwerp & uitleg',
    description: "Ons span grafiese ontwerpers skep 'n professionele uitleg wat jou handelsmerk weerspieël.",
    icon: Palette,
  },
  {
    title: 'Redaksionele inhoud',
    description: 'Ons joernaliste en inhoudskeppers produseer hoë-kwaliteit artikels en kopie.',
    icon: FileText,
  },
  {
    title: 'Drukwerk',
    description: 'Professionele drukwerk op kwaliteitpapier met volkleur reproduksie.',
    icon: Printer,
  },
  {
    title: 'Verspreiding',
    description: 'Jou bylaag word saam met rooi rose se weeklikse uitgawe by winkels regoor die land versprei.',
    icon: BookOpen,
  },
];

export const SUPPLEMENT_TIMELINE = [
  { week: 'Week 1–2', task: 'Beplanning & konseptualisering', description: 'Strategiese sessies, inhoudsbeplanning en visuele konsepte.' },
  { week: 'Week 2–3', task: 'Inhoudskeppende & ontwerp', description: 'Skryf artikels, neem fotos, ontwerp bladsye.' },
  { week: 'Week 3–4', task: 'Hersiening & goedkeuring', description: 'Kliënt-hersiening, korreksies en finale goedkeuring.' },
  { week: 'Week 4–5', task: 'Druk & verspreiding', description: 'Finale drukwerk en insluiting by rooi rose.' },
];