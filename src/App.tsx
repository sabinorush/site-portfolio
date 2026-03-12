import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}
