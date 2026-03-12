import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Header() {
  const { lang, toggle, t } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">GS</a>
        <nav aria-label="Main navigation">
          <a href="#inicio">{t('Início', 'Home')}</a>
          <a href="#projetos">{t('Projetos', 'Projects')}</a>
          <a href="#sobre-mim">{t('Sobre Mim', 'About Me')}</a>
          <a href="#contato">{t('Contato', 'Contact')}</a>
          <button className="lang-btn" onClick={toggle} aria-label="Toggle language">
            {lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
        </nav>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>{t('Início', 'Home')}</a>
        <a href="#projetos" onClick={closeMenu}>{t('Projetos', 'Projects')}</a>
        <a href="#sobre-mim" onClick={closeMenu}>{t('Sobre Mim', 'About Me')}</a>
        <a href="#contato" onClick={closeMenu}>{t('Contato', 'Contact')}</a>
        <button className="lang-btn" onClick={toggle} aria-label="Toggle language">
          {lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>
      </div>
    </>
  )
}
