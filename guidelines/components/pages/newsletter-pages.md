# Newsletter Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Static pages + MailPoet integration

---

This document covers all newsletter-related pages.

## Pages Covered

| Page | React Source | Route | Purpose |
|:-----|:------------|:------|:--------|
| **Subscribe** | `NewsletterSubscribe.tsx` | `/nuusbrief-inteken` | Newsletter signup form (name, email, preferences) |
| **Confirmation** | `NewsletterConfirmation.tsx` | `/nuusbrief-bevestiging` | "Check your email" confirmation after signup |
| **Archive** | `NewsletterArchive.tsx` | `/nuusbrief-argief` | Grid of past newsletter issues |
| **Manage** | `ManageNewsletters.tsx` | `/nuusbrief-bestuur` | Preference center (toggle newsletters) |
| **Re-Engagement** | `NewsletterReEngagement.tsx` | `/nuusbrief-herinteken` | Win-back page for inactive subscribers |
| **Unsubscribe Confirm** | `NewsletterUnsubscribeConfirm.tsx` | `/nuusbrief-uitskryf` | "Are you sure?" unsubscribe page |
| **Unsubscribe Success** | `NewsletterUnsubscribeSuccess.tsx` | `/nuusbrief-uitskryf-sukses` | "You've been unsubscribed" confirmation |

## Common Structure

All follow the pattern:
```
┌─ SEO + PageContainer (breadcrumbs)
│  ├─ ContentHero (newsletter-themed)
│  └─ Content
│     ├─ Form / Grid / Confirmation card
│     └─ [Optional] FAQ section
```

## WordPress Mapping

### Construct Type
Static WordPress pages with MailPoet integration.

| Page | WP Implementation |
|:-----|:-----------------|
| Subscribe | MailPoet subscription form block or Gravity Forms |
| Confirmation | Static page content (no dynamic elements) |
| Archive | MailPoet newsletter archive block or custom query |
| Manage | MailPoet subscription management page |
| Re-Engagement | Static page with MailPoet form |
| Unsubscribe | MailPoet handles unsubscribe flow natively |

## Data Sources

- **UI strings**: `/src/app/data/newsletter.ts`
- **Newsletter list**: `/src/app/data/newsletters.ts`

## Dependencies

All share: `PageContainer`, `SEO`, `ContentHero`, `PageFAQSection`

## Known Exemptions

None.
