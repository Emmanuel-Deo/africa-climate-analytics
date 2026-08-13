import './ImpactGlance.css'
import projects from '../data/projects'

function ImpactGlance() {
  const clientCount = new Set(
    projects.flatMap((p) => p.client.split(/,| and /i).map((c) => c.trim()))
  ).size

  return (
    <section className="impact-glance">
      <div className="ig-container">
        <div className="ig-item">
          <span className="ig-number">54+</span>
          <span className="ig-label">Countries under our Africa-wide mandate</span>
        </div>
        <div className="ig-item">
          <span className="ig-number">5</span>
          <span className="ig-label">African Union sub-regions covered</span>
        </div>
        <div className="ig-item">
          <span className="ig-number">{clientCount}+</span>
          <span className="ig-label">Continental & regional partners engaged</span>
        </div>
        <div className="ig-item">
          <span className="ig-number">{projects.length}+</span>
          <span className="ig-label">Flagship assignments delivered</span>
        </div>
      </div>
    </section>
  )
}

export default ImpactGlance
