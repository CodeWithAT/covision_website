import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Palette,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  LineChart,
  Eye,
  Compass,
  Search,
  Share2,
  Zap,
  Database,
  Workflow,
  ChevronRight,
  Server,
  Activity,
  Maximize2,
  Award,
} from 'lucide-react'
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
  // Normalize target service id to match 01 to 06
  const getInitialService = (): ServiceItem => {
    if (targetServiceId) {
      const match = IT_SERVICES_DATA.find(
        (s) => s.id === targetServiceId || (targetServiceId === 'ux-ui' && s.id === 'ux-ui-design')
      )
      if (match) return match
    }
    return IT_SERVICES_DATA[0]
  }

  const [activeService, setActiveService] = useState<ServiceItem>(getInitialService)
  const [modalService, setModalService] = useState<ServiceItem | null>(null)
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null)

  useEffect(() => {
    if (targetServiceId) {
      const match = IT_SERVICES_DATA.find(
        (s) => s.id === targetServiceId || (targetServiceId === 'ux-ui' && s.id === 'ux-ui-design')
      )
      if (match) {
        setActiveService(match)
        setHighlightedCardId(match.id)
        const timer = setTimeout(() => {
          scrollToElement(`service-block-${match.id}`, -120)
        }, 100)
        const clearTimer = setTimeout(() => {
          setHighlightedCardId(null)
        }, 3500)
        return () => {
          clearTimeout(timer)
          clearTimeout(clearTimer)
        }
      }
    }
  }, [targetServiceId])

  const handleSelectService = (service: ServiceItem, shouldScrollToDetail = true) => {
    setActiveService(service)
    setHighlightedCardId(service.id)
    if (shouldScrollToDetail) {
      setTimeout(() => {
        scrollToElement('specific-service-detail-view', -90)
      }, 50)
    }
  }

  const getServiceIcon = (iconName: string, className = 'w-5 h-5 text-[#0052cb]') => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className={className} />
      case 'Smartphone':
        return <Smartphone className={className} />
      case 'Cloud':
        return <Cloud className={className} />
      case 'Brain':
        return <Brain className={className} />
      case 'BarChart3':
        return <BarChart3 className={className} />
      case 'Palette':
        return <Palette className={className} />
      default:
        return <Sparkles className={className} />
    }
  }

  const getDimensionIcon = (index: number) => {
    const icons = [
      <Activity key="0" className="w-4 h-4 text-[#0052cb]" />,
      <Compass key="1" className="w-4 h-4 text-[#0052cb]" />,
      <Target key="2" className="w-4 h-4 text-[#0052cb]" />,
      <TrendingUp key="3" className="w-4 h-4 text-[#0052cb]" />,
      <Search key="4" className="w-4 h-4 text-[#0052cb]" />,
      <Share2 key="5" className="w-4 h-4 text-[#0052cb]" />,
      <Eye key="6" className="w-4 h-4 text-[#0052cb]" />,
      <Brain key="7" className="w-4 h-4 text-[#0052cb]" />,
      <LineChart key="8" className="w-4 h-4 text-[#0052cb]" />,
    ]
    return icons[index % icons.length]
  }

  return (
    <section id="services" className="relative w-full bg-paper text-ink font-inter-tight">
      {/* =========================================================================
          1. TOP ATTACHED BANNER (From user instruction3)
             Uses high-res technology_banner.png without duplicate HTML text overlay.
             Cleanly displays the exact artwork and built-in typography!
          ========================================================================= */}
      <div className="py-10 md:py-14 bg-white border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Visual Banner Card */}
          <div className="relative w-full rounded-3xl overflow-hidden border border-ink-line shadow-lg bg-neutral-900 group">
            <img
              src="/images/services/technology_banner.png"
              alt="Technology: Empowering a Better Tomorrow"
              className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>

          {/* Followed Immediately by the Exact Instruction Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-paper-deep rounded-2xl p-6 sm:p-8 md:p-10 border border-ink-line shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-2.5">
                <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
                <span>Enterprise Technology Vision & Adaptation</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                An evolving suite of solutions tailored to our clients’ changing needs and the dynamic demands of modern enterprises. By harnessing emerging technologies, advancing development practices, and integrating cutting-edge AI capabilities, we deliver innovative solutions that keep businesses ahead.
              </p>
            </div>

            <button
              onClick={() => scrollToElement('capgemini-service-blocks', -90)}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0052cb] text-white text-xs sm:text-sm font-semibold hover:bg-[#003da8] transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
            >
              <span>Explore 6 Delivery Practices</span>
              <ChevronRight className="size-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          2. CAPGEMINI-STYLE SERVICE BLOCKS (6 Blocks as specified in instruction3)
             1. Software engineering
             2. Application development and management
             3. Data Analytics
             4. Cloud and infrastructure
             5. AI/ML Integration
             6. UX/UI
          ========================================================================= */}
      <div id="capgemini-service-blocks" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
              <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
              <span>Section {sectionNumber} • Delivery Practices (Capgemini Style)</span>
            </div>
            <h2 className="font-bricolage text-3xl sm:text-5xl font-medium tracking-tight text-ink leading-tight">
              Enterprise Engineering Services.{' '}
              <span className="text-[#0052cb]">Engineered for Impact.</span>
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl text-sm sm:text-base leading-relaxed">
              Click any service block below to inspect detailed specifications, architecture frameworks, and enterprise delivery modules.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 bg-white border border-ink-line px-3.5 py-1.5 rounded-full shadow-xs">
              6 Core Practices Available
            </span>
          </div>
        </div>

        {/* The 6 Capgemini-Style Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IT_SERVICES_DATA.map((service, index) => {
            const isSelected = activeService.id === service.id
            const isCardHighlighted = highlightedCardId === service.id

            return (
              <motion.div
                key={service.id}
                id={`service-block-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => handleSelectService(service, true)}
                className={`group relative bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected || isCardHighlighted
                    ? 'ring-2 ring-[#0052cb] border-[#0052cb] shadow-xl shadow-blue-900/10 -translate-y-1'
                    : 'border-ink-line shadow-xs hover:shadow-lg hover:border-[#0052cb]/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Top Floating Badge Bar */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <div className="size-10 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-black/75 text-white backdrop-blur-md border border-white/20">
                          {service.number || `0${index + 1}`}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Image Overlay Tag */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-sky-300 font-mono">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Block Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#0052cb]">
                        Service {service.number || `0${index + 1}`}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0052cb] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          <span className="size-1.5 rounded-full bg-[#0052cb] animate-ping" />
                          Viewing Active Scope
                        </span>
                      )}
                    </div>

                    <h3 className="font-bricolage text-2xl font-bold text-ink group-hover:text-[#0052cb] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#0052cb] mt-1.5">
                      {service.tagline}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Micro Highlight Bullets */}
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                      {service.detailedScope.slice(0, 2).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                          <CheckCircle2 className="size-3.5 text-[#0052cb] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{bullet.split(':')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] group-hover:text-[#003da8] transition-colors">
                    <span>Inspect Full Scope</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setModalService(service)
                    }}
                    title="Open in Popup Modal"
                    className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-500 hover:text-[#0052cb] hover:border-[#0052cb] transition-colors"
                  >
                    <Maximize2 className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* =========================================================================
          3. DEDICATED SPECIFIC SERVICE VIEW (Opens when client clicks any service)
             Content as specified in instruction3.txt word-for-word
          ========================================================================= */}
      <div
        id="specific-service-detail-view"
        className="py-16 md:py-24 bg-white border-t border-b border-ink-line scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Layers className="size-3.5" />
              <span>Interactive Service Detail Explorer</span>
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-ink">
              Specific Service Architecture & Delivery View
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600">
              When client selects any service above or uses the tabs below, that service’s full executive scope opens.
            </p>
          </div>

          {/* Interactive Switcher Tabs (01 to 06) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-ink-line pb-6">
            {IT_SERVICES_DATA.map((srv, idx) => {
              const isActive = activeService.id === srv.id
              return (
                <button
                  key={srv.id}
                  onClick={() => handleSelectService(srv, false)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0052cb] text-white shadow-md shadow-blue-600/20'
                      : 'bg-white border border-ink-line text-neutral-700 hover:text-[#0052cb] hover:border-[#0052cb]'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-80">{srv.number || `0${idx + 1}`}.</span>
                  <span>{srv.title}</span>
                </button>
              )
            })}
          </div>

          {/* Service Detail Dynamic Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-paper-deep rounded-3xl p-6 sm:p-10 md:p-12 border border-ink-line shadow-sm"
            >
              {/* Header of Active Service */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-ink-line">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-ink-line text-xs font-mono font-bold text-[#0052cb] mb-3">
                    <span>Practice {activeService.number}</span>
                    <span>•</span>
                    <span>{activeService.category}</span>
                  </div>

                  <h3 className="font-bricolage text-3xl sm:text-5xl font-bold text-ink leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="text-base sm:text-xl font-semibold text-[#0052cb] mt-2">
                    {activeService.tagline}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <button
                    onClick={() => onRequestScope(activeService.title)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0052cb] text-white text-xs sm:text-sm font-semibold hover:bg-[#003da8] transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Request Scope for this Service</span>
                    <ArrowRight className="size-4" />
                  </button>

                  <button
                    onClick={() => setModalService(activeService)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-ink-line text-neutral-700 text-xs sm:text-sm font-semibold hover:text-[#0052cb] hover:border-[#0052cb] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="size-3.5" />
                    <span>Expand Modal View</span>
                  </button>
                </div>
              </div>

              {/* =========================================================================
                  SERVICE 1: SOFTWARE ENGINEERING
                  Exact instruction3 content:
                  - Elevate your business with custom software solutions. Every business operates within its own operating system...
                  - Mention atleast 2 names HRMS of Apto and 2 payroll system.
                  - ERP: Bring all your business operations under one umbrella with ERP solutions.
                  ========================================================================= */}
              {activeService.id === 'software-engineering' && (
                <div className="pt-8 space-y-10">
                  {/* Lead Statement */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs">
                    <h4 className="font-bricolage text-xl sm:text-2xl font-bold text-ink mb-3">
                      Elevate your business with custom software solutions.
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      Every business operates within its own operating system, shaped by its unique audience, processes, and objectives. We engineer tailored software solutions that align seamlessly with your business needs and goals.
                    </p>
                  </div>

                  {/* HRMS Systems (Apto) & Payroll Systems */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Apto HRMS Systems */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-[#0052cb] text-[11px] font-mono font-bold uppercase tracking-wider mb-4">
                          <Cpu className="size-3.5" />
                          <span>Apto HRMS Platforms</span>
                        </div>
                        <h4 className="font-bricolage text-lg sm:text-xl font-bold text-ink mb-2">
                          Human Resource Management Systems (HRMS)
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                          Pre-architected, enterprise-grade HRMS engines configured for automated talent operations:
                        </p>

                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="flex items-center justify-between mb-1.5">
                              <h5 className="font-bold text-sm sm:text-base text-ink">
                                1. Apto PeopleCore HRMS
                              </h5>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0052cb]">
                                Core Enterprise
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              Unified talent lifecycle management featuring biometric attendance synchronization, smart leave allocation, KPI appraisal matrices, and self-service employee portals.
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="flex items-center justify-between mb-1.5">
                              <h5 className="font-bold text-sm sm:text-base text-ink">
                                2. Apto Workforce OS
                              </h5>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0052cb]">
                                Workforce Operations
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              Enterprise-grade workforce planning, multi-shift roster scheduling, automated overtime tracking, organizational hierarchy modeling, and statutory labor law compliance.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span>Includes mobile self-service app</span>
                        <span className="font-semibold text-[#0052cb]">SOC 2 & GDPR Ready</span>
                      </div>
                    </div>

                    {/* Payroll Systems */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-[#0052cb] text-[11px] font-mono font-bold uppercase tracking-wider mb-4">
                          <Database className="size-3.5" />
                          <span>Apto Payroll Automation</span>
                        </div>
                        <h4 className="font-bricolage text-lg sm:text-xl font-bold text-ink mb-2">
                          Automated Payroll Systems
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                          High-precision, error-free financial processing engines with integrated bank-rail disbursements:
                        </p>

                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="flex items-center justify-between mb-1.5">
                              <h5 className="font-bold text-sm sm:text-base text-ink">
                                1. Apto GlobalPay Engine
                              </h5>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0052cb]">
                                Multi-Currency
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              Multi-currency automated payroll calculation with dynamic tax withholdings, social security deductions, audit-ready compliance reporting, and direct bank integration.
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="flex items-center justify-between mb-1.5">
                              <h5 className="font-bold text-sm sm:text-base text-ink">
                                2. Apto FlexPayroll Automation
                              </h5>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0052cb]">
                                Dynamic Salaries
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              Flexible compensation and variable incentive engines handling commissions, custom allowances, benefits disbursements, and digital pay-slip distributions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span>Direct ACH & SEPA payment pipelines</span>
                        <span className="font-semibold text-[#0052cb]">Zero-Calculation Errors</span>
                      </div>
                    </div>
                  </div>

                  {/* ERP Section */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-2">
                      <Workflow className="size-4" />
                      <span>Enterprise Resource Planning</span>
                    </div>
                    <h4 className="font-bricolage text-2xl font-bold text-ink mb-2">
                      ERP.
                    </h4>
                    <p className="text-base sm:text-lg font-medium text-neutral-800 mb-4">
                      Bring all your business operations under one umbrella with ERP solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="font-bold text-ink text-sm mb-1">Financial Consolidation</div>
                        <p className="text-xs text-neutral-600">Multi-entity ledgers, real-time balance sheets, automated reconciliations.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="font-bold text-ink text-sm mb-1">Supply Chain & Inventory</div>
                        <p className="text-xs text-neutral-600">Automated purchase orders, vendor evaluation, stock prediction.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="font-bold text-ink text-sm mb-1">Operations & CRM</div>
                        <p className="text-xs text-neutral-600">Customer pipeline visibility, lead telemetry, order processing.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="font-bold text-ink text-sm mb-1">Real-Time Telemetry</div>
                        <p className="text-xs text-neutral-600">Executive KPI dashboards, cross-department analytics, automated reporting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  SERVICE 2: APPLICATION DEVELOPMENT AND MANAGEMENT
                  Exact instruction3 content:
                  - Turbo-charge your mobile app development with Covision
                  - Wide array of mobile app development solutions
                  - Native App Development
                  - Cross-Platform App Development
                  - Hybrid App Development
                  - Progressive Web Apps
                  - Startup to enterprise level IT architecture (Appinventiv style)
                  - Uses uploaded 3D neon mobile podium image
                  ========================================================================= */}
              {activeService.id === 'app-development' && (
                <div className="pt-8 space-y-10">
                  {/* Lead Headline Card with Uploaded 3D Neon Mobile Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-ink-line shadow-xs">
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                        <Smartphone className="size-3.5" />
                        <span>Mobile Engineering Leadership</span>
                      </div>
                      <h4 className="font-bricolage text-2xl sm:text-4xl font-bold text-ink leading-tight">
                        Turbo-charge your mobile app development with Covision
                      </h4>
                      <p className="text-base sm:text-lg font-semibold text-[#0052cb] mt-2">
                        Wide array of mobile app development solutions
                      </p>
                      <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                        From agile startup MVPs to high-scale enterprise ecosystems, we deliver resilient, high-retention mobile experiences backed by fluid 60fps micro-animations, offline synchronization, and enterprise security architectures.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {['iOS Native', 'Android Native', 'Flutter', 'React Native', 'Capacitor', 'PWA'].map((pill) => (
                          <span
                            key={pill}
                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold border border-slate-200"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* The User-Provided 3D Mobile Phone Image */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                      <img
                        src="/images/services/mobile_app_3d_podium.png"
                        alt="3D Mobile App Development on Neon Podium"
                        className="w-full h-72 sm:h-80 object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <span className="text-white text-xs font-mono font-semibold">
                          Proprietary Mobile Engineering Architecture
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4 Solutions Grid */}
                  <div>
                    <h5 className="font-bricolage text-xl font-bold text-ink mb-6">
                      Wide Array of Mobile Solutions
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-ink-line shadow-xs hover:border-[#0052cb] transition-colors">
                        <div className="size-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center font-bold text-sm mb-4">
                          01
                        </div>
                        <h6 className="font-bold text-base text-ink mb-2">Native App Development</h6>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Platform-native iOS (Swift) and Android (Kotlin) applications taking full advantage of on-device GPUs, biometric authentication, and deep OS integrations for uncompromising 60fps performance.
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-ink-line shadow-xs hover:border-[#0052cb] transition-colors">
                        <div className="size-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center font-bold text-sm mb-4">
                          02
                        </div>
                        <h6 className="font-bold text-base text-ink mb-2">Cross-Platform App Development</h6>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Unified single-codebase velocity utilizing Flutter and React Native. Delivers native-fidelity experiences with up to 90% code reuse and simultaneous store rollouts across iOS and Android.
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-ink-line shadow-xs hover:border-[#0052cb] transition-colors">
                        <div className="size-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center font-bold text-sm mb-4">
                          03
                        </div>
                        <h6 className="font-bold text-base text-ink mb-2">Hybrid App Development</h6>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Versatile web-containerized mobile architectures using modern Capacitor and Ionic frameworks, ideal for rapid business validation, unified web/app maintenance, and cost optimization.
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border border-ink-line shadow-xs hover:border-[#0052cb] transition-colors">
                        <div className="size-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center font-bold text-sm mb-4">
                          04
                        </div>
                        <h6 className="font-bold text-base text-ink mb-2">Progressive Web Apps</h6>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Zero-install responsive web applications featuring service-worker offline caching, background push notifications, and fast loading times, eliminating App Store friction.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Startup to Enterprise Lifecycle Architecture (Inspired by Appinventiv) */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-2">
                      <Workflow className="size-4" />
                      <span>Full Lifecycle Engineering (Startup to Enterprise)</span>
                    </div>
                    <h5 className="font-bricolage text-xl font-bold text-ink mb-4">
                      Application Architecture Spectrum
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Stage 1 • Startup MVPs</span>
                        <h6 className="font-bold text-ink text-sm mt-1 mb-1.5">Rapid Market Validation</h6>
                        <p className="text-xs text-neutral-600">Lean prototyping, analytics instrumentation, core loop testing, and quick investor-ready releases.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Stage 2 • Growth & Scale</span>
                        <h6 className="font-bold text-ink text-sm mt-1 mb-1.5">Fault-Tolerant Microservices</h6>
                        <p className="text-xs text-neutral-600">Elastic cloud backends, offline-first sync protocols, automated CI/CD app-store pipelines, and security hardening.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Stage 3 • Enterprise IT</span>
                        <h6 className="font-bold text-ink text-sm mt-1 mb-1.5">24/7 SLA & Modernization</h6>
                        <p className="text-xs text-neutral-600">Legacy modernization, zero-regression patches, enterprise single sign-on (SSO), and SOC 2 Type II compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  SERVICE 3: DATA ANALYTICS
                  Exact instruction3 content:
                  - Business Analytics & Predictive Intelligence
                  - The Divine Weapon of E-Business. Powered by an Arsenal of Technological Expertise.
                  - Analytics is not merely a tool for data analysis but it is a transformative force in e-business...
                  - Arsenal of 16 tools
                  - All 9 critical dimensions
                  ========================================================================= */}
              {activeService.id === 'data-analytics' && (
                <div className="pt-8 space-y-10">
                  {/* Lead Vision Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-line shadow-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                      <BarChart3 className="size-3.5" />
                      <span>The Divine Weapon of E-Business</span>
                    </div>
                    <h4 className="font-bricolage text-2xl sm:text-4xl font-bold text-ink leading-tight">
                      Business Analytics & Predictive Intelligence
                    </h4>
                    <p className="text-base sm:text-lg font-semibold text-[#0052cb] mt-2">
                      The Divine Weapon of E-Business. Powered by an Arsenal of Technological Expertise.
                    </p>
                    <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                      Analytics is not merely a tool for data analysis but it is a transformative force in e-business. It serves as a strategic weapon that decodes real-time events, uncovers actionable insights, and equips businesses to anticipate and shape future outcomes.
                    </p>

                    {/* The Arsenal of Analytical Tools (16 Tools) */}
                    <div className="mt-8 pt-8 border-t border-ink-line">
                      <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed mb-4">
                        At Covision, we harness an extensive arsenal of analytical tools and intelligent platforms, including Google Analytics, Microsoft Clarity, Crazy Egg, Mixpanel, HubSpot Analytics, Adobe Analytics, Shopify Analytics, Albert AI, Pricefx, Dynamic Yield, Persado, BuzzSumo, Stitch Fix algorithms, Google Trends, Qlik Sense, and Tableau. These technologies help businesses analyse critical performance indicators across key dimensions:
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {[
                          'Google Analytics',
                          'Microsoft Clarity',
                          'Crazy Egg',
                          'Mixpanel',
                          'HubSpot Analytics',
                          'Adobe Analytics',
                          'Shopify Analytics',
                          'Albert AI',
                          'Pricefx',
                          'Dynamic Yield',
                          'Persado',
                          'BuzzSumo',
                          'Stitch Fix algorithms',
                          'Google Trends',
                          'Qlik Sense',
                          'Tableau',
                        ].map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-xs font-semibold text-[#0052cb] shadow-2xs"
                          >
                            <span className="size-1.5 rounded-full bg-[#0052cb]" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* All 9 Critical Performance Dimensions (Word for word from instruction3) */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h5 className="font-bricolage text-xl sm:text-2xl font-bold text-ink">
                        9 Key Performance Dimensions
                      </h5>
                      <span className="text-xs font-mono text-neutral-500">
                        Exhaustive Telemetry Ingestion
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: 'User Behaviour & Engagement',
                          desc: 'Customer journeys, interactions, and behavioural patterns.',
                        },
                        {
                          title: 'Traffic Sources & Audience Insights',
                          desc: 'Acquisition channels, demographics, and audience characteristics.',
                        },
                        {
                          title: 'E-Commerce & Conversion Performance',
                          desc: 'Sales funnels, conversion rates, and purchase behaviour.',
                        },
                        {
                          title: 'Pricing, Discounts & Revenue Optimisation',
                          desc: 'Pricing strategies, promotional effectiveness, and revenue opportunities.',
                        },
                        {
                          title: 'Fashion, Trends & Market Intelligence',
                          desc: 'Emerging trends, consumer preferences, and competitor activity.',
                        },
                        {
                          title: 'Content & Campaign Performance',
                          desc: 'Content engagement, marketing effectiveness, and campaign outcomes.',
                        },
                        {
                          title: 'Heatmaps & Session Recordings',
                          desc: 'On-page interactions, navigation patterns, and user experience.',
                        },
                        {
                          title: 'Predictive & AI-Driven Analytics',
                          desc: 'Forecasting, intelligent recommendations, and opportunity identification.',
                        },
                        {
                          title: 'Technical & Digital Performance',
                          desc: 'Website performance, technical issues, and digital experience metrics.',
                        },
                      ].map((dim, dIdx) => (
                        <div
                          key={dim.title}
                          className="bg-white rounded-2xl p-6 border border-ink-line shadow-xs hover:border-[#0052cb] transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                {getDimensionIcon(dIdx)}
                              </div>
                              <span className="text-xs font-mono font-bold text-neutral-400">
                                0{dIdx + 1}
                              </span>
                            </div>
                            <h6 className="font-bold text-base text-ink mb-1.5 leading-snug">
                              {dim.title}
                            </h6>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                              {dim.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  SERVICE 4: CLOUD AND INFRASTRUCTURE
                  Exact instruction3 content:
                  - Lead paragraph with hyperscalers (AWS, Azure, Google Cloud)
                  - Cloud Strategy, Architecture, Consulting, and Design: Strategize smart. Transform fast.
                    - IT landscape assessment
                    - Tailored Cloud Roadmaps
                  - Cloud Migration Services (4 points)
                  - Media & Content Cloud Solutions (4 foundational parts)
                  ========================================================================= */}
              {activeService.id === 'cloud-infrastructure' && (
                <div className="pt-8 space-y-10">
                  {/* Lead Paragraph Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-line shadow-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                      <Cloud className="size-3.5" />
                      <span>Cloud Architecture & Hyperscaler Partnerships</span>
                    </div>
                    <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                      cloud services are considered a powerful weapon in the arsenal of the digital business ecosystem. Fusion of AI with cloud engineering created intelligent, self-optimizing, and predictive digital ecosystems. Our strategic partnerships with leading hyperscalers—such as AWS, Microsoft Azure, and Google Cloud—enable us to leverage cutting-edge innovations to accelerate your digital transformation.
                    </p>

                    {/* Hyperscaler Badges */}
                    <div className="mt-6 pt-6 border-t border-ink-line flex flex-wrap items-center gap-4">
                      <span className="text-xs font-mono font-bold uppercase text-neutral-500">
                        Strategic Hyperscalers:
                      </span>
                      {['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'].map((partner) => (
                        <span
                          key={partner}
                          className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs inline-flex items-center gap-1.5"
                        >
                          <Server className="size-3 text-[#0052cb]" />
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Section 1 & Section 2: Strategy + Migration */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Cloud Strategy, Architecture, Consulting, and Design */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-2">
                        <Workflow className="size-4" />
                        <span>Advisory & Roadmaps</span>
                      </div>
                      <h4 className="font-bricolage text-xl sm:text-2xl font-bold text-ink mb-1">
                        Cloud Strategy, Architecture, Consulting, and Design
                      </h4>
                      <p className="text-sm font-semibold text-[#0052cb] mb-6">
                        Strategize smart. Transform fast.
                      </p>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                          <h5 className="font-bold text-sm text-ink mb-1">IT landscape assessment</h5>
                          <p className="text-xs sm:text-sm text-neutral-600">
                            Evaluate infrastructure and align with business goals.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                          <h5 className="font-bold text-sm text-ink mb-1">
                            Tailored Cloud Roadmaps for cloud adoption and optimization
                          </h5>
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            It includes designing scalable, secure, and cost-optimized cloud architectures—ranging from cloud-native and microservices-based systems to hybrid and multi-cloud environments.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cloud Migration Services */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-2">
                          <Zap className="size-4" />
                          <span>Seamless Re-Platforming</span>
                        </div>
                        <h4 className="font-bricolage text-xl sm:text-2xl font-bold text-ink mb-1">
                          Cloud Migration Services
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                          Zero-downtime execution rails ensuring continuous business availability:
                        </p>

                        <div className="space-y-3">
                          {[
                            'Application and data migration',
                            'Lift-and-shift operations',
                            'Cloud-to-cloud transitions',
                            'Legacy system modernization',
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-800"
                            >
                              <CheckCircle2 className="size-4 text-[#0052cb] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span>Zero data loss guarantee</span>
                        <span className="font-semibold text-[#0052cb]">Sub-minute failover</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Media & Content Cloud Solutions */}
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-line shadow-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                      <Sparkles className="size-3.5" />
                      <span>Specialized Practice</span>
                    </div>
                    <h4 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink mb-6">
                      Media & Content Cloud Solutions
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Foundational Architecture</span>
                        <h5 className="font-bold text-base text-ink mt-1 mb-2">
                          Media & Content-Centric Cloud Engineering
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          The core infrastructure that centralizes your media operations and enables real-time global collaboration.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">The Core Platform</span>
                        <h5 className="font-bold text-base text-ink mt-1 mb-2">
                          Cloud-Based Digital Asset Management (DAM) Systems
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          The scalable, secure repository to store, manage, and distribute all your multimedia assets via CDNs.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Built-in Intelligence</span>
                        <h5 className="font-bold text-base text-ink mt-1 mb-2">
                          AI-Powered Metadata Tagging
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Cloud-integrated Computer Vision and NLP that automatically tags, transcribes, and organizes your assets the moment they are uploaded.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-mono font-bold text-[#0052cb]">Distribution & Engagement</span>
                        <h5 className="font-bold text-base text-ink mt-1 mb-2">
                          AI-Based Recommendation Engines
                        </h5>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          Smart data models hosted in the cloud that track viewer behaviour to deliver hyper-personalized content suggestions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  SERVICE 5: AI/ML INTEGRATION
                  ========================================================================= */}
              {activeService.id === 'ai-ml-integration' && (
                <div className="pt-8 space-y-10">
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-line shadow-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                      <Brain className="size-3.5" />
                      <span>Cognitive Automation & Generative Systems</span>
                    </div>
                    <h4 className="font-bricolage text-2xl sm:text-4xl font-bold text-ink leading-tight">
                      Enterprise AI/ML Integration & Autonomous Systems
                    </h4>
                    <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
                      Custom machine learning pipelines, autonomous multi-agent cognitive systems, computer vision, and private air-gapped LLMs engineered for enterprise operations with zero data leakage.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h5 className="font-bold text-sm text-ink mb-1.5">Autonomous Multi-Agent AI</h5>
                        <p className="text-xs text-neutral-600">Multi-agent orchestrations executing business workflows, approvals, and dynamic decision-making autonomously.</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h5 className="font-bold text-sm text-ink mb-1.5">Computer Vision & OCR</h5>
                        <p className="text-xs text-neutral-600">Real-time defect detection, biometric validation, visual inspection, and automated document extraction.</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h5 className="font-bold text-sm text-ink mb-1.5">Sovereign Enterprise RAG</h5>
                        <p className="text-xs text-neutral-600">Air-gapped retrieval-augmented generation grounded strictly in proprietary enterprise data with SOC 2 compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  SERVICE 6: UX/UI
                  Exact instruction3 content:
                  - ux/ui Design Is a Dialogue, Not Decoration—Creating Seamless Connections Between Brands and Users.
                  - Cognitive Science–Backed Design Thinking
                  - At Covison, design is a dialogue, not decoration. Grounded in cognitive psychology and behavioural science, we design interfaces that think, react, and resonate with users.
                  - Our Own Design System- Covision Lattice/ monolith
                  - Covision Lattice/ monolith isn’t just a library; it’s an operational strategy—one that empowers to deliver exceptional, scalable, and user-centric products with unmatched efficiency and quality.
                  ========================================================================= */}
              {(activeService.id === 'ux-ui-design' || activeService.id === 'ux-ui') && (
                <div className="pt-8 space-y-10">
                  {/* Lead Quote Card */}
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-line shadow-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                      <Palette className="size-3.5" />
                      <span>Design Philosophy</span>
                    </div>
                    <h4 className="font-bricolage text-2xl sm:text-4xl font-bold text-ink leading-tight">
                      ux/ui Design Is a Dialogue, Not Decoration—Creating Seamless Connections Between Brands and Users.
                    </h4>
                  </div>

                  {/* Cognitive Science & Design System Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Cognitive Science–Backed Design Thinking */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-ink-line shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
                          <Brain className="size-4" />
                          <span>Behavioral Science Foundation</span>
                        </div>
                        <h5 className="font-bricolage text-xl sm:text-2xl font-bold text-ink mb-3">
                          Cognitive Science–Backed Design Thinking
                        </h5>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          At Covison, design is a dialogue, not decoration. Grounded in cognitive psychology and behavioural science, we design interfaces that think, react, and resonate with users.
                        </p>

                        <div className="mt-6 space-y-2.5">
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                            <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                            <span>Reduced cognitive friction and rapid visual information processing</span>
                          </div>
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                            <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                            <span>Intent-driven visual hierarchies and subconscious user task flow</span>
                          </div>
                          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                            <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                            <span>WCAG 2.1 AAA accessibility for universally inclusive interaction</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-semibold text-[#0052cb]">
                        Fluid 60fps Micro-Interactions • Zero Mental Overload
                      </div>
                    </div>

                    {/* Our Own Design System- Covision Lattice/ monolith */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200/80 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
                          <Layers className="size-4" />
                          <span>Proprietary Design Strategy</span>
                        </div>
                        <h5 className="font-bricolage text-xl sm:text-2xl font-bold text-ink mb-3">
                          Our Own Design System- Covision Lattice/ monolith
                        </h5>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          Covision Lattice/ monolith isn’t just a library; it’s an operational strategy—one that empowers to deliver exceptional, scalable, and user-centric products with unmatched efficiency and quality.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="font-bold text-xs text-ink mb-1">Tokenized Foundation</div>
                            <p className="text-[11px] text-neutral-500">Universal design tokens for color, typography, radii, and spatial grids.</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="font-bold text-xs text-ink mb-1">Monolith Primitives</div>
                            <p className="text-[11px] text-neutral-500">Battle-tested enterprise components with zero dev-handoff ambiguity.</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="font-bold text-xs text-ink mb-1">Speed Multiplier</div>
                            <p className="text-[11px] text-neutral-500">2.5x faster feature velocity from Figma design to production code.</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                            <div className="font-bold text-xs text-ink mb-1">Adaptive Theming</div>
                            <p className="text-[11px] text-neutral-500">Dynamic high-contrast dark/light mode and white-label support.</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                        <span>Covision Lattice / monolith v2.4</span>
                        <span className="font-semibold text-[#0052cb]">Production-Ready SDK</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Shared Service Action Footer */}
              <div className="mt-12 pt-8 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-white border border-ink-line shadow-xs flex items-center justify-center">
                    <Award className="size-5 text-[#0052cb]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink">Guaranteed Production SLA</div>
                    <div className="text-xs text-neutral-500">{activeService.sla}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onRequestScope(activeService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0052cb] text-white text-xs sm:text-sm font-semibold hover:bg-[#003da8] transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Request Scope for {activeService.title}</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Service Detail Modal (Optional Fullscreen/Popup View) */}
      {modalService && (
        <ServiceDetailModal
          service={modalService}
          onClose={() => setModalService(null)}
          onRequestScope={(title) => {
            setModalService(null)
            onRequestScope(title)
          }}
        />
      )}
    </section>
  )
}