import React, { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { QueryClientProvider } from '@tanstack/react-query'
import { ArrowLeft, Home } from 'lucide-react'
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

import { scrollToElement, scrollToTopSmooth } from './lib/scrollUtils'

const parseRoute = (hash: string): { page: string; targetService?: string } => {
  const clean = hash.replace(/^#\/?/, '').trim()
  const [firstPart, ...rest] = clean.split('/')
  const rawPage = firstPart?.toLowerCase() || ''
  const target = rest.join('/') || undefined

  if (['services', 'it-services'].includes(rawPage)) return { page: 'services', targetService: target }
  if (['saas', 'products'].includes(rawPage)) return { page: 'saas' }
  if (['ecommerce', 'ecommerce-suite'].includes(rawPage)) return { page: 'ecommerce' }
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
  onBackToHome: () => void
}

const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  pageName,
  title,
  subtitle,
  metrics,
  onBackToHome,
}) => (
  <div className="pt-28 pb-14 md:pt-36 md:pb-18 bg-paper-deep border-b border-ink-line">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 hover:text-[#0052cb] transition-colors cursor-pointer w-max"
        >
          <ArrowLeft className="size-3.5" />
          <span>Return to Ecosystem Overview</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 hover:text-[#0052cb] transition-colors cursor-pointer"
          >
            <Home className="size-3" />
            <span>Home</span>
          </button>
          <span className="text-neutral-300">/</span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0052cb] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#0052cb] animate-pulse" />
            {pageName}
          </span>
        </div>
      </div>

      <h1 className="font-bricolage text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.04]">
        {title}
      </h1>
      <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed font-normal">
        {subtitle}
      </p>

      {/* Architectural Metric Badges */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-8 pt-8 border-t border-ink-line/80">
          {metrics.map((m) => (
            <div key={m.label} className="p-4 rounded-2xl bg-white/90 border border-ink-line shadow-2xs">
              <div className="font-bricolage text-xl sm:text-2xl font-bold text-[#0052cb] tracking-tight">
                {m.value}
              </div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1 font-semibold">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
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
              <PageHeaderBanner
                pageName="Services & Cloud Architecture"
                title="Next-Generation Digital Services & Cloud Fabric"
                subtitle="From distributed microservices and native mobile applications to autonomous AI workflows, edge computing, and cognitive design tokens."
                metrics={[
                  { label: 'SLA Availability', value: '99.99%' },
                  { label: 'Sprint Delivery Velocity', value: '2-4 Wks' },
                  { label: 'Enterprise Platforms', value: '50+' },
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
                pageName="SaaS Platforms Suite"
                title="Proprietary Enterprise Platforms & Subdomains"
                subtitle="Battle-tested standalone digital platforms engineered for enterprise deployment, live telemetry, multi-tenant isolation, and rapid market scaling."
                metrics={[
                  { label: 'Deployment Model', value: 'Sovereign Cloud' },
                  { label: 'Security Standard', value: 'SOC 2 Type II' },
                  { label: 'Telemetry Latency', value: '< 50ms' },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <SaaSProductsSection onOpenContact={handleOpenContact} sectionNumber="01" />
              <IndustryFootprintSection onOpenContact={handleOpenContact} sectionNumber="02" />
              <WhyChooseUsSection onOpenContact={() => handleOpenContact()} sectionNumber="03" />
              <ContactSection prefillService={prefillService} />
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
                subtitle="Headless Shopify Plus, Adobe Commerce, real-time ERP middleware synchronization, global payment orchestration, and 3D WebGL product visualizers."
                metrics={[
                  { label: 'Annual GMV Handled', value: '$500M+' },
                  { label: 'Edge Checkout Speed', value: '40ms' },
                  { label: 'Peak Surge Uptime', value: '99.999%' },
                ]}
                onBackToHome={() => handleNavigatePage('home')}
              />
              <EcommerceSuiteSection onRequestScope={handleOpenContact} sectionNumber="01" />
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
              <PageHeaderBanner
                pageName="About CoVision Technologies"
                title="Vision, Purpose & Enterprise Values"
                subtitle="Discover the leadership philosophy, technical commitments, and client-centric values that guide our global engineering practice."
                metrics={[
                  { label: 'Engineering Hubs', value: 'Global' },
                  { label: 'Sprint On-Time Rate', value: '100%' },
                  { label: 'Technical Debt Policy', value: 'Zero-Debt' },
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
