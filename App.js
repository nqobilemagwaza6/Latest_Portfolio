
import { defineComponent } from 'vue';
import { PROJECTS, SKILLS, EXPERIENCES, CERTIFICATES, IMAGES } from './constants.js';

const Navbar = defineComponent({
  template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-custom py-3">
      <div class="container">
        <a class="navbar-brand fw-bold fs-3" href="#">
          <span class="gradient-text">NM.</span>
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-lg-4 align-items-center">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link" href="#certificates">Certificates</a></li>
            <li class="nav-item ms-lg-3">
              <a href="mailto:Nqobilemagwaza6@gmail.com" class="btn btn-primary-custom btn-sm px-4">Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
});

const Hero = defineComponent({
  template: `
    <section class="py-5 mt-5">
      <div class="container py-5 text-center">
        <div class="badge-custom d-inline-block mb-3 px-3 py-2 text-uppercase fw-bold" style="font-size: 0.75rem; letter-spacing: 0.1em;">
          Junior Software Engineer
        </div>
        <h1 class="display-3 fw-bolder mb-4">
          Innovating with <span class="gradient-text">Code</span> & <br class="d-none d-md-block"> Technical <span class="gradient-text">Excellence</span>
        </h1>
        <p class="lead text-muted mx-auto mb-5" style="max-width: 700px;">
          Passionate about building scalable AI-driven solutions and robust system architectures. Turning complex requirements into seamless digital experiences.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <a href="#projects" class="btn btn-primary-custom btn-lg">Explore My Work</a>
          <a href="#about" class="btn btn-outline-custom btn-lg">My Story</a>
        </div>
      </div>
    </section>
  `
});

const About = defineComponent({
  setup() {
    return { IMAGES };
  },
  template: `
  <section id="about" class="py-5 bg-soft-grey">
      <div class="container py-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-5 text-center">
            <div class="profile-image-container mb-4">
              <div class="profile-glow"></div>
              <img :src="IMAGES.profile" class="profile-image" alt="Nqobile Magwaza">
            </div>
          </div>
          <div class="col-lg-7">
            <h2 class="section-heading mb-4">Professional Biography</h2>
            <div class="glass-card p-4 p-md-5 mb-4">
              <p class="fs-5 text-muted mb-4" style="line-height: 1.8;">
                Dynamic Software Engineer with an <strong>NQF Level 5 in Systems Development</strong>, specializing in building scalable full-stack applications using <strong>Python</strong> and <strong>Java</strong>. My expertise is significantly enhanced by an intensive **AI bootcamp at Capaciti**, providing deep insights into cutting-edge machine learning and data science practices.
              </p>
              <p class="fs-5 text-muted mb-0" style="line-height: 1.8;">
              I lead development and maintenance projects while bridging the gap between stakeholder requirements and technical implementation. My unique blend of system knowledge and software skills allows me to approach problems with a holistic, engineering-first mindset.
              </p>
            </div>
            <div class="row g-4 text-center">
              <div class="col-6 col-md-3">
                <div class="glass-card p-3">
                  <h3 class="fw-bold mb-0">NQF 5</h3>
                  <small class="text-muted">Certified</small>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="glass-card p-3">
                  <h3 class="fw-bold mb-0">2+</h3>
                  <small class="text-muted">Years Tech</small>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="glass-card p-3">
                  <h3 class="fw-bold mb-0">5+</h3>
                  <small class="text-muted">Core Langs</small>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="glass-card p-3">
                  <h3 class="fw-bold mb-0">10+</h3>
                  <small class="text-muted">Certificates</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
});

const Skills = defineComponent({
  setup() { return { SKILLS }; },
  template: `
    <section id="skills" class="py-5">
      <div class="container py-5">
        <div class="row mb-5 align-items-end">
          <div class="col-lg-6">
            <h2 class="section-heading mb-0">Technical Mastery</h2>
            <p class="text-muted fs-5 mt-2">Comprehensive tech stack for modern systems development.</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="skill in SKILLS" :key="skill.name" class="col-md-6 col-lg-3">
            <div class="glass-card p-4 h-100 border-0 shadow-sm d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <small class="text-primary fw-bold text-uppercase" style="font-size: 0.65rem; letter-spacing: 0.05em;">{{ skill.category }}</small>
                  <span class="badge bg-light text-primary border rounded-pill px-2" style="font-size: 0.7rem;">L{{ skill.level }}/5</span>
                </div>
                <h5 class="fw-bold text-dark mb-3">{{ skill.name }}</h5>
              </div>
              <div class="skill-progress-container mt-2">
                <div class="skill-progress-bar" :style="{ width: (skill.level/5)*100 + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
});

const Projects = defineComponent({
  setup() { return { PROJECTS }; },
  template: `
    <section id="projects" class="py-5 bg-white">
      <div class="container py-5 text-center">
        <h2 class="section-heading mb-5">Featured Projects</h2>
        <div class="row g-4 text-start">
          <div v-for="project in PROJECTS" :key="project.id" class="col-lg-4 col-md-6">
            <div class="glass-card h-100 d-flex flex-column overflow-hidden shadow-sm">
              <div class="project-img-wrapper">
                <img :src="project.image" :alt="project.title">
              </div>
              <div class="p-4 d-flex flex-column flex-grow-1">
                <h4 class="fw-bold text-dark mb-3">{{ project.title }}</h4>
                <p class="text-muted mb-4 small flex-grow-1" style="line-height: 1.6;">{{ project.description }}</p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <span v-for="t in project.tech" class="badge bg-light text-muted border py-2 px-3">{{ t }}</span>
                </div>
                <div class="d-flex gap-3 mt-auto pt-3 border-top">
                  <a :href="project.demoUrl" target="_blank" class="btn btn-primary-custom flex-fill py-2 btn-sm d-flex align-items-center justify-content-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    Demo
                  </a>
                  <a :href="project.githubUrl" target="_blank" class="btn btn-outline-dark flex-fill py-2 btn-sm border-2 d-flex align-items-center justify-content-center gap-2" style="border-radius: 0.85rem;">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
});

const Experience = defineComponent({
  setup() { return { EXPERIENCES }; },
  template: `
    <section id="experience" class="py-5 bg-soft-grey">
      <div class="container py-5">
        <h2 class="section-heading text-center mb-5">Career Journey</h2>
        <div class="mx-auto" style="max-width: 850px;">
          <div v-for="(exp, idx) in EXPERIENCES" :key="exp.company" class="timeline-path pb-5">
            <div class="timeline-point"></div>
            <div class="glass-card p-4 p-md-5">
              <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                <div>
                  <h3 class="fw-bold text-dark mb-1 h4">{{ exp.role }}</h3>
                  <div class="text-primary fw-bold h5 mb-0">{{ exp.company }}</div>
                </div>
                <div class="badge-custom px-3 py-2 small">{{ exp.period }}</div>
              </div>
              <ul class="list-unstyled mb-4">
                <li v-for="item in exp.description" class="text-muted mb-3 d-flex gap-3">
                  <span class="text-primary mt-1">•</span> 
                  <span class="small" style="line-height: 1.6;">{{ item }}</span>
                </li>
              </ul>
              <div class="d-flex flex-wrap gap-2 pt-3 border-top mt-auto">
                <span v-for="s in exp.skills" class="text-uppercase fw-bold text-muted bg-white border px-3 py-1 rounded" style="font-size: 0.65rem; letter-spacing: 0.05em;">
                  {{ s }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
});

const Certificates = defineComponent({
  setup() { return { CERTIFICATES }; },
  template: `
    <section id="certificates" class="py-5 bg-white">
      <div class="container py-5">
        <div class="row mb-5 align-items-end">
          <div class="col-lg-6">
            <h2 class="section-heading mb-0">Professional Credentials</h2>
            <p class="text-muted fs-5 mt-2">Recognized industry standards and academic achievements.</p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="cert in CERTIFICATES" :key="cert.name" class="col-md-6 col-lg-4">
            <div class="glass-card p-4 d-flex align-items-start gap-4 h-100 border-start border-4 border-primary">
              <div class="bg-primary bg-opacity-10 p-3 rounded-circle text-primary flex-shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <div class="flex-grow-1">
                <h6 class="fw-bold text-dark mb-1">{{ cert.name }}</h6>
                <p class="text-muted small mb-2">{{ cert.issuer }}</p>
                <div class="badge-custom d-inline-block px-2 py-1" style="font-size: 0.65rem;">{{ cert.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
});

const Footer = defineComponent({
  template: `
    <footer class="py-5 bg-dark text-white">
      <div class="container">
        <div class="row g-4 justify-content-between align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <h2 class="fw-bold fs-2 mb-2">Nqobile <span class="gradient-text">Magwaza</span></h2>
            <p class="text-secondary small mb-0">Building the future of intelligence and systems.</p>
          </div>
          <div class="col-md-5 text-center text-md-end">
            <div class="d-flex flex-column gap-2">
              <a href="mailto:Nqobilemagwaza6@gmail.com" class="text-decoration-none text-white-50 small hover-white">
                📧 Nqobilemagwaza6@gmail.com
              </a>
              <span class="text-white-50 small">📱 073 595 1190</span>
              <span class="text-white-50 small">📍 South Africa</span>
            </div>
          </div>
        </div>
        <hr class="my-5 border-secondary opacity-25">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 small gap-3">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} Nqobile Magwaza. All Rights Reserved.</p>
          <div class="d-flex gap-4">
            <a href="#" class="text-decoration-none text-white-50 hover-white">LinkedIn</a>
            <a href="#" class="text-decoration-none text-white-50 hover-white">GitHub</a>
            <a href="#" class="text-decoration-none text-white-50 hover-white">Curriculum Vitae</a>
          </div>
        </div>
      </div>
    </footer>
  `
});

export default defineComponent({
  components: { Navbar, Hero, About, Skills, Projects, Experience, Certificates, Footer },
  template: `
    <div class="portfolio-container">
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        
        <section class="py-5 mb-5">
          <div class="container py-5">
            <div class="glass-card p-5 text-center shadow-lg border-2 bg-white" style="border-color: rgba(37, 99, 235, 0.15) !important;">
              <h2 class="display-5 fw-bold text-dark mb-3">Ready to Start a Project?</h2>
              <p class="text-muted mb-5 mx-auto fs-5" style="max-width: 600px;">
                Looking for a dedicated engineer to help build your next AI solution or enterprise system? Let's connect and discuss your vision.
              </p>
              <div class="d-flex flex-wrap justify-content-center gap-4">
                <a href="mailto:Nqobilemagwaza6@gmail.com" class="btn btn-primary-custom btn-lg px-5">Say Hello</a>
                <button class="btn btn-outline-custom btn-lg px-5">Download Resume</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  `
});
