import './PillarsDetailed.css'
import {
  Clock,
  Briefcase,
  LayoutGrid,
  TrendingUp,
  Target,
  Search,
  Users
} from 'lucide-react'

const pillars = [
  {
    anchor: "pillar-1",
    number: "01",
    title: "Climate risk, vulnerability and resilience analytics",
    icon: <Clock size={22} />,
    color: "blue",
    intro: "We quantify how climate hazards interact with exposure and vulnerability to affect people, assets and systems, today and under future scenarios. Our work ranges from national and regional risk overviews to detailed analyses of specific sectors, geographies and population groups.",
    services: [
      "Climate risk and vulnerability assessments.",
      "Hotspot and resilience gap mapping.",
      "Asset- and portfolio-level risk screening for infrastructure and services.",
      "Prioritisation of adaptation options."
    ],
    closing: "These analytics provide a rigorous foundation for policies, regulations, investments, advocacy and programme design."
  },
  {
    anchor: "pillar-2",
    number: "02",
    title: "Climate policy, planning and governance support",
    icon: <Briefcase size={22} />,
    color: "orange",
    intro: "We translate climate evidence into policies, plans and institutional arrangements that African public institutions and regional bodies can implement and sustain.",
    services: [
      "Technical inputs to NDCs, NAPs, long-term low-emission development strategies and sector strategies.",
      "Climate-responsive public investment planning and appraisal.",
      "Design of institutional and coordination mechanisms for climate governance.",
      "Policy and regulatory reviews and reform support."
    ],
    closing: "This work helps governments and regional bodies move from climate commitments to implementable, resourced plans."
  },
  {
    anchor: "pillar-3",
    number: "03",
    title: "Climate data, modelling and decision analytics",
    icon: <LayoutGrid size={22} />,
    color: "green",
    intro: "We turn fragmented climate, socio-economic and programme data into integrated information systems and practical decision tools that partners can sustain themselves.",
    services: [
      "Data discovery, integration and management.",
      "Dashboards, geospatial maps and risk heatmaps.",
      "Scenario analysis and predictive modelling.",
      "Screening tools and scorecards aligned with policy and investment workflows."
    ],
    closing: "These tools move institutions beyond static reports into routine, data-driven planning and management."
  },
  {
    anchor: "pillar-4",
    number: "04",
    title: "Climate finance, ESG and investment analytics",
    icon: <TrendingUp size={22} />,
    color: "navy",
    intro: "We connect climate risk analytics to financial decisions, helping partners prioritise resilient, low-emission investments and meet emerging disclosure expectations.",
    services: [
      "Physical and transition climate risk assessments across portfolios, assets and supply chains.",
      "Identification and prioritisation of resilient, low-emission investment opportunities.",
      "Climate finance pipeline design and readiness support.",
      "Development of climate-aligned ESG metrics and disclosure tools."
    ],
    closing: "This pillar helps public investment planners, development finance institutions, banks and corporates align capital with climate resilience."
  },
  {
    anchor: "pillar-5",
    number: "05",
    title: "Monitoring, evaluation, learning and impact analytics",
    icon: <Target size={22} />,
    color: "blue",
    intro: "We design climate-responsive monitoring, evaluation and learning (MEL) systems that combine quantitative and qualitative methods to track what is working, for whom and why.",
    services: [
      "Climate-responsive theories of change and indicator frameworks.",
      "Baselines, longitudinal studies and impact evaluations.",
      "Learning reviews and evidence synthesis.",
      "Communication of results to funders, policymakers and communities."
    ],
    closing: "These systems help programmes demonstrate results, adapt in real time and strengthen accountability."
  },
  {
    anchor: "pillar-6",
    number: "06",
    title: "Applied research and insight products",
    icon: <Search size={22} />,
    color: "orange",
    intro: "We produce policy-relevant, action-oriented research that fills decision-critical evidence gaps facing African institutions and communities.",
    services: [
      "Thematic and sectoral studies and synthesis reviews.",
      "Institutional and political-economy analyses.",
      "State-of-resilience and state-of-adaptation reports.",
      "Accessible insight products for policymakers, practitioners and the public."
    ],
    closing: "This research equips partners with authoritative evidence for negotiations, advocacy and programme design."
  },
  {
    anchor: "pillar-7",
    number: "07",
    title: "Capacity building and advisory support",
    icon: <Users size={22} />,
    color: "green",
    intro: "We embed capacity strengthening throughout our work so that African institutions can sustain and deepen climate analytics over time, rather than depend on one-off external support.",
    services: [
      "Tailored training, coaching and accompaniment.",
      "Toolkit and methodology development.",
      "Long-term embedded advisory arrangements.",
      "Institutional strengthening for data systems and coordination."
    ],
    closing: "This pillar reflects our commitment to partnership over extraction — capacity building is integrated, not an afterthought."
  }
]

function PillarsDetailed() {
  return (
    <section className="pillars-detailed">
      <div className="pd-header">
        <div className="pd-label">
          <span className="pd-line"></span> OUR SEVEN SERVICE PILLARS
        </div>
        <h2 className="pd-title">A value chain from risk to results</h2>
        <p className="pd-subtitle">
          Together, these pillars enable our partners to understand climate risks and
          resilience gaps, integrate evidence into policies and plans, build usable
          data and decision tools, mobilise and target climate finance, track and
          learn from results, generate timely insights, and strengthen institutional
          capacity.
        </p>
      </div>

      <div className="pd-list">
        {pillars.map((pillar) => (
          <div key={pillar.anchor} id={pillar.anchor} className="pd-card">
            <div className="pd-card-top">
              <div className={`pd-icon ${pillar.color}`}>{pillar.icon}</div>
              <span className="pd-number">{pillar.number}</span>
            </div>
            <h3 className="pd-card-title">{pillar.title}</h3>
            <p className="pd-intro">{pillar.intro}</p>
            <p className="pd-services-label">Typical services include:</p>
            <ul className="pd-services">
              {pillar.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="pd-closing">{pillar.closing}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PillarsDetailed
