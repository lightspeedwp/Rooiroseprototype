# 🎯 Orchestrator Quick Reference Guide

**Purpose**: Quick reference for all project orchestrators  
**Last Updated**: 2026-03-13

---

## 📋 **ACTIVE ORCHESTRATORS**

### 🔧 **Project Maintenance Orchestrator** (NEW)
**File**: `/prompts/project-maintenance-orchestrator.md`  
**Purpose**: Regular maintenance - cleanup, validation, updates  
**Frequency**: Weekly or before releases  
**Duration**: 1-2 hours (single session)  
**Phases**: 6 phases, 45-55 tasks

**What it does**:
- ✅ Cleans up root folder and /tasks/ directory
- ✅ Validates CSS and JavaScript imports
- ✅ Detects missing routes
- ✅ Updates changelog, guidelines, sitemap
- ✅ Syncs devtools data with codebase
- ✅ Archives completed task lists

**When to run**:
- Every Friday (weekly maintenance)
- Before major releases
- After completing large feature sets
- When you notice broken imports or missing routes

**Usage**:
```
I need you to run the Project Maintenance Orchestrator 
(/prompts/project-maintenance-orchestrator.md). 
This is a regular maintenance session.
```

---

### 🎨 **rooi rose Redesign Orchestrator** ✅ COMPLETE
**File**: `/prompts/rooi-rose-redesign-orchestrator.md`  
**Status**: ✅ All phases complete (100%)  
**Purpose**: Transform Die Papier to rooi rose lifestyle magazine  
**Completion Date**: 2026-03-12

---

### 🏗️ **Content Architecture Orchestrator** ✅ COMPLETE
**File**: `/prompts/rooi-rose-content-architecture-orchestrator.md`  
**Status**: ✅ Complete  
**Purpose**: Implement 10-category lifestyle magazine structure  
**Completion Date**: 2026-03-11

---

### 🎨 **Theme Alignment Audit Orchestrator** ✅ COMPLETE
**File**: `/prompts/theme-alignment-audit-orchestrator.md`  
**Status**: ✅ 42/42 tasks complete  
**Purpose**: Align React with GitHub theme files  
**Completion Date**: 2026-03-06

---

### 🔍 **System Stability Audit Orchestrator** ✅ COMPLETE
**File**: `/prompts/system-stability-audit-orchestrator.md`  
**Status**: ✅ 29/35 tasks complete  
**Purpose**: Fix build errors, configuration issues  
**Completion Date**: 2026-03-04

---

### 🚀 **Performance Optimization Orchestrator** ✅ COMPLETE
**File**: `/prompts/performance-optimization-orchestrator.md`  
**Status**: ✅ All 7 audits complete  
**Purpose**: Code splitting, lazy loading, image optimization  
**Completion Date**: 2026-03-04

---

### ✅ **Block Pattern Validation Orchestrator** ✅ COMPLETE
**File**: `/prompts/block-pattern-validation-orchestrator.md`  
**Status**: ✅ 235 files validated, 0 violations  
**Purpose**: WordPress block pattern validation  
**Completion Date**: 2026-03-04

---

### 📦 **Memory Optimization Orchestrator** ✅ COMPLETE
**File**: `/prompts/performance-optimization-orchestrator.md`  
**Status**: ✅ 53/56 tasks complete  
**Purpose**: CSS decomposition, data barrel cleanup, component splitting  
**Completion Date**: 2026-03-05

---

### 📝 **New Templates & Patterns Orchestrator** ✅ COMPLETE
**File**: `/prompts/new-templates-patterns-orchestrator.md`  
**Status**: ✅ 39/39 guideline files created  
**Purpose**: Create missing guideline documentation  
**Completion Date**: 2026-03-04

---

### 🧹 **Guidelines Cleanup Orchestrator** ✅ COMPLETE
**File**: `/prompts/guidelines-cleanup-orchestrator.md`  
**Status**: ✅ 19/19 tasks complete  
**Purpose**: Consolidate and organize guidelines  
**Completion Date**: 2026-03-03

---

## 🎯 **HOW TO USE AN ORCHESTRATOR**

### Step 1: Choose the Right Orchestrator
- **Maintenance** → Project Maintenance Orchestrator
- **New Feature** → Create custom orchestrator or use existing as template
- **Bug Fixes** → System Stability Audit Orchestrator (if applicable)

### Step 2: Provide Context
Tell Claude:
```
I need you to run [Orchestrator Name] from [file path].
[Any specific context or focus areas]
```

### Step 3: Monitor Progress
- Claude will work through phases sequentially
- Each phase produces deliverables
- Review and approve major changes

### Step 4: Validate Results
- Check success criteria in orchestrator
- Review generated reports
- Test affected functionality

---

## 📊 **ORCHESTRATOR TEMPLATE**

When creating a new orchestrator, include:

1. **Header**
   - Version, last updated, status
   - Purpose statement
   - Duration estimate

2. **Overview**
   - What it does (bullet points)
   - Frequency recommendation
   - Phase count and task count

3. **Execution Phases**
   - Phase number, name, priority
   - Goal statement
   - Effort estimate
   - Task checklist

4. **Validation Checklist**
   - Success criteria
   - Testing steps

5. **Critical Rules**
   - Do's and don'ts
   - Safety checks

6. **Output Files**
   - Reports to generate
   - Files to update

7. **Related Documents**
   - Cross-references to guidelines

---

## 🚨 **ORCHESTRATOR BEST PRACTICES**

### DO:
- ✅ Break work into clear phases
- ✅ Provide time estimates
- ✅ Include validation steps
- ✅ Generate reports
- ✅ Update changelog
- ✅ Document decisions

### DON'T:
- ❌ Make orchestrators too long (>100 tasks)
- ❌ Skip validation steps
- ❌ Forget to update documentation
- ❌ Delete files without backup
- ❌ Modify protected dev tools
- ❌ Skip success criteria checks

---

## 📁 **FILE LOCATIONS**

- **Orchestrators**: `/prompts/*-orchestrator.md`
- **Task Lists**: `/tasks/*.md`
- **Reports**: `/reports/*.md`
- **Guidelines**: `/guidelines/**/*.md`
- **Completed Reports**: `/tasks/archived/YYYY-MM/`

---

## 🔄 **MAINTENANCE CYCLE**

```
Week 1: Active Development
  ↓
Week 2: Active Development
  ↓
Week 3: Active Development
  ↓
Week 4: Run Maintenance Orchestrator ← Every 4 weeks
  ↓
Week 5: Active Development
  ↓
...
```

**Or trigger maintenance when**:
- TypeScript errors appear
- Routes are missing
- Import errors occur
- Task folder is cluttered
- Before major release

---

## 📞 **QUICK COMMANDS**

### Run Maintenance
```
Run the Project Maintenance Orchestrator 
(/prompts/project-maintenance-orchestrator.md)
```

### Check Completion Status
```
What's the status of all orchestrators? 
Check /prompts/README-ORCHESTRATORS.md
```

### Create New Orchestrator
```
Create a new orchestrator for [feature/task] 
based on the template in README-ORCHESTRATORS.md
```

---

**Last Updated**: 2026-03-13  
**Total Orchestrators**: 10 (1 active, 9 complete)  
**Next Maintenance Due**: 2026-03-20 (weekly schedule)
