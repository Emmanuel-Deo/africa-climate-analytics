import PageHero from '../components/PageHero'
import './Insights.css'
import PageCTA from '../components/PageCTA'
import { Users, Sprout, ClipboardCheck, Landmark, Database } from 'lucide-react'

const categories = [
  {
    icon: <Users size={22} />,
    title: "Climate-related human mobility",
    color: "blue"
  },
  {
    icon: <Sprout size={22} />,
    title: "Adaptation and locally led adaptation",
    color: "green"
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Climate-responsive monitoring, evaluation and learning",
    color: "orange"
  },
  {
    icon: <Landmark size={22} />,
    title: "Climate finance justice and readiness",
    color: "navy"
  },
  {
    icon: <Database size={22} />,
    title: "Climate data, decision tools and digital safeguards",
    color: "blue"
  }
]

function Insights() {
  return (
    <>
      <PageHero
        label="INSIGHTS"
        title="Insights"
        description="Africa Climate Analytics publishes insight notes, policy briefs and synthesis products that translate our analytics and research into accessible narratives for policymakers, practitioners and funders."
      />

      <section className="insights-categories">
        <h2 className="ic-heading">Thematic categories</h2>
        <div className="ic-grid">
          {categories.map((c) => (
            <div key={c.title} className="ic-card">
              <div className={`ic-icon ${c.color}`}>{c.icon}</div>
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="insights-empty">
        <div className="ie-content">
          <h2>Our first publications are on the way</h2>
          <p>
            We are preparing our first insight notes and policy briefs across these
            themes. Check back soon, or get in touch to discuss a topic with our team.
          </p>
        </div>
      </section>

      <PageCTA
        title="Have a topic you'd like us to explore?"
        description="Tell us what evidence or insight would be most useful to your work."
        buttons={[
          { label: "Discuss this topic with ACA", to: "/contact" },
          { label: "Explore ACA services", to: "/what-we-do" }
        ]}
      />
    </>
  )
}

export default Insights
