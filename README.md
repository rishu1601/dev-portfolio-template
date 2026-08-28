# Template for Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio is fully customizable through a single configuration file, making it easy to personalize with your information.

## Features

- 🎨 **Modern Design** - Clean, professional, and visually appealing UI
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Performance Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **Recruiter Friendly** - Clear sections for experience, skills, and GitHub profile
- ✨ **Smooth Animations** - Engaging animations using Framer Motion
- 🚀 **Easy Deployment** - Ready to deploy on Vercel with zero configuration
- ⚙️ **Fully Configurable** - Single JSON config file controls everything

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

**All customization happens in `config/profile.json`** - Update this single file with your information. It's typed and validated through [lib/profile.ts](lib/profile.ts), so components always get well-shaped data.

### 1. Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio... (supports markdown)",
    "socialLinks": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourprofile",
      "email": "your.email@example.com",
      "blog": ""
    },
    "location": "Your City, Country",
    "resume": {
      "filename": "YourResume.pdf",
      "displayName": "YourResume.pdf"
    }
  }
}
```

### 2. About Section
```json
{
  "about": {
    "coreStrengths": "A short paragraph on what you're strongest at.",
    "stats": [
      { "label": "Projects", "value": "10+" },
      { "label": "Technologies", "value": "15+" },
      { "label": "Experience", "value": "6+ Years" }
    ],
    "highlights": [
      { "icon": "Code", "title": "Scalable Systems", "description": "..." }
    ]
  }
}
```
`highlights[].icon` is a name from lucide-react (e.g. `Code`, `Lightbulb`, `User`) — it must have a matching entry in the `iconMap` in [components/About.tsx](components/About.tsx).

### 3. Work Experience
```json
{
  "experiences": [
    {
      "company": "Company Name",
      "logo": "/logos/company-logo.png",
      "location": "City, Country",
      "positions": [
        {
          "title": "Senior Software Engineer",
          "period": { "start": "2023", "end": "Present" },
          "description": "#### Project Name\n- Achievement 1\n- Achievement 2\n- Achievement 3"
        }
      ]
    }
  ]
}
```
`period.end` can be `"Present"` for ongoing roles. `logo` is optional — omit or set to `null` to fall back to a placeholder icon.

### 4. Skills
```json
{
  "skills": {
    "frontend": ["React", "Next.js", "TypeScript"],
    "backend": ["Java", "Spring Boot", "Python"],
    "ai": ["GPT Integration", "LLM APIs", "Prompt Engineering"],
    "tools": ["Git", "Docker", "AWS", "Kubernetes"]
  }
}
```

### 5. Education
```json
{
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University Name",
      "period": { "start": "2014", "end": "2018" },
      "location": "USA"
    }
  ]
}
```

### 6. GitHub Profile
```json
{
  "githubUsername": "your-github-username"
}
```

### 7. Projects (Optional)
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "/images/project.png",
      "technologies": ["React", "Next.js"],
      "githubUrl": "https://github.com/username/project",
      "liveUrl": "https://project-demo.com",
      "featured": true
    }
  ]
}
```

### 8. Navigation Configuration
```json
{
  "navigationConfig": {
    "order": ["home", "about", "experience", "projects", "skills", "github", "contact"],
    "labels": {
      "home": "Home",
      "about": "About",
      "experience": "Experience",
      "projects": "Projects",
      "skills": "Skills",
      "github": "GitHub",
      "contact": "Contact"
    }
  }
}
```
Sections without data (e.g. no `projects`, no `githubUsername`) are automatically hidden from both the nav and the page.

### Editing later with Claude Code

If you have [Claude Code](https://claude.com/claude-code) open in this repo,
run `/update-portfolio <what you want changed>` (e.g. `/update-portfolio add
my job at Acme Corp from 2022 to now`) — it edits `config/profile.json`,
verifies the build, and asks before committing, pushing, or redeploying.

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

```
├── app/
│   ├── layout.tsx        # Root layout, page metadata from config/profile.json
│   └── page.tsx          # Section ordering/visibility
├── components/           # One component per section (Hero, About, Experience, ...)
├── config/
│   └── profile.json      # Single source of truth for all profile content
├── lib/
│   └── profile.ts        # TypeScript types + typed accessors for profile.json
└── public/
    ├── logos/             # Company logos referenced by experiences[].logo
    └── *.pdf              # Resume file referenced by personalInfo.resume.filename
```

See [AGENTS.md](AGENTS.md) for the full data model and extension points (adding new sections, icons, or fields).
