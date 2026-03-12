import { useLang } from '../context/LanguageContext'
import { BlurFade } from '@/components/ui/blur-fade'
import { Particles } from '@/components/ui/particles'
import { BorderBeam } from '@/components/ui/border-beam'
import { HyperText } from '@/components/ui/hyper-text'
import { ArrowRight } from 'lucide-react'
import { AuroraText } from '@/components/ui/aurora-text'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#059669"
        size={0.5}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <BlurFade delay={0.1} inView>
              <span className="text-emerald-400 text-lg font-medium tracking-wide">
                {t('Olá, eu sou', "Hi, I'm")}
              </span>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <h1 className="mt-3 text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                <AuroraText
                  colors={['#34D399', '#14B8A6', '#059669', '#2DD4BF', '#10B981']}
                  speed={1.5}
                >
                  Gustavo Sabino
                </AuroraText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="mt-4">
                <HyperText
                  className="text-xl md:text-2xl text-muted-foreground font-semibold"
                  startOnView
                  animateOnHover={false}
                  as="span"
                >
                  Full Stack Developer
                </HyperText>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t(
                  'Iniciei minha jornada na programação em 2020 pela Faculdade de Tecnologia Impacta, onde me apaixonei pelo mundo do desenvolvimento. Desde então, tenho me especializado em Back-end com Node.js, NestJS e TypeScript, sempre buscando as melhores práticas como SOLID, Clean Code e Domain-Driven Design.',
                  'I started my programming journey in 2020 at Impacta College of Technology, where I fell in love with the world of development. Since then, I have specialized in Back-end with Node.js, NestJS and TypeScript, always pursuing best practices such as SOLID, Clean Code and Domain-Driven Design.'
                )}
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#projetos"
                  className="group inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {t('Ver Projetos', 'See Projects')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-emerald-400 hover:text-emerald-400"
                >
                  {t('Contato', 'Contact')}
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <p className="mt-10 text-sm italic text-muted-foreground/60">
                "Patience is a key element of success"
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView>
            <div className="relative">
              <div className="relative h-60 w-60 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-emerald-500/20">
                <img
                  src="https://avatars.githubusercontent.com/u/57204754?v=4"
                  alt="Gustavo Sabino"
                  className="h-full w-full object-cover"
                />
                <BorderBeam
                  size={80}
                  duration={8}
                  colorFrom="#059669"
                  colorTo="#14B8A6"
                  borderWidth={2}
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-emerald-500/5 blur-xl -z-10" />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
