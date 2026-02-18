'use client';

import { Wand2, Brain, Zap, Network, Layers, Globe, Shield, TrendingUp, XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// ─── Data ────────────────────────────────────────────────────────────────────

const moats = [
  {
    number: '1', icon: Brain, color: 'electric',
    name: 'Organizational Memory',
    subtitle: 'The Institutional Brain',
    what: 'Structured decision memory — not documents. Signal → threshold → action → outcome. After 18 months, Omnisavant knows this org\'s patterns better than any replacement could reconstruct.',
    example: 'A B2B payments fintech: transaction volume drops >15% two weeks running while support tickets stay flat = procurement review signal, not a usage dip. Learned from 6 prior cases. Now in memory. Competitor starts at zero.',
    insight: 'Everyone builds faster data pipelines. Nobody captures the decision logic on top. The data gets cheaper. The interpretation — for this specific org — is the scarce asset.',
  },
  {
    number: '2', icon: Zap, color: 'neon-pink',
    name: 'Signal-to-Action Loop',
    subtitle: 'The Self-Improving Engine',
    what: 'One-click feedback on every insight. 10 seconds of friction per insight. 2,000 labeled moments = the model knows what this org considers signal vs. noise — revealed preferences impossible to infer from generic data.',
    example: 'An SMB lender: 22% cash flow spike in construction lending in April = seasonal noise before a May drawdown, not an improvement. Acting on it causes overlending. Only the model trained on this lender\'s own decisions knows this.',
    insight: 'Industry-average data masks the patterns that matter for a specific portfolio. Your decisions, your model.',
  },
  {
    number: '3', icon: Network, color: 'neon-purple',
    name: 'Cross-Team Signal Arbitrage',
    subtitle: 'The Intra-Org Intelligence Web',
    what: 'CS doesn\'t talk to Risk. Risk doesn\'t talk to Sales. Omnisavant routes signals between them — automatically, with context. Every new team compounds the value for every existing team.',
    example: null,
    fintechSignals: [
      { team: 'Risk', signal: 'Borrower utilization creeping toward covenant threshold' },
      { team: 'CS', signal: 'Escalation from same borrower\'s ops lead — API stability' },
      { team: 'Sales', signal: 'Renewal call with this borrower\'s CFO in 10 days' },
      { team: 'Compliance', signal: 'Anomalous transaction pattern flagged 6 weeks ago' },
    ],
    fintechOutcome: 'Normally: four signals, four systems, no connection. The CFO call happens without context. Omnisavant surfaces all four as a unified brief before the call. The CFO is impressed, not surprised.',
    insight: 'The biggest risk is the signal in someone else\'s system that you never saw. Every team that joins compounds value for every existing team.',
  },
  {
    number: '4', icon: Layers, color: 'cyber-teal',
    name: 'Workflow Embedding',
    subtitle: 'Infrastructure You Cannot Turn Off',
    what: 'Not a tab. It surfaces into wherever teams work — Salesforce opportunity view, Linear board, Notion doc. You do not visit it. It finds you.',
    example: 'AML case management: when a transaction is flagged, Omnisavant surfaces signal history, SAR activity, peer patterns, and a recommended disposition — before the analyst opens the case. Time-to-decision: 4 hours → 45 minutes. Removing it means rebuilding the entire process.',
    insight: 'Automation replaces humans. Embedding makes humans 5x more effective and structurally dependent. Dependence is the moat.',
  },
  {
    number: '5', icon: Globe, color: 'electric',
    name: 'Vertical Specialization',
    subtitle: 'Interpretation That Cannot Be Generic',
    what: '"Churn signal" in B2B SaaS, "delinquency" in SMB lending, "counterparty risk" in institutional payments — entirely different things. Generic AI gives one answer for all three.',
    example: null,
    verticalTable: [
      { vertical: 'Construction lending', generic: '"Investigate."', omnisavant: '"Q4 draw pattern — monitor, no action."' },
      { vertical: 'SaaS lending', generic: '"Investigate."', omnisavant: '"Billing cycle shift — check annual vs monthly."' },
      { vertical: 'Retail lending', generic: '"Investigate."', omnisavant: '"Early deterioration — escalate to risk."' },
    ],
    insight: 'Burry\'s edge: same data as everyone else, read differently. Omnisavant\'s edge is the same — interpretation of the signal, not the signal itself.',
  },
  {
    number: '6', icon: Shield, color: 'neon-pink',
    name: 'Compliance-Native Architecture',
    subtitle: 'The Regulatory Lock-In',
    what: 'Compliance is a procurement gate and a compounding moat — built in, not bolted on.',
    complianceItems: ['Full source provenance', 'Full decision reasoning chain', 'Full action trail', 'Jurisdiction-aware (SOC 2, GDPR, EU AI Act, FINRA, SEC)'],
    example: 'AML fines up 417% in H1 2025. The CCO doesn\'t approve Omnisavant for its AI feature. They approve it because the regulator\'s question — "show us every decision this AI influenced" — is answered in full, 18 months back. No CCO removes a system that holds that history.',
    insight: 'Everyone deployed AI to pass the demo. Nobody deployed AI to pass the audit.',
  },
];

const burryMisalignments = [
  {
    number: '1',
    consensus: 'Building dashboards',
    consensusShort: 'Aggregate more data, display it better.',
    omnisavant: 'Show less. Surface 3 signals that matter. Noise reduction = signal authority.',
  },
  {
    number: '2',
    consensus: 'Automating decisions',
    consensusShort: 'Replace human judgment with AI.',
    omnisavant: 'Inform decisions. Human + full audit trail. The human decision is the product.',
  },
  {
    number: '3',
    consensus: 'Selling AI features',
    consensusShort: '"Our AI surfaces insights." Buyers have heard it 40 times.',
    omnisavant: '"Last quarter: 12 at-risk accounts flagged. 4 retained. 8 churned. Want the 9 at risk right now?" Outcome guarantee → outcome pricing at month 18.',
  },
  {
    number: '4',
    consensus: 'Targeting VP of Product',
    consensusShort: 'Land in product, expand upward.',
    omnisavant: 'Enter through compliance. CCO has budget, urgency, non-discretionary mandate. Once approved, no VP Product removes it.',
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
    kill: 'Wrong first move — no domain experience. FDA regulates AI in clinical pathways as a medical device. Wrong decision = patient harm liability. Sales cycle: 18–24 months minimum.',
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

const fintechFactors = [
  { factor: 'Domain proximity', score: 90 },
  { factor: 'Budget / urgency', score: 95 },
  { factor: 'Regulatory alignment', score: 88 },
  { factor: 'Outcome quantifiability', score: 92 },
  { factor: 'Market timing', score: 85 },
  { factor: 'Competitive whitespace', score: 91 },
];

const fullPicture = [
  { type: 'B2B Payments', layer: 'Compliance Layer', outcome: 'Regulators audited: team answers in 4 hours what took 4 weeks.', color: 'electric' },
  { type: 'SMB Lending', layer: 'Portfolio Layer', outcome: 'Covenant breach surfaced 6 weeks before the event, not 6 hours after.', color: 'neon-pink' },
  { type: 'SaaS Fintech', layer: 'Revenue Layer', outcome: 'Month 18: $400K retained ARR. Renewal is about expanding, not renewing.', color: 'neon-purple' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MagicWand() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Wand2 className="text-neon-purple" size={36} />
          The Magic Wand Scenario
        </h2>
        <p className="text-gray-500">No constraints. Day one. Imagine Omnisavant entered fintech, built all six moats, and thought like Burry — contrarian, structural, against the consensus. What does it look like?</p>
      </div>

      {/* Setup — tight */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-3">The Setup</h3>
        <p className="text-gray-700 mb-5">Omnisavant is the <strong>operational nervous system</strong> at the center of every B2B fintech. Not a dashboard. Every morning, before the first meeting, it has already:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {[
            'Read every customer signal from the past 24 hours',
            'Cross-referenced against the org\'s own historical decision patterns',
            'Surfaced the 3 things leadership doesn\'t know they need to know today',
            'Flagged decisions being made without data that should inform them',
            'Produced a decision-ready brief with full audit trail for the 9am standup',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 border border-neon-purple/20 bg-neon-purple/5 rounded-lg p-4">
              <CheckCircle className="text-neon-purple shrink-0 mt-0.5" size={16} />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Six Moats — each as a horizontal card */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold px-1">The Six Moats — Fully Realized in Fintech</h3>
        {moats.map((moat, i) => {
          const Icon = moat.icon;
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
            <div key={i} className={`glass-card border ${accentMap[moat.color]} overflow-hidden`}>
              {/* Moat header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4">
                <span className={`w-8 h-8 rounded-full ${badgeMap[moat.color]} text-sm font-bold flex items-center justify-center shrink-0`}>{moat.number}</span>
                <Icon className={iconColorMap[moat.color]} size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{moat.name}</h4>
                  <p className="text-xs text-gray-500">{moat.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-0 border-t border-gray-100">
                {/* What it does */}
                <div className="px-6 py-5 border-b xl:border-b-0 xl:border-r border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-2">What it does</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{moat.what}</p>
                  {moat.complianceItems && (
                    <ul className="mt-3 space-y-1.5">
                      {moat.complianceItems.map((c, ci) => (
                        <li key={ci} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="text-neon-pink shrink-0" size={12} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* In fintech */}
                <div className="px-6 py-5 border-b xl:border-b-0 xl:border-r border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-2">In fintech</p>
                  {moat.example && (
                    <p className="text-sm text-gray-700 leading-relaxed">{moat.example}</p>
                  )}
                  {moat.fintechSignals && (
                    <>
                      <div className="space-y-2 mb-3">
                        {moat.fintechSignals.map((s, si) => (
                          <div key={si} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                            <span className={`text-xs font-bold ${iconColorMap[moat.color]} w-20 shrink-0 mt-0.5`}>{s.team}</span>
                            <p className="text-xs text-gray-600">{s.signal}</p>
                          </div>
                        ))}
                      </div>
                      {moat.fintechOutcome && <p className="text-sm text-gray-700">{moat.fintechOutcome}</p>}
                    </>
                  )}
                  {moat.verticalTable && (
                    <>
                      <p className="text-xs text-gray-500 mb-2">Same signal. Three verticals. Three answers.</p>
                      <div className="space-y-2">
                        {moat.verticalTable.map((row, ri) => (
                          <div key={ri} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className={`text-xs font-bold ${iconColorMap[moat.color]} mb-1`}>{row.vertical}</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-red-50 rounded p-1.5">
                                <p className="text-xs text-red-500 font-semibold mb-0.5">Generic</p>
                                <p className="text-xs text-gray-600">{row.generic}</p>
                              </div>
                              <div className="bg-green-50 rounded p-1.5">
                                <p className="text-xs text-green-600 font-semibold mb-0.5">Omnisavant</p>
                                <p className="text-xs text-gray-700">{row.omnisavant}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Burry insight — light bg, not black */}
                <div className="px-6 py-5 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Burry angle</p>
                  <p className="text-sm text-gray-700 leading-relaxed italic">{moat.insight}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Burry Misalignments — compact 2x2 */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
          <TrendingUp className="text-neon-pink" size={20} />
          Thinking Like Burry
        </h3>
        <p className="text-gray-500 text-sm mb-6">Burry followed incentives to their logical conclusion and bet before the correction. Four structural misalignments in fintech AI — and Omnisavant&apos;s contrarian position on each.</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {burryMisalignments.map((m, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-200">
                <span className="w-6 h-6 rounded-full bg-neon-pink text-white text-xs font-bold flex items-center justify-center shrink-0">{m.number}</span>
                <p className="font-semibold text-gray-800 text-sm">Market: {m.consensus}</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-500 uppercase mb-1">Consensus</p>
                  <p className="text-xs text-gray-600">{m.consensusShort}</p>
                </div>
                <div className="p-4 bg-green-50/50">
                  <p className="text-xs font-semibold text-green-600 uppercase mb-1">Omnisavant</p>
                  <p className="text-xs text-gray-700">{m.omnisavant}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Picture */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-6">The Full Picture: Omnisavant at the Center</h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
          {fullPicture.map((s, i) => {
            const colorMap: Record<string, string> = { electric: 'text-electric border-electric/30 bg-electric/5', 'neon-pink': 'text-neon-pink border-neon-pink/30 bg-neon-pink/5', 'neon-purple': 'text-neon-purple border-neon-purple/30 bg-neon-purple/5' };
            return (
              <div key={i} className={`border rounded-xl p-5 ${colorMap[s.color]}`}>
                <p className="font-bold text-gray-900 mb-1">{s.type}</p>
                <p className={`text-xs font-semibold uppercase mb-3 ${colorMap[s.color].split(' ')[0]}`}>{s.layer}</p>
                <p className="text-sm text-gray-700">{s.outcome}</p>
              </div>
            );
          })}
        </div>
        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">In all three scenarios — if you ripped Omnisavant out tomorrow, what breaks?</p>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
            {['The compliance audit trail', 'The portfolio memory', 'Org intelligence that cannot be reconstructed', 'Decision history regulators will demand', 'Signal-to-action patterns that took 18 months to label'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                <p className="text-xs text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-electric font-bold mt-4">That is a moat. Everything else is a feature.</p>
        </div>
      </div>

      {/* Vertical Elimination */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
          <XCircle className="text-red-500" size={20} />
          Why Not Everywhere — The Vertical Elimination Case
        </h3>
        <p className="text-gray-500 text-sm mb-6">The magic wand ends with fintech. Every other vertical has a structural reason it is the wrong first move.</p>

        {/* Elimination table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold w-[18%]">Vertical</th>
                <th className="px-4 py-3 text-left font-semibold w-[10%]">Status</th>
                <th className="px-4 py-3 text-left font-semibold w-[20%]">Surface appeal</th>
                <th className="px-4 py-3 text-left font-semibold">Why it doesn't work</th>
              </tr>
            </thead>
            <tbody>
              {verticalElimination.map((v, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{v.vertical}</td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                      v.status === 'in' ? 'bg-green-100 text-green-700' :
                      v.status === 'later' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {v.status === 'in' ? 'Selected' : v.status === 'later' ? 'Year 4–5' : 'Out'}
                    </span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500 text-xs">{v.appeal}</td>
                  <td className={`border border-gray-200 px-4 py-3 text-xs ${v.status === 'in' ? 'text-green-700 font-medium' : 'text-gray-700'}`}>{v.kill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fintech fit chart + rationale */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Why Fintech Scores on Every Dimension</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={fintechFactors} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                <YAxis type="category" dataKey="factor" tick={{ fontSize: 11, fill: '#374151' }} width={130} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                  formatter={(v: number) => [`${v}/100`, 'Score']}
                />
                <Bar dataKey="score" radius={4}>
                  {fintechFactors.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? '#3b82f6' : i === 1 ? '#ec4899' : i === 2 ? '#a855f7' : i === 3 ? '#06b6d4' : i === 4 ? '#3b82f6' : '#ec4899'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 uppercase mb-1">The Glean parallel</p>
              <p className="text-sm text-gray-700">Glean didn't build generic enterprise search. It built for one specific problem, one buyer, then expanded. $7.2B — not from being broad, but from being the best at one compounding problem.</p>
            </div>
            <div className="border border-electric/30 bg-electric/5 rounded-xl p-4">
              <p className="text-xs font-bold text-electric uppercase mb-1">Sierra analog</p>
              <p className="text-sm text-gray-700">Sierra knew its audience: customer support. One outcome: resolution rate. Built around it, priced against it. Omnisavant does the same — B2B fintech operators, one outcome, price against that.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4">
              <p className="text-white font-bold text-sm">OpenAI done right. Glean done right. That is what Omnisavant builds.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
