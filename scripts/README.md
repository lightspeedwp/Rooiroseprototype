# Scripts Directory

This directory contains utility scripts for repository maintenance and development workflows.

---

## Available Scripts

### `cleanup-icon-files.sh`

**Purpose:** Safely remove macOS Finder `Icon\r` files from the repository.

**Background:** macOS creates invisible `Icon\r` files when custom folder icons are set. These files can:
- Corrupt Git references if accidentally committed
- Create noise in `git status` output
- Cause sync issues across different operating systems

**Usage:**

```bash
# Preview what will be deleted (recommended first run)
./scripts/cleanup-icon-files.sh --dry-run

# Actually delete the Icon files
./scripts/cleanup-icon-files.sh
```

**What it does:**

1. Scans the repository for all `Icon` files (tracked and untracked)
2. Reports how many files were found
3. Shows a sample of files to be removed
4. Prompts for confirmation before deleting (unless `--dry-run`)
5. Removes untracked files from filesystem
6. Removes tracked files from Git index (stages them for deletion)
7. Verifies `.gitignore` configuration

**After running:**

If tracked Icon files were found and removed:
```bash
# Review what was staged
git status

# Commit the cleanup
git commit -m "Remove macOS Icon files"

# Push to remote
git push
```

**Prevention:**

The `.gitignore` file in the repository root now includes:
```
Icon?
Icon
```

This prevents future `Icon\r` files from being accidentally committed.

---

## Script Maintenance

**Last updated:** 2026-03-01

**Author:** Die Papier Development Team

**Related documentation:**
- Git ref corruption resolution: See project memory or `.git-notes/`
- macOS filesystem compatibility: See development guidelines

---

## Adding New Scripts

When adding new scripts to this directory:

1. **Make them executable:**
   ```bash
   chmod +x scripts/your-script.sh
   ```

2. **Add a header block** with:
   - Brief description
   - Usage instructions
   - Creation date

3. **Update this README** with:
   - Script name and purpose
   - Usage examples
   - Expected behavior

4. **Test with `--dry-run`** flag when dealing with file operations
