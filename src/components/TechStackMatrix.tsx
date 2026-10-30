import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  Brain,
  Cloud,
  ShieldCheck,
  Server,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

interface TechTier {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  sla: string
  slaLabel: string
  description: string
  image: string
  icon: React.ElementType
  color: string
  accentBorder: string
  accentBg: string
  technologies: {
    name: string
    role: string
    badge: string
  }[]
  metrics: {
    label: string
    value: string
  }[]
}

const TECH_TIERS: TechTier[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Experience & Client Runtimes',
    subtitle: 'Ultra-responsive client-side execution, headless storefronts & spatial interfaces',
    category: 'Client Layer',
    sla: '< 0.8s',
    slaLabel: 'Global First Contentful Paint',
    description: 'We construct high-velocity web and mobile applications engineered for 60fps interaction smoothness, zero hydration lag, and WCAG AAA compliance.',
    image: '/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg',
    icon: Sparkles,
    color: '#0052cb',
    accentBorder: 'hover:border-blue-500/50',
    accentBg: 'bg-blue-50 text-[#0052cb] border border-blue-200/80',
    technologies: [
      { name: 'React 19 & Next.js 14', role: 'Server Components & Edge Streaming SSR', badge: 'Core Web' },
      { name: 'TypeScript Strict', role: 'Type-safe enterprise contract enforcement', badge: 'Standard' },
      { name: 'TanStack Suite v5', role: 'Asynchronous state & multi-layer cache sync', badge: 'State' },
      { name: 'Flutter & Swift Native', role: 'Hardware-accelerated iOS & Android runtimes', badge: 'Mobile' },
      { name: 'Tailwind CSS & CoUI™', role: 'Zero-runtime cognitive token styling engine', badge: 'Design Tokens' },
      { name: 'Three.js & WebGL', role: 'Interactive 3D configurators & spatial rendering', badge: 'Spatial 3D' },
    ],
    metrics: [
      { label: 'Core Web Vitals', value: '100% Green' },
      { label: 'Frame Budget', value: '16.6ms (60 FPS)' },
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Distributed Microservices & Event Fabric',
    subtitle: 'High-throughput transactional APIs, message queues & resilient databases',
    category: 'Application Layer',
    sla: '99.995%',
    slaLabel: 'Guaranteed Production Uptime',
    description: 'Resilient distributed systems that withstand unpredictable flash traffic surges, enforce ACID consistency, and process millions of enterprise transactions.',
    image: '/senior_image_catalog/19_API_Gateways_and_Integration/01_kafka_high-throughput_event_brok.jpg',
    icon: Server,
    color: '#059669',
    accentBorder: 'hover:border-emerald-500/50',
    accentBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    technologies: [
      { name: 'Go (Golang)', role: 'Low-latency concurrency & lightweight microservices', badge: 'High Concurrency' },
      { name: 'Node.js & NestJS', role: 'Modular enterprise API gateways & event emitters', badge: 'Runtime' },
      { name: 'Python & FastAPI', role: 'Async microservices & mathematical data services', badge: 'Micro-Engine' },
      { name: 'Apache Kafka & RabbitMQ', role: 'Distributed event bus & pub/sub messaging', badge: 'Event Bus' },
      { name: 'PostgreSQL & Redis', role: 'Relational data integrity with sub-ms memory cache', badge: 'Data Tier' },
      { name: 'gRPC & Federated GraphQL', role: 'Low-overhead protocol buffers & unified schemas', badge: 'Contracts' },
    ],
    metrics: [
      { label: 'Ingestion Throughput', value: '50K+ req/sec' },
      { label: 'P99 DB Latency', value: '< 4.2ms' },
    ],
  },
  {
    id: 'ai-agents',
    number: '03',
    title: 'Cognitive AI & Autonomous Agents',
    subtitle: 'Domain-adapted LLMs, vector search, predictive models & synthetic generation',
    category: 'Intelligence Fabric',
    sla: '< 25ms',
    slaLabel: 'Vector Retrieval Latency',
    description: 'We embed enterprise-grade machine learning pipelines, agentic orchestration, and high-precision RAG architectures directly into operational workflows.',
    image: '/senior_image_catalog/07_Data_Analytics_and_BI/03_real-time_telemetry_event_stream.jpg',
    icon: Brain,
    color: '#7c3aed',
    accentBorder: 'hover:border-purple-500/50',
    accentBg: 'bg-purple-50 text-purple-700 border border-purple-200/80',
    technologies: [
      { name: 'PyTorch & TensorFlow', role: 'Custom deep neural networks & fine-tuned checkpoints', badge: 'Deep Learning' },
      { name: 'LangChain & LlamaIndex', role: 'Multi-agent orchestration & structured semantic tool use', badge: 'Agentic' },
      { name: 'Milvus & pgvector', role: 'High-scale dense vector embeddings & similarity search', badge: 'Vector Store' },
      { name: 'vLLM & TensorRT-LLM', role: 'Optimized low-latency GPU inference serving', badge: 'Inference' },
      { name: 'Enterprise LLM Gateway', role: 'Enterprise reasoning with strict guardrails & PII redaction', badge: 'Foundation LLM' },
      { name: 'Hugging Face Transformers', role: 'Open-weights domain-adapted language models', badge: 'Open Weights' },
    ],
    metrics: [
      { label: 'Context Relevance', value: '98.4% Precision' },
      { label: 'Hallucination Guard', value: 'Automated Evals' },
    ],
  },
  {
    id: 'cloud-edge',
    number: '04',
    title: 'Cloud Infrastructure & Anycast Edge',
    subtitle: 'Containerized orchestration, automated GitOps CI/CD & global routing',
    category: 'Infrastructure & Edge',
    sla: '< 15ms',
    slaLabel: 'Median Global Edge Latency',
    description: 'Globally distributed edge networks with multi-region redundancy, origin shielding, automated zero-downtime rollouts, and enterprise DDoS mitigation.',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg',
    icon: Cloud,
    color: '#d97706',
    accentBorder: 'hover:border-amber-500/50',
    accentBg: 'bg-amber-50 text-amber-700 border border-amber-200/80',
    technologies: [
      { name: 'Kubernetes & Docker', role: 'Container orchestration with automated horizontal pod autoscaling', badge: 'Orchestration' },
      { name: 'Terraform & OpenTofu', role: 'Declarative Infrastructure as Code (IaC) governance', badge: 'GitOps' },
      { name: 'Global Anycast Edge CDN', role: '120+ global PoPs, NVMe edge caching & automated AVIF delivery', badge: 'Edge PoPs' },
      { name: 'AWS & Google Cloud', role: 'Enterprise hybrid-cloud redundancy & data sovereignty', badge: 'Multi-Cloud' },
      { name: 'GitHub Actions & ArgoCD', role: 'Zero-downtime blue/green automated canary deployments', badge: 'Pipelines' },
      { name: 'Enterprise Edge Shield', role: 'Multi-terabit DDoS mitigation & automated Web Application Firewall', badge: 'Security' },
    ],
    metrics: [
      { label: 'DDoS Capacity Shield', value: '80+ Tbps' },
      { label: 'Global Edge Network', value: '120+ PoPs' },
    ],
  },
]

interface TechStackMatrixProps {
  sectionNumber?: string
}

export const TechStackMatrix: React.FC<TechStackMatrixProps> = ({ sectionNumber = '02' }) => {
  const [activeTierId, setActiveTierId] = useState<string>('all')

  const displayedTiers = activeTierId === 'all'
    ? TECH_TIERS
    : TECH_TIERS.filter((t) => t.id === activeTierId)

  return (
    <section id="tech-spectrum" className="py-24 md:py-36 bg-paper relative overflow-hidden border-t border-ink-line font-inter-tight">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(0,82,203,0.05),transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header with High-Tech Eyebrow & SLA Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <SectionEyebrow number={sectionNumber} label="Enterprise Systems Architecture" tone="dark" className="mb-4" />

            <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-[1.04]">
              Distributed Cloud &amp; Living Technology Fabric
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Rather than isolated tools, CoVision constructs a unified four-tier continuous delivery fabric. Every layer is benchmarked for sub-second execution, microservice resilience, and fault-tolerant automated failover.
            </p>
          </div>

          {/* Architectural Live Status Strip */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-ink-line text-xs font-mono font-semibold text-neutral-700 shadow-2xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Fabric Telemetry: Active</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0052cb] border border-blue-200/80 text-xs font-mono font-bold uppercase tracking-wider">
              <Activity className="size-3.5" />
              <span>99.995% SLA Benchmark</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VISUAL ARCHITECTURE PIPELINE CONSOLE
            Shows the real-time interconnected flow between the 4 tiers
           ========================================================================= */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-white border border-ink-line shadow-sm">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4 flex items-center justify-between">
            <span>Continuous Systems Pipeline</span>
            <span className="text-[#0052cb]">Zero-Loss Distributed Topology</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { num: '01', title: 'Client & Edge Ingress', sub: '< 0.8s Global FCP', icon: Sparkles },
              { num: '02', title: 'Event Bus & APIs', sub: '50K+ req/s Ingestion', icon: Server },
              { num: '03', title: 'Cognitive AI Core', sub: '< 25ms Vector Recall', icon: Brain },
              { num: '04', title: 'Multi-Cloud Fabric', sub: '120+ Anycast PoPs', icon: Cloud },
            ].map((step, sIdx) => {
              const StepIcon = step.icon
              const isLast = sIdx === 3
              return (
                <div key={sIdx} className="relative flex items-center justify-between p-4 rounded-2xl bg-paper border border-ink-line group hover:border-[#0052cb]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-white border border-ink-line text-[#0052cb] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <StepIcon className="size-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-neutral-400">TIER {step.num}</div>
                      <div className="text-xs font-bold text-ink leading-tight">{step.title}</div>
                      <div className="text-[10px] text-[#0052cb] font-semibold mt-0.5">{step.sub}</div>
                    </div>
                  </div>

                  {!isLast && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 size-6 rounded-full bg-white border border-ink-line text-neutral-400 flex items-center justify-center shadow-2xs">
                      <ArrowRight className="size-3 text-[#0052cb]" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Tier Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTierId('all')}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTierId === 'all'
                ? 'bg-[#0052cb] text-white shadow-md shadow-blue-600/30 font-bold'
                : 'bg-white border border-ink-line text-neutral-600 hover:text-ink hover:border-neutral-400'
            }`}
          >
            <Layers className="size-3.5" />
            <span>Full System Architecture (All 4 Tiers)</span>
          </button>

          {TECH_TIERS.map((tier) => {
            const Icon = tier.icon
            const isSelected = activeTierId === tier.id
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0052cb] text-white shadow-md shadow-blue-600/30 font-bold'
                    : 'bg-white border border-ink-line text-neutral-600 hover:text-ink hover:border-neutral-400'
                }`}
              >
                <Icon className="size-3.5" />
                <span>Tier {tier.number}: {tier.category}</span>
              </button>
            )
          })}
        </div>

        {/* =========================================================================
            4-TIER ARCHITECTURE SHOWCASE CARDS: SENIOR ENTERPRISE IT PRESENTATION
           ========================================================================= */}
        <div className={`grid gap-8 ${activeTierId === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          <AnimatePresence mode="popLayout">
            {displayedTiers.map((tier) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white rounded-3xl border border-ink-line overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${tier.accentBorder} group`}
                >
                  <div>
                    {/* Visual Image Header from Senior IT Catalog */}
                    <div className="relative w-full h-48 overflow-hidden bg-slate-950">
                      <img
                        src={tier.image}
                        alt={tier.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
                      
                      {/* Floating Tier Badges inside image */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold tracking-wider uppercase">
                          <span className="size-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                          <span>Tier {tier.number} • {tier.category}</span>
                        </div>

                        <div className="px-3 py-1 rounded-full bg-[#0052cb] text-white text-xs font-mono font-extrabold shadow-sm">
                          {tier.sla}
                        </div>
                      </div>

                      {/* Floating bottom SLA descriptor */}
                      <div className="absolute bottom-3 right-4 text-[11px] font-mono text-slate-300 font-semibold drop-shadow">
                        {tier.slaLabel}
                      </div>
                    </div>

                    {/* Tier Body Content */}
                    <div className="p-7 sm:p-8">
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className={`size-11 rounded-2xl ${tier.accentBg} flex items-center justify-center font-bold shadow-2xs shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="font-bricolage text-2xl font-bold text-ink group-hover:text-[#0052cb] transition-colors leading-tight">
                            {tier.title}
                          </h3>
                          <div className="text-xs text-neutral-500 font-medium mt-0.5 line-clamp-1">
                            {tier.subtitle}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                        {tier.description}
                      </p>

                      {/* Technical Implementations Grid */}
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center justify-between">
                          <span>Core Production Specifications</span>
                          <span className="text-[#0052cb] text-[10px] font-semibold">Audited Stack</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {tier.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="p-3.5 rounded-2xl bg-paper border border-ink-line hover:bg-blue-50/50 hover:border-blue-200 transition-all flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-ink flex items-center gap-1.5">
                                  <span className="size-1.5 rounded-full bg-[#0052cb]" />
                                  {tech.name}
                                </span>
                                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-white text-neutral-600 border border-ink-line font-bold shrink-0">
                                  {tech.badge}
                                </span>
                              </div>
                              <p className="text-[11.5px] text-neutral-500 mt-1.5 leading-snug font-normal">
                                {tech.role}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tier Metrics Footer */}
                  <div className="p-7 sm:p-8 pt-0 mt-auto">
                    <div className="pt-4 border-t border-ink-line flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        {tier.metrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold">{m.label}</div>
                            <div className="text-xs font-bold font-mono text-[#0052cb]">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                        <ShieldCheck className="size-3.5 text-emerald-600" />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Global Enterprise Architecture Verification & Compliance Ribbon */}
        <div className="mt-14 bg-white rounded-3xl p-7 sm:p-9 border border-ink-line shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0052cb] flex items-center justify-center shrink-0 border border-blue-200/80">
                <ShieldCheck className="size-6 text-[#0052cb]" />
              </div>
              <div>
                <h4 className="font-bricolage text-base sm:text-lg font-bold text-ink">
                  Strict Enterprise Governance, Security &amp; SLA Architecture
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 font-normal">
                  All systems built by CoVision follow zero-trust network topology, immutable audit logging, and automated vulnerability scanning.
                </p>
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {[
                'ISO/IEC 27001 Certified',
                'SOC 2 Type II Aligned',
                'PCI-DSS Level 1 Ready',
                'GDPR & HIPAA Compliant',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-paper text-neutral-700 text-xs font-semibold border border-ink-line shadow-2xs"
                >
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
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
