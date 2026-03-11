#!/bin/bash
# Phase 2 Color & Spacing Validation Scanner
# Identifies missing classes and incorrect inline styles

PATTERNS_DIR="../wordpress-export/themes/die-papier-theme/patterns"
OUTPUT_FILE="../reports/block-pattern-validation-phase-2-scan.md"

echo "# Phase 2 Color & Spacing Validation Scan" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "**Date**: $(date +%Y-%m-%d)" >> "$OUTPUT_FILE"
echo "**Scope**: All 177 pattern files" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Issue 1: textColor attribute without has-text-color class
echo "## Issue 1: Missing has-text-color Class" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "**Rule**: textColor attribute requires BOTH has-{color}-color AND has-text-color classes" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

find "$PATTERNS_DIR" -name "*.php" -type f | while read -r file; do
    # Find lines with textColor attribute
    grep -n "\"textColor\":" "$file" | while IFS=: read -r line_num line_content; do
        # Extract color slug
        color=$(echo "$line_content" | grep -o '"textColor":"[^"]*"' | cut -d'"' -f4)
        
        # Check next line for the HTML output
        next_line=$((line_num + 1))
        html_line=$(sed -n "${next_line}p" "$file")
        
        # Check if has-text-color class exists
        if ! echo "$html_line" | grep -q "has-text-color"; then
            rel_path=$(echo "$file" | sed "s|$PATTERNS_DIR/||")
            echo "- **$rel_path** (line $line_num): textColor=\"$color\" missing has-text-color class" >> "$OUTPUT_FILE"
        fi
    done
done

echo "" >> "$OUTPUT_FILE"

# Issue 2: backgroundColor attribute without has-background class  
echo "## Issue 2: Missing has-background Class" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "**Rule**: backgroundColor attribute requires BOTH has-{color}-background-color AND has-background classes" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

find "$PATTERNS_DIR" -name "*.php" -type f | while read -r file; do
    grep -n "\"backgroundColor\":" "$file" | while IFS=: read -r line_num line_content; do
        color=$(echo "$line_content" | grep -o '"backgroundColor":"[^"]*"' | cut -d'"' -f4)
        next_line=$((line_num + 1))
        html_line=$(sed -n "${next_line}p" "$file")
        
        if ! echo "$html_line" | grep -q "has-background"; then
            rel_path=$(echo "$file" | sed "s|$PATTERNS_DIR/||")
            echo "- **$rel_path** (line $line_num): backgroundColor=\"$color\" missing has-background class" >> "$OUTPUT_FILE"
        fi
    done
done

echo "" >> "$OUTPUT_FILE"

# Issue 3: Shorthand padding instead of individual properties
echo "## Issue 3: Shorthand Padding/Margin Inline Styles" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "**Rule**: WordPress outputs individual padding-top, padding-right, etc. NOT shorthand padding" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

find "$PATTERNS_DIR" -name "*.php" -type f | while read -r file; do
    grep -n "style=\".*padding:var(" "$file" | while IFS=: read -r line_num rest; do
        rel_path=$(echo "$file" | sed "s|$PATTERNS_DIR/||")
        echo "- **$rel_path** (line $line_num): Uses shorthand padding: instead of padding-top:, padding-right:, etc." >> "$OUTPUT_FILE"
    done
    
    grep -n "style=\".*margin:var(" "$file" | while IFS=: read -r line_num rest; do
        rel_path=$(echo "$file" | sed "s|$PATTERNS_DIR/||")
        echo "- **$rel_path** (line $line_num): Uses shorthand margin: instead of margin-top:, margin-right:, etc." >> "$OUTPUT_FILE"
    done
done

echo "" >> "$OUTPUT_FILE"
echo "---" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "**End of Scan**" >> "$OUTPUT_FILE"

echo "Phase 2 validation scan complete. Report saved to: $OUTPUT_FILE"
