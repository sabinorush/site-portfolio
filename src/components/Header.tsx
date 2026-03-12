import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Menu } from 'lucide-react'

export default function Header() {
  const { lang, toggle, t } = useLang()
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#inicio', label: t('Início', 'Home') },
    { href: '#projetos', label: t('Projetos', 'Projects') },
    { href: '#sobre-mim', label: t('Sobre Mim', 'About Me') },
    { href: '#contato', label: t('Contato', 'Contact') },
  ]

  return (
    <>
      <ScrollProgress className="h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
      <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#inicio"
            className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
          >
            GS
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={toggle}
              className="border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-400"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent className="bg-background/95 backdrop-blur-xl border-border">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggle}
                  className="w-fit border-emerald-500/30"
                >
                  {lang === 'pt' ? 'EN' : 'PT'}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
