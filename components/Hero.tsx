'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Download, PenLine } from 'lucide-react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { personalInfo } from '@/data/personalInfo'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ✅ Build only available social links dynamically
  // Add newer social links mapping here as required
  const s = personalInfo.socialLinks
  const socialLinks = [
    s?.github && { icon: Github, href: s.github, label: 'GitHub' },
    s?.linkedin && { icon: Linkedin, href: s.linkedin, label: 'LinkedIn' },
    s?.blog && { icon: PenLine, href: s.blog, label: 'Blog' },
    s?.email && { icon: Mail, href: `mailto:${s.email}`, label: 'Email' },
  ].filter(Boolean) as { icon: any; href: string; label: string }[]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-20 md:pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto prose prose-lg max-w-none"
          >
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p className="text-gray-500 mb-3" {...props} />
                ),
              }}
            >
              {personalInfo.bio}
            </ReactMarkdown>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href={`/${personalInfo.resume.filename}`}
              download
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* ✅ Conditionally rendered social links */}
          {socialLinks.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-6 mb-12"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-gray-700 hover:text-primary-600"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="mt-20">
            <a
              href="#about"
              className="inline-block animate-bounce text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Scroll to about"
            >
              <ArrowDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
