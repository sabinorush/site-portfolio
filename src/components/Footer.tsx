import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <p>
        {t('Desenvolvido por', 'Developed by')}{' '}
        <strong>Gustavo Sabino</strong> &mdash;{' '}
        <a href="https://www.linkedin.com/in/gustavosabino/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' '}&middot;{' '}
        <a href="https://github.com/sabinorush" target="_blank" rel="noopener noreferrer">GitHub</a>
        {' '}&mdash; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
