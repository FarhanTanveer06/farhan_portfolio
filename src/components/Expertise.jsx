import React from 'react'
import './Expertise.css'

const Expertise = () => {
  const expertiseItems = [
    {
      title: 'App Development',
      description: 'Transforming Ideas into Innovative Apps',
      icon: '📱'
    },
    {
      title: 'Web Development',
      description: 'Building Seamless Online Experiences',
      icon: '🌐'
    },
    {
      title: 'Graphics Design',
      description: 'Bringing Visuals to Life with Creativity and Precision',
      icon: '🎨'
    }
  ]

  return (
    <section id="expertise" className="expertise-section">
      <h2 className="section-title">My Expertise</h2>
      
      <div className="expertise-grid">
        {expertiseItems.map((item, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-icon">{item.icon}</div>
            <h3 className="expertise-title">{item.title}</h3>
            <p className="expertise-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise

