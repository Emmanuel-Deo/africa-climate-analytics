import { useNavigate } from 'react-router-dom'
import './Hero.css'
import heroMap from '../assets/heroMap.svg'

const orbitStats = [
  { value: '5', label: 'AU Sub-Regions', sub: 'All covered', position: 'top-left' },
  { value: '12+', label: 'Assignments', sub: 'Successfully completed', position: 'top-right' },
  { value: '55', label: 'AU Member States', sub: 'Continental coverage', position: 'bottom-left' },
  { value: '7', label: 'Service Pillars', sub: 'Climate action support', position: 'bottom-right' }
]

const orbitTags = [
  { label: 'Climate Risk Analytics', color: 'orange', position: 'top' },
  { label: 'Policy & Planning', color: 'green', position: 'right' },
  { label: 'MEL & Evidence', color: 'navy', position: 'bottom' },
  { label: 'Climate Finance', color: 'orange', position: 'left' }
]

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-navy">Climate</span><br />
            <span className="text-orange">Intelligence</span><br />
            <span className="text-green">for Africa.</span>
          </h1>
        </div>

        <div className="hero-map">
          <img src={heroMap} alt="Geometric Africa Map" className="hero-map-image" />

          {orbitStats.map((stat) => (
            <div key={stat.label} className={`hero-orbit-card orbit-${stat.position}`}>
              <span className="orbit-card-value">{stat.value}</span>
              <span className="orbit-card-label">{stat.label}</span>
              <span className="orbit-card-sub">{stat.sub}</span>
            </div>
          ))}

          {orbitTags.map((tag) => (
            <div key={tag.label} className={`hero-orbit-tag orbit-${tag.position}`}>
              <span className={`orbit-tag-dot dot-${tag.color}`}></span>
              {tag.label}
            </div>
          ))}
        </div>

        <div className="hero-details">
          <p className="hero-description">
            Africa-based climate decision-support institution translating climate data
            and evidence into resilient policies, investments and programmes for
            governments, regional bodies and civil society.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => navigate('/what-we-do')}>Explore what we do</button>
            <button className="hero-btn-secondary" onClick={() => navigate('/funding-partnerships')}>For funders &amp; partners</button>
          </div>
          <div className="hero-stats-mobile">
            {orbitStats.map((stat) => (
              <div key={stat.label} className="hero-stat-item">
                <span className="hero-stat-number">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
