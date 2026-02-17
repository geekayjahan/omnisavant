'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText } from 'lucide-react';

const content = `# AI Moat Analysis: Where the Future Is, and Whether We're Building the Right Things

---

## Page 1: The Real Map of Where Value Is Accumulating

The AI market is not one market. It is three distinct layers with radically different competitive dynamics. Most teams are building in the wrong layer without knowing it.

| Layer | Who Wins Here | Defensibility | Examples |
|---|---|---|---|
| **Foundation Models** | 3–5 labs globally | Extreme capital barriers, winner-take-few | OpenAI, Anthropic, Google DeepMind |
| **Infrastructure / Primitives** | Infra-native builders with distribution | Network effects + developer lock-in | Browserbase, Nvidia, Twilio analogs |
| **Workflow / Application Layer** | Domain-deep teams with proprietary data | Switching costs + data flywheels | Harvey, Cursor, Sierra, Glean |

**The critical insight:** Foundation model quality is converging. A company that builds its "moat" on model superiority will have it eroded within 12–18 months. Harvey proved this when it scrapped its proprietary vertical model in 2025 after frontier models outperformed it on its own benchmark — and then grew faster by pivoting to orchestration depth.

**Where money is flowing vs. where moats are forming:**

| What VC Is Funding | Where Durable Value Actually Forms |
|---|---|
| Foundation model races ($80B in 2025) | Workflow embedding + data capture |
| Shiny demos and agentic experiments | Compliance-native, audit-trail-ready systems |
| Per-seat SaaS replicas | Outcome-based pricing locked to value |
| General-purpose assistants | Narrow vertical tools that own a workflow |

**The uncomfortable truth:** 58% of all AI VC in 2025 went to megarounds of $500M+. The middle is getting hollowed out. If you're not in the elite capital tier and not building deep workflow moats, you're in the most dangerous position in the market.

---

## Page 2: The Moat Taxonomy — Ranked by Durability

Not all moats are equal. Here is the honest stack-ranking of what actually compounds versus what only looks like a moat until it doesn't.

### Moat Durability Matrix

| Moat Type | Time to Build | Defensibility Horizon | Key Risk | Best Examples |
|---|---|---|---|---|
| **Proprietary decision traces** | 2–5 years embedded | 5–10 years | Requires deep workflow access first | Harvey, Abridge, Greenlite |
| **Human retraining switching costs** | 2–4 years in production | 5–8 years | Requires regulated industry or professional users | Abridge (clinicians), Harvey (lawyers) |
| **Per-customer knowledge graphs** | 1–3 years in use | 4–7 years | Needs continuous usage to compound | Glean, Dust |
| **Compliance infrastructure lock-in** | 1–2 years | 4–6 years | Regulation can shift | Greenlite, Parcha |
| **Outcome-based pricing alignment** | 6–18 months | 3–5 years | Competitors copy pricing model | Sierra, Crescendo, Chargeflow |
| **Developer workflow embedding** | 6–18 months | 3–5 years | Distribution threat from GitHub/Google | Cursor |
| **Two-sided network effects** | 1–3 years | 3–5 years | Requires simultaneous supply+demand scaling | Mercor |
| **Multi-model orchestration** | 6–12 months | 2–3 years | Erodes as model APIs commoditize | Harvey's current arch |
| **Domain-specific embeddings** | 3–6 months | 1–2 years | Frontier model improvements erase | Voyage AI (weakening) |
| **API wrapper + prompt engineering** | Days–weeks | Months | None — this is not a moat | Most failed startups |

### The "99% Rule" — The Gap Nobody Talks About

Getting an AI demo to 80% is easy. Getting to 99% reliable production performance takes 10–100x more effort. This gap is itself a moat — companies that have crossed it hold an operational lead that competitors can't close cheaply or quickly. The question to ask of any AI product: *Has this crossed the 99% threshold in its core workflow, and does crossing it require years of edge-case data?*

---

## Page 3: Six Patterns That Separate Winners From Dead Weight

The survivors are systematically doing the opposite of what the consensus tells you to do. These patterns appear repeatedly across the most defensible companies.

### Pattern Analysis Table

| Pattern | Conventional Wisdom | What Winners Do | Who Does It |
|---|---|---|---|
| **Market focus** | Broad TAM = more opportunity | Dramatically narrow focus on one painful problem for one "hero user," then expand | Clay (6 years narrow before PMF), Cursor, Gumloop |
| **Pricing** | Compete on cost, be accessible | Charge more — premium pricing signals that the product solves a real, high-value problem | Harvey, Chargeflow (25% of recovered chargebacks), Microsoft Copilot ($30/user/month) |
| **Human involvement** | Automate everything, humans = inefficiency | Build human layers intentionally as product DNA — harder to scale = harder to copy | Crescendo (acquired BPO firm), Fyxer (4:1 human-to-engineer ratio), Arcline (20% human for critical legal work) |
| **Compliance** | Compliance is a burden, move fast | Enter through the compliance door — overworked teams, no budget for innovation, permanent after adoption | Greenlite (AML/sanctions), Parcha, Abridge (audit trails as feature) |
| **AI positioning** | Lead with AI capabilities | Lead with outcomes and transparency. Anti-hype positioning wins enterprise trust | Abridge "Linked Evidence," companies marketing "100% LLM-Free" |
| **Data strategy** | Collect everything | Capture structured decision traces — inputs, policies applied, exceptions granted, reasoning — this is the irreplaceable operational asset | Harvey, Abridge, every company in execution-path workflows |

### The "Data Trojan Horse" in Practice

The most defensible companies don't ask to be the platform. They solve one unbearable pain point, capture irreplaceable data while doing it, and expand. The wedge creates the flywheel.

\`\`\`
Narrow Entry Point → Proprietary Data Capture → Workflow Expansion → Lock-In
     (solve one        (no one else has this)     (natural upsell      (switching now
      thing perfectly)                              to adjacent          means losing
                                                    workflows)          years of data)
\`\`\`

---

## Page 4: The Funding Landscape and Exit Reality

### Where the $202B Went in 2025

| Category | Funding Share | Startup Market Share | What This Means |
|---|---|---|---|
| Foundation models | ~40% ($80B) | Winner-take-few (3–5 labs) | Not a startup game |
| Enterprise AI applications | ~18% ($37B) | 63% startup-captured | The real battleground |
| AI infrastructure/primitives | ~15% | Consolidating fast | Infrastructure plays require conviction early |
| AI coding tools | Small % of above | 70%+ by 3 companies | Already over — entry window closed |
| AI sales tools | Small % of above | 78% startup-held | Still fragmented, moats forming |
| AI finance/compliance | Small % of above | 91% startup-held | Highest defensibility, highest barrier |

### The "License & Acquihire" Exit Reality

A new deal structure has emerged that changes how you should think about outcomes:

| Company | What Happened | Effective Outcome |
|---|---|---|
| Inflection AI | Microsoft paid $650M to license models + hired co-founder as CEO of Microsoft AI | Inflection = licensing shell |
| Character.AI | Google paid $2.7B for IP + returning founders | Google got the team |
| Adept AI | Amazon absorbed 66% of employees for $25M | Company reduced to ~4 people |

**The strategic implication:** If your exit is acquihire, your moat doesn't need to be deep — it needs to be *legible* to a large acquirer. If your exit is independence or IPO, your moat needs to be so deeply embedded that removal is economically catastrophic for customers. These are different companies built differently. Decide which you are.

### Mortality Table

| Stage | Failure Rate Signal |
|---|---|
| All AI startups (5-year) | ~90% — significantly worse than 70% for general tech |
| Enterprise GenAI pilots (no ROI) | 95% deliver no measurable ROI |
| Series B shutdowns (2024 vs 2023) | Up 133% year-over-year |
| Companies abandoning most AI initiatives (2025) | 42% — up from 17% in 2024 |
| Startups shut down in 2024 | 966 — up 25.6% from 2023 |

The shakeout is not coming. It is happening. The companies that survive this period will own their categories for a decade.

---

## Page 5: The Forward View — Where the Moats of 2027–2030 Are Being Built Now

### Categories by Competitive State

| Category | Current State | 2027 Forecast | Entry Window |
|---|---|---|---|
| AI coding assistants | Consolidated (3 players, 70%+ share) | Platform war (GitHub vs. Cursor vs. Google) | Closed for new entrants |
| AI legal workflow | Harvey dominant, Filevine entrenched | Vertical expansion wars | Narrow — needs deep workflow access |
| AI clinical documentation | Abridge scaling, Nuance legacy | Health system contracts = 5-year lock-in | Open but capital-intensive |
| AI compliance / AML | Greenlite, Parcha early | Regulatory mandates will accelerate adoption | Open — compliance as offense |
| AI financial operations | 91% startup share, fragmented | First to cross 99% accuracy wins category | Open — accuracy is the moat |
| AI sales / revenue ops | 78% startup share, fragmented | Consolidation around data flywheels | Open — data capture is the race |
| AI infrastructure (browser/agent primitives) | Browserbase early lead | Twilio-like consolidation around one infra layer | Closing fast |
| RLHF / training data marketplaces | Mercor dominant | Foundation model dependency risk | Risky — model labs could internalize |

### The Three Compounding Forces That Determine Who Wins

**1. Decision Traces as the New Data Moat**
Every AI agent executing a workflow creates a structured record: what inputs arrived, what policies applied, what exceptions were granted, what action resulted. Enterprises almost never have this data today. The companies that sit in the execution path of critical workflows will own this data. It is not replicable. It compounds. It creates an operational record that makes the AI irreplaceable — not because the model is better, but because the *history* is irreplaceable.

**2. Compliance as a Time-Locked Moat**
The EU AI Act Article 19 mandates that high-risk AI providers retain auto-generated logs for 6+ months. The Federal Reserve requires human oversight in model risk management. Every month of compliant audit history makes switching vendors require *regulatory continuity justification* — a near-impossible bureaucratic hurdle in financial services and healthcare. The companies building compliance-native architecture now are installing time-locked moats that won't be visible for 18–24 months.

**3. Human Calibration Investment**
When 6,700 Johns Hopkins physicians build muscle memory around a specific AI workflow — learning its failure modes, calibrating trust, training on its interface — the switching cost is not software migration. It is mass professional retraining. This is the most underappreciated moat in AI. It is invisible in demos. It only appears after 12–18 months of production use.

### The Honest Scorecard: What a Strong Moat Looks Like in 2026

| Dimension | Weak (Fragile) | Strong (Compounding) |
|---|---|---|
| Model dependency | "We use GPT-4 / Claude" as differentiation | Model-agnostic orchestration; switching models improves performance |
| Data strategy | Web-scraped or licensed datasets | Proprietary data generated as byproduct of delivering value |
| Pricing | Per-seat or pure consumption | Outcome-based; vendor economics tied to customer success |
| Workflow depth | Occasional use / standalone tool | Daily use, embedded in systems of record |
| Human layer | Fully automated (sold as a feature) | Intentional human layer creating calibration investment and reliability |
| Compliance posture | Bolted on retroactively | Audit trails, data provenance, explainability built from day one |
| Expansion path | Hope customers buy more seats | Natural data flywheel creates upsell into adjacent workflows |
| Exit scenario | Acquihire | Customers cannot remove without operational crisis |

---

## The Unignorable Conclusion

The AI market is executing a massive misdirection. Everyone is watching model benchmarks while the actual moats are being built in workflows, compliance logs, and human retraining costs that won't be visible for two years.

The companies that will still exist in 2030 are not the ones with the most impressive demos. They are the ones whose AI is the most painful to remove — because removing it means losing years of proprietary decision traces, rebuilding compliance audit trails, and retraining thousands of professionals.

The question is not "are we building good AI?" The question is: **"If a customer tried to rip us out tomorrow, what would break?"**

If the answer is "nothing much" — that's the gap to close.

If the answer is "their compliance records, their operational memory, their trained workflows, and their data history" — that's a moat.

Build toward the second answer. Everything else is noise.
`;

export default function MoatAnalysis() {
  return (
    <div className="space-y-6">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <FileText className="text-electric" size={36} />
          Moat Analysis
        </h2>
        <p className="text-gray-500">
          AI Moat Analysis: Where the Future Is, and Whether We're Building the Right Things
        </p>
      </div>

      <div className="glass-card p-10 max-w-[960px]">
        <div className="prose prose-slate max-w-none
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-2
          prose-h2:text-xl prose-h2:font-bold prose-h2:text-electric prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-base prose-h3:font-bold prose-h3:text-gray-800 prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-600
          prose-blockquote:border-l-4 prose-blockquote:border-electric prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:italic prose-blockquote:my-4
          prose-code:text-electric prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-pre:text-sm prose-pre:text-gray-700
          prose-hr:border-gray-200 prose-hr:my-8
          prose-table:text-sm prose-table:border-collapse
          prose-thead:bg-gray-50
          prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-gray-700
          prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2 prose-td:text-gray-700
          prose-li:text-gray-700
          prose-ul:list-disc prose-ul:pl-5
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
