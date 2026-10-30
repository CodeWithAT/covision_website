import React, { useState, useEffect } from 'react'
import {
  Cpu,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Palette,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
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
  const [modalService, setModalService] = useState<ServiceItem | null>(null)
  const [activeNavId, setActiveNavId] = useState<string>('software-engineering')

  useEffect(() => {
    if (targetServiceId) {
      let normalized = targetServiceId === 'ux-ui' ? 'ux-ui-design' : targetServiceId
      if (normalized === 'app-development') normalized = 'application-development'
      setActiveNavId(normalized)
      const timer = setTimeout(() => {
        scrollToElement(`practice-showcase-${normalized}`, -100)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [targetServiceId])

  const scrollToPractice = (id: string) => {
    setActiveNavId(id)
    scrollToElement(`practice-showcase-${id}`, -100)
  }

  return (
    <section id="services" className="relative w-full bg-paper text-ink font-inter-tight">
      {/* =========================================================================
          1. TOP ATTACHED HERO BANNER (Cinematic Dark Theme matching #ai)
             - Features technology_banner.png with cobalt blue metallic sphere
             - Displays exact instruction3 intro paragraph word-for-word
             - Unified crisp white headline
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#07090E] text-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-800">
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/25 via-slate-950/80 to-[#07090E] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,102,255,0.25),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Left Column: Core Headline, Vision & Exact Instruction3 Paragraph */}
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold tracking-wider uppercase">
                <Sparkles className="size-3.5 text-blue-400 animate-pulse" />
                <span>Services & Cloud Fabric</span>
              </div>

              <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Empowering a Better Tomorrow.
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                An evolving suite of solutions tailored to our clients’ changing needs and the dynamic demands of modern enterprises. By harnessing emerging technologies, advancing development practices, and integrating cutting-edge AI capabilities, we deliver innovative solutions that keep businesses ahead.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToPractice('software-engineering')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
                >
                  <span>Explore 6 Delivery Practices</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onRequestScope('Enterprise Architecture & Cloud Fabric')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>Request Scope</span>
                </button>
              </div>
            </div>

            {/* Right Column: User's Banner Image with Cobalt Blue Metallic Sphere */}
            <div className="lg:max-w-lg w-full">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/80 group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src="/images/services/technology_banner.png"
                    alt="Technology: Empowering a Better Tomorrow"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. QUICK JUMP PILL NAVIGATION BAR
             - Clean, borderless horizontal tabs for immediate navigation
          ========================================================================= */}
      <div className="sticky top-20 z-30 bg-paper/95 backdrop-blur-md border-b border-ink-line py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: 'software-engineering', num: '01', label: 'Software Engineering' },
              { id: 'application-development', num: '02', label: 'Application Dev' },
              { id: 'data-analytics', num: '03', label: 'Data Analytics' },
              { id: 'cloud-infrastructure', num: '04', label: 'Cloud & Infrastructure' },
              { id: 'ai-ml-integration', num: '05', label: 'AI/ML Integration' },
              { id: 'ux-ui-design', num: '06', label: 'UX/UI Design' },
            ].map((tab) => {
              const isActive = activeNavId === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToPractice(tab.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0052cb] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:text-black border border-ink-line hover:border-neutral-400'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{tab.num}.</span>
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. SECTION HEADER
          ========================================================================= */}
      <div className="pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
            <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
            <span>Section {sectionNumber} • 6 Delivery Practices</span>
          </div>
          <h2 className="font-bricolage text-3xl sm:text-5xl font-medium tracking-tight text-ink leading-tight">
            Enterprise Engineering Services. Engineered for Impact.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            A comprehensive, high-velocity delivery framework modeled for modern enterprise scale.
          </p>
        </div>
      </div>

      {/* =========================================================================
          4. THE 6 PRACTICES: SYMMETRICAL 50/50 BALANCED EDITORIAL SHOWCASE
             - Equal 50/50 columns on desktop
             - Balanced heights (no giant text wall vs squat image)
             - Crisp, punchy, executive bullet points
             - Solid black typography
             - 100% faithful to instruction3.txt
          ========================================================================= */}
      <div className="py-10 space-y-20 sm:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* -----------------------------------------------------------------------
            PRACTICE 01: SOFTWARE ENGINEERING
            Layout: Image Left (50%), Text & Bullets Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-software-engineering"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (50% Width, Balanced Height) */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg"
                alt="Software Engineering Architecture & Systems"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>

          {/* Structured Text & Bullets (50% Width, Perfectly Balanced) */}
          <div className="w-full space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="size-3.5 text-[#0052cb]" />
              <span>01. Software Engineering</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              Elevate your business with custom software solutions.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Every business operates within its own operating system, shaped by its unique audience, processes, and objectives. We engineer tailored software solutions that align seamlessly with your business needs and goals.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">HRMS of Apto: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Tailored human resource management system automating talent lifecycle, role hierarchies, and employee governance.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">2 Sovereign Payroll Systems: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Apto Payroll & CoVision SecurePay handling multi-country statutory tax, banking APIs, and zero-defect wage disbursements.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Centralized ERP Solutions: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Bring all your business operations under one umbrella unifying CRM, procurement, inventory, and automated accounting.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Software Engineering (HRMS, Payroll & ERP)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[0])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 02: APPLICATION DEVELOPMENT AND MANAGEMENT
            Layout: Text Left (50%), Image Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-application-development"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Text & Bullets (Left 50%) */}
          <div className="w-full space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Smartphone className="size-3.5 text-[#0052cb]" />
              <span>02. Application Development & Management</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              Turbo-charge your mobile app development with CoVision.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Wide array of mobile app development solutions engineered for consumer-grade fluidity and mission-critical enterprise reliability across platforms.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Native App Development: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Dedicated Swift (iOS) and Kotlin (Android) engineering maximizing hardware acceleration and 60fps fluidity.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Cross-Platform & Hybrid: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Flutter and React Native architectures sharing 95%+ unified codebase efficiency with native-grade UI.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Progressive Web Apps (PWA): </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Zero-install web apps with offline-first service worker caching and instant cross-device reach.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Startup to Enterprise Scale: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Proven engineering benchmarks for high-velocity MVP validation and resilient 24/7 lifecycle support.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Mobile App Development (Native, Cross-Platform & PWA)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[1])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right 50%) */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/images/services/mobile_app_3d_podium.png"
                alt="Futuristic Mobile App Development Ecosystem"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 03: DATA ANALYTICS & PREDICTIVE INTELLIGENCE
            Layout: Image Left (50%), Text & Bullets Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-data-analytics"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (Left 50%) */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg"
                alt="Business Analytics & Predictive Intelligence Console"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>

          {/* Structured Text & Bullets (Right 50%) */}
          <div className="w-full space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <BarChart3 className="size-3.5 text-[#0052cb]" />
              <span>03. Data Analytics</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              Business Analytics & Predictive Intelligence.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              The Divine Weapon of E-Business. Powered by an Arsenal of Technological Expertise. Analytics is a transformative force decoding real-time events and equipping businesses to shape future outcomes.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">9 Critical Performance Dimensions: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">User behaviour, traffic channels, funnel conversions, dynamic pricing, heatmaps, and predictive AI analytics.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Enterprise Analytics Arsenal: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Google Analytics, Microsoft Clarity, Mixpanel, Tableau, Adobe Analytics, Shopify, Albert AI, and Qlik Sense.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Predictive Machine Learning Models: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Forecasting customer lifetime value, automated trend discovery, churn prevention, and revenue yield optimization.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Data Analytics & Predictive Intelligence')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[2])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 04: CLOUD AND INFRASTRUCTURE
            Layout: Text Left (50%), Image Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-cloud-infrastructure"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Text & Bullets (Left 50%) */}
          <div className="w-full space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Cloud className="size-3.5 text-[#0052cb]" />
              <span>04. Cloud & Infrastructure</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              Strategize smart. Transform fast.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Cloud services are considered a powerful weapon in the arsenal of the digital business ecosystem. Fusion of AI with cloud engineering created intelligent, self-optimizing digital ecosystems.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Hyperscaler Partnerships: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Strategic alliances with AWS, Microsoft Azure, and Google Cloud for scalable, secure multi-cloud architectures.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Zero-Downtime Migration Services: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Production data migration, lift-and-shift operations, cloud-to-cloud transitions, and legacy modernization.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Media & Content Cloud Solutions: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Cloud-Based Digital Asset Management (DAM), AI Computer Vision metadata tagging, and recommendation engines.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Cloud & Infrastructure (AWS, Azure & GCP)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[3])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right 50%) */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg"
                alt="Enterprise Cloud Datacenter & Infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 05: AI / ML INTEGRATION
            Layout: Image Left (50%), Text & Bullets Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-ai-ml-integration"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (Left 50%) */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg"
                alt="Enterprise AI Silicon & Autonomous Agent Mesh"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>

          {/* Structured Text & Bullets (Right 50%) */}
          <div className="w-full space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Brain className="size-3.5 text-[#0052cb]" />
              <span>05. AI / ML Integration</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              Cognitive AI Orchestration & Autonomous Agent Mesh.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Unite Generative AI creativity with autonomous Agentic AI execution. Engineered to learn your workflows, automate mission-critical operations, and deliver measurable enterprise value.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Fine-Tuned Enterprise Models: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Sovereign model tuning on private datasets with strict data boundaries, safety rails, and vector embeddings.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Autonomous Agentic Workflows: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Multi-agent task orchestration, dynamic API calling, self-healing retries, and asynchronous decision matrices.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Enterprise Software Connectors: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Seamless integration weaving cognitive agents into existing SAP, Salesforce, ERP, and database pipelines.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('AI/ML Integration & Autonomous Agent Mesh')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[4])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 06: UX / UI DESIGN
            Layout: Text Left (50%), Image Right (50%)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-ux-ui-design"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Text & Bullets (Left 50%) */}
          <div className="w-full space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Palette className="size-3.5 text-[#0052cb]" />
              <span>06. UX / UI Design</span>
            </div>

            <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-tight">
              UX/UI Design Is a Dialogue, Not Decoration.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Creating seamless connections between brands and users. At CoVision, design is grounded in cognitive psychology and behavioural science to resonate deeply with users.
            </p>

            {/* Clear, Punchy Executive Bullets */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Cognitive Science–Backed Design: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Grounded in cognitive psychology and behavioral science to minimize friction and sculpt frictionless user flows.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">CoVision Lattice / Monolith System: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">An operational design system strategy delivering scalable, user-centric interfaces with tokenized design hygiene.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-sm sm:text-base text-ink">Accessibility & Performance: </span>
                  <span className="text-xs sm:text-sm text-neutral-600">Full WCAG 2.1 AAA accessibility compliance, fluid micro-interactions, and high-conversion transaction flows.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('UX/UI Design & CoVision Lattice/monolith')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[5])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>Full Technical Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right 50%) */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-lg group h-[380px] sm:h-[440px] lg:h-[480px]">
              <img
                src="/images/services/ux_ui_design.jpg"
                alt="Cognitive Science UX/UI Design & CoVision Lattice"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          5. TECHNICAL SPECIFICATIONS MODAL (When clicking Full Technical Specs)
          ========================================================================= */}
      {modalService && (
        <ServiceDetailModal
          service={modalService}
          onClose={() => setModalService(null)}
          onRequestScope={(serviceTitle) => {
            setModalService(null)
            onRequestScope(serviceTitle)
          }}
        />
      )}
    </section>
  )
}
