import './Methodology.css'
import { MessageCircle, Search, BarChart3, Wrench, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Co-Framing the Problem",
    desc: "We begin by working with our partners to clarify the decisions they need to make and the questions they need answered — through scoping consultations, document review and joint definition of objectives, users and timelines.",
    icon: <MessageCircle size={30} />
  },
  {
    number: "02",
    title: "Data Discovery & Context Analysis",
    desc: "We identify and consolidate relevant climate, socio-economic, sectoral and programme data, while analysing institutional, policy and political-economy context so our analytics speak to real constraints.",
    icon: <Search size={30} />
  },
  {
    number: "03",
    title: "Analytics & Modelling",
    desc: "Using appropriate tools and methods, we generate the analyses needed to answer the agreed questions — from descriptive statistics to scenario analysis and predictive models — prioritising transparency and reproducibility.",
    icon: <BarChart3 size={30} />
  },
  {
    number: "04",
    title: "Co-Creation of Options & Tools",
    desc: "We work with government, regional and civil-society partners to interpret findings, explore trade-offs and co-develop practical options and usable tools.",
    icon: <Wrench size={30} />
  },
  {
    number: "05",
    title: "Capacity Building & Learning Loops",
    desc: "We embed capacity strengthening throughout our work and build in learning loops — opportunities to reflect on what is working, adjust approaches and capture insights for wider use.",
    icon: <RefreshCw size={30} />
  }
]

function Methodology() {
  return (
    <section id="our-approach" className="methodology">
      <div className="method-header">
        <div className="method-label">
          <span className="method-line"></span> OUR METHODOLOGY AND APPROACH
        </div>
        <h2 className="method-title">A structured yet flexible approach</h2>
        <p className="method-subtitle">
          Demand-driven, locally grounded and decision-oriented, from problem to results.
        </p>
      </div>

      <div className="method-steps">
        {steps.map((step, index) => (
          <div key={step.number} className="method-step">
            <div className="step-number">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            {index !== steps.length - 1 && <div className="step-arrow">→</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Methodology
