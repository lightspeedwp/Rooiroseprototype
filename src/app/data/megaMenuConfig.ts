/**
 * Mega Menu Configuration
 * 
 * Data-driven configuration for the rooi rose desktop mega menu navigation.
 * Each top-level category has subcategories, featured content, and trending posts.
 */

export interface MegaMenuSubcategory {
  title: string;
  href: string;
  description?: string;
}

export interface MegaMenuFeatured {
  title: string;
  href: string;
  imageUrl: string;
  categoryLabel: string;
  deck?: string;
}

export interface MegaMenuTrending {
  title: string;
  href: string;
  timestamp?: string;
  tag?: string;
}

export interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  hasMegaMenu: boolean;
  subcategories?: MegaMenuSubcategory[];
  featured?: MegaMenuFeatured;
  trending?: MegaMenuTrending[];
  specialLinks?: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
}

export const MEGA_MENU_CONFIG: Record<string, MegaMenuItem> = {
  kos: {
    label: 'Kos',
    href: '/kos',
    description: 'Resepte, wenke en inspirasie vir die kombuis',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Maklik & vinnig', href: '/kos/maklik-vinnig' },
      { title: 'Aandetes vir die week', href: '/kos/aandetes-vir-die-week' },
      { title: 'Somerkos', href: '/kos/somerkos' },
      { title: 'Winterkos', href: '/kos/winterkos' },
      { title: 'Laekoolhidraat', href: '/kos/laekoolhidraat' },
      { title: 'Vegetaries', href: '/kos/vegetaries' },
      { title: 'Gebak', href: '/kos/gebak' },
      { title: 'Nagereg', href: '/kos/nagereg' },
      { title: 'Drankies', href: '/kos/drankies' },
      { title: 'Jy kan', href: '/kos/jy-kan' },
      { title: 'Nuut & Nou', href: '/kos/nuut-nou' },
      { title: 'Recipes in English', href: '/kos/recipes-english' },
    ],
    featured: {
      title: 'Die beste somerresepte vir die hele gesin',
      href: '/kos/001-die-beste-somerresepte-vir-die-hele-gesin',
      imageUrl: 'https://source.unsplash.com/1200x800/?food,summer,salad&sig=kos-001',
      categoryLabel: 'Kos',
      deck: 'Maklike en vinnige etes vir warm dae wat die hele gesin sal geniet.',
    },
    trending: [
      { title: 'Hoenderpasta in 20 minute', href: '/kos/002-hoenderpasta-in-20-minute', tag: 'Vinnig' },
      { title: 'Eenvoudige roerbak hoender', href: '/kos/003-eenvoudige-roerbak-hoender-met-groente', tag: 'Gesond' },
      { title: 'Vars somergroenteslaai', href: '/kos/004-vars-somergroenteslaai-met-sitrusdressing', tag: 'Slaai' },
      { title: 'Hartverwarmende winterpotjie', href: '/kos/005-hartverwarmende-winterpotjie-met-vars-brood', tag: 'Winter' },
    ],
  },

  mode: {
    label: 'Mode',
    href: '/mode',
    description: 'Neigings, style gidse en mode-inspirasie',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Dra dit so', href: '/mode/dra-dit-so' },
      { title: 'Wenke', href: '/mode/wenke' },
      { title: 'Trends', href: '/mode/nuut-en-nou-mode' },
    ],
    featured: {
      title: 'Lente 2026: Die grootste modeneigings',
      href: '/mode/mode-001-lente-2026-die-grootste-modeneigings',
      imageUrl: 'https://source.unsplash.com/1200x800/?fashion,runway,spring&sig=mode-001',
      categoryLabel: 'Mode',
      deck: 'Van pastelle tot vet patrone – ontdek wat vanjaar die gewildste neigings is.',
    },
    trending: [
      { title: 'Die kapsule kas: 20 stukke', href: '/mode/mode-002-die-kapsule-kas-20-stukke-vir-elke-geleentheid', tag: 'Wenke' },
      { title: 'Rooi loper: Beste uitsette', href: '/mode/mode-003-rooi-loper-die-beste-uitsette-van-die-jaar', tag: 'Celebrity' },
      { title: 'Wintermode 2026', href: '/mode/mode-004-wintermode-2026-warm-en-stylish', tag: 'Winter' },
    ],
  },

  skoonheid: {
    label: 'Skoonheid',
    href: '/skoonheid',
    description: 'Velversorging, grimering en skoonheidswenke',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Hare', href: '/skoonheid/hare' },
      { title: 'Velsorg', href: '/skoonheid/velsorg' },
      { title: 'Grimering', href: '/skoonheid/grimering' },
      { title: 'Naels', href: '/skoonheid/naels' },
      { title: 'Wenke', href: '/skoonheid/wenke' },
    ],
    // Placeholder - will be populated when skoonheid posts are created
    featured: undefined,
    trending: [],
  },

  gesondheid: {
    label: 'Gesondheid',
    href: '/gesondheid',
    description: 'Fiksheid, voeding en welstand',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Leef gesond', href: '/gesondheid/leef-gesond' },
      { title: 'Dieet', href: '/gesondheid/dieet' },
      { title: 'Fiksheid', href: '/gesondheid/fiksheid' },
    ],
    // Placeholder - will be populated when gesondheid posts are created
    featured: undefined,
    trending: [],
  },

  bekendes: {
    label: 'Bekendes',
    href: '/bekendes',
    description: 'Celebrity nuus, onderhoude en kultuur',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Ons mense', href: '/bekendes/ons-mense' },
    ],
    // Placeholder - will be populated when bekendes posts are created
    featured: undefined,
    trending: [],
  },

  leefstyl: {
    label: 'Leefstyl',
    href: '/leefstyl',
    description: 'Dekor, DIY en tuin-inspirasie',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Dekor', href: '/leefstyl/dekor' },
      { title: 'Handwerk', href: '/leefstyl/handwerk' },
      { title: 'Tuinmaak', href: '/leefstyl/tuinmaak' },
      { title: 'Doen dit self', href: '/leefstyl/doen-dit-self' },
    ],
    // Placeholder - will be populated when leefstyl posts are created
    featured: undefined,
    trending: [],
  },

  'jou-lewe': {
    label: 'Jou lewe',
    href: '/jou-lewe',
    description: 'Verhoudings, ouerskap en persoonlike groei',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Verhoudings', href: '/jou-lewe/verhoudings' },
      { title: 'Ouerskap', href: '/jou-lewe/ouerskap' },
      { title: 'Inspirasie', href: '/jou-lewe/inspirasie' },
      { title: 'In die nuus', href: '/jou-lewe/in-die-nuus' },
      { title: 'Geld & Sukses', href: '/jou-lewe/sukses-en-geld' },
      { title: 'Persoonlike groei', href: '/jou-lewe/persoonlike-groei' },
    ],
    // Placeholder - will be populated when jou-lewe posts are created
    featured: undefined,
    trending: [],
  },

  ontspanning: {
    label: 'Ontspanning',
    href: '/ontspanning',
    description: 'Reis, boeke, podcasts en vermaak',
    hasMegaMenu: true,
    subcategories: [
      { title: 'Reis', href: '/ontspanning/reis' },
      { title: 'Blogs', href: '/ontspanning/blogs' },
      { title: 'Leestyd', href: '/lees' },
      { title: 'Podcasts', href: '/rooiroseradio', description: 'rrRADIO: Die amptelike rooi rose podcast' },
    ],
    // Placeholder - will be populated when ontspanning posts are created
    featured: undefined,
    trending: [],
  },

  'rooiwarm-wenners': {
    label: 'Rooiwarm wenners',
    href: '/rooiwarm-wenners',
    description: 'Beauty & Wellness Awards en wenners',
    hasMegaMenu: true,
    specialLinks: [
      { 
        title: 'Beauty & Wellness Awards', 
        href: '/rooiwarm-wenners/beauty-wellness-awards',
        description: 'Die amptelike awards-hub'
      },
      { 
        title: 'Wenners', 
        href: '/rooiwarm-wenners/wenners',
        description: 'Sien alle wenners'
      },
      { 
        title: 'Terms & Conditions', 
        href: '/rooiwarm-wenners/terms',
        description: 'Reëls en voorwaardes'
      },
    ],
    // Placeholder - will be populated when rooiwarm-wenners posts are created
    featured: undefined,
    trending: [],
  },

  wen: {
    label: 'Wen',
    href: '/wen',
    description: 'Kompetisies en pryse',
    hasMegaMenu: true,
    specialLinks: [
      { title: 'Wen hub', href: '/wen' },
      { title: 'Ma Dogter Kompetisie', href: '/wen/ma-dogter-kompetisie' },
      { title: 'Inskrywings', href: '/wen/inskrywings' },
    ],
    // Placeholder - will be populated when wen posts are created
    featured: undefined,
    trending: [],
  },

  shop: {
    label: 'Shop',
    href: '/shop',
    description: 'Inteken en aankope',
    hasMegaMenu: true,
    specialLinks: [
      { title: 'Shop Home', href: '/shop' },
      { title: 'Mandjie', href: '/shop/cart' },
      { title: 'Checkout', href: '/shop/checkout' },
      { title: 'My Account', href: '/shop/my-account' },
    ],
    featured: {
      title: 'rooi rose Digitale Intekening',
      href: '/shop/product/digital-subscription',
      imageUrl: 'https://source.unsplash.com/1200x800/?magazine,digital,subscription&sig=shop-featured',
      categoryLabel: 'Inteken',
      deck: 'Kry toegang tot al jou gunsteling stories digitaal.',
    },
  },

  kontak: {
    label: 'Kontak',
    href: '/kontak',
    description: 'Kontak ons',
    hasMegaMenu: false, // Simple link, no dropdown
  },
};

/**
 * Get main navigation items in display order
 */
export function getMainNavigation(): MegaMenuItem[] {
  return [
    MEGA_MENU_CONFIG.kos,
    MEGA_MENU_CONFIG.mode,
    MEGA_MENU_CONFIG.skoonheid,
    MEGA_MENU_CONFIG.gesondheid,
    MEGA_MENU_CONFIG.bekendes,
    MEGA_MENU_CONFIG.leefstyl,
    MEGA_MENU_CONFIG['jou-lewe'],
    MEGA_MENU_CONFIG.ontspanning,
    MEGA_MENU_CONFIG['rooiwarm-wenners'],
    MEGA_MENU_CONFIG.wen,
    MEGA_MENU_CONFIG.shop,
    MEGA_MENU_CONFIG.kontak,
  ];
}
