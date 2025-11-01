'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { experiences } from '@/data/personalInfo'

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50"
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((companyExp, companyIndex) => {
              // Calculate total period span (earliest start to latest end)
              const firstPosition = companyExp.positions[0]
              const lastPosition = companyExp.positions[companyExp.positions.length - 1]
              
              let totalPeriod = firstPosition.period
              if (companyExp.positions.length > 1) {
                const lastStartDate = lastPosition.period.split(' - ')[0]
                const firstEndDate = firstPosition.period.split(' - ')[1] || 'Present'
                totalPeriod = `${lastStartDate} - ${firstEndDate}`
              }

              const defaultLogoStyle = 'w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden' 
              const logoStyling = companyExp.logo ? '' : defaultLogoStyle
              
              return (
                <motion.div
                  key={companyIndex}
                  initial={{ opacity: 0, x: companyIndex % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
                  className={`relative flex items-start ${
                    companyIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      companyIndex % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      {/* Company Header */}
                      <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-200">
                        <div className={logoStyling}>
                          {companyExp.logo ? (
                            <Image
                              src={companyExp.logo}
                              alt={companyExp.company}
                              width={48}
                              height={48}
                              className="object-contain p-1"
                            />
                          ) : (
                            <Building2 className="text-white" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">
                            {companyExp.company}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{totalPeriod}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{companyExp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Positions within company */}
                      <div className="space-y-6">
                        {companyExp.positions.map((position, positionIdx) => (
                          <div key={positionIdx} className="border-l-2 border-primary-200 pl-4">
                            <div className="mb-3">
                              <h4 className="text-lg font-bold text-gray-800 mb-1">
                                {position.title}
                              </h4>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Calendar size={14} />
                                <span>{position.period}</span>
                              </div>
                            </div>

                            {position.description && (
                              <div className="prose prose-sm max-w-none">
                                <ReactMarkdown
                                  components={{
                                    h4: ({ node, ...props }) => (
                                      <h4 className="text-base font-bold text-gray-800 mb-2 mt-4 first:mt-0" {...props} />
                                    ),
                                    ul: ({ node, ...props }) => (
                                      <ul className="list-none space-y-2" {...props} />
                                    ),
                                    li: ({ node, ...props }) => (
                                      <li className="flex items-start gap-2 text-gray-600" {...props}>
                                        <span className="text-primary-500 mt-1 flex-shrink-0">▹</span>
                                        <span className="flex-1">{props.children}</span>
                                      </li>
                                    ),
                                    p: ({ node, ...props }) => (
                                      <p className="text-gray-600 mb-2" {...props} />
                                    ),
                                  }}
                                >
                                  {position.description}
                                </ReactMarkdown>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
