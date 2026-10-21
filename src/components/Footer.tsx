import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

interface FooterProps {
  onNavigatePage?: (page: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const footerRef = useRef<HTMLDivElement>(null)

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    if (onNavigatePage) {
      onNavigatePage(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.hash = target
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
                { label: 'Software Engineering', page: 'services' },
                { label: 'App Development', page: 'services' },
                { label: 'Cloud & Infrastructure', page: 'services' },
                { label: 'AI/ML Integration (AIaaS)', page: 'services' },
                { label: 'Data Analytics & BI', page: 'services' },
                { label: 'CoUI Design System', page: 'saas' },
                { label: '360° eCommerce Suite', page: 'ecommerce' },
                { label: 'Global Edge Network', page: 'services' },
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

          {/* Navigation Pages (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-inter-tight text-xs uppercase tracking-[0.2em] text-neutral-400">
              Ecosystem
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {[
                { label: 'SaaS Platforms', page: 'saas' },
                { label: 'eCommerce Suite', page: 'ecommerce' },
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
              © {new Date().getFullYear()} COVISION TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="text-neutral-500 transition-colors duration-300 hover:text-ink cursor-pointer"
              >
                Privacy & Data Security
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="text-neutral-500 transition-colors duration-300 hover:text-ink cursor-pointer"
              >
                Enterprise Terms
              </a>
              <button
                onClick={scrollToTop}
                className="text-[#0052cb] hover:underline font-bold cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
