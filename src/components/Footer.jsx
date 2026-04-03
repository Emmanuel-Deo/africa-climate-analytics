import './Footer.css'
import footerLogo from '../assets/footerLogo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={footerLogo} alt="ACA Logo" className="footer-logo" />
          <p className="brand-description">
            Decision-grade climate analytics, evidence and advisory support for 
            African institutions and communities.
          </p>
          <p className="location-tag">Nairobi, Kenya</p>
        </div>

        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Africa Climate Analytics</span>
      </div>
    </footer>
  )
}

export default Footer