import { useNavigate } from 'react-router-dom'
import './Hero.css'
import heroMap from '../assets/heroMap.svg'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-navy">Climate</span><br />
          <span className="text-orange">Intelligence</span><br />
          <span className="text-green">for Africa.</span>
        </h1>
        <p className="hero-description">
          Translating climate data and evidence into decisions that matter — 
          for governments, regional bodies and communities designing 
          climate-resilient futures across the continent.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={() => navigate('/our-work')}>Explore our work</button>
          <button className="hero-btn-secondary" onClick={() => navigate('/contact')}>Partner with us</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-number">54+</span>
            <span className="hero-stat-label">Countries</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">5</span>
            <span className="hero-stat-label">AU sub-regions</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">7</span>
            <span className="hero-stat-label">Service pillars</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">12+</span>
            <span className="hero-stat-label">Assignments</span>
          </div>
        </div>
      </div>
      <div className="hero-map">
        <img src={heroMap} alt="Geometric Africa Map" className="hero-map-image" />
      </div>
    </section>
  )
}

export default Hero