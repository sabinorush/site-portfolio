import { useLang } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { projects } from '../data/content'

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const { lang, t } = useLang()
  const ref = useFadeIn()

  return (
    <div className="project-card fade-in" ref={ref}>
      <div className="project-icon">{project.icon}</div>
      <p className="project-name">{project.name}</p>
      <p className="project-desc">
        {lang === 'pt' ? project.descPt : project.descEn}
      </p>
      <div className="tech-badges">
        {project.stack.map(tech => (
          <span className="badge" key={tech}>{tech}</span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label={`${t('Ver repositório', 'View repository')} ${project.name}`}
      >
        {t('Ver no GitHub', 'View on GitHub')}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const titleRef = useFadeIn()

  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <h2 className="section-title grad-text">{t('Projetos', 'Projects')}</h2>
          <p className="section-subtitle">
            {t(
              'Alguns dos projetos que desenvolvi, explorando arquiteturas e boas práticas.',
              'Some of the projects I developed, exploring architectures and best practices.'
            )}
          </p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
