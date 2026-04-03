import './WhyUs.css'

const strengths = [
  {
    id: "01",
    title: "Africa-centered perspective",
    desc: "Africa-based and Africa-focused, with deep understanding of institutions, data systems, political economy and implementation realities that shape climate action on the continent.",
    color: "navy"
  },
  {
    id: "02",
    title: "Decision-oriented analytics",
    desc: "We move beyond reports and one-off studies. Our analytics are explicitly designed to answer the concrete questions faced by policymakers, programme managers and advocates.",
    color: "orange"
  },
  {
    id: "03",
    title: "Integrated services",
    desc: "We combine risk analytics, policy support, data tools, climate finance, MEL, research and capacity building — supporting partners from problem framing through to scaling.",
    color: "green"
  },
  {
    id: "04",
    title: "Partnership & capacity building",
    desc: "We work as long-term partners, not external experts. We co-design, embed tools into existing systems and strengthen institutional capacity so analytics become business as usual.",
    color: "blue"
  }
]

function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-header">
        <div className="label">
          <span className="line"></span> WHY AFRICA CLIMATE ANALYTICS
        </div>
        <h2 className="why-us-title">What makes us different</h2>
      </div>

      <div className="strengths-grid">
        {strengths.map((s) => (
          <div key={s.id} className="strength-card">
            <div className="strength-badge">
              <span className={`dot ${s.color}`}></span>
              <div className="badge-text">
                <span>CORE STRENGTH</span>
                <span>{s.id}</span>
              </div>
            </div>
            <h3 className="strength-title">{s.title}</h3>
            <p className="strength-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs