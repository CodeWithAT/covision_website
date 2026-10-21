import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ShieldCheck, ArrowRight, Layers, FileCode } from 'lucide-react'
import type { ServiceItem } from '../types'


interface ServiceDetailModalProps {
  service: ServiceItem | null
  onClose: () => void
  onRequestScope: (serviceName: string) => void
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestScope,
}) => {
  if (!service) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 p-6 sm:p-8 border-b border-blue-100 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052cb]/10 text-[#0052cb] text-xs font-bold uppercase tracking-wider mb-3">
              {service.category} • {service.badgeText}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-2 text-slate-600 font-medium text-sm sm:text-base">
              {service.tagline}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>

            {/* Key Deliverables & Scope */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0052cb] mb-3 flex items-center gap-2">
                <FileCode className="w-4 h-4" />
                Production Deliverables & Architecture Scope
              </h4>
              <div className="space-y-2.5">
                {service.detailedScope.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0052cb] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA & Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0052cb] flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  SLA & Availability Guarantee
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {service.sla}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-1">
                  <Layers className="w-4 h-4" />
                  Primary Enterprise Toolchain
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benchmark Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Production Performance Benchmarks
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-blue-100 shadow-sm text-center">
                    <div className="text-xl font-black text-[#0052cb]">{m.value}</div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Includes complimentary architecture review & NDA execution prior to kickoff.
            </div>

            <button
              onClick={() => {
                onClose()
                onRequestScope(service.title)
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052cb] text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:bg-[#003da8] active:scale-95 transition-all"
            >
              <span>Request Scope for this Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
