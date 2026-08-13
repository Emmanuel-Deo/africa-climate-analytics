import './FundingModel.css'

const fundingStreams = [
  {
    title: "Core and institutional grants",
    desc: "Multi-year, mainly unrestricted support that sustains leadership, governance, systems, communications, public-interest research and business development."
  },
  {
    title: "Multi-year programme and technical facility funding",
    desc: "Larger grants or contracts that provide the main operational engine for staff, delivery platforms, data systems, evidence generation and institutional accompaniment."
  },
  {
    title: "Consulting and fee-for-service assignments",
    desc: "Flexible income streams for bespoke technical assistance, concept development and advisory work, priced for full-cost recovery and used to reinforce institutional resilience."
  },
  {
    title: "Innovation, seed and challenge funds",
    desc: "Targeted resources for tool development, pilots, digital products and methodology innovation."
  },
  {
    title: "Non-financial and strategic contributions",
    desc: "Office sharing, expert secondments, pro bono technical support, convening partnerships and in-kind systems support."
  }
]

const funders = [
  {
    title: "Bilateral development agencies",
    desc: "Agencies that support climate policy, governance, adaptation, knowledge systems and African institutional capacity. They value regional public goods, robust evidence and stronger partner institutions, and can provide both institutional support and programme grants."
  },
  {
    title: "Philanthropic foundations & re-granting organisations",
    desc: "Foundations and intermediaries focused on climate, justice, research and African voice. They are often best suited for backing public-interest agendas, thought leadership, experimentation and long-term institutional strengthening."
  },
  {
    title: "Multilateral and regional climate funds",
    desc: "Funds and facilities that finance adaptation, resilience, climate-related infrastructure and readiness. They need robust analytics, monitoring, evaluation and learning systems, data platforms and pipeline development to underpin their investments."
  },
  {
    title: "African Union, RECs & continental platforms",
    desc: "Continental and regional institutions leading climate strategies, action plans and flagship programmes. ACA can serve as a long-term technical and evidence partner, facility implementer or embedded advisory team."
  },
  {
    title: "Consulting clients & mission-aligned service buyers",
    desc: "NGOs, networks, development finance institutions, programme management units, corporates and consortia seeking high-value technical assistance. These assignments provide flexible income, practical insight and entry points into larger partnerships."
  }
]

function FundingModel() {
  return (
    <section className="funding-model">
      <div className="fm-header">
        <div className="fm-label">
          <span className="fm-line"></span> OUR FUNDING MODEL
        </div>
        <h2 className="fm-title">A diversified hybrid funding model</h2>
        <p className="fm-intro">
          Africa Climate Analytics operates a diversified hybrid funding model that
          combines core support, programme funding, consulting income, innovation
          resources and non-financial contributions.
        </p>
      </div>

      <div className="fm-grid">
        {fundingStreams.map((s) => (
          <div key={s.title} className="fm-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="fm-note">
        We aim for a balanced funding model in which core and institutional grants,
        programme and facility funding, consulting income and innovation resources
        each contribute meaningfully to ACA's sustainability and independence. Core
        funding provides stability and space for public-interest research. Programme
        and facility funding form the main delivery engine. Consulting revenue is
        explicitly priced for full-cost recovery and used to strengthen, not displace,
        ACA's mission-driven evidence work.
      </p>

      <div className="fm-header fm-header-secondary">
        <h2 className="fm-title">Who funds and partners with ACA</h2>
        <p className="fm-intro">
          We work with a range of funders and strategic partners whose mandates
          intersect with climate analytics, governance, adaptation, finance and
          institutional capacity in Africa.
        </p>
      </div>

      <div className="fm-grid">
        {funders.map((f) => (
          <div key={f.title} className="fm-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FundingModel
