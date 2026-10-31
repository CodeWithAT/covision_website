import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { QueryClientProvider } from '@tanstack/react-query'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { queryClient } from './lib/queryClient'
import { useLenis } from './lib/lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeDivider } from './components/MarqueeDivider'
import { PracticePortfoliosSection } from './components/PracticePortfoliosSection'
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
  onBackToHome: () => void
}

const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  pageName,
  title,
  subtitle,
  actions,
  image,
  onBackToHome,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Scroll 0 -> 0.55: card smoothly slides up from 105% (off-screen bottom) to 0% (in view)
  const cardY = useTransform(scrollYProgress, [0.05, 0.55], ['105%', '0%'])
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.45], [0, 1])

  // Subtle image zoom & atmospheric dark overlay as card glides up
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.05])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 0.55])

  // Landing prompt fades out as soon as user starts scrolling
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <div ref={containerRef} className="relative w-full h-[180vh]">
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-slate-950 flex flex-col justify-between">
        
        {/* Full-bleed background image - pure view on landing */}
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full origin-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dynamic atmospheric overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(0,82,203,0.18),transparent_65%)] pointer-events-none" />

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

        {/* Scroll-pinned white text box — slides up from bottom */}
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="relative z-30 w-full pb-8 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-auto mt-auto"
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
              {/* Executive Hero with Active Rotating Globe */}
              <Hero
                onNavigatePage={handleNavigatePage}
                onOpenContact={() => handleOpenContact()}
              />

              {/* CogniMedia Signature Marquee Divider */}
              <MarqueeDivider />

              {/* Living Technology Overview & Adaptation Framework */}
              <LivingTechnologySection sectionNumber="01" />

              {/* Core Engineering to Intelligent Solutions (01 to 05 Offerings) */}
              <PracticePortfoliosSection onNavigatePage={handleNavigatePage} sectionNumber="02" />

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
                image="/images/services/technology_banner_blue.png"
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
                image="/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg"
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
                image="/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg"
                pageName="AI & Automation Practice"
                title="The Next Frontier: Generative & Agentic AI"
                subtitle="Autonomous multi-agent workflows, custom LLM integrations, and intelligent decision systems engineered to adapt to your enterprise processes with human-in-the-loop governance."
                actions={[
                  {
                    label: 'Explore Generative AI',
                    onClick: () => scrollToElement('generative-ai', -90),
                    primary: true,
                  },
                  {
                    label: 'Request AI Scope',
                    onClick: () => handleOpenContact('AI Transformation Scope'),
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
                image="/senior_image_catalog/02_Software_Engineering_and_Code/03_vertical_code_architecture.jpg"
                pageName="Living Technology Philosophy"
                title="Living Technology: Architecture & Delivery Framework"
                subtitle="Covision: Technology That Connects Business and Creativity. Engineering proprietary software products, SaaS platforms, and cloud infrastructure built for evolving business demands."
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
                image="/senior_image_catalog/14_Executive_Consulting_and_Boardroom/02_executive_boardroom_capital_stra.jpg"
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
                image="/senior_image_catalog/20_Global_IT_Workplace_Culture/01_modern_collaborative_tech_campu.jpg"
                pageName="About CoVision"
                title="Engineering Excellence. Global Impact."
                subtitle="Architects of modern digital ecosystems, uniting deep technical engineering with living technology philosophy to drive sustainable enterprise transformation."
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
                image="/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg"
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
