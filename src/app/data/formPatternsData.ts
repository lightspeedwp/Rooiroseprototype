/**
 * formPatternsData.ts — Form pattern inventory for the FormBuilderPreview dev tool.
 *
 * Catalogues every form in the codebase: fields, validation, WP mapping
 * (Gravity Forms / WooCommerce / WordPress native), file path, route.
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'tel'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'date'
  | 'number'
  | 'search'
  | 'hidden';

export type FormCategory =
  | 'submission'
  | 'account'
  | 'commerce'
  | 'newsletter'
  | 'contact'
  | 'search'
  | 'competition';

export type WpHandler =
  | 'gravity-forms'
  | 'woocommerce'
  | 'wp-login'
  | 'wp-register'
  | 'mailpoet'
  | 'wp-search'
  | 'custom-rest';

export interface FormField {
  name: string;
  labelAf: string;
  labelEn: string;
  type: FieldType;
  required: boolean;
  validation?: string; // e.g. "email format", "min 6 chars"
}

export interface FormPattern {
  id: string;
  nameAf: string;
  nameEn: string;
  category: FormCategory;
  routeAf: string;
  routeEn?: string;
  componentFile: string;
  fields: FormField[];
  wpHandler: WpHandler;
  wpFormId?: string; // Gravity Forms ID or WC endpoint
  descAf: string;
  descEn: string;
  hasFileUpload: boolean;
  usesReactHookForm: boolean;
}

// ─── Category metadata ──────────────────────────────────────────────────────

export const FORM_CATEGORIES: {
  id: FormCategory;
  labelAf: string;
  labelEn: string;
  icon: string;
}[] = [
  { id: 'contact', labelAf: 'Kontak', labelEn: 'Contact', icon: '📧' },
  { id: 'submission', labelAf: 'Indiening', labelEn: 'Submission', icon: '📝' },
  { id: 'account', labelAf: 'Rekening', labelEn: 'Account', icon: '👤' },
  { id: 'newsletter', labelAf: 'Nuusbrief', labelEn: 'Newsletter', icon: '📬' },
  { id: 'commerce', labelAf: 'Handel', labelEn: 'Commerce', icon: '🛒' },
  { id: 'competition', labelAf: 'Kompetisie', labelEn: 'Competition', icon: '🏆' },
  { id: 'search', labelAf: 'Soek', labelEn: 'Search', icon: '🔍' },
];

// ─── Form patterns ──────────────────────────────────────────────────────────

export const FORM_PATTERNS: FormPattern[] = [
  // ─ Contact ─
  {
    id: 'contact',
    nameAf: 'Kontakvorm',
    nameEn: 'Contact Form',
    category: 'contact',
    routeAf: '/kontak',
    routeEn: '/contact',
    componentFile: 'src/app/components/patterns/ContactForm.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-1',
    descAf: 'Hoofkontakvorm met naam, e-pos, onderwerp en boodskap. Gebruik react-hook-form met FormField-komponente.',
    descEn: 'Main contact form with name, email, subject and message. Uses react-hook-form with FormField components.',
    hasFileUpload: false,
    usesReactHookForm: true,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true, validation: 'email format' },
      { name: 'subject', labelAf: 'Onderwerp', labelEn: 'Subject', type: 'text', required: true },
      { name: 'message', labelAf: 'Boodskap', labelEn: 'Message', type: 'textarea', required: true },
    ],
  },
  {
    id: 'advertise-enquiry',
    nameAf: 'Advertensie-navraag',
    nameEn: 'Advertising Enquiry',
    category: 'contact',
    routeAf: '/adverteer',
    routeEn: '/advertise',
    componentFile: 'src/app/pages/Advertise.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-2',
    descAf: '7-veld navraagvorm vir adverteerders met maatskappy, tipe en begroting.',
    descEn: '7-field enquiry form for advertisers with company, type and budget.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'company', labelAf: 'Maatskappy', labelEn: 'Company', type: 'text', required: false },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true, validation: 'email format' },
      { name: 'phone', labelAf: 'Telefoon', labelEn: 'Phone', type: 'tel', required: false },
      { name: 'type', labelAf: 'Advertensie-tipe', labelEn: 'Ad Type', type: 'select', required: true },
      { name: 'budget', labelAf: 'Begroting', labelEn: 'Budget', type: 'select', required: false },
      { name: 'message', labelAf: 'Boodskap', labelEn: 'Message', type: 'textarea', required: true },
    ],
  },
  // ─ Submission ─
  {
    id: 'submit-story',
    nameAf: 'Stuur storie in',
    nameEn: 'Submit Story',
    category: 'submission',
    routeAf: '/stuur-in/storie',
    routeEn: '/submit/story',
    componentFile: 'src/app/pages/submit/SubmitStory.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-3',
    descAf: 'Storie-indiening met opskrif, inhoud en foto-oplaai.',
    descEn: 'Story submission with headline, content and photo upload.',
    hasFileUpload: true,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'phone', labelAf: 'Telefoon', labelEn: 'Phone', type: 'tel', required: false },
      { name: 'headline', labelAf: 'Opskrif', labelEn: 'Headline', type: 'text', required: true },
      { name: 'story', labelAf: 'Storie', labelEn: 'Story', type: 'textarea', required: true },
      { name: 'photos', labelAf: "Foto's", labelEn: 'Photos', type: 'file', required: false },
    ],
  },
  {
    id: 'submit-letter',
    nameAf: 'Lesersbrief',
    nameEn: 'Letter to the Editor',
    category: 'submission',
    routeAf: '/stuur-in/lesersbrief',
    routeEn: '/submit/letter-to-the-editor',
    componentFile: 'src/app/pages/submit/SubmitLetter.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-4',
    descAf: 'Lesersbrief met naam, dorp, e-pos en brief.',
    descEn: 'Reader letter with name, town, email and letter.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'town', labelAf: 'Dorp', labelEn: 'Town', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'letter', labelAf: 'Brief', labelEn: 'Letter', type: 'textarea', required: true },
    ],
  },
  {
    id: 'submit-feedback',
    nameAf: 'Terugvoer',
    nameEn: 'Feedback',
    category: 'submission',
    routeAf: '/stuur-in/terugvoer',
    routeEn: '/submit/feedback',
    componentFile: 'src/app/pages/submit/SubmitFeedback.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-5',
    descAf: 'Terugvoervorm met tipe-keuse en boodskap.',
    descEn: 'Feedback form with type selector and message.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'feedbackType', labelAf: 'Tipe terugvoer', labelEn: 'Feedback type', type: 'select', required: true },
      { name: 'message', labelAf: 'Boodskap', labelEn: 'Message', type: 'textarea', required: true },
    ],
  },
  {
    id: 'submit-shoutout',
    nameAf: 'Shoutout',
    nameEn: 'Shoutout',
    category: 'submission',
    routeAf: '/stuur-in/shoutout',
    routeEn: '/submit/shoutout',
    componentFile: 'src/app/pages/submit/SubmitShoutout.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-6',
    descAf: 'Shoutout-indiening met boodskap en opsionele foto.',
    descEn: 'Shoutout submission with message and optional photo.',
    hasFileUpload: true,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'shoutout', labelAf: 'Shoutout', labelEn: 'Shoutout', type: 'textarea', required: true },
      { name: 'photo', labelAf: 'Foto', labelEn: 'Photo', type: 'file', required: false },
    ],
  },
  {
    id: 'submit-event',
    nameAf: 'Dien gebeurtenis in',
    nameEn: 'Submit Event',
    category: 'submission',
    routeAf: '/gebeure/dien-in',
    routeEn: '/events/submit',
    componentFile: 'src/app/pages/SubmitEvent.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-7',
    descAf: '8-veld gebeurtenisvorm met datum, plek en kontakbesonderhede.',
    descEn: '8-field event form with date, venue and contact details.',
    hasFileUpload: true,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'eventTitle', labelAf: 'Gebeurtenis titel', labelEn: 'Event title', type: 'text', required: true },
      { name: 'date', labelAf: 'Datum', labelEn: 'Date', type: 'date', required: true },
      { name: 'venue', labelAf: 'Plek', labelEn: 'Venue', type: 'text', required: true },
      { name: 'description', labelAf: 'Beskrywing', labelEn: 'Description', type: 'textarea', required: true },
      { name: 'contact', labelAf: 'Kontaknommer', labelEn: 'Contact number', type: 'tel', required: false },
      { name: 'image', labelAf: 'Beeld', labelEn: 'Image', type: 'file', required: false },
    ],
  },
  // ─ Account ─
  {
    id: 'register',
    nameAf: 'Registreer',
    nameEn: 'Register',
    category: 'account',
    routeAf: '/registreer',
    routeEn: '/register',
    componentFile: 'src/app/pages/Register.tsx',
    wpHandler: 'wp-register',
    descAf: 'Registrasievorm met naam, van, e-pos, wagwoord en terme-aanvaarding.',
    descEn: 'Registration form with name, surname, email, password and terms acceptance.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'firstName', labelAf: 'Naam', labelEn: 'First name', type: 'text', required: true },
      { name: 'lastName', labelAf: 'Van', labelEn: 'Surname', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true, validation: 'email format' },
      { name: 'password', labelAf: 'Wagwoord', labelEn: 'Password', type: 'password', required: true, validation: 'min 6 chars' },
      { name: 'confirmPassword', labelAf: 'Bevestig wagwoord', labelEn: 'Confirm password', type: 'password', required: true, validation: 'must match password' },
      { name: 'acceptTerms', labelAf: 'Aanvaar terme', labelEn: 'Accept terms', type: 'checkbox', required: true },
    ],
  },
  {
    id: 'login',
    nameAf: 'Teken in',
    nameEn: 'Login',
    category: 'account',
    routeAf: '/my-rekening',
    routeEn: '/my-account',
    componentFile: 'src/app/pages/MyAccount.tsx',
    wpHandler: 'wp-login',
    descAf: 'Aanmeldvorm met e-pos en wagwoord.',
    descEn: 'Login form with email and password.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'password', labelAf: 'Wagwoord', labelEn: 'Password', type: 'password', required: true },
    ],
  },
  {
    id: 'profile-update',
    nameAf: 'Profiel opdateer',
    nameEn: 'Profile Update',
    category: 'account',
    routeAf: '/my-rekening',
    routeEn: '/my-account',
    componentFile: 'src/app/pages/MyAccount.tsx',
    wpHandler: 'custom-rest',
    descAf: 'Profielredigering met vertoonnaam, e-pos en telefoon.',
    descEn: 'Profile editing with display name, email and phone.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'displayName', labelAf: 'Vertoonnaam', labelEn: 'Display name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'phone', labelAf: 'Telefoon', labelEn: 'Phone', type: 'tel', required: false },
    ],
  },
  // ─ Newsletter ─
  {
    id: 'newsletter-subscribe',
    nameAf: 'Nuusbrief-intekening',
    nameEn: 'Newsletter Subscribe',
    category: 'newsletter',
    routeAf: '/nuusbrief-inteken',
    routeEn: '/newsletter-subscribe',
    componentFile: 'src/app/pages/NewsletterSubscribe.tsx',
    wpHandler: 'mailpoet',
    descAf: 'Nuusbriefintekeningvorm met naam, e-pos en belangstellingsmerkkassies.',
    descEn: 'Newsletter subscription form with name, email and interest checkboxes.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true, validation: 'email format' },
      { name: 'interests', labelAf: 'Belangstellings', labelEn: 'Interests', type: 'checkbox', required: false },
    ],
  },
  {
    id: 'article-newsletter',
    nameAf: 'Artikel nuusbriefintekening',
    nameEn: 'Article Newsletter Inline',
    category: 'newsletter',
    routeAf: '/artikel/:slug',
    routeEn: '/article/:slug',
    componentFile: 'src/app/pages/Article.tsx',
    wpHandler: 'mailpoet',
    descAf: 'Inlyn nuusbriefvorm in artikelsydpaneel — slegs e-pos.',
    descEn: 'Inline newsletter form in article sidebar — email only.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
    ],
  },
  // ─ Competition ─
  {
    id: 'competition-entry',
    nameAf: 'Kompetisie-inskrywing',
    nameEn: 'Competition Entry',
    category: 'competition',
    routeAf: '/kompetisies/:slug',
    routeEn: '/competitions/:slug',
    componentFile: 'src/app/pages/CompetitionSingle.tsx',
    wpHandler: 'gravity-forms',
    wpFormId: 'GF-8',
    descAf: 'Kompetisie-inskrywingsvorm met naam, e-pos, telefoon en antwoord.',
    descEn: 'Competition entry form with name, email, phone and answer.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'name', labelAf: 'Naam', labelEn: 'Name', type: 'text', required: true },
      { name: 'email', labelAf: 'E-pos', labelEn: 'Email', type: 'email', required: true },
      { name: 'phone', labelAf: 'Telefoon', labelEn: 'Phone', type: 'tel', required: true },
      { name: 'answer', labelAf: 'Antwoord', labelEn: 'Answer', type: 'text', required: true },
    ],
  },
  // ─ Commerce ─
  {
    id: 'coupon',
    nameAf: 'Koeponkode',
    nameEn: 'Coupon Code',
    category: 'commerce',
    routeAf: '/mandjie',
    routeEn: '/cart',
    componentFile: 'src/app/pages/Cart.tsx',
    wpHandler: 'woocommerce',
    descAf: 'Koeponkode-invoerveld in die inkopiemandjie.',
    descEn: 'Coupon code input field in the shopping cart.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'couponCode', labelAf: 'Koeponkode', labelEn: 'Coupon code', type: 'text', required: true },
    ],
  },
  // ─ Search ─
  {
    id: 'search',
    nameAf: 'Soekbalk',
    nameEn: 'Search Bar',
    category: 'search',
    routeAf: '/soek',
    routeEn: '/search',
    componentFile: 'src/app/pages/SearchResults.tsx',
    wpHandler: 'wp-search',
    descAf: 'Soekvorm met soekterm en filters.',
    descEn: 'Search form with query and filters.',
    hasFileUpload: false,
    usesReactHookForm: false,
    fields: [
      { name: 'query', labelAf: 'Soekterm', labelEn: 'Search query', type: 'search', required: true },
    ],
  },
];

// ─── Summary helpers ────────────────────────────────────────────────────────

export const FORM_SUMMARY = {
  totalForms: FORM_PATTERNS.length,
  totalFields: FORM_PATTERNS.reduce((sum, f) => sum + f.fields.length, 0),
  withFileUpload: FORM_PATTERNS.filter(f => f.hasFileUpload).length,
  withReactHookForm: FORM_PATTERNS.filter(f => f.usesReactHookForm).length,
  gravityForms: FORM_PATTERNS.filter(f => f.wpHandler === 'gravity-forms').length,
  byCategory: FORM_CATEGORIES.map(cat => ({
    ...cat,
    count: FORM_PATTERNS.filter(f => f.category === cat.id).length,
  })),
};
