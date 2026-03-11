# Page Patterns

**Last updated**: 2026-03-02
**Category**: Patterns (Pages)
**Source**: `/wordpress-export/themes/die-papier-theme/patterns/page/`
**Total**: 20+ patterns

---

## Overview

Page patterns provide full-page content layouts for static WordPress pages. These patterns are typically applied to the `page.html` template via direct insertion or pattern reference.

---

## Pattern Inventory

### Static Core Pages (5)

| Pattern | Slug | Purpose | React Source |
|:---|:---|:---|:---|
| page-home | `die-papier/page-home` | Homepage Composition | Home.tsx |
| page-about | `die-papier/page-about` | About Us Layout | About.tsx |
| page-contact | `die-papier/page-contact` | Contact Layout | Contact.tsx |
| page-advertise | `die-papier/page-advertise` | Advertising Layout | Advertise.tsx |
| page-faq | `die-papier/page-faq` | FAQ Landing | FAQPage.tsx |

### Submissions & Hubs (4)

| Pattern | Slug | Purpose | React Source |
|:---|:---|:---|:---|
| page-submit-hub | `die-papier/page-submit-hub` | Submission Hub | SubmitHub.tsx |
| page-submit-event | `die-papier/page-submit-event` | Event Form | SubmitEvent.tsx |
| page-submit | `die-papier/page-submit` | Story Submission | SubmitStory.tsx |
| page-activation | `die-papier/page-activation` | Account Activation | AccountActivation.tsx |

### Policies & Legal (3)

| Pattern | Slug | Purpose | React Source |
|:---|:---|:---|:---|
| page-policies | `die-papier/page-policies` | Policies Hub | Policies.tsx |
| page-policy | `die-papier/page-policy` | Generic Policy Page | PolicyPage.tsx |
| page-competition-terms | `die-papier/page-competition-terms` | Competition T&Cs | CompetitionTerms.tsx |

### Account & Commerce (6)

| Pattern | Slug | Purpose | React Source |
|:---|:---|:---|:---|
| page-auth | `die-papier/page-auth` | Login/Register | Register.tsx |
| page-my-account | `die-papier/page-my-account` | Dashboard | MyAccount.tsx |
| page-my-eeditions | `die-papier/page-my-eeditions` | User Library | MyEEditions.tsx |
| page-cart | `die-papier/page-cart` | Shopping Cart | Cart.tsx |
| page-checkout | `die-papier/page-checkout` | Checkout Page | Checkout.tsx |
| page-thank-you | `die-papier/page-thank-you` | Order Confirmation | ThankYou.tsx |

### Utility & Information (4)

| Pattern | Slug | Purpose | React Source |
|:---|:---|:---|:---|
| page-search | `die-papier/page-search` | Search Page | SearchResults.tsx |
| page-sitemap | `die-papier/page-sitemap` | Site Map | Sitemap.tsx |
| page-weather | `die-papier/page-weather` | Weather Page | Weather.tsx |
| page-traffic | `die-papier/page-traffic` | Traffic Page | Traffic.tsx |

---

## Implementation Standards

### Hero Sections
Most page patterns must start with a hero section using `is-style-section-hero-default` or `is-style-section-cover-hero`.

### Standard Content Wrapper
Inner page content should be wrapped in a Group block with `layout: { "type": "constrained" }` to ensure optimal reading width.
