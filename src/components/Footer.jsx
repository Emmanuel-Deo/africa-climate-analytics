import './Footer.css'
import footerLogo from '../assets/footerLogo.png'
import { Link } from 'react-router-dom'

function scrollToTop() {
  window.scrollTo(0, 0)
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" onClick={scrollToTop}>
            <img src={footerLogo} alt="ACA Logo" className="footer-logo" />
          </Link>
          <p className="brand-description">
            Decision-grade climate analytics, evidence and advisory support for 
            African institutions and communities.
          </p>
          <p className="location-tag">Nairobi, Kenya</p>
          <a href="mailto:info@africaclimateanalytics.org" className="footer-email">
            info@africaclimateanalytics.org
          </a>
        </div>

        <div className="footer-nav">
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <Link to="/our-work" onClick={scrollToTop}>Our Work</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Africa Climate Analytics</span>
      </div>
    </footer>
  )
}

export default Footer