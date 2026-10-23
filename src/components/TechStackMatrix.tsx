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
} from 'lucide-react'

interface TechTier {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  sla: string
  slaLabel: string
  description: string
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
    icon: Sparkles,
    color: '#0052cb',
    accentBorder: 'hover:border-blue-400',
    accentBg: 'bg-blue-50/70 text-[#0052cb]',
    technologies: [
      { name: 'React 19 & Next.js 14', role: 'Server Components & Streaming SSR', badge: 'Core Web' },
      { name: 'TypeScript Strict', role: 'Type-safe enterprise contract enforcement', badge: 'Standard' },
      { name: 'TanStack Suite v5', role: 'Asynchronous state & multi-layer cache sync', badge: 'State' },
      { name: 'Flutter & Swift Native', role: 'High-performance cross-platform iOS/Android', badge: 'Mobile' },
      { name: 'Tailwind CSS & CoUI', role: 'Zero-runtime cognitive token styling engine', badge: 'Design Tokens' },
      { name: 'Three.js & WebGL', role: 'Interactive 3D configurators & AR product viewers', badge: 'Spatial 3D' },
    ],
    metrics: [
      { label: 'Core Web Vitals', value: '100% Green' },
      { label: 'Client Frame Budget', value: '16.6ms (60 FPS)' },
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
    icon: Server,
    color: '#059669',
    accentBorder: 'hover:border-emerald-400',
    accentBg: 'bg-emerald-50/70 text-emerald-700',
    technologies: [
      { name: 'Go (Golang)', role: 'Low-latency concurrency & lightweight microservices', badge: 'High Concurrency' },
      { name: 'Node.js & NestJS', role: 'Modular enterprise API gateways & event emitters', badge: 'Runtime' },
      { name: 'Python & FastAPI', role: 'Async microservices & mathematical data services', badge: 'Micro-Engine' },
      { name: 'Apache Kafka & RabbitMQ', role: 'Distributed event bus & pub/sub messaging', badge: 'Event Bus' },
      { name: 'PostgreSQL & Redis', role: 'Relational data integrity with sub-millisecond in-memory cache', badge: 'Data Tier' },
      { name: 'gRPC & GraphQL Federation', role: 'Low-overhead protocol buffers & unified schemas', badge: 'Contracts' },
    ],
    metrics: [
      { label: 'Ingestion Throughput', value: '50K+ req/sec' },
      { label: 'P99 Database Latency', value: '< 4.2ms' },
    ],
  },
  {
    id: 'ai-agents',
    number: '03',
    title: 'Cognitive AI & Autonomous Agents',
    subtitle: 'Domain-adapted LLMs, vector search, predictive models & synthetic generation',
    category: 'Intelligence Fabric',
    sla: '< 250ms',
    slaLabel: 'Vector Retrieval Latency',
    description: 'We embed enterprise-grade machine learning pipelines, agentic orchestration, and high-precision RAG architectures directly into operational workflows.',
    icon: Brain,
    color: '#7c3aed',
    accentBorder: 'hover:border-purple-400',
    accentBg: 'bg-purple-50/70 text-purple-700',
    technologies: [
      { name: 'PyTorch & TensorFlow', role: 'Custom deep neural networks & fine-tuned checkpoints', badge: 'Deep Learning' },
      { name: 'LangChain & LlamaIndex', role: 'Multi-agent orchestration & structured semantic tool use', badge: 'Agentic' },
      { name: 'Milvus & pgvector', role: 'High-scale dense vector embeddings & similarity search', badge: 'Vector Store' },
      { name: 'vLLM & TensorRT-LLM', role: 'Optimized low-latency GPU inference serving', badge: 'Inference' },
      { name: 'OpenAI, Anthropic & Claude APIs', role: 'Enterprise reasoning with strict guardrails & PII redaction', badge: 'Foundation LLM' },
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
    icon: Cloud,
    color: '#d97706',
    accentBorder: 'hover:border-amber-400',
    accentBg: 'bg-amber-50/70 text-amber-700',
    technologies: [
      { name: 'Kubernetes & Docker', role: 'Container orchestration with automated horizontal pod autoscaling', badge: 'Orchestration' },
      { name: 'Terraform & OpenTofu', role: 'Declarative Infrastructure as Code (IaC) governance', badge: 'GitOps' },
      { name: 'Global Anycast Edge CDN', role: '120+ global PoPs, NVMe edge caching & automated AVIF delivery', badge: 'Edge PoPs' },
      { name: 'AWS & Google Cloud', role: 'Enterprise hybrid-cloud redundancy & data sovereignty', badge: 'Multi-Cloud' },
      { name: 'GitHub Actions & ArgoCD', role: 'Zero-downtime blue/green automated canary deployments', badge: 'Pipelines' },
      { name: 'Resend Enterprise Gateway', role: 'Mission-critical transactional dispatch with dedicated IPs', badge: 'Ingress/Egress' },
    ],
    metrics: [
      { label: 'DDoS Capacity Shield', value: '80+ Tbps' },
      { label: 'Global Availability', value: '120+ PoPs' },
    ],
  },
]

import { SectionEyebrow } from './SectionEyebrow'

interface TechStackMatrixProps {
  sectionNumber?: string
}

export const TechStackMatrix: React.FC<TechStackMatrixProps> = ({ sectionNumber = '02' }) => {
  const [activeTierId, setActiveTierId] = useState<string>('all')

  const displayedTiers = activeTierId === 'all'
    ? TECH_TIERS
    : TECH_TIERS.filter((t) => t.id === activeTierId)

  return (
    <section id="tech-spectrum" className="py-24 md:py-36 bg-[#fcfcfd] relative overflow-hidden border-t border-slate-200/80 font-inter-tight">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(0,82,203,0.04),transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-12">
          <SectionEyebrow number={sectionNumber} label="Enterprise Engineering Ecosystem" tone="dark" className="mb-6" />

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.04]">
            Distributed Cloud &{' '}
            <span className="text-[#0052cb]">Living Technology Fabric</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Rather than isolated technologies, CoVision architects a four-tier continuous delivery fabric. Every layer is benchmarked for sub-second execution, microservice resilience, and fault-tolerant failover.
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTierId('all')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTierId === 'all'
                ? 'bg-[#0052cb] text-white shadow-sm shadow-blue-600/30 font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="size-3.5" />
            <span>Unified Architecture (All 4 Tiers)</span>
          </button>

          {TECH_TIERS.map((tier) => {
            const Icon = tier.icon
            const isSelected = activeTierId === tier.id
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0052cb] text-white shadow-sm shadow-blue-600/30 font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="size-3.5" />
                <span>Tier {tier.number}: {tier.category}</span>
              </button>
            )
          })}
        </div>

        {/* 4-Tier Enterprise Architecture Grid */}
        <div className={`grid gap-8 ${activeTierId === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          <AnimatePresence mode="popLayout">
            {displayedTiers.map((tier) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className={`bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${tier.accentBorder} group`}
                >
                  <div>
                    {/* Tier Top Header */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`size-11 rounded-2xl ${tier.accentBg} flex items-center justify-center font-bold shadow-xs`}>
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            TIER {tier.number} • {tier.category}
                          </div>
                          <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0052cb] transition-colors">
                            {tier.title}
                          </h3>
                        </div>
                      </div>

                      {/* SLA Pill */}
                      <div className="text-right shrink-0">
                        <div className="text-sm sm:text-base font-extrabold font-mono text-[#0052cb]">
                          {tier.sla}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">
                          {tier.slaLabel}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Curated Technologies with Capabilities */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Production Implementations
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tier.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-all flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                <span className="size-1.5 rounded-full bg-[#0052cb]" />
                                {tech.name}
                              </span>
                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white text-slate-500 border border-slate-200/70 font-semibold shrink-0">
                                {tech.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                              {tech.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tier Metrics Footer */}
                  <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {tier.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-[10px] font-mono uppercase text-slate-400">{m.label}</div>
                          <div className="text-xs font-bold font-mono text-slate-800">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0052cb]">
                      <ShieldCheck className="size-3.5 text-emerald-500" />
                      <span>Production Ready</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Global Enterprise Architecture Verification & Compliance Ribbon */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0052cb] flex items-center justify-center shrink-0">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h4 className="font-bricolage text-base sm:text-lg font-bold text-slate-900">
                  Strict Enterprise Governance, Security & SLA Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs"
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
