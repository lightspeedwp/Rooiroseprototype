# Documentation Update

**Type**: Single Prompt  
**Created**: 2026-03-15  
**Version**: 1.0.0  
**Estimated Duration**: 15-20 minutes  
**Trigger Word**: `update-docs`

---

## Purpose

Quick update of the three core root documentation files (ATTRIBUTIONS.md, README.md, CHANGELOG.md) to reflect current project state.

---

## Prerequisites

**Required Before Running**:
- [ ] Recent work completed and committed
- [ ] `/guidelines/core-repository-guidelines.md` reviewed
- `/guidelines/Changelog-Guidelines.md` reviewed
- `/guidelines/Readme-Guidelines.md` reviewed

---

## Scope

**Files to Update**:
1. `/CHANGELOG.md` - Add recent changes to Unreleased section
2. `/README.md` - Update stats, features, status
3. `/ATTRIBUTIONS.md` - Add any new dependencies or resources

---

## Execution Instructions

### Phase 1: Update CHANGELOG.md (Est. 5 min)

**Objective**: Document recent changes in Unreleased section

**Format**: Follow Keep a Changelog standard

**Tasks**:
1. Read current `/CHANGELOG.md`
2. Identify what has changed since last update
3. Add to `[Unreleased]` section under appropriate category:
   - **Added**: New features or capabilities
   - **Changed**: Changes to existing functionality
   - **Deprecated**: Soon-to-be removed features
   - **Removed**: Removed features
   - **Fixed**: Bug fixes
   - **Security**: Security patches

**Example Entry**:
```markdown
## [Unreleased]

### Added
- File organization audit prompt with trigger word `audit-files`
- Root directory compliance audit prompt with trigger word `audit-root`
- Guidelines synchronization prompt with trigger word `sync-guidelines`
- Comprehensive prompt-report-task workflow guideline

### Changed
- Updated Guidelines.md to reference new workflow guideline
- Enhanced prompt trigger words system with 4 new triggers

### Fixed
- Removed unauthorized .md files from project root
```

**Output**: Updated CHANGELOG.md

### Phase 2: Update README.md (Est. 8 min)

**Objective**: Refresh project overview and statistics

**Tasks**:
1. **Update Statistics**:
   - Component count
   - Route count
   - Feature count
   - Any metrics in overview

2. **Update Features List**:
   - Add new features
   - Mark completed features
   - Remove deprecated features

3. **Update Status Badges** (if applicable):
   - Build status
   - Coverage percentage
   - Version number

4. **Update Quick Start** (if changed):
   - Installation steps
   - Configuration
   - First run commands

5. **Verify Links**:
   - Check all internal links work
   - Check all external links active
   - Fix broken references

**Example Updates**:
```markdown
**Features**:
- ✅ 75+ React components (was 50+)
- ✅ 145+ design tokens (was 120+)
- ✅ File organization workflow system (NEW)
- ✅ Automated prompt trigger system (NEW)
```

**Output**: Updated README.md

### Phase 3: Update ATTRIBUTIONS.md (Est. 5 min)

**Objective**: Add any new third-party resources

**Tasks**:
1. Check `package.json` for new dependencies since last update
2. Add new npm packages to attributions
3. Add any new fonts, icons, or images used
4. Update version numbers of existing dependencies (if major changes)

**Check These Sources**:
- `package.json` - npm dependencies
- `/src/styles/fonts.css` - font imports
- `/src/app/components/icons/` - icon sets
- New image sources from Unsplash/Pexels

**Example Entry**:
```markdown
## JavaScript/TypeScript Libraries

**React Router** - v7.x  
**License**: MIT  
**Website**: https://reactrouter.com/  
**Purpose**: Client-side routing for React applications
```

**Output**: Updated ATTRIBUTIONS.md

### Phase 4: Verification (Est. 2 min)

**Objective**: Ensure all updates are valid

**Checklist**:
- [ ] CHANGELOG.md follows Keep a Changelog format
- [ ] README.md all statistics current
- [ ] README.md all links working
- [ ] ATTRIBUTIONS.md all dependencies credited
- [ ] No markdown formatting errors
- [ ] Dates in ISO 8601 format (YYYY-MM-DD)

**Output**: Verified documentation

---

## Report Requirements

**Report Location**: `/reports/docs-update-report-YYYY-MM-DD.md`

**Required Sections**:

### 1. Summary
```markdown
## Documentation Update Summary

**Update Date**: YYYY-MM-DD
**Files Updated**: 3

### Changes Made

**CHANGELOG.md**:
- Added X entries to Unreleased section
- Categories updated: Added, Changed, Fixed

**README.md**:
- Updated component count: 50 → 75
- Updated design token count: 120 → 145
- Added 2 new features to list
- Verified all 15 links

**ATTRIBUTIONS.md**:
- Added 3 new npm dependencies
- Updated 1 existing dependency version
```

### 2. Details
```markdown
## Detailed Changes

### CHANGELOG.md

**Added**:
- File organization audit prompt
- Root directory compliance audit
- Guidelines synchronization prompt
- Documentation update prompt

**Changed**:
- Updated Guidelines.md structure
- Enhanced trigger word system

**Fixed**:
- Removed unauthorized root .md files
```

---

## Success Criteria

- [ ] CHANGELOG.md updated with recent changes
- [ ] README.md statistics current
- [ ] README.md links verified
- [ ] ATTRIBUTIONS.md dependencies current
- [ ] All files follow their respective guidelines
- [ ] No markdown errors
- [ ] Report created

---

## Notes

**When to Run**:
- After completing major features
- Before releases
- After adding new dependencies
- Monthly as regular maintenance
- Before creating GitHub releases

**Versioning in CHANGELOG**:
- Changes go in `[Unreleased]` section
- On release, create versioned section: `[X.Y.Z] - YYYY-MM-DD`
- Move Unreleased entries to versioned section
- Follow Semantic Versioning (SemVer)

**README Best Practices**:
- Keep Quick Start under 5 commands
- Update stats regularly
- Verify links monthly
- Remove outdated information

**ATTRIBUTIONS Best Practices**:
- Credit all third-party resources
- Include license type
- Provide source URLs
- Update on dependency changes

---

**Related Prompts**:
- `/prompts/sync-guidelines.md`
- `/prompts/cleanup.md`

**Related Guidelines**:
- `/guidelines/core-repository-guidelines.md`
- `/guidelines/Changelog-Guidelines.md`
- `/guidelines/Readme-Guidelines.md`

**Created By**: DevOps Team  
**Last Updated**: 2026-03-15
