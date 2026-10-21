import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, HeartHandshake, Award, Users, Trophy, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react'

import { ABOUT_US_DETAILS } from '../data/mockData'

interface AboutUsSectionProps {
  onOpenContact: () => void
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenContact }) => {
  const valueIcons: Record<string, any> = {
    'Customer Commitment': HeartHandshake,
    'Quality Excellence': Award,
    'Collaborative Teamwork': Users,
    'Winning Spirit': Trophy,
    'Pragmatism & Relevance': Lightbulb,
    'Responsiveness & Accountability': ShieldCheck,
  }

  return (
    <section id="about-us" className="py-24 md:py-36 bg-paper-deep relative overflow-hidden border-t border-ink-line text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 font-inter-tight text-xs md:text-[13px] uppercase tracking-[0.22em] text-neutral-500 mb-6">
            <span className="tabular-nums font-bold text-[#0052cb]">(08)</span>
            <span className="h-px w-10 md:w-16 bg-neutral-300"></span>
            <span className="font-semibold text-neutral-700">Corporate Identity & Mission</span>
          </div>

          <h2 className="font-bricolage text-4xl sm:text-6xl font-medium text-ink tracking-tight leading-[1.02]">
            About <span className="text-[#0052cb]">CoVision Technologies.</span>
          </h2>
          <p className="mt-4 font-inter-tight text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Full-cycle software engineering, multi-cloud Anycast infrastructure, and enterprise SaaS platforms delivering Living Technology worldwide.
          </p>
        </motion.div>

        {/* Vision & Mission Dual Cards with Scroll Animation */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 font-inter-tight">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
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
            viewport={{ once: true, margin: '-50px' }}
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
                  viewport={{ once: true, margin: '-30px' }}
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
  )
}
