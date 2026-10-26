import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Building2,
  Sparkles,
} from 'lucide-react'
import { PILLAR_CLIENTS } from '../data/mockData'
import { SectionEyebrow } from './SectionEyebrow'

interface PillarClientsSectionProps {
  onOpenContact: () => void
  sectionNumber?: string
}

interface StrategicPartnership {
  client: string
  logoText: string
  industry: string
  headline: string
  metricValue: string
  metricLabel: string
  summary: string
  architecture: string[]
  verifiedTag: string
}

const STRATEGIC_SPOTLIGHTS: StrategicPartnership[] = [
  {
    client: 'Puma Global Retail',
    logoText: 'PUMA',
    industry: 'Retail & Sportswear',
    headline: 'High-Concurrency Headless Storefront & Mobile Acceleration',
    metricValue: '4.2M+',
    metricLabel: 'Peak Concurrent Shoppers Handled',
    summary: 'Engineered a resilient headless commerce architecture with 3D product visualizers, sub-120ms checkout latency, and real-time inventory synchronization across 140+ retail flagship locations.',
    architecture: ['Headless Shopify Plus', 'Flutter Mobile App', 'Anycast Edge PoPs', 'Redis Cache Tier'],
    verifiedTag: 'PCI-DSS Level 1 & SOC 2 Audited',
  },
  {
    client: 'Mango Fashion Group',
    logoText: 'MANGO',
    industry: 'Fashion & Apparel',
    headline: 'Multi-Region Edge Re-Platforming & Catalog Federation',
    metricValue: '18',
    metricLabel: 'European Distribution Hubs Reconciled',
    summary: 'Migrated legacy monolith to a composable microservices fabric with real-time multi-currency routing, sub-14ms global catalog sync, and automated zero-downtime inventory updates.',
    architecture: ['Go Microservices', 'Kafka Event Streaming', 'TanStack Query Sync', 'PostgreSQL Cluster'],
    verifiedTag: '100% SEO & URL Hash Preservation',
  },
  {
    client: 'NovaPay Global Banking',
    logoText: 'NOVAPAY',
    industry: 'FinTech & Core Banking',
    headline: 'Mission-Critical Transactional Engine Modernization',
    metricValue: '$1.2B+',
    metricLabel: 'Daily Transactional Volume Scaled',
    summary: 'Constructed an event-driven payment routing engine with edge tokenization, active-active multi-cloud failover, and automated fraud scoring executing in under 22 milliseconds.',
    architecture: ['Kubernetes GitOps', 'Golang Transaction Rails', 'Mutual TLS 1.3', 'Resend Transactional Gateways'],
    verifiedTag: 'Zero-Downtime Blue/Green Deployments',
  },
]

export const PillarClientsSection: React.FC<PillarClientsSectionProps> = ({
  onOpenContact,
  sectionNumber = '02',
}) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('All')

  // Split client partners into 2 marquee rows for the continuous infinite logo wall
  const marqueeRow1 = PILLAR_CLIENTS.slice(0, 7)
  const marqueeRow2 = PILLAR_CLIENTS.slice(7)

  const industries = ['All', 'Retail & Fashion', 'FinTech & IoT', 'Luxury & Media', 'Health & EdTech']

  const filteredSpotlights = STRATEGIC_SPOTLIGHTS.filter((item) => {
    if (activeIndustry === 'All') return true
    if (activeIndustry === 'Retail & Fashion') return item.industry.includes('Retail') || item.industry.includes('Fashion')
    if (activeIndustry === 'FinTech & IoT') return item.industry.includes('FinTech')
    return true
  })

  return (
    <section id="pillar-clients" className="py-24 md:py-36 bg-paper relative overflow-hidden border-t border-ink-line font-inter-tight text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <SectionEyebrow number={sectionNumber} label="Featured Projects & Clients" tone="dark" className="mb-6" />

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-[1.04]">
            Featured Projects and <span className="text-[#0052cb]">Clients</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            From global giants like Puma and Fila to Banking & Financial Services, Human Resource platforms, E-Commerce, Education & Training, and Silver Maharaja.
          </p>
        </div>

        {/* Macro Production Impact Metrics Bar */}
        <div className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white border border-ink-line shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#0052cb]">$2.4B+</div>
            <div className="text-xs font-semibold text-neutral-700 mt-1">Enterprise GMV Scaled</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">Across high-load commerce hubs</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-ink-line shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#0052cb]">99.995%</div>
            <div className="text-xs font-semibold text-neutral-700 mt-1">SLA Availability</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">Zero unplanned production outages</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-ink-line shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#0052cb]">140+</div>
            <div className="text-xs font-semibold text-neutral-700 mt-1">Production Releases</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">Automated GitOps deployments</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-ink-line shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#0052cb]">&lt; 15ms</div>
            <div className="text-xs font-semibold text-neutral-700 mt-1">Global Edge TTFB</div>
            <div className="text-[11px] text-neutral-400 mt-0.5">Sub-second client execution</div>
          </div>
        </div>

        {/* Dual Infinite Continuous Brand Marquee Wall */}
        <div className="mb-16 rounded-3xl bg-white border border-ink-line p-6 sm:p-8 shadow-xs overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-400">
              Verified Enterprise Brand Engagements
            </span>
          </div>

          {/* Marquee Track 1 (Left Scrolling) */}
          <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-6 shrink-0"
            >
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-paper border border-ink-line hover:border-blue-300 transition-colors shrink-0 group cursor-default"
                >
                  <Building2 className="size-4 text-[#0052cb] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="font-bricolage text-sm font-bold text-ink tracking-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {client.category}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Track 2 (Right Scrolling) */}
          <div className="flex overflow-hidden relative mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-6 shrink-0"
            >
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-paper border border-ink-line hover:border-blue-300 transition-colors shrink-0 group cursor-default"
                >
                  <Sparkles className="size-4 text-[#0052cb] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="font-bricolage text-sm font-bold text-ink tracking-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {client.category}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Strategic Partnership Spotlights */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Strategic Enterprise Case Spotlights
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Deep architectural analysis of selected Fortune 500 implementations.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeIndustry === ind
                      ? 'bg-[#0052cb] text-white shadow-2xs font-bold'
                      : 'bg-white border border-ink-line text-neutral-600 hover:text-ink'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSpotlights.map((spotlight) => (
                <motion.div
                  key={spotlight.client}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="p-7 sm:p-8 rounded-3xl bg-white border border-ink-line shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Identity */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold tracking-wider">
                        {spotlight.logoText}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-500">
                        {spotlight.industry}
                      </span>
                    </div>

                    <h4 className="font-bricolage text-lg sm:text-xl font-bold text-ink group-hover:text-[#0052cb] transition-colors leading-snug">
                      {spotlight.headline}
                    </h4>

                    {/* Metric Highlight Box */}
                    <div className="my-5 p-4 rounded-2xl bg-paper border border-ink-line flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-extrabold font-mono text-[#0052cb]">
                          {spotlight.metricValue}
                        </div>
                        <div className="text-[11px] text-neutral-500 font-medium">
                          {spotlight.metricLabel}
                        </div>
                      </div>
                      <TrendingUp className="size-5 text-[#0052cb]" />
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                      {spotlight.summary}
                    </p>

                    {/* Architecture Pills */}
                    <div className="space-y-1.5 mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        System Architecture
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {spotlight.architecture.map((arch) => (
                          <span
                            key={arch}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                          >
                            {arch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                      <CheckCircle2 className="size-3.5" />
                      <span>{spotlight.verifiedTag}</span>
                    </span>

                    <button
                      onClick={onOpenContact}
                      className="text-xs font-bold text-[#0052cb] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Build Similar</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Global Partnership CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bricolage text-xl sm:text-2xl font-bold">
              Ready to construct high-velocity digital infrastructure?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Join Puma, Mango, and NovaPay in scaling mission-critical applications with CoVision.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#003da8] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
