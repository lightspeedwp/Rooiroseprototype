# Dev Language Switcher

**Last updated**: 2026-02-23
**Category**: Common (Dev-only)
**React source**: `/src/app/components/common/DevLanguageSwitcher.tsx`
**WordPress target**: Not applicable — development utility only

---

## 1. Purpose

A compact AF/EN language toggle for development/documentation pages. Switches between Afrikaans and English via `DevLanguageContext`. Not visible to end users — only used on the Foundations page.

## 2. Props

None — reads from `useDevLanguage()` context.

## 3. WordPress Mapping

Not needed in production. WordPress handles i18n via its own translation system (`.po`/`.mo` files).

## 4. Dependencies

- **Context**: `DevLanguageContext`
- **Consumed by**: `DesignFoundations.tsx`
