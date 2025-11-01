// Personal Information - Fully Anonymized Template for Public Use

export const personalInfo = {
  name: 'Alex Developer',
  title: 'Full Stack Engineer | Systems Architect | Problem Solver',
  bio: 'Engineer passionate about crafting robust, maintainable, and scalable software. Experienced across backend, frontend, and cloud environments with an interest in developer tools, AI integrations, and high-performance systems.', // supports markdown
  
  socialLinks: {
    github: 'https://github.com/sampleUser',  //replace with yours
    linkedin: 'https://linkedin.com/in/devtemplateuser', //replace with yours
    email: 'hello@example.com', 
    blog: '', // add yours
  },

  location: 'Seattle, USA', 
  resume: {
    filename: 'ResumeSample.pdf',
    displayName: 'ResumeSample.pdf',
  },
}

export const experiences = [
  {
    company: 'NovaStack Cutting Edge Technologies',
    logo: '/logos/company1.jpg', 
    location: 'New York, USA', 
    positions: [
      {
        title: 'Senior Software Engineer',
        period: '2023 - Present',
        description: `- Designed cloud-native backend services handling large-scale data pipelines and analytics workloads.
- Collaborated with frontend and platform teams to integrate API gateways, caching, and observability.
- Improved system performance by introducing event-driven architecture and efficient data access patterns.`,
      },
      {
        title: 'Software Engineer',
        period: '2020 - 2023',
        description: `- Implemented modular microservices supporting internal APIs and external integrations.
- Refactored legacy modules to adopt asynchronous I/O and improved request handling throughput.
- Developed internal libraries for job scheduling and monitoring.`,
      },
    ],
  },
  {
    company: 'BrightYou Future Labs',
    logo: undefined, 
    location: 'Austin, USA', 
    positions: [
      {
        title: 'Software Developer',
        period: '2018 - 2020',
        description: `- Built end-to-end web applications with React and Node.js.
- Automated CI/CD pipelines and container deployments to cloud infrastructure.
- Integrated external REST and GraphQL APIs to enhance user experience and data flow.`,
      },
    ],
  },
]

export const skills = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
  ],
  backend: [
    'Node.js',
    'Express',
    'Python',
    'FastAPI',
    'Java',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Message Queues',
  ],
  ai: [
    'LLM API Integration',
    'Prompt Engineering',
    'Vector Search',
    'Embeddings Retrieval',
    'LangChain',
  ],
  tools: [
    'Git',
    'Docker',
    'AWS',
    'GCP',
    'CI/CD',
    'Kubernetes',
    'JMeter',
  ],
}

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Central City',
    period: '2014 - 2018',
    location: 'USA',
  },
]

export const githubUsername = 'rishu1601' 

export const projects = [
  {
    title: 'Portfolio Template Generator',
    description: 'A customizable portfolio builder built with Next.js and Tailwind CSS, designed for developers to showcase their work with zero setup.',
    image: '',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/devtemplateuser/portfolio-template-generator',
    liveUrl: '',
    featured: true, 
  },
  {
    title: 'Realtime Collaboration Board',
    description: 'A collaborative whiteboard app enabling multiple users to draw, annotate, and share notes in real-time via WebSockets.',
    image: '',
    technologies: ['React', 'Node.js', 'Socket.IO', 'Canvas API'],
    githubUrl: 'https://github.com/devtemplateuser/realtime-board',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'TaskFlow API',
    description: 'A backend service providing RESTful APIs for task tracking, job orchestration, and analytics reporting.',
    image: '',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/devtemplateuser/taskflow-api',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'DevOps Monitor',
    description: 'Visualization system for monitoring builds, deployments, and application uptime through web dashboards.',
    image: '',
    technologies: ['Node.js', 'Grafana', 'Prometheus', 'Express'],
    githubUrl: 'https://github.com/devtemplateuser/devops-monitor',
    liveUrl: '',
    featured: false,
  },
]

export const navigationConfig = {
  order: [
    'home',
    'about',
    'experience',
    'projects',
    'skills',
    'github',
    'contact',
  ],
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
