import './AboutHero.css'
import landscapeImg from '../assets/Africa landscape.jpg'

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${landscapeImg})` }}
    >
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
      </div>

      <span className="about-hero-credit">Laikipia, Kenya &mdash; Photo by Leon Pauleikhoff</span>
    </section>
  )
}

export default AboutHero
