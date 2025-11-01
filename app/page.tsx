import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import GithubProfile from '@/components/GithubProfile'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  projects, 
  githubUsername, 
  experiences,
  navigationConfig 
} from '@/data/personalInfo'

export default function Home() {
  // Helper function to check if a section should be shown
  const shouldShowSection = (section: string): boolean => {
    switch (section) {
      case 'projects':
        return projects !== undefined && projects.length > 0
      case 'github':
        return !!githubUsername
      case 'experience':
        return experiences !== undefined && experiences.length > 0
      case 'home':
      case 'about':
      case 'skills':
      case 'contact':
        return true
      default:
        return true
    }
  }

  // Get sections in order
  const sections = navigationConfig.order.filter(shouldShowSection)

  return (
    <main className="min-h-screen">
      <Navigation />
      {sections.includes('home') && <Hero />}
      {sections.includes('about') && <About />}
      {sections.includes('experience') && <Experience />}
      {sections.includes('projects') && <Projects />}
      {sections.includes('skills') && <Skills />}
      {sections.includes('github') && <GithubProfile />}
      {sections.includes('contact') && <Contact />}
      <Footer />
    </main>
  )
}

