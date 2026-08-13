import './PartnershipEthosSafeguards.css'
import { Link } from 'react-router-dom'

const ethos = [
  {
    title: "Joint problem-framing",
    desc: "Co-defining the questions that matter and the outcomes sought."
  },
  {
    title: "Tailored engagement",
    desc: "Aligning our propositions, methods and language with each partner's priorities and decision criteria."
  },
  {
    title: "Consistent stewardship",
    desc: "Providing clear reporting, sharing impact narratives and learning products, and keeping partners informed of major institutional developments."
  }
]

const safeguards = [
  {
    title: "Governance and Board engagement",
    desc: "A Board that provides strategic oversight, ethical guidance and high-level partnership brokering."
  },
  {
    title: "Donor intelligence & relationship tracking",
    desc: "A structured system for tracking prospects, contacts, opportunity stages and cultivation history."
  },
  {
    title: "Proposal development systems",
    desc: "Templates, evidence libraries, CV banks, past-performance repositories and internal review protocols."
  },
  {
    title: "Financial & grant management systems",
    desc: "Robust budgeting, contract and grant management, compliance tracking and full-cost pricing."
  },
  {
    title: "MEL systems",
    desc: "Tools for tracking ACA's own performance, documenting influence and learning, and communicating results."
  }
]

function PartnershipEthosSafeguards() {
  return (
    <section className="ethos-safeguards">
      <div className="ethos-safeguards-inner">
      <div className="es-col">
        <div className="es-label">
          <span className="es-line"></span> OUR PARTNERSHIP ETHOS
        </div>
        <h2 className="es-title">Long-term, trust-based relationships</h2>
        <p className="es-intro">
          Rather than treating resource mobilisation as one-off proposal submissions,
          our aim is to move from reactive fundraising to proactive, mission-aligned
          partnerships that strengthen both climate intelligence and institutional
          capacity across Africa.
        </p>
        <div className="es-list">
          {ethos.map((e) => (
            <div key={e.title} className="es-item">
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="es-col">
        <div className="es-label">
          <span className="es-line"></span> OUR INSTITUTIONAL SYSTEMS &amp; SAFEGUARDS
        </div>
        <h2 className="es-title">Systems that support transparency and quality</h2>
        <p className="es-intro">
          To give funders and partners confidence, ACA invests in organisational
          systems that support transparency, accountability and quality across both
          public-interest work and funded assignments.
        </p>
        <div className="es-list">
          {safeguards.map((s) => (
            <div key={s.title} className="es-item">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
          <div className="es-item es-item-highlight">
            <h3>Ethical data and AI safeguards</h3>
            <p>
              Policies and practices that ensure digital and AI-enabled methods are
              used responsibly, transparently and in line with do-no-harm principles,
              with human oversight.
            </p>
            <Link to="/about/data-governance-research-ethics-safeguards" className="es-link">
              Read our Data Governance, Research Ethics &amp; Safeguards commitments →
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default PartnershipEthosSafeguards
