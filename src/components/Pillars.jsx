import './Pillars.css'
import { Link } from 'react-router-dom'

const pillars = [
  {
    anchor: "pillar-1",
    title: "Climate risk, vulnerability & resilience analytics",
    desc: "Quantifying how climate hazards interact with exposure and vulnerability across people, assets and systems.",
    details: "Climate risk and vulnerability assessments, hotspot and resilience gap mapping, asset and portfolio-level risk screening, and prioritisation of adaptation options."
  },
  {
    anchor: "pillar-2",
    title: "Climate policy, planning & governance support",
    desc: "Translating climate evidence into policies, plans and institutional arrangements that can be implemented.",
    details: "Technical inputs to NDCs, NAPs and sector strategies, climate-responsive public investment planning, and design of institutional and coordination mechanisms."
  },
  {
    anchor: "pillar-3",
    title: "Climate data, modelling & decision analytics",
    desc: "Turning fragmented climate data into integrated information systems and decision tools.",
    details: "Data discovery and integration, dashboards and mapping, scenario analysis, predictive modelling, and practical decision-support tools."
  },
  {
    anchor: "pillar-4",
    title: "Climate finance, ESG & investment analytics",
    desc: "Connecting climate risk analytics to financial decisions and instruments for resilient development.",
    details: "Physical and transition risk assessments, resilient investment opportunity identification, climate finance pipeline design, and ESG analytics."
  },
  {
    anchor: "pillar-5",
    title: "Monitoring, evaluation, learning & impact analytics",
    desc: "MEL systems tailored to climate programmes — combining quantitative and qualitative methods.",
    details: "Climate-responsive theories of change and indicators, baselines and longitudinal studies, performance evaluations, and learning reviews."
  },
  {
    anchor: "pillar-6",
    title: "Applied research & insight products",
    desc: "Policy-relevant, action-oriented research filling decision-critical evidence gaps in African contexts.",
    details: "Thematic and sectoral studies, synthesis reviews, institutional analyses, and state of climate resilience reports."
  },
  {
    anchor: "pillar-7",
    title: "Capacity building & advisory support",
    desc: "Embedding capacity strengthening so African institutions can sustain and deepen climate analytics over time.",
    details: "Tailored training, coaching, toolkit development, and long-term advisory arrangements."
  }
]

function Pillars() {
  return (
    <section className="pillars-section">
      <div className="pillars-inner">
        <div className="pillars-header">
          <div className="label">
            <span className="line"></span> WHAT WE DO
          </div>
          <h2 className="section-title">Seven pillars of climate action support</h2>
        </div>

        <div className="pillars-flow">
          {pillars.map((pillar, index) => (
            <Link key={index} to={`/what-we-do#${pillar.anchor}`} className="pillar-item">
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <p className="pillar-details">{pillar.details}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
