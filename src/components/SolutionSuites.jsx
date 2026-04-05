import './SolutionSuites.css'
import { FlaskConical, BookOpen, TrendingUp, Database, ArrowRight } from 'lucide-react'

const suites = [
  {
    id: "01",
    title: "Climate-Resilient Policy and Planning Lab",
    description: "Support governments, RECs and non-profits to integrate climate risk into policies, plans and investments.",
    items: [
      "Climate risk and vulnerability analytics",
      "Co-design for policies and investment pipelines",
      "Institutional and coordination advice"
    ],
    icon: <FlaskConical size={24} />,
    color: "blue"
  },
  {
    id: "02",
    title: "Evidence and Learning",
    description: "Help programme leaders generate evidence on what works for climate adaptation and resilience.",
    items: [
      "Climate-sensitive MEL systems",
      "Evaluations and learning reviews",
      "Insight products for decision-makers"
    ],
    icon: <BookOpen size={24} />,
    color: "orange"
  },
  {
    id: "03",
    title: "Climate Risk & Investment Insights",
    description: "Connect climate analytics with investment decisions to prioritize resilient, low-emission options.",
    items: [
      "Asset and portfolio risk screening",
      "Resilient investment identification",
      "Analytics for proposals"
    ],
    icon: <TrendingUp size={24} />,
    color: "green"
  },
  {
    id: "04",
    title: "Climate Data & Decision Tools",
    description: "Turn climate and socio-economic data into practical tools for planning and advocacy.",
    items: [
      "Data integration and management",
      "Dashboards, maps and screening tools",
      "Capacity building"
    ],
    icon: <Database size={24} />,
    color: "navy"
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
          Each suite combines several of our core pillars into a practical package 
          tailored to context and scale.
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
            <p className="ss-card-desc">{suite.description}</p>
            <ul className="ss-items">
              {suite.items.map((item, i) => (
                <li key={i}>
                  <ArrowRight size={14} className="ss-arrow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionSuites