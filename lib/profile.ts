// Typed accessor for config/profile.json — the single source of truth for
// portfolio content. Generators (CLI/agent) should only ever write to that
// JSON file; this module is what components import.
import profileData from '@/config/profile.json'

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  blog: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  socialLinks: SocialLinks
  location: string
  resume: {
    filename: string
    displayName: string
  }
}

export interface AboutStat {
  label: string
  value: string
}

export interface AboutHighlight {
  icon: string
  title: string
  description: string
}

export interface AboutInfo {
  coreStrengths: string
  stats: AboutStat[]
  highlights: AboutHighlight[]
}

/** Employment / education date range. Use `end: 'Present'` for ongoing roles. */
export interface Period {
  start: string
  end: string
}

export interface Position {
  title: string
  period: Period
  description?: string
}

export interface Experience {
  company: string
  logo?: string | null
  location: string
  positions: Position[]
}

export interface Skills {
  frontend: string[]
  backend: string[]
  ai: string[]
  tools: string[]
}

export interface Education {
  degree: string
  institution: string
  period: Period
  location: string
}

export interface Project {
  title: string
  description?: string
  image?: string
  technologies?: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface NavigationConfig {
  order: string[]
  labels: Record<string, string>
}

export interface ProfileData {
  personalInfo: PersonalInfo
  about: AboutInfo
  experiences: Experience[]
  skills: Skills
  education: Education[]
  githubUsername: string
  projects: Project[]
  navigationConfig: NavigationConfig
}

const profile = profileData as unknown as ProfileData

export const personalInfo = profile.personalInfo
export const about = profile.about
export const experiences = profile.experiences
export const skills = profile.skills
export const education = profile.education
export const githubUsername = profile.githubUsername
export const projects = profile.projects
export const navigationConfig = profile.navigationConfig
