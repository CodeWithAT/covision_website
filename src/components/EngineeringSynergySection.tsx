import React from 'react'

export const EngineeringSynergySection: React.FC = () => {
  return (
    <section id="engineering-synergy" className="py-16 md:py-24 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
              Built on Engineering Excellence:
            </span>
            <h3 className="font-bricolage text-2xl sm:text-4xl font-medium text-slate-900 mt-2">
              The Synergy: Agile × Scrum × DevOps × AI
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Combine architecture-led software engineering, agile execution, DevOps automation, and AI-assisted development to build secure, reliable, and scalable technology—with engineering quality at every stage.
            </p>
          </div>

          {/* Architecture Diagram: AI Across the Engineering Lifecycle */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-linear-to-b from-[#e8f1fd] via-white to-[#edf4fe] p-2 sm:p-4 md:p-6 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="overflow-x-auto overflow-y-hidden">
              <img
                src="/images/living/ai_engineering_lifecycle.webp"
                alt="AI Across the Engineering Lifecycle: Discover & Plan, Agile Delivery, Scrum Execution, DevOps CI/CD, Monitor & Improve, and Continuous Feedback"
                className="w-full min-w-[760px] lg:min-w-0 h-auto rounded-xl sm:rounded-2xl transition-transform duration-500 hover:scale-[1.005]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
