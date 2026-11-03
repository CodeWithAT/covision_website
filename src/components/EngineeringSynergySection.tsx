import React from 'react'

export const EngineeringSynergySection: React.FC = () => {
  return (
    <section id="engineering-synergy" className="py-16 md:py-24 bg-paper relative border-t border-ink-line text-ink font-inter-tight">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm">
          <div className="max-w-4xl mb-8 sm:mb-10 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
                Built on Engineering Excellence:
              </span>
              <h3 className="font-bricolage text-2xl sm:text-4xl font-medium text-slate-900 mt-2">
                The Synergy: Agile × Scrum × DevOps × AI
              </h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Combine architecture-led software engineering, agile execution, DevOps automation, and AI-assisted development to build secure, reliable, and scalable technology—with engineering quality at every stage.
            </p>

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                <strong className="font-semibold text-slate-900">AI is no longer a support system</strong>—it’s the central nervous system of modern software development. At CoVision, we don’t just adopt Agile, Scrum, and DevOps—our competitive advantage comes from integration of these three powerhouses with AI to build smarter, faster, and future-ready digital ecosystems.
              </p>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                At CoVision, we elevate our Agile, Scrum, and DevOps workflows with integrated AI capabilities, enabling predictive intelligence, process automation, and real-time adaptability across the entire SDLC (Software Development Life Cycle).
              </p>
            </div>
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

