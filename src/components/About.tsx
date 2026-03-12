import { useLang } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { hardSkills, softSkills, courses } from '../data/content'

export default function About() {
  const { lang, t } = useLang()
  const titleRef = useFadeIn()
  const bioRef = useFadeIn()
  const skillsRef = useFadeIn()
  const coursesRef = useFadeIn()

  return (
    <section id="sobre-mim" className="section">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <h2 className="section-title grad-text">{t('Sobre Mim', 'About Me')}</h2>
          <p className="section-subtitle">
            {t(
              'Minha trajetória, habilidades e o que me motiva.',
              'My journey, skills, and what drives me.'
            )}
          </p>
        </div>

        <div className="about-grid">
          <div className="fade-in" ref={bioRef}>
            <p className="about-bio">
              {t(
                'Desenvolvedor Full Stack com foco em Back-end, apaixonado por criar soluções robustas e escaláveis. Comecei minha jornada em 2020 na Faculdade de Tecnologia Impacta e desde então venho evoluindo continuamente, estudando as melhores arquiteturas e padrões do mercado. Tenho experiência com Node.js, NestJS, TypeScript e bancos de dados como PostgreSQL. Acredito no poder do código limpo, testes e boas práticas para construir software que dura.',
                "Full Stack Developer focused on Back-end, passionate about building robust and scalable solutions. I started my journey in 2020 at Impacta College of Technology and since then I have been continuously evolving, studying the best architectures and market patterns. I have experience with Node.js, NestJS, TypeScript and databases like PostgreSQL. I believe in the power of clean code, testing and best practices to build software that lasts."
              )}
            </p>

            <p className="skills-title">{t('Soft Skills', 'Soft Skills')}</p>
            <div>
              {softSkills.map(skill => (
                <div className="soft-skill" key={skill.pt}>
                  {lang === 'pt' ? skill.pt : skill.en}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" ref={skillsRef}>
            <p className="skills-title">{t('Hard Skills', 'Hard Skills')}</p>
            <div className="skills-wrap">
              {hardSkills.map(skill => (
                <span className="skill-badge" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="courses-section fade-in" ref={coursesRef}>
          <h3 className="section-title" style={{ fontSize: '1.6rem' }}>
            <span className="grad-text">
              {t('Cursos & Certificações', 'Courses & Certifications')}
            </span>
          </h3>
          <div className="courses-grid">
            {courses.map((course, i) => (
              <div className="course-card" key={i}>
                <div className="course-icon">🎓</div>
                <div className="course-info">
                  <p className="course-name">
                    {lang === 'pt' ? course.name.pt : course.name.en}
                  </p>
                  <p className="course-org">{course.org}</p>
                  <p className="course-year">{course.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
