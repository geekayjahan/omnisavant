'use client';

import { Crosshair, AlertTriangle, CheckCircle, XCircle, Clock, ArrowRight, Target, Shield, Zap, TrendingUp, Lock, Brain } from 'lucide-react';

const saasInstincts = [
  'Build integrations to ride existing platforms → wrong direction',
  'Add to Slack → wrong direction',
  'Replace TLDv or HubSpot → wrong direction',
  'Win on features → wrong direction',
];

const sixPatterns = [
  {
    pattern: 'Narrow Entry Point',
    winners: 'One painful problem, one hero user — then expand',
    omnisavantNow: 'Broad signal aggregation for "enterprise operators"',
    gap: 'Must narrow. Pick one hero user: RevOps lead or VP Customer Success in a B2B SaaS company. Everything else waits.',
    status: 'red',
  },
  {
    pattern: 'Proprietary Decision Traces',
    winners: 'Capture inputs, policies applied, exceptions, reasoning — irreplaceable operational asset',
    omnisavantNow: 'Not yet capturing structured decision history',
    gap: 'Build first. Every insight acted on or dismissed is a labeled training point. This is the moat.',
    status: 'red',
  },
  {
    pattern: 'Compliance as Offense',
    winners: 'Enter through compliance door — audit trails as product DNA, not checkbox',
    omnisavantNow: 'Compliance thinking is present but positioned as differentiation claim, not architecture',
    gap: 'Make it architecture. Audit trail of why a customer was flagged for churn, why a RevOps decision was made, when the signal was available — this is what differentiates from OpenAI wrappers.',
    status: 'amber',
  },
  {
    pattern: 'Outcome-Based Pricing',
    winners: 'Charge for measurable outcomes; pricing model tied to value delivered',
    omnisavantNow: 'Per-seat SaaS instinct from founding team',
    gap: 'Design for it now, deploy in 18 months. If entering RevOps: what revenue at risk did Omnisavant surface? Price against that. Bake the measurement in from day one or it can never be quantified retroactively.',
    status: 'red',
  },
  {
    pattern: 'Human Calibration Investment',
    winners: 'Intentional human layer creates professional retraining costs',
    omnisavantNow: 'Not yet present',
    gap: 'Decide: Is Omnisavant eventually a co-analyst layer (like Abridge for clinicians) or fully autonomous? The human layer makes it stickier in regulated enterprise contexts.',
    status: 'red',
  },
  {
    pattern: 'AI Positioning',
    winners: 'Lead with outcomes and transparency; anti-hype wins enterprise trust',
    omnisavantNow: 'Risk of leading with AI capability ("Savant Engine")',
    gap: 'Lead with the outcome, not the engine. "You missed three churn signals last quarter. Here\'s one you\'re about to miss." That sentence sells. The engine is a footnote.',
    status: 'amber',
  },
];

const notFits = [
  {
    area: 'Slack integration play',
    why: 'Positions Omnisavant as a notification tool. Notifications get muted. The moat is being the source of intelligence, not a push channel.',
  },
  {
    area: 'Workflow replacement (HubSpot / TLDv)',
    why: 'Replacement positioning invites procurement comparison. Omnisavant wins when it sits above these tools, not when it competes with them.',
  },
  {
    area: 'Horizontal AI assistant',
    why: 'No proprietary data, no switching costs, no moat. OpenAI and Google will always win this.',
  },
  {
    area: 'Raw data aggregation',
    why: 'AlphaSense owns this for financial data. Omnisavant\'s edge is structured interpretation of internal unstructured data — not aggregating more inputs, but making fewer inputs more actionable.',
  },
  {
    area: 'Compliance as tick-box',
    why: 'Compliance claimed as a feature ("we\'re SOC 2 compliant") is table stakes. Compliance as architecture (audit trail of every signal, every decision, every action taken) is a moat. The first is marketing; the second is a procurement gate no competitor can unlock without rebuilding from scratch.',
  },
];

const competitors = [
  {
    name: 'OpenAI / Perplexity',
    orgMemory: '✗ None',
    verticalInterp: '✗ Generic',
    networkEffect: '✗ None',
    compliance: '✗ None',
    pricing: '✗ No',
    positioning: 'Capability-led',
    color: 'text-red-600',
  },
  {
    name: 'AlphaSense',
    orgMemory: '✗ None (market data, not your org)',
    verticalInterp: '~ Financial analysts only',
    networkEffect: '✗ None',
    compliance: '~ Bolted on',
    pricing: '✗ No',
    positioning: 'Capability-led',
    color: 'text-orange-600',
  },
  {
    name: 'Salesforce / HubSpot',
    orgMemory: '~ CRM records, no intelligence layer',
    verticalInterp: '✗ Generic',
    networkEffect: '~ Partial (shared CRM)',
    compliance: '~ Bolted on',
    pricing: '✗ No',
    positioning: 'Feature-led',
    color: 'text-orange-600',
  },
  {
    name: 'Omnisavant (Target)',
    orgMemory: '✓ Wedge — build first',
    verticalInterp: '✓ Over-fit to B2B SaaS operators',
    networkEffect: '✓ Intra-org network effect',
    compliance: '✓ Build native — CCO wedge',
    pricing: '✓ Design measurement from day one',
    positioning: 'Outcome-led',
    color: 'text-green-600',
  },
];

const phases = [
  {
    phase: 'Phase 1',
    timeframe: '0–6 months',
    label: 'Land the Nervous System',
    color: 'bg-electric',
    moats: [
      {
        number: '1',
        name: 'Organizational Memory as Non-Transferable Asset',
        description: 'Every insight acted on, every signal dismissed, every pattern that proved meaningful to this specific org. After 18 months, Omnisavant knows this org\'s signal-to-action patterns better than any replacement could reconstruct.',
        build: 'Store decisions, not just documents. What signal prompted action? What was ignored and why? What outcome followed?',
      },
      {
        number: '5',
        name: 'Vertical Depth in 1–2 Verticals First',
        description: 'Generic LLMs don\'t understand that "escalation rate" means something different in B2B SaaS vs. logistics. Omnisavant\'s interpretation quality in a vertical must be demonstrably better than a general-purpose tool within 6 months of a customer\'s first 5 design partners.',
        build: 'Over-fit the Savant Engine to B2B SaaS as vertical one. Every labeled correction from those 5 design partners makes the model better for the next 50.',
      },
    ],
  },
  {
    phase: 'Phase 2',
    timeframe: '6–18 months',
    label: 'Become Structurally Embedded',
    color: 'bg-neon-pink',
    moats: [
      {
        number: '3',
        name: 'Cross-Team Signal Arbitrage (Intra-Org Network Effect)',
        description: 'The platform gets more valuable as more teams use it. CS signals become visible to Product. Sales signals become visible to CS. This is an intra-organizational network effect — rare in B2B SaaS because most tools serve one team.',
        build: 'Every new team connected increases the signal surface for every existing team. A customer with 2 teams on Omnisavant has more reason to add a 3rd than to switch. Churn becomes structurally harder as breadth increases.',
      },
      {
        number: '4',
        name: 'Workflow Embedding — Push, Not Pull',
        description: 'A Slack digest that surfaces emerging signals is not the goal. The goal: Omnisavant is the first thing a RevOps lead opens, because it tells them what they\'ll be dealing with today. It lives inside the tools teams act on — Salesforce, Linear, Notion — not as a tab they visit.',
        build: 'Push signals into systems of action, not dashboards they check.',
      },
    ],
  },
  {
    phase: 'Phase 3',
    timeframe: '18–36 months',
    label: 'Price for Value and Close the Gate',
    color: 'bg-neon-purple',
    moats: [
      {
        number: '2',
        name: 'Signal-to-Action Learning Loop',
        description: 'Every time an insight is surfaced and a team acts or doesn\'t act, that feedback trains the model to understand what matters to this org. A lightweight feedback mechanism on every insight card — "we acted on this," "already knew this," "wrong context" — generates labeled preferences no competitor can replicate.',
        build: '10 seconds of feedback friction per insight generates years of compounding signal.',
      },
      {
        number: '6',
        name: 'Compliance-Adjacent Architecture as GTM Wedge',
        description: 'By month 18, the audit trail Omnisavant has built — why was this account flagged, what signals were available when this churn happened, what was known and when — shifts the buyer from VP Product to General Counsel or CCO in regulated verticals. The CCO\'s budget is not discretionary.',
        build: 'Design the audit trail from day one. It does not need to be sold in month one. It needs to be there in month 18 when the CCO asks for it.',
      },
    ],
  },
];

const positioning = [
  { competitor: 'AlphaSense', verdict: 'Not this', reason: 'AlphaSense serves financial analysts reading market data. Omnisavant serves CS, RevOps, and Product reading customer signals. The data is internal and unstructured; the buyer is an operator, not an analyst.' },
  { competitor: 'Claude / ChatGPT / Perplexity', verdict: 'Not this', reason: 'General-purpose reasoning tools with no enterprise memory, no organizational context, no compliance layer, and no accountability for outcomes. Omnisavant knows your org\'s signal-to-action history. They don\'t.' },
  { competitor: 'Glean', verdict: 'Not this', reason: 'Glean is enterprise search. It surfaces documents. Omnisavant surfaces decisions. The abstraction layer is one level higher.' },
  { competitor: 'TLDv / Grain', verdict: 'Not this', reason: 'Recording tools. Omnisavant is what happens after the recording: the pattern recognition, the escalation, the memory that the next call should know about this account.' },
  { competitor: 'HubSpot / Salesforce', verdict: 'Not this', reason: 'Systems of record. Omnisavant is the intelligence layer that sits on top of those systems of record and tells you what they\'re not surfacing.' },
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
        <p className="text-gray-500">
          Where we fit · Where we don&apos;t · What to go after — synthesized from all moat analyses
        </p>
      </div>

      {/* Founding Team Tax */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" size={24} />
          The Founding Team Tax — Strip the SaaS Thinking First
        </h3>
        <p className="text-gray-600 mb-6">Before mapping the opportunity, name the structural bias to shed. Omnisavant&apos;s founding team is SaaS-trained. That mental model surfaces as instincts worth interrogating:</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {saasInstincts.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
              <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
              <span className="text-sm text-red-800">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-electric/10 border border-electric/30 rounded-xl p-6">
          <p className="text-sm font-semibold text-electric mb-2">The frame to replace it with:</p>
          <p className="text-gray-800 font-medium">Omnisavant is not a tool that enterprise buys. It is <em>the nervous system the enterprise cannot start its day without.</em> The test is not &ldquo;do users like it?&rdquo; The test is: <strong>&ldquo;If Omnisavant went down at 9am on a Monday, would revenue decisions stall?&rdquo;</strong> If yes, that is the right place to build. Everything before that answer is a demo.</p>
        </div>
      </div>

      {/* Six Pattern Map */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Target className="text-electric" size={24} />
          The Six Pattern Map — Scored Against Omnisavant
        </h3>
        <p className="text-gray-600 mb-6">The AI Moat Analysis identified six patterns separating winners from noise. Here is where Omnisavant sits honestly against each one.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700 w-[18%]">Pattern</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700 w-[25%]">What Winners Do</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700 w-[22%]">Omnisavant Now</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700 w-[30%]">Gap / Mandate</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-700 w-[5%]">Status</th>
              </tr>
            </thead>
            <tbody>
              {sixPatterns.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{row.pattern}</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">{row.winners}</td>
                  <td className="border border-gray-200 px-4 py-3">
                    <span className={`text-sm ${row.status === 'red' ? 'text-red-700' : 'text-amber-700'}`}>{row.omnisavantNow}</span>
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">{row.gap}</td>
                  <td className="border border-gray-200 px-4 py-3 text-center">
                    {row.status === 'red'
                      ? <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                      : <span className="inline-block w-3 h-3 rounded-full bg-amber-400"></span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Where it fits + where it doesn't — side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Where it fits */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            Where Omnisavant Actually Fits
          </h3>
          <div className="bg-electric/10 border border-electric/30 rounded-xl p-4 mb-6">
            <p className="text-electric font-bold text-sm">The Workflow / Application Layer</p>
            <p className="text-gray-800 font-medium mt-1">Vertical Intelligence Operating System for Revenue and Customer Teams</p>
            <p className="text-gray-600 text-sm mt-2">Not a foundation model. Not infrastructure. Not a horizontal AI assistant. A deeply vertical, workflow-embedded intelligence layer that owns the signal-to-decision path for B2B enterprise operators.</p>
          </div>
          <div className="space-y-3">
            {positioning.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="text-red-400 shrink-0" size={16} />
                  <span className="font-semibold text-gray-800 text-sm">Not {item.competitor}</span>
                </div>
                <p className="text-sm text-gray-600 pl-6">{item.reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900"><strong>The defensible thesis:</strong> An incumbent SaaS like Salesforce or HubSpot cannot become Omnisavant. They are burdened by backward compatibility, existing enterprise contracts, and feature debt. They will slap an AI tab onto their dashboard and call it &ldquo;AI-powered.&rdquo; Omnisavant was born without that burden. That wiggle room is the competitive window — and it closes as incumbents improve.</p>
          </div>
        </div>

        {/* Where it doesn't */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <XCircle className="text-red-500" size={24} />
            Where Omnisavant Does Not Fit
          </h3>
          <p className="text-gray-600 mb-6">Be as clear about what not to chase as what to pursue.</p>
          <div className="space-y-4">
            {notFits.map((item, i) => (
              <div key={i} className="border border-red-100 bg-red-50/50 rounded-lg p-4">
                <p className="font-semibold text-red-800 text-sm mb-1">{item.area}</p>
                <p className="text-sm text-gray-700">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase Build Sequence */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Clock className="text-cyber-teal" size={24} />
          The Six Moats — Omnisavant&apos;s Build Sequence
        </h3>
        <p className="text-gray-600 mb-2">Drawing from all three analyses, here is the honest sequencing.</p>
        <p className="text-sm text-gray-500 italic mb-8">The logic: first make individual customers impossible to churn, then make organizations impossible to churn, then make competitors impossible to enter.</p>

        <div className="space-y-8">
          {phases.map((phase, pi) => (
            <div key={pi}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`${phase.color} text-white px-4 py-2 rounded-lg font-bold text-sm`}>{phase.phase}</div>
                <div className="text-gray-500 font-medium">{phase.timeframe}</div>
                <ArrowRight size={16} className="text-gray-300" />
                <div className="font-bold text-gray-900">{phase.label}</div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {phase.moats.map((moat, mi) => (
                  <div key={mi} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-7 h-7 rounded-full ${phase.color} text-white text-xs font-bold flex items-center justify-center shrink-0`}>{moat.number}</span>
                      <h4 className="font-bold text-gray-900 text-sm">{moat.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{moat.description}</p>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Build Requirement</p>
                      <p className="text-sm text-gray-700 italic">{moat.build}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome-Based Pricing Mandate */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="text-neon-pink" size={24} />
          The Outcome-Based Pricing Mandate
        </h3>
        <p className="text-gray-600 mb-6">This is not an 18-month decision. It is an architectural decision made today so that the measurement exists in 18 months.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-red-700 font-bold text-sm mb-2">The SaaS Instinct (Wrong)</p>
            <p className="text-gray-700 text-sm">Price per seat, grow headcount, negotiate at renewal.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-green-700 font-bold text-sm mb-2">The Right Instinct</p>
            <p className="text-gray-700 text-sm">If Omnisavant is in RevOps, it is surfacing revenue at risk. That number is quantifiable. Design the product so that every insight surfaced has a downstream outcome tracked.</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-white">
          <p className="text-gray-400 text-xs uppercase font-semibold mb-3">The Renewal Sentence (Month 18)</p>
          <p className="text-lg font-medium">&ldquo;We surfaced 47 at-risk accounts. You retained 31. At an average contract value of $X, that is $Y in retained revenue.&rdquo;</p>
          <p className="text-gray-400 text-sm mt-3">That sentence is the renewal conversation.</p>
        </div>
        <div className="mt-4 bg-electric/10 border border-electric/30 rounded-lg p-4">
          <p className="text-sm text-gray-700"><strong>The mandate:</strong> Every vertical Omnisavant enters must have a quantifiable outcome metric designed from the start. Revenue retained. Escalations avoided. Decisions made with signal vs. without. Without this, outcome-based pricing is a wish. With it, it is a moat.</p>
        </div>
      </div>

      {/* Honest Scorecard */}
      <div className="glass-card p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="text-neon-purple" size={24} />
          The Honest Scorecard: Omnisavant vs. The Market
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Moat Dimension</th>
                <th className="px-4 py-3 text-left font-semibold">OpenAI / Perplexity</th>
                <th className="px-4 py-3 text-left font-semibold">AlphaSense</th>
                <th className="px-4 py-3 text-left font-semibold">Salesforce / HubSpot</th>
                <th className="px-4 py-3 text-left font-semibold text-green-300">Omnisavant (Target)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Organizational memory', 'None', 'None (market data, not your org)', 'CRM records, no intelligence layer', 'This is the wedge — build it first'],
                ['Vertical signal interpretation', 'Generic', 'Financial analysts only', 'Generic', 'Over-fit to B2B SaaS operators'],
                ['Cross-team network effect', 'None', 'None', 'Partial (shared CRM)', 'Intra-org network effect — unique position'],
                ['Compliance-native architecture', 'None', 'Bolted on', 'Bolted on', 'Build native — this is the CCO wedge'],
                ['Outcome-based pricing', 'No', 'No', 'No', 'Design the measurement from day one'],
                ['AI positioning', 'Capability-led', 'Capability-led', 'Feature-led', 'Outcome-led — "here\'s what you\'re about to miss"'],
              ].map(([dim, openai, alpha, sfdc, omni], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-800">{dim}</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600">{openai}</td>
                  <td className="border border-gray-200 px-4 py-3 text-orange-600">{alpha}</td>
                  <td className="border border-gray-200 px-4 py-3 text-orange-600">{sfdc}</td>
                  <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold bg-green-50">{omni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Closing */}
      <div className="glass-card p-8 bg-gray-900 text-white border-0">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lock className="text-electric" size={24} />
          What Omnisavant Must Do That Nobody Else Can Copy
        </h3>
        <p className="text-gray-300 mb-4">The single most important insight from across all three analyses is this:</p>
        <p className="text-white font-semibold mb-4"><strong className="text-electric">An incumbent cannot become Omnisavant.</strong> AlphaSense cannot pivot to serve RevOps operators — it is built for financial analysts and carries $930M in content licensing debt. Salesforce cannot become an AI-native intelligence layer — it is a system of record with 20 years of backward-compatible feature debt. Claude and ChatGPT cannot build organizational memory — they have no permission to sit inside an org&apos;s workflow and accumulate institutional context.</p>
        <p className="text-gray-300 mb-4">Omnisavant&apos;s advantage is structural, not technological. The advantage is that it is <em>unburdened.</em> It has the wiggle room to sit in the exact layers that matter and build the exact memory that compounds.</p>
        <p className="text-gray-300 mb-6">The mandate: move into those layers before incumbents retrofit their way in. The window is 18–24 months. After that, every major CRM, every major AI assistant, and every major data platform will have &ldquo;AI intelligence&rdquo; marketed at the same buyer. Omnisavant&apos;s only way to survive that moment is to already be the thing that cannot be ripped out.</p>
        <div className="border border-electric/50 rounded-xl p-5 bg-electric/10">
          <p className="text-electric font-bold text-lg">If a RevOps lead tried to remove Omnisavant in month 18, what would break?</p>
          <p className="text-gray-300 mt-2 text-sm">That is the question to answer with every product decision made between now and then.</p>
        </div>
      </div>
    </div>
  );
}
