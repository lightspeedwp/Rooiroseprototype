# Accessibility

**Last updated**: 2026-03-02
**Version**: 1.0

## WCAG 2.1 AA Checklist

### Color Contrast
*   **Text on Background**: Must be at least 4.5:1.
    *   *Note*: Our primary red `#D70025` on white is 5.06:1 (Pass).
    *   *Note*: White text on `#D70025` is 5.06:1 (Pass).
*   **Large Text**: Must be at least 3:1.

### Navigation & Focus
*   All interactive elements must be focusable via Keyboard (`Tab`).
*   Focus rings must be visible (Tailwind `focus-visible:ring`).

### Images
*   **Alt Text**: Mandatory for all content images.
*   **Decorative Images**: Use `alt=""` or `aria-hidden="true"`.

### Headings
*   H1 is unique per page.
*   No skipping levels (H2 -> H3, not H2 -> H4).