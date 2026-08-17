import './LeadershipGovernance.css'
import { Link } from 'react-router-dom'
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

function TeamCard({ person }) {
  return (
    <div className="team-card">
      {person.image ? (
        <img src={person.image} alt={person.name} className="team-card-photo" />
      ) : (
        <div className="team-card-avatar">{initials(person.name)}</div>
      )}
      <h3 className="team-card-name">{person.name}</h3>
      <p className="team-card-role">{person.role}</p>
      <p className="team-card-summary">{person.summary}</p>
      <Link to={`/team-governance/${person.id}`} className="team-card-link">
        Read bio →
      </Link>
    </div>
  )
}

function LeadershipGovernance() {
  const leadership = team.filter((p) => p.group === "leadership")
  const board = team.filter((p) => p.group === "board")

  return (
    <section className="leadership-governance">
      <div className="lg-block">
        <div className="lg-label">
          <span className="lg-line"></span> LEADERSHIP &amp; CORE TEAM
        </div>
        <h2 className="lg-title">The people leading ACA</h2>
        <p className="lg-text">
          Africa Climate Analytics brings together an interdisciplinary team spanning
          climate and environmental analytics, policy and institutional design, data
          and decision analytics, monitoring, evaluation and learning, and applied research.
        </p>
        <div className="team-grid">
          {leadership.map((person) => (
            <TeamCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      <div className="lg-block lg-block-alt">
        <div className="lg-label">
          <span className="lg-line"></span> BOARD &amp; GOVERNANCE
        </div>
        <h2 className="lg-title">Africa-centred governance</h2>
        <p className="lg-text">
          ACA is governed by a Board that provides strategic oversight, ethical
          guidance and high-level partnership brokering. Our Board Charter and Board
          Skills and Diversity Framework emphasise Africa-centred governance,
          integrity, transparency, equity and inclusion.
        </p>
        <div className="team-grid">
          {board.map((person) => (
            <TeamCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipGovernance
