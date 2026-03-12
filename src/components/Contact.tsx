import { useState, type FormEvent } from 'react'
import { useLang } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const { t } = useLang()
  const titleRef = useFadeIn()
  const infoRef = useFadeIn()
  const formRef = useFadeIn()

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnText = () => {
    switch (status) {
      case 'sending': return t('Enviando...', 'Sending...')
      case 'success': return t('✓ Mensagem enviada!', '✓ Message sent!')
      case 'error': return t('Erro ao enviar. Tente novamente.', 'Error. Please try again.')
      default: return t('Enviar Mensagem', 'Send Message')
    }
  }

  const btnStyle = () => {
    if (status === 'success') return { background: 'linear-gradient(135deg, #059669, #0891B2)' }
    if (status === 'error') return { background: 'linear-gradient(135deg, #DC2626, #9333EA)' }
    return undefined
  }

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <h2 className="section-title grad-text">{t('Contato', 'Contact')}</h2>
          <p className="section-subtitle">
            {t(
              'Vamos conversar! Estou disponível para oportunidades e projetos.',
              "Let's talk! I'm available for opportunities and projects."
            )}
          </p>
        </div>

        <div className="contact-grid">
          <div className="fade-in" ref={infoRef}>
            <div className="contact-info">
              <h3>{t('Entre em contato', 'Get in touch')}</h3>
              <p>
                {t(
                  'Seja para uma oportunidade de trabalho, colaboração ou apenas para trocar uma ideia — fique à vontade para me chamar.',
                  'Whether for a job opportunity, collaboration or just to exchange ideas — feel free to reach out.'
                )}
              </p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/gustavosabino/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#60A5FA' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/sabinorush" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#A78BFA' }}>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a href="mailto:gu.sabino@hotmail.com" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#22D3EE' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                gu.sabino@hotmail.com
              </a>
            </div>
          </div>

          <div className="fade-in" ref={formRef}>
            {/* SUBSTITUIR: troque SEU_ID_AQUI pelo seu endpoint do Formspree (https://formspree.io) */}
            <form
              className="contact-form"
              action="https://formspree.io/f/SEU_ID_AQUI"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">{t('Nome completo', 'Full name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('Seu nome', 'Your name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('Seu e-mail (obrigatório)', 'Your email (required)')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t('seuemail@exemplo.com', 'youremail@example.com')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('Mensagem', 'Message')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t('Escreva sua mensagem aqui...', 'Write your message here...')}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'sending'}
                style={btnStyle()}
              >
                {btnText()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
