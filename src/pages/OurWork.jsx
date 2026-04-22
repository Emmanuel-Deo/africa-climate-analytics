import { Link } from 'react-router-dom'
import './OurWork.css'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function OurWork() {
  return (
    <section className="our-work">
      <section className="ow-experience-hero">
        <div className="ow-section-header">
          <div className="section-label"><span className="label-line"></span> EXPERIENCE</div>
          <h2>Selected assignments</h2>
          <p className="section-subtitle">High-level continental and regional assignments demonstrating our ability to combine rigorous analytics, policy insight and practical design support.</p>
        </div>
      </section>

      <section className="ow-projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="ow-engage">
        <div className="engage-content">
          <h2>Ready to work together?</h2>
          <p>Contact us to discuss how we can support your climate analytics needs.</p>
          <Link to="/contact" className="engage-btn">Get in touch</Link>
        </div>
      </section>
    </section>
  )
}

export default OurWork
