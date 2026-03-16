# Core Repository Guidelines

**Version**: 1.0.0  
**Last Updated**: 2026-03-15  
**Status**: Active  

---

## Purpose

This document defines the single source of truth for all project standards, coding conventions, documentation practices, and AI-readiness requirements. All contributors—human and AI agents—must adhere to these guidelines to ensure consistency, maintainability, and optimal comprehension across the repository.

---

## Markdown Hierarchy Standards

### Single H1 Rule

Every Markdown document **must** contain exactly one H1 heading (`#`) which serves as the document title. This prevents AI chunking errors and ensures clear document hierarchy.

**✅ Correct**:
```markdown
# User Authentication Guide

## Overview
## Installation
## Configuration
```

**❌ Incorrect**:
```markdown
# User Authentication Guide
# Installation Steps
# Configuration Options
```

### Sequential Heading Levels

Headings must follow a sequential hierarchy without skipping levels. This ensures AI models can correctly parse document structure.

**✅ Correct**:
```markdown
# Main Title
## Section
### Subsection
#### Detail
```

**❌ Incorrect**:
```markdown
# Main Title
### Subsection (skipped H2)
## Section (out of order)
```

### Heading Naming Conventions

- Use Title Case for H1 headings
- Use Sentence case for H2-H6 headings
- Be descriptive and specific
- Avoid vague terms like "Misc" or "Other"

---

## Semantic Clarity Requirements

### Active Voice Mandate

All documentation **must** use active voice to ensure clarity and directness.

**✅ Active Voice**:
- "The system validates the API key"
- "The developer configures the environment variables"
- "The function returns a JSON object"

**❌ Passive Voice**:
- "The API key is validated"
- "Environment variables are configured"
- "A JSON object is returned"

### Explicit References

Avoid ambiguous pronouns. Always use explicit references to maintain clarity for both humans and AI.

**✅ Explicit**:
```markdown
The API key authenticates requests. The API key must be stored securely.
Store the database password in environment variables. The database password 
should never be committed to version control.
```

**❌ Ambiguous**:
```markdown
The API key authenticates requests. It must be stored securely.
Store the database password in environment variables. It should never 
be committed to version control.
```

### Terminology Glossary

Define all domain-specific terms, acronyms, and technical jargon in a glossary section or inline on first use.

**Format**:
```markdown
## Glossary

**API (Application Programming Interface)**: A set of protocols and tools 
for building software applications that specify how software components 
should interact.

**JWT (JSON Web Token)**: An open standard (RFC 7519) for securely 
transmitting information between parties as a JSON object.

**CRUD**: Create, Read, Update, Delete - the four basic operations of 
persistent storage.
```

---

## AI-Readiness Standards

### YAML Front Matter

All documentation files **should** include YAML front matter to provide metadata for AI reasoning and indexing.

**Required Fields**:
```yaml
---
title: "Document Title"
description: "Brief description of document purpose"
category: "documentation|guide|reference|api"
tags: ["tag1", "tag2", "tag3"]
version: "1.0.0"
lastUpdated: "2026-03-15"
audience: "developers|operations|all"
aiContext: "Brief context for AI agents"
---
```

**Example**:
```yaml
---
title: "User Authentication Guide"
description: "Comprehensive guide for implementing JWT-based authentication"
category: "guide"
tags: ["authentication", "jwt", "security", "api"]
version: "1.2.0"
lastUpdated: "2026-03-15"
audience: "developers"
aiContext: "This guide covers JWT authentication implementation including token generation, validation, and refresh flows"
---
```

### Self-Contained Sections

Each major section **must** be independently comprehensible without requiring full repository context. This enables AI agents to reason over individual "chunks" effectively.

**Requirements**:
1. **Context First**: Begin each section with necessary context
2. **No External Dependencies**: Avoid references like "as mentioned above" or "see previous section"
3. **Complete Examples**: Provide full, executable code examples
4. **Explicit Prerequisites**: State all dependencies clearly

**✅ Self-Contained**:
```markdown
## Database Connection Setup

**Context**: This section configures PostgreSQL database connections using 
the `pg` library in Node.js applications.

**Prerequisites**:
- Node.js 18+ installed
- PostgreSQL 14+ running
- Environment variables configured (see Environment Setup section)

**Implementation**:
[Complete code example with all imports and configuration]
```

**❌ Not Self-Contained**:
```markdown
## Database Connection

As mentioned earlier, configure the connection:
[Incomplete code snippet]
```

### Structured Code Examples

All code examples **must** include:
1. **Language identifier** in fenced code blocks
2. **Complete context** (imports, setup, teardown)
3. **Inline comments** for complex logic
4. **Expected output** or results

**Format**:
````markdown
```typescript
// Import required dependencies
import { createConnection } from 'pg';
import { config } from './config';

// Establish database connection
const connection = await createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name
});

// Expected output: Connection object with pool ready
// Returns: { connected: true, poolSize: 10 }
```
````

---

## File Organization Standards

### Directory Structure

Organize repository files using a logical, hierarchical structure optimized for both human navigation and AI traversal.

**Standard Structure**:
```
repository/
├── docs/                    # All documentation
│   ├── guides/              # User and developer guides
│   ├── api/                 # API documentation
│   ├── architecture/        # System architecture docs
│   └── tutorials/           # Step-by-step tutorials
├── guidelines/              # Standards and guidelines
│   ├── Guidelines.md        # This file (core standards)
│   ├── Changelog-Guidelines.md
│   └── Readme-Guidelines.md
├── src/                     # Source code
├── tests/                   # Test files
├── .github/                 # GitHub-specific files
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── CHANGELOG.md             # Version history
├── README.md                # Project overview
└── LICENSE                  # License information
```

### Naming Conventions

**Files**:
- Use kebab-case for multi-word filenames: `user-authentication-guide.md`
- Use PascalCase for component files: `UserAuthForm.tsx`
- Use UPPERCASE for root-level config: `README.md`, `CHANGELOG.md`, `LICENSE`

**Directories**:
- Use lowercase with hyphens: `api-documentation/`, `user-guides/`
- Keep names concise but descriptive
- Avoid abbreviations unless universally understood

---

## Cross-Referencing Standards

### Internal Links

Use relative paths for internal documentation links to maintain portability.

**✅ Correct**:
```markdown
See [Installation Guide](./installation.md) for setup instructions.
Refer to [API Reference](../api/endpoints.md#authentication) for details.
```

**❌ Incorrect**:
```markdown
See [Installation Guide](https://github.com/org/repo/blob/main/docs/installation.md)
```

### Link Format

Provide context for all links to help AI understand their relevance.

**✅ Descriptive**:
```markdown
For detailed JWT implementation patterns, see [JWT Best Practices Guide](./jwt-best-practices.md).
```

**❌ Non-Descriptive**:
```markdown
More info [here](./jwt-best-practices.md).
```

---

## Documentation Versioning

### Version Format

All documentation follows Semantic Versioning (MAJOR.MINOR.PATCH):
- **MAJOR**: Structural changes, reorganization, or breaking changes
- **MINOR**: New sections, significant additions
- **PATCH**: Typo fixes, clarifications, minor updates

### Version Header

Include version information in the document header:

```markdown
**Version**: 1.2.3  
**Last Updated**: 2026-03-15  
**Status**: Active | Deprecated | Draft
```

---

## Code Block Standards

### Language Identifiers

Always specify the language for syntax highlighting and AI parsing.

**Required**:
````markdown
```typescript
const apiKey: string = process.env.API_KEY;
```

```bash
npm install express
```

```json
{
  "name": "project",
  "version": "1.0.0"
}
```
````

### Annotated Examples

Add comments explaining non-obvious logic:

```typescript
// Validate JWT token with expiration check
const validateToken = (token: string): boolean => {
  try {
    // Decode token without verification first
    const decoded = jwt.decode(token, { complete: true });
    
    // Check token expiration (exp claim is in seconds)
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.payload.exp < currentTime) {
      return false; // Token expired
    }
    
    // Verify signature with secret
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (error) {
    return false; // Invalid token
  }
};
```

---

## List Formatting Standards

### Ordered Lists

Use ordered lists for sequential steps or procedures:

```markdown
1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables
4. Start the development server
```

### Unordered Lists

Use unordered lists for non-sequential items:

```markdown
- Node.js 18 or higher
- PostgreSQL 14 or higher
- Redis 6 or higher
- Valid SSL certificate
```

### Nested Lists

Maintain proper indentation (2 spaces) for nested lists:

```markdown
- Backend Setup
  - Install Node.js dependencies
    - Run `npm install` in `/backend` directory
    - Verify installation with `npm list`
  - Configure database
    - Create PostgreSQL database
    - Run migrations with `npm run migrate`
```

---

## Table Formatting

### Standard Tables

Use GitHub Flavored Markdown tables with proper alignment:

```markdown
| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| apiKey    | string | Yes      | Authentication API key         |
| userId    | number | Yes      | Unique user identifier         |
| options   | object | No       | Optional configuration object  |
```

### Alignment

- Left-align text columns: `|:---`
- Right-align number columns: `---:|`
- Center-align when appropriate: `:---:`

---

## Command Documentation

### Command Format

Document all commands with clear structure:

```markdown
## Build Production Bundle

**Command**:
```bash
npm run build:production
```

**Description**: Compiles TypeScript source, optimizes assets, and generates production bundle.

**Prerequisites**:
- All dependencies installed (`npm install`)
- Environment variables configured
- Build directory cleared (`npm run clean`)

**Output**:
- Bundle files in `/dist` directory
- Source maps in `/dist/maps`
- Build report in `/build-report.html`

**Example**:
```bash
# Clean previous build
npm run clean

# Generate production build
npm run build:production

# Expected output:
# ✓ TypeScript compilation complete
# ✓ Assets optimized (1.2MB → 340KB)
# ✓ Bundle generated: /dist/main.bundle.js
```
```

---

## Diagram and Visual Documentation

### Diagram Descriptions

All diagrams **must** include detailed text descriptions for AI comprehension.

**Format**:
```markdown
## System Architecture Diagram

**Visual**: [Link to diagram image]

**Text Description**:
The system architecture consists of three layers:

1. **Presentation Layer**:
   - React frontend application
   - Communicates via REST API
   - Deployed on CDN

2. **Application Layer**:
   - Node.js Express server
   - Handles business logic
   - JWT authentication middleware
   - Rate limiting and caching

3. **Data Layer**:
   - PostgreSQL primary database
   - Redis cache for sessions
   - S3 for file storage

**Data Flow**:
1. Client sends authenticated request to API Gateway
2. API Gateway validates JWT token
3. Request routed to appropriate microservice
4. Microservice queries PostgreSQL database
5. Response cached in Redis
6. JSON response returned to client
```

### ASCII Diagrams

For simple relationships, use ASCII diagrams with clear labels:

```markdown
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│   Client    │──────▶│  API Gateway │──────▶│   Backend   │
│  (Browser)  │◀──────│   (Express)  │◀──────│ (Services)  │
└─────────────┘       └──────────────┘       └─────────────┘
      │                       │                      │
      │                       │                      │
      ▼                       ▼                      ▼
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│    CDN      │       │     Redis    │       │ PostgreSQL  │
│  (Static)   │       │    (Cache)   │       │    (DB)     │
└─────────────┘       └──────────────┘       └─────────────┘
```

---

## Error Documentation

### Error Format

Document all error codes and messages systematically:

```markdown
## Error Codes

### E001: Invalid API Key

**Cause**: The provided API key is invalid or has been revoked.

**HTTP Status**: 401 Unauthorized

**Response**:
```json
{
  "error": {
    "code": "E001",
    "message": "Invalid API key",
    "details": "The API key provided in the Authorization header is not valid"
  }
}
```

**Resolution**:
1. Verify the API key is correct
2. Check if the key has been revoked in the dashboard
3. Generate a new API key if necessary

**Related**: See [Authentication Guide](./authentication.md) for API key management.
```

---

## Change Documentation

### Change Log Format

Document all significant changes with context:

```markdown
## Changes in Version 2.1.0

**Date**: 2026-03-15  
**Type**: Minor Release

### Added
- JWT refresh token rotation for enhanced security
- Rate limiting middleware with Redis backend
- Health check endpoint at `/api/health`

### Changed
- Updated PostgreSQL connection pooling configuration
- Improved error handling in authentication middleware
- Enhanced logging for debugging

### Fixed
- Resolved memory leak in WebSocket connections
- Fixed race condition in session management
- Corrected timezone handling in date formatting

### Breaking Changes
None

### Migration Guide
No migration steps required for this release.
```

---

## Review and Maintenance

### Documentation Review Cycle

- **Monthly**: Review for accuracy and relevance
- **Per Release**: Update version references and examples
- **Per Feature**: Add or update relevant documentation
- **Per Bug Fix**: Clarify or correct documentation errors

### Stale Content Detection

Flag documentation for review if:
- Last updated more than 6 months ago
- Referenced code has been significantly refactored
- User feedback indicates confusion
- Dependencies have major version updates

---

## AI Agent Guidelines

### Context Provision

When writing for AI consumption, provide explicit context:

```markdown
## Database Migration Process

**AI Context**: This section describes the automated database migration workflow 
using Flyway. The process handles schema versioning, rollback capabilities, and 
environment-specific migrations for PostgreSQL databases.

**Human Context**: Follow these steps to apply database migrations to your 
development, staging, or production environment.
```

### Deterministic Examples

Provide consistent, reproducible examples:

**✅ Deterministic**:
```markdown
**Example**: Generate API key for user with ID 12345:
```bash
curl -X POST https://api.example.com/keys \
  -H "Authorization: Bearer demo-token-abc123" \
  -d '{"userId": 12345}'
```

**Response**:
```json
{
  "apiKey": "ak_demo_xyz789",
  "expiresAt": "2026-12-31T23:59:59Z"
}
```
```

**❌ Non-Deterministic**:
```markdown
Call the API to generate a key and you'll get a response.
```

---

## Compliance and Standards

### Accessibility

- Provide alt text for all images
- Use semantic HTML in embedded examples
- Ensure color is not the only means of conveying information

### Security

- Never include real credentials, tokens, or sensitive data
- Use placeholder values clearly marked as examples
- Include warnings about security implications

### Licensing

- Ensure all code examples comply with project license
- Attribute third-party code or examples
- Include license headers where appropriate

---

## Enforcement

These guidelines are **mandatory** for all repository contributions. Pull requests that violate these standards will be rejected until compliance is achieved.

### Automated Checks

The following automated checks are enforced:
- Markdown linting (markdownlint)
- Broken link detection
- YAML front matter validation
- Code block language verification

### Manual Review

Documentation reviewers verify:
- Semantic clarity and active voice usage
- Self-contained section completeness
- AI-readiness and context provision
- Adherence to Markdown hierarchy

---

## Additional Resources

- [Changelog Guidelines](./Changelog-Guidelines.md) - Version history standards
- [README Guidelines](./Readme-Guidelines.md) - Project overview standards
- [GitHub Markdown Documentation](https://docs.github.com/en/get-started/writing-on-github)
- [Semantic Versioning Specification](https://semver.org/)

---

**Maintained By**: DevOps Team  
**Questions**: Contact documentation@example.com  
**Last Review**: 2026-03-15
