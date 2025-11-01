'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.socialLinks.email,
      href: `mailto:${personalInfo.socialLinks.email}`,
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.socialLinks.linkedin.replace('https://', ''),
      href: personalInfo.socialLinks.linkedin,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.socialLinks.github.replace('https://github.com/', ''),
      href: personalInfo.socialLinks.github,
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href || undefined}
                target={method.href ? '_blank' : undefined}
                rel={method.href ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100 ${
                  !method.href ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <method.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">
                    {method.label}
                  </div>
                  <div className="text-gray-800 font-medium">
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
