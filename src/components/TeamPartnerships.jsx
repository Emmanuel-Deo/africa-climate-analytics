import './TeamPartnerships.css'
import { Cloud, Users, Database, Target, HeartHandshake } from 'lucide-react'

const capabilities = [
  {
    title: "Climate and environmental analytics",
    icon: <Cloud size={24} />,
    color: "blue"
  },
  {
    title: "Policy, institutional and programme design",
    icon: <Users size={24} />,
    color: "orange"
  },
  {
    title: "Data, modelling and decision analytics",
    icon: <Database size={24} />,
    color: "green"
  },
  {
    title: "Monitoring, evaluation, learning and research",
    icon: <Target size={24} />,
    color: "navy"
  },
  {
    title: "Capacity building, facilitation and accompaniment",
    icon: <HeartHandshake size={24} />,
    color: "blue"
  }
]

function TeamPartnerships() {
  return (
    <section className="team-partnerships">
      <div className="tp-header">
        <div className="tp-label">
          <span className="tp-line"></span> CAPABILITIES &amp; WAYS OF WORKING
        </div>
        <h2 className="tp-title">Multidisciplinary expertise, strong partnerships</h2>
        <p className="tp-subtitle">
          Africa Climate Analytics brings together an interdisciplinary team spanning
          climate and environmental analytics, policy and institutional design, data
          and decision analytics, monitoring, evaluation and learning, and applied research.
        </p>
      </div>

      <div className="tp-capabilities">
        <h3 className="tp-section-title">Capabilities and Ways of Working</h3>
        <div className="tp-capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="tp-capability-card">
              <div className={`tp-icon ${cap.color}`}>
                {cap.icon}
              </div>
              <h4>{cap.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <p className="tp-principles">
        We work through co-creation, African ownership and decision-orientation,
        anchoring our work in African Union, regional economic community and
        Member State frameworks and processes.
      </p>
    </section>
  )
}

export default TeamPartnerships
