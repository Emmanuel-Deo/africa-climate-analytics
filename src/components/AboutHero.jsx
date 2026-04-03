import './AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h1 className="about-hero-title">
          Climate Analytics for Africa's Future
        </h1>
        <p className="about-hero-subtitle">
          Africa Climate Analytics is an Africa-based climate analytics and evidence organization established as a company limited by guarantee and incorporated in Kenya. We generate and translate climate-related data, analysis and evidence into decision-ready insights for African public institutions, regional bodies and civil-society organizations.
        </p>
        
        <div className="about-hero-details">
          <div className="detail-item">
            <span className="detail-label">Legal Form</span>
            <span className="detail-value">Company limited by guarantee (not-for-profit)</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Incorporation</span>
            <span className="detail-value">Incorporated in Kenya under the Companies Act</span>
          </div>
        </div>
      </div>
      <div className="about-hero-image">
        <div className="image-placeholder">
          <span>African landscape / Professional meeting image</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero