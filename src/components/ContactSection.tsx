import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Mail,
  Send,
  CheckCircle2,
  Key,
  Eye,
  X,
  PhoneCall,
  MapPin,
} from 'lucide-react'

import type { ContactFormData } from '../types'
import { dispatchContactInquiry } from '../services/resendService'
import type { ResendResponse } from '../services/resendService'

interface ContactSectionProps {
  prefillService?: string
  prefillBudget?: string
}

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

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, inquiryType: prefillService }))
    }
    if (prefillBudget) {
      setFormData((prev) => ({
        ...prev,
        budgetRange: prefillBudget,
        estimatedBudget: prefillBudget,
      }))
    }
  }, [prefillService, prefillBudget])

  const [customApiKey, setCustomApiKey] = useState('')
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<ResendResponse | null>(null)
  const [showEmailPreviewModal, setShowEmailPreviewModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await dispatchContactInquiry(formData, customApiKey)
      setSubmissionResult(res)

      // Fire celebratory confetti!
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0052cb', '#38bdf8', '#ffffff'],
      })
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0052cb] mb-3">
            <Mail className="w-3.5 h-3.5" />
            Direct Engagement & Consultation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Take the First Step with{' '}
            <span className="text-[#0052cb]">CoVision</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            For business inquiries, strategic partnerships, or engineering consultations, reach out directly. A dedicated CoVision expert will respond promptly within 4 hours.
          </p>
        </div>

        {/* 60% Form and 40% Contact Details Grid (Requirement Lines 278-284) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 60% Column: Form (7 cols in 12-col grid = ~58-60%) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submissionResult ? (
              /* Success State */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-blue-50 text-[#0052cb] flex items-center justify-center mx-auto border border-blue-200">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Inquiry Transmitted Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Your architecture brief was routed through the Resend transactional gateway. A confirmation receipt has been sent to{' '}
                    <strong className="text-slate-900">{submissionResult.deliveredTo}</strong>.
                  </p>
                </div>

                {/* Resend Receipt Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left font-mono text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Resend Message ID:</span>
                    <span className="text-[#0052cb] font-bold">{submissionResult.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sent Timestamp:</span>
                    <span className="text-slate-700">{submissionResult.sentAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gateway Status:</span>
                    <span className="text-emerald-600 font-semibold">
                      {submissionResult.isSimulation ? 'Enterprise Simulation Engine' : 'Live Resend API Post'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowEmailPreviewModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[#0052cb]" />
                    <span>Inspect HTML Email Payload</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmissionResult(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#0052cb] text-white text-xs font-bold hover:bg-[#003da8] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Corporate Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                    />
                  </div>

                  <div>
                    {/* Inquiry Dropdown Tab (from Requirement line 270) */}
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                      Inquiry Dropdown *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                    >
                      <option value="General query">General query</option>
                      <option value="software">Software Engineering (Custom & SaaS)</option>
                      <option value="App development">App Development (Native & Flutter)</option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="website development">Website Development</option>
                      <option value="UX/UI design">UX/UI Design (StackUI)</option>
                      <option value="ERP">Enterprise Resource Planning (ERP)</option>
                      <option value="Data Analysis">Data Analysis & BI</option>
                      <option value="Creative and content production">Creative & Content Production</option>
                      <option value="3D animation">3D Animation & Rendering</option>
                      <option value="Business process service">Business Process Services</option>
                      <option value="E-commerce suit">360° eCommerce Suite</option>
                    </select>
                  </div>
                </div>

                {formData.estimatedBudget && (
                  <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Scope Estimate Attached:</span>
                    <span className="font-bold font-mono text-[#0052cb]">{formData.estimatedBudget}</span>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    How Can I Help You? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project vision, timeline, specific technical requirements, or business goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052cb]"
                  />
                </div>

                {/* Mutual NDA Checkbox */}
                <div
                  onClick={() => setFormData({ ...formData, ndaRequired: !formData.ndaRequired })}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/60 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                      formData.ndaRequired ? 'bg-[#0052cb] text-white' : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {formData.ndaRequired && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong>Mutual Non-Disclosure Agreement (MNDA)</strong> required prior to technical discussion.
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0052cb] text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:bg-[#003da8] active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <span>Routing to CoVision Leads via Resend...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* 40% Column: Contact Info & Channels (5 cols in 12-col grid = ~40-42%) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#071330] rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Direct Channels
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Reach Our Executive Team
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our senior engineering directors across North America, Europe, and Asia.
              </p>
            </div>

            <div className="space-y-5">
              {/* Mail ID */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Our Mail ID
                  </div>
                  <a
                    href="mailto:contact@covision.tech"
                    className="text-sm font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    contact@covision.tech
                  </a>
                  <div className="text-[10px] text-slate-400">solutions@covision.tech</div>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Contact Number
                  </div>
                  <div className="text-sm font-bold text-white">
                    +1 (415) 890-4820 / +44 20 8144 9280
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold">24/7 Global On-Call Lead</div>
                </div>
              </div>

              {/* Addresses / Global Hubs */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Registered Hubs & Address
                  </div>
                  <div className="text-xs text-slate-200 font-semibold">
                    • 100 Montgomery St, Suite 1900, San Francisco, CA, USA
                    <br />
                    • 30 St Mary Axe, London EC3A 8EP, United Kingdom
                    <br />
                    • Marina Bay Financial Centre, Tower 2, Singapore
                  </div>
                </div>
              </div>

              {/* Social Channels (LinkedIn & Instagram) */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-blue-600 text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-pink-600 text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>

              </div>
            </div>

            {/* Optional Resend Key Configuration Drawer */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Resend Gateway Config</span>
                <button
                  type="button"
                  onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                  className="text-sky-400 hover:underline flex items-center gap-1 text-[11px]"
                >
                  <Key className="w-3 h-3" />
                  {showApiKeyInput ? 'Hide' : 'API Key'}
                </button>
              </div>

              {showApiKeyInput && (
                <div className="mt-2 animate-in fade-in">
                  <input
                    type="password"
                    value={customApiKey}
                    onChange={(e) => setCustomApiKey(e.target.value)}
                    placeholder="re_xxxxxxxxxxxx"
                    className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/20 text-xs font-mono text-white focus:outline-none"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resend HTML Email Payload Inspector Modal */}
      <AnimatePresence>
        {showEmailPreviewModal && submissionResult?.previewHtml && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEmailPreviewModal(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 z-10 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Resend HTML Email Payload Preview
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dispatched to client & CoVision sales leads via Resend engine.
                  </p>
                </div>
                <button
                  onClick={() => setShowEmailPreviewModal(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 flex-1 overflow-y-auto border border-slate-200 rounded-xl p-2 bg-slate-100">
                <iframe
                  title="Resend Email Payload"
                  srcDoc={submissionResult.previewHtml}
                  className="w-full h-[450px] rounded-lg bg-white"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowEmailPreviewModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#0052cb] text-white font-semibold text-xs"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
