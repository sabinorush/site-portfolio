import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'pt' | 'en'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  t: (pt: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  const toggle = () => setLang(prev => (prev === 'pt' ? 'en' : 'pt'))
  const t = (pt: string, en: string) => (lang === 'pt' ? pt : en)

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
