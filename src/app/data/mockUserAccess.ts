import { EEdition } from './eEditions';

// ──────────────────────────────────────────────────
// Mock user access / ownership data.
// Single source of truth used by:
//   - SingleEEdition.tsx  (ownership check per edition)
//   - MyEEditions.tsx     (build full library)
//   - EEditions.tsx       (archive page badges)
//
// In production this would come from WooCommerce
// Memberships + order history via REST API.
// ──────────────────────────────────────────────────

// ── Subscription mock ────────────────────────────

export interface UserSubscription {
  id: string;
  plan: string;
  status: 'active' | 'expired' | 'cancelled';
  startDate: string;
  endDate: string | null;
  nextPayment: string;
  amount: string;
  /** Region the subscriber chose at signup (pa_streek slug) */
  region: string;
  regionLabel: string;
}

/** Mock: user has an active subscription starting 1 Nov 2025 */
export const MOCK_SUBSCRIPTION: UserSubscription = {
  id: 'SUB-88421',
  plan: 'Digitale Intekening (Maandeliks)',
  status: 'active',
  startDate: '01 Nov 2025',
  endDate: null,
  nextPayment: '01 Maart 2026',
  amount: 'R140.00',
  region: 'gauteng-vrystaat',
  regionLabel: 'Gauteng en Vrystaat',
};

// ── Ownership constants ──────────────────────────

/** Editions published on or after this date are covered by the mock subscription. */
export const SUBSCRIPTION_CUTOFF = new Date('2025-11-01');

/** Editions purchased individually BEFORE the subscription started. */
export const INDIVIDUAL_PURCHASE_IDS: { editionId: string; region: string; regionLabel: string }[] = [
  { editionId: 'uitgawe-2025-10-24', region: 'gauteng-vrystaat', regionLabel: 'Gauteng en Vrystaat' },
  { editionId: 'uitgawe-2025-10-10', region: 'wes-kaap', regionLabel: 'Wes-Kaap' },
];

// ── Helpers ──────────────────────────────────────

/**
 * Parse an Afrikaans-formatted date string ("13 Feb 2026") into a JS Date.
 * Returns null if parsing fails.
 */
export function parseEditionDate(dateStr: string): Date | null {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mrt: 2, Apr: 3, Mei: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Okt: 9, Nov: 10, Des: 11,
  };
  const parts = dateStr.split(' ');
  if (parts.length < 3) return null;
  const day = parseInt(parts[0], 10);
  const month = months[parts[1]];
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || month === undefined || isNaN(year)) return null;
  return new Date(year, month, day);
}

/**
 * Check whether an edition is owned by the current (mock) user.
 * Returns 'subscription' | 'purchase' | null.
 */
export function getOwnershipStatus(
  editionId: string,
  editionDate: string
): 'subscription' | 'purchase' | null {
  // Individual purchases
  if (INDIVIDUAL_PURCHASE_IDS.some(p => p.editionId === editionId)) return 'purchase';

  // Subscription-covered editions (everything from Nov 2025 onward)
  const parsed = parseEditionDate(editionDate);
  if (parsed && parsed >= SUBSCRIPTION_CUTOFF) return 'subscription';

  return null;
}

// ── Library builder ──────────────────────────────

export interface OwnedEdition extends EEdition {
  acquiredVia: 'subscription' | 'purchase';
  purchaseDate?: string;
  orderNumber?: string;
  /** Region slug for this owned edition */
  purchasedRegion: string;
  purchasedRegionLabel: string;
}

/**
 * Build the full user library from mock ownership data.
 * Used by MyEEditions.tsx.
 */
export function buildUserLibrary(
  allEditions: EEdition[],
  subscription: UserSubscription | null,
  individualPurchases: { editionId: string; region: string; regionLabel: string }[]
): OwnedEdition[] {
  const library: OwnedEdition[] = [];

  for (const edition of allEditions) {
    const editionDate = parseEditionDate(edition.date);

    if (
      subscription &&
      subscription.status === 'active' &&
      editionDate &&
      editionDate >= SUBSCRIPTION_CUTOFF
    ) {
      library.push({
        ...edition,
        acquiredVia: 'subscription',
        purchasedRegion: subscription.region,
        purchasedRegionLabel: subscription.regionLabel,
      });
    } else {
      const purchase = individualPurchases.find(p => p.editionId === edition.id);
      if (purchase) {
        library.push({
          ...edition,
          acquiredVia: 'purchase',
          purchaseDate: edition.date,
          orderNumber: `#${2200 + Math.floor(Math.random() * 100)}`,
          purchasedRegion: purchase.region,
          purchasedRegionLabel: purchase.regionLabel,
        });
      }
    }
  }

  return library;
}