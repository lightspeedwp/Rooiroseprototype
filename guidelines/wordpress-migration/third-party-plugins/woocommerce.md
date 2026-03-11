# WooCommerce Integration — Subscriptions, Memberships & Commerce

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0, Subscriptions 6.4.0, Memberships 1.26.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`
**Pricing Reference:** All prices must match `/guidelines/pricing.md`
**Related files:**
- `/guidelines/e-editions-user-journeys.md` — Full UX flows with state matrices
- `/guidelines/wordpress-migration/woocommerce/README.md` — WooCommerce blocks overview
- `/guidelines/wordpress-migration/woocommerce/cart.md` — Cart page pattern
- `/guidelines/wordpress-migration/woocommerce/checkout.md` — Checkout pattern
- `/guidelines/wordpress-migration/woocommerce/customer-account.md` — My Account dashboard

---

## 1. Plugin Dependencies

The `die-papier-blocks` plugin requires these commerce plugins to be active:

| Plugin | Version | Purpose | License |
|:-------|:--------|:--------|:--------|
| WooCommerce | 9.x+ | Base e-commerce, cart, checkout, orders | Free |
| WooCommerce Subscriptions | 6.x+ | Recurring billing engine for subscription products | Paid |
| WooCommerce Memberships | 1.26+ | Content access control layer tied to subscriptions/purchases | Paid |
| Payfast Payment Gateway | Latest | Payment gateway for South African card, EFT payments | Free ([WooCommerce Extension](https://woocommerce.com/products/payfast-payment-gateway/)) |

### Dependency Check (Plugin Bootstrap)

```php
// die-papier-blocks.php — add after plugin header

function dp_check_commerce_dependencies() {
    $missing = [];
    
    if ( ! class_exists( 'WooCommerce' ) ) {
        $missing[] = 'WooCommerce';
    }
    if ( ! class_exists( 'WC_Subscriptions' ) ) {
        $missing[] = 'WooCommerce Subscriptions';
    }
    if ( ! function_exists( 'wc_memberships' ) ) {
        $missing[] = 'WooCommerce Memberships';
    }
    
    if ( ! empty( $missing ) ) {
        add_action( 'admin_notices', function() use ( $missing ) {
            echo '<div class="notice notice-error"><p>';
            echo '<strong>Die Papier Blocks:</strong> Missing required plugins: ';
            echo implode( ', ', $missing );
            echo '. Commerce features are disabled.</p></div>';
        });
        return false;
    }
    return true;
}

// Call on init — gate commerce-specific includes
add_action( 'plugins_loaded', function() {
    if ( dp_check_commerce_dependencies() ) {
        require_once __DIR__ . '/inc/commerce-integration.php';
    }
}, 20 );
```

---

## 2. Access Levels

We have two primary ways users can access premium content:
1.  **Subscription (Membership):** Monthly/Quarterly/Annual recurring payment. Grants access to e-edition content published **from the subscriber's sign-up date onward** (not the full historical archive). Includes a 14-day free trial with access to max 2 e-editions.
2.  **Single Purchase (Pay-per-post):** One-time payment (R35). Grants access to a SPECIFIC e-edition issue.

---

## 3. WooCommerce Subscription Products

### 3.1 Product Definitions

Create these products in **WooCommerce > Products** (or via WXR import):

| Product Name (AF) | SKU | Type | Price | Billing Period | Membership Plan |
|:-------------------|:----|:-----|:------|:---------------|:----------------|
| Digitale Intekening — 1 Maand | `DP-SUB-1M` | Simple Subscription | R140 | Monthly | E-Uitgawe Intekenaar |
| Digitale Intekening — 3 Maande | `DP-SUB-3M` | Simple Subscription | R390 | Every 3 months | E-Uitgawe Intekenaar |
| Digitale Intekening — 12 Maande | `DP-SUB-12M` | Simple Subscription | R1,400 | Yearly | E-Uitgawe Intekenaar |

**Product Settings (all three):**
- Virtual: Yes
- Downloadable: No
- Sign-up Fee: R0
- Free Trial: 14 days (access to max 2 e-editions, card details required at sign-up). Payfast tokenisation required for trial-to-paid conversion.
- Subscription Length: Never expire (active while payment succeeds)
- Tax Status: Taxable (standard rate)

### 3.2 Single-Issue Products

For each e-edition, editors manually create a linked WooCommerce Simple Product:

| Field | Value |
|:------|:------|
| Product Name | `E-Uitgawe: {edition_date}` (e.g. "E-Uitgawe: 21 Feb 2026") |
| SKU | `DP-EE-YYYY-MM-DD` (e.g. `DP-EE-2026-02-21`) |
| Type | Simple Product (Virtual) |
| Price | R35 |
| Catalog Visibility | Hidden (not in shop, only accessible via e-edition page) |
| Linked `dp_eedition` | Post ID stored in product meta `_dp_eedition_post_id` |

**Reverse link:** The `dp_eedition` post stores `_linked_product_id` pointing to the WooCommerce product.

### 3.3 First E-Edition Product (Launch: 6 March 2026)

| Field | Value |
|:------|:------|
| Product Name | `E-Uitgawe: 6 Maart 2026` |
| SKU | `DP-EE-2026-03-06` |
| Type | Simple Product (Virtual) |
| Price | R35 |
| Publication Date | 2026-03-06 |
| Notes | First e-edition at launch. Created manually per workflow in section 3.4. |

### 3.4 Manual Product Creation Workflow (No Auto-Creation)

Editors create WooCommerce products **manually** for each e-edition. There is no auto-creation of products in the initial release.

**Editor workflow:**
1. **Create WooCommerce product** — WooCommerce > Products > Add New. Set product name (e.g., "E-Uitgawe: 21 Feb 2026"), SKU (`DP-EE-2026-02-21`), price (R35), virtual, hidden catalog visibility.
2. **Upload PDF to Issuu** — Upload the edition PDF to the Issuu.com account. Configure: embed visibility set to hidden (not publicly browsable on Issuu), PDF download enabled.
3. **Embed Issuu in product content** — Copy the Issuu embed code and paste it into the WooCommerce product content body (the main editor area). WooCommerce Memberships will control visibility of this content — only paying customers or subscribers will see the embed.
4. **Configure membership data** — In the product's "Memberships" meta box, link the product to the specific `dp_eedition` post using the `_dp_eedition_post_id` custom field. Set "Grant Access" rules as needed.
5. **Publish** — Publish the product. The e-edition page will now show the Issuu embed to authorised users and the purchase CTA to everyone else.

> **Note:** Auto-creation of products from `dp_eedition` posts may be implemented in a future release. For launch, manual creation ensures editorial control over product setup and Issuu embed configuration.

---

## 4. Membership Plans

### 4.1 Plan Configuration

Create in **WooCommerce > Memberships > Membership Plans**:

#### Plan A: "E-Uitgawe Intekenaar" (E-Edition Subscriber)

| Setting | Value |
|:--------|:------|
| Name | E-Uitgawe Intekenaar |
| Slug | `e-uitgawe-intekenaar` |
| Grant Access | On purchase of `DP-SUB-1M`, `DP-SUB-3M`, or `DP-SUB-12M` |
| Content Restriction | All `dp_eedition` posts |
| Length | Tied to subscription status |
| Roles | No role change (uses `subscriber` or `customer`) |

**Content Restriction Rules (set in Plan settings):**

| Rule Type | Content | Action |
|:----------|:--------|:-------|
| Content Restriction | Post Type: `dp_eedition` (All) | Restrict viewing |
| Content Restriction | Taxonomy: `dp_edition_type` (All terms) | Restrict viewing |

> **Note:** The "Gratis Geregistreer" metered access plan has been **removed from scope entirely**. Only the "E-Uitgawe Intekenaar" plan is implemented for launch.

> **Note:** Subscribers get access to editions published **on or after the membership start date** only. Subscribers do NOT get access to the full historical archive. Resubscribers only regain access from their latest subscription start date.

### 4.2 Single-Issue Access (Per-Product Grant)

When a user purchases a single-issue product (R35), they get access to **that specific `dp_eedition` post only** — not all editions.

**Implementation:** Use WooCommerce Memberships "Purchasing Product Grants Access" rules:

```php
/**
 * Grant access to specific dp_eedition when single-issue product is purchased.
 * 
 * Hook into order completion to create a user membership with
 * access to the specific e-edition post linked to the purchased product.
 */
function dp_grant_single_issue_access( $order_id ) {
    $order = wc_get_order( $order_id );
    if ( ! $order ) return;
    
    $user_id = $order->get_user_id();
    if ( ! $user_id ) return;
    
    foreach ( $order->get_items() as $item ) {
        $product_id = $item->get_product_id();
        $eedition_id = get_post_meta( $product_id, '_dp_eedition_post_id', true );
        
        if ( ! $eedition_id ) continue;
        
        // Store purchased edition IDs on user meta for quick access checks
        $purchased = get_user_meta( $user_id, '_dp_purchased_eeditions', true );
        if ( ! is_array( $purchased ) ) {
            $purchased = [];
        }
        if ( ! in_array( $eedition_id, $purchased ) ) {
            $purchased[] = $eedition_id;
            update_user_meta( $user_id, '_dp_purchased_eeditions', $purchased );
        }
    }
}
add_action( 'woocommerce_order_status_completed', 'dp_grant_single_issue_access' );
add_action( 'woocommerce_order_status_processing', 'dp_grant_single_issue_access' );
```

**Access Duration:** Permanent (no expiry) for individually purchased editions.

### 4.3 Access Check Logic (Unified)

The access check for any `dp_eedition` post follows this priority:

```
1. Is user an active "E-Uitgawe Intekenaar" member? -> FULL ACCESS (all editions)
2. Has user purchased this specific edition? -> SINGLE ACCESS (this edition only)
3. Is user an admin/editor? -> FULL ACCESS (editorial preview)
4. None of the above -> RESTRICTED (show access gate)
```

```php
/**
 * Check if current user can access a specific dp_eedition.
 *
 * @param int $eedition_id The dp_eedition post ID.
 * @return string 'subscription' | 'purchased' | 'admin' | 'restricted'
 */
function dp_get_eedition_access_status( $eedition_id = null ) {
    if ( ! $eedition_id ) {
        $eedition_id = get_the_ID();
    }
    
    $user_id = get_current_user_id();
    
    // Not logged in
    if ( ! $user_id ) {
        return 'restricted';
    }
    
    // Admin/Editor bypass
    if ( current_user_can( 'edit_posts' ) ) {
        return 'admin';
    }
    
    // Check 1: Active subscription membership
    if ( function_exists( 'wc_memberships_is_user_active_member' ) ) {
        if ( wc_memberships_is_user_active_member( $user_id, 'e-uitgawe-intekenaar' ) ) {
            return 'subscription';
        }
    }
    
    // Check 2: Individual purchase
    $purchased = get_user_meta( $user_id, '_dp_purchased_eeditions', true );
    if ( is_array( $purchased ) && in_array( $eedition_id, $purchased ) ) {
        return 'purchased';
    }
    
    return 'restricted';
}
```

---

## 5. User Roles

*   **Administrator:** Full access.
*   **Editor/Author:** Content management.
*   **Subscriber:** Default role for paid/free users. Access controlled by Membership Plan, not WP Role capabilities.
*   **Customer:** WooCommerce default.

---

## 6. Custom Blocks for Commerce

### 6.1 `dp/eedition-access` — E-Edition Access Gate

This is the **primary commerce block**. It wraps the Flipbook viewer and handles all access states.

**Location:** `src/blocks/eedition-access/`

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "dp/eedition-access",
  "title": "E-Uitgawe Toegangshek",
  "category": "die-papier",
  "description": "Access-gated e-edition content with purchase/subscribe CTA fallback",
  "supports": { "html": false, "align": false },
  "attributes": {
    "showPricingTable": {
      "type": "boolean",
      "default": true
    }
  },
  "usesContext": ["postId", "postType"],
  "render": "file:./render.php"
}
```

**`render.php` — Four render states:**

```php
<?php
$post_id = $block->context['postId'];
$access  = dp_get_eedition_access_status( $post_id );

switch ( $access ) {
    case 'subscription':
    case 'purchased':
    case 'admin':
        // -- Full Access: Render Issuu Embed --
        // The Issuu embed is stored in the linked WooCommerce product's content body.
        // Editors paste the Issuu embed code directly into the product content.
        $product_id = get_post_meta( $post_id, '_linked_product_id', true );
        $product = $product_id ? wc_get_product( $product_id ) : null;
        ?>
        <div class="dp-eedition-viewer">
            <?php if ( $access === 'admin' ) : ?>
                <div class="dp-admin-badge">Admin-voorskou</div>
            <?php endif; ?>
            
            <?php if ( $access === 'purchased' ) : ?>
                <div class="dp-access-badge dp-access-badge--purchased">Gekoop</div>
            <?php else : ?>
                <div class="dp-access-badge dp-access-badge--subscription">Intekenaar</div>
            <?php endif; ?>
            
            <?php if ( $product ) : ?>
                <div class="dp-eedition-reader" id="reader">
                    <?php echo apply_filters( 'the_content', $product->get_description() ); ?>
                </div>
            <?php endif; ?>
            
            <?php if ( $access === 'purchased' ) : ?>
                <div class="dp-upsell-banner">
                    <p>Wil jy elke week lees? 
                       <a href="/inteken/e-uitgawe">Teken in vanaf R140/pm</a> 
                       vir onbeperkte toegang.
                    </p>
                </div>
            <?php endif; ?>
        </div>
        <?php
        break;
        
    case 'restricted':
    default:
        // -- Access Gate: Render CTA --
        $product_id = get_post_meta( $post_id, '_linked_product_id', true );
        $product_price = $product_id ? wc_price( get_post_meta( $product_id, '_regular_price', true ) ) : 'R35';
        ?>
        <div class="dp-eedition-access-gate">
            <!-- No teaser/preview content -- users see cover image, metadata, and purchase CTAs only -->
            <div class="dp-access-gate-lock">
                <svg class="dp-lock-icon" width="48" height="48"><!-- lock icon --></svg>
                <h3>Hierdie uitgawe is slegs beskikbaar vir intekenare</h3>
                <p>Teken in vir onbeperkte toegang tot alle e-uitgawes, of koop hierdie uitgawe afsonderlik.</p>
            </div>
            
            <div class="dp-access-gate-actions">
                <a href="/inteken/e-uitgawe" class="wp-block-button__link is-style-default">
                    Teken In (vanaf R140/pm)
                </a>
                
                <?php if ( $product_id ) : ?>
                    <a href="<?php echo esc_url( wc_get_cart_url() . '?add-to-cart=' . $product_id ); ?>" 
                       class="wp-block-button__link is-style-outline">
                        Koop Hierdie Uitgawe (<?php echo $product_price; ?>)
                    </a>
                <?php endif; ?>
                
                <?php if ( ! is_user_logged_in() ) : ?>
                    <a href="/my-rekening" class="dp-access-gate-login-link">
                        Reeds 'n intekenaar? <strong>Meld aan</strong>
                    </a>
                <?php endif; ?>
            </div>
            
            <?php if ( $attributes['showPricingTable'] ?? true ) : ?>
                <!-- wp:dp/pricing-table {"context":"eedition"} /-->
            <?php endif; ?>
        </div>
        <?php
        break;
}
?>
```

### 6.2 `dp/pricing-table` — Subscription Pricing Table

**Location:** `src/blocks/pricing-table/`

Renders the three subscription tiers with WooCommerce add-to-cart URLs.

```json
{
  "name": "dp/pricing-table",
  "title": "Prystafel",
  "attributes": {
    "context": {
      "type": "string",
      "enum": ["eedition", "delivery", "full"],
      "default": "eedition"
    },
    "highlightPlans": {
      "type": "array",
      "items": { "type": "string" },
      "default": ["DP-SUB-3M", "DP-SUB-12M"]
    },
    "showSavings": {
      "type": "boolean",
      "default": true
    }
  },
  "render": "file:./render.php"
}
```

**`render.php` — Dynamic product lookup:**

```php
<?php
$context = $attributes['context'] ?? 'eedition';
$highlights = $attributes['highlightPlans'] ?? ['DP-SUB-3M', 'DP-SUB-12M'];

// Look up subscription products by SKU
$plans = [
    [
        'sku'      => 'DP-SUB-1M',
        'label'    => '1 Maand',
        'period'   => 'per maand',
        'features' => ['Alle e-uitgawes vanaf intekening', 'Enige toestel', '14-dae proeftydperk'],
    ],
    [
        'sku'      => 'DP-SUB-3M',
        'label'    => '3 Maande',
        'period'   => 'per kwartaal',
        'savings'  => 'Spaar R30',
        'features' => ['Alle e-uitgawes vanaf intekening', 'Enige toestel', '14-dae proeftydperk'],
    ],
    [
        'sku'      => 'DP-SUB-12M',
        'label'    => '12 Maande',
        'period'   => 'per jaar',
        'savings'  => 'Spaar R420',
        'badge'    => 'Beste waarde',
        'features' => ['Alle e-uitgawes vanaf intekening', 'Enige toestel', '14-dae proeftydperk'],
    ],
];

foreach ( $plans as &$plan ) {
    $product_id = wc_get_product_id_by_sku( $plan['sku'] );
    if ( $product_id ) {
        $product = wc_get_product( $product_id );
        $plan['price']     = $product->get_price();
        $plan['add_to_cart'] = wc_get_checkout_url() . '?add-to-cart=' . $product_id;
    }
}
unset( $plan );

// Render pricing cards (template in render.php)
?>
<div class="dp-pricing-table dp-pricing-table--<?php echo esc_attr( $context ); ?>">
    <?php foreach ( $plans as $plan ) : 
        $is_highlighted = in_array( $plan['sku'], $highlights );
    ?>
        <div class="dp-pricing-card <?php echo $is_highlighted ? 'dp-pricing-card--highlighted' : ''; ?>">
            <?php if ( ! empty( $plan['badge'] ) ) : ?>
                <div class="dp-pricing-badge"><?php echo esc_html( $plan['badge'] ); ?></div>
            <?php endif; ?>
            
            <h3><?php echo esc_html( $plan['label'] ); ?></h3>
            <div class="dp-pricing-amount">
                <span class="dp-pricing-currency">R</span>
                <span class="dp-pricing-value"><?php echo esc_html( $plan['price'] ?? '---' ); ?></span>
                <span class="dp-pricing-period"><?php echo esc_html( $plan['period'] ); ?></span>
            </div>
            
            <?php if ( ! empty( $plan['savings'] ) && ( $attributes['showSavings'] ?? true ) ) : ?>
                <div class="dp-pricing-savings"><?php echo esc_html( $plan['savings'] ); ?></div>
            <?php endif; ?>
            
            <ul class="dp-pricing-features">
                <?php foreach ( $plan['features'] as $feature ) : ?>
                    <li><?php echo esc_html( $feature ); ?></li>
                <?php endforeach; ?>
            </ul>
            
            <a href="<?php echo esc_url( $plan['add_to_cart'] ?? '/inteken/e-uitgawe' ); ?>" 
               class="wp-block-button__link <?php echo $is_highlighted ? 'is-style-default' : 'is-style-outline'; ?>">
                Teken In
            </a>
        </div>
    <?php endforeach; ?>
</div>
```

### 6.3 `dp/subscription-cta` — Subscription Call-to-Action

Smaller inline CTA block for placing in sidebars, archive pages, and article footers.

```json
{
  "name": "dp/subscription-cta",
  "title": "Intekening CTA",
  "attributes": {
    "heading": { "type": "string", "default": "Wil jy elke week lees?" },
    "description": { "type": "string", "default": "Teken in en kry onbeperkte toegang tot alle e-uitgawes vanaf jou intekeningdatum." },
    "buttonText": { "type": "string", "default": "Teken In" },
    "buttonUrl": { "type": "string", "default": "/inteken/e-uitgawe" },
    "variant": { "type": "string", "enum": ["navy", "red", "minimal"], "default": "navy" }
  },
  "render": "file:./render.php"
}
```

### 6.4 `dp/user-library` — My E-Editions Library

Server-rendered block that displays the current user's purchased and subscription-accessible editions.

```json
{
  "name": "dp/user-library",
  "title": "My E-Uitgawes Biblioteek",
  "attributes": {
    "showSubscriptionBanner": { "type": "boolean", "default": true },
    "showPurchasedSection": { "type": "boolean", "default": true },
    "editionsPerPage": { "type": "number", "default": 12 }
  },
  "render": "file:./render.php"
}
```

**Access logic in `render.php`:**

```php
<?php
$user_id = get_current_user_id();

if ( ! $user_id ) {
    // Not logged in -- show login CTA
    get_template_part( 'parts/login-cta', 'eedition' );
    return;
}

$is_subscriber = wc_memberships_is_user_active_member( $user_id, 'e-uitgawe-intekenaar' );
$purchased_ids = get_user_meta( $user_id, '_dp_purchased_eeditions', true ) ?: [];

// Query editions the user can access
$args = [
    'post_type'      => 'dp_eedition',
    'posts_per_page' => $attributes['editionsPerPage'] ?? 12,
    'orderby'        => 'meta_value',
    'meta_key'       => 'publication_date',
    'order'          => 'DESC',
];

if ( ! $is_subscriber ) {
    // Non-subscriber: only show purchased editions
    if ( empty( $purchased_ids ) ) {
        // No purchases -- show empty state with subscribe CTA
        get_template_part( 'parts/empty-library' );
        return;
    }
    $args['post__in'] = $purchased_ids;
}

$editions = new WP_Query( $args );
// ... render grid of edition cards with "Lees" buttons ...
?>
```

---

## 7. Frontend Implementation

### 7.1 Restricted Content Block

When a user views a restricted `dp_eedition` post without access, they see the **Restricted Content Message**.
We will style this message using a custom block template part: `parts/restricted-content.html`.

**Content (no teaser/preview -- users see cover image, metadata, and purchase CTAs only):**
1.  **Cover image & metadata:** Edition cover, title, date, page count visible to all.
2.  **Lock Icon:** Visual indicator.
3.  **CTA:** "Hierdie uitgawe is slegs beskikbaar vir intekenare of moet afsonderlik gekoop word."
4.  **Buttons:**
    *   "Teken In (vanaf R140/pm)" -> Link to `/inteken/e-uitgawe`.
    *   "Koop Hierdie Uitgawe (R35)" -> Link to Single Product / Add-to-cart.
    *   "Reeds 'n intekenaar? Meld aan" -> Link to `/my-rekening` (login page).

### 7.2 Subscription CTA Block

The `dp/subscription-cta` block is placed on the single e-edition template BELOW the locked preview. It provides a more detailed value proposition than the restricted content message.
See [Block Mapping section 3.7](/guidelines/wordpress-migration/block-mapping.md) for full attribute definition.

### 7.3 Restriction Message Customization

```php
/**
 * Customize Restricted Content Message for E-Editions
 */
function dp_custom_restriction_message($message, $post) {
    if ( get_post_type( $post ) === 'dp_eedition' ) {
        ob_start();
        get_template_part('parts/restricted-content-eedition');
        return ob_get_clean();
    }
    return $message;
}
add_filter('wc_memberships_restricted_content_message', 'dp_custom_restriction_message', 10, 2);
```

---

## 8. Checkout Flow Customization

### 8.1 Subscription Checkout

WooCommerce Subscriptions modifies the standard checkout to show:
- Recurring billing summary
- Payment method selection (card required for recurring)
- Terms & Conditions acceptance

**Theme customization (`functions.php`):**

```php
/**
 * Customize subscription checkout strings (Afrikaans).
 */
function dp_subscription_checkout_strings( $translated, $text, $domain ) {
    if ( $domain !== 'woocommerce-subscriptions' ) return $translated;
    
    $replacements = [
        'Sign up now'                => 'Teken nou in',
        'Your subscription'          => 'Jou intekening',
        'Recurring total'            => 'Herhalende totaal',
        'First renewal'              => 'Eerste hernuwing',
        'Subscription Length'        => 'Intekeningperiode',
        'Sign Up Fee'                => 'Registrasiefooi',
        'Free Trial'                 => 'Gratis proeftydperk',
    ];
    
    return $replacements[ $text ] ?? $translated;
}
add_filter( 'gettext', 'dp_subscription_checkout_strings', 20, 3 );
```

### 8.2 Single-Issue Checkout

Standard WooCommerce checkout. No modifications needed beyond theming.

**Add-to-cart URL pattern:**
```
/betaal/?add-to-cart={product_id}
```

This is used on the `dp/eedition-access` block's "Koop Hierdie Uitgawe" button.

---

## 9. My Account Integration

### 9.1 Custom Endpoints

Add e-edition management to the WooCommerce My Account page:

```php
/**
 * Add "My E-Uitgawes" tab to WooCommerce My Account.
 */
function dp_add_eeditions_endpoint() {
    add_rewrite_endpoint( 'my-e-uitgawes', EP_ROOT | EP_PAGES );
}
add_action( 'init', 'dp_add_eeditions_endpoint' );

function dp_add_eeditions_menu_items( $items ) {
    // Insert after "Downloads"
    $new_items = [];
    foreach ( $items as $key => $value ) {
        $new_items[ $key ] = $value;
        if ( $key === 'downloads' ) {
            $new_items['my-e-uitgawes'] = 'My E-Uitgawes';
        }
    }
    return $new_items;
}
add_filter( 'woocommerce_account_menu_items', 'dp_add_eeditions_menu_items' );

function dp_eeditions_endpoint_content() {
    // Render the dp/user-library block
    echo do_blocks( '<!-- wp:dp/user-library /-->' );
}
add_action( 'woocommerce_account_my-e-uitgawes_endpoint', 'dp_eeditions_endpoint_content' );
```

### 9.2 Subscription Management

Users manage their subscription via the standard WooCommerce Subscriptions "My Subscriptions" tab:
- View active subscription details
- Cancel / pause / reactivate
- Update payment method
- View billing history

No custom development needed -- WooCommerce Subscriptions handles this natively.

---

## 10. Email Notifications

### 10.1 Subscription Emails

WooCommerce Subscriptions sends these automatically:

| Email | Trigger | Customization |
|:------|:--------|:-------------|
| New Subscription | Purchase complete | Subject: "Welkom by Die Papier E-Uitgawes!" |
| Subscription Renewal | Successful renewal | Subject: "Jou intekening is hernu" |
| Subscription Cancelled | User cancels | Subject: "Jou intekening is gekanselleer" |
| Payment Failed | Card declined | Subject: "Betaling onsuksesvol -- werk asb jou kaartbesonderhede by" |
| Subscription Expired | End of term | Subject: "Jou intekening het verval" |

**Template overrides:** Place in `themes/die-papier-theme/woocommerce/emails/` to match brand styling.

### 10.2 Purchase Confirmation Email

For single-issue purchases, the standard WooCommerce "Order Complete" email includes a link to the purchased e-edition:

```php
/**
 * Add e-edition link to order confirmation email.
 */
function dp_add_eedition_link_to_email( $order, $sent_to_admin ) {
    if ( $sent_to_admin ) return;
    
    foreach ( $order->get_items() as $item ) {
        $product_id  = $item->get_product_id();
        $eedition_id = get_post_meta( $product_id, '_dp_eedition_post_id', true );
        
        if ( $eedition_id ) {
            echo '<p><strong>Lees jou e-uitgawe:</strong> ';
            echo '<a href="' . get_permalink( $eedition_id ) . '">Klik hier om te lees</a></p>';
        }
    }
}
add_action( 'woocommerce_email_after_order_table', 'dp_add_eedition_link_to_email', 10, 2 );
```

---

## 11. Webhook / Automation Events

### 11.1 Subscription Status Changes

Listen for status changes to update membership access in real-time:

| WooCommerce Hook | Action |
|:-----------------|:-------|
| `woocommerce_subscription_status_active` | Ensure membership is active |
| `woocommerce_subscription_status_on-hold` | Pause membership (grace period) |
| `woocommerce_subscription_status_cancelled` | Revoke membership access |
| `woocommerce_subscription_status_expired` | Revoke membership access |
| `woocommerce_subscription_status_pending-cancel` | Show "expiring soon" notice |

WooCommerce Memberships handles most of these automatically when tied to a subscription product. Manual hooks are only needed for custom behavior (e.g., sending a "win-back" email 7 days after cancellation).

### 11.2 New Edition Published

When a new `dp_eedition` is published, the editor follows the manual workflow in section 3.4:

1. Editor manually creates WooCommerce product with Issuu embed (see section 3.4)
2. Send notification to active subscribers via **WooCommerce email** (custom email class -- no MailPoet)
3. Update archive page cache

```php
/**
 * Notify subscribers when new e-edition is published.
 */
function dp_notify_subscribers_new_edition( $post_id, $post ) {
    if ( $post->post_type !== 'dp_eedition' || $post->post_status !== 'publish' ) {
        return;
    }
    
    // Send via custom WooCommerce email to active 'e-uitgawe-intekenaar' members
    $mailer = WC()->mailer();
    $email  = $mailer->emails['DP_Email_New_Edition'] ?? null;
    if ( $email ) {
        $email->trigger( $post_id );
    }
}
add_action( 'wp_insert_post', 'dp_notify_subscribers_new_edition', 20, 2 );
```

---

## 12. Archive Page Commerce Integration

The e-editions archive page renders differently based on auth state:

| State | Behaviour |
|:------|:----------|
| **Logged out** | All editions visible. "Koop" buttons add to cart. CTA banner for subscription. |
| **Subscriber** | All editions visible. "Lees" buttons link directly. Green "Intekenaar" badge on cards. No purchase CTAs. |
| **Trial user** | Max 2 editions accessible with "Proef" badge. Other editions show "Koop (R35)". Trial countdown banner + "Opgradeer" CTA. |
| **Expired subscriber** | All editions show "Koop (R35)". Re-subscribe banner at top with "Hernu intekening" CTA. |
| **Non-subscriber, has purchases** | All visible. Purchased editions show "Lees". Others show "Koop (R35)". Sidebar subscribe CTA. |
| **Non-subscriber, no purchases** | All visible. All show "Koop (R35)". Prominent subscribe CTA. |

---

## 13. Cross-References

| Document | Relevance |
|----------|-----------|
| `/guidelines/pricing.md` | Canonical prices -- all amounts in this doc must match |
| `/guidelines/e-editions-user-journeys.md` | Full UX specs, state matrices, and WooCommerce mapping |
| `/guidelines/wordpress-migration/block-mapping.md` section 3.7 | `dp/subscription-cta` block definition |
| `/guidelines/wordpress-migration/woocommerce/README.md` | WooCommerce blocks overview |
| `/guidelines/wordpress-migration/woocommerce/cart.md` | Cart page pattern & blocks |
| `/guidelines/wordpress-migration/woocommerce/checkout.md` | Checkout pattern & blocks |
| `/wordpress-export/config/woocommerce-e-editions-setup.md` | WooCommerce product setup guide |

---

**End of WooCommerce Integration Guide**
