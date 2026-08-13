import './SolutionSuites.css'
import { FlaskConical, BookOpen, TrendingUp, Database, HeartHandshake, ArrowRight } from 'lucide-react'

const suites = [
  {
    id: "01",
    title: "Climate-Resilient Policy and Planning Lab",
    audience: "For governments, regional economic communities and non-profits engaging in policy processes.",
    description: "We support governments, regional bodies and civil-society coalitions to integrate climate risk and resilience into policies, plans and investments.",
    items: [
      "Targeted climate risk and vulnerability analytics to identify priority sectors and hotspots",
      "Co-design support for policies, plans and investment pipelines that embed climate-risk and resilience considerations",
      "Advice on institutional arrangements, coordination and data systems needed to implement these choices"
    ],
    icon: <FlaskConical size={24} />,
    color: "blue"
  },
  {
    id: "02",
    title: "Evidence and Learning for Climate Action",
    audience: "For NGOs, civil society and government programmes.",
    description: "We help programme leaders generate, organise and use evidence on what works for climate adaptation, mitigation and resilience.",
    icon: <BookOpen size={24} />,
    color: "orange"
  },
  {
    id: "03",
    title: "Climate Risk and Investment Insights",
    audience: "For public investment planners, development finance institutions, banks and NGOs preparing investment cases.",
    description: "We connect climate risk analytics with investment decisions, helping institutions prioritise resilient, low-emission options.",
    icon: <TrendingUp size={24} />,
    color: "green"
  },
  {
    id: "04",
    title: "Climate Data and Decision Tools",
    audience: "For governments, regional economic communities and NGOs needing usable climate information systems.",
    icon: <Database size={24} />,
    color: "navy"
  },
  {
    id: "05",
    title: "Capacity Strengthening and Advisory Partnership",
    audience: "For institutions seeking long-term, embedded support.",
    icon: <HeartHandshake size={24} />,
    color: "blue"
  }
]

function SolutionSuites() {
  return (
    <section className="solution-suites">
      <div className="ss-header">
        <div className="ss-label">
          <span className="ss-line"></span> SOLUTION SUITES
        </div>
        <h2 className="ss-title">Practical packages for common needs</h2>
        <p className="ss-subtitle">
          We organise our services into focused solution suites that respond to the
          most common needs of our partners. Each suite combines several of our core
          pillars into a practical package tailored to context and scale.
        </p>
      </div>

      <div className="ss-grid">
        {suites.map((suite) => (
          <div key={suite.id} className={`ss-card ${suite.color}`}>
            <div className="ss-card-header">
              <span className="ss-id">{suite.id}</span>
              <div className="ss-icon">
                {suite.icon}
              </div>
            </div>
            <h3 className="ss-card-title">{suite.title}</h3>
            <p className="ss-card-audience">{suite.audience}</p>
            {suite.description && <p className="ss-card-desc">{suite.description}</p>}
            {suite.items && (
              <ul className="ss-items">
                {suite.items.map((item, i) => (
                  <li key={i}>
                    <ArrowRight size={14} className="ss-arrow" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionSuites
