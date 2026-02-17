'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Award, Filter } from 'lucide-react';
import type { Company } from '@/data/insights';

interface Props {
  companies: Company[];
}

export default function CompanyIntelligence({ companies }: Props) {
  const [sortBy, setSortBy] = useState<'defensibility' | 'valuation' | 'founded'>('defensibility');
  const [filterArchetype, setFilterArchetype] = useState<string>('all');

  const allArchetypes = Array.from(
    new Set(companies.flatMap(c => c.moatArchetype))
  ).sort();

  const filteredCompanies = companies.filter(c =>
    filterArchetype === 'all' || c.moatArchetype.includes(filterArchetype)
  );

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (sortBy === 'defensibility') return b.defensibilityScore - a.defensibilityScore;
    if (sortBy === 'founded') return b.founded - a.founded;
    return 0;
  });

  const getDefensibilityColor = (score: number) => {
    if (score >= 90) return 'text-green-700 bg-green-50';
    if (score >= 80) return 'text-yellow-700 bg-yellow-50';
    return 'text-orange-700 bg-orange-50';
  };

  return (
    <div className="space-y-6">
      <div className="glass-card p-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <TrendingUp className="text-cyber-teal" size={36} />
          Company Intelligence Grid
        </h2>
        <p className="text-gray-500 mb-6">
          Deep dive into how individual movers are building their moats — tactical execution analysis
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-electric text-gray-700"
            >
              <option value="defensibility">Sort by Defensibility Score</option>
              <option value="valuation">Sort by Valuation</option>
              <option value="founded">Sort by Founded Year</option>
            </select>
          </div>

          <select
            value={filterArchetype}
            onChange={(e) => setFilterArchetype(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-electric"
          >
            <option value="all">All Moat Archetypes</option>
            {allArchetypes.map(arch => (
              <option key={arch} value={arch}>{arch}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {sortedCompanies.map((company) => (
          <div key={company.name} className="glass-card p-6 hover:glow-electric transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold group-hover:text-electric transition-colors mb-1">
                  {company.name}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    Founded {company.founded}
                  </span>
                </div>
              </div>

              <div className={`px-4 py-2 rounded-lg font-bold text-center ${getDefensibilityColor(company.defensibilityScore)}`}>
                <div className="text-2xl">{company.defensibilityScore}</div>
                <div className="text-xs opacity-75">Defensibility</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-gray-500 uppercase mb-1">Valuation</div>
                <div className="text-lg font-bold text-neon-pink">{company.valuation}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div className="text-xs text-gray-500 uppercase mb-1">ARR</div>
                <div className="text-lg font-bold text-neon-purple">{company.arr}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs text-gray-500 uppercase mb-2 flex items-center gap-1">
                <DollarSign size={12} />
                Pricing Strategy
              </div>
              <div className="bg-electric/10 text-electric px-3 py-2 rounded-lg text-sm font-medium border border-electric/30">
                {company.pricingStrategy}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-xs text-gray-500 uppercase mb-2 flex items-center gap-1">
                <Award size={12} />
                Key Tactical Move
              </div>
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg italic border border-gray-100">
                "{company.keyTactic}"
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs text-gray-500 uppercase mb-2">Moat Archetype Mix</div>
              <div className="flex flex-wrap gap-2">
                {company.moatArchetype.map((archetype, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full border border-neon-purple/50 font-medium"
                  >
                    {archetype}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold mb-4">Portfolio Intelligence Summary</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-electric mb-1">
              {Math.round(sortedCompanies.reduce((acc, c) => acc + c.defensibilityScore, 0) / sortedCompanies.length)}
            </div>
            <div className="text-sm text-gray-500">Avg Defensibility</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink mb-1">
              {sortedCompanies.filter(c => c.defensibilityScore >= 90).length}
            </div>
            <div className="text-sm text-gray-500">Extreme Moats (90+)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple mb-1">
              {sortedCompanies.filter(c => c.pricingStrategy.includes('Outcome')).length}
            </div>
            <div className="text-sm text-gray-500">Outcome-Based Pricing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-teal mb-1">
              {sortedCompanies.filter(c => c.founded >= 2023).length}
            </div>
            <div className="text-sm text-gray-500">Founded 2023+</div>
          </div>
        </div>
      </div>
    </div>
  );
}
