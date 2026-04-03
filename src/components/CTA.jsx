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
          <Link to="/contact" className="btn-outline">Start a conversation</Link>
          <Link to="/our-work" className="btn-outline">View our solutions</Link>
        </div>
      </div>
    </section>
  )
}

export default CTA