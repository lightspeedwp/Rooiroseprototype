# Changelog Guidelines

**Version**: 1.0.0  
**Last Updated**: 2026-03-15  
**Status**: Active  

---

## Purpose

This document establishes the mandatory standards for maintaining the project changelog. All version history must follow the **Keep a Changelog** format and **Semantic Versioning 2.0.0** (SemVer) specification to ensure consistency, traceability, and optimal comprehension by both human developers and AI agents.

---

## Format Requirement

The project changelog **must** strictly adhere to the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) standard.

### Core Principles

1. **Human-Readable**: Written for humans, not machines
2. **Chronological**: Latest versions at the top
3. **Dated**: Every version has an ISO 8601 date (YYYY-MM-DD)
4. **Categorized**: Changes grouped by type
5. **Linkable**: Version numbers link to release diffs

---

## Semantic Versioning (SemVer)

All version numbers **must** follow Semantic Versioning 2.0.0 specification: `MAJOR.MINOR.PATCH`

### Version Number Components

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

Examples:
- 1.0.0          (Initial stable release)
- 1.4.2          (Minor features and patches)
- 2.0.0          (Breaking changes)
- 2.1.0-alpha.1  (Prerelease version)
- 1.0.0+20240315 (Build metadata)
```

### MAJOR Version

Increment MAJOR version when making **incompatible API changes**.

**Examples**:
- Removing a public API endpoint
- Changing function signatures in breaking ways
- Renaming environment variables
- Changing database schema in non-backward-compatible ways
- Removing deprecated features

**Before (v1.x.x)**:
```typescript
// Old API signature
function authenticate(username: string, password: string): boolean
```

**After (v2.0.0)**:
```typescript
// Breaking change: now returns Promise and requires email
function authenticate(email: string, password: string): Promise<AuthResult>
```

**Changelog Entry**:
```markdown
### Changed
- **BREAKING**: `authenticate()` function now requires email instead of username and returns Promise<AuthResult>
```

### MINOR Version

Increment MINOR version when adding functionality in a **backwards-compatible** manner.

**Examples**:
- Adding new API endpoints
- Adding optional parameters to existing functions
- Adding new configuration options
- Introducing new features that don't break existing functionality

**Before (v1.2.x)**:
```typescript
interface Config {
  apiKey: string;
  timeout: number;
}
```

**After (v1.3.0)**:
```typescript
interface Config {
  apiKey: string;
  timeout: number;
  retryAttempts?: number; // New optional field
}
```

**Changelog Entry**:
```markdown
### Added
- Optional `retryAttempts` configuration parameter for API request retry logic
```

### PATCH Version

Increment PATCH version for **backwards-compatible bug fixes**.

**Examples**:
- Fixing security vulnerabilities
- Correcting calculation errors
- Resolving memory leaks
- Fixing documentation typos
- Correcting error messages

**Bug Fix Example**:
```typescript
// Before (v1.2.3): Incorrect calculation
function calculateTax(amount: number): number {
  return amount * 0.15; // Wrong tax rate
}

// After (v1.2.4): Fixed calculation
function calculateTax(amount: number): number {
  return amount * 0.21; // Correct tax rate
}
```

**Changelog Entry**:
```markdown
### Fixed
- Corrected tax calculation rate from 15% to 21% in `calculateTax()` function
```

---

## Changelog File Structure

### Required Sections

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Feature X for handling Y scenario
- New API endpoint `/api/v2/users`

### Changed
- Updated dependency Z from v3.1 to v4.0

### Deprecated
- Function `oldMethod()` will be removed in v3.0.0

### Removed
- Unused configuration option `legacyMode`

### Fixed
- Memory leak in WebSocket connection handler
- Incorrect date formatting in reports

### Security
- Patched XSS vulnerability in user input validation

## [1.2.0] - 2026-03-15

### Added
- JWT refresh token rotation
- Rate limiting middleware

### Fixed
- Session timeout bug in Safari

## [1.1.0] - 2026-03-01

### Added
- User profile management endpoints

## [1.0.0] - 2026-02-15

### Added
- Initial stable release
- User authentication system
- RESTful API foundation

[Unreleased]: https://github.com/org/repo/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/org/repo/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/org/repo/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/org/repo/releases/tag/v1.0.0
```

---

## Change Categories

### Added

**Purpose**: New features or capabilities added to the project.

**Format**:
```markdown
### Added
- User role-based access control (RBAC) system
- Export functionality for reports in CSV and PDF formats
- WebSocket support for real-time notifications
- New API endpoint: `POST /api/v1/webhooks` for event subscriptions
```

**Guidelines**:
- Use present tense ("Add" not "Added")
- Be specific about what was added
- Include relevant technical details
- Reference pull requests or issues when applicable

### Changed

**Purpose**: Changes to existing functionality that are backwards-compatible.

**Format**:
```markdown
### Changed
- Improved database query performance by 40% using connection pooling
- Updated authentication flow to support OAuth 2.0
- Enhanced error messages for better debugging
- Refactored user service for improved maintainability
```

**Guidelines**:
- Distinguish from "Fixed" (improvements vs. corrections)
- Explain the benefit or reason for the change
- Mark breaking changes with **BREAKING** prefix
- Include migration notes if needed

**Breaking Change Format**:
```markdown
### Changed
- **BREAKING**: Renamed environment variable `API_SECRET` to `JWT_SECRET`
  - Migration: Update `.env` file with new variable name
  - Old configurations will fail with clear error message
```

### Deprecated

**Purpose**: Features that will be removed in future versions.

**Format**:
```markdown
### Deprecated
- Function `getUserByUsername()` deprecated in favor of `getUserByEmail()`
  - Will be removed in v3.0.0
  - Migration guide: Use `getUserByEmail()` instead
- Configuration option `useLegacyAuth` will be removed in next major version
  - Alternative: Use `authProvider: 'modern'` instead
```

**Guidelines**:
- Always specify when the feature will be removed
- Provide migration path or alternative
- Explain why it's being deprecated
- Keep deprecated items until next MAJOR version

### Removed

**Purpose**: Features that have been removed from the project.

**Format**:
```markdown
### Removed
- Removed deprecated function `getUserByUsername()` (deprecated since v2.1.0)
  - Use `getUserByEmail()` instead
- Removed support for Node.js 14 (EOL)
  - Minimum supported version is now Node.js 18
- Removed unused dependency `moment` in favor of native `Date` API
```

**Guidelines**:
- Only remove in MAJOR version updates (unless security-critical)
- Reference when the feature was deprecated
- Provide replacement or migration steps
- Explain impact and rationale

### Fixed

**Purpose**: Bug fixes and corrections.

**Format**:
```markdown
### Fixed
- Fixed race condition in session management causing occasional logouts
  - Issue #234
  - Affected users on high-latency connections
- Corrected timezone handling in date formatting
  - Previously showed incorrect times for UTC+12 timezone
- Resolved memory leak in WebSocket connection cleanup
  - Reduced memory usage by 60% in long-running processes
```

**Guidelines**:
- Describe the bug that was fixed
- Explain the impact or symptoms
- Reference issue numbers
- Include technical details when relevant

### Security

**Purpose**: Security vulnerability patches and improvements.

**Format**:
```markdown
### Security
- **CRITICAL**: Patched SQL injection vulnerability in search endpoint
  - CVE-2026-12345
  - Affects versions 1.0.0 - 1.2.3
  - Upgrade immediately to v1.2.4
- Fixed XSS vulnerability in user profile rendering
  - Sanitize all user-generated content
- Updated dependency `express` to v4.18.3 to address security advisory
  - GHSA-xxxx-yyyy-zzzz
```

**Guidelines**:
- **Always** include security fixes in CHANGELOG
- Mark severity level (CRITICAL, HIGH, MEDIUM, LOW)
- Reference CVE or security advisory numbers
- Specify affected versions
- Provide clear upgrade instructions
- Consider responsible disclosure timeline

---

## Update Process

### Step 1: Add to Unreleased Section

**All changes** must first be added to the `[Unreleased]` section as they are developed.

```markdown
## [Unreleased]

### Added
- New feature X

### Fixed
- Bug in component Y
```

**When to Update**:
- Immediately after merging a pull request
- Before or during code review
- As part of commit messages

### Step 2: Group by Type

Organize changes under appropriate category headings in this order:
1. Added
2. Changed
3. Deprecated
4. Removed
5. Fixed
6. Security

**Correct Order**:
```markdown
## [Unreleased]

### Added
[New features]

### Changed
[Updates to existing features]

### Deprecated
[Soon-to-be removed features]

### Removed
[Removed features]

### Fixed
[Bug fixes]

### Security
[Security patches]
```

### Step 3: Release Process

When cutting a new release:

1. **Determine Version Number**:
   - Review all changes in `[Unreleased]`
   - Identify if changes are MAJOR, MINOR, or PATCH
   - Increment version accordingly

2. **Move Unreleased to Versioned Section**:
   ```markdown
   ## [Unreleased]
   
   ## [1.3.0] - 2026-03-15
   
   ### Added
   - Feature A
   - Feature B
   
   ### Fixed
   - Bug X
   ```

3. **Add ISO 8601 Date**:
   - Format: `YYYY-MM-DD`
   - Use UTC date of release
   - Example: `[1.3.0] - 2026-03-15`

4. **Update Comparison Links**:
   ```markdown
   [Unreleased]: https://github.com/org/repo/compare/v1.3.0...HEAD
   [1.3.0]: https://github.com/org/repo/compare/v1.2.0...v1.3.0
   [1.2.0]: https://github.com/org/repo/compare/v1.1.0...v1.2.0
   ```

5. **Tag Release in Git**:
   ```bash
   git tag -a v1.3.0 -m "Release version 1.3.0"
   git push origin v1.3.0
   ```

---

## AI Agent Workflow

### Automated Changelog Generation

AI agents can assist with changelog maintenance by:

1. **Analyzing Commits**:
   ```bash
   # Get commits since last release
   git log v1.2.0..HEAD --oneline
   ```

2. **Categorizing Changes**:
   - Parse conventional commit messages
   - Identify change types (feat, fix, docs, etc.)
   - Group by category

3. **Draft Changelog Entry**:
   ```markdown
   ## [Unreleased]
   
   ### Added
   - feat: implement user profile export (commit abc123)
   - feat: add rate limiting middleware (commit def456)
   
   ### Fixed
   - fix: resolve memory leak in WebSocket (commit ghi789)
   ```

4. **Human Review Required**:
   - Verify categorization accuracy
   - Add context and details
   - Merge similar changes
   - Rewrite for clarity

### Conventional Commits Integration

If using [Conventional Commits](https://www.conventionalcommits.org/), map commit types to changelog categories:

| Commit Type | Changelog Category |
|-------------|-------------------|
| `feat:`     | Added             |
| `fix:`      | Fixed             |
| `docs:`     | (Not in changelog) |
| `style:`    | (Not in changelog) |
| `refactor:` | Changed           |
| `perf:`     | Changed           |
| `test:`     | (Not in changelog) |
| `chore:`    | (Not in changelog) |

**Commit Example**:
```bash
git commit -m "feat: add JWT refresh token rotation"
```

**Changelog Entry**:
```markdown
### Added
- JWT refresh token rotation for enhanced security
```

---

## Writing Style Guidelines

### Be Specific and Descriptive

**✅ Good**:
```markdown
### Fixed
- Corrected SQL query in user search to properly escape special characters, preventing potential injection attacks
```

**❌ Vague**:
```markdown
### Fixed
- Fixed search bug
```

### Use Active Voice

**✅ Active**:
```markdown
### Added
- The system now validates email addresses using RFC 5322 standard
```

**❌ Passive**:
```markdown
### Added
- Email validation was added
```

### Provide Context

**✅ With Context**:
```markdown
### Changed
- Updated PostgreSQL driver from v3.1 to v3.5
  - Improves connection pooling performance by 30%
  - Fixes memory leak in long-running queries
  - No breaking changes or migration required
```

**❌ Without Context**:
```markdown
### Changed
- Updated PostgreSQL driver
```

### Include Impact Information

**✅ Shows Impact**:
```markdown
### Fixed
- Resolved race condition in session management
  - Previously affected 2% of users on mobile devices
  - Caused intermittent logout issues during navigation
  - Now properly handles concurrent requests
```

**❌ No Impact**:
```markdown
### Fixed
- Fixed session bug
```

---

## Version Numbering Examples

### Example 1: Initial Development

```markdown
## [0.1.0] - 2026-01-15
### Added
- Initial project scaffold
- Basic authentication system
- User registration endpoint

## [0.2.0] - 2026-02-01
### Added
- Password reset functionality
- Email verification

## [1.0.0] - 2026-03-01
### Added
- Production-ready release
- Complete API documentation
- Performance optimizations
```

### Example 2: Feature Addition

```markdown
## [1.1.0] - 2026-03-15
### Added
- User profile management endpoints
- Avatar upload functionality
- Profile privacy settings
```

### Example 3: Bug Fixes

```markdown
## [1.1.1] - 2026-03-20
### Fixed
- Corrected avatar image cropping calculation
- Fixed profile update validation errors

## [1.1.2] - 2026-03-22
### Security
- Patched file upload vulnerability allowing arbitrary file types
```

### Example 4: Breaking Changes

```markdown
## [2.0.0] - 2026-04-01
### Changed
- **BREAKING**: Renamed all API endpoints from `/api/v1/*` to `/api/v2/*`
  - Migration guide available at docs/migration-v2.md
  - v1 endpoints will remain active until 2026-06-01
- **BREAKING**: Changed authentication response format
  - Old format: `{ token: string }`
  - New format: `{ accessToken: string, refreshToken: string, expiresIn: number }`

### Removed
- Removed deprecated `getUserByUsername()` function (deprecated in v1.5.0)
  - Use `getUserByEmail()` instead
```

---

## Prerelease Versions

### Format

Prerelease versions append a hyphen and identifier: `MAJOR.MINOR.PATCH-PRERELEASE`

**Examples**:
- `2.0.0-alpha.1`
- `2.0.0-beta.2`
- `2.0.0-rc.1` (release candidate)

### Changelog Format

```markdown
## [2.0.0-alpha.1] - 2026-03-01

**⚠️ PRERELEASE**: This is an alpha version. Not recommended for production use.

### Added
- Experimental feature X
- New API design (subject to change)

### Known Issues
- Performance not optimized
- Documentation incomplete
- Breaking changes expected before stable release

## [2.0.0-beta.1] - 2026-03-15

**⚠️ PRERELEASE**: Beta version. API stable but may contain bugs.

### Added
- Feature Y now production-ready
- Complete test coverage

### Fixed
- Issues identified in alpha.1

### Breaking Changes Since Alpha
- Renamed method `doX()` to `performX()`

## [2.0.0] - 2026-04-01

**🎉 STABLE RELEASE**

### Added
- All features from beta now stable
- Complete documentation

### Changed Since Beta
- Minor API documentation updates
- Performance optimizations
```

---

## Build Metadata

Build metadata can be appended with a plus sign: `MAJOR.MINOR.PATCH+BUILD`

**Examples**:
- `1.0.0+20260315`
- `1.0.0+exp.sha.5114f85`

**Note**: Build metadata **should not** appear in the changelog as it doesn't affect version precedence.

---

## Yanked Releases

If a release must be removed due to critical issues:

```markdown
## [1.2.0] - 2026-03-15 [YANKED]

**⚠️ YANKED**: This release has been removed due to critical security vulnerability. Do not use.

**Issue**: SQL injection vulnerability in search endpoint (CVE-2026-12345)

**Resolution**: Upgrade to v1.2.1 immediately

### Added
[Original release notes]

## [1.2.1] - 2026-03-15

### Security
- **CRITICAL**: Patched SQL injection vulnerability from v1.2.0
```

---

## Integration with Release Process

### Automated Release Workflow

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Extract changelog
        id: changelog
        run: |
          VERSION=${GITHUB_REF#refs/tags/v}
          CHANGELOG=$(sed -n "/## \[${VERSION}\]/,/## \[/p" CHANGELOG.md | sed '$d')
          echo "CHANGELOG<<EOF" >> $GITHUB_OUTPUT
          echo "$CHANGELOG" >> $GITHUB_OUTPUT
          echo "EOF" >> $GITHUB_OUTPUT
      
      - name: Create GitHub Release
        uses: actions/create-release@v1
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          body: ${{ steps.changelog.outputs.CHANGELOG }}
```

---

## Validation Checklist

Before committing changelog updates, verify:

- [ ] Version number follows SemVer (MAJOR.MINOR.PATCH)
- [ ] Date is in ISO 8601 format (YYYY-MM-DD)
- [ ] Changes are categorized correctly
- [ ] Entries are in chronological order (newest first)
- [ ] Breaking changes are marked with **BREAKING**
- [ ] Security issues are in Security section
- [ ] Comparison links are updated
- [ ] No duplicate entries
- [ ] Grammar and spelling are correct
- [ ] Technical details are accurate

---

## Common Mistakes to Avoid

### Incorrect Version Increment

**❌ Wrong**:
```markdown
## [1.2.0] - 2026-03-15
### Changed
- **BREAKING**: Removed deprecated API endpoint
```

**✅ Correct**:
```markdown
## [2.0.0] - 2026-03-15
### Removed
- **BREAKING**: Removed deprecated API endpoint `/api/v1/old-method`
  - Use `/api/v2/new-method` instead
```

### Missing Context

**❌ Insufficient**:
```markdown
### Fixed
- Fixed bug
```

**✅ Complete**:
```markdown
### Fixed
- Resolved memory leak in WebSocket connection handler that caused server crashes after 24 hours of continuous operation
```

### Combining Multiple Changes

**❌ Combined**:
```markdown
### Added
- New features and bug fixes
```

**✅ Separated**:
```markdown
### Added
- User profile export functionality

### Fixed
- Corrected timezone handling in export dates
```

---

## Additional Resources

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Release Documentation](https://docs.github.com/en/repositories/releasing-projects-on-github)

---

**Maintained By**: DevOps Team  
**Questions**: Contact documentation@example.com  
**Last Review**: 2026-03-15
