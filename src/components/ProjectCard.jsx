import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <span>Project image placeholder</span>
      </div>
      <div className="project-content">
        <span className="project-year">{project.year}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-client">{project.client}</p>
        <p className="project-desc">{project.description}</p>
        <a href="/contact" className="project-link">View details →</a>
      </div>
    </div>
  )
}

export default ProjectCard