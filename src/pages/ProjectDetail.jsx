import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import projects from '../data/projects'

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]))

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsById[id]

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found</h2>
        <Link to="/our-work" className="pd-back-btn">Back to Our Work</Link>
      </div>
    )
  }

  return (
    <section className="project-detail">
      <div className="pd-container">
        <Link to="/our-work" className="pd-back">
          <span>←</span> Back to Our Work
        </Link>

        <div className="pd-hero">
          <span className="pd-year">{project.year}</span>
          <h1 className="pd-title">{project.title}</h1>
          <div className="pd-meta">
            <div className="pd-meta-item">
              <span className="pd-meta-label">Client</span>
              <span className="pd-meta-value">{project.client}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Coverage</span>
              <span className="pd-meta-value">{project.coverage}</span>
            </div>
          </div>
        </div>

        {project.image && (
          <div className="pd-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="pd-content">
          <div className="pd-section">
            <h2>Objective</h2>
            <p>{project.objective}</p>
          </div>

          <div className="pd-section">
            <h2>Our Contribution</h2>
            <ul className="pd-list">
              {project.contribution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pd-section">
            <h2>Results & Value</h2>
            <ul className="pd-list">
              {project.results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
