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
  ShieldCheck,
  Zap,
  Sparkles,
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
  image: string
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
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/03_multi-cloud_rack_clusters.jpg',
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
    image: '/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg',
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
    image: '/senior_image_catalog/06_eCommerce_and_Retail/01_flagship_digital_retail_experien.jpg',
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
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/02_optical_fiber_corridors.jpg',
  },
  {
    number: '05',
    title: 'CoVision Lattice™ Design Standard',
    subtitle: 'Human-Centered Digital Experiences',
    category: 'Design Systems',
    tagline: 'Where behavioral psychology meets fluid, responsive micro-interactions.',
    summary: 'CoVision Lattice™ reduces cognitive friction and guides user action. Clean visual hierarchy, accessible contrast, and smooth feedback loops create products customers love.',
    bullets: [
      'The Proven I3D Process: Ideate, Investigate, Iterate, and Deliver with pixel-perfect precision.',
      'Higher Engagement: Intuitive workflows designed to boost user retention and conversion rates.',
      'Cross-Platform Harmony: Flawless consistency across desktop portals, tablets, and native mobile apps.',
    ],
    badgeColor: 'bg-violet-500',
    image: '/senior_image_catalog/08_UX_UI_Design_Systems/02_coui_token_foundry_and_style_gu.jpg',
  },
]

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
            <h2 className="font-bricolage text-[2.4rem] sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-slate-900">
              Technology that{' '}
              <span className="relative inline-block text-[#0052cb]">
                behaves,
                <svg className="absolute -bottom-1.5 left-0 w-full" height="7" viewBox="0 0 100 7" preserveAspectRatio="none" fill="none">
                  <path d="M0 3.5 Q 12.5 0.5, 25 3.5 T 50 3.5 T 75 3.5 T 100 3.5" stroke="#0052cb" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <span className="relative inline-block text-[#0052cb]">
                adapts,
                <svg className="absolute -bottom-1.5 left-0 w-full" height="7" viewBox="0 0 100 7" preserveAspectRatio="none" fill="none">
                  <path d="M0 3.5 Q 12.5 0.5, 25 3.5 T 50 3.5 T 75 3.5 T 100 3.5" stroke="#0052cb" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              and evolves like a living organism.
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0052cb]">
              <span className="size-1.5 rounded-full bg-[#0052cb]" />
              <span>Covision: Technology That Connects Business and Creativity</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 lg:pt-2">
            <p className="text-base sm:text-lg leading-relaxed text-slate-800 font-normal">
              At <strong className="font-bold text-slate-900">CoVision Technologies</strong>, we reject static software. Modern markets shift overnight; systems that cannot continuously adapt become brittle liabilities.
            </p>
            <p className="border-t border-slate-200/80 pt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              By harmonizing deterministic software engineering with cognitive artificial intelligence and emotive multimedia, we build digital infrastructure that thrives under volatile traffic, self-heals in real time, and scales without friction.
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
              className="group relative flex w-[320px] sm:w-[380px] md:w-[440px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#0052cb]/40 transition-all duration-500 cursor-pointer"
            >
              <div>
                {/* Visual Image Banner with Scrim & Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                </div>

                <div className="p-6 sm:p-7 md:p-8">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#0052cb] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      PILLAR {pillar.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                      {pillar.category}
                    </span>
                  </div>
                  <h4 className="font-bricolage text-2xl font-bold text-slate-900 group-hover:text-[#0052cb] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="mt-2 text-xs md:text-sm font-semibold text-slate-600">
                    {pillar.tagline}
                  </p>

                  <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-500 line-clamp-3">
                    {pillar.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 md:px-8 pb-6 sm:pb-7 md:pb-8 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cb]">
                  <span>Inspect Technical Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
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
              Built on Engineering Excellence:
            </span>
            <h3 className="font-bricolage text-2xl sm:text-4xl font-medium text-slate-900 mt-2">
              The Synergy: Agile × Scrum × DevOps × AI
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Combine architecture-led software engineering, agile execution, DevOps automation, and AI-assisted development to build secure, reliable, and scalable technology—with engineering quality at every stage.
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

              {/* High-Resolution Pillar Image Banner */}
              <div className="mt-5 relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-neutral-900 border border-slate-200">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  className="w-full h-full object-cover"
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
