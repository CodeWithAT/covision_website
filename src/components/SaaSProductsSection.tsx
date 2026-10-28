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

const SAAS_PRODUCTS: SaaSProduct[] = [
  {
    id: 'cocommerce',
    name: 'CoCommerce™',
    subdomain: 'commerce.covision.tech',
    category: 'Enterprise Composable Commerce',
    headline: 'High-Performance Composable Commerce & Order Management',
    description:
      'A modular, API-first commerce platform engineered for high-volume retail brands. Delivers lightning-fast checkout speeds, automated multi-warehouse inventory routing, and native multi-currency support.',
    image: '/senior_image_catalog/06_eCommerce_and_Retail/09_peak_flash-sale_concurrency_hand.jpg',
    metrics: [
      { label: 'Checkout Speed', value: '< 150ms' },
      { label: 'Uptime on Sales Surges', value: '99.99%' },
      { label: 'Annual GMV Powered', value: '$240M+' },
    ],
    features: [
      'Universal ERP Integration (SAP, NetSuite, Oracle, Microsoft Dynamics)',
      'High-Traffic Surge Queue with automated bot protection',
      'Unified Order Management across multiple fulfillment warehouses',
      'Modern Storefront SDK for Next.js, React, and mobile apps',
    ],
    techStack: ['TypeScript', 'GraphQL', 'Redis', 'Cloudflare Edge', 'PostgreSQL'],
    liveDemoUrl: 'https://commerce.covision.tech',
    documentationUrl: 'https://docs.covision.tech/commerce',
    tag: 'Flagship Platform',
  },
  {
    id: 'cogniflow-ai',
    name: 'CogniFlow AI™',
    subdomain: 'ai.covision.tech',
    category: 'Enterprise AI & Automation',
    headline: 'Autonomous Enterprise AI & Multi-Agent Workflow Engine',
    description:
      'A secure enterprise AI platform that automates routine workflows, extracts intelligence from unstructured business documents, and provides 24/7 customer assistance with strict data privacy.',
    image: '/senior_image_catalog/05_Enterprise_AI_and_Robotics/04_synthetic_intelligence_core_proc.jpg',
    metrics: [
      { label: 'Workflow Automation', value: '88%' },
      { label: 'Query Response', value: '< 400ms' },
      { label: 'Response Accuracy', value: '99.8%' },
    ],
    features: [
      'Self-healing automated task execution and smart escalation',
      'Dedicated private knowledge base with zero public data leaks',
      'Automated visual quality control and intelligent OCR scanning',
      'Pre-built integrations for Salesforce, Zendesk, Jira & SAP',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Vector DB', 'PyTorch'],
    liveDemoUrl: 'https://ai.covision.tech',
    documentationUrl: 'https://docs.covision.tech/cogniflow',
    tag: 'Cognitive Engine',
  },
  {
    id: 'coedge-fabric',
    name: 'CoEdge Fabric™',
    subdomain: 'edge.covision.tech',
    category: 'Edge Infrastructure & Acceleration',
    headline: 'Global Anycast Edge Network & Instant Media Optimization',
    description:
      'Built on tier-1 global Anycast routing with enterprise edge integration to deliver sub-15ms worldwide loading times across 120+ Points of Presence. Automatically compresses images and protects against DDoS attacks.',
    image: '/senior_image_catalog/01_Cloud_and_Datacenter/05_global_anycast_edge_facility.jpg',
    metrics: [
      { label: 'Global Loading Time', value: '< 15ms' },
      { label: 'Bandwidth Saved', value: '78%' },
      { label: 'Global Edge PoPs', value: '120+' },
    ],
    features: [
      'High-speed NVMe edge tiering with 99.8% cache hit ratio',
      'Real-time automated WebP and AVIF image compression',
      'Enterprise DDoS mitigation protecting origin web servers',
      'Instant global cache purge completed in under 250 milliseconds',
    ],
    techStack: ['Global Anycast Edge', 'Rust', 'WebAssembly', 'HTTP/3'],
    liveDemoUrl: 'https://edge.covision.tech',
    documentationUrl: 'https://docs.covision.tech/coedge',
    tag: 'Edge Platform',
  },
  {
    id: 'coui-studio',
    name: 'CoUI Studio™',
    subdomain: 'ui.covision.tech',
    category: 'Design Systems & Component Library',
    headline: 'Human-Centered Design Tokens & Fluid 60fps Components',
    description:
      'A production-grade design system and component foundry built on cognitive psychology and accessibility standards. Guarantees visual polish and lightning-fast developer handoff.',
    image: '/senior_image_catalog/08_UX_UI_Design_Systems/02_coui_token_foundry_and_style_gu.jpg',
    metrics: [
      { label: 'UI Frame Rate', value: '60 FPS' },
      { label: 'Handoff Velocity', value: '3x Faster' },
      { label: 'Accessibility', value: 'WCAG Ready' },
    ],
    features: [
      'The I3D Process: Ideate, Investigate, Iterate, and Deliver',
      'Harmonious color palettes with zero visual clutter',
      'Subtle micro-animations calibrated for high engagement',
      'Ready-to-use SDKs for React, React Native, and mobile apps',
    ],
    techStack: ['Framer Motion', 'Tailwind CSS', 'Figma Tokens', 'React'],
    liveDemoUrl: 'https://ui.covision.tech',
    documentationUrl: 'https://docs.covision.tech/coui',
    tag: 'Design System',
  },
  {
    id: 'datapulse-bi',
    name: 'DataPulse BI™',
    subdomain: 'bi.covision.tech',
    category: 'Real-Time Telemetry & Analytics',
    headline: 'Real-Time Executive Dashboards & Conversion Attribution',
    description:
      'Enterprise data analytics platform capable of processing 50,000+ real-time customer events per second. Correlates customer behavior directly with warehouse inventory and revenue performance.',
    image: '/senior_image_catalog/07_Data_Analytics_and_BI/01_financial_bi_telemetry_hub.jpg',
    metrics: [
      { label: 'Events Ingested / Sec', value: '50,000+' },
      { label: 'Query Latency', value: '< 80ms' },
      { label: 'Conversion Lift', value: '+24.6%' },
    ],
    features: [
      'Real-time executive dashboards with instant data visualization',
      'Automated customer journey tracking and churn prediction',
      'Full compliance with GDPR, CCPA, and SOC-2 data standards',
      'One-click synchronization with BigQuery, Snowflake, and PowerBI',
    ],
    techStack: ['Apache Kafka', 'ClickHouse', 'SQL', 'Python'],
    liveDemoUrl: 'https://bi.covision.tech',
    documentationUrl: 'https://docs.covision.tech/datapulse',
    tag: 'Analytics Suite',
  },
]

interface SaaSProductsSectionProps {
  onOpenContact: (prefillService?: string) => void
  sectionNumber?: string
}

export const SaaSProductsSection: React.FC<SaaSProductsSectionProps> = ({
  onOpenContact,
  sectionNumber = '01',
}) => {
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
            <SectionEyebrow number={sectionNumber} label="Proprietary SaaS & Platforms" tone="dark" />
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
              viewport={{ once: true, amount: 0.05 }}
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
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-neutral-900 border border-ink-line mb-5">
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
              viewport={{ once: true, amount: 0.05 }}
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
