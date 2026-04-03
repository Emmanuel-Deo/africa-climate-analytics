import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/our-work">Our Work</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
