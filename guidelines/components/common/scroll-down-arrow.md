# Scroll Down Arrow

**Last updated**: 2026-02-23
**Category**: Common (Utility)
**React source**: `/src/app/components/common/ScrollDownArrow.tsx`
**WordPress target**: Not applicable — decorative UI element

---

## 1. Purpose

An animated bouncing chevron-down button that scrolls to a target element (`targetId`) or one viewport height down. Used on hero sections to hint at more content below.

## 2. Props

| Prop | Type | Default |
|:-----|:-----|:--------|
| `className` | `string?` | — |
| `targetId` | `string?` | — (scrolls by `window.innerHeight` if absent) |

## 3. Design

`animate-bounce`, `text-white/80 hover:text-white`, ChevronDown (32px). `aria-label="Scroll down"`.

## 4. Dependencies

- **Consumed by**: `Hero.tsx` (legacy, not currently active)
