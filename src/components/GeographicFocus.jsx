import './GeographicFocus.css'

const hotspots = [
  "Sahelian and Horn of Africa drylands",
  "Coastal and urban hotspots",
  "Climate-sensitive corridors",
  "Transboundary basins"
]

function GeographicFocus() {
  return (
    <section className="geo-focus">
      <div className="geo-container">
        <div className="geo-label">
          <span className="geo-line"></span> GEOGRAPHIC FOCUS AND FOOTPRINT
        </div>
        <h2 className="geo-title">An Africa-wide mandate, sharpest where it matters most</h2>
        <p className="geo-text">
          We are an Africa-wide organisation with a primary focus on continental,
          regional and national work. We concentrate on contexts where climate risks,
          mobility dynamics and adaptation needs intersect most sharply with policy
          and investment decisions.
        </p>
        <div className="geo-tags">
          {hotspots.map((h) => (
            <span key={h} className="geo-tag">{h}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GeographicFocus
