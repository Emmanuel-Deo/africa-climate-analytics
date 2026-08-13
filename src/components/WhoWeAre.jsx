import './WhoWeAre.css'
import { Link } from 'react-router-dom'

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="wwa-container">
        <p className="wwa-text">
          Africa Climate Analytics (ACA) is an Africa-based, not-for-profit climate
          analytics and evidence organisation registered in Kenya as a company limited
          by guarantee. We generate and translate climate-related data, analysis and
          evidence into decision-ready insights for African public institutions,
          regional bodies, civil-society actors and selected private-sector partners.
        </p>
        <Link to="/about" className="wwa-link">Learn more about ACA →</Link>
      </div>
    </section>
  )
}

export default WhoWeAre
