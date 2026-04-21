import React from 'react'
import './Resume.css'

const Resume = () => {
  const education = [
    {
      period: '2022 - 2026',
      degree: 'BSc in Computer Science & Engineering',
      school: 'BRAC University',
      description: 'Focused on core computer science fundamentals and practical software development.'
    },
    {
      period: '2018 - 2021',
      degree: "Edexcel IAL (A'Level)",
      school: 'Edexcel',
      description: 'Completed advanced level studies with emphasis on analytical and quantitative subjects.'
    },
    {
      period: '2016 - 2017',
      degree: "Edexcel IGCSE (O'Level)",
      school: 'Edexcel',
      description: 'Completed secondary education with a broad foundation across science and mathematics.'
    }
  ]

  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 'HTML/CSS', 
    'Git', 'TypeScript', 'MongoDB', 'Express.js', 'Firebase'
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Bengali', level: 'Native' },
    { name: 'Hindi', level: 'Conversational' }
  ]

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">My Resume</h2>

      <div className="resume-container">
        <div className="resume-column">
          <h3 className="resume-subtitle">Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-period">{edu.period}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{edu.degree}</h4>
                  <p className="timeline-company">{edu.school}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-sidebar">
          <div className="skills-section">
            <h3 className="resume-subtitle">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>

          <div className="languages-section">
            <h3 className="resume-subtitle">Languages</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">- {lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

