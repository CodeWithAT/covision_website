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
  CheckCircle2,
  Maximize2,
  ChevronRight,
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

// Practice Capability Matrix Overview
const SERVICE_GRID_CARDS = [
  {
    id: 'software-engineering',
    number: '01',
    icon: Cpu,
    title: 'Software Engineering',
    summary: 'Bespoke enterprise software: HRMS, ERP, payroll systems, and scalable proprietary platforms.',
    image: '/images/disciplines/software_engineering.jpg',
    metrics: { label: 'Systems Delivered', value: '50+ Enterprise Systems' },
  },
  {
    id: 'application-development',
    number: '02',
    icon: Smartphone,
    title: 'Application Development & Management',
    summary: 'Native, cross-platform, and progressive web applications engineered for 24/7 enterprise lifecycle.',
    image: '/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg',
    metrics: { label: 'Platforms', value: 'iOS · Android · Web · PWA' },
  },
  {
    id: 'data-analytics',
    number: '03',
    icon: BarChart3,
    title: 'Data Analytics & Predictive Intelligence',
    summary: 'Real-time BI dashboards and 14+ analytics platforms that transform data into measurable outcomes.',
    image: '/images/services/data_analytics_hud.webp',
    metrics: { label: 'Analytics Dimensions', value: '9 Critical KPIs' },
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    summary: 'AWS, Azure, and GCP-certified cloud architecture and zero-downtime migration services.',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/03_multi-cloud_rack_clusters.jpg',
    metrics: { label: 'Hyperscaler Partners', value: 'AWS · Azure · GCP' },
  },
  {
    id: 'ai-ml-integration',
    number: '05',
    icon: Brain,
    title: 'AI / ML Integration',
    summary: 'Generative AI, autonomous agentic workflows, and cognitive connectors for SAP, Salesforce & ERP.',
    image: '/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg',
    metrics: { label: 'AI Capability', value: 'Agentic · GenAI · MLOps' },
  },
  {
    id: 'ux-ui-design',
    number: '06',
    icon: Palette,
    title: 'UX / UI Design',
    summary: 'Cognitive science-backed design, CoVision Lattice™ design system, and WCAG AAA compliant interfaces.',
    image: '/images/services/ux_ui_design_modern.jpg',
    metrics: { label: 'Design System', value: 'CoVision Lattice™' },
  },
]

// Enterprise Practice Editorial Specifications
const SERVICE_SHOWCASES = [
  {
    id: 'software-engineering',
    number: '01',
    icon: Cpu,
    badge: 'Core Engineering Practice',
    title: 'Custom Software Engineering',
    headline: 'Elevate your business with tailored software that works like your own operating system.',
    body: 'Every business operates within its own unique landscape — shaped by its audience, processes, and objectives. We engineer bespoke software solutions that align seamlessly with your operational reality, from complex HRMS platforms to sovereign ERP ecosystems.',
    image: '/senior_image_catalog/02_Software_Engineering_and_Code/02_principal_architect_scalability.jpg',
    imageAlt: 'Principal Architect Software Engineering',
    bullets: [
      {
        title: 'HRMS & Human Capital Platforms',
        desc: 'Apto HRMS — automating talent lifecycle, role hierarchies, performance governance, and employee self-service workflows.',
      },
      {
        title: 'Sovereign Payroll Engineering',
        desc: 'Multi-country statutory tax compliance, banking API integration, and zero-defect automated wage disbursement systems.',
      },
      {
        title: 'Unified ERP Architecture',
        desc: 'Bring all operations under one umbrella: CRM, procurement, inventory management, and automated accounting in one coherent system.',
      },
    ],
    scope: 'Software Engineering (HRMS, Payroll & ERP)',
    dataIndex: 0,
    imageLeft: true,
  },
  {
    id: 'application-development',
    number: '02',
    icon: Smartphone,
    badge: 'Application Practice',
    title: 'Application Development & Management',
    headline: 'Turbo-charge your mobile and web presence with CoVision engineering.',
    body: 'Wide array of mobile app development solutions engineered for consumer-grade fluidity and mission-critical enterprise reliability — from native hardware-accelerated apps to progressive web experiences that reach users on every device.',
    image: '/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg',
    imageAlt: 'Enterprise Mobile Application Engineering',
    bullets: [
      {
        title: 'Native App Development',
        desc: 'Dedicated Swift (iOS) and Kotlin (Android) engineering maximizing hardware acceleration, 60fps fluidity, and platform-native UX.',
      },
      {
        title: 'Cross-Platform & Hybrid Architecture',
        desc: 'Flutter and React Native sharing 95%+ unified codebase while delivering native-grade UI performance across both platforms.',
      },
      {
        title: 'Progressive Web Apps (PWA)',
        desc: 'Zero-install web apps with offline-first service worker caching, push notifications, and instant cross-device reach.',
      },
    ],
    scope: 'Mobile App Development (Native, Cross-Platform & PWA)',
    dataIndex: 1,
    imageLeft: false,
  },
  {
    id: 'data-analytics',
    number: '03',
    icon: BarChart3,
    badge: 'Intelligence Practice',
    title: 'Business Analytics & Predictive Intelligence',
    headline: 'The Divine Weapon of E-Business. Powered by an Arsenal of Technological Expertise.',
    body: 'Analytics is not merely a tool — it is a transformative strategic weapon that decodes real-time events, uncovers actionable insights, and equips businesses to anticipate and shape future outcomes. We harness 14+ enterprise-grade analytical platforms across 9 critical performance dimensions.',
    image: '/images/services/data_analytics_hud.webp',
    imageAlt: 'Enterprise Business Intelligence & Analytics Hub',
    bullets: [
      {
        title: '9 Critical Performance Dimensions',
        desc: 'User behaviour, traffic channels, e-commerce conversion funnels, dynamic pricing, heatmap recordings, and predictive AI analytics.',
      },
      {
        title: 'Enterprise Analytics Arsenal (14+ Platforms)',
        desc: 'Google Analytics, Microsoft Clarity, Mixpanel, Tableau, Adobe Analytics, Shopify Analytics, Albert AI, Pricefx, and Qlik Sense.',
      },
      {
        title: 'Predictive ML & Recommendation Engines',
        desc: 'Forecasting customer lifetime value, automated trend discovery, churn prevention, and hyper-personalized recommendation algorithms.',
      },
    ],
    scope: 'Data Analytics & Predictive Intelligence',
    dataIndex: 2,
    imageLeft: true,
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    icon: Cloud,
    badge: 'Cloud Practice',
    title: 'Cloud & Infrastructure',
    headline: 'Strategize smart. Transform fast. The fusion of AI with cloud engineering.',
    body: 'Cloud services are a powerful weapon in the digital business ecosystem. Our strategic partnerships with AWS, Microsoft Azure, and Google Cloud enable us to leverage cutting-edge cloud innovations, AI acceleration, and sovereign infrastructure to accelerate your digital transformation.',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/10_distributed_cloud_engineering_la.jpg',
    imageAlt: 'Distributed Cloud Engineering Lab',
    bullets: [
      {
        title: 'Cloud Strategy, Architecture & Consulting',
        desc: 'IT landscape assessment, tailored cloud adoption roadmaps, scalable cloud-native and microservices architectures, hybrid and multi-cloud environments.',
      },
      {
        title: 'Zero-Downtime Migration Services',
        desc: 'Application & data migration, lift-and-shift operations, cloud-to-cloud transitions, and legacy system modernization with zero business disruption.',
      },
      {
        title: 'Media & Content Cloud Solutions',
        desc: 'Cloud-Based DAM systems, AI Computer Vision metadata tagging, CDN asset distribution, and AI-based recommendation engines for content platforms.',
      },
    ],
    scope: 'Cloud & Infrastructure (AWS, Azure & GCP)',
    dataIndex: 3,
    imageLeft: false,
  },
  {
    id: 'ai-ml-integration',
    number: '05',
    icon: Brain,
    badge: 'AI Practice',
    title: 'AI / ML Integration & Autonomous Intelligence',
    headline: 'Unite Generative AI creativity with autonomous Agentic AI execution.',
    body: "Generative AI and agentic AI are the two foundational pillars of business-specific AI transformation. By learning and adapting to each organization's unique processes, workflows, and customer needs, we enable personalized, context-aware solutions that preserve the human touch.",
    image: '/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg',
    imageAlt: 'Enterprise AI Neural Architecture',
    bullets: [
      {
        title: 'Fine-Tuned Enterprise AI Models',
        desc: 'Sovereign model training on private organizational datasets with strict data boundaries, safety rails, vector embeddings, and governance controls.',
      },
      {
        title: 'Autonomous Agentic Workflows',
        desc: 'Multi-agent task orchestration, custom AI agents for business processes, intelligent document processing, and agentic workflow automation.',
      },
      {
        title: 'Enterprise Software AI Connectors',
        desc: 'Seamless AI integration with CRM, ERP, HRMS, ticketing, and database systems — performing authorized actions and retrieving contextual information.',
      },
    ],
    scope: 'AI/ML Integration & Autonomous Agent Mesh',
    dataIndex: 4,
    imageLeft: true,
  },
  {
    id: 'ux-ui-design',
    number: '06',
    icon: Palette,
    badge: 'Design Practice',
    title: 'UX / UI Design',
    headline: 'UX/UI Design is a Dialogue, Not Decoration — Creating Seamless Connections Between Brands and Users.',
    body: 'At CoVision, design is grounded in cognitive psychology and behavioural science. We design interfaces that think, react, and resonate with users — powered by the CoVision Lattice™ design system: an operational strategy delivering scalable, user-centric products.',
    image: '/images/services/ux_ui_design_modern.jpg',
    imageAlt: 'CoVision UX/UI Design Studio',
    bullets: [
      {
        title: 'Cognitive Science–Backed Design Thinking',
        desc: 'Grounded in cognitive psychology and behavioral science to minimize friction, sculpt frictionless user flows, and maximize engagement.',
      },
      {
        title: 'CoVision Lattice / Monolith™ Design System',
        desc: 'Not just a library — an operational design strategy delivering scalable, tokenized, and user-centric interfaces with unmatched consistency.',
      },
      {
        title: 'WCAG AAA Accessibility & Performance',
        desc: 'Full WCAG 2.1 AAA compliance, fluid micro-interactions, 60fps animation standards, and high-conversion transactional design flows.',
      },
    ],
    scope: 'UX/UI Design & CoVision Lattice',
    dataIndex: 5,
    imageLeft: false,
  },
]

const TAB_NAV = [
  { id: 'software-engineering', num: '01', label: 'Software Engineering' },
  { id: 'application-development', num: '02', label: 'Application Dev' },
  { id: 'data-analytics', num: '03', label: 'Data Analytics' },
  { id: 'cloud-infrastructure', num: '04', label: 'Cloud & Infrastructure' },
  { id: 'ai-ml-integration', num: '05', label: 'AI/ML Integration' },
  { id: 'ux-ui-design', num: '06', label: 'UX/UI Design' },
]

const cardFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: 'easeOut' as const },
  }),
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestScope,
  sectionNumber = '01',
  targetServiceId,
}) => {
  const getNormalizedServiceId = (id?: string) => {
    if (!id) return 'software-engineering'
    if (id === 'ux-ui') return 'ux-ui-design'
    if (id === 'app-development') return 'application-development'
    return id
  }

  const [modalService, setModalService] = useState<ServiceItem | null>(null)
  const [activeNavId, setActiveNavId] = useState<string>(() => getNormalizedServiceId(targetServiceId))

  useEffect(() => {
    if (targetServiceId) {
      const normalized = getNormalizedServiceId(targetServiceId)
      const timer = setTimeout(() => {
        setActiveNavId(normalized)
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

      {/* ═══════════════════════════════════════════════════════════════
          2. CAPABILITIES OVERVIEW GRID (2-col image-first 2×3 matrix)
          ═══════════════════════════════════════════════════════════════ */}
      <div id="capabilities-grid" className="py-16 sm:py-20 bg-paper border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] mb-3">
              <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
              <span>Section {sectionNumber} • From Core Engineering to Intelligent Solutions</span>
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-tight">
              Six Integrated Practice Areas.
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed font-normal">
              End-to-end enterprise digital transformation — from custom software and cloud infrastructure to AI automation and design systems.
            </p>
          </motion.div>

          {/* 2-Column Image Cards (2×3 grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICE_GRID_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={cardFadeUp}
                  onClick={() => scrollToPractice(card.id)}
                  className="group relative overflow-hidden rounded-3xl border border-ink-line cursor-pointer aspect-[16/9] bg-slate-900"
                >
                  {/* Full background image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Persistent dark gradient — always show top badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top-left: number + icon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="size-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon className="size-4 text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/60 uppercase tracking-wider">{card.number}</span>
                  </div>

                  {/* Bottom: scroll-reveal white text box */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    {/* White frosted info panel */}
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/80 transition-all duration-400">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bricolage text-sm sm:text-base font-bold text-ink leading-snug">
                            {card.title}
                          </h3>
                          <p className="text-xs text-neutral-600 mt-1 leading-relaxed line-clamp-2">
                            {card.summary}
                          </p>
                        </div>
                        <div className="size-8 rounded-full bg-[#0052cb] flex items-center justify-center shrink-0">
                          <ChevronRight className="size-4 text-white" />
                        </div>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-ink-line/50 flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wide">{card.metrics.label}:</span>
                        <span className="text-[10px] font-mono font-bold text-[#0052cb]">{card.metrics.value}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          3. QUICK-JUMP TAB NAV
          ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 bg-white border-b border-ink-line py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar">
            {TAB_NAV.map((tab) => {
              const isActive = activeNavId === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToPractice(tab.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0052cb] text-white shadow-sm'
                      : 'bg-paper text-neutral-600 hover:text-ink border border-ink-line hover:border-neutral-400'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-70">{tab.num}.</span>
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          4. EDITORIAL SERVICE DEEP-DIVES (6 alternating rows)
          ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 space-y-20 sm:space-y-28">

          {SERVICE_SHOWCASES.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.section
                key={service.id}
                id={`practice-showcase-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-36"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={service.imageLeft ? 'order-1' : 'order-1 lg:order-2'}
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-ink-line shadow-xl group aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider">Practice {service.number}</div>
                          <div className="font-bricolage text-sm font-bold text-white mt-0.5 leading-tight">{service.title}</div>
                        </div>
                        <div className="size-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                          <Icon className="size-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CONTENT */}
                  <motion.div
                    initial={{ opacity: 0, x: service.imageLeft ? 22 : -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col space-y-5 ${service.imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}
                  >
                    {/* Practice Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider w-max">
                      <Icon className="size-3.5" />
                      <span>{service.number}. {service.badge}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-bricolage text-2xl sm:text-3xl lg:text-[31px] font-bold text-ink leading-snug">
                      {service.headline}
                    </h3>

                    {/* Body */}
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {service.body}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-4 pt-1">
                      {service.bullets.map((bullet, bIdx) => (
                        <motion.div
                          key={bIdx}
                          initial={{ opacity: 0, x: service.imageLeft ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: 0.25 + bIdx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="size-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="size-3 text-[#0052cb]" />
                          </div>
                          <div>
                            <span className="font-bold text-sm text-ink">{bullet.title} </span>
                            <span className="text-xs sm:text-sm text-neutral-600">{bullet.desc}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onRequestScope(service.scope)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer group"
                      >
                        <span>Request Scope</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={() => setModalService(IT_SERVICES_DATA[service.dataIndex])}
                        className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-ink-line hover:border-[#0052cb] text-neutral-700 hover:text-black text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <Maximize2 className="size-3.5" />
                        <span>Full Capability Specs</span>
                      </button>
                    </div>

                    {/* Subtle progress indicator */}
                    {idx < SERVICE_SHOWCASES.length - 1 && (
                      <div className="hidden lg:flex items-center gap-3 pt-2 opacity-50">
                        <span className="text-[10px] font-mono text-neutral-400">{service.number} / 06</span>
                        <div className="flex-1 h-px bg-ink-line" />
                        <span className="text-[10px] font-mono text-neutral-400">↓ next</span>
                      </div>
                    )}
                  </motion.div>

                </div>
              </motion.section>
            )
          })}

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          5. SERVICE DETAIL MODAL
          ═══════════════════════════════════════════════════════════════ */}
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
