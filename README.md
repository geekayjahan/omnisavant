# Omnisavant Strategic Intelligence Dashboard

A next-generation strategic intelligence dashboard analyzing how AI movers & shakers build defensible moats. Focus on **insight classification**, **modus operandi analysis**, and **strategic patterns** — not market size metrics.

## 🎯 What This Dashboard Does

Unlike traditional dashboards that focus on market size and revenue metrics, this dashboard analyzes **HOW** companies are winning:

### Intelligence Modules

1. **Intelligence Overview**
   - Strategic insight classification across 6 key categories
   - Defensibility radar comparing top players vs emerging vs wrappers
   - Tiered defensibility framework analysis

2. **Moat Patterns**
   - 8 distinct moat archetypes ranked by switching cost & replication time
   - Analysis of workflow orchestration, data flywheels, human-in-loop systems
   - Real company examples with defensibility scores

3. **Strategic Playbooks**
   - 8 strategic patterns from successful movers
   - Counterintuitive strategies (charge more, human layer advantage, anti-hype)
   - Modus operandi breakdown: adoption difficulty, time to payoff, replication risk

4. **Company Intelligence**
   - Deep tactical analysis of 12 companies (Cursor, Harvey, Sierra, Abridge, etc.)
   - Filterable by moat archetype
   - Sortable by defensibility score, valuation, or founding year
   - Key tactical moves and pricing strategies

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Philosophy

**Cyberpunk Intelligence Aesthetic**
- Dark midnight blue background with electric blue, neon pink, and purple accents
- Glass morphism cards with glowing borders
- Gradient text for emphasis
- Responsive grid layouts optimized for insight density

**Information Architecture**
- **Not**: Generic market size charts
- **Instead**: Qualitative insight cards, pattern recognition, tactical playbook analysis
- **Focus**: How companies build moats, not how big the market is

## 📊 Data Structure

All intelligence extracted from research into structured TypeScript interfaces:

- **12 Companies**: Cursor, Sierra, Harvey, Mercor, Hebbia, Abridge, Glean, Dust, Browserbase, Crescendo, Greenlite, Filevine
- **8 Strategic Patterns**: Data Trojan Horse, Charge More Not Less, Human Layer Advantage, Compliance as Offense, etc.
- **8 Moat Archetypes**: Workflow + Data Flywheel, Hardware Data Capture, Multi-Model Orchestration, etc.
- **6 Key Insights**: Pricing Revolution, Technical Moat Shift, Human Layer Paradox, etc.

## 🔧 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Lucide React** - Icons

## 📁 Project Structure

```
omnisavant/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard
│   └── globals.css         # Global styles
├── components/
│   ├── InsightClassifier.tsx       # Strategic insights grid
│   ├── DefensibilityRadar.tsx      # Radar chart comparison
│   ├── MoatArchetypeGrid.tsx       # Moat pattern analysis
│   ├── StrategyPlaybook.tsx        # Strategic playbooks
│   └── CompanyIntelligence.tsx     # Company deep dives
├── data/
│   └── insights.ts         # Structured intelligence data
└── package.json
```

## 🎯 Use Cases for Omnisavant's Pivot

This dashboard serves as strategic intelligence for decision-making:

1. **Pattern Recognition**: Identify which moat-building strategies are most effective
2. **Competitive Intelligence**: Understand how top players differentiate beyond model quality
3. **Strategic Planning**: Apply counterintuitive strategies to your own pivot
4. **Defensibility Assessment**: Score potential approaches using the tier framework
5. **Pricing Strategy**: Learn from outcome-based pricing revolution

## 🔮 Key Takeaways Highlighted

- **Harvey's pivot from proprietary model to orchestration** → System defensibility > Model defensibility
- **Outcome-based pricing** → Counter-positions incumbents trapped in seat-based models
- **Human-in-loop compliance** → Creates invisible but extreme switching costs
- **Data Trojan Horse** → Narrow focus → proprietary data → expand
- **License & Acquihire exits** → Build deep moats or accept talent extraction

## 📈 Extending the Dashboard

To add new companies or strategies:

1. Edit `data/insights.ts`
2. Add to `companies[]`, `strategies[]`, or `moatPatterns[]` arrays
3. Follow existing TypeScript interfaces
4. Dashboard automatically updates

## 🎨 Customization

Color scheme defined in `tailwind.config.js`:
- `electric`: Blue accent (#3b82f6)
- `neon-pink`: Pink accent (#ec4899)
- `neon-purple`: Purple accent (#a855f7)
- `cyber-teal`: Teal accent (#06b6d4)

Modify these to match your brand.

## 📝 License

Proprietary - Omnisavant Strategic Intelligence

---

**Built for strategic decision-makers who care about HOW, not just WHAT.**
