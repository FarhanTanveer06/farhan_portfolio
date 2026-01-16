import React from 'react'
import './Resume.css'

const Resume = () => {
  const experiences = []

  const education = [
    {
      period: '2017 - 2019',
      degree: 'A Level',
      school: 'Green Scholars School and College',
      description: 'Completed Advanced Level studies at Green Scholars School and College.'
    },
    {
      period: '2017',
      degree: 'O Level',
      school: 'Green Scholars School and College',
      description: 'Completed Ordinary Level studies at Green Scholars School and College.'
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
          <h3 className="resume-subtitle">Experiences</h3>
          <div className="timeline">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-experience">
                <p>No professional experience yet. Currently seeking opportunities to apply my skills and grow in the field of Data Science and Machine Learning.</p>
              </div>
            )}
          </div>
        </div>

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
      </div>

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
    </section>
  )
}

export default Resume

