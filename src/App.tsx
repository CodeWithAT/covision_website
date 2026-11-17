import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { QueryClientProvider } from '@tanstack/react-query'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { queryClient } from './lib/queryClient'
import { useLenis } from './lib/lenis'
import { Navbar } from './components/Navbar'
// import { Hero } from './components/Hero' // BACKUP: Original obsidian globe hero preserved intact
import { HeroEditorialLight } from './components/HeroEditorialLight'
// import { MarqueeDivider } from './components/MarqueeDivider'
import { PracticePortfoliosSection } from './components/PracticePortfoliosSection'
import { EngineeringSynergySection } from './components/EngineeringSynergySection'
import { LivingTechnologySection } from './components/LivingTechnologySection'
import { ServicesSection } from './components/ServicesSection'
import { SaaSProductsSection } from './components/SaaSProductsSection'
import { IndustryFootprintSection } from './components/IndustryFootprintSection'
import { WhyChooseUsSection } from './components/WhyChooseUsSection'
import { TechStackMatrix } from './components/TechStackMatrix'
import { PillarClientsSection } from './components/PillarClientsSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { AboutUsSection } from './components/AboutUsSection'
import { TestimonialsAndProof } from './components/TestimonialsAndProof'
import { FaqSection } from './components/FaqSection'
import { GetInTouchBanner } from './components/GetInTouchBanner'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { AIAutomationSection } from './components/AIAutomationSection'

import { scrollToElement, scrollToTopSmooth } from './lib/scrollUtils'

const parseRoute = (hash: string): { page: string; targetService?: string } => {
  const clean = hash.replace(/^#\/?/, '').trim()
  const [firstPart, ...rest] = clean.split('/')
  const rawPage = firstPart?.toLowerCase() || ''
  const target = rest.join('/') || undefined

  if (['ai', 'ai-automation', 'automation', 'agentic-ai'].includes(rawPage)) return { page: 'ai' }
  if (['services', 'it-services'].includes(rawPage)) return { page: 'services', targetService: target }
  if (['saas', 'products'].includes(rawPage)) return { page: 'saas' }
  if (['ecommerce', 'ecommerce-suite'].includes(rawPage)) return { page: 'ai' } // replaces ecommerce suit as instructed
  if (['living-tech', 'living-technology'].includes(rawPage)) return { page: 'living-tech' }
  if (['clients', 'case-studies', 'work'].includes(rawPage)) return { page: 'clients' }
  if (['about', 'about-us'].includes(rawPage)) return { page: 'about' }
  if (['contact', 'get-in-touch', 'inquiry'].includes(rawPage)) return { page: 'contact' }
  return { page: 'home' }
}



interface PageAction {
  label: string
  onClick: () => void
  primary?: boolean
}

interface PageHeaderBannerProps {
  pageName: string
  title: string
  subtitle: string
  actions?: PageAction[]
  image: string
  imagePosition?: string
  hideScrollPrompt?: boolean
  glowColor?: string
  video?: string
  layoutVariant?: 'classic-card' | 'hero-overlay-left'
  onBackToHome: () => void
}

const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  pageName,
  title,
  subtitle,
  actions,
  image,
  imagePosition = 'object-center',
  hideScrollPrompt = false,
  glowColor = 'rgba(0,82,203,0.18)',
  video,
  layoutVariant = 'classic-card',
  onBackToHome,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Scroll 0 -> 0.55: card smoothly slides up from 105% (off-screen bottom) to 0% (in view)
  const cardY = useTransform(scrollYProgress, [0.02, 0.38], ['105%', '0%'])
  const cardOpacity = useTransform(scrollYProgress, [0.02, 0.28], [0, 1])

  // Left-aligned text reveal for hero-overlay-left variant (Smooth scroll reveal)
  const textY = useTransform(scrollYProgress, [0.02, 0.35], ['50px', '0px'])
  const textOpacity = useTransform(scrollYProgress, [0.02, 0.25], [0, 1])

  // Subtle image zoom & atmospheric dark overlay as card glides up
  const imageScale = useTransform(scrollYProgress, [0, 0.42], [1, 1.04])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.42], [0, 0.5])

  // Landing prompt fades out as soon as user starts scrolling
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <div ref={containerRef} className="relative w-full h-[135vh]">
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#04081c] flex flex-col justify-between">
        
        {/* Full-bleed background visual (video or high-res image) */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 w-full h-full origin-center transform-gpu will-change-transform"
        >
          {video ? (
            <video
              src={video}
              poster={image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <picture className="w-full h-full block">
              <source srcSet={image} type="image/webp" />
              <img
                src={image.replace(/\.webp(\?.*)?$/i, '.jpg$1')}
                alt={title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className={`w-full h-full object-cover ${imagePosition}`}
              />
            </picture>
          )}
        </motion.div>

        {/* Dynamic atmospheric overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none"
        />
        <div
          style={{
            background: `radial-gradient(ellipse 75% 50% at 50% 0%, ${glowColor}, transparent 65%)`,
          }}
          className="absolute inset-0 pointer-events-none"
        />
        {/* Left gradient scrim specifically for hero-overlay-left variant to ensure high text contrast */}
        {layoutVariant === 'hero-overlay-left' && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 via-45% to-transparent pointer-events-none" />
        )}

        {/* Top breadcrumb navigation */}
        <div className="relative top-24 left-0 right-0 px-4 sm:px-6 lg:px-8 z-30 pointer-events-auto">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-white transition-colors cursor-pointer bg-black/45 hover:bg-black/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-md"
            >
              <ArrowLeft className="size-3.5" />
              <span>Return to Ecosystem Overview</span>
            </button>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white bg-[#0052cb]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-400/40 flex items-center gap-1.5 shadow-md">
              <span className="size-1.5 rounded-full bg-blue-300 animate-pulse" />
              {pageName}
            </span>
          </div>
        </div>

        {/* Landing scroll prompt: informs user to scroll to view details */}
        {!hideScrollPrompt && (
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 pointer-events-none"
          >
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
              Scroll to View Details ↓
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </motion.div>
        )}

        {/* Main Content: Either Left-Aligned Hero Overlay (No white box) OR Classic Scroll-Pinned Card */}
        {layoutVariant === 'hero-overlay-left' ? (
          <div className="relative z-30 w-full flex-1 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-auto pointer-events-auto">
            <motion.div
              style={{ y: textY, opacity: textOpacity }}
              className="max-w-2xl text-left flex flex-col items-start pt-16 sm:pt-4 transform-gpu will-change-transform"
            >
              {/* Eyebrow Floating Pill (Home Hero Style) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 shadow-sm mb-4 sm:mb-5">
                <span className="size-2 rounded-full bg-[#38bdf8] shadow-sm shadow-cyan-400 animate-pulse" />
                <span>{pageName}</span>
                <span className="text-white/30">•</span>
                <span className="text-neutral-300 font-normal">Autonomous Agentic Convergence</span>
              </div>

              {/* Masked / Glowing Headline (Home Hero Style) */}
              <h1 className="font-bricolage text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.04] text-white">
                <span>Transform Intelligence into </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                  Business Impact.
                </span>
              </h1>

              {/* Subtitle (Home Hero Style) */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-neutral-200 font-normal leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* CTA Buttons (Home Hero Style) */}
              {actions && actions.length > 0 && (
                <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  {actions.map((act) => (
                    <button
                      key={act.label}
                      onClick={act.onClick}
                      className={`h-11 sm:h-12 px-7 sm:px-8 rounded-full font-medium text-[13.5px] sm:text-[14px] tracking-tight transition-all duration-200 shadow-sm hover:-translate-y-0.5 gap-2.5 cursor-pointer inline-flex items-center ${
                        act.primary
                          ? 'bg-[#0052cb] hover:bg-[#003da8] text-white shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60'
                          : 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white'
                      }`}
                    >
                      <span>{act.label}</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          /* Scroll-pinned white text box — slides up from bottom */
          <motion.div
            style={{ y: cardY, opacity: cardOpacity }}
            className="relative z-30 w-full pb-8 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-auto mt-auto transform-gpu will-change-transform"
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-9 shadow-2xl border border-white/80">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    <h1 className="font-bricolage text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                      {title}
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {subtitle}
                    </p>
                  </div>

                  {actions && actions.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      {actions.map((act) => (
                        <button
                          key={act.label}
                          onClick={act.onClick}
                          className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm ${
                            act.primary
                              ? 'bg-[#0052cb] hover:bg-[#0041a3] text-white shadow-blue-600/30'
                              : 'bg-paper hover:bg-neutral-100 text-neutral-800 border border-ink-line'
                          }`}
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="size-3.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}

export const AppContent: React.FC = () => {
  // Initialize buttery-smooth Lenis scrolling
  useLenis()

  const initialRoute = parseRoute(window.location.hash)
  const [activePage, setActivePage] = useState<string>(initialRoute.page)
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(initialRoute.targetService)
  const [prefillService, setPrefillService] = useState<string | undefined>()

  useEffect(() => {
    if (initialRoute.targetService) {
      scrollToElement(`service-${initialRoute.targetService}`)
    }
  }, [initialRoute.targetService])

  useEffect(() => {
    const handleHashChange = () => {
      const route = parseRoute(window.location.hash)
      setActivePage(route.page)
      if (route.targetService) {
        setTargetServiceId(route.targetService)
        scrollToElement(`service-${route.targetService}`)
      } else {
        setTargetServiceId(undefined)
        scrollToTopSmooth(true)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigatePage = (page: string, targetService?: string) => {
    setActivePage(page)
    if (targetService) {
      setTargetServiceId(targetService)
      window.location.hash = `${page}/${targetService}`
      scrollToElement(`service-${targetService}`)
    } else {
      setTargetServiceId(undefined)
      window.location.hash = page === 'home' ? '' : page
      scrollToTopSmooth(false)
    }
  }

  const handleOpenContact = (service?: string) => {
    if (service) setPrefillService(service)
    if (activePage !== 'contact') {
      handleNavigatePage('contact')
    } else {
      scrollToElement('contact')
    }
  }

  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-paper font-inter-tight text-ink selection:bg-[#0052cb] selection:text-white flex flex-col justify-between">
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#0052cb] origin-left z-[100] shadow-sm shadow-blue-500/50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        onOpenContact={handleOpenContact}
      />

      {/* Main Multi-Page Routed Views with Smooth Transitions */}
      <main className="flex-1 flex flex-col bg-paper text-ink">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              {/* Primary: Editorial Light Architectural Hero (from Stitch design) */}
              <HeroEditorialLight
                onNavigatePage={handleNavigatePage}
                onOpenContact={() => handleOpenContact()}
              />

              {/* BACKUP PRESERVED: Executive Obsidian Hero with Active Rotating Globe
              <Hero
                onNavigatePage={handleNavigatePage}
                onOpenContact={() => handleOpenContact()}
              />
              */}

              {/* CogniMedia Signature Marquee Divider (Hidden per request) */}
              {/* <MarqueeDivider /> */}

              {/* Living Technology Overview & Adaptation Framework */}
              <LivingTechnologySection sectionNumber="01" />

              {/* Core Engineering to Intelligent Solutions (01 to 05 Offerings) */}
              <PracticePortfoliosSection onNavigatePage={handleNavigatePage} sectionNumber="02" />

              {/* The Synergy: Agile × Scrum × DevOps × AI */}
              <EngineeringSynergySection />

              {/* Dual Infinite Client Marquee & Featured Projects */}
              <PillarClientsSection onOpenContact={() => handleOpenContact()} sectionNumber="03" />

              {/* Why You Choose Us - Engineering Edge */}
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} sectionNumber="04" />

              {/* Executive Testimonials & Guarantees */}
              <TestimonialsAndProof />

              {/* Harmonic Sine-Wave Get In Touch Banner */}
              <GetInTouchBanner onEmailSubmit={(email) => handleOpenContact(`Direct Inquiry from ${email}`)} />

              {/* Contact & Consultation Form */}
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/services_banner_4k.webp?v=1"
                pageName="Services & Cloud Fabric"
                title="Empowering a Better Tomorrow."
                subtitle="An evolving suite of solutions tailored to our clients' changing needs and the dynamic demands of modern enterprises. By harnessing emerging technologies, advancing development practices, and integrating cutting-edge AI capabilities, we deliver innovative solutions that keep businesses ahead."
                actions={[
                  {
                    label: 'Explore All 6 Practices',
                    onClick: () => scrollToElement('capabilities-grid', -90),
                    primary: true,
                  },
                  {
                    label: 'Request Scope',
                    onClick: () => handleOpenContact('Enterprise Architecture & Cloud Fabric'),
                  },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <ServicesSection
                onRequestScope={handleOpenContact}
                sectionNumber="01"
                targetServiceId={targetServiceId}
              />
              <TechStackMatrix sectionNumber="02" />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'saas' && (
            <motion.div
              key="saas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/saas_banner_4k.webp?v=10"
                imagePosition="object-center"
                hideScrollPrompt={true}
                glowColor="rgba(168,85,247,0.20)"
                pageName="SaaS Platforms Suite"
                title="Proprietary Platforms. Built for Scale."
                subtitle="Battle-tested standalone digital platforms engineered for sovereign enterprise deployment, live telemetry, multi-tenant isolation, and rapid market scaling with sub-50ms response times."
                actions={[
                  {
                    label: 'Explore 5 Live Platforms',
                    onClick: () => scrollToElement('products', -90),
                    primary: true,
                  },
                  {
                    label: 'Request Platform Demo',
                    onClick: () => handleOpenContact('SaaS Platform Enterprise Licensing'),
                  },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <SaaSProductsSection onOpenContact={handleOpenContact} sectionNumber="01" />
              <IndustryFootprintSection onOpenContact={handleOpenContact} sectionNumber="02" />
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} sectionNumber="03" />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/ai_banner_master_4k.webp?v=5"
                imagePosition="object-[65%_center] sm:object-center"
                glowColor="rgba(56,189,248,0.22)"
                pageName="AI & Automation Practice"
                title="Transform Intelligence into Business Impact."
                subtitle="Unite Generative AI creativity with autonomous Agentic AI execution. Engineered to learn your organization's unique workflows, automate mission-critical operations, and deliver measurable enterprise value."
                layoutVariant="hero-overlay-left"
                actions={[
                  {
                    label: 'Explore Capabilities',
                    onClick: () => scrollToElement('generative-ai', -90),
                    primary: true,
                  },
                  {
                    label: 'Request AI Scoping Session',
                    onClick: () => handleOpenContact('AI & Automation Strategy Scoping'),
                  },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <AIAutomationSection onRequestScope={handleOpenContact} sectionNumber="01" />
              <CaseStudiesSection onOpenContact={() => handleOpenContact()} sectionNumber="02" />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'living-tech' && (
            <motion.div
              key="living-tech"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/living_tech_banner_4k.webp?v=1"
                pageName="Living Technology Philosophy"
                title="Living Technology: Architecture & Delivery Framework"
                subtitle="CoVision Infotech: Technology That Connects Business and Creativity. Engineering proprietary software products, SaaS platforms, and cloud infrastructure built for evolving business demands."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <LivingTechnologySection sectionNumber="01" />
              <IndustryFootprintSection onOpenContact={handleOpenContact} sectionNumber="02" />
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} sectionNumber="03" />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'clients' && (
            <motion.div
              key="clients"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/case_studies_banner_4k.webp?v=1"
                pageName="Client Ecosystem & Case Studies"
                title="Verified Enterprise Case Studies & Deployments"
                subtitle="Explore verified production outcomes delivered for Fortune 500 retail giants, global media houses, and high-concurrency FinTech rails."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <PillarClientsSection onOpenContact={() => handleOpenContact()} sectionNumber="01" />
              <CaseStudiesSection onOpenContact={() => handleOpenContact()} sectionNumber="02" />
              <TestimonialsAndProof />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/about_banner_4k.webp?v=1"
                pageName="About CoVision Infotech"
                title="Engineering Living Technology. Where AI Converges."
                subtitle="A premier enterprise digital engineering partner. We combine deep systems architecture, cognitive AI agents, and behavioral science design to build software ecosystems that adapt dynamically as enterprises scale."
                actions={[
                  {
                    label: 'Explore Ethos & Values',
                    onClick: () => scrollToElement('about-us', -90),
                    primary: true,
                  },
                  {
                    label: 'Consult Lead Architect',
                    onClick: () => handleOpenContact('Executive Architecture Consultation'),
                  },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <AboutUsSection onOpenContact={() => handleOpenContact()} sectionNumber="01" />
              <LivingTechnologySection sectionNumber="02" />
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} sectionNumber="03" />
              <CaseStudiesSection onOpenContact={() => handleOpenContact()} sectionNumber="04" />
              <FaqSection onOpenContact={() => handleOpenContact()} />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                image="/images/banners/contact_banner_4k.webp?v=1"
                pageName="Enterprise Scoping"
                title="Consult with Lead Enterprise Architects"
                subtitle="Direct line to senior engineers and technical partners. Receive tailored architectural proposals, milestone schedules, and SLA commitments."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <GetInTouchBanner onEmailSubmit={(email) => handleOpenContact(`Direct Inquiry from ${email}`)} />
              <ContactSection prefillService={prefillService} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Enterprise Footer with Giant Watermark & Parallax Scroll */}
      <Footer onNavigatePage={handleNavigatePage} />
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}
