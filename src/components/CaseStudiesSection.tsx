import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
  Server,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'
import { CASE_STUDIES } from '../data/mockData'
import type { CaseStudyItem } from '../types'

interface CaseStudiesSectionProps {
  onOpenContact: () => void
  sectionNumber?: string
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenContact,
  sectionNumber = '02',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false)

  const activeStudy: CaseStudyItem = CASE_STUDIES[currentIndex] || CASE_STUDIES[0]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length)
  }

  return (
    <section id="case-studies" className="py-24 md:py-36 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Infosys-Style Counter & Pagination */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionEyebrow number={sectionNumber} label="Verified Client Outcomes" tone="dark" className="mb-4" />

            <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-[1.02]">
              Battle-Tested Case Studies & Production Deployments.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Measurable business ROI, eliminated downtime, and validated enterprise architecture for global retail, luxury, and fintech leaders.
            </p>
          </div>

          {/* Infosys-Style Counter & Quick Nav Arrows */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono text-xs font-bold text-neutral-500">
              Story {String(currentIndex + 1).padStart(2, '0')} / {String(CASE_STUDIES.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous Case Study"
                className="size-9 rounded-full bg-white border border-ink-line flex items-center justify-center text-ink hover:bg-neutral-100 hover:border-[#0052cb] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Case Study"
                className="size-9 rounded-full bg-white border border-ink-line flex items-center justify-center text-ink hover:bg-neutral-100 hover:border-[#0052cb] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Tabs Selector */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-neutral-100/80 rounded-2xl w-max">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  currentIndex === idx
                    ? 'bg-[#0052cb] text-white shadow-sm shadow-blue-600/30 font-bold'
                    : 'text-neutral-600 hover:text-ink hover:bg-white/60'
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* Symmetrical, Perfectly Balanced Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-ink-line p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Visual & Verified Production Metrics (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Banner */}
                {activeStudy.image && (
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm bg-neutral-900 border border-ink-line">
                    <img
                      src={activeStudy.image}
                      alt={activeStudy.client}
                      className="w-full h-full object-cover"
                    />
                    </div>
                )}

                {/* Symmetrical Production Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
                    <span>Audit-Confirmed Metrics</span>
                    <ShieldCheck className="size-3.5 text-[#0052cb]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                    {activeStudy.results.map((res, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-paper border border-ink-line flex flex-col justify-between"
                      >
                        <div className="text-2xl sm:text-3xl font-black text-[#0052cb] font-mono tracking-tight">
                          {res.metric}
                        </div>
                        <div className="text-xs font-semibold text-neutral-700 mt-1">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Problem, Architecture & Actions (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-bold mb-3">
                    <span>{activeStudy.industry}</span>
                  </div>

                  <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[2rem] font-bold text-ink leading-tight">
                    {activeStudy.headline}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {activeStudy.summary}
                  </p>
                </div>

                {/* Structured Challenge & Solution Boxes */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-rose-500" />
                      <span>The Critical Bottleneck</span>
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {activeStudy.challenge}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0052cb] mb-1 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#0052cb]" />
                      <span>The CoVision Infotech Architecture Solution</span>
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {activeStudy.solution}
                    </div>
                  </div>
                </div>

                {/* Integrated Tech Stack */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Integrated Enterprise Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-paper text-neutral-800 border border-ink-line shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setArchitectureModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-paper text-ink font-bold text-xs border border-ink-line hover:border-[#0052cb] hover:text-[#0052cb] transition-colors cursor-pointer"
                  >
                    <Layers className="size-4 text-[#0052cb]" />
                    <span>Inspect System Architecture Blueprint</span>
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] text-white font-bold text-xs hover:bg-[#003da8] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Engineer Similar Architecture</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Architecture Modal */}
        <AnimatePresence>
          {architectureModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-ink-line shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-4 border-b border-ink-line">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#0052cb] font-bold">
                      System Topology Blueprint
                    </span>
                    <h3 className="font-bricolage text-xl font-bold text-ink">
                      {activeStudy.client} Production Topology
                    </h3>
                  </div>
                  <button
                    onClick={() => setArchitectureModalOpen(false)}
                    aria-label="Close Architecture Modal"
                    className="size-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-ink cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Topology Diagram Blueprint */}
                <div className="mt-6 p-6 rounded-2xl bg-neutral-950 text-white font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                    <span>COVISION INFOTECH CLOUD INGRESS TOPOLOGY</span>
                    <span className="text-emerald-400">STATUS: VERIFIED LIVE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500">Tier 1</div>
                      <div className="text-neutral-200 font-bold mt-1">Global Anycast PoPs</div>
                      <div className="text-[10px] text-[#0052cb] mt-1">Sub-15ms Edge Cache</div>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500">Tier 2</div>
                      <div className="text-neutral-200 font-bold mt-1">Kubernetes Ingress</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Zero-Downtime Failover</div>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-500">Tier 3</div>
                      <div className="text-neutral-200 font-bold mt-1">Kafka Event Bus & DB</div>
                      <div className="text-[10px] text-purple-400 mt-1">ACID Replicated Storage</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-[11px] leading-relaxed">
                    <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                      <Server className="size-3.5 text-[#0052cb]" />
                      <span>Architecture Highlights for {activeStudy.client}:</span>
                    </div>
                    • Multi-region tokenized checkout pipeline eliminating latency spikes.<br />
                    • Real-time ERP synchronization with automated state reconciliation.<br />
                    • Complete failover resilience tested to 300% historical peak load.
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setArchitectureModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-semibold hover:bg-neutral-200 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setArchitectureModalOpen(false)
                      onOpenContact()
                    }}
                    className="px-5 py-2 rounded-xl bg-[#0052cb] text-white text-xs font-semibold hover:bg-[#003da8] shadow-sm cursor-pointer"
                  >
                    Request Technical Scope
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
