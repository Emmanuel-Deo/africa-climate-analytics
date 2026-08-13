import PageHero from '../components/PageHero'
import './PolicyPage.css'

const commitments = [
  {
    title: "Lawful and context-specific compliance",
    desc: "We comply with applicable data protection and research laws in Kenya and in the countries where we work, adapting our practices to local legal and cultural context."
  },
  {
    title: "Privacy, dignity and informed participation",
    desc: "We seek informed, voluntary participation in our research and data collection, and treat the privacy and dignity of individuals and communities as a starting point, not an afterthought."
  },
  {
    title: "Protection of sensitive and higher-risk data",
    desc: "Data relating to vulnerable groups, protection concerns, conflict-sensitive contexts or personally identifiable information is subject to additional safeguards, minimisation and access controls."
  },
  {
    title: "Data security and controlled access",
    desc: "We use access controls, secure storage and defined data-handling procedures to protect information we hold on behalf of partners, participants and clients."
  },
  {
    title: "Responsible sharing and publication",
    desc: "We only publish or share data, findings and client information with explicit permission, and we anonymise or aggregate data where individual identification is not required."
  },
  {
    title: "Responsible digital, AI and geospatial practice",
    desc: "Where we use digital, AI-enabled or geospatial tools, we apply human oversight, bias awareness and do-no-harm principles, and are transparent about their role in our analysis."
  },
  {
    title: "African ownership and institutional capacity",
    desc: "We design our data practices to strengthen, not bypass, African institutional ownership of data and evidence, and to build local capacity to manage and govern it."
  }
]

const safeguardStages = [
  {
    stage: "Before data collection or access",
    desc: "We define the purpose, scope and legal basis for data collection or access, identify risks, and agree consent, permissions and data-sharing terms with partners."
  },
  {
    stage: "During collection and analysis",
    desc: "We apply agreed data-handling procedures, limit access to authorised team members, and document assumptions, sources and methodological choices."
  },
  {
    stage: "Before sharing or publication",
    desc: "We review outputs for sensitive content, confirm disclosure permissions with clients and partners, and anonymise or aggregate data as needed."
  },
  {
    stage: "At project close",
    desc: "We securely archive or dispose of project data in line with agreed retention terms and partner requirements."
  }
]

function DataGovernance() {
  return (
    <>
      <PageHero
        label="ABOUT / DATA GOVERNANCE, RESEARCH ETHICS & SAFEGUARDS"
        title="Data Governance, Research Ethics & Safeguards"
        description="A concise, public statement of ACA's commitment to lawful, ethical and secure data use across research, monitoring, evaluation, analytics and digital work."
      />

      <div className="policy-page">
        <nav className="policy-anchor-nav">
          <a href="#our-commitments">Our Commitments</a>
          <a href="#how-we-apply-safeguards">How We Apply Safeguards</a>
          <a href="#institutional-framework">Our Institutional Framework</a>
          <a href="#questions-concerns">Questions &amp; Concerns</a>
        </nav>

        <section id="our-commitments" className="policy-section">
          <h2>Our Commitments</h2>
          <div className="policy-grid">
            {commitments.map((c) => (
              <div key={c.title} className="policy-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-we-apply-safeguards" className="policy-section policy-section-alt">
          <h2>How We Apply Safeguards</h2>
          <div className="policy-steps">
            {safeguardStages.map((s, i) => (
              <div key={s.stage} className="policy-step">
                <span className="policy-step-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.stage}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="institutional-framework" className="policy-section">
          <h2>Our Institutional Framework</h2>
          <p className="policy-text">
            These commitments are underpinned by ACA's internal governance and
            safeguarding policies, including data protection, research ethics and
            child- and community-safeguarding frameworks approved by our Board. As
            these documents are finalised and formally approved for public release,
            we will publish them here for download.
          </p>
        </section>

        <section id="questions-concerns" className="policy-section policy-section-alt">
          <h2>Questions, Concerns &amp; Data Rights</h2>
          <p className="policy-text">
            If you have questions about how we handle data, wish to exercise data
            rights, or want to raise a concern, please contact us at{' '}
            <a href="mailto:privacy@africaclimateanalytics.org">privacy@africaclimateanalytics.org</a>.
          </p>
        </section>

        <p className="policy-updated">Last updated: August 2026</p>
      </div>
    </>
  )
}

export default DataGovernance
