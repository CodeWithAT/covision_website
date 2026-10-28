import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Palette,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'
import { ServiceDetailModal } from './ServiceDetailModal'
import { IT_SERVICES_DATA } from '../data/mockData'
import type { ServiceItem } from '../types'

import { scrollToElement } from '../lib/scrollUtils'

interface ServicesSectionProps {
  onRequestScope: (serviceTitle: string) => void
  sectionNumber?: string
  targetServiceId?: string
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestScope,
  sectionNumber = '01',
  targetServiceId,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  useEffect(() => {
    if (targetServiceId) {
      const timer = setTimeout(() => {
        setActiveCategory('All')
        setHighlightedId(targetServiceId)
        scrollToElement(`service-${targetServiceId}`, -100)
      }, 50)
      const clearTimer = setTimeout(() => {
        setHighlightedId(null)
      }, 4000)
      return () => {
        clearTimeout(timer)
        clearTimeout(clearTimer)
      }
    }
  }, [targetServiceId])

  const categories = [
    'All',
    'Software Engineering',
    'App Development',
    'Cloud & Edge',
    'Data & AI',
    'UX/UI & CoUI',
  ]

  const filteredServices =
    activeCategory === 'All'
      ? IT_SERVICES_DATA
      : IT_SERVICES_DATA.filter((s) => s.category === activeCategory)

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#0052cb]" />
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#0052cb]" />
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#0052cb]" />
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#0052cb]" />
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#0052cb]" />
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#0052cb]" />
      default:
        return <Sparkles className="w-5 h-5 text-[#0052cb]" />
    }
  }

  return (
    <section id="it-services" className="relative w-full py-24 md:py-36 bg-paper border-t border-ink-line text-ink">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <SectionEyebrow number={sectionNumber} label="Core Engineering Disciplines" tone="dark" />
            <h2 className="mt-8 font-bricolage text-4xl sm:text-6xl font-medium tracking-tight text-ink leading-[1.02]">
              Next-Generation Digital Services.{' '}
              <span className="text-[#0052cb]">Engineered for Scale.</span>
            </h2>
            <p className="mt-4 font-inter-tight text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              From distributed cloud microservices and cross-platform native apps to autonomous AI workflows and cognitive design systems inspired by global IT industry standards.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-line text-xs font-semibold text-neutral-700 shadow-xs">
              <span className="size-2 rounded-full bg-[#0052cb]" />
              <span>6 Enterprise Delivery Practices • SLA Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0052cb] text-white shadow-md shadow-blue-600/20'
                  : 'bg-white border border-ink-line text-neutral-600 hover:text-ink hover:border-[#0052cb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean, Modern Enterprise Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const isHighlighted = highlightedId === service.id || targetServiceId === service.id
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
                className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-400 flex flex-col justify-between scroll-mt-36 ${
                  isHighlighted
                    ? 'ring-4 ring-[#0052cb] border-[#0052cb] shadow-2xl scale-[1.02] bg-blue-50/15'
                    : 'border-ink-line shadow-sm hover:shadow-xl hover:border-[#0052cb]/40'
                }`}
              >
              <div>
                {/* Visual Image Preview with Rich Context */}
                {service.image && (
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Floating Top Bar */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isHighlighted && (
                          <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-[#0052cb] text-white shadow-sm animate-pulse flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-white" />
                            Selected
                          </span>
                        )}
                        <span className="text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20">
                          {service.badgeText}
                        </span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-300 font-inter-tight">
                        {service.category}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-bricolage text-2xl font-bold text-ink group-hover:text-[#0052cb] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-inter-tight text-xs font-semibold text-[#0052cb] mt-1">
                    {service.tagline}
                  </p>

                  <p className="mt-3 font-inter-tight text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-ink-line flex items-center justify-between font-inter-tight">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] hover:text-[#003da8] group/btn transition-colors cursor-pointer"
                >
                  <span>Inspect SLA & Deliverables</span>
                  <ExternalLink className="size-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onRequestScope(service.title)}
                  className="p-2.5 rounded-xl bg-blue-50 text-[#0052cb] hover:bg-[#0052cb] hover:text-white transition-colors cursor-pointer shadow-xs"
                  title="Request scope for this service"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

        {/* CoUI™ & I3D Process Feature Highlight Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-3xl p-8 border border-ink-line shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-2xl bg-[#0052cb] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <Layers className="size-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052cb] text-[10px] font-bold uppercase tracking-wider mb-1 font-inter-tight">
                Proprietary I3D UX/UI Process
              </div>
              <h4 className="font-bricolage text-lg font-bold text-ink">
                1. Ideate (Strategy Boards) ➔ 2. Investigate (Journey Maps) ➔ 3. Iterate (Prototypes) ➔ 4. Deliver (CoUI™ Dev Handshake)
              </h4>
              <p className="font-inter-tight text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
                Design is an engineering discipline, not a cosmetic layer. We combine behavioral science with our battle-tested CoUI™ token system for pixel-perfect 60fps execution.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestScope('UX/UI Design & CoUI™ Consultation')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#0052cb] text-white font-inter-tight font-semibold text-xs sm:text-sm hover:bg-[#003da8] transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
          >
            Explore CoUI™ System
          </button>
        </motion.div>
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestScope={(title) => {
            setSelectedService(null)
            onRequestScope(title)
          }}
        />
      )}
    </section>
  )
}
