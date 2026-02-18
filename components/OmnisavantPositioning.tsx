'use client';

import { Crosshair, XCircle, CheckCircle, Clock, ArrowRight, Target, Shield, TrendingUp, Lock, AlertTriangle } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const radarData = [
  { metric: 'Org Memory', omnisavant: 90, alphaSense: 20, salesforce: 40, openAI: 10 },
  { metric: 'Vertical Depth', omnisavant: 85, alphaSense: 60, salesforce: 25, openAI: 15 },
  { metric: 'Compliance Native', omnisavant: 88, alphaSense: 50, salesforce: 35, openAI: 5 },
  { metric: 'Workflow Embed', omnisavant: 80, alphaSense: 30, salesforce: 55, openAI: 20 },
  { metric: 'Network Effect', omnisavant: 75, alphaSense: 25, salesforce: 50, openAI: 10 },
  { metric: 'Outcome Pricing', omnisavant: 70, alphaSense: 10, salesforce: 15, openAI: 5 },
];

const sixPatterns = [
  { pattern: 'Narrow Entry Point', omnisavantNow: 'Broad signal aggregation', gap: 'Pick one hero user: RevOps lead or VP CS. Everything else waits.', status: 'red' },
  { pattern: 'Proprietary Decision Traces', omnisavantNow: 'Not yet capturing decision history', gap: 'Every insight acted on or dismissed is a labeled training point. Build this first.', status: 'red' },
  { pattern: 'Compliance as Offense', omnisavantNow: 'Present as claim, not architecture', gap: 'Audit trail of every flagged signal, every decision, every outcome — baked in from day one.', status: 'amber' },
  { pattern: 'Outcome-Based Pricing', omnisavantNow: 'Per-seat model, not yet outcome-tied', gap: 'Design the measurement now. Deploy outcome pricing at month 18. No retroactive quantification.', status: 'red' },
  { pattern: 'Human Calibration Layer', omnisavantNow: 'Not yet present', gap: 'Decide: co-analyst or fully autonomous? Human layer increases stickiness in regulated enterprise.', status: 'red' },
  { pattern: 'AI Positioning', omnisavantNow: 'Risk of leading with capability', gap: '"You missed three churn signals last quarter. Here\'s one you\'re about to miss." Engine is a footnote.', status: 'amber' },
];

const notFits = [
  { area: 'Slack integration', why: 'Notifications get muted. The moat is being the source of intelligence, not the push channel.' },
  { area: 'HubSpot / TLDv replacement', why: 'Replacement positioning invites procurement comparison. Omnisavant wins sitting above these tools.' },
  { area: 'Horizontal AI assistant', why: 'No proprietary data, no switching costs. OpenAI and Google always win this.' },
  { area: 'Compliance as tick-box', why: 'SOC 2 compliance is table stakes. Compliance as architecture — audit trail of every signal and decision — is the procurement gate.' },
];

const phases = [
  {
    phase: 'Phase 1', timeframe: '0–6 months', label: 'Land the Nervous System',
    color: 'bg-electric', textColor: 'text-electric', borderColor: 'border-electric/30', bgColor: 'bg-electric/5',
    moats: [
      { number: '1', name: 'Organizational Memory', build: 'Store decisions, not documents. Signal → threshold → action → outcome.' },
      { number: '5', name: 'Vertical Depth', build: 'Over-fit to B2B SaaS. 5 design partners label corrections that improve the next 50.' },
    ],
  },
  {
    phase: 'Phase 2', timeframe: '6–18 months', label: 'Become Structurally Embedded',
    color: 'bg-neon-pink', textColor: 'text-neon-pink', borderColor: 'border-neon-pink/30', bgColor: 'bg-neon-pink/5',
    moats: [
      { number: '3', name: 'Cross-Team Network Effect', build: 'CS signals visible to Product. Sales signals visible to CS. Each new team compounds value for every existing team.' },
      { number: '4', name: 'Workflow Embedding', build: 'Push signals into Salesforce, Linear, Notion. Not a tab they visit — infrastructure they depend on.' },
    ],
  },
  {
    phase: 'Phase 3', timeframe: '18–36 months', label: 'Price for Value, Close the Gate',
    color: 'bg-neon-purple', textColor: 'text-neon-purple', borderColor: 'border-neon-purple/30', bgColor: 'bg-neon-purple/5',
    moats: [
      { number: '2', name: 'Signal-to-Action Loop', build: '10s of feedback per insight. 2,000 labeled moments = org-specific model no competitor can replicate.' },
      { number: '6', name: 'Compliance as GTM Wedge', build: 'By month 18 the audit trail shifts buyer from VP Product to General Counsel. CCO budget is non-discretionary.' },
    ],
  },
];

export default function OmnisavantPositioning() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Crosshair className="text-neon-pink" size={36} />
          Omnisavant Positioning
        </h2>
        <p className="text-gray-500">Where we fit · Where we don&apos;t · What to go after — synthesized across all moat analyses</p>
      </div>

      {/* Strategic Frame + Radar side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Strategic Frame */}
        <div className="glass-card p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            The Strategic Frame
          </h3>
          <p className="text-gray-500 text-sm mb-5">Paths that look obvious lead to commodity. These make Omnisavant an add-on — killable at contract renewal.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['Build integrations to ride existing platforms', 'Add to Slack', 'Replace TLDv or HubSpot', 'Win on features'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                <XCircle className="text-red-400 shrink-0" size={15} />
                <span className="text-sm text-red-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-electric/8 border border-electric/25 rounded-xl p-5 mt-auto">
            <p className="text-xs font-semibold text-electric uppercase mb-2">The right frame</p>
            <p className="text-gray-900 font-medium text-sm leading-relaxed">Omnisavant is not a tool enterprise buys. It is the nervous system it cannot start its day without. The test: <strong className="text-gray-900">"If Omnisavant went down at 9am Monday, would revenue decisions stall?"</strong> If yes — that is the right place to build.</p>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <Shield className="text-neon-purple" size={20} />
            Competitive Positioning Map
          </h3>
          <p className="text-gray-500 text-sm mb-4">Omnisavant&apos;s target moat profile vs. the market</p>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#374151', fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
              <Radar name="Omnisavant (target)" dataKey="omnisavant" stroke="#ec4899" fill="#ec4899" fillOpacity={0.25} strokeWidth={2} />
              <Radar name="AlphaSense" dataKey="alphaSense" stroke="#f97316" fill="#f97316" fillOpacity={0.1} strokeWidth={1.5} />
              <Radar name="Salesforce / HubSpot" dataKey="salesforce" stroke="#6b7280" fill="#6b7280" fillOpacity={0.1} strokeWidth={1.5} />
              <Radar name="OpenAI / Perplexity" dataKey="openAI" stroke="#ef4444" fill="#ef4444" fillOpacity={0.08} strokeWidth={1} />
              <Legend wrapperStyle={{ fontSize: '11px' }} iconType="circle" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Where it fits vs doesn't — compact table pair */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Fits */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            Where Omnisavant Fits
          </h3>
          <p className="text-gray-500 text-sm mb-4">Vertical Intelligence OS for revenue and customer teams — owns the signal-to-decision path.</p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left text-gray-600 font-semibold w-[28%]">Player</th>
                <th className="border border-gray-200 px-3 py-2 text-left text-gray-600 font-semibold w-[30%]">What they do</th>
                <th className="border border-gray-200 px-3 py-2 text-left text-green-700 font-semibold">Omnisavant&apos;s edge</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AlphaSense', 'Market data, financial analysts', 'Customer signals for operators — different data, different buyer'],
                ['Claude / ChatGPT', 'General reasoning, no org memory', 'Knows your org\'s signal history; accountable for outcomes'],
                ['Glean', 'Surfaces documents', 'Surfaces decisions — one abstraction layer higher'],
                ['TLDv / Grain', 'Records meetings', 'Pattern recognition, escalation, memory after the recording'],
                ['HubSpot / Salesforce', 'Systems of record', 'Intelligence layer that surfaces what they\'re not showing you'],
              ].map(([p, w, e], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">{p}</td>
                  <td className="border border-gray-200 px-3 py-2 text-gray-500 text-xs">{w}</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700 font-medium text-xs">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 border border-amber-200 bg-amber-50 rounded-lg px-4 py-3">
            <p className="text-xs text-amber-900"><strong>Structural advantage:</strong> Incumbents carry feature debt, backward compatibility, legacy architecture. Omnisavant is unburdened. That wiggle room is the competitive window — and it closes in 18–24 months.</p>
          </div>
        </div>

        {/* Doesn't fit */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <XCircle className="text-red-500" size={20} />
            Where Omnisavant Does Not Fit
          </h3>
          <p className="text-gray-500 text-sm mb-5">Be as clear about what not to chase as what to pursue.</p>
          <div className="space-y-3">
            {notFits.map((item, i) => (
              <div key={i} className="flex gap-4 border border-gray-100 rounded-lg p-4 bg-gray-50">
                <XCircle className="text-red-300 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.area}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Six Pattern Scorecard */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
          <Target className="text-electric" size={20} />
          Six Pattern Scorecard
        </h3>
        <p className="text-gray-500 text-sm mb-6">Where Omnisavant sits today vs. what winners do — and the mandate to close each gap.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold w-[20%]">Pattern</th>
                <th className="px-4 py-3 text-left font-semibold w-[25%]">Omnisavant Today</th>
                <th className="px-4 py-3 text-left font-semibold">Mandate</th>
                <th className="px-4 py-3 text-center font-semibold w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {sixPatterns.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{row.pattern}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500 text-xs">{row.omnisavantNow}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-800 text-xs font-medium">{row.gap}</td>
                  <td className="border border-gray-200 px-4 py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-20 py-1 rounded-full text-xs font-bold ${row.status === 'red' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.status === 'red' ? 'Build now' : 'In progress'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Build Sequence */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
          <Clock className="text-cyber-teal" size={20} />
          Build Sequence — Six Moats in Three Phases
        </h3>
        <p className="text-gray-500 text-sm mb-8">First make individual customers impossible to churn. Then make organizations impossible to churn. Then make competitors impossible to enter.</p>
        <div className="space-y-6">
          {phases.map((phase, pi) => (
            <div key={pi} className={`border ${phase.borderColor} ${phase.bgColor} rounded-xl p-6`}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`${phase.color} text-white px-3 py-1 rounded-lg font-bold text-xs`}>{phase.phase}</span>
                <span className="text-gray-500 text-sm">{phase.timeframe}</span>
                <ArrowRight size={14} className="text-gray-300" />
                <span className={`font-bold text-sm ${phase.textColor}`}>{phase.label}</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {phase.moats.map((moat, mi) => (
                  <div key={mi} className="bg-white rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-7 h-7 rounded-full ${phase.color} text-white text-xs font-bold flex items-center justify-center shrink-0`}>{moat.number}</span>
                      <h4 className="font-bold text-gray-900 text-sm">{moat.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{moat.build}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome Pricing + Scorecard */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Pricing Mandate */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
            <TrendingUp className="text-neon-pink" size={20} />
            Outcome-Based Pricing Mandate
          </h3>
          <p className="text-gray-500 text-sm mb-5">Not an 18-month decision — an architectural decision made today so the measurement exists in 18 months.</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-xs font-bold text-red-700 uppercase mb-2">Avoid</p>
              <p className="text-sm text-gray-700">Price per seat, grow headcount, negotiate at renewal.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 uppercase mb-2">Build toward</p>
              <p className="text-sm text-gray-700">Every insight has a downstream outcome tracked. Revenue surfaced = revenue priced against.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-5">
            <p className="text-gray-400 text-xs uppercase mb-2">The month-18 renewal sentence</p>
            <p className="text-white font-medium text-sm">"We surfaced 47 at-risk accounts. You retained 31. At avg contract value of $X, that is $Y in retained revenue."</p>
          </div>
        </div>

        {/* Market Scorecard */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
            <Shield className="text-neon-purple" size={20} />
            Market Scorecard
          </h3>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-3 py-2 text-left font-semibold">Dimension</th>
                <th className="px-3 py-2 text-left font-semibold">OpenAI</th>
                <th className="px-3 py-2 text-left font-semibold">AlphaSense</th>
                <th className="px-3 py-2 text-left font-semibold">Salesforce</th>
                <th className="px-3 py-2 text-left font-semibold text-green-300">Omnisavant</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Org memory', '✗', '✗', '~', '✓ Core wedge'],
                ['Vertical depth', '✗', '~ Finance', '✗', '✓ B2B SaaS first'],
                ['Cross-team network', '✗', '✗', '~', '✓ Intra-org effect'],
                ['Compliance native', '✗', '~ Bolted', '~ Bolted', '✓ Architecture'],
                ['Outcome pricing', '✗', '✗', '✗', '✓ Month 18'],
                ['AI positioning', 'Capability', 'Capability', 'Feature', '✓ Outcome-led'],
              ].map(([dim, a, b, c, d], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">{dim}</td>
                  <td className="border border-gray-200 px-3 py-2 text-red-500">{a}</td>
                  <td className="border border-gray-200 px-3 py-2 text-orange-500">{b}</td>
                  <td className="border border-gray-200 px-3 py-2 text-orange-500">{c}</td>
                  <td className="border border-gray-200 px-3 py-2 text-green-700 font-semibold bg-green-50">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Closing */}
      <div className="glass-card p-8 border-l-4 border-electric">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Lock className="text-electric" size={20} />
          What Nobody Else Can Copy
        </h3>
        <p className="text-gray-800 mb-3"><strong className="text-electric">An incumbent cannot become Omnisavant.</strong> AlphaSense carries $930M in content licensing debt built for financial analysts. Salesforce has 20 years of backward-compatible feature debt. Claude and ChatGPT have no permission to accumulate institutional context inside an org's workflow.</p>
        <p className="text-gray-700 mb-6">Omnisavant's advantage is structural, not technological. It is unburdened — with the wiggle room to sit in the exact layers that matter and build the exact memory that compounds. The window is 18–24 months before incumbents retrofit their way in.</p>
        <div className="bg-electric/8 border border-electric/25 rounded-xl p-5">
          <p className="text-electric font-bold">If a RevOps lead tried to remove Omnisavant in month 18, what would break?</p>
          <p className="text-gray-700 mt-1 text-sm">That is the question to answer with every product decision made between now and then.</p>
        </div>
      </div>

    </div>
  );
}
