import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.image && <img src={project.image} alt={project.title} />}
      </div>
      <div className="project-content">
        <span className="project-year">{project.year}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-client">{project.client}</p>
        <p className="project-desc">{project.description}</p>
        <Link to={`/our-work/${project.id}`} className="project-link">View details →</Link>
      </div>
    </div>
  )
}

export default ProjectCard