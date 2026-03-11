#!/usr/bin/env node
/**
 * Block Styles JSON Audit Script - Run 3
 * Comprehensive metadata validation for all block style JSON files
 */

const fs = require('fs');
const path = require('path');

// Configuration
const THEME_PATH = path.join(process.cwd(), 'wordpress-export/themes/die-papier-theme');
const BLOCKS_PATH = path.join(THEME_PATH, 'styles', 'blocks');
const REQUIRED_SCHEMA = 'https://schemas.wp.org/wp/6.8/theme.json';
const REQUIRED_VERSION = 3;

// Findings storage
const findings = {
    critical: [],
    high: [],
    medium: [],
    low: [],
    info: []
};

const stats = {
    total_files: 0,
    files_with_issues: 0,
    critical_count: 0,
    high_count: 0,
    medium_count: 0,
    low_count: 0
};

/**
 * Recursively find all JSON files in a directory
 */
function findJsonFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            findJsonFiles(filePath, fileList);
        } else if (file.endsWith('.json')) {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

/**
 * Validate slug naming convention
 */
function validateSlugConvention(filePath, data) {
    const issues = [];
    
    if (!data.slug) {
        issues.push('CRITICAL: Missing required "slug" field');
        return issues;
    }
    
    const slug = data.slug;
    const blockTypes = data.blockTypes || [];
    const parts = filePath.split(path.sep);
    const fileName = path.basename(filePath);
    
    if (blockTypes.length === 0) {
        issues.push('CRITICAL: Missing required "blockTypes" field');
        return issues;
    }
    
    // Check if it's a WooCommerce block
    if (parts.includes('woocommerce')) {
        if (fileName === 'default.json') {
            if (!slug.startsWith('wc-') || !slug.endsWith('-default')) {
                issues.push(`WARNING: WooCommerce default slug should be "wc-{blockname}-default" (got "${slug}")`);
            }
        } else {
            if (!slug.startsWith('wc-')) {
                issues.push(`WARNING: WooCommerce block slug should start with "wc-" (got "${slug}")`);
            }
        }
    }
    // Check third-party blocks
    else if (parts.includes('outermost') || parts.includes('yoast') || parts.includes('yoast-seo') || parts.includes('gravityforms')) {
        const namespace = parts.find(p => ['outermost', 'yoast', 'gravityforms'].includes(p)) || 'yoast';
        if (!slug.startsWith(`${namespace}-`)) {
            issues.push(`WARNING: Third-party block slug should start with "${namespace}-" (got "${slug}")`);
        }
    }
    // Core blocks
    else {
        if (fileName === 'default.json' && !slug.endsWith('-default')) {
            issues.push(`WARNING: Core block default slug should end with "-default" (got "${slug}")`);
        }
    }
    
    return issues;
}

/**
 * Validate blockTypes field
 */
function validateBlockTypes(filePath, data) {
    const issues = [];
    
    if (!data.blockTypes) {
        issues.push('CRITICAL: Missing required "blockTypes" field');
        return issues;
    }
    
    if (!Array.isArray(data.blockTypes)) {
        issues.push(`CRITICAL: "blockTypes" must be an array (got ${typeof data.blockTypes})`);
        return issues;
    }
    
    if (data.blockTypes.length === 0) {
        issues.push('CRITICAL: "blockTypes" array is empty');
        return issues;
    }
    
    // Validate each block type
    data.blockTypes.forEach(blockType => {
        if (typeof blockType !== 'string') {
            issues.push(`WARNING: blockTypes entry must be string (got ${typeof blockType})`);
        } else if (!blockType.includes('/')) {
            issues.push(`WARNING: blockTypes entry should use namespace/name format (got "${blockType}")`);
        }
    });
    
    return issues;
}

/**
 * Check for hardcoded values
 */
function checkHardcodedValues(data) {
    const issues = [];
    
    if (!data.styles) {
        return issues;
    }
    
    function checkProperty(obj, path = '') {
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                obj.forEach((item, i) => {
                    checkProperty(item, `${path}[${i}]`);
                });
            } else {
                Object.entries(obj).forEach(([key, value]) => {
                    const newPath = path ? `${path}.${key}` : key;
                    
                    if (typeof value === 'string') {
                        // Check for hardcoded colors
                        if (value.startsWith('#') || value.startsWith('rgb')) {
                            issues.push(`HARDCODED: ${newPath} = "${value}" (should use preset)`);
                        }
                        // Check common properties that should use presets
                        else if (['fontSize', 'fontFamily', 'fontWeight', 'lineHeight'].includes(key)) {
                            if (value && !value.startsWith('var:preset')) {
                                // Exception: numeric fontWeight values are acceptable
                                if (key === 'fontWeight' && !isNaN(value)) {
                                    // OK
                                } else {
                                    issues.push(`HARDCODED: ${newPath} = "${value}" (should use preset)`);
                                }
                            }
                        }
                    } else {
                        checkProperty(value, newPath);
                    }
                });
            }
        }
    }
    
    checkProperty(data.styles);
    return issues;
}

/**
 * Audit a single JSON file
 */
function auditJsonFile(filePath) {
    const relativePath = path.relative(THEME_PATH, filePath);
    const result = {
        path: relativePath,
        issues: []
    };
    
    // Read and parse JSON
    let data;
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(content);
    } catch (e) {
        if (e instanceof SyntaxError) {
            result.issues.push(`CRITICAL: Invalid JSON syntax - ${e.message}`);
        } else {
            result.issues.push(`CRITICAL: Failed to read file - ${e.message}`);
        }
        findings.critical.push(result);
        stats.critical_count++;
        return result;
    }
    
    // Check required fields
    if (!data.version) {
        result.issues.push('CRITICAL: Missing required "version" field (must be 3)');
        stats.critical_count++;
    } else if (data.version !== REQUIRED_VERSION) {
        result.issues.push(`CRITICAL: Invalid version "${data.version}" (must be 3)`);
        stats.critical_count++;
    }
    
    if (!data.title) {
        result.issues.push('CRITICAL: Missing required "title" field');
        stats.critical_count++;
    } else if (!data.title.trim()) {
        result.issues.push('CRITICAL: "title" field is empty');
        stats.critical_count++;
    }
    
    // Check recommended fields
    if (!data.$schema) {
        result.issues.push(`HIGH: Missing recommended "$schema" field (should be "${REQUIRED_SCHEMA}")`);
        stats.high_count++;
    } else if (data.$schema !== REQUIRED_SCHEMA) {
        result.issues.push(`HIGH: Incorrect $schema "${data.$schema}" (should be "${REQUIRED_SCHEMA}")`);
        stats.high_count++;
    }
    
    // Validate slug
    const slugIssues = validateSlugConvention(filePath, data);
    slugIssues.forEach(issue => {
        result.issues.push(issue);
        if (issue.includes('CRITICAL')) {
            stats.critical_count++;
        } else {
            stats.medium_count++;
        }
    });
    
    // Validate blockTypes
    const blockTypeIssues = validateBlockTypes(filePath, data);
    blockTypeIssues.forEach(issue => {
        result.issues.push(issue);
        if (issue.includes('CRITICAL')) {
            stats.critical_count++;
        } else {
            stats.medium_count++;
        }
    });
    
    // Check for invalid fields
    if (data.description) {
        result.issues.push('MEDIUM: Invalid "description" field (not supported in standalone JSON styles)');
        stats.medium_count++;
    }
    
    // Check for hardcoded values
    const hardcodedIssues = checkHardcodedValues(data);
    hardcodedIssues.forEach(issue => {
        result.issues.push(issue);
        stats.low_count++;
    });
    
    // Check if styles object exists
    if (!data.styles) {
        result.issues.push('WARNING: No "styles" object found');
        stats.medium_count++;
    }
    
    // Categorize by severity
    if (result.issues.some(i => i.includes('CRITICAL'))) {
        findings.critical.push(result);
    } else if (result.issues.some(i => i.includes('HIGH'))) {
        findings.high.push(result);
    } else if (result.issues.some(i => i.includes('MEDIUM') || i.includes('WARNING'))) {
        findings.medium.push(result);
    } else if (result.issues.some(i => i.includes('HARDCODED'))) {
        findings.low.push(result);
    } else if (result.issues.length > 0) {
        findings.info.push(result);
    }
    
    if (result.issues.length > 0) {
        stats.files_with_issues++;
    }
    
    return result;
}

/**
 * Main audit function
 */
function main() {
    console.log('='.repeat(80));
    console.log('BLOCK STYLES METADATA AUDIT - RUN 3');
    console.log('='.repeat(80));
    console.log();
    
    if (!fs.existsSync(BLOCKS_PATH)) {
        console.error(`ERROR: Blocks path not found: ${BLOCKS_PATH}`);
        process.exit(1);
    }
    
    console.log(`Scanning: ${BLOCKS_PATH}`);
    console.log();
    
    // Find all JSON files
    const jsonFiles = findJsonFiles(BLOCKS_PATH).sort();
    stats.total_files = jsonFiles.length;
    
    console.log(`Found ${jsonFiles.length} JSON files\n`);
    
    // Audit each file
    jsonFiles.forEach(auditJsonFile);
    
    // Print summary
    console.log('='.repeat(80));
    console.log('AUDIT SUMMARY');
    console.log('='.repeat(80));
    console.log();
    console.log(`Total files audited:     ${stats.total_files}`);
    console.log(`Files with issues:       ${stats.files_with_issues}`);
    console.log(`Files without issues:    ${stats.total_files - stats.files_with_issues}`);
    console.log();
    console.log(`Critical errors (P0):    ${stats.critical_count}`);
    console.log(`High priority (P1):      ${stats.high_count}`);
    console.log(`Medium priority (P2):    ${stats.medium_count}`);
    console.log(`Low priority (P3):       ${stats.low_count}`);
    console.log();
    
    // Print findings by severity
    ['critical', 'high', 'medium', 'low'].forEach(severity => {
        if (findings[severity].length > 0) {
            console.log('='.repeat(80));
            console.log(`${severity.toUpperCase()} FINDINGS (${findings[severity].length} files)`);
            console.log('='.repeat(80));
            console.log();
            
            findings[severity].forEach(finding => {
                console.log(`📄 ${finding.path}`);
                finding.issues.forEach(issue => {
                    console.log(`   • ${issue}`);
                });
                console.log();
            });
        }
    });
    
    // Save detailed report
    const reportDir = path.join(process.cwd(), 'reports', 'audits');
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportPath = path.join(reportDir, 'block-styles-metadata-audit.md');
    let report = '';
    
    report += '# Block Styles Metadata Audit\n\n';
    report += `**Generated**: 2026-03-03\n`;
    report += `**Files Audited**: ${stats.total_files}\n\n`;
    
    report += '## Executive Summary\n\n';
    report += `- Total files: ${stats.total_files}\n`;
    report += `- Files with issues: ${stats.files_with_issues}\n`;
    report += `- Files without issues: ${stats.total_files - stats.files_with_issues}\n`;
    report += `- Critical errors (P0): ${stats.critical_count}\n`;
    report += `- High priority (P1): ${stats.high_count}\n`;
    report += `- Medium priority (P2): ${stats.medium_count}\n`;
    report += `- Low priority (P3): ${stats.low_count}\n\n`;
    
    report += '---\n\n';
    
    const severityLabels = {
        critical: 'Critical (P0) — Missing Required Fields / Syntax Errors',
        high: 'High (P1) — Missing Recommended Fields',
        medium: 'Medium (P2) — Invalid/Deprecated Fields / Warnings',
        low: 'Low (P3) — Hardcoded Values'
    };
    
    ['critical', 'high', 'medium', 'low'].forEach(severity => {
        if (findings[severity].length > 0) {
            report += `## ${severityLabels[severity]}\n\n`;
            report += `**Total files affected**: ${findings[severity].length}\n\n`;
            
            findings[severity].forEach(finding => {
                report += `### \`${finding.path}\`\n\n`;
                finding.issues.forEach(issue => {
                    report += `- ${issue}\n`;
                });
                report += '\n';
            });
            
            report += '---\n\n';
        }
    });
    
    if (stats.files_with_issues === 0) {
        report += '## 🎉 All Files Compliant\n\n';
        report += 'All block style JSON files passed validation with no issues detected.\n\n';
    }
    
    fs.writeFileSync(reportPath, report, 'utf8');
    
    console.log(`📊 Detailed report saved to: ${reportPath}`);
    console.log();
    
    // Exit with appropriate code
    process.exit(stats.critical_count > 0 ? 1 : 0);
}

// Run the audit
main();
