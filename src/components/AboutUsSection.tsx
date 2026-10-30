import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, HeartHandshake, Award, Users, Trophy, Lightbulb, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

import { SectionEyebrow } from './SectionEyebrow'
import { ABOUT_US_DETAILS } from '../data/mockData'
import { scrollToElement } from '../lib/scrollUtils'

interface AboutUsSectionProps {
  onOpenContact: () => void
  sectionNumber?: string
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onOpenContact,
  sectionNumber = '01',
}) => {
  const valueIcons: Record<string, any> = {
    'Customer Commitment': HeartHandshake,
    'Quality Excellence': Award,
    'Collaborative Teamwork': Users,
    'Winning Spirit': Trophy,
    'Pragmatism & Relevance': Lightbulb,
    'Responsiveness & Accountability': ShieldCheck,
  }

  return (
    <div id="about-us-practice" className="bg-paper text-ink font-inter-tight selection:bg-[#0052cb] selection:text-white">
      {/* =========================================================================
          HERO BANNER: Engineering Living Technology. Where AI Converges.
          Cinematic Dark Theme matching #ai, #services, and #saas
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#07090E] text-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800">
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/25 via-slate-950/80 to-[#07090E] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,102,255,0.25),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Core Headline & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold tracking-wider uppercase">
                <Sparkles className="size-3.5 text-blue-400 animate-pulse" />
                <span>Corporate Identity & Values</span>
              </div>

              <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Engineering Living Technology. Where AI Converges.
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
                A premier enterprise digital engineering partner. We combine deep systems architecture, cognitive AI agents, and behavioral science design to build software ecosystems that adapt dynamically as enterprises scale.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToElement('about-us', -90)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
                >
                  <span>Explore Ethos & Values</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>Consult Lead Architect</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column: Expanded Global Video Showcase (Big & Clear) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-blue-950/40 group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <video
                    src="/globe.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="about-us" className="py-24 md:py-36 bg-paper-deep relative overflow-hidden border-t border-ink-line text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionEyebrow number={sectionNumber} label="Corporate Identity & Mission" tone="dark" className="mb-6" />

          <h2 className="font-bricolage text-4xl sm:text-6xl font-medium text-ink tracking-tight leading-[1.02]">
            About CoVision Technologies.
          </h2>
          <p className="mt-4 font-inter-tight text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Full-cycle software engineering, high-scale global cloud infrastructure, and enterprise digital platforms delivering Living Technology worldwide.
          </p>
        </motion.div>

        {/* Vision & Mission Dual Cards with Scroll Animation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 font-inter-tight">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052cb] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
              Our Vision
            </div>
            <h3 className="font-bricolage text-2xl font-bold text-slate-900 mt-1">
              A Global Leader in Sustainable Solutions
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {ABOUT_US_DETAILS.vision}
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Environmentally responsible, socially impactful, and economically viable enterprise engineering.
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052cb] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
              Our Mission
            </div>
            <h3 className="font-bricolage text-2xl font-bold text-slate-900 mt-1">
              Empowering Clients Through Integrated Solutions
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {ABOUT_US_DETAILS.mission}
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
              Technology and creativity should be agile assets, not operational burdens.
            </div>
          </motion.div>
        </div>

        {/* Core Values 6-Grid with Scroll Animation */}
        <div className="mt-16 font-inter-tight">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-slate-900">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Principles guiding every architecture review, sprint cadence, and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_DETAILS.values.map((val, idx) => {
              const Icon = valueIcons[val.title] || Award
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bricolage text-base font-bold text-slate-900">{val.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0052cb] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#003da8] transition-all cursor-pointer"
            >
              <span>Initiate Enterprise Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
