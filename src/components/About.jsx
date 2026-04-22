import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Who am I ?</h2>
      
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-subtitle">An aspiring Software Engineer</h3>
          <p className="about-description">
          I'm actively looking for roles in software development, software testing, and data analytics. Each of these areas excites me for different reasons — I love the process of building things, I care about quality and making sure things actually work the way they should, and I find it really satisfying to work with data and turn it into something useful. I'm at a point in my career where I'm hungry to learn, contribute, and grow with the right team.
          </p>
          <a 
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="btn-download"
            download="Farhan_Tanveer_CV.pdf"
          >
            Download My CV
          </a>
        </div>

        <div className="personal-info">
          <h3 className="info-title">Personal Info</h3>
          <ul className="info-list">
            <li>
              <strong>Birth Date:</strong> <span>06/01/2000</span>
            </li>
            <li>
              <strong>Email:</strong> <span>farhansarkar10130@gmail.com</span>
            </li>
            <li>
              <strong>Phone:</strong> <span>01636656861</span>
            </li>
            <li>
              <strong>Address:</strong> <span>Suavstu Chirontoni, 26 Indira Road , Farmgate</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About