import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  RefreshCw,
  Layers,
  Camera,
  CheckCircle2,
  Globe,
  ArrowRight,
  Box,
  Truck,
  Image as ImageIcon,
  DollarSign,
  ShieldCheck,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'
import { ECOMMERCE_SUITE_DATA } from '../data/mockData'
import type { EcommerceOffering } from '../types'

interface EcommerceSuiteSectionProps {
  onRequestScope: (serviceTitle: string) => void
  sectionNumber?: string
}

export const EcommerceSuiteSection: React.FC<EcommerceSuiteSectionProps> = ({
  onRequestScope,
  sectionNumber = '01',
}) => {
  const [activeOffering, setActiveOffering] = useState<EcommerceOffering>(ECOMMERCE_SUITE_DATA[0])

  return (
    <section id="ecommerce-suite" className="py-24 md:py-36 bg-paper relative overflow-hidden border-t border-ink-line text-ink font-inter-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header with Scroll Reveal */}
        <div className="mb-14">
          <SectionEyebrow number={sectionNumber} label="360° eCommerce Practice" tone="dark" className="mb-6" />

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-[1.02]">
            High-Velocity Digital Commerce. Zero-Downtime Migration.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            From headless Shopify Plus and Adobe Commerce to real-time ERP synchronization, 3D product visualizers, and automated warehouse fulfillment.
          </p>
        </div>

        {/* Clean Practice Selector Pills */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-neutral-100/80 rounded-2xl w-max">
            {ECOMMERCE_SUITE_DATA.map((item) => {
              const isSelected = activeOffering.id === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveOffering(item)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#0052cb] text-white shadow-sm shadow-blue-600/30 font-bold'
                      : 'text-neutral-600 hover:text-ink hover:bg-white/60'
                  }`}
                >
                  {item.id === 'custom-platform-dev' && <ShoppingBag className="size-3.5" />}
                  {item.id === 'ecommerce-migration' && <RefreshCw className="size-3.5" />}
                  {item.id === 'ecommerce-integration' && <Layers className="size-3.5" />}
                  {item.id === 'creative-content-production' && <Camera className="size-3.5" />}
                  {item.id === 'business-process-services' && <CheckCircle2 className="size-3.5" />}
                  <span>{item.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Symmetrical, Balanced Practice Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOffering.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-ink-line p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Expanded Contextual Imagery & Framework Ecosystem (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                {activeOffering.image && (
                  <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] w-full rounded-2xl overflow-hidden shadow-sm bg-neutral-900 border border-ink-line group">
                    <img
                      src={activeOffering.image}
                      alt={activeOffering.title}
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold text-ink uppercase tracking-wider shadow-sm">
                        {activeOffering.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                      <div>
                        <div className="text-[11px] font-mono font-semibold tracking-wider text-blue-200">360° Commerce Practice</div>
                        <div className="text-base sm:text-lg font-bold font-bricolage">{activeOffering.title}</div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[11px] font-semibold text-emerald-300 w-max shrink-0">
                        <ShieldCheck className="size-3 text-emerald-400" />
                        <span>PCI-DSS Level 1</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Supported Enterprise Platforms */}
                {activeOffering.platforms && (
                  <div className="p-4 rounded-2xl bg-paper border border-ink-line shrink-0">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2.5 flex items-center gap-1.5">
                      <Globe className="size-3.5 text-[#0052cb]" />
                      <span>Certified Platforms & Frameworks</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeOffering.platforms.map((p) => (
                        <span
                          key={p}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white text-neutral-800 border border-ink-line shadow-2xs hover:border-blue-300 transition-colors"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Narrative, Capabilities Grid & Request Action (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-bold mb-3">
                    <span>{activeOffering.badge}</span>
                  </div>

                  <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[2rem] font-bold text-ink leading-tight">
                    {activeOffering.title}
                  </h3>

                  <p className="mt-1 font-semibold text-sm sm:text-base text-neutral-700">
                    {activeOffering.subtitle}
                  </p>

                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {activeOffering.description}
                  </p>
                </div>

                {/* Symmetrical 2-Column Capability Grid */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                    Standard Operational Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeOffering.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs text-neutral-800 bg-paper p-3 rounded-xl border border-ink-line"
                      >
                        <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-100">
                  <div className="text-xs text-neutral-500">
                    Puma, Fila & Mango production standards • 99.995% SLA guarantee
                  </div>

                  <button
                    onClick={() => onRequestScope(activeOffering.title)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052cb] text-white font-bold text-xs hover:bg-[#003da8] transition-colors shadow-sm cursor-pointer shrink-0"
                  >
                    <span>Request Scope for {activeOffering.title}</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Integrated Core Architectural Foundations Ribbon */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-ink-line shadow-xs">
            <div className="size-8 rounded-lg bg-blue-50 text-[#0052cb] flex items-center justify-center mb-2.5">
              <Box className="size-4" />
            </div>
            <div className="text-xs font-bold text-ink">PIM Catalog Repository</div>
            <div className="text-[11px] text-neutral-500 mt-1">Multi-channel catalog curation & sync</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ink-line shadow-xs">
            <div className="size-8 rounded-lg bg-blue-50 text-[#0052cb] flex items-center justify-center mb-2.5">
              <Truck className="size-4" />
            </div>
            <div className="text-xs font-bold text-ink">Supply & Fulfillment OMS</div>
            <div className="text-[11px] text-neutral-500 mt-1">Automated multi-warehouse routing</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ink-line shadow-xs">
            <div className="size-8 rounded-lg bg-blue-50 text-[#0052cb] flex items-center justify-center mb-2.5">
              <ImageIcon className="size-4" />
            </div>
            <div className="text-xs font-bold text-ink">Visual AI Image Search</div>
            <div className="text-[11px] text-neutral-500 mt-1">Instant product search by user photo</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ink-line shadow-xs">
            <div className="size-8 rounded-lg bg-blue-50 text-[#0052cb] flex items-center justify-center mb-2.5">
              <DollarSign className="size-4" />
            </div>
            <div className="text-xs font-bold text-ink">Dynamic Pricing Engine</div>
            <div className="text-[11px] text-neutral-500 mt-1">Algorithmic competitor price balancing</div>
          </div>
        </div>

      </div>
    </section>
  )
}
