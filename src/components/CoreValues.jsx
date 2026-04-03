import './CoreValues.css'
import { Users, Scale, Globe, Shield } from 'lucide-react'

const coreValues = [
  {
    id: "01",
    title: "People-Centered",
    desc: "We start from the needs and agency of affected communities.",
    icon: <Users size={24} />,
    color: "blue"
  },
  {
    id: "02",
    title: "Equity & Inclusion",
    desc: "Foregrounding the perspectives of women, youth, and marginalized groups.",
    icon: <Scale size={24} />,
    color: "orange"
  },
  {
    id: "03",
    title: "African Ownership",
    desc: "Aligning strictly with AU and REC frameworks rather than external templates.",
    icon: <Globe size={24} />,
    color: "green"
  },
  {
    id: "04",
    title: "Integrity",
    desc: "Absolute transparency regarding data gaps, assumptions, and uncertainties.",
    icon: <Shield size={24} />,
    color: "navy"
  }
]

function CoreValues() {
  return (
    <section className="core-values">
      <div className="cv-header">
        <div className="cv-label">
          <span className="cv-line"></span> ETHICS AND SAFEGUARDS
        </div>
        <h2 className="cv-title">Our Core Values</h2>
      </div>

      <div className="cv-grid">
        {coreValues.map((value) => (
          <div key={value.id} className="cv-card">
            <div className={`cv-icon-wrapper ${value.color}`}>
              {value.icon}
            </div>
            <div className="cv-badge">
              <span>CORE VALUE</span>
              <span>{value.id}</span>
            </div>
            <h3 className="cv-card-title">{value.title}</h3>
            <p className="cv-card-desc">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues