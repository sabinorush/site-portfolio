import { useLang } from '../context/LanguageContext'
import { projects } from '../data/content'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/ui/dot-pattern'
import { Layers, Zap, Rocket, Target, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layers,
  Zap,
  Rocket,
  Target,
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const { lang, t } = useLang()
  const Icon = iconMap[project.icon] ?? Layers

  return (
    <BlurFade delay={0.1 + index * 0.1} inView>
      <MagicCard
        className="rounded-xl bg-card"
        gradientFrom="#059669"
        gradientTo="#14B8A6"
        gradientColor="rgba(5, 150, 105, 0.08)"
      >
        <div className="relative p-6 flex flex-col gap-4 min-h-[280px]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <Icon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {lang === 'pt' ? project.descPt : project.descEn}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            aria-label={`${t('Ver repositório', 'View repository')} ${project.name}`}
          >
            {t('Ver no GitHub', 'View on GitHub')}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <BorderBeam
            size={60}
            duration={10}
            delay={index * 2}
            colorFrom="#059669"
            colorTo="#14B8A6"
            borderWidth={1}
          />
        </div>
      </MagicCard>
    </BlurFade>
  )
}

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      <DotPattern className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('Projetos', 'Projects')}
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            {t(
              'Alguns dos projetos que desenvolvi, explorando arquiteturas e boas práticas.',
              'Some of the projects I developed, exploring architectures and best practices.'
            )}
          </p>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
