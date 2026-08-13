import '../components/CTA.css'
import { Link } from 'react-router-dom'

function PageCTA({ title, description, buttons }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-text">
          <h2 className="cta-title">{title}</h2>
          {description && <p className="cta-description">{description}</p>}
        </div>

        <div className="cta-buttons">
          {buttons.map((btn) => (
            <Link key={btn.label} to={btn.to} className="btn-outline">{btn.label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PageCTA
