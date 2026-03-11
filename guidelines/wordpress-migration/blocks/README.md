# Custom Block Migration Specs

**Last updated**: 2026-03-03

This directory contains migration specifications for **custom `dp/*` blocks** — blocks that need to be developed as WordPress plugins (not patterns or core blocks).

**This is NOT the same as** `/guidelines/components/blocks/` which documents React component equivalents and block usage patterns.

## Files

| File | Block | Status |
|------|-------|--------|
| `reading-time.md` | `dp/reading-time` | Active |
| `ui-components.md` | `dp/tabs`, `dp/modal`, `dp/toast` | Planned |
| `event-list.md` | `dp/event-list` | Deprecated (use AQL) |
| `sponsored-in-feed.md` | `dp/sponsored-in-feed` | Deprecated (use Advanced Ads) |

## Related

- `/guidelines/components/blocks/` — Block usage guidelines (React + WordPress)
- `/guidelines/wordpress-migration/block-plugin-strategy.md` — Custom block plugin architecture
- `/guidelines/components/blocks/wordpress-blocks.md` — Active/deprecated block inventory
