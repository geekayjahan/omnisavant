'use client';

import { useState } from 'react';
import { Target, Zap, Shield, TrendingUp, Brain, Lock, FileText, Wand2 } from 'lucide-react';
import { companies, strategies, moatPatterns, keyInsights, defensibilityTiers } from '@/data/insights';
import MoatArchetypeGrid from '@/components/MoatArchetypeGrid';
import StrategyPlaybook from '@/components/StrategyPlaybook';
import CompanyIntelligence from '@/components/CompanyIntelligence';
import InsightClassifier from '@/components/InsightClassifier';
import DefensibilityRadar from '@/components/DefensibilityRadar';
import MoatAnalysis from '@/components/MoatAnalysis';
import MagicWand from '@/components/MagicWand';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<'overview' | 'moats' | 'strategies' | 'companies' | 'moat-analysis' | 'magic-wand'>('overview');

  const views = [
    { id: 'overview', label: 'Intelligence Overview', icon: Brain },
    { id: 'moats', label: 'Moat Patterns', icon: Shield },
    { id: 'strategies', label: 'Strategic Playbooks', icon: Target },
    { id: 'companies', label: 'Company Analysis', icon: TrendingUp },
    { id: 'moat-analysis', label: 'Moat Analysis', icon: FileText },
{ id: 'magic-wand', label: 'Magic Wand', icon: Wand2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                Omnisavant Strategic Intelligence
              </h1>
              <p className="text-gray-500 text-sm">
                Moat Analysis & Modus Operandi — How Movers & Shakers Build Defensibility
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="glass-card px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex gap-3">
          {views.map((view) => {
            const Icon = view.icon;
            return (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeView === view.id
                    ? 'bg-electric text-white glow-electric'
                    : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{view.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-8 pb-12">
        {activeView === 'overview' && (
          <div className="space-y-8">
            <InsightClassifier insights={keyInsights} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <DefensibilityRadar />
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="text-neon-purple" size={24} />
                  Defensibility Tiers Framework
                </h3>
                <div className="space-y-4">
                  {Object.entries(defensibilityTiers).map(([key, tier]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{tier.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{tier.description}</p>
                      <ul className="space-y-1">
                        {tier.criteria.map((criterion, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-electric">•</span>
                            <span className="text-gray-700">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Companies Analyzed', value: companies.length, icon: TrendingUp, color: 'electric' },
                { label: 'Strategic Patterns', value: strategies.length, icon: Target, color: 'neon-pink' },
                { label: 'Moat Archetypes', value: moatPatterns.length, icon: Shield, color: 'neon-purple' },
                { label: 'Key Insights', value: keyInsights.length, icon: Zap, color: 'cyber-teal' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`glass-card p-6 glow-${stat.color}`}>
                    <Icon className={`text-${stat.color} mb-3`} size={28} />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeView === 'moats' && <MoatArchetypeGrid patterns={moatPatterns} companies={companies} />}
        {activeView === 'strategies' && <StrategyPlaybook strategies={strategies} />}
        {activeView === 'companies' && <CompanyIntelligence companies={companies} />}
        {activeView === 'moat-analysis' && <MoatAnalysis />}
        {activeView === 'magic-wand' && <MagicWand />}
      </main>
    </div>
  );
}
