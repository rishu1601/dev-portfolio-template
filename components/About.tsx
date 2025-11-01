'use client'

import { motion } from 'framer-motion'
import { User, Code, Lightbulb } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Scalable Systems',
      description: 'Designing high-throughput, low-latency distributed systems (microservices, messaging, data stores).',
    },
    {
      icon: Lightbulb,
      title: 'Performance & Reliability',
      description: 'Optimizing delivery engines, migrations to managed services, and observability to reduce incidents and latency.',
    },
    {
      icon: User,
      title: 'Mentoring & Collaboration',
      description: 'Leading cross-functional work, mentoring engineers, and building reusable frameworks adopted by multiple teams.',
    },
  ]

  return (
    <section
      id="about"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-sm text-gray-500">
                Core strengths: system design, distributed systems, observability, and building resilient microservices for high throughput. Experienced in Java, Spring Boot, Reactive Java, Apache Pulsar, Cassandra and production migrations to managed services.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Experience', value: '6+ Years' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl p-6 text-center text-white shadow-lg transform hover:scale-105 transition-transform"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
