import React from 'react'
import './Resume.css'

const Resume = () => {
  const experiences = [
    {
      period: '2025 (January) - Present',
      title: 'Software Engineer II',
      company: 'Your Company',
      description: 'Collaborating with cross-functional teams to develop and implement software solutions, ensuring adherence to coding standards and best practices.'
    },
    {
      period: '2023 (July) - 2024 (December)',
      title: 'Software Engineer I',
      company: 'Your Company',
      description: 'Designing and executing comprehensive test plans, identifying and resolving software defects to deliver high-quality and reliable products.'
    }
  ]

  const education = [
    {
      period: '2018 - 2022',
      degree: 'BSc in Computer Science & Engineering',
      school: 'Your University',
      description: 'Graduated with a CGPA of 3.87 out of 4.00, showcasing outstanding academic achievement and unwavering commitment to excellence.'
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
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{exp.title}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
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

