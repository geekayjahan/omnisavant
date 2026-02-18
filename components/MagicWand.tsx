'use client';

import { Wand2, Brain, Zap, Network, Layers, Globe, Shield, TrendingUp, XCircle, CheckCircle, AlertTriangle, Target } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
} from 'recharts';

// ─── Data ────────────────────────────────────────────────────────────────────

const moats = [
  {
    number: '1', icon: Brain, color: 'electric',
    name: 'Organizational Memory',
    subtitle: 'The Institutional Brain',
    what: 'Structured decision memory — not documents. Signal → threshold → action → outcome. After 18 months, Omnisavant knows this org\'s patterns better than any replacement could reconstruct. Switching cost = time to re-accumulate. This grows monotonically with tenure.',
    fintech: 'A B2B payments fintech: transaction volume drops >15% two weeks running while support tickets stay flat = procurement review signal, not a usage dip. Learned from 6 prior cases. Now in memory. Any competitor starts at zero.',
    burry: 'Everyone builds faster data pipelines. Nobody captures the decision logic on top. The data gets cheaper. The interpretation — for this specific org — is the scarce asset.',
  },
  {
    number: '2', icon: Zap, color: 'neon-pink',
    name: 'Signal-to-Action Loop',
    subtitle: 'The Self-Improving Engine',
    what: 'One-click feedback on every insight. 10 seconds of friction per insight. 2,000 labeled moments = the model knows what this org considers signal vs. noise — revealed preferences impossible to infer from generic data. No competitor can replicate it: it\'s your customers\' own decisions, not generic training.',
    fintech: 'An SMB lender: 22% cash flow spike in construction lending in April = seasonal noise before a May drawdown, not an improvement. Acting on it causes overlending. Only the model trained on this lender\'s own decisions knows this. Industry-average data masks the patterns that matter for a specific portfolio.',
    burry: 'Your decisions, your model. The feedback loop compounds faster than any competitor can imitate — because the data is irreversibly tied to your org\'s own history.',
  },
  {
    number: '3', icon: Network, color: 'neon-purple',
    name: 'Cross-Team Signal Arbitrage',
    subtitle: 'The Intra-Org Intelligence Web',
    what: 'CS doesn\'t talk to Risk. Risk doesn\'t talk to Sales. Omnisavant routes signals between them automatically, with context. Every new team compounds the value for every existing team. A customer with 2 teams has more reason to add a 3rd than to switch.',
    fintech: null,
    fintechSignals: [
      { team: 'Risk', signal: 'Borrower utilization creeping toward covenant threshold' },
      { team: 'CS', signal: 'Escalation from same borrower\'s ops lead — API stability' },
      { team: 'Sales', signal: 'Renewal call with this borrower\'s CFO in 10 days' },
      { team: 'Compliance', signal: 'Anomalous transaction pattern flagged 6 weeks ago' },
    ],
    fintechOutcome: 'Four signals. Four systems. No connection. The CFO call happens without context. Omnisavant surfaces all four as a unified brief before the call. The CFO is impressed, not surprised.',
    burry: 'The biggest risk is the signal in someone else\'s system that you never saw. The intra-org network effect is rare in B2B SaaS — most tools serve one team. Build it deliberately.',
  },
  {
    number: '4', icon: Layers, color: 'cyber-teal',
    name: 'Workflow Embedding',
    subtitle: 'Infrastructure You Cannot Turn Off',
    what: 'Not a tab you visit. It surfaces into Salesforce opportunity views, Linear boards, Notion docs. You do not go to it. It finds you. A Slack digest that surfaces emerging signals turns Omnisavant from a tool into infrastructure. The alternative looks like deliberate blindness.',
    fintech: 'AML case management: when a transaction is flagged, Omnisavant surfaces signal history, SAR activity, peer patterns, and a recommended disposition — before the analyst opens the case. Time-to-decision: 4 hours → 45 minutes. Removing it means rebuilding the entire workflow.',
    burry: 'Automation replaces humans. Embedding makes humans 5x more effective and structurally dependent. Dependence is the moat. Push, not pull.',
  },
  {
    number: '5', icon: Globe, color: 'electric',
    name: 'Vertical Specialization',
    subtitle: 'Interpretation That Cannot Be Generic',
    what: '"Churn signal" in B2B SaaS, "delinquency" in SMB lending, "counterparty risk" in institutional payments — entirely different things. Generic AI gives one answer for all three. Over-fit to the vertical. The first 5 design partners generate labeled data that makes Omnisavant smarter for the next 50.',
    fintech: null,
    verticalTable: [
      { vertical: 'Construction lending', generic: '"Investigate."', omnisavant: '"Q4 draw pattern — monitor, no action."' },
      { vertical: 'SaaS lending', generic: '"Investigate."', omnisavant: '"Billing cycle shift — check annual vs monthly."' },
      { vertical: 'Retail lending', generic: '"Investigate."', omnisavant: '"Early deterioration — escalate to risk."' },
    ],
    burry: 'Burry\'s edge: same data as everyone else, read differently. Same signal. Three verticals. Three right answers. Generic AI gives one wrong answer for all three.',
  },
  {
    number: '6', icon: Shield, color: 'neon-pink',
    name: 'Compliance-Native Architecture',
    subtitle: 'The Regulatory Lock-In',
    what: 'Compliance is a procurement gate and a compounding moat — built in, not bolted on. The buyer shifts from VP Product to General Counsel or CCO. CCO budget is non-discretionary.',
    complianceItems: [
      'Full source provenance on every signal',
      'Full reasoning chain on every AI decision',
      'Full action trail — who saw what, when, what they did',
      'Jurisdiction-aware: SOC 2, GDPR, EU AI Act, FINRA, SEC',
    ],
    fintech: 'AML fines up 417% in H1 2025. The CCO doesn\'t approve Omnisavant for its AI feature. They approve it because the regulator\'s question — "show us every decision this AI influenced" — is answered in full, 18 months back. No CCO removes a system that holds that history.',
    burry: 'Everyone deployed AI to pass the demo. Nobody deployed AI to pass the audit. Compliance infrastructure is the thing everyone skipped to chase growth — and the regulatory correction is already underway.',
  },
];

const burryFindings = [
  {
    number: '1',
    finding: 'The Compliance Catastrophe',
    what: 'AML fines up 417% in H1 2025. 70% of EU regulators report rising money laundering risk in fintech. 93% of fintechs say BSA/AML compliance is a "major pain." Block fined $120M, Monzo £21M — both had AI.',
    structural: 'Everyone deployed AI to scale customer acquisition. Nobody deployed AI to scale compliance infrastructure at the same rate. The product is rated safe because "AI fraud detection" — but the actual compliance infrastructure is unauditable.',
    opportunity: 'Compliance-native AI infrastructure where compliance scales automatically with growth. Explainable AI regulators can audit. Continuous audit trails. Not "faster onboarding" — regulatory survival insurance.',
    relevance: 'direct',
  },
  {
    number: '2',
    finding: 'SMB Lending Data Desert',
    what: 'Banks reject SMB applications 5x more than enterprise. 50–70% of all SMB loans rejected. 57% of lenders cite inaccurate/incomplete data. FinTech default rates rising — forcing pivots back to bank partnerships.',
    structural: 'The SMB credit gap isn\'t a demand problem or a capital problem. It\'s a data verification problem masquerading as a risk management problem. Banks want to lend. They can\'t price risk they can\'t measure.',
    opportunity: 'Real-time SMB financial data aggregation. Vertical-specific cash flow underwriting models. Alternative data infrastructure — cash flow patterns, not FICO.',
    relevance: 'adjacent',
  },
  {
    number: '3',
    finding: 'The Explainable AI Liability Wave',
    what: 'CFPB: "There are NO EXCEPTIONS to consumer protection laws for new technologies." EU AI Act mandates plain-language explanations for credit decisions. "The algorithm decided" is legally indefensible — courts have already ruled on this.',
    structural: 'Financial institutions deployed foundation models (GPT-4, Claude) for credit decisioning and fraud detection. These are black boxes. When a regulator asks "why was this applicant denied?" — there\'s no answer. Class-action discovery will be devastating.',
    opportunity: 'Model governance infrastructure that tracks every decision, every override, every model version. Disparate impact testing. Regulatory compliance-as-a-service for AI lending.',
    relevance: 'direct',
  },
  {
    number: '4',
    finding: 'Instant Payments, Zero Reconciliation',
    what: 'EU mandates all payments complete in 10 seconds by Oct 2025. Batch screening no longer works. Block fined $120M partly for transaction monitoring failures. Most fintechs still run overnight batch processes.',
    structural: 'Everyone built fast payment rails. Nobody built fast compliance infrastructure to match. When a payment clears in 10 seconds, sanctions screening must happen in <5 seconds. If you flag it after settlement, you\'re doing a clawback.',
    opportunity: 'Real-time AML infrastructure. Streaming sanctions screening. Reconciliation engines for instant payment rails. Required infrastructure when mandated.',
    relevance: 'adjacent',
  },
  {
    number: '5',
    finding: 'TradFi Capturing Crypto Infrastructure',
    what: 'Mastercard, UBS in Tempo. JP Morgan\'s Kinexys partnering with DBS. BofA, Citi, Temasek in Fnality. ICE (NYSE) investing $2B in Polymarket.',
    structural: 'This isn\'t crypto adoption. Traditional finance is building blockchain infrastructure they control — permissioned rails, regulated stablecoins, bank-controlled settlement. Retail crypto participants think they\'re winning. They\'re being infrastructurally captured.',
    opportunity: 'Regulatory-compliant bridges between TradFi and crypto. Compliance oracles for DeFi. Institutional custody that actually works.',
    relevance: 'watch',
  },
];

const burryMisalignments = [
  {
    number: '1',
    consensus: 'Building dashboards',
    consensusDetail: 'Aggregate more data. Display it better. More signals = more value.',
    omnisavant: 'Show less. Surface 3 signals that matter. Noise reduction = signal authority. Every insight that proves accurate compounds trust.',
  },
  {
    number: '2',
    consensus: 'Automating decisions',
    consensusDetail: 'Replace human judgment with AI. Agentic systems that act autonomously.',
    omnisavant: 'Inform decisions. Human + full audit trail. The human decision is the product — especially in regulated industries where autonomous AI decisions are legally indefensible.',
  },
  {
    number: '3',
    consensus: 'Selling AI features',
    consensusDetail: '"Our AI surfaces insights." Buyers have heard this 40 times. AI features are table stakes.',
    omnisavant: '"Last quarter: 12 at-risk accounts flagged. 4 retained. 8 churned. Want the 9 at risk right now?" Outcome guarantee → outcome pricing at month 18.',
  },
  {
    number: '4',
    consensus: 'Targeting VP of Product',
    consensusDetail: 'Land in product, expand upward. Product-led growth via one champion.',
    omnisavant: 'Enter through compliance. CCO has budget, urgency, non-discretionary mandate. Once the CCO approves, no VP Product removes it.',
  },
];

const verticalElimination = [
  {
    vertical: 'Generic SaaS Tool',
    status: 'out',
    appeal: 'Huge TAM, sell broadly',
    kill: 'No vertical depth, no switching costs. Generic SaaS is collapsing. Per-seat licensing is a failing model. Incumbents always win the lowest common denominator.',
  },
  {
    vertical: 'EdTech',
    status: 'out',
    appeal: 'Large market, personalization',
    kill: 'No money. 18-month procurement cycles. Outcomes (test scores) take years to manifest and are politically contested. FERPA compliance with no budget attached.',
  },
  {
    vertical: 'Healthcare',
    status: 'later',
    appeal: 'HIPAA gate, large deals',
    kill: 'FDA regulates AI in clinical pathways as a medical device. Wrong decision = patient harm liability. Sales cycle: 18–24 months minimum. Wrong first move without domain experience.',
  },
  {
    vertical: 'Legal',
    status: 'out',
    appeal: 'Harvey at $100M+ ARR',
    kill: 'Harvey owns it. Won territory. 150%+ NRR, years of firm-specific training data. Market too narrow for two Harvey-scale companies.',
  },
  {
    vertical: 'Fintech',
    status: 'in',
    appeal: '91% startup-held, fragmented',
    kill: 'Passes every test. Compliance is a P&L line item. Outcomes are in dollars. Domain proximity to B2B operators. Window is open.',
  },
];

const fintechScorecard = [
  { factor: 'Budget & urgency', score: 95 },
  { factor: 'Outcome quantifiability', score: 92 },
  { factor: 'Domain proximity', score: 90 },
  { factor: 'Competitive whitespace', score: 91 },
  { factor: 'Regulatory alignment', score: 88 },
  { factor: 'Market timing', score: 85 },
];

const threeInevitabilities = [
  {
    title: 'Regulatory Crackdown',
    detail: 'AML fines already up 417%. EU AI Act deployed. CFPB enforcement active. Companies that scaled without compliance infrastructure will face existential audits.',
    color: 'neon-pink',
    icon: AlertTriangle,
  },
  {
    title: 'AI Liability Wave',
    detail: 'First major class-action against AI-driven lending discrimination will be devastating. Discovery will reveal models trained on biased data with no governance, no validation, no disparate impact testing.',
    color: 'neon-purple',
    icon: Shield,
  },
  {
    title: 'Instant Payment Fraud Spike',
    detail: 'When instant settlements go mainstream, fraud will surge — there\'s no time to screen. Fintechs running overnight batch AML will be blind. The infrastructure gap will be exposed violently.',
    color: 'cyber-teal',
    icon: Zap,
  },
];

const shorts = [
  { label: 'Crypto without regulatory moats', reason: 'Institutions are building permissioned alternatives. Retail participants don\'t realize they\'re being infrastructure-captured.' },
  { label: 'AI lending without explainable AI', reason: 'First major lawsuit will devastate the sector. Black-box credit decisions = legal time bombs. Discovery will be catastrophic.' },
  { label: 'Consumer neobanks in saturated markets', reason: 'Unit economics don\'t work. CAC rising. Path to profitability unclear. Consolidation inevitable.' },
  { label: 'B2B payments without settlement infrastructure', reason: 'Instant payments are coming without instant reconciliation. Fraud losses will spike.' },
  { label: '"AI agents" that are ChatGPT wrappers', reason: 'No defensible moat. OpenAI will eat them. Commoditizing fast. This is Omnisavant\'s biggest competitive threat to avoid becoming.' },
];

const burryRadarData = [
  { finding: 'Compliance\nRisk', severity: 95, omnisavantReady: 88 },
  { finding: 'SMB Data\nGap', severity: 78, omnisavantReady: 65 },
  { finding: 'AI Liability', severity: 88, omnisavantReady: 82 },
  { finding: 'Settlement\nInfra', severity: 72, omnisavantReady: 45 },
  { finding: 'Crypto\nShift', severity: 60, omnisavantReady: 30 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MagicWand() {
  const accentMap: Record<string, string> = {
    electric: 'border-electric/30 bg-electric/5',
    'neon-pink': 'border-neon-pink/30 bg-neon-pink/5',
    'neon-purple': 'border-neon-purple/30 bg-neon-purple/5',
    'cyber-teal': 'border-cyber-teal/30 bg-cyber-teal/5',
  };
  const badgeMap: Record<string, string> = {
    electric: 'bg-electric text-white',
    'neon-pink': 'bg-neon-pink text-white',
    'neon-purple': 'bg-neon-purple text-white',
    'cyber-teal': 'bg-cyber-teal text-white',
  };
  const iconColorMap: Record<string, string> = {
    electric: 'text-electric',
    'neon-pink': 'text-neon-pink',
    'neon-purple': 'text-neon-purple',
    'cyber-teal': 'text-cyber-teal',
  };

  return (
    <div className="space-y-10">

      {/* ── Header ── */}
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
          <Wand2 className="text-neon-purple" size={36} />
          The Magic Wand Scenario
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
          No constraints. Day one. Imagine Omnisavant entered fintech, built all six moats fully, and thought like Michael Burry — contrarian, structural, betting against consensus. Burry saw the 2008 crisis by reading loan-level data everyone else ignored. He followed incentive structures to their logical conclusion. Applying that lens to fintech AI in 2025 reveals something uncomfortable: <strong>everyone&apos;s building the same thing, calling it different names, and missing the actual structural problems.</strong> This is what Omnisavant builds instead.
        </p>
      </div>

      {/* ── Setup ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-4">The Setup: Omnisavant as the Operational Nervous System</h3>
        <p className="text-gray-700 text-base mb-6">
          Not a dashboard. Not a tab. The operational intelligence layer at the center of every B2B fintech — before the first meeting every morning, it has already:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            'Read every customer signal from the past 24 hours',
            'Cross-referenced against the org\'s own historical decision patterns',
            'Surfaced the 3 things leadership doesn\'t know they need to know today',
            'Flagged decisions being made without data that should inform them',
            'Produced a decision-ready brief with full audit trail for the 9am standup',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 border border-neon-purple/20 bg-neon-purple/5 rounded-lg p-4">
              <CheckCircle className="text-neon-purple shrink-0 mt-0.5" size={18} />
              <span className="text-base text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Six Moats ── */}
      <div className="space-y-5">
        <h3 className="text-2xl font-bold px-1">The Six Moats — Fully Realized in Fintech</h3>
        {moats.map((moat, i) => {
          const Icon = moat.icon;
          return (
            <div key={i} className={`glass-card border ${accentMap[moat.color]} overflow-hidden`}>
              {/* Header row */}
              <div className="flex items-center gap-4 px-7 py-5 border-b border-gray-100">
                <span className={`w-9 h-9 rounded-full ${badgeMap[moat.color]} text-sm font-bold flex items-center justify-center shrink-0`}>{moat.number}</span>
                <Icon className={iconColorMap[moat.color]} size={22} />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">{moat.name}</h4>
                  <p className="text-sm text-gray-500">{moat.subtitle}</p>
                </div>
              </div>

              {/* Two-column: What + Fintech example */}
              <div className="grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-gray-100">
                <div className="px-7 py-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">The Moat</p>
                  <p className="text-base text-gray-700 leading-relaxed">{moat.what}</p>
                  {moat.complianceItems && (
                    <ul className="mt-4 space-y-2">
                      {moat.complianceItems.map((c, ci) => (
                        <li key={ci} className="flex items-center gap-2 text-base text-gray-700">
                          <CheckCircle className="text-neon-pink shrink-0" size={15} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="px-7 py-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">In Fintech</p>
                  {moat.fintech && (
                    <p className="text-base text-gray-700 leading-relaxed">{moat.fintech}</p>
                  )}
                  {moat.fintechSignals && (
                    <>
                      <div className="space-y-2 mb-4">
                        {moat.fintechSignals.map((s, si) => (
                          <div key={si} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                            <span className={`text-sm font-bold ${iconColorMap[moat.color]} w-24 shrink-0 mt-0.5`}>{s.team}</span>
                            <p className="text-sm text-gray-600">{s.signal}</p>
                          </div>
                        ))}
                      </div>
                      {moat.fintechOutcome && <p className="text-base text-gray-700 leading-relaxed">{moat.fintechOutcome}</p>}
                    </>
                  )}
                  {moat.verticalTable && (
                    <>
                      <p className="text-sm text-gray-500 mb-3">Same signal. Three verticals. Three right answers.</p>
                      <div className="space-y-2">
                        {moat.verticalTable.map((row, ri) => (
                          <div key={ri} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className={`text-sm font-bold ${iconColorMap[moat.color]} mb-2`}>{row.vertical}</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-red-50 rounded p-2">
                                <p className="text-xs text-red-500 font-semibold mb-1">Generic AI</p>
                                <p className="text-sm text-gray-700">{row.generic}</p>
                              </div>
                              <div className="bg-green-50 rounded p-2">
                                <p className="text-xs text-green-600 font-semibold mb-1">Omnisavant</p>
                                <p className="text-sm text-gray-700">{row.omnisavant}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Burry angle — full-width bottom strip */}
              <div className="px-7 py-4 bg-amber-50 border-t border-amber-100 flex items-start gap-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide mt-0.5 shrink-0 w-24">Burry angle</span>
                <p className="text-sm text-amber-900 italic leading-relaxed">{moat.burry}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Burry's 5 Structural Findings ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Target className="text-neon-pink" size={24} />
          The Five Structural Misalignments Nobody&apos;s Pricing In
        </h3>
        <p className="text-gray-600 text-base mb-8">
          Burry didn&apos;t see something others couldn&apos;t see. He read the loan-level data everyone else ignored. In fintech AI in 2025, the equivalent data is screaming. Five structural misalignments — and Omnisavant&apos;s position relative to each.
        </p>

        {/* Radar chart: severity vs omnisavant readiness */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-4">Misalignment severity vs. Omnisavant&apos;s readiness to exploit it</p>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={burryRadarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="finding" tick={{ fontSize: 12, fill: '#374151' }} />
                <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                <Radar name="Market severity" dataKey="severity" stroke="#ec4899" fill="#ec4899" fillOpacity={0.15} strokeWidth={2} />
                <Radar name="Omnisavant readiness" dataKey="omnisavantReady" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <div className="border border-neon-pink/20 bg-neon-pink/5 rounded-xl p-4">
              <p className="text-sm font-bold text-neon-pink mb-1">Highest leverage: Compliance + AI Liability</p>
              <p className="text-sm text-gray-700">These two misalignments are the most severe, Omnisavant is most ready to address them, and they are directly in Omnisavant&apos;s product surface. The overlap is the opportunity.</p>
            </div>
            <div className="border border-electric/20 bg-electric/5 rounded-xl p-4">
              <p className="text-sm font-bold text-electric mb-1">Adjacent: SMB data infrastructure</p>
              <p className="text-sm text-gray-700">Real-time SMB financial data aggregation and vertical-specific underwriting models. Omnisavant&apos;s vertical specialization moat extends here in year 2–3.</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-600 mb-1">Watch: Settlement + Crypto consolidation</p>
              <p className="text-sm text-gray-700">Important market forces. Not Omnisavant&apos;s first move, but compliance and audit trail infrastructure becomes essential when instant payments are mandated.</p>
            </div>
          </div>
        </div>

        {/* Five findings cards */}
        <div className="space-y-4">
          {burryFindings.map((f, i) => {
            const relevanceColor = f.relevance === 'direct' ? 'bg-green-100 text-green-700' : f.relevance === 'adjacent' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600';
            const relevanceLabel = f.relevance === 'direct' ? 'Direct opportunity' : f.relevance === 'adjacent' ? 'Adjacent opportunity' : 'Watch';
            return (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-neon-pink text-white text-sm font-bold flex items-center justify-center">{f.number}</span>
                    <h4 className="font-bold text-gray-900 text-base">{f.finding}</h4>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${relevanceColor}`}>{relevanceLabel}</span>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 divide-y xl:divide-y-0 xl:divide-x divide-gray-100">
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-2">What the data shows</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.what}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase mb-2">The structural problem</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.structural}</p>
                  </div>
                  <div className="px-5 py-4 bg-electric/5">
                    <p className="text-xs font-semibold text-electric uppercase mb-2">What nobody&apos;s building</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.opportunity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Thinking Like Burry: The 4 Misalignments ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrendingUp className="text-neon-pink" size={24} />
          Thinking Like Burry: Four Market Misalignments
        </h3>
        <p className="text-gray-600 text-base mb-6">
          Burry followed incentives to their logical conclusion and bet before the correction. Four structural misalignments in fintech AI — and Omnisavant&apos;s contrarian position on each.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {burryMisalignments.map((m, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-200">
                <span className="w-7 h-7 rounded-full bg-neon-pink text-white text-xs font-bold flex items-center justify-center shrink-0">{m.number}</span>
                <p className="font-semibold text-gray-900">Market is: {m.consensus}</p>
              </div>
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                <div className="p-5">
                  <p className="text-xs font-semibold text-red-500 uppercase mb-2">Consensus position</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.consensusDetail}</p>
                </div>
                <div className="p-5 bg-green-50/60">
                  <p className="text-xs font-semibold text-green-700 uppercase mb-2">Omnisavant&apos;s position</p>
                  <p className="text-sm text-gray-800 leading-relaxed">{m.omnisavant}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Three Inevitabilities ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2">The Three Inevitabilities</h3>
        <p className="text-gray-600 text-base mb-6">
          When incentives misalign with reality, eventually reality wins. Three corrections are coming — faster than consensus expects. Omnisavant&apos;s position in each.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {threeInevitabilities.map((item, i) => {
            const Icon = item.icon;
            const colorMap: Record<string, string> = {
              'neon-pink': 'border-neon-pink/30 bg-neon-pink/5 text-neon-pink',
              'neon-purple': 'border-neon-purple/30 bg-neon-purple/5 text-neon-purple',
              'cyber-teal': 'border-cyber-teal/30 bg-cyber-teal/5 text-cyber-teal',
            };
            return (
              <div key={i} className={`border rounded-xl p-6 ${colorMap[item.color]}`}>
                <Icon size={24} className="mb-3" />
                <h4 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-5 border-l-4 border-electric pl-5 py-2">
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>The Burry principle:</strong> Build what survives the correction — compliance infrastructure, explainable AI, data verification, real-time settlement. Right now everyone&apos;s building for the boom. The smart money builds for the inevitable correction.
          </p>
        </div>
      </div>

      {/* ── The Short: What to Avoid ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <XCircle className="text-red-500" size={24} />
          The Short: What to Avoid (or Bet Against)
        </h3>
        <p className="text-gray-600 text-base mb-6">
          Burry didn&apos;t just know what to buy. He knew exactly what was structurally broken. Five categories that are legal or competitive time bombs.
        </p>
        <div className="space-y-3">
          {shorts.map((s, i) => (
            <div key={i} className="flex items-start gap-4 border border-red-100 bg-red-50/40 rounded-xl px-5 py-4">
              <XCircle className="text-red-400 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{s.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Vertical Elimination ── */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <XCircle className="text-red-500" size={24} />
          Why Not Everywhere — The Vertical Elimination Case
        </h3>
        <p className="text-gray-600 text-base mb-6">
          The magic wand ends in fintech. Every other vertical has a structural reason it&apos;s the wrong first move. This isn&apos;t pessimism — it&apos;s the Burry filter: follow the incentives and the evidence, not the narrative.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-base border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200">
                <th className="px-5 py-4 text-left font-semibold text-gray-700 w-[20%]">Vertical</th>
                <th className="px-5 py-4 text-left font-semibold text-gray-700 w-[10%]">Verdict</th>
                <th className="px-5 py-4 text-left font-semibold text-gray-700 w-[22%]">Surface appeal</th>
                <th className="px-5 py-4 text-left font-semibold text-gray-700">Structural reason it doesn&apos;t work (or why fintech is right)</th>
              </tr>
            </thead>
            <tbody>
              {verticalElimination.map((v, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-5 py-4 font-semibold text-gray-900">{v.vertical}</td>
                  <td className="border border-gray-200 px-5 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                      v.status === 'in' ? 'bg-green-100 text-green-700' :
                      v.status === 'later' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {v.status === 'in' ? 'Selected' : v.status === 'later' ? 'Year 4–5' : 'Out'}
                    </span>
                  </td>
                  <td className="border border-gray-200 px-5 py-4 text-gray-500 text-sm">{v.appeal}</td>
                  <td className={`border border-gray-200 px-5 py-4 text-sm leading-relaxed ${v.status === 'in' ? 'text-green-700 font-medium' : 'text-gray-700'}`}>{v.kill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fintech fit chart + analogies */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <p className="text-base font-semibold text-gray-700 mb-4">Why Fintech Scores on Every Dimension</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={fintechScorecard} layout="vertical" margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis type="category" dataKey="factor" tick={{ fontSize: 12, fill: '#374151' }} width={160} />
                <Tooltip
                  contentStyle={{ fontSize: 13, borderRadius: 8, border: '1px solid #e5e7eb' }}
                  formatter={(v: number) => [`${v}/100`, 'Score']}
                />
                <Bar dataKey="score" radius={4}>
                  {fintechScorecard.map((_, i) => (
                    <Cell key={i} fill={['#3b82f6','#ec4899','#a855f7','#06b6d4','#3b82f6','#ec4899'][i % 6]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <p className="text-sm font-bold text-green-700 uppercase mb-2">The Glean parallel</p>
              <p className="text-base text-gray-700 leading-relaxed">Glean didn&apos;t build generic enterprise search. It built for one specific problem, one buyer, then expanded. $7.2B — not from being broad, but from being the best at one compounding problem first.</p>
            </div>
            <div className="border border-electric/30 bg-electric/5 rounded-xl p-5">
              <p className="text-sm font-bold text-electric uppercase mb-2">Sierra analog</p>
              <p className="text-base text-gray-700 leading-relaxed">Sierra knew its audience: customer support. One outcome: resolution rate. Built around it, priced against it. Omnisavant does the same — B2B fintech operators, one outcome, priced against that outcome at month 18.</p>
            </div>
            <div className="border-l-4 border-electric pl-5 py-2">
              <p className="text-base font-bold text-gray-900">The Burry formula: find what everyone&apos;s ignoring. Follow incentives to their conclusion. Build what survives the correction.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
