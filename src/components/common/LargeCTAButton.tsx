import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

export function LargeCTAButton({
  children,
  variant = 'primary',
  withIcon = false,
}: {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
}) {
  const classes =
    variant === 'primary'
      ? 'bg-blue-800 text-white hover:bg-blue-700 active:scale-[0.98] shadow-[0_10px_25px_rgba(30,58,138,0.24)]'
      : 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-50 active:scale-[0.98]'

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition sm:text-base ${classes}`}
    >
      {children}
      {withIcon ? <ArrowRight size={16} /> : null}
    </button>
  )
}
