# Audit I: Unused Selectors & Orphaned CSS Files

**Purpose**: Find CSS files and selectors that are never used, allowing safe deletion.

---

## Output Template

```markdown
## Audit I: Unused Selectors & Orphaned CSS Files

### Orphaned CSS Files

**Files Not Imported Anywhere**:

| File | Size | Last Used | Safe to Delete? | Notes |
|:-----|-----:|:----------|:----------------|:------|
| `theme.css` | 1,135 lines | Replaced by partials | ✅ Yes | System-protected, delete via Git |

**Confirmation Method**:
```bash
# Search all files for import statement
grep -r "theme.css" src/
# Should return zero results
```

### Unused Selectors

**Top 30 Never Referenced**:

| Selector | File | Line | References | Confidence | Safe to Delete? |
|:---------|:-----|-----:|:-----------|:-----------|:----------------|
| `.old-header` | `main.css` | 42 | 0 | High | ✅ Yes |
| `.js-modal` | `utils.css` | 103 | 0 | Medium | ⚠️ Check JS dynamic usage |

**Likely Unused** (low references, needs manual check):

| Selector | File | References | Notes |
|:---------|:-----|:-----------|:------|
| `.legacy-btn` | `buttons.css` | 1 (in comment) | Probably safe |

### Confirmation Strategy

**Automated Search**:
```bash
# Search for class in all React/HTML/Markdown files
grep -r "class-name" src/ --include="*.tsx" --include="*.html" --include="*.md"
```

**Manual Verification**:
1. Check for dynamic class generation (`className={variable}`)
2. Check WordPress patterns/templates
3. Check third-party plugin classes
4. Check data attributes that might apply classes

### Safe Removal Process

**Step 1: Backup**
- Commit current state
- Create branch for cleanup

**Step 2: Automated Detection**
- Run search for each selector
- Flag zero-reference selectors

**Step 3: Manual Review**
- Review "likely unused" list
- Check dynamic usage patterns
- Verify WordPress plugin dependencies

**Step 4: Staged Deletion**
- Delete confirmed-unused selectors
- Test all pages
- Monitor production for 1 week

**Step 5: Orphan File Deletion**
- Delete orphaned files
- Update import statements
- Rebuild and test

### Expected Impact

**CSS Reduction**:
- Orphaned files: ~1,135 lines (`theme.css`)
- Unused selectors: ~200-300 lines (estimated)
- Total: ~1,400 lines removed

**Bundle Size**:
- Estimated reduction: ~15-20 KB (minified + gzipped)
```

---

**Next**: Proceed to Audit J (Accessibility CSS Audit)
