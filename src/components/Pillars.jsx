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

const pillars = [
  {
    title: "Climate risk, vulnerability & resilience analytics",
    desc: "Quantifying how climate hazards interact with exposure and vulnerability across people, assets and systems.",
    details: "Climate risk and vulnerability assessments, hotspot and resilience gap mapping, asset and portfolio-level risk screening, and prioritisation of adaptation options.",
    icon: <Clock size={20} />,
    color: "blue"
  },
  {
    title: "Climate policy, planning & governance support",
    desc: "Translating climate evidence into policies, plans and institutional arrangements that can be implemented.",
    details: "Technical inputs to NDCs, NAPs and sector strategies, climate-responsive public investment planning, and design of institutional and coordination mechanisms.",
    icon: <Briefcase size={20} />,
    color: "orange"
  },
  {
    title: "Climate data, modelling & decision analytics",
    desc: "Turning fragmented climate data into integrated information systems and decision tools.",
    details: "Data discovery and integration, dashboards and mapping, scenario analysis, predictive modelling, and practical decision-support tools.",
    icon: <LayoutGrid size={20} />,
    color: "green"
  },
  {
    title: "Climate finance, ESG & investment analytics",
    desc: "Connecting climate risk analytics to financial decisions and instruments for resilient development.",
    details: "Physical and transition risk assessments, resilient investment opportunity identification, climate finance pipeline design, and ESG analytics.",
    icon: <TrendingUp size={20} />,
    color: "navy"
  },
  {
    title: "Monitoring, evaluation, learning & impact analytics",
    desc: "MEL systems tailored to climate programmes — combining quantitative and qualitative methods.",
    details: "Climate-responsive theories of change and indicators, baselines and longitudinal studies, performance evaluations, and learning reviews.",
    icon: <Target size={20} />,
    color: "blue"
  },
  {
    title: "Applied research & insight products",
    desc: "Policy-relevant, action-oriented research filling decision-critical evidence gaps in African contexts.",
    details: "Thematic and sectoral studies, synthesis reviews, institutional analyses, and state of climate resilience reports.",
    icon: <Search size={20} />,
    color: "orange"
  },
  {
    title: "Capacity building & advisory support",
    desc: "Embedding capacity strengthening so African institutions can sustain and deepen climate analytics over time.",
    details: "Tailored training, coaching, toolkit development, and long-term advisory arrangements.",
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
      </div>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <div className={`icon-wrapper ${pillar.color}`}>
              {pillar.icon}
            </div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-desc">{pillar.desc}</p>
            <p className="pillar-details">{pillar.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pillars