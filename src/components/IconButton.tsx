import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  label: string
  variant?: 'dark' | 'soft' | 'plain'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
}

const variants = {
  dark: 'bg-ink text-white',
  soft: 'border border-white/70 bg-white/16 text-ink',
  plain: 'bg-transparent text-ink',
}

export function IconButton({ icon, label, variant = 'soft', size = 'md', className, ...buttonProps }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center rounded-full transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink active:scale-95',
        sizes[size],
        variants[variant],
        className,
      )}
      {...buttonProps}
    >
      {icon}
    </button>
  )
}
