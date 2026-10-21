import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onNavigatePage: (page: string) => void
  onOpenContact: (prefillService?: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePage, onOpenContact }) => {
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Dual Video Seamless Cross-Fader Loop matching MotionSites Sellix
  useEffect(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    // Explicitly guarantee muted and playsinline to satisfy browser autoplay policies
    a.muted = true
    a.defaultMuted = true
    a.playsInline = true
    b.muted = true
    b.defaultMuted = true
    b.playsInline = true

    // Reduced motion check
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      a.removeAttribute('autoplay')
      a.pause()
      b.pause()
      try { a.currentTime = 0 } catch { }
      return
    }

    const FADE = 0.9
    let cur = a
    let nxt = b
    let swapping = false

    const playVideo = (v: HTMLVideoElement) => {
      v.muted = true
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => { })
      }
    }

    // Start video A immediately
    playVideo(a)

    // Fallback: If browser restricted autoplay before user gesture, unlock on first interaction
    const unlockAutoplay = () => {
      if (a.paused) {
        a.muted = true
        playVideo(a)
      }
    }
    window.addEventListener('pointerdown', unlockAutoplay, { once: true, passive: true })
    window.addEventListener('touchstart', unlockAutoplay, { once: true, passive: true })
    window.addEventListener('keydown', unlockAutoplay, { once: true, passive: true })
    window.addEventListener('scroll', unlockAutoplay, { once: true, passive: true })

    const tick = () => {
      if (swapping || !cur.duration) return
      if (cur.duration - cur.currentTime > FADE) return

      swapping = true
      const out = cur
      nxt.currentTime = 0
      playVideo(nxt)
      nxt.classList.add('is-active')
      out.classList.remove('is-active')

      const temp = cur
      cur = nxt
      nxt = temp

      setTimeout(() => {
        out.pause()
        try { out.currentTime = 0 } catch { }
        swapping = false
      }, FADE * 1000 + 100)
    }

    a.addEventListener('timeupdate', tick)
    b.addEventListener('timeupdate', tick)

    return () => {
      a.removeEventListener('timeupdate', tick)
      b.removeEventListener('timeupdate', tick)
      window.removeEventListener('pointerdown', unlockAutoplay)
      window.removeEventListener('touchstart', unlockAutoplay)
      window.removeEventListener('keydown', unlockAutoplay)
      window.removeEventListener('scroll', unlockAutoplay)
    }
  }, [])

  const handleNavClick = (pageId: string) => {
    onNavigatePage(pageId)
    setMenuOpen(false)
  }

  return (
    <section className="relative w-full h-[100dvh] min-h-[660px] overflow-hidden bg-[#FAF9F5] text-ink font-['Plus_Jakarta_Sans',sans-serif] select-none flex flex-col justify-between">
      <style>{`
        .hero-bleed-canvas {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: max(100vw, calc(100dvh * 1.6));
          height: max(62.5vw, 100dvh);
          background-color: #FAF9F5;
        }
        @supports not (height: 100dvh) {
          .hero-bleed-canvas {
            width: max(100vw, calc(100vh * 1.6));
            height: max(62.5vw, 100vh);
          }
        }

        .hero-seamless-vid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 51% 8%;
          display: block;
          background-color: transparent;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.9s linear;
          /* Refined White Theme Transformation: Turns black ocean into white paper, continents into sapphire blue */
          filter: invert(1) hue-rotate(185deg) contrast(1.15) brightness(1.02);
          mix-blend-mode: multiply;
          /* Precision radial mask isolates the Earth sphere and eliminates all background space stars */
          -webkit-mask-image: radial-gradient(ellipse 65% 53% at 50% 64%, #000 38%, rgba(0, 0, 0, 0.5) 54%, transparent 67%);
          mask-image: radial-gradient(ellipse 65% 53% at 50% 64%, #000 38%, rgba(0, 0, 0, 0.5) 54%, transparent 67%);
        }
        .hero-seamless-vid.is-active {
          opacity: 1;
        }

        /* Non-wrapping, strictly single-line button rules */
        .hero-btn-pill {
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>

      {/* Main Bleed Canvas: Looping MotionSites Earth Globe in Pure White Theme */}
      <div className="relative w-full h-full flex flex-col justify-between">
        {/* Subtle Blueprint Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25 z-0" />

        {/* Background Looping Video Layer */}
        <div className="hero-bleed-canvas z-0" role="img" aria-label="Rotating 3D dot matrix Earth">
          <video
            ref={videoARef}
            className="hero-seamless-vid is-active"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
          />

          <video
            ref={videoBRef}
            className="hero-seamless-vid"
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4"
          />
        </div>

        {/* Ambient Warm Halo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_44%,rgba(0,82,203,0.06),rgba(56,189,248,0.02)_50%,transparent_80%)] z-1" />

        {/* Crisp Bottom Transition into Paper Theme */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-1" />

        {/* Transparent Floating Hero Header Nav (Clean CoVision without IT badge) */}
        <header className="relative z-30 h-16 sm:h-20 px-6 sm:px-10 lg:px-16 flex items-center justify-between border-b border-neutral-200/50 bg-[#FAF9F5]/75 backdrop-blur-md">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 p-0 text-left"
          >
            <span className="size-2.5 rounded-full bg-[#0052cb] shadow-md shadow-blue-500/50 group-hover:scale-125 transition-transform" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0E1116]">
              CoVision
            </span>
          </button>

          {/* Desktop Nav Links (Streamlined: Services, SaaS Platforms, eCommerce Suite, About) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium text-neutral-600">
            {[
              { label: 'Services', id: 'services' },
              { label: 'SaaS Platforms', id: 'saas' },
              { label: 'eCommerce Suite', id: 'ecommerce' },
              { label: 'About', id: 'about' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-[#0052cb] transition-colors cursor-pointer bg-transparent border-0 p-0 whitespace-nowrap font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-9 px-4.5 rounded-full bg-white/95 hover:bg-white border border-neutral-300 text-xs font-semibold text-neutral-800 transition-all shadow-xs cursor-pointer hover:border-[#0052cb] hover:text-[#0052cb]"
            >
              Inquiry
            </button>

            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-9 px-5 rounded-full bg-[#0052cb] hover:bg-[#003da8] text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/25 flex items-center gap-2 cursor-pointer hover:scale-102"
            >
              <span>Get Started</span>
              <svg className="size-3 shrink-0" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                <path
                  d="M0.8 5h10M7.1 1.4 10.9 5l-3.8 3.6"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-8 px-3.5 rounded-full bg-[#0052cb] text-white text-xs font-bold cursor-pointer shadow-xs"
            >
              Contact
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 hover:bg-neutral-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-neutral-800 rounded-full" />
                <span className="w-full h-0.5 bg-neutral-800 rounded-full" />
                <span className="w-full h-0.5 bg-neutral-800 rounded-full" />
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Frosted Glass Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-4 left-4 sm:left-auto sm:w-80 bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-3xl p-5 shadow-2xl z-40 space-y-2 text-[#0E1116]"
            >
              {[
                { label: 'Services & Cloud Architecture', id: 'services' },
                { label: 'SaaS Platforms Suite', id: 'saas' },
                { label: '360° eCommerce Suite', id: 'ecommerce' },
                { label: 'About CoVision', id: 'about' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors cursor-pointer bg-transparent border-0"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onOpenContact()
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#0052cb] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Consult Lead Architect</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Stage: Masked Headline Rise + Focus Pull Subtitle + Single-Line CTAs */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 my-auto pointer-events-none pb-8 sm:pb-12">
          {/* Eyebrow Floating Pill: Exact text from image */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 sm:mb-5 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0052cb]/20 text-xs font-semibold text-[#0052cb] shadow-sm">
              <span className="size-2 rounded-full bg-[#0052cb] shadow-sm shadow-blue-500 animate-pulse" />
              <span>Living Technology</span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-600 font-normal">Technology, AI &amp; Multimedia Convergence</span>
            </div>
          </motion.div>

          {/* Masked Headline Rise: Exact text from image ("Living Technology for the Modern Enterprise.") */}
          <h1 className="font-medium text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-[-0.035em] leading-[0.98] text-[#0E1116] max-w-5xl">
            <span className="block overflow-hidden pt-1 pb-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block will-change-transform text-[#0E1116]"
              >
                Living Technology for the
              </motion.span>
            </span>

            <span className="block overflow-hidden pt-1 pb-2">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="block will-change-transform text-[#0052cb]"
              >
                Modern Enterprise.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle Focus Pull: Exact text from image */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#334155] font-normal leading-relaxed max-w-3xl mx-auto"
          >
            We engineer resilient custom software, high-velocity 360° eCommerce systems, and
            multi-cloud infrastructure that adapt, innovate, and self-heal like a living organism.
          </motion.p>

          {/* CTA Buttons: Single-line, Guaranteed NO-WRAP, Generous Padding */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="mt-7 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
          >
            {/* Primary Get Started Button */}
            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-[#0052cb] hover:bg-[#003da8] text-white font-medium text-[13.5px] sm:text-[14px] tracking-tight transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 gap-2.5 cursor-pointer"
            >
              <span>Get Started</span>
              <svg className="size-3.5 shrink-0" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                <path
                  d="M0.8 5h10M7.1 1.4 10.9 5l-3.8 3.6"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Secondary Contact Sales Button */}
            <button
              onClick={() => onNavigatePage('services')}
              className="hero-btn-pill h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border border-neutral-300 hover:border-[#0052cb] hover:text-[#0052cb] text-neutral-800 font-medium text-[13.5px] sm:text-[14px] tracking-tight transition-all duration-200 shadow-sm hover:-translate-y-0.5 gap-2.5 cursor-pointer"
            >
              <span>Contact Sales</span>
              <svg className="size-3.5 shrink-0" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                <path
                  d="M0.8 5h10M7.1 1.4 10.9 5l-3.8 3.6"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator at Bottom with Smooth Transition Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative z-20 pb-5 sm:pb-6 flex flex-col items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
          onClick={() => {
            if ((window as any).lenis) {
              ;(window as any).lenis.scrollTo(window.innerHeight * 0.85)
            } else {
              window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
            }
          }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500 font-bold">
            Scroll to Explore Ecosystem
          </span>
          <div className="w-5 h-8 rounded-full border border-neutral-400 flex items-start justify-center p-1 bg-white/70 backdrop-blur-xs">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="size-1 rounded-full bg-[#0052cb]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
