import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'

interface NavbarProps {
  activePage: string
  onNavigatePage: (page: string, targetServiceId?: string) => void
  onOpenContact: (prefillService?: string) => void
}

const serviceSubItems = [
  { id: 'software-engineering', title: '01. Software Engineering', desc: 'Custom Software, HRMS & ERP Solutions' },
  { id: 'application-development', title: '02. Application Development', desc: 'Native, Cross-Platform, Hybrid & PWAs' },
  { id: 'data-analytics', title: '03. Data Analytics', desc: 'Predictive Intelligence & 9 Performance Dimensions' },
  { id: 'cloud-infrastructure', title: '04. Cloud and Infrastructure', desc: 'Hyperscalers, Migration & Media DAM Cloud' },
  { id: 'ai-ml-integration', title: '05. AI/ML Integration', desc: 'Autonomous Agents, Computer Vision & RAG' },
  { id: 'ux-ui-design', title: '06. UX/UI Design', desc: 'Cognitive Science & Covision Lattice / monolith' },
]

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigatePage,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Primary enterprise navigation taxonomy
  const navItems = [
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'about', label: 'About' },
  ]

  const handleNavClick = (pageId: string, targetServiceId?: string) => {
    onNavigatePage(pageId, targetServiceId)
    setMobileMenuOpen(false)
    setServicesDropdownOpen(false)
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none font-inter-tight transition-all duration-400 opacity-100 translate-y-0"
    >
      <div
        className={`pointer-events-auto mx-auto max-w-7xl rounded-2xl px-5 sm:px-6 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-xl shadow-md border border-ink-line py-3'
            : 'bg-paper/85 backdrop-blur-md border border-ink-line py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Clean Enterprise Brand Identity: CoVision Infotech */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left bg-transparent border-0 p-0"
          >
            <span className="size-3 rounded-full bg-[#0052cb] shadow-sm shadow-blue-500/40 group-hover:scale-125 transition-transform" />
            <span className="font-bricolage text-2xl font-bold tracking-tight text-ink">
              CoVision <span className="text-[#0052cb]">Infotech</span>
            </span>
          </button>

          {/* Focused Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-neutral-700">
            {navItems.map((item) => {
              const isActive = activePage === item.id
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-1 py-1.5 px-3 rounded-xl transition-all cursor-pointer bg-transparent border-0 ${
                        isActive
                          ? 'text-[#0052cb] font-bold bg-blue-50/80'
                          : 'hover:text-[#0052cb] hover:bg-neutral-100/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full -left-4 w-80 bg-white rounded-2xl shadow-xl border border-ink-line p-2.5 z-50 mt-1"
                        >
                          {serviceSubItems.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => handleNavClick('services', s.id)}
                              className="w-full text-left block p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors cursor-pointer bg-transparent border-0 group/item"
                            >
                              <div className="text-xs font-bold text-ink group-hover/item:text-[#0052cb] flex items-center justify-between">
                                <span>{s.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#0052cb]" />
                              </div>
                              <div className="text-[11px] text-neutral-500 mt-0.5">{s.desc}</div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1.5 px-3 rounded-xl transition-all cursor-pointer bg-transparent border-0 ${
                    isActive
                      ? 'text-[#0052cb] font-bold bg-blue-50/80 shadow-2xs'
                      : 'hover:text-[#0052cb] hover:bg-neutral-100/50'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Clean Executive CTA Group */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="px-4.5 py-2 rounded-full border border-neutral-300 bg-white/90 text-xs font-semibold text-neutral-800 hover:border-[#0052cb] hover:text-[#0052cb] transition-colors cursor-pointer"
            >
              Inquiry
            </button>
            <button
              onClick={() => onOpenContact()}
              className="group inline-flex items-center gap-2 rounded-full bg-[#0052cb] hover:bg-[#003da8] px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact()}
              className="rounded-full bg-[#0052cb] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ink hover:bg-neutral-100 cursor-pointer bg-transparent border-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto lg:hidden mx-auto max-w-7xl px-4 mt-2"
          >
            <div className="rounded-2xl bg-white border border-ink-line p-5 shadow-2xl space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold bg-transparent border-0 cursor-pointer ${
                  activePage === 'home' ? 'bg-blue-50 text-[#0052cb]' : 'text-ink'
                }`}
              >
                Home
              </button>

              {navItems.map((item) => {
                if (item.id === 'services') {
                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold bg-transparent border-0 cursor-pointer flex items-center justify-between ${
                          activePage === item.id ? 'bg-blue-50 text-[#0052cb] font-bold' : 'text-neutral-700'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0052cb] bg-blue-100/60 px-2 py-0.5 rounded-full">
                          All 6 Practices
                        </span>
                      </button>
                      <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-blue-100 ml-3">
                        {serviceSubItems.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleNavClick('services', s.id)}
                            className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium text-neutral-600 hover:text-[#0052cb] hover:bg-neutral-50 cursor-pointer bg-transparent border-0 flex items-center justify-between"
                          >
                            <span>{s.title}</span>
                            <ArrowRight className="size-3 text-neutral-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold bg-transparent border-0 cursor-pointer ${
                      activePage === item.id ? 'bg-blue-50 text-[#0052cb] font-bold' : 'text-neutral-700'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}

              <div className="pt-3 border-t border-neutral-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenContact()
                  }}
                  className="w-full py-3 rounded-xl bg-[#0052cb] text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-md"
                >
                  Consult Lead Architect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
