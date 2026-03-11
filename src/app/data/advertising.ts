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
    description: "Versterk jou boodskap deur jou inhoud oor veelvuldige Die Papier platforms te sindikeer.",
    icon: Repeat,
    link: null
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
    title: 'Vakatures',
    description: 'Bereik gekwalifiseerde kandidate regoor die land met jou werksaanbiedings.',
    icon: Briefcase,
  },
  {
    title: 'Eiendom',
    description: 'Bemark eiendom (residensieel en kommersieel) aan aktiewe kopers en huurders.',
    icon: Home,
  },
  {
    title: 'Motors',
    description: 'Verkoop voertuie, motorfietse en kommersiële vervoer aan ons leserskap.',
    icon: Car,
  },
  {
    title: 'Dienste',
    description: 'Adverteer professionele en persoonlike dienste in jou gebied.',
    icon: Wrench,
  },
  {
    title: 'Kennisgewings',
    description: 'Regskennisgewings, openbare aankondigings en amptelike mededelings.',
    icon: Bell,
  },
  {
    title: 'Allerlei',
    description: 'Alles van te koop en te ruil tot verlore en gevind items.',
    icon: Package,
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
    title: 'Geteikende bereik',
    description: 'Bereik spesifieke demografieë en streke met presiese teikengroepseleksie.',
    icon: Target,
  },
  {
    title: 'Multi-platform',
    description: 'Jou advertensie verskyn op gedruk, digitaal en mobiel vir omvattende dekking.',
    icon: Layers,
  },
  {
    title: 'Meetbare resultate',
    description: 'Ontvang volledige verslae oor indrukke, klikke en omskakelings.',
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
    description: "'n Volledig geskryfde artikel wat jou handelsmerk, produk of diens op 'n informatiewe en boeiende manier aan ons lesers bekendstel.",
    features: ['800–1 500 woorde', 'Professionele joernalistieke skryfstyl', 'Tot 5 hoë-kwaliteit beelde', 'SEO-geoptimaliseer'],
    icon: FileText,
  },
  {
    title: 'Advertoriaal',
    description: "'n Betaalde redaksionele plasing wat soos 'n gewone artikel lees, maar jou kommersiële boodskap doeltreffend oordra.",
    features: ['500–1 000 woorde', 'Gedruk én aanlyn', 'Duidelik gemerk as \"Borginhoud\"', 'Kliënt-goedkeuring voor publikasie'],
    icon: PenTool,
  },
  {
    title: 'Digitale inhoudsveldtog',
    description: "'n Reeks aanlyn artikels, sosiale media-plasings en nuusbriefinhoud wat jou boodskap oor meervoudige kanale versprei.",
    features: ['Multi-platform verspreiding', '3–6 inhoudstukke', 'Sosiale media-bevordering', 'Prestasieverslag ingesluit'],
    icon: Globe,
  },
  {
    title: 'Video & multimedia',
    description: 'Boeiende video-inhoud wat op ons webwerf en sosiale kanale geplaas word vir maksimum betrokkenheid.',
    features: ['30–120 sekondes', 'Professionele produksie', 'YouTube & sosiale media', 'Ingebedde webbladsplasing'],
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
    description: "Borg 'n spesifieke redaksionele afdeling van Die Papier en belyn jou handelsmerk met inhoud wat by jou teikenmark aanklank vind.",
    examples: ['Nuus-afdeling', 'Sport-afdeling', 'Sake-afdeling', 'Leefstyl-afdeling', 'Dink-afdeling'],
    includes: [
      'Jou logo op die afdelingsopskrif (druk & digitaal)',
      '"Aangebied deur"-vermelding',
      'Eksklusiewe advertensieplasing binne die afdeling',
      'Maandelikse prestasieverslag',
    ],
    icon: Newspaper,
  },
  {
    title: 'Gebeurtenisborgskap',
    description: "Borg 'n spesifieke gebeurtenis of reeks wat deur Die Papier gedek word, en kry prominente sigbaarheid voor, tydens en na die geleentheid.",
    examples: ['Skole-rugbyreeks', 'Verkiesings-dekking', 'Boekefees-verslae', 'Landbouskou-dekking'],
    includes: [
      'Logo op alle verwante inhoud',
      'Sosiale media-vermelding voor en na',
      'Geborgde artikel oor die geleentheid',
      'Foto- en video-inhoud ingesluit',
    ],
    icon: Calendar,
  },
  {
    title: 'Nuusbriefborgskap',
    description: 'Borg Die Papier se weeklikse nuusbrief en bereik duisende ingetekende lesers direk in hul inkassie.',
    examples: ['Dinsdagnuusbrief', 'Vrydagnuusbrief', 'Spesiale uitgawes'],
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
    examples: ['Wedstryde & kompetisies', 'Spesiale projekte', 'Jaarlikse vennootskappe', 'Multi-platform veldtogte'],
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
    description: 'Belyn jou handelsmerk met betroubare, hoë-kwaliteit joernalistieke inhoud en bou geloofwaardigheid.',
    icon: Award,
  },
  {
    title: 'Eksklusiwiteit',
    description: 'As borg is jy die enigste handelsmerk in jou kategorie — geen kompetisie binne jou borgde afdeling.',
    icon: Star,
  },
  {
    title: 'Langtermyn impak',
    description: 'Borgskappe bou volgehoue bewustheid oor tyd, eerder as eenmalige advertensie-indrukke.',
    icon: TrendingUp,
  },
];

// Supplements
export const SUPPLEMENT_TYPES = [
  {
    title: 'Handelsmerkbylaag',
    description: "'n Volledige bylaag wat uitsluitlik aan jou handelsmerk gewy is — van ontwerp tot verspreiding.",
    pages: '4–16 bladsye',
    format: 'Tabloid of A4',
    ideal: 'Produkbekendstellings, maatskappyprofiele, spesiale promosies',
    icon: BookOpen,
  },
  {
    title: 'Tematiese bylaag',
    description: "Sluit aan by 'n tematiese bylaag saam met ander adverteerders rondom 'n spesifieke onderwerp.",
    pages: '8–24 bladsye',
    format: 'Tabloid',
    ideal: 'Gesondheid, landbou, eiendom, onderwys, feestydse gidse',
    icon: Layers,
  },
  {
    title: 'Gebeure-bylaag',
    description: "'n Spesiale bylaag wat 'n spesifieke gebeurtenis of geleentheid dekking gee met advertensieplasing.",
    pages: '8–16 bladsye',
    format: 'Tabloid of A4',
    ideal: 'Skoue, feeste, konferensies, herdenking',
    icon: CalendarDays,
  },
  {
    title: 'Pasgemaakte bylaag',
    description: "Ons ontwerp- en redaksionele span werk saam met jou om 'n unieke, pasgemaakte publikasie te skep.",
    pages: 'Buigsaam',
    format: 'Enige formaat',
    ideal: 'Jaarverslae, korporatiewe kommunikasie, spesiale projekte',
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
    description: 'Jou bylaag word saam met Die Papier se weeklikse uitgawe by winkels regoor die land versprei.',
    icon: BookOpen,
  },
];

export const SUPPLEMENT_TIMELINE = [
  { week: 'Week 1–2', task: 'Beplanning & konseptualisering', description: 'Strategiese sessies, inhoudsbeplanning en visuele konsepte.' },
  { week: 'Week 2–3', task: 'Inhoudskeppende & ontwerp', description: 'Skryf artikels, neem fotos, ontwerp bladsye.' },
  { week: 'Week 3–4', task: 'Hersiening & goedkeuring', description: 'Kliënt-hersiening, korreksies en finale goedkeuring.' },
  { week: 'Week 4–5', task: 'Druk & verspreiding', description: 'Finale drukwerk en insluiting by Die Papier.' },
];