# Event Single

**Last updated**: 2026-02-23
**Category**: Page
**React source**: `/src/app/pages/SingleEvent.tsx`
**WordPress target**: Template — `single-dp_event.html`
**Shell doc**: [CPT Singles](./cpt-singles.md)

---

## 1. Purpose

Single event detail page. Shows date, time, location, description, organiser info, and registration link.

## 2. Data Sources

- `EVENTS.find()` from `/src/app/data/events.ts`

## 3. WordPress Mapping

Template — `single-dp_event.html`. Event metadata from SCF fields.

## 4. Dependencies

SEO, PageContainer, SocialShare, ImageWithFallback
