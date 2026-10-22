import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onNavigatePage: (page: string) => void
  onOpenContact: (prefillService?: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePage, onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Bulletproof Native Video Playback with Resilient Watchdog
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Explicitly guarantee muted and playsinline to satisfy strict browser autoplay policies
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const playSafe = () => {
      if (!video) return
      video.muted = true
      video.defaultMuted = true
      if (video.paused) {
        const p = video.play()
        if (p && typeof p.catch === 'function') {
          p.catch(() => {})
        }
      }
    }

    // Start video playback immediately
    playSafe()

    // Safety watchdog: verify playback state every 1.5s so video NEVER stops
    const watchdog = setInterval(playSafe, 1500)

    // Ensure playback resumes immediately when tab gains focus, becomes visible, or on any interaction
    const onVisibility = () => {
      if (!document.hidden) playSafe()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('focus', playSafe)
    window.addEventListener('pointerdown', playSafe, { passive: true })
    window.addEventListener('touchstart', playSafe, { passive: true })
    window.addEventListener('mousemove', playSafe, { passive: true })
    window.addEventListener('scroll', playSafe, { passive: true })
    window.addEventListener('keydown', playSafe, { passive: true })

    video.addEventListener('loadeddata', playSafe)
    video.addEventListener('canplay', playSafe)
    video.addEventListener('waiting', playSafe)
    video.addEventListener('stalled', playSafe)
    video.addEventListener('ended', () => {
      video.currentTime = 0
      playSafe()
    })

    return () => {
      clearInterval(watchdog)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('focus', playSafe)
      window.removeEventListener('pointerdown', playSafe)
      window.removeEventListener('touchstart', playSafe)
      window.removeEventListener('mousemove', playSafe)
      window.removeEventListener('scroll', playSafe)
      window.removeEventListener('keydown', playSafe)
      video.removeEventListener('loadeddata', playSafe)
      video.removeEventListener('canplay', playSafe)
      video.removeEventListener('waiting', playSafe)
      video.removeEventListener('stalled', playSafe)
    }
  }, [])

  const handleNavClick = (pageId: string) => {
    onNavigatePage(pageId)
    setMenuOpen(false)
  }

  return (
    <section className="relative w-full h-[100dvh] min-h-[660px] overflow-hidden bg-[#06080F] text-white font-['Plus_Jakarta_Sans',sans-serif] select-none flex flex-col justify-between">
      <style>{`
        .hero-bleed-canvas {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: max(100vw, calc(100dvh * 1.6));
          height: max(62.5vw, 100dvh);
          background-color: #06080F;
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
          object-position: 50% 24%;
          display: block;
          background-color: #06080F;
          pointer-events: none;
          opacity: 1;
        }
        @media (max-width: 640px) {
          .hero-seamless-vid {
            object-position: 50% 32%;
          }
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

      {/* Main Bleed Canvas: Looping MotionSites Earth Globe in Native Dark Theme */}
      <div className="relative w-full h-full flex flex-col justify-between">
        {/* Subtle Cosmic Blueprint Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-10 invert z-0" />

        {/* Background Looping Video Layer */}
        <div className="hero-bleed-canvas z-0" role="img" aria-label="Rotating 3D dot matrix Earth in deep space">
          <video
            ref={videoRef}
            className="hero-seamless-vid"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            poster="/globe_poster.webp"
          >
            <source src="/globe.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Ambient Cosmic Purple-Blue Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_40%,rgba(99,102,241,0.15),rgba(56,189,248,0.05)_50%,transparent_80%)] z-1" />

        {/* Seamless Luxury Transition Bridge into White/Paper Theme */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/75 via-25% to-transparent z-10" />

        {/* Floating Dark Glass Hero Header Nav */}
        <header className="relative z-30 h-16 sm:h-20 px-6 sm:px-10 lg:px-16 flex items-center justify-between border-b border-white/10 bg-[#06080F]/70 backdrop-blur-xl">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer bg-transparent border-0 p-0 text-left"
          >
            <span className="size-2.5 rounded-full bg-[#0052cb] shadow-lg shadow-blue-500/80 group-hover:scale-125 transition-transform" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">
              CoVision
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium text-neutral-300">
            {[
              { label: 'Services', id: 'services' },
              { label: 'SaaS Platforms', id: 'saas' },
              { label: 'eCommerce Suite', id: 'ecommerce' },
              { label: 'About', id: 'about' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 whitespace-nowrap font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Nav Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-9 px-4.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all shadow-xs cursor-pointer hover:border-white/40"
            >
              Inquiry
            </button>

            <button
              onClick={() => onOpenContact()}
              className="hero-btn-pill h-9 px-5 rounded-full bg-[#0052cb] hover:bg-[#003da8] text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/40 flex items-center gap-2 cursor-pointer hover:scale-102"
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
              className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-full h-0.5 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Frosted Dark Glass Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-4 left-4 sm:left-auto sm:w-80 bg-[#0c101d]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl z-40 space-y-2 text-white"
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
                  className="w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-0 text-neutral-200"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-white/10">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 shadow-sm">
              <span className="size-2 rounded-full bg-[#38bdf8] shadow-sm shadow-cyan-400 animate-pulse" />
              <span>Living Technology</span>
              <span className="text-white/30">•</span>
              <span className="text-neutral-300 font-normal">Technology, AI &amp; Multimedia Convergence</span>
            </div>
          </motion.div>

          {/* Masked Headline Rise: Exact text from image ("Living Technology for the Modern Enterprise.") */}
          <h1 className="font-medium text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-[-0.035em] leading-[0.98] text-white max-w-5xl">
            <span className="block overflow-hidden pt-1 pb-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block will-change-transform text-white"
              >
                Living Technology for the
              </motion.span>
            </span>

            <span className="block overflow-hidden pt-1 pb-2">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="block will-change-transform bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-sm"
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
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto"
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
              className="hero-btn-pill h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-[#0052cb] hover:bg-[#003da8] text-white font-medium text-[13.5px] sm:text-[14px] tracking-tight transition-all duration-200 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:-translate-y-0.5 gap-2.5 cursor-pointer"
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
              className="hero-btn-pill h-11 sm:h-12 px-7 sm:px-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-medium text-[13.5px] sm:text-[14px] tracking-tight transition-all duration-200 shadow-sm hover:-translate-y-0.5 gap-2.5 cursor-pointer"
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
          className="relative z-20 pb-5 sm:pb-6 flex flex-col items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => {
            if ((window as any).lenis) {
              ;(window as any).lenis.scrollTo(window.innerHeight * 0.85)
            } else {
              window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
            }
          }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-800 font-bold px-3.5 py-1 rounded-full bg-[#FAF9F5]/90 backdrop-blur-md border border-neutral-300/80 shadow-xs">
            Scroll to Explore Ecosystem
          </span>
          <div className="w-5 h-8 rounded-full border border-neutral-400 flex items-start justify-center p-1 bg-white/80 backdrop-blur-xs">
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
