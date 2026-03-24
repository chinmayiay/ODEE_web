import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { LanguageToggle } from '../common/LanguageToggle'
import { OdeeLogo } from '../common/OdeeLogo'
import { PageContainer } from './PageContainer'

export function Navbar() {
  const { t, copyText } = useLanguage()
  const [open, setOpen] = useState(false)
  const nav = [
    { to: '/', label: t('home') },
    { to: '/features', label: t('features') },
    { to: '/how-it-works', label: t('howItWorks') },
    { to: '/parents', label: t('parents') },
    { to: '/csr', label: t('csr') },
    { to: '/auth', label: t('auth') },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <PageContainer>
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
            <OdeeLogo size={30} />
            <span>{copyText.brandName}</span>
          </NavLink>
          <nav className="hidden items-center gap-5 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-blue-700 ${isActive ? 'text-blue-800' : 'text-slate-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageToggle />
          </nav>
          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="space-y-3 pb-4 md:hidden">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className="block rounded-xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                {item.label}
              </NavLink>
            ))}
            <LanguageToggle />
          </div>
        )}
      </PageContainer>
    </header>
  )
}
