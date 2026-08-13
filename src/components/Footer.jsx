import './Footer.css'
import footerLogo from '../assets/updated-logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/">
            <img src={footerLogo} alt="ACA Logo" className="footer-logo" />
          </Link>
          <p className="brand-description">
            Africa-based climate decision-support institution translating climate
            data and evidence into resilient policies, investments and programmes.
          </p>
          <p className="location-tag">Nairobi, Kenya</p>
          <a href="mailto:partnerships@africaclimateanalytics.org" className="footer-email">
            partnerships@africaclimateanalytics.org
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>About ACA</h4>
            <Link to="/about">About</Link>
            <Link to="/team-governance">Team &amp; Governance</Link>
            <Link to="/assignments-impact">Assignments &amp; Impact</Link>
            <Link to="/insights">Insights</Link>
          </div>

          <div className="footer-col">
            <h4>Work With ACA</h4>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/who-we-serve">Who We Serve</Link>
            <Link to="/funding-partnerships">Funding &amp; Partnerships</Link>
            <Link to="/contact">Contact / Work With Us</Link>
          </div>

          <div className="footer-col">
            <h4>Policies &amp; Safeguards</h4>
            <Link to="/about/data-governance-research-ethics-safeguards">Data Governance, Research Ethics &amp; Safeguards</Link>
            <Link to="/website-privacy-cookie-notice">Website Privacy &amp; Cookie Notice</Link>
            <Link to="/accessibility">Accessibility Statement</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:privacy@africaclimateanalytics.org">privacy@africaclimateanalytics.org</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Africa Climate Analytics</span>
      </div>
    </footer>
  )
}

export default Footer
