'use client';

import { Shield, Clock, Lock, Zap } from 'lucide-react';
import type { MoatPattern, Company } from '@/data/insights';

interface Props {
  patterns: MoatPattern[];
  companies: Company[];
}

export default function MoatArchetypeGrid({ patterns, companies }: Props) {
  const getSwitchingCostColor = (level: string) => {
    const colors = {
      extreme: 'text-red-700 bg-red-50 border-red-400',
      high: 'text-orange-700 bg-orange-50 border-orange-400',
      medium: 'text-yellow-700 bg-yellow-50 border-yellow-400',
      low: 'text-green-700 bg-green-50 border-green-400',
    };
    return colors[level as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Shield className="text-neon-purple" size={36} />
          Moat Archetype Analysis
        </h2>
        <p className="text-gray-500">
          How top companies are building structural defensibility — ranked by time to replication & switching costs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {patterns
          .sort((a, b) => {
            const switchingOrder = { extreme: 4, high: 3, medium: 2, low: 1 };
            return switchingOrder[b.switchingCostLevel] - switchingOrder[a.switchingCostLevel];
          })
          .map((pattern) => {
            const companiesUsingPattern = companies.filter(c =>
              pattern.examples.some(ex => c.name.includes(ex.split(' ')[0]))
            );

            return (
              <div key={pattern.id} className="glass-card p-6 hover:glow-electric transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-electric transition-colors">
                    {pattern.name}
                  </h3>
                  <Shield className="text-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                </div>

                <p className="text-gray-600 text-sm mb-4">{pattern.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={16} className="text-cyber-teal" />
                      <span className="text-xs text-gray-500 uppercase">Time to Replicate</span>
                    </div>
                    <div className="text-lg font-bold text-cyber-teal">{pattern.timeToReplication}</div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Lock size={16} className="text-neon-pink" />
                      <span className="text-xs text-gray-500 uppercase">Switching Cost</span>
                    </div>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-bold border ${getSwitchingCostColor(pattern.switchingCostLevel)}`}>
                      {pattern.switchingCostLevel.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-xs text-gray-500 uppercase mb-2 flex items-center gap-1">
                    <Zap size={12} /> Examples in Action
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pattern.examples.map((example, idx) => (
                      <span key={idx} className="text-xs bg-electric/20 text-electric px-2 py-1 rounded-full border border-electric/50">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {companiesUsingPattern.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500 uppercase mb-2">Defensibility Scores</div>
                    <div className="flex flex-wrap gap-2">
                      {companiesUsingPattern.map(company => (
                        <div key={company.name} className="text-xs bg-gray-100 px-3 py-1 rounded">
                          <span className="text-gray-600">{company.name}:</span>{' '}
                          <span className="font-bold text-neon-pink">{company.defensibilityScore}/100</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
