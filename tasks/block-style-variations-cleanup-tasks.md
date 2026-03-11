# Block Style Variations Cleanup Task List

**Date Created**: 2026-03-04  
**Status**: ⏸️ **AWAITING USER APPROVAL**  
**Reference**: `/reports/block-style-variations-audit-2026-03-04.md`

---

## ⚠️ CRITICAL: Read Before Approval

This task list will **DELETE 6-8 files** and **modify theme.json**. Please review carefully:

1. ✅ All deletions are WordPress core variation duplicates
2. ✅ All styles will be preserved (migrated to theme.json)
3. ✅ No custom variations will be lost
4. ✅ Block Editor will show cleaner variation lists

**Estimated Time**: 1-2 hours  
**Risk Level**: Low (reversible via Git)

---

## Phase 1: Confirmed Deletions (6 files)

### WordPress Core Variation Duplicates

These files duplicate WordPress core variations and MUST be deleted:

```bash
# Button outline variations (2 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/button/outline.json
/wordpress-export/themes/die-papier-theme/styles/blocks/button/outline.json

# Image rounded variations (2 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/image/rounded.json
/wordpress-export/themes/die-papier-theme/styles/blocks/image/rounded.json

# Separator wide variations (2 files)
/wordpress-export/themes/die-papier-theme/styles/blocks/core/separator/wide.json
/wordpress-export/themes/die-papier-theme/styles/blocks/separator/wide.json
```

**Deletion Count**: **6 files**

---

## Phase 2: Slug Investigation Required (3 files)

### Files with Potential Slug Mismatches

Before deleting, we need to verify if these are attempting to be WordPress core variations:

#### separator/dots.json
- **Current Slug**: `separator-dots`
- **WordPress Core Slug**: `dots` (for core/separator)
- **Question**: Is this supposed to be the WordPress "dots" variation?
- **If YES**: DELETE file, add to theme.json
- **If NO**: KEEP file, rename slug to be clearly custom (e.g., `custom-dots`)

#### quote/plain.json
- **Current Slug**: `quote-plain`
- **WordPress Core Slug**: `plain` (for core/quote)
- **Question**: Is this supposed to be the WordPress "plain" variation?
- **If YES**: DELETE file, add to theme.json
- **If NO**: KEEP file, rename slug to be clearly custom (e.g., `custom-plain`)

#### core/table/striped.json
- **Current Slug**: `striped`
- **WordPress Core Slug**: `stripes` (for core/table)
- **Question**: Is this a typo? Should it be "stripes"?
- **If YES**: DELETE file, add to theme.json as "stripes"
- **If NO**: KEEP file as custom "striped" variation

**User Decision Required**: Review these 3 files before Phase 2 execution

---

## Phase 3: Duplicate Resolution (1 pair)

### group/card.json vs core/group/card.json

Both files have slug: `card`

**Comparison Needed**:
- Read both files
- Determine which has better implementation
- Delete the inferior version
- Keep the better version

**Files**:
```bash
/wordpress-export/themes/die-papier-theme/styles/blocks/group/card.json
/wordpress-export/themes/die-papier-theme/styles/blocks/core/group/card.json
```

**User Decision Required**: Which version to keep?

---

## Phase 4: theme.json Migration

### Styles to Add to theme.json

Based on deleted files, add these variation sections to `theme.json`:

#### 1. core/button → outline variation

```json
{
  "version": 3,
  "styles": {
    "blocks": {
      "core/button": {
        "variations": {
          "outline": {
            "border": {
              "color": "var:preset|color|primary",
              "width": "2px",
              "style": "solid",
              "radius": "var(--wp--custom--border-radius--200)"
            },
            "color": {
              "background": "transparent",
              "text": "var:preset|color|primary"
            },
            "spacing": {
              "padding": {
                "top": "calc(0.75rem - 2px)",
                "right": "calc(1.5rem - 2px)",
                "bottom": "calc(0.75rem - 2px)",
                "left": "calc(1.5rem - 2px)"
              }
            },
            "typography": {
              "fontFamily": "var:preset|font-family|brand-sans",
              "fontSize": "var:preset|font-size|base",
              "fontWeight": "600"
            },
            ":hover": {
              "color": {
                "background": "var:preset|color|primary",
                "text": "var:preset|color|base"
              },
              "shadow": "var(--wp--preset--shadow--200)"
            }
          }
        }
      }
    }
  }
}
```

---

#### 2. core/image → rounded variation

```json
{
  "version": 3,
  "styles": {
    "blocks": {
      "core/image": {
        "variations": {
          "rounded": {
            "border": {
              "radius": "var(--wp--custom--border-radius--200)"
            },
            "spacing": {
              "margin": {
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
              }
            }
          }
        }
      }
    }
  }
}
```

---

#### 3. core/separator → wide variation

```json
{
  "version": 3,
  "styles": {
    "blocks": {
      "core/separator": {
        "variations": {
          "wide": {
            "color": {
              "text": "var:preset|color|border-light"
            },
            "css": "height: 1px; width: 100%; border: none;"
          }
        }
      }
    }
  }
}
```

---

### Optional: Add Missing WordPress Core Variations

WordPress 6.2+ supports these variations that we don't currently have:

#### 4. core/button → fill variation (optional)

```json
{
  "core/button": {
    "variations": {
      "fill": {
        "color": {
          "background": "var:preset|color|primary",
          "text": "var:preset|color|base"
        }
      }
    }
  }
}
```

---

#### 5. core/site-logo → rounded variation (optional)

```json
{
  "core/site-logo": {
    "variations": {
      "rounded": {
        "border": {
          "radius": "9999px"
        }
      }
    }
  }
}
```

---

#### 6. core/social-links → logos-only variation (optional)

```json
{
  "core/social-links": {
    "variations": {
      "logos-only": {
        "color": {
          "background": "transparent"
        }
      }
    }
  }
}
```

---

#### 7. core/social-links → pill-shape variation (optional)

```json
{
  "core/social-links": {
    "variations": {
      "pill-shape": {
        "border": {
          "radius": "40px"
        }
      }
    }
  }
}
```

---

#### 8. core/tag-cloud → outline variation (optional)

```json
{
  "core/tag-cloud": {
    "variations": {
      "outline": {
        "border": {
          "width": "1px",
          "style": "solid"
        },
        "spacing": {
          "padding": {
            "top": "0.25rem",
            "bottom": "0.25rem",
            "left": "0.5rem",
            "right": "0.5rem"
          }
        }
      }
    }
  }
}
```

---

## Phase 5: Verification Checklist

After executing all approved tasks:

### File System Verification
- [ ] Verify 6 files deleted from `/styles/blocks/`
- [ ] Verify theme.json has new `variations` sections
- [ ] Verify no duplicate variation slugs remain
- [ ] Run file count: should be ~62-64 files (down from 70)

### WordPress Block Editor Verification
- [ ] Test Button block → Check "Outline" variation appears
- [ ] Test Image block → Check "Rounded" variation appears
- [ ] Test Separator block → Check "Wide" variation appears
- [ ] Verify no duplicate variations in style picker
- [ ] Test that custom variations still work

### Git Commit Checklist
- [ ] Commit deleted files: `git rm styles/blocks/...`
- [ ] Commit theme.json changes
- [ ] Write descriptive commit message
- [ ] Tag commit: `v1.x.x-block-variations-cleanup`

---

## Execution Order

### Step-by-Step Process

1. ✅ **Backup Current State**
   ```bash
   git add -A
   git commit -m "Backup before block variations cleanup"
   ```

2. ✅ **Phase 1: Delete Confirmed Files** (6 files)
   - Delete button outline files (2)
   - Delete image rounded files (2)
   - Delete separator wide files (2)

3. ⏸️ **Phase 2: Investigate Slug Mismatches** (user decision)
   - Review separator/dots.json
   - Review quote/plain.json
   - Review core/table/striped.json
   - Delete or rename based on decision

4. ⏸️ **Phase 3: Resolve group/card Duplicate** (user decision)
   - Compare implementations
   - Delete inferior version

5. ✅ **Phase 4: Update theme.json**
   - Add button outline variation
   - Add image rounded variation
   - Add separator wide variation
   - Optionally add missing core variations (5 more)

6. ✅ **Phase 5: Verify & Test**
   - Run verification checklist
   - Test in WordPress Block Editor
   - Commit changes

---

## Summary

### Files Affected

| Category | Count | Action |
|:---------|:------|:-------|
| **Confirmed Deletions** | 6 files | DELETE |
| **Investigation Required** | 3 files | User decision |
| **Duplicate Resolution** | 1 pair | User decision |
| **theme.json Additions** | 3-8 sections | ADD |

### Time Estimate

| Phase | Duration |
|:------|:---------|
| Phase 1: Confirmed Deletions | 15 min |
| Phase 2: Investigation | 30 min |
| Phase 3: Duplicate Resolution | 15 min |
| Phase 4: theme.json Migration | 30 min |
| Phase 5: Verification | 30 min |
| **TOTAL** | **2 hours** |

### Risk Assessment

| Risk | Mitigation |
|:-----|:-----------|
| Accidentally delete custom variations | ✅ Audit report identifies all custom variations to keep |
| Lose styles during migration | ✅ All styles extracted and preserved in theme.json |
| Break existing patterns | ✅ Verification checklist tests all variations |
| Git history loss | ✅ Backup commit created first |

---

## Approval Required

**Please review and approve**:

1. ✅ Phase 1 deletions (6 files) — **APPROVED / REJECTED**
2. ⏸️ Phase 2 decisions (3 files) — **DECISION NEEDED**
3. ⏸️ Phase 3 decision (group/card) — **DECISION NEEDED**
4. ✅ Phase 4 theme.json migration — **APPROVED / REJECTED**
5. ✅ Phase 5 verification steps — **APPROVED / REJECTED**

**Once approved, I will execute all phases systematically.**

---

**Task List Status**: ⏸️ **AWAITING APPROVAL**  
**Created**: 2026-03-04  
**Next Action**: User review and approval

---

**End of Task List**
