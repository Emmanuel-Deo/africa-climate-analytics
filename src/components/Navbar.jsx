import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import acalogo from '../assets/acalogo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={acalogo} alt="Africa Climate Analytics" />
      </NavLink>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
        <NavLink to="/our-work" onClick={() => setIsOpen(false)}>Our Work</NavLink>
        <NavLink to="/contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar