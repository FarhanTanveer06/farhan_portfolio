import React from 'react'
import './Hero.css'

const Hero = ({ setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content-left">
          <p className="hero-greeting">Hello, I am</p>
          <h1 className="hero-name">Farhan Tanveer Shihab Sarkar</h1>
          <h2 className="hero-title">Aspiring Data Scientist</h2>
          <div className="hero-buttons">
            {(() => {
              const resumeUrl = new URL('resume.pdf', import.meta.env.BASE_URL).href
              return (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get In Touch
                  </button>
                  <a 
                    href={resumeUrl}
                    className="btn btn-secondary"
                    download
                  >
                    Print Resume
                  </a>
                </>
              )
            })()}
          </div>
        </div>
        <div className="hero-content-right">
          <div className="hero-avatar">
            <img
              src={new URL('profile.jpg', import.meta.env.BASE_URL).href}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

