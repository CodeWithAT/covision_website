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
             - Unified white headline (no color split)
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase border border-blue-400/30 backdrop-blur-md">
                      Enterprise Architecture
                    </span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">6 Core Delivery Practices</div>
                      <div className="text-[11px] text-slate-400 font-mono">SLA Guaranteed • Capgemini Structure</div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
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
              { id: 'application-development', num: '02', label: 'Application Dev & Management' },
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
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
            <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
            <span>Section {sectionNumber} • 6 Delivery Practices</span>
          </div>
          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-tight">
            Enterprise Engineering Services. Engineered for Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            A comprehensive, high-velocity delivery framework modeled for modern enterprise scale. Explore detailed capabilities, sovereign IP architectures, and technical specifications below.
          </p>
        </div>
      </div>

      {/* =========================================================================
          4. THE 6 PRACTICES: ALTERNATING LEFT/RIGHT EXECUTIVE EDITORIAL SHOWCASE
             - 65-70% visual prominence
             - High-impact imagery with subtle telemetry pills
             - Crisp black typography
             - Clearly formatted bullet points with bold headlines
             - 100% faithful to instruction3.txt (Apto HRMS, Payroll, ERP, DAM, etc.)
          ========================================================================= */}
      <div className="py-12 space-y-24 sm:space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* -----------------------------------------------------------------------
            PRACTICE 01: SOFTWARE ENGINEERING
            Layout: Image Left (60-70% visual), Text & Bullets Right
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-software-engineering"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (60-70% Visual Prominence) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg"
                  alt="Software Engineering Architecture & Systems"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 01 • Core Systems
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">Custom Operating Systems & ERP</div>
                    <div className="text-xs text-slate-300 font-mono">HRMS of Apto • Sovereign Payroll • Unified ERP</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
                    100% SLA Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Editorial Content & Bullet Points (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="size-3.5 text-[#0052cb]" />
              <span>01. Software Engineering</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              Elevate your business with custom software solutions.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Every business operates within its own operating system, shaped by its unique audience, processes, and objectives. We engineer tailored software solutions that align seamlessly with your business needs and goals.
            </p>

            {/* Clear Structured Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    HRMS of Apto & Enterprise Workforce Platforms
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Custom HRMS deployment engineered for automated talent lifecycle management, role-based hierarchy governance, attendance orchestration, and sovereign personnel records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Dual Sovereign Payroll Systems (Apto Payroll & CoVision SecurePay)
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Audit-ready payroll engines supporting multi-country statutory tax deductions, direct-deposit banking protocols, salary slip generations, and zero-error wage processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Unified Enterprise ERP
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Bring all your business operations under one umbrella with modular ERP solutions unifying inventory, CRM, procurement, supply-chain logistics, and automated accounting.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Software Engineering (HRMS, Payroll & ERP)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for Software Engineering</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[0])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 02: APPLICATION DEVELOPMENT AND MANAGEMENT
            Layout: Text & Bullets Left, Image Right (Alternating!)
            Visual: Futuristic 3D Mobile App on Glowing Podium
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-application-development"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Editorial Content & Bullet Points (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Smartphone className="size-3.5 text-[#0052cb]" />
              <span>02. Application Development & Management</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              Turbo-charge your mobile app development with CoVision.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Wide array of mobile app development solutions engineered for fluid touch gestures, consumer delight, and high-concurrency enterprise mobile operations.
            </p>

            {/* Clear Structured Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Native App Development
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Tailored Swift (iOS) and Kotlin (Android) architectures engineered for maximum hardware utilization, biometric security, offline caching, and 60fps render loops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Cross-Platform App Development
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Single-codebase Flutter and React Native deployments sharing 95%+ core business logic while rendering genuine native platform UI components across iOS and Android.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Hybrid App Development
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Agile web-to-mobile wrapper architectures (Ionic / Capacitor) enabling rapid prototyping, webview sync, and accelerated time-to-market.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Progressive Web Apps (PWA)
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Zero-install web applications featuring offline-first service worker caching, background push notifications, and instant home screen installation.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Mobile App Development (Native, Cross-Platform & PWA)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for Mobile Apps</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[1])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/images/services/mobile_app_3d_podium.png"
                  alt="Futuristic Mobile App Development Ecosystem"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 02 • Mobile Ecosystem
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">Full-Spectrum Mobile App Lifecycle</div>
                    <div className="text-xs text-slate-300 font-mono">iOS Swift • Android Kotlin • Flutter • React Native • PWA</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono text-xs font-semibold">
                    60 FPS Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 03: DATA ANALYTICS & PREDICTIVE INTELLIGENCE
            Layout: Image Left, Text & Bullets Right
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-data-analytics"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg"
                  alt="Business Analytics & Predictive Intelligence Console"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 03 • Intelligence Arsenal
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">The Divine Weapon of E-Business</div>
                    <div className="text-xs text-slate-300 font-mono">16+ Enterprise Tools • 9 Critical Analytics Dimensions</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold">
                    Real-Time Streams
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Editorial Content & Bullet Points (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <BarChart3 className="size-3.5 text-[#0052cb]" />
              <span>03. Data Analytics</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              Business Analytics & Predictive Intelligence.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              The Divine Weapon of E-Business. Powered by an Arsenal of Technological Expertise. Analytics is not merely a tool for data analysis but a transformative force in e-business, decoding real-time events and uncovering actionable insights.
            </p>

            {/* Technological Arsenal Strip */}
            <div className="p-3.5 rounded-xl bg-white border border-ink-line text-xs font-mono text-neutral-600 leading-relaxed">
              <span className="font-bold text-ink">Arsenal of Tools: </span>
              Google Analytics, Microsoft Clarity, Crazy Egg, Mixpanel, HubSpot Analytics, Adobe Analytics, Shopify Analytics, Albert AI, Pricefx, Dynamic Yield, Persado, BuzzSumo, Stitch Fix algorithms, Google Trends, Qlik Sense, and Tableau.
            </div>

            {/* Clear 9 Dimensions Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { title: 'User Behaviour & Engagement', desc: 'Customer journeys, interactions & behavioral patterns.' },
                { title: 'Traffic Sources & Audiences', desc: 'Acquisition channels, demographics & audience profiling.' },
                { title: 'E-Commerce & Conversions', desc: 'Sales funnels, checkout rates & purchase behaviors.' },
                { title: 'Pricing & Revenue Optimisation', desc: 'Dynamic pricing strategies & promotion effectiveness.' },
                { title: 'Fashion, Trends & Market Intel', desc: 'Emerging trends, preferences & competitor intelligence.' },
                { title: 'Content & Campaign Metrics', desc: 'Content engagement, multi-touch ROI & campaign outcomes.' },
                { title: 'Heatmaps & Session Recordings', desc: 'Live on-page interactions, rage-clicks & drop-offs.' },
                { title: 'Predictive & AI Analytics', desc: 'Forecasting algorithms, LTV scoring & opportunity detection.' },
              ].map((dim, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#0052cb] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-ink">{dim.title}</h5>
                    <p className="text-[11px] text-neutral-600 leading-snug">{dim.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Data Analytics & Predictive Intelligence')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for Analytics</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[2])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 04: CLOUD AND INFRASTRUCTURE
            Layout: Text & Bullets Left, Image Right (Alternating!)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-cloud-infrastructure"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Editorial Content & Bullet Points (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Cloud className="size-3.5 text-[#0052cb]" />
              <span>04. Cloud & Infrastructure</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              Strategize smart. Transform fast.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Cloud services are considered a powerful weapon in the arsenal of the digital business ecosystem. Fusion of AI with cloud engineering created intelligent, self-optimizing, and predictive digital ecosystems. Our strategic partnerships with leading hyperscalers—such as AWS, Microsoft Azure, and Google Cloud—accelerate your enterprise digital transformation.
            </p>

            {/* Clear Structured Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Cloud Strategy, Architecture & Consulting
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    IT landscape assessment evaluating infrastructure to align with business goals. Tailored cloud roadmaps spanning cloud-native, microservices, hybrid, and multi-cloud architectures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Zero-Downtime Cloud Migration Services
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Production application and data migration, lift-and-shift operations, cloud-to-cloud transitions, and legacy system modernization with zero data loss.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Media & Content Cloud Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Cloud-Based Digital Asset Management (DAM) via CDNs, AI-Powered Computer Vision & NLP metadata tagging, and smart AI Recommendation Engines.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('Cloud & Infrastructure (AWS, Azure & GCP)')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for Cloud & Infra</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[3])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg"
                  alt="Enterprise Cloud Datacenter & Infrastructure"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 04 • Cloud & Hyperscalers
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">Sovereign Multi-Cloud Architecture</div>
                    <div className="text-xs text-slate-300 font-mono">AWS • Microsoft Azure • Google Cloud • Cloud DAM</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
                    99.999% SLA Uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 05: AI / ML INTEGRATION
            Layout: Image Left, Text & Bullets Right
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-ai-ml-integration"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg"
                  alt="Enterprise AI Silicon & Autonomous Agent Mesh"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 05 • Cognitive AI
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">Autonomous Agentic Execution Mesh</div>
                    <div className="text-xs text-slate-300 font-mono">Fine-Tuned LLMs • RAG Knowledge Graphs • Sub-100ms Inference</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold">
                    Zero Data Leakage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Editorial Content & Bullet Points (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Brain className="size-3.5 text-[#0052cb]" />
              <span>05. AI / ML Integration</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              Cognitive AI Orchestration & Autonomous Agent Mesh.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Unite Generative AI creativity with autonomous Agentic AI execution. Engineered to learn your organization's unique workflows, automate mission-critical operations, and deliver measurable enterprise value.
            </p>

            {/* Clear Structured Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Foundation Model Fine-Tuning & RAG
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Sovereign model tuning on enterprise knowledge bases with strict zero-leakage boundaries, deterministic safety guardrails, and sub-100ms vector search.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Autonomous Agentic Workflow Mesh
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Multi-agent orchestrations that self-heal, dynamically execute APIs, resolve complex business tasks, and communicate asynchronously.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Seamless Enterprise Software Integration
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Bi-directional connectors seamlessly weaving AI agents into existing ERP, CRM, HRMS, and legacy database workflows without platform downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('AI/ML Integration & Autonomous Agent Mesh')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for AI/ML</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[4])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* -----------------------------------------------------------------------
            PRACTICE 06: UX / UI DESIGN
            Layout: Text & Bullets Left, Image Right (Alternating!)
            ----------------------------------------------------------------------- */}
        <section
          id="practice-showcase-ux-ui-design"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Structured Editorial Content & Bullet Points (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider">
              <Palette className="size-3.5 text-[#0052cb]" />
              <span>06. UX / UI Design</span>
            </div>

            <h3 className="font-bricolage text-3xl sm:text-4xl lg:text-[40px] font-bold text-ink leading-tight">
              UX/UI Design Is a Dialogue, Not Decoration.
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Creating seamless connections between brands and users. At CoVision, design is a dialogue, not decoration. Grounded in cognitive psychology and behavioural science, we design interfaces that think, react, and resonate with users.
            </p>

            {/* Clear Structured Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Cognitive Science–Backed Design Thinking
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Grounded in cognitive psychology and behavioural science, we minimize cognitive friction, optimize information architecture, and sculpt high-conversion user pathways.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Our Own Design System — CoVision Lattice/monolith
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    CoVision Lattice/monolith isn’t just a library; it’s an operational strategy—one that empowers to deliver exceptional, scalable, and user-centric products with unmatched efficiency and quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4 text-[#0052cb]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-ink">
                    Accessibility & Design System Governance
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    Full WCAG 2.1 AAA compliance, high-contrast micro-interactions, tokenized CSS/Figma synchronizations, and zero-defect enterprise design hygiene.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestScope('UX/UI Design & CoVision Lattice/monolith')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Request Scope for UX/UI</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => setModalService(IT_SERVICES_DATA[5])}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Specs</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-ink-line shadow-xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/images/services/ux_ui_design.jpg"
                  alt="Cognitive Science UX/UI Design & CoVision Lattice"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/75 text-white font-mono text-xs font-bold border border-white/20 backdrop-blur-md">
                    Practice 06 • Behavioral Science
                  </span>
                </div>

                {/* Bottom Floating Telemetry Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 z-10">
                  <div>
                    <div className="text-sm font-bold text-white">CoVision Lattice/monolith Design System</div>
                    <div className="text-xs text-slate-300 font-mono">Cognitive Psychology • Tokenized UI Components • WCAG AAA</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-semibold">
                    Dialogue Not Decoration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================================
          5. TECHNICAL SPECIFICATIONS MODAL (When clicking View Full Specs)
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
