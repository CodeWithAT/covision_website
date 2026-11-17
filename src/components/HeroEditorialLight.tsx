import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { getLenisInstance } from '../lib/lenis'

interface HeroEditorialLightProps {
  onNavigatePage: (page: string, targetServiceId?: string) => void
  onOpenContact: (prefillService?: string) => void
}

export const HeroEditorialLight: React.FC<HeroEditorialLightProps> = ({
  onNavigatePage,
  onOpenContact,
}) => {
  const handleScrollDown = () => {
    const lenis = getLenisInstance()
    if (lenis) {
      lenis.scrollTo(window.innerHeight * 0.88)
    } else {
      window.scrollBy({ top: window.innerHeight * 0.88, behavior: 'smooth' })
    }
  }

  return (
    <section
      aria-label="CoVision Living Technology Hero"
      className="relative min-h-[94vh] pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#F8FAFC] selection:bg-[#0052cb] selection:text-white"
    >
      {/* Photorealistic Architectural Rendering Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
      >
        <picture>
          <source
            srcSet="/images/hero/architectural_light_backdrop_2k.webp"
            type="image/webp"
          />
          <img
            src="/images/hero/architectural_light_backdrop.png"
            alt="Photorealistic architectural rendering of an ultra-luxury enterprise technology installation in a bright editorial light mode gallery setting"
            className="w-full h-full object-cover object-bottom opacity-85 filter contrast-[1.03] brightness-[1.01]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Smooth Light Architectural Vignette & Text Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5]/95 via-[#FAF9F5]/50 to-transparent" />

        {/* Ambient Cobalt Caustic Illumination */}
        <div className="absolute inset-0 ambient-glow-cobalt pointer-events-none" />
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center mt-2 sm:mt-6 lg:mt-8">
        
        {/* Eyebrow Floating Pill: Exact content from original Hero */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill-light border border-slate-200/90 text-xs text-slate-700 mb-6 sm:mb-8 shadow-xs cursor-default hover:border-slate-300 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052cb]" />
          </span>
          <span className="font-semibold tracking-wide text-slate-900">
            Living Technology
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600">
            Technology, AI &amp; Multimedia Convergence
          </span>
        </motion.div>

        {/* Monumental Headline: Exact headline from instruction.txt & original Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-bricolage text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#090D16] max-w-5xl leading-[1.08] mb-5 sm:mb-7 drop-shadow-xs"
        >
          Living Technology for{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0052cb] via-[#1d4ed8] to-[#0284c7]">
            Modern Enterprises
          </span>
        </motion.h1>

        {/* Subtitle: Exact text from instruction.txt & original Hero */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10 tracking-tight"
        >
          We engineer resilient software, intelligent digital ecosystems, and cloud-native infrastructure that unite technology, commerce, and creativity to drive business agility, innovation, and sustainable growth.
        </motion.p>

        {/* Action Buttons: Exact CTAs from original Hero ("Get Started" & "Explore Services") */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10"
        >
          {/* Primary Action Button: Get Started */}
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="btn-shimmer-cobalt w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-[#0052cb] hover:bg-[#003da8] text-white text-sm sm:text-[15px] font-semibold tracking-wide border border-blue-500/30 transition duration-200 cursor-pointer shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-white/90" />
          </button>

          {/* Secondary Action Button: Explore Services */}
          <button
            type="button"
            onClick={() => onNavigatePage('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-white/85 hover:bg-white text-slate-800 hover:text-slate-950 text-sm sm:text-[15px] font-medium tracking-wide border border-slate-200/90 transition duration-200 shadow-xs backdrop-blur-md cursor-pointer hover:border-slate-300 hover:scale-[1.01]"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </button>
        </motion.div>

        {/* Assurances Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-[13px] text-slate-600 tracking-wide font-medium"
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#0052cb] stroke-[2.5]" />
            Enterprise Software &amp; SaaS Platforms
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#0052cb] stroke-[2.5]" />
            Autonomous AI &amp; Cloud Infrastructure
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#0052cb] stroke-[2.5]" />
            Agile × Scrum × DevOps × AI Delivery
          </span>
        </motion.div>
      </div>

      {/* Enterprise Metrics & Proof Strip Dock */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="relative z-10 w-full mt-12 sm:mt-16 lg:mt-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
      >
        <div className="bg-white/85 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
            {/* Metric 1 */}
            <div className="flex flex-col sm:px-6 first:pl-0">
              <span className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">
                99.99%
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Uptime Reliability
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                High-Availability Clusters
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col sm:px-6 pt-6 sm:pt-0">
              <span className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">
                10x
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Developer Velocity
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                AI-Assisted CI/CD Pipelines
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col sm:px-6 pt-6 sm:pt-0">
              <span className="font-bricolage text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Zero-Debt Delivery
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                SOC-2 &amp; ISO 27001 Standards
              </span>
            </div>

            {/* Metric 4: Trust Validation Marks */}
            <div className="flex flex-col sm:px-6 pt-6 sm:pt-0 justify-between">
              <span className="text-[11px] uppercase tracking-widest text-slate-500 font-medium mb-3">
                Featured Partners &amp; Clients
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 opacity-80 hover:opacity-100 transition duration-300">
                <span className="font-bold text-xs tracking-wider text-slate-800">
                  PUMA
                </span>
                <span className="font-bold text-xs tracking-wider text-slate-800">
                  NOVAPAY
                </span>
                <span className="font-bold text-xs tracking-wider text-slate-800">
                  FILA
                </span>
                <span className="font-bold text-xs tracking-wider text-slate-800">
                  SILVER MAHARAJA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt to Explore Living Ecosystem */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-transparent border-0 p-0"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-700 font-semibold px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs group-hover:border-slate-300 transition-colors">
              Scroll to Explore Ecosystem
            </span>
            <div className="w-5 h-8 rounded-full border border-slate-300 flex items-start justify-center p-1 bg-white/80 backdrop-blur-xs">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="size-1 rounded-full bg-[#0052cb]"
              />
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
