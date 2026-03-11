# WordPress Core Block: Social Links

**Last updated**: 2026-03-02  
**Block Name**: `core/social-links`  
**Category**: Widgets  
**Since WordPress**: 5.4  

Complete reference for the WordPress Core Social Links block implementation in the Die Papier FSE theme.

---

## Overview

The **Social Links block** (`core/social-links`) is a WordPress Core block that displays clickable social media icons linking to social profiles. Die Papier uses this block for **profile links** (to Die Papier's social accounts), NOT for content sharing.

### Key Distinction

| Purpose | Block to Use | Example |
|---------|--------------|---------|
| **Social Profiles** (links to Die Papier's accounts) | `core/social-links` | Footer, Mobile Menu, About Page |
| **Social Sharing** (share current page) | `outermost/social-sharing` | Article posts, Product pages |

**This guide covers**: `core/social-links` (profile links only)  
**For sharing**: See [Social Sharing Guide](/guidelines/wordpress-migration/third-party-plugins/social-sharing.md)

---

## Block Attributes

```json
{
  "iconColor": "base",
  "iconColorValue": "#ffffff",
  "iconBackgroundColor": "transparent",
  "size": "default",
  "className": "is-style-logos-only",
  "layout": {
    "type": "flex",
    "justifyContent": "center"
  },
  "style": {
    "spacing": {
      "blockGap": "var:preset|spacing|x-small"
    }
  }
}
```

### Attribute Reference

| Attribute | Type | Default | Die Papier Usage | Description |
|-----------|------|---------|------------------|-------------|
| `iconColor` | `string` | — | `"base"` | Color slug for icon fill |
| `iconColorValue` | `string` | — | `"#ffffff"` | Hex color for icon fill |
| `iconBackgroundColor` | `string` | — | `"transparent"` | Background circle behind icon |
| `size` | `string` | `"default"` | `"default"` | Icon size (`default`, `large`, `huge`) |
| `className` | `string` | — | `"is-style-logos-only"` | Block style variation |
| `layout.type` | `string` | `"flex"` | `"flex"` | Container layout type |
| `layout.justifyContent` | `string` | `"left"` | `"center"` or `"left"` | Horizontal alignment |
| `style.spacing.blockGap` | `string` | — | `"var:preset|spacing|x-small"` | Space between icons |

---

## Available Social Services

WordPress Core Social Links block supports **40+ services**. Die Papier uses **7 networks**:

### Die Papier Network Selection

| Service | Slug | URL Format | Icon |
|---------|------|------------|------|
| Facebook | `facebook` | `https://www.facebook.com/{username}` | Facebook logo |
| Instagram | `instagram` | `https://instagram.com/{username}` | Instagram logo |
| X (Twitter) | `x` | `https://x.com/{handle}` | X logo |
| YouTube | `youtube` | `https://www.youtube.com/@{handle}` | YouTube logo |
| LinkedIn | `linkedin` | `https://linkedin.com/company/{company}` | LinkedIn logo |
| TikTok | `tiktok` | `https://www.tiktok.com/@{handle}` | TikTok logo |
| Email | `mail` | `mailto:{email}` | Envelope icon |

### Other Available Services (NOT Used)

WhatsApp, Telegram, Snapchat, Pinterest, Reddit, Tumblr, Twitch, Vimeo, Spotify, SoundCloud, Patreon, GitHub, WordPress, Medium, RSS, and more.

**Why limited to 7?** Die Papier focuses on active social platforms relevant to South African news audience. See [Canonical Social URLs](/guidelines/wordpress-migration/canonical-social-urls.md).

---

## Block Styles

WordPress Core Social Links has **3 built-in styles**:

### 1. Default (Filled Circles)

```html
<!-- wp:social-links -->
<ul class="wp-block-social-links">
  <!-- Individual links -->
</ul>
<!-- /wp:social-links -->
```

**Appearance**: Icons on solid color circles  
**Die Papier Usage**: ❌ Not used (too heavy)

---

### 2. Logos Only (No Background)

```html
<!-- wp:social-links {"className":"is-style-logos-only"} -->
<ul class="wp-block-social-links is-style-logos-only">
  <!-- Individual links -->
</ul>
<!-- /wp:social-links -->
```

**Appearance**: Flat icon logos, no circles  
**Die Papier Usage**: ✅ **PRIMARY STYLE** — Used everywhere (footer, mobile menu)

---

### 3. Pill Shape (Rounded Rectangles)

```html
<!-- wp:social-links {"className":"is-style-pill-shape"} -->
<ul class="wp-block-social-links is-style-pill-shape">
  <!-- Individual links -->
</ul>
<!-- /wp:social-links -->
```

**Appearance**: Icons in rounded rectangle backgrounds  
**Die Papier Usage**: ❌ Not used

---

## Die Papier Implementation

### Reusable Hidden Pattern

Die Papier uses a **single hidden pattern** for all social profile links to ensure consistency and easy updates.

**Pattern File**: `/patterns/hidden/hidden-social-profiles.php`  
**Pattern Slug**: `die-papier/hidden-social-profiles`  
**Category**: `die-papier-hidden`  
**Inserter**: No (hidden, reference-only)

**Full Pattern Content**:

```php
<?php
/**
 * Title: Social Profiles
 * Slug: die-papier/hidden-social-profiles
 * Categories: die-papier-hidden
 * Inserter: no
 * Description: Die Papier's official social media profile links
 */
?>

<!-- wp:social-links {
	"iconColor":"base",
	"iconColorValue":"#ffffff",
	"className":"is-style-logos-only",
	"style":{
		"spacing":{
			"blockGap":"var:preset|spacing|x-small"
		}
	}
} -->
<ul class="wp-block-social-links has-icon-color is-style-logos-only">
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

### Usage in Template Parts

**To include social profiles in any pattern/template/part:**

```html
<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
```

**Current Usage**:
- ✅ Footer (footer.php)
- ✅ Footer Simple (footer-simple.php)
- ✅ Mobile Menu (menu-mobile.php)

**Potential Future Usage**:
- About page (team section)
- Contact page (social CTA)
- 404 page (stay connected)

---

### Styling Overrides

Die Papier applies custom CSS for social links in different contexts:

**File**: `/assets/css/social-links.css` (if exists) or inline in theme.json

```css
/* Footer Social Links — White icons on navy background */
.site-footer .wp-block-social-links {
  justify-content: center;
}

.site-footer .wp-block-social-links a {
  color: #ffffff;
  transition: opacity 0.2s ease;
}

.site-footer .wp-block-social-links a:hover {
  opacity: 0.7;
}

/* Mobile Menu Social Links — Centered, larger spacing */
.mobile-menu .wp-block-social-links {
  justify-content: center;
  gap: var(--wp--preset--spacing--small);
}

/* Dark Section Social Links — Ensure white icons */
.is-style-section-navy .wp-block-social-links a,
.is-style-section-image .wp-block-social-links a {
  color: #ffffff;
}

/* Light Section Social Links — Navy icons */
.is-style-section-white .wp-block-social-links a,
.is-style-section-muted .wp-block-social-links a {
  color: var(--wp--preset--color--contrast);
}
```

---

## Individual Social Link Block

Each social icon is an individual `core/social-link` block (child of `core/social-links`):

```html
<!-- wp:social-link {"url":"https://www.facebook.com/diepapier.za/about/","service":"facebook"} /-->
```

### Attributes

| Attribute | Type | Required | Example |
|-----------|------|----------|---------|
| `url` | `string` | ✅ Yes | `"https://x.com/die_papier"` |
| `service` | `string` | ✅ Yes | `"x"` (determines icon) |
| `label` | `string` | ❌ No | Custom aria-label (auto-generated if empty) |

**Note**: The `service` attribute determines which icon displays. WordPress automatically matches the `service` to the built-in icon library.

---

## Accessibility

### ARIA Labels

WordPress automatically generates accessible labels:

```html
<!-- Automatic aria-label -->
<a href="https://www.facebook.com/diepapier.za/about/" 
   class="wp-social-link wp-social-link-facebook"
   aria-label="Facebook">
  <svg>...</svg>
</a>
```

**Screen reader announces**: "Facebook" (or custom label if provided)

### Keyboard Navigation

- **Tab**: Navigate through social links
- **Enter**: Open social profile in new tab
- **Focus indicator**: Browser default outline (can be customized)

### Best Practices

✅ **DO**:
- Use semantic `<ul>` list markup (WordPress default)
- Include `aria-label` on each link (automatic)
- Ensure sufficient color contrast (white on navy = 10.4:1 ratio)
- Test keyboard navigation

❌ **DON'T**:
- Hide links with `display: none` (breaks accessibility)
- Use icon fonts without fallback text
- Rely on color alone to convey meaning

---

## Examples

### Example 1: Footer Social Links (Centered)

```html
<!-- wp:group {
	"layout":{"type":"flex","justifyContent":"center"},
	"className":"site-footer__social"
} -->
<div class="wp-block-group site-footer__social">
	<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
</div>
<!-- /wp:group -->
```

**Renders as**: Centered row of 7 white social icons

---

### Example 2: Mobile Menu Social Links (Bottom)

```html
<!-- wp:separator {
	"backgroundColor":"border-light",
	"style":{"spacing":{"margin":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|medium"}}}
} /-->

<!-- wp:group {
	"layout":{"type":"flex","justifyContent":"center"}
} -->
<div class="wp-block-group">
	<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->
</div>
<!-- /wp:group -->
```

**Renders as**: Separator line, then centered social icons

---

### Example 3: Custom Social Links (Manual)

If you need a custom subset of networks (rare):

```html
<!-- wp:social-links {
	"iconColor":"base",
	"className":"is-style-logos-only",
	"style":{"spacing":{"blockGap":"var:preset|spacing|x-small"}}
} -->
<ul class="wp-block-social-links has-icon-color is-style-logos-only">
	<!-- wp:social-link {"url":"https://www.facebook.com/diepapier.za/about/","service":"facebook"} /-->
	<!-- wp:social-link {"url":"https://instagram.com/die.papier","service":"instagram"} /-->
	<!-- wp:social-link {"url":"https://x.com/die_papier","service":"x"} /-->
</ul>
<!-- /wp:social-links -->
```

**Use case**: Special landing page with only Facebook, Instagram, X

**Note**: For most cases, use the hidden pattern instead to maintain consistency.

---

## Canonical URLs

All social profile URLs are documented in:

**Reference**: `/guidelines/wordpress-migration/canonical-social-urls.md`

**Quick Reference**:
- Facebook: `https://www.facebook.com/diepapier.za/about/`
- Instagram: `https://instagram.com/die.papier`
- X: `https://x.com/die_papier`
- YouTube: `https://www.youtube.com/@diepapier`
- LinkedIn: `https://linkedin.com/company/diepapier/`
- TikTok: `https://www.tiktok.com/@diepapier`
- Email: `mailto:lesers@diepapier.co.za`

**IMPORTANT**: Always use the hidden pattern (`die-papier/hidden-social-profiles`) to ensure URLs stay synchronized. Do NOT hardcode URLs inline.

---

## Related Documentation

- [Canonical Social URLs](/guidelines/wordpress-migration/canonical-social-urls.md) — Single source of truth for URLs
- [Social Sharing Guide](/guidelines/wordpress-migration/third-party-plugins/social-sharing.md) — Outermost Social Sharing block (for content sharing)
- [Footer Patterns](/guidelines/components/patterns/footer.md) — Footer implementation
- [Mobile Menu Pattern](/guidelines/components/patterns/navigation.md) — Mobile menu implementation

---

## Migration Notes (React → WordPress)

### React Implementation

**File**: `/src/app/data/navigation.ts`

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

### WordPress Implementation

**Pattern**: `die-papier/hidden-social-profiles`  
**Usage**: `<!-- wp:pattern {"slug":"die-papier/hidden-social-profiles"} /-->`

**Mapping**:
- React `SOCIAL_LINKS` array → WordPress hidden pattern
- React `icon` prop → WordPress `service` attribute
- React `href` prop → WordPress `url` attribute
- React `label` prop → WordPress auto-generated aria-label

---

## Testing Checklist

### Visual Testing
- [ ] Icons display correctly (not broken SVGs)
- [ ] Icon color matches design (white in footer, navy in light sections)
- [ ] Icon size is consistent (default 24px)
- [ ] Spacing between icons is correct (x-small = 8px)
- [ ] Logos-only style applied (no background circles)

### Functional Testing
- [ ] All 7 links navigate to correct URLs
- [ ] Links open in new tab (target="_blank" automatic for external links)
- [ ] Email link opens mail client with correct address
- [ ] Links work on desktop and mobile devices

### Accessibility Testing
- [ ] Tab through links (keyboard navigation works)
- [ ] Enter key activates link
- [ ] Screen reader announces network name (e.g., "Facebook")
- [ ] Focus indicator visible on focused link
- [ ] Color contrast sufficient (WCAG AA 4.5:1 minimum)

### Responsive Testing
- [ ] Icons stack appropriately on mobile (if needed)
- [ ] Icons don't overflow container on small screens
- [ ] Touch targets are large enough on mobile (44px minimum)

---

**Last updated**: 2026-03-02  
**Version**: 1.0.0  
**Status**: ✅ Implementation Complete
