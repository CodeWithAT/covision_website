import React from 'react'

export const MarqueeDivider: React.FC = () => {
  const items = [
    { text: 'Living Technology.', active: true },
    { text: 'Cognitive Architecture.', active: false },
    { text: '360° eCommerce.', active: true },
    { text: 'Resilient Scale.', active: false },
    { text: 'Anycast Edge Velocity.', active: true },
    { text: 'Zero-Trust Security.', active: false },
  ]

  const renderGroup = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex shrink-0 items-center">
      {items.map((item, idx) => (
        <span key={`${keyPrefix}-${idx}`} className="flex items-center">
          <span
            className={`px-6 sm:px-10 md:px-12 font-bricolage text-2xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] ${
              item.active ? 'text-ink' : 'text-neutral-400'
            }`}
          >
            {item.text}
          </span>
          <span className="size-2 shrink-0 rounded-full bg-[#0052cb]" />
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border-b border-ink-line bg-paper py-5 sm:py-7 md:py-8 text-ink select-none"
    >
      <div className="flex overflow-hidden mask-fade-x">
        <div
          className="flex w-max shrink-0 animate-marquee"
          style={{ '--marquee-duration': '45s' } as React.CSSProperties}
        >
          {renderGroup('group-1')}
          {renderGroup('group-2')}
        </div>
      </div>
    </div>
  )
}
