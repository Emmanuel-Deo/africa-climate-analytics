import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import acalogo from '../assets/acalogo.png'
import './Navbar.css'

function scrollToTop() {
  window.scrollTo(0, 0)
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={scrollToTop}>
        <img src={acalogo} alt="Africa Climate Analytics" />
      </NavLink>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => { setIsOpen(false); scrollToTop(); }}>Home</NavLink>
        <NavLink to="/about" onClick={() => { setIsOpen(false); scrollToTop(); }}>About Us</NavLink>
        <NavLink to="/our-work" onClick={() => { setIsOpen(false); scrollToTop(); }}>Our Work</NavLink>
        <NavLink to="/contact" className="nav-cta" onClick={() => { setIsOpen(false); scrollToTop(); }}>Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar