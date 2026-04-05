import './TeamPartnerships.css'
import { Cloud, Users, Database, Target } from 'lucide-react'

const capabilities = [
  {
    title: "Climate & Environmental Analytics",
    desc: "Climate risk and vulnerability analysis, climate-mobility linkages, adaptation assessment, and sector-specific climate impact analysis for water, agriculture, urban and coastal areas.",
    icon: <Cloud size={28} />,
    color: "blue"
  },
  {
    title: "Policy, Institution & Programme Design",
    desc: "Support to continental, regional and national strategies, action plans and roadmaps, governance arrangements, and flagship initiative design.",
    icon: <Users size={28} />,
    color: "orange"
  },
  {
    title: "Data, Modelling & Decision Analytics",
    desc: "Integration of climate and socio-economic data, dashboards and mapping, decision-support tools, and mixed-methods approaches.",
    icon: <Database size={28} />,
    color: "green"
  },
  {
    title: "MEL, Learning & Research",
    desc: "Climate-sensitive MEL systems, impact evaluations, evidence synthesis, and indicator frameworks for policy and practice.",
    icon: <Target size={28} />,
    color: "navy"
  }
]

const partnerships = [
  "Strategic collaborations with continental and regional institutions",
  "Think tanks and universities",
  "Specialist technical partners",
  "Non-profit and civil-society organisations",
  "Community-based, youth- and women-led groups"
]

function TeamPartnerships() {
  return (
    <section className="team-partnerships">
      <div className="tp-header">
        <div className="tp-label">
          <span className="tp-line"></span> TEAM & PARTNERSHIPS
        </div>
        <h2 className="tp-title">Multidisciplinary expertise, strong partnerships</h2>
      </div>

      <div className="tp-capabilities">
        <h3 className="tp-section-title">Our Core Capabilities</h3>
        <div className="tp-capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="tp-capability-card">
              <div className={`tp-icon ${cap.color}`}>
                {cap.icon}
              </div>
              <h4>{cap.title}</h4>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="tp-partnerships">
        <h3 className="tp-section-title">How We Work</h3>
        <div className="tp-ways-grid">
          <div className="tp-way-card">
            <h4>Africa-centred Grounding</h4>
            <p>Explicit focus on African institutions and priorities, anchored in AU, REC and Member State frameworks.</p>
          </div>
          <div className="tp-way-card">
            <h4>Co-creation & Capacity</h4>
            <p>Joint problem-framing, collaborative analysis and co-development of tools, with capacity building integrated throughout.</p>
          </div>
          <div className="tp-way-card">
            <h4>Decision-orientation</h4>
            <p>Analytics and research that directly inform policies, investments, programmes and advocacy, not standalone studies.</p>
          </div>
        </div>
      </div>

      <div className="tp-collab">
        <h3 className="tp-section-title">Partnerships & Collaboration</h3>
        <div className="tp-collab-list">
          {partnerships.map((item, index) => (
            <span key={index} className="tp-collab-tag">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamPartnerships