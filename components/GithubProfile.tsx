'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, MapPin, Link2 as LinkIcon, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { githubUsername } from '@/data/personalInfo'

interface GitHubProfile {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  location: string
  blog: string
  public_repos: number
  followers: number
  following: number
}

const GithubProfile = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`)
        if (response.ok) {
          const data = await response.json()
          setProfile(data)
        } else {
          console.error('Failed to fetch GitHub profile:', response.status)
        }
      } catch (error) {
        console.error('Error fetching GitHub profile:', error)
      } finally {
        setLoading(false)
      }
    }

    if (githubUsername) {
      fetchProfile()
    } else {
      setLoading(false)
    }
  }, [githubUsername])

  if (loading) {
    return (
      <section
        id="github"
        className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!profile) {
    return (
      <section
        id="github"
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
              GitHub <span className="gradient-text">Profile</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <p className="text-gray-600 mb-4">
              Please update your GitHub username in <code className="bg-gray-100 px-2 py-1 rounded">data/personalInfo.ts</code> to view your profile.
            </p>
            {githubUsername && (
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="github"
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
            GitHub <span className="gradient-text">Profile</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Check out my code, contributions, and open-source projects on GitHub
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={profile.avatar_url}
                  alt={profile.name || profile.login}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">
                    {profile.name || profile.login}
                  </h3>
                  <p className="text-primary-100 mb-4 text-lg">@{profile.login}</p>
                  {profile.bio && (
                    <p className="text-white/90 mb-4">{profile.bio}</p>
                  )}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    {profile.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{profile.location}</span>
                      </div>
                    )}
                    {profile.blog && (
                      <a
                        href={profile.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <LinkIcon size={16} />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-8 bg-gray-50">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {profile.public_repos}
                  </div>
                  <div className="text-sm text-gray-600">Repositories</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {profile.followers}
                  </div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-pink-600 mb-1">
                    {profile.following}
                  </div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={20} />
                  <span>Explore my work on GitHub</span>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  <Github size={20} />
                  View Full Profile
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Contributions Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Contribution Activity
            </h4>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react&area=true&hide_border=true`}
              alt="GitHub Contributions Graph"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GithubProfile
