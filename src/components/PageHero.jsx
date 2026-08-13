import './PageHero.css'
import { Link } from 'react-router-dom'

function PageHero({ label, title, description, cta }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        {label && (
          <div className="page-hero-label">
            <span className="page-hero-line"></span> {label}
          </div>
        )}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}
        {cta && (
          <Link to={cta.to} className="page-hero-btn">{cta.label}</Link>
        )}
      </div>
    </section>
  )
}

export default PageHero
