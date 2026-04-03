import './ValueProposition.css'

function ValueProposition() {
  return (
    <section className="value-prop">
      <div className="vp-header">
        <div className="vp-label">
          <span className="vp-line"></span> OUR VALUE PROPOSITION
        </div>
        <h2 className="vp-title">Where climate science meets public decisions</h2>
      </div>

      <div className="vp-graphic">
        <div className="vp-circle circle-1">
          <h4>Climate Science<br />& Data Analytics</h4>
        </div>
        <div className="vp-circle circle-2">
          <h4>Public Policy<br />& Governance</h4>
        </div>
        <div className="vp-circle circle-3">
          <h4>Development Practice<br />& Implementation</h4>
        </div>
        <div className="vp-center">
          <span>Africa Climate<br />Analytics</span>
        </div>
      </div>

      <p className="vp-caption">
        We sit at the intersection of these fields to help partners take better decisions, faster.
      </p>
    </section>
  )
}

export default ValueProposition