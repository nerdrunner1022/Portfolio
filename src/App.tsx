import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">JM</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link">Education</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Joaquin Marcel</h1>
          <p className="hero-subtitle">Tech-Agnostic Developer</p>
          <p className="hero-description">
            Curious, adaptable, and innovative. Passionate about creating elegant solutions through critical thinking and continuous learning.
          </p>
          <div className="hero-cta">
            <a href="#about" className="btn btn-primary">Learn More</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="section-content">
            <p className="about-text">
              I am a curious individual willing to serve society and explore the wonders of the world. Adaptable and innovative, I possess strong critical thinking skills, rapidly acquire knowledge across disciplines, and generate creative solutions. I excel in both independent initiatives and collaborative projects, committed to continuous growth and making a meaningful impact.
            </p>
            <p className="about-description">
              With a foundation in IT and Computer Software Engineering, I approach every project with a tech-agnostic mindset—selecting the right tools for the job rather than being confined to any single technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="skills-grid">
            {/* Hard Skills */}
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Bash</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite</span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="skill-category">
              <h3>Professional Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Critical Thinking</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Creativity</span>
                <span className="skill-tag">Innovation</span>
                <span className="skill-tag">Empathy</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Communication</span>
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h3>Tools & Software</h3>
              <div className="skill-tags">
                <span className="skill-tag">Microsoft Office</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3>Higher National Diploma</h3>
                <p className="education-program">Computer Software Engineering</p>
                <p className="education-institution">ESOFT Metro Campus</p>
                <p className="education-period">January 2025 - September 2026</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3>Diploma in IT</h3>
                <p className="education-program">Information Technology</p>
                <p className="education-institution">ESOFT Metro Campus</p>
                <p className="education-period">June 2024 - February 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Interested in collaborating or learning more about my work? Feel free to reach out.
          </p>
          <div className="contact-cta">
            <a href="mailto:joaquin@example.com" className="btn btn-primary">Send Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Joaquin Marcel. All rights reserved.</p>
          <p className="footer-tagline">Tech-Agnostic Developer | Continuous Learner</p>
        </div>
      </footer>
    </>
  )
}

export default App
