import { useState, type FormEvent } from 'react'
import { useLang } from '../context/LanguageContext'
import { BlurFade } from '@/components/ui/blur-fade'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import { RetroGrid } from '@/components/ui/retro-grid'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Contact() {
  const { t } = useLang()
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
      case 'success': return t('Mensagem enviada!', 'Message sent!')
      case 'error': return t('Erro ao enviar. Tente novamente.', 'Error. Please try again.')
      default: return t('Enviar Mensagem', 'Send Message')
    }
  }

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <RetroGrid
        className="opacity-30"
        darkLineColor="#059669"
        lightLineColor="#059669"
        angle={65}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('Contato', 'Contact')}
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            {t(
              'Vamos conversar! Estou disponível para oportunidades e projetos.',
              "Let's talk! I'm available for opportunities and projects."
            )}
          </p>
        </BlurFade>

        <div className="mt-12 max-w-xl mx-auto">
          <BlurFade delay={0.2} inView>
            <NeonGradientCard
              neonColors={{ firstColor: '#059669', secondColor: '#14B8A6' }}
              borderSize={1}
              borderRadius={16}
            >
              <form
                action="https://formspree.io/f/SEU_ID_AQUI"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {t('Nome completo', 'Full name')}
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('Seu nome', 'Your name')}
                    className="bg-background/50 border-border/50 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {t('Seu e-mail', 'Your email')}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('seuemail@exemplo.com', 'youremail@example.com')}
                    className="bg-background/50 border-border/50 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {t('Mensagem', 'Message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t('Escreva sua mensagem aqui...', 'Write your message here...')}
                    className="bg-background/50 border-border/50 focus:border-emerald-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-all disabled:opacity-50 ${
                    status === 'success'
                      ? 'bg-emerald-600/30 text-emerald-300'
                      : status === 'error'
                        ? 'bg-red-600/30 text-red-300'
                        : 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25'
                  }`}
                >
                  {btnText()}
                </button>
              </form>
            </NeonGradientCard>
          </BlurFade>
        </div>

      </div>
    </section>
  )
}
