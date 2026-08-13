import './LeadershipGovernance.css'
import { ShieldCheck } from 'lucide-react'

function LeadershipGovernance() {
  return (
    <section className="leadership-governance">
      <div className="lg-block">
        <div className="lg-label">
          <span className="lg-line"></span> LEADERSHIP &amp; CORE TEAM
        </div>
        <h2 className="lg-title">Team profiles coming soon</h2>
        <p className="lg-text">
          We are finalising approved biographies and photographs for our leadership
          and core team. This section will introduce the people leading ACA's climate
          and environmental analytics, policy and institutional design, data and
          decision analytics, monitoring, evaluation and learning, and applied
          research work.
        </p>
      </div>

      <div className="lg-block lg-block-alt">
        <div className="lg-label">
          <span className="lg-line"></span> BOARD &amp; GOVERNANCE
        </div>
        <h2 className="lg-title">Africa-centred governance</h2>
        <div className="lg-governance">
          <div className="lg-governance-icon">
            <ShieldCheck size={28} />
          </div>
          <p className="lg-text">
            ACA is governed by a Board that provides strategic oversight, ethical
            guidance and high-level partnership brokering. Our Board Charter and Board
            Skills and Diversity Framework emphasise Africa-centred governance,
            integrity, transparency, equity and inclusion. Board member profiles will
            be published here once formally approved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LeadershipGovernance
