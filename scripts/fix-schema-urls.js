#!/usr/bin/env node

/**
 * Fix Schema URLs in All Style Files
 * 
 * Updates all JSON files from:
 * - https://schemas.wp.org/trunk/theme.json
 * To:
 * - https://schemas.wp.org/wp/6.8/theme.json
 */

const fs = require('fs');
const path = require('path');

const OLD_SCHEMA = 'https://schemas.wp.org/trunk/theme.json';
const NEW_SCHEMA = 'https://schemas.wp.org/wp/6.8/theme.json';

const files = [
  // WooCommerce block styles (30 files)
  'styles/blocks/woocommerce/product-button/primary.json',
  'styles/blocks/woocommerce/product-image/rounded.json',
  'styles/blocks/woocommerce/product-image/default.json',
  'styles/blocks/woocommerce/product-price/accent.json',
  'styles/blocks/woocommerce/product-price/default.json',
  'styles/blocks/woocommerce/breadcrumbs/default.json',
  'styles/blocks/woocommerce/product-title/default.json',
  'styles/blocks/woocommerce/product-rating/default.json',
  'styles/blocks/woocommerce/product-sale-badge/default.json',
  'styles/blocks/woocommerce/product-summary/default.json',
  'styles/blocks/woocommerce/product-results-count/default.json',
  'styles/blocks/woocommerce/product-reviews/default.json',
  'styles/blocks/woocommerce/product-review-author-name/default.json',
  'styles/blocks/woocommerce/product-review-date/default.json',
  'styles/blocks/woocommerce/product-review-content/default.json',
  'styles/blocks/woocommerce/accordion-item/default.json',
  'styles/blocks/woocommerce/accordion-header/default.json',
  'styles/blocks/woocommerce/customer-account/default.json',
  'styles/blocks/woocommerce/mini-cart/default.json',
  'styles/blocks/woocommerce/order-confirmation-status/default.json',
  'styles/blocks/woocommerce/product-filter-attribute/default.json',
  'styles/blocks/woocommerce/product-filter-price/default.json',
  'styles/blocks/woocommerce/product-filter-rating/default.json',
  'styles/blocks/woocommerce/product-filter-status/default.json',
  'styles/blocks/woocommerce/product-gallery-large-image-next-previous/default.json',
  'styles/blocks/woocommerce/add-to-cart-with-options-variation-selector-attribute-name/default.json',
  'styles/blocks/woocommerce/category-title/default.json',
  'styles/blocks/woocommerce/category-description/default.json',
  'styles/blocks/woocommerce/cart/default.json',
  'styles/blocks/woocommerce/checkout/default.json',
  
  // Core block styles (10 files)
  'styles/blocks/buttons/default.json',
  'styles/blocks/columns/default.json',
  'styles/blocks/navigation/default.json',
  'styles/blocks/post-date/default.json',
  'styles/blocks/post-terms/default.json',
  'styles/blocks/post-title/default.json',
  'styles/blocks/pullquote/default.json',
  'styles/blocks/search/default.json',
  'styles/blocks/site-title/default.json',
  
  // Section styles (8 files)
  'styles/sections/section-white.json',
  'styles/sections/section-muted.json',
  'styles/sections/section-navy.json',
  'styles/sections/section-red.json',
  'styles/sections/section-navy-light.json',
  'styles/sections/section-gradient-navy.json',
  'styles/sections/section-hero-default.json',
  'styles/sections/section-cover-hero.json',
  'styles/sections/section-faq.json',
];

const themeDir = path.join(process.cwd(), 'wordpress-export/themes/die-papier-theme');

let fixed = 0;
let already_correct = 0;
let errors = 0;

console.log('🔧 Fixing schema URLs...\n');

files.forEach(relativePath => {
  const filePath = path.join(themeDir, relativePath);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    if (data.$schema === OLD_SCHEMA) {
      data.$schema = NEW_SCHEMA;
      fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
      console.log(`✅ ${relativePath}`);
      fixed++;
    } else if (data.$schema === NEW_SCHEMA) {
      already_correct++;
    } else {
      console.log(`⚠️  ${relativePath} - Unknown schema: ${data.$schema}`);
    }
  } catch (e) {
    console.error(`❌ ${relativePath} - Error: ${e.message}`);
    errors++;
  }
});

console.log(`\n📊 SUMMARY:`);
console.log(`Fixed: ${fixed}`);
console.log(`Already correct: ${already_correct}`);
console.log(`Errors: ${errors}`);
console.log(`Total: ${files.length}`);
