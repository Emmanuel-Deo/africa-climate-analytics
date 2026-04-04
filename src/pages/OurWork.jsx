import './OurWork.css'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: "continental-study",
    year: "2024–2025",
    title: "Continental Study on Human Mobility in the Context of Climate Change in Africa",
    client: "African Union Commission & IOM",
    description: "Comprehensive synthesis of climate-related migration, displacement, planned relocation and immobility across all five African sub-regions. Provided AU and IOM with an authoritative reference now used to inform continental strategies."
  },
  {
    id: "climate-mobility-action-plan",
    year: "2025",
    title: "Climate-Mobility Action Plan & Roadmap 2026–2027",
    client: "IOM Special Liaison Office to the AU",
    description: "Strategic two-year action plan grounding IOM's support to AU, RECs and Member States on climate-mobility. Created practical reference for internal planning and resource mobilisation."
  },
  {
    id: "global-gateway-flagship",
    year: "2025–2026",
    title: "AU–IOM–Team Europe Global Gateway Flagship",
    client: "AU Commission, IOM & EU",
    description: "Flagship concept linking climate-resilient urban and coastal investments with technical assistance on climate-mobility. Positioned AU and IOM with investment-grade flagship for Global Gateway framework."
  },
  {
    id: "climate-adaptation-study",
    year: "2025",
    title: "Comprehensive Study on Climate Adaptation Interventions",
    client: "GHS & AU Commission (SEBE Directorate)",
    description: "Mixed-methods analysis of scalable adaptation models and financing pathways for AU positioning under Agenda 2063 and Global Goal on Adaptation. Equipped AU with evidence base for global adaptation debates."
  }
]

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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <section className="ow-engage">
        <div className="engage-content">
          <h2>Ready to work together?</h2>
          <p>Contact us to discuss how we can support your climate analytics needs.</p>
          <a href="/contact" className="engage-btn">Get in touch</a>
        </div>
      </section>
    </section>
  )
}

export default OurWork