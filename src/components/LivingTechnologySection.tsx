import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Layers,
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Workflow,
  Sparkles,
  ShieldCheck,
  Zap,
  Server,
  ShoppingBag,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

interface DefiningPillar {
  number: string
  title: string
  subtitle: string
  category: string
  tagline: string
  summary: string
  bullets: string[]
  badgeColor: string
}

const DEFINING_PILLARS: DefiningPillar[] = [
  {
    number: '01',
    title: 'Autonomous Architecture',
    subtitle: 'Software Engineered to Learn & Self-Heal',
    category: 'Core Architecture',
    tagline: 'High-availability cloud engineering combined with proactive automation.',
    summary: 'We combine robust software discipline with machine learning, building platforms that automatically optimize, prevent downtime, and scale effortlessly with your business.',
    bullets: [
      'Rock-Solid Stability: Clean architecture, automated testing, and guaranteed 99.99% uptime.',
      'Intelligent Automation: Self-tuning caching, automated anomaly detection, and predictive scaling.',
      'Proactive Self-Healing: Microservices that resolve bottlenecks before your users ever notice.',
    ],
    badgeColor: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'The CoVision Trifecta',
    subtitle: 'Engineering • Artificial Intelligence • Immersive Design',
    category: 'Unified Capabilities',
    tagline: 'When code, intelligence, and visual storytelling operate as one unified force.',
    summary: 'Engineering digitizes your operations, AI powers intelligent decision-making, and Immersive Design creates a memorable user experience that drives conversions.',
    bullets: [
      'Cross-Functional Synergy: Senior engineers, AI researchers, and UX designers work in unison.',
      'Connected Enterprise Data: Core business ERPs integrate seamlessly with customer touchpoints.',
      'Commercial Impact: Every system is architected for speed, clarity, and measurable business growth.',
    ],
    badgeColor: 'bg-emerald-500',
  },
  {
    number: '03',
    title: 'Enterprise eCommerce',
    subtitle: 'Sub-Second Checkout & High Concurrency',
    category: 'High-Velocity Commerce',
    tagline: 'High-converting digital storefronts, zero-downtime migrations, and automated operations.',
    summary: 'From headless commerce and multi-currency global stores to real-time ERP/warehouse sync and interactive 3D configurators that increase average order value.',
    bullets: [
      'Industry-Leading Platforms: Shopify Plus, Adobe Commerce, and custom headless architectures.',
      'Zero-Downtime Migration: Flawless customer, catalog, and SEO URL transfers with zero lost orders.',
      'Real-Time Integration: Direct synchronization with SAP, NetSuite, and warehouse logistics.',
    ],
    badgeColor: 'bg-indigo-500',
  },
  {
    number: '04',
    title: 'Global Edge Network',
    subtitle: 'Sub-15ms Worldwide Latency',
    category: 'Cloud Infrastructure',
    tagline: 'Global edge routing and high-performance Anycast acceleration across 120+ PoPs.',
    summary: 'Deliver instant page loads to users around the globe. Enterprise DDoS mitigation, smart caching, and next-gen asset compression eliminate bounce rates.',
    bullets: [
      'Lightning-Fast Global Reach: Sub-20ms median latency across the Americas, Europe, and Asia.',
      'Surge Protection: Effortlessly handles viral traffic spikes and major promotional events.',
      'Significant Cost Savings: Up to 50%+ reduction in cloud bandwidth and origin server costs.',
    ],
    badgeColor: 'bg-amber-500',
  },
  {
    number: '05',
    title: 'CoUI™ Design Standard',
    subtitle: 'Human-Centered Digital Experiences',
    category: 'Design Systems',
    tagline: 'Where behavioral psychology meets fluid, responsive micro-interactions.',
    summary: 'CoUI™ reduces cognitive friction and guides user action. Clean visual hierarchy, accessible contrast, and smooth feedback loops create products customers love.',
    bullets: [
      'The Proven I3D Process: Ideate, Investigate, Iterate, and Deliver with pixel-perfect precision.',
      'Higher Engagement: Intuitive workflows designed to boost user retention and conversion rates.',
      'Cross-Platform Harmony: Flawless consistency across desktop portals, tablets, and native mobile apps.',
    ],
    badgeColor: 'bg-violet-500',
  },
]

// Self-contained, highly interactive architectural canvas for each pillar (100% reliable, zero black boxes)
const PillarInteractiveCanvas: React.FC<{ pillarNumber: string; subtitle: string }> = ({
  pillarNumber,
  subtitle,
}) => {
  if (pillarNumber === '01') {
    return (
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#060D1E] via-[#09152E] to-[#111E42] p-5 flex flex-col justify-between border border-blue-500/20 group">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
          <span className="flex items-center gap-1.5 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-500/30 text-cyan-300">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>PARADIGM 01: LOGIC</span>
          </span>
          <span className="text-blue-300/90 bg-blue-950/70 px-2.5 py-0.5 rounded-md border border-blue-500/30 text-[10px]">
            ACID Compliant
          </span>
        </div>

        {/* Dynamic Interactive Core */}
        <div className="relative z-10 my-auto flex items-center justify-around gap-2 py-1">
          <div className="flex flex-col items-center">
            <div className="size-10 rounded-xl bg-blue-600/25 border border-blue-400/50 flex items-center justify-center text-blue-300 shadow-md shadow-blue-500/20">
              <Zap className="size-5 text-blue-400" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-200 mt-1">Deterministic</span>
            <span className="text-[8.5px] font-mono text-blue-300/70">0-Regression</span>
          </div>

          <div className="flex-1 flex flex-col items-center px-1">
            <div className="w-full flex items-center justify-between text-[8px] font-mono text-cyan-300/80 mb-1">
              <span>SYNAPSE</span>
              <span>EQUILIBRIUM</span>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/60 animate-pulse" />
            </div>
            <span className="text-[8px] font-mono text-slate-400 mt-1 uppercase tracking-widest">Self-Healing Loop</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="size-10 rounded-xl bg-cyan-600/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-md shadow-cyan-500/20">
              <Brain className="size-5 text-cyan-400 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-200 mt-1">Autonomous</span>
            <span className="text-[8.5px] font-mono text-cyan-300/70">Cognitive Loop</span>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
          <span className="text-cyan-300 font-semibold">{subtitle}</span>
          <span className="text-emerald-400 font-bold">● Active Balance</span>
        </div>
      </div>
    )
  }

  if (pillarNumber === '02') {
    return (
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#060D1A] via-[#0B1527] to-[#120F24] p-5 flex flex-col justify-between border border-indigo-500/20 group">
        <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
          <span className="flex items-center gap-1.5 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-500/30 text-indigo-300">
            <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span>TRIFECTA CONVERGENCE</span>
          </span>
          <span className="text-emerald-300/90 bg-emerald-950/70 px-2.5 py-0.5 rounded-md border border-emerald-500/30 text-[10px]">
            Zero Silos
          </span>
        </div>

        {/* 3 Paradigms in Harmony */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2 py-1 items-center text-center">
          <div className="p-2 rounded-xl bg-blue-500/15 border border-blue-400/40 flex flex-col items-center">
            <Server className="size-4 text-blue-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-white">Technology</span>
            <span className="text-[8px] text-blue-300/80 font-mono">Digitalize Ops</span>
          </div>
          <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex flex-col items-center">
            <Brain className="size-4 text-emerald-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-white">AI Cognition</span>
            <span className="text-[8px] text-emerald-300/80 font-mono">Power Brains</span>
          </div>
          <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-400/40 flex flex-col items-center">
            <Sparkles className="size-4 text-purple-400 mb-0.5" />
            <span className="text-[10px] font-mono font-bold text-white">Multimedia</span>
            <span className="text-[8px] text-purple-300/80 font-mono">Face &amp; Voice</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
          <span className="text-indigo-300 font-semibold">{subtitle}</span>
          <span className="text-emerald-400 font-bold">● High Coherence</span>
        </div>
      </div>
    )
  }

  if (pillarNumber === '03') {
    return (
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#06101E] via-[#0A1A2F] to-[#12233F] p-5 flex flex-col justify-between border border-sky-500/20 group">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
          <span className="flex items-center gap-1.5 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-500/30 text-sky-300">
            <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>360° COMMERCE PIPELINE</span>
          </span>
          <span className="text-emerald-300 bg-emerald-950/70 px-2.5 py-0.5 rounded-md border border-emerald-500/30 text-[10px]">
            Zero Downtime
          </span>
        </div>

        {/* Commerce Flow Architecture */}
        <div className="relative z-10 my-auto flex items-center justify-between gap-1.5 py-1 text-center">
          <div className="px-2 py-2 rounded-xl bg-blue-500/15 border border-blue-400/30 flex-1">
            <ShoppingBag className="size-3.5 text-blue-400 mx-auto mb-0.5" />
            <div className="text-[9.5px] font-mono font-bold text-white">Storefront</div>
            <div className="text-[8px] text-blue-300 font-mono">Shopify Plus / 3D</div>
          </div>
          <span className="text-sky-400 font-mono text-xs">➔</span>
          <div className="px-2 py-2 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex-1">
            <Layers className="size-3.5 text-indigo-400 mx-auto mb-0.5" />
            <div className="text-[9.5px] font-mono font-bold text-white">Middleware</div>
            <div className="text-[8px] text-indigo-300 font-mono">Kafka / Sync</div>
          </div>
          <span className="text-sky-400 font-mono text-xs">➔</span>
          <div className="px-2 py-2 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex-1">
            <Server className="size-3.5 text-cyan-400 mx-auto mb-0.5" />
            <div className="text-[9.5px] font-mono font-bold text-white">Enterprise</div>
            <div className="text-[8px] text-cyan-300 font-mono">ERP &amp; RFID OMS</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
          <span className="text-sky-300 font-semibold">{subtitle}</span>
          <span className="text-emerald-400 font-bold">● 40ms Edge Latency</span>
        </div>
      </div>
    )
  }

  if (pillarNumber === '04') {
    return (
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#060D1E] via-[#09152B] to-[#0E1E3D] p-5 flex flex-col justify-between border border-cyan-500/20 group">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
          <span className="flex items-center gap-1.5 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30 text-cyan-300">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>GLOBAL ANYCAST EDGE</span>
          </span>
          <span className="text-cyan-300/90 bg-cyan-950/70 px-2.5 py-0.5 rounded-md border border-cyan-500/30 text-[10px]">
            120+ PoPs
          </span>
        </div>

        {/* Global Edge Latency Topology */}
        <div className="relative z-10 my-auto py-1">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 mb-1">
            <span className="text-cyan-300">● Frankfurt: 8ms</span>
            <span className="text-emerald-300">● Ashburn: 11ms</span>
            <span className="text-sky-300">● Singapore: 14ms</span>
          </div>
          <div className="relative h-6 bg-slate-950/70 rounded-lg border border-cyan-500/30 flex items-center px-3 justify-between overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/20 to-emerald-500/10 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-white relative z-10">Origin Shield Activated</span>
            <span className="text-[9px] font-mono text-emerald-400 font-bold relative z-10">100% NVMe Edge</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
          <span className="text-cyan-300 font-semibold">{subtitle}</span>
          <span className="text-emerald-400 font-bold">● &lt;15ms Global Ping</span>
        </div>
      </div>
    )
  }

  // Pillar 05: CoUI Studio & I3D Process
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F0B1E] via-[#16112C] to-[#1F143D] p-5 flex flex-col justify-between border border-purple-500/20 group">
      <div className="absolute inset-0 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
      
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
        <span className="flex items-center gap-1.5 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-500/30 text-purple-300">
          <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>I3D UX/UI PROCESS</span>
        </span>
        <span className="text-pink-300/90 bg-pink-950/70 px-2.5 py-0.5 rounded-md border border-pink-500/30 text-[10px]">
          WCAG 2.1 AAA
        </span>
      </div>

      {/* 4-Step I3D Pipeline */}
      <div className="relative z-10 my-auto grid grid-cols-4 gap-1.5 py-1 text-center font-mono">
        <div className="p-1.5 rounded-lg bg-purple-500/15 border border-purple-400/30">
          <div className="text-[9px] text-purple-300 font-bold">1. Ideate</div>
          <div className="text-[7px] text-slate-400">Strategy</div>
        </div>
        <div className="p-1.5 rounded-lg bg-purple-500/15 border border-purple-400/30">
          <div className="text-[9px] text-purple-300 font-bold">2. Investigate</div>
          <div className="text-[7px] text-slate-400">Journey</div>
        </div>
        <div className="p-1.5 rounded-lg bg-purple-500/15 border border-purple-400/30">
          <div className="text-[9px] text-purple-300 font-bold">3. Iterate</div>
          <div className="text-[7px] text-slate-400">Prototype</div>
        </div>
        <div className="p-1.5 rounded-lg bg-pink-500/15 border border-pink-400/30">
          <div className="text-[9px] text-pink-300 font-bold">4. Deliver</div>
          <div className="text-[7px] text-slate-400">Handoff</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
        <span className="text-purple-300 font-semibold">{subtitle}</span>
        <span className="text-pink-400 font-bold">● 60fps Micro-Motion</span>
      </div>
    </div>
  )
}

interface LivingTechnologySectionProps {
  sectionNumber?: string
}

export const LivingTechnologySection: React.FC<LivingTechnologySectionProps> = ({
  sectionNumber = '01',
}) => {
  const [selectedPillar, setSelectedPillar] = useState<DefiningPillar | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll)
    }
  }

  const scrollLeftBy = (amount: number) => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="living-tech" className="relative w-full bg-[#fcfcfd] text-slate-900 py-24 md:py-36 overflow-hidden border-t border-slate-100 font-inter-tight">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(60%_60%_at_85%_0%,rgba(0,82,203,0.06),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-4 md:px-6"
      >
        <SectionEyebrow number={sectionNumber} label="Living Technology Philosophy" tone="dark" className="mb-6" />

        {/* Editorial Two-Column Headline Structure */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-bricolage text-[2.4rem] sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-[-0.03em] text-slate-900">
              Technology that <span className="text-[#0052cb] font-semibold">behaves, adapts,</span> and evolves like a living organism.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-5 lg:pt-2">
            <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-normal">
              At <strong className="font-semibold text-slate-950">CoVision Technologies</strong>, we reject static software. Modern markets shift overnight; systems that cannot continuously adapt become brittle liabilities.
            </p>
            <p className="border-t border-slate-200/80 pt-5 text-sm md:text-base leading-relaxed text-slate-600">
              By harmonizing deterministic software engineering with cognitive artificial intelligence and emotive multimedia, we build digital infrastructure that thrives under volatile traffic, self-heals in real time, and drives measurable enterprise growth.
            </p>

            {/* Core Philosophy Value Ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0052cb]">
                <Zap className="size-3" />
                <span>Deterministic Logic</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                <Brain className="size-3" />
                <span>Autonomous Cognition</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700">
                <Sparkles className="size-3" />
                <span>60fps Sensory Media</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Pillars: CogniMedia Signature Horizontal Swipe Card Carousel */}
      <div className="relative w-full mt-16 md:mt-24">
        {/* Controls Bar */}
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-4 md:px-6 mb-8">
          <div>
            <h3 className="font-bricolage text-2xl md:text-4xl font-medium tracking-tight text-slate-900">
              What defines our Living Technology?
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Explore the five structural pillars engineered for enterprise longevity.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Swipe / Scroll
            </span>
            <div className="h-1 w-28 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-[#0052cb] transition-all duration-300 ease-out"
                style={{ width: `${Math.max(12, scrollProgress * 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollLeftBy(-420)}
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#0052cb] hover:text-[#0052cb] transition-all cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollLeftBy(420)}
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[#0052cb] hover:text-[#0052cb] transition-all cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full gap-6 overflow-x-auto px-4 md:px-6 pb-8 scrollbar-none snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
        >
          <div className="hidden lg:block w-[max(0px,calc((100vw-80rem)/2-1.5rem))] shrink-0" />

          {DEFINING_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.number}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPillar(pillar)}
              className="group relative flex w-[320px] sm:w-[380px] md:w-[440px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl bg-white p-7 md:p-8 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-400 transition-all duration-500 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                    PILLAR {pillar.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    {pillar.category}
                  </span>
                </div>

                {/* Self-Contained High-Definition Interactive Architecture Canvas */}
                <PillarInteractiveCanvas
                  pillarNumber={pillar.number}
                  subtitle={pillar.subtitle}
                />

                <h4 className="mt-6 font-bricolage text-2xl font-bold text-slate-900 group-hover:text-[#0052cb] transition-colors">
                  {pillar.title}
                </h4>

                <p className="mt-2 text-xs md:text-sm font-semibold text-slate-600">
                  {pillar.tagline}
                </p>

                <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-500 line-clamp-3">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cb]">
                <span>Inspect Technical Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}

          <div className="hidden lg:block w-[max(0px,calc((100vw-80rem)/2-1.5rem))] shrink-0" />
        </div>
      </div>

      {/* SDLC Execution Framework: Seamlessly Integrated as Engineering Foundation */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-16 md:mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
              SDLC Execution Framework
            </span>
            <h3 className="font-bricolage text-2xl sm:text-4xl font-medium text-slate-900 mt-2">
              The Synergy: Agile × Scrum × DevOps × AI
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine industry-standard delivery methodologies with modern AI co-pilots, ensuring 40% faster time-to-market without cutting architectural corners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Agile Velocity',
                icon: Activity,
                desc: 'Bi-weekly sprint cadences with iterative feature increments, instant client demo staging, and adaptive scope prioritization.',
              },
              {
                title: 'Scrum Discipline',
                icon: Workflow,
                desc: 'Dedicated Scrum Masters, daily standups, sprint retrospectives, and clear burndown transparency via Jira & Linear.',
              },
              {
                title: 'DevOps & GitOps',
                icon: Layers,
                desc: 'Fully automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and zero-downtime blue/green rollouts.',
              },
              {
                title: 'AI Augmentation',
                icon: Brain,
                desc: 'Automated test suite generation, static security scanning, synthetic data generation, and predictive deployment health monitoring.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0052cb] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: Detailed Spec Inspector for Selected Pillar */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 relative text-slate-900"
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] border border-blue-200">
                  PILLAR {selectedPillar.number}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {selectedPillar.category}
                </span>
              </div>

              <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-slate-900">
                {selectedPillar.title}
              </h3>
              <p className="text-sm font-semibold text-[#0052cb] mt-1">
                {selectedPillar.subtitle}
              </p>

              {/* High-Resolution Interactive Architecture Preview */}
              <div className="mt-5">
                <PillarInteractiveCanvas
                  pillarNumber={selectedPillar.number}
                  subtitle={selectedPillar.subtitle}
                />
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700">
                {selectedPillar.summary}
              </p>

              <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Engineering Capabilities
                </div>
                {selectedPillar.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-[#0052cb] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-[#0052cb] transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
