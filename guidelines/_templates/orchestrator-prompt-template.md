# [Orchestrator Name] Orchestrator

**Version**: 1.0.0  
**Created**: YYYY-MM-DD  
**Last Updated**: YYYY-MM-DD  
**Trigger Word**: `[trigger-word]`  
**Estimated Duration**: [X-Y] minutes  
**Purpose**: [One-sentence description of what this orchestrator does]

---

## 📋 **OVERVIEW**

[2-3 paragraph description of the orchestrator's purpose, when to use it, and what problems it solves]

**Use Cases**:
- [Primary use case]
- [Secondary use case]
- [Additional use case]

**Prerequisites**:
- [Required conditions before running]
- [Required files/data]
- [Required permissions]

---

## 🎯 **EXECUTION PHASES**

### **Phase 1: [Phase Name]** (X-Y min)

**Objective**: [What this phase accomplishes]

**Tasks**:
1. [Task 1 description]
   - [Subtask or detail]
   - [Subtask or detail]
2. [Task 2 description]
3. [Task 3 description]

**Input**:
- Files to read: `/path/to/file.ext`
- Data sources: [Where data comes from]

**Output**:
```
[Example output format]
```

**Validation**:
- [ ] [Validation checkpoint 1]
- [ ] [Validation checkpoint 2]

**Error Handling**:
- If [error condition]: [Recovery action]
- If [error condition]: [Recovery action]

**Guidelines Referenced**:
- `/guidelines/[category]/[guideline].md` — [Why referenced]
- `/guidelines/[category]/[guideline].md` — [Why referenced]

---

### **Phase 2: [Phase Name]** (X-Y min)

[Same structure as Phase 1]

**Objective**: [What this phase accomplishes]

**Tasks**:
1. [Task]
2. [Task]

**Input**: [Sources]

**Output**: [Format]

**Validation**: [Checkpoints]

**Error Handling**: [Strategies]

**Guidelines Referenced**: [Links]

---

### **Phase 3: [Phase Name]** (X-Y min)

[Repeat structure for each phase]

---

[Continue for all phases]

---

## 🔧 **EXECUTION WORKFLOW**

```
1. User types: "[trigger-word]"
2. AI reads this orchestrator (/prompts/[orchestrator-name].md)
3. Execute Phase 1
   ↓
4. Validate Phase 1 output
   ↓
5. Execute Phase 2
   ↓
6. Validate Phase 2 output
   ↓
[Continue for all phases]
   ↓
N. Generate summary report
   ↓
N+1. Update Guidelines.md with completion timestamp
   ↓
N+2. Output: Summary + next recommended action
```

---

## 📊 **SUCCESS CRITERIA**

**Must Complete**:
- ✅ [Critical success criterion 1]
- ✅ [Critical success criterion 2]
- ✅ [Critical success criterion 3]

**Should Complete**:
- 🎯 [Important but not critical criterion]
- 🎯 [Important but not critical criterion]

**Nice to Have**:
- ⚪ [Optional enhancement]
- ⚪ [Optional enhancement]

**Failure Conditions**:
- ❌ [What indicates orchestrator failure]
- ❌ [What indicates orchestrator failure]

---

## 🔗 **RELATED GUIDELINES**

### **Core References** (Required Reading)
- `/guidelines/[category]/[file].md` — [Brief description of relevance]
- `/guidelines/[category]/[file].md` — [Brief description]

### **Task Management**
- `/tasks/master-task-list.md` — [Why referenced]
- `/tasks/[task-list].md` — [Why referenced]

### **Report References**
- `/reports/[report].md` — [Why referenced]

### **Brand & Quality**
- `/guidelines/rooi-rose/[guideline].md` — [Why referenced]

### **Design System**
- `/guidelines/design-tokens/[guideline].md` — [Why referenced]

### **Process Documentation**
- `/prompts/[related-orchestrator].md` — [Relationship/integration]

---

## 📝 **VALIDATION CHECKLIST**

Before marking orchestrator complete, verify:

**Phase Completion**:
- [ ] Phase 1: [Phase name] — [Key deliverable]
- [ ] Phase 2: [Phase name] — [Key deliverable]
- [ ] Phase 3: [Phase name] — [Key deliverable]

**File Updates**:
- [ ] [File 1] updated correctly
- [ ] [File 2] updated correctly

**Documentation**:
- [ ] Guidelines.md updated (if applicable)
- [ ] CHANGELOG.md updated (if applicable)
- [ ] README.md updated (if applicable)

**Quality Checks**:
- [ ] No broken links in generated files
- [ ] All file paths valid
- [ ] No syntax errors in generated code
- [ ] All required fields populated

**User Communication**:
- [ ] User receives clear next action
- [ ] Summary is concise and actionable

---

## 🎯 **EXAMPLE OUTPUTS**

### **Phase 1 Output**
```
📊 [Phase Name] Complete

[Summary of what was accomplished]

Metrics:
- [Metric 1]: [Value]
- [Metric 2]: [Value]

Next: Phase 2 — [Phase name]...
```

### **Phase 2 Output**
```
[Example output for phase 2]
```

### **Final Summary**
```
✅ [ORCHESTRATOR NAME] COMPLETE

**Metrics**:
- [Metric 1]: [Value]
- [Metric 2]: [Value]
- [Metric 3]: [Value]

**Immediate Next Actions**:
1. [Priority action]
2. [Priority action]
3. [Priority action]

**Recommended Command**: `[next-command]`

📄 Full Report: /reports/[report-name]-[date].md
```

---

## 🔄 **INTEGRATION WITH OTHER ORCHESTRATORS**

This orchestrator works in conjunction with:

### **1. `[orchestrator-name]`** (`/prompts/[orchestrator-name].md`)
- **Relationship**: [How they relate]
- **Run Order**: [Before / After / Parallel]
- **Combined Usage**: `[trigger-1] && [trigger-2]`

### **2. `[orchestrator-name]`** (`/prompts/[orchestrator-name].md`)
- **Relationship**: [How they relate]
- **Run Order**: [Before / After / Parallel]
- **Workflow**: [Description of typical workflow]

### **3. Future Orchestrators**
- [Potential integrations]
- [Suggested complementary orchestrators]

---

## ⚙️ **CONFIGURATION OPTIONS**

### **[Configuration Area 1]**
**Default**: [Default value]  
**Options**: [Available options]  
**When to Change**: [Guidance on when to customize]

**Example**:
```markdown
[Configuration example]
```

### **[Configuration Area 2]**
[Same structure]

---

## 🚨 **ERROR HANDLING**

### **Common Errors**

#### **Error 1: [Error Name]**
**Symptom**: [What the user sees]  
**Cause**: [Root cause]  
**Resolution**: [How to fix]

#### **Error 2: [Error Name]**
**Symptom**: [What happens]  
**Cause**: [Why it happens]  
**Resolution**: [Fix steps]

### **Recovery Procedures**

**If orchestrator fails mid-execution**:
1. [Recovery step 1]
2. [Recovery step 2]
3. [How to resume]

**If validation fails**:
1. [What to check]
2. [How to fix]
3. [How to rerun]

---

## 📚 **MAINTENANCE NOTES**

**Version History**:
- v1.1.0 (YYYY-MM-DD): [Changes made]
- v1.0.0 (YYYY-MM-DD): Initial orchestrator creation

**Known Limitations**:
- [Limitation 1]
- [Limitation 2]
- [Limitation 3]

**Future Enhancements**:
- [ ] [Enhancement idea 1]
- [ ] [Enhancement idea 2]
- [ ] [Enhancement idea 3]

**Review Schedule**:
- **Next Review**: [Date]
- **Review Frequency**: [Every X weeks/months]
- **Owned By**: [Team/Person]

---

## 🧪 **TESTING**

### **Smoke Test** (Quick validation)
1. [Test step 1]
2. [Test step 2]
3. Expected result: [What should happen]

### **Full Test** (Complete validation)
1. [Test step 1]
2. [Test step 2]
3. [Test step 3]
4. Expected results: [Detailed expectations]

### **Edge Cases**
- **Scenario 1**: [Edge case description]
  - Expected behavior: [What should happen]
- **Scenario 2**: [Edge case description]
  - Expected behavior: [What should happen]

---

## 📖 **USAGE GUIDE**

### **When to Use**
- [Scenario 1 where this is the right tool]
- [Scenario 2]
- [Scenario 3]

### **When NOT to Use**
- [Scenario where different approach is better]
- [Scenario]

### **Frequency**
- **Recommended**: [How often to run]
- **Minimum**: [Minimum frequency]
- **After Events**: [Specific triggers that warrant running]

---

## 🎓 **LEARNING RESOURCES**

**Related Documentation**:
- [Link to related doc] — [What it covers]
- [Link to tutorial] — [What it teaches]

**Examples in Practice**:
- [Link to previous execution report]
- [Link to case study]

---

**Created by**: [Author]  
**Maintained by**: [Team/Person]  
**Last Executed**: [Date]  
**Execution Count**: [Number of times run]  
**Success Rate**: [X/Y successful executions]
