import { useLang } from '../context/LanguageContext'
import { Separator } from '@/components/ui/separator'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Linkedin, Github, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavosabino/', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/sabinorush', icon: Github },
  { name: 'Email', href: 'mailto:gu.sabino@hotmail.com', icon: Mail },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="pb-8 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <Separator className="mb-8 opacity-30" />
        <div className="flex flex-col items-center gap-6">
          <Dock
            iconSize={32}
            iconMagnification={48}
            iconDistance={100}
            className="bg-card/30 border-border/30"
          >
            {socialLinks.map(link => (
              <DockIcon key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-muted-foreground hover:text-emerald-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </DockIcon>
            ))}
          </Dock>
          <p className="text-sm text-muted-foreground/60">
            {t('Desenvolvido por', 'Developed by')}{' '}
            <span className="font-semibold text-foreground/80">Gustavo Sabino</span>
            {' '}&mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
