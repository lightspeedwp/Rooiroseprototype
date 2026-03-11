import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { create } from 'xmlbuilder2';
import { glob } from 'glob';

// ─────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────
const isRunFromExportDir = process.cwd().endsWith('wordpress-export');
const CONTENT_DIR = isRunFromExportDir ? path.resolve('../content') : path.resolve('content');
const GUIDELINES_DIR = isRunFromExportDir ? path.resolve('../guidelines') : path.resolve('guidelines');
const OUTPUT_FILE = isRunFromExportDir ? path.resolve('die-papier-content.xml') : path.resolve('wordpress-export/die-papier-content.xml');

// ─────────────────────────────────────────────────────────
// ID Counters
// ─────────────────────────────────────────────────────────
let postIdCounter = 1000;
const getNextId = () => postIdCounter++;

let termIdCounter = 1;
const getNextTermId = () => termIdCounter++;

// ─────────────────────────────────────────────────────────
// Slug Helper
// ─────────────────────────────────────────────────────────
const sanitizeSlug = (text) => {
  return text.toLowerCase()
    .replace(/[^a-z0-9àáâãäåèéêëìíîïòóôõöùúûüý]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// ─────────────────────────────────────────────────────────
// Afrikaans Date Parser
// Handles "19 Des 2025", "28 Februarie 2026", ISO dates, etc.
// ─────────────────────────────────────────────────────────
const AF_MONTHS = {
  'jan': 'Jan', 'januarie': 'January',
  'feb': 'Feb', 'februarie': 'February',
  'mrt': 'Mar', 'maart': 'March',
  'apr': 'Apr', 'april': 'April',
  'mei': 'May',
  'jun': 'Jun', 'junie': 'June',
  'jul': 'Jul', 'julie': 'July',
  'aug': 'Aug', 'augustus': 'August',
  'sep': 'Sep', 'september': 'September',
  'okt': 'Oct', 'oktober': 'October',
  'nov': 'Nov', 'november': 'November',
  'des': 'Dec', 'desember': 'December',
};

function parseDate(dateStr) {
  if (!dateStr) return new Date();
  const trimmed = dateStr.trim();

  // Already ISO-like (2026-02-07 or 2026-02-07 08:00)
  if (/^\d{4}-\d{2}/.test(trimmed)) {
    const d = new Date(trimmed.replace(' ', 'T'));
    return isNaN(d.getTime()) ? new Date() : d;
  }

  // Afrikaans: "19 Des 2025" or "28 Februarie 2026"
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 3) {
    const monthKey = parts[1].toLowerCase();
    const engMonth = AF_MONTHS[monthKey];
    if (engMonth) {
      const rebuilt = `${parts[0]} ${engMonth} ${parts.slice(2).join(' ')}`;
      const d = new Date(rebuilt);
      if (!isNaN(d.getTime())) return d;
    }
  }

  // Fallback: try native parsing
  const d = new Date(trimmed);
  return isNaN(d.getTime()) ? new Date() : d;
}

// ─────────────────────────────────────────────────────────
// CM-004 — Author Registry
// All named authors from /content/collections/*.md
// ─────────────────────────────────────────────────────────
const AUTHORS = [
  { id: 1,  login: 'admin',             email: 'admin@diepapier.co.za',             display: 'Admin',                first: '',         last: '' },
  { id: 2,  login: 'johan-smit',        email: 'johan.smit@diepapier.co.za',        display: 'Johan Smit',           first: 'Johan',    last: 'Smit' },
  { id: 3,  login: 'pieter-vdm',        email: 'pieter.vdm@diepapier.co.za',        display: 'Pieter van der Merwe', first: 'Pieter',   last: 'van der Merwe' },
  { id: 4,  login: 'sandra-botha',      email: 'sandra.botha@diepapier.co.za',      display: 'Sandra Botha',         first: 'Sandra',   last: 'Botha' },
  { id: 5,  login: 'marius-nel',        email: 'marius.nel@diepapier.co.za',        display: 'Marius Nel',           first: 'Marius',   last: 'Nel' },
  { id: 6,  login: 'lize-venter',       email: 'lize.venter@diepapier.co.za',       display: 'Lize Venter',          first: 'Lize',     last: 'Venter' },
  { id: 7,  login: 'kobus-vz',          email: 'kobus.vz@diepapier.co.za',          display: 'Kobus van Zyl',        first: 'Kobus',    last: 'van Zyl' },
  { id: 8,  login: 'thandi-nkosi',      email: 'thandi.nkosi@diepapier.co.za',      display: 'Thandi Nkosi',         first: 'Thandi',   last: 'Nkosi' },
  { id: 9,  login: 'barnard-beukman',   email: 'barnard.beukman@diepapier.co.za',   display: 'Barnard Beukman',      first: 'Barnard',  last: 'Beukman' },
  { id: 10, login: 'jana-marx',         email: 'jana.marx@diepapier.co.za',         display: 'Jana Marx',            first: 'Jana',     last: 'Marx' },
  { id: 11, login: 'rasaad-adams',      email: 'rasaad.adams@diepapier.co.za',      display: 'Rasaad Adams',         first: 'Rasaad',   last: 'Adams' },
  { id: 12, login: 'annemarie-joubert', email: 'annemarie.joubert@diepapier.co.za', display: 'Annemarie Joubert',    first: 'Annemarie', last: 'Joubert' },
  { id: 13, login: 'lizette-vn',        email: 'lizette.vn@diepapier.co.za',        display: 'Lizette van Niekerk',  first: 'Lizette',  last: 'van Niekerk' },
  { id: 14, login: 'christo-lourens',   email: 'christo.lourens@diepapier.co.za',   display: 'Christo Lourens',      first: 'Christo',  last: 'Lourens' },
];

// Build lookup: display name → login slug
const authorLoginMap = new Map();
AUTHORS.forEach(a => authorLoginMap.set(a.display, a.login));
// Also map "Geborg" → admin (sponsored content)
authorLoginMap.set('Geborg', 'admin');

function resolveAuthorLogin(displayName) {
  if (!displayName) return 'admin';
  // Strip parenthetical qualifiers like "Kobus van Zyl (Landboukundige)"
  const clean = displayName.replace(/\s*\(.*?\)\s*$/, '').trim();
  return authorLoginMap.get(clean) || authorLoginMap.get(displayName) || 'admin';
}

// ─────────────────────────────────────────────────────────
// CM-001 — Taxonomy Term Registry
// ─────────────────────────────────────────────────────────
const TAXONOMY_TERMS = [
  // Post categories
  { taxonomy: 'category', slug: 'nuus', name: 'Nuus' },
  { taxonomy: 'category', slug: 'sport', name: 'Sport' },
  { taxonomy: 'category', slug: 'sake', name: 'Sake' },
  { taxonomy: 'category', slug: 'lewenstyl', name: 'Lewenstyl' },
  { taxonomy: 'category', slug: 'kuns-vermaak', name: 'Kuns & Vermaak' },
  { taxonomy: 'category', slug: 'landbou', name: 'Landbou' },
  { taxonomy: 'category', slug: 'tegnologie', name: 'Tegnologie' },
  { taxonomy: 'category', slug: 'misdaad', name: 'Misdaad' },
  { taxonomy: 'category', slug: 'onderwys', name: 'Onderwys' },
  { taxonomy: 'category', slug: 'verkeer', name: 'Verkeer' },

  // Post tags
  { taxonomy: 'post_tag', slug: 'plaaslik', name: 'Plaaslik' },
  { taxonomy: 'post_tag', slug: 'politiek', name: 'Politiek' },
  { taxonomy: 'post_tag', slug: 'skolesport', name: 'Skolesport' },
  { taxonomy: 'post_tag', slug: 'rugby', name: 'Rugby' },
  { taxonomy: 'post_tag', slug: 'finansies', name: 'Finansies' },
  { taxonomy: 'post_tag', slug: 'beleggings', name: 'Beleggings' },
  { taxonomy: 'post_tag', slug: 'ekonomie', name: 'Ekonomie' },
  { taxonomy: 'post_tag', slug: 'besigheid', name: 'Besigheid' },
  { taxonomy: 'post_tag', slug: 'kuns-en-kultuur', name: 'Kuns en kultuur' },
  { taxonomy: 'post_tag', slug: 'inkopies', name: 'Inkopies' },
  { taxonomy: 'post_tag', slug: 'vermaak', name: 'Vermaak' },
  { taxonomy: 'post_tag', slug: 'omgewing', name: 'Omgewing' },
  { taxonomy: 'post_tag', slug: 'landbou', name: 'Landbou' },

  // Sponsor tiers
  { taxonomy: 'dp_sponsor_tier', slug: 'gold', name: 'Gold' },
  { taxonomy: 'dp_sponsor_tier', slug: 'silver', name: 'Silver' },
  { taxonomy: 'dp_sponsor_tier', slug: 'bronze', name: 'Bronze' },
  { taxonomy: 'dp_sponsor_tier', slug: 'partner', name: 'Partner' },

  // Event categories
  { taxonomy: 'dp_event_category', slug: 'markte', name: 'Markte' },
  { taxonomy: 'dp_event_category', slug: 'sport', name: 'Sport' },
  { taxonomy: 'dp_event_category', slug: 'kuns', name: 'Kuns' },
  { taxonomy: 'dp_event_category', slug: 'musiek', name: 'Musiek' },
  { taxonomy: 'dp_event_category', slug: 'gemeenskap', name: 'Gemeenskap' },
  { taxonomy: 'dp_event_category', slug: 'skool', name: 'Skool' },

  // Multimedia categories
  { taxonomy: 'dp_multimedia_category', slug: 'podcasts', name: 'Podcasts' },
  { taxonomy: 'dp_multimedia_category', slug: 'videos', name: "Video's" },
  { taxonomy: 'dp_multimedia_category', slug: 'fotogalerye', name: 'Fotogalerye' },

  // Edition types
  { taxonomy: 'dp_edition_type', slug: 'weekliks', name: 'Weekliks' },
  { taxonomy: 'dp_edition_type', slug: 'daagliks', name: 'Daagliks' },
  { taxonomy: 'dp_edition_type', slug: 'spesiale-bylae', name: 'Spesiale Bylae' },

  // FAQ categories (from FAQs.md section headings)
  { taxonomy: 'dp_faq_category', slug: 'oor-ons', name: 'Oor ons' },
  { taxonomy: 'dp_faq_category', slug: 'kontak', name: 'Kontak' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer', name: 'Adverteer' },
  { taxonomy: 'dp_faq_category', slug: 'gebeure', name: 'Gebeure' },
  { taxonomy: 'dp_faq_category', slug: 'e-uitgawes', name: 'E-uitgawes' },
  { taxonomy: 'dp_faq_category', slug: 'weer', name: 'Weer' },
  { taxonomy: 'dp_faq_category', slug: 'span', name: 'Span' },
  { taxonomy: 'dp_faq_category', slug: 'inteken-opsies', name: 'Inteken opsies' },
  { taxonomy: 'dp_faq_category', slug: 'inteken-aflewering', name: 'Inteken aflewering' },
  { taxonomy: 'dp_faq_category', slug: 'ontwerp-grondslag', name: 'Ontwerp grondslag' },
  { taxonomy: 'dp_faq_category', slug: 'doodsberrigte', name: 'Doodsberrigte' },
  { taxonomy: 'dp_faq_category', slug: 'multimedia', name: 'Multimedia' },
  { taxonomy: 'dp_faq_category', slug: 'nuusbrief', name: 'Nuusbrief' },
  { taxonomy: 'dp_faq_category', slug: 'nuusbrief-argief', name: 'Nuusbrief argief' },
  { taxonomy: 'dp_faq_category', slug: 'beleid', name: 'Beleid' },
  { taxonomy: 'dp_faq_category', slug: 'verkeer', name: 'Verkeer' },
  { taxonomy: 'dp_faq_category', slug: 'kompetisies', name: 'Kompetisies' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-in', name: 'Stuur in' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-storie-in', name: 'Stuur storie in' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-lesersbrief-in', name: 'Stuur lesersbrief in' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-terugvoer-in', name: 'Stuur terugvoer in' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-shoutout-in', name: 'Stuur shoutout in' },
  { taxonomy: 'dp_faq_category', slug: 'stuur-gebeurtenis-in', name: 'Stuur gebeurtenis in' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-geklassifiseerd', name: 'Adverteer: Geklassifiseerd' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-vertoonadvertensies', name: 'Adverteer: Vertoonadvertensies' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-pamflette', name: 'Adverteer: Pamflette' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-geborgde-inhoud', name: 'Adverteer: Geborgde inhoud' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-borgskappe', name: 'Adverteer: Borgskappe' },
  { taxonomy: 'dp_faq_category', slug: 'adverteer-bylaes', name: 'Adverteer: Bylaes' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-advertensie-navraag', name: 'Dankie: Advertensie navraag' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-kontak', name: 'Dankie: Kontak' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-nuusbrief', name: 'Dankie: Nuusbrief' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-registrasie', name: 'Dankie: Registrasie' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-indiening', name: 'Dankie: Indiening' },
  { taxonomy: 'dp_faq_category', slug: 'dankie-kompetisie', name: 'Dankie: Kompetisie' },
];

// ─────────────────────────────────────────────────────────
// CM-002 — CPT Meta Field Mapping
// Maps markdown key-value labels to WordPress postmeta keys
// ─────────────────────────────────────────────────────────

/** Parse a price string like "R450 - R1200", "R350", "Gratis", "R10,000" → numeric or 0 */
function parsePrice(val) {
  if (!val) return 0;
  const lower = val.toLowerCase().trim();
  if (lower === 'gratis' || lower === 'free') return 0;
  // Take first numeric value found
  const match = val.replace(/[,\s]/g, '').match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

/** Parse location string — split "Name (Address)" or "Name, City" */
function parseLocation(val) {
  if (!val) return { name: '', address: '' };
  // Check for parenthesised address: "Paarl Boeremark Terrein (Onder die Eikeboom, Hooflaan, Paarl)"
  const parenMatch = val.match(/^(.*?)\s*\((.*)\)\s*$/);
  if (parenMatch) {
    return { name: parenMatch[1].trim(), address: parenMatch[2].trim() };
  }
  // Check for "Venue, City" pattern
  const commaIdx = val.indexOf(',');
  if (commaIdx > 0) {
    return { name: val.substring(0, commaIdx).trim(), address: val.substring(commaIdx + 1).trim() };
  }
  return { name: val.trim(), address: '' };
}

/** Parse contact to extract email */
function parseContactEmail(val) {
  if (!val) return '';
  const emailMatch = val.match(/([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})/);
  return emailMatch ? emailMatch[1] : '';
}

/** Parse contact to extract phone */
function parseContactPhone(val) {
  if (!val) return '';
  // Remove email parts, then grab phone-like string
  const withoutEmail = val.replace(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/, '').trim();
  const phoneMatch = withoutEmail.match(/([\d\s\-+()]{7,})/);
  return phoneMatch ? phoneMatch[1].trim().replace(/[()]/g, '') : '';
}

/** Parse multimedia category to media_type */
function categoryToMediaType(cat) {
  if (!cat) return 'video';
  const lower = cat.toLowerCase();
  if (lower.includes('podcast')) return 'podcast';
  if (lower.includes('foto') || lower.includes('galer')) return 'gallery';
  return 'video';
}

/**
 * Given a CPT type and parsed meta object, return an array
 * of { key, value } postmeta entries to write.
 */
function getCptMeta(postType, meta) {
  const entries = [];
  const addMeta = (key, val) => {
    if (val !== undefined && val !== null && val !== '') {
      entries.push({ key, value: String(val) });
    }
  };

  switch (postType) {
    case 'dp_event': {
      addMeta('event_date', meta['Date'] || '');
      addMeta('event_end_date', meta['End Date'] || '');
      const loc = parseLocation(meta['Location'] || '');
      addMeta('location_name', loc.name);
      addMeta('location_address', loc.address);
      const price = parsePrice(meta['Price']);
      addMeta('price', price);
      addMeta('organiser_name', meta['Organiser'] || '');
      addMeta('organiser_email', parseContactEmail(meta['Contact'] || ''));
      if (meta['Recurrence']) {
        addMeta('is_recurring', '1');
        addMeta('recurrence', meta['Recurrence']);
      }
      break;
    }
    case 'dp_obituary': {
      addMeta('date_of_birth', meta['Born'] || '');
      addMeta('date_of_death', meta['Died'] || '');
      addMeta('location', meta['Location'] || '');
      // Service is nested — look for "Service > Date", etc.
      // In the markdown these are parsed as separate lines inside a "Service:" section
      // The parser collects them as meta['Date'] under the service sub-item context.
      // Since our flat parser may have Service-prefixed keys or separate keys, handle both:
      if (meta['Service Date'] || meta['_service_date']) {
        const svcDate = meta['Service Date'] || meta['_service_date'] || '';
        // Extract time if embedded in date string "2026-02-17 10:00"
        const parts = svcDate.split(' ');
        addMeta('service_date', parts[0] || svcDate);
        if (parts[1]) addMeta('service_time', parts[1]);
      }
      addMeta('service_location', meta['Service Location'] || meta['_service_location'] || '');
      // Condolences can be email or URL
      const condolences = meta['Condolences'] || '';
      if (condolences.includes('@')) {
        addMeta('condolences_email', condolences);
      } else if (condolences.startsWith('http') || condolences.startsWith('`http')) {
        addMeta('condolences_url', condolences.replace(/`/g, ''));
      } else if (condolences) {
        addMeta('condolences_email', condolences);
      }
      break;
    }
    case 'dp_sponsor': {
      addMeta('website_url', (meta['Website'] || '').replace(/`/g, ''));
      addMeta('active_until', meta['Active Until'] || '');
      const contact = meta['Contact'] || '';
      addMeta('contact_phone', parseContactPhone(contact));
      addMeta('contact_email', parseContactEmail(contact));
      break;
    }
    case 'dp_competition': {
      addMeta('closing_date', meta['Closing Date'] || '');
      addMeta('prize_value', parsePrice(meta['Value'] || ''));
      addMeta('prize_description', meta['Prize'] || '');
      addMeta('sponsor_name', meta['Sponsor'] || '');
      addMeta('status', meta['Status'] || 'Open');
      break;
    }
    case 'dp_multimedia': {
      addMeta('media_type', categoryToMediaType(meta['Category'] || ''));
      addMeta('duration', meta['Duration'] || '');
      addMeta('video_url', (meta['Video URL'] || '').replace(/`/g, ''));
      addMeta('audio_url', (meta['Audio URL'] || '').replace(/`/g, ''));
      addMeta('image_count', meta['Image Count'] || '');
      addMeta('photographer', meta['Photographer'] || '');
      addMeta('publication_date', meta['Date'] || '');
      break;
    }
    case 'dp_eedition': {
      addMeta('publication_date', meta['Date'] || '');
      addMeta('edition_number', meta['Edition Number'] || '');
      addMeta('page_count', meta['Page Count'] || '');
      addMeta('price', meta['Price'] || '');
      addMeta('pdf_url', (meta['PDF URL'] || '').replace(/`/g, ''));
      addMeta('is_free', (meta['Is Free'] || '').toLowerCase() === 'yes' ? '1' : '0');
      break;
    }
  }

  return entries;
}

/**
 * Given a CPT type and parsed meta object, return an array
 * of { taxonomy, slug, name } for CPT-specific taxonomy assignments.
 */
function getCptTaxonomies(postType, meta) {
  const assignments = [];

  switch (postType) {
    case 'dp_event':
      if (meta['Category']) {
        assignments.push({
          taxonomy: 'dp_event_category',
          slug: sanitizeSlug(meta['Category']),
          name: meta['Category']
        });
      }
      break;
    case 'dp_sponsor':
      if (meta['Tier']) {
        assignments.push({
          taxonomy: 'dp_sponsor_tier',
          slug: sanitizeSlug(meta['Tier']),
          name: meta['Tier']
        });
      }
      break;
    case 'dp_multimedia':
      if (meta['Category']) {
        assignments.push({
          taxonomy: 'dp_multimedia_category',
          slug: sanitizeSlug(meta['Category']),
          name: meta['Category']
        });
      }
      break;
    case 'dp_eedition':
      // Default all regular editions to "Weekliks"
      assignments.push({
        taxonomy: 'dp_edition_type',
        slug: 'weekliks',
        name: 'Weekliks'
      });
      break;
  }

  return assignments;
}

// ─────────────────────────────────────────────────────────
// Build WXR Document
// ─────────────────────────────────────────────────────────
const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('rss', {
    version: '2.0',
    'xmlns:excerpt': 'http://wordpress.org/export/1.2/excerpt/',
    'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
    'xmlns:wfw': 'http://wellformedweb.org/CommentAPI/',
    'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
    'xmlns:wp': 'http://wordpress.org/export/1.2/'
  });

const channel = root.ele('channel');
channel.ele('title').txt('Die Papier').up();
channel.ele('link').txt('https://diepapier.co.za').up();
channel.ele('description').txt('Die Papier Content Export').up();
channel.ele('pubDate').txt(new Date().toUTCString()).up();
channel.ele('language').txt('af').up();
channel.ele('wp:wxr_version').txt('1.2').up();
channel.ele('wp:base_site_url').txt('https://diepapier.co.za').up();
channel.ele('wp:base_blog_url').txt('https://diepapier.co.za').up();

// ── CM-004: Write all author records ──
AUTHORS.forEach(author => {
  channel.ele('wp:author')
    .ele('wp:author_id').txt(author.id.toString()).up()
    .ele('wp:author_login').txt(author.login).up()
    .ele('wp:author_email').txt(author.email).up()
    .ele('wp:author_display_name').cdata(author.display).up()
    .ele('wp:author_first_name').cdata(author.first).up()
    .ele('wp:author_last_name').cdata(author.last).up()
  .up();
});

// ── CM-001: Write all taxonomy term records ──
TAXONOMY_TERMS.forEach(term => {
  const tid = getNextTermId();
  channel.ele('wp:term')
    .ele('wp:term_id').txt(tid.toString()).up()
    .ele('wp:term_taxonomy').txt(term.taxonomy).up()
    .ele('wp:term_slug').txt(term.slug).up()
    .ele('wp:term_name').cdata(term.name).up()
  .up();
});

// ─────────────────────────────────────────────────────────
// Image Handling
// ─────────────────────────────────────────────────────────
const processedImages = new Map(); // url → attachmentId

function createAttachment(imageUrl, meta) {
  if (!imageUrl) return null;
  if (processedImages.has(imageUrl)) return processedImages.get(imageUrl);

  const id = getNextId();
  const cleanUrl = imageUrl.split('?')[0];
  const filename = meta.filename || path.basename(cleanUrl) || `image-${id}.jpg`;

  const item = channel.ele('item');
  item.ele('title').txt(meta.title || filename).up();
  item.ele('link').txt(imageUrl).up();
  item.ele('pubDate').txt(new Date().toUTCString()).up();
  item.ele('dc:creator').txt('admin').up();
  item.ele('guid', { isPermaLink: 'false' }).txt(imageUrl).up();
  item.ele('description').txt(meta.description || '').up();
  item.ele('content:encoded').txt('').up();
  item.ele('wp:post_id').txt(id.toString()).up();
  item.ele('wp:post_date').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
  item.ele('wp:post_date_gmt').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
  item.ele('wp:comment_status').txt('closed').up();
  item.ele('wp:ping_status').txt('closed').up();
  item.ele('wp:post_name').txt(sanitizeSlug(filename.replace(/\.[^/.]+$/, ''))).up();
  item.ele('wp:status').txt('inherit').up();
  item.ele('wp:post_parent').txt('0').up();
  item.ele('wp:menu_order').txt('0').up();
  item.ele('wp:post_type').txt('attachment').up();
  item.ele('wp:post_password').txt('').up();
  item.ele('wp:is_sticky').txt('0').up();
  item.ele('wp:attachment_url').txt(cleanUrl).up();

  if (meta.alt) {
    item.ele('wp:postmeta')
      .ele('wp:meta_key').txt('_wp_attachment_image_alt').up()
      .ele('wp:meta_value').cdata(meta.alt).up()
    .up();
  }

  processedImages.set(imageUrl, id);
  return id;
}

// ─────────────────────────────────────────────────────────
// Block Converter (Markdown → Block HTML)
// ─────────────────────────────────────────────────────────
function convertToBlocks(lines) {
  const blocks = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Skip implementation notes or empty lines
    if (line.startsWith('>')) continue;
    if (line === '') continue;

    // Headings
    if (line.startsWith('#')) {
      const match = line.match(/^(#+)\s*(.*)/);
      if (match) {
        const level = match[1].length;
        const content = match[2];
        if (inList) { blocks.push('</ul>\n<!-- /wp:list -->'); inList = false; }
        blocks.push(`<!-- wp:heading {"level":${level}} -->\n<h${level}>${content}</h${level}>\n<!-- /wp:heading -->`);
        continue;
      }
    }

    // Lists
    if (line.startsWith('* ') || line.startsWith('- ') || /^\d+\./.test(line)) {
      if (!inList) {
        blocks.push('<!-- wp:list -->\n<ul>');
        inList = true;
      }
      const content = line.replace(/^[\*\-\d\.]+\s*/, '');
      blocks.push(`<!-- wp:list-item -->\n<li>${content}</li>\n<!-- /wp:list-item -->`);
    } else {
      if (inList) {
        blocks.push('</ul>\n<!-- /wp:list -->');
        inList = false;
      }

      // Paragraphs (ignore metadata lines starting with *)
      if (line.length > 0 && !line.startsWith('*')) {
        blocks.push(`<!-- wp:paragraph -->\n<p>${line}</p>\n<!-- /wp:paragraph -->`);
      }
    }
  }

  if (inList) {
    blocks.push('</ul>\n<!-- /wp:list -->');
  }

  return blocks.join('\n\n');
}

// ─────────────────────────────────────────────────────────
// Helper: add postmeta element
// ─────────────────────────────────────────────────────────
function addPostMeta(item, key, value) {
  item.ele('wp:postmeta')
    .ele('wp:meta_key').txt(key).up()
    .ele('wp:meta_value').cdata(String(value)).up()
  .up();
}

// ─────────────────────────────────────────────────────────
// CM-006 — Page Parent Tracking
// ─────────────────────────────────────────────────────────
const pageIdBySlug = new Map(); // slug → postId (for parent lookups)

// ─────────────────────────────────────────────────────────
// Processor: Pages and Policies
// CM-005: pattern assignment, CM-006: parent hierarchy
// ─────────────────────────────────────────────────────────
async function processPages() {
  const pageFiles = await glob(`${CONTENT_DIR}/pages/*.md`);
  const policyFiles = await glob(`${CONTENT_DIR}/policies/*.md`);
  const files = [...pageFiles, ...policyFiles];

  // Two-pass approach for parent hierarchy:
  // Pass 1: Create all page items, track IDs
  // Pass 2: After all pages created, fix parent IDs (deferred below)

  // First, ensure a "beleid" parent page exists
  // It might already be in pages/*.md — we'll check.
  const beleidExists = files.some(f => path.basename(f, '.md') === 'policies' || path.basename(f, '.md') === 'beleid');

  // We'll create a "Beleid" parent page if one doesn't come from content files
  const beleidId = getNextId();
  if (!beleidExists) {
    const beleidItem = channel.ele('item');
    beleidItem.ele('title').txt('Beleid').up();
    beleidItem.ele('link').txt('https://diepapier.co.za/beleid').up();
    beleidItem.ele('pubDate').txt(new Date().toUTCString()).up();
    beleidItem.ele('dc:creator').txt('admin').up();
    beleidItem.ele('guid', { isPermaLink: 'false' }).txt(`https://diepapier.co.za/?page_id=${beleidId}`).up();
    beleidItem.ele('description').txt('').up();
    beleidItem.ele('content:encoded').cdata('<!-- wp:pattern {"slug":"die-papier/page-policies"} /-->').up();
    beleidItem.ele('wp:post_id').txt(beleidId.toString()).up();
    beleidItem.ele('wp:post_date').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
    beleidItem.ele('wp:comment_status').txt('closed').up();
    beleidItem.ele('wp:ping_status').txt('closed').up();
    beleidItem.ele('wp:post_name').txt('beleid').up();
    beleidItem.ele('wp:status').txt('publish').up();
    beleidItem.ele('wp:post_parent').txt('0').up();
    beleidItem.ele('wp:menu_order').txt('0').up();
    beleidItem.ele('wp:post_type').txt('page').up();
    beleidItem.up();
    pageIdBySlug.set('beleid', beleidId);
  }

  // Track which files are policies (for parent assignment)
  const policyFileSet = new Set(policyFiles.map(f => f));

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const parsed = matter(content);
    const data = parsed.data;

    // Skip if no title or if it's a README
    if (!data.title) continue;

    const lines = parsed.content.split('\n');
    const postContent = convertToBlocks(lines);

    let slug = data.slug;
    if (!slug) {
      slug = path.basename(file, '.md');
    }

    const postId = getNextId();
    pageIdBySlug.set(slug, postId);

    // Determine if this is a policy page (child of beleid)
    const isPolicy = policyFileSet.has(file);
    const parentId = isPolicy ? (pageIdBySlug.get('beleid') || beleidId) : 0;

    // CM-005: If the page has a pattern slug, use a pattern block reference as content
    let finalContent = postContent;
    if (data.pattern) {
      // Use WordPress pattern block syntax — the editor will resolve this to the full pattern
      finalContent = `<!-- wp:pattern {"slug":"${data.pattern}"} /-->`;
    }

    const item = channel.ele('item');
    item.ele('title').txt(data.title).up();
    item.ele('link').txt(`https://diepapier.co.za/${slug}`).up();
    item.ele('pubDate').txt(new Date().toUTCString()).up();
    item.ele('dc:creator').txt('admin').up();
    item.ele('guid', { isPermaLink: 'false' }).txt(`https://diepapier.co.za/?page_id=${postId}`).up();
    item.ele('description').txt('').up();
    item.ele('content:encoded').cdata(finalContent).up();
    item.ele('wp:post_id').txt(postId.toString()).up();
    item.ele('wp:post_date').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
    item.ele('wp:comment_status').txt('closed').up();
    item.ele('wp:ping_status').txt('closed').up();
    item.ele('wp:post_name').txt(slug).up();
    item.ele('wp:status').txt(data.status === 'ready' || data.status === 'publish' ? 'publish' : 'draft').up();
    item.ele('wp:post_parent').txt(parentId.toString()).up();
    item.ele('wp:menu_order').txt('0').up();
    item.ele('wp:post_type').txt('page').up();

    // CM-005: Store pattern as postmeta too, for theme hooks to reference
    if (data.pattern) {
      addPostMeta(item, '_dp_page_pattern', data.pattern);
    }

    // Store template if specified
    if (data.template) {
      addPostMeta(item, '_wp_page_template', data.template);
    }

    item.up();
  }
}

// ─────────────────────────────────────────────────────────
// Processor: Collections
// CM-002: Full CPT meta mapping + taxonomy assignments
// CM-004: Correct author attribution
// ─────────────────────────────────────────────────────────
async function processCollections() {
  const files = await glob(`${CONTENT_DIR}/collections/*.md`);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const parsed = matter(content);
    const collectionType = parsed.data.template ? parsed.data.template.replace('collection-', '') : 'post';

    let postType = 'post';
    if (collectionType === 'competitions') postType = 'dp_competition';
    if (collectionType === 'obituaries') postType = 'dp_obituary';
    if (collectionType === 'events') postType = 'dp_event';
    if (collectionType === 'sponsors') postType = 'dp_sponsor';
    if (collectionType === 'multimedia') postType = 'dp_multimedia';
    if (collectionType === 'eeditions') postType = 'dp_eedition';

    // Split by H3 with numbering: "### 1. Title"
    const sections = parsed.content.split(/^### \d+\.\s+(.*)$/m);

    for (let i = 1; i < sections.length; i += 2) {
      const title = sections[i].trim();
      const body = sections[i + 1];

      if (!body) continue;

      const lines = body.split('\n');
      const meta = {};
      const imageMeta = {};
      const bodyLines = [];

      // Track nested service fields for obituaries
      let inServiceBlock = false;

      for (const line of lines) {
        const trimmed = line.trim();

        // Key-Value pairs like "* **Category:** Nuus"
        const kvMatch = trimmed.match(/^\*\s+\*\*(.*?)\*\*:\s*(.*)/);

        if (kvMatch) {
          const key = kvMatch[1];
          const val = kvMatch[2];

          // Nested image metadata handling
          if (key === 'Featured Image' || key === 'Image') {
            inServiceBlock = false;
            continue;
          }

          // Service block detection for obituaries
          if (key === 'Service') {
            inServiceBlock = true;
            continue;
          }

          if (['Source', 'Alt Text', 'Title', 'Original Filename', 'Description', 'SEO Meta'].includes(key)) {
            imageMeta[key] = val.replace(/`/g, '').replace(/"/g, '');
          } else if (inServiceBlock) {
            // Service sub-fields: Date, Location, etc.
            meta[`Service ${key}`] = val;
            if (key === 'Location') inServiceBlock = false; // Last service field
          } else {
            meta[key] = val;
            inServiceBlock = false;
          }
        } else {
          // Collecting body content (excluding metadata lists)
          if (trimmed.length > 0 && !trimmed.startsWith('*')) {
            bodyLines.push(trimmed);
          }
        }
      }

      // Create Attachment
      let thumbId = null;
      if (imageMeta.Source) {
        thumbId = createAttachment(imageMeta.Source, {
          filename: imageMeta['Original Filename'],
          alt: imageMeta['Alt Text'],
          title: imageMeta['Title'],
          description: imageMeta['Description']
        });
      }

      // Resolve author
      const authorLogin = resolveAuthorLogin(meta.Author);

      // Create Post Item
      const postId = getNextId();
      const item = channel.ele('item');
      item.ele('title').txt(title).up();
      item.ele('link').txt(`https://diepapier.co.za/${sanitizeSlug(title)}`).up();
      item.ele('pubDate').txt(meta.Date ? parseDate(meta.Date).toUTCString() : new Date().toUTCString()).up();
      item.ele('dc:creator').txt(authorLogin).up();
      item.ele('guid', { isPermaLink: 'false' }).txt(`https://diepapier.co.za/?p=${postId}`).up();
      item.ele('description').txt((meta.Excerpt || '').replace(/"/g, '')).up();
      item.ele('content:encoded').cdata(convertToBlocks(bodyLines)).up();
      item.ele('wp:post_id').txt(postId.toString()).up();
      item.ele('wp:post_date').txt(meta.Date ? parseDate(meta.Date).toISOString().replace('T', ' ').split('.')[0] : new Date().toISOString().replace('T', ' ').split('.')[0]).up();
      item.ele('wp:comment_status').txt('open').up();
      item.ele('wp:ping_status').txt('open').up();
      item.ele('wp:post_name').txt(sanitizeSlug(title)).up();
      item.ele('wp:status').txt('publish').up();
      item.ele('wp:post_parent').txt('0').up();
      item.ele('wp:menu_order').txt('0').up();
      item.ele('wp:post_type').txt(postType).up();
      item.ele('wp:is_sticky').txt(meta['Is Featured'] === 'Yes' ? '1' : '0').up();

      // Thumbnail
      if (thumbId) {
        addPostMeta(item, '_thumbnail_id', thumbId);
      }

      // Article categories (for post type only)
      if (meta.Category && postType === 'post') {
        const cats = meta.Category.split(',').map(c => c.trim());
        cats.forEach(c => {
          item.ele('category', { domain: 'category', nicename: sanitizeSlug(c) }).cdata(c).up();
        });
      }

      // Article tags (for post type only)
      if (meta.Tags && postType === 'post') {
        const tags = meta.Tags.split(',').map(t => t.trim());
        tags.forEach(t => {
          item.ele('category', { domain: 'post_tag', nicename: sanitizeSlug(t) }).cdata(t).up();
        });
      }

      // Sponsored content meta
      if (meta.Sponsor && postType === 'post') {
        addPostMeta(item, '_dp_sponsor', meta.Sponsor);
        addPostMeta(item, '_dp_is_sponsored', '1');
      }

      // Article-specific meta
      if (meta.Subtitle) {
        addPostMeta(item, '_dp_subtitle', meta.Subtitle);
      }
      if (meta['Is Breaking'] === 'Yes') {
        addPostMeta(item, '_dp_is_breaking', '1');
      }

      // CM-002: CPT-specific meta fields
      const cptMeta = getCptMeta(postType, meta);
      cptMeta.forEach(({ key, value }) => {
        addPostMeta(item, key, value);
      });

      // CM-002: CPT-specific taxonomy assignments
      const cptTaxonomies = getCptTaxonomies(postType, meta);
      cptTaxonomies.forEach(({ taxonomy, slug, name }) => {
        item.ele('category', { domain: taxonomy, nicename: slug }).cdata(name).up();
      });

      item.up();
    }
  }
}

// ─────────────────────────────────────────────────────────
// CM-003 — FAQ Processor
// Parses /guidelines/content/FAQs.md into dp_faq posts
// ─────────────────────────────────────────────────────────
async function processFAQs() {
  const faqFile = path.join(GUIDELINES_DIR, 'content', 'FAQs.md');
  if (!fs.existsSync(faqFile)) {
    console.warn('Warning: FAQs.md not found at', faqFile);
    return;
  }

  const content = fs.readFileSync(faqFile, 'utf8');
  const lines = content.split('\n');

  let currentCategory = '';
  let currentCategorySlug = '';
  let currentQuestion = '';
  let currentAnswer = '';
  let faqCount = 0;

  const flushFaq = () => {
    if (!currentQuestion || !currentAnswer) return;

    const postId = getNextId();
    faqCount++;

    const item = channel.ele('item');
    item.ele('title').txt(currentQuestion).up();
    item.ele('link').txt(`https://diepapier.co.za/?p=${postId}`).up();
    item.ele('pubDate').txt(new Date().toUTCString()).up();
    item.ele('dc:creator').txt('admin').up();
    item.ele('guid', { isPermaLink: 'false' }).txt(`https://diepapier.co.za/?p=${postId}`).up();
    item.ele('description').txt('').up();
    item.ele('content:encoded').cdata(
      `<!-- wp:paragraph -->\n<p>${currentAnswer.trim()}</p>\n<!-- /wp:paragraph -->`
    ).up();
    item.ele('wp:post_id').txt(postId.toString()).up();
    item.ele('wp:post_date').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
    item.ele('wp:comment_status').txt('closed').up();
    item.ele('wp:ping_status').txt('closed').up();
    item.ele('wp:post_name').txt(sanitizeSlug(currentQuestion).substring(0, 60)).up();
    item.ele('wp:status').txt('publish').up();
    item.ele('wp:post_parent').txt('0').up();
    item.ele('wp:menu_order').txt(faqCount.toString()).up();
    item.ele('wp:post_type').txt('dp_faq').up();

    // Taxonomy assignment
    if (currentCategory) {
      item.ele('category', { domain: 'dp_faq_category', nicename: currentCategorySlug })
        .cdata(currentCategory).up();
    }

    item.up();

    currentQuestion = '';
    currentAnswer = '';
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip the file title
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) continue;

    // H2 = FAQ category heading
    if (trimmed.startsWith('## ')) {
      // Flush previous FAQ if any
      flushFaq();
      currentCategory = trimmed.replace(/^##\s+/, '').trim();
      currentCategorySlug = sanitizeSlug(currentCategory);
      continue;
    }

    // Bold line = Question
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      // Flush previous FAQ
      flushFaq();
      currentQuestion = trimmed.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
      continue;
    }

    // Non-empty line after question = Answer
    if (trimmed && currentQuestion) {
      if (currentAnswer) {
        currentAnswer += ' ' + trimmed;
      } else {
        currentAnswer = trimmed;
      }
    }
  }

  // Flush last FAQ
  flushFaq();

  console.log(`  FAQs processed: ${faqCount} entries`);
}

// ─────────────────────────────────────────────────────────
// CM-007 — Navigation Menu Export
// Exports menus as nav_menu terms + nav_menu_item posts
// ─────────────────────────────────────────────────────────
function processNavigationMenus() {
  // Define the menus and their items
  const menus = [
    {
      name: 'Hoof Navigasie',
      slug: 'primary',
      location: 'primary',
      items: [
        { title: 'Tuis', url: '/' },
        { title: 'Nuus', url: '/nuus' },
        { title: 'Sport', url: '/sport' },
        { title: 'Dink', url: '/dink' },
        { title: 'Sake', url: '/sake' },
        { title: 'Leefstyl', url: '/leefstyl' },
        { title: 'Gebeure', url: '/gebeure' },
        { title: 'Multimedia', url: '/multimedia' },
        { title: 'Doodsberrigte', url: '/doodsberrigte' },
        { title: 'E-uitgawes', url: '/e-uitgawes' },
      ]
    },
    {
      name: 'Boonste Balk',
      slug: 'top-bar',
      location: 'top-bar',
      items: [
        { title: 'Oor ons', url: '/oor-ons' },
        { title: 'Ons span', url: '/oor-ons/redaksie' },
        { title: 'Beleid', url: '/beleid' },
        { title: 'Kontak', url: '/kontak' },
        { title: 'Adverteer', url: '/adverteer' },
        { title: 'Algemene vrae', url: '/vrae' },
        { title: 'Nuusbrief', url: '/nuusbrief-inteken' },
      ]
    },
    {
      name: 'Voetskrif – Kategorieë',
      slug: 'footer-categories',
      location: 'footer-1',
      items: [
        { title: 'Nuus', url: '/nuus' },
        { title: 'Sport', url: '/sport' },
        { title: 'Sake', url: '/sake' },
        { title: 'Leefstyl', url: '/leefstyl' },
        { title: 'Dink', url: '/dink' },
        { title: 'Skole', url: '/skole' },
        { title: 'Skolerugby', url: '/skolerugby' },
        { title: 'Kompetisies', url: '/kompetisies' },
      ]
    },
    {
      name: 'Voetskrif – Inhoud',
      slug: 'footer-content',
      location: 'footer-2',
      items: [
        { title: 'E-uitgawes', url: '/e-uitgawes' },
        { title: 'Gebeure', url: '/gebeure' },
        { title: 'Multimedia', url: '/multimedia' },
        { title: 'Doodsberrigte', url: '/doodsberrigte' },
        { title: 'Nuusbrief-argief', url: '/nuusbrief-argief' },
        { title: 'Stuur nuus in', url: '/stuur-in' },
      ]
    },
    {
      name: 'Voetskrif – Dienste',
      slug: 'footer-services',
      location: 'footer-3',
      items: [
        { title: 'Weer', url: '/weer' },
        { title: 'Verkeer', url: '/verkeer' },
        { title: 'Inteken', url: '/inteken' },
        { title: 'Nuusbrief', url: '/nuusbrief-inteken' },
        { title: 'My rekening', url: '/my-rekening' },
        { title: 'Registreer', url: '/registreer' },
      ]
    },
    {
      name: 'Voetskrif – Die Papier',
      slug: 'footer-about',
      location: 'footer-4',
      items: [
        { title: 'Oor ons', url: '/oor-ons' },
        { title: 'Ons span', url: '/oor-ons/redaksie' },
        { title: 'Kontak ons', url: '/kontak' },
        { title: 'Adverteer', url: '/adverteer' },
        { title: 'Algemene vrae', url: '/vrae' },
        { title: 'Inhoudsopgawe', url: '/inhoudsopgawe' },
      ]
    },
    {
      name: 'Voetskrif – Regs',
      slug: 'footer-legal',
      location: 'footer-legal',
      items: [
        { title: 'Inhoudsopgawe', url: '/inhoudsopgawe' },
        { title: 'Beleid', url: '/beleid' },
        { title: 'Privaatheidsbeleid', url: '/beleid/privaatheidsbeleid' },
        { title: 'Terme en voorwaardes', url: '/beleid/terme-en-voorwaardes' },
      ]
    },
    {
      name: 'Mobiel',
      slug: 'mobile',
      location: 'mobile',
      items: [
        { title: 'Tuis', url: '/' },
        { title: 'Nuus', url: '/nuus' },
        { title: 'Sport', url: '/sport' },
        { title: 'Skole', url: '/skole' },
        { title: 'Sake', url: '/sake' },
        { title: 'Leefstyl', url: '/leefstyl' },
        { title: 'Dink', url: '/dink' },
        { title: 'Gebeure', url: '/gebeure' },
        { title: 'Multimedia', url: '/multimedia' },
        { title: 'Doodsberrigte', url: '/doodsberrigte' },
        { title: 'E-uitgawes', url: '/e-uitgawes' },
        { title: 'Kompetisies', url: '/kompetisies' },
        { title: 'Nuusbrief-argief', url: '/nuusbrief-argief' },
      ]
    },
  ];

  for (const menu of menus) {
    // Register menu as taxonomy term
    const menuTermId = getNextTermId();
    channel.ele('wp:term')
      .ele('wp:term_id').txt(menuTermId.toString()).up()
      .ele('wp:term_taxonomy').txt('nav_menu').up()
      .ele('wp:term_slug').txt(menu.slug).up()
      .ele('wp:term_name').cdata(menu.name).up()
    .up();

    // Create nav_menu_item posts
    menu.items.forEach((menuItem, idx) => {
      const itemId = getNextId();
      const item = channel.ele('item');
      item.ele('title').txt(menuItem.title).up();
      item.ele('link').txt(`https://diepapier.co.za${menuItem.url}`).up();
      item.ele('pubDate').txt(new Date().toUTCString()).up();
      item.ele('dc:creator').txt('admin').up();
      item.ele('guid', { isPermaLink: 'false' }).txt(`https://diepapier.co.za/?p=${itemId}`).up();
      item.ele('description').txt('').up();
      item.ele('content:encoded').txt('').up();
      item.ele('wp:post_id').txt(itemId.toString()).up();
      item.ele('wp:post_date').txt(new Date().toISOString().replace('T', ' ').split('.')[0]).up();
      item.ele('wp:comment_status').txt('closed').up();
      item.ele('wp:ping_status').txt('closed').up();
      item.ele('wp:post_name').txt(`${menu.slug}-${sanitizeSlug(menuItem.title)}`).up();
      item.ele('wp:status').txt('publish').up();
      item.ele('wp:post_parent').txt('0').up();
      item.ele('wp:menu_order').txt((idx + 1).toString()).up();
      item.ele('wp:post_type').txt('nav_menu_item').up();

      // Menu taxonomy assignment
      item.ele('category', { domain: 'nav_menu', nicename: menu.slug }).cdata(menu.name).up();

      // Nav menu item meta
      addPostMeta(item, '_menu_item_type', 'custom');
      addPostMeta(item, '_menu_item_menu_item_parent', '0');
      addPostMeta(item, '_menu_item_object_id', itemId);
      addPostMeta(item, '_menu_item_object', 'custom');
      addPostMeta(item, '_menu_item_target', '');
      addPostMeta(item, '_menu_item_classes', 'a:1:{i:0;s:0:"";}');
      addPostMeta(item, '_menu_item_xfn', '');
      addPostMeta(item, '_menu_item_url', `https://diepapier.co.za${menuItem.url}`);

      item.up();
    });
  }

  console.log(`  Navigation menus processed: ${menus.length} menus, ${menus.reduce((s, m) => s + m.items.length, 0)} items`);
}

// ─────────────────────────────────────────────────────────
// Main Runner
// ─────────────────────────────────────────────────────────
async function run() {
  console.log('Die Papier WXR Content Export');
  console.log('============================');
  console.log(`Content directory: ${CONTENT_DIR}`);
  console.log(`Guidelines directory: ${GUIDELINES_DIR}`);
  console.log(`Output: ${OUTPUT_FILE}`);
  console.log('');

  console.log('Processing pages and policies...');
  await processPages();

  console.log('Processing collections (articles, events, sponsors, etc.)...');
  await processCollections();

  console.log('Processing FAQs...');
  await processFAQs();

  console.log('Processing navigation menus...');
  processNavigationMenus();

  console.log('');
  console.log(`Authors exported: ${AUTHORS.length}`);
  console.log(`Taxonomy terms exported: ${TAXONOMY_TERMS.length}`);
  console.log(`Total post IDs issued: ${postIdCounter - 1000}`);
  console.log('');

  const xml = root.end({ prettyPrint: true });
  fs.writeFileSync(OUTPUT_FILE, xml);
  console.log(`Export complete: ${OUTPUT_FILE}`);
  console.log(`File size: ${(Buffer.byteLength(xml) / 1024).toFixed(1)} KB`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});