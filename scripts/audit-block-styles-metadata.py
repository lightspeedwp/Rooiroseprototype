#!/usr/bin/env python3
"""
Block Styles Metadata Audit Script
Audits all JSON files in /styles/blocks/ for WordPress 6.6+ compliance
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Any
from collections import defaultdict

# Configuration
THEME_PATH = Path("wordpress-export/themes/die-papier-theme")
BLOCKS_PATH = THEME_PATH / "styles" / "blocks"
REQUIRED_SCHEMA = "https://schemas.wp.org/wp/6.8/theme.json"
REQUIRED_VERSION = 3

# Findings storage
findings = {
    "critical": [],  # P0 - Missing required fields
    "high": [],      # P1 - Missing recommended fields
    "medium": [],    # P2 - Invalid/deprecated fields
    "low": [],       # P3 - Hardcoded values
    "info": []       # Info - General observations
}

stats = {
    "total_files": 0,
    "files_with_issues": 0,
    "critical_count": 0,
    "high_count": 0,
    "medium_count": 0,
    "low_count": 0
}

def validate_slug_convention(file_path: Path, data: Dict) -> List[str]:
    """Validate slug naming convention based on block namespace."""
    issues = []
    
    if "slug" not in data:
        issues.append(f"CRITICAL: Missing required 'slug' field")
        return issues
    
    slug = data["slug"]
    block_types = data.get("blockTypes", [])
    
    if not block_types:
        issues.append(f"CRITICAL: Missing required 'blockTypes' field")
        return issues
    
    block_type = block_types[0] if block_types else ""
    parts = file_path.parts
    
    # Determine expected slug pattern based on directory structure
    if "woocommerce" in parts:
        # WooCommerce blocks should use wc- prefix
        if file_path.name == "default.json":
            expected_pattern = "wc-{blockname}-default"
        else:
            expected_pattern = "wc-{blockname}-{stylename}"
        
        if not slug.startswith("wc-"):
            issues.append(f"WARNING: WooCommerce block slug should start with 'wc-' (got '{slug}')")
    
    elif "outermost" in parts or "yoast" in parts or "yoast-seo" in parts or "gravityforms" in parts:
        # Third-party blocks
        namespace = None
        if "outermost" in parts:
            namespace = "outermost"
        elif "yoast" in parts:
            namespace = "yoast"
        elif "yoast-seo" in parts:
            namespace = "yoast"
        elif "gravityforms" in parts:
            namespace = "gravityforms"
        
        if namespace and not slug.startswith(f"{namespace}-"):
            issues.append(f"WARNING: Third-party block slug should start with '{namespace}-' (got '{slug}')")
    
    else:
        # Core blocks
        if file_path.name == "default.json":
            # Should be {blockname}-default
            parent_dir = file_path.parent.name
            if not slug.endswith("-default"):
                issues.append(f"WARNING: Core block default slug should end with '-default' (got '{slug}')")
        else:
            # Should be {blockname}-{stylename}
            pass  # More lenient for non-default styles
    
    return issues

def validate_block_types(file_path: Path, data: Dict) -> List[str]:
    """Validate blockTypes field."""
    issues = []
    
    if "blockTypes" not in data:
        issues.append(f"CRITICAL: Missing required 'blockTypes' field")
        return issues
    
    block_types = data["blockTypes"]
    
    if not isinstance(block_types, list):
        issues.append(f"CRITICAL: 'blockTypes' must be an array (got {type(block_types).__name__})")
        return issues
    
    if len(block_types) == 0:
        issues.append(f"CRITICAL: 'blockTypes' array is empty")
        return issues
    
    # Validate block type format
    for block_type in block_types:
        if not isinstance(block_type, str):
            issues.append(f"WARNING: blockTypes entry must be string (got {type(block_type).__name__})")
            continue
        
        if "/" not in block_type:
            issues.append(f"WARNING: blockTypes entry should use namespace/name format (got '{block_type}')")
    
    return issues

def check_hardcoded_values(file_path: Path, data: Dict) -> List[str]:
    """Check for hardcoded color/spacing/size values."""
    issues = []
    
    if "styles" not in data:
        return issues
    
    styles = data["styles"]
    
    def check_property(obj, path=""):
        """Recursively check for hardcoded values."""
        if isinstance(obj, dict):
            for key, value in obj.items():
                new_path = f"{path}.{key}" if path else key
                
                # Check for hardcoded colors (hex, rgb, rgba)
                if isinstance(value, str):
                    if value.startswith("#") or value.startswith("rgb"):
                        issues.append(f"HARDCODED: {new_path} = '{value}' (should use preset)")
                    elif value and not value.startswith("var:"):
                        # Check common properties that should use presets
                        if key in ["fontSize", "fontFamily", "fontWeight", "lineHeight"]:
                            if not value.startswith("var:preset"):
                                issues.append(f"HARDCODED: {new_path} = '{value}' (should use preset)")
                
                check_property(value, new_path)
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                check_property(item, f"{path}[{i}]")
    
    check_property(styles)
    return issues

def audit_json_file(file_path: Path) -> Dict[str, Any]:
    """Audit a single JSON file."""
    relative_path = file_path.relative_to(THEME_PATH)
    result = {
        "path": str(relative_path),
        "issues": []
    }
    
    # Read and parse JSON
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        result["issues"].append(f"CRITICAL: Invalid JSON syntax - {e}")
        findings["critical"].append(result)
        stats["critical_count"] += 1
        return result
    except Exception as e:
        result["issues"].append(f"CRITICAL: Failed to read file - {e}")
        findings["critical"].append(result)
        stats["critical_count"] += 1
        return result
    
    # Check required fields
    if "version" not in data:
        result["issues"].append("CRITICAL: Missing required 'version' field (must be 3)")
        stats["critical_count"] += 1
    elif data["version"] != REQUIRED_VERSION:
        result["issues"].append(f"CRITICAL: Invalid version '{data['version']}' (must be 3)")
        stats["critical_count"] += 1
    
    if "title" not in data:
        result["issues"].append("CRITICAL: Missing required 'title' field")
        stats["critical_count"] += 1
    elif not data["title"]:
        result["issues"].append("CRITICAL: 'title' field is empty")
        stats["critical_count"] += 1
    
    # Check recommended fields
    if "$schema" not in data:
        result["issues"].append(f"HIGH: Missing recommended '$schema' field (should be '{REQUIRED_SCHEMA}')")
        stats["high_count"] += 1
    elif data["$schema"] != REQUIRED_SCHEMA:
        result["issues"].append(f"HIGH: Incorrect $schema '{data['$schema']}' (should be '{REQUIRED_SCHEMA}')")
        stats["high_count"] += 1
    
    # Validate slug convention
    slug_issues = validate_slug_convention(file_path, data)
    for issue in slug_issues:
        result["issues"].append(issue)
        if "CRITICAL" in issue:
            stats["critical_count"] += 1
        else:
            stats["medium_count"] += 1
    
    # Validate blockTypes
    block_type_issues = validate_block_types(file_path, data)
    for issue in block_type_issues:
        result["issues"].append(issue)
        if "CRITICAL" in issue:
            stats["critical_count"] += 1
        else:
            stats["medium_count"] += 1
    
    # Check for invalid fields
    if "description" in data:
        result["issues"].append("MEDIUM: Invalid 'description' field (not supported in standalone JSON styles)")
        stats["medium_count"] += 1
    
    # Check for hardcoded values
    hardcoded_issues = check_hardcoded_values(file_path, data)
    for issue in hardcoded_issues:
        result["issues"].append(issue)
        stats["low_count"] += 1
    
    # Check if styles object exists
    if "styles" not in data:
        result["issues"].append("WARNING: No 'styles' object found")
        stats["medium_count"] += 1
    
    # Categorize by severity
    if any("CRITICAL" in issue for issue in result["issues"]):
        findings["critical"].append(result)
    elif any("HIGH" in issue for issue in result["issues"]):
        findings["high"].append(result)
    elif any("MEDIUM" in issue or "WARNING" in issue for issue in result["issues"]):
        findings["medium"].append(result)
    elif any("HARDCODED" in issue for issue in result["issues"]):
        findings["low"].append(result)
    elif result["issues"]:
        findings["info"].append(result)
    
    return result

def main():
    """Main audit function."""
    print("=" * 80)
    print("BLOCK STYLES METADATA AUDIT")
    print("=" * 80)
    print()
    
    if not BLOCKS_PATH.exists():
        print(f"ERROR: Blocks path not found: {BLOCKS_PATH}")
        return
    
    print(f"Scanning: {BLOCKS_PATH}")
    print()
    
    # Find all JSON files
    json_files = list(BLOCKS_PATH.rglob("*.json"))
    stats["total_files"] = len(json_files)
    
    print(f"Found {len(json_files)} JSON files")
    print()
    
    # Audit each file
    for json_file in sorted(json_files):
        result = audit_json_file(json_file)
        if result["issues"]:
            stats["files_with_issues"] += 1
    
    # Print summary
    print("=" * 80)
    print("AUDIT SUMMARY")
    print("=" * 80)
    print()
    print(f"Total files audited:     {stats['total_files']}")
    print(f"Files with issues:       {stats['files_with_issues']}")
    print(f"Files without issues:    {stats['total_files'] - stats['files_with_issues']}")
    print()
    print(f"Critical errors (P0):    {stats['critical_count']}")
    print(f"High priority (P1):      {stats['high_count']}")
    print(f"Medium priority (P2):    {stats['medium_count']}")
    print(f"Low priority (P3):       {stats['low_count']}")
    print()
    
    # Print findings by severity
    for severity in ["critical", "high", "medium", "low"]:
        if findings[severity]:
            print("=" * 80)
            print(f"{severity.upper()} FINDINGS ({len(findings[severity])} files)")
            print("=" * 80)
            print()
            
            for finding in findings[severity]:
                print(f"📄 {finding['path']}")
                for issue in finding["issues"]:
                    print(f"   • {issue}")
                print()
    
    # Save detailed report
    report_path = Path("reports/audits/block-styles-metadata-audit.md")
    report_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# Block Styles Metadata Audit\n\n")
        f.write(f"**Generated**: 2026-03-03\n")
        f.write(f"**Files Audited**: {stats['total_files']}\n\n")
        
        f.write("## Executive Summary\n\n")
        f.write(f"- Total files: {stats['total_files']}\n")
        f.write(f"- Files with issues: {stats['files_with_issues']}\n")
        f.write(f"- Files without issues: {stats['total_files'] - stats['files_with_issues']}\n")
        f.write(f"- Critical errors (P0): {stats['critical_count']}\n")
        f.write(f"- High priority (P1): {stats['high_count']}\n")
        f.write(f"- Medium priority (P2): {stats['medium_count']}\n")
        f.write(f"- Low priority (P3): {stats['low_count']}\n\n")
        
        f.write("---\n\n")
        
        for severity in ["critical", "high", "medium", "low"]:
            if findings[severity]:
                severity_label = {
                    "critical": "Critical (P0) — Missing Required Fields / Syntax Errors",
                    "high": "High (P1) — Missing Recommended Fields",
                    "medium": "Medium (P2) — Invalid/Deprecated Fields / Warnings",
                    "low": "Low (P3) — Hardcoded Values"
                }
                
                f.write(f"## {severity_label[severity]}\n\n")
                f.write(f"**Total files affected**: {len(findings[severity])}\n\n")
                
                for finding in findings[severity]:
                    f.write(f"### `{finding['path']}`\n\n")
                    for issue in finding["issues"]:
                        f.write(f"- {issue}\n")
                    f.write("\n")
                
                f.write("---\n\n")
        
        if stats['files_with_issues'] == 0:
            f.write("## 🎉 All Files Compliant\n\n")
            f.write("All block style JSON files passed validation with no issues detected.\n\n")
    
    print(f"📊 Detailed report saved to: {report_path}")
    print()

if __name__ == "__main__":
    main()
