import React, { useState } from 'react'
import {
  Calculator,
  Sparkles,
  Check,
  ArrowRight,
  ShieldAlert,
  Users,
  Clock,
  Zap,
  Cpu,
  Layers,
} from 'lucide-react'


interface ProjectEstimatorProps {
  onApplyEstimate: (scopeSummary: string, budgetEstimate: string) => void
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<string>('enterprise-web')
  const [scale, setScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth')
  const [timeline, setTimeline] = useState<'standard' | 'accelerated' | 'critical'>('accelerated')
  const [includeBunnyCdn, setIncludeBunnyCdn] = useState<boolean>(true)
  const [includeAiAgent, setIncludeAiAgent] = useState<boolean>(true)
  const [includeSoc2, setIncludeSoc2] = useState<boolean>(false)
  const [multiRegion, setMultiRegion] = useState<boolean>(true)

  // Pricing Matrix Logic
  const basePrices: Record<string, { min: number; max: number; baseWeeks: number; title: string }> = {
    'enterprise-web': { min: 28000, max: 55000, baseWeeks: 8, title: 'Enterprise Web & Apps (TypeScript + TanStack)' },
    'ai-platform': { min: 38000, max: 78000, baseWeeks: 10, title: 'Private AI & GenAI Inference Pipelines' },
    'cloud-k8s': { min: 25000, max: 52000, baseWeeks: 7, title: 'Multi-Cloud Kubernetes & GitOps Migration' },
    'cybersecurity': { min: 20000, max: 42000, baseWeeks: 6, title: 'Zero-Trust Architecture & SOC 2 Hardening' },
    'full-transformation': { min: 65000, max: 135000, baseWeeks: 14, title: 'Full Enterprise Digital Re-Architecture' },
  }

  const selectedBase = basePrices[projectType] || basePrices['enterprise-web']

  // Multipliers & Add-ons
  let minCost = selectedBase.min
  let maxCost = selectedBase.max
  let weeks = selectedBase.baseWeeks

  if (scale === 'growth') {
    minCost *= 1.3
    maxCost *= 1.35
    weeks += 2
  } else if (scale === 'enterprise') {
    minCost *= 1.8
    maxCost *= 1.95
    weeks += 4
  }

  if (includeBunnyCdn) {
    minCost += 4000
    maxCost += 8000
    weeks += 1
  }

  if (includeAiAgent) {
    minCost += 9000
    maxCost += 18000
    weeks += 2
  }

  if (includeSoc2) {
    minCost += 7500
    maxCost += 14000
    weeks += 2
  }

  if (multiRegion) {
    minCost += 6000
    maxCost += 12000
    weeks += 1
  }

  if (timeline === 'accelerated') {
    weeks = Math.max(4, Math.round(weeks * 0.75))
    minCost *= 1.15
    maxCost *= 1.15
  } else if (timeline === 'critical') {
    weeks = Math.max(3, Math.round(weeks * 0.55))
    minCost *= 1.35
    maxCost *= 1.35
  }

  const formattedMin = `$${Math.round(minCost / 1000)}k`
  const formattedMax = `$${Math.round(maxCost / 1000)}k`
  const budgetString = `${formattedMin} – ${formattedMax} USD`

  const handleBookScope = () => {
    const summary = `${selectedBase.title} (${scale.toUpperCase()} Scale, ${weeks}wks delivery, Bunny CDN: ${
      includeBunnyCdn ? 'Yes' : 'No'
    }, AI RAG: ${includeAiAgent ? 'Yes' : 'No'}, SOC2: ${includeSoc2 ? 'Yes' : 'No'})`
    onApplyEstimate(summary, budgetString)
  }

  return (
    <section id="estimator" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0052cb] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Enterprise Scoping
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Interactive Project Cost &{' '}
            <span className="text-[#0052cb]">Timeline Estimator</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Configure your technical requirements to generate a real-world scope estimate, team composition, and delivery roadmap in seconds.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="mt-14 bg-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-100">
            {/* Step 1: Core Architecture Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Primary Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'enterprise-web', label: 'Web & Mobile Applications', icon: Layers, desc: 'High-performance scalable applications' },
                  { id: 'ai-platform', label: 'Enterprise AI & Automation', icon: Cpu, desc: 'Automated intelligence & custom AI models' },
                  { id: 'cloud-k8s', label: 'Cloud Infrastructure & DevOps', icon: Zap, desc: 'Elastic scaling & zero-downtime deployment' },
                  { id: 'cybersecurity', label: 'Enterprise Security & Compliance', icon: ShieldAlert, desc: 'SOC 2, ISO standards & penetration testing' },
                  { id: 'full-transformation', label: 'Full Digital Re-Architecture', icon: Sparkles, desc: 'End-to-end modernization & legacy migration' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        projectType === item.id
                          ? 'border-[#0052cb] bg-blue-50/60 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${projectType === item.id ? 'text-[#0052cb]' : 'text-slate-400'}`} />
                        <span className="text-xs font-bold text-slate-900">{item.label}</span>
                      </div>
                      <div className="mt-1 text-[11px] text-slate-500 font-medium">{item.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: System Scale & Traffic */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                2. Target Scale &amp; Traffic Volume
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', title: 'Launch Stage', note: 'Up to 50k Users' },
                  { id: 'growth', title: 'Growth Tier', note: '50k–500k Active Users' },
                  { id: 'enterprise', title: 'Global Enterprise', note: 'High Concurrency' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id as any)}
                    className={`py-3 px-3 rounded-xl text-center border transition-all cursor-pointer ${
                      scale === s.id
                        ? 'border-[#0052cb] bg-[#0052cb] text-white shadow-md'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{s.title}</div>
                    <div className={`text-[10px] mt-0.5 ${scale === s.id ? 'text-blue-100' : 'text-slate-400'}`}>
                      {s.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Architecture Add-Ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                3. Architecture Add-Ons &amp; Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    state: includeBunnyCdn,
                    setter: setIncludeBunnyCdn,
                    title: 'Global Edge CDN & Speed Acceleration',
                    desc: '120+ Anycast PoPs & sub-15ms worldwide loading',
                  },
                  {
                    state: includeAiAgent,
                    setter: setIncludeAiAgent,
                    title: 'Custom Enterprise AI & Search Engine',
                    desc: 'Fast semantic search on proprietary company data',
                  },
                  {
                    state: includeSoc2,
                    setter: setIncludeSoc2,
                    title: 'SOC 2 & Enterprise Security Audit',
                    desc: 'Audit-ready security policies & proactive monitoring',
                  },
                  {
                    state: multiRegion,
                    setter: setMultiRegion,
                    title: 'High-Availability Disaster Recovery',
                    desc: 'Automated database replication & instant failover',
                  },
                ].map((addon, idx) => (
                  <div
                    key={idx}
                    onClick={() => addon.setter(!addon.state)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-start gap-3 transition-colors ${
                      addon.state ? 'bg-blue-50/50 border-blue-300' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        addon.state ? 'bg-[#0052cb] text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {addon.state && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{addon.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{addon.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                4. Delivery Urgency &amp; Target Pace
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', title: 'Standard Cadence', badge: 'Standard Agile Pod' },
                  { id: 'accelerated', title: 'Accelerated Sprint', badge: 'Dedicated Tech Leads' },
                  { id: 'critical', title: 'High-Priority Sprint', badge: 'Expanded Senior Pod' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.id as any)}
                    className={`py-3 px-3 rounded-xl text-center border transition-all ${
                      timeline === t.id
                        ? 'border-[#0052cb] bg-blue-50 text-[#0052cb] font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="text-xs">{t.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{t.badge}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Live Results Column (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-10 bg-gradient-to-b from-blue-50/60 to-white flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0052cb] text-white text-[11px] font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Live Scope Estimate
              </div>

              {/* Estimated Budget */}
              <div className="mb-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Estimated Investment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0052cb] mt-1 font-mono">
                  {budgetString}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Fixed-scope milestone contract or dedicated pod pricing
                </p>
              </div>

              {/* Delivery Duration */}
              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-slate-400">Target Delivery</div>
                    <div className="text-lg font-bold text-slate-900 font-mono">
                      ~ {weeks} Weeks
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  Sprint Ready
                </span>
              </div>

              {/* Squad Composition */}
              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#0052cb]" />
                  Dedicated Pod Composition
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Principal Cloud Architect</span>
                    <span className="font-semibold text-slate-900">1x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Senior TypeScript/TanStack Lead</span>
                    <span className="font-semibold text-slate-900">{scale === 'enterprise' ? '2x' : '1x'}</span>
                  </div>
                  {includeAiAgent && (
                    <div className="flex justify-between">
                      <span>AI/ML RAG Specialist</span>
                      <span className="font-semibold text-[#0052cb]">1x</span>
                    </div>
                  )}
                  {includeBunnyCdn && (
                    <div className="flex justify-between">
                      <span>Edge CDN & Performance Engineer</span>
                      <span className="font-semibold text-slate-900">1x</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>DevOps & SecOps Engineer</span>
                    <span className="font-semibold text-slate-900">1x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Senior QA & Automation</span>
                    <span className="font-semibold text-slate-900">1x</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-6 border-t border-slate-200">
              <button
                onClick={handleBookScope}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0052cb] text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:bg-[#003da8] active:scale-95 transition-all"
              >
                <span>Lock In Scope & Book Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2.5 text-center text-[11px] text-slate-400">
                Auto-fills contact form with your calculated architecture scope.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
