export interface Company {
  name: string;
  valuation: string;
  arr: string;
  founded: number;
  moatArchetype: string[];
  pricingStrategy: string;
  keyTactic: string;
  defensibilityScore: number;
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  companies: string[];
  counterintuitive: boolean;
  impactLevel: 'high' | 'medium' | 'low';
}

export interface MoatPattern {
  id: string;
  name: string;
  timeToReplication: string;
  switchingCostLevel: 'extreme' | 'high' | 'medium' | 'low';
  examples: string[];
  description: string;
}

export const companies: Company[] = [
  {
    name: 'Cursor',
    valuation: '$29.3B',
    arr: '$1B+',
    founded: 2022,
    moatArchetype: ['Workflow Orchestration', 'Proprietary Model', 'Data Flywheel'],
    pricingStrategy: 'Subscription + Usage',
    keyTactic: 'VS Code fork + codebase-aware context deepening with use',
    defensibilityScore: 95
  },
  {
    name: 'Sierra',
    valuation: '$10B',
    arr: '$100M',
    founded: 2023,
    moatArchetype: ['Outcome Pricing', 'Workflow Embedding'],
    pricingStrategy: 'Outcome-based ($1.50/resolution)',
    keyTactic: 'Counter-positioning against seat-based incumbents',
    defensibilityScore: 88
  },
  {
    name: 'Harvey',
    valuation: '$11B',
    arr: '$195M',
    founded: 2022,
    moatArchetype: ['Multi-Model Orchestration', 'Workflow Depth', 'Human-in-Loop'],
    pricingStrategy: 'Enterprise Premium',
    keyTactic: 'Scrapped proprietary model for orchestration layer',
    defensibilityScore: 92
  },
  {
    name: 'Mercor',
    valuation: 'Undisclosed',
    arr: '$450M+',
    founded: 2023,
    moatArchetype: ['Network Effects', 'Proprietary Data'],
    pricingStrategy: 'Marketplace Commission',
    keyTactic: 'Two-sided network (300K+ experts) + performance data',
    defensibilityScore: 85
  },
  {
    name: 'Hebbia',
    valuation: '$700M',
    arr: 'Undisclosed (2%+ of OpenAI API)',
    founded: 2020,
    moatArchetype: ['Cross-Vertical Data', 'Workflow Orchestration'],
    pricingStrategy: 'Usage-based',
    keyTactic: 'Service-as-software across finance/law/gov/pharma',
    defensibilityScore: 82
  },
  {
    name: 'Abridge',
    valuation: '$850M+',
    arr: 'Undisclosed',
    founded: 2018,
    moatArchetype: ['Human-in-Loop', 'Data Flywheel', 'Compliance Native'],
    pricingStrategy: 'Per-encounter + expansion',
    keyTactic: 'Doctor edits = training data + compliance audit trails',
    defensibilityScore: 90
  },
  {
    name: 'Glean',
    valuation: '$4.6B',
    arr: 'Undisclosed',
    founded: 2019,
    moatArchetype: ['Per-Customer Knowledge Graph', 'Workflow Embedding'],
    pricingStrategy: 'Seat-based Premium',
    keyTactic: 'Client-specific models learning institutional language',
    defensibilityScore: 87
  },
  {
    name: 'Dust',
    valuation: '$100M+',
    arr: 'Undisclosed ($110K/employee)',
    founded: 2022,
    moatArchetype: ['Multi-Agent Architecture', 'Capital Efficiency'],
    pricingStrategy: 'Seat-based',
    keyTactic: 'Model-agnostic narrow agents + 70% weekly adoption',
    defensibilityScore: 78
  },
  {
    name: 'Browserbase',
    valuation: '$300M',
    arr: 'Undisclosed',
    founded: 2023,
    moatArchetype: ['Infrastructure Primitive', 'Developer Platform'],
    pricingStrategy: 'Usage-based (per session)',
    keyTactic: 'Twilio for headless browsers - every agent needs it',
    defensibilityScore: 84
  },
  {
    name: 'Crescendo.ai',
    valuation: 'Undisclosed',
    arr: '$91M',
    founded: 2024,
    moatArchetype: ['Hybrid Human-AI', 'Outcome Pricing'],
    pricingStrategy: 'Outcome ($1.25/resolution)',
    keyTactic: 'Acquired BPO firm for guaranteed 100% resolution',
    defensibilityScore: 86
  },
  {
    name: 'Greenlite',
    valuation: 'Undisclosed',
    arr: 'Undisclosed',
    founded: 2023,
    moatArchetype: ['Compliance Native', 'Domain Data'],
    pricingStrategy: 'Enterprise licensing',
    keyTactic: 'Years of AML/KYC data iteration impossible to replicate',
    defensibilityScore: 89
  },
  {
    name: 'Filevine',
    valuation: 'Undisclosed',
    arr: 'Undisclosed',
    founded: 2015,
    moatArchetype: ['Workflow Orchestration', 'System of Record'],
    pricingStrategy: 'Subscription + modules',
    keyTactic: '10 years building legal OS before adding AI layer',
    defensibilityScore: 91
  }
];

export const strategies: Strategy[] = [
  {
    id: 'data-trojan',
    title: 'Data Trojan Horse Wedge',
    description: 'Narrow focus on single painful problem for hero user → capture proprietary data → expand. Clay: 6 years building foundation, then $1M to $100M ARR in 2 years.',
    companies: ['Clay', 'Glean', 'Filevine'],
    counterintuitive: true,
    impactLevel: 'high'
  },
  {
    id: 'charge-more',
    title: 'Charge More, Not Less',
    description: 'Premium pricing signals specificity. Harvey commands enterprise premiums. Chargeflow charges 25% of recovered chargebacks - absurd by SaaS standards, perfect by value alignment.',
    companies: ['Harvey', 'Chargeflow', 'Microsoft Copilot'],
    counterintuitive: true,
    impactLevel: 'high'
  },
  {
    id: 'human-advantage',
    title: 'Human Layer as Advantage',
    description: 'AI for 80%, elite humans for critical 20%. Crescendo acquired entire BPO operation. Harder to scale = harder to copy.',
    companies: ['Arcline', 'Crescendo.ai', 'Abridge'],
    counterintuitive: true,
    impactLevel: 'medium'
  },
  {
    id: 'compliance-offense',
    title: 'Compliance as Offense',
    description: 'Enter through unglamorous compliance door (overworked teams, regulatory pressure, no budget). Once embedded in compliance workflows, expansion follows.',
    companies: ['Greenlite', 'Parcha', 'Abridge'],
    counterintuitive: true,
    impactLevel: 'high'
  },
  {
    id: 'anti-hype',
    title: 'Anti-Hype Positioning',
    description: 'As bubble fears rise, accuracy/transparency/domain depth beats AI spectacle. "100% LLM-Free" products. Abridge\'s Linked Evidence sells better than chatbot demos.',
    companies: ['Abridge', 'Glean'],
    counterintuitive: true,
    impactLevel: 'medium'
  },
  {
    id: 'decision-traces',
    title: 'Decision Traces as Data Moat',
    description: 'AI agent workflows create structured decision traces - living record of how context turned into action. Enterprises never had this data; once they do, it\'s irreplaceable.',
    companies: ['Harvey', 'Glean', 'Greenlite'],
    counterintuitive: false,
    impactLevel: 'high'
  },
  {
    id: 'outcome-pricing',
    title: 'Outcome-Based Pricing Revolution',
    description: 'Per-seat pricing dropped 21% → 15% in 12 months. Outcome pricing ($1.50/resolution) creates structural counter-position. Value-anchored when token costs drop.',
    companies: ['Sierra', 'Decagon', 'Crescendo.ai', 'Intercom'],
    counterintuitive: false,
    impactLevel: 'high'
  },
  {
    id: 'orchestration-not-model',
    title: 'Orchestration Over Model Quality',
    description: 'Harvey scrapped proprietary model when frontier models outperformed it. Pivoted to multi-model orchestration. Revenue accelerated 3.9x YoY. Model defensibility is fragile; system defensibility persists.',
    companies: ['Harvey', 'TrueFoundry', 'Martian'],
    counterintuitive: false,
    impactLevel: 'high'
  }
];

export const moatPatterns: MoatPattern[] = [
  {
    id: 'workflow-flywheel',
    name: 'Workflow Orchestration + Data Flywheel',
    timeToReplication: '2-5 years',
    switchingCostLevel: 'extreme',
    examples: ['Filevine', 'Glean', 'Harvey'],
    description: 'Embedded in daily workflows, capturing proprietary decision data with every use. Deepens institutional knowledge over time.'
  },
  {
    id: 'hardware-data',
    name: 'Hardware-Enabled Data Capture',
    timeToReplication: '3-7 years',
    switchingCostLevel: 'extreme',
    examples: ['Inspiren (AI sensors)', 'Doxel (construction CV)'],
    description: 'Capital-intensive physical moats. Requires hardware deployment at scale to generate proprietary datasets.'
  },
  {
    id: 'unique-data-domain',
    name: 'Unique Data Capture + Domain Training',
    timeToReplication: '1-3 years',
    switchingCostLevel: 'high',
    examples: ['Turing Labs (GoPro workers)', 'Fyxer (4:1 EA:engineer ratio)'],
    description: 'Domain-specific data no web scraper can provide. Compound effects as edge cases accumulate.'
  },
  {
    id: 'multi-model-routing',
    name: 'Multi-Model Routing & Orchestration',
    timeToReplication: '6-18 months',
    switchingCostLevel: 'medium',
    examples: ['TrueFoundry LLM Gateway', 'Martian', 'Harvey'],
    description: 'Moderate defensibility. Growing importance as model landscape fragments. 40% cost reduction through learned routing.'
  },
  {
    id: 'human-in-loop',
    name: 'Human-in-the-Loop Compliance',
    timeToReplication: '2-4 years',
    switchingCostLevel: 'extreme',
    examples: ['Abridge', 'Greenlite', 'Crescendo.ai'],
    description: 'Regulated industries require human oversight. Retraining thousands of professionals = invisible but enormous switching cost.'
  },
  {
    id: 'outcome-pricing-model',
    name: 'Outcome-Based Pricing Architecture',
    timeToReplication: '1-2 years',
    switchingCostLevel: 'high',
    examples: ['Sierra', 'Decagon', 'Chargeflow'],
    description: 'Counter-positions incumbents trapped in seat-based models. Requires accuracy guarantees and risk tolerance.'
  },
  {
    id: 'infrastructure-primitive',
    name: 'Infrastructure Primitive',
    timeToReplication: '2-4 years',
    switchingCostLevel: 'high',
    examples: ['Browserbase', 'TrueFoundry'],
    description: 'Every AI agent company becomes potential customer. Network effects from developer adoption.'
  },
  {
    id: 'customer-knowledge-graph',
    name: 'Per-Customer Knowledge Graph',
    timeToReplication: '1-3 years',
    switchingCostLevel: 'high',
    examples: ['Glean', 'Harvey'],
    description: 'Client-specific models learning institutional language, code names, terminology. Invisible switching costs compound monthly.'
  }
];

export const defensibilityTiers = {
  tier1: {
    name: 'Foundation (Necessary but Insufficient)',
    criteria: [
      'Execution speed',
      'Domain expertise',
      'AI engineering beyond API wrappers'
    ],
    description: 'Gets you into the game but doesn\'t keep you there'
  },
  tier2: {
    name: 'Emerging Moats',
    criteria: [
      'Workflow integration depth (embedded in daily work vs occasional use)',
      'Human-in-the-loop design creating calibration investment',
      'Compliance-native architecture (built-in vs bolted-on)',
      'Counter-positioning through pricing exploiting incumbent weaknesses'
    ],
    description: 'Creates initial stickiness and differentiation'
  },
  tier3: {
    name: 'Compounding Moats (True Durability)',
    criteria: [
      'Proprietary data loops (usage generates non-replicable training data)',
      'Process power (99% Rule: production-grade takes 10-100x MVP effort)',
      'Cornered resources (gov contracts, security clearances)',
      'Network effects (each customer improves product for all)',
      'Combined human-technical switching costs (retrain people + migrate data)'
    ],
    description: 'Sits in execution path, captures proprietary decision data, prices on outcomes, embeds human oversight'
  }
};

export const keyInsights = [
  {
    category: 'Pricing Revolution',
    insight: 'Seat-based pricing collapsed from 21% to 15% in 12 months',
    implication: 'Good AI reduces headcount. Outcome pricing creates structural counter-position.',
    signal: 'Sierra: $100M ARR in 7 quarters at $1.50/resolution'
  },
  {
    category: 'Technical Moat Shift',
    insight: 'Harvey scrapped proprietary vertical model for multi-model orchestration',
    implication: 'Model-level defensibility is fragile. System-level defensibility persists.',
    signal: 'Revenue accelerated 3.9x YoY post-pivot'
  },
  {
    category: 'Human Layer Paradox',
    insight: 'Human oversight creates deepest switching costs in regulated industries',
    implication: 'Retraining thousands of professionals across institutions = invisible moat',
    signal: 'Abridge: 6,700 physicians at Johns Hopkins calibrated to specific interface'
  },
  {
    category: 'Capital Concentration',
    insight: '58% of $202B in AI funding went to megarounds $500M+',
    implication: 'Bifurcating market: tiny elite vs existential margin pressure for middle',
    signal: '90% of AI startups fail within 5 years vs 70% traditional tech'
  },
  {
    category: 'Exit Landscape Shift',
    insight: 'License & Acquihire becomes dominant exit (Inflection, Character.AI, Adept)',
    implication: 'Build moats deep enough to stay independent or accept talent extraction',
    signal: 'Microsoft $650M for Inflection IP + Suleyman; Adept down to ~4 people'
  },
  {
    category: 'Counterintuitive Winner',
    insight: 'Mercor grew from $75M to $450M+ ARR in 7 months',
    implication: 'Two-sided networks + proprietary performance data = explosive growth',
    signal: '$6M profit in H1 2025 (rare for hyper-growth AI)'
  }
];
