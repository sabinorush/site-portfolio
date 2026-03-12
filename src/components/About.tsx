import { useLang } from '../context/LanguageContext'
import { hardSkills, courses, stats } from '../data/content'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export default function About() {
  const { lang, t } = useLang()

  return (
    <section id="sobre-mim" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('Sobre Mim', 'About Me')}
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            {t(
              'Minha trajetória, habilidades e o que me motiva.',
              'My journey, skills, and what drives me.'
            )}
          </p>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.2} inView>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-emerald-400">
                  <NumberTicker value={stat.value} delay={0.3 + i * 0.2} />
                  <span>+</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {lang === 'pt' ? stat.labelPt : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Bio + Hard Skills */}
        <div className="mt-16 max-w-3xl">
          <BlurFade delay={0.3} inView>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Desenvolvedor Full Stack com foco em Back-end, apaixonado por criar soluções robustas e escaláveis. Comecei minha jornada em 2020 na Faculdade de Tecnologia Impacta e desde então venho evoluindo continuamente, estudando as melhores arquiteturas e padrões do mercado. Tenho experiência com Node.js, NestJS, TypeScript e bancos de dados como PostgreSQL. Acredito no poder do código limpo, testes e boas práticas para construir software que dura.',
                "Full Stack Developer focused on Back-end, passionate about building robust and scalable solutions. I started my journey in 2020 at Impacta College of Technology and since then I have been continuously evolving, studying the best architectures and market patterns. I have experience with Node.js, NestJS, TypeScript and databases like PostgreSQL. I believe in the power of clean code, testing and best practices to build software that lasts."
              )}
            </p>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <div className="mt-6 flex flex-wrap gap-2">
              {hardSkills.map(skill => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </BlurFade>

        </div>

        {/* Courses */}
        <BlurFade delay={0.5} inView>
          <div className="mt-16">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {t('Cursos & Certificações', 'Courses & Certifications')}
              </span>
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, i) => (
                <Card key={i} className="bg-card border-border/50">
                  <CardContent className="flex items-start gap-3 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                      <GraduationCap className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        {lang === 'pt' ? course.name.pt : course.name.en}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{course.org}</p>
                      <p className="text-xs text-muted-foreground/60">{course.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
