# rooi rose — Canonical Design System Guide

> **Version**: 3.0 — 2026-03-12 (rooi rose Redesign: Playfair Display SC + Karla, new Red #e01e12)
> **Last updated**: 2026-03-12
> **Scope**: Every design token used across the React prototype and WordPress block theme.
> **Rule**: This file is the single source of truth. If a value here conflicts with `theme.css` or `theme.json`, fix the implementation — not this document.
> **Source**: rooi rose Magazine Redesign (Phases 0-5 complete)
> **Cross-reference**: For WordPress preset mechanics (CSS variable naming, slug rules, JSON syntax), see `/guidelines/wordpress-migration/presets-and-tokens.md`.

---

## Table of Contents

1. [Typography](#1-typography) (32 tokens)
2. [Brand Colours](#2-brand-colours) (8 tokens)
3. [UI / Semantic Colours](#3-ui--semantic-colours) (16 tokens)
4. [Dark Mode Colours](#4-dark-mode-colours) (24 tokens)
5. [Spacing](#5-spacing) (8 tokens)
6. [Container & Layout](#6-container--layout) (8 tokens)
7. [Shadows](#7-shadows) (6 tokens)
8. [Borders & Radii](#8-borders--radii) (8 tokens)
9. [Z-Index](#9-z-index) (5 tokens)
10. [Transitions & Easing](#10-transitions--easing) (8 tokens)
11. [Aspect Ratios](#11-aspect-ratios) (4 tokens)
12. [Glass-morphism & Effects](#12-glass-morphism--effects) (6 tokens)
13. [WordPress theme.json Mapping](#13-wordpress-themejson-mapping) (24+ presets)

**Total: 145+ tokens**

---

## 1. Typography

> **Extended reference**: See `/guidelines/design-tokens/typography.md` for the complete typography guide including kerning, tracking, leading, spacing, variable font axes, WCAG compliance, and best practices.
> **Audit report**: See `/reports/typography-accessibility-audit-report.md` for detailed findings.

### 1.1 Font Families (2 tokens)

| Token | CSS Variable | Value | Usage |
|:---|:---|:---|:---|
| `heading` | `--font-heading` | `'Playfair Display SC', serif` | H1–H4, brand display headings |
| `body` | `--font-inter` | `'Karla', sans-serif` | H5–H6, body text, paragraphs, lists, metadata, UI elements |

> **Deprecated**: `--font-raleway` resolves to `--font-heading` for backward compatibility only. Never use `Raleway` in new code.

### 1.2 Font Weights (4 tokens)

| Token | Numeric | Font | Usage |
|:---|:---|:---|:---|
| `regular` | `400` | Playfair Display SC | H1–H4 headings |
| `regular` | `400` | Karla | P1–P5 body text |
| `bold` | `700` | Karla | H5 |
| `semibold` | `600` | Karla | H6 |

> **Deprecated weight**: `500 (Medium)` for Playfair Display SC was a V1 token. V2 uses `400` for all Playfair Display SC headings.

### 1.3 Variable Font Axes — Playfair Display SC (4 tokens)

| Level | `font-variation-settings` | CSS Token |
|:---|:---|:---|
| H1 | `'GRAD' -50, 'wdth' 64, 'opsz' 48` (mobile: `opsz` 36) | `--fvs-h1` |
| H2 | `'GRAD' -50, 'wdth' 64, 'opsz' 30` (mobile: `opsz` 28) | `--fvs-h2` |
| H3 | `'GRAD' -50, 'wdth' 64, 'opsz' 24` | `--fvs-h3` |
| H4 | `'GRAD' 0, 'wdth' 64, 'opsz' 20` | `--fvs-h4` |

> `GRAD -50` produces a slightly thinner stroke weight for optical precision at large sizes.
> `wdth 64` is a condensed width setting applied uniformly to all levels.

### 1.4 Desktop Type Scale (11 tokens)

| Level | Font | Weight | Size | Line Height | Letter Spacing | CSS Size Token | CSS LH Token |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **H1** | Playfair Display SC | 400 | 48px | 48px | -0.24px | `--text-h1` | `--lh-h1` |
| **H2** | Playfair Display SC | 400 | 30px | 32px | -0.24px | `--text-h2` | `--lh-h2` |
| **H3** | Playfair Display SC | 400 | 24px | 28px | -0.24px | `--text-h3` | `--lh-h3` |
| **H4** | Playfair Display SC | 400 | 20px | 28px | -0.24px | `--text-h4` | `--lh-h4` |
| **H5** | Karla | 700 | 18px | 24px | -0.09px | `--text-h5` | `--lh-h5` |
| **H6** | Karla | 600 | 16px | 24px | 0.8px | `--text-h6` | `--lh-h6` |
| **P1** | Karla | 400 | 18px | 26px | — | `--text-p1` | `--lh-p1` |
| **P2** | Karla | 400 | 16px | 24px | — | `--text-p2` | `--lh-p2` |
| **P3** | Karla | 400 | 14px | 22px | — | `--text-p3` | `--lh-p3` |
| **P4** | Karla | 400 | 12px | 18px | — | `--text-p4` | `--lh-p4` |
| **Small** | Karla | 400 | 11px | 16px | — | `--text-small` | `--lh-small` |

### 1.5 Mobile Type Scale (differences from desktop)

| Level | Mobile Size | Mobile Line Height | Mobile `opsz` |
|:---|:---|:---|:---|
| H1 | 36px | 36px | 36 |
| H2 | 28px | 30px | 28 |
| H3 | 24px | 28px | 24 (same) |
| H4 | 20px | 28px | 20 (same) |
| H5–P5 | (same as desktop) | (same as desktop) | — |

### 1.6 Fluid Scale (CSS clamp formulas)

| Token | Formula | Mobile → Desktop |
|:---|:---|:---|
| `--text-h1` | `clamp(2.25rem, 1.92rem + 1.35vw, 3rem)` | 36px → 48px |
| `--lh-h1` | `clamp(2.25rem, 1.92rem + 1.35vw, 3rem)` | 36px → 48px |
| `--text-h2` | `clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)` | 28px → 30px |
| `--lh-h2` | `clamp(1.875rem, 1.81rem + 0.22vw, 2rem)` | 30px → 32px |

### 1.7 Heading Rules

| Rule | Value |
|:---|:---|
| H1–H4 font | `Playfair Display SC` — always via `var(--font-heading)` |
| H5–H6 font | `Karla` |
| Heading case | **Sentence case** everywhere (never Title Case for Afrikaans) |
| H6 exception | `text-transform: uppercase` (the only uppercase heading) |
| Brand name | `<em>Die Papier</em>` — always italicised in running body text |

### 1.8 Tracking & Leading Summary

| Property | CSS Property | Key Tokens | Notes |
|:---|:---|:---|:---|
| **Tracking (letter-spacing)** | `letter-spacing` | `--ls-h1` to `--ls-h6` | Negative for H1-H4 (display tightening). Positive for H6 (uppercase). Zero for body text. |
| **Leading (line-height)** | `line-height` | `--lh-h1` to `--lh-small` | H1 uses 1:1 ratio (tight). Body text targets 1.5x ratio (WCAG AAA). |
| **Kerning** | `font-kerning` | N/A (browser default `auto`) | Handled by font tables. Do NOT disable. |
| **Font grade** | `font-variation-settings: 'GRAD'` | `--fvs-h1` to `--fvs-h4` | `-50` for H1-H3 (thinner strokes), `0` for H4. |
| **Font width** | `font-variation-settings: 'wdth'` | `--fvs-h1` to `--fvs-h4` | `64` (condensed) for all serif headings. |
| **Optical sizing** | `font-variation-settings: 'opsz'` | `--fvs-h1` to `--fvs-h4` | Matched to desktop font-size. See typography.md for fluid sizing note. |

### 1.9 Accessibility Audit Findings (2026-02-23)

| ID | Severity | Finding | Recommendation | Status |
|:---|:---|:---|:---|:---|
| TYP-001 | P0 | Red `#E82C27` on white = 4.35:1 (< 4.5 AA) | Created `--text-link-red: #C41F20` light / `#F06560` dark | ✅ DONE |
| TYP-004 | P1 | `-0.24px` tracking on condensed H3/H4 = "triple squeeze" | Removed: `--ls-h3: 0; --ls-h4: 0;` | ✅ DONE |
| TYP-008 | P1 | H1 line-height 1:1 = descender collision risk | Increased to ~1.1x: `clamp(2.5rem, ..., 3.25rem)` | ✅ DONE |
| TYP-009 | P1 | H2 line-height 1.07x = tight for multi-line | Increased to ~1.15x: `clamp(2rem, ..., 2.1875rem)` | ✅ DONE |
| TYP-010 | P2 | P1 line-height 1.44x < AAA 1.5x target | Increased to 27px (1.50x) | ✅ DONE |
| TYP-012 | P1 | H3 `GRAD -50` reduces perceived contrast at 24px | Changed to `GRAD 0` like H4 | ✅ DONE |
| TYP-002 | P1 | Muted `#717182` on `#F0F0F0` = 4.22:1 | Darkened to `#636375` (~5.0:1) | ✅ DONE |
| TYP-003 | P1 | Dark muted `#8896A4` on `#162233` = 4.36:1 | Lightened to `#95A3B1` (~4.8:1) | ✅ DONE |
| TYP-017 | P1 | Dark red `#E82C27` on `#162233` = 3.45:1 | Created dark `--text-link-red: #F06560` | ✅ DONE |

> **All 20 tasks complete** — see `/tasks/task-list.md` and `/reports/typography-accessibility-audit-report.md`

---

## 2. Brand Colours

| Token | Slug | Hex | Dark Mode Hex | Usage |
|:---|:---|:---|:---|:---|
| `rooi rose Red` | `primary` | `#E01E12` | `#FF4D42` | CTAs, links, badges, accents |
| `rooi rose Red (Darker)` | `primary-alt` | `#B51410` | `#FF6961` | Hover/pressed state for red |
| `Tagline Grey` | `tagline-grey` | `#424242` | `#B0B0B0` | Metadata, captions, dates |
| `Navy (Background)` | `navy` | `#142135` | `#0A1018` | Dark mode backgrounds |
| `Navy Light` | `navy-light` | `#1E3044` | `#162233` | Dark mode cards |
| `White` | `base` | `#FFFFFF` | `#0F1923` | Page background |
| `Muted Grey` | `muted` | `#F5F5F5` | `#162233` | Card backgrounds, alternate sections |
| `Border Base` | `border` | `#E0E0E0` | `#1E3044` | Borders, dividers |

> **Rebranding Note (2026-03-12)**: All brand colors updated for rooi rose magazine redesign. Primary red changed from Die Papier navy/red (#172134/#E82C27) to rooi rose lifestyle red (#E01E12) with tagline grey (#424242) for metadata.

> **Color Accessibility**: All colors maintain WCAG AA contrast (4.5:1) on their respective backgrounds. The primary red (#E01E12) is used sparingly for accents; body text uses high-contrast black/white.

> **Deprecated**: `#D70025` and `#E82C27` were the V1/V2 brand reds. They must NOT appear anywhere in the codebase.

---

## 3. UI / Semantic Colours

These map brand colours to ShadCN component tokens.

| Token | CSS Variable | Light | Dark | Usage |
|:---|:---|:---|:---|:---|
| `background` | `--background` | `#FFFFFF` | `#0F1923` | Page bg |
| `foreground` | `--foreground` | `#2c2c2c` | `#E8E8ED` | Default text |
| `card` | `--card` | `#FFFFFF` | `#162233` | Card bg |
| `card-foreground` | `--card-foreground` | `#2c2c2c` | `#E8E8ED` | Card text |
| `popover` | `--popover` | `#FFFFFF` | `#162233` | Popover bg |
| `popover-foreground` | `--popover-foreground` | `#2c2c2c` | `#E8E8ED` | Popover text |
| `primary` | `--primary` | `#E82C27` | `#E82C27` | Primary actions (maps to brand-red) |
| `primary-foreground` | `--primary-foreground` | `#FFFFFF` | `#FFFFFF` | Text on primary |
| `secondary` | `--secondary` | `#F0F0F0` | `#1E3044` | Secondary bg (maps to base-2) |
| `secondary-foreground` | `--secondary-foreground` | `#1A3A5F` | `#B0C8DC` | Text on secondary |
| `muted` | `--muted` | `#F0F0F0` | `#1E3044` | Muted bg |
| `muted-foreground` | `--muted-foreground` | `#636375` | `#95A3B1` | Muted text (TYP-002/003 fix) |
| `destructive` | `--destructive` | `#d4183d` | `#E82C27` | Error states |
| `border` | `--border` | `#DDDDDD` | `#1E3044` | Default border |
| `input` | `--input` | `#DDDDDD` | `#253D54` | Input borders |
| `ring` | `--ring` | `#E82C27` | `#E82C27` | Focus rings |
| `placeholder` | `--placeholder` | _(not set — browser default)_ | `#5A6B7D` | Dark mode placeholder text for inputs. Intentionally darker than `--muted-foreground` to distinguish placeholder from typed content. Only defined in `.dark`. |
| `focus-ring` | `--color-focus-ring` | `#E82C27` _(inherits `--ring`)_ | `#F06560` | Accessible focus ring indicator. Dark mode uses lighter red for 3:1+ contrast on dark surfaces. |
| `text-link-red` | `--text-link-red` | `#C41F20` | `#F06560` | Accessible text link colour (TYP-001/017). 4.5:1+ contrast on respective backgrounds. |

---

## 4. Dark Mode Colours

### 4.1 Hardcoded Overrides (Tailwind classes)

#### Backgrounds

| Light Class | Dark Override |
|:---|:---|
| `bg-white` | `dark:bg-[#0F1923]` |
| `bg-gray-50` | `dark:bg-[#0D1520]` |
| `bg-gray-100` | `dark:bg-[#162233]` |
| `bg-[#F0F0F0]` | `dark:bg-[#1E3044]` |
| `bg-[#172134]` | `dark:bg-[#0A1018]` |
| `bg-[#E82C27]` | `dark:bg-[#E82C27]` |
| `bg-[#1A3A5F]` | `dark:bg-[#253D54]` |

#### Text

| Light Class | Dark Override |
|:---|:---|
| `text-[#172134]` | `dark:text-[#E8E8ED]` |
| `text-[#2c2c2c]` | `dark:text-[#E8E8ED]` |
| `text-[#1A3A5F]` | `dark:text-[#8EADC8]` |
| `text-[#E82C27]` | `dark:text-[#E82C27]` |
| `text-gray-600` | `dark:text-gray-400` |
| `text-gray-500` | `dark:text-gray-400` |
| `text-gray-700` | `dark:text-gray-300` |
| `text-gray-800` | `dark:text-gray-200` |
| `text-gray-900` | `dark:text-gray-100` |
| `text-black` | `dark:text-white` |

#### Borders

| Light Class | Dark Override |
|:---|:---|
| `border-gray-200` | `dark:border-[#1E3044]` |
| `border-gray-100` | `dark:border-[#162233]` |
| `border-gray-300` | `dark:border-[#253D54]` |

#### Hover States

| Light Class | Dark Override |
|:---|:---|
| `hover:bg-gray-100` | `dark:hover:bg-[#1E3044]` |
| `hover:bg-gray-50` | `dark:hover:bg-[#162233]` |
| `hover:bg-[#C41F20]` | `dark:hover:bg-[#C41F20]` |
| `hover:text-[#E82C27]` | `dark:hover:text-[#E82C27]` |

### 4.2 Dark Mode Strategy

| Setting | Value |
|:---|:---|
| Toggle mechanism | CSS class `.dark` on `<html>` |
| Persistence | `localStorage` key `dp-theme` |
| Default | `"system"` (respects `prefers-color-scheme`) |
| Tailwind variant | `@custom-variant dark (&:is(.dark *));` |

---

## 5. Spacing

### 5.1 CSS Custom Properties (8 tokens)

| Token | CSS Variable | Value | Usage |
|:---|:---|:---|:---|
| `space-10` | `--space-10` | `0.25rem` (4px) | Tight gaps |
| `space-20` | `--space-20` | `0.5rem` (8px) | Small padding |
| `space-30` | `--space-30` | `0.75rem` (12px) | — |
| `space-40` | `--space-40` | `1rem` (16px) | Standard padding |
| `space-50` | `--space-50` | `1.25rem` (20px) | — |
| `space-60` | `--space-60` | `1.5rem` (24px) | Medium separation |
| `space-80` | `--space-80` | `2rem` (32px) | Section separation, post-breadcrumbs `pt-8` |
| `space-100` | `--space-100` | `2.5rem` (40px) | Large section separation |

### 5.2 Section Spacing (Tailwind)

| Context | Classes | Value |
|:---|:---|:---|
| After breadcrumbs | `pt-8` | 32px |
| Between major sections | `py-12 md:py-16` | 48px / 64px |
| Card / element gaps | `gap-6` or `gap-6 md:gap-8` | 24px / 32px |
| Inside cards | `p-5` or `p-6` | 20px / 24px |
| Element spacing | `mb-4` / `space-y-4` | 16px |

### 5.3 No Margin Policy

> **STRICT**: All spacing between components MUST use `gap` (flex/grid) or `padding`. External `margin` on component root elements is **forbidden**.

---

## 6. Container & Layout

### 6.1 Container Tokens (4 tokens)

| Token | Value | Usage |
|:---|:---|:---|
| `container-standard` | `w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)]` | All page content |
| `container-wide` | `w-full mx-auto max-w-[1440px] px-4` | Hero sections, e-edition viewer |
| `container-narrow` | `max-w-3xl mx-auto` | Long-form reading (articles, policies) |
| `container-full` | `w-full` | Full-bleed backgrounds (inner uses standard) |

### 6.2 Grid System (4 tokens)

| Token | Value | Usage |
|:---|:---|:---|
| `grid-articles` | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8` | Category archives |
| `grid-12` | `grid-cols-12` | Category/search with sidebar |
| `sidebar-width` | `w-[300px]` or `w-[320px]` | Sidebar fixed width |
| `sidebar-layout` | `flex flex-col lg:flex-row gap-8` | Content + sidebar |

### 6.3 Breakpoints

| Breakpoint | Width | Purpose |
|:---|:---|:---|
| `sm` | `640px` | Mobile landscape |
| `md` | `768px` | Tablet portrait |
| `lg` | `1024px` | Desktop nav breakpoint |
| `xl` | `1280px` | Large desktop |
| `2xl` | `1536px` | Large screens |

---

## 7. Shadows

### 7.1 Tailwind Shadow Scale (4 tokens)

| Token | Tailwind | CSS Value | Usage |
|:---|:---|:---|:---|
| `shadow-sm` | `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Buttons, inputs |
| `shadow-md` | `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Hover states, dropdowns |
| `shadow-lg` | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Modals, sticky headers |
| `shadow-xl` | `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1)` | Hero overlays |

### 7.2 Dark Mode Shadows (7 tokens)

Standard light-mode shadows are invisible on dark backgrounds. The `.dark` selector in `theme-dark.css` defines 7 stronger shadow tokens and bridges them to WordPress presets.

| Token | CSS Variable | CSS Value | Usage |
|:---|:---|:---|:---|
| `dark-100` | `--shadow-dark-100` | `0 1px 2px rgba(0,0,0,0.5)` | Cards, panels |
| `dark-200` | `--shadow-dark-200` | `0 1px 4px rgba(0,0,0,0.3)` | Interactive cards |
| `dark-300` | `--shadow-dark-300` | `0 4px 12px rgba(0,0,0,0.4)` | Card hover, dropdowns |
| `dark-400` | `--shadow-dark-400` | `0 10px 15px rgba(0,0,0,0.5)` | Modals, overlays |
| `dark-500` | `--shadow-dark-500` | `0 8px 24px rgba(0,0,0,0.5)` | Search overlay |
| `dark-600` | `--shadow-dark-600` | `0 10px 30px rgba(0,0,0,0.4)` | Newsletter container |
| `dark-up` | `--shadow-dark-up` | `0 -4px 20px rgba(0,0,0,0.4)` | Cookie banner, bottom sheets |

> **WP Preset Bridge**: In `.dark`, `--wp--preset--shadow--{100-600}` maps to `var(--shadow-dark-{100-600})` automatically. See `/guidelines/design-tokens/shadows.md` for full details.

### 7.3 WordPress theme.json Shadows

| WP Slug | CSS Value |
|:---|:---|
| `small` | `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)` |
| `medium` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` |
| `large` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` |
| `xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` |

---

## 8. Borders & Radii

### 8.1 Border Radius (5 tokens)

| Token | CSS Variable | Value | Usage |
|:---|:---|:---|:---|
| `radius-sm` | `--radius-sm` | `calc(0.5rem - 4px)` = `4px` | Small elements |
| `radius-md` | `--radius-md` | `calc(0.5rem - 2px)` = `6px` | Inputs |
| `radius-lg` | `--radius` | `0.5rem` = `8px` | Cards, buttons (default) |
| `radius-xl` | `--radius-xl` | `calc(0.5rem + 4px)` = `12px` | Large cards, heroes |
| `radius-full` | — | `9999px` | Badges, avatars, pills |

### 8.2 Border Widths (3 tokens)

| Token | Value | Usage |
|:---|:---|:---|
| `border-default` | `1px` | Cards, inputs, dividers |
| `border-thick` | `2px` | Active states, emphasis, button outlines |
| `border-accent` | `4px` | Blockquote left border (brand red) |

---

## 9. Z-Index

| Token | Tailwind | Value | Usage |
|:---|:---|:---|:---|
| `z-background` | `-z-10` | Background patterns/decorations |
| `z-base` | `z-0` | Default content |
| `z-elevated` | `z-10` | Cards with hover, relative context |
| `z-sticky` | `z-20` | Sticky sidebars, TOCs |
| `z-header` | `z-40` | Site header |
| `z-overlay` | `z-50` | Modals, mobile menu, tooltips, toasts |

---

## 10. Transitions & Easing

### 10.1 Duration Tokens (4 tokens)

| Token | Duration | Usage |
|:---|:---|:---|
| `duration-micro` | `200ms` | Colour changes, border changes, opacity |
| `duration-standard` | `300ms` | Small scaling, slide-ins, dropdowns |
| `duration-emphasis` | `500ms` | Large hero image zooms, complex shifts |
| `duration-cinematic` | `700ms+` | Full-screen hero effects |

### 10.2 Easing Tokens (3 tokens)

| Token | Value | Usage |
|:---|:---|:---|
| `ease-default` | `ease-in-out` | Most UI interactions |
| `ease-enter` | `ease-out` | Modals/drawers entering |
| `ease-exit` | `ease-in` | Modals/drawers leaving |

### 10.3 Common Transition Classes

| Pattern | Tailwind Classes |
|:---|:---|
| Colour change | `transition-colors duration-200` |
| Card hover | `transition-shadow duration-300` or `transition-all duration-300` |
| Image zoom | `transition-transform duration-500` with `group-hover:scale-105` |
| Shadow lift | `hover:shadow-lg transition-shadow duration-300` |

---

## 11. Aspect Ratios

| Token | Value | Usage |
|:---|:---|:---|
| `aspect-landscape` | `aspect-[16/10]` | Article cards, featured images |
| `aspect-video` | `aspect-video` (16/9) | Video embeds |
| `aspect-portrait` | `aspect-[3/4]` | E-editions, book covers |
| `aspect-square` | `aspect-square` (1/1) | Avatars, podcast thumbnails |

---

## 12. Glass-morphism & Effects

| Token | Value | Usage |
|:---|:---|:---|
| `glass-bg` | `bg-white/80 backdrop-blur-md` | Sticky header (if translucent) |
| `glass-dark` | `bg-[#172134]/90 backdrop-blur-md` | Dark overlays |
| `gradient-brand` | `linear-gradient(135deg, #172134, #1A3A5F)` | Newsletter CTA, hero overlays |
| `gradient-brand-red` | `linear-gradient(81.87deg, #CE0400 0.24%, #FF0600 18.33%, #E82C27 45.03%, #801917 71.74%, #420200 99.32%)` | Header masthead |
| `overlay-dark` | `bg-black/40` to `bg-black/60` | Image text overlays |
| `selection-dark` | `rgba(232, 44, 39, 0.3)` | Text selection in dark mode |

---

## 13. WordPress theme.json Mapping

### 13.1 Colour Palette Mapping

| React Token | WP Slug | WP Hex |
|:---|:---|:---|
| `--custom-primary` | `primary` | `#E82C27` |
| `--custom-primary-2` | `primary-hover` | `#C41F20` |
| `--brand-navy-light` | `accent` | `#1A3A5F` |
| `--brand-navy` | `accent-dark` | `#172134` |
| `--base` | `base` | `#FFFFFF` |
| `--base-2` | `base-2` | `#F0F0F0` |
| `--base-3` | `base-3` | `#DDDDDD` |
| `--contrast` | `contrast` | `#2c2c2c` |
| — | `contrast-2` | `#6b7280` |
| — | `success` | `#16a34a` |
| — | `warning` | `#f59e0b` |
| — | `info` | `#3b82f6` |

### 13.2 Typography Mapping

| React Font | WP Slug | WP Value |
|:---|:---|:---|
| `--font-inter` | `inter` | `"Inter", sans-serif` |
| `--font-heading` | `roboto-serif` | `"Roboto Serif", serif` |

> **Deprecated WP mapping**: `raleway` slug should be removed or aliased to `roboto-serif`. The font asset `raleway-variable.woff2` is no longer used.

### 13.3 Font Size Mapping (WP Fluid Sizes)

| Level | WP Slug | WP Size | WP fluid min/max |
|:---|:---|:---|:---|
| Small/P5 | `small` | `11px` | — |
| P4 | `x-small` | `12px` | — |
| P3 | `small-body` | `14px` | — |
| P2 | `medium` | `16px` | — |
| P1/H5 | `large` | `18px` | — |
| H4 | `x-large` | `20px` | — |
| H3 | `xx-large` | `24px` | — |
| H2 | `xxx-large` | `clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)` | 28px → 30px |
| H1 | `display` | `clamp(2.25rem, 1.92rem + 1.35vw, 3rem)` | 36px → 48px |

### 13.4 Spacing Mapping

| React Token | WP Slug | WP Value |
|:---|:---|:---|
| `--space-10` | `10` | `0.25rem` |
| `--space-20` | `20` | `0.5rem` |
| `--space-30` | `30` | `0.75rem` |
| `--space-40` | `40` | `1rem` |
| `--space-60` | `50` | `1.5rem` |
| `--space-80` | `60` | `2rem` |
| — | `70` | `3rem` |
| — | `80` | `4rem` |

### 13.5 Layout Mapping

| React Pattern | WP Setting | WP Value |
|:---|:---|:---|
| `max-w-[1440px]` | `settings.layout.wideSize` | `1440px` |
| Article width | `settings.layout.contentSize` | `900px` |

### 13.6 Shadow Mapping

| Tailwind | WP Slug |
|:---|:---|
| `shadow-sm` | `small` |
| `shadow-md` | `medium` |
| `shadow-lg` | `large` |
| `shadow-xl` | `xl` |

### 13.7 Block Style Variations (22 files)

All stored in `/wordpress-export/themes/die-papier-theme/styles/blocks/`:

| Block | Registered Styles |
|:------|:------------------|
| `core/button` | `default`, `outline`, `ghost` |
| `core/group` | `card`, `newsletter`, `section-muted` |
| `core/heading` | `display`, `section-title` |
| `core/image` | `circular`, `rounded`, `shadow` |
| `core/list` | `checkmarks`, `no-bullets`, `numbered-circle` |
| `core/paragraph` | `badge`, `lead` |
| `core/quote` | `border-left`, `large-serif` |
| `core/separator` | `brand-line` |
| `core/table` | `borderless` |
| `woocommerce/product-button` | `primary` |
| `woocommerce/product-image` | `rounded` |
| `woocommerce/product-price` | `accent` |

---

## Usage Rules

1. **Always use CSS variables** (`var(--custom-primary)`) or Tailwind semantic classes rather than hardcoded hex values.
2. **Every light colour** must have a corresponding `dark:` override.
3. **Container pattern** is non-negotiable: `w-full mx-auto max-w-[1440px] px-[clamp(1rem,4vw,2rem)]`.
4. **Sentence case** for all Afrikaans headings — no exceptions (H6 forced uppercase is the only exception).
5. **Brand name** "Die Papier" always italicised in body text with `<em>`.
6. **Never summarise** content from guideline files when inlining to data files.
7. **Never use `#D70025`** — the legacy V1 red is deprecated. Use `#E82C27` / `var(--custom-primary)`.
8. **Never use `Raleway`** — deprecated in V2. All heading styles use `Roboto Serif`.
9. **font-variation-settings** must be applied to all Roboto Serif elements with the correct `GRAD`, `wdth`, and `opsz` values for the heading level.
10. **No weight 500** for Roboto Serif — V2 uses weight `400` for all H1–H4.