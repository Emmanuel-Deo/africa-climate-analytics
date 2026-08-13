import './SelectedAssignments.css'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function SelectedAssignments() {
  const featured = projects.slice(0, 3)

  return (
    <section className="selected-assignments">
      <div className="sa-header">
        <div className="header-left">
          <div className="label">
            <span className="line"></span> SELECTED ASSIGNMENTS
          </div>
          <h2 className="section-title">High-level continental and regional work</h2>
        </div>
        <p className="sa-subtitle">
          High-level continental and regional assignments demonstrating our ability
          to combine rigorous analytics, policy insight and practical design support.
        </p>
      </div>

      <div className="sa-grid">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="sa-footer">
        <Link to="/assignments-impact" className="view-all-btn">See more assignments →</Link>
      </div>
    </section>
  )
}

export default SelectedAssignments
