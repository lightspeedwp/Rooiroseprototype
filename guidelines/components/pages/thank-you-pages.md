# Thank You Pages

**Last updated**: 2026-02-23
**Category**: Pages (Group)
**WordPress target**: Static pages (redirect targets after form submissions)

---

This document covers all "thank you" confirmation pages. They share an identical structure.

## Pages Covered

| Page | React Source | Route | Triggered By |
|:-----|:------------|:------|:-------------|
| **Thank You Contact** | `ThankYouContact.tsx` | `/dankie-kontak` | Contact form submission |
| **Thank You Newsletter** | `ThankYouNewsletter.tsx` | `/dankie-nuusbrief` | Newsletter signup |
| **Thank You Registration** | `ThankYouRegistration.tsx` | `/dankie-registrasie` | Account registration |
| **Thank You Advertising** | `ThankYouAdvertising.tsx` | `/dankie-adverteer` | Advertising enquiry |
| **Thank You Competition** | `ThankYouCompetition.tsx` | `/dankie-kompetisie` | Competition entry |
| **Thank You Submission** | `ThankYouSubmission.tsx` | `/dankie-indiening` | Content/event submission |

## Common Structure

```
┌─ <div> (bg-gray-50 dark:bg-background, min-h-screen, pb-20)
│  └─ PageContainer (breadcrumbs)
│     └─ .alignwide py-16
│        └─ Card (max-w-xl mx-auto, bg-white dark:bg-card, rounded-lg, shadow-sm)
│           ├─ Header (bg-brand-navy dark:bg-background, p-8, text-center)
│           │  ├─ CheckCircle icon (green-400, in circle)
│           │  ├─ H1 "Dankie..." (serif, --fvs-h1, text-white)
│           │  └─ P subtitle (text-gray-300)
│           └─ Content (p-8 md:p-10)
│              ├─ Success message (green bg, icon + text)
│              ├─ "What happens next" info box (blue bg, icon + bullet list)
│              ├─ Support email link
│              └─ Action buttons: "Terug na tuisblad" + secondary action
│
└─ PageFAQSection (page-specific FAQ items)
```

## Design Tokens

| Element | Value |
|:--------|:------|
| Card header bg | `bg-brand-navy dark:bg-background` |
| Success box | `bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50` |
| Info box | `bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50` |
| Primary CTA | `bg-primary hover:bg-primary/90 text-white` |
| H1 title | `--font-heading`, `--fvs-h1`, `--lh-h1`, text-white |

## WordPress Mapping

### Construct Type
Static WordPress pages. Form plugins (Gravity Forms, WPForms) redirect to these pages after successful submission.

### Implementation
1. Create each page in WordPress
2. Use the `page-no-title.html` template (title is in the card header)
3. Content via core blocks matching the card layout
4. Set form confirmation redirects to these URLs

## Dependencies

All share: `PageContainer`, `PageFAQSection`, `Button`, `Link`, `SEO`

## Known Exemptions

None.
