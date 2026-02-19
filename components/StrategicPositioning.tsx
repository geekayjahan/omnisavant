'use client';

import { AlertTriangle, TrendingUp, Shield, Zap, Target, CheckCircle, XCircle, Clock, ArrowRight } from 'lucide-react';

// ─── CHART 1: Competitive Positioning Scatter ────────────────────────────────
// X: Data Coverage (structured → unstructured)
// Y: Switching Cost / Lock-in (low → high)
// Omnisavant's current position vs where it needs to be

const scatterPlayers = [
  { name: 'QuadSci',            x: 15, y: 30,  r: 5,  color: '#ef4444', label: 'right' },
  { name: 'Glean',              x: 35, y: 55,  r: 9,  color: '#f97316', label: 'right' },
  { name: 'MS Copilot',         x: 30, y: 40,  r: 10, color: '#3b82f6', label: 'left'  },
  { name: 'SF Agentforce',      x: 25, y: 50,  r: 10, color: '#8b5cf6', label: 'left'  },
  { name: 'Sierra AI',          x: 40, y: 75,  r: 7,  color: '#10b981', label: 'right' },
  { name: 'Omnisavant (today)', x: 70, y: 25,  r: 7,  color: '#1e293b', label: 'right', dashed: true },
  { name: 'Omnisavant (2028)',  x: 80, y: 82,  r: 7,  color: '#1e293b', label: 'right', target: true },
];

function CompetitiveScatter() {
  const W = 560; const H = 340;
  const padL = 56; const padR = 20; const padT = 20; const padB = 44;
  const cW = W - padL - padR;
  const cH = H - padT - padB;

  const toX = (v: number) => padL + (v / 100) * cW;
  const toY = (v: number) => padT + ((100 - v) / 100) * cH;

  const gridLines = [0, 25, 50, 75, 100];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 340 }}>
      {/* grid */}
      {gridLines.map(g => (
        <g key={g}>
          <line x1={toX(g)} y1={padT} x2={toX(g)} y2={padT + cH} stroke="#e5e7eb" strokeWidth="1" />
          <line x1={padL} y1={toY(g)} x2={padL + cW} y2={toY(g)} stroke="#e5e7eb" strokeWidth="1" />
        </g>
      ))}

      {/* white-space annotation */}
      <rect x={toX(58)} y={toY(98)} width={toX(98) - toX(58)} height={toY(55) - toY(98)}
        fill="#f0fdf4" stroke="#86efac" strokeWidth="1" strokeDasharray="4 3" rx="6" />
      <text x={toX(78)} y={toY(78)} textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="600">
        Omnisavant
      </text>
      <text x={toX(78)} y={toY(78) + 12} textAnchor="middle" fontSize="9" fill="#16a34a">
        target zone
      </text>

      {/* arrow today → 2028 */}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1e293b" />
        </marker>
      </defs>
      <line
        x1={toX(70)} y1={toY(25)}
        x2={toX(79)} y2={toY(80)}
        stroke="#1e293b" strokeWidth="1.5" strokeDasharray="5 3"
        markerEnd="url(#arr)"
      />

      {/* players */}
      {scatterPlayers.map((p) => (
        <g key={p.name}>
          <circle
            cx={toX(p.x)} cy={toY(p.y)} r={p.r}
            fill={p.target ? 'none' : p.color}
            stroke={p.color}
            strokeWidth={p.target ? 2 : 0}
            strokeDasharray={p.dashed ? '4 2' : undefined}
            opacity={p.dashed ? 0.6 : 0.85}
          />
          <text
            x={p.label === 'right' ? toX(p.x) + p.r + 4 : toX(p.x) - p.r - 4}
            y={toY(p.y) + 4}
            textAnchor={p.label === 'right' ? 'start' : 'end'}
            fontSize="9.5"
            fill={p.target ? '#16a34a' : '#374151'}
            fontWeight={p.name.startsWith('Omnisavant') ? '700' : '400'}
          >
            {p.name}
          </text>
        </g>
      ))}

      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#9ca3af" strokeWidth="1.5" />
      <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#9ca3af" strokeWidth="1.5" />

      {/* axis labels */}
      <text x={padL + cW / 2} y={H - 6} textAnchor="middle" fontSize="10" fill="#6b7280" fontWeight="600">
        Data Coverage  ←  Structured only · · · Unstructured + Cross-platform  →
      </text>
      <text
        x={14} y={padT + cH / 2}
        textAnchor="middle" fontSize="10" fill="#6b7280" fontWeight="600"
        transform={`rotate(-90, 14, ${padT + cH / 2})`}
      >
        Switching Cost / Lock-in
      </text>
    </svg>
  );
}

// ─── CHART 2: Moat Readiness Radar ───────────────────────────────────────────
// 6 axes, one per moat. Score = current build state (0–10).
// Two overlaid polygons: current vs potential

const radarAxes = [
  { label: 'Org Memory',       current: 3, potential: 10 },
  { label: 'Signal Loop',      current: 1, potential: 9  },
  { label: 'Cross-Team FX',    current: 4, potential: 9  },
  { label: 'Workflow Embed',   current: 2, potential: 9  },
  { label: 'Vertical Depth',   current: 2, potential: 8  },
  { label: 'Compliance Arch',  current: 1, potential: 8  },
];

function RadarChart() {
  const cx = 200; const cy = 170; const R = 130; const n = radarAxes.length;
  const levels = [2, 4, 6, 8, 10];

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (val: number, i: number) => ({
    x: cx + (val / 10) * R * Math.cos(angle(i)),
    y: cy + (val / 10) * R * Math.sin(angle(i)),
  });
  const poly = (vals: number[]) =>
    vals.map((v, i) => { const p = point(v, i); return `${p.x},${p.y}`; }).join(' ');

  return (
    <svg viewBox="0 0 400 340" className="w-full" style={{ maxHeight: 340 }}>
      {/* level rings */}
      {levels.map((lv) => (
        <polygon
          key={lv}
          points={Array.from({ length: n }, (_, i) => point(lv, i))
            .map(p => `${p.x},${p.y}`).join(' ')}
          fill="none" stroke="#e5e7eb" strokeWidth="1"
        />
      ))}

      {/* spokes */}
      {radarAxes.map((_, i) => {
        const outer = point(10, i);
        return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#e5e7eb" strokeWidth="1" />;
      })}

      {/* potential polygon */}
      <polygon
        points={poly(radarAxes.map(a => a.potential))}
        fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"
      />

      {/* current polygon */}
      <polygon
        points={poly(radarAxes.map(a => a.current))}
        fill="#1e293b" stroke="#1e293b" strokeWidth="2" opacity="0.7"
      />

      {/* axis labels */}
      {radarAxes.map((ax, i) => {
        const p = point(11.5, i);
        const anchor =
          Math.cos(angle(i)) > 0.2 ? 'start' :
          Math.cos(angle(i)) < -0.2 ? 'end' : 'middle';
        return (
          <text key={i} x={p.x} y={p.y + 4} textAnchor={anchor} fontSize="10.5" fill="#374151" fontWeight="600">
            {ax.label}
          </text>
        );
      })}

      {/* score dots — current */}
      {radarAxes.map((ax, i) => {
        const p = point(ax.current, i);
        return <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#1e293b" />;
      })}

      {/* legend */}
      <rect x="248" y="290" width="12" height="12" fill="#1e293b" opacity="0.7" rx="2" />
      <text x="264" y="300" fontSize="10" fill="#374151">Current state</text>
      <rect x="248" y="310" width="12" height="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" rx="2" />
      <text x="264" y="320" fontSize="10" fill="#374151">Full potential</text>
    </svg>
  );
}

const competitors = [
  {
    name: 'Glean',
    owns: 'Enterprise knowledge graph. 100+ connectors, $200M ARR, $7.2B valuation.',
    edge: "Glean indexes documents — not decisions. It doesn't know what your org acted on, what signals were ignored, or what judgment looks like here. That's structurally unavailable to them.",
    gap: 'Enterprise sales motion, integration depth, IT/CIO credibility. Glean wins procurement conversations Omnisavant cannot yet match.',
    verdict: 'Glean is moving toward infrastructure — away from the outcomes buyer. That is Omnisavant\'s opening.',
    verdictType: 'opportunity',
  },
  {
    name: 'Salesforce Agentforce',
    owns: 'Native CRM agents. Operates on the data where most customer signals already live. Bundled, trusted, already procured.',
    edge: "Agentforce sees Salesforce. Omnisavant sees everything else — the 80% of signals that live outside CRM: support tickets, call transcripts, product feedback, internal Slack. Platform agents are limited to the data their platform owns.",
    gap: 'Distribution, trust, and existing relationships. When a prospect says "we\'re evaluating Omnisavant," the next question is often "what about Agentforce?"',
    verdict: 'The only safe ground is what platform players are architecturally prevented from owning. Build there.',
    verdictType: 'threat',
  },
  {
    name: 'Microsoft Copilot',
    owns: 'Bundled into M365 at near-zero marginal cost. Path of least resistance for any Microsoft-stack org.',
    edge: 'Only 6% of enterprises have moved beyond pilot phase. Complex data governance requirements and IT friction have stalled adoption. Omnisavant\'s no-manual-uploads, fast-ingestion positioning directly addresses this frustration.',
    gap: 'Price and procurement inertia. Copilot is already paid for in many orgs — competing against sunk cost is hard.',
    verdict: 'An 18–24 month window while Copilot smooths its friction. Use it to establish irreplaceable org-specific memory.',
    verdictType: 'window',
  },
  {
    name: 'Sierra AI',
    owns: 'Outcome-based pricing. $100M ARR in 21 months. Charges per successful resolution — perfect incentive alignment.',
    edge: "Sierra's model is the blueprint, not the competition. Omnisavant is in a different category but should adopt the same pricing logic: some portion of revenue tied to measurable outcomes (churn prevented, accounts saved).",
    gap: "Omnisavant's implied pricing is per-seat SaaS — the model least aligned with how its value actually compounds.",
    verdict: 'Not a competitor. A pricing lesson. The design partner phase should instrument for outcome metrics now.',
    verdictType: 'learn',
  },
  {
    name: 'QuadSci',
    owns: '$8M Series A closed Feb 17 2026. Structured data only — product telemetry, usage logs, behavioral metrics. Predicts churn 12–18 months out with 94% accuracy claim.',
    edge: 'QuadSci is entirely structured data. They have nothing in conversations, tickets, emails, meeting notes — the 80–90% that lives outside product analytics. Omnisavant\'s unstructured data moat is real and unexploited by the closest competitor.',
    gap: 'QuadSci has a precision narrative: "94% accuracy, 12–18 months out." Omnisavant needs an equivalent claim to win budget conversations.',
    verdict: 'Omnisavant wins on coverage. It needs a precision story to match QuadSci\'s accuracy claim.',
    verdictType: 'threat',
  },
];

const moats = [
  {
    id: 1,
    name: 'Organizational Memory',
    subtitle: 'Decision traces, not documents',
    current: 'Architecture supports it. The PRFAQ frames this as "memory when people leave" — that\'s the secondary value. The primary value is the irreplaceable record of what signals the org acted on and what followed.',
    verdict: 'Strongest moat, most underspecified. Close this gap first.',
    status: 'underbuilt',
    phase: 'Now',
  },
  {
    id: 2,
    name: 'Signal-to-Action Loop',
    subtitle: '10 seconds of friction, years of compounding signal',
    current: 'No product mechanism described yet. A simple feedback tap — "acted / knew / irrelevant" — embedded in every Slack signal is the highest-ROI build in the design partner phase.',
    verdict: 'Architecturally sound, operationally unbuilt. Prioritize it now.',
    status: 'unbuilt',
    phase: 'Now',
  },
  {
    id: 3,
    name: 'Cross-Team Network Effect',
    subtitle: 'Intra-org signal arbitrage — rare in B2B SaaS',
    current: 'Most differentiated structural position. Gets more valuable with every team added. Hard to sell before team count = 2, but instrument and make the cross-team connections visible from the first customer.',
    verdict: 'Real and underappreciated. Make it felt at team count = 2.',
    status: 'strategic',
    phase: 'Months 6–18',
  },
  {
    id: 4,
    name: 'Workflow Embedding',
    subtitle: 'Push not pull — infrastructure you cannot turn off',
    current: 'Slack digests are framed as a delivery feature, not strategic lock-in. Once an analyst depends on signals surfacing in their existing channels, removal feels like deliberate blindness — that\'s the design principle to build toward.',
    verdict: 'Design principle gap. Reframe from feature to identity.',
    status: 'strategic',
    phase: 'Months 6–18',
  },
  {
    id: 5,
    name: 'Vertical Specialization',
    subtitle: 'Interpretation depth that compounds by sector',
    current: 'Savant Engine architecture is right. GTM does not specify vertical focus. First 5 design partners should be homogeneous by vertical — 5 different verticals gives 1/5th the depth of a focused approach.',
    verdict: 'Pick one vertical. Own interpretation quality. Use it as reference base.',
    status: 'unbuilt',
    phase: 'Now',
  },
  {
    id: 6,
    name: 'Compliance Architecture',
    subtitle: 'The CCO\'s budget is not discretionary',
    current: 'Sequenced to Phase 3 in current plan. Wrong. Enterprises do not hand authorization to their internal data to a startup without a compliance architecture they can show their legal team. EU AI Act Article 19 mandates audit logs for high-risk AI. HIPAA, SOC 2, GDPR create procurement gates that close deals before they open. More than that: the audit trail IS the product — it is what makes Omnisavant the source of defensible decision records, not just another intelligence tool.',
    verdict: 'Day 0 infrastructure, not Month 18 GTM. Compliance is not the price of entry — it is the product that earns enterprise trust.',
    status: 'misequenced',
    phase: 'Day 0',
  },
];

const risks = [
  {
    id: 1,
    title: 'The "insights dashboard" ceiling',
    description: 'If early customers experience Omnisavant as a place to check insights rather than infrastructure embedded in their workflow, the category anchor becomes "BI tool that uses AI." That ceiling is low and crowded. Mitigation: aggressive workflow embedding from customer one — before the mental model of "one more dashboard" can form.',
    severity: 'high',
  },
  {
    id: 2,
    title: 'Savant Engine commoditises faster than expected',
    description: 'Frontier models — Claude, Gemini, GPT — now operate at context windows that make general-purpose document synthesis trivially accessible to any enterprise. The moat is not interpretation quality. It is the org-specific context, decision traces, and calibrated signal history that Omnisavant accumulates and that no foundation model can replicate by switching on. If that accumulation hasn\'t started on day one of the design partner phase, the window closes.',
    severity: 'high',
  },
  {
    id: 3,
    title: 'Wrong buyer — VP of Product vs. CCO',
    description: 'VP of Product is real but constrained: discretionary budget, 2–3 year tenure, shifting priorities. The stickiest buyers are those whose professional accountability is tied to the decisions Omnisavant informs — Chief Customer Officer, GM, COO. Design partner phase must test which buyer archetype builds irreplaceable dependency.',
    severity: 'medium',
  },
  {
    id: 4,
    title: 'Underpriced data asset',
    description: 'Omnisavant is accumulating one of the most valuable B2B enterprise datasets: structured records of what signals drive what actions in specific company types and verticals. This is the long-term asset, not the ARR. Most SaaS companies don\'t think about this until Series B — Omnisavant should think about it now, to understand what the design partner phase is actually building.',
    severity: 'medium',
  },
];

const statusConfig = {
  underbuilt: { color: 'bg-amber-100 text-amber-800 border-amber-200', label: 'Underbuilt' },
  unbuilt: { color: 'bg-red-100 text-red-800 border-red-200', label: 'Not yet built' },
  strategic: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Strategic priority' },
  misequenced: { color: 'bg-purple-100 text-purple-800 border-purple-200', label: 'Misequenced' },
};

const verdictIcon = {
  opportunity: <TrendingUp className="w-4 h-4 text-emerald-600" />,
  threat: <AlertTriangle className="w-4 h-4 text-red-500" />,
  window: <Clock className="w-4 h-4 text-amber-500" />,
  learn: <Zap className="w-4 h-4 text-blue-500" />,
};

const verdictBg = {
  opportunity: 'bg-emerald-50 border-emerald-200',
  threat: 'bg-red-50 border-red-200',
  window: 'bg-amber-50 border-amber-200',
  learn: 'bg-blue-50 border-blue-200',
};

const severityConfig = {
  high: { dot: 'bg-red-500', label: 'High' },
  medium: { dot: 'bg-amber-400', label: 'Medium' },
};

const archetypes = [
  {
    label: 'A — Workflow Operators',
    examples: 'Cursor, Harvey, Abridge',
    description: 'Own the surface where work happens. Moat is muscle memory + accumulated decision traces. Structurally very hard to remove.',
    position: 'Where Omnisavant needs to be',
    highlight: true,
  },
  {
    label: 'B — Intelligence Layers',
    examples: 'Glean, Dust, Notion AI',
    description: 'Aggregate signal above workflows. Always one step removed from where action happens. The "check this tab" problem — even Glean at $7.2B fights this.',
    position: 'Where the PRFAQ currently reads',
    highlight: false,
  },
  {
    label: 'C — Data Compounders',
    examples: 'Sierra, Chargeflow, Greenlite',
    description: 'Quietly accumulate proprietary operational data. Irreplaceable not by being indispensable today but by being catastrophic to remove later.',
    position: 'What the architecture is capable of',
    highlight: true,
  },
];

export default function StrategicPositioning() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-16">

      {/* HEADER */}
      <div className="border-b border-gray-200 pb-8">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Strategic Assessment · February 2026</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Omnisavant: Where It Is, Where It Can Go
        </h1>
        <div className="bg-gray-900 text-white rounded-xl px-6 py-5">
          <p className="text-base leading-relaxed">
            <span className="font-semibold text-white">The one-sentence verdict:</span>{' '}
            <span className="text-gray-300">Omnisavant is building the right product in the right market at the right time — and is currently positioned to extract the least defensible slice of value from all of it. That's fixable. It requires closing the gap between what the architecture can do and what the product narrative claims to do.</span>
          </p>
        </div>
      </div>

      {/* SECTION 1 — THE MARKET CONTEXT */}
      <section>
        <SectionLabel number="01" title="The Market It's Walking Into" />
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          The enterprise intelligence market is not a clean green field. Three forces are converging — two as threats, one as a structural tailwind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">Platform Threat</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Salesforce + Microsoft are coming</p>
            <p className="text-sm text-gray-600">Agentforce and Copilot are both targeting Omnisavant's use case through native platform bundling. But both are limited to the data their platform owns. The structural answer: own the 80% that lives outside CRM.</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Time-Bounded Window</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">18–24 months of platform friction</p>
            <p className="text-sm text-gray-600">Only 6% of enterprises have moved Copilot beyond pilot. Complex data governance and IT friction are stalling adoption. Omnisavant can land and establish irreplaceable memory before that friction resolves.</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Structural Tailwind</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">The data readiness crisis is Omnisavant's wedge</p>
            <p className="text-sm text-gray-600">Less than 1% of enterprise unstructured data is AI-ready (IDC, 2026). Enterprises will not clean their data before buying intelligence. The tool that works on data as it exists — not as you wish it existed — wins by default.</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-violet-600" />
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wide">The New Baseline</span>
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Claude-class models are the commodity now.</span>{' '}
            Any enterprise can call frontier AI APIs today. The differentiator is no longer the model — it is the compliance layer, the org-specific calibration, and the embedded workflows that take years to build and make Omnisavant structurally impossible to replace.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ARCHETYPE MAP */}
      <section>
        <SectionLabel number="02" title="The Archetype Gap — Where Omnisavant Is vs. Where It Needs to Be" />
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Every AI company that survives 2027 will have staked an unambiguous claim in one of three archetypes. Omnisavant is straddling two — and has the architecture to claim the right one.
        </p>
        <div className="space-y-3">
          {archetypes.map((a) => (
            <div
              key={a.label}
              className={`rounded-xl border p-5 ${a.highlight ? 'border-gray-900 bg-white' : 'border-gray-200 bg-gray-50 opacity-80'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-gray-900">{a.label}</span>
                    <span className="text-xs text-gray-400">{a.examples}</span>
                  </div>
                  <p className="text-sm text-gray-600">{a.description}</p>
                </div>
                <div className={`text-right shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border ${a.highlight ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-500 border-gray-300'}`}>
                  {a.position}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-800">The gap to close:</span>{' '}
            Omnisavant's actual architecture — Savant Engine, cross-functional signal routing, organizational memory — is built to be Archetype C (Data Compounder). The GTM is currently selling Archetype B (Intelligence Layer) benefits. That mismatch sets a lower ceiling than the product deserves.
          </p>
        </div>
      </section>

      {/* SECTION 3 — COMPETITIVE BENCHMARKING */}
      <section>
        <SectionLabel number="03" title="Competitive Benchmarking" />
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Five companies that define the terms of competition.
        </p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3 font-semibold w-28">Competitor</th>
                <th className="text-left px-4 py-3 font-semibold">What They Own</th>
                <th className="text-left px-4 py-3 font-semibold">Omnisavant's Edge</th>
                <th className="text-left px-4 py-3 font-semibold">Omnisavant's Gap</th>
                <th className="text-left px-4 py-3 font-semibold w-52">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr key={c.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 align-top">
                    <span className="font-semibold text-gray-900">{c.name}</span>
                  </td>
                  <td className="px-4 py-4 align-top text-gray-600 text-xs leading-relaxed">{c.owns}</td>
                  <td className="px-4 py-4 align-top text-gray-700 text-xs leading-relaxed">{c.edge}</td>
                  <td className="px-4 py-4 align-top text-gray-600 text-xs leading-relaxed">{c.gap}</td>
                  <td className="px-4 py-4 align-top">
                    <div className={`rounded-lg border px-3 py-2 text-xs leading-relaxed ${verdictBg[c.verdictType]}`}>
                      <div className="flex items-center gap-1.5 mb-1">
                        {verdictIcon[c.verdictType]}
                        <span className="font-semibold text-gray-800 capitalize">{c.verdictType}</span>
                      </div>
                      <p className="text-gray-700">{c.verdict}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COMPETITIVE SCATTER */}
      <section>
        <SectionLabel number="↳" title="Competitive Positioning Map" />
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Plotted on two axes that matter: how much of the enterprise data universe each player can see, and how hard they are to remove. The green zone is Omnisavant's destination — high coverage, high lock-in. Nobody else is there.
        </p>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <CompetitiveScatter />
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-100 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-900 opacity-60 border border-gray-900" style={{borderStyle:'dashed'}} />
              <span className="text-xs text-gray-500">Omnisavant today — high data coverage potential, low lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-gray-900" />
              <span className="text-xs text-gray-500">Omnisavant 2028 target — uncontested zone</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MOAT ARCHITECTURE */}
      <section>
        <SectionLabel number="04" title="The Moat Architecture — Honest Assessment" />
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          Six moats. Honest current state. Sequenced by when they must be built — not when they'd be convenient.
        </p>
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          {Object.entries(statusConfig).map(([k, v]) => (
            <div key={k} className={`text-xs px-2 py-1 rounded-full border font-medium ${v.color}`}>{v.label}</div>
          ))}
        </div>
        <div className="space-y-3">
          {moats.map((m) => {
            const sc = statusConfig[m.status];
            return (
              <div key={m.id} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-gray-400">#{m.id}</span>
                      <span className="text-sm font-bold text-gray-900">{m.name}</span>
                      <span className="text-xs text-gray-400">—</span>
                      <span className="text-xs text-gray-500 italic">{m.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${sc.color}`}>{sc.label}</span>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">→ {m.phase}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{m.current}</p>
                <div className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-xs font-semibold text-gray-700">{m.verdict}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Radar chart */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-bold text-gray-900">Moat Readiness — Current vs. Full Potential</p>
              <p className="text-xs text-gray-500 mt-0.5">Scored 0–10. Dark polygon = where Omnisavant is today. Green = what the architecture is capable of.</p>
            </div>
          </div>
          <RadarChart />
          <p className="text-xs text-gray-400 text-center mt-2">
            The gap is not technology. It is sequencing, narrative, and product decisions made in the next 90 days.
          </p>
        </div>

        {/* Sequencing visual */}
        <div className="mt-8 rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-900 text-white px-5 py-3">
            <p className="text-sm font-semibold">Build Sequence</p>
            <p className="text-xs text-gray-400 mt-0.5">Start with what makes individual customers impossible to churn → then organizations → then competitors</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {[
              { phase: 'Now  (0–6 months)', moats: ['#1 Organizational Memory', '#2 Signal-to-Action Loop', '#5 Vertical Specialization', '#6 Compliance Architecture'] },
              { phase: 'Months 6–18', moats: ['#3 Cross-Team Network Effect', '#4 Workflow Embedding'] },
              { phase: 'Months 18–36', moats: ['All moats compounding', 'Compliance as GTM wedge', 'Outcome-based pricing layer'] },
            ].map((col) => (
              <div key={col.phase} className="p-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">{col.phase}</p>
                <ul className="space-y-1.5">
                  {col.moats.map((m) => (
                    <li key={m} className="text-xs text-gray-700 flex items-start gap-1.5">
                      <span className="text-gray-400 mt-0.5">·</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — RISKS */}
      <section>
        <SectionLabel number="05" title="The Honest Risk Map" />
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Four risks, in descending order of urgency. The first two are existential if left unaddressed during the design partner phase.
        </p>
        <div className="space-y-3">
          {risks.map((r) => {
            const sc = severityConfig[r.severity];
            return (
              <div key={r.id} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 flex items-center gap-2 mt-0.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${sc.dot}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1.5">{r.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                  </div>
                  <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-medium ml-auto ${r.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {sc.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6 — THE CHOICE */}
      <section>
        <SectionLabel number="06" title="The Closing Frame" />
        <div className="rounded-xl border border-gray-900 bg-gray-900 text-white p-8">
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-widest font-semibold">The choice every early-stage AI company faces</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg border border-gray-600 bg-gray-800 p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">The easy version</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">An AI layer that makes unstructured customer data useful. Competes with Chattermill, Intercom, Gainsight. Crowded market, mature procurement criteria, discretionary budget, replaceable at renewal.</p>
            </div>
            <div className="rounded-lg border border-emerald-600 bg-gray-800 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">The defensible version</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">Organizational decision memory infrastructure. No direct comp set. After 24 months, contains the org's complete signal-to-decision-to-outcome history. Removing Omnisavant is an act of institutional self-harm.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 space-y-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              The winners in AI don't win on AI — Harvey won on workflow depth, Sierra on pricing alignment, Cursor on muscle memory. This choice is rarely made in a strategy session. It's made through small product decisions: Salesforce connector or MCP authorization; dashboard or Slack signal; per-seat pricing or revenue tied to accounts saved.
            </p>
            <div className="rounded-lg border border-violet-700 bg-gray-800 p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                The model is no longer the product. <span className="text-white font-semibold">The product is the enterprise-native layer built on top of it</span> — compliance from day zero, targeting CCOs not VP Product, and a system so embedded that after two years, removing it means losing institutional memory, audit trails, and calibrated signal history no vendor can restore. <span className="text-white font-semibold">That moat has to be built from the first line of code.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM PADDING */}
      <div className="h-8" />
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <span className="text-2xl font-black text-gray-200 leading-none">{number}</span>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    </div>
  );
}
