# Interactive Components

**Last updated**: 2026-03-02
**Version**: 1.0

Components that require user input or complex state management.

## `NewsletterSignup` / `NewsletterContainer`
*   **Path**: `/src/app/components/newsletter/NewsletterContainer.tsx`
*   **Description**: Email subscription form with "Naam" and "E-pos" fields.
*   **WordPress Conversion**:
    *   **Type**: Block / Shortcode.
    *   **Strategy**: Use Gravity Forms or Mailchimp for WP block. Style it to match the React component using `theme.json` button and input styles.

## `ProductCard` (E-uitgawes)
*   **Path**: *Implied in E-Commerce flow*
*   **Description**: Display for Digital Editions. Shows cover image, price, and "Add to Cart".
*   **WordPress Conversion**:
    *   **Type**: WooCommerce Block.
    *   **Strategy**: Use "Hand-picked Products" or "All Products" block. Customize the inner block template to match the `ProductCard` design.

## `CartSheet` (in Header)
*   **Path**: `/src/app/components/parts/Header.tsx` (Inline)
*   **Description**: Slide-out drawer showing cart contents.
*   **WordPress Conversion**:
    *   **Type**: WooCommerce Mini-Cart Block.
    *   **Strategy**: The native WooCommerce Mini-Cart block supports a drawer mode that mimics this behavior.

## `CheckoutLayout`
*   **Path**: `/src/app/components/layouts/CheckoutLayout.tsx`
*   **Description**: Wrapper for the checkout process, removing distractions (no main nav, simple footer).
*   **WordPress Conversion**:
    *   **Type**: Page Template.
    *   **Strategy**: Create a `page-checkout.html` template in the theme that omits the standard Header/Footer parts.

## `SocialShare`
*   **Path**: `/src/app/components/common/SocialShare.tsx`
*   **Description**: Facebook/Twitter/WhatsApp share buttons on single articles.
*   **WordPress Conversion**:
    *   **Type**: Block Plugin.
    *   **Strategy**: Use a sharing block (e.g., "Sharing Buttons" from Jetpack or a lightweight alternative) placed in the `single.html` template.