# PRFAQ Discovery - Improbable.io Venture Builder

## Instructions:
Fill in your venture brief below, then send this file to Claude: @prompts/prfaq-discovery.md

---

[VENTURE BRIEF]

**Venture Name:** [Name]
**One-Liner:** [What you're building for whom]
**Improbable Fit:** [AI / Metaverse / Web3 - why Improbable?]

[END BRIEF]

---

@Claude

ROLE: Venture builder at Improbable.io conducting lean discovery for a PRFAQ.

TASK: Ask 18 focused questions to gather what's needed for a 2.5 page PRFAQ (1 page Press Release + 7-8 FAQs).

OUTPUT: Save answers to outputs/prfaq-discovery-answers.md when founder says "done"

---

## DISCOVERY QUESTIONS

### PRESS RELEASE CONTENT (Questions 1-7)
*These populate your 1-page Press Release*

**1. HEADLINE**
Complete this: "[Venture Name] enables [customer] to [outcome] by [how]"
Keep it under 15 words.

**2. CUSTOMER & PAIN**
- Who exactly is your customer? (Job title, company type, one sentence)
- What problem costs them the most pain today? (Time, money, or opportunity lost - quantify if possible)
- One real quote from a customer interview describing this pain (or your best proxy)

**3. THE SOLUTION**
In 2-3 sentences: What do you do and what's now possible that wasn't before?

**4. WHY NOW?**
What trend, tech shift, or market change makes this urgent NOW?

**5. DIFFERENTIATION**
What's your unfair advantage? (Why can't competitors copy this easily?)

**6. IMPROBABLE LEVERAGE**
How does Improbable's tech/network give you an edge others don't have?

**7. TRACTION SNAPSHOT**
What proof exists today? Pick what applies:
- Customer interviews: [#] completed
- LOIs/Pilots: [#] signed, [£] value
- Prototype: [Yes/No, what stage]
- Revenue: [£] if any

---

### FAQ CONTENT (Questions 8-14)
*These answer the 7-8 investor questions in your FAQ*

**8. MARKET SIZE (for FAQ: "How big is this?")**
- TAM: £[X] billion (total market)
- Your target in 3 years: £[Y] million (realistic capture)
- One sentence on how you calculated this

**9. BUSINESS MODEL (for FAQ: "How do you make money?")**
- Revenue model: [SaaS / Usage / Marketplace / Other]
- Price point: £[X] per [unit]
- Target gross margin: [%]

**10. TEAM (for FAQ: "Why will you win?")**
- Who are the founders? (Names + 1 sentence on relevant experience each)
- What makes YOU uniquely qualified for THIS problem?

**11. INVESTMENT ASK (for FAQ: "What do you need?")**
- Phase 1 (Months 1-3): £[X] to achieve [milestone]
- Phase 2 (Months 4-12): £[Y] to achieve [milestone]
- 18-month target: £[Z] ARR with [#] customers

**12. TOP RISK (for FAQ: "What could go wrong?")**
- Biggest risk to success:
- How you'll mitigate it:
- Kill criteria (when would you stop):

**13. TECHNICAL ARCHITECTURE (for FAQ: "Can you build this at scale?")**
*Improbable is deeply technical - they need confidence in your approach*
- What's your core technical approach in 2-3 sentences?
- What's the hardest technical problem you need to solve?
- How does this scale? (10 users → 1,000 → 100,000)
- What infrastructure/stack will you use?

**14. NETWORK EFFECTS & DEFENSIBILITY (for FAQ: "What's your moat over time?")**
*Improbable invests in platforms and ecosystems, not features*
- Does your product get better as more people use it? How?
- What switching costs or lock-in builds over time?
- What data, network, or ecosystem advantage compounds?
- If you win, why is it hard for others to catch up?

---

### STRATEGIC FIT (Questions 15-18)
*For Improbable's internal assessment*

**15. PORTFOLIO SYNERGY**
Any connection to Improbable's existing ventures? (MSquared, Jitter, Somnia, etc.)

**16. EXIT PATH**
Who would acquire this in 3-5 years? Or is this an IPO candidate?

**17. WHY IMPROBABLE vs. TRADITIONAL VC?**
What operational support do you need beyond capital?

**18. GO-TO-MARKET: FIRST 10 CUSTOMERS**
*Improbable wants ventures that can acquire customers, not just build tech*
- Who are your first 10 target customers? (Name companies or describe precisely)
- How will you reach them? (Warm intros, outbound, inbound, partnerships)
- What's your sales cycle? (Self-serve, demo-led, enterprise)
- Do you have any relationships or warm leads already?

---

## PROCESS

When founder says "done", save to outputs/prfaq-discovery-answers.md in this format:

```markdown
# PRFAQ Discovery Answers - [Venture Name]
Date: [Date]

## Press Release Inputs
Q1-Q7 answers...

## FAQ Inputs
Q8-Q14 answers...

## Strategic Fit
Q15-Q18 answers...

## Gaps to Address
[List any unanswered questions]
```

Confirm: "✅ Saved to outputs/prfaq-discovery-answers.md. Ready for @prompts/prfaq-draft.md"

---

**Begin by asking all 18 questions now.**
