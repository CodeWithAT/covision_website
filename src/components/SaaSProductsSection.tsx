import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  CheckCircle2,
  Copy,
  ArrowRight,
  X,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

export interface SaaSProduct {
  id: string
  name: string
  subdomain: string
  category: string
  headline: string
  description: string
  image: string
  metrics: { label: string; value: string }[]
  features: string[]
  techStack: string[]
  liveDemoUrl: string
  documentationUrl: string
  tag: string
}

export const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: 'cocommerce',
    name: 'CoCommerce™',
    subdomain: 'commerce.covision.tech',
    category: 'Headless Composable Commerce',
    headline: 'Next-Gen MACH-X Enterprise Commerce & OMS Engine',
    description:
      'A modular, API-first composable commerce platform engineered for high-concurrency retail brands. Features sub-150ms checkout APIs, automated ERP inventory sync, multi-currency localization, and built-in 3D product visualizer support.',
    image: '/images/saas/omniflow_commerce.jpg',
    metrics: [
      { label: 'p99 Checkout Latency', value: '<120ms' },
      { label: 'Uptime on Flash Sales', value: '99.995%' },
      { label: 'Annual GMV Scaled', value: '$240M+' },
    ],
    features: [
      'Universal ERP Middleware (SAP, NetSuite, Oracle, Microsoft Dynamics)',
      'Sub-second Flash Sale Edge Queue with Anti-Bot protection',
      'Unified OMS for multi-warehouse routing & barcode tracking',
      'Headless Storefront SDK for Next.js, Remix, and React Native',
    ],
    techStack: ['TypeScript', 'GraphQL', 'Redis Cluster', 'Bunny CDN', 'PostgreSQL'],
    liveDemoUrl: 'https://commerce.covision.tech',
    documentationUrl: 'https://docs.covision.tech/commerce',
    tag: 'Flagship Platform',
  },
  {
    id: 'cogniflow-ai',
    name: 'CogniFlow AI™',
    subdomain: 'ai.covision.tech',
    category: 'Autonomous Agentic Intelligence',
    headline: 'Enterprise Multi-Agent LLM Orchestration & Decision Fabric',
    description:
      'An enterprise-grade cognitive AI fabric that unifies private vector knowledge bases, multi-agent automated reasoning, and Computer Vision pipelines to automate complex workflows with strict SOC-2 data isolation.',
    image: '/images/saas/synthetix_ai.jpg',
    metrics: [
      { label: 'Workflow Automation', value: '88%' },
      { label: 'Query Response', value: '<450ms' },
      { label: 'Hallucination Rate', value: '<0.02%' },
    ],
    features: [
      'Self-healing multi-agent task execution and automated escalation',
      'Air-gapped private vector database with zero data-training leaks',
      'Automated visual quality control and document intelligence OCR',
      'Pre-built integrations for Salesforce, Zendesk, Jira & SAP',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Milvus', 'CUDA'],
    liveDemoUrl: 'https://ai.covision.tech',
    documentationUrl: 'https://docs.covision.tech/cogniflow',
    tag: 'Cognitive Engine',
  },
  {
    id: 'coedge-fabric',
    name: 'CoEdge Fabric™',
    subdomain: 'edge.covision.tech',
    category: 'Edge Infrastructure & Acceleration',
    headline: 'Global Anycast Edge Network & Automated Asset Transcoder',
    description:
      'Built on tier-1 global edge routing with Bunny CDN integration to deliver sub-15ms international TTFB across 120+ Points of Presence. Automatically optimizes assets and transcodes media streams on the fly.',
    image: '/images/saas/hyperscale_edge.jpg',
    metrics: [
      { label: 'Global Median TTFB', value: '<14ms' },
      { label: 'Bandwidth Saved', value: '78%' },
      { label: 'Global Anycast PoPs', value: '120+' },
    ],
    features: [
      'Smart NVMe Edge Tiering with 99.8% cache hit ratio',
      'Real-time Brotli and AVIF asset optimization pipeline',
      'Enterprise DDoS mitigation up to 80 Tbps capacity',
      'Instant cache invalidation propagation under 250 milliseconds',
    ],
    techStack: ['Bunny CDN Anycast', 'Rust', 'WebAssembly', 'HTTP/3 Quic'],
    liveDemoUrl: 'https://edge.covision.tech',
    documentationUrl: 'https://docs.covision.tech/coedge',
    tag: 'Edge Platform',
  },
  {
    id: 'coui-studio',
    name: 'CoUI Studio™',
    subdomain: 'ui.covision.tech',
    category: 'Design System & Component Foundry',
    headline: 'Cognitive Science Design Tokens & 60fps Spatial Framework',
    description:
      'A production-ready design token architecture and component library built on cognitive psychology and WCAG AAA accessibility. Enforces brand consistency across mobile, web, and spatial 3D interfaces.',
    image: '/images/services/ux_ui_design.jpg',
    metrics: [
      { label: 'UI Frame Rate', value: '60 FPS' },
      { label: 'Dev Handshake Speed', value: '3x Faster' },
      { label: 'WCAG Compliance', value: 'AAA Ready' },
    ],
    features: [
      'Proprietary I3D framework: Ideate, Investigate, Iterate, Deliver',
      'Adaptive dark/light paper theme tokens with zero color clashing',
      'Micro-animations calibrated for engagement without cognitive fatigue',
      'Plug-and-play SDKs for React, React Native, Vue, and Flutter',
    ],
    techStack: ['Framer Motion', 'Tailwind CSS', 'Figma Tokens', 'Storybook'],
    liveDemoUrl: 'https://ui.covision.tech',
    documentationUrl: 'https://docs.covision.tech/coui',
    tag: 'Design System',
  },
  {
    id: 'datapulse-bi',
    name: 'DataPulse BI™',
    subdomain: 'bi.covision.tech',
    category: 'Real-Time Telemetry & Analytics',
    headline: 'High-Throughput Event Ingestion & CRO Attribution Suite',
    description:
      'Enterprise data analytics pipeline capable of ingesting 50,000+ real-time customer events per second. Correlates user clickstream behaviors directly with warehouse inventory and revenue attribution.',
    image: '/images/saas/pulse_metrics.jpg',
    metrics: [
      { label: 'Events / Second', value: '50,000+' },
      { label: 'Query Latency', value: '<80ms' },
      { label: 'CRO Uplift', value: '+24.6%' },
    ],
    features: [
      'Real-time streaming dashboards with TanStack Query v5 state cache',
      'Automated cohort segmentation and churn prediction algorithms',
      'Full GDPR, CCPA, and SOC-2 privacy anonymization at ingress',
      'One-click export to BigQuery, Snowflake, and PowerBI',
    ],
    techStack: ['Apache Kafka', 'ClickHouse', 'TanStack Query', 'Apache Arrow'],
    liveDemoUrl: 'https://bi.covision.tech',
    documentationUrl: 'https://docs.covision.tech/datapulse',
    tag: 'Analytics Suite',
  },
]

interface SaaSProductsSectionProps {
  onOpenContact: (prefillService?: string) => void
}

export const SaaSProductsSection: React.FC<SaaSProductsSectionProps> = ({ onOpenContact }) => {
  const [selectedProduct, setSelectedProduct] = useState<SaaSProduct | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopyLink = (product: SaaSProduct, e: React.MouseEvent) => {
    e.stopPropagation()
    const shareableUrl = `https://${product.subdomain}`
    navigator.clipboard.writeText(shareableUrl)
    setCopiedId(product.id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <section id="products" className="relative w-full py-24 md:py-36 bg-paper-deep text-ink border-t border-ink-line font-inter-tight">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionEyebrow number="03" label="Proprietary SaaS & Platforms" tone="dark" />
            <h2 className="mt-8 font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.02]">
              Enterprise Products &{' '}
              <span className="text-[#0052cb]">SaaS Platforms.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              We engineer specialized, modular enterprise platforms with dedicated subdomains and independent architectures. Share any specific product dossier directly with your clients.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-line text-xs font-semibold text-neutral-700 shadow-xs">
              <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
              <span>5 Active Platforms Available for Live Client Demo</span>
            </div>
          </div>
        </div>

        {/* Tier 1 Platforms: 3 Balanced Cards (Zero Uneven Whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SAAS_PRODUCTS.slice(0, 3).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-3xl border border-ink-line shadow-sm hover:shadow-xl hover:border-[#0052cb]/40 transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Top Badges & Subdomain Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-bold">
                    {product.tag}
                  </span>

                  <button
                    onClick={(e) => handleCopyLink(product, e)}
                    title="Click to copy product link for clients"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-ink-line text-[11px] font-mono text-neutral-600 hover:text-[#0052cb] hover:border-[#0052cb] transition-colors"
                  >
                    <span>{product.subdomain}</span>
                    {copiedId === product.id ? (
                      <CheckCircle2 className="size-3 text-emerald-500" />
                    ) : (
                      <Copy className="size-3" />
                    )}
                  </button>
                </div>

                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-ink-line mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none' }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">Production Live</span>
                    <span className="text-emerald-400 font-bold">● High Availability</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-ink group-hover:text-[#0052cb] transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#0052cb]">
                  {product.headline}
                </p>
                <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* 3 Symmetrical Metric Chips */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {product.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="rounded-xl bg-paper p-2.5 text-center border border-ink-line">
                      <div className="font-bricolage text-sm font-bold text-[#0052cb]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-medium truncate mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="mt-6 pt-4 border-t border-ink-line flex items-center justify-between text-xs font-semibold text-[#0052cb]">
                <span className="flex items-center gap-1 group-hover:underline">
                  Inspect Platform Specs
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] text-neutral-400 font-normal">
                  Click for Dossier
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier 2 Platforms: 2 Equal-Width Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
          {SAAS_PRODUCTS.slice(3).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-3xl border border-ink-line shadow-sm hover:shadow-xl hover:border-[#0052cb]/40 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-bold">
                    {product.tag}
                  </span>
                  <button
                    onClick={(e) => handleCopyLink(product, e)}
                    title="Click to copy product link for clients"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-ink-line text-[11px] font-mono text-neutral-600 hover:text-[#0052cb] transition-colors"
                  >
                    <span>{product.subdomain}</span>
                    {copiedId === product.id ? (
                      <CheckCircle2 className="size-3 text-emerald-500" />
                    ) : (
                      <Copy className="size-3" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-ink-line">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white text-[10px] font-mono">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">Enterprise Grade</span>
                    </div>
                  </div>

                  <div className="sm:col-span-7 space-y-2">
                    <h3 className="font-bricolage text-2xl font-bold text-ink group-hover:text-[#0052cb] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0052cb]">
                      {product.headline}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {product.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="rounded-xl bg-paper p-2.5 text-center border border-ink-line">
                      <div className="font-bricolage text-sm font-bold text-[#0052cb]">{m.value}</div>
                      <div className="text-[10px] text-neutral-500 truncate mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-line flex items-center justify-between text-xs font-semibold text-[#0052cb]">
                <span className="flex items-center gap-1 group-hover:underline">
                  Inspect Platform Specs & Architecture
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] text-neutral-400 font-normal">
                  Click for Dossier
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Full Product Dossier & Share Utility */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 border border-ink-line shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between pb-5 border-b border-ink-line">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0052cb] text-xs font-bold">
                        {selectedProduct.tag}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0052cb] mt-0.5">
                      {selectedProduct.headline}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    aria-label="Close modal"
                    className="size-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-ink cursor-pointer shrink-0"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Shareable Link Bar */}
                <div className="mt-5 p-3.5 rounded-2xl bg-paper border border-ink-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 truncate">
                    <Globe className="size-3.5 text-[#0052cb] shrink-0" />
                    <span className="font-semibold truncate">https://{selectedProduct.subdomain}</span>
                  </div>

                  <button
                    onClick={(e) => handleCopyLink(selectedProduct, e)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-ink-line text-xs font-bold text-ink hover:text-[#0052cb] hover:border-[#0052cb] transition-colors shadow-2xs cursor-pointer shrink-0"
                  >
                    {copiedId === selectedProduct.id ? (
                      <>
                        <CheckCircle2 className="size-3.5 text-emerald-500" />
                        <span className="text-emerald-600">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span>Copy Link for Client</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-ink-line">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-600">
                  {selectedProduct.description}
                </p>

                {/* Specifications */}
                <div className="mt-6 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Enterprise Platform Architecture & Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-neutral-700 bg-paper p-3 rounded-xl border border-ink-line"
                      >
                        <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-ink-line flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2">
                    Built With:
                  </span>
                  {selectedProduct.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-paper border border-ink-line text-[11px] font-mono text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 pt-5 border-t border-ink-line flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-semibold hover:bg-neutral-200 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(null)
                      onOpenContact(`Deploy ${selectedProduct.name} (${selectedProduct.subdomain})`)
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0052cb] text-white text-xs font-bold hover:bg-[#003da8] transition-colors shadow-sm cursor-pointer"
                  >
                    Request Custom Deployment
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
