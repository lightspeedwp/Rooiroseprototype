# Legal Pages — WordPress Content Update Tasks

**Generated**: 2026-03-03  
**Last updated**: 2026-03-03  
**Source report**: `/reports/legal-pages-content-audit-2026-03-03.md`  
**Status legend**: `[ ]` = Todo | `[x]` = Done | `[~]` = In Progress | `[!]` = Blocked

---

## Context

The WordPress website legal pages were copied from the Figma prototype **before** the canonical source documents were provided and verified. The React app data files (`/src/app/data/policies/*.ts`) are confirmed 100% aligned with the canonical sources (`/src/imports/`). WordPress pages need to be updated to match.

**Recommended approach**: Copy the full content from each `/src/imports/` file into the corresponding WordPress page in the Block Editor. Strip Markdown formatting (headings `#`, bold `**`, bullet `·`) and apply WordPress block formatting instead.

---

## P0 — WordPress Page Updates (8 tasks)

### [ ] Task 1: Algemene Gebruikersreëls
- **WordPress URL**: `/beleide/terme-en-voorwaardes`
- **Copy from**: `/src/imports/algemene-gebruikersreels.md`
- **Verify after copy**:
  - [ ] 9 subsections present with correct headings
  - [ ] Email in moderation section: `lesers@diepaper.co.za`
  - [ ] Closing section: "Dankie dat jy deel is van die gemeenskap"

### [ ] Task 2: Privaatheidsbeleid
- **WordPress URL**: `/beleide/privaatheidsbeleid`
- **Copy from**: `/src/imports/privaatheidsbeleid.md`
- **Verify after copy**:
  - [ ] 3 overview sections + 11 numbered sections
  - [ ] Section 6 POPIA email: `privaatheid@diepapier.co.za`
  - [ ] Section 9 complaint: P.O Box 31533, `complaints.IR@justice.gov.za`
  - [ ] Section 11 contact: `lesers@diepapier.co.za`, `diepapierintekening@onthedot.co.za`

### [ ] Task 3: Koekiebeleid
- **WordPress URL**: `/beleide/koekiebeleid`
- **Copy from**: `/src/imports/cookie-policy.md`
- **Verify after copy**:
  - [ ] Last updated date: "8 Februarie 2026"
  - [ ] Preamble with 5 compliance bullet points
  - [ ] 6 data purposes (1.1–1.6)
  - [ ] Section 9 complaint: `complaints.IR@justice.gov.za`
  - [ ] Section 11 contact: `diepapierintekening@novusmedia.co.za`, `mediaombud@novusmedia.co.za`

### [ ] Task 4: PAIA Handleiding
- **WordPress URL**: `/beleide/paia`
- **Copy from**: `/src/imports/paia-handleiding.txt`
- **Verify after copy**:
  - [ ] Artikel 51 reference in intro
  - [ ] PDF download button/link present
  - [ ] POPIA compliance section with 5 rights
  - [ ] Information Officer email: `paia@diepapier.co.za`

### [ ] Task 5: KI (AI) Riglyne
- **WordPress URL**: `/beleide/ki-beleid`
- **Copy from**: `/src/imports/novus-media-ai-policy.md`
- **Verify after copy**:
  - [ ] 6 main sections present
  - [ ] "Ons Belofte" closing section
  - [ ] Cross-reference to Perskode and Persraad

### [ ] Task 6: Advertensie-riglyne
- **WordPress URL**: `/beleide/advertensie-riglyne`
- **Copy from**: `/src/imports/novus-media-ad-guidelines.md`
- **Verify after copy**:
  - [ ] 5 main sections with correct subsections
  - [ ] Contact phone: `+27 51 404 7600`
  - [ ] Closing line present

### [ ] Task 7: Perskode
- **WordPress URL**: `/beleide/perskode`
- **Copy from**: `/src/imports/pers-kode.md`
- **Verify after copy**:
  - [ ] Ombud: "George Claassen by mediaombud@novusmedia.co.za"
  - [ ] 10 principle sections
  - [ ] Membership statement
  - [ ] Learn More section (2 items)

### [ ] Task 8: Kommentaarbeleid
- **WordPress URL**: `/beleide/kommentaarbeleid`
- **Copy from**: `/src/imports/comment-policy.md`
- **Verify after copy**:
  - [ ] 5 guideline sections
  - [ ] Moderering en Handhawing (intro + 2 items)
  - [ ] 3 Wenke vir Konstruktiewe Kommentaar
  - [ ] Reporting section present

---

## P2 — Post-Update Verification

### [ ] Task 9: Cross-page link check
- Verify all internal cross-references between legal pages work (e.g., Perskode references from AI Policy, Koekiebeleid reference from Cookie section)

### [ ] Task 10: Mobile rendering check
- Verify all 8 pages render correctly on mobile (long legal text often breaks on small screens)

---

**End of Task List**
