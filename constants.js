
/**
 * IMAGES CONFIGURATION
 * To use your own images:
 * 1. Create a folder named 'assets' in your project root.
 * 2. Place your image files (e.g., profile.jpg, project1.jpg) inside that folder.
 * 3. Update the paths below to match your filenames.
 */
export const IMAGES = {
  profile: './assets/Nqobile Magwaza.png', // Place your profile picture in assets/profile.jpg
  project1: './assets/medifast.jpg', // Place your project image in assets/project1.jpg
  project2: './assets/taxi_compass.jfif',
  project3: './assets/project3.jpg',
};

export const PROJECTS = [
  {
    id: '1',
    title: 'MediFast AI: Smart Patient Identification & Data Access Platform',
    description: 'MediFast AI: Smart Patient Identification & Data Access Platform',
    tech: ['Python (Django)', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://prong-wink-04231070.figma.site/',
    githubUrl: '#',
    image: IMAGES.project1
  },
  {
    id: '2',
    title: 'End to End AI Solution',
    description: 'A full-stack transport application for South Africa that allows passengers to search taxi routes and fare prices, with an admin dashboard for taxi associations to manage fares and post announcements.',
    tech: ['Typescript', 'MySQL','Next.js', 'CSS'],
    demoUrl: 'https://v0-taxi-compass.vercel.app/',
    githubUrl: 'https://github.com/SpecialAgents/Taxi-Compass  ',
    image: IMAGES.project2
  },
  {
    id: '3',
    title: 'Corporate Network Monitor',
    description: 'A systems-level tool designed to audit and monitor internal network stability. Features automated alerts and connectivity performance logging for IT infrastructure teams.',
    tech: ['C#', 'SQL Server', 'Network Protocols'],
    demoUrl: '#',
    githubUrl: '#',
    image: IMAGES.project3
  }
];

export const SKILLS = [
  // --- Languages ---
  { name: 'Python', level: 5, category: 'Languages' },
  { name: 'JavaScript', level: 4, category: 'Languages' },
  { name: 'HTML5', level: 5, category: 'Languages' },
  { name: 'CSS3', level: 5, category: 'Languages' },
  { name: 'Java', level: 4, category: 'Languages' },
  // --- Frameworks & Libraries ---
  { name: 'Django', level: 5, category: 'Frameworks & Libraries' },
  { name: 'Django REST Framework', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Vue.js', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Spring Boot', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', level: 4, category: 'Frameworks & Libraries' },
  // --- Databases ---
  { name: 'PostgreSQL', level: 4, category: 'Databases' },
  { name: 'MySQL', level: 3, category: 'Databases' },
  // --- Cloud & DevOps ---
  { name: 'Docker', level: 1, category: 'Cloud & DevOps' },
  // --- API & Integration ---
  { name: 'REST API Design & Development', level: 4, category: 'API & Integration' },
  { name: 'AJAX', level: 4, category: 'API & Integration' },
  { name: 'Payment Integration', level: 4, category: 'API & Integration' },
  { name: 'OAuth2', level: 3, category: 'API & Integration' },
  // --- Development Practices ---
  { name: 'Agile Methodologies', level: 4, category: 'Development Practices' },
  { name: 'Requirements Analysis', level: 4, category: 'Development Practices' },
  { name: 'Code Review', level: 4, category: 'Development Practices' },
  { name: 'Technical Documentation', level: 3, category: 'Development Practices' },
  { name: 'System Design', level: 4, category: 'Development Practices' },
  // --- Soft Skills ---
  { name: 'Stakeholder Management', level: 4, category: 'Soft Skills' },
];

export const EXPERIENCES = [
  {
    company: 'AI Campus',
    role: 'Junior Software Engineer',
    period: 'Aug 2024 – Sept 2025',
    description: [
    'Spearheaded full-stack development, including responsive front-ends with Vue.js/HTML/CSS/JS (AJAX) and robust back-ends with Django/Python (REST APIs).',
    'Actively involved in requirements gathering, code reviews, and documentation to deliver scalable, secure solutions with integrated payment systems, managing **PostgreSQL databases**.',
    'Operating within Agile methodologies.'
    ],
    skills: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'REST APIs',
    'Agile', 'Full-Stack Development', 'Payment Integration',
    'Requirements Analysis', 'Code Review', 'Technical Documentation']
  },
  {
    company: 'Empire Partner Foundation',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 – May 2024',
    description: [
      'Engineered and deployed full-stack features for community portals, ensuring seamless integration of front-end and back-end components.',
      'Designed and implemented responsive user interfaces using HTML, CSS, and Bootstrap, with interactive elements developed using JavaScript and jQuery.',
      'Developed server-side applications and RESTful APIs with Python and Django, including database design and optimization in MySQL via Django ORM.',
      'Optimized legacy SQL queries, enhancing page load times by 20% and improving overall application performance.',
      'Ensured cross-browser compatibility and responsiveness across web applications, and contributed to maintaining code quality through Git version control.'
    ],
    skills: ['Python', 'Django', 'MySQL', 'Agile']
  },
{
  company: 'Capaciti',
  role: 'AI Bootcamp',
  period: 'Nov 2025 – Feb 2026',
  description: [
    'Engaged in hands-on AI projects, applying machine learning and deep learning techniques to real-world problems.',
    'Developed and delivered technical presentations, articulating complex AI concepts and project outcomes to peers and mentors.',
    'Completed a series of specialized Coursera courses, enhancing theoretical understanding and practical skills in various AI domains.'
  ],
  skills: ['AI', 'Machine Learning', 'Deep Learning', 'Presentation Skills', 'Data Analysis']
}
];

export const CERTIFICATES = [
  { name: 'NQF Level 5 in Systems Development', issuer: 'WeThinkCode', year: '2022' },
  { name: 'Certificate in Network Support', issuer: 'MegaTraining', year: '2016' },
  { name: 'Artificial Intelligent', issuer: 'Capaciti(Cousera)', year: '2026' },
];
