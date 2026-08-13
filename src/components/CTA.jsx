import './CTA.css'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2 className="cta-title">
            Ready to bring climate intelligence into your decisions?
          </h2>
          <p className="cta-description">
            Whether you need a focused study, a flagship initiative or 
            long-term advisory support — we are ready to partner with you.
          </p>
        </div>
        
        <div className="cta-buttons">
          <Link to="/contact?interest=rapid-diagnostic" className="btn-outline">Request a rapid diagnostic</Link>
          <Link to="/contact?interest=flagship-initiative" className="btn-outline">Discuss a flagship initiative</Link>
        </div>
      </div>
    </section>
  )
}

export default CTA