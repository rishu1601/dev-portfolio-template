'use client'

import { useState, useEffect, useMemo } from 'react'
import { Menu, X } from 'lucide-react'
import { 
  navigationConfig, 
  projects, 
  githubUsername,
  experiences,
  personalInfo 
} from '@/data/personalInfo'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set initial scrolled state based on current scroll position
    setScrolled(window.scrollY > 50)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Dynamically generate navigation links based on available data
  const navLinks = useMemo(() => {
    const links: { name: string; href: string }[] = []
    
    navigationConfig.order.forEach((section) => {
      // Check if section should be shown
      let shouldShow = true
      
      switch (section) {
        case 'projects':
          shouldShow = projects && projects.length > 0
          break
        case 'github':
          shouldShow = !!githubUsername
          break
        case 'experience':
          shouldShow = experiences && experiences.length > 0
          break
        case 'home':
        case 'about':
        case 'skills':
        case 'contact':
          // Always show these sections
          shouldShow = true
          break
        default:
          shouldShow = true
      }
      
      if (shouldShow) {
        links.push({
          name: navigationConfig.labels[section as keyof typeof navigationConfig.labels],
          href: `#${section}`,
        })
      }
    })
    
    return links
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !mounted
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a
            href="#home"
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            {personalInfo.name.split(' ')[0]}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

