# Competitions Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Competitions.tsx`
**WordPress target**: Template — `archive-dp_competition.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Competition listing with filter tabs (Active / Closed / Winner Announced) and competition cards.

## 2. Data Sources

- `getActiveCompetitions()`, `getClosedCompetitions()` from `/src/app/data/competitions.ts`

## 3. WordPress Mapping

Template — `archive-dp_competition.html`. Filter via `dp/filter-bar` block.

## 4. Dependencies

SEO, PageContainer, CompetitionStatusBadge, ImageWithFallback
