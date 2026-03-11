# Competition Single

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/CompetitionSingle.tsx`
**WordPress target**: Template — `single-dp_competition.html`
**Shell doc**: [CPT Singles](./cpt-singles.md)

---

## 1. Purpose

Single competition detail page. Shows prize, rules, entry form, status badge, and closing date.

## 2. Data Sources

- `getCompetitionBySlug()` from `/src/app/data/competitions.ts`

## 3. WordPress Mapping

Template — `single-dp_competition.html`. Uses `dp/competition-badge`, `dp/competition-entry` custom blocks.

## 4. Dependencies

SEO, PageContainer, CompetitionStatusBadge, SocialShare, ImageWithFallback
