import './Hero.css'
import heroMap from '../assets/heroMap.svg'

function Hero() {
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
          <button className="hero-btn-primary">Explore our work</button>
          <button className="hero-btn-secondary">Partner with us</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">54</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">AU sub-regions</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Service pillars</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Assignments</span>
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