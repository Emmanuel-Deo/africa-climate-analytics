import './WhoWeServeBlocks.css'
import { Link } from 'react-router-dom'

const audiences = [
  {
    anchor: "governments-regional-bodies",
    number: "01",
    title: "African Governments and Regional Bodies",
    intro: "We partner with African national and sub-national governments, regional economic communities and specialised regional organisations that lead climate-relevant policy, planning and investment.",
    needsLabel: "Typical needs",
    needs: [
      "Integrate climate risk and resilience into national and sectoral policies, plans and budgets.",
      "Prioritise and appraise climate-resilient public investments and infrastructure.",
      "Establish climate-responsive monitoring, evaluation and learning systems.",
      "Strengthen institutional arrangements, data systems and technical capacity."
    ],
    supportLabel: "How ACA supports",
    support: [
      "Targeted climate risk, vulnerability and resilience analytics.",
      "Technical inputs to nationally determined contributions, national adaptation plans, long-term low-emission development strategies and sector strategies.",
      "Climate-responsive public investment planning.",
      "Design of institutional and coordination mechanisms.",
      "Development of climate-sensitive monitoring, evaluation and learning frameworks and learning reviews."
    ],
    ctaLabel: "Discuss public-sector support",
    ctaTo: "/contact?audience=government"
  },
  {
    anchor: "non-profits-civil-society",
    number: "02",
    title: "Non-Profits and Civil Society Organisations",
    intro: "We work closely with local NGOs, community-based organisations, social movements and international NGOs that design, implement and advocate for climate-related programmes and policies across Africa.",
    needsLabel: "Typical needs",
    needs: [
      "Actionable evidence on climate risks, vulnerabilities and impacts at community and landscape levels.",
      "Robust monitoring, evaluation and learning systems for adaptation, resilience and climate-justice programmes.",
      "Insight products that translate analytics into accessible narratives for decision-makers and the public.",
      "Internal capacity to use climate data and analytics in programme management and advocacy."
    ],
    supportLabel: "How ACA supports",
    support: [
      "Applied research and insight products tailored to communities and decision-makers.",
      "Design and implementation of climate-sensitive monitoring, evaluation and learning systems.",
      "Evaluations and learning reviews focused on what works, for whom and why.",
      "Training and accompaniment on climate data use, monitoring, evaluation and learning and climate-responsive advocacy."
    ],
    ctaLabel: "Discuss a civil-society partnership",
    ctaTo: "/contact?audience=civil-society"
  },
  {
    anchor: "financial-institutions-private-sector",
    number: "03",
    title: "Financial Institutions and Private-Sector Actors",
    intro: "While our primary emphasis is on public and civil-society partners, we also support financial institutions and private-sector entities whose investments and operations shape climate risk and resilience outcomes.",
    needsLabel: "Typical needs",
    needs: [
      "Assess and manage physical and transition climate risks across portfolios, assets and supply chains.",
      "Identify and prioritise climate-resilient, low-emission investment opportunities.",
      "Develop analytics and indicators for environmental, social and governance reporting and sustainable finance strategies."
    ],
    supportLabel: "How ACA supports",
    support: [
      "Asset- and portfolio-level climate risk screening and mapping.",
      "Identification and prioritisation of resilient investment opportunities aligned with national climate priorities.",
      "Analytics and narratives for concept notes, proposals and investment cases.",
      "Development of climate-aligned environmental, social and governance metrics and decision tools."
    ],
    ctaLabel: "Discuss climate risk & investment support",
    ctaTo: "/contact?audience=finance"
  },
  {
    anchor: "funders-strategic-partners",
    number: "04",
    title: "Funders and Strategic Partners",
    intro: "We engage with bilateral donors, philanthropic foundations, multilateral and regional climate funds, and AU/REC-linked platforms as funders and strategic partners.",
    needsLabel: "Typical interests",
    needs: [
      "Regional public goods and climate evidence.",
      "Climate governance, adaptation planning and institutional capacity.",
      "Climate finance readiness, pipelines and monitoring, evaluation and learning."
    ],
    supportLabel: "How ACA supports",
    support: [
      "Design and delivery of regional technical facilities and evidence platforms.",
      "Continental and regional studies that inform policy and negotiations.",
      "Monitoring, evaluation and learning systems and learning platforms for climate investments.",
      "Long-term technical partnerships anchored in African Union and regional economic community frameworks."
    ],
    ctaLabel: "Explore funding & partnerships",
    ctaTo: "/funding-partnerships"
  }
]

function WhoWeServeBlocks() {
  return (
    <section className="wws-blocks">
      {audiences.map((a, index) => (
        <div key={a.anchor} id={a.anchor} className={`wws-block ${index % 2 === 1 ? 'alt' : ''}`}>
          <div className="wws-block-inner">
            <div className="wws-block-header">
              <span className="wws-number">{a.number}</span>
              <h2 className="wws-title">{a.title}</h2>
              <p className="wws-intro">{a.intro}</p>
            </div>
            <div className="wws-block-columns">
              <div className="wws-col">
                <h3>{a.needsLabel}</h3>
                <ul>
                  {a.needs.map((n) => <li key={n}>{n}</li>)}
                </ul>
              </div>
              <div className="wws-col">
                <h3>{a.supportLabel}</h3>
                <ul>
                  {a.support.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
            <Link to={a.ctaTo} className="wws-cta">{a.ctaLabel} →</Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default WhoWeServeBlocks
