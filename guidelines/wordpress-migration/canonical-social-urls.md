# Canonical Social Media URLs — Die Papier

**Last updated**: 2026-03-02  
**Status**: ✅ OFFICIAL — Single Source of Truth  
**Owner**: User verified (2026-03-02)

---

## Official Die Papier Social Profiles

These are the **official** social media account URLs for Die Papier. All WordPress patterns, React components, Schema.org markup, and documentation must use these exact URLs.

### Primary Social Networks

| Platform | Canonical URL | Username/Handle | Notes |
|----------|---------------|-----------------|-------|
| **Facebook** | `https://www.facebook.com/diepapier.za/about/` | `diepapier.za` | Includes `/about/` path |
| **Instagram** | `https://instagram.com/die.papier` | `die.papier` | Username has dot |
| **X (Twitter)** | `https://x.com/die_papier` | `die_papier` | Underscore in handle, use x.com not twitter.com |
| **YouTube** | `https://www.youtube.com/@diepapier` | `@diepapier` | Modern @ handle format |
| **LinkedIn** | `https://linkedin.com/company/diepapier/` | `diepapier` | Company page |
| **TikTok** | `https://www.tiktok.com/@diepapier` | `@diepapier` | Handle format |
| **Email** | `mailto:lesers@diepapier.co.za` | `lesers@diepapier.co.za` | Reader inquiries |

---

## Network Priority for South African Audience

**Display order** (most important first):

1. **Facebook** — Most popular social network in SA for news sharing
2. **WhatsApp** — 90%+ smartphone penetration, primary messaging app (sharing only, not profile)
3. **X** — Breaking news and commentary platform
4. **Instagram** — Visual content and community engagement
5. **YouTube** — Video content (if applicable)
6. **LinkedIn** — Professional/business content
7. **TikTok** — Emerging platform, younger demographic
8. **Email** — Direct reader contact

**Note**: WhatsApp is used for **content sharing** (via Outermost Social Sharing block) but NOT as a profile link (no public WhatsApp business account).

---

## Usage by Context

### 1. Social Profiles (Footer, Mobile Menu, About Page)

**Use**: Facebook, Instagram, X, YouTube, LinkedIn, TikTok, Email  
**Block**: `core/social-links`  
**Order**: Facebook → Instagram → X → YouTube → LinkedIn → TikTok → Email

**WordPress Block Markup**:
```html
<!-- wp:social-links -->
<ul class="wp-block-social-links">
  <!-- wp:social-link {"url":"https://www.facebook.com/diepapier.za/about/","service":"facebook"} /-->
  <!-- wp:social-link {"url":"https://instagram.com/die.papier","service":"instagram"} /-->
  <!-- wp:social-link {"url":"https://x.com/die_papier","service":"x"} /-->
  <!-- wp:social-link {"url":"https://www.youtube.com/@diepapier","service":"youtube"} /-->
  <!-- wp:social-link {"url":"https://linkedin.com/company/diepapier/","service":"linkedin"} /-->
  <!-- wp:social-link {"url":"https://www.tiktok.com/@diepapier","service":"tiktok"} /-->
  <!-- wp:social-link {"url":"mailto:lesers@diepapier.co.za","service":"mail"} /-->
</ul>
<!-- /wp:social-links -->
```

---

### 2. Social Sharing (Article Posts, Product Pages)

**Use**: Facebook, WhatsApp, X, Email, Copy Link  
**Block**: `outermost/social-sharing`  
**Order**: Facebook → WhatsApp → X → Email → Copy

**WordPress Block Markup**:
```html
<!-- wp:outermost/social-sharing {
  "networks":["facebook","whatsapp","x","email","copy"],
  "iconSize":"default",
  "iconStyle":"filled",
  "showLabels":false
} /-->
```

**Note**: This block shares the CURRENT PAGE URL, not Die Papier's social profiles.

---

### 3. Schema.org Organization Markup (SEO)

**Use**: Facebook, Instagram, X, YouTube, LinkedIn, TikTok  
**Block**: Yoast SEO plugin settings  
**Field**: Organization → Social Profiles

**JSON-LD Output**:
```json
{
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "Die Papier",
  "url": "https://diepapier.co.za",
  "logo": "https://diepapier.co.za/wp-content/uploads/2026/01/die-papier-logo.png",
  "sameAs": [
    "https://www.facebook.com/diepapier.za/about/",
    "https://instagram.com/die.papier",
    "https://x.com/die_papier",
    "https://www.youtube.com/@diepapier",
    "https://linkedin.com/company/diepapier/",
    "https://www.tiktok.com/@diepapier"
  ]
}
```

---

### 4. React Mock Data

**File**: `/src/app/data/navigation.ts`

**SOCIAL_LINKS Array**:
```typescript
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/diepapier.za/about/", icon: "Facebook" },
  { label: "Instagram", href: "https://instagram.com/die.papier", icon: "Instagram" },
  { label: "X", href: "https://x.com/die_papier", icon: "XSocial" },
  { label: "YouTube", href: "https://www.youtube.com/@diepapier", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/diepapier/", icon: "Linkedin" },
  { label: "TikTok", href: "https://www.tiktok.com/@diepapier", icon: "TikTok" },
  { label: "Email", href: "mailto:lesers@diepapier.co.za", icon: "Mail" },
];
```

**FOOTER_NAVIGATION.social Object**:
```typescript
export const FOOTER_NAVIGATION = {
  social: {
    facebook: "https://www.facebook.com/diepapier.za/about/",
    instagram: "https://instagram.com/die.papier",
    x: "https://x.com/die_papier",
    youtube: "https://www.youtube.com/@diepapier",
    linkedin: "https://linkedin.com/company/diepapier/",
    tiktok: "https://www.tiktok.com/@diepapier",
    email: "mailto:lesers@diepapier.co.za"
  }
}
```

---

## URL Format Notes

### Facebook
- **Full URL**: `https://www.facebook.com/diepapier.za/about/`
- **Username**: `diepapier.za` (includes `.za` suffix)
- **Path**: `/about/` (must be included)
- **Why**: This is the official Die Papier Facebook page About page URL

### Instagram
- **Full URL**: `https://instagram.com/die.papier`
- **Username**: `die.papier` (dot separator, not underscore)
- **Protocol**: `https://` (optional, Instagram redirects)
- **www**: Not required for Instagram

### X (Twitter)
- **Full URL**: `https://x.com/die_papier`
- **Username**: `die_papier` (underscore separator)
- **Domain**: Use `x.com` NOT `twitter.com` (Twitter rebranded to X)
- **Service slug**: Use `"service":"x"` in WordPress blocks (NOT `"service":"twitter"`)

### YouTube
- **Full URL**: `https://www.youtube.com/@diepapier`
- **Username**: `@diepapier` (modern @ handle format)
- **Legacy format**: `https://youtube.com/diepapier` (still works, but @ handle preferred)
- **Why @ format**: YouTube's current standard for channel URLs

### LinkedIn
- **Full URL**: `https://linkedin.com/company/diepapier/`
- **Type**: Company page (not personal profile)
- **Path**: `/company/diepapier/` (trailing slash optional)

### TikTok
- **Full URL**: `https://www.tiktok.com/@diepapier`
- **Username**: `@diepapier` (@ required for TikTok handles)
- **www**: Required for TikTok

### Email
- **Full URL**: `mailto:lesers@diepapier.co.za`
- **Address**: `lesers@diepapier.co.za` (reader inquiries)
- **NOT**: `redaksie@diepapier.co.za` (editorial, not public)
- **Usage**: Public contact method in social links

---

## Contact Email Addresses

| Purpose | Email Address | Public? | Usage |
|---------|--------------|---------|-------|
| **Reader inquiries** | `lesers@diepapier.co.za` | ✅ Yes | Social links, contact forms, public |
| **Editorial submissions** | `redaksie@diepapier.co.za` | ⚠️ Limited | FAQ content, journalist submissions (not in social links) |
| **Advertising** | `advertensies@diepapier.co.za` | ✅ Yes | Advertising inquiries (if exists) |
| **Subscriptions** | `intekening@diepapier.co.za` | ✅ Yes | Subscription support (if exists) |

**For social links**: Use `lesers@diepapier.co.za` (most general, public-facing)

---

## Verification Status

| Platform | URL Verified | Account Active | Notes |
|----------|-------------|----------------|-------|
| Facebook | ✅ 2026-03-02 | ✅ Active | User confirmed |
| Instagram | ✅ 2026-03-02 | ✅ Active | User confirmed |
| X | ✅ 2026-03-02 | ✅ Active | User confirmed |
| YouTube | ⚠️ Inferred | ⚠️ Unknown | From React data + footer pattern |
| LinkedIn | ✅ 2026-03-02 | ✅ Active | User confirmed |
| TikTok | ✅ 2026-03-02 | ✅ Active | User confirmed |
| Email | ✅ 2026-03-02 | ✅ Active | User confirmed |

---

## Related Documentation

- [Social Sharing Integration Guide](/guidelines/wordpress-migration/third-party-plugins/social-sharing.md) — Outermost Social Sharing Block
- [SEO & Schema Guide](/guidelines/wordpress-migration/seo-and-schema.md) — Schema.org Organization markup
- [Social Implementation Plan](/reports/social-implementation-plan.md) — Implementation roadmap
- [Social Audit Reports](/reports/audits/) — social-audit-1 through social-audit-4

---

## Change History

| Date | Change | Reason |
|------|--------|--------|
| 2026-03-02 | Created canonical URL document | User provided official URLs after audit |
| 2026-03-02 | Email changed from `redaksie@` to `lesers@` | User specified public contact email |
| 2026-03-02 | YouTube URL inferred as `youtube.com/@diepapier` | From React data + footer pattern |

---

**IMPORTANT**: This document is the **single source of truth** for all Die Papier social media URLs. Any discrepancies in code, patterns, or documentation should be updated to match this file.

**Last updated**: 2026-03-02
