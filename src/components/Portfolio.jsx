import React, { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      category: 'web',
      image: 'https://via.placeholder.com/400x300?text=Project+1'
    },
    {
      id: 2,
      title: 'Project 2',
      category: 'app',
      image: 'https://via.placeholder.com/400x300?text=Project+2'
    },
    {
      id: 3,
      title: 'Project 3',
      category: 'graphics',
      image: 'https://via.placeholder.com/400x300?text=Project+3'
    },
    {
      id: 4,
      title: 'Project 4',
      category: 'web',
      image: 'https://via.placeholder.com/400x300?text=Project+4'
    },
    {
      id: 5,
      title: 'Project 5',
      category: 'app',
      image: 'https://via.placeholder.com/400x300?text=Project+5'
    },
    {
      id: 6,
      title: 'Project 6',
      category: 'graphics',
      image: 'https://via.placeholder.com/400x300?text=Project+6'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">My Portfolio</h2>

      <div className="portfolio-filters">
        <button 
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'web' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('web')}
        >
          Web
        </button>
        <button 
          className={filter === 'app' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('app')}
        >
          App
        </button>
        <button 
          className={filter === 'graphics' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('graphics')}
        >
          Graphics
        </button>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{project.title}</h3>
                <button className="portfolio-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio

