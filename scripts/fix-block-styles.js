#!/usr/bin/env node

/**
 * Block Styles Fix Script
 * 
 * Automatically fixes all block style JSON files by adding:
 * - $schema: https://schemas.wp.org/wp/6.8/theme.json
 * - version: 3
 * - title: (derived from filename)
 * - slug: (derived from filename)
 * - blockTypes: (derived from folder structure)
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_SCHEMA = 'https://schemas.wp.org/wp/6.8/theme.json';
const REQUIRED_VERSION = 3;

// Block type mappings
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

function titleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getBlockTypes(relativePath) {
  const parts = relativePath.split(path.sep);
  
  // parts[0] = 'blocks'
  // parts[1] = block folder (e.g., 'woocommerce', 'heading')
  // parts[2] = style folder (e.g., 'product-title')
  
  const blockFolder = parts[1];
  const styleFolder = parts[2];
  
  if (blockFolder === 'woocommerce' && styleFolder && BLOCK_MAPPINGS.woocommerce[styleFolder]) {
    return BLOCK_MAPPINGS.woocommerce[styleFolder];
  }
  
  if (BLOCK_MAPPINGS[blockFolder]) {
    return BLOCK_MAPPINGS[blockFolder];
  }
  
  console.warn(`⚠️  Unknown block type for: ${relativePath}`);
  return [];
}

function scanDirectory(dir, baseDir) {
  const results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results.push(...scanDirectory(fullPath, baseDir));
    } else if (item.endsWith('.json')) {
      const relativePath = path.relative(baseDir, fullPath);
      results.push({
        fullPath,
        relativePath,
        filename: item
      });
    }
  }
  
  return results;
}

function fixFile(fileInfo, dryRun = false) {
  const content = fs.readFileSync(fileInfo.fullPath, 'utf8');
  let json;
  
  try {
    json = JSON.parse(content);
  } catch (e) {
    console.error(`❌ Invalid JSON in ${fileInfo.relativePath}: ${e.message}`);
    return false;
  }
  
  let modified = false;
  
  // Fix schema
  if (json.$schema !== REQUIRED_SCHEMA) {
    json.$schema = REQUIRED_SCHEMA;
    modified = true;
  }
  
  // Fix version
  if (json.version !== REQUIRED_VERSION) {
    json.version = REQUIRED_VERSION;
    modified = true;
  }
  
  // Add slug if missing
  if (!json.slug) {
    const filename = path.basename(fileInfo.filename, '.json');
    json.slug = filename;
    modified = true;
  }
  
  // Add title if missing
  if (!json.title) {
    const filename = path.basename(fileInfo.filename, '.json');
    json.title = titleCase(filename);
    modified = true;
  }
  
  // Add blockTypes if missing
  if (!json.blockTypes) {
    const blockTypes = getBlockTypes(fileInfo.relativePath);
    if (blockTypes.length > 0) {
      json.blockTypes = blockTypes;
      modified = true;
    }
  }
  
  if (modified && !dryRun) {
    // Reconstruct with proper order
    const ordered = {
      $schema: json.$schema,
      version: json.version,
      title: json.title,
      slug: json.slug,
      ...(json.blockTypes && { blockTypes: json.blockTypes }),
      ...Object.fromEntries(
        Object.entries(json).filter(([key]) => 
          !['$schema', 'version', 'title', 'slug', 'blockTypes'].includes(key)
        )
      )
    };
    
    fs.writeFileSync(
      fileInfo.fullPath,
      JSON.stringify(ordered, null, '\t') + '\n',
      'utf8'
    );
  }
  
  return modified;
}

// Main execution
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

const stylesDir = path.join(process.cwd(), 'wordpress-export/themes/die-papier-theme/styles');
const blocksDir = path.join(stylesDir, 'blocks');

console.log(`🔧 ${dryRun ? 'DRY RUN - ' : ''}Fixing Block Styles...\n`);

const files = scanDirectory(blocksDir, stylesDir);
console.log(`Found ${files.length} JSON files\n`);

let fixed = 0;
let unchanged = 0;

files.forEach(fileInfo => {
  const wasModified = fixFile(fileInfo, dryRun);
  if (wasModified) {
    console.log(`${dryRun ? '📝' : '✅'} ${fileInfo.relativePath}`);
    fixed++;
  } else {
    unchanged++;
  }
});

console.log(`\n📊 SUMMARY:`);
console.log(`Total files: ${files.length}`);
console.log(`${dryRun ? 'Would fix' : 'Fixed'}: ${fixed}`);
console.log(`Unchanged: ${unchanged}`);

if (dryRun) {
  console.log(`\n💡 Run without --dry-run to apply changes`);
}
