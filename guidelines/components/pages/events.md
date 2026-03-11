# Events Archive

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/Events.tsx`
**WordPress target**: Template — `archive-dp_event.html`
**Shell doc**: [CPT Archives](./cpt-archives.md)

---

## 1. Purpose

Events listing with category filter tabs and event cards (date box + category + title + location).

## 2. Data Sources

- `EVENTS` from `/src/app/data/events.ts`

## 3. WordPress Mapping

Template — `archive-dp_event.html`. Uses `core/query` + `dp/filter-bar`.

## 4. Dependencies

SEO, PageContainer, PageFAQSection (EVENTS_FAQS), ImageWithFallback
