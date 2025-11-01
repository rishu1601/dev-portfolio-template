# Template for Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio is fully customizable through a single configuration file, making it easy to personalize with your information.

## Features

- 🎨 **Modern Design** - Clean, professional, and visually appealing UI
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **Recruiter Friendly** - Clear sections for experience, skills, and GitHub profile
- ✨ **Smooth Animations** - Engaging animations using Framer Motion
- 🚀 **Easy Deployment** - Ready to deploy on Vercel with zero configuration
- ⚙️ **Fully Configurable** - Single configuration file controls everything

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Content:** React Markdown

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd dev-portfolio-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quick Customization

**All customization happens in `data/personalInfo.ts`** - Update this single file with your information:

### 1. Personal Information
```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    email: 'your.email@example.com',
  },
  location: 'Your City, Country',
  resume: {
    filename: 'YourResume.pdf',
    displayName: 'YourResume.pdf',
  },
}
```

### 2. Work Experience
```typescript
export const experiences = [
  {
    company: 'Company Name',
    logo: '/logos/company-logo.png', // Optional
    location: 'City, Country',
    positions: [
      {
        title: 'Senior Software Engineer',
        period: '2023 - Present',
        description: `#### Project Name
- Achievement 1
- Achievement 2
- Achievement 3`,
      },
      // Add more positions for promotions
    ],
  },
  // Add more companies
]
```

### 3. Skills
```typescript
export const skills = {
  frontend: ['React', 'Next.js', 'TypeScript'],
  backend: ['Java', 'Spring Boot', 'Python'],
  ai: ['GPT Integration', 'LLM APIs', 'Prompt Engineering'],
  tools: ['Git', 'Docker', 'AWS', 'Kubernetes'],
}
```

### 4. GitHub Profile
```typescript
export const githubUsername = 'your-github-username'
```

### 5. Projects (Optional)
```typescript
export const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    image: '/images/project.png', // Optional
    technologies: ['React', 'Next.js'],
    githubUrl: 'https://github.com/username/project', // Optional
    liveUrl: 'https://project-demo.com', // Optional
    featured: true, // Optional
  },
]
```

### 6. Navigation Configuration
```typescript
export const navigationConfig = {
  order: ['home', 'about', 'experience', 'projects', 'skills', 'github', 'contact'],
  labels: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    github: 'GitHub',
    contact: 'Contact',
  },
}
```

## Assets

Place your files in the `public` folder:
- Resume PDF: `public/YourResume.pdf`
- Company logos: `public/logos/`
- Project images: `public/images/`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

### Alternative: Manual Deployment

```bash
npm run build
npm start
```

## Project Structure
