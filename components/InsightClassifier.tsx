'use client';

import { Lightbulb, ArrowRight } from 'lucide-react';

interface Insight {
  category: string;
  insight: string;
  implication: string;
  signal: string;
}

export default function InsightClassifier({ insights }: { insights: Insight[] }) {
  const categoryColors: { [key: string]: string } = {
    'Pricing Revolution': 'bg-electric/20 border-electric text-electric',
    'Technical Moat Shift': 'bg-neon-purple/20 border-neon-purple text-neon-purple',
    'Human Layer Paradox': 'bg-neon-pink/20 border-neon-pink text-neon-pink',
    'Capital Concentration': 'bg-amber-500/20 border-amber-500 text-amber-400',
    'Exit Landscape Shift': 'bg-red-500/20 border-red-500 text-red-400',
    'Counterintuitive Winner': 'bg-green-500/20 border-green-500 text-green-400',
  };

  return (
    <div className="glass-card p-8">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-yellow-400" size={32} />
        <div>
          <h2 className="text-2xl font-bold">Strategic Intelligence Classification</h2>
          <p className="text-gray-500 text-sm">Key patterns from movers & shakers — modus operandi analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:border-electric/50 hover:shadow-md transition-all group bg-white">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${categoryColors[item.category]}`}>
              {item.category}
            </div>

            <h3 className="font-bold text-lg mb-2 group-hover:text-electric transition-colors">
              {item.insight}
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <div className="text-gray-400 uppercase text-xs mb-1 flex items-center gap-1">
                  <ArrowRight size={12} /> Implication
                </div>
                <p className="text-gray-700">{item.implication}</p>
              </div>

              <div>
                <div className="text-gray-400 uppercase text-xs mb-1 flex items-center gap-1">
                  <ArrowRight size={12} /> Signal Strength
                </div>
                <p className="text-gray-700 font-mono text-xs bg-gray-50 p-2 rounded border border-gray-100">{item.signal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
