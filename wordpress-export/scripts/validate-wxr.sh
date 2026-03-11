#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────
# Die Papier — WXR Export & Validation Script
# Generated: 2026-02-23
#
# Usage:
#   cd wordpress-export
#   chmod +x scripts/validate-wxr.sh
#   ./scripts/validate-wxr.sh
#
# This script:
#   1. Installs dependencies (if needed)
#   2. Runs the WXR content export
#   3. Validates the output XML
#   4. Reports content counts vs expected values
#   5. Flags any issues for manual review
# ─────────────────────────────────────────────────────────

set -euo pipefail

# Colours
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Determine working directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXPORT_DIR="$(dirname "$SCRIPT_DIR")"
WXR_FILE="$EXPORT_DIR/die-papier-content.xml"

echo -e "${BOLD}${BLUE}"
echo "╔═══════════════════════════════════════════════════╗"
echo "║     Die Papier — WXR Export & Validation          ║"
echo "╚═══════════════════════════════════════════════════╝"
echo -e "${NC}"

cd "$EXPORT_DIR"

# ─── Step 1: Check Node.js ───────────────────────────────
echo -e "${BOLD}Step 1: Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}ERROR: Node.js is not installed. Requires Node.js 18+.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}ERROR: Node.js $NODE_VERSION detected. Requires Node.js 18+.${NC}"
    exit 1
fi
echo -e "${GREEN}  Node.js $(node -v) detected.${NC}"

# ─── Step 2: Install dependencies ────────────────────────
echo ""
echo -e "${BOLD}Step 2: Installing dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    npm install --silent
    echo -e "${GREEN}  Dependencies installed.${NC}"
else
    echo -e "${GREEN}  Dependencies already installed (node_modules exists).${NC}"
fi

# ─── Step 3: Run WXR export ──────────────────────────────
echo ""
echo -e "${BOLD}Step 3: Running WXR content export...${NC}"
echo ""
npm run export:content
echo ""

# ─── Step 4: Check output file exists ────────────────────
echo -e "${BOLD}Step 4: Validating output file...${NC}"
PASS_COUNT=0
FAIL_COUNT=0
WARN_COUNT=0

if [ ! -f "$WXR_FILE" ]; then
    echo -e "${RED}  FAIL: Output file not found at $WXR_FILE${NC}"
    echo -e "${RED}  The WXR generator may have crashed. Check error output above.${NC}"
    exit 1
fi

# ─── Step 5: File size check ─────────────────────────────
FILE_SIZE=$(wc -c < "$WXR_FILE" | tr -d ' ')
FILE_SIZE_KB=$((FILE_SIZE / 1024))

if [ "$FILE_SIZE_KB" -gt 50 ]; then
    echo -e "${GREEN}  PASS: File size: ${FILE_SIZE_KB} KB (> 50 KB minimum)${NC}"
    ((PASS_COUNT++))
else
    echo -e "${RED}  FAIL: File size: ${FILE_SIZE_KB} KB (expected > 50 KB)${NC}"
    ((FAIL_COUNT++))
fi

# ─── Step 6: XML validity check ──────────────────────────
echo ""
echo -e "${BOLD}Step 5: Checking XML validity...${NC}"
if command -v xmllint &> /dev/null; then
    if xmllint --noout "$WXR_FILE" 2>/dev/null; then
        echo -e "${GREEN}  PASS: Valid XML (xmllint check passed)${NC}"
        ((PASS_COUNT++))
    else
        echo -e "${RED}  FAIL: Invalid XML! Run 'xmllint $WXR_FILE' for details.${NC}"
        ((FAIL_COUNT++))
    fi
else
    # Fallback: check for closing </rss> tag
    if tail -5 "$WXR_FILE" | grep -q '</rss>'; then
        echo -e "${GREEN}  PASS: XML appears well-formed (closing </rss> tag found)${NC}"
        echo -e "${YELLOW}  NOTE: Install xmllint for full XML validation.${NC}"
        ((PASS_COUNT++))
    else
        echo -e "${RED}  FAIL: Missing closing </rss> tag — XML may be truncated.${NC}"
        ((FAIL_COUNT++))
    fi
fi

# ─── Step 7: Content count checks ────────────────────────
echo ""
echo -e "${BOLD}Step 6: Content count verification...${NC}"
echo ""

# Authors (expected: 14)
AUTHOR_COUNT=$(grep -c '<wp:author>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$AUTHOR_COUNT" -eq 14 ]; then
    echo -e "${GREEN}  PASS: Authors: $AUTHOR_COUNT (expected: 14)${NC}"
    ((PASS_COUNT++))
elif [ "$AUTHOR_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}  WARN: Authors: $AUTHOR_COUNT (expected: 14)${NC}"
    ((WARN_COUNT++))
else
    echo -e "${RED}  FAIL: Authors: $AUTHOR_COUNT (expected: 14)${NC}"
    ((FAIL_COUNT++))
fi

# Taxonomy terms (expected: ~75)
TERM_COUNT=$(grep -c '<wp:term>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$TERM_COUNT" -ge 70 ]; then
    echo -e "${GREEN}  PASS: Taxonomy terms: $TERM_COUNT (expected: ~75+)${NC}"
    ((PASS_COUNT++))
elif [ "$TERM_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}  WARN: Taxonomy terms: $TERM_COUNT (expected: ~75+)${NC}"
    ((WARN_COUNT++))
else
    echo -e "${RED}  FAIL: Taxonomy terms: $TERM_COUNT (expected: ~75+)${NC}"
    ((FAIL_COUNT++))
fi

# Pages (expected: ~54)
PAGE_COUNT=$(grep -c '<wp:post_type>page</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$PAGE_COUNT" -ge 40 ]; then
    echo -e "${GREEN}  PASS: Pages: $PAGE_COUNT (expected: ~54)${NC}"
    ((PASS_COUNT++))
elif [ "$PAGE_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}  WARN: Pages: $PAGE_COUNT (expected: ~54)${NC}"
    ((WARN_COUNT++))
else
    echo -e "${RED}  FAIL: Pages: $PAGE_COUNT (expected: ~54)${NC}"
    ((FAIL_COUNT++))
fi

# FAQ posts (expected: ~80)
FAQ_COUNT=$(grep -c '<wp:post_type>dp_faq</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$FAQ_COUNT" -ge 50 ]; then
    echo -e "${GREEN}  PASS: FAQ posts: $FAQ_COUNT (expected: ~80)${NC}"
    ((PASS_COUNT++))
elif [ "$FAQ_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}  WARN: FAQ posts: $FAQ_COUNT (expected: ~80)${NC}"
    ((WARN_COUNT++))
else
    echo -e "${RED}  FAIL: FAQ posts: $FAQ_COUNT (expected: ~80)${NC}"
    ((FAIL_COUNT++))
fi

# Navigation menus (expected: 8)
NAV_MENU_COUNT=$(grep -c '<wp:term_taxonomy>nav_menu</wp:term_taxonomy>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$NAV_MENU_COUNT" -eq 8 ]; then
    echo -e "${GREEN}  PASS: Navigation menus: $NAV_MENU_COUNT (expected: 8)${NC}"
    ((PASS_COUNT++))
elif [ "$NAV_MENU_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}  WARN: Navigation menus: $NAV_MENU_COUNT (expected: 8)${NC}"
    ((WARN_COUNT++))
else
    echo -e "${RED}  FAIL: Navigation menus: $NAV_MENU_COUNT (expected: 8)${NC}"
    ((FAIL_COUNT++))
fi

# Nav menu items (expected: ~71)
NAV_ITEM_COUNT=$(grep -c '<wp:post_type>nav_menu_item</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$NAV_ITEM_COUNT" -ge 60 ]; then
    echo -e "${GREEN}  PASS: Nav menu items: $NAV_ITEM_COUNT (expected: ~71)${NC}"
    ((PASS_COUNT++))
else
    echo -e "${YELLOW}  WARN: Nav menu items: $NAV_ITEM_COUNT (expected: ~71)${NC}"
    ((WARN_COUNT++))
fi

# Attachments
ATTACHMENT_COUNT=$(grep -c '<wp:post_type>attachment</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
echo -e "${BLUE}  INFO: Attachments (images): $ATTACHMENT_COUNT${NC}"

# CPT posts
EVENT_COUNT=$(grep -c '<wp:post_type>dp_event</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
OBIT_COUNT=$(grep -c '<wp:post_type>dp_obituary</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
SPONSOR_COUNT=$(grep -c '<wp:post_type>dp_sponsor</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
COMP_COUNT=$(grep -c '<wp:post_type>dp_competition</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
MEDIA_COUNT=$(grep -c '<wp:post_type>dp_multimedia</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
EEDITION_COUNT=$(grep -c '<wp:post_type>dp_eedition</wp:post_type>' "$WXR_FILE" 2>/dev/null || echo "0")
POST_COUNT=$(grep '<wp:post_type>post</wp:post_type>' "$WXR_FILE" 2>/dev/null | wc -l | tr -d ' ')

echo ""
echo -e "${BOLD}  CPT Breakdown:${NC}"
echo -e "    Articles (post):      $POST_COUNT"
echo -e "    Events:               $EVENT_COUNT"
echo -e "    Obituaries:           $OBIT_COUNT"
echo -e "    Sponsors:             $SPONSOR_COUNT"
echo -e "    Competitions:         $COMP_COUNT"
echo -e "    Multimedia:           $MEDIA_COUNT"
echo -e "    E-editions:           $EEDITION_COUNT"
echo -e "    FAQs:                 $FAQ_COUNT"

# ─── Step 8: Check for parent hierarchy ──────────────────
echo ""
echo -e "${BOLD}Step 7: Checking parent page hierarchy...${NC}"
PARENT_REFS=$(grep -c '<wp:post_parent>[1-9]' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$PARENT_REFS" -gt 0 ]; then
    echo -e "${GREEN}  PASS: Found $PARENT_REFS pages with parent references (policy pages under Beleid)${NC}"
    ((PASS_COUNT++))
else
    echo -e "${YELLOW}  WARN: No parent page references found — check Beleid hierarchy${NC}"
    ((WARN_COUNT++))
fi

# ─── Step 9: Check for pattern references ────────────────
echo -e "${BOLD}Step 8: Checking pattern references in pages...${NC}"
PATTERN_COUNT=$(grep -c 'wp:pattern' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$PATTERN_COUNT" -gt 0 ]; then
    echo -e "${GREEN}  PASS: Found $PATTERN_COUNT pattern block references in page content${NC}"
    ((PASS_COUNT++))
else
    echo -e "${YELLOW}  WARN: No pattern references found — pages may have inline content only${NC}"
    ((WARN_COUNT++))
fi

# ─── Step 10: Check for meta fields ─────────────────────
echo -e "${BOLD}Step 9: Checking postmeta fields...${NC}"
META_COUNT=$(grep -c '<wp:meta_key>' "$WXR_FILE" 2>/dev/null || echo "0")
if [ "$META_COUNT" -gt 20 ]; then
    echo -e "${GREEN}  PASS: Found $META_COUNT postmeta entries${NC}"
    ((PASS_COUNT++))
else
    echo -e "${YELLOW}  WARN: Only $META_COUNT postmeta entries — expected many more${NC}"
    ((WARN_COUNT++))
fi

# ─── Summary ─────────────────────────────────────────────
echo ""
echo -e "${BOLD}${BLUE}"
echo "╔═══════════════════════════════════════════════════╗"
echo "║                 VALIDATION SUMMARY                ║"
echo "╚═══════════════════════════════════════════════════╝"
echo -e "${NC}"
echo -e "  ${GREEN}Passed:  $PASS_COUNT${NC}"
echo -e "  ${YELLOW}Warnings: $WARN_COUNT${NC}"
echo -e "  ${RED}Failed:  $FAIL_COUNT${NC}"
echo ""

TOTAL_ITEMS=$((PAGE_COUNT + POST_COUNT + EVENT_COUNT + OBIT_COUNT + SPONSOR_COUNT + COMP_COUNT + MEDIA_COUNT + EEDITION_COUNT + FAQ_COUNT + NAV_ITEM_COUNT + ATTACHMENT_COUNT))
echo -e "  ${BOLD}Total items in WXR: $TOTAL_ITEMS${NC}"
echo -e "  ${BOLD}Output file: $WXR_FILE${NC}"
echo -e "  ${BOLD}File size: ${FILE_SIZE_KB} KB${NC}"
echo ""

if [ "$FAIL_COUNT" -eq 0 ]; then
    echo -e "${GREEN}${BOLD}  WXR file is ready for WordPress import!${NC}"
    echo ""
    echo "  Next steps:"
    echo "    1. Go to WordPress Admin > Tools > Import > WordPress"
    echo "    2. Upload die-papier-content.xml"
    echo "    3. Follow the PRE-LAUNCH-CHECKLIST.md for remaining phases"
    echo ""
else
    echo -e "${RED}${BOLD}  WXR file has $FAIL_COUNT failure(s). Review issues above before importing.${NC}"
    echo ""
fi