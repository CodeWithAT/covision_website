import React, { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { QueryClientProvider } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
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

interface PageMetric {
  label: string
  value: string
}

interface PageHeaderBannerProps {
  pageName: string
  title: string
  subtitle: string
  metrics?: PageMetric[]
  image: string
  onBackToHome: () => void
}

const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  pageName,
  title,
  subtitle,
  metrics,
  image,
  onBackToHome,
}) => (
  <div className="relative w-full h-[60vh] min-h-[440px] overflow-hidden bg-slate-900 group">
    {/* Full-bleed background image */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
    />
    {/* Atmospheric overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40 pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,82,203,0.18),transparent_60%)] pointer-events-none" />

    {/* Nav breadcrumb — top left */}
    <div className="absolute top-24 left-0 right-0 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-3.5" />
          <span>Return to Ecosystem Overview</span>
        </button>
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white bg-[#0052cb]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-blue-400/30 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-blue-300 animate-pulse" />
          {pageName}
        </span>
      </div>
    </div>

    {/* Scroll-reveal white text box — bottom 30% */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-0 left-0 right-0 z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-6">
        <div className="bg-white/92 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80">
          <h1 className="font-bricolage text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
            {title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed font-normal">
            {subtitle}
          </p>

          {/* Metric Badges */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-ink-line/60">
              {metrics.map((m) => (
                <div key={m.label} className="px-4 py-2 rounded-xl bg-paper border border-ink-line shadow-xs">
                  <div className="font-bricolage text-lg sm:text-xl font-bold text-[#0052cb] tracking-tight">{m.value}</div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5 font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  </div>
)

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
                metrics={[
                  { label: 'Self-Healing Loops', value: 'Autonomous' },
                  { label: 'Architecture Model', value: 'Organismic' },
                  { label: 'Code Quality Benchmark', value: 'Zero-Debt' },
                ]}
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
                metrics={[
                  { label: 'Verified Case Studies', value: '25+' },
                  { label: 'Average Client Retention', value: '98%' },
                  { label: 'Production Incidents', value: '0 Critical' },
                ]}
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
                metrics={[
                  { label: 'Response SLA', value: '< 2 Hours' },
                  { label: 'Mutual NDA', value: 'Standard' },
                  { label: 'Direct Access', value: 'Lead Architects' },
                ]}
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
