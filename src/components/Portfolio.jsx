import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const FALLBACK_IMG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='%23e0e0e0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='Arial' font-size='24'>No%20Image</text></svg>`

  const projects = [
    {
      id: 1,
      title: 'Thesis Project: Dental Condition Identification',
      domain: 'Computer Vision | Deep Learning',
      images: [
        `${import.meta.env.BASE_URL}projects/p_dataset.png`
      ],
      description: 'Built a deep learning pipeline to classify dental conditions from radiography images, supporting faster and more consistent diagnosis.',
      highlights: [
        'Prepared radiography data for training and evaluation workflows.',
        'Trained and validated deep learning models for multi-condition classification.',
        'Compared performance across model versions to improve accuracy and reliability.'
      ],
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Fashion Store Platform',
      domain: 'Full Stack Web Development',
      image: `${import.meta.env.BASE_URL}projects/fashion_store.jpg`,
      description: 'Developed an e-commerce fashion platform with authentication, admin controls, and an AI assistant for occasion-based clothing suggestions.',
      highlights: [
        'Implemented login, registration, and secure user signup module.',
        'Created admin controls for managing store and user workflows.',
        'Integrated AI chatbot assistant to recommend outfits by occasion.'
      ],
      githubUrl: 'https://github.com/FarhanTanveer06/CSE471_project',
      liveUrl: 'https://store-app-7whx.onrender.com'
    },
    {
      id: 3,
      title: 'Mice Classification Using ML',
      domain: 'Machine Learning | Bioinformatics',
      image: `${import.meta.env.BASE_URL}projects/machineLearning_web.png`,
      description: 'Used genome and protein expression data to classify different mice types and benchmarked multiple machine learning models.',
      highlights: [
        'Applied preprocessing and feature handling for biological dataset quality.',
        'Trained Logistic Regression, KNN, and Naive Bayes classifiers.',
        'Compared model accuracy and selected best-performing approach.'
      ],
      githubUrl: 'https://github.com/FarhanTanveer06/Machine_learning_project'
    }
  ]

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">My Portfolio</h2>

      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image">
              <img
                src={project.images ? project.images[0] : project.image}
                alt={project.title}
                onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
              />
            </div>
            {project.images && project.images.length > 1 && (
              <div className="portfolio-thumbnails">
                {project.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
                  />
                ))}
              </div>
            )}
            <div className="portfolio-content">
              <p className="portfolio-domain">{project.domain}</p>
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <ul className="portfolio-highlights">
                {project.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="portfolio-actions">
                <a href={project.githubUrl} className="portfolio-btn" target="_blank" rel="noreferrer">GitHub Repository</a>
                {project.liveUrl && (
                  <a href={project.liveUrl} className="portfolio-btn" target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio