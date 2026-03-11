#!/bin/bash

# Audit Block Styles and Section Styles
# Purpose: Check metadata completeness, spacing issues, duplicates

echo "=========================================="
echo "Block & Section Styles Audit"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BLOCK_STYLES_DIR="wordpress-export/themes/die-papier-theme/styles/blocks"
SECTION_STYLES_DIR="wordpress-export/themes/die-papier-theme/styles/sections"

total_files=0
issues_found=0

echo "1. BLOCK STYLES INVENTORY"
echo "=========================================="
echo ""

if [ -d "$BLOCK_STYLES_DIR" ]; then
    find "$BLOCK_STYLES_DIR" -type f -name "*.json" | while read file; do
        total_files=$((total_files + 1))
        filename=$(basename "$file")
        dirname=$(dirname "$file" | xargs basename)
        
        echo "Checking: $dirname/$filename"
        
        # Check for required metadata
        has_schema=$(grep -c '\$schema' "$file" || echo 0)
        has_version=$(grep -c '"version"' "$file" || echo 0)
        has_title=$(grep -c '"title"' "$file" || echo 0)
        has_slug=$(grep -c '"slug"' "$file" || echo 0)
        has_blockTypes=$(grep -c '"blockTypes"' "$file" || echo 0)
        
        # Check for spacing issues
        has_shorthand_padding=$(grep -c '"padding":' "$file" | grep -v 'top\|bottom\|left\|right' || echo 0)
        has_shorthand_margin=$(grep -c '"margin":' "$file" | grep -v 'top\|bottom\|left\|right' || echo 0)
        
        # Report issues
        if [ "$has_schema" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing \$schema${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_version" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing version${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_title" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing title${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_slug" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing slug${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_blockTypes" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing blockTypes${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_schema" -eq 1 ] && [ "$has_version" -eq 1 ] && [ "$has_title" -eq 1 ] && [ "$has_slug" -eq 1 ] && [ "$has_blockTypes" -eq 1 ]; then
            echo -e "  ${GREEN}✓ All metadata present${NC}"
        fi
        
        echo ""
    done
fi

echo ""
echo "2. SECTION STYLES INVENTORY"
echo "=========================================="
echo ""

if [ -d "$SECTION_STYLES_DIR" ]; then
    find "$SECTION_STYLES_DIR" -type f -name "*.json" | while read file; do
        total_files=$((total_files + 1))
        filename=$(basename "$file")
        
        echo "Checking: $filename"
        
        # Check for required metadata (sections use "blockTypes" not "blockType")
        has_schema=$(grep -c '\$schema' "$file" || echo 0)
        has_version=$(grep -c '"version"' "$file" || echo 0)
        has_title=$(grep -c '"title"' "$file" || echo 0)
        has_slug=$(grep -c '"slug"' "$file" || echo 0)
        has_blockTypes=$(grep -c '"blockTypes"' "$file" || echo 0)
        
        # Report issues
        if [ "$has_schema" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing \$schema${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_version" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing version${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_title" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing title${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_slug" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing slug${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_blockTypes" -eq 0 ]; then
            echo -e "  ${RED}✗ Missing blockTypes${NC}"
            issues_found=$((issues_found + 1))
        fi
        
        if [ "$has_schema" -eq 1 ] && [ "$has_version" -eq 1 ] && [ "$has_title" -eq 1 ] && [ "$has_slug" -eq 1 ] && [ "$has_blockTypes" -eq 1 ]; then
            echo -e "  ${GREEN}✓ All metadata present${NC}"
        fi
        
        echo ""
    done
fi

echo ""
echo "3. DUPLICATE FOLDERS CHECK"
echo "=========================================="
echo ""

# Check for yoast vs yoast-seo
if [ -d "$BLOCK_STYLES_DIR/yoast" ] && [ -d "$BLOCK_STYLES_DIR/yoast-seo" ]; then
    echo -e "${YELLOW}⚠ Found both 'yoast' and 'yoast-seo' folders${NC}"
    echo "  Action: Merge and delete duplicate"
fi

echo ""
echo "=========================================="
echo "AUDIT SUMMARY"
echo "=========================================="
echo "Total files checked: $total_files"
echo "Issues found: $issues_found"
echo ""
