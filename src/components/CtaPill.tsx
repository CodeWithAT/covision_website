import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface CtaPillProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'brand' | 'glass'
  className?: string
  icon?: React.ReactNode
}

export const CtaPill: React.FC<CtaPillProps> = ({
  href,
  onClick,
  children,
  variant = 'dark',
  className = '',
  icon,
}) => {
  const variantStyles = {
    dark: 'bg-ink text-white hover:bg-[#0052cb]',
    light: 'bg-white text-ink hover:bg-neutral-100 shadow-sm',
    brand: 'bg-[#0052cb] text-white hover:bg-[#003da8] shadow-md shadow-blue-600/20',
    glass: 'bg-white/15 text-white backdrop-blur-xl hover:bg-white/25 border border-white/20',
  }

  const iconContainerStyles = {
    dark: 'bg-white text-ink',
    light: 'bg-ink text-white',
    brand: 'bg-white text-[#0052cb]',
    glass: 'bg-white text-ink',
  }

  const baseStyles = `group relative inline-flex h-14 items-center gap-4 overflow-hidden rounded-full pl-7 pr-2 font-inter-tight text-[15px] font-semibold tracking-tight transition-all duration-500 ease-premium cursor-pointer ${variantStyles[variant]} ${className}`

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`relative grid size-10 place-items-center overflow-hidden rounded-full transition-transform duration-500 ease-premium shrink-0 ${iconContainerStyles[variant]}`}
      >
        {icon ? (
          icon
        ) : (
          <>
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-premium group-hover:translate-x-6 group-hover:-translate-y-6" />
            <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-premium group-hover:translate-x-0 group-hover:translate-y-0" />
          </>
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} type="button" className={baseStyles}>
      {content}
    </button>
  )
}
