import React from 'react'
import { SectionEyebrow } from './SectionEyebrow'
import { CtaPill } from './CtaPill'
import {
  Sparkles,
  Layers,
  Gauge,
  ShieldCheck,
  Globe2,
  Handshake,
} from 'lucide-react'

interface WhyChooseUsSectionProps {
  onOpenContact: () => void
  sectionNumber?: string
}

interface ValueProp {
  icon: React.ReactNode
  title: string
  description: string
}

const VALUE_PROPS: ValueProp[] = [
  {
    icon: <Sparkles className="size-5" />,
    title: 'AI-Driven Automation & Intelligence',
    description:
      'We integrate custom machine learning workflows into enterprise backends—automating customer routing, predictive inventory sync, and real-time operational anomaly detection.',
  },
  {
    icon: <Layers className="size-5" />,
    title: 'End-to-End Engineering Under One Roof',
    description:
      'Custom cloud software, native iOS & Android apps, 360° eCommerce, and DevOps under one roof, completely eliminating vendor fragmentation and architectural drift.',
  },
  {
    icon: <Gauge className="size-5" />,
    title: 'Rapid Delivery Without Technical Debt',
    description:
      'Modern TypeScript architecture, reusable CoVision Lattice™ design tokens, and automated CI/CD pipelines that transform multi-month release cycles into days.',
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: 'Zero-Trust Security & Compliance',
    description:
      'SOC-2 Type II, ISO 27001, and HIPAA-compliant architecture with end-to-end data encryption, automated vulnerability scans, and strict data sovereignty.',
  },
  {
    icon: <Globe2 className="size-5" />,
    title: 'Ultra-Fast Global Edge Delivery',
    description:
      'Sub-15ms edge routing across 120+ global Points of Presence with automated image compression, smart caching, and multi-terabit DDoS mitigation.',
  },
  {
    icon: <Handshake className="size-5" />,
    title: 'Direct Access to Principal Engineers',
    description:
      'No junior intermediaries. You work directly with senior architects via dedicated Slack channels, transparent weekly sprints, and 100% intellectual property ownership.',
  },
]

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenContact,
  sectionNumber = '03',
}) => {
  const renderCardList = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex flex-col gap-5 pb-5">
      {VALUE_PROPS.map((prop, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="group rounded-[24px] border border-ink/[0.08] bg-white p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(7,8,10,0.18)] transition-transform duration-500 ease-premium hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-[#0052cb] transition-colors duration-500 group-hover:bg-[#0052cb] group-hover:text-white">
              {prop.icon}
            </div>
            <span className="size-1.5 rounded-full bg-ink/20" />
          </div>

          <div className="mt-8 font-bricolage text-2xl font-medium tracking-[-0.02em] text-ink">
            {prop.title}
          </div>
          <p className="mt-3 font-inter-tight text-sm md:text-base leading-relaxed text-neutral-600">
            {prop.description}
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-paper text-ink">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 md:px-6 pt-8 md:pt-12 pb-20 md:pb-28 md:grid-cols-12">
        {/* Ambient Radial Gradient matching CogniMedia */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[55%] bg-gradient-to-r from-paper via-paper/90 to-transparent md:block z-10" />

        {/* Left Headline Column */}
        <div className="relative z-20 md:col-span-6 lg:col-span-6">
          <SectionEyebrow number={sectionNumber} label="Enterprise Engineering Edge" tone="dark" />

          <h2 className="mt-8 font-bricolage text-5xl md:text-7xl font-medium leading-[0.98] tracking-[-0.03em] text-ink">
            Why You Choose Us
          </h2>

          <p className="mt-8 max-w-md font-inter-tight text-lg md:text-xl leading-relaxed text-neutral-600">
            Senior software architects, high-velocity delivery discipline, and automated multi-cloud edge infrastructure in one accountable partner.
          </p>

          <div className="mt-10 md:mt-14">
            <CtaPill onClick={onOpenContact} variant="dark">
              Take The first step with covision
            </CtaPill>
          </div>
        </div>

        {/* Right Vertical Infinite Marquee Column */}
        <div className="relative z-20 md:col-span-6 lg:col-start-8 lg:col-span-5">
          {/* Desktop Vertical Marquee */}
          <div className="hidden md:block h-[640px] overflow-hidden mask-fade-y">
            <div
              className="flex flex-col animate-marquee-y hover:[animation-play-state:paused]"
              style={{ '--marquee-duration': '32s' } as React.CSSProperties}
            >
              {renderCardList('track-1')}
              {renderCardList('track-2')}
            </div>
          </div>

          {/* Mobile Horizontal Marquee fallback */}
          <div className="md:hidden overflow-hidden mask-fade-x">
            <div
              className="flex w-max animate-marquee"
              style={{ '--marquee-duration': '30s' } as React.CSSProperties}
            >
              <div className="flex gap-4 pr-4">
                {VALUE_PROPS.map((prop, idx) => (
                  <div key={idx} className="w-[290px] shrink-0">
                    <div className="rounded-[24px] border border-ink/[0.08] bg-white p-6 shadow-md">
                      <div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-[#0052cb]">
                        {prop.icon}
                      </div>
                      <div className="mt-6 font-bricolage text-xl font-medium text-ink">
                        {prop.title}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600 font-inter-tight">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
