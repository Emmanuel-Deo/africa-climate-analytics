import './Pillars.css'
import { 
  Clock, 
  Briefcase, 
  LayoutGrid, 
  TrendingUp, 
  Target, 
  Search, 
  Users 
} from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    title: "Climate risk, vulnerability & resilience analytics",
    desc: "Quantifying how climate hazards interact with exposure and vulnerability across people, assets and systems.",
    icon: <Clock size={20} />,
    color: "blue"
  },
  {
    title: "Climate policy, planning & governance support",
    desc: "Translating climate evidence into policies, plans and institutional arrangements that can be implemented.",
    icon: <Briefcase size={20} />,
    color: "orange"
  },
  {
    title: "Climate data, modelling & decision analytics",
    desc: "Turning fragmented climate data into integrated information systems and decision tools.",
    icon: <LayoutGrid size={20} />,
    color: "green"
  },
  {
    title: "Climate finance, ESG & investment analytics",
    desc: "Connecting climate risk analytics to financial decisions and instruments for resilient development.",
    icon: <TrendingUp size={20} />,
    color: "navy"
  },
  {
    title: "Monitoring, evaluation, learning & impact analytics",
    desc: "MEL systems tailored to climate programmes — combining quantitative and qualitative methods.",
    icon: <Target size={20} />,
    color: "blue"
  },
  {
    title: "Applied research & insight products",
    desc: "Policy-relevant, action-oriented research filling decision-critical evidence gaps in African contexts.",
    icon: <Search size={20} />,
    color: "orange"
  },
  {
    title: "Capacity building & advisory support",
    desc: "Embedding capacity strengthening so African institutions can sustain and deepen climate analytics over time.",
    icon: <Users size={20} />,
    color: "green"
  }
]

function Pillars() {
  return (
    <section className="pillars-section">
      <div className="pillars-header">
        <div className="header-left">
          <div className="label">
            <span className="line"></span> WHAT WE DO
          </div>
          <h2 className="section-title">Seven pillars of climate action support</h2>
        </div>
        <Link to="/our-work" className="view-all-btn">View all services</Link>
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <div className={`icon-wrapper ${pillar.color}`}>
              {pillar.icon}
            </div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-desc">{pillar.desc}</p>
            <div className="pillar-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pillars