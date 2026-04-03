import './Stats.css'

const stats = [
  {
    value: "54",
    suffix: "+",
    label: "COUNTRIES COVERED",
    subtext: "Africa-wide mandate",
    color: "orange-plus"
  },
  {
    value: "5",
    suffix: "",
    label: "AU SUB-REGIONS",
    subtext: "Full continental reach",
    color: "orange-num"
  },
  {
    value: "7",
    suffix: "",
    label: "SERVICE PILLARS",
    subtext: "Integrated offerings",
    color: "green-num"
  },
  {
    value: "12",
    suffix: "+",
    label: "MAJOR ASSIGNMENTS",
    subtext: "AU-level engagements",
    color: "orange-plus"
  }
]

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className={`stat-number ${stat.color}`}>
              <span className="num">{stat.value}</span>
              {stat.suffix && <span className="suffix">{stat.suffix}</span>}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-subtext">{stat.subtext}</div>
            {index !== stats.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats