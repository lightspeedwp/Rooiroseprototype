#!/bin/bash
###############################################################################
# cleanup-icon-files.sh
# 
# Safe cleanup script to remove macOS Finder Icon\r files from the repository.
# These files are created by macOS when custom folder icons are set and can
# corrupt Git references if accidentally committed.
#
# Usage:
#   ./scripts/cleanup-icon-files.sh [--dry-run]
#
# Options:
#   --dry-run    Show what would be deleted without actually deleting
#
# Created: 2026-03-01
###############################################################################

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
    DRY_RUN=true
fi

# Function to print colored messages
print_info() {
    echo -e "${BLUE}ℹ ${NC}$1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Header
echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  macOS Icon File Cleanup Script"
echo "═══════════════════════════════════════════════════════════════"
echo ""

if [ "$DRY_RUN" = true ]; then
    print_warning "DRY RUN MODE: No files will be deleted"
    echo ""
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "This script must be run from within a Git repository"
    exit 1
fi

# Get repository root
REPO_ROOT=$(git rev-parse --show-toplevel)
cd "$REPO_ROOT"

print_info "Repository root: $REPO_ROOT"
echo ""

# Find all Icon\r files (untracked and tracked)
print_info "Scanning for Icon files (this may take a moment)..."
echo ""

# Count files first
UNTRACKED_COUNT=0
TRACKED_COUNT=0

# Find untracked Icon\r files using git ls-files
# The $'\r' syntax represents a literal carriage return character
UNTRACKED_FILES=$(git ls-files --others --exclude-standard | grep -i "Icon" || true)
if [ -n "$UNTRACKED_FILES" ]; then
    UNTRACKED_COUNT=$(echo "$UNTRACKED_FILES" | wc -l | tr -d ' ')
fi

# Find tracked Icon\r files
TRACKED_FILES=$(git ls-files | grep -i "Icon" || true)
if [ -n "$TRACKED_FILES" ]; then
    TRACKED_COUNT=$(echo "$TRACKED_FILES" | wc -l | tr -d ' ')
fi

TOTAL_COUNT=$((UNTRACKED_COUNT + TRACKED_COUNT))

# Report findings
echo "════════════════════════════════════════════════════════════════"
echo "  Scan Results"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "  Untracked Icon files: $UNTRACKED_COUNT"
echo "  Tracked Icon files:   $TRACKED_COUNT"
echo "  ─────────────────────────────────────────────────────────────"
echo "  Total Icon files:     $TOTAL_COUNT"
echo ""

if [ $TOTAL_COUNT -eq 0 ]; then
    print_success "No Icon files found! Your repository is clean."
    echo ""
    exit 0
fi

# Show sample of files that will be affected
if [ $TOTAL_COUNT -gt 0 ]; then
    echo "════════════════════════════════════════════════════════════════"
    echo "  Sample of files to be removed (first 10):"
    echo "════════════════════════════════════════════════════════════════"
    echo ""
    
    if [ -n "$UNTRACKED_FILES" ]; then
        echo "$UNTRACKED_FILES" | head -10
    fi
    
    if [ -n "$TRACKED_FILES" ]; then
        echo "$TRACKED_FILES" | head -10
    fi
    echo ""
fi

# Prompt for confirmation if not in dry-run mode
if [ "$DRY_RUN" = false ]; then
    echo "════════════════════════════════════════════════════════════════"
    print_warning "WARNING: This will permanently delete $TOTAL_COUNT Icon files!"
    echo "════════════════════════════════════════════════════════════════"
    echo ""
    read -p "Do you want to proceed? (yes/no): " -r
    echo ""
    
    if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
        print_info "Cleanup cancelled by user"
        exit 0
    fi
fi

# Remove untracked Icon files
if [ $UNTRACKED_COUNT -gt 0 ]; then
    print_info "Removing $UNTRACKED_COUNT untracked Icon files..."
    
    while IFS= read -r file; do
        if [ -f "$file" ]; then
            if [ "$DRY_RUN" = true ]; then
                echo "  [DRY RUN] Would delete: $file"
            else
                rm -f "$file"
                echo "  Deleted: $file"
            fi
        fi
    done <<< "$UNTRACKED_FILES"
    
    if [ "$DRY_RUN" = false ]; then
        print_success "Removed $UNTRACKED_COUNT untracked Icon files"
    fi
    echo ""
fi

# Remove tracked Icon files (requires git rm)
if [ $TRACKED_COUNT -gt 0 ]; then
    print_info "Removing $TRACKED_COUNT tracked Icon files from Git..."
    
    while IFS= read -r file; do
        if [ "$DRY_RUN" = true ]; then
            echo "  [DRY RUN] Would run: git rm --cached \"$file\""
        else
            git rm --cached "$file" 2>/dev/null || true
            echo "  Removed from Git: $file"
        fi
    done <<< "$TRACKED_FILES"
    
    if [ "$DRY_RUN" = false ]; then
        print_success "Removed $TRACKED_COUNT tracked Icon files from Git index"
        echo ""
        print_info "Note: These files are now staged for deletion."
        print_info "Run 'git commit -m \"Remove macOS Icon files\"' to complete the cleanup."
    fi
    echo ""
fi

# Verify .gitignore includes Icon?
print_info "Checking .gitignore configuration..."
if [ -f ".gitignore" ]; then
    if grep -q "Icon" .gitignore; then
        print_success ".gitignore already contains 'Icon' pattern"
    else
        print_warning ".gitignore does not contain 'Icon' pattern"
        print_info "Consider adding 'Icon?' to your .gitignore file"
    fi
else
    print_warning "No .gitignore file found in repository root"
    print_info "Consider creating a .gitignore file with 'Icon?' pattern"
fi

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  Cleanup Complete!"
echo "════════════════════════════════════════════════════════════════"
echo ""

if [ "$DRY_RUN" = true ]; then
    print_info "This was a dry run. Re-run without --dry-run to actually delete files."
else
    print_success "Successfully cleaned $TOTAL_COUNT Icon files from your repository"
    
    if [ $TRACKED_COUNT -gt 0 ]; then
        echo ""
        print_info "Next steps:"
        echo "  1. Review staged changes: git status"
        echo "  2. Commit the changes:    git commit -m \"Remove macOS Icon files\""
        echo "  3. Push to remote:        git push"
    fi
fi

echo ""
