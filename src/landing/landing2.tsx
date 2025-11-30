import './landing.css';
import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A full-stack e-commerce solution with payment integration.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'web',
      description: 'A custom portfolio site with smooth animations.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    },
    {
      id: 3,
      title: 'Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile application for task management.',
      tags: ['React Native', 'Firebase', 'Redux'],
    },
    {
      id: 4,
      title: 'UI/UX Design',
      category: 'design',
      description: 'Modern UI/UX design for a SaaS platform.',
      tags: ['Figma', 'Adobe XD', 'Sketch'],
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">John Doe</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer & Designer</h2>
            <p className="hero-description">
              I create beautiful, functional digital experiences that make an impact.
              Specializing in modern web applications and responsive design.
            </p>
            <div className="cta-buttons">
              <a href="#work" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="portfolio-work">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          
          {/* Filter Tabs */}
          <div className="filter-tabs">
            {['all', 'web', 'mobile', 'design'].map((tab) => (
              <button
                key={tab}
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="btn btn-small">View Project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>Have a project in mind or want to discuss potential opportunities?</p>
              <div className="contact-methods">
                <a href="mailto:hello@example.com" className="contact-link">
                  <span className="icon">✉️</span> hello@example.com
                </a>
                <a href="tel:+1234567890" className="contact-link">
                  <span className="icon">📱</span> +1 (234) 567-890
                </a>
              </div>
              <div className="social-links">
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform, i) => (
                  <a key={i} href="#" className="social-link">{platform}</a>
                ))}
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
