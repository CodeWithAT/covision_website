import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Mail, ExternalLink, ShieldCheck, FileText, X, CheckCircle2 } from 'lucide-react'

interface FooterProps {
  onNavigatePage?: (page: string, targetServiceId?: string) => void
}

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const footerRef = useRef<HTMLDivElement>(null)
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | null>(null)

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  })

  // Dynamic cinematic scroll-linked reveal for the signature watermark
  const watermarkScale = useTransform(scrollYProgress, [0, 1], [0.88, 1.05])
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.25, 0.65, 0.95])
  const watermarkY = useTransform(scrollYProgress, [0, 1], [50, 0])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string, targetId?: string) => {
    e.preventDefault()
    if (onNavigatePage) {
      onNavigatePage(target, targetId)
    } else {
      window.location.assign('#' + target)
    }
  }

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-ink-line bg-paper-deep text-ink">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-20 md:pt-28 pb-10">
        
        {/* Sister Domain Cross-Link Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-white border border-ink-line shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 font-inter-tight text-xs font-semibold text-[#0052cb]">
              <span className="size-2 rounded-full bg-[#0052cb] animate-pulse" />
              <span>CogniVision Group Unified Ecosystem</span>
            </div>
            <h3 className="font-bricolage text-2xl font-bold tracking-tight text-ink">
              Two Specialized Domains. One Standard of Engineering Excellence.
            </h3>
            <p className="font-inter-tight text-sm text-neutral-600 max-w-2xl">
              From enterprise software engineering and high-velocity eCommerce at <strong className="text-ink">CoVision</strong>, to generative AI visuals, 3D, and VFX at our sister studio <strong className="text-ink">Cognitive Media</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://cogni-media-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-white font-inter-tight font-medium text-xs sm:text-sm hover:bg-[#0052cb] transition-colors shadow-sm cursor-pointer"
            >
              <span>Explore Sister Domain: CogniMedia</span>
              <ExternalLink className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="size-5 rounded-full bg-[#0052cb]" />
              <h2 className="font-bricolage text-2xl font-bold tracking-tight text-ink">
                CoVision Technologies
              </h2>
            </div>
            <p className="mb-10 max-w-sm font-inter-tight text-lg leading-relaxed text-neutral-600">
              An enterprise engineering consultancy architecting resilient living systems, high-velocity 360° eCommerce, and autonomous AI infrastructure.
            </p>
            <div className="mb-10 space-y-4 font-inter-tight">
              <a
                href="mailto:contact@covision.tech"
                className="flex w-fit items-center gap-4 text-neutral-600 transition-colors hover:text-ink"
              >
                <Mail className="size-4 text-[#0052cb]" />
                <span className="text-sm">contact@covision.tech</span>
              </a>
            </div>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="mb-6 font-inter-tight text-xs uppercase tracking-[0.2em] text-neutral-400">
              Services
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {[
                { label: 'Software Engineering', page: 'services', targetId: 'software-engineering' },
                { label: 'App Development', page: 'services', targetId: 'app-development' },
                { label: 'Cloud & Infrastructure', page: 'services', targetId: 'cloud-infrastructure' },
                { label: 'AI & Automation Practice', page: 'ai' },
                { label: 'Data Analytics & BI', page: 'services', targetId: 'data-analytics' },
                { label: 'UX/UI & CoVision Lattice™', page: 'services', targetId: 'ux-ui-design' },
                { label: 'Global Edge Network', page: 'services', targetId: 'cloud-infrastructure' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.page}`}
                  onClick={(e) => handleLinkClick(e, link.page, link.targetId)}
                  className="group flex w-fit items-center gap-2 font-inter-tight text-[15px] text-neutral-700 transition-colors duration-300 hover:text-ink cursor-pointer"
                >
                  <span className="h-px w-0 bg-[#0052cb] transition-all duration-500 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Pages (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-inter-tight text-xs uppercase tracking-[0.2em] text-neutral-400">
              Ecosystem
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {[
                { label: 'AI & Automation', page: 'ai' },
                { label: 'SaaS Platforms', page: 'saas' },
                { label: 'Living Technology', page: 'living-tech' },
                { label: 'Client Work & Case Studies', page: 'clients' },
                { label: 'Why Choose Us', page: 'about' },
                { label: 'Executive Team & Values', page: 'about' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.page}`}
                  onClick={(e) => handleLinkClick(e, link.page)}
                  className="group flex w-fit items-center gap-2 font-inter-tight text-[15px] text-neutral-700 transition-colors duration-300 hover:text-ink cursor-pointer"
                >
                  <span className="h-px w-0 bg-[#0052cb] transition-all duration-500 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-inter-tight text-xs uppercase tracking-[0.2em] text-neutral-400">
              Navigation
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Services', page: 'services' },
                { label: 'SaaS Suite', page: 'saas' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact & Consultation', page: 'contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.page}`}
                  onClick={(e) => handleLinkClick(e, link.page)}
                  className="group flex w-fit items-center gap-2 font-inter-tight text-[15px] text-neutral-700 transition-colors duration-300 hover:text-ink cursor-pointer"
                >
                  <span className="h-px w-0 bg-[#0052cb] transition-all duration-500 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant CoVision Signature Watermark with Smooth Scroll-Linked Reveal */}
      <div aria-hidden="true" className="mx-auto max-w-7xl overflow-hidden px-4 md:px-6 pt-4 pb-2">
        <motion.div
          style={{
            scale: watermarkScale,
            opacity: watermarkOpacity,
            y: watermarkY,
          }}
          className="text-center select-none"
        >
          <p className="whitespace-nowrap bg-gradient-to-b from-ink/35 via-ink/15 to-transparent bg-clip-text font-bricolage text-[16vw] lg:text-[13.5rem] font-black leading-[0.78] tracking-[-0.04em] text-transparent">
            CoVision
          </p>
          <div className="text-xs md:text-sm font-mono tracking-[0.35em] uppercase text-neutral-400 -mt-2 mb-4">
            Living Technology • CogniVision Ecosystem
          </div>
        </motion.div>
      </div>

      {/* Sub-Footer Copyright & Legal Row */}
      <div className="border-t border-ink/10 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 font-inter-tight md:flex-row">
            <p className="text-sm text-neutral-500">
              © {CURRENT_YEAR} COVISION TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button
                type="button"
                onClick={() => setLegalModalTab('privacy')}
                className="text-neutral-500 transition-colors duration-300 hover:text-ink cursor-pointer bg-transparent border-0 p-0 text-sm"
              >
                Privacy &amp; Data Security
              </button>
              <button
                type="button"
                onClick={() => setLegalModalTab('terms')}
                className="text-neutral-500 transition-colors duration-300 hover:text-ink cursor-pointer bg-transparent border-0 p-0 text-sm"
              >
                Enterprise Terms
              </button>
              <button
                onClick={scrollToTop}
                className="text-[#0052cb] hover:underline font-bold cursor-pointer bg-transparent border-0 p-0 text-sm"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Legal & Compliance Modal */}
      <AnimatePresence>
        {legalModalTab && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModalTab(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[88vh] flex flex-col font-inter-tight text-ink"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0052cb] flex items-center justify-center">
                    {legalModalTab === 'privacy' ? <ShieldCheck className="size-5" /> : <FileText className="size-5" />}
                  </div>
                  <div>
                    <h3 className="font-bricolage text-xl font-bold text-slate-900">
                      {legalModalTab === 'privacy' ? 'Data Security & Privacy Governance' : 'Enterprise Terms of Service & SLA'}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {legalModalTab === 'privacy' ? 'SOC 2 Type II • GDPR • Sovereign IP Standard' : 'Contractual SLA • 99.99% Availability Guarantee'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLegalModalTab(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer bg-transparent border-0"
                  aria-label="Close dialog"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-2 mt-4 p-1 rounded-xl bg-slate-100 w-max text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLegalModalTab('privacy')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer border-0 ${
                    legalModalTab === 'privacy' ? 'bg-white text-[#0052cb] shadow-xs' : 'bg-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Privacy &amp; Security
                </button>
                <button
                  type="button"
                  onClick={() => setLegalModalTab('terms')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer border-0 ${
                    legalModalTab === 'terms' ? 'bg-white text-[#0052cb] shadow-xs' : 'bg-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Enterprise Terms &amp; SLA
                </button>
              </div>

              {/* Content Area */}
              <div className="mt-5 space-y-4 overflow-y-auto pr-1 text-sm text-slate-600 leading-relaxed max-h-[55vh]">
                {legalModalTab === 'privacy' ? (
                  <>
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">100% Intellectual Property (IP) Transfer</strong>
                        <span className="text-xs text-slate-600">All source code, bespoke algorithms, design tokens, and deployment scripts produced during client engagements are fully assigned to the client company upon milestone completion.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Mutual Non-Disclosure Agreement (MNDA)</strong>
                        <span className="text-xs text-slate-600">Every engineering sprint and client communication is guarded by a legally binding bilateral MNDA. Access to client repositories and cloud credentials is strictly air-gapped on a need-to-know basis.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Zero-Data Retention on Private AI Pipelines</strong>
                        <span className="text-xs text-slate-600">Proprietary business records and LLM prompts processed via our AIaaS integrations are processed in isolated enclaves and never cached or retained to train third-party foundation models.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Encryption &amp; Global Compliance</strong>
                        <span className="text-xs text-slate-600">All data in transit is encrypted using TLS 1.3, and data at rest is secured via AES-256 encryption. We comply with EU GDPR, California CCPA, and ISO 27001 data governance frameworks.</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">99.99% Cloud Infrastructure SLA</strong>
                        <span className="text-xs text-slate-600">Production deployments architected across multi-region cloud clusters and Tier-1 Anycast CDNs guarantee continuous uptime, automated health check failovers, and low latency.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">15-Minute Critical Incident Escalation</strong>
                        <span className="text-xs text-slate-600">For Priority 1 (P1) mission-critical outages, our Site Reliability Engineering (SRE) team guarantees response and active investigation within 15 minutes 24/7/365.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">60-Day Complimentary Hypercare Warranty</strong>
                        <span className="text-xs text-slate-600">Following production launch, CoVision provides 60 continuous days of warranty support covering bug remediation, regression resolution, and performance telemetry tuning at zero added charge.</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#0052cb] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Transparent Sprint Cadence</strong>
                        <span className="text-xs text-slate-600">All deliverables operate under structured bi-weekly Agile sprint intervals with documented burn-down charts, code reviews, and staging demo approvals prior to main branch merge.</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Last reviewed: October 2026</span>
                <button
                  type="button"
                  onClick={() => setLegalModalTab(null)}
                  className="px-5 py-2 rounded-xl bg-[#0052cb] text-white text-xs font-bold hover:bg-[#003da8] transition-colors cursor-pointer border-0"
                >
                  Acknowledge &amp; Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}
