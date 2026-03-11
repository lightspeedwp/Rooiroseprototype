# Prototype Content Export Guidelines

**Last updated**: 2026-03-02
**Version**: 1.0

## 1. Objective
To maintain a 1:1 synchronization between the React Prototype hardcoded data (`/src/app/data/`) and the Markdown documentation (`/content/`). These files serve as the source of truth for Content Editors.

## 2. Directory Structure
- **Pages**: All static page content goes into `/content/pages/{page-slug}.md`.
- **Global**: Global elements (Header/Footer/Menus) go into `/content/global/`.
- **Collections**: Dynamic data (News, Events) goes into `/content/{post-type}/`.

## 3. Formatting Rules
- **Verbatim Extraction**: Do not summarize. Copy text exactly as it appears in the React data files.
- **Frontmatter**: Every file must start with YAML frontmatter:
  ```yaml
  ---
  title: "Page Title"
  slug: "page-slug"
  template: "page-default" (or specific template)
  status: "draft" | "ready"
  ---
  ```

## 4. WordPress Implementation Mapping
Every content section MUST include a specialized "Dev Note" block describing how it maps to WordPress.

**Format:**
> **🛠 WP Implementation:**
> - **Block:** `core/heading`, `core/paragraph`, `dp/custom-block`
> - **Pattern:** `die-papier/pattern-name` (if applicable)
> - **Field Source:** `post_content`, `ACF Field`, or `Hardcoded Pattern`

## 5. Special Handling
- **About Page**: Ensure the "History", "Team", and "Manifesto" sections are separated with distinct headers.
- **Lists**: Convert React array maps into Markdown lists.
- **Images**: Describe the image placeholder used in React (e.g., "Image: `figma:asset/xyz` (Team Photo)").