# Migration Scripts — Die Papier Theme

**Created**: 2026-03-02  
**Purpose**: Automated slug migration from legacy Tailwind-style to Ollie theme standard  
**Author**: Die Papier Theme Migration Team

---

## Overview

This directory contains automated migration scripts to update pattern files from legacy design token slugs to the Ollie theme standard. These scripts ensure consistency across all 62+ pattern files and reduce manual error.

---

## Available Scripts

### 1. `migrate-spacing-slugs.sh`

**Purpose**: Replace legacy spacing slugs with Ollie theme spacing slugs

**Affected Files**: 62 pattern files across all directories

**Mappings**:
| Legacy Slug | Ollie Slug | Usage |
|-------------|------------|-------|
| `spacing-xs` | `x-small` | Extra small spacing |
| `spacing-sm` | `small` | Small spacing |
| `spacing-md` | `medium` | Medium spacing |
| `spacing-lg` | `large` | Large spacing |
| `spacing-xl` | `x-large` | Extra large spacing |
| `spacing-2xl` | `xx-large` | 2X large spacing |
| `spacing-3xl` | `xxx-large` | 3X large spacing |

**Examples**:
```php
<!-- BEFORE -->
<div style="padding:var(--wp--preset--spacing--spacing-lg)">

<!-- AFTER -->
<div style="padding:var(--wp--preset--spacing--large)">
```

---

### 2. `migrate-font-size-slugs.sh`

**Purpose**: Replace legacy font-size slugs with Ollie theme font-size slugs

**Affected Files**: 58 pattern files across all directories

**Mappings**:
| Legacy Slug | Ollie Slug | Usage |
|-------------|------------|-------|
| `text-xs` | `x-small` | Extra small text |
| `text-sm` | `small` | Small text |
| `text-base` | `base` | Base/body text |
| `text-md` | `medium` | Medium text |
| `text-lg` | `large` | Large text |
| `text-xl` | `x-large` | Extra large text |
| `text-2xl` | `xx-large` | 2X large text |
| `text-3xl` | `xxx-large` | 3X large text |

**Examples**:
```php
<!-- BEFORE -->
<p class="has-text-sm-font-size">

<!-- AFTER -->
<p class="has-small-font-size">
```

---

## Usage

### Prerequisites

- **Bash shell** (macOS, Linux, WSL on Windows)
- **GNU sed** (may need to install `gnu-sed` on macOS via Homebrew)
- **Git** (recommended for version control)

### Basic Usage

#### 1. Dry Run (Preview Changes)

Always run with `--dry-run` first to preview changes:

```bash
cd scripts/

# Preview spacing slug changes
./migrate-spacing-slugs.sh --dry-run

# Preview font-size slug changes
./migrate-font-size-slugs.sh --dry-run
```

This will show you:
- Which files will be modified
- How many replacements will be made
- Old → New slug mappings for each file

#### 2. Execute Migration

Once you've verified the dry run output looks correct:

```bash
# Run spacing slug migration
./migrate-spacing-slugs.sh

# Run font-size slug migration
./migrate-font-size-slugs.sh
```

**⚠️ IMPORTANT**: The scripts will create automatic backups in `/backups/` before making any changes.

---

### Advanced Options

#### Custom Pattern Directory

If your patterns are in a different location:

```bash
./migrate-spacing-slugs.sh --pattern-dir=/custom/path/to/patterns
```

#### Combined Migration

Run both migrations sequentially:

```bash
./migrate-spacing-slugs.sh && ./migrate-font-size-slugs.sh
```

---

## Safety Features

### 1. **Automatic Backups**

Before modifying any files, the scripts create timestamped backups:

```
/backups/
  ├── spacing-migration-20260302-143022/
  │   ├── page-home.php
  │   ├── page-about.php
  │   └── ...
  └── font-size-migration-20260302-143155/
      ├── page-home.php
      └── ...
```

### 2. **Context-Aware Replacements**

The scripts only replace slugs in valid contexts:

**Spacing**: Only replaces within `spacing|slug` patterns:
```php
✅ var:preset|spacing|spacing-lg  → var:preset|spacing|large
❌ "spacing-lg-container"         → (unchanged - not in valid context)
```

**Font-size**: Only replaces within `font-size|slug` or `"fontSize":"slug"` patterns:
```php
✅ var:preset|font-size|text-lg   → var:preset|font-size|large
✅ "fontSize":"text-lg"            → "fontSize":"large"
❌ "text-lg-heading"               → (unchanged - not in valid context)
```

### 3. **Dry Run Mode**

Never makes changes without explicit confirmation via non-dry-run execution.

---

## Verification After Migration

### 1. **Visual Regression Testing**

After running migrations, visually test key pages:

```bash
# Start local WordPress dev environment
cd wordpress-export/
# ... start your dev server ...

# Check these pages:
# - Homepage (/)
# - About (/oor-ons)
# - Contact (/kontak)
# - Newsletter (/nuusbrief-inteken)
# - E-editions (/e-uitgawes)
```

### 2. **Search for Remaining Legacy Slugs**

Verify no legacy slugs remain:

```bash
# Search for legacy spacing slugs
grep -r "spacing-xs\|spacing-sm\|spacing-md\|spacing-lg\|spacing-xl\|spacing-2xl\|spacing-3xl" \
  ../wordpress-export/themes/die-papier-theme/patterns/

# Search for legacy font-size slugs
grep -r "text-xs\|text-sm\|text-base\|text-md\|text-lg\|text-xl\|text-2xl\|text-3xl" \
  ../wordpress-export/themes/die-papier-theme/patterns/
```

If the search returns 0 results, migration is 100% complete ✅

### 3. **Git Diff Review**

Review all changes in Git:

```bash
git diff wordpress-export/themes/die-papier-theme/patterns/
```

---

## Rollback Instructions

If you need to revert the migration:

### Option 1: Restore from Backups

```bash
# Find your backup directory
ls -lah backups/

# Copy files back
cp -r backups/spacing-migration-TIMESTAMP/* \
  ../wordpress-export/themes/die-papier-theme/patterns/
```

### Option 2: Git Revert

If you committed changes:

```bash
git revert HEAD
```

Or reset to before migration:

```bash
git reset --hard <commit-hash-before-migration>
```

---

## Troubleshooting

### Script Won't Execute (Permission Denied)

Make scripts executable:

```bash
chmod +x migrate-spacing-slugs.sh
chmod +x migrate-font-size-slugs.sh
```

### `sed` Command Not Found (macOS)

Install GNU sed via Homebrew:

```bash
brew install gnu-sed
```

Then update script to use `gsed` instead of `sed`.

### Pattern Directory Not Found

Verify the path in the script matches your project structure:

```bash
# Check current location
pwd

# List pattern directory
ls -lah ../wordpress-export/themes/die-papier-theme/patterns/
```

Update the `PATTERN_DIR` variable in the script if needed.

---

## Expected Output

### Successful Dry Run

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Spacing Slug Migration Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pattern Directory: ../wordpress-export/themes/die-papier-theme/patterns
Dry Run: true

Scanning pattern files...

  [DRY RUN] Would replace spacing-lg → large (8 occurrence(s)) in:
    ../wordpress-export/themes/die-papier-theme/patterns/page/page-home.php
  [DRY RUN] Would replace spacing-md → medium (12 occurrence(s)) in:
    ../wordpress-export/themes/die-papier-theme/patterns/page/page-about.php
  ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Migration Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total files scanned:    76
Files modified:         62
Total replacements:     131

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DRY RUN COMPLETE - No files were modified
  Run without --dry-run to apply changes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Successful Migration

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Spacing Slug Migration Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pattern Directory: ../wordpress-export/themes/die-papier-theme/patterns
Dry Run: false

✓ Backup directory created: ../backups/spacing-migration-20260302-143022

Scanning pattern files...

  ✓ Replaced spacing-lg → large (8 occurrence(s)) in:
    ../wordpress-export/themes/die-papier-theme/patterns/page/page-home.php
  ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Migration Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total files scanned:    76
Files modified:         62
Total replacements:     131

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  MIGRATION COMPLETE ✓
  Backups saved to: ../backups/spacing-migration-20260302-143022
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Timeline & Execution Plan

### Recommended Execution Order

1. **Week 1**: Run spacing slug migration
   - Day 1: Dry run + review
   - Day 2: Execute migration
   - Day 3: Visual regression testing

2. **Week 2**: Run font-size slug migration
   - Day 1: Dry run + review
   - Day 2: Execute migration
   - Day 3: Visual regression testing

3. **Week 3**: Final verification & commit
   - Verify no legacy slugs remain
   - Git commit with comprehensive message
   - Update documentation

---

## Related Documentation

- **Comprehensive Audit Report**: `/reports/comprehensive-audit-executive-summary.md`
- **Task List**: `/tasks/comprehensive-audit-task-list-UPDATED.md`
- **Progress Tracking**: `/tasks/immediate-priority-progress.md`
- **Spacing Guidelines**: `/guidelines/design-tokens/spacing.md`
- **Typography Guidelines**: `/guidelines/design-tokens/typography.md`

---

## Support

If you encounter issues or have questions:

1. Check the **Troubleshooting** section above
2. Review `/reports/audits/01-pattern-spacing-slugs.md` for detailed spacing audit
3. Review `/reports/audits/03-pattern-font-size-slugs.md` for detailed font-size audit
4. Create an issue in the project repository with script output

---

**Last Updated**: 2026-03-02  
**Script Version**: 1.0.0  
**Status**: Ready for execution ✅
