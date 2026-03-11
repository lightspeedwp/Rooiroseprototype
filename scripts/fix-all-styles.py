#!/usr/bin/env python3

"""
Comprehensive Style Files Fix Script

Fixes ALL style JSON files in the WordPress theme:
1. Block styles (/styles/blocks/**)
2. Section styles (/styles/sections/*)
3. Preset styles (/styles/presets/*)

Ensures all files have:
- Correct schema: https://schemas.wp.org/wp/6.8/theme.json
- Version: 3
- Title, slug, and blockTypes (where applicable)
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Optional

REQUIRED_SCHEMA = "https://schemas.wp.org/wp/6.8/theme.json"
REQUIRED_VERSION = 3

# Block type mappings
BLOCK_MAPPINGS = {
    # Core blocks
    "button": ["core/button"],
    "buttons": ["core/buttons"],
    "columns": ["core/columns"],
    "heading": ["core/heading"],
    "image": ["core/image"],
    "list": ["core/list"],
    "navigation": ["core/navigation"],
    "paragraph": ["core/paragraph"],
    "post-date": ["core/post-date"],
    "post-terms": ["core/post-terms"],
    "post-title": ["core/post-title"],
    "pullquote": ["core/pullquote"],
    "quote": ["core/quote"],
    "search": ["core/search"],
    "separator": ["core/separator"],
    "site-title": ["core/site-title"],
    "table": ["core/table"],
    
    # Gravity Forms
    "gravityforms": ["gravityforms/form"],
    
    # Outermost
    "outermost": ["outermost/icon-block", "outermost/social-sharing"],
    
    # Yoast SEO
    "yoast": ["yoast/breadcrumbs"],
    "yoast-seo": ["yoast/faq-block"],
    
    # WooCommerce blocks
    "woocommerce": {
        "accordion-header": ["woocommerce/product-collection-accordion-header"],
        "accordion-item": ["woocommerce/product-collection-accordion"],
        "add-to-cart-with-options-variation-selector-attribute-name": ["woocommerce/add-to-cart-with-options"],
        "breadcrumbs": ["woocommerce/breadcrumbs"],
        "cart": ["woocommerce/cart"],
        "category-description": ["woocommerce/product-collection-category-description"],
        "category-title": ["woocommerce/product-collection-category-title"],
        "checkout": ["woocommerce/checkout"],
        "customer-account": ["woocommerce/customer-account"],
        "mini-cart": ["woocommerce/mini-cart"],
        "order-confirmation-status": ["woocommerce/order-confirmation-status"],
        "product-button": ["woocommerce/product-button"],
        "product-filter-attribute": ["woocommerce/product-filter-attribute"],
        "product-filter-price": ["woocommerce/product-filter-price"],
        "product-filter-rating": ["woocommerce/product-filter-rating"],
        "product-filter-status": ["woocommerce/product-filter-status"],
        "product-gallery-large-image-next-previous": ["woocommerce/product-gallery-large-image-next-previous"],
        "product-image": ["woocommerce/product-image"],
        "product-price": ["woocommerce/product-price"],
        "product-rating": ["woocommerce/product-rating"],
        "product-results-count": ["woocommerce/product-results-count"],
        "product-review-author-name": ["woocommerce/product-reviews-author-name"],
        "product-review-content": ["woocommerce/product-reviews-content"],
        "product-review-date": ["woocommerce/product-reviews-date"],
        "product-reviews": ["woocommerce/product-reviews"],
        "product-sale-badge": ["woocommerce/product-sale-badge"],
        "product-summary": ["woocommerce/product-summary"],
        "product-title": ["woocommerce/product-title"],
    }
}

# Section styles blockTypes
SECTION_BLOCK_TYPES = ["core/group", "core/columns", "core/column", "core/stack", "core/grid"]


def title_case(text: str) -> str:
    """Convert kebab-case to Title Case"""
    return " ".join(word.capitalize() for word in text.split("-"))


def get_block_types(relative_path: str) -> List[str]:
    """Determine blockTypes based on file path"""
    parts = Path(relative_path).parts
    
    # Check if it's a section style
    if "sections" in parts:
        return SECTION_BLOCK_TYPES
    
    # Check if it's a preset (no blockTypes needed)
    if "presets" in parts:
        return []
    
    # Block styles
    if "blocks" in parts:
        # Find the block folder index
        blocks_idx = parts.index("blocks")
        if len(parts) > blocks_idx + 1:
            block_folder = parts[blocks_idx + 1]
            
            # WooCommerce sub-blocks
            if block_folder == "woocommerce" and len(parts) > blocks_idx + 2:
                style_folder = parts[blocks_idx + 2]
                if isinstance(BLOCK_MAPPINGS.get("woocommerce"), dict):
                    return BLOCK_MAPPINGS["woocommerce"].get(style_folder, [])
            
            # Other blocks
            return BLOCK_MAPPINGS.get(block_folder, [])
    
    return []


def fix_json_file(file_path: Path, base_path: Path, dry_run: bool = False) -> bool:
    """Fix a single JSON file. Returns True if modified."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON in {file_path}: {e}")
        return False
    
    modified = False
    relative_path = file_path.relative_to(base_path)
    
    # Fix schema
    if data.get("$schema") != REQUIRED_SCHEMA:
        data["$schema"] = REQUIRED_SCHEMA
        modified = True
    
    # Fix version
    if data.get("version") != REQUIRED_VERSION:
        data["version"] = REQUIRED_VERSION
        modified = True
    
    # Add slug if missing (NOT for presets!)
    if "presets" not in str(relative_path):
        if not data.get("slug"):
            filename = file_path.stem  # filename without extension
            # For section styles, keep full filename as slug
            if "sections" in str(relative_path):
                data["slug"] = filename
            else:
                # For block styles, keep the filename as slug
                data["slug"] = filename
            modified = True
    
    # Add title if missing (NOT for presets!)
    if "presets" not in str(relative_path):
        if not data.get("title"):
            filename = file_path.stem
            data["title"] = title_case(filename)
            modified = True
    
    # Add blockTypes if missing (NOT for presets!)
    if "presets" not in str(relative_path):
        if not data.get("blockTypes"):
            block_types = get_block_types(str(relative_path))
            if block_types:
                data["blockTypes"] = block_types
                modified = True
    
    # Write back if modified
    if modified and not dry_run:
        # Reconstruct with proper field order
        ordered = {}
        
        # Standard order for all files
        if "$schema" in data:
            ordered["$schema"] = data["$schema"]
        if "version" in data:
            ordered["version"] = data["version"]
        if "title" in data:
            ordered["title"] = data["title"]
        if "slug" in data:
            ordered["slug"] = data["slug"]
        if "blockTypes" in data:
            ordered["blockTypes"] = data["blockTypes"]
        
        # Add remaining fields
        for key, value in data.items():
            if key not in ordered:
                ordered[key] = value
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(ordered, f, indent='\t', ensure_ascii=False)
            f.write('\n')
    
    return modified


def scan_and_fix(styles_dir: Path, dry_run: bool = False):
    """Scan and fix all JSON files in styles directory"""
    all_files = list(styles_dir.rglob("*.json"))
    
    print(f"🔍 Found {len(all_files)} JSON files\n")
    
    fixed_count = 0
    unchanged_count = 0
    error_count = 0
    
    for file_path in sorted(all_files):
        relative_path = file_path.relative_to(styles_dir)
        
        try:
            was_modified = fix_json_file(file_path, styles_dir, dry_run)
            
            if was_modified:
                symbol = "📝" if dry_run else "✅"
                print(f"{symbol} {relative_path}")
                fixed_count += 1
            else:
                unchanged_count += 1
        except Exception as e:
            print(f"❌ Error in {relative_path}: {e}")
            error_count += 1
    
    print(f"\n📊 SUMMARY:")
    print(f"Total files: {len(all_files)}")
    print(f"{'Would fix' if dry_run else 'Fixed'}: {fixed_count}")
    print(f"Unchanged: {unchanged_count}")
    print(f"Errors: {error_count}")
    
    if dry_run:
        print(f"\n💡 Run without --dry-run to apply changes")


if __name__ == "__main__":
    import sys
    
    dry_run = "--dry-run" in sys.argv
    
    # Get the styles directory
    script_dir = Path(__file__).parent
    theme_dir = script_dir.parent / "wordpress-export" / "themes" / "die-papier-theme"
    styles_dir = theme_dir / "styles"
    
    if not styles_dir.exists():
        print(f"❌ Styles directory not found: {styles_dir}")
        sys.exit(1)
    
    print(f"🔧 {'DRY RUN - ' if dry_run else ''}Fixing all style files...\n")
    
    scan_and_fix(styles_dir, dry_run)
