'use client';

import { Wand2, Brain, Zap, Network, Layers, Globe, Shield, TrendingUp, XCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const moats = [
  {
    number: '1',
    icon: Brain,
    name: 'Organizational Memory — The Institutional Brain',
    color: 'electric',
    colorClass: 'bg-electric/10 border-electric/30 text-electric',
    badgeClass: 'bg-electric text-white',
    fullPower: 'Captures structured decision memory — not documents. What signal came in, what threshold triggered it, what action was taken, what outcome followed. After 18 months, Omnisavant knows this org\'s signal-to-action patterns better than any replacement could reconstruct.',
    fintech: 'A B2B payments fintech knows that when an enterprise client\'s transaction volume drops >15% over two consecutive weeks while support tickets stay flat, that\'s a procurement review signal — not a usage dip. That pattern came from six prior cases. It\'s now in Omnisavant\'s memory. Switching to a competitor means starting from zero.',
    burry: 'Everyone is building faster data pipelines. Nobody is capturing the decision logic on top. The data gets cheaper. The institutional interpretation of what it means for this specific org — that is the scarce asset.',
  },
  {
    number: '2',
    icon: Zap,
    name: 'Signal-to-Action Learning Loop — The Self-Improving Engine',
    color: 'neon-pink',
    colorClass: 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink',
    badgeClass: 'bg-neon-pink text-white',
    fullPower: 'One-click feedback on every insight: "acted on this," "already knew this," "wrong context." 10 seconds of friction per insight. 2,000 labeled moments later, the model knows what this org considers signal vs. noise — revealed preferences that cannot be inferred from generic training data.',
    fintech: 'An SMB lender trained the Savant Engine on 18 months of portfolio behavior. It now knows: a 22% cash flow spike in construction lending in April is seasonal noise that precedes a May drawdown — not an improvement signal. Acting on it leads to overlending. No generic AI model knows this. Only the one trained on this lender\'s own decisions does.',
    burry: 'Industry-average data masks the patterns that matter for a specific portfolio. The model trained on your decisions is worth more than the one trained on everyone\'s data.',
  },
  {
    number: '3',
    icon: Network,
    name: 'Cross-Team Signal Arbitrage — The Intra-Org Intelligence Web',
    color: 'neon-purple',
    colorClass: 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple',
    badgeClass: 'bg-neon-purple text-white',
    fullPower: 'CS doesn\'t talk to Risk. Risk doesn\'t talk to Sales. Each team misses the signals that live in the gaps. Omnisavant routes signals from one team\'s data to the team that needs it — automatically, with context. Every new team connected compounds the value for every existing team.',
    fintech: null,
    fintechSignals: [
      { team: 'Risk', signal: 'Borrower\'s utilization rate creeping toward covenant threshold' },
      { team: 'CS', signal: 'Escalation from same borrower\'s operations lead about API stability — simultaneously' },
      { team: 'Sales', signal: 'Renewal call with this borrower\'s CFO in 10 days' },
      { team: 'Compliance', signal: 'Anomalous transaction pattern flagged on this borrower\'s account 6 weeks ago' },
    ],
    fintechOutcome: 'Normally, these four signals live in four systems with no connection. The CFO call happens without context. The covenant breach is caught too late.\n\nOmnisavant surfaces all four as a unified brief before the 10-day call. The CFO is impressed rather than surprised.',
    burry: 'The biggest risk in fintech is not the risk you can see. It is the signal sitting in someone else\'s team\'s system that you never saw because no one connected the dots. Omnisavant is the dot-connector. Every team that joins compounds the value for every existing team.',
  },
  {
    number: '4',
    icon: Layers,
    name: 'Workflow Embedding — The Infrastructure You Cannot Turn Off',
    color: 'cyber-teal',
    colorClass: 'bg-cyber-teal/10 border-cyber-teal/30 text-cyber-teal',
    badgeClass: 'bg-cyber-teal text-white',
    fullPower: 'Omnisavant is not a tab. It surfaces into wherever teams already work — Salesforce opportunity view, Linear board, Notion weekly doc. You do not visit it. It finds you.',
    fintech: 'A compliance team embeds Omnisavant into AML case management. When a transaction is flagged, Omnisavant surfaces signal history, prior SAR activity, peer patterns, and a recommended disposition with full reasoning chain — before the analyst opens the case.\n\nTime-to-decision: 4 hours → 45 minutes. The regulator\'s question is answered before it is asked. Removing Omnisavant means rebuilding the entire case process from scratch.',
    burry: 'Automation replaces humans. Embedding makes humans 5x more effective and structurally dependent. Dependence is the moat. Replacement is a feature.',
  },
  {
    number: '5',
    icon: Globe,
    name: 'Vertical Specialization — The Interpretation Layer That Cannot Be Generic',
    color: 'electric',
    colorClass: 'bg-electric/10 border-electric/30 text-electric',
    badgeClass: 'bg-electric text-white',
    fullPower: '"Churn signal" in B2B SaaS, "delinquency signal" in SMB lending, "counterparty risk" in institutional payments — these are entirely different things. Generic AI produces one answer for all three. Omnisavant is trained on 10,000 labeled decisions from each vertical. The interpretation quality is demonstrably different.',
    fintech: null,
    verticalTable: [
      { vertical: 'Construction lending', signal: 'Cash conversion cycle extends 18 days', generic: '"Cash conversion cycle extended, investigate."', omnisavant: '"Consistent with normal Q4 construction draw patterns — flag for monitoring but no immediate action."' },
      { vertical: 'SaaS lending', signal: 'Cash conversion cycle extends 18 days', generic: '"Cash conversion cycle extended, investigate."', omnisavant: '"Billing cycle shift — check if annual vs monthly billing changed."' },
      { vertical: 'Retail lending', signal: 'Cash conversion cycle extends 18 days', generic: '"Cash conversion cycle extended, investigate."', omnisavant: '"Early deterioration signal — escalate to risk review."' },
    ],
    burry: 'Burry\'s edge was not that he had access to data nobody else had. He had access to the same data — the loan-level tapes — but he read them differently because he understood the structure. Omnisavant\'s vertical depth is the same edge: the interpretation of the signal, not the signal itself.',
  },
  {
    number: '6',
    icon: Shield,
    name: 'Compliance-Native Architecture — The Regulatory Lock-In',
    color: 'neon-pink',
    colorClass: 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink',
    badgeClass: 'bg-neon-pink text-white',
    fullPower: 'Compliance is a procurement gate and a compounding moat. Built into the foundation, not bolted on. Every signal surfaced carries:',
    complianceItems: [
      'Full source provenance (what data, from where, accessed when)',
      'Full decision reasoning (what logic, what thresholds, what policies applied)',
      'Full action trail (what was recommended, what was acted on, what outcome followed)',
      'Jurisdiction-aware configurations (SOC 2, GDPR, EU AI Act Article 19, FINRA, SEC)',
    ],
    fintech: 'AML fines up 417% in H1 2025. The cause: AI deployed for growth without compliance infrastructure to match. The CCO doesn\'t approve Omnisavant for its AI feature. They approve it because when the regulator asks "show us every decision this AI influenced," Omnisavant produces the full audit trail — every account, every signal, every action, 18 months back.\n\nThat shifts the buyer from VP Product to General Counsel. No CCO will remove a system holding 18 months of compliant audit history. That transition is indistinguishable from a compliance risk event.',
    burry: 'Everyone deployed AI to pass the demo. Nobody deployed AI to pass the audit. Omnisavant is built to pass the audit.',
  },
];

const burryMisalignments = [
  {
    number: '1',
    consensus: 'Everyone\'s building dashboards',
    consensusDetail: 'Aggregate more data, display it better.',
    dataShows: 'The bottleneck is not data access. It is signal interpretation. Operators are drowning in data and starving for three things that require their attention today.',
    position: 'Show less, not more. Surface the three signals that matter, not the thirty that exist. Every noise reduction increases signal authority. Authority is the moat.',
  },
  {
    number: '2',
    consensus: 'Everyone\'s automating',
    consensusDetail: 'Automate the decision so humans don\'t have to make it.',
    dataShows: 'In regulated fintech, automation without accountability is a liability time bomb. Every regulator is converging on one requirement: humans must be accountable, and that accountability must be auditable.',
    position: 'Do not automate decisions. Inform them — with full reasoning, full source trail, and a human-in-the-loop step that generates the audit record automatically. The human decision is the product.',
  },
  {
    number: '3',
    consensus: 'Everyone\'s selling AI features',
    consensusDetail: '"Our AI surfaces insights." Every vendor says this. Buyers have heard it 40 times this quarter.',
    dataShows: 'Enterprise buyers are not buying AI features. They are buying protection against the thing they missed last time — the churn they didn\'t see, the compliance failure, the renewal that slipped.',
    position: '"Last quarter, Omnisavant flagged 12 accounts before your CS team knew they were at risk. 4 retained. 8 churned. Want the list of the 9 at risk right now?" That is an outcome guarantee. Outcome guarantees become outcome-based pricing at month 18.',
  },
  {
    number: '4',
    consensus: 'Everyone\'s targeting the VP of Product',
    consensusDetail: 'Land in product, expand to ops, eventually reach finance.',
    dataShows: 'The CCO has budget, urgency, and a non-discretionary mandate. The VP Product has a roadmap. The CCO has a regulatory deadline and a fine to avoid.',
    position: 'Enter through compliance. The CCO conversation: "We build the audit trail for every AI-influenced decision. When the regulator asks, you have the answer ready." Once approved, no VP Product can remove it.',
  },
];

const fullPictureScenarios = [
  {
    type: 'B2B Payments Fintech',
    layer: 'Compliance Intelligence Layer',
    detail: 'The CCO\'s office approved it. The audit trail has 18 months of AI-influenced decisions with full reasoning chains. When regulators audit, the team answers in 4 hours what previously took 4 weeks to assemble.',
  },
  {
    type: 'B2B SMB Lending Platform',
    layer: 'Portfolio Intelligence Layer',
    detail: 'The Savant Engine flags deterioration patterns specific to their vertical. The Risk team and CS team see the same signals, no translation layer needed. When a borrower is about to breach a covenant, it is surfaced 6 weeks before the event — not 6 hours after.',
  },
  {
    type: 'SaaS Fintech',
    layer: 'Revenue Intelligence Layer',
    detail: 'RevOps sees churn signals before QBR season. The renewal conversation is informed. Outcome-based pricing is in month 18 — $400K in retained ARR surfaced by Omnisavant this year. The renewal conversation is about whether to expand to the next team, not whether to renew.',
  },
];

const eliminatedVerticals = [
  {
    vertical: 'Generic SaaS Tool',
    verdict: 'Eliminated',
    appeal: 'Huge TAM. Every enterprise uses SaaS. Sell broadly, win everywhere.',
    problem: 'SaaS-as-a-category is where Omnisavant\'s founding team DNA lives — and it is exactly the instinct to resist. Building a generic intelligence tool for "any enterprise" produces no vertical depth, no proprietary signal interpretation, and no defensible moat. You become the thing OpenAI, Perplexity, and Glean already are: a general-purpose assistant. They have billions in capital, better models, and existing distribution. You do not win on their turf.\n\nMore fundamentally: SaaS-as-a-category is collapsing. The AI wave is killing generic SaaS tools faster than any prior technology cycle. Per-seat licensing for tools that can be replicated by a foundation model prompt is a failing business model. You do not enter a market as it implodes.',
    honestRead: 'SaaS thinking built Omnisavant\'s founding instincts. Stripping that thinking is the first task. Building a generic SaaS tool is building toward the lowest common denominator — and incumbents always win that race.',
  },
  {
    vertical: 'EdTech',
    verdict: 'Eliminated',
    appeal: 'Learning intelligence. Personalization. Large market.',
    problem: 'EdTech has no founding team experience, no existing customer relationships, and — critically — no money. EdTech buyers are budget-constrained institutions with 18-month procurement cycles, 3-year contracts, and a fundamental aversion to paying for AI tools when free alternatives exist. The outcome-based pricing thesis falls apart immediately: what is the quantifiable outcome? A student\'s test score improvement? A district\'s dropout rate? Those metrics take years to manifest, are politically contested, and are not tied to buyer budgets in the way that retained revenue or avoided fines are.\n\nEdTech also has the wrong regulatory profile. FERPA and COPPA create compliance requirements with no budget attached — unlike fintech\'s AML compliance, which is a line-item on a P&L because violations cost real money.',
    honestRead: 'EdTech looks like a social good. It is not a business. Omnisavant is building a business.',
  },
  {
    vertical: 'Healthcare',
    verdict: 'Eliminated (Year 1–2)',
    appeal: 'Compliance-native architecture aligns. HIPAA is a real gate. Large enterprise deals.',
    problem: 'Healthcare is a correct long-term thesis but the wrong first move. Omnisavant has no healthcare founding team experience. Clinical workflow is highly regulated not just in data but in AI decision-making — the FDA is now regulating AI in clinical pathways as a medical device. A wrong decision in healthcare has patient harm liability attached to it, not just a fine. The sales cycle is not 6 months — it is 18–24 months minimum, with hospital system procurement committees that require clinical validation, IRB considerations, and C-suite sign-off from three departments simultaneously.\n\nAbridge spent years embedded in Johns Hopkins before scaling. It had clinical co-founders and deep ER workflow knowledge. Omnisavant does not have that today. Entering healthcare without that foundation is not a bold move. It is a slow death.',
    honestRead: 'Healthcare is a correct moat destination in year 4–5, not year 1–2. The compliance architecture Omnisavant builds in fintech will transfer. The enterprise credibility will transfer. The healthcare-specific knowledge will not be there without intentional investment the founding team cannot make yet.',
  },
  {
    vertical: 'Legal',
    verdict: 'Eliminated',
    appeal: 'Harvey is $100M+ ARR. Legal is compliance-intensive. High willingness to pay.',
    problem: 'Harvey owns legal. It is not contested territory — it is won territory. Harvey has Harvey-specific training data, deep firm relationships, 150%+ NRR, and law firm procurement trust built over four years of production use. An entrant without legal domain expertise and without legal training data cannot compete on Harvey\'s ground.\n\nMore importantly: legal is a narrow market. There are roughly 1.3 million licensed attorneys in the US. The addressable enterprise legal market is perhaps $8–12B. It is large enough for Harvey to build a durable company. It is not large enough for two Harvey-scale companies. The second-mover in legal AI gets the clients Harvey does not want, priced at the margins Harvey sets.',
    honestRead: 'Legal has the right profile — high-compliance, high-willingness-to-pay, professional user with retraining switching costs. The problem is Harvey built that category. Omnisavant needs a category it can own, not one it enters as a challenger to a dominant incumbent with better data and deeper relationships.',
  },
];

const fintechFactors = [
  { factor: 'Domain proximity', why: 'Founding team SaaS background has natural overlap with B2B fintech operators — RevOps, CS, Risk, Compliance teams have the same signal-to-decision problems as SaaS companies, with higher stakes and higher willingness to pay' },
  { factor: 'Budget reality', why: 'AML fines up 417% in 2025 H1. Compliance is a P&L line item. The buyer has budget because the alternative is existential risk, not discretionary spend' },
  { factor: 'Regulatory alignment', why: 'SOC 2, GDPR, EU AI Act, FINRA, SEC — all create audit trail requirements that Omnisavant\'s architecture naturally satisfies. Compliance-native architecture is a product feature in fintech; it is table stakes' },
  { factor: 'Outcome quantifiability', why: 'Revenue retained, fines avoided, churn surfaced, covenants caught early — fintech outcomes are in dollars, not engagement metrics. Outcome-based pricing is natural, not invented' },
  { factor: 'Market timing', why: 'Fintech AI is 91% startup-held and fragmented. No dominant player has won the intelligence layer. The window is open' },
  { factor: 'Sierra analog', why: 'Sierra knew exactly who it served: customer support leaders. It solved for one outcome: resolution rate. It built around that audience and priced against it. Omnisavant follows the same logic: B2B fintech operators, one outcome (revenue at risk surfaced), build around that, price against it' },
];

export default function MagicWand() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Wand2 className="text-neon-purple" size={36} />
          The Magic Wand Scenario
        </h2>
        <p className="text-gray-500">
          No constraints. Day one. If Omnisavant could go after everything — entered fintech, built all six moats, thought like Burry — what would that actually look like?
        </p>
      </div>

      {/* Setup */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-4">The Setup</h3>
        <p className="text-gray-700 mb-6">Omnisavant is the <strong>operational nervous system</strong> at the center of every B2B fintech — lending platforms, compliance-driven fintechs, institutional payments, revenue operations teams. Not a dashboard. Not a reporting tool. Every morning, before the first meeting, it has already:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {[
            'Read every customer signal from the past 24 hours across all connected systems',
            'Cross-referenced it against the org\'s own historical signal-to-decision patterns',
            'Surfaced the three things leadership doesn\'t know they need to know today',
            'Flagged two decisions being made without the data that should be informing them',
            'Produced a decision-ready brief, with full audit trail, ready for the 9am standup',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-neon-purple/5 border border-neon-purple/20 rounded-lg p-4">
              <CheckCircle className="text-neon-purple shrink-0 mt-0.5" size={18} />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Six Moats */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold px-1">The Six Moats — Fully Realized in Fintech</h3>
        {moats.map((moat, i) => {
          const Icon = moat.icon;
          return (
            <div key={i} className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-9 h-9 rounded-full ${moat.badgeClass} font-bold text-sm flex items-center justify-center shrink-0`}>{moat.number}</span>
                <Icon className={`text-${moat.color}`} size={22} />
                <h4 className="text-xl font-bold text-gray-900">{moat.name}</h4>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Full Power */}
                <div className="xl:col-span-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">What It Does at Full Power</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 h-full">
                    {moat.fullPower.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-sm text-gray-700 mb-3 last:mb-0">{para}</p>
                    ))}
                    {moat.complianceItems && (
                      <ul className="mt-3 space-y-2">
                        {moat.complianceItems.map((item, ci) => (
                          <li key={ci} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="text-neon-pink shrink-0 mt-0.5" size={14} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* In Fintech */}
                <div className="xl:col-span-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">In Fintech Specifically</p>
                  <div className={`border rounded-xl p-5 h-full ${moat.colorClass} bg-opacity-5`}>
                    {moat.fintech && moat.fintech.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-sm text-gray-700 mb-3 last:mb-0">{para}</p>
                    ))}
                    {moat.fintechSignals && (
                      <>
                        <p className="text-sm text-gray-700 mb-4">Imagine a B2B lending platform where four signals exist simultaneously across four teams with no synthesis layer:</p>
                        <div className="space-y-2 mb-4">
                          {moat.fintechSignals.map((s, si) => (
                            <div key={si} className="bg-white/80 rounded-lg p-3 border border-gray-200">
                              <span className={`text-xs font-bold text-${moat.color} uppercase`}>{s.team}</span>
                              <p className="text-sm text-gray-700 mt-1">{s.signal}</p>
                            </div>
                          ))}
                        </div>
                        {moat.fintechOutcome && moat.fintechOutcome.split('\n\n').map((para, pi) => (
                          <p key={pi} className="text-sm text-gray-700 mb-3 last:mb-0">{para}</p>
                        ))}
                      </>
                    )}
                    {moat.verticalTable && (
                      <>
                        <p className="text-sm text-gray-700 mb-3">Same signal. Three verticals. Three completely different interpretations:</p>
                        <div className="space-y-3">
                          {moat.verticalTable.map((row, ri) => (
                            <div key={ri} className="bg-white/80 rounded-lg p-3 border border-gray-200">
                              <p className={`text-xs font-bold text-${moat.color} uppercase mb-1`}>{row.vertical}</p>
                              <p className="text-xs text-gray-500 mb-2">Signal: {row.signal}</p>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-red-50 rounded p-2">
                                  <p className="text-xs text-red-600 font-semibold mb-1">Generic AI</p>
                                  <p className="text-xs text-gray-700">{row.generic}</p>
                                </div>
                                <div className="bg-green-50 rounded p-2">
                                  <p className="text-xs text-green-600 font-semibold mb-1">Omnisavant</p>
                                  <p className="text-xs text-gray-700">{row.omnisavant}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Burry Angle */}
                <div className="xl:col-span-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">The Burry Angle</p>
                  <div className="bg-gray-900 rounded-xl p-5 h-full">
                    <p className="text-gray-300 text-sm leading-relaxed">{moat.burry}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Burry Misalignments */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrendingUp className="text-neon-pink" size={24} />
          Thinking Like Burry: The Contrarian Intelligence Posture
        </h3>
        <p className="text-gray-600 mb-2">Michael Burry&apos;s edge was structural. He did not find a secret. He followed incentives to their logical conclusion, identified the misalignment between what the market believed and what the data showed, and built his position before the correction.</p>
        <p className="text-gray-600 mb-8">Omnisavant, thinking like Burry, identifies the following structural misalignments in the market it serves:</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {burryMisalignments.map((m, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-900 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-neon-pink text-white text-xs font-bold flex items-center justify-center shrink-0">{m.number}</span>
                  <p className="text-white font-semibold text-sm">Misalignment: {m.consensus}</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <p className="text-xs font-semibold text-red-600 uppercase mb-1">Consensus Move</p>
                  <p className="text-sm text-gray-700">{m.consensusDetail}</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <p className="text-xs font-semibold text-amber-600 uppercase mb-1">What the Data Shows</p>
                  <p className="text-sm text-gray-700">{m.dataShows}</p>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <p className="text-xs font-semibold text-green-600 uppercase mb-1">Omnisavant&apos;s Contrarian Position</p>
                  <p className="text-sm text-gray-700">{m.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Picture */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-6">The Full Picture: Omnisavant at the Center</h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {fullPictureScenarios.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <p className="font-bold text-gray-900 mb-1">{s.type}</p>
              <p className="text-xs font-semibold text-electric uppercase mb-3">{s.layer}</p>
              <p className="text-sm text-gray-700">{s.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-gray-400 text-xs uppercase font-semibold mb-3">In all three scenarios, the answer to Burry&apos;s core question:</p>
          <p className="text-white text-lg font-semibold mb-4">&ldquo;If you ripped Omnisavant out tomorrow, what would break?&rdquo;</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {['The compliance audit trail', 'The portfolio memory', 'The organizational intelligence that cannot be reconstructed from scratch', 'The decision history that regulatory scrutiny will demand', 'The signal-to-action patterns that took 18 months to label and train'].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3">
                <p className="text-gray-200 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-electric font-bold text-lg mt-5">That is a moat. Everything else is a feature.</p>
        </div>
      </div>

      {/* Vertical Elimination */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <XCircle className="text-red-500" size={24} />
          Why Not Everywhere Else — The Vertical Elimination Case
        </h3>
        <p className="text-gray-600 mb-8">The magic wand scenario ends with fintech. That is not arbitrary. Every other vertical that looks adjacent has a structural reason it is the wrong first move for Omnisavant. The following is a rational, evidence-based elimination, not a dismissal.</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {eliminatedVerticals.map((v, i) => (
            <div key={i} className="border border-red-100 rounded-xl overflow-hidden">
              <div className="bg-red-50 px-5 py-4 flex items-center justify-between">
                <p className="font-bold text-gray-900">{v.vertical}</p>
                <span className="text-xs font-bold text-red-600 bg-red-100 border border-red-200 px-3 py-1 rounded-full">{v.verdict}</span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Surface Appeal</p>
                  <p className="text-sm text-gray-600 italic">{v.appeal}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase mb-1">The Structural Problem</p>
                  {v.problem.split('\n\n').map((para, pi) => (
                    <p key={pi} className="text-sm text-gray-700 mb-2 last:mb-0">{para}</p>
                  ))}
                </div>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-1">The Honest Read</p>
                  <p className="text-sm text-white">{v.honestRead}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Fintech */}
        <div className="border border-green-200 rounded-xl overflow-hidden">
          <div className="bg-green-50 px-5 py-4 flex items-center justify-between">
            <p className="font-bold text-gray-900 text-lg">Why Fintech: The Rational Case</p>
            <span className="text-xs font-bold text-green-600 bg-green-100 border border-green-200 px-3 py-1 rounded-full">Selected</span>
          </div>
          <div className="p-5">
            <p className="text-gray-600 mb-4">Fintech passes every test the eliminated verticals fail.</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700 w-[22%]">Factor</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Why Fintech Passes</th>
                  </tr>
                </thead>
                <tbody>
                  {fintechFactors.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-green-50/40'}>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-green-700">{row.factor}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-gray-900 mb-2">The Glean parallel is the best analog:</p>
              <p className="text-gray-700 text-sm">Glean did not build a generic enterprise search. It built enterprise search for the specific enterprise knowledge graph problem — connectors to every system of record, permission-aware, per-customer knowledge graph. It solved one real problem for one real buyer, built the moat around that, and expanded. $7.2B valuation is not from being broad. It is from being the best at one specific, important, compounding problem.</p>
              <p className="text-gray-700 text-sm mt-3">Omnisavant does the same thing — not for enterprise knowledge retrieval, but for enterprise intelligence-to-decision. In fintech. With compliance native. With outcome-based pricing designed from day one.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5 text-center">
              <p className="text-white font-bold text-lg">That is OpenAI done right. That is Glean done right. That is what Omnisavant builds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
