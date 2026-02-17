'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import { Shield } from 'lucide-react';

export default function DefensibilityRadar() {
  const data = [
    { metric: 'Workflow Embedding', topCompanies: 95, emerging: 60, chatGPTWrappers: 20 },
    { metric: 'Data Flywheel', topCompanies: 90, emerging: 45, chatGPTWrappers: 15 },
    { metric: 'Switching Costs', topCompanies: 92, emerging: 55, chatGPTWrappers: 25 },
    { metric: 'Pricing Innovation', topCompanies: 88, emerging: 50, chatGPTWrappers: 30 },
    { metric: 'Compliance Native', topCompanies: 85, emerging: 40, chatGPTWrappers: 10 },
    { metric: 'Network Effects', topCompanies: 80, emerging: 35, chatGPTWrappers: 5 },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Shield className="text-electric" size={24} />
        Defensibility Profile Comparison
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        How top movers stack up vs emerging players vs ChatGPT wrappers
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fill: '#374151', fontSize: 12 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9ca3af' }} />
          <Radar
            name="Top Companies (Cursor, Harvey, Abridge)"
            dataKey="topCompanies"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
          <Radar
            name="Emerging Players"
            dataKey="emerging"
            stroke="#a855f7"
            fill="#a855f7"
            fillOpacity={0.3}
          />
          <Radar
            name="ChatGPT Wrappers"
            dataKey="chatGPTWrappers"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.2}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px' }}
            iconType="circle"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
