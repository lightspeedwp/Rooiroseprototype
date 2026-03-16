/**
 * Mega Menu Configuration for rooi rose Magazine
 * Centralized configuration for all 12 top-level navigation items
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @see /src/imports/rooi_rose_mega_menu_and_navigation_prompt.md
 * @version 1.0.0
 * @date 2026-03-15
 */

import type { NavItem } from '../types/navigation';

// ═══════════════════════════════════════════════
// 1. KOS — Editorial Mega Menu (12 subcategories)
// ═══════════════════════════════════════════════

export const KOS_MEGA_MENU: NavItem = {
  id: 'kos',
  label: 'Kos',
  href: '/kos',
  description: 'Resepte en inspirasie vir elke dag',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Maklik & vinnig', href: '/kos/maklik-vinnig' },
          { label: 'Aandetes vir die week', href: '/kos/aandetes-vir-die-week' },
          { label: 'Somerkos', href: '/kos/somerkos' },
          { label: 'Winterkos', href: '/kos/winterkos' },
          { label: 'Laekoolhidraat', href: '/kos/laekoolhidraat' },
          { label: 'Vegetaries', href: '/kos/vegetaries' },
        ],
        columns: 2,
      },
      {
        links: [
          { label: 'Gebak', href: '/kos/gebak' },
          { label: 'Nagereg', href: '/kos/nagereg' },
          { label: 'Drankies', href: '/kos/drankies' },
          { label: 'Jy kan', href: '/kos/jy-kan' },
          { label: 'Nuut & Nou', href: '/kos/nuut-en-nou' },
          { label: 'Recipes in English', href: '/kos/recipes-in-english' },
        ],
        columns: 2,
      },
    ],
    // Featured content - dynamically populated from posts
    featured: {
      title: 'Somerse slaai vir elke geleentheid',
      href: '/kos/somerse-slaai-vir-elke-geleentheid',
      excerpt: 'Vars, kleurvolle slaaie wat maklik is om te maak en perfek vir somerpartytjies.',
      imageUrl: 'unsplash://summer-salad-food-fresh',
      categoryLabel: 'Somerkos',
      author: 'Annemarie Cillié',
      date: '2026-03-14',
    },
    trending: [
      { title: 'Vinnige weekaand-ontbyt resepte', href: '/kos/vinnige-weekaand-ontbyt', categoryLabel: 'Maklik & vinnig' },
      { title: 'Laekoolhidraat aandete in 30 minute', href: '/kos/laekoolhidraat-aandete-30-minute', categoryLabel: 'Laekoolhidraat' },
      { title: 'Die beste sjokolade-koek ooit', href: '/kos/beste-sjokolade-koek', categoryLabel: 'Gebak' },
    ],
    cta: {
      label: 'Sien alle resepte',
      href: '/kos',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 2. MODE — Editorial Mega Menu (3 subcategories)
// ═══════════════════════════════════════════════

export const MODE_MEGA_MENU: NavItem = {
  id: 'mode',
  label: 'Mode',
  href: '/mode',
  description: 'Styl-inspirasie en modeneigings',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Dra dit so', href: '/mode/dra-dit-so' },
          { label: 'Wenke', href: '/mode/wenke' },
          { label: 'Trends', href: '/mode/nuut-en-nou-mode' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Voorjaar se mooiste modeneigings',
      href: '/mode/voorjaar-modeneigings',
      excerpt: 'Van pastelkleure tot blokkiepatrone — alles wat jy moet weet oor voorjaar se style.',
      imageUrl: 'unsplash://spring-fashion-runway-style',
      categoryLabel: 'Trends',
      author: 'Lize Myburgh',
      date: '2026-03-13',
    },
    trending: [
      { title: 'Kapsule-kabinet vir elke seisoen', href: '/mode/kapsule-kabinet', categoryLabel: 'Wenke' },
      { title: 'Die denim-gids vir 2026', href: '/mode/denim-gids-2026', categoryLabel: 'Trends' },
      { title: 'Wenke vir klein vrouens', href: '/mode/wenke-klein-vrouens', categoryLabel: 'Dra dit so' },
    ],
    cta: {
      label: 'Sien alle mode',
      href: '/mode',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 3. SKOONHEID — Editorial Mega Menu (5 subcategories)
// ═══════════════════════════════════════════════

export const SKOONHEID_MEGA_MENU: NavItem = {
  id: 'skoonheid',
  label: 'Skoonheid',
  href: '/skoonheid',
  description: 'Velversorging, grimering en skoonheidswenke',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Hare', href: '/skoonheid/hare' },
          { label: 'Velsorg', href: '/skoonheid/velsorg' },
          { label: 'Grimering', href: '/skoonheid/grimering' },
          { label: 'Naels', href: '/skoonheid/naels' },
          { label: 'Wenke', href: '/skoonheid/wenke' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Die beste velsorgroetines vir elke ouderdom',
      href: '/skoonheid/velsorgroetines-elke-ouderdom',
      excerpt: 'Ontdek watter produkte jou vel werklik nodig het in jou 20s, 30s, 40s en 50s.',
      imageUrl: 'unsplash://skincare-beauty-routine-products',
      categoryLabel: 'Velsorg',
      author: 'Marna Swart',
      date: '2026-03-12',
    },
    trending: [
      { title: 'Voorjaar se grimering-neigings', href: '/skoonheid/voorjaar-grimering', categoryLabel: 'Grimering' },
      { title: 'Nagel-kuns vir beginners', href: '/skoonheid/nagel-kuns-beginners', categoryLabel: 'Naels' },
      { title: 'DIY haarmaskers vir droeë hare', href: '/skoonheid/diy-haarmaskers', categoryLabel: 'Hare' },
    ],
    cta: {
      label: 'Sien alle skoonheid',
      href: '/skoonheid',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 4. GESONDHEID — Editorial Mega Menu (3 subcategories)
// ═══════════════════════════════════════════════

export const GESONDHEID_MEGA_MENU: NavItem = {
  id: 'gesondheid',
  label: 'Gesondheid',
  href: '/gesondheid',
  description: 'Welstand, fiksheid en gesonde leefstyl',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Leef gesond', href: '/gesondheid/leef-gesond' },
          { label: 'Dieet', href: '/gesondheid/dieet' },
          { label: 'Fiksheid', href: '/gesondheid/fiksheid' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: '10 eenvoudige stappe na beter gesondheid',
      href: '/gesondheid/10-stappe-beter-gesondheid',
      excerpt: 'Klein veranderings wat groot verskille maak in jou daaglikse lewe en welstand.',
      imageUrl: 'unsplash://wellness-yoga-fitness-healthy',
      categoryLabel: 'Leef gesond',
      author: 'Dr. Ilze Visser',
      date: '2026-03-11',
    },
    trending: [
      { title: 'Die waarheid oor intermittent fasting', href: '/gesondheid/intermittent-fasting', categoryLabel: 'Dieet' },
      { title: 'Tuisoefeninge sonder toerusting', href: '/gesondheid/tuisoefeninge', categoryLabel: 'Fiksheid' },
      { title: 'Slaap beter met hierdie wenke', href: '/gesondheid/slaap-beter', categoryLabel: 'Leef gesond' },
    ],
    cta: {
      label: 'Sien alle gesondheid',
      href: '/gesondheid',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 5. BEKENDES — Editorial Mega Menu (1 subcategory)
// ═══════════════════════════════════════════════

export const BEKENDES_MEGA_MENU: NavItem = {
  id: 'bekendes',
  label: 'Bekendes',
  href: '/bekendes',
  description: 'Nuus en onderhoude met jou gunsteling bekendes',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Ons mense', href: '/bekendes/ons-mense' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Eksklusief: Onderhoud met Charlize Theron',
      href: '/bekendes/charlize-theron-onderhoud',
      excerpt: 'Die Suid-Afrikaanse aktrise praat oor haar nuutste rol en haar liefde vir haar geboorteland.',
      imageUrl: 'unsplash://celebrity-interview-red-carpet-glamour',
      categoryLabel: 'Ons mense',
      author: 'Karien van der Merwe',
      date: '2026-03-10',
    },
    trending: [
      { title: 'Boer Soek n Vrou: Nuwe seisoen begin', href: '/bekendes/boer-soek-vrou-nuwe-seisoen', categoryLabel: 'Ons mense' },
      { title: 'Kurt Darren se emosionele reis', href: '/bekendes/kurt-darren-reis', categoryLabel: 'Ons mense' },
      { title: 'Die Nataniël-storie', href: '/bekendes/nataniel-storie', categoryLabel: 'Ons mense' },
    ],
    cta: {
      label: 'Sien alle bekendes',
      href: '/bekendes',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 6. LEEFSTYL — Editorial Mega Menu (4 subcategories)
// ═══════════════════════════════════════════════

export const LEEFSTYL_MEGA_MENU: NavItem = {
  id: 'leefstyl',
  label: 'Leefstyl',
  href: '/leefstyl',
  description: 'Dekor, handwerk en tuinmaak',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Dekor', href: '/leefstyl/dekor' },
          { label: 'Handwerk', href: '/leefstyl/handwerk' },
          { label: 'Tuinmaak', href: '/leefstyl/tuinmaak' },
          { label: 'Doen dit self', href: '/leefstyl/doen-dit-self' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Transformeer jou huis met hierdie voorjaar-dekor idees',
      href: '/leefstyl/voorjaar-dekor-idees',
      excerpt: 'Vars, kleurvolle maniere om jou huis gereed te maak vir die nuwe seisoen.',
      imageUrl: 'unsplash://home-decor-interior-spring-design',
      categoryLabel: 'Dekor',
      author: 'Elize Joubert',
      date: '2026-03-09',
    },
    trending: [
      { title: 'DIY sukkulenttuin vir beginners', href: '/leefstyl/diy-sukkulenttuin', categoryLabel: 'Tuinmaak' },
      { title: 'Klein ruimtes: Maksimeer jou spasie', href: '/leefstyl/klein-ruimtes-spasie', categoryLabel: 'Dekor' },
      { title: 'Maklike handwerkprojekte vir kinders', href: '/leefstyl/handwerk-kinders', categoryLabel: 'Handwerk' },
    ],
    cta: {
      label: 'Sien alle leefstyl',
      href: '/leefstyl',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 7. JOU LEWE — Editorial Mega Menu (6 subcategories)
// ═══════════════════════════════════════════════

export const JOU_LEWE_MEGA_MENU: NavItem = {
  id: 'jou-lewe',
  label: 'Jou lewe',
  href: '/jou-lewe',
  description: 'Verhoudings, ouerskap en persoonlike groei',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Verhoudings', href: '/jou-lewe/verhoudings' },
          { label: 'Ouerskap', href: '/jou-lewe/ouerskap' },
          { label: 'Inspirasie', href: '/jou-lewe/inspirasie' },
          { label: 'In die nuus', href: '/jou-lewe/in-die-nuus' },
          { label: 'Geld & Sukses', href: '/jou-lewe/sukses-en-geld' },
          { label: 'Persoonlike groei', href: '/jou-lewe/persoonlike-groei' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Hoe om gesonde grense in verhoudings te stel',
      href: '/jou-lewe/gesonde-grense-verhoudings',
      excerpt: 'Praktiese wenke vir beter kommunikasie en wedersydse respek in jou verhoudings.',
      imageUrl: 'unsplash://relationship-couple-communication-trust',
      categoryLabel: 'Verhoudings',
      author: 'Marelize Hoffman',
      date: '2026-03-08',
    },
    trending: [
      { title: 'Finansiële beplanning vir beginners', href: '/jou-lewe/finansiele-beplanning', categoryLabel: 'Geld & Sukses' },
      { title: 'Tiener-ouerskap: Navigeer die uitdagings', href: '/jou-lewe/tiener-ouerskap', categoryLabel: 'Ouerskap' },
      { title: 'Vind jou doel: 5 vrae om jouself te vra', href: '/jou-lewe/vind-jou-doel', categoryLabel: 'Persoonlike groei' },
    ],
    cta: {
      label: 'Sien alle jou lewe',
      href: '/jou-lewe',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 8. ONTSPANNING — Editorial Mega Menu (6 subcategories including Podcasts)
// ═══════════════════════════════════════════════

export const ONTSPANNING_MEGA_MENU: NavItem = {
  id: 'ontspanning',
  label: 'Ontspanning',
  href: '/ontspanning',
  description: 'Reis, lees, podcasts en vermaak',
  megaMenu: {
    layout: 'editorial',
    subcategories: [
      {
        links: [
          { label: 'Reis', href: '/ontspanning/reis' },
          { label: 'Blogs', href: '/ontspanning/blogs' },
          { label: 'Leestyd', href: '/lees' },
          { label: 'Podcasts', href: '/rooiroseradio', badge: 'New' },
          { label: 'Video', href: '/ontspanning/video' },
          { label: 'Gebeure', href: '/gebeure' },
        ],
        columns: 1,
      },
    ],
    featured: {
      title: 'Die mooiste reisbestemmings in Suid-Afrika',
      href: '/ontspanning/mooiste-reisbestemmings-sa',
      excerpt: 'Ontdek skuil plekke en bekende gunsteling plekke om hierdie jaar te besoek.',
      imageUrl: 'unsplash://south-africa-travel-landscape-adventure',
      categoryLabel: 'Reis',
      author: 'Hanlie Retief',
      date: '2026-03-07',
    },
    trending: [
      { title: 'Luister: rrRADIO se jongste aflewering', href: '/rooiroseradio/jongste-aflewering', categoryLabel: 'Podcasts', badge: 'Hot' },
      { title: 'Boekresensie: Die nuutste Deon Meyer', href: '/lees/boekresensie-deon-meyer', categoryLabel: 'Leestyd' },
      { title: 'Weekendwegbreek: Kaap se Wynlande', href: '/ontspanning/weekendwegbreek-wynlande', categoryLabel: 'Reis' },
    ],
    cta: {
      label: 'Sien alle ontspanning',
      href: '/ontspanning',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 9. ROOIWARM WENNERS — Utility Mega Menu (Awards + Winners)
// ═══════════════════════════════════════════════

export const ROOIWARM_WENNERS_MEGA_MENU: NavItem = {
  id: 'rooiwarm-wenners',
  label: 'Rooiwarm wenners',
  href: '/rooiwarm-wenners',
  description: 'Beauty & Wellness Awards en Wenners',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Awards & Wenners',
        links: [
          { label: 'Beauty & Wellness Awards', href: '/rooiwarm-wenners/beauty-wellness-awards', badge: 'Hot' },
          { label: 'Wenners 2026', href: '/rooiwarm-wenners/wenners-2026' },
          { label: 'Vorige wenners', href: '/rooiwarm-wenners/wenners' },
          { label: 'Terme en Voorwaardes', href: '/rooiwarm-wenners/terme' },
        ],
      },
    ],
    featured: {
      title: '2026 Beauty & Wellness Awards: Die Wenners',
      href: '/rooiwarm-wenners/2026-beauty-wellness-awards-wenners',
      excerpt: 'Ontdek die produkte wat deur duisende lesers gekies is as die beste van die jaar.',
      imageUrl: 'unsplash://beauty-awards-trophy-product-winner',
      categoryLabel: 'Wenners',
      author: 'rooi rose Redaksie',
      date: '2026-03-06',
    },
    trending: [
      { title: 'Stem vir jou gunstelinge', href: '/rooiwarm-wenners/stem', categoryLabel: 'Awards' },
      { title: 'Top 10 skoonheidsprodukte van 2025', href: '/rooiwarm-wenners/top-10-2025', categoryLabel: 'Wenners' },
    ],
    cta: {
      label: 'Sien alle wenners',
      href: '/rooiwarm-wenners',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 10. WEN — Utility Mega Menu (Competitions)
// ═══════════════════════════════════════════════

export const WEN_MEGA_MENU: NavItem = {
  id: 'wen',
  label: 'Wen',
  href: '/wen',
  description: 'Kompetisies en pryse',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Kompetisies',
        links: [
          { label: 'Huidige kompetisies', href: '/wen', badge: 'Hot' },
          { label: 'Ma Dogter Kompetisie', href: '/wen/ma-dogter-kompetisie' },
          { label: 'Inskrywings', href: '/wen/inskrywings' },
          { label: 'Terme en Voorwaardes', href: '/kompetisie-terme-en-voorwaardes' },
        ],
      },
    ],
    featured: {
      title: 'Wen \'n wonderlike spabesoek ter waarde van R10 000',
      href: '/wen/spa-besoek-r10000',
      excerpt: 'Sluit in ontspanning, masserings en skoonheidsbehandelings by \'n luukse spa.',
      imageUrl: 'unsplash://spa-wellness-relaxation-luxury-prize',
      categoryLabel: 'Wen',
      author: 'rooi rose Redaksie',
      date: '2026-03-05',
    },
    trending: [
      { title: 'Wenner aangekondig: Februarie kompetisie', href: '/wen/februarie-wenner', categoryLabel: 'Inskrywings' },
      { title: 'Hoe om te wen: Wenke van ons wenners', href: '/wen/hoe-om-te-wen', categoryLabel: 'Kompetisies' },
    ],
    cta: {
      label: 'Sien alle kompetisies',
      href: '/wen',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 11. SHOP — Utility Mega Menu (WooCommerce)
// ═══════════════════════════════════════════════

export const SHOP_MEGA_MENU: NavItem = {
  id: 'shop',
  label: 'Shop',
  href: '/winkel',
  description: 'rooi rose winkel en inskrywings',
  megaMenu: {
    layout: 'utility',
    subcategories: [
      {
        title: 'Winkel',
        links: [
          { label: 'Alles', href: '/winkel' },
          { label: 'rooi rose swag', href: '/winkel/kategorie/swag' },
          { label: 'Mandjie', href: '/mandjie' },
          { label: 'My Rekening', href: '/my-rekening' },
        ],
      },
      {
        title: 'Inteken',
        links: [
          { label: 'Inteken-opsies', href: '/inteken' },
          { label: 'E-uitgawe', href: '/inteken/e-uitgawe' },
          { label: 'Druk en Pos', href: '/inteken/aflewering' },
          { label: 'E-uitgawes winkel', href: '/e-uitgawes' },
        ],
      },
    ],
    featured: {
      title: 'Teken in vir rooi rose e-uitgawe',
      href: '/inteken/e-uitgawe',
      excerpt: 'Kry elke maand se tydskrif digitaal op jou foon of tablet - slegs R99/maand.',
      imageUrl: 'unsplash://magazine-digital-tablet-reading-subscription',
      categoryLabel: 'Inteken',
      author: 'rooi rose',
      date: '2026-03-15',
    },
    trending: [
      { title: 'Nuut: rooi rose T-hemde', href: '/winkel/rooi-rose-t-hemde', categoryLabel: 'Swag' },
      { title: 'Geskenkisskrywings beskikbaar', href: '/inteken/geskenk', categoryLabel: 'Inteken' },
    ],
    cta: {
      label: 'Besoek winkel',
      href: '/winkel',
      variant: 'primary',
    },
  },
};

// ═══════════════════════════════════════════════
// 12. KONTAK — Simple Link (No mega menu)
// ═══════════════════════════════════════════════

export const KONTAK_NAV_ITEM: NavItem = {
  id: 'kontak',
  label: 'Kontak',
  href: '/kontak',
  description: 'Kontak ons',
  // No mega menu - simple link
};

// ═══════════════════════════════════════════════
// MASTER NAVIGATION ARRAY (12 items in order)
// ═══════════════════════════════════════════════

export const PRIMARY_NAVIGATION: NavItem[] = [
  KOS_MEGA_MENU,
  MODE_MEGA_MENU,
  SKOONHEID_MEGA_MENU,
  GESONDHEID_MEGA_MENU,
  BEKENDES_MEGA_MENU,
  LEEFSTYL_MEGA_MENU,
  JOU_LEWE_MEGA_MENU,
  ONTSPANNING_MEGA_MENU,
  ROOIWARM_WENNERS_MEGA_MENU,
  WEN_MEGA_MENU,
  SHOP_MEGA_MENU,
  KONTAK_NAV_ITEM,
];