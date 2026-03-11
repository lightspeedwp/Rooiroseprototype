#!/bin/bash

##############################################################################
# Spacing Slug Migration Script
# 
# Purpose: Replace legacy Tailwind-style spacing slugs with Ollie theme slugs
# Author: Die Papier Theme Migration
# Date: 2026-03-02
#
# Legacy → Ollie Mappings:
#   spacing-xs  → x-small
#   spacing-sm  → small
#   spacing-md  → medium
#   spacing-lg  → large
#   spacing-xl  → x-large
#   spacing-2xl → xx-large
#   spacing-3xl → xxx-large
#
# Usage:
#   ./migrate-spacing-slugs.sh [--dry-run] [--pattern-dir=/path/to/patterns]
#
# Options:
#   --dry-run        Preview changes without modifying files
#   --pattern-dir    Override default pattern directory path
##############################################################################

set -e  # Exit on error

# Default configuration
PATTERN_DIR="../wordpress-export/themes/die-papier-theme/patterns"
DRY_RUN=false
BACKUP_DIR="../backups/spacing-migration-$(date +%Y%m%d-%H%M%S)"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --pattern-dir=*)
      PATTERN_DIR="${1#*=}"
      shift
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

# Validate pattern directory exists
if [ ! -d "$PATTERN_DIR" ]; then
  echo -e "${RED}Error: Pattern directory not found: $PATTERN_DIR${NC}"
  exit 1
fi

# Print header
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Spacing Slug Migration Script${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Pattern Directory: ${YELLOW}$PATTERN_DIR${NC}"
echo -e "Dry Run: ${YELLOW}$DRY_RUN${NC}"
echo ""

# Create backup directory if not dry run
if [ "$DRY_RUN" = false ]; then
  mkdir -p "$BACKUP_DIR"
  echo -e "${GREEN}✓${NC} Backup directory created: $BACKUP_DIR"
  echo ""
fi

# Define migration mappings (order matters - do longest patterns first to avoid partial replacements)
declare -A MAPPINGS=(
  ["spacing-3xl"]="xxx-large"
  ["spacing-2xl"]="xx-large"
  ["spacing-xl"]="x-large"
  ["spacing-xs"]="x-small"
  ["spacing-lg"]="large"
  ["spacing-md"]="medium"
  ["spacing-sm"]="small"
)

# Counters
total_files=0
modified_files=0
total_replacements=0

# Find all PHP files in pattern directory (recursive)
echo -e "${BLUE}Scanning pattern files...${NC}"
echo ""

while IFS= read -r -d '' file; do
  ((total_files++))
  
  file_modified=false
  file_replacements=0
  
  # Read file content
  content=$(cat "$file")
  new_content="$content"
  
  # Apply each mapping
  for old_slug in "${!MAPPINGS[@]}"; do
    new_slug="${MAPPINGS[$old_slug]}"
    
    # Count occurrences in this file
    count=$(echo "$content" | grep -o "$old_slug" | wc -l)
    
    if [ "$count" -gt 0 ]; then
      file_modified=true
      ((file_replacements += count))
      
      # Replace all occurrences
      # Context-aware replacement: only replace in:
      # - spacing|spacing| patterns
      # - preset|spacing|slug patterns
      # - var:preset|spacing|slug patterns
      new_content=$(echo "$new_content" | sed -E "s/spacing\\|${old_slug}/spacing|${new_slug}/g")
      
      if [ "$DRY_RUN" = true ]; then
        echo -e "  ${YELLOW}[DRY RUN]${NC} Would replace ${RED}$old_slug${NC} → ${GREEN}$new_slug${NC} ($count occurrence(s)) in:"
        echo -e "    $file"
      else
        echo -e "  ${GREEN}✓${NC} Replaced ${RED}$old_slug${NC} → ${GREEN}$new_slug${NC} ($count occurrence(s)) in:"
        echo -e "    $file"
      fi
    fi
  done
  
  # If file was modified, write changes (unless dry run)
  if [ "$file_modified" = true ]; then
    ((modified_files++))
    ((total_replacements += file_replacements))
    
    if [ "$DRY_RUN" = false ]; then
      # Backup original file
      backup_path="$BACKUP_DIR/$(basename "$file")"
      cp "$file" "$backup_path"
      
      # Write new content
      echo "$new_content" > "$file"
    fi
  fi
  
done < <(find "$PATTERN_DIR" -type f -name "*.php" -print0)

# Print summary
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Migration Summary${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Total files scanned:    ${YELLOW}$total_files${NC}"
echo -e "Files modified:         ${GREEN}$modified_files${NC}"
echo -e "Total replacements:     ${GREEN}$total_replacements${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${YELLOW}  DRY RUN COMPLETE - No files were modified${NC}"
  echo -e "${YELLOW}  Run without --dry-run to apply changes${NC}"
  echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
else
  echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${GREEN}  MIGRATION COMPLETE ✓${NC}"
  echo -e "${GREEN}  Backups saved to: $BACKUP_DIR${NC}"
  echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
fi

echo ""

# Exit successfully
exit 0
