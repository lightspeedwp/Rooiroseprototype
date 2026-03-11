<?php
/**
 * Commerce Seeder for Die Papier
 * 
 * Creates the necessary WooCommerce products and Membership Plans
 * to support the Die Papier business model.
 * 
 * Usage: wp eval-file seed-commerce.php
 */

if ( ! defined( 'ABSPATH' ) ) {
	require_once('wp-load.php');
}

echo "Starting Commerce Seeder...\n";

// 1. Ensure WooCommerce is active
if ( ! class_exists( 'WooCommerce' ) ) {
    die( "Error: WooCommerce is not active.\n" );
}

// 2. Create "Digital Subscriber" Membership Plan (if WC Memberships exists)
$plan_id = 0;
if ( function_exists( 'wc_memberships_create_membership_plan' ) ) {
    $plan_slug = 'digital-subscriber';
    $existing_plan = get_page_by_path( $plan_slug, OBJECT, 'wc_membership_plan' );

    if ( $existing_plan ) {
        $plan_id = $existing_plan->ID;
        echo "Membership Plan '$plan_slug' already exists (ID: $plan_id).\n";
    } else {
        $plan_data = array(
            'name' => 'Digital Subscriber',
            'slug' => $plan_slug,
            'access_method' => 'unlimited', // access for length of subscription
        );
        
        $plan_id = wp_insert_post( array(
            'post_type'   => 'wc_membership_plan',
            'post_title'  => $plan_data['name'],
            'post_name'   => $plan_data['slug'],
            'post_status' => 'publish'
        ));

        if ( $plan_id ) {
            echo "Created Membership Plan: Digital Subscriber (ID: $plan_id)\n";
            // Grant access to all E-Editions
            // Note: This requires programmatic rule creation which is complex, usually done via UI.
            echo "Action Required: Go to WooCommerce > Memberships > Plans and add a rule to grant access to 'E-Editions' post type.\n";
        }
    }
} else {
    echo "Warning: WooCommerce Memberships not active. Skipping Plan creation.\n";
}

// 3. Create Subscription Product "Digital Maandeliks"
$sub_sku = 'DP-SUB-DIGITAL-M';
$existing_sub = wc_get_product_id_by_sku( $sub_sku );

if ( $existing_sub ) {
    echo "Subscription Product already exists (ID: $existing_sub).\n";
} else {
    $product = new WC_Product_Simple(); // Should be WC_Product_Subscription if plugin active
    if ( class_exists( 'WC_Product_Subscription' ) ) {
        $product = new WC_Product_Subscription();
        $product->set_billing_period( 'month' );
        $product->set_billing_interval( 1 );
        $product->set_price( 100 );
        $product->set_regular_price( 100 );
    } else {
        echo "Warning: WC Subscriptions not active. Creating Simple Product as placeholder.\n";
        $product->set_price( 100 );
        $product->set_regular_price( 100 );
    }

    $product->set_name( 'Digital Maandeliks' );
    $product->set_sku( $sub_sku );
    $product->set_description( 'Onbeperkte toegang tot alle E-Uitgawes en premium artikels.' );
    $product->set_status( 'publish' );
    $product->set_catalog_visibility( 'visible' );
    $product->set_virtual( true );
    $product->set_downloadable( false );
    
    $sub_id = $product->save();
    echo "Created Subscription Product: Digital Maandeliks (ID: $sub_id)\n";

    // Link Plan to Subscription
    if ( $plan_id && function_exists( 'wc_memberships_get_membership_plan' ) ) {
        // This is pseudo-code as WC Memberships API for linking products is internal
        echo "Action Required: Edit Plan $plan_id and add Product $sub_id under 'Grant Access upon purchase'.\n";
    }
}

// 4. Create Single Issue Product (Template)
$issue_sku = 'DP-ISSUE-TEMPLATE';
$existing_issue = wc_get_product_id_by_sku( $issue_sku );

if ( $existing_issue ) {
    echo "Single Issue Template Product already exists (ID: $existing_issue).\n";
} else {
    $product = new WC_Product_Simple();
    $product->set_name( 'Enkel Uitgawe (Template)' );
    $product->set_sku( $issue_sku );
    $product->set_price( 20 );
    $product->set_regular_price( 20 );
    $product->set_status( 'draft' ); // Draft so it doesn't show up in shop
    $product->set_virtual( true );
    
    $issue_id = $product->save();
    echo "Created Single Issue Template: (ID: $issue_id). Duplicate this for each new edition.\n";
}

echo "Seeding Complete.\n";
