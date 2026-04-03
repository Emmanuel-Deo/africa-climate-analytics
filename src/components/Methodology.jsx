import './Methodology.css'
import { MessageCircle, BarChart3, Wrench, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Co-Framing",
    desc: "We begin every project by co-defining the question with our partners to ensure relevance.",
    icon: <MessageCircle size={32} />
  },
  {
    number: "02",
    title: "Rigorous Analytics",
    desc: "Applying mixed-methods (quantitative and qualitative) and peer-reviewed science.",
    icon: <BarChart3 size={32} />
  },
  {
    number: "03",
    title: "Usable Outputs",
    desc: "Designing tools (dashboards, scorecards) that embed directly into existing workflows.",
    icon: <Wrench size={32} />
  },
  {
    number: "04",
    title: "Learning Loops",
    desc: "Integrating capacity strengthening so teams can sustain the analytics themselves.",
    icon: <RefreshCw size={32} />
  }
]

function Methodology() {
  return (
    <section className="methodology">
      <div className="method-header">
        <div className="method-label">
          <span className="method-line"></span> OUR METHODOLOGY
        </div>
        <h2 className="method-title">How we handle every assignment</h2>
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