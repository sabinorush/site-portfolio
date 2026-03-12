import { LanguageProvider } from './context/LanguageContext'
import { TooltipProvider } from '@/components/ui/tooltip'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </TooltipProvider>
    </LanguageProvider>
  )
}
