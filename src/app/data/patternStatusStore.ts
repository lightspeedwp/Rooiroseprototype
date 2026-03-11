/**
 * Shared Pattern Status Store
 * 
 * Provides localStorage-backed migration status tracking for all 76 patterns.
 * Used by PatternBrowser and WordPressMigration tool for cross-referencing.
 */

import { PATTERNS, type PatternStatus, type PatternPriority } from './patternBrowserData';

const STATUS_STORAGE_KEY = 'dp-pattern-browser-statuses';

export function loadStatuses(): Record<number, PatternStatus> {
  try {
    const stored = localStorage.getItem(STATUS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch { return {}; }
}

export function saveStatuses(statuses: Record<number, PatternStatus>) {
  try { localStorage.setItem(STATUS_STORAGE_KEY, JSON.stringify(statuses)); } catch {}
}

export function getStatus(statuses: Record<number, PatternStatus>, id: number): PatternStatus {
  return statuses[id] || 'not-started';
}

export function cycleStatus(statuses: Record<number, PatternStatus>, id: number): Record<number, PatternStatus> {
  const current = statuses[id] || 'not-started';
  const next: PatternStatus = current === 'not-started' ? 'in-progress' : current === 'in-progress' ? 'complete' : 'not-started';
  return { ...statuses, [id]: next };
}

/** Progress stats by priority tier */
export interface ProgressByPriority {
  priority: PatternPriority;
  total: number;
  notStarted: number;
  inProgress: number;
  complete: number;
  percent: number;
}

export function getProgressByPriority(statuses: Record<number, PatternStatus>): ProgressByPriority[] {
  const priorities: PatternPriority[] = ['P0', 'P1', 'P2', 'P3'];
  return priorities.map(p => {
    const group = PATTERNS.filter(pat => pat.priority === p);
    const total = group.length;
    const notStarted = group.filter(pat => getStatus(statuses, pat.id) === 'not-started').length;
    const inProgress = group.filter(pat => getStatus(statuses, pat.id) === 'in-progress').length;
    const complete = group.filter(pat => getStatus(statuses, pat.id) === 'complete').length;
    return { priority: p, total, notStarted, inProgress, complete, percent: total > 0 ? Math.round((complete / total) * 100) : 0 };
  });
}

export function getOverallProgress(statuses: Record<number, PatternStatus>): { total: number; complete: number; inProgress: number; percent: number } {
  const total = PATTERNS.length;
  const complete = PATTERNS.filter(p => getStatus(statuses, p.id) === 'complete').length;
  const inProgress = PATTERNS.filter(p => getStatus(statuses, p.id) === 'in-progress').length;
  return { total, complete, inProgress, percent: total > 0 ? Math.round((complete / total) * 100) : 0 };
}

/** Pattern route map for screenshot preview links */
export const PATTERN_ROUTE_MAP: Record<string, string> = {
  'Home.tsx': '/',
  'About.tsx': '/oor-ons',
  'Contact.tsx': '/kontak',
  'Advertise.tsx': '/adverteer',
  'SubscribeDelivery.tsx': '/inteken/aflewering',
  'SubscribeEEdition.tsx': '/inteken/e-uitgawe',
  'FAQPage.tsx': '/faq',
  'Team.tsx': '/span',
  'Sitemap.tsx': '/werfkaart',
  'Weather.tsx': '/weer',
  'Traffic.tsx': '/verkeer',
  'Category.tsx': '/nuus',
  'Events.tsx': '/gebeure',
  'Obituaries.tsx': '/sterftes',
  'Multimedia.tsx': '/multimedia',
  'Competitions.tsx': '/kompetisies',
  'SponsorArchive.tsx': '/borge',
  'EEditions.tsx': '/e-uitgawes',
  'NewsletterArchive.tsx': '/nuusbrief/argief',
  'Author.tsx': '/skrywer/voorbeeld',
  'TagArchive.tsx': '/merker/voorbeeld',
  'SearchResults.tsx': '/soek',
  'Article.tsx': '/artikel/voorbeeld',
  'SingleEvent.tsx': '/gebeure/voorbeeld',
  'SingleObituary.tsx': '/sterftes/voorbeeld',
  'SingleMultimedia.tsx': '/multimedia/voorbeeld',
  'CompetitionSingle.tsx': '/kompetisies/voorbeeld',
  'Register.tsx': '/registreer',
  'MyAccount.tsx': '/my-rekening',
  'MyEEditions.tsx': '/my-e-uitgawes',
  'Cart.tsx': '/mandjie',
  'Checkout.tsx': '/betaal',
  'AccountActivation.tsx': '/rekening-aktivering',
  'SubmitHub.tsx': '/dien-in',
  'SubmitEvent.tsx': '/gebeure/dien-in',
  'NewsletterSubscribe.tsx': '/nuusbrief',
  'ManageNewsletters.tsx': '/nuusbrief/bestuur',
  'NewsletterConfirmation.tsx': '/nuusbrief/bevestig',
  'NewsletterUnsubscribeConfirm.tsx': '/nuusbrief/teken-af',
  'NewsletterReEngagement.tsx': '/nuusbrief/heraktiveer',
  'PrivacyPolicy.tsx': '/privaatheid',
  'TermsAndConditions.tsx': '/voorwaardes',
  'CookiePolicy.tsx': '/koekie-beleid',
  'PAIAPage.tsx': '/paia',
  'UserRulesPage.tsx': '/gebruikersreels',
  'AdvertisingGuidelinesPage.tsx': '/advertensie-riglyne',
  'PressCodePage.tsx': '/perskode',
  'AIPolicyPage.tsx': '/ki-beleid',
  'CommentPolicyPage.tsx': '/kommentaar-beleid',
  'ReturnsPolicy.tsx': '/terugsendings',
  'ComplaintsProcedurePage.tsx': '/klagtes',
  'NotFound.tsx': '/404-voorbeeld',
  'Offline.tsx': '/aanlyn',
  'CompetitionTerms.tsx': '/kompetisie-voorwaardes',
};
