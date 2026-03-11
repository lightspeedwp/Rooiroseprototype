# Competition Status Badge

**Last updated**: 2026-02-23
**Category**: Common
**React source**: `/src/app/components/common/CompetitionStatusBadge.tsx`
**WordPress target**: Custom block or pattern helper — `/wordpress-export/plugins/die-papier-blocks/src/blocks/competition-badge/`

---

## 1. Purpose

A status badge for competitions showing one of three states: `active` (green, pulsing dot, "Oop vir Inskrywings"), `closed` (gray, XCircle icon, "Gesluit"), or `winner-announced` (amber, Trophy icon, "Wenner Aangekondig"). Supports `sm` (listing cards) and `lg` (single page hero) sizes.

## 2. Props

| Prop | Type | Default |
|:-----|:-----|:--------|
| `status` | `'active' \| 'closed' \| 'winner-announced'` | — (required) |
| `size` | `'sm' \| 'lg'` | `'sm'` |
| `className` | `string` | `""` |

## 3. Status Configurations

| Status | Label (lg) | Label (sm) | Bg | Icon |
|:-------|:-----------|:-----------|:---|:-----|
| `active` | "Oop vir Inskrywings" | "Oop" | `bg-green-600` | Pulsing green dot |
| `closed` | "Gesluit" | "Gesluit" | `bg-gray-600` | XCircle |
| `winner-announced` | "Wenner Aangekondig" | "Wenner" | `bg-amber-500` | Trophy |

## 4. WordPress Mapping

Custom block (`dp/competition-badge`) or rendered via `render.php` in the competition card block, reading from the `dp_competition_status` post meta field.

## 5. Dependencies

- **Consumed by**: `CompetitionSingle.tsx`, `CompetitionsSection.tsx`, competition listing cards
