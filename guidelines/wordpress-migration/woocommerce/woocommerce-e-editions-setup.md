# WooCommerce E-Editions Configuration Guide

**Generated**: 2026-02-24
**Plugins Required**: WooCommerce Core, WooCommerce Subscriptions, WooCommerce Memberships

This document provides the complete WordPress + WooCommerce configuration for the _Die Papier_ e-editions purchase and access system. It covers product creation, membership plan setup, subscription configuration, template structure, and access control logic.

---

## Table of Contents

1. [Plugin Requirements](#1-plugin-requirements)
2. [WooCommerce Core Settings](#2-woocommerce-core-settings)
3. [Product Configuration](#3-product-configuration)
4. [WooCommerce Memberships Setup](#4-woocommerce-memberships-setup)
5. [WooCommerce Subscriptions Setup](#5-woocommerce-subscriptions-setup)
6. [Custom Post Type: `dp_eedition`](#6-custom-post-type-dp_eedition)
7. [Template Hierarchy](#7-template-hierarchy)
8. [Access Control Logic (PHP)](#8-access-control-logic-php)
9. [User Flow: Individual Purchase](#9-user-flow-individual-purchase)
10. [User Flow: Subscription Purchase](#10-user-flow-subscription-purchase)
11. [User Flow: Returning Reader](#11-user-flow-returning-reader)
12. [WooCommerce REST API Endpoints](#12-woocommerce-rest-api-endpoints)
13. [Email Configuration](#13-email-configuration)
14. [Testing Checklist](#14-testing-checklist)

---

## 1. Plugin Requirements

| Plugin                    | Version | Purpose                                               | License                |
| ------------------------- | ------- | ----------------------------------------------------- | ---------------------- |
| WooCommerce               | 9.x+    | Core e-commerce (products, cart, checkout, orders)    | Free                   |
| WooCommerce Subscriptions | 6.x+    | Recurring billing for subscription plans              | Paid (woocommerce.com) |
| WooCommerce Memberships   | 1.26+   | Content access control tied to products/subscriptions | Paid (woocommerce.com) |
| PayFast Payment Gateway   | Latest  | South African payment processing                      | Free                   |

### Plugin Interaction Diagram

```
┌────────────────────────┐
│  WooCommerce Core       │
│  (Products, Orders,     │
│   Cart, Checkout)       │
└───────┬────────────────┘
        │
   ┌────┴─────────────────────────────┐
   │                                   │
   ▼                                   ▼
┌──────────────────────┐  ┌──────────────────────────┐
│  WC Subscriptions     │  │  WC Memberships           │
│  (Recurring billing,  │──│  (Content access control,  │
│   renewal, suspension)│  │   restriction rules,       │
│                       │  │   member content areas)    │
└──────────────────────┘  └──────────────────────────┘
        │                          │
        │    ┌─────────────────────┘
        ▼    ▼
┌──────────────────────────────────┐
│  Integration: Subscription       │
│  status drives Membership        │
│  access (active/paused/expired)  │
└──────────────────────────────────┘
```

---

## 2. WooCommerce Core Settings

### General

```
WooCommerce → Settings → General:
├── Store Address: [Die Papier office address]
├── Currency: South African Rand (R)
├── Currency Position: Left with space (R 35.00)
└── Selling Location: Sell to South Africa (ZA) + Namibia (NA)
```

### Products

```
WooCommerce → Settings → Products:
├── Shop Page: [Set to /e-uitgawes archive page]
├── Add to Cart Behaviour:
│   ├── ☐ Redirect to the cart page after successful addition
│   └── ☑ Enable AJAX add to cart buttons on archives
└── Measurements: N/A (digital products)
```

### Accounts & Privacy

```
WooCommerce → Settings → Accounts & Privacy:
├── Guest Checkout:
│   ├── ☑ Allow customers to place orders without an account
│   └── ☑ Allow customers to log into an existing account during checkout
├── Account Creation:
│   ├── ☑ Allow customers to create an account during checkout
│   ├── ☑ When creating an account, automatically generate an account username based on email
│   └── ☑ When creating an account, automatically generate an account password
├── Account Erasure:
│   ├── ☑ Remove personal data from orders on request
│   └── ☑ Remove access to downloads on request
└── Privacy Policy:
    └── Set to /beleid/privaatheidsbeleid page
```

### Emails

```
WooCommerce → Settings → Emails:
├── From Name: Die Papier
├── From Address: bestel@diepapier.co.za
├── Header Image: [Die Papier logo URL]
├── Footer Text: © {year} Die Papier. Alle regte voorbehou.
└── Base Colour: #E82C27 (brand red)
```

### Payments

```
WooCommerce → Settings → Payments:
├── PayFast: ☑ Enabled
│   ├── Merchant ID: [From PayFast dashboard]
│   ├── Merchant Key: [From PayFast dashboard]
│   ├── Passphrase: [Security passphrase]
│   ├── Payment Type: Once Off + Subscription
│   └── Sandbox Mode: ☑ (for testing)
├── Direct Bank Transfer (EFT): ☑ Enabled
│   ├── Account Name: Die Papier (Pty) Ltd
│   ├── Bank: [Bank name]
│   ├── Account Number: [Number]
│   └── Branch Code: [Code]
└── All others: ☐ Disabled
```

---

## 3. Product Configuration

### 3.1 Individual E-Edition Products

Create one Simple Product per e-edition issue:

```
Product Type: Simple Product
├── General:
│   ├── Regular Price: 35 (R35.00)
│   ├── Sale Price: (leave blank)
│   └── Tax Status: Taxable (if applicable) or None
├── Inventory:
│   ├── SKU: DP-EE-2026-02-13 (pattern: DP-EE-YYYY-MM-DD)
│   ├── Manage Stock: ☐ (unlimited digital stock)
│   └── Sold Individually: ☑ (prevent buying same edition twice)
├── Shipping:
│   └── Virtual: ☑ (no shipping needed)
├── Linked Products:
│   └── Upsells: [Link to subscription products]
├── Advanced:
│   └── Purchase Note: "Jou e-uitgawe is nou beskikbaar in jou biblioteek. Gaan na My E-uitgawes om te lees."
└── Memberships:
    └── Grant Access: [Link to specific dp_eedition post] (see Section 4)
```

**Product naming convention:**

- Title: `Die Papier - 13 Februarie 2026`
- Slug: `die-papier-13-februarie-2026`
- Category: `E-Uitgawes`

**Automating product creation:**

Each `dp_eedition` CPT post should have a linked WooCommerce product. This can be managed via:

1. **Manual:** Editor creates both the `dp_eedition` post and the WC product, linking them via SCF fields.
2. **Semi-automated:** A custom function in the theme plugin that auto-creates a WC product when a `dp_eedition` post is published (recommended).

```php
// In die-papier-blocks/includes/class-eedition-product-sync.php
add_action('publish_dp_eedition', 'dp_auto_create_eedition_product', 10, 2);

function dp_auto_create_eedition_product($post_id, $post) {
    // Check if product already exists
    $existing_product_id = get_post_meta($post_id, '_dp_product_id', true);
    if ($existing_product_id) return;

    $product = new WC_Product_Simple();
    $product->set_name($post->post_title);
    $product->set_regular_price(35);
    $product->set_virtual(true);
    $product->set_sold_individually(true);
    $product->set_sku('DP-EE-' . get_post_meta($post_id, 'publication_date', true));
    $product->set_category_ids([/* E-Uitgawes category ID */]);
    $product->save();

    // Link product to dp_eedition post
    update_post_meta($post_id, '_dp_product_id', $product->get_id());
    // Also store reverse link
    update_post_meta($product->get_id(), '_dp_eedition_id', $post_id);
}
```

### 3.2 Subscription Products

Create three Subscription Products:

#### Product: "Digitale Intekening — 1 Maand"

```
Product Type: Simple Subscription
├── General:
│   ├── Subscription Price: R140
│   ├── Subscription Period: Every 1 month
│   ├── Subscription Length: Never expire (until cancelled)
│   ├── Sign-up Fee: R0
│   └── Free Trial: None
├── Inventory:
│   ├── SKU: DP-SUB-1M
│   └── Sold Individually: ☑
├── Shipping:
│   └── Virtual: ☑
└── Advanced:
    └── Purchase Note: "Welkom by Die Papier! Jou digitale intekening is aktief. Alle e-uitgawes is nou beskikbaar in jou biblioteek."
```

#### Product: "Digitale Intekening — 3 Maande"

```
Product Type: Simple Subscription
├── General:
│   ├── Subscription Price: R390
│   ├── Subscription Period: Every 3 months
│   ├── Subscription Length: Never expire
│   ├── Sign-up Fee: R0
│   └── Free Trial: None
├── Inventory:
│   └── SKU: DP-SUB-3M
└── (Same as 1 Maand for other fields)
```

#### Product: "Digitale Intekening — 12 Maande"

```
Product Type: Simple Subscription
├── General:
│   ├── Subscription Price: R1,400
│   ├── Subscription Period: Every 1 year
│   ├── Subscription Length: Never expire
│   ├── Sign-up Fee: R0
│   └── Free Trial: None
├── Inventory:
│   └── SKU: DP-SUB-12M
└── (Same as 1 Maand for other fields)
```

---

## 4. WooCommerce Memberships Setup

### 4.1 Membership Plan: "E-Uitgawe Intekenaar"

```
WooCommerce → Memberships → Membership Plans → Add New:

Plan Name: E-Uitgawe Intekenaar
Slug: e-uitgawe-intekenaar

Grant Access:
├── ☑ Product: "Digitale Intekening — 1 Maand"
├── ☑ Product: "Digitale Intekening — 3 Maande"
└── ☑ Product: "Digitale Intekening — 12 Maande"

Membership Length: Subscription length
(This ties the membership duration to the active subscription period)

Content Restriction Rules:
├── Rule 1:
│   ├── Type: Content Restriction
│   ├── Restrict: Post Type → dp_eedition (All)
│   ├── Accessible: Members only
│   └── Note: This restricts ALL e-edition content to subscribers
└── Rule 2:
    ├── Type: Purchasing Discount (optional)
    ├── Apply To: Product Category → E-Uitgawes
    └── Discount: 100% (subscribers get all editions free via membership)
```

### 4.2 Per-Product Access Grants (Individual Purchases)

For individual e-edition purchases, WooCommerce Memberships handles this via the **"Restrict Content"** meta box on each `dp_eedition` post:

```
On each dp_eedition post → Memberships tab:
├── Restrict to: "E-Uitgawe Intekenaar" plan
└── ☑ Also grant access when purchasing: [Linked WC Product]
```

This means:

- **Subscribers** get access via their active membership
- **Individual buyers** get access via the product purchase → membership grant

The membership grant for individual purchases creates a **separate user membership** with no expiry (permanent access to that specific edition).

### 4.3 Restriction Messages

Configure the restriction message that appears when a non-member tries to access restricted content:

```
WooCommerce → Memberships → Settings → Messages:

Content Restriction Message:
──────────────────────────────────────────
Hierdie e-uitgawe is slegs beskikbaar vir intekenare of kopers.

[Koop hierdie uitgawe vir R35]  [Teken in vanaf R140/maand]  [Teken in]
──────────────────────────────────────────
```

Custom restriction template (overrides default):

```php
// themes/die-papier-theme/parts/restricted-eedition.html
<!-- wp:group {"className":"dp-restricted-content","layout":{"type":"constrained"}} -->
<div class="wp-block-group dp-restricted-content">
    <!-- wp:heading {"level":3} -->
    <h3>Koop hierdie uitgawe om te lees</h3>
    <!-- /wp:heading -->

    <!-- wp:paragraph -->
    <p>Die volledige e-uitgawe is beskikbaar nadat jy dit gekoop het of op 'n aktiewe intekening is.</p>
    <!-- /wp:paragraph -->

    <!-- wp:buttons -->
    <div class="wp-block-buttons">
        <!-- wp:button {"className":"is-style-fill"} -->
        <div class="wp-block-button is-style-fill">
            <a class="wp-block-button__link" href="/e-uitgawes">Koop vir R35</a>
        </div>
        <!-- /wp:button -->

        <!-- wp:button {"className":"is-style-outline"} -->
        <div class="wp-block-button is-style-outline">
            <a class="wp-block-button__link" href="/inteken/e-uitgawe">Teken in</a>
        </div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

---

## 5. WooCommerce Subscriptions Setup

### 5.1 Global Subscription Settings

```
WooCommerce → Settings → Subscriptions:

Button Text:
├── Add to Cart: "Teken In"
├── Place Order: "Begin Intekening"
└── Switch Subscription: "Verander Plan"

Renewals:
├── ☑ Accept Manual Renewals (for EFT payments)
├── ☑ Turn off Automatic Payments (let user choose)
└── Retry Failed Payments: ☑ (3 attempts)

Switching:
├── ☑ Allow switching between subscription plans
├── Proration: Prorate first payment
└── Switch Button Text: "Verander na hierdie plan"

Miscellaneous:
├── Drip Content: ☐ (not needed — all editions accessible immediately)
├── Mixed Checkout: ☑ (allow subscription + non-subscription in same cart)
└── Multiple Subscriptions: ☐ (one subscription per customer)
```

### 5.2 Subscription Status → Membership Status Mapping

WooCommerce Subscriptions and Memberships integrate automatically:

| Subscription Status | Membership Status              | User Access                           |
| ------------------- | ------------------------------ | ------------------------------------- |
| `active`            | `active`                       | ✅ Full access to all e-editions      |
| `on-hold`           | `paused`                       | ❌ Access revoked temporarily         |
| `pending-cancel`    | `active` (until end of period) | ✅ Access continues until period ends |
| `cancelled`         | `expired` or `cancelled`       | ❌ Access revoked                     |
| `expired`           | `expired`                      | ❌ Access revoked                     |
| `switched`          | `active` (new plan)            | ✅ Access continues on new plan       |

### 5.3 PayFast Subscription Tokenisation

PayFast supports recurring billing via tokenisation:

```
PayFast Gateway Settings:
├── Subscription Support: ☑ Enabled
├── Tokenisation: ☑ Enabled
└── ITN (Instant Transaction Notification):
    └── URL: https://diepapier.co.za/?wc-api=WC_Gateway_PayFast
```

> **Note:** EFT (manual bank transfer) does NOT support automatic recurring billing. Customers on EFT will receive email reminders to manually renew. Configure WC Subscriptions to send renewal reminders 7 days before the renewal date.

---

## 6. Custom Post Type: `dp_eedition`

The `dp_eedition` CPT stores the e-edition content (Issuu embed, metadata). It is **separate** from the WC Product — the product handles commerce; the CPT handles content.

### SCF Fields (Secure Custom Fields)

| Field Name          | Type                     | Description                                       |
| ------------------- | ------------------------ | ------------------------------------------------- |
| `publication_date`  | Date                     | Publication date (YYYY-MM-DD)                     |
| `edition_number`    | Number                   | Sequential edition number                         |
| `page_count`        | Number                   | Number of pages                                   |
| `issuu_embed_url`   | URL                      | Full Issuu embed URL                              |
| `cover_image`       | Image                    | Cover image (WP media library)                    |
| `linked_product_id` | Post Object (WC Product) | The WC product for purchasing this edition        |
| `is_free`           | True/False               | Whether this edition is free (no purchase needed) |

### Registration (PHP)

```php
// In die-papier-blocks/includes/class-cpt-eedition.php
function dp_register_eedition_cpt() {
    register_post_type('dp_eedition', [
        'labels' => [
            'name'          => 'E-Uitgawes',
            'singular_name' => 'E-Uitgawe',
            'add_new_item'  => 'Voeg Nuwe E-Uitgawe By',
            'edit_item'     => 'Wysig E-Uitgawe',
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'e-uitgawe', 'with_front' => false],
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true, // Enable Block Editor
        'menu_icon'    => 'dashicons-media-text',
        'template'     => [
            ['core/paragraph', ['placeholder' => 'Voer die uitgawe beskrywing hier in...']],
        ],
    ]);
}
add_action('init', 'dp_register_eedition_cpt');
```

---

## 7. Template Hierarchy

### WordPress Block Theme Templates

```
themes/die-papier-theme/templates/
├── archive-dp_eedition.html      ← /e-uitgawes archive page
├── single-dp_eedition.html       ← /e-uitgawe/:slug single page
├── page-my-e-uitgawes.html       ← /my-e-uitgawes library page
├── page-inteken-e-uitgawe.html   ← /inteken/e-uitgawe subscription page
├── cart.html                      ← /mandjie (WooCommerce cart)
├── checkout.html                  ← /betaal (WooCommerce checkout)
└── order-confirmation.html        ← (auto-handled by WC Checkout block)

themes/die-papier-theme/parts/
├── eedition-reader.html           ← Issuu embed (shown when user has access)
├── eedition-locked.html           ← Locked preview CTA (shown when no access)
├── eedition-card.html             ← Edition card for archive grid
└── restricted-eedition.html       ← Custom restriction message
```

### `single-dp_eedition.html` Structure

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"className":"dp-single-eedition","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group dp-single-eedition">

    <!-- Breadcrumbs -->
    <!-- wp:die-papier/breadcrumbs /-->

    <!-- Product Section: Two-column layout -->
    <!-- wp:columns {"className":"dp-eedition-product"} -->
    <div class="wp-block-columns dp-eedition-product">

        <!-- Cover Image Column -->
        <!-- wp:column {"width":"400px"} -->
        <div class="wp-block-column" style="flex-basis:400px">
            <!-- wp:post-featured-image {"className":"dp-eedition-cover"} /-->
        </div>
        <!-- /wp:column -->

        <!-- Details Column -->
        <!-- wp:column -->
        <div class="wp-block-column">
            <!-- wp:post-title {"level":1} /-->
            <!-- wp:post-date /-->
            <!-- wp:post-excerpt /-->

            <!-- Dynamic: Add to Cart OR Purchased Banner -->
            <!-- wp:die-papier/eedition-purchase-cta /-->
        </div>
        <!-- /wp:column -->

    </div>
    <!-- /wp:columns -->

    <!-- Reader OR Locked Preview (dynamic based on access) -->
    <!-- wp:die-papier/eedition-content-gate /-->

    <!-- Social Share -->
    <!-- wp:die-papier/social-share /-->

    <!-- Related Editions -->
    <!-- wp:query {"queryId":0,"query":{"perPage":4,"postType":"dp_eedition","exclude":[/* current post */]}} -->
    <!-- wp:post-template -->
        <!-- wp:die-papier/eedition-card /-->
    <!-- /wp:post-template -->
    <!-- /wp:query -->

</div>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

---

## 8. Access Control Logic (PHP)

### Custom Block: `die-papier/eedition-content-gate`

This server-rendered block checks the user's access and renders either the reader or the locked preview:

```php
// die-papier-blocks/blocks/eedition-content-gate/render.php

<?php
$post_id = get_the_ID();
$has_access = false;

// Check 1: Is user logged in?
if (is_user_logged_in()) {
    // Check 2: Does user have an active membership that covers this post?
    if (function_exists('wc_memberships_is_user_active_member')) {
        $has_access = wc_memberships_is_user_active_member(
            get_current_user_id(),
            'e-uitgawe-intekenaar'
        );
    }

    // Check 3: Has user individually purchased this specific edition?
    if (!$has_access) {
        $product_id = get_post_meta($post_id, 'linked_product_id', true);
        if ($product_id) {
            $has_access = wc_customer_bought_product(
                '',
                get_current_user_id(),
                $product_id
            );
        }
    }

    // Check 4: Is this edition marked as free?
    if (!$has_access) {
        $is_free = get_post_meta($post_id, 'is_free', true);
        $has_access = ($is_free === '1' || $is_free === true);
    }
}

if ($has_access) {
    // Render the Issuu embed reader
    $issuu_url = get_post_meta($post_id, 'issuu_embed_url', true);
    ?>
    <section id="reader" class="dp-eedition-reader alignwide">
        <div class="dp-eedition-reader__embed">
            <div style="position:relative;padding-top:max(60%,326px);height:0;width:100%">
                <iframe
                    allow="clipboard-write"
                    sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                    allowfullscreen
                    style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0"
                    src="<?php echo esc_url($issuu_url); ?>"
                    title="<?php echo esc_attr(get_the_title()); ?>"
                ></iframe>
            </div>
        </div>
    </section>
    <?php
} else {
    // Render the locked preview
    $cover_url = get_the_post_thumbnail_url($post_id, 'large');
    $product_id = get_post_meta($post_id, 'linked_product_id', true);
    $product = $product_id ? wc_get_product($product_id) : null;
    $price = $product ? $product->get_price_html() : 'R 35.00';
    $add_to_cart_url = $product ? $product->add_to_cart_url() : '#';
    ?>
    <section class="dp-eedition-locked alignwide">
        <div class="dp-eedition-locked__bg">
            <img src="<?php echo esc_url($cover_url); ?>" alt="" class="dp-eedition-locked__bg-img" />
        </div>
        <div class="dp-eedition-locked__content">
            <div class="dp-eedition-locked__icon">
                <svg><!-- Lock icon SVG --></svg>
            </div>
            <h3>Koop hierdie uitgawe om te lees</h3>
            <p>Die volledige e-uitgawe is beskikbaar nadat jy dit gekoop het of op 'n aktiewe intekening is.</p>
            <div class="wp-block-buttons">
                <div class="wp-block-button is-style-fill">
                    <a href="<?php echo esc_url($add_to_cart_url); ?>" class="wp-block-button__link">
                        Koop vir <?php echo wp_kses_post($price); ?>
                    </a>
                </div>
                <div class="wp-block-button is-style-outline">
                    <a href="/inteken/e-uitgawe" class="wp-block-button__link">Teken in</a>
                </div>
            </div>
        </div>
    </section>
    <?php
}
?>
```

### Custom Block: `die-papier/eedition-purchase-cta`

```php
// die-papier-blocks/blocks/eedition-purchase-cta/render.php

<?php
$post_id = get_the_ID();
$product_id = get_post_meta($post_id, 'linked_product_id', true);
$product = $product_id ? wc_get_product($product_id) : null;

// Determine ownership (same logic as content-gate)
$has_access = false;
$access_type = null;

if (is_user_logged_in()) {
    if (function_exists('wc_memberships_is_user_active_member') &&
        wc_memberships_is_user_active_member(get_current_user_id(), 'e-uitgawe-intekenaar')) {
        $has_access = true;
        $access_type = 'subscription';
    }

    if (!$has_access && $product_id) {
        if (wc_customer_bought_product('', get_current_user_id(), $product_id)) {
            $has_access = true;
            $access_type = 'purchase';
        }
    }
}

if ($has_access) {
    // Purchased/Subscription state
    $message = ($access_type === 'subscription')
        ? 'Hierdie uitgawe is ingesluit by jou digitale intekening.'
        : 'Jy het hierdie uitgawe reeds gekoop.';
    ?>
    <div class="dp-eedition-cta dp-eedition-cta--owned">
        <div class="dp-eedition-cta__banner dp-eedition-cta__banner--success">
            <svg><!-- CheckCircle icon --></svg>
            <span><?php echo esc_html($message); ?></span>
        </div>
        <div class="wp-block-buttons">
            <div class="wp-block-button is-style-fill">
                <a href="#reader" class="wp-block-button__link">Lees nou</a>
            </div>
            <div class="wp-block-button is-style-outline">
                <a href="/my-e-uitgawes" class="wp-block-button__link">My biblioteek</a>
            </div>
        </div>
    </div>
    <?php
} else {
    // Not purchased state
    $price = $product ? $product->get_price_html() : 'R 35.00';
    $add_to_cart_url = $product ? '?add-to-cart=' . $product->get_id() : '#';
    ?>
    <div class="dp-eedition-cta dp-eedition-cta--purchase">
        <div class="dp-eedition-cta__price">
            <span class="dp-eedition-cta__amount"><?php echo wp_kses_post($price); ?></span>
            <span class="dp-eedition-cta__label">eenmalige aankoop</span>
        </div>
        <div class="wp-block-buttons">
            <div class="wp-block-button is-style-fill">
                <a href="<?php echo esc_url($add_to_cart_url); ?>" class="wp-block-button__link">
                    Voeg by mandjie — <?php echo wp_kses_post($price); ?>
                </a>
            </div>
            <div class="wp-block-button is-style-outline">
                <a href="/inteken/e-uitgawe" class="wp-block-button__link">Teken eerder in</a>
            </div>
        </div>
        <p class="dp-eedition-cta__upsell">
            Of teken in vanaf R140 per maand vir onbeperkte toegang tot alle e-uitgawes.
        </p>
    </div>
    <?php
}
?>
```

---

## 9. User Flow: Individual Purchase

### WordPress Sequence

```
1. User browses /e-uitgawes (archive-dp_eedition.html)
   └── Sees grid of edition cards with "Koop vir R35" buttons

2. User clicks on an edition card
   └── Navigates to /e-uitgawe/{slug} (single-dp_eedition.html)

3. Single e-edition page renders:
   ├── eedition-purchase-cta block checks: user NOT logged in or no access
   └── Renders: Price (R35) + "Voeg by mandjie" + "Teken eerder in"

4. User clicks "Voeg by mandjie"
   ├── WooCommerce adds the Simple Product to the cart
   ├── AJAX mini-cart updates in header
   └── Button changes to "Gaan na mandjie" (via JS)

5. User navigates to /mandjie (cart.html)
   ├── WooCommerce Cart block renders
   ├── Shows line item: "Die Papier - 13 Februarie 2026" — R35.00
   └── "Gaan na betaal" button

6. User clicks "Gaan na betaal" → /betaal (checkout.html)
   ├── WooCommerce Checkout block renders
   ├── Step 1: Contact (email, optional account creation checkbox)
   ├── Step 2: Billing address
   ├── Step 3: Payment (PayFast or EFT)
   └── "Plaas bestelling" button

7. Order processes:
   ├── WooCommerce creates Order (status: processing/completed)
   ├── If "Skep rekening" was checked: WP user account created
   ├── WC Memberships: grants access to the specific dp_eedition post
   └── Email sent: order confirmation + "Jou e-uitgawe is nou beskikbaar"

8. User sees /bestelling-bevestiging
   ├── Order summary (number, date, total)
   ├── "Lees jou e-uitgawe" link → /e-uitgawe/{slug}
   └── If guest: "Skep 'n rekening" banner
```

---

## 10. User Flow: Subscription Purchase

### WordPress Sequence

```
1. User visits /inteken/e-uitgawe (page-inteken-e-uitgawe.html)
   └── Sees 3 subscription plan cards (1M/3M/12M)

2. User clicks "Teken In" on a plan
   └── URL: /betaal/?add-to-cart={subscription_product_id}
       ├── WooCommerce auto-adds subscription product to cart
       └── Redirects directly to checkout (cart bypassed)

3. Checkout renders (/betaal):
   ├── Shows: "Digitale Intekening — 3 Maande" — R390.00 / every 3 months
   ├── PayFast required for recurring billing (EFT = manual renewal)
   └── "Begin Intekening" button

4. Subscription activates:
   ├── WooCommerce creates Subscription (status: active)
   ├── WC Memberships: creates "E-Uitgawe Intekenaar" membership (status: active)
   ├── User gains access to ALL dp_eedition posts immediately
   └── Email sent: subscription confirmation + welcome message

5. User sees /bestelling-bevestiging:
   ├── Subscription summary
   ├── "Gaan na My Biblioteek" link → /my-e-uitgawes
   └── Next payment date displayed

6. Recurring renewals:
   ├── PayFast: automatic charge via token
   ├── EFT: email reminder 7 days before due date
   └── Failed payment: 3 retry attempts, then on-hold → membership paused
```

---

## 11. User Flow: Returning Reader

```
1. User logs in (via /my-rekening or header login)

2. User navigates to /my-e-uitgawes
   ├── WC Memberships checks: user has active membership?
   │   ├── YES: Page renders with all accessible editions
   │   └── NO: Restricted content message shown
   └── Shows subscription status card + edition grid

3. User clicks "Lees" on an edition
   └── Navigates to /e-uitgawe/{slug}

4. Single page renders:
   ├── eedition-content-gate: checks access → HAS ACCESS
   ├── eedition-purchase-cta: shows green "Gekoop/Intekening" banner
   └── Issuu reader embed loads

5. User reads the edition in the embedded viewer
```

---

## 12. WooCommerce REST API Endpoints

For headless/decoupled front-end integration (if needed):

| Endpoint                                                   | Method | Purpose                            |
| ---------------------------------------------------------- | ------ | ---------------------------------- |
| `/wp-json/wc/v3/products?category=e-uitgawes`              | GET    | List all e-edition products        |
| `/wp-json/wc/v3/products/{id}`                             | GET    | Single product details             |
| `/wp-json/wc/v3/orders`                                    | POST   | Create an order                    |
| `/wp-json/wc/v3/subscriptions`                             | GET    | List user's subscriptions          |
| `/wp-json/wc-memberships/v1/members/me`                    | GET    | Current user's membership status   |
| `/wp-json/wc-memberships/v1/user-memberships/{id}/content` | GET    | Content accessible to a membership |

### Custom REST Endpoint: Check E-Edition Access

```php
// In die-papier-blocks/includes/class-rest-eedition-access.php
add_action('rest_api_init', function() {
    register_rest_route('dp/v1', '/eedition-access/(?P<post_id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'dp_check_eedition_access',
        'permission_callback' => function() {
            return is_user_logged_in();
        },
    ]);
});

function dp_check_eedition_access($request) {
    $post_id = $request->get_param('post_id');
    $user_id = get_current_user_id();

    $has_subscription = wc_memberships_is_user_active_member($user_id, 'e-uitgawe-intekenaar');

    $product_id = get_post_meta($post_id, 'linked_product_id', true);
    $has_purchased = $product_id
        ? wc_customer_bought_product('', $user_id, $product_id)
        : false;

    return rest_ensure_response([
        'has_access'   => $has_subscription || $has_purchased,
        'access_type'  => $has_subscription ? 'subscription' : ($has_purchased ? 'purchase' : null),
        'is_free'      => get_post_meta($post_id, 'is_free', true) === '1',
    ]);
}
```

---

## 13. Email Configuration

### Transactional Emails

| Trigger                       | Email                  | Subject (Afrikaans)                                     |
| ----------------------------- | ---------------------- | ------------------------------------------------------- |
| Individual purchase completed | New Order              | Bestelling #{order_number} bevestig — Die Papier        |
| Subscription activated        | New Subscription       | Welkom! Jou intekening is aktief — Die Papier           |
| Subscription renewal          | Renewal Order          | Intekening hernuwe — Bestelling #{order_number}         |
| Subscription renewal reminder | Custom                 | Hernuwingsherinnering: Jou intekening hernuwe oor 7 dae |
| Subscription cancelled        | Cancelled Subscription | Intekening gekanselleer — Die Papier                    |
| Subscription expired          | Expired Subscription   | Jou intekening het verval — Die Papier                  |
| Failed payment                | Failed Payment         | Betaling het misluk — aksie vereis                      |

### Custom Email Template Snippet

```php
// Add e-edition access link to order confirmation email
add_action('woocommerce_email_after_order_table', 'dp_add_eedition_link_to_email', 10, 4);

function dp_add_eedition_link_to_email($order, $sent_to_admin, $plain_text, $email) {
    if ($sent_to_admin) return;

    foreach ($order->get_items() as $item) {
        $product_id = $item->get_product_id();
        $eedition_id = get_post_meta($product_id, '_dp_eedition_id', true);

        if ($eedition_id) {
            $eedition_url = get_permalink($eedition_id);
            echo '<p><strong>Lees jou e-uitgawe:</strong> <a href="' . esc_url($eedition_url) . '">' . esc_html(get_the_title($eedition_id)) . '</a></p>';
        }
    }
}
```

---

## 14. Testing Checklist

### Pre-Launch Tests

- [ ] **Individual purchase (guest):** Browse → Add to cart → Checkout as guest → Order confirmed → Account created via email → Log in → Access e-edition reader
- [ ] **Individual purchase (logged in):** Browse → Add to cart → Checkout → Order confirmed → E-edition immediately accessible in library
- [ ] **Subscription purchase (1M):** Subscribe page → Select 1M → Checkout → PayFast payment → Subscription active → All editions accessible
- [ ] **Subscription purchase (3M):** Same flow, verify R390 charge and 3-month renewal period
- [ ] **Subscription purchase (12M):** Same flow, verify R1,400 charge and annual renewal period
- [ ] **Subscription cancellation:** Cancel → Membership expires at end of current period → Access revoked
- [ ] **Subscription renewal (PayFast):** Automatic charge → Membership remains active
- [ ] **Subscription renewal (EFT):** Reminder email sent → Manual payment → Admin confirms → Membership remains active
- [ ] **Failed payment:** PayFast charge fails → Retry attempts → On-hold → Membership paused → User notified
- [ ] **Content restriction (logged out):** Visit single e-edition → See locked preview + purchase CTA, NOT the reader
- [ ] **Content restriction (logged in, no access):** Visit single e-edition → See locked preview + purchase CTA
- [ ] **Content restriction (subscriber):** Visit any e-edition → See reader + "Intekening" banner
- [ ] **Content restriction (individual buyer):** Visit purchased e-edition → See reader + "Gekoop" banner; visit unpurchased edition → See locked preview
- [ ] **My Library (subscriber):** All editions visible, subscription status shown
- [ ] **My Library (individual buyer):** Only purchased editions visible
- [ ] **Archive page (subscriber):** Ownership badges shown on accessible editions
- [ ] **Duplicate purchase prevention:** Try to buy an edition already owned → Appropriate message/redirect
- [ ] **Mixed cart:** Add individual e-edition + subscription to same cart → Both process correctly
- [ ] **Email:** Verify all transactional emails send with correct Afrikaans content and links

---

_End of document._