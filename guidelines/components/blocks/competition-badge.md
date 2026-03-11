# Block: dp/competition-badge

**Last updated**: 2026-02-23
**Category**: Block
**Block name**: `dp/competition-badge`
**Title**: Kompetisie Kenteken
**Source**: `/wordpress-export/plugins/die-papier-blocks/src/blocks/competition-badge/`
**React equivalent**: `CompetitionStatusBadge.tsx`

---

## 1. Purpose

Renders a status badge for competitions: "Oop", "Sluit binnekort", or "Gesluit". Colour-coded (green/amber/red).

## 2. Attributes

| Attribute | Type | Default | Notes |
|:----------|:-----|:--------|:------|
| `competitionId` | `number` | `0` | Falls back to `postId` from context |

## 3. Context

- Uses: `postId`, `postType`

## 4. Supports

- HTML: `false`
- Anchor: `true`

## 5. Files

- `block.json`, `edit.js`, `index.js`, `render.php`, `style.scss`
- No `view.js` — server-rendered only

## 6. Used In Templates

- `single-dp_competition.html`
