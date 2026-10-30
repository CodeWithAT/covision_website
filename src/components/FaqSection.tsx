import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react'
import { FAQ_DATA } from '../data/mockData'

interface FaqSectionProps {
  onOpenContact: () => void
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Security & NDA', 'Architecture', 'Engagement', 'Pricing']

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCat
  })

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0052cb] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers for Engineering Leaders
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about our security, intellectual property, or technical execution? Find transparent answers below.
          </p>

          {/* Interactive Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. NDA, IP ownership, Edge CDN, Pricing, SLA)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cb] focus:bg-white transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === c
                    ? 'bg-[#0052cb] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="mt-12 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-[#0052cb]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              No questions found matching "{searchQuery}". Ask our architects directly!
            </div>
          )}
        </div>

        {/* Need more clarification card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a proprietary architectural inquiry?</h4>
            <p className="text-xs text-slate-500">We execute custom bilateral NDAs within 2 business hours.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0052cb] text-white font-semibold text-xs shadow-md hover:bg-[#003da8] transition-colors"
          >
            <span>Ask a Lead Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
