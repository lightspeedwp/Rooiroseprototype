# Social Sharing Integration Guide

**Last updated**: 2026-03-02
**Version**: 2.0
**Version at launch**: 1.2.5
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

Complete reference for Outermost Social Sharing Block integration in the Die Papier WordPress FSE theme. This guide documents all social networks, Afrikaans translations, pattern integration, and accessibility best practices for South African news sharing.

---

## Table of Contents

1. [Overview](#overview)
2. [Social Sharing Block](#social-sharing-block)
3. [Network Selection Strategy](#network-selection-strategy)
4. [Afrikaans Translations](#afrikaans-translations)
5. [Pattern Integration](#pattern-integration)
6. [Theme Styling](#theme-styling)
7. [Accessibility](#accessibility)
8. [Testing Checklist](#testing-checklist)

---

## Overview

The **Outermost Social Sharing Block** (`outermost/social-sharing`) provides native WordPress block-based social sharing functionality. Die Papier uses **5 social networks** optimized for the South African news audience.

### Key Features

- **Block-native**: Full Gutenberg integration (no shortcodes, no custom HTML)
- **5 Networks**: Facebook, WhatsApp, X (Twitter), Email, Copy Link
- **Afrikaans Labels**: All network names and actions translated
- **South African Optimization**: WhatsApp prioritized (most popular messaging app in SA)
- **Icon Customization**: 3 size presets (small, default, large)
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Usage in Die Papier

- **Article Post Meta (Top)**: Compact icons-only sharing (24px icons)
- **Article Post Meta (Bottom)**: Full sharing with Afrikaans labels (36px icons)
- **Share Section Pattern**: Standalone sharing section (24px icons)
- **Event/Multimedia/Obituary/Competition Pages**: Bottom meta sharing (36px icons)

---

## Social Sharing Block

### Block Name

**Namespace**: `outermost`  
**Slug**: `outermost/social-sharing`  
**Category**: `widgets`  
**Plugin**: Outermost Social Sharing Block (free)

### Block Attributes

```json
{
  "networks": ["facebook", "whatsapp", "twitter", "email", "copy"],
  "iconSize": "default",
  "iconStyle": "filled",
  "showLabels": false,
  "align": "left",
  "className": ""
}
```

### Attribute Descriptions

| Attribute | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `networks` | `array` | `["facebook","twitter","linkedin","email","copy"]` | See Network List | Social networks to display |
| `iconSize` | `string` | `"default"` | `"small"`, `"default"`, `"large"` | Icon size preset |
| `iconStyle` | `string` | `"filled"` | `"filled"`, `"outlined"` | Icon visual style |
| `showLabels` | `boolean` | `false` | `true`, `false` | Show network names next to icons |
| `align` | `string` | `"left"` | `"left"`, `"center"`, `"right"` | Horizontal alignment |
| `className` | `string` | `""` | Any CSS class | Custom CSS class |

### Available Networks

| Network | Slug | Die Papier Usage |
|---------|------|------------------|
| Facebook | `facebook` | ✅ Used |
| WhatsApp | `whatsapp` | ✅ Used |
| Twitter/X | `twitter` | ✅ Used (labeled as "X") |
| Email | `email` | ✅ Used |
| Copy Link | `copy` | ✅ Used |
| LinkedIn | `linkedin` | ❌ Not used (not popular in SA) |
| Pinterest | `pinterest` | ❌ Not used (not news-focused) |
| Reddit | `reddit` | ❌ Not used (low SA usage) |
| Telegram | `telegram` | ❌ Not used (WhatsApp dominates) |
| Messenger | `messenger` | ❌ Not used (WhatsApp dominates) |

### Icon Size Mapping

Die Papier uses **3 icon size presets** from the Outermost block:

| Preset | Pixel Size | Die Papier Usage |
|--------|------------|------------------|
| `small` | 16px | Archive card sharing (future use) |
| `default` | 24px | Article top meta, Share section pattern |
| `large` | 36px | Article bottom meta, Event/Multimedia/Obituary pages |

**Note**: The Outermost block uses fixed presets. If custom sizes are needed, use CSS overrides or migrate to custom implementation.

---

## Network Selection Strategy

### South African Audience Priorities

Die Papier's network selection is optimized for **South African news consumption patterns**:

1. **WhatsApp** (Priority 1) — 90%+ smartphone penetration in SA, primary messaging app
2. **Facebook** (Priority 2) — Most popular social network for news sharing in SA
3. **X/Twitter** (Priority 3) — Breaking news and commentary platform
4. **Email** (Priority 4) — Professional sharing, newsletter signups
5. **Copy Link** (Priority 5) — Universal fallback, SMS sharing, clipboard copy

### Network Order

Networks are displayed in this order across all patterns:

```
Facebook → WhatsApp → X → Email → Copy Link
```

**Rationale**:
- **WhatsApp first** for South African audience (most-used)
- **Facebook second** for broad reach
- **X third** for breaking news sharing
- **Email fourth** for professional/formal sharing
- **Copy Link last** as universal fallback

### Network Share URLs

Each network uses a specific share URL format:

| Network | Share URL Template |
|---------|-------------------|
| Facebook | `https://www.facebook.com/sharer/sharer.php?u={url}` |
| WhatsApp | `https://wa.me/?text={title}%20{url}` |
| Twitter/X | `https://twitter.com/intent/tweet?url={url}&text={title}` |
| Email | `mailto:?subject={title}&body={url}` |
| Copy Link | (JavaScript clipboard API, no URL) |

**Note**: The Outermost block handles URL encoding automatically. `{url}` = current page URL, `{title}` = page title.

---

## Afrikaans Translations

All social network labels must be translated to Afrikaans when `showLabels: true`.

### Network Label Translations

| Network | English | Afrikaans | Context |
|---------|---------|-----------|---------|
| Facebook | Share on Facebook | Deel op Facebook | Full label (showLabels: true) |
| Facebook | Facebook | Facebook | Icon-only aria-label |
| WhatsApp | Share on WhatsApp | Stuur op WhatsApp | Full label (showLabels: true) |
| WhatsApp | WhatsApp | WhatsApp | Icon-only aria-label |
| Twitter/X | Share on X | Deel op X | Full label (showLabels: true) |
| Twitter/X | X | X | Icon-only aria-label |
| Email | Share via Email | Stuur per e-pos | Full label (showLabels: true) |
| Email | Email | E-pos | Icon-only aria-label |
| Copy Link | Copy Link | Kopieer skakel | Full label + aria-label |

### Translation Implementation

**Option 1: CSS Content Replacement** (if block doesn't support i18n)

```css
/* Replace English labels with Afrikaans */
.outermost-social-sharing__label[data-network="facebook"]::after {
    content: 'Deel op Facebook';
}

.outermost-social-sharing__label[data-network="whatsapp"]::after {
    content: 'Stuur op WhatsApp';
}

.outermost-social-sharing__label[data-network="twitter"]::after {
    content: 'Deel op X';
}

.outermost-social-sharing__label[data-network="email"]::after {
    content: 'Stuur per e-pos';
}

.outermost-social-sharing__label[data-network="copy"]::after {
    content: 'Kopieer skakel';
}

/* Hide original English text */
.outermost-social-sharing__label {
    font-size: 0;
}

.outermost-social-sharing__label::after {
    font-size: 16px;
}
```

**Option 2: JavaScript Label Replacement** (preferred for maintainability)

```javascript
// File: /assets/js/social-sharing-i18n.js
(function() {
    'use strict';
    
    const translations = {
        facebook: 'Deel op Facebook',
        whatsapp: 'Stuur op WhatsApp',
        twitter: 'Deel op X',
        email: 'Stuur per e-pos',
        copy: 'Kopieer skakel'
    };
    
    document.addEventListener('DOMContentLoaded', function() {
        const labels = document.querySelectorAll('.outermost-social-sharing__label');
        
        labels.forEach(function(label) {
            const network = label.getAttribute('data-network');
            if (translations[network]) {
                label.textContent = translations[network];
            }
        });
    });
})();
```

**Option 3: Plugin Translation File** (ideal, but requires plugin i18n support)

If the Outermost Social Sharing Block supports WordPress i18n:

```po
# File: /wp-content/languages/plugins/outermost-social-sharing-af_ZA.po
msgid "Share on Facebook"
msgstr "Deel op Facebook"

msgid "Share on WhatsApp"
msgstr "Stuur op WhatsApp"

msgid "Share on X"
msgstr "Deel op X"

msgid "Share via Email"
msgstr "Stuur per e-pos"

msgid "Copy Link"
msgstr "Kopieer skakel"
```

**Die Papier Implementation**: Use **Option 2** (JavaScript) for flexibility and maintainability. Enqueue `/assets/js/social-sharing-i18n.js` in theme.

---

## Pattern Integration

Die Papier uses **3 social sharing patterns** across templates:

### 1. Part: Post Meta Top

**File**: `/patterns/parts/part-post-meta-top.php`  
**Slug**: `die-papier/part-post-meta-top`  
**Usage**: Article header (single posts)

**Features**:
- **Compact layout**: Icons only, no labels
- **Icon size**: `default` (24px)
- **Icon style**: `filled`
- **Networks**: Facebook, WhatsApp, X, Email, Copy Link
- **Position**: Right side of post meta row (Author | Date | Read Time | Share)

**Block Markup**:
```html
<!-- wp:outermost/social-sharing {
    "networks": ["facebook","whatsapp","twitter","email","copy"],
    "iconSize": "default",
    "iconStyle": "filled",
    "showLabels": false,
    "align": "right"
} /-->
```

**Visual Layout**:
```
┌────────────────────────────────────────────────────────┐
│ Author Name | 27 Feb 2026 | 5 min read | 📱 💬 🐦 ✉️ 🔗 │
└────────────────────────────────────────────────────────┘
```

---

### 2. Part: Post Meta Bottom

**File**: `/patterns/parts/part-post-meta-bottom.php`  
**Slug**: `die-papier/part-post-meta-bottom`  
**Usage**: Article footer (single posts, events, multimedia, obituaries, competitions)

**Features**:
- **Full layout**: Icons + Afrikaans labels
- **Icon size**: `large` (36px)
- **Icon style**: `filled`
- **Networks**: Facebook, WhatsApp, X, Email, Copy Link
- **Labels**: "Deel op Facebook", "Stuur op WhatsApp", "Deel op X", "Stuur per e-pos", "Kopieer skakel"
- **Position**: Below tags, above related articles

**Block Markup**:
```html
<!-- wp:outermost/social-sharing {
    "networks": ["facebook","whatsapp","twitter","email","copy"],
    "iconSize": "large",
    "iconStyle": "filled",
    "showLabels": true,
    "align": "left"
} /-->
```

**Visual Layout**:
```
┌────────────────────────────────────────────────────────┐
│ Deel hierdie artikel:                                  │
│                                                         │
│ 📱 Deel op Facebook    💬 Stuur op WhatsApp            │
│ 🐦 Deel op X           ✉️ Stuur per e-pos              │
│ 🔗 Kopieer skakel                                       │
└────────────────────────────────────────────────────────┘
```

---

### 3. Pattern: Section Share

**File**: `/patterns/section/section-share.php`  
**Slug**: `die-papier/section-share`  
**Usage**: Standalone share section (can be inserted into any page)

**Features**:
- **Medium layout**: Icons only, centered
- **Icon size**: `default` (24px)
- **Icon style**: `filled`
- **Networks**: Facebook, WhatsApp, X, Email, Copy Link
- **Section style**: `is-style-section-white` (default)
- **Heading**: "Deel hierdie bladsy" (optional, can be customized)

**Block Markup**:
```html
<!-- wp:group {"align":"full","className":"is-style-section-white"} -->
<div class="wp-block-group alignfull is-style-section-white">
    
    <!-- wp:heading {"textAlign":"center","level":3} -->
    <h3 class="has-text-align-center">Deel hierdie bladsy</h3>
    <!-- /wp:heading -->
    
    <!-- wp:outermost/social-sharing {
        "networks": ["facebook","whatsapp","twitter","email","copy"],
        "iconSize": "default",
        "iconStyle": "filled",
        "showLabels": false,
        "align": "center"
    } /-->
    
</div>
<!-- /wp:group -->
```

**Visual Layout**:
```
┌────────────────────────────────────────────────────────┐
│                  Deel hierdie bladsy                    │
│                                                         │
│                  📱 💬 🐦 ✉️ 🔗                           │
└────────────────────────────────────────────────────────┘
```

---

### Pattern Usage Matrix

| Pattern | Template(s) | Icon Size | Show Labels | Position |
|---------|-------------|-----------|-------------|----------|
| `part-post-meta-top` | `single.html` | `default` (24px) | ❌ No | Top meta row (right) |
| `part-post-meta-bottom` | `single.html`, `single-dp_event.html`, `single-dp_multimedia.html`, `single-dp_obituary.html`, `single-dp_competition.html` | `large` (36px) | ✅ Yes | Below tags (left) |
| `section-share` | Any page (manual insert) | `default` (24px) | ❌ No | Standalone section (center) |

---

## Theme Styling

All social sharing custom CSS is in `/wordpress-export/themes/die-papier-theme/assets/css/social-sharing.css`.

### CSS File Structure

```css
/**
 * Outermost Social Sharing Block Styling
 * Die Papier WordPress Theme
 *
 * @package DiePapierTheme
 * @since 1.0.0
 */

/* === 1. Block Container === */
.outermost-social-sharing {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
}

/* === 2. Individual Share Button === */
.outermost-social-sharing__button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    font-family: var(--wp--preset--font-family--inter);
    font-size: 16px;
    color: var(--wp--preset--color--contrast);
    text-decoration: none;
}

.outermost-social-sharing__button:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
}

.outermost-social-sharing__button:active {
    transform: scale(0.98);
}

/* === 3. Icon Sizing === */
.outermost-social-sharing__icon {
    width: 24px; /* default */
    height: 24px;
}

.outermost-social-sharing__icon--small {
    width: 16px;
    height: 16px;
}

.outermost-social-sharing__icon--large {
    width: 36px;
    height: 36px;
}

/* === 4. Network-Specific Colors === */
.outermost-social-sharing__button--facebook {
    color: #1877F2; /* Facebook blue */
}

.outermost-social-sharing__button--facebook:hover {
    background-color: rgba(24, 119, 242, 0.1);
}

.outermost-social-sharing__button--whatsapp {
    color: #25D366; /* WhatsApp green */
}

.outermost-social-sharing__button--whatsapp:hover {
    background-color: rgba(37, 211, 102, 0.1);
}

.outermost-social-sharing__button--twitter {
    color: #000000; /* X black (was Twitter blue #1DA1F2) */
}

.outermost-social-sharing__button--twitter:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.outermost-social-sharing__button--email {
    color: var(--wp--preset--color--contrast-2);
}

.outermost-social-sharing__button--email:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.outermost-social-sharing__button--copy {
    color: var(--wp--preset--color--contrast-2);
}

.outermost-social-sharing__button--copy:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

/* Copy button success state (after copying) */
.outermost-social-sharing__button--copy.is-copied {
    color: #4CAF50; /* Green checkmark */
}

.outermost-social-sharing__button--copy.is-copied::after {
    content: ' ✓';
}

/* === 5. Labels (when showLabels: true) === */
.outermost-social-sharing__label {
    font-size: 16px;
    font-weight: 500;
}

/* === 6. Alignment === */
.outermost-social-sharing--align-left {
    justify-content: flex-start;
}

.outermost-social-sharing--align-center {
    justify-content: center;
}

.outermost-social-sharing--align-right {
    justify-content: flex-end;
}

/* === 7. Section Style: Dark Sections === */
.is-style-section-navy .outermost-social-sharing__button,
.is-style-section-image .outermost-social-sharing__button {
    color: #FFFFFF;
}

.is-style-section-navy .outermost-social-sharing__button:hover,
.is-style-section-image .outermost-social-sharing__button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.is-style-section-navy .outermost-social-sharing__label,
.is-style-section-image .outermost-social-sharing__label {
    color: #FFFFFF;
}

/* Preserve network brand colors in dark sections (for filled icon style) */
.is-style-section-navy .outermost-social-sharing__icon--facebook,
.is-style-section-image .outermost-social-sharing__icon--facebook {
    color: #1877F2;
}

.is-style-section-navy .outermost-social-sharing__icon--whatsapp,
.is-style-section-image .outermost-social-sharing__icon--whatsapp {
    color: #25D366;
}

/* === 8. Section Style: Red Section === */
.is-style-section-red .outermost-social-sharing__button {
    color: #FFFFFF;
}

.is-style-section-red .outermost-social-sharing__button:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.is-style-section-red .outermost-social-sharing__label {
    color: #FFFFFF;
}

/* === 9. Post Meta Top (Compact) === */
.post-meta-top .outermost-social-sharing {
    gap: 12px;
    margin-left: auto; /* Push to right side of meta row */
}

.post-meta-top .outermost-social-sharing__button {
    padding: 4px;
}

/* === 10. Post Meta Bottom (Full with Labels) === */
.post-meta-bottom .outermost-social-sharing {
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid var(--wp--preset--color--base-3);
}

.post-meta-bottom .outermost-social-sharing__button {
    padding: 8px 16px;
}

/* === 11. Mobile Responsive === */
@media (max-width: 768px) {
    .outermost-social-sharing {
        gap: 12px;
    }
    
    .outermost-social-sharing__button {
        padding: 6px 10px;
    }
    
    .outermost-social-sharing__label {
        font-size: 14px;
    }
    
    /* Stack labels below icons on mobile (if showLabels: true) */
    .post-meta-bottom .outermost-social-sharing {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
    
    .post-meta-bottom .outermost-social-sharing__button {
        width: 100%;
        justify-content: flex-start;
    }
}

/* === 12. Accessibility === */
.outermost-social-sharing__button:focus {
    outline: 2px solid var(--wp--preset--color--primary);
    outline-offset: 2px;
}

/* High contrast mode adjustments */
@media (prefers-contrast: high) {
    .outermost-social-sharing__button {
        border: 1px solid currentColor;
    }
}
```

### Enqueuing CSS

Add to `/inc/enqueue.php`:

```php
function diepapier_enqueue_scripts() {
    // ... existing enqueues ...
    
    // Outermost Social Sharing styling
    wp_enqueue_style(
        'diepapier-social-sharing',
        get_template_directory_uri() . '/assets/css/social-sharing.css',
        array(),
        wp_get_theme()->get( 'Version' )
    );
    
    // Social sharing Afrikaans translations (JavaScript)
    wp_enqueue_script(
        'diepapier-social-sharing-i18n',
        get_template_directory_uri() . '/assets/js/social-sharing-i18n.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'diepapier_enqueue_scripts' );
```

---

## Accessibility

### ARIA Labels

Each share button includes proper ARIA labels:

```html
<!-- Icons only (showLabels: false) -->
<a
    href="https://www.facebook.com/sharer/sharer.php?u={url}"
    class="outermost-social-sharing__button outermost-social-sharing__button--facebook"
    aria-label="Deel op Facebook"
    target="_blank"
    rel="noopener noreferrer"
>
    <svg class="outermost-social-sharing__icon" aria-hidden="true">...</svg>
</a>

<!-- Icons with labels (showLabels: true) -->
<a
    href="https://wa.me/?text={title}%20{url}"
    class="outermost-social-sharing__button outermost-social-sharing__button--whatsapp"
    aria-label="Deel op WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
>
    <svg class="outermost-social-sharing__icon" aria-hidden="true">...</svg>
    <span class="outermost-social-sharing__label">Stuur op WhatsApp</span>
</a>
```

**Key ARIA Attributes**:
- `aria-label` on link — Announces "Deel op Facebook" (even if label is hidden)
- `aria-hidden="true"` on icon — Icon is decorative, label provides context
- `target="_blank"` — Opens in new tab (required for share URLs)
- `rel="noopener noreferrer"` — Security best practice for external links

### Keyboard Navigation

- **Tab**: Navigate through share buttons
- **Enter**: Activate share link (opens share dialog or copies link)
- **Space**: Activate share link (same as Enter)
- **Focus indicator**: 2px red outline on focused button

### Screen Reader Support

- Screen reader announces: "Deel op Facebook, link" (when focused on Facebook button)
- Screen reader announces: "Stuur op WhatsApp, link" (when focused on WhatsApp button)
- Copy Link button announces: "Kopieer skakel, button" → "Skakel gekopieer" (after clicking)

### Copy Link Accessibility

The Copy Link button requires special accessibility handling:

```javascript
// Copy Link button click handler
copyButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const url = window.location.href;
    
    // Copy to clipboard
    navigator.clipboard.writeText(url).then(function() {
        // Update button text
        copyButton.querySelector('.outermost-social-sharing__label').textContent = 'Skakel gekopieer';
        
        // Add success class
        copyButton.classList.add('is-copied');
        
        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Skakel gekopieer na knipbord';
        document.body.appendChild(announcement);
        
        // Reset after 2 seconds
        setTimeout(function() {
            copyButton.querySelector('.outermost-social-sharing__label').textContent = 'Kopieer skakel';
            copyButton.classList.remove('is-copied');
            document.body.removeChild(announcement);
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy link:', err);
        alert('Kon nie skakel kopieer nie. Probeer asseblief weer.');
    });
});
```

**Accessibility Features**:
- `role="status"` announcement — Screen reader announces "Skakel gekopieer na knipbord"
- `aria-live="polite"` — Non-intrusive announcement (waits for screen reader to finish current task)
- Visual feedback — Button text changes to "Skakel gekopieer" with checkmark
- Error handling — Fallback alert if clipboard API fails

---

## Testing Checklist

### Share Functionality

- [ ] **Facebook Share**: Click Facebook button → Opens Facebook share dialog with correct URL
- [ ] **WhatsApp Share**: Click WhatsApp button → Opens WhatsApp with pre-filled message (title + URL)
- [ ] **X/Twitter Share**: Click X button → Opens X share dialog with correct URL and title
- [ ] **Email Share**: Click Email button → Opens email client with subject (title) and body (URL)
- [ ] **Copy Link**: Click Copy Link button → Copies URL to clipboard, shows "Skakel gekopieer" confirmation

### URL Accuracy

- [ ] Shared URL is correct on single posts (e.g., `https://diepapier.co.za/nuus/article-slug`)
- [ ] Shared URL is correct on pages (e.g., `https://diepapier.co.za/kontak`)
- [ ] Shared URL is correct on archives (e.g., `https://diepapier.co.za/category/sport`)
- [ ] Shared URL is correct on e-editions (e.g., `https://diepapier.co.za/e-uitgawes/die-papier-27-feb-2026`)
- [ ] Shared title is correct (article title, not site title)

### Afrikaans Translations

- [ ] Facebook label: "Deel op Facebook" (when showLabels: true)
- [ ] WhatsApp label: "Stuur op WhatsApp" (when showLabels: true)
- [ ] X label: "Deel op X" (when showLabels: true, NOT "Deel op Twitter")
- [ ] Email label: "Stuur per e-pos" (when showLabels: true)
- [ ] Copy Link label: "Kopieer skakel" (when showLabels: true)
- [ ] Copy Link success: "Skakel gekopieer" (after clicking)

### Icon Display

- [ ] Icons display correctly (not broken SVGs)
- [ ] Icon size is correct: 24px (default), 36px (large)
- [ ] Icon colors match network brands (Facebook blue, WhatsApp green, X black)
- [ ] Icons have hover state (background color change + scale transform)
- [ ] Icons are visible in dark sections (white icons on navy/image backgrounds)

### Section Style Compatibility

- [ ] Share buttons work in `is-style-section-white` (dark icons on white)
- [ ] Share buttons work in `is-style-section-muted` (dark icons on light grey)
- [ ] Share buttons work in `is-style-section-navy` (white icons on navy)
- [ ] Share buttons work in `is-style-section-red` (white icons on red)
- [ ] Share buttons work in `is-style-section-image` (white icons with shadow)

### Accessibility

- [ ] Tab through share buttons (focus indicator visible)
- [ ] Enter key activates share link
- [ ] Space key activates share link
- [ ] Screen reader announces network name (e.g., "Deel op Facebook, link")
- [ ] Copy Link button announces "Skakel gekopieer" after copying (screen reader)
- [ ] Focus returns to Copy Link button after copying (not lost to body)

### Mobile Responsive

- [ ] Share buttons stack vertically on mobile (<768px) when showLabels: true
- [ ] Icon size adjusts for mobile (smaller gap, smaller padding)
- [ ] Share buttons are tappable (minimum 44px tap target)
- [ ] WhatsApp share opens WhatsApp mobile app (not web interface)

### Performance

- [ ] Share buttons load quickly (no delay, no FOUC)
- [ ] No JavaScript errors in browser console
- [ ] Copy Link clipboard API works in all modern browsers (Chrome, Firefox, Safari, Edge)
- [ ] Copy Link fallback works in legacy browsers (show alert if clipboard API not supported)

---

## Related Files

**Patterns**:
- `/patterns/parts/part-post-meta-top.php` (compact icons-only sharing)
- `/patterns/parts/part-post-meta-bottom.php` (full sharing with labels)
- `/patterns/section/section-share.php` (standalone share section)

**Templates** (using post meta patterns):
- `/templates/single.html` (articles — top + bottom meta)
- `/templates/single-dp_event.html` (events — bottom meta)
- `/templates/single-dp_multimedia.html` (multimedia — bottom meta)
- `/templates/single-dp_obituary.html` (obituaries — bottom meta)
- `/templates/single-dp_competition.html` (competitions — bottom meta)

**Assets**:
- `/assets/css/social-sharing.css` (custom block styling)
- `/assets/js/social-sharing-i18n.js` (Afrikaans label translations)

**PHP Integration**:
- `/inc/enqueue.php` (enqueues CSS and JS)

**Audit Reports**:
- `/reports/audits/social-sharing-block-audit.md`

**Related Guidelines**:
- `/guidelines/SECTION-STYLES-CSS-TO-JSON.md` (social sharing in dark sections)
- `/guidelines/design-tokens/iconography.md` (icon size guidelines)

---

**End of Social Sharing Integration Guide**