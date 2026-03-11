#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────
# Die Papier — Pre-Flight Deployment Check
# Generated: 2026-02-23
#
# Usage:
#   cd wordpress-export
#   chmod +x scripts/preflight-check.sh
#   ./scripts/preflight-check.sh
#
# Validates the entire wordpress-export directory structure
# is complete and ready for deployment to a WordPress server.
# ─────────────────────────────────────────────────────────

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPORT_DIR="$(dirname "$SCRIPT_DIR")"
THEME_DIR="$EXPORT_DIR/themes/die-papier-theme"
PLUGIN_DIR="$EXPORT_DIR/plugins/die-papier-blocks"

PASS=0
FAIL=0
WARN=0

check_file() {
    local file="$1"
    local desc="$2"
    if [ -f "$file" ]; then
        echo -e "  ${GREEN}OK${NC}  $desc"
        ((PASS++))
    else
        echo -e "  ${RED}MISSING${NC}  $desc  →  $file"
        ((FAIL++))
    fi
}

check_dir() {
    local dir="$1"
    local desc="$2"
    if [ -d "$dir" ]; then
        local count
        count=$(find "$dir" -maxdepth 1 -type f | wc -l | tr -d ' ')
        echo -e "  ${GREEN}OK${NC}  $desc ($count files)"
        ((PASS++))
    else
        echo -e "  ${RED}MISSING${NC}  $desc  →  $dir"
        ((FAIL++))
    fi
}

check_count() {
    local dir="$1"
    local expected="$2"
    local desc="$3"
    local ext="${4:-*}"
    if [ -d "$dir" ]; then
        local count
        count=$(find "$dir" -maxdepth 1 -name "$ext" -type f | wc -l | tr -d ' ')
        if [ "$count" -ge "$expected" ]; then
            echo -e "  ${GREEN}OK${NC}  $desc: $count files (expected: $expected+)"
            ((PASS++))
        else
            echo -e "  ${YELLOW}WARN${NC}  $desc: $count files (expected: $expected+)"
            ((WARN++))
        fi
    else
        echo -e "  ${RED}MISSING${NC}  $desc: directory not found"
        ((FAIL++))
    fi
}

echo -e "${BOLD}${BLUE}"
echo "╔═══════════════════════════════════════════════════╗"
echo "║     Die Papier — Pre-Flight Deployment Check      ║"
echo "╚═══════════════════════════════════════════════════╝"
echo -e "${NC}"

# ─── Theme Structure ─────────────────────────────────────
echo -e "${BOLD}Theme Files:${NC}"
check_file "$THEME_DIR/theme.json" "theme.json (design tokens)"
check_file "$THEME_DIR/style.css" "style.css (theme header)"
check_file "$THEME_DIR/functions.php" "functions.php (theme setup)"
check_dir  "$THEME_DIR/fonts" "fonts/ directory"
check_count "$THEME_DIR/templates" 27 "Templates" "*.html"
check_count "$THEME_DIR/parts" 9 "Template Parts" "*.html"
check_count "$THEME_DIR/patterns" 70 "Patterns" "*.php"
check_dir  "$THEME_DIR/styles" "styles/ (global variations)"
check_file "$THEME_DIR/styles/dark.json" "dark.json (dark mode variation)"
echo ""

# ─── Check theme.json v3 ────────────────────────────────
echo -e "${BOLD}Theme Configuration:${NC}"
if grep -q '"version": 3' "$THEME_DIR/theme.json" 2>/dev/null; then
    echo -e "  ${GREEN}OK${NC}  theme.json version 3"
    ((PASS++))
else
    echo -e "  ${RED}FAIL${NC}  theme.json is not version 3"
    ((FAIL++))
fi

PALETTE_COUNT=$(grep -c '"slug":' "$THEME_DIR/theme.json" 2>/dev/null || echo "0")
echo -e "  ${BLUE}INFO${NC}  theme.json token slugs: $PALETTE_COUNT"

# Check for font files (warn if missing — user needs to download)
FONT_COUNT=$(find "$THEME_DIR/fonts" -name "*.ttf" -o -name "*.woff2" -o -name "*.woff" 2>/dev/null | wc -l | tr -d ' ')
if [ "$FONT_COUNT" -gt 0 ]; then
    echo -e "  ${GREEN}OK${NC}  Font files present: $FONT_COUNT"
    ((PASS++))
else
    echo -e "  ${YELLOW}WARN${NC}  No font files found — download Roboto Serif & Inter before deployment"
    ((WARN++))
fi
echo ""

# ─── Plugin Structure ────────────────────────────────────
echo -e "${BOLD}Plugin Files:${NC}"
check_file "$PLUGIN_DIR/die-papier-blocks.php" "Main plugin file"
check_file "$PLUGIN_DIR/package.json" "package.json (npm config)"
check_file "$PLUGIN_DIR/webpack.config.js" "webpack.config.js (build config)"
check_dir  "$PLUGIN_DIR/acf-json" "acf-json/ (field groups)"
echo ""

# Block source directories
echo -e "${BOLD}Block Sources (src/blocks/):${NC}"
EXPECTED_BLOCKS=(
    "ad-mrec" "article-hero" "competition-badge" "competition-entry"
    "content-hero" "eedition-access" "filter-bar" "hero-slider"
    "newsletter-cta" "pricing-table" "quote-slider" "search-filters"
    "sponsor-banner" "sticky-footer" "tab-bar" "traffic-widget" "weather-widget"
)

BLOCK_PASS=0
BLOCK_FAIL=0
for block in "${EXPECTED_BLOCKS[@]}"; do
    if [ -d "$PLUGIN_DIR/src/blocks/$block" ]; then
        # Check for essential files
        if [ -f "$PLUGIN_DIR/src/blocks/$block/block.json" ] && [ -f "$PLUGIN_DIR/src/blocks/$block/edit.js" ]; then
            ((BLOCK_PASS++))
        else
            echo -e "  ${YELLOW}WARN${NC}  $block: missing block.json or edit.js"
            ((WARN++))
        fi
    else
        echo -e "  ${RED}MISSING${NC}  $block"
        ((BLOCK_FAIL++))
        ((FAIL++))
    fi
done
if [ "$BLOCK_FAIL" -eq 0 ]; then
    echo -e "  ${GREEN}OK${NC}  All 17 block source directories present"
    ((PASS++))
fi
echo ""

# PHP includes
echo -e "${BOLD}PHP Includes (inc/):${NC}"
EXPECTED_INCLUDES=(
    "cpt-competition.php" "cpt-eedition.php" "cpt-event.php" "cpt-faq.php"
    "cpt-multimedia.php" "cpt-obituary.php" "cpt-sponsor.php"
    "tax-edition-type.php" "tax-faq-category.php" "tax-sponsor-tier.php"
    "block-styles.php" "rest-api.php" "scf-fields.php" "json-ld.php"
    "admin-columns.php" "class-commerce.php"
)

INC_PASS=0
INC_FAIL=0
for inc in "${EXPECTED_INCLUDES[@]}"; do
    if [ -f "$PLUGIN_DIR/inc/$inc" ]; then
        ((INC_PASS++))
    else
        echo -e "  ${RED}MISSING${NC}  inc/$inc"
        ((INC_FAIL++))
        ((FAIL++))
    fi
done
if [ "$INC_FAIL" -eq 0 ]; then
    echo -e "  ${GREEN}OK${NC}  All 16 PHP include files present"
    ((PASS++))
fi
echo ""

# ─── Config Files ────────────────────────────────────────
echo -e "${BOLD}Configuration Files:${NC}"
check_file "$EXPORT_DIR/config/redirects.conf" "Nginx redirect config"
check_file "$EXPORT_DIR/config/.htaccess-redirects" "Apache redirect config"
check_file "$EXPORT_DIR/config/redirection-import.json" "Redirection plugin JSON"
check_file "$EXPORT_DIR/PRE-LAUNCH-CHECKLIST.md" "Pre-launch checklist"
check_file "$EXPORT_DIR/README.md" "README documentation"
check_file "$EXPORT_DIR/INSTALL.md" "Installation guide"
echo ""

# ─── Scripts ─────────────────────────────────────────────
echo -e "${BOLD}Scripts:${NC}"
check_file "$EXPORT_DIR/scripts/generate-wxr.js" "WXR content export script"
check_file "$EXPORT_DIR/scripts/seed-commerce.php" "Commerce seed script"
check_file "$EXPORT_DIR/scripts/validate-wxr.sh" "WXR validation script"

# Check package.json has type: module
if grep -q '"type": "module"' "$EXPORT_DIR/package.json" 2>/dev/null; then
    echo -e "  ${GREEN}OK${NC}  package.json has \"type\": \"module\" (ESM support)"
    ((PASS++))
else
    echo -e "  ${RED}FAIL${NC}  package.json missing \"type\": \"module\" — WXR script will crash"
    ((FAIL++))
fi
echo ""

# ─── WXR Output ──────────────────────────────────────────
echo -e "${BOLD}WXR Output:${NC}"
if [ -f "$EXPORT_DIR/die-papier-content.xml" ]; then
    WXR_SIZE=$(wc -c < "$EXPORT_DIR/die-papier-content.xml" | tr -d ' ')
    WXR_KB=$((WXR_SIZE / 1024))
    echo -e "  ${GREEN}OK${NC}  die-papier-content.xml exists (${WXR_KB} KB)"
    echo -e "  ${BLUE}TIP${NC}  Run ./scripts/validate-wxr.sh for detailed content validation"
    ((PASS++))
else
    echo -e "  ${YELLOW}WARN${NC}  die-papier-content.xml not yet generated"
    echo -e "  ${BLUE}TIP${NC}  Run: npm run export:content  (or ./scripts/validate-wxr.sh)"
    ((WARN++))
fi
echo ""

# ─── Summary ─────────────────────────────────────────────
echo -e "${BOLD}${BLUE}"
echo "╔═══════════════════════════════════════════════════╗"
echo "║              PRE-FLIGHT SUMMARY                   ║"
echo "╚═══════════════════════════════════════════════════╝"
echo -e "${NC}"
echo -e "  ${GREEN}Passed:   $PASS${NC}"
echo -e "  ${YELLOW}Warnings: $WARN${NC}"
echo -e "  ${RED}Failed:   $FAIL${NC}"
echo ""

if [ "$FAIL" -eq 0 ] && [ "$WARN" -eq 0 ]; then
    echo -e "${GREEN}${BOLD}  All checks passed! Ready for deployment.${NC}"
elif [ "$FAIL" -eq 0 ]; then
    echo -e "${YELLOW}${BOLD}  Passed with $WARN warning(s). Review before deployment.${NC}"
else
    echo -e "${RED}${BOLD}  $FAIL check(s) failed. Fix issues before deploying.${NC}"
fi
echo ""
echo "  Deployment workflow:"
echo "    1. ./scripts/validate-wxr.sh    (generate + validate WXR)"
echo "    2. cd plugins/die-papier-blocks && npm install && npm run build"
echo "    3. Follow PRE-LAUNCH-CHECKLIST.md phases 1-11"
echo ""