import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Layers,
  Smartphone,
  Cloud,
  Brain,
  CheckCircle2,
} from 'lucide-react'

interface PracticePortfoliosSectionProps {
  onNavigatePage: (page: string, targetServiceId?: string) => void
  sectionNumber?: string
}

interface CoreSolution {
  number: string
  title: string
  desc: string
  badge: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  highlights: string[]
  pageRoute: string
  targetServiceId?: string
  ctaText: string
}

const CORE_SOLUTIONS: CoreSolution[] = [
  {
    number: '01',
    title: 'Software Engineering',
    desc: 'Custom software engineered for complex requirements, performance, security, and scalability.',
    badge: 'Core Architecture',
    image: '/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg',
    icon: Code2,
    highlights: [
      'High-concurrency distributed backends & microservices',
      'Fault-tolerant transactional rails with zero data loss',
      'Strict clean-architecture patterns and continuous peer review',
    ],
    pageRoute: 'services',
    targetServiceId: 'software-engineering',
    ctaText: 'Explore Software Engineering',
  },
  {
    number: '02',
    title: 'Custom SaaS Development',
    desc: 'Purpose-built SaaS platforms,designed for secure, scalable business operations.',
    badge: 'Proprietary IP',
    image: '/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg',
    icon: Layers,
    highlights: [
      'Multi-tenant cloud architecture with sovereign data isolation',
      'Real-time analytics, automated billing & API gateways',
      'Rapid enterprise rollouts with sub-50ms telemetry',
    ],
    pageRoute: 'saas',
    ctaText: 'Explore SaaS Platforms',
  },
  {
    number: '03',
    title: 'Application Development & Management',
    desc: 'Application development, modernization, integration, maintenance, and lifecycle management.',
    badge: 'App Lifecycle',
    image: '/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg',
    icon: Smartphone,
    highlights: [
      'Cross-platform iOS, Android, and responsive web platforms',
      'Legacy monolith modernization & seamless cloud refactoring',
      '24/7 SLA monitoring, zero-regression patches & lifecycle support',
    ],
    pageRoute: 'services',
    targetServiceId: 'app-development',
    ctaText: 'Explore App Management',
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    desc: 'Cloud architecture, infrastructure engineering, DevOps, monitoring, and optimization for reliable operations.',
    badge: 'Multi-Cloud Fabric',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg',
    icon: Cloud,
    highlights: [
      'Kubernetes orchestration & GitOps automated CI/CD',
      'Global Anycast edge delivery with sub-15ms worldwide latency',
      'Zero-trust security, automated DDoS defense & SOC 2 compliance',
    ],
    pageRoute: 'services',
    targetServiceId: 'cloud-infrastructure',
    ctaText: 'Explore Cloud & DevOps',
  },
  {
    number: '05',
    title: 'AI as a Service',
    desc: 'AI agents, intelligent automation, and AI-powered integrations that streamline workflows and extend business capabilities.',
    badge: 'Autonomous AI',
    image: '/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg',
    icon: Brain,
    highlights: [
      'Autonomous multi-agent workflows & decision automation',
      'Private enterprise RAG pipelines & customized LLM integrations',
      'Predictive analytics, computer vision & automated operations',
    ],
    pageRoute: 'ai',
    ctaText: 'Explore AI & Automation',
  },
]

export const PracticePortfoliosSection: React.FC<PracticePortfoliosSectionProps> = ({
  onNavigatePage,
  sectionNumber = '02',
}) => {
  return (
    <section id="core-engineering" className="py-24 md:py-32 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#0052cb] font-bold mb-3">
            <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
            <span>Section {sectionNumber} • Enterprise Offerings</span>
          </div>

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.06]">
            From Core Engineering to{' '}
            <span className="text-[#0052cb]">Intelligent Solutions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            We deliver end-to-end digital capabilities spanning resilient custom engineering, purpose-built SaaS platforms, robust cloud infrastructure, and autonomous AI integrations.
          </p>
        </div>

        {/* 5 Core Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CORE_SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon
            const isFullSpan = index === 4
            return (
              <motion.div
                key={solution.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative flex flex-col justify-between rounded-3xl bg-white border border-ink-line hover:border-[#0052cb]/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Image Banner Header with Scrim & Badges */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-neutral-900 shrink-0">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm border border-white/60">
                        {solution.number}
                      </span>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {solution.badge}
                      </span>
                    </div>

                    {/* Floating Icon in bottom corner */}
                    <div className="absolute bottom-4 left-4 size-10 rounded-xl bg-white/95 backdrop-blur-md text-[#0052cb] flex items-center justify-center shadow-md border border-white/40 group-hover:bg-[#0052cb] group-hover:text-white transition-colors">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title with exact number prefix */}
                      <h3 className="font-bricolage text-xl sm:text-2xl font-semibold tracking-tight text-ink mb-2.5 group-hover:text-[#0052cb] transition-colors">
                        {solution.number}. {solution.title}
                      </h3>

                      {/* Exact description from instruction.txt */}
                      <p className="text-sm sm:text-[14.5px] text-neutral-600 leading-relaxed mb-5 font-normal">
                        {solution.desc}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-2.5 pt-2">
                      {solution.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                          <CheckCircle2 className="size-3.5 text-[#0052cb] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 mt-auto">
                  <div className="pt-4 border-t border-ink-line flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                      Enterprise SLA
                    </span>

                    <button
                      onClick={() => onNavigatePage(solution.pageRoute, solution.targetServiceId)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-[#0052cb] text-white text-xs font-bold transition-all shadow-sm group-hover:scale-102 cursor-pointer"
                    >
                      <span>{solution.ctaText}</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
