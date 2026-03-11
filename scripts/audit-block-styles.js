#!/usr/bin/env node

/**
 * Block Styles Audit Script
 * 
 * Audits all block style JSON files to ensure they have:
 * - $schema: https://schemas.wp.org/wp/6.8/theme.json
 * - version: 3
 * - title: "..."
 * - slug: "..."
 * - blockTypes: ["..."]
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_SCHEMA = 'https://schemas.wp.org/wp/6.8/theme.json';
const REQUIRED_VERSION = 3;

const BLOCK_MAPPINGS = {
  // Core blocks
  'button': ['core/button'],
  'buttons': ['core/buttons'],
  'columns': ['core/columns'],
  'heading': ['core/heading'],
  'image': ['core/image'],
  'list': ['core/list'],
  'navigation': ['core/navigation'],
  'paragraph': ['core/paragraph'],
  'post-date': ['core/post-date'],
  'post-terms': ['core/post-terms'],
  'post-title': ['core/post-title'],
  'pullquote': ['core/pullquote'],
  'quote': ['core/quote'],
  'search': ['core/search'],
  'separator': ['core/separator'],
  'site-title': ['core/site-title'],
  'table': ['core/table'],
  
  // Gravity Forms
  'gravityforms': ['gravityforms/form'],
  
  // Outermost
  'outermost': ['outermost/icon-block', 'outermost/social-sharing'],
  
  // Yoast SEO
  'yoast': ['yoast/breadcrumbs'],
  'yoast-seo': ['yoast/faq-block'],
  
  // WooCommerce blocks
  'woocommerce': {
    'accordion-header': ['woocommerce/product-collection-accordion-header'],
    'accordion-item': ['woocommerce/product-collection-accordion'],
    'add-to-cart-with-options-variation-selector-attribute-name': ['woocommerce/add-to-cart-with-options'],
    'breadcrumbs': ['woocommerce/breadcrumbs'],
    'cart': ['woocommerce/cart'],
    'category-description': ['woocommerce/product-collection-category-description'],
    'category-title': ['woocommerce/product-collection-category-title'],
    'checkout': ['woocommerce/checkout'],
    'customer-account': ['woocommerce/customer-account'],
    'mini-cart': ['woocommerce/mini-cart'],
    'order-confirmation-status': ['woocommerce/order-confirmation-status'],
    'product-button': ['woocommerce/product-button'],
    'product-filter-attribute': ['woocommerce/product-filter-attribute'],
    'product-filter-price': ['woocommerce/product-filter-price'],
    'product-filter-rating': ['woocommerce/product-filter-rating'],
    'product-filter-status': ['woocommerce/product-filter-status'],
    'product-gallery-large-image-next-previous': ['woocommerce/product-gallery-large-image-next-previous'],
    'product-image': ['woocommerce/product-image'],
    'product-price': ['woocommerce/product-price'],
    'product-rating': ['woocommerce/product-rating'],
    'product-results-count': ['woocommerce/product-results-count'],
    'product-review-author-name': ['woocommerce/product-reviews-author-name'],
    'product-review-content': ['woocommerce/product-reviews-content'],
    'product-review-date': ['woocommerce/product-reviews-date'],
    'product-reviews': ['woocommerce/product-reviews'],
    'product-sale-badge': ['woocommerce/product-sale-badge'],
    'product-summary': ['woocommerce/product-summary'],
    'product-title': ['woocommerce/product-title'],
  }
};

function getBlockTypes(blockFolder, styleFolder) {
  if (blockFolder === 'woocommerce' && BLOCK_MAPPINGS.woocommerce[styleFolder]) {
    return BLOCK_MAPPINGS.woocommerce[styleFolder];
  }
  return BLOCK_MAPPINGS[blockFolder] || [];
}

function scanDirectory(dir, blockFolder = '', styleFolder = '') {
  const results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results.push(...scanDirectory(fullPath, blockFolder || item, styleFolder || item));
    } else if (item.endsWith('.json')) {
      results.push({
        path: fullPath,
        blockFolder,
        styleFolder,
        filename: item
      });
    }
  }
  
  return results;
}

function auditFile(fileInfo) {
  const content = fs.readFileSync(fileInfo.path, 'utf8');
  let json;
  
  try {
    json = JSON.parse(content);
  } catch (e) {
    return {
      path: fileInfo.path,
      errors: ['Invalid JSON: ' + e.message]
    };
  }
  
  const errors = [];
  const warnings = [];
  
  // Check schema
  if (!json.$schema) {
    errors.push('Missing $schema');
  } else if (json.$schema !== REQUIRED_SCHEMA) {
    warnings.push(`Schema mismatch: ${json.$schema} (expected: ${REQUIRED_SCHEMA})`);
  }
  
  // Check version
  if (!json.version) {
    errors.push('Missing version');
  } else if (json.version !== REQUIRED_VERSION) {
    errors.push(`Version mismatch: ${json.version} (expected: ${REQUIRED_VERSION})`);
  }
  
  // Check title
  if (!json.title) {
    errors.push('Missing title');
  }
  
  // Check slug
  if (!json.slug) {
    errors.push('Missing slug');
  }
  
  // Check blockTypes
  if (!json.blockTypes) {
    errors.push('Missing blockTypes');
  } else if (!Array.isArray(json.blockTypes)) {
    errors.push('blockTypes must be an array');
  } else if (json.blockTypes.length === 0) {
    errors.push('blockTypes array is empty');
  }
  
  return {
    path: fileInfo.path,
    errors,
    warnings,
    current: json
  };
}

// Main execution
const stylesDir = path.join(process.cwd(), 'wordpress-export/themes/die-papier-theme/styles');
const blocksDir = path.join(stylesDir, 'blocks');

console.log('🔍 Auditing Block Styles...\n');

const files = scanDirectory(blocksDir);
console.log(`Found ${files.length} JSON files\n`);

const results = files.map(auditFile);

const withErrors = results.filter(r => r.errors.length > 0);
const withWarnings = results.filter(r => r.warnings.length > 0 && r.errors.length === 0);
const clean = results.filter(r => r.errors.length === 0 && r.warnings.length === 0);

console.log(`✅ Clean: ${clean.length}`);
console.log(`⚠️  Warnings: ${withWarnings.length}`);
console.log(`❌ Errors: ${withErrors.length}\n`);

if (withErrors.length > 0) {
  console.log('❌ FILES WITH ERRORS:\n');
  withErrors.forEach(r => {
    console.log(`  ${r.path}`);
    r.errors.forEach(e => console.log(`    - ${e}`));
    console.log('');
  });
}

if (withWarnings.length > 0) {
  console.log('⚠️  FILES WITH WARNINGS:\n');
  withWarnings.forEach(r => {
    console.log(`  ${r.path}`);
    r.warnings.forEach(w => console.log(`    - ${w}`));
    console.log('');
  });
}

// Summary
console.log('\n📊 SUMMARY:');
console.log(`Total files: ${files.length}`);
console.log(`Clean: ${clean.length} (${Math.round(clean.length / files.length * 100)}%)`);
console.log(`Need fixes: ${withErrors.length + withWarnings.length}`);

process.exit(withErrors.length > 0 ? 1 : 0);
