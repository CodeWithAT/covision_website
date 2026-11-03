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
  Sparkles,
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
    image: '/images/disciplines/software_engineering.webp',
    icon: Code2,
    highlights: [
      'Distributed backends & microservices',
      'Fault-tolerant transactional rails',
    ],
    pageRoute: 'services',
    targetServiceId: 'software-engineering',
    ctaText: 'Explore Software Engineering',
  },
  {
    number: '02',
    title: 'Custom SaaS Development',
    desc: 'Purpose-built SaaS platforms, designed for secure, scalable business operations.',
    badge: 'Proprietary IP',
    image: '/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg',
    icon: Layers,
    highlights: [
      'Multi-tenant cloud architecture',
      'Real-time analytics & billing gateways',
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
      'Cross-platform iOS, Android & web',
      '24/7 SLA monitoring & lifecycle support',
    ],
    pageRoute: 'services',
    targetServiceId: 'application-development',
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
      'Kubernetes orchestration & GitOps CI/CD',
      'Zero-trust security & SOC 2 compliance',
    ],
    pageRoute: 'services',
    targetServiceId: 'cloud-infrastructure',
    ctaText: 'Explore Cloud & DevOps',
  },
]

const AI_FEATURED_SOLUTION: CoreSolution = {
  number: '05',
  title: 'AI as a Service',
  desc: 'AI agents, intelligent automation, and AI-powered integrations that streamline workflows and extend business capabilities.',
  badge: 'Autonomous Intelligence',
  image: '/images/services/ai_robot_puzzle.webp',
  icon: Brain,
  highlights: [
    'Autonomous multi-agent workflows & decision automation',
    'Private enterprise RAG pipelines & customized LLM integrations',
    'Predictive analytics, computer vision & automated operations',
  ],
  pageRoute: 'ai',
  ctaText: 'Explore AI & Automation',
}

export const PracticePortfoliosSection: React.FC<PracticePortfoliosSectionProps> = ({
  onNavigatePage,
  sectionNumber = '02',
}) => {
  return (
    <section id="core-engineering" className="py-24 md:py-32 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#0052cb] font-bold mb-3">
            <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
            <span>Section {sectionNumber} • Enterprise Offerings</span>
          </div>

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.06]">
            From Core Engineering to <span className="text-[#0052cb]">Intelligent Solutions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            We deliver end-to-end digital capabilities spanning resilient custom engineering, purpose-built SaaS platforms, robust cloud infrastructure, and autonomous AI integrations.
          </p>
        </div>

        {/* 2×2 Enterprise Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CORE_SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-ink-line hover:border-[#0052cb]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div>
                  {/* Big High-Resolution Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#0052cb] border border-white/80 shadow-xs">
                        {solution.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content - Concise & High Impact */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="font-bricolage text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-[#0052cb] transition-colors">
                        {solution.number}. {solution.title}
                      </h3>
                      <div className="size-9 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center shrink-0 border border-blue-200/60">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                      {solution.desc}
                    </p>

                    {/* Concise Highlight Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {solution.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper text-neutral-700 text-xs font-medium border border-ink-line"
                        >
                          <CheckCircle2 className="size-3.5 text-[#0052cb] shrink-0" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 mt-auto">
                  <div className="pt-4 border-t border-ink-line/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-neutral-500 font-semibold uppercase tracking-wider">
                      Enterprise Grade
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

          {/* 05. AI as a Service - Featured Full-Width Horizon Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 group relative rounded-3xl bg-white border border-ink-line hover:border-[#0052cb]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Big Featured Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-950">
                <img
                  src={AI_FEATURED_SOLUTION.image}
                  alt={AI_FEATURED_SOLUTION.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#0052cb] border border-white/80 shadow-xs">
                    <Sparkles className="size-3 text-[#0052cb] animate-pulse" />
                    <span>{AI_FEATURED_SOLUTION.badge}</span>
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-bricolage text-2xl sm:text-3xl font-bold tracking-tight text-ink group-hover:text-[#0052cb] transition-colors">
                      {AI_FEATURED_SOLUTION.number}. {AI_FEATURED_SOLUTION.title}
                    </h3>
                    <div className="size-9 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center shrink-0 border border-blue-200/60">
                      <Brain className="size-4.5" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-5">
                    {AI_FEATURED_SOLUTION.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {AI_FEATURED_SOLUTION.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-line/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500 font-semibold uppercase tracking-wider">
                    Next-Gen AI Capabilities
                  </span>

                  <button
                    onClick={() => onNavigatePage(AI_FEATURED_SOLUTION.pageRoute)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0052cb] hover:bg-[#0041a3] text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 group-hover:scale-102 cursor-pointer"
                  >
                    <span>{AI_FEATURED_SOLUTION.ctaText}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
