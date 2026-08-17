import { useParams, Link } from 'react-router-dom'
import './TeamMemberDetail.css'
import team from '../data/team'

function initials(name) {
  return name
    .replace(/^Dr\.?\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const teamById = Object.fromEntries(team.map((p) => [p.id, p]))

function TeamMemberDetail() {
  const { id } = useParams()
  const person = teamById[id]

  if (!person) {
    return (
      <div className="tm-not-found">
        <h2>Profile not found</h2>
        <Link to="/team-governance" className="tm-back-btn">Back to Team &amp; Governance</Link>
      </div>
    )
  }

  return (
    <section className="team-member-detail">
      <div className="tm-container">
        <Link to="/team-governance" className="tm-back">
          <span>←</span> Back to Team &amp; Governance
        </Link>

        <div className="tm-header">
          {person.image ? (
            <img src={person.image} alt={person.name} className="tm-photo" />
          ) : (
            <div className="tm-avatar">{initials(person.name)}</div>
          )}
          <div className="tm-header-text">
            <h1 className="tm-name">{person.name}</h1>
            <p className="tm-role">{person.role}</p>
          </div>
        </div>

        <div className="tm-bio">
          {person.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMemberDetail
