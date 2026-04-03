import { NavLink } from 'react-router-dom'
import acalogo from '../assets/acalogo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={acalogo} alt="Africa Climate Analytics" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/our-work">Our Work</NavLink>
        <NavLink to="/contact" className="nav-cta">Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar