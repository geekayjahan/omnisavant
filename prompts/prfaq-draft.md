# PRFAQ Draft Generator - Improbable.io Venture Builder

## Instructions:
After completing discovery, send this to Claude: @prompts/prfaq-draft.md

---

@Claude

ROLE: Senior venture builder drafting a PRFAQ for Improbable's investment committee.

TASK: Generate a **2.5 page PRFAQ** (Press Release + 7-8 FAQs) using the discovery answers.

INPUTS:
- Discovery answers: @outputs/prfaq-discovery-answers.md
- Template structure: @prfaq-improbable-template.md

OUTPUT: Save to outputs/prfaq-draft.md

---

## WRITING RULES

**FORMAT:**
- Total length: 2.5 pages (~1,400-1,500 words)
- Press Release: ~1 page (600-700 words)
- FAQs: 7-8 questions (~600-700 words)
- Strategic Fit: (~100-150 words)

**TONE:**
- Write as if announcing a successful launch 18 months from now
- Confident but not hyperbolic
- Specific, not vague (numbers > adjectives)

**CRITICAL:**
- Use ONLY information from discovery answers
- If data is missing, mark as [FOUNDER TO PROVIDE: X]
- No invented quotes, metrics, or customer names
- No fluff words: "streamline", "leverage", "robust", "seamless"

---

## PRFAQ STRUCTURE

### SECTION 1: PRESS RELEASE (~1 page, 600-700 words)

```
═══════════════════════════════════════════════════════════════
                     [VENTURE NAME]
              PRESS RELEASE / FAQ
═══════════════════════════════════════════════════════════════

VENTURE: [Name]
AUTHOR: [From discovery]                    DATE: [Today]
STAGE: [Ideation / Validation / Pre-Build]
DECISION: [What approval is being requested]

───────────────────────────────────────────────────────────────
                      PRESS RELEASE
───────────────────────────────────────────────────────────────

HEADLINE:
[From Q1 - Keep under 15 words, specific outcome for specific customer]

SUBHEADLINE:
[One sentence expanding on who benefits and how]

───────────────────────────────────────────────────────────────

[CITY], [DATE] — [Venture Name] today announced [product/service],
enabling [customer segment] to [specific outcome]. This addresses
the [$ or time cost] challenge of [problem], which currently
[impact on customer].

THE PROBLEM

[From Q2 - 2 paragraphs max]

Paragraph 1: Describe the customer pain in their words.
Use the real quote from discovery if available.

Paragraph 2: Why this matters now (from Q4 - the forcing function).
What happens if this isn't solved?

"[Customer quote from Q2 if available]"
— [Name, Title, Company] or [Role description if name not shared]

THE SOLUTION

[From Q3 - 2 paragraphs max]

Paragraph 1: What the venture does and what's now possible.
Focus on customer outcome, not features.

Paragraph 2: Why this approach wins (from Q5 - differentiation).
What's the unfair advantage?

[Optional: Include Improbable leverage from Q6 if it strengthens
the narrative, but don't force it]

HOW IT WORKS

[1 paragraph - simple explanation a non-technical exec can understand]

Customers [action] → System [what happens] → Result [outcome in X time]

TRACTION & AVAILABILITY

[From Q7 - what exists today]

[Venture Name] has [traction: # interviews, LOIs, pilots, prototype status].
[If applicable: Named pilot customers or customer types]
[Target availability: when launching]

───────────────────────────────────────────────────────────────
```

### SECTION 2: FAQs (7-8 Questions, ~600-700 words)

```
───────────────────────────────────────────────────────────────
                    FREQUENTLY ASKED QUESTIONS
───────────────────────────────────────────────────────────────

Q1: HOW BIG IS THIS OPPORTUNITY?
[From Q8 - Market size]

A: The total addressable market is £[TAM] billion. We're targeting
£[SOM] million in 3 years by focusing on [specific segment].
[One sentence on how calculated or why credible]

───────────────────────────────────────────────────────────────

Q2: HOW DOES [VENTURE] MAKE MONEY?
[From Q9 - Business model]

A: [Revenue model] at £[price] per [unit]. Target gross margin
of [X]%. Path to profitability: [brief description].

[If unit economics provided: CAC of £X, LTV of £Y, LTV:CAC of Z:1]

───────────────────────────────────────────────────────────────

Q3: CAN YOU BUILD THIS AT SCALE?
[From Q13 - Technical architecture - IMPROBABLE-SPECIFIC]

A: [Core technical approach in 2-3 sentences from Q13]

The hardest problem: [Technical challenge]. Our scaling approach:
[How it handles 10 → 1,000 → 100,000 users].

Stack: [Infrastructure/technology choices]

───────────────────────────────────────────────────────────────

Q4: WHAT'S YOUR MOAT OVER TIME?
[From Q14 - Network effects & defensibility - IMPROBABLE-SPECIFIC]

A: [Does product get better with more users? How?]

Defensibility builds through: [Switching costs, data advantage,
network effects, or ecosystem lock-in from Q14].

If we win: [Why hard for others to catch up]

───────────────────────────────────────────────────────────────

Q5: WHO ARE YOUR FIRST CUSTOMERS?
[From Q18 - Go-to-market - IMPROBABLE-SPECIFIC]

A: Our first 10 targets: [Named companies or precise descriptions]

Acquisition approach: [Warm intros / outbound / inbound / partnerships]
Sales motion: [Self-serve / demo-led / enterprise]
Existing relationships: [Warm leads or connections already in place]

───────────────────────────────────────────────────────────────

Q6: WHY WILL THIS TEAM WIN?
[From Q10 - Team]

A: [Founder names] bring [relevant experience].
[1-2 sentences on founder-market fit - why uniquely qualified]

───────────────────────────────────────────────────────────────

Q7: WHAT'S NEEDED TO PROVE THIS OUT?
[From Q11 - Investment ask]

A:
• Phase 1 (Months 1-3): £[X] to [milestone]
• Phase 2 (Months 4-12): £[Y] to [milestone]
• 18-month target: £[Z] ARR, [#] customers

Key decision gates: [From Q11 - what triggers go/no-go]

───────────────────────────────────────────────────────────────

Q8: WHAT COULD GO WRONG?
[From Q12 - Top risk]

A: Top risk: [Risk description]
Mitigation: [How addressing]
Kill criteria: [When we'd stop]

───────────────────────────────────────────────────────────────
```

### SECTION 3: STRATEGIC FIT (~100-150 words)

```
───────────────────────────────────────────────────────────────
                    IMPROBABLE STRATEGIC FIT
───────────────────────────────────────────────────────────────

PORTFOLIO SYNERGY: [From Q15]
[Connection to MSquared, Jitter, Somnia, or other Improbable ventures]

EXIT PATH: [From Q16]
[Potential acquirers in 3-5 years, or IPO thesis]

WHY IMPROBABLE: [From Q17]
[What operational support needed beyond capital - why venture
builder model vs. traditional VC]

IMPROBABLE LEVERAGE: [From Q6]
[How Improbable's tech/network provides unfair advantage]

═══════════════════════════════════════════════════════════════
```

---

## QUALITY CHECKLIST

Before saving, verify:

- [ ] Total length ~2.5 pages (~1,400-1,500 words)
- [ ] Press Release tells a complete story (problem → solution → proof)
- [ ] All 7-8 FAQs included with substantive answers
- [ ] Technical Architecture FAQ shows credible scaling approach (Q3)
- [ ] Network Effects FAQ explains defensibility over time (Q4)
- [ ] GTM FAQ names specific first customers (Q5)
- [ ] All claims backed by discovery answers (no invented data)
- [ ] Numbers are specific, not rounded ("£2.3M" not "millions")
- [ ] Customer quote attributed (even if "Gaming Studio CTO")
- [ ] No fluff words or generic AI language
- [ ] [FOUNDER TO PROVIDE] flags for any gaps

---

## OUTPUT

Save to: **outputs/prfaq-draft.md**

After saving, confirm:

"✅ PRFAQ draft saved to outputs/prfaq-draft.md

**Summary:**
- Word count: [X] words (~2.5 pages)
- FAQs included: [Y]/8
- Gaps flagged: [Z] items marked [FOUNDER TO PROVIDE]
- Ready for review: [Yes/No]

**Next steps:**
1. Review draft and fill any [FOUNDER TO PROVIDE] gaps
2. Optional: Run @prompts/prfaq-critique.md for refinement
3. Export to PDF for Improbable submission"

---

**Generate the PRFAQ now.**
