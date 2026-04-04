import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

const projects = {
  'continental-study': {
    year: "2024–2025",
    title: "Continental Study on Human Mobility in the Context of Climate Change in Africa",
    client: "African Union Commission and International Organization for Migration (IOM)",
    coverage: "Continental scope across all five African sub-regions",
    objective: "To generate a comprehensive, policy-relevant synthesis of how climate change, environmental degradation and disasters are shaping human mobility across Africa, and how these dynamics are reflected in AU, REC and national policy and institutional frameworks.",
    contribution: [
      "Designed the overall research framework, analytical linkages and comparative methodology for a continental desk study on climate-related mobility.",
      "Mapped and synthesized evidence on climate-related migration, displacement, planned relocation and immobility across the five sub-regions, drawing on data, literature and institutional sources.",
      "Analyzed AU, REC and Member State policy and institutional arrangements, highlighting progress, gaps, best practices and cross-cutting themes (gender, youth, protection, climate-security, immobility).",
      "Produced the final Continental Study report and a concise policy brief with targeted, actionable recommendations tailored to AU organs, RECs, Member States and partners."
    ],
    results: [
      "Provided the AU and IOM with an authoritative reference on climate-related human mobility in Africa, now used to inform continental strategies, negotiation positions and programming on climate and mobility.",
      "Clarified key policy, governance, data and protection gaps and outlined concrete options to strengthen climate-mobility governance, coordination and capacity across the continent."
    ]
  },
  'climate-mobility-action-plan': {
    year: "2025",
    title: "Climate-Mobility Action Plan and Roadmap 2026–2027 for IOM Climate Action Division at the African Union",
    client: "IOM Special Liaison Office to the African Union and UNECA (Climate Action Division)",
    coverage: "Working with the African Union Commission and Regional Economic Communities",
    objective: "To translate continental evidence and political commitments on climate-related human mobility into a focused 2026–2027 action plan and roadmap that positions IOM's Climate Action Division as a leading technical partner to the AU, RECs and Member States.",
    contribution: [
      "Developed the strategic framework, vision, goal and theory of change for a two-year climate-mobility action plan grounded in AU and IOM mandates.",
      "Defined strategic objectives, priority result areas, pillars, outcomes and outputs, with clear links to AU frameworks, the Kampala Declaration, Agenda 2063 and global climate processes.",
      "Articulated an implementation approach, governance and coordination arrangements, risk management, monitoring, learning and an indicative roadmap for 2026–2027.",
      "Integrated cross-cutting priorities (gender, youth, digital and AI-enabled tools, knowledge management and climate justice) throughout the action plan."
    ],
    results: [
      "Provided CAD/SLO with a coherent, evidence-based roadmap to structure its support to AU, RECs and Member States on climate-mobility, strengthening its strategic positioning and partnership offer.",
      "Created a practical reference for internal planning, resource mobilisation and coordination with AU departments, RECs, Member States and development partners."
    ]
  },
  'global-gateway-flagship': {
    year: "2025–2026",
    title: "AU–IOM–Team Europe Global Gateway Flagship on Urban and Coastal Climate Resilience in Mobility Hotspots",
    client: "African Union Commission and IOM, in partnership with the European Union and Team Europe development finance institutions",
    coverage: "Focus on African urban and coastal mobility hotspots",
    objective: "To design a Global Gateway flagship proposal that links climate-resilient urban and coastal investments in African mobility hotspots with an AU-anchored, IOM-supported technical assistance facility on climate-related mobility, aligned with African and EU priorities.",
    contribution: [
      "Developed the flagship concept note, including context and problem analysis, strategic rationale, objectives and theory of change for an urban/coastal climate-mobility initiative.",
      "Designed the dual-layer architecture: a Team Europe investment platform for climate-resilient infrastructure and services, and an AU–IOM technical assistance and enabling facility on climate-mobility analytics, planning, safeguards and green livelihoods.",
      "Outlined the financing architecture, governance and partnership arrangements, including roles for AU, RECs, IOM, DFIs, municipalities, civil society and private-sector partners.",
      "Integrated cross-cutting themes (gender, youth, human rights, conflict sensitivity, ESG alignment, digital and innovation) and a results, MEL and learning framework."
    ],
    results: [
      "Positioned AU and IOM with a credible, investment-grade flagship concept ready for engagement with EU/Team Europe under the Global Gateway framework.",
      "Provided a structured, climate-mobility-sensitive model for linking analytics and safeguards to large-scale urban and coastal resilience investments in African mobility hotspots."
    ]
  },
  'climate-adaptation-study': {
    year: "2025",
    title: "Comprehensive Study on Climate Adaptation Interventions and Locally Led Adaptation in Africa",
    client: "Global Health Strategies (GHS) and African Union Commission (SEBE Directorate)",
    coverage: "Africa-wide scope with regional and country case studies",
    objective: "To map and analyze climate adaptation interventions across Africa, with a focus on scalable, inclusive and locally led adaptation models, financing pathways and indicators to inform AU-level positioning under the AU Climate Strategy, Agenda 2063 and the Global Goal on Adaptation.",
    contribution: [
      "Designed and implemented a mixed-methods analytical framework to map adaptation interventions and locally led adaptation initiatives across regions and sectors.",
      "Assessed interventions against multiple dimensions: effectiveness, inclusivity, innovation and transformative potential, local ownership and governance, finance readiness and scalability, and MEL robustness.",
      "Analysed adaptation financing pathways, including public, multilateral and innovative instruments, with particular attention to finance justice, direct access and local-level funding.",
      "Developed an Africa-responsive indicator framework for adaptation and locally led adaptation, and crafted advocacy messages and policy recommendations for AU organs, RECs, Member States and partners."
    ],
    results: [
      "Generated a high-level synthesis of impactful, locally led adaptation models and financing approaches across Africa, providing concrete examples for policy dialogue and replication.",
      "Equipped the AU and partners with a robust evidence base, indicator set and advocacy narratives to strengthen Africa's voice in global adaptation debates and negotiations, and to guide more just, locally anchored adaptation finance and governance."
    ]
  }
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects[id]

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

        <div className="pd-image-placeholder">
          <span>Project Image</span>
        </div>

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