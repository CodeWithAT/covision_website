import React from 'react'

interface MarqueePillar {
  title: string
  tag: string
  accent?: boolean
}

export const MarqueeDivider: React.FC = () => {
  const pillars: MarqueePillar[] = [
    { title: 'LIVING TECHNOLOGY', tag: 'Core Philosophy', accent: true },
    { title: 'ENTERPRISE SOFTWARE', tag: 'Custom & Cloud', accent: false },
    { title: '360° ECOMMERCE SUITE', tag: 'Omnichannel & Headless', accent: true },
    { title: 'AI & MULTIMEDIA CONVERGENCE', tag: 'Autonomous Intelligence', accent: false },
    { title: 'PROPRIETARY SAAS SUITE', tag: 'Enterprise Cloud', accent: true },
    { title: 'COVISION LATTICE™', tag: 'Fluid 60fps UX', accent: false },
    { title: 'ZERO-DOWNTIME MIGRATION', tag: '100% SEO Preservation', accent: true },
    { title: 'CLOUD & INFRASTRUCTURE', tag: 'AWS · Azure · GCP', accent: false },
  ]

  const renderGroup = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex shrink-0 items-center">
      {pillars.map((item, idx) => (
        <div key={`${keyPrefix}-${idx}`} className="flex items-center px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span
              className={`font-bricolage text-xl sm:text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap transition-colors ${
                item.accent ? 'text-slate-900' : 'text-slate-700'
              }`}
            >
              {item.title}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-blue-50 text-[#0052cb] border border-blue-200/60 whitespace-nowrap">
              {item.tag}
            </span>
          </div>
          <span className="ml-6 sm:ml-10 size-2 rotate-45 bg-[#0052cb] shrink-0 opacity-80" />
        </div>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-ink-line bg-[#fcfcfd] py-4 sm:py-5 text-ink select-none group"
    >
      <div className="flex overflow-hidden mask-fade-x">
        <div
          className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ '--marquee-duration': '55s' } as React.CSSProperties}
        >
          {renderGroup('group-1')}
          {renderGroup('group-2')}
        </div>
      </div>
    </div>
  )
}
