# Guidelines Templates Usage Guide

**Last Updated**: 2026-03-13  
**Purpose**: Guide for using template files in `/guidelines/_templates/` folder  
**Audience**: All contributors, AI assistants, developers

---

## 📖 **OVERVIEW**

This guide explains how to use the template files in `/guidelines/_templates/` to create consistent, high-quality documentation across the rooi rose project.

**Template Philosophy**:
- **Consistency**: All documentation follows the same structure
- **Completeness**: Templates ensure nothing is missed
- **Clarity**: Standardized sections make docs easy to navigate
- **Maintainability**: Consistent format makes updates easier

---

## 📁 **AVAILABLE TEMPLATES**

| Template | Purpose | When to Use |
|:---------|:--------|:------------|
| **block-guideline-template.md** | WordPress block documentation | Creating docs for custom WordPress blocks |
| **component-guideline-template.md** | React component documentation | Documenting React components |
| **design-token-guideline-template.md** | Design token specifications | Documenting colors, spacing, typography, etc. |
| **documentation-template.md** | General documentation | Guides, references, tutorials |
| **orchestrator-prompt-template.md** | Orchestrator prompts | Creating new automation prompts |
| **page-guideline-template.md** | Page-level guidelines | Documenting full page components |
| **part-guideline-template.md** | WordPress template parts | Header, footer, sidebar documentation |
| **pattern-guideline-template.md** | WordPress patterns | Block pattern documentation |
| **plugin-guideline-template.md** | WordPress plugin integration | Third-party plugin guidelines |
| **report-template.md** | Project reports | Audits, completions, status reports |
| **strategy-guideline-template.md** | Strategic documentation | Architecture, migration strategies |
| **task-list-template.md** | Task tracking | Creating task lists from reports |
| **template-guideline-template.md** | WordPress templates | Full template documentation |
| **template-part-guideline-template.md** | Template parts (alternative) | Specialized template part docs |

---

## 🎯 **HOW TO USE TEMPLATES**

### **Step 1: Choose the Right Template**

**Question Flow**:
1. **What are you documenting?**
   - React component → `component-guideline-template.md`
   - Design token → `design-token-guideline-template.md`
   - WordPress block → `block-guideline-template.md`
   - Process/strategy → `strategy-guideline-template.md`
   - Report findings → `report-template.md`
   - Task list → `task-list-template.md`
   - Automation → `orchestrator-prompt-template.md`
   - General guide → `documentation-template.md`

2. **Who is the audience?**
   - Developers → Component, block, or pattern templates
   - Content editors → Page or pattern templates
   - Stakeholders → Documentation or report templates
   - System (AI) → Orchestrator template

---

### **Step 2: Copy the Template**

**Method 1: Using File System**
```bash
# Copy template to new location
cp /guidelines/_templates/component-guideline-template.md \
   /guidelines/components/new-component.md
```

**Method 2: Using Read Tool**
```
1. Read the template file
2. Copy content to new file location
3. Update filename to match topic
```

---

### **Step 3: Fill In the Template**

**Required Sections** (must complete):
- Title and metadata (date, status, etc.)
- Overview/Summary
- Main content sections
- Examples (at least 1)
- Related resources

**Optional Sections** (complete if applicable):
- Advanced examples
- Troubleshooting
- FAQ
- Appendices

**Placeholder Replacement**:
- `[ComponentName]` → Actual component name
- `YYYY-MM-DD` → Actual date (e.g., 2026-03-13)
- `[Description]` → Actual description
- `[X]` / `[Y]` / `[Z]` → Actual values or counts

---

### **Step 4: Customize for Your Needs**

**Add Sections** if needed:
- Not all templates fit every situation
- Add project-specific sections
- Remove irrelevant sections (but keep structure)

**Maintain Consistency**:
- Use the same heading levels (`##`, `###`)
- Keep table formats consistent
- Use standard emoji indicators (✅, ⚠️, ❌, 🟡, ⏳)

---

### **Step 5: Review & Validate**

**Self-Review Checklist**:
- [ ] All placeholders replaced
- [ ] Dates are current
- [ ] Links work and point to correct files
- [ ] Code examples are tested and working
- [ ] Formatting is consistent
- [ ] No `TODO` or `FIXME` left in final version
- [ ] Metadata is complete (status, dates, authors)

---

## 📚 **TEMPLATE-SPECIFIC GUIDANCE**

### **Component Guidelines**

**When to Use**: Documenting React components in `/src/app/components/`

**Key Sections to Complete**:
1. **Props Interface**: Document all props with types
2. **Design Tokens**: List all tokens used
3. **Variants**: Document all visual/behavioral variants
4. **Accessibility**: ARIA attributes, keyboard nav
5. **Examples**: Minimum 2 examples (basic + advanced)

**Best Practices**:
- Include live code examples that can be copied
- Document dark mode behavior
- Show responsive behavior at key breakpoints
- Link to related components

**Common Pitfalls**:
- ❌ Forgetting to document optional props
- ❌ Missing dark mode documentation
- ❌ No accessibility section
- ❌ Examples that don't work when copy-pasted

---

### **Design Token Guidelines**

**When to Use**: Documenting tokens in `/guidelines/design-tokens/`

**Key Sections to Complete**:
1. **Token Table**: All tokens with values
2. **Usage Examples**: How to use in code
3. **WordPress Mapping**: How tokens map to theme.json
4. **Dark Mode**: Dark mode token variants

**Best Practices**:
- Show both CSS variable and Tailwind class
- Include visual examples (color swatches, spacing boxes)
- Document when to use each variant
- Link to components that use the token

**Example Token Documentation**:
```markdown
## Primary Brand Red

**CSS Variable**: `--color-brand-red`  
**Value**: `#e01e12`  
**Tailwind Class**: `text-brand-red`, `bg-brand-red`, `border-brand-red`

**Usage**:
```css
.component {
  color: var(--color-brand-red);
}
```

**Components Using This**:
- Logo
- Primary buttons
- Active navigation items
```

---

### **Orchestrator Prompts**

**When to Use**: Creating automation prompts in `/prompts/`

**Key Sections to Complete**:
1. **Execution Phases**: Break work into logical phases
2. **Guidelines Referenced**: List ALL relevant guidelines
3. **Success Criteria**: Define what success looks like
4. **Example Outputs**: Show expected console output

**Best Practices**:
- Each phase should be 5-20 minutes
- Include validation checkpoints
- Document error handling
- Provide example outputs for each phase
- List integration with other orchestrators

**Validation**:
- Test the orchestrator before documenting
- Ensure all file paths are correct
- Verify all guideline links work

---

### **Reports**

**When to Use**: Documenting audit results, completion status, progress updates

**Key Sections to Complete**:
1. **Executive Summary**: 2-3 sentence overview
2. **Findings**: Issues categorized by priority (P0-P3)
3. **Recommendations**: Actionable next steps
4. **Metrics**: Before/after comparisons

**Best Practices**:
- Use consistent priority labels (P0, P1, P2, P3)
- Include specific file paths and line numbers
- Provide reproduction steps for issues
- Link to related task lists
- Set archive date (typically 30 days after report date)

**Priority Guidelines**:
- **P0 (Critical)**: Breaks functionality, accessibility violations
- **P1 (High)**: UX issues, performance problems
- **P2 (Medium)**: Polish, optimization opportunities
- **P3 (Low)**: Nice-to-have improvements

---

### **Task Lists**

**When to Use**: Creating actionable task lists from reports or new features

**Key Sections to Complete**:
1. **Task Overview Table**: Shows progress at a glance
2. **Individual Tasks**: Each with acceptance criteria
3. **Dependencies**: What blocks what
4. **Completion Checklist**: Final validation before marking complete

**Best Practices**:
- Break large tasks into subtasks (max 2-hour chunks)
- Include time estimates
- Document blockers immediately
- Link to source report or feature request
- Update progress daily/weekly

**Task Statuses**:
- ✅ Complete
- 🟡 In Progress
- ⏳ Not Started
- ❌ Blocked

---

## 🎨 **FORMATTING CONVENTIONS**

### **Headers**

```markdown
# Document Title (H1 - only one per doc)

## Main Section (H2)

### Subsection (H3)

#### Detail Level (H4 - use sparingly)
```

---

### **Emphasis**

```markdown
**Bold**: For important terms, labels, button names
*Italic*: For em-rooi rose brand name, light emphasis
`Code`: For code snippets, file names, CSS variables
```

---

### **Lists**

**Unordered Lists**:
```markdown
- Item 1
- Item 2
  - Nested item
  - Nested item
```

**Ordered Lists**:
```markdown
1. Step 1
2. Step 2
   - Detail
3. Step 3
```

**Task Lists**:
```markdown
- [ ] Incomplete task
- [x] Complete task
```

---

### **Tables**

**Standard Table**:
```markdown
| Column 1 | Column 2 | Column 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
```

**Alignment**:
- `:---` = Left-aligned
- `:--:` = Center-aligned
- `---:` = Right-aligned

---

### **Code Blocks**

**With Language Syntax Highlighting**:
````markdown
```tsx
// TypeScript React code
const Component = () => <div>Hello</div>;
```
````

**Supported Languages**:
- `tsx` / `jsx` - React components
- `typescript` / `ts` - TypeScript
- `javascript` / `js` - JavaScript
- `css` - Stylesheets
- `bash` / `sh` - Shell commands
- `json` - JSON data
- `markdown` / `md` - Markdown
- `html` - HTML markup
- `php` - PHP code

---

### **Links**

**Internal Links**:
```markdown
[Link Text](/path/to/file.md)
[Component Guide](/guidelines/components/component.md)
```

**External Links**:
```markdown
[React Docs](https://react.dev)
```

**Section Links** (within same doc):
```markdown
[Jump to Section](#section-heading)
```

---

### **Emoji Indicators**

**Standard Project Emojis**:
- ✅ Complete / Success / Approved
- ❌ Error / Failed / Critical Issue
- ⚠️ Warning / High Priority
- 🔸 Medium Priority
- ⚪ Low Priority / Not Started
- 🟡 In Progress / Partial
- 🟢 Active / Healthy
- ⏳ Pending / Waiting
- 📊 Metrics / Data
- 📋 Documentation / List
- 🔧 Tool / Utility
- 🎯 Goal / Target
- 🚀 Launch / Deploy
- 💡 Tip / Idea
- ⚙️ Configuration
- 🔗 Link / Reference

---

## 🛠️ **TEMPLATE MAINTENANCE**

### **Updating Templates**

**When to Update a Template**:
- New best practices emerge
- Project standards change
- Feedback from template users
- Missing critical sections discovered

**How to Update**:
1. Update the template file in `/guidelines/_templates/`
2. Update this usage guide if behavior changes
3. Consider updating existing docs created from old template
4. Update template version number in changelog

**Version Control**:
- Add changelog section to updated templates
- Note version and date of template changes

---

### **Creating New Templates**

**When to Create a New Template**:
- New documentation pattern emerges
- Specific use case not covered by existing templates
- Team requests specialized template

**Process**:
1. Identify the need (what's missing?)
2. Review existing templates for structure
3. Create new template following formatting conventions
4. Add to this usage guide
5. Create example documentation using the template
6. Get team feedback

---

## 📊 **TEMPLATE QUALITY CHECKLIST**

Before finalizing documentation created from a template:

**Content**:
- [ ] All placeholders replaced with actual content
- [ ] Examples are tested and working
- [ ] Links are valid and point to correct locations
- [ ] Technical accuracy verified

**Structure**:
- [ ] Follows template structure (or intentional deviations noted)
- [ ] Consistent heading levels
- [ ] Proper use of lists, tables, code blocks

**Metadata**:
- [ ] Title is clear and descriptive
- [ ] Date is current
- [ ] Status is accurate
- [ ] Related documents linked

**Accessibility**:
- [ ] Clear, concise language
- [ ] No jargon without definitions
- [ ] Code examples have explanations
- [ ] Tables have headers

**Maintainability**:
- [ ] Author/maintainer identified
- [ ] Review schedule set (if applicable)
- [ ] Version number included (if applicable)

---

## 🔍 **FINDING THE RIGHT TEMPLATE**

### **Decision Tree**

```
What are you documenting?

├─ React Component
│  ├─ Full Page → page-guideline-template.md
│  ├─ Reusable Component → component-guideline-template.md
│  └─ Layout Component → component-guideline-template.md
│
├─ WordPress Asset
│  ├─ Block → block-guideline-template.md
│  ├─ Pattern → pattern-guideline-template.md
│  ├─ Template → template-guideline-template.md
│  ├─ Template Part → part-guideline-template.md
│  └─ Plugin Integration → plugin-guideline-template.md
│
├─ Design System
│  ├─ Token (color, spacing, etc.) → design-token-guideline-template.md
│  └─ General Guide → documentation-template.md
│
├─ Process/Automation
│  ├─ Orchestrator Prompt → orchestrator-prompt-template.md
│  ├─ Strategy Doc → strategy-guideline-template.md
│  └─ General Process → documentation-template.md
│
├─ Project Management
│  ├─ Report (audit/status) → report-template.md
│  ├─ Task List → task-list-template.md
│  └─ General Doc → documentation-template.md
│
└─ Other → documentation-template.md (most flexible)
```

---

## 💡 **TIPS & BEST PRACTICES**

### **General Tips**

1. **Start with the Template**
   - Don't write from scratch
   - Templates ensure completeness

2. **Customize Appropriately**
   - Not every section applies to every doc
   - Remove irrelevant sections, but keep structure

3. **Be Specific**
   - Replace `[Placeholder]` with actual content
   - Avoid generic descriptions

4. **Include Examples**
   - Every doc should have at least one working example
   - Examples should be copy-paste ready

5. **Link Generously**
   - Link to related docs
   - Link to source code
   - Link to external resources

---

### **Common Mistakes to Avoid**

❌ **Don't**:
- Leave placeholders like `[TODO]` or `[Description]`
- Skip the examples section
- Forget to update the "Last Updated" date
- Use broken links
- Mix different heading styles
- Leave out accessibility information

✅ **Do**:
- Complete all required sections
- Test all code examples
- Verify all links work
- Keep formatting consistent
- Update dates when editing
- Include accessibility considerations

---

## 📚 **EXAMPLES**

### **Example 1: Creating a Component Guideline**

**Scenario**: You've created a new `PricingCard` component and need to document it.

**Steps**:
1. Copy `component-guideline-template.md`
2. Rename to `/guidelines/components/common/pricing-card.md`
3. Replace `[ComponentName]` with `PricingCard`
4. Fill in props interface
5. Document design tokens used (colors, spacing, etc.)
6. Add 2-3 examples (basic, with icon, highlighted variant)
7. Document accessibility (ARIA labels, keyboard support)
8. Link to pages that use this component

**Result**: Complete component documentation that other developers can reference.

---

### **Example 2: Creating an Orchestrator Prompt**

**Scenario**: You want to create a new orchestrator for validating image imports.

**Steps**:
1. Copy `orchestrator-prompt-template.md`
2. Rename to `/prompts/image-validation-orchestrator.md`
3. Define execution phases (scan images, check formats, validate usage)
4. List all guidelines referenced (image import strategy, performance guidelines)
5. Define success criteria (all images validated, report generated)
6. Add example outputs for each phase

**Result**: Working orchestrator that can be triggered with a single command.

---

## 🔗 **RELATED RESOURCES**

**Template Files**:
- `/guidelines/_templates/` — All template files

**Example Documentation**:
- `/guidelines/design-tokens/colors.md` — Example design token doc
- `/guidelines/components/common/logo.md` — Example component doc
- `/prompts/cleanup.md` — Example orchestrator prompt

**Style Guides**:
- `/guidelines/rooi-rose/editorial-style-guide.md` — Writing style
- `/guidelines/development/coding-standards.md` — Code standards

---

## 📝 **CHANGELOG**

### **v1.0.0** (2026-03-13)
- Initial templates usage guide created
- Added all 14 template descriptions
- Included decision tree for template selection
- Added examples and best practices

---

**Maintained By**: Project Team  
**Last Reviewed**: 2026-03-13  
**Next Review**: 2026-04-13  
**Status**: Published
