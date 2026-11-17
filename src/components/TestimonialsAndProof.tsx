import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle, Award } from 'lucide-react'

import { TESTIMONIALS } from '../data/mockData'

export const TestimonialsAndProof: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0052cb] mb-4">
            <Award className="w-3.5 h-3.5" />
            Executive Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why CTOs &amp; Engineering Leaders Rely on CoVision Infotech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Hear directly from technology executives whose high-scale architectures, developer velocity, and cloud security we actively power.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#0052cb]"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{t.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#0052cb]" />
                  </div>
                  <div className="text-[11px] font-semibold text-[#0052cb]">{t.role}</div>
                  <div className="text-[10px] text-slate-400">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Guarantees Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-blue-100 shadow-md grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-[#0052cb]">100%</div>
            <div className="text-xs font-bold text-slate-800 mt-1">IP Ownership Transfer</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Full copyright and git assignment</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#0052cb]">15 Mins</div>
            <div className="text-xs font-bold text-slate-800 mt-1">P1 Incident SLA</div>
            <div className="text-[11px] text-slate-400 mt-0.5">24/7 dedicated escalation on-call</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#0052cb]">SOC 2 & ISO</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Certified Protocols</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Audited infrastructure workflows</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#0052cb]">0 Lock-In</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Open Cloud Native</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Docker, k8s, standard OpenTofu</div>
          </div>
        </div>
      </div>
    </section>
  )
}
