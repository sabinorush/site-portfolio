import { useLang } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Hero() {
  const { t } = useLang()
  const textRef = useFadeIn()
  const avatarRef = useFadeIn()

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text fade-in" ref={textRef}>
            <span className="hero-greeting">
              {t('Olá, eu sou', "Hi, I'm")}
            </span>
            <h1 className="hero-name grad-text">Gustavo Sabino</h1>
            <p className="hero-role">Full Stack Developer</p>
            <p className="hero-bio">
              {t(
                'Iniciei minha jornada na programação em 2020 pela Faculdade de Tecnologia Impacta, onde me apaixonei pelo mundo do desenvolvimento. Desde então, tenho me especializado em Back-end com Node.js, NestJS e TypeScript, sempre buscando as melhores práticas como SOLID, Clean Code e Domain-Driven Design.',
                'I started my programming journey in 2020 at Impacta College of Technology, where I fell in love with the world of development. Since then, I have specialized in Back-end with Node.js, NestJS and TypeScript, always pursuing best practices such as SOLID, Clean Code and Domain-Driven Design.'
              )}
            </p>
            <div className="hero-cta">
              <a href="#projetos" className="btn btn-primary">
                {t('Ver Projetos', 'See Projects')}
              </a>
              <a href="#contato" className="btn btn-outline">
                {t('Contato', 'Contact')}
              </a>
            </div>
            <p className="hero-quote">Patience is a key element of success</p>
          </div>
          <div className="avatar-wrap fade-in" ref={avatarRef}>
            <div className="avatar-ring">
              <img
                src="https://avatars.githubusercontent.com/u/57204754?v=4"
                alt="Gustavo Sabino"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
