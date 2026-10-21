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
} from 'lucide-react'

interface DefiningPillar {
  number: string
  title: string
  subtitle: string
  category: string
  tagline: string
  image: string
  summary: string
  bullets: string[]
  badgeColor: string
}

const DEFINING_PILLARS: DefiningPillar[] = [
  {
    number: '01',
    title: 'Logic + Intelligence',
    subtitle: 'The Two Fundamental Paradigms',
    category: 'Architecture Philosophy',
    tagline: 'Deterministic engineering meets autonomous self-evolving cognition.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    summary: 'Living Technology fuses deterministic software discipline with stochastic machine learning models, creating resilient systems that never go anemic.',
    bullets: [
      'Paradigm of Logic: Clean architecture, ACID compliance, zero-regression test harnesses.',
      'Paradigm of Life: Continuous learning loops, automated model retraining, adaptive caching.',
      'Self-healing microservices that re-route traffic before latency thresholds breach.',
    ],
    badgeColor: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'The Trifecta Engine',
    subtitle: 'Technology • AI • Multimedia',
    category: 'Ecosystem Convergence',
    tagline: 'When code, cognition, and visual fidelity operate as a singular organism.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Technology digitalizes operations, AI provides the cognitive brains, and Multimedia delivers the sensory voice and interactive face to the market.',
    bullets: [
      'Zero siloing: engineers, AI researchers, and 3D visual artists build in tandem.',
      'Shared data models between operational ERPs and user-facing 3D storefronts.',
      'Direct pipeline to our sister media wing, Cognitive Media, for generative visuals.',
    ],
    badgeColor: 'bg-emerald-500',
  },
  {
    number: '03',
    title: '360° Living eCommerce',
    subtitle: 'High-Concurrency Commerce',
    category: 'Commerce Operations',
    tagline: 'Headless storefronts, zero-downtime migration, and automated warehouse sync.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'From custom platform development to ERP/CRM middleware, 3D product visualizers, and barcode/RFID warehouse operations.',
    bullets: [
      'Shopify Plus, Adobe Commerce (Magento), and bespoke headless architectures.',
      'Zero-downtime database and SEO URL migrations with 100% hash preservation.',
      'Automated PIM catalogs and rule-based dynamic pricing engines.',
    ],
    badgeColor: 'bg-indigo-500',
  },
  {
    number: '04',
    title: 'Anycast Cloud Edge',
    subtitle: 'Sub-15ms Global Latency',
    category: 'Cloud Infrastructure',
    tagline: 'Multi-cloud resilience and tier-1 Anycast routing via Bunny CDN.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    summary: 'Global high-throughput delivery across 120+ Points of Presence, origin shielding, and automated AVIF/WebP image optimization.',
    bullets: [
      'Sub-20ms median latency across Europe, North America, and Asia.',
      'Geo-replicated NVMe storage with instant 250ms cache invalidation.',
      'DDoS mitigation and Tier-1 carrier Anycast routing with zero jitter.',
    ],
    badgeColor: 'bg-amber-500',
  },
  {
    number: '05',
    title: 'CoUI Studio & I3D Process',
    subtitle: 'Cognitive Science UX',
    category: 'Design Systems',
    tagline: 'Where behavioral psychology converges with micro-animations & spatial UI.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    summary: 'CoUI is our battle-tested design token system built on cognitive load reduction, WCAG AAA accessibility, buttery 60fps micro-interactions, and 3D product fidelity.',
    bullets: [
      'Proprietary I3D framework: Identify, Iterate, Implement 3D spatial fidelity.',
      'Micro-animations calibrated to heighten user engagement without cognitive friction.',
      'Cross-platform responsive consistency across mobile screens, foldable displays, and 4K desktops.',
    ],
    badgeColor: 'bg-violet-500',
  },
]

export const LivingTechnologySection: React.FC = () => {
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
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-4 md:px-6"
      >
        {/* Section Index Counter */}
        <div className="flex items-center gap-4 text-xs md:text-[13px] uppercase tracking-[0.22em] text-slate-500 mb-6">
          <span className="tabular-nums font-bold text-[#0052cb]">(01)</span>
          <span className="h-px w-10 md:w-16 bg-slate-300"></span>
          <span className="font-semibold text-slate-700">Living Technology Philosophy</span>
        </div>

        {/* Editorial Two-Column Headline Structure */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-bricolage text-[2.4rem] sm:text-5xl md:text-6xl font-medium leading-[1.02] tracking-[-0.03em] text-slate-900">
              Technology that <span className="text-[#0052cb] underline decoration-blue-200 decoration-wavy underline-offset-8">behaves, adapts,</span> and evolves like a living organism.
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
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                    PILLAR {pillar.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    {pillar.category}
                  </span>
                </div>

                {/* Imagery Banner */}
                <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-200">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

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

              <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  className="h-full w-full object-cover"
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
