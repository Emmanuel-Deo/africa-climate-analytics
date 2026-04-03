import './WhoWeServe.css'

const clients = [
  {
    id: "01",
    title: "African governments & regional bodies",
    desc: "National and sub-national governments, RECs and specialised regional organisations that lead climate-relevant policy, planning and investment.",
    tags: ["Ministries", "City authorities", "RECs", "River basin orgs"]
  },
  {
    id: "02",
    title: "Non-profits & civil society organisations",
    desc: "Local NGOs, community-based organisations, social movements and international NGOs designing, implementing and advocating for climate programmes.",
    tags: ["Local NGOs", "CBOs", "INGOs", "Coalitions"]
  },
  {
    id: "03",
    title: "Financial institutions & private-sector actors",
    desc: "Development finance institutions, banks, insurers, impact investors and corporates in climate-sensitive sectors needing ESG and risk analytics.",
    tags: ["DFIs", "Banks", "Insurers", "Impact investors"]
  }
]

function WhoWeServe() {
  return (
    <section className="serve-section">
      <div className="serve-header">
        <div className="header-left">
          <div className="serve-label">
            <span className="serve-line"></span> WHO WE SERVE
          </div>
          <h2 className="serve-title">Three client families, one shared mission</h2>
        </div>
        <div className="header-right">
          <p className="serve-subtitle">
            We co-define the questions that matter most, apply rigorous 
            analytics, and translate findings into decisions and actions.
          </p>
        </div>
      </div>

      <div className="serve-grid">
        {clients.map((client) => (
          <div key={client.id} className="serve-card">
            <span className="card-number">{client.id}</span>
            <h3 className="card-title">{client.title}</h3>
            <p className="card-desc">{client.desc}</p>
            <div className="card-tags">
              {client.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhoWeServe