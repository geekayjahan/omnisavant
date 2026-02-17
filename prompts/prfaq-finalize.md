# PRFAQ Finalize - Improbable.io Venture Builder

Final validation and assembly before Improbable submission.

Send to Claude: @prompts/prfaq-finalize.md

-----------

@Claude

ROLE: Quality assurance lead preparing final PRFAQ for Improbable investment committee

TASK: Merge critique improvements with draft, validate against template requirements, and produce submission-ready PRFAQ.

INPUTS:
- Draft PRFAQ: @outputs/prfaq-draft.md
- Critique improvements: @outputs/prfaq-critique.md (if exists)
- Template standard: @prfaq-improbable-template.md
- Discovery source: @outputs/prfaq-discovery-answers.md

OUTPUT: Save final to outputs/prfaq-final.md

---

## STEP 1: MERGE IMPROVEMENTS

If critique exists, incorporate all auto-improvements into the draft:
- Apply each BEFORE → AFTER change
- Ensure no regression (don't lose good content)
- Flag any conflicts between critique suggestions

If no critique exists, proceed with draft as-is.

---

## STEP 2: TEMPLATE COMPLIANCE CHECK

Validate against the Improbable PRFAQ template requirements:

### STRUCTURE CHECK
```
□ HEADER
  □ Venture name
  □ Author & date
  □ Stage (Ideation / Validation / Pre-Build)
  □ Decision requested

□ PRESS RELEASE (~1 page)
  □ Headline (under 15 words, specific outcome)
  □ Subheadline (who benefits, how)
  □ Opening paragraph (product, customer, outcome)
  □ Problem section (2 paragraphs max)
  □ Customer quote (attributed)
  □ Solution section (2 paragraphs max)
  □ How It Works (1 paragraph)
  □ Traction & Availability

□ FAQs (7-8 questions)
  □ Q1: Market Size (TAM, 3-year target, calculation)
  □ Q2: Business Model (revenue model, pricing, margin)
  □ Q3: Technical Architecture (approach, scaling, stack)
  □ Q4: Network Effects (moat, defensibility, compounding)
  □ Q5: First Customers (named targets, GTM, relationships)
  □ Q6: Team (founders, relevant experience, fit)
  □ Q7: Investment Ask (phased, milestones, 18-month target)
  □ Q8: Risk (top risk, mitigation, kill criteria)

□ STRATEGIC FIT
  □ Portfolio Synergy
  □ Exit Path
  □ Why Improbable
  □ Improbable Leverage
```

### LENGTH CHECK
```
TARGET: 2.5 pages (~1,400-1,500 words)

□ Press Release: 600-700 words
□ FAQs: 600-700 words (75-90 words per FAQ average)
□ Strategic Fit: 100-150 words
□ TOTAL: 1,400-1,500 words

⚠️ If over 1,600 words: Trim FAQs to essential points
⚠️ If under 1,200 words: Expand thin sections with specifics
```

### QUALITY CHECK
```
□ No placeholder text: [FOUNDER TO PROVIDE], [TODO], [TBD]
□ No fluff words: streamline, leverage, robust, seamless, innovative, cutting-edge
□ No vague claims: "significant market", "strong team", "rapid growth"
□ All numbers specific: "£2.3M" not "millions", "47%" not "strong growth"
□ Customer quote attributed: Name/title or role description
□ Competitors/acquirers named where possible
□ First 10 customers specific (companies or precise descriptions)
```

### IMPROBABLE-SPECIFIC CHECK
```
□ Technical Architecture: Shows credible path to scale (not hand-wavy)
□ Network Effects: Real moat, not just "first mover advantage"
□ Improbable Leverage: Genuine strategic fit (tech/network), not forced
□ Portfolio Synergy: Connection to MSquared/Jitter/Somnia if relevant
□ Exit Path: Named acquirers or credible IPO thesis
□ Investment Ask: Phased with clear milestones and decision gates
```

---

## STEP 3: FINAL ASSEMBLY

Produce the clean, submission-ready PRFAQ:

```
═══════════════════════════════════════════════════════════════
                     [VENTURE NAME]
                   PRESS RELEASE / FAQ
═══════════════════════════════════════════════════════════════

VENTURE:    [Name]
AUTHOR:     [Name]
DATE:       [Date]
STAGE:      [Ideation / Validation / Pre-Build]
DECISION:   [What approval is requested]

═══════════════════════════════════════════════════════════════
                      PRESS RELEASE
═══════════════════════════════════════════════════════════════

[HEADLINE]

[SUBHEADLINE]

───────────────────────────────────────────────────────────────

[City], [Date] — [Opening paragraph]

THE PROBLEM

[Problem paragraphs]

"[Customer quote]"
— [Attribution]

THE SOLUTION

[Solution paragraphs]

HOW IT WORKS

[How it works paragraph]

TRACTION & AVAILABILITY

[Traction paragraph]

═══════════════════════════════════════════════════════════════
                  FREQUENTLY ASKED QUESTIONS
═══════════════════════════════════════════════════════════════

Q1: HOW BIG IS THIS OPPORTUNITY?

[Answer]

───────────────────────────────────────────────────────────────

Q2: HOW DOES [VENTURE] MAKE MONEY?

[Answer]

───────────────────────────────────────────────────────────────

Q3: CAN YOU BUILD THIS AT SCALE?

[Answer]

───────────────────────────────────────────────────────────────

Q4: WHAT'S YOUR MOAT OVER TIME?

[Answer]

───────────────────────────────────────────────────────────────

Q5: WHO ARE YOUR FIRST CUSTOMERS?

[Answer]

───────────────────────────────────────────────────────────────

Q6: WHY WILL THIS TEAM WIN?

[Answer]

───────────────────────────────────────────────────────────────

Q7: WHAT'S NEEDED TO PROVE THIS OUT?

[Answer]

───────────────────────────────────────────────────────────────

Q8: WHAT COULD GO WRONG?

[Answer]

═══════════════════════════════════════════════════════════════
                  IMPROBABLE STRATEGIC FIT
═══════════════════════════════════════════════════════════════

PORTFOLIO SYNERGY:
[Content]

EXIT PATH:
[Content]

WHY IMPROBABLE:
[Content]

IMPROBABLE LEVERAGE:
[Content]

═══════════════════════════════════════════════════════════════
```

---

## STEP 4: VALIDATION REPORT

Before saving, generate validation summary:

```
═══════════════════════════════════════════════════════════════
              PRFAQ FINAL VALIDATION REPORT
═══════════════════════════════════════════════════════════════

TEMPLATE COMPLIANCE
───────────────────────────────────────────────────────────────
Header:              [✓ Complete / ⚠️ Missing X]
Press Release:       [✓ Complete / ⚠️ Missing X]
FAQs (8):            [✓ 8/8 / ⚠️ X/8 present]
Strategic Fit:       [✓ Complete / ⚠️ Missing X]

LENGTH
───────────────────────────────────────────────────────────────
Press Release:       [X] words (target: 600-700)
FAQs:                [X] words (target: 600-700)
Strategic Fit:       [X] words (target: 100-150)
TOTAL:               [X] words (target: 1,400-1,500)
Page estimate:       [X] pages (target: ~2.5)

STATUS: [✓ Within range / ⚠️ Over by X / ⚠️ Under by X]

QUALITY
───────────────────────────────────────────────────────────────
Placeholders:        [0 / X remaining]
Fluff words:         [0 / X found]
Vague claims:        [0 / X found]
Unattributed quotes: [0 / X found]

IMPROBABLE-SPECIFIC
───────────────────────────────────────────────────────────────
Technical scaling:   [✓ Credible / ⚠️ Weak]
Network effects:     [✓ Real moat / ⚠️ Weak]
First customers:     [✓ Specific / ⚠️ Vague]
Strategic fit:       [✓ Genuine / ⚠️ Forced]
Exit path:           [✓ Named / ⚠️ Generic]

═══════════════════════════════════════════════════════════════

FINAL STATUS: [✓ READY FOR SUBMISSION / ⚠️ NEEDS WORK]

[If needs work, list specific items to fix]

═══════════════════════════════════════════════════════════════
```

---

## OUTPUT

**Save to:** outputs/prfaq-final.md

**Confirm:**

"✅ PRFAQ Finalized

**Validation Summary:**
- Template compliance: [X/4 sections complete]
- Word count: [X] words ([within range / over / under])
- Quality issues: [0 / X remaining]
- Improbable checks: [X/5 passed]

**Final Status:** [READY FOR SUBMISSION / NEEDS FOUNDER INPUT]

**File saved:** outputs/prfaq-final.md

**Next step:** Export to PDF and submit to Improbable Venture Builder"

---

**Begin finalization now.**
