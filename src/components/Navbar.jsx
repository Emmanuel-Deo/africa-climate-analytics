import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import acalogo from '../assets/updated-logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <img src={acalogo} alt="Africa Climate Analytics" />
        </NavLink>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/what-we-do" onClick={closeMenu}>What We Do</NavLink>
          <NavLink to="/who-we-serve" onClick={closeMenu}>Who We Serve</NavLink>
          <NavLink to="/assignments-impact" onClick={closeMenu}>Assignments &amp; Impact</NavLink>
          <NavLink to="/funding-partnerships" onClick={closeMenu}>Funding &amp; Partnerships</NavLink>
          <NavLink to="/insights" onClick={closeMenu}>Insights</NavLink>
          <NavLink to="/team-governance" onClick={closeMenu}>Team &amp; Governance</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Work With Us</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
