
/**
 * IMAGES CONFIGURATION
 * To use your own images:
 * 1. Create a folder named 'assets' in your project root.
 * 2. Place your image files (e.g., profile.jpg, project1.jpg) inside that folder.
 * 3. Update the paths below to match your filenames.
 */
export const IMAGES = {
  profile: './assets/profile.jpg', // Place your profile picture in assets/profile.jpg
  project1: './assets/project1.jpg', // Place your project image in assets/project1.jpg
  project2: './assets/project2.jpg',
  project3: './assets/project3.jpg',
};

export const PROJECTS = [
  {
    id: '1',
    title: 'AI Campus Predictive Dashboard',
    description: 'A comprehensive monitoring solution for machine learning pipelines. Visualizes real-time performance metrics and requirement gathering flows for enterprise stakeholders.',
    tech: ['Python (Django)', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    image: IMAGES.project1
  },
  {
    id: '2',
    title: 'Community Resource Portal',
    description: 'Developed for Empire Partner Foundation to connect underserved communities with vital educational and infrastructure resources. Built with Spring Boot for scalability.',
    tech: ['Java (Spring Boot)', 'MySQL', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: '#',
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
  { name: 'Python (Django)', level: 5, category: 'Languages' },
  { name: 'Java (Spring Boot)', level: 4, category: 'Languages' },
  { name: 'Javascript / Vue.js', level: 4, category: 'Web' },
  { name: 'MySQL / PostgreSQL', level: 4, category: 'Database' },
  { name: 'MCSA Windows Server', level: 5, category: 'Systems' },
  { name: 'Network Infrastructure', level: 4, category: 'Networking' },
  { name: 'Bootstrap & CSS', level: 5, category: 'Web' },
  { name: 'REST API Design', level: 4, category: 'Development' },
];

export const EXPERIENCES = [
  {
    company: 'AI Campus',
    role: 'Junior Software Engineer',
    period: 'Aug 2024 – Present',
    description: [
      'Leading end-to-end development, deployment, and system maintenance.',
      'Gathering and translating stakeholder requirements into technical specifications.',
      'Presenting regular software demos and technical deep-dives to senior management.'
    ],
    skills: ['Python', 'Django', 'Stakeholder Management', 'System Design']
  },
  {
    company: 'Empire Partner Foundation',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 – May 2024',
    description: [
      'Engineered full-stack features using Java and Spring Boot for community portals.',
      'Optimized legacy SQL queries resulting in 20% faster page load times.',
      'Modernized frontend components using responsive Bootstrap 5 frameworks.'
    ],
    skills: ['Java', 'Spring Boot', 'MySQL', 'Agile']
  },
  {
    company: 'MegaTraining',
    role: 'IT Support Technician Intern',
    period: 'Feb 2017 – Dec 2017',
    description: [
      'Administered Windows Server environments and resolved hardware/software bottlenecks.',
      'Configured secure network access points and internal routing protocols.',
      'Maintained 99.9% system uptime through proactive troubleshooting and documentation.'
    ],
    skills: ['MCSA', 'Networking', 'Troubleshooting', 'Infrastructure']
  }
];

export const CERTIFICATES = [
  { name: 'NQF Level 5 in Systems Development', issuer: 'WeThinkCode', year: '2022' },
  { name: 'Certificate in Network Support', issuer: 'MegaTraining', year: '2016' },
  { name: 'CompTIA A+', issuer: 'CompTIA', year: '2016' },
  { name: 'CompTIA N+', issuer: 'CompTIA', year: '2016' },
  { name: 'MCSA: Windows Server 2012', issuer: 'Microsoft', year: '2016' },
  { name: 'Advanced Java Development', issuer: 'Coursera/Oracle', year: '2023' },
];
