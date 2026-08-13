import './AboutHero.css'
import landscapeImg from '../assets/Africa landscape.jpg'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
      <div className="about-hero-content">
        <h1 className="about-hero-title">
          About Africa Climate Analytics
        </h1>
        <p className="about-hero-subtitle">
          Africa Climate Analytics is an Africa-based climate analytics and evidence
          organisation established as a company limited by guarantee and incorporated
          in Kenya under the Companies Act. We are a not-for-profit entity whose mandate
          is to generate and translate climate-related data, analysis and evidence into
          decision-ready insights for African public institutions, regional bodies,
          civil-society organisations and selected private-sector actors.
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
        <figure className="about-hero-figure">
          <img
            src={landscapeImg}
            alt="A herd of elephants at a watering hole with Mount Kenya in the background, Laikipia"
          />
          <figcaption>
            Laikipia, Kenya &mdash; Photo by Leon Pauleikhoff
          </figcaption>
        </figure>
      </div>
      </div>
    </section>
  )
}

export default AboutHero