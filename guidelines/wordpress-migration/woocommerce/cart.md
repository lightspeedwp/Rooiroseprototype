# WooCommerce Cart

**Last updated**: 2026-03-02
**Version**: 1.0
**Version at launch**: WooCommerce 9.6.0
**Template**: `/guidelines/_templates/plugin-guideline-template.md`

---

## Cart Pattern (`woo-cart.php`)

**Slug**: `die-papier/woo-cart`
**Category**: `die-papier-woocommerce`
**Used in**: `page-cart.html`
**Template Types**: `page-cart`
**Inserter**: `false`

Full cart page layout (pattern-first, includes header/footer) with:
- Page header with breadcrumbs and "Gaan voort met inkopies" link
- `woocommerce/page-content-wrapper` (page: cart) — ensures WC cart block renders correctly
- `woocommerce/store-notices` — global error/success messages
- `wp:post-content` — renders the WC cart block from the page
- Afrikaans strings: "Mandjie", "Gaan voort met inkopies"

### Block Attributes

```json
{
  "isShippingCalculatorEnabled": false,
  "showRateAfterTaxName": false,
  "checkoutPageId": 123,
  "hasDarkControls": false
}
```

**Die Papier Settings**:
- `isShippingCalculatorEnabled`: `false` (e-editions are digital, no shipping)
- `checkoutPageId`: Set to ID of `/betaal` page

---

## Empty Cart Pattern (`woo-empty-cart.php`)

**Slug**: `die-papier/woo-empty-cart`
**Category**: `die-papier-woocommerce`
**Used in**: Cart page (empty state override)

Empty cart state with:
- Heading: "Jou mandjie is leeg"
- CTA: "Teken in vir e-uitgawes" (links to `/inteken/e-uitgawe`)
- Benefits section: 3-column grid (Lees oral, Spaar geld, Veilig betaal)
- Pricing cards: 3 subscription tiers (same as `woo-subscription-pricing-table`)

**Block Structure**:
```html
<!-- wp:group {"align":"full"} -->
  <!-- Empty cart message + CTAs -->
  
  <!-- Benefits section -->
  <!-- wp:columns -->
    <!-- Benefit 1: Lees oral -->
    <!-- Benefit 2: Spaar geld -->
    <!-- Benefit 3: Veilig betaal -->
  <!-- /wp:columns -->
<!-- /wp:group -->

<!-- wp:group {"className":"is-style-section-muted"} -->
  <!-- Pricing cards (3 tiers) -->
<!-- /wp:group -->
```

---

## PHP Integration

### Cart Item Thumbnail (E-Edition Cover)

```php
function diepapier_cart_item_thumbnail( $thumbnail, $cart_item, $cart_item_key ) {
    $product_id = $cart_item['product_id'];
    $eedition_id = get_post_meta( $product_id, '_eedition_id', true );
    
    if ( $eedition_id ) {
        $cover_image = get_post_meta( $eedition_id, 'cover_image', true );
        if ( $cover_image ) {
            $thumbnail = '<img src="' . esc_url( $cover_image ) . '" alt="' . esc_attr( get_the_title( $eedition_id ) ) . '" class="attachment-woocommerce_thumbnail" />';
        }
    }
    
    return $thumbnail;
}
```

### Cart Item Metadata

```php
function diepapier_cart_item_meta( $item_data, $cart_item ) {
    $product_id = $cart_item['product_id'];
    $eedition_id = get_post_meta( $product_id, '_eedition_id', true );
    
    if ( $eedition_id ) {
        $edition_date = get_post_meta( $eedition_id, 'edition_date', true );
        if ( $edition_date ) {
            $item_data[] = array(
                'key'   => 'Uitgawe Datum',
                'value' => date( 'j F Y', strtotime( $edition_date ) ),
            );
        }
        
        $issue_number = get_post_meta( $eedition_id, 'issue_number', true );
        if ( $issue_number ) {
            $item_data[] = array(
                'key'   => 'Uitgawe Nommer',
                'value' => 'Uitgawe #' . $issue_number,
            );
        }
    }
    
    return $item_data;
}
```

---

## Related Files

- `/patterns/woocommerce/woo-cart.php`
- `/patterns/woocommerce/woo-empty-cart.php`
- `/templates/page-cart.html`

---

**End of Cart Guide**
