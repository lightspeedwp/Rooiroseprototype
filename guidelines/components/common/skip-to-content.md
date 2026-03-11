# Skip To Content

**Last updated**: 2026-02-23
**Category**: Common (Accessibility)
**React source**: `/src/app/components/common/SkipToContent.tsx`
**WordPress target**: `wp_body_open()` hook in `functions.php`

---

## 1. Purpose

Two components for keyboard accessibility:

### `SkipToContent`
A visually hidden anchor link (`sr-only`) that becomes visible on keyboard focus. Links to `#main-content`. Text: "Spring na hoofinhoud". Styled with `bg-brand-red text-white font-bold rounded-md shadow-lg`.

### `MainContentWrapper`
Wraps page content in `<main id="main-content" tabIndex={-1}>` with `flex-grow` and the standard fluid `clamp(1rem, 4vw, 2rem)` horizontal padding.

## 2. Props

`SkipToContent`: None.
`MainContentWrapper`: `children: ReactNode`.

## 3. WordPress Mapping

Skip link: Add in `functions.php` via `wp_body_open` action:
```php
add_action('wp_body_open', function() {
    echo '<a href="#main-content" class="skip-link screen-reader-text">Spring na hoofinhoud</a>';
});
```

Main content wrapper: The `<main>` tag is part of each template file.

## 4. Dependencies

- **Consumed by**: `MainLayout.tsx`
