import './PrinciplesValues.css'
import { Link } from 'react-router-dom'

const principles = [
  {
    title: "Mission alignment",
    desc: "Prioritising resources and partnerships that strengthen climate-resilient, just and low-emission development pathways in Africa."
  },
  {
    title: "African ownership",
    desc: "Reinforcing African priorities, local institutional strengthening and equitable partnerships."
  },
  {
    title: "Diversification",
    desc: "Building sustainable funding across multiple sources and modalities."
  },
  {
    title: "Institutional sustainability",
    desc: "Ensuring core funding and full-cost recovery for stable, flexible operations."
  },
  {
    title: "Strategic donor engagement",
    desc: "Developing relationships systematically through mapping, cultivation, tailored asks and stewardship."
  },
  {
    title: "Transparency and accountability",
    desc: "Providing clear reporting, visible impact, strong systems and credible safeguards."
  },
  {
    title: "Learning and adaptation",
    desc: "Reviewing and adjusting our strategies based on pipeline performance, funding trends and institutional growth."
  }
]

function PrinciplesValues() {
  return (
    <section className="principles-values">
      <div className="pv-header">
        <div className="pv-label">
          <span className="pv-line"></span> OUR PRINCIPLES AND VALUES
        </div>
        <h2 className="pv-title">What guides our work</h2>
        <p className="pv-intro">Our work is guided by principles of:</p>
      </div>

      <div className="pv-grid">
        {principles.map((p) => (
          <div key={p.title} className="pv-item">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
        <div className="pv-item pv-item-highlight">
          <h3>Responsible data and digital use</h3>
          <p>
            Ethical, lawful and context-specific use of data, digital tools and
            AI-enabled methods, with human oversight and do-no-harm safeguards
            throughout our work.
          </p>
          <Link to="/about/data-governance-research-ethics-safeguards" className="pv-link">
            Read our Data Governance, Research Ethics &amp; Safeguards commitments →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PrinciplesValues
