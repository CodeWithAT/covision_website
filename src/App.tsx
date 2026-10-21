import React, { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { QueryClientProvider } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { queryClient } from './lib/queryClient'
import { useLenis } from './lib/lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MarqueeDivider } from './components/MarqueeDivider'
import { LivingTechnologySection } from './components/LivingTechnologySection'
import { ServicesSection } from './components/ServicesSection'
import { SaaSProductsSection } from './components/SaaSProductsSection'
import { IndustryFootprintSection } from './components/IndustryFootprintSection'
import { WhyChooseUsSection } from './components/WhyChooseUsSection'
import { EcommerceSuiteSection } from './components/EcommerceSuiteSection'
import { TechStackMatrix } from './components/TechStackMatrix'
import { PillarClientsSection } from './components/PillarClientsSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { AboutUsSection } from './components/AboutUsSection'
import { TestimonialsAndProof } from './components/TestimonialsAndProof'
import { FaqSection } from './components/FaqSection'
import { GetInTouchBanner } from './components/GetInTouchBanner'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

const normalizePage = (hash: string): string => {
  const clean = hash.replace(/^#\/?/, '').toLowerCase()
  if (['services', 'it-services'].includes(clean)) return 'services'
  if (['saas', 'products'].includes(clean)) return 'saas'
  if (['ecommerce', 'ecommerce-suite'].includes(clean)) return 'ecommerce'
  if (['living-tech', 'living-technology'].includes(clean)) return 'living-tech'
  if (['clients', 'case-studies', 'work'].includes(clean)) return 'clients'
  if (['about', 'about-us'].includes(clean)) return 'about'
  if (['contact', 'get-in-touch'].includes(clean)) return 'contact'
  return 'home'
}

interface PageHeaderBannerProps {
  pageName: string
  title: string
  subtitle: string
  onBackToHome: () => void
}

const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  pageName,
  title,
  subtitle,
  onBackToHome,
}) => (
  <div className="pt-28 pb-12 md:pt-36 md:pb-16 bg-paper-deep border-b border-ink-line">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#0052cb] transition-colors cursor-pointer w-max"
        >
          <ArrowLeft className="size-3.5" />
          <span>Return to Overview</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0052cb] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            CoVision Ecosystem / {pageName}
          </span>
        </div>
      </div>

      <h1 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.04]">
        {title}
      </h1>
      <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
)

export const AppContent: React.FC = () => {
  // Initialize buttery-smooth Lenis scrolling
  useLenis()

  const [activePage, setActivePage] = useState<string>(() => normalizePage(window.location.hash))
  const [prefillService, setPrefillService] = useState<string | undefined>()
  const prefillBudget: string | undefined = undefined

  useEffect(() => {
    const handleHashChange = () => {
      const page = normalizePage(window.location.hash)
      setActivePage(page)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigatePage = (page: string) => {
    setActivePage(page)
    window.location.hash = page === 'home' ? '' : page
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleOpenContact = (service?: string) => {
    if (service) setPrefillService(service)
    if (activePage !== 'contact') {
      handleNavigatePage('contact')
    } else {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
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
              {/* Executive Hero with High-Energy Animations */}
              <Hero
                onNavigatePage={handleNavigatePage}
                onOpenContact={() => handleOpenContact()}
              />

              {/* CogniMedia Signature Marquee Divider */}
              <MarqueeDivider />

              {/* Living Technology Overview */}
              <LivingTechnologySection />

              {/* Clean Services Bento Grid Preview */}
              <ServicesSection onRequestScope={handleOpenContact} />

              {/* Proprietary SaaS Platforms Highlights */}
              <SaaSProductsSection onOpenContact={handleOpenContact} />

              {/* Dual Infinite Client Marquee & Strategic Case Spotlights */}
              <PillarClientsSection onOpenContact={() => handleOpenContact()} />

              {/* Executive Testimonials & Guarantees */}
              <TestimonialsAndProof />

              {/* Harmonic Sine-Wave Get In Touch Banner */}
              <GetInTouchBanner onEmailSubmit={(email) => handleOpenContact(`Direct Inquiry from ${email}`)} />

              {/* Contact & Consultation Form */}
              <ContactSection
                prefillService={prefillService}
                prefillBudget={prefillBudget}
              />
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
                pageName="Services & Cloud Architecture"
                title="Next-Generation Digital Services & Cloud Fabric"
                subtitle="From distributed microservices and native mobile applications to autonomous AI workflows and cognitive design tokens."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <ServicesSection onRequestScope={handleOpenContact} />
              <TechStackMatrix />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
                pageName="SaaS Platforms Suite"
                title="Proprietary Enterprise Platforms & Subdomains"
                subtitle="Battle-tested standalone digital platforms engineered for enterprise deployment, live telemetry, and rapid market scaling."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <SaaSProductsSection onOpenContact={handleOpenContact} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
            </motion.div>
          )}

          {activePage === 'ecommerce' && (
            <motion.div
              key="ecommerce"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <PageHeaderBanner
                pageName="360° eCommerce Practice"
                title="High-Velocity Digital Commerce & Zero-Downtime Migration"
                subtitle="Headless Shopify Plus, Adobe Commerce, real-time ERP middleware synchronization, and 3D product visualizers."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <EcommerceSuiteSection onRequestScope={handleOpenContact} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
                pageName="Living Technology Philosophy"
                title="Living Technology: Architecture & Delivery Framework"
                subtitle="Technology that behaves, adapts, and evolves like a living organism. Integrating Agile velocity, Scrum discipline, DevOps, and AI."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <LivingTechnologySection />
              <IndustryFootprintSection onOpenContact={handleOpenContact} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
                pageName="Client Ecosystem & Case Studies"
                title="Verified Enterprise Case Studies & Deployments"
                subtitle="Explore verified production outcomes delivered for Fortune 500 retail giants, global media houses, and high-concurrency FinTech rails."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <PillarClientsSection onOpenContact={() => handleOpenContact()} />
              <CaseStudiesSection onOpenContact={() => handleOpenContact()} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
                pageName="About CoVision Technologies"
                title="Vision, Purpose & Enterprise Values"
                subtitle="Discover the leadership philosophy, technical commitments, and client-centric values that guide our global engineering practice."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <AboutUsSection onOpenContact={() => handleOpenContact()} />
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} />
              <FaqSection onOpenContact={() => handleOpenContact()} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
                pageName="Enterprise Scoping"
                title="Consult with Lead Enterprise Architects"
                subtitle="Direct line to senior engineers and technical partners. Receive tailored architectural proposals, milestone schedules, and SLA commitments."
                onBackToHome={() => handleNavigatePage('home')}
              />
              <GetInTouchBanner onEmailSubmit={(email) => handleOpenContact(`Direct Inquiry from ${email}`)} />
              <ContactSection prefillService={prefillService} prefillBudget={prefillBudget} />
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
