import React, { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import type { ContactFormData } from '../types'
import { dispatchContactInquiry } from '../services/resendService'
import type { ResendResponse } from '../services/resendService'
import { GlobeWireframe } from './GlobeWireframe'
import { SectionEyebrow } from './SectionEyebrow'

const smoothEase = [0.25, 0.1, 0.25, 1] as const

interface ContactSectionProps {
  prefillService?: string
  prefillBudget?: string
}

/**
 * FormDots: Sleek radial-gradient separator with linear alpha mask
 */
const FormDots: React.FC<{ className?: string; orientation?: 'horizontal' | 'vertical' }> = ({
  className = '',
  orientation = 'horizontal',
}) => {
  const isHorizontal = orientation === 'horizontal'
  return (
    <div
      role="separator"
      className={`shrink-0 flex items-center justify-center overflow-hidden ${
        isHorizontal ? 'w-full' : 'h-full'
      } ${className}`}
    >
      <div className={`relative ${isHorizontal ? 'w-full h-3' : 'h-full w-3'}`}>
        <div
          className="absolute inset-0 bg-repeat text-slate-300 dark:text-white/20"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 0.9px, transparent 0.9px)',
            backgroundSize: isHorizontal ? '6px 100%' : '100% 6px',
            maskImage: isHorizontal
              ? 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'
              : 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: isHorizontal
              ? 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'
              : 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}

const GLOBAL_CHANNELS = [
  {
    icon: Mail,
    label: 'contact@covision.tech',
    sub: 'Executive & Client Desk',
    href: 'mailto:contact@covision.tech',
    tag: 'Response < 2h',
  },
  {
    icon: Phone,
    label: '+1 (415) 890-4820',
    sub: 'North America & Global On-Call',
    href: 'tel:+14158904820',
    tag: '24/7 Available',
  },
  {
    icon: MapPin,
    label: 'Palo Alto • London • Singapore',
    sub: 'Regional Solution Engineering Labs',
    href: '#',
    tag: 'Global Presence',
  },
]

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefillService,
  prefillBudget,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    inquiryType: prefillService || 'General query',
    budgetRange: prefillBudget || '$25k – $50k USD',
    timeline: 'Within 4-8 Weeks',
    message: '',
    ndaRequired: true,
    estimatedBudget: prefillBudget || '',
  })

  const [prevPrefillService, setPrevPrefillService] = useState(prefillService)
  const [prevPrefillBudget, setPrevPrefillBudget] = useState(prefillBudget)

  if (prefillService !== prevPrefillService || prefillBudget !== prevPrefillBudget) {
    setPrevPrefillService(prefillService)
    setPrevPrefillBudget(prefillBudget)
    setFormData((prev) => ({
      ...prev,
      inquiryType: prefillService || prev.inquiryType,
      budgetRange: prefillBudget || prev.budgetRange,
      estimatedBudget: prefillBudget || prev.estimatedBudget,
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<ResendResponse | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await dispatchContactInquiry(formData)
      setSubmissionResult(res)

      // Celebratory Confetti with CoVision Royal Blue and Cyan
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#0052cb', '#38bdf8', '#ffffff', '#1e293b'],
      })
    } catch (err) {
      console.error('Error dispatching inquiry:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FAF9F5] py-24 sm:py-32 overflow-hidden border-t border-slate-200/60"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 left-10 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <SectionEyebrow number="06" label="DIRECT ENGAGEMENT & CONSULTATION" tone="dark" className="mb-4" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#0052cb] text-xs font-semibold tracking-wide mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052cb]" />
            <span>Sub-2-Hour Response SLA Guaranteed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-bricolage leading-[1.12]"
          >
            Take the First Step with{' '}
            <span className="text-[#0052cb]">CoVision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-inter-tight leading-relaxed"
          >
            Engage directly with our Principal Solutions Architects and Global Engineering Directors.
            Receive a formal architectural appraisal, milestone schedule, and mutual NDA within 2 hours.
          </motion.p>

          {/* SLA Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#0052cb]" /> &lt; 2-Hour Response SLA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Mutual NDA Enforced
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> 4 Global Tech Hubs
            </span>
          </motion.div>
        </div>

        {/* 2-Column Grid: Left Column (Channels + 3D Rotating Globe) & Right Column (Enterprise Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Direct Executive Channels + 3D Interactive Rotating Wireframe Globe */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5 rounded-3xl bg-linear-to-b from-[#09101F] via-[#0C152B] to-[#0A1224] text-white p-7 sm:p-9 flex flex-col justify-between shadow-2xl border border-slate-800/80 relative overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 -right-24 w-60 h-60 bg-sky-500/15 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 font-mono">
                  DIRECT EXECUTIVE CHANNELS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-bricolage tracking-tight">
                  Reach Our Lead Architects
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-inter-tight">
                  Direct line to senior engineering leadership across North America, Europe, and Asia.
                  We operate 24/7 follow-the-sun architecture desks.
                </p>
              </div>

              {/* Contact Channels List */}
              <div className="flex flex-col gap-3.5">
                {GLOBAL_CHANNELS.map(({ icon: Icon, label, sub, href, tag }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0052cb] group-hover:text-white transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 truncate transition-colors">
                          {label}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-sky-300 border border-blue-400/20 shrink-0">
                          {tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive 3D Wireframe Globe Area */}
            <div className="relative mt-6 pt-5 border-t border-white/10 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs text-slate-300 font-medium mb-3">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-slate-200 font-semibold">Active Global Delivery Desks</span>
                </span>
                <span className="text-sky-400 font-semibold">4 Tech Hubs</span>
              </div>

              {/* 3D Wireframe Globe with Bottom Fadeout Mask */}
              <div className="relative w-full overflow-hidden h-56 sm:h-64 rounded-2xl bg-black/25 border border-white/5 flex items-center justify-center">
                <GlobeWireframe
                  className="w-full h-full max-w-[340px] aspect-square"
                  variant="wireframe"
                  autoRotate
                  autoRotateSpeed={0.45}
                  strokeColor="#38bdf8"
                  strokeWidth={0.7}
                  graticuleColor="#1e3a8a"
                  graticuleOpacity={0.22}
                  sphereOutlineColor="#0052cb"
                  sphereOutlineWidth={1.2}
                  rotateCities={['san francisco', 'london', 'singapore', 'mumbai', 'dubai', 'tokyo']}
                  rotationSpeed={3500}
                />
                {/* Gradient bottom mask for smooth blending */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1224] to-transparent" />
              </div>

              {/* Social Channels */}
              <div className="w-full mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CoVision Technologies on LinkedIn"
                    className="hover:text-white transition-colors font-medium flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CoVision Technologies on Instagram"
                    className="hover:text-white transition-colors font-medium flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>

                <span className="text-[11px] text-slate-500 font-medium">Confidential &amp; Secure</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Enterprise Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50 flex flex-col justify-between"
          >
            {submissionResult ? (
              /* Success Confirmation State */
              <div className="text-center py-8 sm:py-12 space-y-6">
                <div className="w-20 h-20 rounded-3xl bg-blue-50 text-[#0052cb] flex items-center justify-center mx-auto border border-blue-200 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-bricolage">
                    Inquiry Received &amp; Priority Routed
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto font-inter-tight leading-relaxed">
                    Thank you for reaching out. A Senior Solutions Architect has been assigned to your brief and will connect within 2 business hours.
                  </p>
                </div>

                {/* Professional Confirmation Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 max-w-md mx-auto text-left text-xs space-y-2.5 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Inquiry Reference:</span>
                    <span className="text-[#0052cb] font-mono font-bold">{submissionResult.id || 'CV-ENG-2026-92'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Response SLA:</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      &lt; 2 Business Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Assigned Office:</span>
                    <span className="text-slate-800 font-semibold">Palo Alto &amp; London Desk</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Confirmation Sent To:</span>
                    <span className="text-slate-800 font-semibold">{submissionResult.deliveredTo || formData.email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setSubmissionResult(null)}
                    className="px-6 py-3 rounded-xl bg-[#0052cb] text-white text-xs font-bold hover:bg-[#003da8] transition-all cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Enterprise Contact Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-bricolage tracking-tight mb-1">
                    Send an Architectural Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-inter-tight">
                    Fill in the project parameters. A Lead Architect will review and provide a structured scope outline.
                  </p>
                </div>

                <FormDots />

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Global Tech Corp"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@domain.com"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Inquiry Practice *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    >
                      <option value="General query">General Architectural Query</option>
                      <option value="software">Software Engineering (Custom & SaaS)</option>
                      <option value="App development">App Development (Native & Flutter)</option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="website development">Website Development</option>
                      <option value="UX/UI design">UX/UI Design (CoUI™)</option>
                      <option value="ERP">Enterprise Resource Planning (ERP)</option>
                      <option value="Data Analysis">Data Analysis & BI</option>
                      <option value="Creative and content production">Creative & Content Production</option>
                      <option value="3D animation">3D Animation & Rendering</option>
                      <option value="Business process service">Business Process Services</option>
                      <option value="E-commerce suit">360° eCommerce Suite</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 transition-all duration-200"
                    >
                      <option value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Weeks)</option>
                      <option value="Within 4-8 Weeks">Within 4–8 Weeks</option>
                      <option value="Q2 / Q3 Strategic Roadmap">Q2 / Q3 Strategic Roadmap</option>
                      <option value="Exploratory Feasibility">Exploratory Feasibility</option>
                    </select>
                  </div>
                </div>

                {/* Scope Estimate Attached Badge (When user navigated from ProjectEstimator or PracticePortfolios) */}
                {formData.estimatedBudget && (
                  <div className="p-3.5 rounded-xl bg-blue-50/90 border border-blue-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0052cb]" />
                      Scope Estimate Attached:
                    </span>
                    <span className="font-bold font-mono text-[#0052cb] bg-white px-2.5 py-1 rounded-md border border-blue-200">
                      {formData.estimatedBudget}
                    </span>
                  </div>
                )}

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wider uppercase text-slate-500 font-mono">
                    Project Vision & Technical Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architecture requirements, current tech stack, scale targets, or specific problem statement..."
                    className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-[#0052cb] focus:ring-3 focus:ring-[#0052cb]/10 resize-none transition-all duration-200"
                  />
                </div>

                {/* Mutual NDA Checkbox */}
                <div
                  onClick={() => setFormData({ ...formData, ndaRequired: !formData.ndaRequired })}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-100/60 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      formData.ndaRequired
                        ? 'bg-[#0052cb] text-white shadow-xs'
                        : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {formData.ndaRequired && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div className="text-xs text-slate-700 select-none">
                    <strong className="font-semibold text-slate-900">Mutual Non-Disclosure Agreement (MNDA)</strong> required
                    prior to architecture blueprint exchange.
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl font-bold text-sm bg-[#0052cb] hover:bg-[#003da8] text-white shadow-lg shadow-blue-600/25 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Routing to CoVision Leads via Resend...
                    </span>
                  ) : (
                    <>
                      <span>Dispatch Architectural Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
