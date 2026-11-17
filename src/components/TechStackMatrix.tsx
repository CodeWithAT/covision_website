import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  Check,
  ChevronRight,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

interface DeliveryPillar {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  sla: string
  slaLabel: string
  description: string
  image: string
  accentColor: string
  accentBorder: string
  accentBg: string
  highlights: {
    title: string
    detail: string
    badge: string
  }[]
  metrics: {
    label: string
    value: string
  }[]
}

const DELIVERY_PILLARS: DeliveryPillar[] = [
  {
    id: 'hyperscalers',
    number: '01',
    title: 'Strategic Hyperscaler Alliances',
    subtitle: 'Tier-1 Certified Cloud Architecture Across AWS, Microsoft Azure, Google Cloud & NVIDIA',
    category: 'Cloud Alliances',
    sla: 'Multi-Cloud',
    slaLabel: 'Active-Active Redundancy',
    description:
      'As detailed in our core strategy, our direct partnerships with leading hyperscalers enable CoVision Infotech to leverage cutting-edge cloud innovations, pre-release AI accelerators, and sovereign enterprise infrastructure to accelerate your digital transformation.',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg',
    accentColor: '#0052cb',
    accentBorder: 'hover:border-blue-500/50',
    accentBg: 'bg-blue-50 text-[#0052cb] border border-blue-200/80',
    highlights: [
      {
        title: 'AWS Advanced Tier Partner',
        detail: 'Well-Architected reviews, Serverless Aurora, EKS microservice orchestration, and Graviton-optimized cost topologies.',
        badge: 'AWS Certified',
      },
      {
        title: 'Microsoft Azure Solutions Partner',
        detail: 'Enterprise cloud migration, hybrid cloud fabric, Azure OpenAI integration, and Azure Synapse analytics pipelines.',
        badge: 'Azure Partner',
      },
      {
        title: 'Google Cloud Premier Partner',
        detail: 'Multi-region BigQuery data lakes, Vertex AI machine learning pipelines, and highly resilient Cloud Spanner clusters.',
        badge: 'GCP Premier',
      },
      {
        title: 'NVIDIA AI Acceleration Ecosystem',
        detail: 'GPU inference clustering, TensorRT model optimization, and private high-throughput edge intelligence deployments.',
        badge: 'NVIDIA Inception',
      },
    ],
    metrics: [
      { label: 'Cloud Architecture', value: 'Multi-Cloud Active-Active' },
      { label: 'Certified Architects', value: '100% Tier-1 Certified' },
    ],
  },
  {
    id: 'engineering-pods',
    number: '02',
    title: 'Autonomous Engineering Pods',
    subtitle: 'The Synergy of Agile × Scrum × DevOps × AI: Dedicated High-Velocity Squads',
    category: 'Delivery Methodology',
    sla: 'Bi-Weekly',
    slaLabel: 'Sprint Production Releases',
    description:
      'We combine architecture-led software engineering, agile sprint execution, automated CI/CD pipelines, and AI-assisted development into dedicated cross-functional pods that deliver continuous value with uncompromising engineering quality.',
    image: '/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg',
    accentColor: '#059669',
    accentBorder: 'hover:border-emerald-500/50',
    accentBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    highlights: [
      {
        title: 'Dedicated Cross-Functional Squads',
        detail: 'Each pod is staffed by a Principal Solutions Architect, Senior Full-Stack Engineers, dedicated QA Automation Lead, and DevOps SRE.',
        badge: 'Turnkey Pods',
      },
      {
        title: 'Bi-Weekly Sprints & Full Transparency',
        detail: 'Real-time Jira/Linear visibility, shared Slack Connect channels, weekly sprint demos, and transparent burndown metrics.',
        badge: 'Agile & Scrum',
      },
      {
        title: '100% Client IP Sovereignty',
        detail: 'All source code, infrastructure-as-code (Terraform), and proprietary data models are transferred with zero vendor lock-in.',
        badge: 'IP Sovereignty',
      },
      {
        title: 'AI-Assisted Engineering Acceleration',
        detail: 'Leveraging AI-assisted unit test generation, automated code audits, and static security scanning for 2.4x sprint velocity.',
        badge: 'AI-Powered',
      },
    ],
    metrics: [
      { label: 'Delivery Cadence', value: '14-Day Sprint Cycles' },
      { label: 'Client IP Ownership', value: '100% Transfer Guaranteed' },
    ],
  },
  {
    id: 'governance-sla',
    number: '03',
    title: 'Contractual SLAs & Zero-Trust Governance',
    subtitle: 'Mission-Critical Availability Guarantees Backed by Rigorous Enterprise Compliance',
    category: 'Security & SLAs',
    sla: '99.995%',
    slaLabel: 'Contractual Uptime SLA',
    description:
      'Enterprise software must withstand mission-critical workloads without fail. We back our delivery with strict Master Service Agreement (MSA) uptime commitments, zero-trust cybersecurity, and independent security compliance certifications.',
    image: '/senior_image_catalog/11_Cybersecurity_and_SOC/01_enterprise_soc_operations_center.jpg',
    accentColor: '#7c3aed',
    accentBorder: 'hover:border-purple-500/50',
    accentBg: 'bg-purple-50 text-purple-700 border border-purple-200/80',
    highlights: [
      {
        title: 'Contractual 99.995% Uptime SLA',
        detail: 'Guaranteed production availability with financial service credit penalties defined in contractual enterprise agreements.',
        badge: 'MSA Backed',
      },
      {
        title: 'Zero-Trust Architecture & Encryption',
        detail: 'Principle of least privilege (PoLP), end-to-end TLS 1.3 encryption, role-based access control (RBAC), and mTLS service meshes.',
        badge: 'Zero-Trust',
      },
      {
        title: 'SOC 2 Type II & ISO 27001 Aligned',
        detail: 'Independent third-party verification of security, confidentiality, availability, and processing integrity controls.',
        badge: 'Audited Standards',
      },
      {
        title: 'Automated Continuous SAST/DAST Audits',
        detail: 'Every pull request is automatically analyzed for CVE vulnerabilities, dependency drift, and code regressions before deployment.',
        badge: 'Canary Rollouts',
      },
    ],
    metrics: [
      { label: 'Disaster Recovery RTO/RPO', value: '< 15 Minutes' },
      { label: 'Security Compliance', value: 'SOC 2 & ISO 27001' },
    ],
  },
]

const ENGAGEMENT_MODELS = [
  {
    title: 'Turnkey Platform Engineering',
    tag: 'Outcome-Based',
    description:
      'End-to-end digital transformation delivered with defined milestones, performance SLAs, and fixed outcome accountability from architecture scoping to cutover.',
    features: [
      'Comprehensive architecture roadmap',
      'Fixed-price or milestone-based delivery',
      'Post-launch 90-day warranty & hypercare',
      'Dedicated Principal Architect oversight',
    ],
  },
  {
    title: 'Dedicated Engineering Pod Augmentation',
    tag: 'Velocity-Driven',
    description:
      'High-velocity autonomous engineering squads (Architect, Backend, Frontend, QA, DevOps) that seamlessly embed into your existing engineering leadership.',
    features: [
      'Scalable cross-functional technical squads',
      'Direct integration with your Jira & Slack',
      'Bi-weekly production sprint cadence',
      '100% full IP transfer with zero lock-in',
    ],
  },
  {
    title: 'Enterprise Architecture & Modernization Advisory',
    tag: 'Strategic Scoping',
    description:
      'Deep-dive technical assessment of existing IT landscapes, cloud migration roadmaps, legacy refactoring strategies, and cybersecurity gap remediation.',
    features: [
      'Cloud & microservices readiness audit',
      'Database modernization & data fabric scoping',
      'Security posture & compliance roadmap',
      'Executive board presentation & TCO analysis',
    ],
  },
]

interface TechStackMatrixProps {
  sectionNumber?: string
}

export const TechStackMatrix: React.FC<TechStackMatrixProps> = ({ sectionNumber = '02' }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const displayedPillars =
    activeFilter === 'all'
      ? DELIVERY_PILLARS
      : DELIVERY_PILLARS.filter((pillar) => pillar.id === activeFilter)

  return (
    <section id="enterprise-delivery" className="py-20 md:py-28 bg-paper border-b border-ink-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <SectionEyebrow
            number={sectionNumber}
            label="Enterprise Delivery Governance"
            className="justify-center mb-4"
          />

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.08]">
            Enterprise Delivery Framework &amp; Strategic Alliances
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            How CoVision Infotech delivers at enterprise scale: Multi-cloud hyperscaler partnerships, autonomous cross-functional engineering pods, and guaranteed mission-critical SLAs.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#0052cb] text-white shadow-sm'
                : 'bg-white text-neutral-700 hover:text-black border border-ink-line hover:border-neutral-400'
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>All Delivery Governance Pillars</span>
          </button>

          {DELIVERY_PILLARS.map((pillar) => {
            const isActive = activeFilter === pillar.id
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveFilter(pillar.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0052cb] text-white shadow-sm'
                    : 'bg-white text-neutral-700 hover:text-black border border-ink-line hover:border-neutral-400'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{pillar.number}.</span>
                <span>{pillar.title}</span>
              </button>
            )
          })}
        </div>

        {/* Pillars Grid */}

        {/* Pillars Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {displayedPillars.map((pillar, idx) => {
              const isEven = idx % 2 === 1
              return (
                <motion.div
                  key={pillar.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl border border-ink-line shadow-xs overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-9 lg:p-10 items-stretch`}>

                    {/* Content Column */}
                    <div className={`flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${pillar.accentBg}`}>
                            <span className="font-mono text-[11px]">{pillar.number}</span>
                            <span>•</span>
                            <span>{pillar.category}</span>
                          </span>

                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold">
                            <span className="font-mono font-bold text-ink">{pillar.sla}</span>
                            <span className="text-[11px] text-neutral-500">{pillar.slaLabel}</span>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="font-bricolage text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#0052cb] mt-1.5 font-inter-tight">
                          {pillar.subtitle}
                        </p>

                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {pillar.description}
                        </p>

                        {/* Enterprise Highlight Items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
                          {pillar.highlights.map((item) => (
                            <div
                              key={item.title}
                              className="p-3.5 rounded-2xl bg-paper border border-ink-line hover:border-slate-300 transition-colors"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <h4 className="font-bricolage text-xs sm:text-sm font-bold text-ink truncate">
                                  {item.title}
                                </h4>
                                <span className="shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0052cb] border border-blue-200/60">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-600 leading-normal font-normal">
                                {item.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Key Metric Indicators */}
                      <div className="grid grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-ink-line/80">
                        {pillar.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                              {metric.label}
                            </div>
                            <div className="font-bricolage text-sm sm:text-base font-bold text-ink mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Showcase Column */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col`}>
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-ink-line shadow-md h-full min-h-[340px] group">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-blue-300 font-bold">
                            Production Architecture
                          </div>
                          <div className="font-bricolage text-sm font-bold truncate">
                            {pillar.title}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Enterprise Engagement & Operating Models */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0052cb] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80 inline-block mb-3">
              Operating Models
            </span>
            <h3 className="font-bricolage text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              Enterprise Engagement Models Built for Scale
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Flexible partnership models tailored to match your organizational governance, velocity requirements, and budgetary frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-ink-line shadow-xs hover:border-[#0052cb] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0052cb] border border-blue-200/80">
                      {model.tag}
                    </span>
                    <Building2 className="size-4 text-neutral-400 group-hover:text-[#0052cb] transition-colors" />
                  </div>

                  <h4 className="font-bricolage text-lg font-bold text-ink">
                    {model.title}
                  </h4>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {model.description}
                  </p>

                  <div className="space-y-2 mt-5 pt-5 border-t border-ink-line/80">
                    {model.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-line/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] hover:text-blue-800 transition-colors"
                  >
                    <span>Discuss Engagement Scope</span>
                    <ChevronRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Compliance & SLA Guarantee Ribbon */}
        <div className="mt-14 bg-white rounded-3xl border border-ink-line shadow-xs overflow-hidden">
          {/* Top row: icon + title + description */}
          <div className="p-7 sm:p-9 border-b border-ink-line">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200/80">
                <ShieldCheck className="size-6 text-[#0052cb]" />
              </div>
              <div>
                <h4 className="font-bricolage text-base sm:text-xl font-bold text-ink">
                  Contractual Enterprise Governance, Security &amp; IP Protection
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-normal leading-relaxed max-w-3xl">
                  All enterprise solutions follow zero-trust network topology, automated security audits, SOC 2 Type II compliance, and 100% intellectual property sovereignty transfer to the client.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row: certification badges */}
          <div className="p-5 sm:p-7 bg-paper">
            <div className="flex flex-wrap items-center gap-3">
              {[
                'ISO/IEC 27001 Certified',
                'SOC 2 Type II Aligned',
                'PCI-DSS Level 1 Ready',
                'GDPR & HIPAA Compliant',
                '100% Client IP Sovereignty',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-neutral-700 text-xs font-semibold border border-ink-line shadow-2xs"
                >
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
