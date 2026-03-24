import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { copy, type Language } from '../content/copy'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: keyof typeof copy.en.nav) => string
  copyText: typeof copy.en
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => copy[language].nav[key],
      copyText: copy[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
