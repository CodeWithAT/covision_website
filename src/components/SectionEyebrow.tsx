import React from 'react'

interface SectionEyebrowProps {
  number: string
  label: string
  tone?: 'light' | 'dark'
  className?: string
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  number,
  label,
  tone = 'dark',
  className = '',
}) => {
  const isDarkTone = tone === 'dark' // when background is light, text is dark/neutral

  return (
    <div
      className={`flex items-center gap-4 font-inter-tight text-xs md:text-[13px] uppercase tracking-[0.22em] ${
        isDarkTone ? 'text-neutral-500' : 'text-white/60'
      } ${className}`}
    >
      <span className="tabular-nums text-[#0052cb] font-semibold">({number})</span>
      <span
        className={`h-px w-10 md:w-16 origin-left ${
          isDarkTone ? 'bg-neutral-300' : 'bg-white/30'
        }`}
      />
      <span className="font-medium tracking-[0.2em]">{label}</span>
    </div>
  )
}
