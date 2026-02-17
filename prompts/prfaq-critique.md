# PRFAQ Critique & Refine - Improbable.io Venture Builder

This prompt evaluates the PRFAQ draft and automatically improves weak sections before Improbable submission.

Send to Claude: @prompts/prfaq-critique.md

-----------

@Claude

ROLE: Improbable investment committee member who both identifies issues AND fixes them

TASK: Evaluate the PRFAQ draft through an investor lens, identify problems, then improve weak sections automatically.

CONTEXT:
- PRFAQ to evaluate: @outputs/prfaq-draft.md
- Template standard: @prfaq-improbable-template.md
- Source material: @outputs/prfaq-discovery-answers.md

---

## PHASE 1: IDENTIFY ISSUES

Evaluate the PRFAQ as if you're deciding whether to fund this venture.

**COMPLETENESS CHECK:**
- [ ] Press Release present and complete? (~600-700 words)
- [ ] All 8 FAQs present with substantive answers?
- [ ] Strategic Fit section included?
- [ ] Count [FOUNDER TO PROVIDE] placeholders (flag if >3)
- [ ] Total length ~2.5 pages?

**INVESTOR QUALITY CHECK:**
- Vague language: "streamline", "leverage", "robust", "innovative" (flag these)
- Missing numbers: Claims without metrics (TAM without calculation, growth without %)
- Invented data: Content not in discovery-answers.md
- Weak customer pain: Generic problem, not specific quantified pain
- No real customer voice: Missing or obviously fake customer quote

**IMPROBABLE-SPECIFIC CHECK:**
- [ ] Technical Architecture (FAQ Q3): Does it show credible scaling approach?
- [ ] Network Effects (FAQ Q4): Is there a real moat, or just "first mover"?
- [ ] GTM/First Customers (FAQ Q5): Are customers named/specific, or vague "enterprises"?
- [ ] Improbable Leverage: Is there genuine strategic fit, or forced connection?
- [ ] Exit Path: Credible acquirers named, or generic "strategic buyers"?

**INVESTABILITY CHECK:**
Ask yourself: Would I put £500K behind this based on this PRFAQ?
- Is the problem painful enough that customers will pay?
- Is the solution differentiated enough to win?
- Is the team credible for THIS problem?
- Are the milestones and ask reasonable?
- Is the risk/return profile attractive?

---

## PHASE 2: AUTO-IMPROVE WEAK SECTIONS

After identifying issues, automatically improve up to 5 weakest sections.

**For each weak section:**

BEFORE (Current version with issue):
[Show current text]

ISSUE IDENTIFIED:
[What's wrong - be specific about why an investor wouldn't buy this]

AFTER (Improved version):
[Rewrite with improvements - make it investable]

WHAT CHANGED:
[Explain the fix]

---

## OUTPUT 1: CRITIQUE REPORT

```
═══════════════════════════════════════════════════════════════
        PRFAQ CRITIQUE REPORT - [VENTURE NAME]
           Improbable Venture Builder Review
═══════════════════════════════════════════════════════════════

📊 QUALITY ASSESSMENT

Placeholder count: X (Target: <3)
Sections with issues: Y/11
Generic AI phrases found: Z
Word count: N (~2.5 pages target)

INVESTABILITY SCORE: [1-10] / 10
[One sentence on overall investment readiness]

───────────────────────────────────────────────────────────────

✅ STRONG SECTIONS (No action needed):

- [Section name]: Why it works for investors
- [Section name]: Why it works for investors

───────────────────────────────────────────────────────────────

⚠️ SECTIONS WITH ISSUES:

PRESS RELEASE:
- [Specific problem if any]

FAQ Q1 (Market Size): [Issue or ✓]
FAQ Q2 (Business Model): [Issue or ✓]
FAQ Q3 (Technical Architecture): [Issue or ✓]
FAQ Q4 (Network Effects): [Issue or ✓]
FAQ Q5 (First Customers): [Issue or ✓]
FAQ Q6 (Team): [Issue or ✓]
FAQ Q7 (Investment Ask): [Issue or ✓]
FAQ Q8 (Risk): [Issue or ✓]

STRATEGIC FIT:
- [Specific problem if any]

───────────────────────────────────────────────────────────────

🔴 DEAL-BREAKERS (Must fix before submission):

1. [Critical issue that would kill the deal]
2. [Critical issue that would kill the deal]

═══════════════════════════════════════════════════════════════

🔧 AUTO-IMPROVEMENTS (Top 3-5 Weak Sections)

───────────────────────────────────────────────────────────────
SECTION 1: [Section Name]
───────────────────────────────────────────────────────────────

BEFORE:
[Current text from PRFAQ]

ISSUE: [What's wrong - investor perspective]

AFTER:
[Improved text - paste this into PRFAQ]

WHAT CHANGED: [Explanation]

───────────────────────────────────────────────────────────────
SECTION 2: [Section Name]
───────────────────────────────────────────────────────────────

BEFORE:
[Current text]

ISSUE: [What's wrong]

AFTER:
[Improved text]

WHAT CHANGED: [Explanation]

───────────────────────────────────────────────────────────────
SECTION 3: [Section Name]
───────────────────────────────────────────────────────────────

BEFORE:
[Current text]

ISSUE: [What's wrong]

AFTER:
[Improved text]

WHAT CHANGED: [Explanation]

═══════════════════════════════════════════════════════════════
```

---

## OUTPUT 2: FINAL PRFAQ

After critique, incorporate all improvements and generate the final submission-ready PRFAQ.

**Instructions:**
1. Apply all auto-improvements from Phase 2
2. Fill any remaining [FOUNDER TO PROVIDE] gaps with [REQUIRED: X] flags
3. Ensure total length is ~2.5 pages
4. Verify all 8 FAQs are substantive
5. Final quality pass for fluff words

**Save to:** outputs/prfaq-final.md

**Format the final PRFAQ cleanly:**
- Remove all template instructions
- Clean formatting for PDF export
- Professional presentation for Improbable submission

```
═══════════════════════════════════════════════════════════════
                     [VENTURE NAME]
                   PRESS RELEASE / FAQ

        Submitted to: Improbable Venture Builder
        Date: [Date]
        Author: [Name]
═══════════════════════════════════════════════════════════════

[Clean, formatted PRFAQ content here - ready for PDF export]

═══════════════════════════════════════════════════════════════
```

---

## CONFIRMATION

After completing both outputs, confirm:

"✅ PRFAQ Critique Complete

**Critique Summary:**
- Investability Score: [X]/10
- Issues identified: [Y]
- Auto-improvements made: [Z]
- Deal-breakers flagged: [N]

**Files Generated:**
- Critique report: [displayed above]
- Final PRFAQ: outputs/prfaq-final.md

**Status:** [Ready for Improbable submission / Needs founder input on X items]

**Next step:** Export outputs/prfaq-final.md to PDF for submission"

---

**Begin critique now.**
