import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react'

interface GetInTouchBannerProps {
  onEmailSubmit: (email: string) => void
}

export const GetInTouchBanner: React.FC<GetInTouchBannerProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    onEmailSubmit(email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="get-in-touch" className="w-full bg-paper px-4 md:px-8 py-12 md:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[36px] bg-ink px-6 py-12 md:px-14 md:py-16 text-white shadow-xl">
        {/* Harmonic Sine Wave SVG backdrop (Proportionally Scaled) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[85%] w-full opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_40%)]"
        >
          <path
            d="M0 40 L100 55 L200 55 L300 40 L400 24 L500 24 L600 40 L700 55 L800 55 L900 40 L1000 24 L1100 24 L1200 40"
            fill="none"
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 80 L100 100 L200 90 L300 70 L400 50 L500 60 L600 80 L700 100 L800 90 L900 70 L1000 50 L1100 60 L1200 80"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 130 L100 145 L200 120 L300 95 L400 85 L500 110 L600 130 L700 145 L800 120 L900 95 L1000 85 L1100 110 L1200 130"
            fill="none"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 180 L100 190 L200 160 L300 140 L400 130 L500 160 L600 180 L700 190 L800 160 L900 140 L1000 130 L1100 160 L1200 180"
            fill="none"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Balanced, Proportional Typography */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-400 font-inter-tight border border-white/15">
              <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Direct Engagement with Lead Architect</span>
            </div>

            <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-[3.25rem] font-medium leading-[1.05] tracking-tight text-white">
              Let’s engineer your <span className="text-[#38bdf8]">digital next.</span>
            </h2>

            <p className="max-w-xl font-inter-tight text-sm sm:text-base text-white/75 leading-relaxed">
              Whether you are architecting a high-velocity 360° eCommerce platform, deploying autonomous AI agents, or modernizing legacy infrastructure, our principal engineers are ready to consult.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white/60 font-inter-tight">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-sky-400" />
                Guaranteed 4-Hour Response
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                Mutual Non-Disclosure (MNDA) Default
              </span>
            </div>
          </div>

          {/* Clean Email Capture & Consultation Action */}
          <div className="lg:col-span-5 font-inter-tight">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 bg-white/[0.06] p-2 rounded-full border border-white/15 backdrop-blur-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email for consultation"
                required
                className="h-12 flex-1 rounded-full bg-transparent px-5 text-sm text-white placeholder:text-white/45 outline-none font-inter-tight"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-xs sm:text-sm font-bold text-ink hover:bg-[#0052cb] hover:text-white transition-all cursor-pointer shrink-0 shadow-md"
              >
                <span>{submitted ? 'Inquiry Sent!' : 'Consult Architect'}</span>
                {submitted ? (
                  <CheckCircle2 className="size-4 text-emerald-500" />
                ) : (
                  <ArrowUpRight className="size-4" />
                )}
              </button>
            </form>
            <div className="mt-3 text-center sm:text-left text-[11px] text-white/45">
              Direct access to senior partners • No spam • 100% intellectual property assignment
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
