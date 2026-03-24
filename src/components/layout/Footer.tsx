import { Globe, Mail, MessageCircle, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { LanguageToggle } from '../common/LanguageToggle'
import { OdeeLogo } from '../common/OdeeLogo'
import { PageContainer } from './PageContainer'

export function Footer() {
  const { copyText, t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-50 py-8">
      <PageContainer>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <OdeeLogo size={34} />
              <h2 className="text-lg font-bold text-slate-900">{copyText.brandName}</h2>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Globe size={18} />
              <MessageCircle size={18} />
              <Phone size={18} />
              <Mail size={18} />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/features">{t('features')}</NavLink>
            <NavLink to="/parents">{t('parents')}</NavLink>
            <NavLink to="/csr">{t('csr')}</NavLink>
            <NavLink to="/auth">{t('auth')}</NavLink>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              {year} ODEE. {copyText.footer.rights}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">{copyText.footer.language}</span>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}
