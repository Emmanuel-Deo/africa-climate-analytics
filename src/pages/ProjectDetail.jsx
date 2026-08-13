import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import PageCTA from '../components/PageCTA'
import projects from '../data/projects'

const projectsById = Object.fromEntries(projects.map((p) => [p.id, p]))

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsById[id]

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Assignment not found</h2>
        <Link to="/assignments-impact" className="pd-back-btn">Back to Assignments &amp; Impact</Link>
      </div>
    )
  }

  return (
    <>
      <section className="project-detail">
        <div className="pd-container">
          <Link to="/assignments-impact" className="pd-back">
            <span>←</span> Back to Assignments &amp; Impact
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
              <h2>Objective / Challenge</h2>
              <p>{project.objective}</p>
            </div>

            <div className="pd-section">
              <h2>ACA's Role &amp; Approach</h2>
              <ul className="pd-list">
                {project.contribution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pd-section">
              <h2>Results &amp; Value</h2>
              <ul className="pd-list">
                {project.results.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Discuss a similar assignment"
        description="Tell us about your context and we will explore how ACA can support a comparable assignment for your institution."
        buttons={[
          { label: "Discuss a similar assignment", to: "/contact?interest=assignment" },
          { label: "Explore what we do", to: "/what-we-do" }
        ]}
      />
    </>
  )
}

export default ProjectDetail
