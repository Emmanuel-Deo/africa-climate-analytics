import './HybridModel.css'
import { Link } from 'react-router-dom'

function HybridModel() {
  return (
    <section className="hybrid-model">
      <div className="hm-container">
        <div className="hm-label">
          <span className="hm-line"></span> OUR HYBRID INSTITUTIONAL MODEL
        </div>
        <p className="hm-text">
          ACA combines public-interest think-tank functions with mission-aligned
          consulting and technical assistance work. We deliver public goods and
          continental evidence while providing bespoke support to programmes,
          facilities and investment pipelines, under a diversified funding and
          partnership model.
        </p>
        <Link to="/funding-partnerships" className="hm-link">See our funding and partnerships approach →</Link>
      </div>
    </section>
  )
}

export default HybridModel
