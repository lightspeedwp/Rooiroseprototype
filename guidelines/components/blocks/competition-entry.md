# Block: dp/competition-entry

**Last updated**: 2026-03-01
**Version**: 2.0
**Template**: `/guidelines/_templates/block-guideline-template.md`
**Purpose**: Renders competition entry form (if open) or a "closed" message. Integrates with Gravity Forms for submission handling.

---

## React Implementation

- **Component path**: Entry form section in `/src/app/pages/CompetitionSingle.tsx`
- **Key props**: `formId`, `displayTitle`
- **Status**: `active`

### Props Table

| Prop | Type | Default | Required | Notes |
|---|---|---|---|---|
| `formId` | `number` | `0` | Yes | Gravity Forms ID for the entry form |
| `displayTitle` | `boolean` | `true` | No | Show "Skryf nou in" heading |

### Internal Logic

- `isSubmitting`: Loading state during form submission — handled by Gravity Forms AJAX in WP
- `answer`: Text input state — handled by Gravity Forms field
- Date check: competition open/closed based on `closing_date` field — moves to `render.php` PHP logic
- Already-entered check: cookie/user meta (future feature)

---

## WordPress Implementation

- **Block name**: `dp/competition-entry`
- **Title**: Kompetisie Inskrywing
- **Registration file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/competition-entry/block.json`
- **Render file**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/competition-entry/render.php`
- **Editor script**: `file:./index.js`
- **View script**: none — Gravity Forms handles client-side via its own scripts

### Attributes (block.json)

```json
{
  "name": "dp/competition-entry",
  "title": "Competition Entry Form",
  "category": "widgets",
  "icon": "clipboard",
  "attributes": {
    "formId": { "type": "number", "default": 0 },
    "displayTitle": { "type": "boolean", "default": true }
  },
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "spacing": { "margin": true }
  }
}
```

### Server-Side Logic (render.php)

- Reads `closing_date` from post meta (SCF field) to determine if competition is open
- If closed: renders "This competition is closed" alert and returns early
- If open: renders Gravity Form via `do_shortcode('[gravityform id="..." title="false" description="false" ajax="true"]')`
- Block wrapper: `bg-white dark:bg-card rounded-lg border-2 border-primary/20 p-6 mb-6`
- Anchor ID: `#inskrywing` for direct linking

### Editor Controls

- `SelectControl` — form picker (Gravity Forms list)
- `ToggleControl` — display title toggle

### Pattern Usage

- Used directly in `single-dp_competition.html` template

### Used In Templates

- `single-dp_competition.html`

---

## Design Tokens

| Element | Tailwind Classes |
|:--------|:------|
| Container | `bg-white dark:bg-card rounded-lg border-2 border-primary/20 p-6 mb-6` |
| Title heading | `text-xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading` with `font-variation-settings: 'GRAD' -50, 'wdth' 64, 'opsz' 30` |
| Title icon | Trophy icon (20px) inline with heading |
| Closed alert | Standard alert component |

---

## Tailwind → theme.json Mapping

| Tailwind Class | theme.json Equivalent |
|---|---|
| `border-primary/20` | `border.color: color-mix(in srgb, var(--wp--preset--color--primary) 20%, transparent)` |
| `rounded-lg` | `border.radius: 0.5rem` |
| `p-6` | `spacing.padding: var:preset\|spacing\|50` |

---

## Afrikaans Content Strings

- Title heading: `Skryf nou in`
- Closed message: `Hierdie kompetisie is gesluit.`
- Editor placeholder: `Kies 'n vorm uit die sybalk.`

---

## Related Files

- `/wordpress-export/plugins/die-papier-blocks/src/blocks/competition-entry/`
- `/wordpress-export/themes/die-papier-theme/templates/single-dp_competition.html`
- `/src/app/pages/CompetitionSingle.tsx`
- `/guidelines/wordpress-migration/third-party-plugins/gravity-forms.md`