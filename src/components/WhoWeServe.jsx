import './WhoWeServe.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const clients = [
  {
    id: "01",
    title: "Governments and regional bodies",
    desc: "We support African national and sub-national governments, regional economic communities and specialised regional organisations to integrate climate risk and resilience into policies, plans, public investments and institutional arrangements.",
    anchor: "governments-regional-bodies",
    button: "For governments & RECs"
  },
  {
    id: "02",
    title: "Non-profits and civil society",
    desc: "We work with local NGOs, community-based organisations, social movements and international NGOs that design, implement and advocate for climate-related programmes and policies, helping them build climate-sensitive monitoring, evaluation and learning systems.",
    anchor: "non-profits-civil-society",
    button: "For non-profits & civil society"
  },
  {
    id: "03",
    title: "Financial institutions and private-sector actors",
    desc: "We partner with development finance institutions, commercial banks, insurers and corporates in climate-sensitive sectors to assess climate risks, identify resilient investment opportunities and develop climate-aligned ESG metrics and disclosure tools.",
    anchor: "financial-institutions-private-sector",
    button: "For finance & private sector"
  }
]

function WhoWeServe() {
  return (
    <section className="serve-section">
      <div className="serve-header">
        <div className="header-left">
          <div className="serve-label">WHO WE SERVE</div>
          <h2 className="serve-title">Institutions that shape climate-relevant decisions</h2>
        </div>
        <div className="header-right">
          <p className="serve-subtitle">
            We work with institutions that shape climate-relevant decisions,
            investments and programmes across Africa.
          </p>
        </div>
      </div>

      <div className="serve-grid">
        {clients.map((client) => (
          <div key={client.id} className="serve-card">
            <span className="card-number">{client.id}</span>
            <h3 className="card-title">{client.title}</h3>
            <p className="card-desc">{client.desc}</p>
            <Link to={`/who-we-serve#${client.anchor}`} className="serve-card-link">
              {client.button} <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhoWeServe
