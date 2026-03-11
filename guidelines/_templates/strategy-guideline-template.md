# [Strategy Name]

**Last updated**: 2026-03-02
**Version**: 1.0
**Template**: `/guidelines/_templates/strategy-guideline-template.md`
**Purpose**: _[One sentence: what architectural or migration strategy this document defines.]_

---

## Current State

<!-- What exists now — source-of-truth files and known constraints. -->

- **Source files**: _[paths to current implementations]_
- **Known constraints**: _[e.g., "WordPress 6.9+ required", "theme.json v3 only"]_
- **Pain points**: _[what problems this strategy solves]_

---

## Target State

<!-- Desired architecture and operating model after strategy execution. -->

- **Architecture**: _[e.g., "All spacing via blockGap + padding, zero spacer blocks"]_
- **File structure**: _[expected file layout after migration]_
- **Success criteria**: _[measurable outcomes]_

---

## Decision Log

<!-- Record every decision made during strategy development. -->

| ID | Decision | Rationale | Source | Impact |
|---|---|---|---|---|
| D-001 | _[what was decided]_ | _[why]_ | _[batch/Q ref]_ | _[what changes]_ |

---

## Execution Plan

<!-- Phased implementation with dependencies. -->

### Phase 1: _[Name]_
- **Scope**: _[what's included]_
- **Dependencies**: None
- **Validation**: _[how to verify completion]_

### Phase 2: _[Name]_
- **Scope**: _[what's included]_
- **Dependencies**: Phase 1
- **Validation**: _[how to verify completion]_

---

## Open Risks

<!-- Unresolved uncertainties or external dependencies. -->

- _[e.g., "Plugin X may change API in next major version"]_

---

## Related Files

<!-- Absolute repo paths only. -->

- `/guidelines/...`
- `/wordpress-export/...`
- `/tasks/...`