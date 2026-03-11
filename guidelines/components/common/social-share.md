# Social Share

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/SocialShare.tsx`
**WordPress target**: Custom block or pattern — `/wordpress-export/plugins/die-papier-blocks/src/blocks/social-share/`

---

## 1. Purpose

A row of social sharing buttons for articles, events, obituaries, and multimedia. Generates share links for Facebook, X/Twitter, LinkedIn, WhatsApp, Email, and copy-to-clipboard. Each button is a circular icon that adopts the platform's brand colour on hover.

## 2. Visual Structure

```
┌─ Wrapper
│  ├─ Label: Share2 icon + "Deel hierdie artikel" (uppercase, text-xs, tracking-wider)
│  └─ Button row (flex, gap-2, horizontal or vertical variant)
│     ├─ Facebook (w-9 h-9, circle, hover:bg-[#1877F2])
│     ├─ X/Twitter (hover:bg-black)
│     ├─ LinkedIn (hover:bg-[#0A66C2])
│     ├─ WhatsApp (hover:bg-[#25D366])
│     ├─ E-pos (hover:bg-gray-700)
│     └─ Copy link (hover:bg-brand-navy dark:hover:bg-muted)
```

## 3. Props / Attributes

| Prop | Type | Default | WP Attribute |
|:-----|:-----|:--------|:-------------|
| `url` | `string?` | `window.location.href` | Auto from post URL |
| `title` | `string` | — (required) | Post title |
| `description` | `string?` | `""` | Post excerpt |
| `variant` | `'horizontal' \| 'vertical'` | `'horizontal'` | Block setting |
| `className` | `string` | `""` | Additional classes |

## 4. Data Sources

No external data — generates share URLs from props.

## 5. Design Tokens

| Element | Light | Dark |
|:--------|:------|:-----|
| Button border | `border-gray-200` | `border-border` |
| Button text | `text-gray-500` | `text-gray-400` |
| Label text | `text-gray-500` | `text-gray-400` |
| Copy hover bg | `bg-brand-navy` | `bg-muted` |

## 6–8. Standard — no section style, works at any size.

## 9. Dark Mode

Borders → `border-border`, text → `text-gray-400`, copy hover → `bg-muted`.

## 10. Accessibility

- Each button has `title="Deel op [Platform]"` and `aria-label`
- Copy button triggers toast feedback ("Skakel gekopieer!")
- WhatsApp uses `wa.me` URL scheme

## 11. WordPress Mapping

### Construct Type
Custom block (`dp/social-share`) or use `core/social-links` with custom styling + JS for copy-to-clipboard.

## 12. Dependencies

- **Consumed by**: `Article.tsx`, `ObituarySingle.tsx`, `EventSingle.tsx`, `MultimediaSingle.tsx`
- **Utilities**: `copyToClipboard()` from `/src/app/utils/clipboard.ts`, `toast` from `sonner`

## 13. Known Exemptions

- **Social brand hex values** — `#1877F2` (Facebook), `#0A66C2` (LinkedIn), `#25D366` (WhatsApp) are 3rd-party brand requirements per exemption list.
