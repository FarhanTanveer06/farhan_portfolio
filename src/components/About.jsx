import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Who am I ?</h2>
      
      <div className="about-container">
        <div className="about-content">
          <h3 className="about-subtitle">An aspiring Data Scientist</h3>
          <p className="about-description">
          An ambitious aspiring data scientist and ML engineer with a foundation in Computer Science, combining technical skills in deep learning and software development with strong problem-solving abilities. Currently building hands-on experience through projects in machine learning, data analysis, and intelligent system design, I'm driven to transform complex data into meaningful insights. My adaptability and passion for continuous learning keep me evolving in the dynamic world of AI, ready to contribute to innovative projects that push technological boundaries.
          </p>
          <button className="btn-download">Download My CV</button>
        </div>

        <div className="personal-info">
          <h3 className="info-title">Personal Info</h3>
          <ul className="info-list">
            <li>
              <strong>Birth Date:</strong> <span>06/01/2000</span>
            </li>
            <li>
              <strong>Email:</strong> <span>tanveer.shihab.sarkar@g.bracu.ac.bd</span>
            </li>
            <li>
              <strong>Phone:</strong> <span>01882975833</span>
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

