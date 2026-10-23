import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Server, Layers, ShoppingBag, Compass, CheckCircle2 } from 'lucide-react'

interface PracticePortfoliosSectionProps {
  onNavigatePage: (page: string) => void
}

export const PracticePortfoliosSection: React.FC<PracticePortfoliosSectionProps> = ({ onNavigatePage }) => {
  const portfolios = [
    {
      id: 'services',
      badge: 'Engineering & Cloud Fabric',
      icon: Server,
      title: 'Services & Cloud Architecture',
      desc: 'End-to-end custom software engineering, high-concurrency distributed backends, autonomous AI workflows, and multi-cloud Kubernetes infrastructure.',
      highlights: [
        'Custom Enterprise SaaS & Distributed Microservices',
        'Bunny CDN Edge Computing & Multi-Cloud DevOps',
        'Autonomous AI Agents, LLM Integrations & Vision Pipelines',
        'CoUI Cognitive Design System & High-Performance Frontends',
      ],
      metrics: '50+ Deployed Platforms • 99.99% Availability',
      cta: 'Explore Services & Tech Matrix',
    },
    {
      id: 'saas',
      badge: 'Proprietary IP Platforms',
      icon: Layers,
      title: 'SaaS Platforms Suite',
      desc: 'Battle-tested standalone digital platforms and subdomains engineered for multi-tenant scalability, real-time telemetry, and rapid enterprise deployment.',
      highlights: [
        'CoCommerce™: Omnichannel Digital Storefronts & Real-Time OMS',
        'CogniFlow AI™: Enterprise Multi-Agent AI & Decision Automation',
        'CoEdge Fabric™: Global Anycast CDN & Asset Optimization',
        'CoUI Studio™: Fluid Design Tokens & 60fps Interface System',
      ],
      metrics: 'SOC 2 Type II Ready • Multi-Tenant Sovereign Cloud',
      cta: 'Explore SaaS Platforms Suite',
    },
    {
      id: 'ecommerce',
      badge: 'High-Velocity Commerce',
      icon: ShoppingBag,
      title: '360° eCommerce Practice',
      desc: 'Headless Shopify Plus and Adobe Commerce architectures, real-time ERP middleware synchronization, and immersive 3D/AR product visualizers.',
      highlights: [
        'Headless Commerce via Hydrogen, Next.js & Medusa',
        'Real-Time SAP, NetSuite & Dynamics 365 Middleware',
        'Interactive 3D WebGL Configurator & AR Product Visualizers',
        'Zero-Downtime Data Migration & High-Traffic Surges',
      ],
      metrics: '$500M+ GMV Orchestrated • 40ms Edge Checkout',
      cta: 'Explore 360° eCommerce Suite',
    },
    {
      id: 'about',
      badge: 'Vision & Engineering Culture',
      icon: Compass,
      title: 'About CoVision & Philosophy',
      desc: 'We treat software as a living organism that evolves, adapts, and self-heals. Discover the founding vision, engineering leadership, and client-centric principles.',
      highlights: [
        'Living Technology Manifesto & Delivery Framework',
        'Zero Technical Debt & Automated CI/CD Testing',
        'Global Engineering Hubs & Strategic Enterprise Advisory',
        'Transparent Agile Sprints & Guaranteed Production SLAs',
      ],
      metrics: 'Global Delivery Footprint • 100% On-Time Sprints',
      cta: 'Discover Our Story & Values',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#0052cb] font-bold mb-3">
            <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
            <span>Dedicated Practice Portfolios</span>
          </div>

          <h2 className="font-bricolage text-3xl sm:text-5xl font-medium tracking-tight text-ink leading-[1.08]">
            Specialized Disciplines.{' '}
            <span className="text-[#0052cb]">Tailored for Enterprise Scale.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            CoVision is organized into four core practices. Each discipline operates with dedicated senior architects, battle-tested methodologies, and measurable outcomes.
          </p>
        </div>

        {/* 4 Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolios.map((portfolio, index) => {
            const Icon = portfolio.icon
            return (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-ink-line hover:border-[#0052cb]/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0052cb] group-hover:bg-[#0052cb] group-hover:text-white transition-colors">
                      <Icon className="size-6" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
                      {portfolio.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-bricolage text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-3 group-hover:text-[#0052cb] transition-colors">
                    {portfolio.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed mb-6">
                    {portfolio.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {portfolio.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                        <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metric & Action Button */}
                <div className="pt-6 border-t border-ink-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-neutral-500 font-medium">
                    {portfolio.metrics}
                  </div>

                  <button
                    onClick={() => onNavigatePage(portfolio.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-[#0052cb] text-white text-xs font-bold transition-all shadow-sm group-hover:scale-102 cursor-pointer w-max"
                  >
                    <span>{portfolio.cta}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
