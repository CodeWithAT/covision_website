import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  // CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Activity,
  Layers,
  Cpu,
  ShoppingBag,
  CreditCard,
  Crown,
  HeartPulse,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

interface PillarClientsSectionProps {
  onOpenContact: () => void
  sectionNumber?: string
}

interface BrandPartner {
  name: string
  ticker: string
  category: string
  highlight: string
  icon: React.ElementType
  accentColor: string
}

const BRAND_PARTNERS_ROW1: BrandPartner[] = [
  {
    name: 'Puma Global',
    ticker: 'PUMA',
    category: 'Retail & Sportswear',
    highlight: '4.2M+ Peak Shoppers Handled',
    icon: ShoppingBag,
    accentColor: 'from-amber-400/20 to-orange-500/20 text-orange-400 border-orange-500/30',
  },
  {
    name: 'NovaPay Global',
    ticker: 'NOVAPAY',
    category: 'FinTech & Core Banking',
    highlight: '$1.2B+ Daily Transaction Rails',
    icon: CreditCard,
    accentColor: 'from-cyan-400/20 to-blue-600/20 text-cyan-400 border-cyan-500/30',
  },
  {
    name: 'Silver Maharaja',
    ticker: 'SILVER MAHARAJA',
    category: 'Jewelry & Luxury Commerce',
    highlight: 'Haute-Couture Omnichannel POS',
    icon: Crown,
    accentColor: 'from-yellow-400/20 to-amber-600/20 text-yellow-300 border-yellow-500/30',
  },
  {
    name: 'Fila Footwear',
    ticker: 'FILA',
    category: 'Global Footwear & Lifestyle',
    highlight: '3D WebGL Digital Storefront',
    icon: Zap,
    accentColor: 'from-blue-400/20 to-indigo-600/20 text-blue-400 border-blue-500/30',
  },
  {
    name: 'Mango Fashion',
    ticker: 'MANGO',
    category: 'Fashion & Apparel',
    highlight: '18 European Distribution Hubs',
    icon: Layers,
    accentColor: 'from-emerald-400/20 to-teal-600/20 text-emerald-400 border-emerald-500/30',
  },
  {
    name: 'Bertelsmann Group',
    ticker: 'BERTELSMANN',
    category: 'Media & Global Publishing',
    highlight: 'AI-Powered Digital Asset Engine',
    icon: Globe2,
    accentColor: 'from-purple-400/20 to-indigo-600/20 text-purple-400 border-purple-500/30',
  },
]

const BRAND_PARTNERS_ROW2: BrandPartner[] = [
  {
    name: 'Estée Lauder Cos',
    ticker: 'ESTÉE LAUDER',
    category: 'Luxury Beauty & Cosmetics',
    highlight: 'Personalized Recommendation AI',
    icon: Sparkles,
    accentColor: 'from-rose-400/20 to-pink-600/20 text-pink-300 border-pink-500/30',
  },
  {
    name: 'Apto HRMS Suite',
    ticker: 'APTO PEOPLE',
    category: 'Enterprise HR & Workforce',
    highlight: '50k+ Active Seats Automated',
    icon: Cpu,
    accentColor: 'from-blue-500/20 to-sky-600/20 text-sky-400 border-sky-500/30',
  },
  {
    name: 'Aura Health AI',
    ticker: 'AURA HEALTH',
    category: 'MedTech & Diagnostics',
    highlight: 'HIPAA-Compliant Diagnostic Mesh',
    icon: HeartPulse,
    accentColor: 'from-teal-400/20 to-emerald-600/20 text-teal-300 border-teal-500/30',
  },
  {
    name: 'Rugs USA',
    ticker: 'RUGS USA',
    category: 'Home & Living Commerce',
    highlight: 'Sub-15ms Live Catalog Inventory',
    icon: ShoppingBag,
    accentColor: 'from-indigo-400/20 to-violet-600/20 text-indigo-300 border-indigo-500/30',
  },
  {
    name: 'HMD Global',
    ticker: 'HMD',
    category: 'Consumer Electronics & IoT',
    highlight: 'Global Supply Chain Telemetry',
    icon: Activity,
    accentColor: 'from-blue-400/20 to-cyan-600/20 text-cyan-300 border-cyan-500/30',
  },
  {
    name: 'Banking & Financial',
    ticker: 'FINTECH RAILS',
    category: 'Global Remittance Hub',
    highlight: 'Sub-22ms Fraud Scoring Rails',
    icon: ShieldCheck,
    accentColor: 'from-emerald-400/20 to-blue-600/20 text-emerald-400 border-emerald-500/30',
  },
]

/*
interface StrategicPartnership {
  client: string
  logoText: string
  industry: string
  headline: string
  image: string
  summary: string
  architecture: string[]
  verifiedTag: string
  impact: string
}

const STRATEGIC_SPOTLIGHTS: StrategicPartnership[] = [
  {
    client: 'Puma Global Retail',
    logoText: 'PUMA',
    industry: 'Retail & Sportswear',
    headline: 'High-Concurrency Headless Storefront & Mobile Acceleration',
    image: '/images/ecommerce/enterprise_ecommerce.jpg',
    summary: 'Engineered a resilient headless commerce architecture with 3D product visualizers, sub-120ms checkout latency, and real-time inventory synchronization across 140+ retail flagship locations.',
    architecture: ['Headless Shopify Plus', 'Flutter Mobile App', 'Anycast Edge PoPs', 'Redis Cache Tier'],
    verifiedTag: 'PCI-DSS Level 1 & SOC 2 Audited',
    impact: '4.2M+ Peak Shoppers Handled',
  },
  {
    client: 'NovaPay Global Banking',
    logoText: 'NOVAPAY',
    industry: 'FinTech & Core Banking',
    headline: 'Mission-Critical Transactional Engine Modernization',
    image: '/senior_image_catalog/10_FinTech_and_Banking/01_wall_street_algorithmic_trading_.jpg',
    summary: 'Constructed an event-driven payment routing engine with edge tokenization, active-active multi-cloud failover, and automated fraud scoring executing in under 22 milliseconds.',
    architecture: ['Kubernetes GitOps', 'Golang Transaction Rails', 'Mutual TLS 1.3', 'Kafka Event Streaming'],
    verifiedTag: 'Zero-Downtime Blue/Green Deployments',
    impact: '$1.2B+ Daily Transaction Volume',
  },
  {
    client: 'Mango Fashion Group',
    logoText: 'MANGO',
    industry: 'Fashion & Apparel',
    headline: 'Multi-Region Edge Re-Platforming & Catalog Federation',
    image: '/images/ecommerce/marketplace_architecture.jpg',
    summary: 'Migrated legacy monolith to a composable microservices fabric with real-time multi-currency routing, sub-14ms global catalog sync, and automated zero-downtime inventory updates.',
    architecture: ['Go Microservices', 'Kafka Event Streaming', 'TanStack Query Sync', 'PostgreSQL Cluster'],
    verifiedTag: '100% SEO & URL Hash Preservation',
    impact: '18 European Distribution Hubs',
  },
]
*/

export const PillarClientsSection: React.FC<PillarClientsSectionProps> = ({
  onOpenContact,
  sectionNumber = '03',
}) => {
  return (
    <section id="pillar-clients" className="pt-16 md:pt-24 pb-8 md:pb-12 bg-paper relative overflow-hidden border-t border-ink-line font-inter-tight text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <SectionEyebrow number={sectionNumber} label="Featured Projects & Clients" tone="dark" className="mb-6" />

          <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium text-ink tracking-tight leading-[1.04]">
            Featured Projects and <span className="text-[#0052cb]">Clients.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            From global giants like Puma and Fila to Banking & Financial Services, Human Resource platforms, E-Commerce, Education & Training, and Silver Maharaja.
          </p>
        </div>

        {/* ─── CYBERNETIC LUXURY BRAND COMMAND MATRIX (FUSION MARQUEE) ─── */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-b from-[#090d16] via-[#0b1220] to-[#040608] border border-blue-500/25 py-7 px-3 sm:px-6 shadow-2xl relative">
          
          {/* Ambient Cosmic Glow Backlights */}
          <div className="absolute -top-24 -left-24 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          {/* Marquee Track 1 (Left Scrolling) */}
          <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 55, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-4 shrink-0 py-1"
            >
              {[...BRAND_PARTNERS_ROW1, ...BRAND_PARTNERS_ROW1, ...BRAND_PARTNERS_ROW1].map((brand, idx) => {
                const IconComponent = brand.icon
                return (
                  <div
                    key={`r1-${brand.name}-${idx}`}
                    className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-blue-400/50 transition-all duration-300 shrink-0 group cursor-default backdrop-blur-md shadow-sm hover:shadow-[0_0_25px_rgba(0,82,203,0.35)]"
                  >
                    <div className={`size-10 rounded-xl bg-gradient-to-br ${brand.accentColor} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bricolage text-sm font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {brand.name}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-neutral-400 bg-white/10 px-1.5 py-0.5 rounded">
                          {brand.ticker}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-1.5 mt-0.5">
                        <span className="size-1 rounded-full bg-cyan-400" />
                        <span className="truncate max-w-[200px]">{brand.highlight}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Marquee Track 2 (Right Scrolling) */}
          <div className="flex overflow-hidden relative mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 65, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-4 shrink-0 py-1"
            >
              {[...BRAND_PARTNERS_ROW2, ...BRAND_PARTNERS_ROW2, ...BRAND_PARTNERS_ROW2].map((brand, idx) => {
                const IconComponent = brand.icon
                return (
                  <div
                    key={`r2-${brand.name}-${idx}`}
                    className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-blue-400/50 transition-all duration-300 shrink-0 group cursor-default backdrop-blur-md shadow-sm hover:shadow-[0_0_25px_rgba(0,82,203,0.35)]"
                  >
                    <div className={`size-10 rounded-xl bg-gradient-to-br ${brand.accentColor} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bricolage text-sm font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {brand.name}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-neutral-400 bg-white/10 px-1.5 py-0.5 rounded">
                          {brand.ticker}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-1.5 mt-0.5">
                        <span className="size-1 rounded-full bg-emerald-400" />
                        <span className="truncate max-w-[200px]">{brand.highlight}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

        </div>

        {/* ─── FEATURED STRATEGIC ENTERPRISE CASE SPOTLIGHTS (Hidden per request) ─── */}
        {/*
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Strategic Enterprise Case Spotlights
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Deep architectural analysis of selected Fortune 500 implementations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {_industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => _setActiveIndustry(ind)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    _activeIndustry === ind
                      ? 'bg-[#0052cb] text-white shadow-2xs font-bold'
                      : 'bg-white border border-ink-line text-neutral-600 hover:text-ink'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {_filteredSpotlights.map((spotlight) => (
              <div
                key={spotlight.client}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-ink-line">
                    <img
                      src={spotlight.image}
                      alt={spotlight.headline}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0052cb] text-xs font-mono font-bold tracking-wider shadow-sm">
                        {spotlight.logoText}
                      </span>
                      <span className="text-[11px] font-semibold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                        {spotlight.industry}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{spotlight.impact}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h4 className="font-bricolage text-lg sm:text-xl font-bold text-ink group-hover:text-[#0052cb] transition-colors leading-snug mb-3">
                      {spotlight.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {spotlight.summary}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                        System Architecture
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {spotlight.architecture.map((arch) => (
                          <span
                            key={arch}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                          >
                            {arch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-neutral-100 mt-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span>{spotlight.verifiedTag}</span>
                  </span>

                  <button
                    onClick={onOpenContact}
                    className="text-xs font-bold text-[#0052cb] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Build Similar</span>
                    <ArrowRight className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Global Partnership CTA */}
        <div className="mt-10 p-7 sm:p-8 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bricolage text-xl sm:text-2xl font-bold">
              Ready to construct high-velocity digital infrastructure?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Join Puma, Mango, and NovaPay in scaling mission-critical applications with CoVision Infotech.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#003da8] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

      </div>
    </section>
  )
}
