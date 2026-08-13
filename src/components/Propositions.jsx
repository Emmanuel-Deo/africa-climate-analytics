import './Propositions.css'
import { Link } from 'react-router-dom'
import { Landmark, Network, BookOpen, Database, Briefcase, ArrowRight } from 'lucide-react'

const propositions = [
  {
    icon: <Landmark size={24} />,
    title: "Institutional Core Support",
    whatItIs: "Multi-year institutional support for ACA's leadership, governance, finance, operations, knowledge management, communications, monitoring, evaluation and learning, and business development. It also anchors a public-interest research agenda on themes such as climate-related mobility, adaptation, climate-finance justice and African climate data systems.",
    whyLabel: "Why it matters",
    why: [
      "Maintain strong organisational systems and safeguards.",
      "Invest in strategic, Africa-centred evidence generation that may not fit narrow project calls.",
      "Serve as a reliable, long-term decision-support institution for multiple partners."
    ],
    cta: "Enquire about institutional core support",
    to: "/contact?interest=institutional-core-support"
  },
  {
    icon: <Network size={24} />,
    title: "Regional Technical Facility",
    whatItIs: "Design and implementation of a regional or continental technical facility or platform that provides climate analytics, policy support, monitoring, evaluation and learning, dashboards and pipeline development, together with institutional accompaniment.",
    whyLabel: "What ACA brings",
    why: [
      "Integrated risk analytics, policy and planning support, monitoring, evaluation and learning, and capacity-building.",
      "Experience working with continental and regional institutions and consortia.",
      "Ability to translate facility outputs into usable tools, dashboards and indicators."
    ],
    cta: "Explore a technical facility or evidence platform",
    to: "/contact?interest=technical-facility"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Evidence and Learning Platform",
    whatItIs: "A programme focused on monitoring, evaluation and learning systems, evidence synthesis, indicator development and learning reviews for African climate programmes — for example adaptation, resilience, locally led adaptation or climate-mobility initiatives.",
    whyLabel: "What ACA brings",
    why: [
      "Design of climate-responsive theories of change and indicator frameworks.",
      "Mixed-methods evaluations, learning reviews and synthesis products.",
      "Accessible insight products for policymakers, practitioners and advocates."
    ],
    cta: "Discuss evidence and learning partnership",
    to: "/contact?interest=evidence-learning"
  },
  {
    icon: <Database size={24} />,
    title: "Climate Data and Decision Tools",
    whatItIs: "Support to build practical decision-support tools that integrate climate, socio-economic and programme data into dashboards, maps, scorecards and screening tools embedded in partner systems.",
    whyLabel: "What ACA brings",
    why: [
      "Design of layered data and analytics architectures that partners can maintain.",
      "Development of climate and resilience dashboards, geospatial maps and risk heatmaps.",
      "Creation of screening tools, scorecards and checklists aligned with policy and investment workflows."
    ],
    cta: "Explore climate data and decision tools",
    to: "/contact?interest=climate-data-tools"
  },
  {
    icon: <Briefcase size={24} />,
    title: "High-Value Consulting and Embedded Advisory",
    whatItIs: "Fee-for-service arrangements for bespoke technical assistance, concept development, strategic reviews, proposal support and long-term advisory accompaniment to institutions and programmes — for example drafting flagship programme concepts, conducting analytical diagnostics, or embedded advisory over 12–24 months.",
    whyLabel: "What ACA brings",
    why: [
      "Senior analytical, policy and monitoring, evaluation and learning expertise.",
      "Experience bridging climate analytics with institutional realities and political economy.",
      "A commitment to capacity strengthening and co-creation rather than extractive consultancy."
    ],
    cta: "Commission high-value consulting",
    to: "/contact?interest=consulting"
  }
]

function Propositions() {
  return (
    <section className="propositions">
      <div className="prop-header">
        <div className="prop-label">
          <span className="prop-line"></span> OUR PROPOSITIONS FOR FUNDERS &amp; PARTNERS
        </div>
        <h2 className="prop-title">Ways to partner with ACA</h2>
        <p className="prop-subtitle">
          We have developed a set of standard propositions that can be adapted to
          different funders, calls and partnership arrangements. They make it easy
          to see how ACA can contribute to your priorities.
        </p>
      </div>

      <div className="prop-list">
        {propositions.map((p) => (
          <div key={p.title} className="prop-card">
            <div className="prop-icon">{p.icon}</div>
            <h3 className="prop-card-title">{p.title}</h3>
            <p className="prop-what">{p.whatItIs}</p>
            <p className="prop-why-label">{p.whyLabel}</p>
            <ul className="prop-why">
              {p.why.map((w) => <li key={w}>{w}</li>)}
            </ul>
            <Link to={p.to} className="prop-cta">
              {p.cta} <ArrowRight size={15} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Propositions
