'use client';

import { useState } from 'react';
import { Target, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { Strategy } from '@/data/insights';

interface Props {
  strategies: Strategy[];
}

export default function StrategyPlaybook({ strategies }: Props) {
  const [filter, setFilter] = useState<'all' | 'counterintuitive' | 'high-impact'>('all');

  const filteredStrategies = strategies.filter(s => {
    if (filter === 'counterintuitive') return s.counterintuitive;
    if (filter === 'high-impact') return s.impactLevel === 'high';
    return true;
  });

  const getImpactColor = (level: string) => {
    const colors = {
      high: 'text-red-700 bg-red-50 border-red-400',
      medium: 'text-yellow-700 bg-yellow-50 border-yellow-400',
      low: 'text-green-700 bg-green-50 border-green-400',
    };
    return colors[level as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <Target className="text-neon-pink" size={36} />
          Strategic Playbooks from Movers & Shakers
        </h2>
        <p className="text-gray-500 mb-6">
          Tactical patterns and modus operandi — how winners are building defensibility
        </p>

        <div className="flex gap-3">
          {[
            { id: 'all', label: 'All Strategies', count: strategies.length },
            { id: 'counterintuitive', label: 'Counterintuitive Only', count: strategies.filter(s => s.counterintuitive).length },
            { id: 'high-impact', label: 'High Impact', count: strategies.filter(s => s.impactLevel === 'high').length },
          ].map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setFilter(id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === id
                  ? 'bg-neon-pink text-white glow-pink'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {label} <span className="opacity-60">({count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredStrategies.map((strategy) => (
          <div key={strategy.id} className="glass-card p-6 hover:glow-pink transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-neon-pink transition-colors">
                    {strategy.title}
                  </h3>
                  {strategy.counterintuitive && (
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-400">
                      <AlertCircle size={12} />
                      Counterintuitive
                    </span>
                  )}
                </div>
                <p className="text-gray-700">{strategy.description}</p>
              </div>

              <div className={`ml-4 px-3 py-1 rounded-full text-xs font-bold border ${getImpactColor(strategy.impactLevel)}`}>
                {strategy.impactLevel.toUpperCase()} IMPACT
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="text-xs text-gray-500 uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-400" />
                Companies Executing This Playbook
              </div>
              <div className="flex flex-wrap gap-2">
                {strategy.companies.map((company, idx) => (
                  <div key={idx} className="bg-neon-pink/10 text-neon-pink px-4 py-2 rounded-lg border border-neon-pink/30 text-sm font-medium">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Breakdown */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="text-xs text-gray-500 uppercase mb-2 flex items-center gap-2">
                <TrendingUp size={14} />
                Modus Operandi Analysis
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 text-xs mb-1">Adoption Difficulty</div>
                  <div className="font-semibold">
                    {strategy.counterintuitive ? 'High (Cultural Shift)' : 'Medium (Execution Risk)'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-1">Time to Payoff</div>
                  <div className="font-semibold">
                    {strategy.impactLevel === 'high' ? '12-24 months' : '6-12 months'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-1">Replication Risk</div>
                  <div className="font-semibold text-green-700">
                    {strategy.counterintuitive ? 'Low (Few Attempt)' : 'Medium'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
