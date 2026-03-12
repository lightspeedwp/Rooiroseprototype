/**
 * E-Editions Commerce Data — WooCommerce product configuration for rooi rose e-editions.
 *
 * Sources:
 *  - /guidelines/content/pricing.md (canonical pricing)
 *  - /guidelines/wordpress-migration/third-party-plugins/woocommerce.md
 *  - /guidelines/content/e-editions-user-journeys.md
 *  - /wordpress-export/config/woocommerce-e-editions-setup.md
 *
 * @version 2026-02-26
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SubscriptionPlan {
  id: string;
  sku: string;
  nameAf: string;
  nameEn: string;
  price: number;
  priceFormatted: string;
  billingPeriodAf: string;
  billingPeriodEn: string;
  perIssuePrice?: string;
  savings?: string;
  savingsAf?: string;
  savingsEn?: string;
  wcProductType: string;
  virtual: boolean;
  downloadable: boolean;
  signUpFee: number;
  freeTrialDays: number;
  freeTrialMaxEditions: number;
  taxStatus: string;
  membershipPlan: string;
  highlighted?: boolean;
  badge?: string;
  features: { af: string; en: string }[];
}

export interface SingleIssueProduct {
  skuPattern: string;
  skuExample: string;
  namePatternAf: string;
  namePatternEn: string;
  price: number;
  priceFormatted: string;
  wcProductType: string;
  virtual: boolean;
  catalogVisibility: string;
  accessDuration: string;
  linkedPostType: string;
  metaFields: { key: string; descriptionAf: string; descriptionEn: string }[];
}

export interface MembershipPlan {
  name: string;
  slug: string;
  grantAccessOn: string[];
  contentRestriction: { postType: string; descriptionAf: string; descriptionEn: string }[];
  length: string;
  roles: string;
  freeTrialDays: number;
  freeTrialMaxEditions: number;
}

export interface AccessRule {
  priority: number;
  conditionAf: string;
  conditionEn: string;
  resultAf: string;
  resultEn: string;
  accessType: 'full' | 'single' | 'admin' | 'restricted';
  color: string;
}

export interface PayfastConfig {
  fieldAf: string;
  fieldEn: string;
  valueExample: string;
  descriptionAf: string;
  descriptionEn: string;
  required: boolean;
}

export interface PluginDependency {
  name: string;
  version: string;
  purposeAf: string;
  purposeEn: string;
  license: string;
  url: string;
}

export interface EmailNotification {
  id: string;
  triggerAf: string;
  triggerEn: string;
  subjectAf: string;
  subjectEn: string;
  templatePath: string;
}

export interface SetupStep {
  stepNumber: number;
  titleAf: string;
  titleEn: string;
  descriptionAf: string;
  descriptionEn: string;
  fields?: { label: string; value: string; hint?: string }[];
}

export interface UserState {
  id: string;
  labelAf: string;
  labelEn: string;
  descriptionAf: string;
  descriptionEn: string;
  archiveBehaviourAf: string;
  archiveBehaviourEn: string;
  color: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

export const PLUGIN_DEPENDENCIES: PluginDependency[] = [
  {
    name: 'WooCommerce',
    version: '9.x+',
    purposeAf: 'Basis e-handel, mandjie, betaalpunt, bestellings',
    purposeEn: 'Base e-commerce, cart, checkout, orders',
    license: 'Free',
    url: 'https://woocommerce.com',
  },
  {
    name: 'WooCommerce Subscriptions',
    version: '6.x+',
    purposeAf: 'Herhalende fakturering vir intekeningprodukte',
    purposeEn: 'Recurring billing engine for subscription products',
    license: 'Paid',
    url: 'https://woocommerce.com/products/woocommerce-subscriptions/',
  },
  {
    name: 'WooCommerce Memberships',
    version: '1.26+',
    purposeAf: 'Inhoudtoegangbeheer gekoppel aan produkte/intekenings',
    purposeEn: 'Content access control layer tied to subscriptions/purchases',
    license: 'Paid',
    url: 'https://woocommerce.com/products/woocommerce-memberships/',
  },
  {
    name: 'Payfast Payment Gateway',
    version: 'Latest',
    purposeAf: 'Suid-Afrikaanse kaart- en EFT-betalings',
    purposeEn: 'South African card & EFT payment processing',
    license: 'Free',
    url: 'https://woocommerce.com/products/payfast-payment-gateway/',
  },
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: '1-month',
    sku: 'DP-SUB-1M',
    nameAf: 'Digitale Intekening \u2014 1 Maand',
    nameEn: 'Digital Subscription \u2014 1 Month',
    price: 140,
    priceFormatted: 'R140',
    billingPeriodAf: 'per maand',
    billingPeriodEn: 'per month',
    perIssuePrice: 'R35',
    wcProductType: 'Simple Subscription',
    virtual: true,
    downloadable: false,
    signUpFee: 0,
    freeTrialDays: 14,
    freeTrialMaxEditions: 2,
    taxStatus: 'taxable',
    membershipPlan: 'e-uitgawe-intekenaar',
    features: [
      { af: 'Alle e-uitgawes vanaf intekening', en: 'All e-editions from subscription date' },
      { af: 'Enige toestel', en: 'Any device' },
      { af: '14-dae gratis proeftydperk', en: '14-day free trial' },
      { af: 'Kanselleer enige tyd', en: 'Cancel anytime' },
    ],
  },
  {
    id: '3-month',
    sku: 'DP-SUB-3M',
    nameAf: 'Digitale Intekening \u2014 3 Maande',
    nameEn: 'Digital Subscription \u2014 3 Months',
    price: 390,
    priceFormatted: 'R390',
    billingPeriodAf: 'per kwartaal',
    billingPeriodEn: 'per quarter',
    perIssuePrice: 'R32.50',
    savings: 'R30',
    savingsAf: 'Spaar R30',
    savingsEn: 'Save R30',
    wcProductType: 'Simple Subscription',
    virtual: true,
    downloadable: false,
    signUpFee: 0,
    freeTrialDays: 14,
    freeTrialMaxEditions: 2,
    taxStatus: 'taxable',
    membershipPlan: 'e-uitgawe-intekenaar',
    highlighted: true,
    features: [
      { af: 'Alle e-uitgawes vanaf intekening', en: 'All e-editions from subscription date' },
      { af: 'Enige toestel', en: 'Any device' },
      { af: '14-dae gratis proeftydperk', en: '14-day free trial' },
      { af: 'Spaar R30 per kwartaal', en: 'Save R30 per quarter' },
    ],
  },
  {
    id: '12-month',
    sku: 'DP-SUB-12M',
    nameAf: 'Digitale Intekening \u2014 12 Maande',
    nameEn: 'Digital Subscription \u2014 12 Months',
    price: 1400,
    priceFormatted: 'R1\u202F400',
    billingPeriodAf: 'per jaar',
    billingPeriodEn: 'per year',
    perIssuePrice: '~R26.92',
    savings: 'R420',
    savingsAf: 'Spaar R420',
    savingsEn: 'Save R420',
    wcProductType: 'Simple Subscription',
    virtual: true,
    downloadable: false,
    signUpFee: 0,
    freeTrialDays: 14,
    freeTrialMaxEditions: 2,
    taxStatus: 'taxable',
    membershipPlan: 'e-uitgawe-intekenaar',
    highlighted: true,
    badge: 'Beste waarde / Best value',
    features: [
      { af: 'Alle e-uitgawes vanaf intekening', en: 'All e-editions from subscription date' },
      { af: 'Enige toestel', en: 'Any device' },
      { af: '14-dae gratis proeftydperk', en: '14-day free trial' },
      { af: 'Spaar R420 per jaar', en: 'Save R420 per year' },
    ],
  },
];

export const SINGLE_ISSUE_PRODUCT: SingleIssueProduct = {
  skuPattern: 'DP-EE-YYYY-MM-DD',
  skuExample: 'DP-EE-2026-02-21',
  namePatternAf: 'E-Uitgawe: {edition_date}',
  namePatternEn: 'E-Edition: {edition_date}',
  price: 35,
  priceFormatted: 'R35',
  wcProductType: 'Simple Product (Virtual)',
  virtual: true,
  catalogVisibility: 'hidden',
  accessDuration: 'Permanent (no expiry)',
  linkedPostType: 'dp_eedition',
  metaFields: [
    { key: '_dp_eedition_post_id', descriptionAf: 'Post ID van die gekoppelde dp_eedition', descriptionEn: 'Post ID of the linked dp_eedition post' },
    { key: '_linked_product_id', descriptionAf: 'Produk-ID gestoor op die dp_eedition pos (omgekeerde skakel)', descriptionEn: 'Product ID stored on the dp_eedition post (reverse link)' },
  ],
};

export const MEMBERSHIP_PLAN: MembershipPlan = {
  name: 'E-Uitgawe Intekenaar',
  slug: 'e-uitgawe-intekenaar',
  grantAccessOn: ['DP-SUB-1M', 'DP-SUB-3M', 'DP-SUB-12M'],
  contentRestriction: [
    {
      postType: 'dp_eedition',
      descriptionAf: 'Uitgawes gepubliseer op of na die lidmaatskap-begindatum slegs. Intekenare kry NIE toegang tot die volledige historiese argief nie.',
      descriptionEn: 'Editions published on or after membership start date only. Subscribers do NOT get access to the full historical archive.',
    },
  ],
  length: 'Tied to subscription status',
  roles: 'subscriber / customer (no role change)',
  freeTrialDays: 14,
  freeTrialMaxEditions: 2,
};

export const ACCESS_RULES: AccessRule[] = [
  {
    priority: 1,
    conditionAf: 'Aktiewe "E-Uitgawe Intekenaar"-lid?',
    conditionEn: 'Active "E-Uitgawe Intekenaar" member?',
    resultAf: 'VOLLE TOEGANG (alle uitgawes)',
    resultEn: 'FULL ACCESS (all editions)',
    accessType: 'full',
    color: 'emerald',
  },
  {
    priority: 2,
    conditionAf: 'Hierdie spesifieke uitgawe gekoop?',
    conditionEn: 'Purchased this specific edition?',
    resultAf: 'ENKEL TOEGANG (net hierdie uitgawe)',
    resultEn: 'SINGLE ACCESS (this edition only)',
    accessType: 'single',
    color: 'blue',
  },
  {
    priority: 3,
    conditionAf: 'Admin of Redakteur?',
    conditionEn: 'Admin or Editor?',
    resultAf: 'VOLLE TOEGANG (redaksionele voorskou)',
    resultEn: 'FULL ACCESS (editorial preview)',
    accessType: 'admin',
    color: 'amber',
  },
  {
    priority: 4,
    conditionAf: 'Niks van bogenoemde',
    conditionEn: 'None of the above',
    resultAf: 'BEPERK (wys toegangshek)',
    resultEn: 'RESTRICTED (show access gate)',
    accessType: 'restricted',
    color: 'red',
  },
];

export const USER_STATES: UserState[] = [
  {
    id: 'logged-out',
    labelAf: 'Uitgeteken (Gas)',
    labelEn: 'Logged Out (Guest)',
    descriptionAf: 'Geen sessie. Kan blaai en pryse sien maar moet registreer/aanmeld om te koop.',
    descriptionEn: 'No session. Can browse and see prices but must register/login to purchase.',
    archiveBehaviourAf: 'Alle uitgawes sigbaar. "Koop" knoppe voeg by mandjie. CTA-vaandel vir intekening.',
    archiveBehaviourEn: 'All editions visible. "Buy" buttons add to cart. CTA banner for subscription.',
    color: 'gray',
  },
  {
    id: 'trial',
    labelAf: 'Proef Gebruiker',
    labelEn: 'Trial User',
    descriptionAf: '14-dae gratis proeftydperk. Maksimum 2 e-uitgawes. Kaart op leer via Payfast.',
    descriptionEn: '14-day free trial. Maximum 2 e-editions. Card on file via Payfast.',
    archiveBehaviourAf: 'Maks 2 uitgawes toeganklik met "Proef"-kenteken. Ander wys "Koop (R35)". Proef-aftelling.',
    archiveBehaviourEn: 'Max 2 editions accessible with "Trial" badge. Others show "Buy (R35)". Trial countdown.',
    color: 'amber',
  },
  {
    id: 'active-subscriber',
    labelAf: 'Aktiewe Intekenaar',
    labelEn: 'Active Subscriber',
    descriptionAf: 'Aktiewe intekening. Kan uitgawes lees vanaf intekeningbegindatum vorentoe.',
    descriptionEn: 'Active subscription. Can access editions from subscription start date onward.',
    archiveBehaviourAf: 'Alle uitgawes sigbaar. "Lees" knoppe skakel direk. Groen "Intekenaar"-kenteken.',
    archiveBehaviourEn: 'All editions visible. "Read" buttons link directly. Green "Subscriber" badge.',
    color: 'emerald',
  },
  {
    id: 'expired-subscriber',
    labelAf: 'Vervalde Intekenaar',
    labelEn: 'Expired Subscriber',
    descriptionAf: 'Intekening verval/gekanselleer. Behou toegang tot individueel gekoopte uitgawes slegs.',
    descriptionEn: 'Subscription expired/cancelled. Retains access to individually purchased editions only.',
    archiveBehaviourAf: 'Alle uitgawes wys "Koop (R35)". Hernu intekening-vaandel bo-aan.',
    archiveBehaviourEn: 'All editions show "Buy (R35)". Re-subscribe banner at top.',
    color: 'red',
  },
  {
    id: 'purchased-only',
    labelAf: 'Aangemeld \u2014 Gekoop',
    labelEn: 'Logged In \u2014 Purchased',
    descriptionAf: 'Geen intekening maar het spesifieke uitgawes individueel gekoop (R35 eenmalig).',
    descriptionEn: 'No subscription but has individually purchased specific editions (R35 one-off).',
    archiveBehaviourAf: 'Gekoopte uitgawes wys "Lees". Ander wys "Koop (R35)". Sybalk intekening CTA.',
    archiveBehaviourEn: 'Purchased editions show "Read". Others show "Buy (R35)". Sidebar subscribe CTA.',
    color: 'blue',
  },
  {
    id: 'no-purchases',
    labelAf: 'Aangemeld \u2014 Geen Aankope',
    labelEn: 'Logged In \u2014 No Purchases',
    descriptionAf: 'Aangemeld maar geen intekening of aankope nie.',
    descriptionEn: 'Logged in but no subscription or purchases.',
    archiveBehaviourAf: 'Alle uitgawes wys "Koop (R35)". Prominente intekening CTA.',
    archiveBehaviourEn: 'All editions show "Buy (R35)". Prominent subscribe CTA.',
    color: 'gray',
  },
];

export const PAYFAST_CONFIG: PayfastConfig[] = [
  { fieldAf: 'Handelaar-ID', fieldEn: 'Merchant ID', valueExample: '10000100', descriptionAf: 'Unieke Payfast handelaar identifikasie', descriptionEn: 'Unique Payfast merchant identification', required: true },
  { fieldAf: 'Handelaar-sleutel', fieldEn: 'Merchant Key', valueExample: '46f0cd694581a', descriptionAf: 'Privaat handelaar-sleutel vir API-outentifikasie', descriptionEn: 'Private merchant key for API authentication', required: true },
  { fieldAf: 'Wagwoord', fieldEn: 'Passphrase', valueExample: '••••••••', descriptionAf: 'Bykomende sekuriteitswagwoord (ITN-verifikasie)', descriptionEn: 'Additional security passphrase (ITN verification)', required: true },
  { fieldAf: 'Toetsmodus', fieldEn: 'Sandbox Mode', valueExample: 'Yes (dev) / No (live)', descriptionAf: 'Skakel sandput-modus aan vir toetsing', descriptionEn: 'Enable sandbox mode for testing', required: true },
  { fieldAf: 'Tokenisasie', fieldEn: 'Tokenisation', valueExample: 'Enabled', descriptionAf: 'Vereis vir herhalende betalings (intekenings + proeftydperk)', descriptionEn: 'Required for recurring payments (subscriptions + free trial)', required: true },
  { fieldAf: 'ITN-terugvoer URL', fieldEn: 'ITN Callback URL', valueExample: '/wc-api/WC_Gateway_Payfast/', descriptionAf: 'Onmiddellike transaksiemeldingswebhaak', descriptionEn: 'Instant Transaction Notification webhook endpoint', required: true },
  { fieldAf: 'Betaalmetodes', fieldEn: 'Payment Methods', valueExample: 'Credit Card, EFT', descriptionAf: 'Ondersteunde betaalopsies', descriptionEn: 'Supported payment options', required: false },
];

export const EMAIL_NOTIFICATIONS: EmailNotification[] = [
  { id: 'new-subscription', triggerAf: 'Aankoop voltooi', triggerEn: 'Purchase complete', subjectAf: 'Welkom by rooi rose E-Uitgawes!', subjectEn: 'Welcome to rooi rose E-Editions!', templatePath: 'woocommerce/emails/customer-new-subscription.php' },
  { id: 'renewal', triggerAf: 'Suksesvolle hernuwing', triggerEn: 'Successful renewal', subjectAf: 'Jou intekening is hernu', subjectEn: 'Your subscription has been renewed', templatePath: 'woocommerce/emails/customer-renewal-invoice.php' },
  { id: 'cancelled', triggerAf: 'Gebruiker kanselleer', triggerEn: 'User cancels', subjectAf: 'Jou intekening is gekanselleer', subjectEn: 'Your subscription has been cancelled', templatePath: 'woocommerce/emails/customer-subscription-cancelled.php' },
  { id: 'payment-failed', triggerAf: 'Kaart geweier', triggerEn: 'Card declined', subjectAf: 'Betaling onsuksesvol \u2014 werk asb jou kaartbesonderhede by', subjectEn: 'Payment unsuccessful \u2014 please update your card details', templatePath: 'woocommerce/emails/customer-payment-retry.php' },
  { id: 'expired', triggerAf: 'Einde van termyn', triggerEn: 'End of term', subjectAf: 'Jou intekening het verval', subjectEn: 'Your subscription has expired', templatePath: 'woocommerce/emails/customer-subscription-expired.php' },
  { id: 'new-edition', triggerAf: 'Nuwe e-uitgawe gepubliseer', triggerEn: 'New e-edition published', subjectAf: 'Nuwe e-uitgawe beskikbaar!', subjectEn: 'New e-edition available!', templatePath: 'woocommerce/emails/customer-new-edition.php' },
];

export const SUBSCRIPTION_SETUP_STEPS: SetupStep[] = [
  {
    stepNumber: 1,
    titleAf: 'Installeer vereiste inproppe',
    titleEn: 'Install required plugins',
    descriptionAf: 'Installeer en aktiveer WooCommerce, WooCommerce Subscriptions, WooCommerce Memberships, en Payfast Payment Gateway.',
    descriptionEn: 'Install and activate WooCommerce, WooCommerce Subscriptions, WooCommerce Memberships, and Payfast Payment Gateway.',
  },
  {
    stepNumber: 2,
    titleAf: 'Stel Payfast op',
    titleEn: 'Configure Payfast',
    descriptionAf: 'Gaan na WooCommerce \u2192 Settings \u2192 Payments \u2192 Payfast. Voer Merchant ID, Key, en Passphrase in. Aktiveer tokenisasie vir herhalende betalings.',
    descriptionEn: 'Go to WooCommerce \u2192 Settings \u2192 Payments \u2192 Payfast. Enter Merchant ID, Key, and Passphrase. Enable tokenisation for recurring payments.',
  },
  {
    stepNumber: 3,
    titleAf: 'Skep intekeningprodukte',
    titleEn: 'Create subscription products',
    descriptionAf: 'Gaan na WooCommerce \u2192 Products \u2192 Add New. Skep 3 produkte: 1 Maand (R140), 3 Maande (R390), 12 Maande (R1\u202F400). Stel elkeen as "Simple Subscription", Virtueel, met 14-dae gratis proeftydperk.',
    descriptionEn: 'Go to WooCommerce \u2192 Products \u2192 Add New. Create 3 products: 1 Month (R140), 3 Months (R390), 12 Months (R1,400). Set each as "Simple Subscription", Virtual, with 14-day free trial.',
    fields: [
      { label: 'Product Type', value: 'Simple Subscription' },
      { label: 'Virtual', value: 'Yes' },
      { label: 'Price', value: 'R140 / R390 / R1,400' },
      { label: 'Free Trial', value: '14 days' },
      { label: 'Sign-up Fee', value: 'R0' },
      { label: 'Subscription Length', value: 'Never expire' },
    ],
  },
  {
    stepNumber: 4,
    titleAf: 'Stel lidmaatskapplan op',
    titleEn: 'Configure membership plan',
    descriptionAf: 'Gaan na WooCommerce \u2192 Memberships \u2192 Membership Plans \u2192 Add Plan. Skep "E-Uitgawe Intekenaar". Koppel aan alle 3 intekeningprodukte. Voeg inhoudsbeperking by vir dp_eedition pos-tipe.',
    descriptionEn: 'Go to WooCommerce \u2192 Memberships \u2192 Membership Plans \u2192 Add Plan. Create "E-Uitgawe Intekenaar". Link to all 3 subscription products. Add content restriction for dp_eedition post type.',
    fields: [
      { label: 'Plan Name', value: 'E-Uitgawe Intekenaar' },
      { label: 'Slug', value: 'e-uitgawe-intekenaar' },
      { label: 'Grant Access', value: 'On purchase of DP-SUB-1M, DP-SUB-3M, DP-SUB-12M' },
      { label: 'Content Restriction', value: 'Post Type: dp_eedition (All)' },
    ],
  },
  {
    stepNumber: 5,
    titleAf: 'Skep eerste e-uitgawe produkte',
    titleEn: 'Create first e-edition products',
    descriptionAf: 'Vir elke e-uitgawe: skep Simple Product (Virtueel, Versteek in katalogus), stel prys op R35, koppel dp_eedition pos via _dp_eedition_post_id meta. Laai PDF op na Issuu, plak die inbed-kode in die produkinhoud.',
    descriptionEn: 'For each e-edition: create Simple Product (Virtual, Hidden catalog), set price to R35, link dp_eedition post via _dp_eedition_post_id meta. Upload PDF to Issuu, paste embed code in product content.',
    fields: [
      { label: 'Product Type', value: 'Simple Product' },
      { label: 'Virtual', value: 'Yes' },
      { label: 'Price', value: 'R35' },
      { label: 'SKU', value: 'DP-EE-YYYY-MM-DD' },
      { label: 'Catalog Visibility', value: 'Hidden' },
    ],
  },
  {
    stepNumber: 6,
    titleAf: 'Toets die volledige vloei',
    titleEn: 'Test the full flow',
    descriptionAf: 'Aktiveer Payfast sandputmodus. Toets: intekening-aankoop, gratis proeftydperk, enkelkoop R35, toegangsbeheer (beperk/ontsluit), hernuwing, kansellasie, en e-pos kennisgewings.',
    descriptionEn: 'Enable Payfast sandbox mode. Test: subscription purchase, free trial, single purchase R35, access control (restrict/unlock), renewal, cancellation, and email notifications.',
  },
];

export const COMMERCE_BLOCKS = [
  {
    name: 'dp/eedition-access',
    titleAf: '⛔ E-Uitgawe Toegangshek (VEROUDERD)',
    titleEn: '⛔ E-Edition Access Gate (DEPRECATED)',
    descriptionAf: 'VEROUDERD — Vervang deur WooCommerce Memberships inhoudbeperking. Blok is uit die inprop verwyder.',
    descriptionEn: 'DEPRECATED — Replaced by WooCommerce Memberships content restriction. Block deleted from plugin.',
    states: 4,
    stateLabels: ['subscription', 'purchased', 'admin', 'restricted'],
  },
  {
    name: 'dp/pricing-table',
    titleAf: '⛔ Prystafel (VEROUDERD)',
    titleEn: '⛔ Pricing Table (DEPRECATED)',
    descriptionAf: 'VEROUDERD — Vervang deur kernblokke-patroon section-pricing-table.php. Blok is uit die inprop verwyder.',
    descriptionEn: 'DEPRECATED — Replaced by core blocks pattern section-pricing-table.php. Block deleted from plugin.',
    states: 1,
    stateLabels: ['default'],
  },
  {
    name: 'dp/subscription-cta',
    titleAf: 'Intekening CTA',
    titleEn: 'Subscription CTA',
    descriptionAf: 'Kleiner inlyn CTA-blok vir sybalke, argiewe, en artikelvoetskrifte',
    descriptionEn: 'Smaller inline CTA block for sidebars, archives, and article footers',
    states: 1,
    stateLabels: ['default'],
  },
  {
    name: 'dp/user-library',
    titleAf: 'My E-Uitgawes Biblioteek',
    titleEn: 'My E-Editions Library',
    descriptionAf: 'Bediener-gerenderde blok wat die huidige gebruiker se gekoopte en intekening-toeganklike uitgawes wys',
    descriptionEn: 'Server-rendered block showing current user\'s purchased and subscription-accessible editions',
    states: 3,
    stateLabels: ['subscriber', 'purchased-only', 'not-logged-in'],
  },
];

// ─── Summary Stats ──────────────────────────────────────────────────────────

export const COMMERCE_SUMMARY = {
  subscriptionPlans: SUBSCRIPTION_PLANS.length,
  singleIssuePrice: 'R35',
  membershipPlans: 1,
  accessRules: ACCESS_RULES.length,
  commerceBlocks: COMMERCE_BLOCKS.length,
  emailNotifications: EMAIL_NOTIFICATIONS.length,
  plugins: PLUGIN_DEPENDENCIES.length,
  userStates: USER_STATES.length,
  setupSteps: SUBSCRIPTION_SETUP_STEPS.length,
};